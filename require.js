/*
require.js for rhino JS Engine
© 2020 Dark Tornado, All rights reserved.
Import JS module from "/sdcard/Module/" directory via require(moduleName); or require(fileName);


MIT License

Copyright (c) 2020 Dark Tornado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function require(moduleName) {
    var module = {};
    module.exports = {};
    var exports = module.exports;

    var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
    var path = sdcard + "/Modules/" + moduleName;
    var file = new java.io.File(path);
    if (!file.exists()) {
        path = sdcard + "/Modules/" + moduleName + ".js";
        file = new java.io.File(path);
    }
    if (!file.exists()) return "";
    var fis = new java.io.FileInputStream(file);
    var isr = new java.io.InputStreamReader(fis);
    var br = new java.io.BufferedReader(isr);
    var str = br.readLine();
    var line = "";
    while ((line = br.readLine()) != null) {
        str += "\n" + line;
    }
    fis.close();
    isr.close();
    br.close();
    eval(str + "");

    return module.exports;
}

