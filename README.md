# Lexicode

A tool to take notes on code-related topics (though it could be anything really) that you can clone for your personal use. It's a work in progress, you can see a demo/first version [here](https://lexicode.herokuapp.com/). Issues and pull requests are welcome :)

## How to use it locally:

* On the command line, navigate to the folder where you want the repository to be:

```
cd whatever_folder_you_wish
```

* Clone the repository:

```
git clone repository_address
```

```
cd name_of_the_repository
```

* Rename the .env.example file to .env and fill it with your own data

* Import the database.sql file to phpMyAdmin to create the database (and manually insert an admin row in the admin table)

* Install dependencies:

```
yarn install
```

* Launch the project (this will open it on localhost:3000):

```
yarn dev
```
#### And you're all set !
