import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export const KuiToolBarFooter = ({ children, className, ...rest }) => {
  const classes = classNames('kuiToolBarFooter', className);
  return <div className={classes} {...rest}>{children}</div>;
};
KuiToolBarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
