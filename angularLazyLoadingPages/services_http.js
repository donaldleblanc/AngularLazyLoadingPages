var httpModule = angular.module('httpModule',[]);

httpModule.service('httpCalls',  function() {

   this.getAllUsers = function() {
      return [
         { firstName: 'Jane', lastName: 'Doe', age: 29 },
         { firstName: 'John', lastName: 'Doe', age: 32 }
      ];
   }
});
