## Book Recommendation with Prisma and GoogleBooks API - Documentation

This is the book recommendation REST API with authentication and authorization with Prisma and google book api.

1. For REST API I used express and prisma
2. For the frontend I used REACT

### Folder and File Stracture

```bash
__index.js (server index file)
__config
______mongoDbonnect.js (mongoose connection  method)
______mysqlDbonnect.js (normal mysql connection  method)
__prisma
______schema.prisma (prisma setup)
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
_______________config.jsx (basic header and client env settings)
_______________url.jsx (all api routes/ link)
_______________auth.jsx (fetch auth routes)
____________Slice (all slice will write here for dispatch data)
_______________AuthSlice.jsx (authentication slice)
_______________CartSlice.jsx (full local storage base Cart)
____________Store (all fetching data will store here)
__.env.example (rename this to .env and update your credentials both server and client site)

```

#### Uses tools for server / REST AOI

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

##### require-stack

### Uses tools for cient/frontend

##### reactjs

##### react router dom

##### redux

##### tailwind

### ENV Setup and Change value

#### To run this project follow these steps

I. Copy .env.example and rename .env
II. Change the dbname and password or full DATABASE_URL

```bash
NODE_ENV=development
ACCESS_TOKEN_SECRET=YmAb0fJLyOVdX5jWZDWGZ6+2r/feExwbbLmd7EUnpV/CBKbupVApVCw=
DATABASE_URL="mysql://root:@localhost:3306/bookrecommand"
```

### Generate secret totken

```bash
openssl rand -base64 128
```

### Install Dependencies

```bash
yarn
or
npm install
```

### Serve with at http://localhost:5000

```bash
yarn server
or
npm run server
```

### Client with at http://localhost:3000

```bash
cd views (To go views directory and run)
yarn start
or
npm start
```

### build for production with minification

```bash
yarn build
or
npm run build
```

### Here is the postman link to see examples of all routes

```bash
https://documenter.getpostman.com/view/25680118/2s93zB4MKP

```
