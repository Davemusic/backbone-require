define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',
    'text!templates/authorization/login.html'
], function ($, Bootstrap, _, Backbone, loginTemplate) {

    var LoginView = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            this.$el.html(loginTemplate);

         
        }
    });
    return LoginView;



}
);