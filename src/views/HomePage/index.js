
// Export a function / promise / or a string:
// This function has to return a string or promised string:
module.exports = function (templateParams) {
    var html = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Title</title>'
    +
    '</head> <body> <div id="container"> </div>'+

            '</body> </html>'

    return html;
};