import React from 'react';
import { connect } from 'react-redux';
import { resolveComponent } from '../utils/componentResolver';

const DefaultLayout = ({ children, component }) => {
  const ComponentToRender = resolveComponent(component);

  return (
    <div className="default-layout">
      <div className="receive-any-component">
        {ComponentToRender && <ComponentToRender />}
      </div>
      <main>
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  component: state.componentId,
});

export default connect(mapStateToProps)(DefaultLayout);
