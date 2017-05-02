define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',
    'text!templates/home/homeTemplate.html'
], function($, Bootstrap, _, Backbone, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $("#page"),
        initialize:function(){
        },
        events: {
            "click .btn_login" : "btn_login_click"
        },
        btn_login_click: function () {
            //var data = 'id=' + 5;

            debugger;
            $.ajax({
                urlRoot: "api/Suckira",
                type: "GET",
                //data:data,
                success: function (result) {
                    alert("got it");
                },
                error: function (error) {
                    alert("error!!!!!!!");
                }
            });
        },
        render: function () {
            this.$el.html(homeTemplate);            
            //$("#login-button").click(function () {
            //    alert("hello956665");               
            //    $.ajax({                    
            //        url: "api/Userslogin",
            //        type: "GET",
            //        success: function (result) {
            //            alert("got it");
            //        },
            //        error: function (error) {
            //            alert("error!!!!!!!");
            //        }
            //    });
            //});
        }
    });
    return HomeView;
});