# RhinoRequire.js
* require(); function made with Javascript for [Rhino JS Engine](https://github.com/mozilla/rhino).
* 자바스크립트로 구현된 [라이노 엔진](https://github.com/mozilla/rhino)용 require(); 함수에요.

# How to use? / 사용법
* Execute require.js via .evaluateString(); method in org.mozilla.javascript.Context before executing your source.
* 다른 소스를 실행하기 전에 org.mozilla.javascript.Context 클래스에 있는 .evaluateString(); 메소드 등을 통해 require.js 실행하면 되는거에요.

# Example / 예시
```java
org.mozilla.javascript.Context rhino = org.mozilla.javascript.Context.enter();
rhino.setOptimizationLevel(-1);
rhino.setLanguageVersion(org.mozilla.javascript.Context.VERSION_ES6);
Scriptable scope = new ImporterTopLevel(rhino);  //or Scriptable scope = rhino.initStandardObjects();
rhino.evaluateString(scope, "require.js's source", "JavaScript", 1, null);  //Execute require.js before executing your source.
rhino.evaluateString(scope, "Your JS Source", "JavaScript", 1, null);
org.mozilla.javascript.Context.exit();
```

# License / 라이선스
* [MIT License](https://github.com/DarkTornado/RhinoRequire.js/blob/master/LICENSE)
