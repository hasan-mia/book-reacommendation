const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const handlePrismaError = require("../validators/handlePrismaError");
const prisma = new PrismaClient();

// ========Get a User============
const singleUser = async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { email: req.body.email },
		});
		console.log(user);
		if (user) {
			res.status(200).send({
				status: 200,
				success: true,
				message: `User found successfully`,
				data: user,
			});
		} else {
			res.status(404).send({
				status: 404,
				success: false,
				message: `user not found`,
			});
		}
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========Get all User for admin============
const allleUser = async (req, res) => {
	try {
		const users = await prisma.user.findMany();
		res
			.status(200)
			.send({ success: true, message: "users found", data: users });
	} catch (error) {
		handlePrismaError(error, res);
	}
};

// ========Update User===========
const updateUser = async (req, res) => {
	if (req.body.id === +req.params.id || req.body.type === 1) {
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(10);
				const updatePassword = await bcrypt.hash(req.body.password, salt);
				const updateUser = await prisma.user.update({
					where: {
						id: +req.params.id,
					},
					data: req.body,
				});
				res.status(200).send({
					status: 200,
					success: true,
					message: "password has been updated",
				});
			} catch (error) {
				handlePrismaError(error, res);
			}
		}
		if (req.body.email) {
			try {
				const checkEmail = await prisma.user.findUnique({
					where: { email: req.body.email },
				});
				if (checkEmail) {
					res
						.status(406)
						.send({ status: 406, success: false, error: "email already used" });
				} else {
					const updateUser = await prisma.user.update({
						where: {
							id: +req.params.id,
						},
						data: req.body,
					});
					res.status(200).send({
						status: 200,
						success: true,
						message: "email has been updated",
					});
				}
			} catch (error) {
				handlePrismaError(error, res);
			}
		} else {
			return res.status(403).send({
				status: 403,
				success: false,
				message: "you can update only your id",
			});
		}
	}
};
// ========Delete User===========
const deleteUser = async (req, res) => {
	if (req.body.id === +req.params.id || req.body.type === 1) {
		try {
			// delete user posts
			await Post.deleteMany({ userId: req.body.userId });
			//delete user
			await User.findByIdAndDelete(req.params.id);
			res.status(200).send({
				status: 200,
				success: true,
				message: "account has been deleted successfully",
			});
		} catch (error) {
			return res.status(500).send(error);
		}
	} else {
		return res.status(403).send({
			status: 403,
			success: false,
			message: "you can delete only your accout",
		});
	}
};

module.exports = {
	updateUser,
	deleteUser,
	singleUser,
	allleUser,
};
