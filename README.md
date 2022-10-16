# **The Simplest Game Ever**

This is the simplest game possible. There is button. One click gives you one point. Whoever gets the most points wins.

This is for us to learn how to collaborate in a Software project.

We will use a React front-end and Hasura GraphQL back-end.

Users can login and then start clicking the button.

## **_Instructions for run the React App_**

1. Download Node.js Installer. Installer can be downloaded from [Node.js official site](https://nodejs.org/en/download/).

   - To verify the Node.js installation, To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type `node -v`. This should print the version number so you'll see something like this `v0`.

2. Download the `SimplestGameEver` project files. We can use `git` tool for that.

   1. Download and Install git from [git official site](https://git-scm.com/downloads).
   2. Open a terminal like `git bash`/ `VS code terminal` and go to the directory where you want to download the project.
      - `cd </path_that_project_should_be_saved>`
   3. Use following command to clone (download) the `SimplestGameEver` repository to your local computer.
      - `git clone https://github.com/kmchmk/SimplestGameEver`
   4. Now change the directory from project folder to `SimplestGameEver\ReactApp`.
      - `cd SimplestGameEver/ReactApp`
   5. install npm using `npm install` command.
   6. Run the React App from `npm start` command. React app will be run on your default browser automatically.

3. User authentication part is done using [auth0](https://auth0.com/).
   1. To install auth0 package, use following npm command,
      - `npm install auth0`
   2. Use google sign in to login to the app.
   3. user name is created with the name in login email.
   4. Auth0 rule has created to insert new user to the database.
