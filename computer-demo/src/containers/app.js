import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ComputerActions from '../actions/computer';
import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        const {value, show} = this.props;
        return (
            <div id="main">
                <div className="row">
                    <div className="columns small-12">
                        <input value={value} />
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny" onClick={show}>1</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={show}>2</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={show}>3</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={show}>+</a></div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny">4</a></div>
                    <div className="columns small-3"><a className="button tiny">5</a></div>
                    <div className="columns small-3"><a className="button tiny">6</a></div>
                    <div className="columns small-3"><a className="button tiny">-</a></div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny">7</a></div>
                    <div className="columns small-3"><a className="button tiny">8</a></div>
                    <div className="columns small-3"><a className="button tiny">9</a></div>
                    <div className="columns small-3"><a className="button tiny">=</a></div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.number.isRequired,
    show: PropTypes.func.isRequired
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