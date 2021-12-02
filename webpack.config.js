// import
const path = require('path')
// nodejs에서 사용할 수 있는 path라는 전역 모듈을 가지고 와서
// path에 할당해서 아래에 사용 13

const HtmlPlugin = require('html-webpack-plugin')


// export
module.exports = {
  //parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',
  // 결과물 (번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),  
    // filename: 'main.js',
    clean: true
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]
}