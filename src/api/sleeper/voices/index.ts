import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { VoicesVO, VoicesForm, VoicesQuery } from '@/api/sleeper/voices/types';

/**
 * 查询音色列表列表
 * @param query
 * @returns {*}
 */

export const listVoices = (query?: VoicesQuery): AxiosPromise<VoicesVO[]> => {
  return request({
    url: '/sleeper/voices/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询音色列表详细
 * @param id
 */
export const getVoices = (id: string | number): AxiosPromise<VoicesVO> => {
  return request({
    url: '/sleeper/voices/' + id,
    method: 'get'
  });
};

/**
 * 新增音色列表
 * @param data
 */
export const addVoices = (data: VoicesForm) => {
  return request({
    url: '/sleeper/voices',
    method: 'post',
    data: data
  });
};

/**
 * 修改音色列表
 * @param data
 */
export const updateVoices = (data: VoicesForm) => {
  return request({
    url: '/sleeper/voices',
    method: 'put',
    data: data
  });
};

/**
 * 删除音色列表
 * @param id
 */
export const delVoices = (id: string | number | Array<string | number>) => {
  return request({
    url: '/sleeper/voices/' + id,
    method: 'delete'
  });
};
