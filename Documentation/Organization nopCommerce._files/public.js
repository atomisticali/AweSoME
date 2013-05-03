/* public */
function getE(name) {
    if (document.getElementById)
        var elem = document.getElementById(name);
    else if (document.all)
        var elem = document.all[name];
    else if (document.layers)
        var elem = document.layers[name];
    return elem;
}

function OpenWindow(query, w, h, scroll) {
    var l = (screen.width - w) / 2;
    var t = (screen.height - h) / 2;

    winprops = 'resizable=0, height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + 'w';
    if (scroll) winprops += ',scrollbars=1';
    var f = window.open(query, "_blank", winprops);
}












/*features tab */
(function ($) {
    $.fn.featurelisttabs = function (options) {
        // Default Values
        var defaults = {
            activeIndex: 0
        };
        var options = $.extend(defaults, options);

        // Main Plugin Code	 
        return this.each(function () {
            var tabs = $(".feature-wrapper-tabs").children(); // all of the tabs
            var contents = $(".feature-wrapper-contents").children("li.content"); // all of the contents
            var arrowBlock = "<div class=\"arrow\">&nbsp;</div>";
            var activeIndex = defaults.activeIndex;

            // Initializing Code
            $(contents[defaults.activeIndex]).addClass("activecontent");
            $(tabs[activeIndex]).addClass("activetab").append(arrowBlock); // Set first tab and first content to active

            // Event Bindings
            $(".feature-wrapper-tabs a").click(function () {
                if (!$(this).parent().hasClass("activetab")) { // do nothing if the clicked tab is already the active tab
                    activeIndex = $(this).parent().prevAll().length; // a clicked -> li -> previous siblings


                    //switch content
                    $(".feature-wrapper-tabs .activetab").removeClass("activetab");
                    $('.feature-wrapper-tabs .arrow').remove();
                    $(tabs[activeIndex]).addClass("activetab").append(arrowBlock); // Update tabs	
                    $(".feature-wrapper-contents .activecontent").fadeOut(0).removeClass("activecontent");
                    $(contents[activeIndex]).fadeIn(500).addClass("activecontent"); // Update content
                }
                return false;
            });
        });
    };
})(jQuery);  











/* Disable text */
/* source: http://code.jdempster.com/jQuery.DisableTextSelect/jquery.disable.text.select.js */

/**
 * .disableTextSelect - Disable Text Select Plugin
 *
 * Version: 1.1
 * Updated: 2007-11-28
 *
 * Used to stop users from selecting text
 *
 * Copyright (c) 2007 James Dempster (letssurf@gmail.com, http://www.jdempster.com/category/jquery/disabletextselect/)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 **/

/**
 * Requirements:
 * - jQuery (John Resig, http://www.jquery.com/)
 **/
(function($) {
    if ($.browser.mozilla) {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                $(this).css({
                    'MozUserSelect' : 'none'
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).css({
                    'MozUserSelect' : ''
                });
            });
        };
    } else if ($.browser.msie) {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                $(this).bind('selectstart.disableTextSelect', function() {
                    return false;
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).unbind('selectstart.disableTextSelect');
            });
        };
    } else {
        $.fn.disableTextSelect = function() {
            return this.each(function() {
                $(this).bind('mousedown.disableTextSelect', function() {
                    return false;
                });
            });
        };
        $.fn.enableTextSelect = function() {
            return this.each(function() {
                $(this).unbind('mousedown.disableTextSelect');
            });
        };
    }
})(jQuery);












