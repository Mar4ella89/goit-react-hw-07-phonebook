import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const getFilter = useSelector(store => store.filter);

  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label className={css.labelFind}>
      Find contacts by name
      <input
        type="text"
        className={css.inputFind}
        value={getFilter}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
