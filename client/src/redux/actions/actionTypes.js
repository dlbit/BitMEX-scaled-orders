import {
  WEBSOCKET_BROKEN,
  WEBSOCKET_CLOSED,
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
  WEBSOCKET_SEND
} from "@giantmachines/redux-websocket";

export const POST_ORDER = "POST_ORDER";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_ERROR = "POST_ORDER_ERROR";
export const POST_ORDER_LOADING = "POST_ORDER_LOADING";

// export const PREVIEW_PRICE = "PREVIEW_PRICE";
// export const PREVIEW_PRICE_SUCCESS = "PREVIEW_PRICE_SUCCESS";
// export const PREVIEW_PRICE_ERROR = "PREVIEW_PRICE_ERROR";

// export const PREVIEW_ORDERS = "PREVIEW_ORDERS";
export const PREVIEW_ORDERS_SUCCESS = "PREVIEW_ORDERS_SUCCESS";

const WEBSOCKET_PREFIX = "REDUX_WEBSOCKET";
export const REDUX_WEBSOCKET_BROKEN = `${WEBSOCKET_PREFIX}::${WEBSOCKET_BROKEN}`;
export const REDUX_WEBSOCKET_OPEN = `${WEBSOCKET_PREFIX}::${WEBSOCKET_OPEN}`;
export const REDUX_WEBSOCKET_CLOSED = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CLOSED}`;
export const REDUX_WEBSOCKET_MESSAGE = `${WEBSOCKET_PREFIX}::${WEBSOCKET_MESSAGE}`;
export const REDUX_WEBSOCKET_CONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CONNECT}`;
export const REDUX_WEBSOCKET_DISCONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_DISCONNECT}`;
export const REDUX_WEBSOCKET_SEND = `${WEBSOCKET_PREFIX}::${WEBSOCKET_SEND}`;
export const REDUX_WEBSOCKET_LOADING = "REDUX_WEBSOCKET_LOADING";
