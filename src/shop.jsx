import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './common/components/header/header';
import CartContent from './common/components/cart/cart-content';
import { setOpen } from './common/components/cart/cart.actions';

const Sidebar = require('react-sidebar').default;

require('../styles/main.scss');

class App extends React.Component {
  onSetSidebarOpen = (isOpen) => {
    this.props.setOpen(isOpen);
  }

  render() {
    return (
      <Sidebar
        sidebar={<CartContent />}
        touch={false}
        open={this.props.isOpen}
        pullRight
        onSetOpen={this.onSetSidebarOpen}
      >
        <div className="whee">
          <Header />
          <main className="whee-main">
            { this.props.children }
          </main>
        </div>
      </Sidebar>

    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.cart.get('isOpen'),
});

const mapDispatchToProps = dispatch => ({
  setOpen: (isOpen) => {
    dispatch(setOpen(isOpen));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
