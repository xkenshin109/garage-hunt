export const mapStateToProps = state => {
    console.log(state);
    return {

    }
};

export const mapDispatchToProps = dispatch => {

    return {
        getMe: () => {
            dispatch(requested_get())
        }
    }
};