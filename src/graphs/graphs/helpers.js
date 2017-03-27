import mapValues from 'lodash/mapValues';
import find from 'lodash/find';

export const hasDimensions = (dimensions, dimensionTypes) => {
  return dimensionTypes.every(dimension => {
    return dimensions[dimension.field] || dimension.optional;
  });
};

export const mapData = (data, dimensions, dimensionTypes, dataKey) => {
  return data.map(d => {
    const newD = mapValues(dimensions, (value, key) => {
      const dimensionType = find(dimensionTypes, {field: key});
      if (dimensionType.type === 'number') {
        return +d[value] || 0;
      }
      return d[value];
    });
    newD.id = d[dataKey];
    return newD;
  });
};