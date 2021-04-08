// const proxy = require("http-proxy-middleware");

// module.exports = function(app){
//     app.use("/miaov",proxy({
//         target:"https://data.miaov.com/",
//         secure: true,
//         changeOrigin: true,
//         pathRewrite: {
//             "^/miaov":""
//         },
//         cookieDomainRewrite:"https://data.miaov.com/"
//     }))
// };

const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/miaov',
        {
            target: 'http://data.miaov.com/',
            pathRewrite: {
              "^/miaov":""
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            cookieDomainRewrite:"http://data.miaov.com/"
        }
    ));
};
