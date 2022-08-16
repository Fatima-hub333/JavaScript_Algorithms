MVC- MOdel View Controller Architecture

The MVC is like a recipe you can use to build your web application. It exists as a way to structure the pathways we use when routing data through a project. Essentially what our MVC acronym refers to is the way we direct traffic(with a controller) as it comes in from an external source, looks for data(monitor by model), and is displayed for the user (through the view).

Why is MVC Important?
MVC architecture allows us to have a structured way of understanding our data flow. Even though many different technology stacks have many different exact definitions for what the model, view, controller should handle, it can be said that they are all similar enough that we've been able to establish a common pattern. That pattern is collectively referred to as the MVC. This means that no matter what direction your technology may take you, having a solid understanding of this concept now will always put you on solid ground in the future. 

Model: It's usaually a brain of the application. It's responsible for getting and manipulating data.
- Data related logic
- Interactions with Database (Select, Insert, Update, Delete)
- Commuincates with controller
- Can sometimes update the view

View: 
- What the end user sees
- usually Consist of HTML/CSS
- Communicates with the Controller
- Can be passed dynamic values from the controller
- Template Engines

Controller: 
- Recives Input (from view, url)
- Processes Requests (GET, POST, PUT, DELETE)
- Gets Data From the model
- Passes Data to the view

In Rails: 
Model: 
Technically the Model is what you go through to interact with the database and it is known as the "Active Record". It is wherre you write your 
- Rules
- Validations
- Scopes
and other functions necessary when interacting with your data. Your model is the actual line that connects your database such as PostgreSQL, to your controller. 

View: This time your HTML will have embedded Ruby (erb) using <% %> tags around the ruby code. This is also how you will display any variables made available to you through the corresponding Controller. 
<h1><% ='Hello World!' %></h1>

View: It is as closely linked to the routes.rb file as the Model is linked with database. 








Gems is a fancy way of referring libraries in Ruby. A ruby is a gemstone, after all. Rail itself is technically a gem!. RubyGems is the package manager that handles all the gems on your machine. From the command line you can search for gems, install and uninstall gems, list current gems, and perform other such commands. 
As a repository of gems, it's not only a great resource for finding gems to work with you, you can also publish your own gems there!

There is nothing in a gem that is impossible to build yourself! In fact, many gems are open source and if you find a bug in one, you are encouraged to contribute. It is also often encouraged to use gems in web development, as it means using a library that was created to do a job and is maintained by experienced developers towards that end, saving you valuable time.









