import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Ember from 'ember';
import $ from 'jquery';
import jQuery from 'jquery';

var userName;
var pagesize;
$.ajax({
    url: 'http://localhost:8080/FirstServlet/loginvalidate',
    type: 'POST',
    data:{url:'#/history'},
    success: function (data) {
        if (data.toString().trim() == 'Successful') {
            window.location.replace("#/login");
            location.reload(true);
        }
        else{
                userName = data; 
        }
    }
});

$.ajax({
    url: 'http://localhost:8080/FirstServlet/pagesize',
    type: 'GET',
    success: function (data) {
        if (data.toString().trim() == 'Successful') {
            pagesize = 5;
        }
        else{
            pagesize = data; 
        }
    }
});



export default class MatchHistoryComponent extends Component {
    @service variables;
    @action
    showHistory() {
        this.variables.newData.clear();
        this.variables.uname = userName;
        let usernamedata = { username: this.variables.uname };
        this.variables.create = false;
        this.variables.shistory = true;
        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
        var ans;

        function doSomething(data) {
            ans = data;
        }

        $.ajax({
            url: 'http://localhost:8080/FirstServlet/gethistory',
            type: 'POST',
            data: usernamedata,
            async: false,
            success: function (data) {
                console.log(data);
                doSomething(data);
            }
        });
        a = ans['fscore'];
        b = ans['fwicket'];
        c = ans['fteam'];
        d = ans['date'];
        e = ans['ftarget'];
        f = ans['fover'];

        for (var i = 0; i < a.length; i++) {
            this.variables.newData.pushObject([d[i], e[i], f[i]]);   
        }
        this.paginate(this.variables.pageNumber);
    }


    @action
    logOut() {
        this.variables.create = false;
        this.variables.shistory = false;
        $.ajax({
            url: 'http://localhost:8080/FirstServlet/logout',
            type: 'GET',
            success: function (data) {
                location.reload(true);
            }
        });
        window.location.replace("#/login");
    }

    
    @action
    clearHistory() {
        this.variables.uname = userName;
        let usernamedata = { username: this.variables.uname };
        $.ajax({
            url: 'http://localhost:8080/FirstServlet/clearhistory',
            type: 'POST',
            data: usernamedata,
            success: function (data) {
                alert("Match history cleared !!");
            }
        });
        location.reload(true);
    }

    @action
    paginate(page_number)
    {
        this.variables.pageSize = parseInt(pagesize);
        this.variables.noOfPages.clear();
        this.variables.totalCount = this.variables.newData.length;
        this.variables.pageNumber = page_number;
        for(var i=1;i<=Math.ceil((this.variables.newData.length)/(this.variables.pageSize));i++)
        {
            this.variables.noOfPages.push(i);
        }
        this.variables.noOfPages =  this.variables.noOfPages;
        this.variables.pages = this.variables.newData.slice((this.variables.pageNumber - 1) * this.variables.pageSize, this.variables.pageNumber * this.variables.pageSize);
        this.variables.pages = this.variables.pages;    
    }

    @action
    setNoOfRecords(value)
    {
        this.variables.pageSize = value;
        this.variables.noOfPages = this.variables.noOfPages;
        this.variables.pages = this.variables.pages;
        let pagesizedata = { pagesize: this.variables.pageSize };
        $.ajax({
            url: 'http://localhost:8080/FirstServlet/page',
            type: 'POST',
            data: pagesizedata,
            success: function (data) {
                console.log(data);
            }
        });
        this.variables.pageNumber = 1;
        this.variables.pageNumber = this.variables.pageNumber;
        this.showHistory();
        location.reload(true);

    }

    @action
    createMatch() {
        window.location.replace("#/create-match");
    }
}

