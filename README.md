# RhinoRequire.js
require(); function made with Javascript for [Rhino JS Engine](https://github.com/mozilla/rhino).
자바스크립트로 구현된 [라이노 엔진](https://github.com/mozilla/rhino)용 require(); 함수

# How to use?
Execute require.js via .evaluateString(); method in org.mozilla.javascript.Context before execute your source.
다른 소스를 실행하기 전에 org.mozilla.javascript.Context 클래스에 있는 .evaluateString(); 메소드 등을 통해 require.js 실행.

# Example
This example is Android app example. First, input require.js in asset directory. Then, read require.js and execute before execute your source.
이 예제는 안드로이드 앱 예제로, assets 폴더 내부에 require.js 파일을 넣고, 실행 직전에 require.js 파일을 읽어와서 실행하는 방식

# License
[MIT License](https://github.com/DarkTornado/RhinoRequire.js/blob/master/LICENSE)
