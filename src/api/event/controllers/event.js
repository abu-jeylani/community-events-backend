"use strict";
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({}));
