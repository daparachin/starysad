'use strict';

/**
 * campsite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::campsite.campsite');
