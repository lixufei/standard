import React from 'react';
import * as _ from 'lodash';
const loginContainer = {
  width: 1500,
  height: 700,
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    if (_.includes(['lihengfei', 'hengfei'], username) && password === 'lihengfei123') {

    }
  }

  render() {
    return (
      <div style={loginContainer}>
        <form onSubmit={this.handleSubmit}>
          <label>
            用户名:
            <input type="text" name="username" ref={(name) => {this.username = name;}} />
          </label>
          <label>
            密码:
            <input type="password" name="password" ref={(password) => {this.password = password}} />
          </label>
          <input type="submit" value="登录" />
        </form>
      </div>
    )
  }
};

export default Login;
