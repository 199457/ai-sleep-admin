import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { PlayRecordsVO, PlayRecordsForm, PlayRecordsQuery } from '@/api/sleeper/playRecords/types';

/**
 * 查询音乐播放记录列表
 * @param query
 * @returns {*}
 */

export const listPlayRecords = (query?: PlayRecordsQuery): AxiosPromise<PlayRecordsVO[]> => {
  return request({
    url: '/sleeper/playRecords/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询音乐播放记录详细
 * @param id
 */
export const getPlayRecords = (id: string | number): AxiosPromise<PlayRecordsVO> => {
  return request({
    url: '/sleeper/playRecords/' + id,
    method: 'get'
  });
};

/**
 * 新增音乐播放记录
 * @param data
 */
export const addPlayRecords = (data: PlayRecordsForm) => {
  return request({
    url: '/sleeper/playRecords',
    method: 'post',
    data: data
  });
};

/**
 * 修改音乐播放记录
 * @param data
 */
export const updatePlayRecords = (data: PlayRecordsForm) => {
  return request({
    url: '/sleeper/playRecords',
    method: 'put',
    data: data
  });
};

/**
 * 删除音乐播放记录
 * @param id
 */
export const delPlayRecords = (id: string | number | Array<string | number>) => {
  return request({
    url: '/sleeper/playRecords/' + id,
    method: 'delete'
  });
};