/* slimbox2.js */
/* 
	Slimbox v2.01 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2009 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(v){var D=v(window),t,g,E=-1,w,C,u,x,K,r,n=!window.XMLHttpRequest,e=window.opera&&(document.compatMode=="CSS1Compat")&&(v.browser.version>=9.3),m=document.documentElement,l={},s=new Image(),I=new Image(),G,a,h,p,H,d,F,c,z,J;v(function(){v("body").append(v([G=v('<div id="lbOverlay" />')[0],a=v('<div id="lbCenter" />')[0],F=v('<div id="lbBottomContainer" />')[0]]).css("display","none"));h=v('<div id="lbImage" />').appendTo(a).append(p=v('<div style="position: relative;" />').append([H=v('<a id="lbPrevLink" href="#" />').click(A)[0],d=v('<a id="lbNextLink" href="#" />').click(f)[0]])[0])[0];c=v('<div id="lbBottom" />').appendTo(F).append([v('<a id="lbCloseLink" href="#" />').add(G).click(B)[0],z=v('<div id="lbCaption" />')[0],J=v('<div id="lbNumber" />')[0],v('<div style="clear: both;" />')[0]])[0]});v.slimbox=function(N,M,L){t=v.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},L);if(typeof N=="string"){N=[[N,M]];M=0}x=D.scrollTop()+((e?m.clientHeight:D.height())/2);K=t.initialWidth;r=t.initialHeight;v(a).css({top:Math.max(0,x-(r/2)),width:K,height:r,marginLeft:-K/2}).show();u=n||(G.currentStyle&&(G.currentStyle.position!="fixed"));if(u){G.style.position="absolute"}v(G).css("opacity",t.overlayOpacity).fadeIn(t.overlayFadeDuration);y();k(1);g=N;t.loop=t.loop&&(g.length>1);return b(M)};v.fn.slimbox=function(L,O,N){O=O||function(P){return[P.href,P.title]};N=N||function(){return true};var M=this;return M.unbind("click").click(function(){var R=this,T=0,S,P=0,Q;S=v.grep(M,function(V,U){return N.call(R,V,U)});for(Q=S.length;P<Q;++P){if(S[P]==R){T=P}S[P]=O(S[P],P)}return v.slimbox(S,T,L)})};function y(){var M=D.scrollLeft(),L=e?m.clientWidth:D.width();v([a,F]).css("left",M+(L/2));if(u){v(G).css({left:M,top:D.scrollTop(),width:L,height:D.height()})}}function k(L){v("object").add(n?"select":"embed").each(function(N,O){if(L){v.data(O,"slimbox",O.style.visibility)}O.style.visibility=L?"hidden":v.data(O,"slimbox")});var M=L?"bind":"unbind";D[M]("scroll resize",y);v(document)[M]("keydown",o)}function o(N){var M=N.keyCode,L=v.inArray;return(L(M,t.closeKeys)>=0)?B():(L(M,t.nextKeys)>=0)?f():(L(M,t.previousKeys)>=0)?A():false}function A(){return b(w)}function f(){return b(C)}function b(L){if(L>=0){E=L;w=(E||(t.loop?g.length:0))-1;C=((E+1)%g.length)||(t.loop?0:-1);q();a.className="lbLoading";l=new Image();l.onload=j;l.src=g[E][0]}return false}function j(){a.className="";v(h).css({backgroundImage:"url("+l.src+")",visibility:"hidden",display:""});v(p).width(l.width);v([p,H,d]).height(l.height);v(z).html(g[E][1]||"");v(J).html((((g.length>1)&&t.counterText)||"").replace(/{x}/,E+1).replace(/{y}/,g.length));if(w>=0){s.src=g[w][0]}if(C>=0){I.src=g[C][0]}K=h.offsetWidth;r=h.offsetHeight;var L=Math.max(0,x-(r/2));if(a.offsetHeight!=r){v(a).animate({height:r,top:L},t.resizeDuration,t.resizeEasing)}if(a.offsetWidth!=K){v(a).animate({width:K,marginLeft:-K/2},t.resizeDuration,t.resizeEasing)}v(a).queue(function(){v(F).css({width:K,top:L+r,marginLeft:-K/2,visibility:"hidden",display:""});v(h).css({display:"none",visibility:"",opacity:""}).fadeIn(t.imageFadeDuration,i)})}function i(){if(w>=0){v(H).show()}if(C>=0){v(d).show()}v(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},t.captionAnimationDuration);F.style.visibility=""}function q(){l.onload=null;l.src=s.src=I.src="";v([a,h,c]).stop(true);v([H,d,h,F]).hide()}function B(){if(E>=0){q();E=w=C=-1;v(a).hide();v(G).stop().fadeOut(t.overlayFadeDuration,k)}return false}})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
jQuery(function($) {
	$("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
		return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
	});
});


















/* jquery.jcararousel.js */
/*!
* jCarousel - Riding carousels with jQuery
*   http://sorgalla.com/jcarousel/
*
* Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*
* Built on top of the jQuery library
*   http://jquery.com
*
* Inspired by the "Carousel Component" by Bill Scott
*   http://billwscott.com/carousel/
*/

