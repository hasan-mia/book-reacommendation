/*
 * Request data validation
 */
const handlePrismaError = (error, res) => {
	// Check if the error is a validation error for required fields
	if (error.code === "P2002") {
		// Check for unique constraint violation
		const field = error.meta.target[0];
		const message = `This ${field} is already taken`;
		const errorArray = [{ [field]: message }];
		res.status(422).json(errorArray);
	} else {
		res.status(500).json("Server error");
	}
};

module.exports = handlePrismaError;
