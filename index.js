"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiActions = exports.createActionTypes = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var createActionTypes = function (action) { return ({
    REQUEST: action.toUpperCase() + "_REQUEST",
    SUCCESS: action.toUpperCase() + "_SUCCESS",
    FAILURE: action.toUpperCase() + "_FAILURE",
}); };
exports.createActionTypes = createActionTypes;
/**
 *
 * @typeParam `R` the request payload type
 * @typeParam `S` the success payload type
 * @typeParam `F` the failure payload type
 */
var createApiActions = function (actionTypes) { return ({
    request: toolkit_1.createAction(actionTypes.REQUEST),
    success: toolkit_1.createAction(actionTypes.SUCCESS),
    failure: toolkit_1.createAction(actionTypes.FAILURE),
}); };
exports.createApiActions = createApiActions;
