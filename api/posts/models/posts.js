'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/60635e4c841948389fbf28ea');
    },
    async afterUpdate(result, params, data) {
      axios.post('https://api.netlify.com/build_hooks/60635e4c841948389fbf28ea');
    },
  }
};
