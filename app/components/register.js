import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Ember from 'ember';
import $ from 'jquery';
import jQuery from 'jquery';

export default class RegisterComponent extends Component {

  @action
  register(username, password) {
    let registerdata = {
      username: this.username,
      password: this.password,
    };
    if (this.username != null && this.password != null &&this.username!=" " && this.password!=" ")  {
      $.ajax({
        url: 'http://localhost:8080/FirstServlet/register',
        type: 'POST',
        data: registerdata,
        success: function (data) {
            //console.log("success" + JSON.stringify(data));
            window.location.replace("#/login");
            alert("Registered successfully!!");
        }
      });
    }
    else{
      alert("Enter valid username and password!!");
    }
  }
}
