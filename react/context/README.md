# React 18 / React-auth-kit / Dynamic interactions with useContext

A basic react.js app with a useContext/ useReducer setup for a fluid dynamic rendering.

- State management : React context / reducers hook

- Authentication : react-auth-kit

- Routing : react-router-dom

- UI : TailwindCSS

React Quick Start

```shell
# clone the repo from github 
git clone ...

# change directory
cd react-context

# install the frontend dependencies
npm install

# Start front end testing
npm run start
```

## Backend

> Launch backend server

``` shell
# Open the backend in another VS Code window and install dependencies
npm install

# Run the server
npm run start
```

## Authenticate

To authenticate as Sophie Bluel, in the login page, use these logins :

> email : sophie.bluel@test.tld
>
> password: S0phie

## Add or delete work

When authenticated, the "modify" button appears and you can add or delete works :

- Delete work - Click the trash bin buttons in the modal gallery to send a delete request to the DB.
- Add work - Click on the button "Ajouter une photo" in the gallery modal and fill the form with a photo, a title and select a category

Adding and deleting works will be dynamically visible in the app and you'll be able to see the gallery updated right after your action without refreshing the page.

### Author

- Author: Steviggio
