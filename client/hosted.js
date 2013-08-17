var name = "hosted";
var version = "1.0";

hosted = function(){};

hosted.prototype = new Greenlight.Package();

hosted.prototype.routes =   {
    
    '/hosted': function()
    {
	Greenlight.log("calling /hosted route");

	return 'hosted_page';
    }
    
};

hosted.prototype.default_route = {

    '/' : function()
    {
	Greenlight.log("calling default route");

	return 'hosted_page';
    }

};

Greenlight.Packages.Hosted = hosted.prototype;

Meteor.startup(function(){

    Greenlight.log("loading hosted package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Hosted);

});

