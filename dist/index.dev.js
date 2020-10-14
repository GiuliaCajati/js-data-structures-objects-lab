"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var driver = {};

var updateDriverWithKeyAndValue = function updateDriverWithKeyAndValue(driver, key, value) {
  // UpdatesDriver  = { ...driver, ...{ [key]: value } }
  var UpdatesDriver = Object.assign({}, driver, _defineProperty({}, key, value));
  return UpdatesDriver;
};

var destructivelyUpdateDriverWithKeyAndValue = function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

var deleteFromDriverByKey = function deleteFromDriverByKey(driver, key) {
  var updatedDriver = _objectSpread({}, driver);

  delete updatedDriver[key];
  return updatedDriver;
};

var destructivelyDeleteFromDriverByKey = function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};