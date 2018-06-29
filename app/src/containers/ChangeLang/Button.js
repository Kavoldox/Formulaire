/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Button from 'src/components/ChangeLang/Button';
import { changeLang } from 'src/store/reducer';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  active: state.lang === ownProps.lang,
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeLang: () => {
    dispatch(changeLang(ownProps.lang));
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Button);
