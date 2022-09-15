// import
const path = require("path");

// htmlplugin 가져오기
const HtmlPlugin = require("html-webpack-plugin");

// copyplugin 가져오기
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    // parcel index.html
    entry: "./js/main.js",

    // 결과물을 반환하는 설정
    output: {
        //path: path.resolve(__dirname, "dist"), 
        // 여긴 node.js에서 요구하는 절대경로를 적어야함
        // __dirname이 절대경로, dist가 지정할 디렉토리 이름
        // 근데 dist가 기본값이기에 다른 폴더 이름을 지정할 것이 아니라면 path를 사용하지 않아도 된다.
        //filename: "main.js",
        // 결과적으로 resolve() 메소드 두번째 인수와 filename에 설정한 이름이 생성되는데 dist 폴더안에 main.js가 생기는 식이다. 이름은 뭐든 됨
        // filename의 경우 위에 entry에서 지정해 놓으면 따로 설정을 하지 않아도 된다.
        clean: true
        // clean을 true로 바꾸면 최근에 생성된 파일을 제외하고 지운다
    },

    module: {
        rules: [
            {
                test: /\.s?css$/, // 확장자가 s가 붙은 scss일 수도 있고 아닌 css 일수도 있는 파일 찾는 정규식
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader" // 순서 중요
                ]
            },
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },

    // htmlplugin 사용하기
    // 결과물을 처리할때 사용하는 플러그인의 설정 
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "static" } // 생성한 폴더 
            ]
        })
    ],

    devServer: {
        host: "localhost"
    }
}


