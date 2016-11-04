import { GETLIST, ADDPICTURE } from '../actions/picture';
var initializeState = {
    list: [{ url: 'http://baidu.com', name: 'leo' }]
};
export default function picture(state = initializeState, action) {
    switch (action.type) {
        case GETLIST:

            return state;
        case ADDPICTURE:
            var result = state.list.slice();
            result.push({ url: 'http://google.com', name: 'liu' });
            return { list: result };
        default:
            return state;
    }

}