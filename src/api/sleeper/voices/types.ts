export interface VoicesVO {
  /**
   * 主键
   */
  id: string | number;

  /**
   * 音色id
   */
  voiceId: string | number;

  /**
   * 音色名称
   */
  voiceName: string;

  /**
   * 音色类型
   */
  type: string;

  /**
   * 音乐格式
   */
  format: string;

  /**
   * 关联用户id
   */
  userId: string | number;
}

export interface VoicesForm extends BaseEntity {
  /**
   * 主键
   */
  id?: string | number;

  /**
   * 音色id
   */
  voiceId?: string | number;

  /**
   * 音色名称
   */
  voiceName?: string;

  /**
   * 音色类型
   */
  type?: string;

  /**
   * 音乐格式
   */
  format?: string;

  /**
   * 关联用户id
   */
  userId?: string | number;
}

export interface VoicesQuery extends PageQuery {
  /**
   * 音色名称
   */
  voiceName?: string;

  /**
   * 音色类型
   */
  type?: string;

  /**
   * 音乐格式
   */
  format?: string;

  /**
   * 日期范围参数
   */
  params?: any;
}
