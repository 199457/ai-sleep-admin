export interface UsersVO {
  /**
   * 主键
   */
  id: string | number;

  /**
   * openid
   */
  openid: string | number;

  /**
   * 昵称
   */
  nickName: string;

  /**
   * 状态
   */
  status: number;

  /**
   * 性别
   */
  sex: number;

  /**
   * 年龄
   */
  age: number;
}

export interface UsersForm extends BaseEntity {
  /**
   * 主键
   */
  id?: string | number;

  /**
   * openid
   */
  openid?: string | number;

  /**
   * 昵称
   */
  nickName?: string;

  /**
   * 状态
   */
  status?: number;

  /**
   * 性别
   */
  sex?: number;

  /**
   * 年龄
   */
  age?: number;
}

export interface UsersQuery extends PageQuery {
  /**
   * 昵称
   */
  nickName?: string;

  /**
   * 状态
   */
  status?: number;

  /**
   * 性别
   */
  sex?: number;

  /**
   * 日期范围参数
   */
  params?: any;
}
