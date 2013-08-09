Package.describe({
  summary: "Greenlight hosted site template"
});

Package.on_use(function (api, where) {

    api.use('router', ['client', 'server']);
    api.use(['templating'], 'client');
    
    api.add_files(['client/hosted_page.html', 'client/hosted_page.js', 'client/hosted_page.css'], 'client');
    api.add_files('client/hosted.js', 'client');
    api.add_files('server/hosted.js', 'server');
});

Package.on_test(function (api) {
    api.add_files('hosted_tests.js', 'client');
});
