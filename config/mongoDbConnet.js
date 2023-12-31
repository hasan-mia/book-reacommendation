/* eslint-disable no-undef */
require("dotenv").config() // load .env variables
const mongoose = require("mongoose") //import fresh mongoose object
mongoose.set('strictQuery', false)

const dbUrl = process.env.DATABASE_URL;
const mongoDbConnet = async () => {
	try {
		await mongoose.connect(dbUrl, () => {
			console.log("Connect to MongoDB");
		});
	} catch (error) {
		console.log(error);
	}
	return mongoDbConnet();
};
module.exports = mongoDbConnet;