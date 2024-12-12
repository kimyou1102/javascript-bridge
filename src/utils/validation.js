import { ERROR_MESSAGE } from '../constants/message.js';
import { createError } from './createError.js';

export const validateLength = (input) => {
  checkNumber(input);
  checkRange(3, 20, input);
};

export const validatePosition = (input) => {
  const arr = ['U', 'D'];
  checkIncluding(arr, input, ERROR_MESSAGE.POSITION);
};

export const validateRetry = (input) => {
  const arr = ['R', 'Q'];
  checkIncluding(arr, input, ERROR_MESSAGE.RETRY);
};

const checkIncluding = (arr, input, message) => {
  if (!arr.includes(input)) {
    createError(message);
  }
};

const checkNumber = (number) => {
  if (isNaN(number)) {
    createError(ERROR_MESSAGE.BRIDGE_LENGTH);
  }
};

const checkRange = (min, max, number) => {
  if (number < min || number > max) {
    createError(ERROR_MESSAGE.BRIDGE_LENGTH);
  }
};
