var windowWidth = window.innerWidth;
var $body = $('body');
var style = document.createElement('style');
style.innerHTML = ".noSticky: {position: relative !imporant; width: 100% !important}";
$body.append(style);
var stickies = $('*').filter(function() {
    var $this = $(this);
    var isFixed = $this.css('position').toLowerCase().indexOf('fixed') > -1;
    if (!isFixed) return false;
    var top = $this.css('top').toLowerCase();
    top = top.replace('px', '');
    top = top.replace('%', '');
    top = top.replace(' ', '');
    var num;
    try {
        num = parseInt(top, 0);
    } catch (e) {
        return false;
    }

    var isCloseToTop = num < 5 && num > -5;
    if (!isCloseToTop) return false;

    var width = $this.width();
    console.log('this width = ' + width);
    var difference = windowWidth - width;
    console.log('difference = ' + difference);

    var percent = difference / windowWidth;
    console.log('percent = ' + percent);
    var within10Percent = percent <= 0.1;

    return within10Percent;

});

stickies.addClass('noSticky');
