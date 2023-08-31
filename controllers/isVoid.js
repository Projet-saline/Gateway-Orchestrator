const isVoid = (data) => {
    if (data === undefined || data === null || data === "") {
        return true;
    }
    return false;
};