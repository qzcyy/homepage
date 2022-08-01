'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/sayhello', controller.home.sayhello);
  router.get('/user/create', controller.user.create);
};
