exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: '200',
        body: 'The time in Sao Paulo is',
    });
};