import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Login(){
    let history=useHistory();
    function toHome(){
        history.push('Home');
    }
    return (
        <div>
        <div class="header">
            <ul class="breadcrumb">
                <li><a href="/">主页</a><span class="divider">/</span></li>
                <li class="active">登录</li>
            </ul>
        </div>
        <div class="inner">
        <form id="signin_form" class="form-horizontal" action="/signin" method="post">
        <div class="control-group">
          <label class="control-label" for="name">用户名</label>

          <div class="controls">
            <input class="input-xlarge" id="name" name="name" size="30" type="text"/>
          </div>
        </div>
        <div class="control-group">
          <label class="control-label" for="pass">密码</label>

          <div class="controls">
            <input class="input-xlarge" id="pass" name="pass" size="30" type="password"/>
          </div>
        </div>
        <input type="hidden" name="_csrf" value="0pJzKNxW-l56r-RhYnU4E6SGZ5I15etYWraM"/>

        <div class="form-actions">
          <input type="submit" class="span-primary" value="登录" onClick={toHome}/>
        </div>
      </form>
    </div>
  </div>
    )
}