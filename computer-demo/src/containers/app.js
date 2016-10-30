import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ComputerActions from '../actions/computer';
import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        const {result, setValue, setOperator} = this.props;
        return (
            <div id="main">
                <div className="row">
                    <div className="columns small-12">
                        <input value={result} />
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 1)}>1</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 2)}>2</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 3)}>3</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setOperator.bind(this, "+")}>+</a></div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 4)}>4</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 5)}>5</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 6)}>6</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setOperator.bind(this, "-")}>-</a></div>
                </div>
                <div className="row">
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 7)}>7</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 8)}>8</a></div>
                    <div className="columns small-3"><a className="button tiny" onClick={setValue.bind(this, 9)}>9</a></div>
                    <div className="columns small-3"><a className="button tiny">=</a></div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    result: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    setOperator: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        result: state.computer.result
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ComputerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);