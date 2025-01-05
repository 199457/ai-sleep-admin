import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { MusicsVO, MusicsForm, MusicsQuery } from '@/api/sleeper/musics/types';

/**
 * 查询音乐列列表
 * @param query
 * @returns {*}
 */

export const listMusics = (query?: MusicsQuery): AxiosPromise<MusicsVO[]> => {
  return request({
    url: '/sleeper/musics/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询音乐列详细
 * @param id
 */
export const getMusics = (id: string | number): AxiosPromise<MusicsVO> => {
  return request({
    url: '/sleeper/musics/' + id,
    method: 'get'
  });
};

/**
 * 新增音乐列
 * @param data
 */
export const addMusics = (data: MusicsForm) => {
  return request({
    url: '/sleeper/musics',
    method: 'post',
    data: data
  });
};

/**
 * 修改音乐列
 * @param data
 */
export const updateMusics = (data: MusicsForm) => {
  return request({
    url: '/sleeper/musics',
    method: 'put',
    data: data
  });
};

/**
 * 删除音乐列
 * @param id
 */
export const delMusics = (id: string | number | Array<string | number>) => {
  return request({
    url: '/sleeper/musics/' + id,
    method: 'delete'
  });
};
