import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { loadShapes } from './shapes.actions';
import { addItem } from '../common/components/cart/cart.actions';
import Item from '../common/components/item/item';

import './shapes.scss';

class Shapes extends React.PureComponent {
  componentDidMount = () => {
    this.props.loadShapes();
  }

  onClick = (item) => {
    this.props.addItem(item);
  };

  render() {
    return (
      <div className="whee-shapes">
        {
          this.props.shapes.map(shape =>
            <Item key={shape.get('id')} item={shape} onClick={this.onClick} />,
          )
        }
      </div>
    );
  }
}

Shapes.propTypes = {
  loadShapes: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  shapes: ImmutablePropTypes.list.isRequired,
};

const mapStateToProps = state => ({
  test: state.shapes.get('test'),
  shapes: state.shapes.get('shapes'),
});

const mapDispatchToProps = dispatch => ({
  loadShapes: () => {
    dispatch(loadShapes());
  },
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shapes);
