import React from 'react';

import { New } from '../components/New';
import { Popular } from '../components/Popular';

export const withWrapperHOC = (WrappedComponent) => {
  class Wrapper extends React.Component {
    /*eslint no-useless-constructor: off*/
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.views < 100) {
        return (
          <New>
            <WrappedComponent {...this.props} />
          </New>
        );
      }

      if (this.props.views > 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props} />
          </Popular>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  }
  Wrapper.displayName = `Wrapper(${WrappedComponent.displayName || WrappedComponent.name})`;

  return Wrapper;
};
