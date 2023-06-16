const regexes = {
    'en': /[\u0000-\u007F]/gi,
    'ru': /[\u0400-\u04FF]/gi,
    'he': /[\u0590-\u05FF]/gi,
    'zh': /[\u4e00-\u9fff^\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gi,
    'hi': /[\u0900-\u097F]/gi,
    'ar': /[\u0621-\u064A\u0660-\u0669]/gi,
    'bn': /[\u0995-\u09B9\u09CE\u09DC-\u09DF\u0985-\u0994\u09BE-\u09CC\u09D7\u09BC]/gi,
    'jp': /[\u3041-\u3096\u30A1-\u30FA]/gi,
    'uk': /[\u0404\u0454\u0406\u0456\u0407\u0457\u0490\u0491]/gi,
}

const PRIORITY = [
    'jp',
    'zh',
    'hi',
    'ar',
    'he',
    'uk',
    'bn',
    'ru',
    'en',
].reduce((a, lang, index) => {
    a[lang] = index;
    return a;
}, {});


const Module = function (str) {

    let result = 'en';
    let langs = new Set();

    for (const lang in regexes) {
        const regex = regexes[lang];

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const match = char?.match(regex);
            if (match) {
                langs.add(lang);
            }
        }
    }

    result = [...langs].sort((a, b) => PRIORITY[a] - PRIORITY[b])[0];

    return result;
}

module.exports = Module;
