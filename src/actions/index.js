import {CHANGE_AUTH} from './types';

export authenticate = (isLoggedIn) => {

	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	}
}