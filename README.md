# React Blogs Page
A full stack web application that get blogs and view the blog you like.

![](https://user-images.githubusercontent.com/103638319/209824690-0c48bf72-3997-49ec-bbae-12c40d29a224.png)


## How It's Made:
**Tech used:** React, PostgreSQL, JavaScript, NodeJS, Express, CSS, Mui.
- Blogs Page is a full stack web application following MVC architecture. It runs on Node.js and Express for the backend, React and MUI to render the views.


## Deployment
- Clone the Project
- "npm install" to install all the dependencies
- Create .env file in /server/config folder, and enter the information list below,
    - PORT = (the port you like)
    - PGUSER = (database user name)
    - PGHOST = (database host)
    - PGDATABASE = (database name)
    - PGPASSWORD = (database password)
    - PGPOTR = (database port number)
    
- Run "npm run dev" on the server side, and run "npm run start" on the front end for development mode. Need to run "npm run build" on the client side before production use, and "npm run start" on server side for production. 


## Optimizations
Features that we would like to add:
- Post search 
- User like or unlike, and comment functions
- Ability to login, upload and save the posts
- Using TypeScript


## Lessons Learned:
I learned a lot about working with MUI and when this was advantageous, and when it was better to use my own styling.

