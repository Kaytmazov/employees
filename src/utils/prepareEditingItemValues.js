import { isObject } from './checkTypesMap';

const prepareEditingItemValues = (data, defaultValues) => {
  const values = {};

  Object.keys(defaultValues).forEach((key) => {
    if (data[key] === null || data[key] === undefined) {
      values[key] = defaultValues[key];
    } else if (isObject(data[key])) {
      values[key] = prepareEditingItemValues(data[key], defaultValues[key]);
    } else {
      values[key] = data[key];
    }
  });

  return values;
};

export default prepareEditingItemValues;
