<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div v-show="showSearch" class="mb-[10px]">
        <el-card shadow="hover">
          <el-form ref="queryFormRef" :model="queryParams" :inline="true">
            <el-form-item label="关联用户id" prop="userId">
              <el-input v-model="queryParams.userId" placeholder="请输入关联用户id" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="关联音乐id" prop="musicId">
              <el-input v-model="queryParams.musicId" placeholder="请输入关联音乐id" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
              <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </transition>

    <el-card shadow="never">
      <template #header>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button v-hasPermi="['sleeper:playRecords:add']" type="primary" plain icon="Plus" @click="handleAdd">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button v-hasPermi="['sleeper:playRecords:edit']" type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()"
              >修改</el-button
            >
          </el-col>
          <el-col :span="1.5">
            <el-button v-hasPermi="['sleeper:playRecords:remove']" type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()"
              >删除</el-button
            >
          </el-col>
          <el-col :span="1.5">
            <el-button v-hasPermi="['sleeper:playRecords:export']" type="warning" plain icon="Download" @click="handleExport">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @query-table="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="playRecordsList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column v-if="true" label="主键" align="center" prop="id" />
        <el-table-column label="关联用户id" align="center" prop="userId" />
        <el-table-column label="关联音乐id" align="center" prop="musicId" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button v-hasPermi="['sleeper:playRecords:edit']" link type="primary" icon="Edit" @click="handleUpdate(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button v-hasPermi="['sleeper:playRecords:remove']" link type="primary" icon="Delete" @click="handleDelete(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total > 0" v-model:page="queryParams.pageNum" v-model:limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>
    <!-- 添加或修改音乐播放记录对话框 -->
    <el-dialog v-model="dialog.visible" :title="dialog.title" width="500px" append-to-body>
      <el-form ref="playRecordsFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="关联用户id" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入关联用户id" />
        </el-form-item>
        <el-form-item label="关联音乐id" prop="musicId">
          <el-input v-model="form.musicId" placeholder="请输入关联音乐id" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="PlayRecords" lang="ts">
import { listPlayRecords, getPlayRecords, delPlayRecords, addPlayRecords, updatePlayRecords } from '@/api/sleeper/playRecords/index';
import { PlayRecordsVO, PlayRecordsQuery, PlayRecordsForm } from '@/api/sleeper/playRecords/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const playRecordsList = ref<PlayRecordsVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const playRecordsFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: PlayRecordsForm = {
  id: undefined,
  userId: undefined,
  musicId: undefined
};
const data = reactive<PageData<PlayRecordsForm, PlayRecordsQuery>>({
  form: { ...initFormData },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    userId: undefined,
    musicId: undefined,
    params: {}
  },
  rules: {
    id: [{ required: true, message: '主键不能为空', trigger: 'blur' }],
    userId: [{ required: true, message: '关联用户id不能为空', trigger: 'blur' }],
    musicId: [{ required: true, message: '关联音乐id不能为空', trigger: 'blur' }]
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询音乐播放记录列表 */
const getList = async () => {
  loading.value = true;
  const res = await listPlayRecords(queryParams.value);
  playRecordsList.value = res.rows;
  total.value = res.total;
  loading.value = false;
};

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
};

/** 表单重置 */
const reset = () => {
  form.value = { ...initFormData };
  playRecordsFormRef.value?.resetFields();
};

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
};

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields();
  handleQuery();
};

/** 多选框选中数据 */
const handleSelectionChange = (selection: PlayRecordsVO[]) => {
  ids.value = selection.map((item) => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
};

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = '添加音乐播放记录';
};

/** 修改按钮操作 */
const handleUpdate = async (row?: PlayRecordsVO) => {
  reset();
  const _id = row?.id || ids.value[0];
  const res = await getPlayRecords(_id);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = '修改音乐播放记录';
};

/** 提交按钮 */
const submitForm = () => {
  playRecordsFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.id) {
        await updatePlayRecords(form.value).finally(() => (buttonLoading.value = false));
      } else {
        await addPlayRecords(form.value).finally(() => (buttonLoading.value = false));
      }
      proxy?.$modal.msgSuccess('操作成功');
      dialog.visible = false;
      await getList();
    }
  });
};

/** 删除按钮操作 */
const handleDelete = async (row?: PlayRecordsVO) => {
  const _ids = row?.id || ids.value;
  await proxy?.$modal.confirm('是否确认删除音乐播放记录编号为"' + _ids + '"的数据项？').finally(() => (loading.value = false));
  await delPlayRecords(_ids);
  proxy?.$modal.msgSuccess('删除成功');
  await getList();
};

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download(
    'sleeper/playRecords/export',
    {
      ...queryParams.value
    },
    `playRecords_${new Date().getTime()}.xlsx`
  );
};

onMounted(() => {
  getList();
});
</script>
