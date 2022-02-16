import * as R from 'ramda';

const renameProps = (object, propMap = {}) => R.keys(object).reduce((acc, prop) => ({
  ...acc,
  [R.propOr(prop, prop, propMap)]: object[prop],
}), {});

export default renameProps;
