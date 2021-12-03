import React from 'react';

const SpinnerComponent = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? 'spinner' : <WrappedComponent {...otherProps} />;
  };
  return Spinner;
};

export default SpinnerComponent;
