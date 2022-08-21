export declare const createActionTypes: (action: string) => {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
};
/**
 *
 * @typeParam `R` the request payload type
 * @typeParam `S` the success payload type
 * @typeParam `F` the failure payload type
 */
export declare const createApiActions: <R = any, S = any, F = any>(actionTypes: ReturnType<typeof createActionTypes>) => {
    request: boolean extends (R extends never ? true : false) ? import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string> : unknown extends R ? boolean extends (R extends never ? true : false) ? [void] extends [R] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [R] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<R, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<R, string> : import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string> : [void] extends [R] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [R] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<R, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<R, string>;
    success: boolean extends (S extends never ? true : false) ? import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string> : unknown extends S ? boolean extends (S extends never ? true : false) ? [void] extends [S] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [S] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<S, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<S, string> : import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string> : [void] extends [S] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [S] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<S, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<S, string>;
    failure: boolean extends (F extends never ? true : false) ? import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string> : unknown extends F ? boolean extends (F extends never ? true : false) ? [void] extends [F] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [F] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<F, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<F, string> : import("@reduxjs/toolkit").ActionCreatorWithNonInferrablePayload<string> : [void] extends [F] ? import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string> : [undefined] extends [F] ? import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<F, string> : import("@reduxjs/toolkit").ActionCreatorWithPayload<F, string>;
};
export declare type createActionTypes = typeof createActionTypes;
export declare type createApiActions = typeof createApiActions;
