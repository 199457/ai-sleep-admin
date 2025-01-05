import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { UsersVO, UsersForm, UsersQuery } from '@/api/sleeper/users/types';

/**
 * 查询用户列列表
 * @param query
 * @returns {*}
 */

export const listUsers = (query?: UsersQuery): AxiosPromise<UsersVO[]> => {
  return request({
    url: '/sleeper/users/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询用户列详细
 * @param id
 */
export const getUsers = (id: string | number): AxiosPromise<UsersVO> => {
  return request({
    url: '/sleeper/users/' + id,
    method: 'get'
  });
};

/**
 * 新增用户列
 * @param data
 */
export const addUsers = (data: UsersForm) => {
  return request({
    url: '/sleeper/users',
    method: 'post',
    data: data
  });
};

/**
 * 修改用户列
 * @param data
 */
export const updateUsers = (data: UsersForm) => {
  return request({
    url: '/sleeper/users',
    method: 'put',
    data: data
  });
};

/**
 * 删除用户列
 * @param id
 */
export const delUsers = (id: string | number | Array<string | number>) => {
  return request({
    url: '/sleeper/users/' + id,
    method: 'delete'
  });
};
