/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import ChangeView from 'src/components/ChangeView';
import { changeView } from 'src/store/reducer';
import datas from 'src/datas';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  active: state.view === ownProps.from,
  data: datas[state.lang][state.view],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeView: () => {
    dispatch(changeView(ownProps.to));
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChangeView);
