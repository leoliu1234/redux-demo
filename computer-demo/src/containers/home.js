import React,{ PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import * as HomeActions from '../actions/home';

class Home extends React.Component{
    render(){
        return (
            <div>I'm Leo!<br/><Link to="/">App</Link></div>
        );
    }
}



function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);