import {atom} from 'recoil';

const user = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default user;