const verifyJWT = require("../../../app/middleware/verifyJWT");
const RecommendController = require("../../../app/controllers/RecommendController");
const limiter = require("../../../app/middleware/limiter");
const router = require("express").Router()

/**
  * @api {post} /published a review/recommend post
  * @apiDescription published a review/recommend post
  * @apiPermission anyone
 */
router.route("/").post(limiter, verifyJWT, RecommendController.creatRecommend);

/**
  * @api {put} /update recommend by id
  * @apiDescription update recommendation
  * @apiPermission anyone
 */  
router.route("/recommend/:id").put(limiter, verifyJWT, RecommendController.updateRecommend)

/**
  * @api {get} /get all recommend / review
  * @apiDescription get recommend / review
  * @apiPermission anyone
 */  
router.route("/recommend").get(limiter, RecommendController.getRecommend)

/**
 * @api {get} /get all books 
 * @apiDescription get all books from google api
 * @apiPermission anyone
 */
router.route("/").get(limiter, RecommendController.getAllBooks);

/**
 * @api {get} /get single book using params
 * @apiDescription get single book
 * @apiPermission anyone
 */
router.route("/:id").get(limiter, RecommendController.getBookDetails);

module.exports = router;