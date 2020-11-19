/*  Logon configuration used by packaged apps (N.B. We do not include the fioriclient 
 *  plugin to packaged apps but just borrow some of its configuration format.)
 *	The {{}} placeholder values, if any, will be populated before the first build. 
 *	The "appName" and "appVersion" will be updated with the input values in the build wizard.
 *	Do not change the "appID", "fioriURL" and "auth" values to avoid inconsistent 
 *	app settings.
 */
var fiori_client_appConfig = {
	"appName": "Create_Workorder_Push",
	"appVersion": "2.0",
	"appID": "com.sap.webide.x17ce13f273944761b7514d6f0f14a0b2",
	"fioriURL": "https://mobilepreview-ba293bd41.us1.hana.ondemand.com:443",
	"auth": [
		{
			"type": "saml2.web.post",
			"config": {
				"saml2.web.post.authchallengeheader.name": "com.sap.cloud.security.login",
				"saml2.web.post.finish.endpoint.uri": "/SAMLAuthLauncher",
				"saml2.web.post.finish.endpoint.redirectparam": "finishEndpointParam"
			}
		}
	],
	"communicatorId": "REST"
};