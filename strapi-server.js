'use strict';

module.exports = {
    register({ strapi }) {
        strapi.customFields.register({
            name: 'code-editor-json',
            plugin: 'strapi-code-editor-custom-field',
            type: 'json',
        })
        strapi.customFields.register({
            name: 'code-editor-text',
            plugin: 'strapi-code-editor-custom-field',
            type: 'text',
        })
    },
};