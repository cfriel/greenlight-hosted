var name = "hosted";
var version = "1.0";

hosted = function(){};

hosted.prototype = new Greenlight.Package();

hosted.prototype.routes =   {
    
    '/hosted': function()
    {
	console.log("calling /hosted route");

	return 'hosted_page';
    }
    
};

hosted.prototype.default_route = {

    '/' : function()
    {
	console.log("calling default route");

	return 'hosted_page';
    }

};

Greenlight.Packages.Hosted = hosted.prototype;

Meteor.startup(function(){

    console.log("loading hosted package");
    
    Greenlight.register_template(name, version, Greenlight.Packages.Hosted);

});

