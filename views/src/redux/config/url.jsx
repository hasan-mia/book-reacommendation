import config from './config';

const url = {};
// authentication
url.signUp = `${config.baseUrl}api/v1/auth/register`;
url.signIn = `${config.baseUrl}api/v1/auth/login`;
// user information
url.allUser = `${config.baseUrl}api/v1/user/all`; // [get]
url.userInfo = `${config.baseUrl}api/v1/user`; // params as id
url.updateUser = `${config.baseUrl}api/v1/user/update`; // [put] params as id
url.deleteUser = `${config.baseUrl}api/v1/user/delete`; // [delete] params as id

// books api
url.getAllBook = `${config.baseUrl}api/v1/books`; // [get]
url.getSingleBook = `${config.baseUrl}api/v1/books`; // [get] id with parameters
// recommand api
url.createRecommend = `${config.baseUrl}api/v1/books`; // [post]
url.updateRecommend = `${config.baseUrl}api/v1/books/recommend/update`; // id with parameters  [put]
url.deleteRecommend = `${config.baseUrl}api/v1/books/recommend/delete`; // id with parameters [delete]
url.allRecommend = `${config.baseUrl}api/v1/books/recommend`; // [get]

export default url;
