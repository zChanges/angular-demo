import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // search
  userName: string = '';
  mobile: string = '';
  role: string = '';

  //table
  _loading = false;
  _dataSet = [];
  _total = 0;
  _current = 1;
  _pageSize = 10;

  //detial
  isVisible = false;
  validateForm: FormGroup;
  userNameBox: string;
  mobileBox: string;
  itemData: any;
  constructor(private fb: FormBuilder, private userService: UserService, private confirmServ: NzModalService) {
  }

  ngOnInit() {
    this._refreshStatus();

    this.validateForm = this.fb.group({
      userNameBox: [null, [Validators.required]],
      mobileBox: [null, [Validators.required]]
    });
  }


  /**
   * 获取用户列表
   */
  _refreshStatus() {
    this._loading = true;
    this.userService.getUserList(this.userName, this.mobile, this.role, this._current, this._pageSize).subscribe((res) => {
      this._dataSet = res.list;
      this._total = res.total;
      this._loading = false;
    }, rej => { this._loading = false; })
  }


  /**
   * 删除用户
   * @param data 一条用户数据
   */
  delectUser(data) {
    const modal = this.confirmServ.confirm({
      title: '您是否确认要删除这项内容',
      zIndex: 1000,
      showConfirmLoading: true,
      onOk: () => {
        this.userService.removeUsers(data._id).subscribe(res => {
          modal.destroy();
           this._refreshStatus();
        })
      }
    });
  }





  editUser(data) {
    this.isVisible = true;
    this.itemData = data;
    this.userNameBox = data.userName;
    this.mobileBox = data.mobile;
  }

  handleOk = () => {
    const data = this.itemData;
    const modal = this.confirmServ.confirm({
      title: '您是否确认要修改这项内容',
      showConfirmLoading: true,
      onOk: () => {
        this.userService.updateUser(data._id, this.userNameBox, this.mobileBox).subscribe(res => {
          modal.destroy();
          this.isVisible = false;
          this._refreshStatus();
        })
      }
    });
  }








}
