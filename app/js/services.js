'use strict';

var flatsService = angular.module('myApp.services', ['ngResource']);

flatsService.factory('addres',function($resource){
    
    return $resource('http://localhost:8080/BackendVoombat/webresources/address',{},{

        query:{metod:'GET',isArray:true}
        
    });
    
});
flatsService.factory('flats',function($resource){
    
    return $resource('http://localhost:8080/BackendVoombat/webresources/flats',{},{

        query:{metod:'GET',isArray:true}
        
    });
    
});