module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/order/count',
            handler: 'order.count',
        },
    ]
}