/**
 * 列表基础接口
 */
export interface ListResponse<T> {
  count:number;
  currentPage:number;
  list: Array<T>;
  pageSize:number;
  total: number;
}

export interface BaseResponse {
  extData: any;
}

/**
 * 接口基础输出
 */
export interface IResponse<T> {
  code: number;
  success: boolean;
  result: T;
  message: string;
}