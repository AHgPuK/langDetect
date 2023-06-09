const regexes = {
    'en': /[\u0000-\u007F]/gi,
    'ru': /[\u0400-\u04FF]/gi,
    'he': /[\u0590-\u05FF]/gi,
    'zh': /[\u3000\u3400-\u4DBF\u4E00-\u9FFF]/gi,
    'hi': /[\u0900-\u097F]/gi,
    'ar': /[\u0621-\u064A\u0660-\u0669]/gi,
    'bn': /[\u0995-\u09B9\u09CE\u09DC-\u09DF\u0985-\u0994\u09BE-\u09CC\u09D7\u09BC]/gi,
}

const Module = function (str) {

    let result = 'en';

    for (const lang in regexes) {
        const regex = regexes[lang];
        const match = str.trim()[0]?.match(regex);
        if (match) {
            result = lang;
            break;
        }
    }

    return result;
}

module.exports = Module;
