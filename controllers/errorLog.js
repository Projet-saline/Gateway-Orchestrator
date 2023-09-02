module.exports = errorLog = (err,date) => {
    console.log(date + ' | error :' + err.code);
};
