'use strict';

/**
 * rent-period service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rent-period.rent-period');
