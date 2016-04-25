 /*
 * @param Object For example: {fileInfo: base: "Demo.md", dir: ".../markdown-themeable-pdf/tests", ext: ".md", name: "Demo"}, root: "/", exportType: "pdf", destFileBase: "Demo.pdf", destFile: "......./markdown-themeable-pdf/tests/Demo.pdf"}
 * @returns Object {{height: string, contents: string}}
 */
module.exports = function (info) {
    return {
        height: '2cm',
        contents: '<div style="text-align: right;"><a href="https://github.com/zyzo/atom-cheatsheet">https://github.com/zyzo/atom-cheatsheet"</a></div>'
    };
};
