import React from 'react';

export const decorateWithProvider = (Component, Store, Provider) => {
  const wrappedComponent = class Scene extends React.Component {
    render() {
      return (
        <Provider store={Store}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };

  return () => wrappedComponent;
};
