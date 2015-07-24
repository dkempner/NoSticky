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

    return isCloseToTop;
});

stickies.css('position', 'relative');
stickies.css('width', '100%');
