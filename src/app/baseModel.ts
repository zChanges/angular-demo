/**
 * 列表基础接口
 */
interface ListResponse<T> extends BaseResponse {
  count:number;
  currentPage:number;
  list: Array<T>;
  pageSize:number;
  total: number;
}

interface BaseResponse {
  extData: any;
}

/**
 * 接口基础输出
 */
interface IResponse<T>  {
  code: number;
  success: boolean;
  result: T;
  message: string;
}