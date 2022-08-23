Controllers do exactly what the name implies: they control. Your controller will be the central hub of all the activity happening in your app. It gathers whatever data you need, applies any necessary logic to that data, and then offers that data to your view. Despite how much controllers do, or maybe because of it, it's best to keep in mind that we want our controller to be as clean and thin as possible.

Action Controller does most of the ground work for you and uses smart conventions to make this as straightforward as possible. For most conventional RESTful applications, the controller will recive the request, fetch or save data from a model, and use a view to create HTML output. if your controller needs to do things a little differently, that's not a problem., this is just the most common way for a controller to work.

A Controller can thus be thought of as a middleman between models & views. It makes the model data available to the view, so it can display that data to the user, and it saves or updates user data to the model.

The naming convention of controllers in Rails favors pluralization of the last word in the controller's name, although it is not strictly required. 

A Controller is a Ruby class which inherits from (ApplicationController) and has methods just like any other class. When your application recives a request, the routing will determine which controller and action to run, then Rails creates an instance of that controller and runs the method with the same name as the action.

class ClientsController < Application Controller
    def new
    end
end

You probable want to access data sent in by the user or other parameters in your controller actions. There are two kinds of parameters possible in a web application. The first are parameters that are sent as part of the URL, called query string parameters. The "query string" is everything after {?} in the URL. The second type of parameters is usually referred to as POST data, because it can only be sent as part of an HTTP POST request. Rails does not make any distinction between query string parameters and POST parameters, and both are avilable in the (params) hash in your controller.

{Restful Design}
There are 7 RESTFUL route actions;
1- index
2- new
3- show
4- create
5- edit
6- Update
7- destroy

get "/users", to : "user#index" # usually requires a view

A router in Rails is a directing module that recognizes browser URL's and dispatches them to the controller actions requested. To make it simple, when you enter a url in your domain, the rails router will know which controller and action to handle your url. 
