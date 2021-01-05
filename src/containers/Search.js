import { connect } from 'react-redux';
import { getNews, clearNews } from '../actions';
import SearchMenu from '../components/SearchMenu';

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getNews(input)),
  onClear: () => dispatch(clearNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
