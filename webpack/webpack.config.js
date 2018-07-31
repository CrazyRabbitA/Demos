module.exports={
    entry:   {
        js:__dirname +'/start/es6.js',//已多次提及的唯一入口文件
        scss:__dirname+'/start/scss.scss'
    },
    output: {
      path: __dirname +"/end",//打包后的文件存放的地方
      filename: "[name]"//打包后输出文件的文件名
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                options:{
                    presets:[
                        "env"
                    ]
                }
            }              
            },
            
            {
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},      
                    {loader:"sass-loader"}
            ]
            }
        ]
    }
}