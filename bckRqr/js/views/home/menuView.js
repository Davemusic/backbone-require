define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',
    
    'text!templates/home/menuTemplate.html'
], function ($, Bootstrap, _, Backbone, menuTemplate) {

    var HomeView = Backbone.View.extend({

        el: $("#mainmenu"),
        render: function () {
            this.$el.html(menuTemplate);
        }
    });
    return HomeView;
});