
export const logging_in = (payload) => ({
    type: 'LOGGED_IN',
    payload: {
        user: payload.username,
        pass: payload.password
    }
});
export const requested_get = (payload) =>({
    type: 'REQUESTED_GET',
    payload:{
        username: payload.username,
        pass: payload.password
    }
});