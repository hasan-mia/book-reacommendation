require("dotenv").config() 
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const authRoute = require("./routes/api/v1/auth.route")
const userRoute = require("./routes/api/v1/user.route")
const recommendRoute = require("./routes/api/v1/recommend.route");

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

// Port
const port = process.env.PORT || 5000


// ===================================//
//        SERVER / API ROUTES         //
//====================================//
// apiRoute()
app.use('/api/v1/auth', authRoute)        // authentication route
app.use('/api/v1/user', userRoute)        // user route
app.use("/api/v1/books", recommendRoute);  // product route

// // ===================================//
// //       CIENT / FRONT-END ROUTE      //
// //====================================//
// if (process.env.NODE_ENV == 'production') {
//   app.use(express.static('views'));
//   const path = require("path");
//   app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'views', 'build', 'index.html'));
//   });
// }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});