require.config({
    paths: {
        jquery: 'libs/jquery/jquery-3.2.0.min',
        bootstrap: 'libs/bootstrap',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        templates: '../templates'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'underscore': {
            deps: ['jquery'],
            exports: 'underscore'

        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
        }
    }
});
require([
    'app',
], function(App) {
    App.initialize();
});