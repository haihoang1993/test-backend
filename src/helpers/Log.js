"use strict";
const path = require('path');

const Trace = function (s) {
    if (typeof s === 'object' && s !== null) {
        s = JSON.stringify(s)
    }
    //const orig = Error.prepareStackTrace;
    //Error.prepareStackTrace = (_, stack) => stack;
    //const err = new Error();
    //const callee = err.stack[0];
    //Error.captureStackTrace(err, arguments.callee);
    //Error.prepareStackTrace = orig;
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, global);
    const callee = err.stack[1];
    Error.prepareStackTrace = orig;

    const callerFile = path.relative(process.cwd(), callee.getFileName());
    const callerLine = callee.getLineNumber();
    //if (e) {
    //    process.stdout.write(`\x1b[91mError: \x1b[39m`);
    //}
    process.stdout.write(`\x1b[91mLog - ${callerFile}:${callerLine}: \x1b[39m`);
    process.stdout.write(` ${s}\n\n`);
}

module.exports = {Trace};
