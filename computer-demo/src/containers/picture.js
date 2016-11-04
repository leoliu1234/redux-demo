import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import * as PictureActions from '../actions/picture'

class Picture extends React.Component {

    render() {
        const {list, addPicture } = this.props;
        var pictures = list.map(function (item) {
            return (<tr>
                <td>{item.url}</td>
                <td>{item.name}</td>
            </tr>)
        });
        return (
            <div>
                <table>{pictures}</table>
                <a className="button tiny" onClick={addPicture}>Add</a>
            </div>
        );
    }
}

Picture.propTypes = {
    list: React.PropTypes.array.isRequired,
    addPicture: React.PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
        list: state.picture.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PictureActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture);