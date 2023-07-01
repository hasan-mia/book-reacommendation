## Book Recommendation with Prisma and GoogleBooks API - Documentation

This is the book recommendation REST API with authentication and authorization with Prisma and google Book api.where user can recommend or review with rating the specific book.
All book recommendations/ review are displayed in the review route and All review is displayed with auto loading while scrolling down.
To recommend / review User Must have to login with Name, Email and Password.
Live Client[https://reacommendation.vercel.app/]
Live Server[https://bookrecommendation-server.onrender.com/]

1. For REST API use express, prisma, MySQL
2. For the frontend I used REACT with tailwind and Redux with Redux-Toolkit

### Folder and File Stracture

```bash
__index.js (server index file)
__config
______mongoDbonnect.js (mongoose connection  method / [N.B: no need])
______mysqlDbonnect.js (normal mysql connection  method / [N.B: no need])
__prisma
______schema.prisma (prisma setup and database scheema model here)
_app
______controllers ( write your all rest api controller here)
_______AuthController.js (user register, login and get userinfo api)
_______UserController.js (get, update, delete, and all userInfo for userControll)
_______RecommendController.js (publish, update, delete, get recommendation)
_____middleware ( write your all rest api middleware here)
_______imageUpload (middleware for image upload)
_______videoUpload (middleware for image upload)
_______verifyJWT (middleware for login authentication)
_______limiter (limit request number)
_____models ( write your database model here)
______index.js (database model here)
_____Services ( write extra service)
______Logger.js (all post with type base database model)
______Socket.js (socketio server )
______Token.js (token validation )
_____Validatiors (error validatiors folder)
______Request.js (validator request function)
__public (all common css/js or media file upload here)
______index.html
______404.html
__routes (write all indivisual route in this folder all api are secure with jsonwebtoken)
________api
__________v1
____________auth.route.js (auth routes)
____________user.route.js (user routes)
____________recommend.route.js (recommend and books routes)
__views (manage your client site from here)
______public
______src
_________app.js
_________index.js
_________index.css
_________auth (basic login and registratioin form)
_________backend (admin dashboard)
_________frontend (frontend site)
_________layout (frontend and admin layout)
_________routes (frontend and admin routes)
_________store (redux state management)
____________api (setup rest api link and fetching data to getting response)
_______________auth.jsx (fetch data from auth and user routes with axios)
_______________book.jsx (fetch data from book routes with axios)
_______________recommend.jsx (fetch data from recommend routes with axios)
____________config (setup rest api link and configuration)
_______________config.jsx (basic header and client env settings)
_______________url.jsx (all api routes/ link)
____________slice (all slice will write here for dispatch data)
_______________AuthSlice.jsx (authentication slice)
_______________BookSlice.jsx (book slice)
_______________RecommendSlice.jsx (recommend slice)
____________store (all fetching data will store here)
__.env.example (rename this to .env and update your credentials both server and client site)

```

### To run this project follow these steps

#### ENV Setup and Change value both server and client

I. Copy .env.example and rename .env
II. Make sure your your localhost is running on the same (if you are in local)
III. Change the dbname and password or full DATABASE_URL / give example for localhost

#### For Server

```bash
NODE_ENV=development
BASE_URL=http://localhost:5000/
ACCESS_TOKEN_SECRET=YmAb0fJLyOVdX5jWZDWGZ6+2r/feExwbbLmd7EUnpV/CBKbupVApVCw=
DATABASE_URL="mysql://root:@localhost:3306/bookrecommand"
```

#### For Client

```bash
NODE_ENV=development
REACT_APP_BASE_URL=http://localhost:5000/
REACT_APP_ACCESS_TOKEN_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VydHdvQHVzZXIuY29tIiwidHlwZSI6MCwiaWF0IjoxNjg3OTc0NDkzfQ.iS93X9oLsuPtghNbIdeWE30pC-ENMqif1smEUrivXJ4
```

### After setup DB run this command for prisma

```bash
npx prisma generate
and
npx prisma db push
```

### Generate secret totken

```bash
openssl rand -base64 128
```

### Install Dependencies

```bash
npm install
or
yarn
```

### Serve with at http://localhost:5000

```bash
npm run server
or
yarn server
```

### Client with at http://localhost:3000

```bash
cd views ( Go to views directory and run)
npm start
or
yarn start
```

### build for production with minification

```bash
npm run build
or
yarn build
```

### Here is the postman link to see examples of all routes

```bash
https://documenter.getpostman.com/view/25680118/2s93zB4MKP

```

### Use this token for headers on all post and put method

```bash
authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VydHdvQHVzZXIuY29tIiwidHlwZSI6MCwiaWF0IjoxNjg3OTc0NDkzfQ.iS93X9oLsuPtghNbIdeWE30pC-ENMqif1smEUrivXJ4"
```

## Uses tools for server / REST API

##### bcrypt

##### express

##### express-rate-limit

##### helmet

##### jsonwebtoken

##### multer

##### fluent-ffmpeg

##### prisma

##### morgan

##### nodemon

##### helmet

##### axios

##### require-stack

### Uses tools for cient/frontend

##### reactjs

##### react router dom

##### redux

##### tailwind

##### material-tailwind

##### axios

##### ract-hot-toast
