import { ListResponse } from '../../../baseModel';
import { Observable } from "rxjs/Observable";
export interface UserListItemResponse {
    /**
     * 主键
     */
    _id: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 手机号
     */
    mobile: string;
    key: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 头像
     */
    avatar: string;
}

export interface IUserService {
    /**
     * 获取用户列表
     * @param userName 用户名
     * @param mobile 手机号
     * @param role 角色
     * @param currentPage 当前页码
     * @param pageSize 一页多少条
     */
    getUserList(userName: string, mobile: string, role: string, currentPage: number, pageSize: number): Observable<ListResponse<UserListItemResponse>>
}