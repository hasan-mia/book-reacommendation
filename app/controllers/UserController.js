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
		try {
			if (req.body.password) {
				const salt = await bcrypt.genSalt(10);
				const updatePassword = await bcrypt.hash(req.body.password, salt);
				const updateUserPass = await prisma.user.update({
					where: {
						id: +req.params.id,
					},
					data: {
						password: updatePassword, // Use the hashed password
					},
				});
				if (updateUserPass) {
					return res.status(200).send({
						status: 200,
						success: true,
						message: "Password has been updated",
					});
				} else {
					return res.status(406).send({
						status: 406,
						success: false,
						message: "Failed to update password",
					});
				}
			}

			if (req.body.email) {
				const checkEmail = await prisma.user.findUnique({
					where: { email: req.body.email },
				});
				if (checkEmail) {
					return res.status(406).send({
						status: 406,
						success: false,
						message: "Email already used",
					});
				} else {
					const updateUserEmail = await prisma.user.update({
						where: {
							id: +req.params.id,
						},
						data: { email: req.body.email },
					});
					if (updateUserEmail) {
						return res.status(200).send({
							status: 200,
							success: true,
							message: "Email has been updated",
						});
					} else {
						return res.status(406).send({
							status: 406,
							success: false,
							message: "Failed to update email",
						});
					}
				}
			} else {
				return res.status(403).send({
					status: 403,
					success: false,
					message: "You can only update your own id",
				});
			}
		} catch (error) {
			handlePrismaError(error, res);
		}
	}
};

// ========Delete User===========
const deleteUser = async (req, res) => {
	if (req.body.id === +req.params.id || req.body.type === 1) {
		try {
			// Delete user based on ID
			const deleteUser = await prisma.user.delete({
				where: {
					id: +req.params.id,
				},
			});
			if (deleteUser) {
				return res.status(200).send({
					status: 200,
					success: true,
					message: "Account has been deleted successfully",
				});
			}
		} catch (error) {
			handlePrismaError(error, res);
		}
	}
};


module.exports = {
	updateUser,
	deleteUser,
	singleUser,
	allleUser,
};
