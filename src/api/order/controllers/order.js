'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order');
module.exports = createCoreController('api::order.order', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.query('api::order.order').count({ where: query });
    }
});