Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, 
         {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'userName',
        fieldLabel: 'User name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }/*add comma if below is added*/] 
    //     {
    //     fieldName: 'terms',
    //     fieldLabel: 'I accept the terms and conditions',
    //     inputType: 'checkbox',
    //     visible: true,
    //     validate: function(value, errorFunction){
    //       if (value != 'true') {
    //         errorFunction("You must accept the terms and conditions.");
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     },
    //     saveToProfile: false
});