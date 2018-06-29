/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */


/*
 * Code
 */
const Button = ({ lang, changeLang, active }) => (
  <button
    id={`changelang-${lang}`}
    className={classNames(
      'changelang-flag',
      { 'changelang-flag--active': active },
    )}
    onClick={changeLang}
  />
);
Button.propTypes = {
  active: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  changeLang: PropTypes.func.isRequired,
};


/*
 * Export default
 */
export default Button;
