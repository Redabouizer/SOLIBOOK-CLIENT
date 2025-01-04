import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Card({ children, className, ...props }) {
  return (
    <div
      className={classNames('rounded-lg shadow-md border bg-white', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={classNames('p-4', className)} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = CardContent.defaultProps = {
  className: '',
};
