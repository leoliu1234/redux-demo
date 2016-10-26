import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ComputerActions from '../actions/computer';
import React , {PropTypes} from 'react';

class App extends React.Component {
    render() {
        const {value}  = this.props;
        return (
            <span>{value}</span>
        );
    }
}

App.propTypes = {
    value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
        value: state.computer.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ComputerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);