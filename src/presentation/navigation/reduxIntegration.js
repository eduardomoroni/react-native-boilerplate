// @flow strict

import * as React from 'react';
import type { Provider as ProviderType } from 'react-redux';
import type { Store as StoreType } from 'redux';

export const decorateWithProvider = (
  Component: React.ComponentType<*>,
  Store: StoreType,
  Provider: ProviderType,
) => {
  const wrappedComponent = class Scene extends React.Component<*> {
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
