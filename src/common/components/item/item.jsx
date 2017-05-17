import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from '../button/button';
import Shape from '../shape/shape';

import './item.scss';

const buttonText = 'Add to cart';

class Item extends React.PureComponent {
  onClick = () => {
    if (this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick(this.props.item);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <div className="whee-item">
        <div className="whee-item__image">
          <Shape shape={item.get('type')} />
        </div>
        <div className="whee-item__details">
          <div className="whee-item__first">
            <div className="whee-item__name whee-font-weight-bold whee-font-style-italic">
              { item.get('name') }
            </div>
            <div className="whee-item__description">
              { item.get('description') }
            </div>

          </div>
          <div className="whee-item__second">
            <div className="whee-item__price">
              { item.get('price') } { item.get('currency') }
            </div>
            <Button
              classNames="whee-item__button"
              onClick={this.onClick}
              text={buttonText}
            />
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: ImmutablePropTypes.map.isRequired,
};

export default Item;
