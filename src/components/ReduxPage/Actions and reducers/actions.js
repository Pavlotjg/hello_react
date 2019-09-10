const CHANGE_FIRST_VALUE = 'CHANGE_FIRST_VALUE';
const CHANGE_SECOND_VALUE = 'CHANGE_SECOND_VALUE';
const CHANGE_THIRD_VALUE = 'CHANGE_THIRD_VALUE';

export const actionChangeFirstValue = (newValue) => {
  console.log(newValue);
  return {
    type: CHANGE_FIRST_VALUE,
    payload: newValue
  }
};

export const actionChangeSecondValue = (newValue) => {
  console.log(newValue);
  return {
    type: CHANGE_SECOND_VALUE,
    payload: newValue
  }
};

export const actionChangeThirdValue = (newValue) => {
  console.log(newValue);
  return {
    type: CHANGE_THIRD_VALUE,
    payload: newValue
  }
};