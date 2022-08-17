As our model, the Active Record is simply a Ruby syntax way of talking to a database. This is great because once we have our Active Record modeled the way we want, it's simple to switch databases if we want to go from SQLite3 to PostgreSQL.

Why is understanding the ORM Database Important?
We know that Rails speaks Ruby and Databases speak SQL, so how do we get them to interact? With an ORM framework! Object-Relational Mapping is a technique that allows us to access our database as if we were accessing class variables in our program. Through the conventions already in place with Rails, thankfully we don't have to write all of the getters and setters for our records ourselves. Instead, Rails gives us Active Record as an ORM framework.

Active Record As an ORM Framework:
Active Record gives us several mechanisms, the most important being the ability to:
- Represent Models and their Data
- Represent Associations between these models
- Represent inheritance hierarchies through related models
- Validate models before they get persisted to the database
- Perform database operations in an object-oriented fashion

{Migration} 
Migrations are a convenient way to alter your database schema over time in a consistant way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database indepenedent. 
You can think of each migration as being a new 'version' of the database. A schema starts off with nothing in it, and each migration modifies it to add or remove tables, columns, or entries. Active Record knows how to update your schema along this timeline, bringing it from whatever point it is in the history to the latest version. Active Record will also update your db/schema.rb file to match the up-to-date structure of your database.jnm