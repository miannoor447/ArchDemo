const getPaginationParams  = require('./getPaginationParams');
const validateTokenMiddleware = require('./validateTokenMiddleWare');

function generateRouterConfigurations(apiRoutes) {
  const routerConfigs = [];
  for (const route of apiRoutes) {
    const { path, method, handler, pagination, skipValidation } = route; // Added skipValidation
    const routeConfig = (req, res) => {
      if (pagination) {
        const { page, offset, limit } = getPaginationParams(req);
        const values = { page, offset, limit };
        handler(req, res, values);
      } else {
        handler(req, res);
      }
    };
    const middleware = skipValidation ? [] : [validateTokenMiddleware(userToken)];
    routerConfigs.push({
      path,
      method,
      middleware,
      handler: routeConfig,
    });
  }
  return routerConfigs;
}
module.exports = generateRouterConfigurations;
