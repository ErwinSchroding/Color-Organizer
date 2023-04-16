var path = require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"dist","assets"),
        filename:"bundle.js"
    },
    module:{
        rules:[{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}]
    }
    //devtool:"#source-map" 该版本貌似已经默认开启，添加反而报错 
}