export interface MusicsVO {
  /**
   * 主键
   */
  id: string | number;

  /**
   * 音乐名称
   */
  musicName: string;

  /**
   * 音乐类型
   */
  musicType: string;

  /**
   * 音乐格式
   */
  musicFormat: string;

  /**
   * 文件大小
   */
  musicSize: number;

  /**
   * 音乐播放链接
   */
  musicUrl: string;
}

export interface MusicsForm extends BaseEntity {
  /**
   * 主键
   */
  id?: string | number;

  /**
   * 音乐名称
   */
  musicName?: string;

  /**
   * 音乐类型
   */
  musicType?: string;

  /**
   * 音乐格式
   */
  musicFormat?: string;

  /**
   * 文件大小
   */
  musicSize?: number;

  /**
   * 音乐播放链接
   */
  musicUrl?: string;
}

export interface MusicsQuery extends PageQuery {
  /**
   * 音乐名称
   */
  musicName?: string;

  /**
   * 音乐类型
   */
  musicType?: string;

  /**
   * 音乐格式
   */
  musicFormat?: string;

  /**
   * 文件大小
   */
  musicSize?: number;

  /**
   * 音乐播放链接
   */
  musicUrl?: string;

  /**
   * 日期范围参数
   */
  params?: any;
}
