var name = "hosted";
var version = "1.0";

hosted = function(){};

hosted.prototype = new hosted();

hosted.prototype.routes =   {
    
    '/hosted': function()
    {
	Greenlight.log("calling /hosted route");

	return 'hosted_page';
    }
    
};

hosted.prototype.metadata = function()
{
    
    return {
	description : "The hosted package provides functionality for remotely hosted packages, or hosting within a third-party environment.  It allows users to configure trusted remote locations for synchronization purposes."
    };
}();


Greenlight.Packages.Hosted = hosted.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading hosted package");

    Greenlight.register_package(name, version, Greenlight.Packages.Hosted);
        
});