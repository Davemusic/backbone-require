/// <reference path="router.js" />
define([
    "jquery",
    "bootstrap",
    "underscore",
    "backbone",
    "views/home/HomeView",
    "views/home/menuView"
    //"views/authorization/login"
], function ($, Bootstrap, _, Backbone, HomeView, MenuView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            //'#login': 'login',
            '*actions': 'vcvdefaultAction'
        }
    });
    var initialize = function() {

        var app_router = new AppRouter;
        app_router.on('route:vcvdefaultAction', function(actions) {
         
            var homeView = new HomeView();
            var menuView = new MenuView();
            homeView.render();
            menuView.render();
        });

        //app_router.on('route:login', function () {
        //    debugger;
        //    var loginView = new LoginView();
        //    loginView.render();
        //});
  

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };

});