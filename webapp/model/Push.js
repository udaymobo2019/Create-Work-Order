sap.ui.define([], function() {
  "use strict";
  return {
    regSuccess: function(result) {
      console.log("Successfully registered: " + JSON.stringify(result));
    },

    regFailure: function(errorInfo) {
      console.log("Error while registering.  " + JSON.stringify(errorInfo));
    },

    registerForPush: function() {
      console.log("attempting to register for notifications");
      var nTypes = sap.Push.notificationType.SOUNDS | sap.Push.notificationType.ALERT;
      //TODO #1 - Set your Sender ID
      sap.Push.registerForNotificationTypes(nTypes, this.regSuccess, this.regFailure, this.processNotification, "143468391444"); //GCM Sender ID, null for APNS
    },

    unregisterForPush: function() {
      sap.Push.unregisterForNotificationTypes(this.unregCallback);
    },

    unregCallback: function(result) {
      console.log("Successfully unregistered: " + JSON.stringify(result));
    },

    processNotification: function(notification) {
      console.log("Received a notifcation: " + JSON.stringify(notification));

      if (sap.Push.isPlatformIOS()) {
        sap.Push.resetBadge(this.resetBadgeSuccess);
      }
    },

    processMissedNotification: function(notification) {
      if (notification) {
        console.log("Received a missed notification: " + JSON.stringify(notification));
  
      }
      if (sap.Push.isPlatformIOS()) {
        sap.Push.resetBadge(this.resetBadgeSuccess);
      }
    },

    resetBadgeSuccess: function(result) {
      console.log("Badge has been reset: " + JSON.stringify(result));
    },

    checkForNotification: function() {
      sap.Push.checkForNotification(this.processMissedNotification);
    }
  };
});