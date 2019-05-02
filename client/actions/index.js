// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

// async action creator

export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/product/wood')
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getStain = () => {
  return (dispatch) => {
    axios.get('/api/product/stain')
      .then(response => {
        dispatch({
          type: types.GET_STAIN,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// test action creator - wood
/*export const getWood = value => {
  return {
    type: types.GET_WOOD,
    payload: [ {
      type: 'maple',
      image: 'something.jpg',
      description: 'rough',
      price: '400',
      inStock: true
    }, {
      type: 'ash',
      image: 'something.jpg',
      description: 'simple wood',
      price: '250',
      inStock: true
    } ],
  }
};*/

// test action creator - stain
/*export const getStain = value => {
  return {
    type: types.GET_STAIN,
    payload: [ {
      type: 'red',
      image: 'test.jpg',
      description: 'red',
      price: '100',
      inStock: true,
    }, {
      type: 'purple',
      image: 'test.jpg',
      description: 'purple',
      price: '100',
      inStock: true,
    } ],
  }
};*/

export const submitOrder = () => {
  return {
    type: types.SUBMIT_ORDER
  }
};

export const selectWood = (value) => {
  // console.log('value', value);
  return {
    type: types.SELECT_WOOD,
    payload: value
  }
};
export const selectStain = (value) => {
  console.log(value);
  return {
    type: types.SELECT_STAIN,
    payload: value
  }
};