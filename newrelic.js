'use strict';

exports.config = {
  app_name: ['api-meli'],
  distributed_tracing: {
    enabled: true
  },
  license_key: '1b070a54e9979d69c9784128f91b213d426d691f', //API_KEY_FREE 15 DAYS (=
  logging: {
    enabled: false,
  },
  attributes: {
    include: ['request.parameters.*'],
  },
};