const axios = require("axios");
const handlePrismaError = require("../validators/handlePrismaError");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ========Create a review============
const postRecommend = async (req, res) => {
	const {
		title,
		description,
		author,
		userId,
		bookId,
		image,
		rating,
		review,
		source,
	} = req.body;

	try {
		const recommendation = await prisma.recommendation.create({
			data: {
				title,
				description,
				author,
				userId,
				bookId,
				image,
				rating,
				review,
				source,
			},
		});
		if (recommendation) {
			res.status(200).json({
				status: 200,
				success: true,
				message: "Review added successfully",
				data: recommendation,
			});
		}
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========update review ============
const recommendUpdate = async (req, res) => {
	const imagesUrl = [];

	if (req.files) {
		for (const file of req.files) {
			imagesUrl.push(
				domain + `/upload/images/${file.filename.replace(/\s+/g, "")}`,
			);
		}
	}
	// Create image post object for mongodb
	const recommendUpdate = {
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
		bookId: req.body.bookId,
		rating: req.body.rating,
		review: req.body.review,
		source: req.body.source,
	};
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId || req.body.isAdmin) {
			await post.updateOne({ $set: recommendUpdate });
			res.status(200).send({
				status: 200,
				success: true,
				message: "Product update successfully",
				data: recommendUpdate,
			});
		} else {
			res
				.status(403)
				.send({ status: 403, success: false, message: "you can't update" });
		}
	} catch (error) {
		return res.status(500).send(error);
	}
};

// ========get all recommend ============
const getRecommend = async (req, res) => {
	try {
		const product = await Post.findOne({ slug: req.params.slug });
		console.log(product);
		if (!product) {
			res
				.status(404)
				.send({ status: 404, success: false, message: "Product not found" });
		} else {
			res.status(200).send({
				status: 200,
				success: true,
				message: "Product found",
				data: product,
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

// ========get all books ============
const getAllBooks = async (req, res) => {
	try {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=programming`,
		);
		const data = response.data;
		if (data) {
			res
				.status(200)
				.send({
					status: 200,
					success: true,
					message: "found books",
					data: data,
				});
		}
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========get all books ============
const getBookDetails = async (req, res) => {
	const bookId = req.params.id;
	try {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes/${bookId}`,
		);
		const book = response.data;
		if (book) {
			res
				.status(200)
				.send({
					status: 200,
					success: true,
					message: "found books",
					data: book,
				});
		}
	} catch (error) {
		handlePrismaError(error, res);
	}
};
module.exports = {
	postRecommend,
	recommendUpdate,
	getRecommend,
	getAllBooks,
	getBookDetails,
};
