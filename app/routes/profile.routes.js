'use strict';

/**
 * Module dependencies.
 */
var profileModel = require('../model/profile.model');
var responseHandler = require('../utils/response.handler');

module.exports = function(routes) {

    // get profile for current user
    routes.get('/current', function(request, response) {
        profileModel.getCurrentProfileModel(request.headers)
            .then(responseHandler.sendJsonResponse(response))
            .catch(responseHandler.sendErrorResponse(response));
    });

    // get profile by the userId
    routes.get('/:userId', function(request, response) {
        profileModel.getProfileModelByUserId(request.params.userId, request.headers)
            .then(responseHandler.sendJsonResponse(response))
            .catch(responseHandler.sendErrorResponse(response));
    });

    return routes;
};
