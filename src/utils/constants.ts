// API HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
} as const;

// Web UI constants
const Constants = {
  COUNTS: {
    ONE: 1,
    TWO: 2,
    THREE: 3,
  },

  PAGE_TITLES: {
    PRODUCTS: 'Products',
    YOUR_CART: 'Your Cart',
    CHECKOUT_INFO: 'Checkout: Your Information',
    CHECKOUT_OVERVIEW: 'Checkout: Overview',
    ORDER_COMPLETE: 'Thank you for your order!',
  },

  MESSAGES: {
    ORDER_DISPATCHED: 'Your order has been dispatched',
  },

  PRODUCT_NAMES: {
    BACKPACK: 'Sauce Labs Backpack',
    BIKE_LIGHT: 'Sauce Labs Bike Light',
    BOLT_TSHIRT: 'Sauce Labs Bolt T-Shirt',
  },

  PRODUCT_IDS: {
    BACKPACK: 'sauce-labs-backpack',
    BIKE_LIGHT: 'sauce-labs-bike-light',
    BOLT_TSHIRT: 'sauce-labs-bolt-t-shirt',
    FLEECE_JACKET: 'sauce-labs-fleece-jacket',
  },
} as const;

export default Constants;
