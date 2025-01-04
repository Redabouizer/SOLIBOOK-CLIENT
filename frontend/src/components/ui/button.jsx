import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Button({ children, variant, className, ...props }) {
  const baseClass = 'px-4 py-2 rounded focus:outline-none focus:ring';
  const variants = {
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    link: 'text-blue-500 underline hover:no-underline',
  };
  return (
    <button
      className={classNames(baseClass, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['ghost', 'outline', 'link']),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'ghost',
  className: '',
};
