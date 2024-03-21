module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/product/count',
            handler: 'product.count',
        },
    ]
}