export interface RecordsVO {
  /**
   * 主键
   */
  id: string | number;

  /**
   * 关联用户id
   */
  userId: string | number;

  /**
   * 提问
   */
  question: string;

  /**
   * 回答
   */
  reply: string;

}

export interface RecordsForm extends BaseEntity {
  /**
   * 主键
   */
  id?: string | number;

  /**
   * 关联用户id
   */
  userId?: string | number;

  /**
   * 提问
   */
  question?: string;

  /**
   * 回答
   */
  reply?: string;

}

export interface RecordsQuery extends PageQuery {

  /**
   * 提问
   */
  question?: string;

  /**
   * 回答
   */
  reply?: string;

    /**
     * 日期范围参数
     */
    params?: any;
}



