import React from 'react';
import { map } from 'lodash';

function renderArray<T>(
  array: Array<T>,
  renderFunction: (item: T, index: number, arr: Array<T>) => React.ReactNode,
  text: string,
): React.ReactNode {
  return array.length > 0 ? (
    map(array, renderFunction)
  ) : (
    <div>
      {text}
    </div>
  );
}

export default renderArray;
