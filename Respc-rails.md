rspec-rails brings the RSpec testing framework to Ruby on Rails as a drop-in alternative to its default testing framework, Minitest.
In RSpec, tests are not just scripts that verify your application code. They're also specifications (or specs, for short); detailed explanations of how the application is supposed to behave, expressed in plain English.

Let's take a moment to envision what is happening with the controller, in the grand scheme of our app. If we examine its points of entry and exit, we see that from the controller we are connected to the URL routing, the model and the view. Think about how the controller handles these three connections as you learn more about how to test them?
Controllers are the backbone of your project as they handle all requests, whether these are coming in from the browser or requesting information from the database. Simply put, it's important to test controllers properly because how much they do. They are the central hub of all the project's activity and knowing their tests are written correctly is important to the entire function of the overall app. Not only that, as you learn more about testing you will see that other tests are built around the foundations of controller testing.

{Request Specs}
A request spec need not be overly complicated and as you will see, does just what the name implies. By sending a request to a URL we can expect the response to either render a view or redirect us. If your controller action redirects the user, and your request spec follows that redirect, it will ultimately still expect some view to be rendered. That's all it takes. At the end of the day, your request spec just want to make sure that your URL route is rendering the correct view.

rails-controller-testing-gem
- Request specs allow you to focus on a single controller action, but unlike controller tests involve the router, the middleware stack, and both rack requests and responses. This adds realism to the test that you are writing, and helps avoid many of the issues that are common in controller specs.

Controllers are classes, like models. You may not have thought much about it because Rails creates a new instance of controller classes for us, and we tend to think of them as actions. Controllers are unique types though, because they function inside of a request/response cycle. They expect the browser to send them a request then they put together a response to send back. Controllers are also in charge of:
rendering templates
redirecting actions
setting values for cookies & sessions