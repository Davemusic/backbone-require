define([
    'jquery',
    'bootstrap',
    'underscore',
    'backbone',    
    'router'
], function ($, Bootstrap, _, Backbone, Router) {
    var initialize = function () {
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});