/**
 * API Version : ${api.version}
 */
var name="${artifactId}";
var version="${api.version}";
var logLevel=7;

var config = [
              {name:"getPosts",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/posts"}
            	           ]
              },
              {name:"getPostById",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/posts/{id}"}
            	           ]
              },
              {name:"getPostComments",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/posts/{id}/comments"}
            	           ]
              },
              {name:"getComments",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/comments"}
            	           ]
              },              
              {name:"getCommentbyId",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/comments/{id}"}
            	           ]
              },              
              {name:"getAlbums",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/albums"}
            	           ]
              },
              {name:"getAlbumById",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/albums/{id}"}
            	           ]
              },
              {name:"getPhotos",
            	  methods:[
            	           {name:"GET", targetUrl:"http://jsonplaceholder.typicode.com/photos"}
            	           ]
              }                            
             ];

exports.getApiConfig = function(frameworkLocation, console) {

	var util = require(frameworkLocation + 'Util.js');
		
	return util.getApiConfig(frameworkLocation, console, name, version, config, logLevel);
}


