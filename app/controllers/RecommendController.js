const axios = require("axios");
const handlePrismaError = require("../validators/handlePrismaError");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ========Create a review============
const creatRecommend = async (req, res) => {
	const {
		userId,
		bookId,
		image,
		review,
		title,
		description,
		author,
		source,
		ratings,
	} = req.body;

	try {
		const recommendation = await prisma.recommendation.create({
			data: {
				userId,
				bookId,
				image,
				review,
				title,
				description,
				author,
				source,
				ratings: {
					create: ratings.map((rating) => ({
						rating: rating.rating,
					})),
				},
			},
			include: {
				ratings: true,
			},
		});
		if (!recommendation) {
			res
				.status(404)
				.send({ status: 404, success: false, message: "recommend not found" });
		} else {
			res.status(201).json({
				status: 201,
				success: true,
				message: "recommend create successfully",
				data: recommendation,
			});
		}
	} catch (error) {
		console.log(error);
		handlePrismaError(error, res);
	}
};

// ========update review ============
const updateRecommend = async (req, res) => {
	const {
		userId,
		bookId,
		image,
		review,
		title,
		description,
		author,
		source,
		ratings,
	} = req.body;
	try {
		const recommendation = await prisma.recommendation.update({
			where: { id: +req.params.id },
			data: {
				userId,
				bookId,
				image,
				review,
				title,
				description,
				author,
				source,
			},
		});
		// Update ratings (if provided)
		if (ratings && ratings.length > 0) {
			await prisma.rating.deleteMany({
				where: { recommendationId: +req.params.id },
			});
			await prisma.rating.createMany({
				data: ratings.map((rating) => ({
					recommendationId: +req.params.id,
					rating: rating.rating,
				})),
			});
		}

		if (!recommendation) {
			return res.status(404).json({
				status: 404,
				success: false,
				message: "Recommendation not found",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "Recommendation updated successfully",
			data: recommendation,
		});
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========delete review ============
const deleteRecommend = async (req, res) => {
	try {
		const recommendation = await prisma.recommendation.delete({
			where: { id: +req.params.id },
		});

		if (!recommendation) {
			return res.status(404).json({
				status: 404,
				success: false,
				message: "Recommendation not found",
			});
		}

		return res.status(200).json({
			status: 200,
			success: true,
			message: "Recommendation delete successfully",
			data: recommendation,
		});
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========get all recommend ============
const getRecommend = async (req, res) => {
	try {
		const recommend = await prisma.recommendation.findMany();
		if (!recommend) {
			res
				.status(404)
				.send({ status: 404, success: false, message: "recommend not found" });
		} else {
			res.status(200).send({
				status: 200,
				success: true,
				message: "recommend found",
				data: recommend,
			});
		}
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========get all rating using bookId ============
const getRatings = async (req, res) => {
	const { bookId } = req.params;

	try {
		const ratings = await prisma.rating.findMany({
			where: { recommendation: { bookId } },
			include: { recommendation: true },
		});

		if (ratings.length === 0) {
			return res.status(404).send({
				status: 404,
				success: false,
				message: "No ratings found for the book",
			});
		}

		const averageRating = ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length;

		return res.status(200).send({
			status: 200,
			success: true,
			message: "Ratings retrieved successfully",
			data: {
				bookId,
				ratings,
				averageRating,
			},
		});
	} catch (error) {
		handlePrismaError(error, res);
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
			res.status(200).send({
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
			res.status(200).send({
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
	creatRecommend,
	updateRecommend,
	deleteRecommend,
	getRecommend,
	getRatings,
	getAllBooks,
	getBookDetails,
};
