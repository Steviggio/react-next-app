# React 18 / React-auth-kit / Dynamic interactions with useContext

A basic react.js app with a useContext/ useReducer setup for a fluid dynamic rendering.

- State management : React context / reducers hook

- Authentication : react-auth-kit

- Routing : react-router-dom

React Quick Start

``` shell
# clone the repo from github 
git clone ...

# change directory
cd react-context

# install the frontend dependencies
npm install

# open a new window to handle the backend server 
Ctrl + Shift + N # Or access file menu and select "New Window" command

# Select the backend folder in this new window with the "Open Folder" command
Ctrl + K and Ctrl + O # Need to press K and O simultaneously with the Ctrl key to access "Open Folder"

# Once the backend folder selected, install the dependencies and start the server
npm install
npm run start

# In the other window, you can launch the frontend
npm run start
```

## Authenticate

To authenticate as Sophie Bluel, you need to access the login page and use these logins :

``` txt
email : sophie.bluel@test.tld

password: S0phie 
```

## Add or delete work

When authenticated, the "modify" button appears and you can add or delete works :

- Delete work - Click the trash bin buttons in the modal gallery to send a delete request to the DB.
- Add work - Click on the button "Ajouter une photo" in the gallery modal and fill the form with a photo, a title and select a category

Adding and deleting works will be dynamically visible in the app and you'll be able to see the gallery updated right after your action without refreshing the page.

Author: Steviggio