/*global window, jQuery */
(function ($) {
    // Default configuration properties.
    var defaults = {
        vertical: false,
        rtl: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: 'normal',
        easing: 'swing',
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: '<div></div>',
        buttonPrevHTML: '<div></div>',
        buttonNextEvent: 'click',
        buttonPrevEvent: 'click',
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }, windowLoaded = false;

    $(window).bind('load.jcarousel', function () { windowLoaded = true; });

    /**
    * The jCarousel object.
    *
    * @constructor
    * @class jcarousel
    * @param e {HTMLElement} The element to create the carousel for.
    * @param o {Object} A set of key/value pairs to set as configuration properties.
    * @cat Plugins/jCarousel
    */
    $.jcarousel = function (e, o) {
        this.options = $.extend({}, defaults, o || {});

        this.locked = false;
        this.autoStopped = false;

        this.container = null;
        this.clip = null;
        this.list = null;
        this.buttonNext = null;
        this.buttonPrev = null;
        this.buttonNextState = null;
        this.buttonPrevState = null;

        // Only set if not explicitly passed as option
        if (!o || o.rtl === undefined) {
            this.options.rtl = ($(e).attr('dir') || $('html').attr('dir') || '').toLowerCase() == 'rtl';
        }

        this.wh = !this.options.vertical ? 'width' : 'height';
        this.lt = !this.options.vertical ? (this.options.rtl ? 'right' : 'left') : 'top';

        // Extract skin class
        var skin = '', split = e.className.split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf('jcarousel-skin') != -1) {
                $(e).removeClass(split[i]);
                skin = split[i];
                break;
            }
        }

        if (e.nodeName.toUpperCase() == 'UL' || e.nodeName.toUpperCase() == 'OL') {
            this.list = $(e);
            this.clip = this.list.parents('.jcarousel-clip');
            this.container = this.list.parents('.jcarousel-container');
        } else {
            this.container = $(e);
            this.list = this.container.find('ul,ol').eq(0);
            this.clip = this.container.find('.jcarousel-clip');
        }

        if (this.clip.size() === 0) {
            this.clip = this.list.wrap('<div></div>').parent();
        }

        if (this.container.size() === 0) {
            this.container = this.clip.wrap('<div></div>').parent();
        }

        if (skin !== '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1) {
            this.container.wrap('<div class=" ' + skin + '"></div>');
        }

        this.buttonPrev = $('.jcarousel-prev', this.container);

        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) {
            this.buttonPrev = $(this.options.buttonPrevHTML).appendTo(this.container);
        }

        this.buttonPrev.addClass(this.className('jcarousel-prev'));

        this.buttonNext = $('.jcarousel-next', this.container);

        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) {
            this.buttonNext = $(this.options.buttonNextHTML).appendTo(this.container);
        }

        this.buttonNext.addClass(this.className('jcarousel-next'));

        this.clip.addClass(this.className('jcarousel-clip')).css({
            position: 'relative'
        });

        this.list.addClass(this.className('jcarousel-list')).css({
            overflow: 'hidden',
            position: 'relative',
            top: 0,
            margin: 0,
            padding: 0
        }).css((this.options.rtl ? 'right' : 'left'), 0);

        this.container.addClass(this.className('jcarousel-container')).css({
            position: 'relative'
        });

        if (!this.options.vertical && this.options.rtl) {
            this.container.addClass('jcarousel-direction-rtl').attr('dir', 'rtl');
        }

        var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var li = this.list.children('li');

        var self = this;

        if (li.size() > 0) {
            var wh = 0, j = this.options.offset;
            li.each(function () {
                self.format(this, j++);
                wh += self.dimension(this, di);
            });

            this.list.css(this.wh, (wh + 100) + 'px');

            // Only set if not explicitly passed as option
            if (!o || o.size === undefined) {
                this.options.size = li.size();
            }
        }

        // For whatever reason, .show() does not work in Safari...
        this.container.css('display', 'block');
        this.buttonNext.css('display', 'block');
        this.buttonPrev.css('display', 'block');

        this.funcNext = function () { self.next(); };
        this.funcPrev = function () { self.prev(); };
        this.funcResize = function () {
            if (self.resizeTimer) {
                clearTimeout(self.resizeTimer);
            }

            self.resizeTimer = setTimeout(function () {
                self.reload();
            }, 100);
        };

        if (this.options.initCallback !== null) {
            this.options.initCallback(this, 'init');
        }

        if (!windowLoaded && $.browser.safari) {
            this.buttons(false, false);
            $(window).bind('load.jcarousel', function () { self.setup(); });
        } else {
            this.setup();
        }
    };

    // Create shortcut for internal use
    var $jc = $.jcarousel;

    $jc.fn = $jc.prototype = {
        jcarousel: '0.2.8'
    };

    $jc.fn.extend = $jc.extend = $.extend;

    $jc.fn.extend({
        /**
        * Setups the carousel.
        *
        * @method setup
        * @return undefined
        */
        setup: function () {
            this.first = null;
            this.last = null;
            this.prevFirst = null;
            this.prevLast = null;
            this.animating = false;
            this.timer = null;
            this.resizeTimer = null;
            this.tail = null;
            this.inTail = false;

            if (this.locked) {
                return;
            }

            this.list.css(this.lt, this.pos(this.options.offset) + 'px');
            var p = this.pos(this.options.start, true);
            this.prevFirst = this.prevLast = null;
            this.animate(p, false);

            $(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);

            if (this.options.setupCallback !== null) {
                this.options.setupCallback(this);
            }
        },

        /**
        * Clears the list and resets the carousel.
        *
        * @method reset
        * @return undefined
        */
        reset: function () {
            this.list.empty();

            this.list.css(this.lt, '0px');
            this.list.css(this.wh, '10px');

            if (this.options.initCallback !== null) {
                this.options.initCallback(this, 'reset');
            }

            this.setup();
        },

        /**
        * Reloads the carousel and adjusts positions.
        *
        * @method reload
        * @return undefined
        */
        reload: function () {
            if (this.tail !== null && this.inTail) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);
            }

            this.tail = null;
            this.inTail = false;

            if (this.options.reloadCallback !== null) {
                this.options.reloadCallback(this);
            }

            if (this.options.visible !== null) {
                var self = this;
                var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
                this.list.children('li').each(function (i) {
                    wh += self.dimension(this, di);
                    if (i + 1 < self.first) {
                        lt = wh;
                    }
                });

                this.list.css(this.wh, wh + 'px');
                this.list.css(this.lt, -lt + 'px');
            }

            this.scroll(this.first, false);
        },

        /**
        * Locks the carousel.
        *
        * @method lock
        * @return undefined
        */
        lock: function () {
            this.locked = true;
            this.buttons();
        },

        /**
        * Unlocks the carousel.
        *
        * @method unlock
        * @return undefined
        */
        unlock: function () {
            this.locked = false;
            this.buttons();
        },

        /**
        * Sets the size of the carousel.
        *
        * @method size
        * @return undefined
        * @param s {Number} The size of the carousel.
        */
        size: function (s) {
            if (s !== undefined) {
                this.options.size = s;
                if (!this.locked) {
                    this.buttons();
                }
            }

            return this.options.size;
        },

        /**
        * Checks whether a list element exists for the given index (or index range).
        *
        * @method get
        * @return bool
        * @param i {Number} The index of the (first) element.
        * @param i2 {Number} The index of the last element.
        */
        has: function (i, i2) {
            if (i2 === undefined || !i2) {
                i2 = i;
            }

            if (this.options.size !== null && i2 > this.options.size) {
                i2 = this.options.size;
            }

            for (var j = i; j <= i2; j++) {
                var e = this.get(j);
                if (!e.length || e.hasClass('jcarousel-item-placeholder')) {
                    return false;
                }
            }

            return true;
        },

        /**
        * Returns a jQuery object with list element for the given index.
        *
        * @method get
        * @return jQuery
        * @param i {Number} The index of the element.
        */
        get: function (i) {
            return $('>.jcarousel-item-' + i, this.list);
        },

        /**
        * Adds an element for the given index to the list.
        * If the element already exists, it updates the inner html.
        * Returns the created element as jQuery object.
        *
        * @method add
        * @return jQuery
        * @param i {Number} The index of the element.
        * @param s {String} The innerHTML of the element.
        */
        add: function (i, s) {
            var e = this.get(i), old = 0, n = $(s);

            if (e.length === 0) {
                var c, j = $jc.intval(i);
                e = this.create(i);
                while (true) {
                    c = this.get(--j);
                    if (j <= 0 || c.length) {
                        if (j <= 0) {
                            this.list.prepend(e);
                        } else {
                            c.after(e);
                        }
                        break;
                    }
                }
            } else {
                old = this.dimension(e);
            }

            if (n.get(0).nodeName.toUpperCase() == 'LI') {
                e.replaceWith(n);
                e = n;
            } else {
                e.empty().append(s);
            }

            this.format(e.removeClass(this.className('jcarousel-item-placeholder')), i);

            var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var wh = this.dimension(e, di) - old;

            if (i > 0 && i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');
            }

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

            return e;
        },

        /**
        * Removes an element for the given index from the list.
        *
        * @method remove
        * @return undefined
        * @param i {Number} The index of the element.
        */
        remove: function (i) {
            var e = this.get(i);

            // Check if item exists and is not currently visible
            if (!e.length || (i >= this.first && i <= this.last)) {
                return;
            }

            var d = this.dimension(e);

            if (i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');
            }

            e.remove();

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
        },

        /**
        * Moves the carousel forwards.
        *
        * @method next
        * @return undefined
        */
        next: function () {
            if (this.tail !== null && !this.inTail) {
                this.scrollTail(false);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size !== null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
            }
        },

        /**
        * Moves the carousel backwards.
        *
        * @method prev
        * @return undefined
        */
        prev: function () {
            if (this.tail !== null && this.inTail) {
                this.scrollTail(true);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size !== null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
            }
        },

        /**
        * Scrolls the tail of the carousel.
        *
        * @method scrollTail
        * @return undefined
        * @param b {Boolean} Whether scroll the tail back or forward.
        */
        scrollTail: function (b) {
            if (this.locked || this.animating || !this.tail) {
                return;
            }

            this.pauseAuto();

            var pos = $jc.intval(this.list.css(this.lt));

            pos = !b ? pos - this.tail : pos + this.tail;
            this.inTail = !b;

            // Save for callbacks
            this.prevFirst = this.first;
            this.prevLast = this.last;

            this.animate(pos);
        },

        /**
        * Scrolls the carousel to a certain position.
        *
        * @method scroll
        * @return undefined
        * @param i {Number} The index of the element to scoll to.
        * @param a {Boolean} Flag indicating whether to perform animation.
        */
        scroll: function (i, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.pauseAuto();
            this.animate(this.pos(i), a);
        },

        /**
        * Prepares the carousel and return the position for a certian index.
        *
        * @method pos
        * @return {Number}
        * @param i {Number} The index of the element to scoll to.
        * @param fv {Boolean} Whether to force last item to be visible.
        */
        pos: function (i, fv) {
            var pos = $jc.intval(this.list.css(this.lt));

            if (this.locked || this.animating) {
                return pos;
            }

            if (this.options.wrap != 'circular') {
                i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);
            }

            var back = this.first > i;

            // Create placeholders, new list width/height
            // and new list position
            var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
            var c = back ? this.get(f) : this.get(this.last);
            var j = back ? f : f - 1;
            var e = null, l = 0, p = false, d = 0, g;

            while (back ? --j >= i : ++j < i) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    c[back ? 'before' : 'after'](e);

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);

                if (p) {
                    l += d;
                }

                if (this.first !== null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size === null || j <= this.options.size)))) {
                    pos = back ? pos + d : pos - d;
                }
            }

            // Calculate visible items
            var clipping = this.clipping(), cache = [], visible = 0, v = 0;
            c = this.get(i - 1);
            j = i;

            while (++visible) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    // This should only happen on a next scroll
                    if (c.length === 0) {
                        this.list.prepend(e);
                    } else {
                        c[back ? 'before' : 'after'](e);
                    }

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);
                if (d === 0) {
                    throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
                }

                if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size) {
                    cache.push(e);
                } else if (p) {
                    l += d;
                }

                v += d;

                if (v >= clipping) {
                    break;
                }

                j++;
            }

            // Remove out-of-range placeholders
            for (var x = 0; x < cache.length; x++) {
                cache[x].remove();
            }

            // Resize list
            if (l > 0) {
                this.list.css(this.wh, this.dimension(this.list) + l + 'px');

                if (back) {
                    pos -= l;
                    this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
                }
            }

            // Calculate first and last item
            var last = i + visible - 1;
            if (this.options.wrap != 'circular' && this.options.size && last > this.options.size) {
                last = this.options.size;
            }

            if (j > last) {
                visible = 0;
                j = last;
                v = 0;
                while (++visible) {
                    e = this.get(j--);
                    if (!e.length) {
                        break;
                    }
                    v += this.dimension(e);
                    if (v >= clipping) {
                        break;
                    }
                }
            }

            var first = last - visible + 1;
            if (this.options.wrap != 'circular' && first < 1) {
                first = 1;
            }

            if (this.inTail && back) {
                pos += this.tail;
                this.inTail = false;
            }

            this.tail = null;
            if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
                var m = $jc.intval(this.get(last).css(!this.options.vertical ? 'marginRight' : 'marginBottom'));
                if ((v - m) > clipping) {
                    this.tail = v - clipping - m;
                }
            }

            if (fv && i === this.options.size && this.tail) {
                pos -= this.tail;
                this.inTail = true;
            }

            // Adjust position
            while (i-- > first) {
                pos += this.dimension(this.get(i));
            }

            // Save visible item range
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = first;
            this.last = last;

            return pos;
        },

        /**
        * Animates the carousel to a certain position.
        *
        * @method animate
        * @return undefined
        * @param p {Number} Position to scroll to.
        * @param a {Boolean} Flag indicating whether to perform animation.
        */
        animate: function (p, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.animating = true;

            var self = this;
            var scrolled = function () {
                self.animating = false;

                if (p === 0) {
                    self.list.css(self.lt, 0);
                }

                if (!self.autoStopped && (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size === null || self.last < self.options.size || (self.last == self.options.size && self.tail !== null && !self.inTail))) {
                    self.startAuto();
                }

                self.buttons();
                self.notify('onAfterAnimation');

                // This function removes items which are appended automatically for circulation.
                // This prevents the list from growing infinitely.
                if (self.options.wrap == 'circular' && self.options.size !== null) {
                    for (var i = self.prevFirst; i <= self.prevLast; i++) {
                        if (i !== null && !(i >= self.first && i <= self.last) && (i < 1 || i > self.options.size)) {
                            self.remove(i);
                        }
                    }
                }
            };

            this.notify('onBeforeAnimation');

            // Animate
            if (!this.options.animation || a === false) {
                this.list.css(this.lt, p + 'px');
                scrolled();
            } else {
                var o = !this.options.vertical ? (this.options.rtl ? { 'right': p} : { 'left': p }) : { 'top': p };
                // Define animation settings.
                var settings = {
                    duration: this.options.animation,
                    easing: this.options.easing,
                    complete: scrolled
                };
                // If we have a step callback, specify it as well.
                if ($.isFunction(this.options.animationStepCallback)) {
                    settings.step = this.options.animationStepCallback;
                }
                // Start the animation.
                this.list.animate(o, settings);
            }
        },

        /**
        * Starts autoscrolling.
        *
        * @method auto
        * @return undefined
        * @param s {Number} Seconds to periodically autoscroll the content.
        */
        startAuto: function (s) {
            if (s !== undefined) {
                this.options.auto = s;
            }

            if (this.options.auto === 0) {
                return this.stopAuto();
            }

            if (this.timer !== null) {
                return;
            }

            this.autoStopped = false;

            var self = this;
            this.timer = window.setTimeout(function () { self.next(); }, this.options.auto * 1000);
        },

        /**
        * Stops autoscrolling.
        *
        * @method stopAuto
        * @return undefined
        */
        stopAuto: function () {
            this.pauseAuto();
            this.autoStopped = true;
        },

        /**
        * Pauses autoscrolling.
        *
        * @method pauseAuto
        * @return undefined
        */
        pauseAuto: function () {
            if (this.timer === null) {
                return;
            }

            window.clearTimeout(this.timer);
            this.timer = null;
        },

        /**
        * Sets the states of the prev/next buttons.
        *
        * @method buttons
        * @return undefined
        */
        buttons: function (n, p) {
            if (n == null) {
                n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size === null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size !== null && this.last >= this.options.size) {
                    n = this.tail !== null && !this.inTail;
                }
            }

            if (p == null) {
                p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size !== null && this.first == 1) {
                    p = this.tail !== null && this.inTail;
                }
            }

            var self = this;

            if (this.buttonNext.size() > 0) {
                this.buttonNext.unbind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);

                if (n) {
                    this.buttonNext.bind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);
                }

                this.buttonNext[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);

                if (this.options.buttonNextCallback !== null && this.buttonNext.data('jcarouselstate') != n) {
                    this.buttonNext.each(function () { self.options.buttonNextCallback(self, this, n); }).data('jcarouselstate', n);
                }
            } else {
                if (this.options.buttonNextCallback !== null && this.buttonNextState != n) {
                    this.options.buttonNextCallback(self, null, n);
                }
            }

            if (this.buttonPrev.size() > 0) {
                this.buttonPrev.unbind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);

                if (p) {
                    this.buttonPrev.bind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);
                }

                this.buttonPrev[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

                if (this.options.buttonPrevCallback !== null && this.buttonPrev.data('jcarouselstate') != p) {
                    this.buttonPrev.each(function () { self.options.buttonPrevCallback(self, this, p); }).data('jcarouselstate', p);
                }
            } else {
                if (this.options.buttonPrevCallback !== null && this.buttonPrevState != p) {
                    this.options.buttonPrevCallback(self, null, p);
                }
            }

            this.buttonNextState = n;
            this.buttonPrevState = p;
        },

        /**
        * Notify callback of a specified event.
        *
        * @method notify
        * @return undefined
        * @param evt {String} The event name
        */
        notify: function (evt) {
            var state = this.prevFirst === null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

            // Load items
            this.callback('itemLoadCallback', evt, state);

            if (this.prevFirst !== this.first) {
                this.callback('itemFirstInCallback', evt, state, this.first);
                this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
            }

            if (this.prevLast !== this.last) {
                this.callback('itemLastInCallback', evt, state, this.last);
                this.callback('itemLastOutCallback', evt, state, this.prevLast);
            }

            this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
        },

        callback: function (cb, evt, state, i1, i2, i3, i4) {
            if (this.options[cb] == null || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation')) {
                return;
            }

            var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

            if (!$.isFunction(callback)) {
                return;
            }

            var self = this;

            if (i1 === undefined) {
                callback(self, state, evt);
            } else if (i2 === undefined) {
                this.get(i1).each(function () { callback(self, this, i1, state, evt); });
            } else {
                var call = function (i) {
                    self.get(i).each(function () { callback(self, this, i, state, evt); });
                };
                for (var i = i1; i <= i2; i++) {
                    if (i !== null && !(i >= i3 && i <= i4)) {
                        call(i);
                    }
                }
            }
        },

        create: function (i) {
            return this.format('<li></li>', i);
        },

        format: function (e, i) {
            e = $(e);
            var split = e.get(0).className.split(' ');
            for (var j = 0; j < split.length; j++) {
                if (split[j].indexOf('jcarousel-') != -1) {
                    e.removeClass(split[j]);
                }
            }
            e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
                'float': (this.options.rtl ? 'right' : 'left'),
                'list-style': 'none'
            }).attr('jcarouselindex', i);
            return e;
        },

        className: function (c) {
            return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
        },

        dimension: function (e, d) {
            var el = $(e);

            if (d == null) {
                return !this.options.vertical ?
                       (el.outerWidth(true) || $jc.intval(this.options.itemFallbackDimension)) :
                       (el.outerHeight(true) || $jc.intval(this.options.itemFallbackDimension));
            } else {
                var w = !this.options.vertical ?
                    d - $jc.intval(el.css('marginLeft')) - $jc.intval(el.css('marginRight')) :
                    d - $jc.intval(el.css('marginTop')) - $jc.intval(el.css('marginBottom'));

                $(el).css(this.wh, w + 'px');

                return this.dimension(el);
            }
        },

        clipping: function () {
            return !this.options.vertical ?
                this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
                this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
        },

        index: function (i, s) {
            if (s == null) {
                s = this.options.size;
            }

            return Math.round((((i - 1) / s) - Math.floor((i - 1) / s)) * s) + 1;
        }
    });

    $jc.extend({
        /**
        * Gets/Sets the global default configuration properties.
        *
        * @method defaults
        * @return {Object}
        * @param d {Object} A set of key/value pairs to set as configuration properties.
        */
        defaults: function (d) {
            return $.extend(defaults, d || {});
        },

        intval: function (v) {
            v = parseInt(v, 10);
            return isNaN(v) ? 0 : v;
        },

        windowLoaded: function () {
            windowLoaded = true;
        }
    });

    /**
    * Creates a carousel for all matched elements.
    *
    * @example $("#mycarousel").jcarousel();
    * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
    * @result
    *
    * <div class="jcarousel-skin-name">
    *   <div class="jcarousel-container">
    *     <div class="jcarousel-clip">
    *       <ul class="jcarousel-list">
    *         <li class="jcarousel-item-1">First item</li>
    *         <li class="jcarousel-item-2">Second item</li>
    *       </ul>
    *     </div>
    *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
    *     <div class="jcarousel-next"></div>
    *   </div>
    * </div>
    *
    * @method jcarousel
    * @return jQuery
    * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
    */
    $.fn.jcarousel = function (o) {
        if (typeof o == 'string') {
            var instance = $(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function () {
                var instance = $(this).data('jcarousel');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o);
                    }
                    instance.reload();
                } else {
                    $(this).data('jcarousel', new $jc(this, o));
                }
            });
        }
    };

})(jQuery);























