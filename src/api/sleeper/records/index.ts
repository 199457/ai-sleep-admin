import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { RecordsVO, RecordsForm, RecordsQuery } from '@/api/sleeper/records/types';

/**
 * 查询聊天记录列表
 * @param query
 * @returns {*}
 */

export const listRecords = (query?: RecordsQuery): AxiosPromise<RecordsVO[]> => {
  return request({
    url: '/sleeper/records/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询聊天记录详细
 * @param id
 */
export const getRecords = (id: string | number): AxiosPromise<RecordsVO> => {
  return request({
    url: '/sleeper/records/' + id,
    method: 'get'
  });
};

/**
 * 新增聊天记录
 * @param data
 */
export const addRecords = (data: RecordsForm) => {
  return request({
    url: '/sleeper/records',
    method: 'post',
    data: data
  });
};

/**
 * 修改聊天记录
 * @param data
 */
export const updateRecords = (data: RecordsForm) => {
  return request({
    url: '/sleeper/records',
    method: 'put',
    data: data
  });
};

/**
 * 删除聊天记录
 * @param id
 */
export const delRecords = (id: string | number | Array<string | number>) => {
  return request({
    url: '/sleeper/records/' + id,
    method: 'delete'
  });
};
