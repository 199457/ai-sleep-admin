export interface PlayRecordsVO {
  /**
   * 主键
   */
  id: string | number;

  /**
   * 关联用户id
   */
  userId: string | number;

  /**
   * 关联音乐id
   */
  musicId: string | number;
}

export interface PlayRecordsForm extends BaseEntity {
  /**
   * 主键
   */
  id?: string | number;

  /**
   * 关联用户id
   */
  userId?: string | number;

  /**
   * 关联音乐id
   */
  musicId?: string | number;
}

export interface PlayRecordsQuery extends PageQuery {
  /**
   * 关联用户id
   */
  userId?: string | number;

  /**
   * 关联音乐id
   */
  musicId?: string | number;

  /**
   * 日期范围参数
   */
  params?: any;
}
