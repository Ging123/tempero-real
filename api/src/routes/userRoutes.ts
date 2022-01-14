import express from 'express';

const route = express.Router();
const addProductInUserCartRoute = require('../use cases/user/addProductInCart/controller');
const confirmUserEmailRoute = require('../use cases/user/confirmEmail/controller');
const createUserRoute = require('../use cases/user/create/controller');
const deleteUserRoute = require('../use cases/user/delete/controller');
const getUserRoute = require('../use cases/user/get/controller');
const loginUserRoute = require('../use cases/user/login/controller');
const logoutUserRoute = require('../use cases/user/logout/controller');
const refreshUserToken = require('../use cases/user/refreshToken/controller');
const removeProductOfUserCartRoute = require('../use cases/user/removeProductOfTheCart/controller');

route.use(addProductInUserCartRoute);
route.use(confirmUserEmailRoute);
route.use(createUserRoute);
route.use(deleteUserRoute);
route.use(getUserRoute);
route.use(loginUserRoute);
route.use(logoutUserRoute);
route.use(refreshUserToken);
route.use(removeProductOfUserCartRoute);

module.exports = route;