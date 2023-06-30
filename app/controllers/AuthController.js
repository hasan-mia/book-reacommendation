const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const handlePrismaError = require("../validators/handlePrismaError");
const prisma = new PrismaClient();

// ========Register a New User============
const registerUser = async (req, res) => {
	const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const validEmail = emailRegEx.test(req.body.email);
	if (!validEmail) {
		res
			.status(406)
			.send({ status: 406, success: false, error: "email is invalid!" });
	} else {
		try {
			// generate hash password
			const salt = await bcrypt.genSalt(10);
			const hashPassword = await bcrypt.hash(req.body.password, salt);
			const newUser = await prisma.user.create({
				data: {
					email: req.body.email,
					password: hashPassword,
				},
			});
			if (newUser) {
				const token = await jwt.sign(
					{
						id: newUser.id,
						email: newUser.email,
						type: newUser.type,
					},
					process.env.ACCESS_TOKEN_SECRET,
				);
				res.status(201).json({
					status: 201,
					success: true,
					message: "Registered successfully",
					token: token,
				});
			}
			
		} catch (error) {
			handlePrismaError(error, res);
		}
	}
};

// ========Login a User============
const loginUser = async (req, res) => {
	const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const validEmail = emailRegEx.test(req.body.email);

	if (!validEmail) {
		res
			.status(406)
			.send({ status: 406, success: false, error: "Email is invalid!" });
	} else {
		try {
			// Find user by email
			const user = await prisma.user.findUnique({
				where: { email: req.body.email },
			});
			if (!user) {
				res.status(404).send({
					status: 404,
					success: false,
					error: "User not found. Create a new account.",
				});
			} else {
				// Compare the provided password with the stored hashed password
				const validPassword = await bcrypt.compare(
					req.body.password,
					user.password,
				);
				if (validPassword) {
					// Generate a JWT token for the authenticated user
					const token = await jwt.sign(
						{
							id: user.id,
							email: user.email,
							type: user.type,
						},
						process.env.ACCESS_TOKEN_SECRET,
					);
					res.status(200).send({
						status: 200,
						success: true,
						message: "Login successful",
						id: user.id,
						token: token,
					});
				} else {
					res
						.status(401)
						.send({ status: 401, success: false, error: "Invalid password!" });
				}
			}
		} catch (error) {
			handlePrismaError(error, res);
		}
	}
};

module.exports = { registerUser, loginUser };