/* jquery.tinyscrollbar.js */
(function (a) { function b(b, c) { function w(a) { if (!(g.ratio >= 1)) { o.now = Math.min(i[c.axis] - j[c.axis], Math.max(0, o.start + ((k ? a.pageX : a.pageY) - p.start))); n = o.now * h.ratio; g.obj.css(l, -n); j.obj.css(l, o.now) } return false } function v(b) { a(document).unbind("mousemove", w); a(document).unbind("mouseup", v); j.obj.unbind("mouseup", v); document.ontouchmove = j.obj[0].ontouchend = document.ontouchend = null; return false } function u(b) { if (!(g.ratio >= 1)) { var b = b || window.event; var d = b.wheelDelta ? b.wheelDelta / 120 : -b.detail / 3; n -= d * c.wheel; n = Math.min(g[c.axis] - f[c.axis], Math.max(0, n)); j.obj.css(l, n / h.ratio); g.obj.css(l, -n); b = a.event.fix(b); b.preventDefault() } } function t(b) { p.start = k ? b.pageX : b.pageY; var c = parseInt(j.obj.css(l)); o.start = c == "auto" ? 0 : c; a(document).bind("mousemove", w); document.ontouchmove = function (b) { a(document).unbind("mousemove"); w(b.touches[0]) }; a(document).bind("mouseup", v); j.obj.bind("mouseup", v); j.obj[0].ontouchend = document.ontouchend = function (b) { a(document).unbind("mouseup"); j.obj.unbind("mouseup"); v(b.touches[0]) }; return false } function s() { j.obj.bind("mousedown", t); j.obj[0].ontouchstart = function (a) { a.preventDefault(); j.obj.unbind("mousedown"); t(a.touches[0]); return false }; i.obj.bind("mouseup", w); if (c.scroll && this.addEventListener) { e[0].addEventListener("DOMMouseScroll", u, false); e[0].addEventListener("mousewheel", u, false) } else if (c.scroll) { e[0].onmousewheel = u } } function r() { j.obj.css(l, n / h.ratio); g.obj.css(l, -n); p["start"] = j.obj.offset()[l]; var a = m.toLowerCase(); h.obj.css(a, i[c.axis]); i.obj.css(a, i[c.axis]); j.obj.css(a, j[c.axis]) } function q() { d.update(); s(); return d } var d = this; var e = b; var f = { obj: a(".viewport", b) }; var g = { obj: a(".overview", b) }; var h = { obj: a(".scrollbar", b) }; var i = { obj: a(".track", h.obj) }; var j = { obj: a(".thumb", h.obj) }; var k = c.axis == "x", l = k ? "left" : "top", m = k ? "Width" : "Height"; var n, o = { start: 0, now: 0 }, p = {}; this.update = function (a) { f[c.axis] = f.obj[0]["offset" + m]; g[c.axis] = g.obj[0]["scroll" + m]; g.ratio = f[c.axis] / g[c.axis]; h.obj.toggleClass("disable", g.ratio >= 1); i[c.axis] = c.size == "auto" ? f[c.axis] : c.size; j[c.axis] = Math.min(i[c.axis], Math.max(0, c.sizethumb == "auto" ? i[c.axis] * g.ratio : c.sizethumb)); h.ratio = c.sizethumb == "auto" ? g[c.axis] / i[c.axis] : (g[c.axis] - f[c.axis]) / (i[c.axis] - j[c.axis]); n = a == "relative" && g.ratio <= 1 ? Math.min(g[c.axis] - f[c.axis], Math.max(0, n)) : 0; n = a == "bottom" && g.ratio <= 1 ? g[c.axis] - f[c.axis] : isNaN(parseInt(a)) ? n : parseInt(a); r() }; return q() } a.tiny = a.tiny || {}; a.tiny.scrollbar = { options: { axis: "y", wheel: 40, scroll: true, size: "auto", sizethumb: "auto"} }; a.fn.tinyscrollbar = function (c) { var c = a.extend({}, a.tiny.scrollbar.options, c); this.each(function () { a(this).data("tsb", new b(a(this), c)) }); return this }; a.fn.tinyscrollbar_update = function (b) { return a(this).data("tsb").update(b) }; })(jQuery)