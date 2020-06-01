function navigationResize() {
    var t = $(document).width();
    if (t > SMALL_WIDTH) {
        $("nav#menu .nav li.more").before($("#overflow > li"));
        var e, n, i, o = $("nav#menu .nav > li.more"),
            r = $("nav#menu .nav > li:not(.more)"),
            a = navItemWidth = o.width(),
            s = $("nav#menu .nav").width() - 20;
        for (r.each(function() {
                navItemWidth += $(this).width()
            }), navItemWidth > s ? o.show() : o.hide(); navItemWidth > s;) navItemWidth -= r.last().width(), r.last().prependTo("nav#menu #overflow"), r.splice(-1, 1);
        e = $("nav#menu .nav li.more").offset().left, i = $("nav#menu #overflow").width(), n = e + a - i
    }
}



function takeover(t, e) {
    ! function(n) {
        var i = [];
        n(".ads_items a").each(function(o) {
            n(this).mouseover(function() {
                var o = n(this).attr("href"),
                    r = n("img", this),
                    a = r.attr("src"),
                    s = get_name_from_url(a);
                return !i[s] && (hover = !0, void(s == t && hover && (n.fancybox.open([{
                    href: e,
                    title: 'This ads will be closed in <span id="timer">' + TIMER + "</span> seconds."
                }], {
                    afterShow: function() {
                        n(".fancybox-image").css("cursor", "pointer"), n(".fancybox-image").click(function() {
                            window.open(o, "_blank"), n.fancybox.close(!0)
                        }), timeout = setInterval("timeout_trigger()", 1e3)
                    },
                    afterClose: function() {
                        clearInterval(timeout)
                    }
                }), i[s] = s, hover = !1)))
            })
        })
    }(jQuery)
}

function show_large(t, e) {
    ! function(n) {
        n(document).ready(function() {
            n([e]).preload(), n(".ads a").each(function(i) {
                var o = n(this).attr("href"),
                    r = n("img", this),
                    a = r.attr("src"),
                    s = get_name_from_url(a);
                if (s == t) {
                    var l = getCookie("expired");
                    ("" == l || "" != l && l < get_tomorrow()) && (n.fancybox.open([{
                        href: e,
                        title: 'This ads will be closed in <span id="timer">' + TIMER + "</span> seconds."
                    }], {
                        afterShow: function() {
                            n.fancybox.helpers.overlay.open(), n(".fancybox-image").css("cursor", "pointer"), n(".fancybox-image").click(function() {
                                window.open(o, "_blank"), n.fancybox.close(!0), n(".fancybox-opened").hide(), n(".fancybox-overlay.fancybox-overlay-fixed").hide(), n("html").removeClass("fancybox-margin"), n("html").removeClass("fancybox-lock"), clearInterval(timeout)
                            }), timeout = setInterval("timeout_trigger()", 1e3)
                        },
                        afterClose: function() {
                            clearInterval(timeout)
                        }
                    }), setCookie("expired", get_tomorrow())), n(this).hide()
                }
            })
        })
    }(jQuery)
}

function get_name_from_url(t) {
    var e = "";
    return function(n) {
        var i = t.split("/"),
            o = i[i.length - 1];
        e = o.split(".")[0]
    }(jQuery), e
}

function timeout_trigger() {
    ! function(t) {
        timer = parseInt(t("#timer").text()), t("#timer").text(timer - 1), 0 == timer && (t.fancybox.close(!0), t(".fancybox-opened").hide(), t(".fancybox-overlay.fancybox-overlay-fixed").hide(), t("html").removeClass("fancybox-margin"), t("html").removeClass("fancybox-lock"), clearInterval(timeout))
    }(jQuery)
}

function setCookie(t, e, n) {
    var i = new Date;
    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
    var o = "expires=" + i.toGMTString();
    document.cookie = t + "=" + e + "; " + o
}

function getCookie(t) {
    for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        var o = n[i].trim();
        if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
    }
    return ""
}

function get_date(t) {
    var e = new Date(t),
        n = e.getDate(),
        i = e.getMonth() + 1,
        o = e.getFullYear(),
        r = o + "" + i + n;
    return parseInt(r)
}

function get_tomorrow() {
    return get_date((new Date).getTime() + 864e5)
}

function get_today() {
    return get_date((new Date).getTime())
}

function sb_ads_startup(t, e) {
    $.fancybox.open([{
        href: e,
        title: 'This ads will be closed in <span id="timer">' + TIMER + "</span> seconds."
    }], {
        afterShow: function() {
            $.fancybox.helpers.overlay.open(), $(".fancybox-image").css("cursor", "pointer"), $("body").css("overflow", "hidden"), $(".fancybox-image").click(function() {
                window.open(t, "_blank"), $.fancybox.close(!0), $(".fancybox-opened").hide(), $(".fancybox-overlay.fancybox-overlay-fixed").hide(), $("html").removeClass("fancybox-margin"), $("html").removeClass("fancybox-lock"), clearInterval(timeout), $("body").css("overflow", "scroll")
            }), timeout = setInterval("timeout_trigger()", 1e3)
        },
        afterClose: function() {
            clearInterval(timeout), $(".start_up_ads").hide(), $("body").css("overflow", "scroll")
        }
    })
}

function piwikTrackGoal(t) {
    try {
        var e = Piwik.getAsyncTracker();
        e.trackGoal(t)
    } catch (n) {}
}

function zero_space(t) {
    var e = $(".zero_space_switch").is(":checked");
    e ? with_space() : t || no_space()
}

function no_space() {
    $(".post_content .detail").find("p").each(function(t, e) {
        var n = $(this).find("img").length,
            i = $(this).find("iframe").length;
        0 == n && 0 == i && (ori = e.textContent, e.textContent = ori.replace(/ /g, "â€‹"))
    })
}

function with_space() {
    $(".post_content .detail").find("p").each(function(t, e) {
        var n = $(this).find("img").length,
            i = $(this).find("iframe").length;
        0 == n && 0 == i && (ori = e.textContent, e.textContent = ori.replace(/â€‹/g, " "))
    })
}

function update_moment() {
    var t = {
        lastWeek: "LLLL",
        sameElse: "LLLL"
    };
    $.each($(".pub-date"), function() {
        var e = $(this).attr("date");
        //localtime = moment.utc(e).toDate(), $(this).text(moment(localtime).calendar(null, t))
    });
    var e = $("#sdate").text();
    //localtime = moment.utc(e).toDate(), $("#sdate").text(moment(localtime).calendar(null, t))
}

function enable_startup_ads() {
    if ($(window).scrollTop() > 5) {
        if (is_loaded_popup) {
            var t = $(window).width() <= 768;
            if (t) {
                $("#ad_zone_09").show();
                var e = "",
                    n = "";
                $("#ad_zone_09 ins a").each(function() {
                    e = $(this).attr("href")
                }), $("#ad_zone_09 ins a img").each(function() {
                    n = $(this).attr("src")
                })
            } else {
                $("#ad_zone_08").show();
                var e = "",
                    n = "";
                $("#ad_zone_08 ins a").each(function() {
                    e = $(this).attr("href")
                }), $("#ad_zone_08 ins a img").each(function() {
                    n = $(this).attr("src")
                })
            }
            sb_ads_startup(e, n), is_loaded_popup = !1
        }
    } else $(".start_up_ads").hide()
}

function display_content_slideshow() {
    $(".content_slider").each(function() {
        var t = $(this),
            e = t.find(".item"),
            n = !1;
        e.each(function(e, i) {
            $(this).hasClass("active") || ($(this).addClass("active"), n = !0);
            var o = 0;
            $(this).find(".carousel-caption").length && (o = $(this).find(".carousel-caption").height() + 20), height = t.height() - o, $(this).find(".img").height(height), n && ($(this).removeClass("active"), n = !1)
        })
    })
}

function show_search() {
    window.is_search_show = !0;
    var t = $(document).innerWidth();
    t <= 767 ? ($("#menu #search input").focus(), $("#menu #search form button.left_submit").fadeIn(), $("#menu #search input").css({
        padding: "0 15px 0 38px"
    }), $("#menu #search a").html('<i class="fa fa-times"></i>'), $("#menu #search input").animate({
        width: 275
    }, {
        queue: !1,
        duration: 300
    })) : ($("#menu #search input").css({
        padding: "0 30px 0 15px"
    }), $("#menu #search input").animate({
        width: 300
    }, {
        queue: !1,
        duration: 300
    }))
}

function hide_search() {
    window.is_search_show = !1;
    var t = $(document).innerWidth(),
        e = 0;
    t <= 767 && ($("#menu #search form button.left_submit").hide(), $("#menu #search a").html('<i class="fa fa-search"></i>'), $("#menu #search form button").css({
        color: "#ffffff"
    })), $("#menu #search input").css({
        padding: "0"
    }), $("#menu #search input").animate({
        width: e
    }, {
        queue: !1,
        duration: 300
    })
}

function load_first_tab_category() {
    var t = $("div.tab-by-category");
    if ("undefined" != typeof t.offset()) {
        var e = $(this).scrollTop() + $(window).innerHeight() + 150;
        t.each(function() {
            var t = $(this).attr("id");
            if (window.loaded_categies_arr.indexOf(t) == -1 && e >= $(this).offset().top) {
                window.loaded_categies_arr.push(t);
                var n = $(this).find(".nav-tabs li.active a[rel=ajax]");
                if ("undefined" != typeof n.offset()) {
                    var i = n.attr("href"),
                        o = n.attr("for"),
                        r = $(this).attr("rel");
                    load_tab_categories(i, o, r)
                }
            }
        })
    }
}

function fixed_menu() {
    var t = $("div#before_menu"),
        e = $("nav#menu"),
        n = $(document).innerWidth();
    return n <= 767 ? (e.removeClass("navbar-static-top").addClass("navbar-fixed-top"), void $(".mean-content").css({
        "margin-top": e.height() + "px"
    })) : void("undefined" != typeof t.offset() && ($(this).scrollTop() >= t.offset().top ? (e.removeClass("navbar-static-top").addClass("navbar-fixed-top"), $(".mean-content").css({
        "margin-top": e.height() + 15 + "px"
    })) : (e.removeClass("navbar-fixed-top").addClass("navbar-static-top"), $(".mean-content").css({
        "margin-top": "15px"
    }), $(".mean-content").hasClass("special") ? $(".mean-content").css({
        "margin-top": "0"
    }) : "")))
}

function update_post_view_type() {
    var t = window.view_type,
        e = $(document).innerWidth();
    e <= 767 || "grid" == t ? ($("#posts_list").removeClass("list").addClass("grid"), $("#posts_list .list-items").addClass("row"), $("#posts_list .list-items .list-item").removeClass("row").addClass("col-md-4").addClass("col-xs-6"), $("#posts_list .list-items .list-item .tumbnail").removeClass("col-md-4"), $("#posts_list .list-items .list-item .content").removeClass("col-md-8")) : ($("#posts_list").removeClass("grid").addClass("list"), $("#posts_list .list-items").removeClass("row"), $("#posts_list .list-items .list-item").addClass("row").removeClass("col-md-4").removeClass("col-xs-6"), $("#posts_list .list-items .list-item .tumbnail").addClass("col-md-4"), $("#posts_list .list-items .list-item .content").addClass("col-md-8"))
}

function load_tab_categories(t, e, n) {
    $(".ajax-content#" + e).loading(), $.ajax({
        url: t,
        success: function(t) {
            $(".ajax-content#" + e).html(t)
        }
    })
}

function do_ajax_action(t, e) {
    $.ajax({
        url: t,
        success: function(t) {
            e(t)
        }
    })
}

function load_more_posts() {
    var t = $("#loading_more_post");
    if ("undefined" != typeof t.offset() && $(this).scrollTop() + $(window).height() + 200 >= t.offset().top && !window.is_loading) {
        window.is_loading = !0, window.current_page += 1;
        var e = (window.current_page + 1, t.attr("rel")),
            n = DOMAIN + e + "/" + window.current_page;
        t.find("i").show(), $.ajax({
            url: n,
            success: function(e) {
                if (t.find("i").hide(), "" != e) {
                    var n = "";
                    $("#category_bottom_ads").find(".ads_items").each(function(t) {
                        var e = $(this),
                            i = e.attr("zone");
                        if ("undefined" != typeof i) {
                            var o = Math.floor(99999999999 * Math.random()),
                                r = $(window).width() <= 768,
                                a = 728,
                                s = 90;
                            r && (a = 300, s = 250);
                            var l = "<div class='ads_items' style='margin-bottom:20px;'><iframe id='a5dd2a7c' name='a5dd2a7c' src='http://ads.sabay.com/openx/www/delivery/afr.php?zoneid=" + i + "&amp;cb=" + o + "' frameborder='0' scrolling='no' width='" + a + "' height='" + s + "'><a href='http://ads.sabay.com/openx/www/delivery/ck.php?n=ae6639d1&amp;cb=" + o + "' target='_blank'><img class='img-responsive' src='http://ads.sabay.com/openx/www/delivery/avw.php?zoneid=" + i + "&amp;cb=" + o + "&amp;n=ae6639d1' border='0' alt='' /></a></iframe></div>";
                            n += l
                        }
                    }), $("#posts_list .list-items").append(e).append(n), update_moment(), update_post_view_type(), window.is_loading = !1
                }
            }
        })
    }
}



// jQuery JavaScript Library  
if (! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function n(t, e, n) {
        var i, o = (e = e || at).createElement("script");
        if (o.text = t, n)
            for (i in bt) n[i] && (o[i] = n[i]);
        e.head.appendChild(o).parentNode.removeChild(o)
    }

    function i(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ht[ft.call(t)] || "object" : typeof t
    }

    function o(t) {
        var e = !!t && "length" in t && t.length,
            n = i(t);
        return !yt(t) && !wt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    function a(t, e, n) {
        return yt(e) ? xt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? xt.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? xt.grep(t, function(t) {
            return dt.call(e, t) > -1 !== n
        }) : xt.filter(e, t, n)
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function l(t) {
        var e = {};
        return xt.each(t.match(At) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function c(t) {
        return t
    }

    function u(t) {
        throw t
    }

    function d(t, e, n, i) {
        var o;
        try {
            t && yt(o = t.promise) ? o.call(t).done(e).fail(n) : t && yt(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }

    function h() {
        at.removeEventListener("DOMContentLoaded", h), t.removeEventListener("load", h), xt.ready()
    }

    function f(t, e) {
        return e.toUpperCase()
    }

    function p(t) {
        return t.replace(Rt, "ms-").replace(Lt, f)
    }

    function m() {
        this.expando = xt.expando + m.uid++
    }

    function g(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ft.test(t) ? JSON.parse(t) : t)
    }

    function v(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Wt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = g(n)
                } catch (t) {}
                Ht.set(t, e, n)
            } else n = void 0;
        return n
    }

    function y(t, e, n, i) {
        var o, r, a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return xt.css(t, e, "")
            },
            l = s(),
            c = n && n[3] || (xt.cssNumber[e] ? "" : "px"),
            u = (xt.cssNumber[e] || "px" !== c && +l) && zt.exec(xt.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) xt.style(t, e, u + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), u /= r;
            u *= 2, xt.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function w(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            o = Vt[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = xt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Vt[i] = o, o)
    }

    function b(t, e) {
        for (var n, i, o = [], r = 0, a = t.length; r < a; r++)(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = jt.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Bt(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none", jt.set(i, "display", n)));
        for (r = 0; r < a; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    function x(t, e) {
        var n;
        return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? xt.merge([t], n) : n
    }

    function _(t, e) {
        for (var n = 0, i = t.length; n < i; n++) jt.set(t[n], "globalEval", !e || jt.get(e[n], "globalEval"))
    }

    function T(t, e, n, o, r) {
        for (var a, s, l, c, u, d, h = e.createDocumentFragment(), f = [], p = 0, m = t.length; p < m; p++)
            if ((a = t[p]) || 0 === a)
                if ("object" === i(a)) xt.merge(f, a.nodeType ? [a] : a);
                else if (Jt.test(a)) {
            for (s = s || h.appendChild(e.createElement("div")), l = (Zt.exec(a) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, s.innerHTML = c[1] + xt.htmlPrefilter(a) + c[2], d = c[0]; d--;) s = s.lastChild;
            xt.merge(f, s.childNodes), (s = h.firstChild).textContent = ""
        } else f.push(e.createTextNode(a));
        for (h.textContent = "", p = 0; a = f[p++];)
            if (o && xt.inArray(a, o) > -1) r && r.push(a);
            else if (u = xt.contains(a.ownerDocument, a), s = x(h.appendChild(a), "script"), u && _(s), n)
            for (d = 0; a = s[d++];) Kt.test(a.type || "") && n.push(a);
        return h
    }

    function C() {
        return !0
    }

    function k() {
        return !1
    }

    function S() {
        try {
            return at.activeElement
        } catch (t) {}
    }

    function D(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in e) D(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = k;
        else if (!o) return t;
        return 1 === r && (a = o, (o = function(t) {
            return xt().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = xt.guid++)), t.each(function() {
            xt.event.add(this, e, o, i, n)
        })
    }

    function E(t, e) {
        return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? xt(t).children("tbody")[0] || t : t
    }

    function M(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function O(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function I(t, e) {
        var n, i, o, r, a, s, l, c;
        if (1 === e.nodeType) {
            if (jt.hasData(t) && (r = jt.access(t), a = jt.set(e, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) xt.event.add(e, o, c[o][n])
            }
            Ht.hasData(t) && (s = Ht.access(t), l = xt.extend({}, s), Ht.set(e, l))
        }
    }

    function A(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function $(t, e, i, o) {
        e = ct.apply([], e);
        var r, a, s, l, c, u, d = 0,
            h = t.length,
            f = h - 1,
            p = e[0],
            m = yt(p);
        if (m || h > 1 && "string" == typeof p && !vt.checkClone && ae.test(p)) return t.each(function(n) {
            var r = t.eq(n);
            m && (e[0] = p.call(this, n, r.html())), $(r, e, i, o)
        });
        if (h && (r = T(e, t[0].ownerDocument, !1, t, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
            for (l = (s = xt.map(x(r, "script"), M)).length; d < h; d++) c = r, d !== f && (c = xt.clone(c, !0, !0), l && xt.merge(s, x(c, "script"))), i.call(t[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, xt.map(s, O), d = 0; d < l; d++) c = s[d], Kt.test(c.type || "") && !jt.access(c, "globalEval") && xt.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? xt._evalUrl && xt._evalUrl(c.src) : n(c.textContent.replace(se, ""), u, c))
        }
        return t
    }

    function P(t, e, n) {
        for (var i, o = e ? xt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || xt.cleanData(x(i)), i.parentNode && (n && xt.contains(i.ownerDocument, i) && _(x(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function N(t, e, n) {
        var i, o, r, a, s = t.style;
        return (n = n || ce(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || xt.contains(t.ownerDocument, t) || (a = xt.style(t, e)), !vt.pixelBoxStyles() && le.test(a) && ue.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function R(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function L(t) {
        if (t in ge) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = me.length; n--;)
            if ((t = me[n] + e) in ge) return t
    }

    function Y(t) {
        var e = xt.cssProps[t];
        return e || (e = xt.cssProps[t] = L(t) || t), e
    }

    function j(t, e, n) {
        var i = zt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function H(t, e, n, i, o, r) {
        var a = "width" === e ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += xt.css(t, n + qt[a], !0, o)), i ? ("content" === n && (l -= xt.css(t, "padding" + qt[a], !0, o)), "margin" !== n && (l -= xt.css(t, "border" + qt[a] + "Width", !0, o))) : (l += xt.css(t, "padding" + qt[a], !0, o), "padding" !== n ? l += xt.css(t, "border" + qt[a] + "Width", !0, o) : s += xt.css(t, "border" + qt[a] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - s - .5))), l
    }

    function F(t, e, n) {
        var i = ce(t),
            o = N(t, e, i),
            r = "border-box" === xt.css(t, "boxSizing", !1, i),
            a = r;
        if (le.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return a = a && (vt.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === xt.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (o = parseFloat(o) || 0) + H(t, e, n || (r ? "border" : "content"), a, i, o) + "px"
    }

    function W(t, e, n, i, o) {
        return new W.prototype.init(t, e, n, i, o)
    }

    function U() {
        ye && (!1 === at.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(U) : t.setTimeout(U, xt.fx.interval), xt.fx.tick())
    }

    function z() {
        return t.setTimeout(function() {
            ve = void 0
        }), ve = Date.now()
    }

    function q(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = qt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function B(t, e, n) {
        for (var i, o = (G.tweeners[e] || []).concat(G.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function X(t, e, n) {
        var i, o, r, a, s, l, c, u, d = "width" in e || "height" in e,
            h = this,
            f = {},
            p = t.style,
            m = t.nodeType && Bt(t),
            g = jt.get(t, "fxshow");
        n.queue || (null == (a = xt._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, xt.queue(t, "fx").length || a.empty.fire()
            })
        }));
        for (i in e)
            if (o = e[i], we.test(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || xt.style(t, i)
            } if ((l = !xt.isEmptyObject(e)) || !xt.isEmptyObject(f)) {
            d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = jt.get(t, "display")), "none" === (u = xt.css(t, "display")) && (c ? u = c : (b([t], !0), c = t.style.display || c, u = xt.css(t, "display"), b([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === xt.css(t, "float") && (l || (h.done(function() {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = jt.access(t, "fxshow", {
                display: c
            }), r && (g.hidden = !m), m && b([t], !0), h.done(function() {
                m || b([t]), jt.remove(t, "fxshow");
                for (i in f) xt.style(t, i, f[i])
            })), l = B(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function V(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = p(n), o = e[i], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = xt.cssHooks[i]) && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function G(t, e, n) {
        var i, o, r = 0,
            a = G.prefilters.length,
            s = xt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = ve || z(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
                return s.notifyWith(t, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: xt.extend({}, e),
                opts: xt.extend(!0, {
                    specialEasing: {},
                    easing: xt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ve || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = xt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (V(u, c.opts.specialEasing); r < a; r++)
            if (i = G.prefilters[r].call(c, t, u, c.opts)) return yt(i.stop) && (xt._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return xt.map(u, B, c), yt(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), xt.fx.timer(xt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function Z(t) {
        return (t.match(At) || []).join(" ")
    }

    function K(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Q(t) {
        return Array.isArray(t) ? t : "string" == typeof t ? t.match(At) || [] : []
    }

    function J(t, e, n, o) {
        var r;
        if (Array.isArray(e)) xt.each(e, function(e, i) {
            n || Ie.test(t) ? o(t, i) : J(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, o)
        });
        else if (n || "object" !== i(e)) o(t, e);
        else
            for (r in e) J(t + "[" + r + "]", e[r], n, o)
    }

    function tt(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(At) || [];
            if (yt(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function et(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, xt.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = t === Ue;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function nt(t, e) {
        var n, i, o = xt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && xt.extend(!0, t, i), t
    }

    function it(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function ot(t, e, n, i) {
        var o, r, a, s, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: a ? t : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }
    var rt = [],
        at = t.document,
        st = Object.getPrototypeOf,
        lt = rt.slice,
        ct = rt.concat,
        ut = rt.push,
        dt = rt.indexOf,
        ht = {},
        ft = ht.toString,
        pt = ht.hasOwnProperty,
        mt = pt.toString,
        gt = mt.call(Object),
        vt = {},
        yt = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        wt = function(t) {
            return null != t && t === t.window
        },
        bt = {
            type: !0,
            src: !0,
            noModule: !0
        },
        xt = function(t, e) {
            return new xt.fn.init(t, e)
        },
        _t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    xt.fn = xt.prototype = {
        jquery: "3.3.1",
        constructor: xt,
        length: 0,
        toArray: function() {
            return lt.call(this)
        },
        get: function(t) {
            return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = xt.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return xt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(xt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(lt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ut,
        sort: rt.sort,
        splice: rt.splice
    }, xt.extend = xt.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || yt(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], a !== (i = t[e]) && (c && i && (xt.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && xt.isPlainObject(n) ? n : {}, a[e] = xt.extend(c, r, i)) : void 0 !== i && (a[e] = i));
        return a
    }, xt.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== ft.call(t) || (e = st(t)) && ("function" != typeof(n = pt.call(e, "constructor") && e.constructor) || mt.call(n) !== gt))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t) {
            n(t)
        },
        each: function(t, e) {
            var n, i = 0;
            if (o(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(_t, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (o(Object(t)) ? xt.merge(n, "string" == typeof t ? [t] : t) : ut.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : dt.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i, o = [], r = 0, a = t.length, s = !n; r < a; r++)(i = !e(t[r], r)) !== s && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var i, r, a = 0,
                s = [];
            if (o(t))
                for (i = t.length; a < i; a++) null != (r = e(t[a], a, n)) && s.push(r);
            else
                for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
            return ct.apply([], s)
        },
        guid: 1,
        support: vt
    }), "function" == typeof Symbol && (xt.fn[Symbol.iterator] = rt[Symbol.iterator]), xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ht["[object " + e + "]"] = e.toLowerCase()
    });
    var Tt = function(t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, c, u, h = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((e ? e.ownerDocument || e : F) !== $ && A(e), e = e || $, N)) {
                if (11 !== p && (l = vt.exec(t)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && j(e, a) && a.id === o) return n.push(a), n
                    } else {
                        if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(o)), n
                    } if (_.qsa && !B[t + " "] && (!R || !R.test(t))) {
                    if (1 !== p) h = e, u = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(xt, _t) : e.setAttribute("id", s = H), r = (c = S(t)).length; r--;) c[r] = "#" + s + " " + f(c[r]);
                        u = c.join(","), h = yt.test(t) && d(e.parentNode) || e
                    }
                    if (u) try {
                        return Q.apply(n, h.querySelectorAll(u)), n
                    } catch (t) {} finally {
                        s === H && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(st, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[H] = !0, t
        }

        function o(t) {
            var e = $.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
        }

        function a(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function f(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir,
                o = e.next,
                r = o || i,
                a = n && "parentNode" === r,
                s = U++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || a) return t(e, n, o);
                return !1
            } : function(e, n, l) {
                var c, u, d, h = [W, s];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || a)
                            if (d = e[H] || (e[H] = {}), u = d[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[r]) && c[0] === W && c[1] === s) return h[2] = c[2];
                                if (u[r] = h, h[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function m(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
            return i
        }

        function v(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
            return a
        }

        function y(t, e, n, o, r, a) {
            return o && !o[H] && (o = y(o)), r && !r[H] && (r = y(r, a)), i(function(i, a, s, l) {
                var c, u, d, h = [],
                    f = [],
                    p = a.length,
                    m = i || g(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? m : v(m, h, t, s, l),
                    w = n ? r || (i ? t : p || o) ? [] : a : y;
                if (n && n(y, w, s, l), o)
                    for (c = v(w, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? tt(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else w = v(w === a ? w.splice(p, w.length) : w), r ? r(null, a, w, l) : Q.apply(a, w)
            })
        }

        function w(t) {
            for (var e, n, i, o = t.length, r = T.relative[t[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), c = p(function(t) {
                    return tt(e, t) > -1
                }, a, !0), u = [function(t, n, i) {
                    var o = !r && (i || n !== M) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; s < o; s++)
                if (n = T.relative[t[s].type]) u = [p(m(u), n)];
                else {
                    if ((n = T.filter[t[s].type].apply(null, t[s].matches))[H]) {
                        for (i = ++s; i < o && !T.relative[t[i].type]; i++);
                        return y(s > 1 && m(u), s > 1 && f(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, s < i && w(t.slice(s, i)), i < o && w(t = t.slice(i)), i < o && f(t))
                    }
                    u.push(n)
                } return m(u)
        }

        function b(t, n) {
            var o = n.length > 0,
                r = t.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, h, f = 0,
                        p = "0",
                        m = i && [],
                        g = [],
                        y = M,
                        w = i || r && T.find.TAG("*", c),
                        b = W += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (M = a === $ || a || c); p !== x && null != (u = w[p]); p++) {
                        if (r && u) {
                            for (d = 0, a || u.ownerDocument === $ || (A(u), s = !N); h = t[d++];)
                                if (h(u, a || $, s)) {
                                    l.push(u);
                                    break
                                } c && (W = b)
                        }
                        o && ((u = !h && u) && f--, i && m.push(u))
                    }
                    if (f += p, o && p !== f) {
                        for (d = 0; h = n[d++];) h(m, g, a, s);
                        if (i) {
                            if (f > 0)
                                for (; p--;) m[p] || g[p] || (g[p] = Z.call(l));
                            g = v(g)
                        }
                        Q.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (W = b, M = y), m
                };
            return o ? i(a) : a
        }
        var x, _, T, C, k, S, D, E, M, O, I, A, $, P, N, R, L, Y, j, H = "sizzle" + 1 * new Date,
            F = t.document,
            W = 0,
            U = 0,
            z = n(),
            q = n(),
            B = n(),
            X = function(t, e) {
                return t === e && (I = !0), 0
            },
            V = {}.hasOwnProperty,
            G = [],
            Z = G.pop,
            K = G.push,
            Q = G.push,
            J = G.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(rt),
            ht = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            bt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _t = function(t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Tt = function() {
                A()
            },
            Ct = p(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(G = J.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (t) {
            Q = {
                apply: G.length ? function(t, e) {
                    K.apply(t, J.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, A = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : F;
            return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, P = $.documentElement, N = !k($), F !== $ && (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), _.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = o(function(t) {
                return t.appendChild($.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = gt.test($.getElementsByClassName), _.getById = o(function(t) {
                return P.appendChild(t).id = H, !$.getElementsByName || !$.getElementsByName(H).length
            }), _.getById ? (T.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function(t) {
                var e = t.replace(wt, bt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }, T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                        for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                    }
                    return []
                }
            }), T.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, T.find.CLASS = _.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && N) return e.getElementsByClassName(t)
            }, L = [], R = [], (_.qsa = gt.test($.querySelectorAll)) && (o(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || R.push(".#.+[+~]")
            }), o(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = $.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), P.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
            })), (_.matchesSelector = gt.test(Y = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                _.disconnectedMatch = Y.call(t, "*"), Y.call(t, "[s!='']:x"), L.push("!=", rt)
            }), R = R.length && new RegExp(R.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(P.compareDocumentPosition), j = e || gt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return I = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === $ || t.ownerDocument === F && j(F, t) ? -1 : e === $ || e.ownerDocument === F && j(F, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return I = !0, 0;
                var n, i = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    s = [t],
                    l = [e];
                if (!o || !r) return t === $ ? -1 : e === $ ? 1 : o ? -1 : r ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                if (o === r) return a(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === F ? -1 : l[i] === F ? 1 : 0
            }, $) : $
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== $ && A(t), n = n.replace(ut, "='$1']"), _.matchesSelector && N && !B[n + " "] && (!L || !L.test(n)) && (!R || !R.test(n))) try {
                var i = Y.call(t, n);
                if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return e(n, $, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== $ && A(t), j(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== $ && A(t);
            var n = T.attrHandle[e.toLowerCase()],
                i = n && V.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
            return void 0 !== i ? i : _.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function(t) {
            return (t + "").replace(xt, _t)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (I = !_.detectDuplicates, O = !_.sortStable && t.slice(0), t.sort(X), I) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return O = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, (T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, d, h, f, p, m = r !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !l && !s,
                            w = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (w = (f = (c = (u = (d = (h = g)[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === W && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (w = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++w && h === e) {
                                        u[t] = [W, f, w];
                                        break
                                    }
                            } else if (y && (w = f = (c = (u = (d = (h = e)[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === W && c[1]), !1 === w)
                                for (;
                                    (h = ++f && h && h[m] || (w = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++w || (y && ((u = (d = h[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [W, w]), h !== e)););
                            return (w -= o) === i || w % i == 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[H] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), a = o.length; a--;) t[i = tt(t, o[a])] = !(e[i] = o[a])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = D(t.replace(st, "$1"));
                    return o[H] ? i(function(t, e, n, i) {
                        for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(wt, bt),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return h.prototype = T.filters = T.pseudos, T.setFilters = new h, S = e.tokenize = function(t, n) {
            var i, o, r, a, s, l, c, u = q[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = T.preFilter; s;) {
                i && !(o = lt.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ct.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(st, " ")
                }), s = s.slice(i.length));
                for (a in T.filter) !(o = ft[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : q(t, l).slice(0)
        }, D = e.compile = function(t, e) {
            var n, i = [],
                o = [],
                r = B[t + " "];
            if (!r) {
                for (e || (e = S(t)), n = e.length; n--;)(r = w(e[n]))[H] ? i.push(r) : o.push(r);
                (r = B(t, b(o, i))).selector = t
            }
            return r
        }, E = e.select = function(t, e, n, i) {
            var o, r, a, s, l, c = "function" == typeof t && t,
                u = !i && S(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if ((r = u[0] = u[0].slice(0)).length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && N && T.relative[r[1].type]) {
                    if (!(e = (T.find.ID(a.matches[0].replace(wt, bt), e) || [])[0])) return n;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (i = l(a.matches[0].replace(wt, bt), yt.test(r[0].type) && d(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && f(r))) return Q.apply(n, i), n;
                        break
                    }
            }
            return (c || D(t, u))(i, e, !N, n, !e || yt.test(t) && d(e.parentNode) || e), n
        }, _.sortStable = H.split("").sort(X).join("") === H, _.detectDuplicates = !!I, A(), _.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition($.createElement("fieldset"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    xt.find = Tt, xt.expr = Tt.selectors, xt.expr[":"] = xt.expr.pseudos, xt.uniqueSort = xt.unique = Tt.uniqueSort, xt.text = Tt.getText, xt.isXMLDoc = Tt.isXML, xt.contains = Tt.contains, xt.escapeSelector = Tt.escape;
    var Ct = function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && xt(t).is(n)) break;
                    i.push(t)
                } return i
        },
        kt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        St = xt.expr.match.needsContext,
        Dt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    xt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? xt.find.matchesSelector(i, t) ? [i] : [] : xt.find.matches(t, xt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, xt.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(xt(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (xt.contains(o[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) xt.find(t, o[e], n);
            return i > 1 ? xt.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(a(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(a(this, t || [], !0))
        },
        is: function(t) {
            return !!a(this, "string" == typeof t && St.test(t) ? xt(t) : t || [], !1).length
        }
    });
    var Et, Mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (xt.fn.init = function(t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || Et, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Mt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof xt ? e[0] : e, xt.merge(this, xt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : at, !0)), Dt.test(i[1]) && xt.isPlainObject(e))
                    for (i in e) yt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (o = at.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : yt(t) ? void 0 !== n.ready ? n.ready(t) : t(xt) : xt.makeArray(t, this)
    }).prototype = xt.fn, Et = xt(at);
    var Ot = /^(?:parents|prev(?:Until|All))/,
        It = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    xt.fn.extend({
        has: function(t) {
            var e = xt(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (xt.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                o = this.length,
                r = [],
                a = "string" != typeof t && xt(t);
            if (!St.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && xt.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? xt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? dt.call(xt(t), this[0]) : dt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), xt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Ct(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Ct(t, "parentNode", n)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return Ct(t, "nextSibling")
        },
        prevAll: function(t) {
            return Ct(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Ct(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Ct(t, "previousSibling", n)
        },
        siblings: function(t) {
            return kt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return kt(t.firstChild)
        },
        contents: function(t) {
            return r(t, "iframe") ? t.contentDocument : (r(t, "template") && (t = t.content || t), xt.merge([], t.childNodes))
        }
    }, function(t, e) {
        xt.fn[t] = function(n, i) {
            var o = xt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = xt.filter(i, o)), this.length > 1 && (It[t] || xt.uniqueSort(o), Ot.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var At = /[^\x20\t\r\n\f]+/g;
    xt.Callbacks = function(t) {
        t = "string" == typeof t ? l(t) : xt.extend({}, t);
        var e, n, o, r, a = [],
            s = [],
            c = -1,
            u = function() {
                for (r = r || t.once, o = e = !0; s.length; c = -1)
                    for (n = s.shift(); ++c < a.length;) !1 === a[c].apply(n[0], n[1]) && t.stopOnFalse && (c = a.length, n = !1);
                t.memory || (n = !1), e = !1, r && (a = n ? [] : "")
            },
            d = {
                add: function() {
                    return a && (n && !e && (c = a.length - 1, s.push(n)), function o(e) {
                        xt.each(e, function(e, n) {
                            yt(n) ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== i(n) && o(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return xt.each(arguments, function(t, e) {
                        for (var n;
                            (n = xt.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? xt.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], n || e || (a = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, xt.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2],
                    ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return xt.Deferred(function(e) {
                            xt.each(n, function(n, i) {
                                var o = yt(t[i[4]]) && t[i[4]];
                                r[i[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && yt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, o) {
                        function r(e, n, i, o) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    d = function() {
                                        var t, d;
                                        if (!(e < a)) {
                                            if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = t && ("object" == typeof t || "function" == typeof t) && t.then, yt(d) ? o ? d.call(t, r(a, n, c, o), r(a, n, u, o)) : (a++, d.call(t, r(a, n, c, o), r(a, n, u, o), r(a, n, c, n.notifyWith))) : (i !== c && (s = void 0, l = [t]), (o || n.resolveWith)(s, l))
                                        }
                                    },
                                    h = o ? d : function() {
                                        try {
                                            d()
                                        } catch (t) {
                                            xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= a && (i !== u && (s = void 0, l = [t]), n.rejectWith(s, l))
                                        }
                                    };
                                e ? h() : (xt.Deferred.getStackHook && (h.stackTrace = xt.Deferred.getStackHook()), t.setTimeout(h))
                            }
                        }
                        var a = 0;
                        return xt.Deferred(function(t) {
                            n[0][3].add(r(0, t, yt(o) ? o : c, t.notifyWith)), n[1][3].add(r(0, t, yt(e) ? e : c)), n[2][3].add(r(0, t, yt(i) ? i : u))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? xt.extend(t, o) : o
                    }
                },
                r = {};
            return xt.each(n, function(t, e) {
                var a = e[2],
                    s = e[5];
                o[e[1]] = a.add, s && a.add(function() {
                    i = s
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = a.fireWith
            }), o.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = lt.call(arguments),
                r = xt.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, o[t] = arguments.length > 1 ? lt.call(arguments) : n, --e || r.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (d(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || yt(o[n] && o[n].then))) return r.then();
            for (; n--;) d(o[n], a(n), r.reject);
            return r.promise()
        }
    });
    var $t = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    xt.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && $t.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, xt.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var Pt = xt.Deferred();
    xt.fn.ready = function(t) {
        return Pt.then(t)["catch"](function(t) {
            xt.readyException(t)
        }), this
    }, xt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --xt.readyWait : xt.isReady) || (xt.isReady = !0, !0 !== t && --xt.readyWait > 0 || Pt.resolveWith(at, [xt]))
        }
    }), xt.ready.then = Pt.then, "complete" === at.readyState || "loading" !== at.readyState && !at.documentElement.doScroll ? t.setTimeout(xt.ready) : (at.addEventListener("DOMContentLoaded", h), t.addEventListener("load", h));
    var Nt = function(t, e, n, o, r, a, s) {
            var l = 0,
                c = t.length,
                u = null == n;
            if ("object" === i(n)) {
                r = !0;
                for (l in n) Nt(t, e, l, n[l], !0, a, s)
            } else if (void 0 !== o && (r = !0, yt(o) || (s = !0), u && (s ? (e.call(t, o), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(xt(t), n)
                })), e))
                for (; l < c; l++) e(t[l], n, s ? o : o.call(t[l], l, e(t[l], n)));
            return r ? t : u ? e.call(t) : c ? e(t[0], n) : a
        },
        Rt = /^-ms-/,
        Lt = /-([a-z])/g,
        Yt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    m.uid = 1, m.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Yt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[p(e)] = n;
            else
                for (i in e) o[p(i)] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][p(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(p) : (e = p(e)) in i ? [e] : e.match(At) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || xt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !xt.isEmptyObject(e)
        }
    };
    var jt = new m,
        Ht = new m,
        Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Wt = /[A-Z]/g;
    xt.extend({
        hasData: function(t) {
            return Ht.hasData(t) || jt.hasData(t)
        },
        data: function(t, e, n) {
            return Ht.access(t, e, n)
        },
        removeData: function(t, e) {
            Ht.remove(t, e)
        },
        _data: function(t, e, n) {
            return jt.access(t, e, n)
        },
        _removeData: function(t, e) {
            jt.remove(t, e)
        }
    }), xt.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Ht.get(r), 1 === r.nodeType && !jt.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = p(i.slice(5)), v(r, i, o[i]));
                    jt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                Ht.set(this, t)
            }) : Nt(this, function(e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = Ht.get(r, t))) return n;
                    if (void 0 !== (n = v(r, t))) return n
                } else this.each(function() {
                    Ht.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ht.remove(this, t)
            })
        }
    }), xt.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = jt.get(t, e), n && (!i || Array.isArray(n) ? i = jt.access(t, e, xt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = xt.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = xt._queueHooks(t, e),
                a = function() {
                    xt.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return jt.get(t, n) || jt.access(t, n, {
                empty: xt.Callbacks("once memory").add(function() {
                    jt.remove(t, [e + "queue", n])
                })
            })
        }
    }), xt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? xt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = xt.queue(this, t, e);
                xt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && xt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                xt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = xt.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = jt.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(e)
        }
    });
    var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        zt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"),
        qt = ["Top", "Right", "Bottom", "Left"],
        Bt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && xt.contains(t.ownerDocument, t) && "none" === xt.css(t, "display")
        },
        Xt = function(t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        },
        Vt = {};
    xt.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Bt(this) ? xt(this).show() : xt(this).hide()
            })
        }
    });
    var Gt = /^(?:checkbox|radio)$/i,
        Zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Kt = /^$|^module$|\/(?:java|ecma)script/i,
        Qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td;
    var Jt = /<|&#?\w+;/;
    ! function() {
        var t = at.createDocumentFragment().appendChild(at.createElement("div")),
            e = at.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), vt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var te = at.documentElement,
        ee = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ie = /^([^.]*)(?:\.(.+)|)/;
    xt.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p, m, g = jt.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && xt.find.matchesSelector(te, o), n.guid || (n.guid = xt.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return "undefined" != typeof xt && xt.event.triggered !== e.type ? xt.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(At) || [""]).length; c--;) f = m = (s = ie.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = xt.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = xt.event.special[f] || {}, u = xt.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && xt.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(f, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), xt.event.global[f] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p, m, g = jt.hasData(t) && jt.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(At) || [""]).length; c--;)
                    if (s = ie.exec(e[c]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = xt.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || xt.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) xt.event.remove(t, f + e[c], n, i, !0);
                xt.isEmptyObject(l) && jt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, a, s = xt.event.fix(t),
                l = new Array(arguments.length),
                c = (jt.get(this, "events") || {})[s.type] || [],
                u = xt.event.special[s.type] || {};
            for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = xt.event.handlers.call(this, s, c), e = 0;
                    (o = a[e++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((xt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a, s = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = e[n]).selector + " "] && (a[o] = i.needsContext ? xt(o, this).index(c) > -1 : xt.find(o, this, null, [c]).length), a[o] && r.push(i);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < e.length && s.push({
                elem: c,
                handlers: e.slice(l)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(xt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: yt(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[xt.expando] ? t : new xt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== S() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === S() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return r(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, xt.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, xt.Event = function(t, e) {
        return this instanceof xt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? C : k, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && xt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[xt.expando] = !0, void 0) : new xt.Event(t, e)
    }, xt.Event.prototype = {
        constructor: xt.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = C, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = C, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = C, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, xt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ne.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, xt.event.addProp), xt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        xt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === i || xt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), xt.fn.extend({
        on: function(t, e, n, i) {
            return D(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return D(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, xt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = k), this.each(function() {
                xt.event.remove(this, t, n, e)
            })
        }
    });
    var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        re = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xt.extend({
        htmlPrefilter: function(t) {
            return t.replace(oe, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, a, s = t.cloneNode(!0),
                l = xt.contains(t.ownerDocument, t);
            if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || xt.isXMLDoc(t)))
                for (a = x(s), i = 0, o = (r = x(t)).length; i < o; i++) A(r[i], a[i]);
            if (e)
                if (n)
                    for (r = r || x(t), a = a || x(s), i = 0, o = r.length; i < o; i++) I(r[i], a[i]);
                else I(t, s);
            return (a = x(s, "script")).length > 0 && _(a, !l && x(t, "script")), s
        },
        cleanData: function(t) {
            for (var e, n, i, o = xt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (Yt(n)) {
                    if (e = n[jt.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? xt.event.remove(n, i) : xt.removeEvent(n, i, e.handle);
                        n[jt.expando] = void 0
                    }
                    n[Ht.expando] && (n[Ht.expando] = void 0)
                }
        }
    }), xt.fn.extend({
        detach: function(t) {
            return P(this, t, !0)
        },
        remove: function(t) {
            return P(this, t)
        },
        text: function(t) {
            return Nt(this, function(t) {
                return void 0 === t ? xt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return $(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return $(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = E(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return $(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (xt.cleanData(x(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return xt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !re.test(t) && !Qt[(Zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = xt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (xt.cleanData(x(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return $(this, arguments, function(e) {
                var n = this.parentNode;
                xt.inArray(this, t) < 0 && (xt.cleanData(x(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), xt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        xt.fn[t] = function(t) {
            for (var n, i = [], o = xt(t), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), xt(o[a])[e](n), ut.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var le = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"),
        ce = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        ue = new RegExp(qt.join("|"), "i");
    ! function() {
        function e() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", te.appendChild(l).appendChild(c);
                var e = t.getComputedStyle(c);
                i = "1%" !== e.top, s = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", te.removeChild(l), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, o, r, a, s, l = at.createElement("div"),
            c = at.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === c.style.backgroundClip, xt.extend(vt, {
            boxSizingReliable: function() {
                return e(), o
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), i
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), r
            }
        }))
    }();
    var de = /^(none|table(?!-c[ea]).+)/,
        he = /^--/,
        fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        me = ["Webkit", "Moz", "ms"],
        ge = at.createElement("div").style;
    xt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = N(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = p(e),
                    l = he.test(e),
                    c = t.style;
                if (l || (e = Y(s)), a = xt.cssHooks[e] || xt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : c[e];
                "string" == (r = typeof n) && (o = zt.exec(n)) && o[1] && (n = y(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (xt.cssNumber[s] ? "" : "px")), vt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = p(e);
            return he.test(e) || (e = Y(s)), (a = xt.cssHooks[e] || xt.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in pe && (o = pe[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), xt.each(["height", "width"], function(t, e) {
        xt.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !de.test(xt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, e, i) : Xt(t, fe, function() {
                    return F(t, e, i)
                })
            },
            set: function(t, n, i) {
                var o, r = ce(t),
                    a = "border-box" === xt.css(t, "boxSizing", !1, r),
                    s = i && H(t, e, i, a, r);
                return a && vt.scrollboxSize() === r.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - H(t, e, "border", !1, r) - .5)), s && (o = zt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = xt.css(t, e)), j(t, n, s)
            }
        }
    }), xt.cssHooks.marginLeft = R(vt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), xt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        xt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + qt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== t && (xt.cssHooks[t + e].set = j)
    }), xt.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, n) {
                var i, o, r = {},
                    a = 0;
                if (Array.isArray(e)) {
                    for (i = ce(t), o = e.length; a < o; a++) r[e[a]] = xt.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? xt.style(t, e, n) : xt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), xt.Tween = W, W.prototype = {
        constructor: W,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || xt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (xt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = W.propHooks[this.prop];
            return t && t.get ? t.get(this) : W.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = e = xt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = xt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                xt.fx.step[t.prop] ? xt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[xt.cssProps[t.prop]] && !xt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : xt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, xt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, xt.fx = W.prototype.init, xt.fx.step = {};
    var ve, ye, we = /^(?:toggle|show|hide)$/,
        be = /queueHooks$/;
    xt.Animation = xt.extend(G, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return y(n.elem, t, zt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                yt(t) ? (e = t, t = ["*"]) : t = t.match(At);
                for (var n, i = 0, o = t.length; i < o; i++) n = t[i], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(e)
            },
            prefilters: [X],
            prefilter: function(t, e) {
                e ? G.prefilters.unshift(t) : G.prefilters.push(t)
            }
        }), xt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? xt.extend({}, t) : {
                complete: n || !n && e || yt(t) && t,
                duration: t,
                easing: n && e || e && !yt(e) && e
            };
            return xt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in xt.fx.speeds ? i.duration = xt.fx.speeds[i.duration] : i.duration = xt.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                yt(i.old) && i.old.call(this), i.queue && xt.dequeue(this, i.queue)
            }, i
        }, xt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Bt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = xt.isEmptyObject(t),
                    r = xt.speed(e, n, i),
                    a = function() {
                        var e = G(this, xt.extend({}, t), r);
                        (o || jt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = xt.timers,
                        a = jt.get(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && be.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || xt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = jt.get(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = xt.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, xt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), xt.each(["toggle", "show", "hide"], function(t, e) {
            var n = xt.fn[e];
            xt.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, o)
            }
        }), xt.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            xt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), xt.timers = [], xt.fx.tick = function() {
            var t, e = 0,
                n = xt.timers;
            for (ve = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || xt.fx.stop(), ve = void 0
        }, xt.fx.timer = function(t) {
            xt.timers.push(t), xt.fx.start()
        }, xt.fx.interval = 13, xt.fx.start = function() {
            ye || (ye = !0, U())
        }, xt.fx.stop = function() {
            ye = null
        }, xt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, xt.fn.delay = function(e, n) {
            return e = xt.fx ? xt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t = at.createElement("input"),
                e = at.createElement("select").appendChild(at.createElement("option"));
            t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = e.selected, (t = at.createElement("input")).value = "t", t.type = "radio", vt.radioValue = "t" === t.value
        }();
    var xe, _e = xt.expr.attrHandle;
    xt.fn.extend({
        attr: function(t, e) {
            return Nt(this, xt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                xt.removeAttr(this, t)
            })
        }
    }), xt.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? xt.prop(t, e, n) : (1 === r && xt.isXMLDoc(t) || (o = xt.attrHooks[e.toLowerCase()] || (xt.expr.match.bool.test(e) ? xe : void 0)), void 0 !== n ? null === n ? void xt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = xt.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!vt.radioValue && "radio" === e && r(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                o = e && e.match(At);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) t.removeAttribute(n)
        }
    }), xe = {
        set: function(t, e, n) {
            return !1 === e ? xt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, xt.each(xt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = _e[e] || xt.find.attr;
        _e[e] = function(t, e, i) {
            var o, r, a = e.toLowerCase();
            return i || (r = _e[a], _e[a] = o, o = null != n(t, e, i) ? a : null, _e[a] = r), o
        }
    });
    var Te = /^(?:input|select|textarea|button)$/i,
        Ce = /^(?:a|area)$/i;
    xt.fn.extend({
        prop: function(t, e) {
            return Nt(this, xt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[xt.propFix[t] || t]
            })
        }
    }), xt.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && xt.isXMLDoc(t) || (e = xt.propFix[e] || e, o = xt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = xt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Te.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), vt.optSelected || (xt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        xt.propFix[this.toLowerCase()] = this
    }), xt.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (yt(t)) return this.each(function(e) {
                xt(this).addClass(t.call(this, e, K(this)))
            });
            if ((e = Q(t)).length)
                for (; n = this[l++];)
                    if (o = K(n), i = 1 === n.nodeType && " " + Z(o) + " ") {
                        for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = Z(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (yt(t)) return this.each(function(e) {
                xt(this).removeClass(t.call(this, e, K(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Q(t)).length)
                for (; n = this[l++];)
                    if (o = K(n), i = 1 === n.nodeType && " " + Z(o) + " ") {
                        for (a = 0; r = e[a++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (s = Z(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : yt(t) ? this.each(function(n) {
                xt(this).toggleClass(t.call(this, n, K(this), e), e)
            }) : this.each(function() {
                var e, o, r, a;
                if (i)
                    for (o = 0, r = xt(this), a = Q(t); e = a[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = K(this)) && jt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : jt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + Z(K(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var ke = /\r/g;
    xt.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = yt(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, xt(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = xt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = xt.valHooks[o.type] || xt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(ke, "") : null == n ? "" : n : void 0
        }
    }), xt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = xt.find.attr(t, "value");
                    return null != e ? e : Z(xt.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, o = t.options,
                        a = t.selectedIndex,
                        s = "select-one" === t.type,
                        l = s ? null : [],
                        c = s ? a + 1 : o.length;
                    for (i = a < 0 ? c : s ? a : 0; i < c; i++)
                        if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (e = xt(n).val(), s) return e;
                            l.push(e)
                        } return l
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = xt.makeArray(e), a = o.length; a--;)((i = o[a]).selected = xt.inArray(xt.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), xt.each(["radio", "checkbox"], function() {
        xt.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = xt.inArray(xt(t).val(), e) > -1
            }
        }, vt.checkOn || (xt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), vt.focusin = "onfocusin" in t;
    var Se = /^(?:focusinfocus|focusoutblur)$/,
        De = function(t) {
            t.stopPropagation()
        };
    xt.extend(xt.event, {
        trigger: function(e, n, i, o) {
            var r, a, s, l, c, u, d, h, f = [i || at],
                p = pt.call(e, "type") ? e.type : e,
                m = pt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = s = i = i || at, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(p + xt.event.triggered) && (p.indexOf(".") > -1 && (p = (m = p.split(".")).shift(), m.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[xt.expando] ? e : new xt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : xt.makeArray(n, [e]), d = xt.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !wt(i)) {
                    for (l = d.delegateType || p, Se.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (i.ownerDocument || at) && f.push(s.defaultView || s.parentWindow || t)
                }
                for (r = 0;
                    (a = f[r++]) && !e.isPropagationStopped();) h = a, e.type = r > 1 ? l : d.bindType || p, (u = (jt.get(a, "events") || {})[e.type] && jt.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && Yt(a) && (e.result = u.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Yt(i) || c && yt(i[p]) && !wt(i) && ((s = i[c]) && (i[c] = null), xt.event.triggered = p, e.isPropagationStopped() && h.addEventListener(p, De), i[p](), e.isPropagationStopped() && h.removeEventListener(p, De), xt.event.triggered = void 0, s && (i[c] = s)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = xt.extend(new xt.Event, n, {
                type: t,
                isSimulated: !0
            });
            xt.event.trigger(i, null, e)
        }
    }), xt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                xt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return xt.event.trigger(t, e, n, !0)
        }
    }), vt.focusin || xt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            xt.event.simulate(e, t.target, xt.event.fix(t))
        };
        xt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = jt.access(i, e);
                o || i.addEventListener(t, n, !0), jt.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = jt.access(i, e) - 1;
                o ? jt.access(i, e, o) : (i.removeEventListener(t, n, !0), jt.remove(i, e))
            }
        }
    });
    var Ee = t.location,
        Me = Date.now(),
        Oe = /\?/;
    xt.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || xt.error("Invalid XML: " + t), e
    };
    var Ie = /\[\]$/,
        Ae = /\r?\n/g,
        $e = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    xt.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                var n = yt(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !xt.isPlainObject(t)) xt.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) J(n, t[n], e, o);
        return i.join("&")
    }, xt.fn.extend({
        serialize: function() {
            return xt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = xt.prop(this, "elements");
                return t ? xt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !xt(this).is(":disabled") && Pe.test(this.nodeName) && !$e.test(t) && (this.checked || !Gt.test(t))
            }).map(function(t, e) {
                var n = xt(this).val();
                return null == n ? null : Array.isArray(n) ? xt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ae, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ae, "\r\n")
                }
            }).get()
        }
    });
    var Ne = /%20/g,
        Re = /#.*$/,
        Le = /([?&])_=[^&]*/,
        Ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        He = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        We = {},
        Ue = {},
        ze = "*/".concat("*"),
        qe = at.createElement("a");
    qe.href = Ee.href, xt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ee.href,
            type: "GET",
            isLocal: je.test(Ee.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": xt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? nt(nt(t, xt.ajaxSettings), e) : nt(xt.ajaxSettings, t)
        },
        ajaxPrefilter: tt(We),
        ajaxTransport: tt(Ue),
        ajax: function(t, e) {
            function n(t, e, n, a) {
                var l, d, h, w, b, x = e;
                c || (c = !0, s && T.clearTimeout(s), i = void 0, r = a || "", _.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, n && (w = it(f, _, n)), w = ot(f, w, _, l), l ? (f.ifModified && ((b = _.getResponseHeader("Last-Modified")) && (xt.lastModified[o] = b), (b = _.getResponseHeader("etag")) && (xt.etag[o] = b)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, d = w.data, l = !(h = w.error))) : (h = x, !t && x || (x = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || x) + "", l ? g.resolveWith(p, [d, x, _]) : g.rejectWith(p, [_, x, h]), _.statusCode(y), y = void 0, u && m.trigger(l ? "ajaxSuccess" : "ajaxError", [_, f, l ? d : h]), v.fireWith(p, [_, x]), u && (m.trigger("ajaxComplete", [_, f]), --xt.active || xt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, r, a, s, l, c, u, d, h, f = xt.ajaxSetup({}, e),
                p = f.context || f,
                m = f.context && (p.nodeType || p.jquery) ? xt(p) : xt.event,
                g = xt.Deferred(),
                v = xt.Callbacks("once memory"),
                y = f.statusCode || {},
                w = {},
                b = {},
                x = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Ye.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) _.always(t[_.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (g.promise(_), f.url = ((t || f.url || Ee.href) + "").replace(Fe, Ee.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(At) || [""], null == f.crossDomain) {
                l = at.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host
                } catch (T) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = xt.param(f.data, f.traditional)), et(We, f, e, _), c) return _;
            (u = xt.event && f.global) && 0 == xt.active++ && xt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !He.test(f.type), o = f.url.replace(Re, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ne, "+")) : (h = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Oe.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Le, "$1"), h = (Oe.test(o) ? "&" : "?") + "_=" + Me++ + h), f.url = o + h), f.ifModified && (xt.lastModified[o] && _.setRequestHeader("If-Modified-Since", xt.lastModified[o]), xt.etag[o] && _.setRequestHeader("If-None-Match", xt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) _.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, _, f) || c)) return _.abort();
            if (x = "abort", v.add(f.complete), _.done(f.success), _.fail(f.error), i = et(Ue, f, e, _)) {
                if (_.readyState = 1, u && m.trigger("ajaxSend", [_, f]), c) return _;
                f.async && f.timeout > 0 && (s = T.setTimeout(function() {
                    _.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, i.send(w, n)
                } catch (T) {
                    if (c) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return xt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return xt.get(t, void 0, e, "script")
        }
    }), xt.each(["get", "post"], function(t, e) {
        xt[e] = function(t, n, i, o) {
            return yt(n) && (o = o || i, i = n, n = void 0), xt.ajax(xt.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, xt.isPlainObject(t) && t))
        }
    }), xt._evalUrl = function(t) {
        return xt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, xt.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (yt(t) && (t = t.call(this[0])), e = xt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return yt(t) ? this.each(function(e) {
                xt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = xt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = yt(t);
            return this.each(function(n) {
                xt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                xt(this).replaceWith(this.childNodes)
            }), this
        }
    }), xt.expr.pseudos.hidden = function(t) {
        return !xt.expr.pseudos.visible(t)
    }, xt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, xt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Be = {
            0: 200,
            1223: 204
        },
        Xe = xt.ajaxSettings.xhr();
    vt.cors = !!Xe && "withCredentials" in Xe, vt.ajax = Xe = !!Xe, xt.ajaxTransport(function(t) {
        var e, n;
        if (vt.cors || Xe && !t.crossDomain) return {
            send: function(i, o) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) a.setRequestHeader(r, i[r]);
                e = function(t) {
                    return function() {
                        e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && s.setTimeout(function() {
                        e && n()
                    })
                }, e = e("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (e) throw s
                }
            },
            abort: function() {
                e && e()
            }
        }
    }), xt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), xt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return xt.globalEval(t), t
            }
        }
    }), xt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), xt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, o) {
                    e = xt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), at.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ve = [],
        Ge = /(=)\?(?=&|$)|\?\?/;
    xt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ve.pop() || xt.expando + "_" + Me++;
            return this[t] = !0, t
        }
    }), xt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = yt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ge, "$1" + o) : !1 !== e.jsonp && (e.url += (Oe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return a || xt.error(o + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === r ? xt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ve.push(o)), a && yt(r) && r(a[0]), a = r = void 0
        }), "script"
    }), vt.createHTMLDocument = function() {
        var t = at.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), xt.parseHTML = function(t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, o, r;
        return e || (vt.createHTMLDocument ? ((i = (e = at.implementation.createHTMLDocument("")).createElement("base")).href = at.location.href, e.head.appendChild(i)) : e = at), o = Dt.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = T([t], e, r), r && r.length && xt(r).remove(), xt.merge([], o.childNodes))
    }, xt.fn.load = function(t, e, n) {
        var i, o, r, a = this,
            s = t.indexOf(" ");
        return s > -1 && (i = Z(t.slice(s)), t = t.slice(0, s)), yt(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && xt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, a.html(i ? xt("<div>").append(xt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        xt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), xt.expr.pseudos.animated = function(t) {
        return xt.grep(xt.timers, function(e) {
            return t === e.elem
        }).length
    }, xt.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, l, c, u = xt.css(t, "position"),
                d = xt(t),
                h = {};
            "static" === u && (t.style.position = "relative"), s = d.offset(), r = xt.css(t, "top"), l = xt.css(t, "left"), (c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1) ? (a = (i = d.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), yt(e) && (e = e.call(t, n, xt.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + o), "using" in e ? e.using.call(t, h) : d.css(h)
        }
    }, xt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                xt.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === xt.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === xt.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((o = xt(t).offset()).top += xt.css(t, "borderTopWidth", !0), o.left += xt.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - xt.css(i, "marginTop", !0),
                    left: e.left - o.left - xt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === xt.css(t, "position");) t = t.offsetParent;
                return t || te
            })
        }
    }), xt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        xt.fn[t] = function(i) {
            return Nt(this, function(t, i, o) {
                var r;
                return wt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }), xt.each(["top", "left"], function(t, e) {
        xt.cssHooks[e] = R(vt.pixelPosition, function(t, n) {
            if (n) return n = N(t, e), le.test(n) ? xt(t).position()[e] + "px" : n
        })
    }), xt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        xt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            xt.fn[i] = function(o, r) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === r ? "margin" : "border");
                return Nt(this, function(e, n, o) {
                    var r;
                    return wt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? xt.css(e, n, s) : xt.style(e, n, o, s)
                }, e, a ? o : void 0, a)
            }
        })
    }), xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        xt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), xt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), xt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), xt.proxy = function(t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), yt(t)) return i = lt.call(arguments, 2), o = function() {
            return t.apply(e || this, i.concat(lt.call(arguments)))
        }, o.guid = t.guid = t.guid || xt.guid++, o
    }, xt.holdReady = function(t) {
        t ? xt.readyWait++ : xt.ready(!0)
    }, xt.isArray = Array.isArray, xt.parseJSON = JSON.parse, xt.nodeName = r, xt.isFunction = yt, xt.isWindow = wt, xt.camelCase = p, xt.type = i, xt.now = Date.now, xt.isNumeric = function(t) {
        var e = xt.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return xt
    });
    var Ze = t.jQuery,
        Ke = t.$;
    return xt.noConflict = function(e) {
        return t.$ === xt && (t.$ = Ke), e && t.jQuery === xt && (t.jQuery = Ze), xt
    }, e || (t.jQuery = t.$ = xt), xt
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
"use strict";
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
"use strict";
t.fn.emulateTransitionEnd = function(e) {
    var n = !1,
        i = this;
    return t(this).one("bsTransitionEnd", function() {
        n = !0
    }), setTimeout(function() {
        n || t(i).trigger(t.support.transition.end)
    }, e), this
}, t(function() {
    t.support.transition = function() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(t) {
"use strict";
var e = '[data-dismiss="alert"]',
    n = function(n) {
        t(n).on("click", e, this.close)
    };
n.VERSION = "3.4.0", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
    function i() {
        a.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
        r = o.attr("data-target");
    r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), r = "#" === r ? [] : r;
    var a = t(document).find(r);
    e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
};
var i = t.fn.alert;
t.fn.alert = function(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.alert");
        o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
    })
}, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
    return t.fn.alert = i, this
}, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.button"),
            r = "object" == typeof e && e;
        o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
}
var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
};
n.VERSION = "3.4.0", n.DEFAULTS = {
    loadingText: "loading..."
}, n.prototype.setState = function(e) {
    var n = "disabled",
        i = this.$element,
        o = i.is("input") ? "val" : "html",
        r = i.data();
    e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
        i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
    }, this), 0)
}, n.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var i = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
    return t.fn.button = i, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = t(n.target).closest(".btn");
    e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.carousel"),
            r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
            a = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
    })
}
var n = function(e, n) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
n.VERSION = "3.4.0", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, n.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, n.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, n.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, n.prototype.getItemForDirection = function(t, e) {
    var n = this.getItemIndex(e);
    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
    var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(i)
}, n.prototype.to = function(t) {
    var e = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
}, n.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, n.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, n.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, n.prototype.slide = function(e, i) {
    var o = this.$element.find(".item.active"),
        r = i || this.getItemForDirection(e, o),
        a = this.interval,
        s = "next" == e ? "left" : "right",
        l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var c = r[0],
        u = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: s
        });
    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(r)]);
            d && d.addClass("active")
        }
        var h = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: s
        });
        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), "object" == typeof r && r.length && r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
            r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(h)
            }, 0)
        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
    }
};
var i = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = i, this
};
var o = function(n) {
    var i = t(this),
        o = i.attr("href");
    o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
    var r = i.attr("data-target") || o,
        a = t(document).find(r);
    if (a.hasClass("carousel")) {
        var s = t.extend({}, a.data(), i.data()),
            l = i.attr("data-slide-to");
        l && (s.interval = !1), e.call(a, s), l && a.data("bs.carousel").to(l), n.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var n = t(this);
        e.call(n, n.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return t(document).find(i)
}

function n(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.collapse"),
            r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
    })
}
var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
i.VERSION = "3.4.0", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
}, i.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
            var r = t.Event("show.bs.collapse");
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                var l = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
            }
        }
    }
}, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var o = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            if (!t.support.transition) return o.call(this);
            this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
        }
    }
}, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, i.prototype.getParent = function() {
    return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
        var o = t(i);
        this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
}, i.prototype.addAriaAndCollapsedClass = function(t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
};
var o = t.fn.collapse;
t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o = t(this);
    o.attr("data-target") || i.preventDefault();
    var r = e(o),
        a = r.data("bs.collapse") ? "toggle" : o.data();
    n.call(r, a)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var n = e.attr("data-target");
    n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && t(document).find(n);
    return i && i.length ? i : e.parent()
}

function n(n) {
    n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(i).each(function() {
        var i = t(this),
            o = e(i),
            r = {
                relatedTarget: this
            };
        o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
    }))
}
var i = '[data-toggle="dropdown"]',
    o = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
o.VERSION = "3.4.0", o.prototype.toggle = function(i) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
        var r = e(o),
            a = r.hasClass("open");
        if (n(), !a) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
            var s = {
                relatedTarget: this
            };
            if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
            o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
        }
        return !1
    }
}, o.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
        var o = t(this);
        if (n.preventDefault(), n.stopPropagation(), !o.is(".disabled, :disabled")) {
            var r = e(o),
                a = r.hasClass("open");
            if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(i).trigger("focus"), o.trigger("click");
            var s = r.find(".dropdown-menu li:not(.disabled):visible a");
            if (s.length) {
                var l = s.index(n.target);
                38 == n.which && 0 < l && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
            }
        }
    }
};
var r = t.fn.dropdown;
t.fn.dropdown = function(e) {
    return this.each(function() {
        var n = t(this),
            i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
    })
}, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = r, this
}, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, i) {
    return this.each(function() {
        var o = t(this),
            r = o.data("bs.modal"),
            a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
    })
}
var n = function(e, n) {
    this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
n.VERSION = "3.4.0", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, n.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, n.prototype.show = function(e) {
    var i = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        i.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var o = t.support.transition && i.$element.hasClass("fade");
        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
        var r = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        o ? i.$dialog.one("bsTransitionEnd", function() {
            i.$element.trigger("focus").trigger(r)
        }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
    }))
}, n.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
}, n.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, n.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, n.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, n.prototype.backdrop = function(e) {
    var i = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var r = t.support.transition && o;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function() {
            i.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
    } else e && e()
}, n.prototype.handleUpdate = function() {
    this.adjustDialog()
}, n.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, n.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, n.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, n.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "";
    var n = this.scrollbarWidth;
    this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function(e, i) {
        var o = i.style.paddingRight,
            r = t(i).css("padding-right");
        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
    }))
}, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function(e, n) {
        var i = t(n).data("padding-right");
        t(n).removeData("padding-right"), n.style.paddingRight = i || ""
    })
}, n.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var i = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
    return t.fn.modal = i, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = t(this),
        o = i.attr("href"),
        r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
        a = t(document).find(r),
        s = a.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, a.data(), i.data());
    i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
            i.is(":visible") && i.trigger("focus")
        })
    }), e.call(a, s, this)
})
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
e.VERSION = "3.4.0", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, e.prototype.init = function(e, n, i) {
    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
        var a = o[r];
        if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != a) {
            var s = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.getOptions = function(e) {
    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, e.prototype.getDelegateOptions = function() {
    var e = {},
        n = this.getDefaults();
    return this._options && t.each(this._options, function(t, i) {
        n[t] != i && (e[t] = i)
    }), e
}, e.prototype.enter = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
    else {
        if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
        n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)
    }
}, e.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, e.prototype.leave = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
        if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
        n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)
    }
}, e.prototype.show = function() {
    var n = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(n);
        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (n.isDefaultPrevented() || !i) return;
        var o = this,
            r = this.tip(),
            a = this.getUID(this.type);
        this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(s);
        c && (s = s.replace(l, "") || "top"), r.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(t(document).find(this.options.container)) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var u = this.getPosition(),
            d = r[0].offsetWidth,
            h = r[0].offsetHeight;
        if (c) {
            var f = s,
                p = this.getPosition(this.$viewport);
            s = "bottom" == s && u.bottom + h > p.bottom ? "top" : "top" == s && u.top - h < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s, r.removeClass(f).addClass(s)
        }
        var m = this.getCalculatedOffset(s, u, d, h);
        this.applyPlacement(m, s);
        var g = function() {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
    }
}, e.prototype.applyPlacement = function(e, n) {
    var i = this.tip(),
        o = i[0].offsetWidth,
        r = i[0].offsetHeight,
        a = parseInt(i.css("margin-top"), 10),
        s = parseInt(i.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
        using: function(t) {
            i.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), i.addClass("in");
    var l = i[0].offsetWidth,
        c = i[0].offsetHeight;
    "top" == n && c != r && (e.top = e.top + r - c);
    var u = this.getViewportAdjustedDelta(n, e, l, c);
    u.left ? e.left += u.left : e.top += u.top;
    var d = /top|bottom/.test(n),
        h = d ? 2 * u.left - o + l : 2 * u.top - r + c,
        f = d ? "offsetWidth" : "offsetHeight";
    i.offset(e), this.replaceArrow(h, i[0][f], d)
}, e.prototype.replaceArrow = function(t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, e.prototype.hide = function(n) {
    function i() {
        "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
    }
    var o = this,
        r = t(this.$tip),
        a = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
}, e.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function() {
    return this.getTitle()
}, e.prototype.getPosition = function(e) {
    var n = (e = e || this.$element)[0],
        i = "BODY" == n.tagName,
        o = n.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
    }));
    var r = window.SVGElement && n instanceof window.SVGElement,
        a = i ? {
            top: 0,
            left: 0
        } : r ? null : e.offset(),
        s = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        l = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, o, s, l, a)
}, e.prototype.getCalculatedOffset = function(t, e, n, i) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
        top: e.top - i,
        left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - i / 2,
        left: e.left - n
    } : {
        top: e.top + e.height / 2 - i / 2,
        left: e.left + e.width
    }
}, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var s = e.top - r - a.scroll,
            l = e.top + r - a.scroll + i;
        s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
    } else {
        var c = e.left - r,
            u = e.left + r + n;
        c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u)
    }
    return o
}, e.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, e.prototype.getUID = function(t) {
    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
    return t
}, e.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.enable = function() {
    this.enabled = !0
}, e.prototype.disable = function() {
    this.enabled = !1
}, e.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, e.prototype.toggle = function(e) {
    var n = this;
    e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
}, e.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
};
var n = t.fn.tooltip;
t.fn.tooltip = function(n) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tooltip"),
            r = "object" == typeof n && n;
        !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new e(this, r)), "string" == typeof n && o[n]())
    })
}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = n, this
}
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
e.VERSION = "3.4.0", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, e.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, e.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var n = t.fn.popover;
t.fn.popover = function(n) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.popover"),
            r = "object" == typeof n && n;
        !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]())
    })
}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
    return t.fn.popover = n, this
}
}(jQuery),
function(t) {
"use strict";

function e(n, i) {
    this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function n(n) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.scrollspy"),
            r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
    })
}
e.VERSION = "3.4.0", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        n = "offset",
        i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            o = e.data("target") || e.attr("href"),
            r = /^#./.test(o) && t(o);
        return r && r.length && r.is(":visible") && [
            [r[n]().top + i, o]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        r = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), i <= e) return a != (t = r[r.length - 1]) && this.activate(t);
    if (a && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        i = t(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var i = t.fn.scrollspy;
t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = i, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        n.call(e, e.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tab");
        o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
    })
}
var n = function(e) {
    this.element = t(e)
};
n.VERSION = "3.4.0", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");
    if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = n.find(".active:last a"),
            r = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            a = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
        if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
            var s = t(document).find(i);
            this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                o.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o[0]
                })
            })
        }
    }
}, n.prototype.activate = function(e, i, o) {
    function r() {
        a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var a = i.find("> .active"),
        s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
    a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
};
var i = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, this
};
var o = function(n) {
    n.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.affix"),
            r = "object" == typeof e && e;
        o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
    })
}
var n = function(e, i) {
    this.options = t.extend({}, n.DEFAULTS, i);
    var o = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
    this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
n.VERSION = "3.4.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
}, n.prototype.getState = function(t, e, n, i) {
    var o = this.$target.scrollTop(),
        r = this.$element.offset(),
        a = this.$target.height();
    if (null != n && "top" == this.affixed) return o < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
    var s = null == this.affixed,
        l = s ? o : r.top;
    return null != n && o <= n ? "top" : null != i && t - i <= l + (s ? a : e) && "bottom"
}, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            r = i.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
        var s = this.getState(a, e, o, r);
        if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (s ? "-" + s : ""),
                c = t.Event(l + ".bs.affix");
            if (this.$element.trigger(c), c.isDefaultPrevented()) return;
            this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == s && this.$element.offset({
            top: a - e - r
        })
    }
};
var i = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
    return t.fn.affix = i, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var n = t(this),
            i = n.data();
        i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
    })
})
}(jQuery), ! function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
"use strict";

function t() {
    return Gt.apply(null, arguments)
}

function e(t) {
    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
}

function n(t) {
    return null != t && "[object Object]" === Object.prototype.toString.call(t)
}

function i(t) {
    return void 0 === t
}

function o(t) {
    return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
}

function r(t) {
    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
}

function a(t, e) {
    var n, i = [];
    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
    return i
}

function s(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
}

function l(t, e) {
    for (var n in e) s(e, n) && (t[n] = e[n]);
    return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
}

function c(t, e, n, i) {
    return mt(t, e, n, i, !0).utc()
}

function u(t) {
    return null == t._pf && (t._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }), t._pf
}

function d(t) {
    if (null == t._isValid) {
        var e = u(t),
            n = Zt.call(e.parsedDateParts, function(t) {
                return null != t
            }),
            i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
        t._isValid = i
    }
    return t._isValid
}

function h(t) {
    var e = c(NaN);
    return null != t ? l(u(e), t) : u(e).userInvalidated = !0, e
}

function f(t, e) {
    var n, o, r;
    if (i(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), i(e._i) || (t._i = e._i), i(e._f) || (t._f = e._f), i(e._l) || (t._l = e._l), i(e._strict) || (t._strict = e._strict), i(e._tzm) || (t._tzm = e._tzm), i(e._isUTC) || (t._isUTC = e._isUTC), i(e._offset) || (t._offset = e._offset), i(e._pf) || (t._pf = u(e)), i(e._locale) || (t._locale = e._locale), 0 < Qt.length)
        for (n = 0; n < Qt.length; n++) i(r = e[o = Qt[n]]) || (t[o] = r);
    return t
}

function p(e) {
    f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Jt && (Jt = !0, t.updateOffset(this), Jt = !1)
}

function m(t) {
    return t instanceof p || null != t && null != t._isAMomentObject
}

function g(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
}

function v(t) {
    var e = +t,
        n = 0;
    return 0 !== e && isFinite(e) && (n = g(e)), n
}

function y(t, e, n) {
    var i, o = Math.min(t.length, e.length),
        r = Math.abs(t.length - e.length),
        a = 0;
    for (i = 0; i < o; i++)(n && t[i] !== e[i] || !n && v(t[i]) !== v(e[i])) && a++;
    return a + r
}

function w(e) {
    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
}

function b(e, n) {
    var i = !0;
    return l(function() {
        if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
            for (var o, r = [], a = 0; a < arguments.length; a++) {
                if (o = "", "object" == typeof arguments[a]) {
                    for (var s in o += "\n[" + a + "] ", arguments[0]) o += s + ": " + arguments[0][s] + ", ";
                    o = o.slice(0, -2)
                } else o = arguments[a];
                r.push(o)
            }
            w(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1
        }
        return n.apply(this, arguments)
    }, n)
}

function x(e, n) {
    null != t.deprecationHandler && t.deprecationHandler(e, n), te[e] || (w(n), te[e] = !0)
}

function _(t) {
    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
}

function T(t, e) {
    var i, o = l({}, t);
    for (i in e) s(e, i) && (n(t[i]) && n(e[i]) ? (o[i] = {}, l(o[i], t[i]), l(o[i], e[i])) : null != e[i] ? o[i] = e[i] : delete o[i]);
    for (i in t) s(t, i) && !s(e, i) && n(t[i]) && (o[i] = l({}, o[i]));
    return o
}

function C(t) {
    null != t && this.set(t)
}

function k(t, e) {
    var n = t.toLowerCase();
    ee[n] = ee[n + "s"] = ee[e] = t
}

function S(t) {
    return "string" == typeof t ? ee[t] || ee[t.toLowerCase()] : void 0
}

function D(t) {
    var e, n, i = {};
    for (n in t) s(t, n) && (e = S(n)) && (i[e] = t[n]);
    return i
}

function E(t, e) {
    ne[t] = e
}

function M(t, e, n) {
    var i = "" + Math.abs(t),
        o = e - i.length;
    return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + i
}

function O(t, e, n, i) {
    var o = i;
    "string" == typeof i && (o = function() {
        return this[i]()
    }), t && (ae[t] = o), e && (ae[e[0]] = function() {
        return M(o.apply(this, arguments), e[1], e[2])
    }), n && (ae[n] = function() {
        return this.localeData().ordinal(o.apply(this, arguments), t)
    })
}

function I(t, e) {
    return t.isValid() ? (e = A(e, t.localeData()), re[e] = re[e] || function(t) {
        var e, n, i, o = t.match(ie);
        for (e = 0, n = o.length; e < n; e++) ae[o[e]] ? o[e] = ae[o[e]] : o[e] = (i = o[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
        return function(e) {
            var i, r = "";
            for (i = 0; i < n; i++) r += _(o[i]) ? o[i].call(e, t) : o[i];
            return r
        }
    }(e), re[e](t)) : t.localeData().invalidDate()
}

function A(t, e) {
    function n(t) {
        return e.longDateFormat(t) || t
    }
    var i = 5;
    for (oe.lastIndex = 0; 0 <= i && oe.test(t);) t = t.replace(oe, n), oe.lastIndex = 0, i -= 1;
    return t
}

function $(t, e, n) {
    Te[t] = _(e) ? e : function(t, i) {
        return t && n ? n : e
    }
}

function P(t, e) {
    return s(Te, t) ? Te[t](e._strict, e._locale) : new RegExp(N(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, o) {
        return e || n || i || o
    })))
}

function N(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

function R(t, e) {
    var n, i = e;
    for ("string" == typeof t && (t = [t]), o(e) && (i = function(t, n) {
            n[e] = v(t)
        }), n = 0; n < t.length; n++) Ce[t[n]] = i
}

function L(t, e) {
    R(t, function(t, n, i, o) {
        i._w = i._w || {}, e(t, i._w, i, o)
    })
}

function Y(t) {
    return j(t) ? 366 : 365
}

function j(t) {
    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
}

function H(e, n) {
    return function(i) {
        return null != i ? (W(this, e, i), t.updateOffset(this, n), this) : F(this, e)
    }
}

function F(t, e) {
    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
}

function W(t, e, n) {
    t.isValid() && !isNaN(n) && ("FullYear" === e && j(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), U(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
}

function U(t, e) {
    if (isNaN(t) || isNaN(e)) return NaN;
    var n, i = (e % (n = 12) + n) % n;
    return t += (e - i) / 12, 1 === i ? j(t) ? 29 : 28 : 31 - i % 7 % 2
}

function z(t, e) {
    var n;
    if (!t.isValid()) return t;
    if ("string" == typeof e)
        if (/^\d+$/.test(e)) e = v(e);
        else if (!o(e = t.localeData().monthsParse(e))) return t;
    return n = Math.min(t.date(), U(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
}

function q(e) {
    return null != e ? (z(this, e), t.updateOffset(this, !0), this) : F(this, "Month")
}

function B() {
    function t(t, e) {
        return e.length - t.length
    }
    var e, n, i = [],
        o = [],
        r = [];
    for (e = 0; e < 12; e++) n = c([2e3, e]), i.push(this.monthsShort(n, "")), o.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    for (i.sort(t), o.sort(t), r.sort(t), e = 0; e < 12; e++) i[e] = N(i[e]), o[e] = N(o[e]);
    for (e = 0; e < 24; e++) r[e] = N(r[e]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
}

function X(t) {
    var e = new Date(Date.UTC.apply(null, arguments));
    return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
}

function V(t, e, n) {
    var i = 7 + e - n;
    return -((7 + X(t, 0, i).getUTCDay() - e) % 7) + i - 1
}

function G(t, e, n, i, o) {
    var r, a, s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + V(t, i, o);
    return a = s <= 0 ? Y(r = t - 1) + s : s > Y(t) ? (r = t + 1, s - Y(t)) : (r = t, s), {
        year: r,
        dayOfYear: a
    }
}

function Z(t, e, n) {
    var i, o, r = V(t.year(), e, n),
        a = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
    return a < 1 ? i = a + K(o = t.year() - 1, e, n) : a > K(t.year(), e, n) ? (i = a - K(t.year(), e, n), o = t.year() + 1) : (o = t.year(), i = a), {
        week: i,
        year: o
    }
}

function K(t, e, n) {
    var i = V(t, e, n),
        o = V(t + 1, e, n);
    return (Y(t) - i + o) / 7
}

function Q() {
    function t(t, e) {
        return e.length - t.length
    }
    var e, n, i, o, r, a = [],
        s = [],
        l = [],
        u = [];
    for (e = 0; e < 7; e++) n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(i), s.push(o), l.push(r), u.push(i), u.push(o), u.push(r);
    for (a.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = N(s[e]), l[e] = N(l[e]), u[e] = N(u[e]);
    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
}

function J() {
    return this.hours() % 12 || 12
}

function tt(t, e) {
    O(t, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), e)
    })
}

function et(t, e) {
    return e._meridiemParse
}

function nt(t) {
    return t ? t.toLowerCase().replace("_", "-") : t
}

function it(t) {
    var e = null;
    if (!Ze[t] && "undefined" != typeof module && module && module.exports) try {
        e = Xe._abbr, require("./locale/" + t), ot(e)
    } catch (t) {}
    return Ze[t]
}

function ot(t, e) {
    var n;
    return t && ((n = i(e) ? at(t) : rt(t, e)) ? Xe = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Xe._abbr
}

function rt(t, e) {
    if (null === e) return delete Ze[t], null;
    var n, i = Ge;
    if (e.abbr = t, null != Ze[t]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Ze[t]._config;
    else if (null != e.parentLocale)
        if (null != Ze[e.parentLocale]) i = Ze[e.parentLocale]._config;
        else {
            if (null == (n = it(e.parentLocale))) return Ke[e.parentLocale] || (Ke[e.parentLocale] = []), Ke[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            i = n._config
        } return Ze[t] = new C(T(i, e)), Ke[t] && Ke[t].forEach(function(t) {
        rt(t.name, t.config)
    }), ot(t), Ze[t]
}

function at(t) {
    var n;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Xe;
    if (!e(t)) {
        if (n = it(t)) return n;
        t = [t]
    }
    return function(t) {
        for (var e, n, i, o, r = 0; r < t.length;) {
            for (e = (o = nt(t[r]).split("-")).length, n = (n = nt(t[r + 1])) ? n.split("-") : null; 0 < e;) {
                if (i = it(o.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && y(o, n, !0) >= e - 1) break;
                e--
            }
            r++
        }
        return Xe
    }(t)
}

function st(t) {
    var e, n = t._a;
    return n && -2 === u(t).overflow && (e = n[Se] < 0 || 11 < n[Se] ? Se : n[De] < 1 || n[De] > U(n[ke], n[Se]) ? De : n[Ee] < 0 || 24 < n[Ee] || 24 === n[Ee] && (0 !== n[Me] || 0 !== n[Oe] || 0 !== n[Ie]) ? Ee : n[Me] < 0 || 59 < n[Me] ? Me : n[Oe] < 0 || 59 < n[Oe] ? Oe : n[Ie] < 0 || 999 < n[Ie] ? Ie : -1, u(t)._overflowDayOfYear && (e < ke || De < e) && (e = De), u(t)._overflowWeeks && -1 === e && (e = Ae), u(t)._overflowWeekday && -1 === e && (e = $e), u(t).overflow = e), t
}

function lt(t, e, n) {
    return null != t ? t : null != e ? e : n
}

function ct(e) {
    var n, i, o, r, a, s = [];
    if (!e._d) {
        var l, c;
        for (l = e, c = new Date(t.now()), o = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], e._w && null == e._a[De] && null == e._a[Se] && function(t) {
                var e, n, i, o, r, a, s, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, a = 4, n = lt(e.GG, t._a[ke], Z(gt(), 1, 4).year), i = lt(e.W, 1), ((o = lt(e.E, 1)) < 1 || 7 < o) && (l = !0);
                else {
                    r = t._locale._week.dow, a = t._locale._week.doy;
                    var c = Z(gt(), r, a);
                    n = lt(e.gg, t._a[ke], c.year), i = lt(e.w, c.week), null != e.d ? ((o = e.d) < 0 || 6 < o) && (l = !0) : null != e.e ? (o = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : o = r
                }
                i < 1 || i > K(n, r, a) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (s = G(n, i, o, r, a), t._a[ke] = s.year, t._dayOfYear = s.dayOfYear)
            }(e), null != e._dayOfYear && (a = lt(e._a[ke], o[ke]), (e._dayOfYear > Y(a) || 0 === e._dayOfYear) && (u(e)._overflowDayOfYear = !0), i = X(a, 0, e._dayOfYear), e._a[Se] = i.getUTCMonth(), e._a[De] = i.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = s[n] = o[n];
        for (; n < 7; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
        24 === e._a[Ee] && 0 === e._a[Me] && 0 === e._a[Oe] && 0 === e._a[Ie] && (e._nextDay = !0, e._a[Ee] = 0), e._d = (e._useUTC ? X : function(t, e, n, i, o, r, a) {
            var s = new Date(t, e, n, i, o, r, a);
            return t < 100 && 0 <= t && isFinite(s.getFullYear()) && s.setFullYear(t), s
        }).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (u(e).weekdayMismatch = !0)
    }
}

function ut(t) {
    var e, n, i, o, r, a, s = t._i,
        l = Qe.exec(s) || Je.exec(s);
    if (l) {
        for (u(t).iso = !0, e = 0, n = en.length; e < n; e++)
            if (en[e][1].exec(l[1])) {
                o = en[e][0], i = !1 !== en[e][2];
                break
            } if (null == o) return void(t._isValid = !1);
        if (l[3]) {
            for (e = 0, n = nn.length; e < n; e++)
                if (nn[e][1].exec(l[3])) {
                    r = (l[2] || " ") + nn[e][0];
                    break
                } if (null == r) return void(t._isValid = !1)
        }
        if (!i && null != r) return void(t._isValid = !1);
        if (l[4]) {
            if (!tn.exec(l[4])) return void(t._isValid = !1);
            a = "Z"
        }
        t._f = o + (r || "") + (a || ""), ft(t)
    } else t._isValid = !1
}

function dt(t, e, n, i, o, r) {
    var a = [function(t) {
        var e = parseInt(t, 10);
        return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
    }(t), Ye.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(o, 10)];
    return r && a.push(parseInt(r, 10)), a
}

function ht(t) {
    var e, n, i, o = rn.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (o) {
        var r = dt(o[4], o[3], o[2], o[5], o[6], o[7]);
        if (e = o[1], n = r, i = t, e && We.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (u(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
        t._a = r, t._tzm = function(t, e, n) {
            if (t) return an[t];
            if (e) return 0;
            var i = parseInt(n, 10),
                o = i % 100;
            return (i - o) / 100 * 60 + o
        }(o[8], o[9], o[10]), t._d = X.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), u(t).rfc2822 = !0
    } else t._isValid = !1
}

function ft(e) {
    if (e._f !== t.ISO_8601)
        if (e._f !== t.RFC_2822) {
            e._a = [], u(e).empty = !0;
            var n, i, o, r, a, l, c, d, h = "" + e._i,
                f = h.length,
                p = 0;
            for (o = A(e._f, e._locale).match(ie) || [], n = 0; n < o.length; n++) r = o[n], (i = (h.match(P(r, e)) || [])[0]) && (0 < (a = h.substr(0, h.indexOf(i))).length && u(e).unusedInput.push(a), h = h.slice(h.indexOf(i) + i.length), p += i.length), ae[r] ? (i ? u(e).empty = !1 : u(e).unusedTokens.push(r), l = r, d = e, null != (c = i) && s(Ce, l) && Ce[l](c, d._a, d, l)) : e._strict && !i && u(e).unusedTokens.push(r);
            u(e).charsLeftOver = f - p, 0 < h.length && u(e).unusedInput.push(h), e._a[Ee] <= 12 && !0 === u(e).bigHour && 0 < e._a[Ee] && (u(e).bigHour = void 0), u(e).parsedDateParts = e._a.slice(0), u(e).meridiem = e._meridiem, e._a[Ee] = function(t, e, n) {
                var i;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0)), e)
            }(e._locale, e._a[Ee], e._meridiem), ct(e), st(e)
        } else ht(e);
    else ut(e)
}

function pt(s) {
    var c, g, v, y, w = s._i,
        b = s._f;
    return s._locale = s._locale || at(s._l), null === w || void 0 === b && "" === w ? h({
        nullInput: !0
    }) : ("string" == typeof w && (s._i = w = s._locale.preparse(w)), m(w) ? new p(st(w)) : (r(w) ? s._d = w : e(b) ? function(t) {
        var e, n, i, o, r;
        if (0 === t._f.length) return u(t).invalidFormat = !0, t._d = new Date(NaN);
        for (o = 0; o < t._f.length; o++) r = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], ft(e), d(e) && (r += u(e).charsLeftOver, r += 10 * u(e).unusedTokens.length, u(e).score = r, (null == i || r < i) && (i = r, n = e));
        l(t, n || e)
    }(s) : b ? ft(s) : i(g = (c = s)._i) ? c._d = new Date(t.now()) : r(g) ? c._d = new Date(g.valueOf()) : "string" == typeof g ? (v = c, null === (y = on.exec(v._i)) ? (ut(v), !1 === v._isValid && (delete v._isValid, ht(v), !1 === v._isValid && (delete v._isValid, t.createFromInputFallback(v)))) : v._d = new Date((+y[1]))) : e(g) ? (c._a = a(g.slice(0), function(t) {
        return parseInt(t, 10)
    }), ct(c)) : n(g) ? function(t) {
        if (!t._d) {
            var e = D(t._i);
            t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
            }), ct(t)
        }
    }(c) : o(g) ? c._d = new Date(g) : t.createFromInputFallback(c), d(s) || (s._d = null), s))
}

function mt(t, i, o, r, a) {
    var s, l = {};
    return !0 !== o && !1 !== o || (r = o, o = void 0), (n(t) && function(t) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
        var e;
        for (e in t)
            if (t.hasOwnProperty(e)) return !1;
        return !0
    }(t) || e(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = t, l._f = i, l._strict = r, (s = new p(st(pt(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
}

function gt(t, e, n, i) {
    return mt(t, e, n, i, !1)
}

function vt(t, n) {
    var i, o;
    if (1 === n.length && e(n[0]) && (n = n[0]), !n.length) return gt();
    for (i = n[0], o = 1; o < n.length; ++o) n[o].isValid() && !n[o][t](i) || (i = n[o]);
    return i
}

function yt(t) {
    var e = D(t),
        n = e.year || 0,
        i = e.quarter || 0,
        o = e.month || 0,
        r = e.week || e.isoWeek || 0,
        a = e.day || 0,
        s = e.hour || 0,
        l = e.minute || 0,
        c = e.second || 0,
        u = e.millisecond || 0;
    this._isValid = function(t) {
        for (var e in t)
            if (-1 === Pe.call(cn, e) || null != t[e] && isNaN(t[e])) return !1;
        for (var n = !1, i = 0; i < cn.length; ++i)
            if (t[cn[i]]) {
                if (n) return !1;
                parseFloat(t[cn[i]]) !== v(t[cn[i]]) && (n = !0)
            } return !0
    }(e), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * r, this._months = +o + 3 * i + 12 * n, this._data = {}, this._locale = at(), this._bubble()
}

function wt(t) {
    return t instanceof yt
}

function bt(t) {
    return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
}

function xt(t, e) {
    O(t, 0, 0, function() {
        var t = this.utcOffset(),
            n = "+";
        return t < 0 && (t = -t, n = "-"), n + M(~~(t / 60), 2) + e + M(~~t % 60, 2)
    })
}

function _t(t, e) {
    var n = (e || "").match(t);
    if (null === n) return null;
    var i = ((n[n.length - 1] || []) + "").match(un) || ["-", 0, 0],
        o = 60 * i[1] + v(i[2]);
    return 0 === o ? 0 : "+" === i[0] ? o : -o
}

function Tt(e, n) {
    var i, o;
    return n._isUTC ? (i = n.clone(), o = (m(e) || r(e) ? e.valueOf() : gt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), t.updateOffset(i, !1), i) : gt(e).local()
}

function Ct(t) {
    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
}

function kt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset
}

function St(t, e) {
    var n, i, r, a = t,
        l = null;
    return wt(t) ? a = {
        ms: t._milliseconds,
        d: t._days,
        M: t._months
    } : o(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (l = dn.exec(t)) ? (n = "-" === l[1] ? -1 : 1, a = {
        y: 0,
        d: v(l[De]) * n,
        h: v(l[Ee]) * n,
        m: v(l[Me]) * n,
        s: v(l[Oe]) * n,
        ms: v(bt(1e3 * l[Ie])) * n
    }) : (l = hn.exec(t)) ? (n = "-" === l[1] ? -1 : 1, a = {
        y: Dt(l[2], n),
        M: Dt(l[3], n),
        w: Dt(l[4], n),
        d: Dt(l[5], n),
        h: Dt(l[6], n),
        m: Dt(l[7], n),
        s: Dt(l[8], n)
    }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (r = function(t, e) {
        var n;
        return t.isValid() && e.isValid() ? (e = Tt(e, t), t.isBefore(e) ? n = Et(t, e) : ((n = Et(e, t)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }(gt(a.from), gt(a.to)), (a = {}).ms = r.milliseconds, a.M = r.months), i = new yt(a), wt(t) && s(t, "_locale") && (i._locale = t._locale), i
}

function Dt(t, e) {
    var n = t && parseFloat(t.replace(",", "."));
    return (isNaN(n) ? 0 : n) * e
}

function Et(t, e) {
    var n = {
        milliseconds: 0,
        months: 0
    };
    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
}

function Mt(t, e) {
    return function(n, i) {
        var o;
        return null === i || isNaN(+i) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), Ot(this, St(n = "string" == typeof n ? +n : n, i), t), this
    }
}

function Ot(e, n, i, o) {
    var r = n._milliseconds,
        a = bt(n._days),
        s = bt(n._months);
    e.isValid() && (o = null == o || o, s && z(e, F(e, "Month") + s * i), a && W(e, "Date", F(e, "Date") + a * i), r && e._d.setTime(e._d.valueOf() + r * i), o && t.updateOffset(e, a || s))
}

function It(t, e) {
    var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        i = t.clone().add(n, "months");
    return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
}

function At(t) {
    var e;
    return void 0 === t ? this._locale._abbr : (null != (e = at(t)) && (this._locale = e), this)
}

function $t() {
    return this._locale
}

function Pt(t, e) {
    O(0, [t, t.length], 0, e)
}

function Nt(t, e, n, i, o) {
    var r;
    return null == t ? Z(this, i, o).year : ((r = K(t, i, o)) < e && (e = r), function(t, e, n, i, o) {
        var r = G(t, e, n, i, o),
            a = X(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
    }.call(this, t, e, n, i, o))
}

function Rt(t, e) {
    e[Ie] = v(1e3 * ("0." + t))
}

function Lt(t) {
    return t
}

function Yt(t, e, n, i) {
    var o = at(),
        r = c().set(i, e);
    return o[n](r, t)
}

function jt(t, e, n) {
    if (o(t) && (e = t, t = void 0), t = t || "", null != e) return Yt(t, e, n, "month");
    var i, r = [];
    for (i = 0; i < 12; i++) r[i] = Yt(t, i, n, "month");
    return r
}

function Ht(t, e, n, i) {
    "boolean" == typeof t ? o(e) && (n = e, e = void 0) : (e = t, t = !1, o(n = e) && (n = e, e = void 0)), e = e || "";
    var r, a = at(),
        s = t ? a._week.dow : 0;
    if (null != n) return Yt(e, (n + s) % 7, i, "day");
    var l = [];
    for (r = 0; r < 7; r++) l[r] = Yt(e, (r + s) % 7, i, "day");
    return l
}

function Ft(t, e, n, i) {
    var o = St(e, n);
    return t._milliseconds += i * o._milliseconds, t._days += i * o._days, t._months += i * o._months, t._bubble()
}

function Wt(t) {
    return t < 0 ? Math.floor(t) : Math.ceil(t)
}

function Ut(t) {
    return 4800 * t / 146097
}

function zt(t) {
    return 146097 * t / 4800
}

function qt(t) {
    return function() {
        return this.as(t)
    }
}

function Bt(t) {
    return function() {
        return this.isValid() ? this._data[t] : NaN
    }
}

function Xt(t) {
    return (0 < t) - (t < 0) || +t
}

function Vt() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t, e, n = Fn(this._milliseconds) / 1e3,
        i = Fn(this._days),
        o = Fn(this._months);
    e = g((t = g(n / 60)) / 60), n %= 60, t %= 60;
    var r = g(o / 12),
        a = o %= 12,
        s = i,
        l = e,
        c = t,
        u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
    if (!d) return "P0D";
    var h = d < 0 ? "-" : "",
        f = Xt(this._months) !== Xt(d) ? "-" : "",
        p = Xt(this._days) !== Xt(d) ? "-" : "",
        m = Xt(this._milliseconds) !== Xt(d) ? "-" : "";
    return h + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (s ? p + s + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
}
var Gt, Zt;
Zt = Array.prototype.some ? Array.prototype.some : function(t) {
    for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
        if (i in e && t.call(this, e[i], i, e)) return !0;
    return !1
};
var Kt, Qt = t.momentProperties = [],
    Jt = !1,
    te = {};
t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, Kt = Object.keys ? Object.keys : function(t) {
    var e, n = [];
    for (e in t) s(t, e) && n.push(e);
    return n
};
var ee = {},
    ne = {},
    ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    oe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    re = {},
    ae = {},
    se = /\d/,
    le = /\d\d/,
    ce = /\d{3}/,
    ue = /\d{4}/,
    de = /[+-]?\d{6}/,
    he = /\d\d?/,
    fe = /\d\d\d\d?/,
    pe = /\d\d\d\d\d\d?/,
    me = /\d{1,3}/,
    ge = /\d{1,4}/,
    ve = /[+-]?\d{1,6}/,
    ye = /\d+/,
    we = /[+-]?\d+/,
    be = /Z|[+-]\d\d:?\d\d/gi,
    xe = /Z|[+-]\d\d(?::?\d\d)?/gi,
    _e = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Te = {},
    Ce = {},
    ke = 0,
    Se = 1,
    De = 2,
    Ee = 3,
    Me = 4,
    Oe = 5,
    Ie = 6,
    Ae = 7,
    $e = 8;
O("Y", 0, 0, function() {
    var t = this.year();
    return t <= 9999 ? "" + t : "+" + t
}), O(0, ["YY", 2], 0, function() {
    return this.year() % 100
}), O(0, ["YYYY", 4], 0, "year"), O(0, ["YYYYY", 5], 0, "year"), O(0, ["YYYYYY", 6, !0], 0, "year"), k("year", "y"), E("year", 1), $("Y", we), $("YY", he, le), $("YYYY", ge, ue), $("YYYYY", ve, de), $("YYYYYY", ve, de), R(["YYYYY", "YYYYYY"], ke), R("YYYY", function(e, n) {
    n[ke] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
}), R("YY", function(e, n) {
    n[ke] = t.parseTwoDigitYear(e)
}), R("Y", function(t, e) {
    e[ke] = parseInt(t, 10)
}), t.parseTwoDigitYear = function(t) {
    return v(t) + (68 < v(t) ? 1900 : 2e3)
};
var Pe, Ne = H("FullYear", !0);
Pe = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
    var e;
    for (e = 0; e < this.length; ++e)
        if (this[e] === t) return e;
    return -1
}, O("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
}), O("MMM", 0, 0, function(t) {
    return this.localeData().monthsShort(this, t)
}), O("MMMM", 0, 0, function(t) {
    return this.localeData().months(this, t)
}), k("month", "M"), E("month", 8), $("M", he), $("MM", he, le), $("MMM", function(t, e) {
    return e.monthsShortRegex(t)
}), $("MMMM", function(t, e) {
    return e.monthsRegex(t)
}), R(["M", "MM"], function(t, e) {
    e[Se] = v(t) - 1
}), R(["MMM", "MMMM"], function(t, e, n, i) {
    var o = n._locale.monthsParse(t, i, n._strict);
    null != o ? e[Se] = o : u(n).invalidMonth = t
});
var Re = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Ye = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    je = _e,
    He = _e;
O("w", ["ww", 2], "wo", "week"), O("W", ["WW", 2], "Wo", "isoWeek"), k("week", "w"), k("isoWeek", "W"), E("week", 5), E("isoWeek", 5), $("w", he), $("ww", he, le), $("W", he), $("WW", he, le), L(["w", "ww", "W", "WW"], function(t, e, n, i) {
    e[i.substr(0, 1)] = v(t)
}), O("d", 0, "do", "day"), O("dd", 0, 0, function(t) {
    return this.localeData().weekdaysMin(this, t)
}), O("ddd", 0, 0, function(t) {
    return this.localeData().weekdaysShort(this, t)
}), O("dddd", 0, 0, function(t) {
    return this.localeData().weekdays(this, t)
}), O("e", 0, 0, "weekday"), O("E", 0, 0, "isoWeekday"), k("day", "d"), k("weekday", "e"), k("isoWeekday", "E"), E("day", 11), E("weekday", 11), E("isoWeekday", 11), $("d", he), $("e", he), $("E", he), $("dd", function(t, e) {
    return e.weekdaysMinRegex(t)
}), $("ddd", function(t, e) {
    return e.weekdaysShortRegex(t)
}), $("dddd", function(t, e) {
    return e.weekdaysRegex(t)
}), L(["dd", "ddd", "dddd"], function(t, e, n, i) {
    var o = n._locale.weekdaysParse(t, i, n._strict);
    null != o ? e.d = o : u(n).invalidWeekday = t
}), L(["d", "e", "E"], function(t, e, n, i) {
    e[i] = v(t)
});
var Fe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    We = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    ze = _e,
    qe = _e,
    Be = _e;
O("H", ["HH", 2], 0, "hour"), O("h", ["hh", 2], 0, J), O("k", ["kk", 2], 0, function() {
    return this.hours() || 24
}), O("hmm", 0, 0, function() {
    return "" + J.apply(this) + M(this.minutes(), 2)
}), O("hmmss", 0, 0, function() {
    return "" + J.apply(this) + M(this.minutes(), 2) + M(this.seconds(), 2)
}), O("Hmm", 0, 0, function() {
    return "" + this.hours() + M(this.minutes(), 2)
}), O("Hmmss", 0, 0, function() {
    return "" + this.hours() + M(this.minutes(), 2) + M(this.seconds(), 2);
}), tt("a", !0), tt("A", !1), k("hour", "h"), E("hour", 13), $("a", et), $("A", et), $("H", he), $("h", he), $("k", he), $("HH", he, le), $("hh", he, le), $("kk", he, le), $("hmm", fe), $("hmmss", pe), $("Hmm", fe), $("Hmmss", pe), R(["H", "HH"], Ee), R(["k", "kk"], function(t, e, n) {
    var i = v(t);
    e[Ee] = 24 === i ? 0 : i
}), R(["a", "A"], function(t, e, n) {
    n._isPm = n._locale.isPM(t), n._meridiem = t
}), R(["h", "hh"], function(t, e, n) {
    e[Ee] = v(t), u(n).bigHour = !0
}), R("hmm", function(t, e, n) {
    var i = t.length - 2;
    e[Ee] = v(t.substr(0, i)), e[Me] = v(t.substr(i)), u(n).bigHour = !0
}), R("hmmss", function(t, e, n) {
    var i = t.length - 4,
        o = t.length - 2;
    e[Ee] = v(t.substr(0, i)), e[Me] = v(t.substr(i, 2)), e[Oe] = v(t.substr(o)), u(n).bigHour = !0
}), R("Hmm", function(t, e, n) {
    var i = t.length - 2;
    e[Ee] = v(t.substr(0, i)), e[Me] = v(t.substr(i))
}), R("Hmmss", function(t, e, n) {
    var i = t.length - 4,
        o = t.length - 2;
    e[Ee] = v(t.substr(0, i)), e[Me] = v(t.substr(i, 2)), e[Oe] = v(t.substr(o))
});
var Xe, Ve = H("Hours", !0),
    Ge = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Le,
        monthsShort: Ye,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Fe,
        weekdaysMin: Ue,
        weekdaysShort: We,
        meridiemParse: /[ap]\.?m?\.?/i
    },
    Ze = {},
    Ke = {},
    Qe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Je = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tn = /Z|[+-]\d\d(?::?\d\d)?/,
    en = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/]
    ],
    nn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    on = /^\/?Date\((\-?\d+)/i,
    rn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    an = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
t.createFromInputFallback = b("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
}), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
var sn = b("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = gt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : h()
    }),
    ln = b("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = gt.apply(null, arguments);
        return this.isValid() && t.isValid() ? this < t ? this : t : h()
    }),
    cn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
xt("Z", ":"), xt("ZZ", ""), $("Z", xe), $("ZZ", xe), R(["Z", "ZZ"], function(t, e, n) {
    n._useUTC = !0, n._tzm = _t(xe, t)
});
var un = /([\+\-]|\d\d)/gi;
t.updateOffset = function() {};
var dn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    hn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
St.fn = yt.prototype, St.invalid = function() {
    return St(NaN)
};
var fn = Mt(1, "add"),
    pn = Mt(-1, "subtract");
t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var mn = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
    return void 0 === t ? this.localeData() : this.locale(t)
});
O(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
}), O(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
}), Pt("gggg", "weekYear"), Pt("ggggg", "weekYear"), Pt("GGGG", "isoWeekYear"), Pt("GGGGG", "isoWeekYear"), k("weekYear", "gg"), k("isoWeekYear", "GG"), E("weekYear", 1), E("isoWeekYear", 1), $("G", we), $("g", we), $("GG", he, le), $("gg", he, le), $("GGGG", ge, ue), $("gggg", ge, ue), $("GGGGG", ve, de), $("ggggg", ve, de), L(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
    e[i.substr(0, 2)] = v(t)
}), L(["gg", "GG"], function(e, n, i, o) {
    n[o] = t.parseTwoDigitYear(e)
}), O("Q", 0, "Qo", "quarter"), k("quarter", "Q"), E("quarter", 7), $("Q", se), R("Q", function(t, e) {
    e[Se] = 3 * (v(t) - 1)
}), O("D", ["DD", 2], "Do", "date"), k("date", "D"), E("date", 9), $("D", he), $("DD", he, le), $("Do", function(t, e) {
    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
}), R(["D", "DD"], De), R("Do", function(t, e) {
    e[De] = v(t.match(he)[0])
});
var gn = H("Date", !0);
O("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), k("dayOfYear", "DDD"), E("dayOfYear", 4), $("DDD", me), $("DDDD", ce), R(["DDD", "DDDD"], function(t, e, n) {
    n._dayOfYear = v(t)
}), O("m", ["mm", 2], 0, "minute"), k("minute", "m"), E("minute", 14), $("m", he), $("mm", he, le), R(["m", "mm"], Me);
var vn = H("Minutes", !1);
O("s", ["ss", 2], 0, "second"), k("second", "s"), E("second", 15), $("s", he), $("ss", he, le), R(["s", "ss"], Oe);
var yn, wn = H("Seconds", !1);
for (O("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), O(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), O(0, ["SSS", 3], 0, "millisecond"), O(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), O(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), O(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), O(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), O(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), O(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), k("millisecond", "ms"), E("millisecond", 16), $("S", me, se), $("SS", me, le), $("SSS", me, ce), yn = "SSSS"; yn.length <= 9; yn += "S") $(yn, ye);
for (yn = "S"; yn.length <= 9; yn += "S") R(yn, Rt);
var bn = H("Milliseconds", !1);
O("z", 0, 0, "zoneAbbr"), O("zz", 0, 0, "zoneName");
var xn = p.prototype;
xn.add = fn, xn.calendar = function(e, n) {
    var i = e || gt(),
        o = Tt(i, this).startOf("day"),
        r = t.calendarFormat(this, o) || "sameElse",
        a = n && (_(n[r]) ? n[r].call(this, i) : n[r]);
    return this.format(a || this.localeData().calendar(r, this, gt(i)))
}, xn.clone = function() {
    return new p(this)
}, xn.diff = function(t, e, n) {
    var i, o, r;
    if (!this.isValid()) return NaN;
    if (!(i = Tt(t, this)).isValid()) return NaN;
    switch (o = 6e4 * (i.utcOffset() - this.utcOffset()), e = S(e)) {
        case "year":
            r = It(this, i) / 12;
            break;
        case "month":
            r = It(this, i);
            break;
        case "quarter":
            r = It(this, i) / 3;
            break;
        case "second":
            r = (this - i) / 1e3;
            break;
        case "minute":
            r = (this - i) / 6e4;
            break;
        case "hour":
            r = (this - i) / 36e5;
            break;
        case "day":
            r = (this - i - o) / 864e5;
            break;
        case "week":
            r = (this - i - o) / 6048e5;
            break;
        default:
            r = this - i
    }
    return n ? r : g(r)
}, xn.endOf = function(t) {
    return void 0 === (t = S(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
}, xn.format = function(e) {
    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
    var n = I(this, e);
    return this.localeData().postformat(n)
}, xn.from = function(t, e) {
    return this.isValid() && (m(t) && t.isValid() || gt(t).isValid()) ? St({
        to: this,
        from: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
}, xn.fromNow = function(t) {
    return this.from(gt(), t)
}, xn.to = function(t, e) {
    return this.isValid() && (m(t) && t.isValid() || gt(t).isValid()) ? St({
        from: this,
        to: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
}, xn.toNow = function(t) {
    return this.to(gt(), t)
}, xn.get = function(t) {
    return _(this[t = S(t)]) ? this[t]() : this
}, xn.invalidAt = function() {
    return u(this).overflow
}, xn.isAfter = function(t, e) {
    var n = m(t) ? t : gt(t);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = S(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
}, xn.isBefore = function(t, e) {
    var n = m(t) ? t : gt(t);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = S(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
}, xn.isBetween = function(t, e, n, i) {
    var o = m(t) ? t : gt(t),
        r = m(e) ? e : gt(e);
    return !!(this.isValid() && o.isValid() && r.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(o, n) : !this.isBefore(o, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
}, xn.isSame = function(t, e) {
    var n, i = m(t) ? t : gt(t);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = S(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
}, xn.isSameOrAfter = function(t, e) {
    return this.isSame(t, e) || this.isAfter(t, e)
}, xn.isSameOrBefore = function(t, e) {
    return this.isSame(t, e) || this.isBefore(t, e)
}, xn.isValid = function() {
    return d(this)
}, xn.lang = mn, xn.locale = At, xn.localeData = $t, xn.max = ln, xn.min = sn, xn.parsingFlags = function() {
    return l({}, u(this))
}, xn.set = function(t, e) {
    if ("object" == typeof t)
        for (var n = function(t) {
                var e = [];
                for (var n in t) e.push({
                    unit: n,
                    priority: ne[n]
                });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }), e
            }(t = D(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
    else if (_(this[t = S(t)])) return this[t](e);
    return this
}, xn.startOf = function(t) {
    switch (t = S(t)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
    }
    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
}, xn.subtract = pn, xn.toArray = function() {
    var t = this;
    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
}, xn.toObject = function() {
    var t = this;
    return {
        years: t.year(),
        months: t.month(),
        date: t.date(),
        hours: t.hours(),
        minutes: t.minutes(),
        seconds: t.seconds(),
        milliseconds: t.milliseconds()
    }
}, xn.toDate = function() {
    return new Date(this.valueOf())
}, xn.toISOString = function(t) {
    if (!this.isValid()) return null;
    var e = !0 !== t,
        n = e ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? I(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : _(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(n, "Z")) : I(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}, xn.inspect = function() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var t = "moment",
        e = "";
    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
    var n = "[" + t + '("]',
        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        o = e + '[")]';
    return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + o)
}, xn.toJSON = function() {
    return this.isValid() ? this.toISOString() : null
}, xn.toString = function() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}, xn.unix = function() {
    return Math.floor(this.valueOf() / 1e3)
}, xn.valueOf = function() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
}, xn.creationData = function() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}, xn.year = Ne, xn.isLeapYear = function() {
    return j(this.year())
}, xn.weekYear = function(t) {
    return Nt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}, xn.isoWeekYear = function(t) {
    return Nt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
}, xn.quarter = xn.quarters = function(t) {
    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
}, xn.month = q, xn.daysInMonth = function() {
    return U(this.year(), this.month())
}, xn.week = xn.weeks = function(t) {
    var e = this.localeData().week(this);
    return null == t ? e : this.add(7 * (t - e), "d")
}, xn.isoWeek = xn.isoWeeks = function(t) {
    var e = Z(this, 1, 4).week;
    return null == t ? e : this.add(7 * (t - e), "d")
}, xn.weeksInYear = function() {
    var t = this.localeData()._week;
    return K(this.year(), t.dow, t.doy)
}, xn.isoWeeksInYear = function() {
    return K(this.year(), 1, 4)
}, xn.date = gn, xn.day = xn.days = function(t) {
    if (!this.isValid()) return null != t ? this : NaN;
    var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i
}, xn.weekday = function(t) {
    if (!this.isValid()) return null != t ? this : NaN;
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == t ? e : this.add(t - e, "d")
}, xn.isoWeekday = function(t) {
    if (!this.isValid()) return null != t ? this : NaN;
    if (null == t) return this.day() || 7;
    var e, n, i = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
    return this.day(this.day() % 7 ? i : i - 7)
}, xn.dayOfYear = function(t) {
    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == t ? e : this.add(t - e, "d")
}, xn.hour = xn.hours = Ve, xn.minute = xn.minutes = vn, xn.second = xn.seconds = wn, xn.millisecond = xn.milliseconds = bn, xn.utcOffset = function(e, n, i) {
    var o, r = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this._isUTC ? r : Ct(this);
    if ("string" == typeof e) {
        if (null === (e = _t(xe, e))) return this
    } else Math.abs(e) < 16 && !i && (e *= 60);
    return !this._isUTC && n && (o = Ct(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), r !== e && (!n || this._changeInProgress ? Ot(this, St(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
}, xn.utc = function(t) {
    return this.utcOffset(0, t)
}, xn.local = function(t) {
    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ct(this), "m")), this
}, xn.parseZone = function() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
        var t = _t(be, this._i);
        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
    }
    return this
}, xn.hasAlignedHourOffset = function(t) {
    return !!this.isValid() && (t = t ? gt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
}, xn.isDST = function() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}, xn.isLocal = function() {
    return !!this.isValid() && !this._isUTC
}, xn.isUtcOffset = function() {
    return !!this.isValid() && this._isUTC
}, xn.isUtc = kt, xn.isUTC = kt, xn.zoneAbbr = function() {
    return this._isUTC ? "UTC" : ""
}, xn.zoneName = function() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}, xn.dates = b("dates accessor is deprecated. Use date instead.", gn), xn.months = b("months accessor is deprecated. Use month instead", q), xn.years = b("years accessor is deprecated. Use year instead", Ne), xn.zone = b("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
}), xn.isDSTShifted = b("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
    if (!i(this._isDSTShifted)) return this._isDSTShifted;
    var t = {};
    if (f(t, this), (t = pt(t))._a) {
        var e = t._isUTC ? c(t._a) : gt(t._a);
        this._isDSTShifted = this.isValid() && 0 < y(t._a, e.toArray())
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
});
var _n = C.prototype;
_n.calendar = function(t, e, n) {
    var i = this._calendar[t] || this._calendar.sameElse;
    return _(i) ? i.call(e, n) : i
}, _n.longDateFormat = function(t) {
    var e = this._longDateFormat[t],
        n = this._longDateFormat[t.toUpperCase()];
    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
        return t.slice(1)
    }), this._longDateFormat[t])
}, _n.invalidDate = function() {
    return this._invalidDate
}, _n.ordinal = function(t) {
    return this._ordinal.replace("%d", t)
}, _n.preparse = Lt, _n.postformat = Lt, _n.relativeTime = function(t, e, n, i) {
    var o = this._relativeTime[n];
    return _(o) ? o(t, e, n, i) : o.replace(/%d/i, t)
}, _n.pastFuture = function(t, e) {
    var n = this._relativeTime[0 < t ? "future" : "past"];
    return _(n) ? n(e) : n.replace(/%s/i, e)
}, _n.set = function(t) {
    var e, n;
    for (n in t) _(e = t[n]) ? this[n] = e : this["_" + n] = e;
    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}, _n.months = function(t, n) {
    return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Re).test(n) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
}, _n.monthsShort = function(t, n) {
    return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Re.test(n) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}, _n.monthsParse = function(t, e, n) {
    var i, o, r;
    if (this._monthsParseExact) return function(t, e, n) {
        var i, o, r, a = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === e ? -1 !== (o = Pe.call(this._shortMonthsParse, a)) ? o : null : -1 !== (o = Pe.call(this._longMonthsParse, a)) ? o : null : "MMM" === e ? -1 !== (o = Pe.call(this._shortMonthsParse, a)) ? o : -1 !== (o = Pe.call(this._longMonthsParse, a)) ? o : null : -1 !== (o = Pe.call(this._longMonthsParse, a)) ? o : -1 !== (o = Pe.call(this._shortMonthsParse, a)) ? o : null
    }.call(this, t, e, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
        if (o = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
        if (!n && this._monthsParse[i].test(t)) return i
    }
}, _n.monthsRegex = function(t) {
    return this._monthsParseExact ? (s(this, "_monthsRegex") || B.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = He), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
}, _n.monthsShortRegex = function(t) {
    return this._monthsParseExact ? (s(this, "_monthsRegex") || B.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
}, _n.week = function(t) {
    return Z(t, this._week.dow, this._week.doy).week
}, _n.firstDayOfYear = function() {
    return this._week.doy
}, _n.firstDayOfWeek = function() {
    return this._week.dow
}, _n.weekdays = function(t, n) {
    return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
}, _n.weekdaysMin = function(t) {
    return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
}, _n.weekdaysShort = function(t) {
    return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
}, _n.weekdaysParse = function(t, e, n) {
    var i, o, r;
    if (this._weekdaysParseExact) return function(t, e, n) {
        var i, o, r, a = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === e ? -1 !== (o = Pe.call(this._weekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = Pe.call(this._shortWeekdaysParse, a)) ? o : null : -1 !== (o = Pe.call(this._minWeekdaysParse, a)) ? o : null : "dddd" === e ? -1 !== (o = Pe.call(this._weekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._minWeekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = Pe.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._weekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._minWeekdaysParse, a)) ? o : null : -1 !== (o = Pe.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._weekdaysParse, a)) ? o : -1 !== (o = Pe.call(this._shortWeekdaysParse, a)) ? o : null
    }.call(this, t, e, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
        if (o = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
        if (!n && this._weekdaysParse[i].test(t)) return i
    }
}, _n.weekdaysRegex = function(t) {
    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = ze), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
}, _n.weekdaysShortRegex = function(t) {
    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}, _n.weekdaysMinRegex = function(t) {
    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}, _n.isPM = function(t) {
    return "p" === (t + "").toLowerCase().charAt(0)
}, _n.meridiem = function(t, e, n) {
    return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM"
}, ot("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(t) {
        var e = t % 10;
        return t + (1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
    }
}), t.lang = b("moment.lang is deprecated. Use moment.locale instead.", ot), t.langData = b("moment.langData is deprecated. Use moment.localeData instead.", at);
var Tn = Math.abs,
    Cn = qt("ms"),
    kn = qt("s"),
    Sn = qt("m"),
    Dn = qt("h"),
    En = qt("d"),
    Mn = qt("w"),
    On = qt("M"),
    In = qt("y"),
    An = Bt("milliseconds"),
    $n = Bt("seconds"),
    Pn = Bt("minutes"),
    Nn = Bt("hours"),
    Rn = Bt("days"),
    Ln = Bt("months"),
    Yn = Bt("years"),
    jn = Math.round,
    Hn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    },
    Fn = Math.abs,
    Wn = yt.prototype;
return Wn.isValid = function() {
    return this._isValid
}, Wn.abs = function() {
    var t = this._data;
    return this._milliseconds = Tn(this._milliseconds), this._days = Tn(this._days), this._months = Tn(this._months), t.milliseconds = Tn(t.milliseconds), t.seconds = Tn(t.seconds), t.minutes = Tn(t.minutes), t.hours = Tn(t.hours), t.months = Tn(t.months), t.years = Tn(t.years), this
}, Wn.add = function(t, e) {
    return Ft(this, t, e, 1)
}, Wn.subtract = function(t, e) {
    return Ft(this, t, e, -1)
}, Wn.as = function(t) {
    if (!this.isValid()) return NaN;
    var e, n, i = this._milliseconds;
    if ("month" === (t = S(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + Ut(e), "month" === t ? n : n / 12;
    switch (e = this._days + Math.round(zt(this._months)), t) {
        case "week":
            return e / 7 + i / 6048e5;
        case "day":
            return e + i / 864e5;
        case "hour":
            return 24 * e + i / 36e5;
        case "minute":
            return 1440 * e + i / 6e4;
        case "second":
            return 86400 * e + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * e) + i;
        default:
            throw new Error("Unknown unit " + t)
    }
}, Wn.asMilliseconds = Cn, Wn.asSeconds = kn, Wn.asMinutes = Sn, Wn.asHours = Dn, Wn.asDays = En, Wn.asWeeks = Mn, Wn.asMonths = On, Wn.asYears = In, Wn.valueOf = function() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
}, Wn._bubble = function() {
    var t, e, n, i, o, r = this._milliseconds,
        a = this._days,
        s = this._months,
        l = this._data;
    return 0 <= r && 0 <= a && 0 <= s || r <= 0 && a <= 0 && s <= 0 || (r += 864e5 * Wt(zt(s) + a), s = a = 0), l.milliseconds = r % 1e3, t = g(r / 1e3), l.seconds = t % 60, e = g(t / 60), l.minutes = e % 60, n = g(e / 60), l.hours = n % 24, s += o = g(Ut(a += g(n / 24))), a -= Wt(zt(o)), i = g(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
}, Wn.clone = function() {
    return St(this)
}, Wn.get = function(t) {
    return t = S(t), this.isValid() ? this[t + "s"]() : NaN
}, Wn.milliseconds = An, Wn.seconds = $n, Wn.minutes = Pn, Wn.hours = Nn, Wn.days = Rn, Wn.weeks = function() {
    return g(this.days() / 7)
}, Wn.months = Ln, Wn.years = Yn, Wn.humanize = function(t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e, n, i, o, r, a, s, l, c, u, d, h = this.localeData(),
        f = (n = !t, i = h, o = St(e = this).abs(), r = jn(o.as("s")), a = jn(o.as("m")), s = jn(o.as("h")), l = jn(o.as("d")), c = jn(o.as("M")), u = jn(o.as("y")), (d = r <= Hn.ss && ["s", r] || r < Hn.s && ["ss", r] || a <= 1 && ["m"] || a < Hn.m && ["mm", a] || s <= 1 && ["h"] || s < Hn.h && ["hh", s] || l <= 1 && ["d"] || l < Hn.d && ["dd", l] || c <= 1 && ["M"] || c < Hn.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = n, d[3] = 0 < +e, d[4] = i, function(t, e, n, i, o) {
            return o.relativeTime(e || 1, !!n, t, i)
        }.apply(null, d));
    return t && (f = h.pastFuture(+this, f)), h.postformat(f)
}, Wn.toISOString = Vt, Wn.toString = Vt, Wn.toJSON = Vt, Wn.locale = At, Wn.localeData = $t, Wn.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vt), Wn.lang = mn, O("X", 0, 0, "unix"), O("x", 0, 0, "valueOf"), $("x", we), $("X", /[+-]?\d+(\.\d{1,3})?/), R("X", function(t, e, n) {
    n._d = new Date(1e3 * parseFloat(t, 10))
}), R("x", function(t, e, n) {
    n._d = new Date(v(t))
}), t.version = "2.23.0", Gt = gt, t.fn = xn, t.min = function() {
    return vt("isBefore", [].slice.call(arguments, 0))
}, t.max = function() {
    return vt("isAfter", [].slice.call(arguments, 0))
}, t.now = function() {
    return Date.now ? Date.now() : +new Date
}, t.utc = c, t.unix = function(t) {
    return gt(1e3 * t)
}, t.months = function(t, e) {
    return jt(t, e, "months")
}, t.isDate = r, t.locale = ot, t.invalid = h, t.duration = St, t.isMoment = m, t.weekdays = function(t, e, n) {
    return Ht(t, e, n, "weekdays")
}, t.parseZone = function() {
    return gt.apply(null, arguments).parseZone()
}, t.localeData = at, t.isDuration = wt, t.monthsShort = function(t, e) {
    return jt(t, e, "monthsShort")
}, t.weekdaysMin = function(t, e, n) {
    return Ht(t, e, n, "weekdaysMin")
}, t.defineLocale = rt, t.updateLocale = function(t, e) {
    if (null != e) {
        var n, i, o = Ge;
        null != (i = it(t)) && (o = i._config), (n = new C(e = T(o, e))).parentLocale = Ze[t], Ze[t] = n, ot(t)
    } else null != Ze[t] && (null != Ze[t].parentLocale ? Ze[t] = Ze[t].parentLocale : null != Ze[t] && delete Ze[t]);
    return Ze[t]
}, t.locales = function() {
    return Kt(Ze)
}, t.weekdaysShort = function(t, e, n) {
    return Ht(t, e, n, "weekdaysShort")
}, t.normalizeUnits = S, t.relativeTimeRounding = function(t) {
    return void 0 === t ? jn : "function" == typeof t && (jn = t, !0)
}, t.relativeTimeThreshold = function(t, e) {
    return void 0 !== Hn[t] && (void 0 === e ? Hn[t] : (Hn[t] = e, "s" === t && (Hn.ss = e - 1), !0))
}, t.calendarFormat = function(t, e) {
    var n = t.diff(e, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
}, t.prototype = xn, t.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
}, t
}),
function(t, e) {
"object" == typeof exports && "undefined" != typeof module && "function" == typeof require ? e(require("../moment")) : "function" == typeof define && define.amd ? define(["../moment"], e) : e(t.moment)
}(this, function(t) {
"use strict";
var e = {
        1: "áŸ¡",
        2: "áŸ¢",
        3: "áŸ£",
        4: "áŸ¤",
        5: "áŸ¥",
        6: "áŸ¦",
        7: "áŸ§",
        8: "áŸ¨",
        9: "áŸ©",
        0: "áŸ "
    },
    n = {
        "áŸ¡": "1",
        "áŸ¢": "2",
        "áŸ£": "3",
        "áŸ¤": "4",
        "áŸ¥": "5",
        "áŸ¦": "6",
        "áŸ§": "7",
        "áŸ¨": "8",
        "áŸ©": "9",
        "áŸ ": "0"
    },
    i = t.defineLocale("km", {
        months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
        monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
        weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
        weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
        weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
        isPM: function(t) {
            return "áž›áŸ’áž„áž¶áž…" === t
        },
        meridiem: function(t, e, n) {
            return t < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
        },
        calendar: {
            sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
            nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
            nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
            lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
            lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sáž‘áŸ€áž",
            past: "%sáž˜áž»áž“",
            s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
            ss: "%d ážœáž·áž“áž¶áž‘áž¸",
            m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
            mm: "%d áž“áž¶áž‘áž¸",
            h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
            hh: "%d áž˜áŸ‰áŸ„áž„",
            d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
            dd: "%d ážáŸ’áž„áŸƒ",
            M: "áž˜áž½áž™ážáŸ‚",
            MM: "%d ážáŸ‚",
            y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
            yy: "%d áž†áŸ’áž“áž¶áŸ†"
        },
        dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
        ordinal: "áž‘áž¸%d",
        preparse: function(t) {
            return t.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function(t) {
                return n[t]
            })
        },
        postformat: function(t) {
            return t.replace(/\d/g, function(t) {
                return e[t]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
return i
}), + function(t, e, n) {
"use strict";
var i = {
    calc: !1
};
e.fn.rrssb = function(t) {
    var i = e.extend({
        description: n,
        emailAddress: n,
        emailBody: n,
        emailSubject: n,
        image: n,
        title: n,
        url: n
    }, t);
    i.emailSubject = i.emailSubject || i.title, i.emailBody = i.emailBody || (i.description ? i.description : "") + (i.url ? "\n\n" + i.url : "");
    for (var o in i) i.hasOwnProperty(o) && i[o] !== n && (i[o] = r(i[o]));
    i.url !== n && (e(this).find(".rrssb-facebook a").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + i.url), e(this).find(".rrssb-tumblr a").attr("href", "http://tumblr.com/share/link?url=" + i.url + (i.title !== n ? "&name=" + i.title : "") + (i.description !== n ? "&description=" + i.description : "")), e(this).find(".rrssb-linkedin a").attr("href", "http://www.linkedin.com/shareArticle?mini=true&url=" + i.url + (i.title !== n ? "&title=" + i.title : "") + (i.description !== n ? "&summary=" + i.description : "")), e(this).find(".rrssb-twitter a").attr("href", "https://twitter.com/intent/tweet?text=" + (i.description !== n ? i.description : "") + "%20" + i.url), e(this).find(".rrssb-hackernews a").attr("href", "https://news.ycombinator.com/submitlink?u=" + i.url + (i.title !== n ? "&text=" + i.title : "")), e(this).find(".rrssb-vk a").attr("href", "https://vk.com/share.php?url=" + i.url), e(this).find(".rrssb-reddit a").attr("href", "http://www.reddit.com/submit?url=" + i.url + (i.description !== n ? "&text=" + i.description : "") + (i.title !== n ? "&title=" + i.title : "")), e(this).find(".rrssb-googleplus a").attr("href", "https://plus.google.com/share?url=" + i.url), e(this).find(".rrssb-pinterest a").attr("href", "http://pinterest.com/pin/create/button/?url=" + i.url + (i.image !== n ? "&amp;media=" + i.image : "") + (i.description !== n ? "&description=" + i.description : "")), e(this).find(".rrssb-pocket a").attr("href", "https://getpocket.com/save?url=" + i.url), e(this).find(".rrssb-github a").attr("href", i.url), e(this).find(".rrssb-print a").attr("href", "javascript:window.print()"), e(this).find(".rrssb-whatsapp a").attr("href", "whatsapp://send?text=" + (i.description !== n ? i.description + "%20" : i.title !== n ? i.title + "%20" : "") + i.url)), (i.emailAddress !== n || i.emailSubject) && e(this).find(".rrssb-email a").attr("href", "mailto:" + (i.emailAddress ? i.emailAddress : "") + "?" + (i.emailSubject !== n ? "subject=" + i.emailSubject : "") + (i.emailBody !== n ? "&body=" + i.emailBody : ""))
};
var o = function() {
        var t = e("<div>"),
            n = ["calc", "-webkit-calc", "-moz-calc"];
        e("body").append(t);
        for (var o = 0; o < n.length; o++)
            if (t.css("width", n[o] + "(1px)"), 1 === t.width()) {
                i.calc = n[o];
                break
            } t.remove()
    },
    r = function(t) {
        if (t !== n && null !== t) {
            if (null === t.match(/%[0-9a-f]{2}/i)) return encodeURIComponent(t);
            t = decodeURIComponent(t), r(t)
        }
    },
    a = function() {
        e(".rrssb-buttons").each(function(t) {
            var n = e(this),
                i = e("li:visible", n),
                o = i.length,
                r = 100 / o;
            i.css("width", r + "%").attr("data-initwidth", r)
        })
    },
    s = function() {
        e(".rrssb-buttons").each(function(t) {
            var n = e(this),
                i = n.width(),
                o = e("li", n).not(".small").eq(0).width(),
                r = e("li.small", n).length;
            if (o > 170 && r < 1) {
                n.addClass("large-format");
                var a = o / 12 + "px";
                n.css("font-size", a)
            } else n.removeClass("large-format"), n.css("font-size", "");
            i < 25 * r ? n.removeClass("small-format").addClass("tiny-format") : n.removeClass("tiny-format")
        })
    },
    l = function() {
        e(".rrssb-buttons").each(function(t) {
            var n = e(this),
                i = e("li", n),
                o = i.filter(".small"),
                r = 0,
                a = 0,
                s = o.eq(0),
                l = parseFloat(s.attr("data-size")) + 55,
                c = o.length;
            if (c === i.length) {
                var d = 42 * c,
                    h = n.width();
                d + l < h && (n.removeClass("small-format"), o.eq(0).removeClass("small"), u())
            } else {
                i.not(".small").each(function(t) {
                    var n = e(this),
                        i = parseFloat(n.attr("data-size")) + 55,
                        o = parseFloat(n.width());
                    r += o, a += i
                });
                var f = r - a;
                l < f && (s.removeClass("small"), u())
            }
        })
    },
    c = function(t) {
        e(".rrssb-buttons").each(function(t) {
            var n = e(this),
                i = e("li", n);
            e(i.get().reverse()).each(function(t, n) {
                var o = e(this);
                if (o.hasClass("small") === !1) {
                    var r = parseFloat(o.attr("data-size")) + 55,
                        a = parseFloat(o.width());
                    if (r > a) {
                        var s = i.not(".small").last();
                        e(s).addClass("small"), u()
                    }
                }--n || l()
            })
        }), t === !0 && h(u)
    },
    u = function() {
        e(".rrssb-buttons").each(function(t) {
            var n, o, r, s, l, c = e(this),
                u = e("li", c),
                d = u.filter(".small"),
                h = d.length;
            h > 0 && h !== u.length ? (c.removeClass("small-format"), d.css("width", "42px"), r = 42 * h, n = u.not(".small").length, o = 100 / n, l = r / n, i.calc === !1 ? (s = (c.innerWidth() - 1) / n - l, s = Math.floor(1e3 * s) / 1e3, s += "px") : s = i.calc + "(" + o + "% - " + l + "px)", u.not(".small").css("width", s)) : h === u.length ? (c.addClass("small-format"), a()) : (c.removeClass("small-format"), a())
        }), s()
    },
    d = function() {
        e(".rrssb-buttons").each(function(t) {
            e(this).addClass("rrssb-" + (t + 1))
        }), o(), a(), e(".rrssb-buttons li .rrssb-text").each(function(t) {
            var n = e(this),
                i = n.width();
            n.closest("li").attr("data-size", i)
        }), c(!0)
    },
    h = function(t) {
        e(".rrssb-buttons li.small").removeClass("small"), c(), t()
    },
    f = function(e, i, o, r) {
        var a = t.screenLeft !== n ? t.screenLeft : screen.left,
            s = t.screenTop !== n ? t.screenTop : screen.top,
            l = t.innerWidth ? t.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
            c = t.innerHeight ? t.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
            u = l / 2 - o / 2 + a,
            d = c / 3 - r / 3 + s,
            h = t.open(e, i, "scrollbars=yes, width=" + o + ", height=" + r + ", top=" + d + ", left=" + u);
        h && h.focus && h.focus()
    },
    p = function() {
        var t = {};
        return function(e, n, i) {
            i || (i = "Don't call this twice without a uniqueId"), t[i] && clearTimeout(t[i]), t[i] = setTimeout(e, n)
        }
    }();
e(document).ready(function() {
    try {
        e(document).on("click", ".rrssb-buttons a.popup", {}, function(t) {
            var n = e(this);
            f(n.attr("href"), n.find(".rrssb-text").html(), 580, 470), t.preventDefault()
        })
    } catch (t) {}
    e(t).resize(function() {
        h(u), p(function() {
            h(u)
        }, 200, "finished resizing")
    }), d()
}), t.rrssbInit = d
}(window, jQuery), ! function() {
"use strict";

function t(i) {
    if (!i) throw new Error("No options passed to Waypoint constructor");
    if (!i.element) throw new Error("No element option passed to Waypoint constructor");
    if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
}
var e = 0,
    n = {};
t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t)
}, t.prototype.trigger = function(t) {
    this.enabled && this.callback && this.callback.apply(this, t)
}, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete n[this.key]
}, t.prototype.disable = function() {
    return this.enabled = !1, this
}, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0, this
}, t.prototype.next = function() {
    return this.group.next(this)
}, t.prototype.previous = function() {
    return this.group.previous(this)
}, t.invokeAll = function(t) {
    var e = [];
    for (var i in n) e.push(n[i]);
    for (var o = 0, r = e.length; r > o; o++) e[o][t]()
}, t.destroyAll = function() {
    t.invokeAll("destroy")
}, t.disableAll = function() {
    t.invokeAll("disable")
}, t.enableAll = function() {
    t.Context.refreshAll();
    for (var e in n) n[e].enabled = !0;
    return this
}, t.refreshAll = function() {
    t.Context.refreshAll()
}, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
}, t.viewportWidth = function() {
    return document.documentElement.clientWidth
}, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
}, t.offsetAliases = {
    "bottom-in-view": function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
    }
}, window.Waypoint = t
}(),
function() {
"use strict";

function t(t) {
    window.setTimeout(t, 1e3 / 60)
}

function e(t) {
    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
    }, this.waypoints = {
        vertical: {},
        horizontal: {}
    }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
}
var n = 0,
    i = {},
    o = window.Waypoint,
    r = window.onload;
e.prototype.add = function(t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
}, e.prototype.checkEmpty = function() {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
        n = this.element == this.element.window;
    t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
}, e.prototype.createThrottledResizeHandler = function() {
    function t() {
        e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function() {
        e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
    })
}, e.prototype.createThrottledScrollHandler = function() {
    function t() {
        e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function() {
        (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
    })
}, e.prototype.handleResize = function() {
    o.Context.refreshAll()
}, e.prototype.handleScroll = function() {
    var t = {},
        e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
    for (var n in e) {
        var i = e[n],
            o = i.newScroll > i.oldScroll,
            r = o ? i.forward : i.backward;
        for (var a in this.waypoints[n]) {
            var s = this.waypoints[n][a];
            if (null !== s.triggerPoint) {
                var l = i.oldScroll < s.triggerPoint,
                    c = i.newScroll >= s.triggerPoint,
                    u = l && c,
                    d = !l && !c;
                (u || d) && (s.queueTrigger(r), t[s.group.id] = s.group)
            }
        }
    }
    for (var h in t) t[h].flushTriggers();
    this.oldScroll = {
        x: e.horizontal.newScroll,
        y: e.vertical.newScroll
    }
}, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
}, e.prototype.remove = function(t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
}, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
}, e.prototype.destroy = function() {
    var t = [];
    for (var e in this.waypoints)
        for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
    for (var i = 0, o = t.length; o > i; i++) t[i].destroy()
}, e.prototype.refresh = function() {
    var t, e = this.element == this.element.window,
        n = e ? void 0 : this.adapter.offset(),
        i = {};
    this.handleScroll(), t = {
        horizontal: {
            contextOffset: e ? 0 : n.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
        },
        vertical: {
            contextOffset: e ? 0 : n.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
        }
    };
    for (var r in t) {
        var a = t[r];
        for (var s in this.waypoints[r]) {
            var l, c, u, d, h, f = this.waypoints[r][s],
                p = f.options.offset,
                m = f.triggerPoint,
                g = 0,
                v = null == m;
            f.element !== f.element.window && (g = f.adapter.offset()[a.offsetProp]), "function" == typeof p ? p = p.apply(f) : "string" == typeof p && (p = parseFloat(p), f.options.offset.indexOf("%") > -1 && (p = Math.ceil(a.contextDimension * p / 100))), l = a.contextScroll - a.contextOffset, f.triggerPoint = Math.floor(g + l - p), c = m < a.oldScroll, u = f.triggerPoint >= a.oldScroll, d = c && u, h = !c && !u, !v && d ? (f.queueTrigger(a.backward), i[f.group.id] = f.group) : !v && h ? (f.queueTrigger(a.forward), i[f.group.id] = f.group) : v && a.oldScroll >= f.triggerPoint && (f.queueTrigger(a.forward), i[f.group.id] = f.group)
        }
    }
    return o.requestAnimationFrame(function() {
        for (var t in i) i[t].flushTriggers()
    }), this
}, e.findOrCreateByElement = function(t) {
    return e.findByElement(t) || new e(t)
}, e.refreshAll = function() {
    for (var t in i) i[t].refresh()
}, e.findByElement = function(t) {
    return i[t.waypointContextKey]
}, window.onload = function() {
    r && r(), e.refreshAll()
}, o.requestAnimationFrame = function(e) {
    var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    n.call(window, e)
}, o.Context = e
}(),
function() {
"use strict";

function t(t, e) {
    return t.triggerPoint - e.triggerPoint
}

function e(t, e) {
    return e.triggerPoint - t.triggerPoint
}

function n(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
}
var i = {
        vertical: {},
        horizontal: {}
    },
    o = window.Waypoint;
n.prototype.add = function(t) {
    this.waypoints.push(t)
}, n.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
    }
}, n.prototype.flushTriggers = function() {
    for (var n in this.triggerQueues) {
        var i = this.triggerQueues[n],
            o = "up" === n || "left" === n;
        i.sort(o ? e : t);
        for (var r = 0, a = i.length; a > r; r += 1) {
            var s = i[r];
            (s.options.continuous || r === i.length - 1) && s.trigger([n])
        }
    }
    this.clearTriggerQueues()
}, n.prototype.next = function(e) {
    this.waypoints.sort(t);
    var n = o.Adapter.inArray(e, this.waypoints),
        i = n === this.waypoints.length - 1;
    return i ? null : this.waypoints[n + 1]
}, n.prototype.previous = function(e) {
    this.waypoints.sort(t);
    var n = o.Adapter.inArray(e, this.waypoints);
    return n ? this.waypoints[n - 1] : null
}, n.prototype.queueTrigger = function(t, e) {
    this.triggerQueues[e].push(t)
}, n.prototype.remove = function(t) {
    var e = o.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
}, n.prototype.first = function() {
    return this.waypoints[0]
}, n.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
}, n.findOrCreate = function(t) {
    return i[t.axis][t.name] || new n(t)
}, o.Group = n
}(),
function() {
"use strict";

function t(t) {
    return t === t.window
}

function e(e) {
    return t(e) ? e : e.defaultView
}

function n(t) {
    this.element = t, this.handlers = {}
}
var i = window.Waypoint;
n.prototype.innerHeight = function() {
    var e = t(this.element);
    return e ? this.element.innerHeight : this.element.clientHeight
}, n.prototype.innerWidth = function() {
    var e = t(this.element);
    return e ? this.element.innerWidth : this.element.clientWidth
}, n.prototype.off = function(t, e) {
    function n(t, e, n) {
        for (var i = 0, o = e.length - 1; o > i; i++) {
            var r = e[i];
            n && n !== r || t.removeEventListener(r)
        }
    }
    var i = t.split("."),
        o = i[0],
        r = i[1],
        a = this.element;
    if (r && this.handlers[r] && o) n(a, this.handlers[r][o], e), this.handlers[r][o] = [];
    else if (o)
        for (var s in this.handlers) n(a, this.handlers[s][o] || [], e), this.handlers[s][o] = [];
    else if (r && this.handlers[r]) {
        for (var l in this.handlers[r]) n(a, this.handlers[r][l], e);
        this.handlers[r] = {}
    }
}, n.prototype.offset = function() {
    if (!this.element.ownerDocument) return null;
    var t = this.element.ownerDocument.documentElement,
        n = e(this.element.ownerDocument),
        i = {
            top: 0,
            left: 0
        };
    return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
    }
}, n.prototype.on = function(t, e) {
    var n = t.split("."),
        i = n[0],
        o = n[1] || "__default",
        r = this.handlers[o] = this.handlers[o] || {},
        a = r[i] = r[i] || [];
    a.push(e), this.element.addEventListener(i, e)
}, n.prototype.outerHeight = function(e) {
    var n, i = this.innerHeight();
    return e && !t(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginTop, 10), i += parseInt(n.marginBottom, 10)), i
}, n.prototype.outerWidth = function(e) {
    var n, i = this.innerWidth();
    return e && !t(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginLeft, 10), i += parseInt(n.marginRight, 10)), i
}, n.prototype.scrollLeft = function() {
    var t = e(this.element);
    return t ? t.pageXOffset : this.element.scrollLeft
}, n.prototype.scrollTop = function() {
    var t = e(this.element);
    return t ? t.pageYOffset : this.element.scrollTop
}, n.extend = function() {
    function t(t, e) {
        if ("object" == typeof t && "object" == typeof e)
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    for (var e = Array.prototype.slice.call(arguments), n = 1, i = e.length; i > n; n++) t(e[0], e[n]);
    return e[0]
}, n.inArray = function(t, e, n) {
    return null == e ? -1 : e.indexOf(t, n)
}, n.isEmptyObject = function(t) {
    for (var e in t) return !1;
    return !0
}, i.adapters.push({
    name: "noframework",
    Adapter: n
}), i.Adapter = n
}(),
function(t, e, n, i) {
var o = n("html"),
    r = n(t),
    a = n(e),
    s = n.fancybox = function() {
        s.open.apply(this, arguments)
    },
    l = navigator.userAgent.match(/msie/i),
    c = null,
    u = e.createTouch !== i,
    d = function(t) {
        return t && t.hasOwnProperty && t instanceof n
    },
    h = function(t) {
        return t && "string" === n.type(t)
    },
    f = function(t) {
        return h(t) && 0 < t.indexOf("%")
    },
    p = function(t, e) {
        var n = parseInt(t, 10) || 0;
        return e && f(t) && (n *= s.getViewport()[e] / 100), Math.ceil(n)
    },
    m = function(t, e) {
        return p(t, e) + "px"
    };
n.extend(s, {
    version: "2.1.5",
    defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !u,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: .5,
        leftRatio: .5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: {
            dataType: "html",
            headers: {
                "X-fancyBox": !0
            }
        },
        iframe: {
            scrolling: "auto",
            preload: !0
        },
        swf: {
            wmode: "transparent",
            allowfullscreen: "true",
            allowscriptaccess: "always"
        },
        keys: {
            next: {
                13: "left",
                34: "up",
                39: "left",
                40: "up"
            },
            prev: {
                8: "right",
                33: "down",
                37: "right",
                38: "down"
            },
            close: [27],
            play: [32],
            toggle: [70]
        },
        direction: {
            next: "left",
            prev: "right"
        },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
            wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
            image: '<img class="fancybox-image" src="{href}" alt="" />',
            iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
            error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
            next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: {
            overlay: !0,
            title: !0
        },
        onCancel: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeChange: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
        timer: null,
        isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(t, e) {
        if (t && (n.isPlainObject(e) || (e = {}), !1 !== s.close(!0))) return n.isArray(t) || (t = d(t) ? n(t).get() : [t]), n.each(t, function(o, r) {
            var a, l, c, u, f, p = {};
            "object" === n.type(r) && (r.nodeType && (r = n(r)), d(r) ? (p = {
                href: r.data("fancybox-href") || r.attr("href"),
                title: n("<div/>").text(r.data("fancybox-title") || r.attr("title")).html(),
                isDom: !0,
                element: r
            }, n.metadata && n.extend(!0, p, r.metadata())) : p = r), a = e.href || p.href || (h(r) ? r : null), l = e.title !== i ? e.title : p.title || "", u = (c = e.content || p.content) ? "html" : e.type || p.type, !u && p.isDom && (u = r.data("fancybox-type"), u || (u = (u = r.prop("class").match(/fancybox\.(\w+)/)) ? u[1] : null)), h(a) && (u || (s.isImage(a) ? u = "image" : s.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : h(r) && (u = "html", c = r)), "ajax" === u && (f = a.split(/\s+/, 2), a = f.shift(), f = f.shift())), c || ("inline" === u ? a ? c = n(h(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : p.isDom && (c = r) : "html" === u ? c = a : u || a || !p.isDom || (u = "inline", c = r)), n.extend(p, {
                href: a,
                type: u,
                content: c,
                title: l,
                selector: f
            }), t[o] = p
        }), s.opts = n.extend(!0, {}, s.defaults, e), e.keys !== i && (s.opts.keys = !!e.keys && n.extend({}, s.defaults.keys, e.keys)), s.group = t, s._start(s.opts.index)
    },
    cancel: function() {
        var t = s.coming;
        t && !1 === s.trigger("onCancel") || (s.hideLoading(), t && (s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(t)))
    },
    close: function(t) {
        s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== t ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
    },
    play: function(t) {
        var e = function() {
                clearTimeout(s.player.timer)
            },
            n = function() {
                e(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
            },
            i = function() {
                e(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
            };
        !0 === t || !s.player.isActive && !1 !== t ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({
            "onCancel.player beforeClose.player": i,
            "onUpdate.player": n,
            "beforeLoad.player": e
        }), n(), s.trigger("onPlayStart")) : i()
    },
    next: function(t) {
        var e = s.current;
        e && (h(t) || (t = e.direction.next), s.jumpto(e.index + 1, t, "next"))
    },
    prev: function(t) {
        var e = s.current;
        e && (h(t) || (t = e.direction.prev), s.jumpto(e.index - 1, t, "prev"))
    },
    jumpto: function(t, e, n) {
        var o = s.current;
        o && (t = p(t), s.direction = e || o.direction[t >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (0 > t && (t = o.group.length + t % o.group.length), t %= o.group.length), o.group[t] !== i && (s.cancel(), s._start(t)))
    },
    reposition: function(t, e) {
        var i, o = s.current,
            r = o ? o.wrap : null;
        r && (i = s._getPosition(e), t && "scroll" === t.type ? (delete i.position, r.stop(!0, !0).animate(i, 200)) : (r.css(i), o.pos = n.extend({}, o.dim, i)))
    },
    update: function(t) {
        var e = t && t.originalEvent && t.originalEvent.type,
            n = !e || "orientationchange" === e;
        n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
            var i = s.current;
            i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === e || "resize" === e && i.autoResize) && s._setDimension(), "scroll" === e && i.canShrink || s.reposition(t), s.trigger("onUpdate"), c = null)
        }, n && !u ? 0 : 300))
    },
    toggle: function(t) {
        s.isOpen && (s.current.fitToView = "boolean" === n.type(t) ? t : !s.current.fitToView, u && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
    },
    hideLoading: function() {
        a.unbind(".loading"), n("#fancybox-loading").remove()
    },
    showLoading: function() {
        var t, e;
        s.hideLoading(), t = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), a.bind("keydown.loading", function(t) {
            27 === (t.which || t.keyCode) && (t.preventDefault(), s.cancel())
        }), s.defaults.fixed || (e = s.getViewport(), t.css({
            position: "absolute",
            top: .5 * e.h + e.y,
            left: .5 * e.w + e.x
        })), s.trigger("onLoading")
    },
    getViewport: function() {
        var e = s.current && s.current.locked || !1,
            n = {
                x: r.scrollLeft(),
                y: r.scrollTop()
            };
        return e && e.length ? (n.w = e[0].clientWidth, n.h = e[0].clientHeight) : (n.w = u && t.innerWidth ? t.innerWidth : r.width(), n.h = u && t.innerHeight ? t.innerHeight : r.height()), n
    },
    unbindEvents: function() {
        s.wrap && d(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), r.unbind(".fb")
    },
    bindEvents: function() {
        var t, e = s.current;
        e && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), s.update), (t = e.keys) && a.bind("keydown.fb", function(o) {
            var r = o.which || o.keyCode,
                a = o.target || o.srcElement;
            return (27 !== r || !s.coming) && void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || a && (a.type || n(a).is("[contenteditable]")) || n.each(t, function(t, a) {
                return 1 < e.group.length && a[r] !== i ? (s[t](a[r]), o.preventDefault(), !1) : -1 < n.inArray(r, a) ? (s[t](), o.preventDefault(), !1) : void 0
            }))
        }), n.fn.mousewheel && e.mouseWheel && s.wrap.bind("mousewheel.fb", function(t, i, o, r) {
            for (var a = n(t.target || null), l = !1; a.length && !(l || a.is(".fancybox-skin") || a.is(".fancybox-wrap"));) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = n(a).parent();
            0 !== i && !l && 1 < s.group.length && !e.canShrink && (0 < r || 0 < o ? s.prev(0 < r ? "down" : "left") : (0 > r || 0 > o) && s.next(0 > r ? "up" : "right"), t.preventDefault())
        }))
    },
    trigger: function(t, e) {
        var i, o = e || s.coming || s.current;
        if (o) {
            if (n.isFunction(o[t]) && (i = o[t].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
            o.helpers && n.each(o.helpers, function(e, i) {
                i && s.helpers[e] && n.isFunction(s.helpers[e][t]) && s.helpers[e][t](n.extend(!0, {}, s.helpers[e].defaults, i), o)
            })
        }
        a.trigger(t)
    },
    isImage: function(t) {
        return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function(t) {
        return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(t) {
        var e, i, o = {};
        if (t = p(t), e = s.group[t] || null, !e) return !1;
        if (o = n.extend(!0, {}, s.opts, e), e = o.margin, i = o.padding, "number" === n.type(e) && (o.margin = [e, e, e, e]), "number" === n.type(i) && (o.padding = [i, i, i, i]), o.modal && n.extend(!0, o, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), o.autoSize && (o.autoWidth = o.autoHeight = !0), "auto" === o.width && (o.autoWidth = !0), "auto" === o.height && (o.autoHeight = !0), o.group = s.group, o.index = t, s.coming = o, !1 === s.trigger("beforeLoad")) s.coming = null;
        else {
            if (i = o.type, e = o.href, !i) return s.coming = null, !(!s.current || !s.router || "jumpto" === s.router) && (s.current.index = t, s[s.router](s.direction));
            if (s.isActive = !0, "image" !== i && "swf" !== i || (o.autoHeight = o.autoWidth = !1, o.scrolling = "visible"), "image" === i && (o.aspectRatio = !0), "iframe" === i && u && (o.scrolling = "scroll"), o.wrap = n(o.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + o.wrapCSS).appendTo(o.parent || "body"), n.extend(o, {
                    skin: n(".fancybox-skin", o.wrap),
                    outer: n(".fancybox-outer", o.wrap),
                    inner: n(".fancybox-inner", o.wrap)
                }), n.each(["Top", "Right", "Bottom", "Left"], function(t, e) {
                    o.skin.css("padding" + e, m(o.padding[t]))
                }), s.trigger("onReady"), "inline" === i || "html" === i) {
                if (!o.content || !o.content.length) return s._error("content")
            } else if (!e) return s._error("href");
            "image" === i ? s._loadImage() : "ajax" === i ? s._loadAjax() : "iframe" === i ? s._loadIframe() : s._afterLoad()
        }
    },
    _error: function(t) {
        n.extend(s.coming, {
            type: "html",
            autoWidth: !0,
            autoHeight: !0,
            minWidth: 0,
            minHeight: 0,
            scrolling: "no",
            hasError: t,
            content: s.coming.tpl.error
        }), s._afterLoad()
    },
    _loadImage: function() {
        var t = s.imgPreload = new Image;
        t.onload = function() {
            this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
        }, t.onerror = function() {
            this.onload = this.onerror = null, s._error("image")
        }, t.src = s.coming.href, !0 !== t.complete && s.showLoading()
    },
    _loadAjax: function() {
        var t = s.coming;
        s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, t.ajax, {
            url: t.href,
            error: function(t, e) {
                s.coming && "abort" !== e ? s._error("ajax", t) : s.hideLoading()
            },
            success: function(e, n) {
                "success" === n && (t.content = e, s._afterLoad())
            }
        }))
    },
    _loadIframe: function() {
        var t = s.coming,
            e = n(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
        n(t.wrap).bind("onReset", function() {
            try {
                n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            } catch (t) {}
        }), t.iframe.preload && (s.showLoading(), e.one("load", function() {
            n(this).data("ready", 1), u || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || s._afterLoad()
    },
    _preloadImages: function() {
        var t, e, n = s.group,
            i = s.current,
            o = n.length,
            r = i.preload ? Math.min(i.preload, o - 1) : 0;
        for (e = 1; e <= r; e += 1) t = n[(i.index + e) % o], "image" === t.type && t.href && ((new Image).src = t.href)
    },
    _afterLoad: function() {
        var t, e, i, o, r, a = s.coming,
            l = s.current;
        if (s.hideLoading(), a && !1 !== s.isActive)
            if (!1 === s.trigger("afterLoad", a, l)) a.wrap.stop(!0).trigger("onReset").remove(), s.coming = null;
            else {
                switch (l && (s.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), t = a.content, e = a.type, i = a.scrolling, n.extend(s, {
                    wrap: a.wrap,
                    skin: a.skin,
                    outer: a.outer,
                    inner: a.inner,
                    current: a,
                    previous: l
                }), o = a.href, e) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? t = n("<div>").html(t).find(a.selector) : d(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()), t = t.show().detach(), a.wrap.bind("onReset", function() {
                            n(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        t = a.tpl.image.replace(/\{href\}/g, o);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', r = "", n.each(a.swf, function(e, n) {
                            t += '<param name="' + e + '" value="' + n + '"></param>', r += " " + e + '="' + n + '"'
                        }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                d(t) && t.parent().is(a.inner) || a.inner.append(t), s.trigger("beforeShow"), a.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? l.prevMethod && s.transitions[l.prevMethod]() : n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? a.nextMethod : a.openMethod](), s._preloadImages()
            }
    },
    _setDimension: function() {
        var t, e, i, o, r, a, l, c, u, d = s.getViewport(),
            h = 0,
            g = !1,
            v = !1,
            g = s.wrap,
            y = s.skin,
            w = s.inner,
            b = s.current,
            v = b.width,
            x = b.height,
            _ = b.minWidth,
            T = b.minHeight,
            C = b.maxWidth,
            k = b.maxHeight,
            S = b.scrolling,
            D = b.scrollOutside ? b.scrollbarWidth : 0,
            E = b.margin,
            M = p(E[1] + E[3]),
            O = p(E[0] + E[2]);
        if (g.add(y).add(w).width("auto").height("auto").removeClass("fancybox-tmp"), E = p(y.outerWidth(!0) - y.width()), t = p(y.outerHeight(!0) - y.height()), e = M + E, i = O + t, o = f(v) ? (d.w - e) * p(v) / 100 : v, r = f(x) ? (d.h - i) * p(x) / 100 : x, "iframe" === b.type) {
            if (u = b.content, b.autoHeight && 1 === u.data("ready")) try {
                u[0].contentWindow.document.location && (w.width(o).height(9999), a = u.contents().find("body"), D && a.css("overflow-x", "hidden"), r = a.outerHeight(!0))
            } catch (I) {}
        } else(b.autoWidth || b.autoHeight) && (w.addClass("fancybox-tmp"), b.autoWidth || w.width(o), b.autoHeight || w.height(r), b.autoWidth && (o = w.width()), b.autoHeight && (r = w.height()), w.removeClass("fancybox-tmp"));
        if (v = p(o), x = p(r), c = o / r, _ = p(f(_) ? p(_, "w") - e : _), C = p(f(C) ? p(C, "w") - e : C), T = p(f(T) ? p(T, "h") - i : T), k = p(f(k) ? p(k, "h") - i : k), a = C, l = k, b.fitToView && (C = Math.min(d.w - e, C), k = Math.min(d.h - i, k)), e = d.w - M, O = d.h - O, b.aspectRatio ? (v > C && (v = C, x = p(v / c)), x > k && (x = k, v = p(x * c)), v < _ && (v = _, x = p(v / c)), x < T && (x = T, v = p(x * c))) : (v = Math.max(_, Math.min(v, C)), b.autoHeight && "iframe" !== b.type && (w.width(v), x = w.height()), x = Math.max(T, Math.min(x, k))), b.fitToView)
            if (w.width(v).height(x), g.width(v + E), d = g.width(), M = g.height(), b.aspectRatio)
                for (;
                    (d > e || M > O) && v > _ && x > T && !(19 < h++);) x = Math.max(T, Math.min(k, x - 10)), v = p(x * c), v < _ && (v = _, x = p(v / c)), v > C && (v = C, x = p(v / c)), w.width(v).height(x), g.width(v + E), d = g.width(), M = g.height();
            else v = Math.max(_, Math.min(v, v - (d - e))), x = Math.max(T, Math.min(x, x - (M - O)));
        D && "auto" === S && x < r && v + E + D < e && (v += D), w.width(v).height(x), g.width(v + E), d = g.width(), M = g.height(), g = (d > e || M > O) && v > _ && x > T, v = b.aspectRatio ? v < a && x < l && v < o && x < r : (v < a || x < l) && (v < o || x < r), n.extend(b, {
            dim: {
                width: m(d),
                height: m(M)
            },
            origWidth: o,
            origHeight: r,
            canShrink: g,
            canExpand: v,
            wPadding: E,
            hPadding: t,
            wrapSpace: M - y.outerHeight(!0),
            skinSpace: y.height() - x
        }), !u && b.autoHeight && x > T && x < k && !v && w.height("auto")
    },
    _getPosition: function(t) {
        var e = s.current,
            n = s.getViewport(),
            i = e.margin,
            o = s.wrap.width() + i[1] + i[3],
            r = s.wrap.height() + i[0] + i[2],
            i = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
        return e.autoCenter && e.fixed && !t && r <= n.h && o <= n.w ? i.position = "fixed" : e.locked || (i.top += n.y, i.left += n.x), i.top = m(Math.max(i.top, i.top + (n.h - r) * e.topRatio)), i.left = m(Math.max(i.left, i.left + (n.w - o) * e.leftRatio)), i
    },
    _afterZoomIn: function() {
        var t = s.current;
        t && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (t.closeClick || t.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer").bind("click.fb", function(e) {
            n(e.target).is("a") || n(e.target).parent().is("a") || (e.preventDefault(), s[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && n(t.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(t) {
            t.preventDefault(), s.close()
        }), t.arrows && 1 < s.group.length && ((t.loop || 0 < t.index) && n(t.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (t.loop || t.index < s.group.length - 1) && n(t.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play(!0)) : s.play(!1))
    },
    _afterZoomOut: function(t) {
        t = t || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
            group: {},
            opts: {},
            router: !1,
            current: null,
            isActive: !1,
            isOpened: !1,
            isOpen: !1,
            isClosing: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null
        }), s.trigger("afterClose", t)
    }
}), s.transitions = {
    getOrigPosition: function() {
        var t = s.current,
            e = t.element,
            n = t.orig,
            i = {},
            o = 50,
            r = 50,
            a = t.hPadding,
            l = t.wPadding,
            c = s.getViewport();
        return !n && t.isDom && e.is(":visible") && (n = e.find("img:first"), n.length || (n = e)), d(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = c.y + (c.h - r) * t.topRatio, i.left = c.x + (c.w - o) * t.leftRatio), ("fixed" === s.wrap.css("position") || t.locked) && (i.top -= c.y, i.left -= c.x), i = {
            top: m(i.top - a * t.topRatio),
            left: m(i.left - l * t.leftRatio),
            width: m(o + l),
            height: m(r + a)
        }
    },
    step: function(t, e) {
        var n, i, o = e.prop;
        i = s.current;
        var r = i.wrapSpace,
            a = i.skinSpace;
        "width" !== o && "height" !== o || (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), s.isClosing && (n = 1 - n), i = "width" === o ? i.wPadding : i.hPadding, i = t - i, s.skin[o](p("width" === o ? i : i - r * n)), s.inner[o](p("width" === o ? i : i - r * n - a * n)))
    },
    zoomIn: function() {
        var t = s.current,
            e = t.pos,
            i = t.openEffect,
            o = "elastic" === i,
            r = n.extend({
                opacity: 1
            }, e);
        delete r.position, o ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), s.wrap.css(e).animate(r, {
            duration: "none" === i ? 0 : t.openSpeed,
            easing: t.openEasing,
            step: o ? this.step : null,
            complete: s._afterZoomIn
        })
    },
    zoomOut: function() {
        var t = s.current,
            e = t.closeEffect,
            n = "elastic" === e,
            i = {
                opacity: .1
            };
        n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
            duration: "none" === e ? 0 : t.closeSpeed,
            easing: t.closeEasing,
            step: n ? this.step : null,
            complete: s._afterZoomOut
        })
    },
    changeIn: function() {
        var t, e = s.current,
            n = e.nextEffect,
            i = e.pos,
            o = {
                opacity: 1
            },
            r = s.direction;
        i.opacity = .1, "elastic" === n && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[t] = m(p(i[t]) - 200), o[t] = "+=200px") : (i[t] = m(p(i[t]) + 200), o[t] = "-=200px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, {
            duration: e.nextSpeed,
            easing: e.nextEasing,
            complete: s._afterZoomIn
        })
    },
    changeOut: function() {
        var t = s.previous,
            e = t.prevEffect,
            i = {
                opacity: .1
            },
            o = s.direction;
        "elastic" === e && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), t.wrap.animate(i, {
            duration: "none" === e ? 0 : t.prevSpeed,
            easing: t.prevEasing,
            complete: function() {
                n(this).trigger("onReset").remove()
            }
        })
    }
}, s.helpers.overlay = {
    defaults: {
        closeClick: !0,
        speedOut: 200,
        showEarly: !0,
        css: {},
        locked: !u,
        fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: n("html"),
    create: function(t) {
        var e;
        t = n.extend({}, this.defaults, t), this.overlay && this.close(), e = s.coming ? s.coming.parent : t.parent, this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(e && e.lenth ? e : "body"), this.fixed = !1, t.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function(t) {
        var e = this;
        t = n.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
            if (n(t.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : e.close(), !1
        }), this.overlay.css(t.css).show()
    },
    close: function() {
        r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), r.scrollTop(this.scrollV).scrollLeft(this.scrollH)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
            overlay: null,
            fixed: !1
        })
    },
    update: function() {
        var t, n = "100%";
        this.overlay.width(n).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), a.width() > t && (n = a.width())) : a.width() > r.width() && (n = a.width()), this.overlay.width(n).height(a.height())
    },
    onReady: function(t, e) {
        var i = this.overlay;
        n(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function(t, e) {
        e.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && n("*").filter(function() {
            return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = r.scrollTop(), this.scrollH = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(t)
    },
    onUpdate: function() {
        this.fixed || this.update()
    },
    afterClose: function(t) {
        this.overlay && !s.coming && this.overlay.fadeOut(t.speedOut, n.proxy(this.close, this))
    }
}, s.helpers.title = {
    defaults: {
        type: "float",
        position: "bottom"
    },
    beforeShow: function(t) {
        var e = s.current,
            i = e.title,
            o = t.type;
        if (n.isFunction(i) && (i = i.call(e.element, e)), h(i) && "" !== n.trim(i)) {
            switch (e = n('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + i + "</div>"), o) {
                case "inside":
                    o = s.skin;
                    break;
                case "outside":
                    o = s.wrap;
                    break;
                case "over":
                    o = s.inner;
                    break;
                default:
                    o = s.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(p(e.css("margin-bottom")))
            }
            e["top" === t.position ? "prependTo" : "appendTo"](o)
        }
    }
}, n.fn.fancybox = function(t) {
    var e, i = n(this),
        o = this.selector || "",
        r = function(r) {
            var a, l, c = n(this).blur(),
                u = e;
            r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || c.is(".fancybox-wrap") || (a = t.groupAttr || "data-fancybox-group", l = c.attr(a), l || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + a + '="' + l + '"]'), u = c.index(this)), t.index = u, !1 !== s.open(c, t) && r.preventDefault())
        };
    return t = t || {}, e = t.index || 0, o && !1 !== t.live ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : i.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
}, a.ready(function() {
    var e, r;
    n.scrollbarWidth === i && (n.scrollbarWidth = function() {
        var t = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
            e = t.children(),
            e = e.innerWidth() - e.height(99).innerWidth();
        return t.remove(), e
    }), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
        var t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
            e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
        return t.remove(), e
    }()), n.extend(s.defaults, {
        scrollbarWidth: n.scrollbarWidth(),
        fixed: n.support.fixedPosition,
        parent: n("body")
    }), e = n(t).width(), o.addClass("fancybox-lock-test"), r = n(t).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (r - e) + "px;}</style>").appendTo("head")
})
}(window, document, jQuery), + function(t) {
"use strict";
if (!t.fn.carousel) throw new Error("carousel-swipe required bootstrap carousel");
var e = function(n) {
    this.$element = t(n), this.carousel = this.$element.data("bs.carousel"), this.options = t.extend({}, e.DEFAULTS, this.carousel.options), this.startX = this.startY = this.startTime = this.cycling = this.$active = this.$items = this.$next = this.$prev = this.dx = null, this.$element.on("touchstart", t.proxy(this.touchstart, this)).on("touchmove", t.proxy(this.touchmove, this)).on("touchend", t.proxy(this.touchend, this))
};
e.DEFAULTS = {
    swipe: 50
}, e.prototype.touchstart = function(t) {
    if (this.options.swipe) {
        var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
        this.dx = 0, this.startX = e.pageX, this.startY = e.pageY, this.cycling = null, this.width = this.$element.width(), this.startTime = t.timeStamp
    }
}, e.prototype.touchmove = function(t) {
    if (this.options.swipe) {
        var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            n = e.pageX - this.startX,
            i = e.pageY - this.startY;
        Math.abs(n) < Math.abs(i) || (null === this.cycling && (this.cycling = !!this.carousel.interval, this.cycling && this.carousel.pause()), t.preventDefault(), this.dx = n / (this.width || 1) * 100, this.swipe(this.dx))
    }
}, e.prototype.touchend = function(e) {
    if (this.options.swipe && this.$active) {
        var n = t().add(this.$active).add(this.$prev).add(this.$next).carousel_transition(!0),
            i = (e.timeStamp - this.startTime) / 1e3,
            o = Math.abs(this.dx / i);
        this.dx > 40 || this.dx > 0 && o > this.options.swipe ? this.carousel.prev() : this.dx < -40 || this.dx < 0 && o > this.options.swipe ? this.carousel.next() : this.$active.one(t.support.transition.end, function() {
            n.removeClass("prev next")
        }).emulateTransitionEnd(1e3 * this.$active.css("transition-duration").slice(0, -1)), n.css("left", ""), this.cycling && this.carousel.cycle(), this.$active = null
    }
}, e.prototype.swipe = function(t) {
    var e = this.$active || this.getActive();
    if (t < 0) {
        if (this.$prev.css("left", "").removeClass("prev").carousel_transition(!0), !this.$next.length || this.$next.hasClass("active")) return;
        this.$next.carousel_transition(!1).addClass("next").css("left", t + 100 + "%")
    } else {
        if (this.$next.css("left", "").removeClass("next").carousel_transition(!0), !this.$prev.length || this.$prev.hasClass("active")) return;
        this.$prev.carousel_transition(!1).addClass("prev").css("left", t - 100 + "%")
    }
    e.carousel_transition(!1).css("left", t + "%")
}, e.prototype.getActive = function() {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$next = this.$active.next(), !this.$next.length && this.options.wrap && (this.$next = this.$items.first()), this.$prev = this.$active.prev(), !this.$prev.length && this.options.wrap && (this.$prev = this.$items.last()), this.$active
};
var n = t.fn.carousel;
t.fn.carousel = function() {
    return n.apply(this, arguments), this.each(function() {
        var n = t(this),
            i = n.data("bs.carousel.swipe");
        i || n.data("bs.carousel.swipe", new e(this))
    })
}, t.extend(t.fn.carousel, n), t.fn.carousel_transition = function(e) {
    return e = e ? "" : "none", this.each(function() {
        t(this).css("-webkit-transition", e).css("transition", e)
    })
}
}(jQuery), ! function(t, e) {
"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
}(this, function() {
"use strict";
var t = function(t, e, n, i) {
    var o = {
        features: null,
        bind: function(t, e, n, i) {
            var o = (i ? "remove" : "add") + "EventListener";
            e = e.split(" ");
            for (var r = 0; r < e.length; r++) e[r] && t[o](e[r], n, !1)
        },
        isArray: function(t) {
            return t instanceof Array
        },
        createEl: function(t, e) {
            var n = document.createElement(e || "div");
            return t && (n.className = t), n
        },
        getScrollY: function() {
            var t = window.pageYOffset;
            return void 0 !== t ? t : document.documentElement.scrollTop
        },
        unbind: function(t, e, n) {
            o.bind(t, e, n, !0)
        },
        removeClass: function(t, e) {
            var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
            t.className = t.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        },
        addClass: function(t, e) {
            o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
        },
        hasClass: function(t, e) {
            return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        },
        getChildByClass: function(t, e) {
            for (var n = t.firstChild; n;) {
                if (o.hasClass(n, e)) return n;
                n = n.nextSibling
            }
        },
        arraySearch: function(t, e, n) {
            for (var i = t.length; i--;)
                if (t[i][n] === e) return i;
            return -1
        },
        extend: function(t, e, n) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    if (n && t.hasOwnProperty(i)) continue;
                    t[i] = e[i]
                }
        },
        easing: {
            sine: {
                out: function(t) {
                    return Math.sin(t * (Math.PI / 2))
                },
                inOut: function(t) {
                    return -(Math.cos(Math.PI * t) - 1) / 2
                }
            },
            cubic: {
                out: function(t) {
                    return --t * t * t + 1
                }
            }
        },
        detectFeatures: function() {
            if (o.features) return o.features;
            var t = o.createEl(),
                e = t.style,
                n = "",
                i = {};
            if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                var r = navigator.userAgent;
                if (/iP(hone|od)/.test(navigator.platform)) {
                    var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && a < 8 && (i.isOldIOSPhone = !0))
                }
                var s = r.match(/Android\s([0-9\.]*)/),
                    l = s ? s[1] : 0;
                l = parseFloat(l), l >= 1 && (l < 4.4 && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
            }
            for (var c, u, d = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                n = h[f];
                for (var p = 0; p < 3; p++) c = d[p], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in e && (i[c] = u);
                n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
            }
            if (!i.raf) {
                var m = 0;
                i.raf = function(t) {
                    var e = (new Date).getTime(),
                        n = Math.max(0, 16 - (e - m)),
                        i = window.setTimeout(function() {
                            t(e + n)
                        }, n);
                    return m = e + n, i
                }, i.caf = function(t) {
                    clearTimeout(t)
                }
            }
            return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
        }
    };
    o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, n, i) {
        e = e.split(" ");
        for (var o, r = (i ? "detach" : "attach") + "Event", a = function() {
                n.handleEvent.call(n)
            }, s = 0; s < e.length; s++)
            if (o = e[s])
                if ("object" == typeof n && n.handleEvent) {
                    if (i) {
                        if (!n["oldIE" + o]) return !1
                    } else n["oldIE" + o] = a;
                    t[r]("on" + o, n["oldIE" + o])
                } else t[r]("on" + o, n)
    });
    var r = this,
        a = 25,
        s = 3,
        l = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(t) {
                return "A" === t.tagName
            },
            getDoubleTapZoom: function(t, e) {
                return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
    o.extend(l, i);
    var c, u, d, h, f, p, m, g, v, y, w, b, x, _, T, C, k, S, D, E, M, O, I, A, $, P, N, R, L, Y, j, H, F, W, U, z, q, B, X, V, G, Z, K, Q, J, tt, et, nt, it, ot, rt, at, st, lt, ct, ut, dt, ht = function() {
            return {
                x: 0,
                y: 0
            }
        },
        ft = ht(),
        pt = ht(),
        mt = ht(),
        gt = {},
        vt = 0,
        yt = {},
        wt = ht(),
        bt = 0,
        xt = !0,
        _t = [],
        Tt = {},
        Ct = !1,
        kt = function(t, e) {
            o.extend(r, e.publicMethods), _t.push(t)
        },
        St = function(t) {
            var e = tn();
            return t > e - 1 ? t - e : t < 0 ? e + t : t
        },
        Dt = {},
        Et = function(t, e) {
            return Dt[t] || (Dt[t] = []), Dt[t].push(e)
        },
        Mt = function(t) {
            var e = Dt[t];
            if (e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < e.length; i++) e[i].apply(r, n)
            }
        },
        Ot = function() {
            return (new Date).getTime()
        },
        It = function(t) {
            ct = t, r.bg.style.opacity = t * l.bgOpacity
        },
        At = function(t, e, n, i, o) {
            (!Ct || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), t[O] = b + e + "px, " + n + "px" + x + " scale(" + i + ")"
        },
        $t = function(t) {
            ot && (t && (y > r.currItem.fitRatio ? Ct || (fn(r.currItem, !1, !0), Ct = !0) : Ct && (fn(r.currItem), Ct = !1)), At(ot, mt.x, mt.y, y))
        },
        Pt = function(t) {
            t.container && At(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
        },
        Nt = function(t, e) {
            e[O] = b + t + "px, 0px" + x
        },
        Rt = function(t, e) {
            if (!l.loop && e) {
                var n = h + (wt.x * vt - t) / wt.x,
                    i = Math.round(t - we.x);
                (n < 0 && i > 0 || n >= tn() - 1 && i < 0) && (t = we.x + i * l.mainScrollEndFriction)
            }
            we.x = t, Nt(t, f)
        },
        Lt = function(t, e) {
            var n = be[t] - yt[t];
            return pt[t] + ft[t] + n - n * (e / w)
        },
        Yt = function(t, e) {
            t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
        },
        jt = function(t) {
            t.x = Math.round(t.x), t.y = Math.round(t.y)
        },
        Ht = null,
        Ft = function() {
            Ht && (o.unbind(document, "mousemove", Ft), o.addClass(t, "pswp--has_mouse"), l.mouseUsed = !0, Mt("mouseUsed")), Ht = setTimeout(function() {
                Ht = null
            }, 100)
        },
        Wt = function() {
            o.bind(document, "keydown", r), j.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", Ft), o.bind(window, "resize scroll orientationchange", r), Mt("bindEvents")
        },
        Ut = function() {
            o.unbind(window, "resize scroll orientationchange", r), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Ft), j.transform && o.unbind(r.scrollWrap, "click", r), X && o.unbind(window, m, r), clearTimeout(H), Mt("unbindEvents")
        },
        zt = function(t, e) {
            var n = cn(r.currItem, gt, t);
            return e && (it = n), n
        },
        qt = function(t) {
            return t || (t = r.currItem), t.initialZoomLevel
        },
        Bt = function(t) {
            return t || (t = r.currItem), t.w > 0 ? l.maxSpreadZoom : 1
        },
        Xt = function(t, e, n, i) {
            return i === r.currItem.initialZoomLevel ? (n[t] = r.currItem.initialPosition[t], !0) : (n[t] = Lt(t, i), n[t] > e.min[t] ? (n[t] = e.min[t], !0) : n[t] < e.max[t] && (n[t] = e.max[t], !0))
        },
        Vt = function() {
            if (O) {
                var e = j.perspective && !A;
                return b = "translate" + (e ? "3d(" : "("), void(x = j.perspective ? ", 0px)" : ")")
            }
            O = "left", o.addClass(t, "pswp--ie"), Nt = function(t, e) {
                e.left = t + "px"
            }, Pt = function(t) {
                var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                    n = t.container.style,
                    i = e * t.w,
                    o = e * t.h;
                n.width = i + "px", n.height = o + "px", n.left = t.initialPosition.x + "px", n.top = t.initialPosition.y + "px"
            }, $t = function() {
                if (ot) {
                    var t = ot,
                        e = r.currItem,
                        n = e.fitRatio > 1 ? 1 : e.fitRatio,
                        i = n * e.w,
                        o = n * e.h;
                    t.width = i + "px", t.height = o + "px", t.left = mt.x + "px", t.top = mt.y + "px"
                }
            }
        },
        Gt = function(t) {
            var e = "";
            l.escKey && 27 === t.keyCode ? e = "close" : l.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, r[e]()))
        },
        Zt = function(t) {
            t && (Z || G || rt || q) && (t.preventDefault(), t.stopPropagation())
        },
        Kt = function() {
            r.setScrollOffset(0, o.getScrollY())
        },
        Qt = {},
        Jt = 0,
        te = function(t) {
            Qt[t] && (Qt[t].raf && P(Qt[t].raf), Jt--, delete Qt[t])
        },
        ee = function(t) {
            Qt[t] && te(t), Qt[t] || (Jt++, Qt[t] = {})
        },
        ne = function() {
            for (var t in Qt) Qt.hasOwnProperty(t) && te(t)
        },
        ie = function(t, e, n, i, o, r, a) {
            var s, l = Ot();
            ee(t);
            var c = function() {
                if (Qt[t]) {
                    if (s = Ot() - l, s >= i) return te(t), r(n), void(a && a());
                    r((n - e) * o(s / i) + e), Qt[t].raf = $(c)
                }
            };
            c()
        },
        oe = {
            shout: Mt,
            listen: Et,
            viewportSize: gt,
            options: l,
            isMainScrollAnimating: function() {
                return rt
            },
            getZoomLevel: function() {
                return y
            },
            getCurrentIndex: function() {
                return h
            },
            isDragging: function() {
                return X
            },
            isZooming: function() {
                return tt
            },
            setScrollOffset: function(t, e) {
                yt.x = t, Y = yt.y = e, Mt("updateScrollOffset", yt)
            },
            applyZoomPan: function(t, e, n, i) {
                mt.x = e, mt.y = n, y = t, $t(i)
            },
            init: function() {
                if (!c && !u) {
                    var n;
                    r.framework = o, r.template = t, r.bg = o.getChildByClass(t, "pswp__bg"), N = t.className, c = !0, j = o.detectFeatures(), $ = j.raf, P = j.caf, O = j.transform, L = j.oldIE, r.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = C = [{
                        el: r.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[1],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[2],
                        wrap: 0,
                        index: -1
                    }], C[0].el.style.display = C[2].el.style.display = "none", Vt(), v = {
                        resize: r.updateSize,
                        orientationchange: function() {
                            clearTimeout(H), H = setTimeout(function() {
                                gt.x !== r.scrollWrap.clientWidth && r.updateSize()
                            }, 500)
                        },
                        scroll: Kt,
                        keydown: Gt,
                        click: Zt
                    };
                    var i = j.isOldIOSPhone || j.isOldAndroid || j.isMobileOpera;
                    for (j.animationName && j.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < _t.length; n++) r["init" + _t[n]]();
                    if (e) {
                        var a = r.ui = new e(r, o);
                        a.init()
                    }
                    Mt("firstUpdate"), h = h || l.index || 0, (isNaN(h) || h < 0 || h >= tn()) && (h = 0), r.currItem = Je(h), (j.isOldIOSPhone || j.isOldAndroid) && (xt = !1), t.setAttribute("aria-hidden", "false"), l.modal && (xt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === Y && (Mt("initialLayout"), Y = R = o.getScrollY());
                    var d = "pswp--open ";
                    for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += A ? "pswp--touch" : "pswp--notouch", d += j.animationName ? " pswp--css_animation" : "", d += j.svg ? " pswp--svg" : "", o.addClass(t, d), r.updateSize(), p = -1, bt = null, n = 0; n < s; n++) Nt((n + p) * wt.x, C[n].el.style);
                    L || o.bind(r.scrollWrap, g, r), Et("initialZoomInEnd", function() {
                        r.setContent(C[0], h - 1), r.setContent(C[2], h + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && t.focus(), Wt()
                    }), r.setContent(C[1], h), r.updateCurrItem(), Mt("afterInit"), xt || (_ = setInterval(function() {
                        Jt || X || tt || y !== r.currItem.initialZoomLevel || r.updateSize()
                    }, 1e3)), o.addClass(t, "pswp--visible")
                }
            },
            close: function() {
                c && (c = !1, u = !0, Mt("close"), Ut(), nn(r.currItem, null, !0, r.destroy))
            },
            destroy: function() {
                Mt("destroy"), Ge && clearTimeout(Ge), t.setAttribute("aria-hidden", "true"), t.className = N, _ && clearInterval(_), o.unbind(r.scrollWrap, g, r), o.unbind(window, "scroll", r), ke(), ne(), Dt = null
            },
            panTo: function(t, e, n) {
                n || (t > it.min.x ? t = it.min.x : t < it.max.x && (t = it.max.x), e > it.min.y ? e = it.min.y : e < it.max.y && (e = it.max.y)), mt.x = t, mt.y = e, $t()
            },
            handleEvent: function(t) {
                t = t || window.event, v[t.type] && v[t.type](t)
            },
            goTo: function(t) {
                t = St(t);
                var e = t - h;
                bt = e, h = t, r.currItem = Je(h), vt -= e, Rt(wt.x * vt), ne(), rt = !1, r.updateCurrItem()
            },
            next: function() {
                r.goTo(h + 1)
            },
            prev: function() {
                r.goTo(h - 1)
            },
            updateCurrZoomItem: function(t) {
                if (t && Mt("beforeChange", 0), C[1].el.children.length) {
                    var e = C[1].el.children[0];
                    ot = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                } else ot = null;
                it = r.currItem.bounds, w = y = r.currItem.initialZoomLevel, mt.x = it.center.x, mt.y = it.center.y, t && Mt("afterChange")
            },
            invalidateCurrItems: function() {
                T = !0;
                for (var t = 0; t < s; t++) C[t].item && (C[t].item.needsUpdate = !0)
            },
            updateCurrItem: function(t) {
                if (0 !== bt) {
                    var e, n = Math.abs(bt);
                    if (!(t && n < 2)) {
                        r.currItem = Je(h), Ct = !1, Mt("beforeChange", bt), n >= s && (p += bt + (bt > 0 ? -s : s), n = s);
                        for (var i = 0; i < n; i++) bt > 0 ? (e = C.shift(), C[s - 1] = e, p++, Nt((p + 2) * wt.x, e.el.style), r.setContent(e, h - n + i + 1 + 1)) : (e = C.pop(), C.unshift(e), p--, Nt(p * wt.x, e.el.style), r.setContent(e, h + n - i - 1 - 1));
                        if (ot && 1 === Math.abs(bt)) {
                            var o = Je(k);
                            o.initialZoomLevel !== y && (cn(o, gt), fn(o), Pt(o))
                        }
                        bt = 0, r.updateCurrZoomItem(), k = h, Mt("afterChange")
                    }
                }
            },
            updateSize: function(e) {
                if (!xt && l.modal) {
                    var n = o.getScrollY();
                    if (Y !== n && (t.style.top = n + "px", Y = n), !e && Tt.x === window.innerWidth && Tt.y === window.innerHeight) return;
                    Tt.x = window.innerWidth, Tt.y = window.innerHeight, t.style.height = Tt.y + "px"
                }
                if (gt.x = r.scrollWrap.clientWidth, gt.y = r.scrollWrap.clientHeight, Kt(), wt.x = gt.x + Math.round(gt.x * l.spacing), wt.y = gt.y, Rt(wt.x * vt), Mt("beforeResize"), void 0 !== p) {
                    for (var i, a, c, u = 0; u < s; u++) i = C[u], Nt((u + p) * wt.x, i.el.style), c = h + u - 1, l.loop && tn() > 2 && (c = St(c)), a = Je(c), a && (T || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a), r.setContent(i, c), 1 === u && (r.currItem = a, r.updateCurrZoomItem(!0)), a.needsUpdate = !1) : i.index === -1 && c >= 0 && r.setContent(i, c), a && a.container && (cn(a, gt), fn(a), Pt(a));
                    T = !1
                }
                w = y = r.currItem.initialZoomLevel, it = r.currItem.bounds, it && (mt.x = it.center.x, mt.y = it.center.y, $t(!0)), Mt("resize")
            },
            zoomTo: function(t, e, n, i, r) {
                e && (w = y, be.x = Math.abs(e.x) - mt.x, be.y = Math.abs(e.y) - mt.y, Yt(pt, mt));
                var a = zt(t, !1),
                    s = {};
                Xt("x", a, s, t), Xt("y", a, s, t);
                var l = y,
                    c = {
                        x: mt.x,
                        y: mt.y
                    };
                jt(s);
                var u = function(e) {
                    1 === e ? (y = t, mt.x = s.x, mt.y = s.y) : (y = (t - l) * e + l, mt.x = (s.x - c.x) * e + c.x, mt.y = (s.y - c.y) * e + c.y), r && r(e), $t(1 === e)
                };
                n ? ie("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
            }
        },
        re = 30,
        ae = 10,
        se = {},
        le = {},
        ce = {},
        ue = {},
        de = {},
        he = [],
        fe = {},
        pe = [],
        me = {},
        ge = 0,
        ve = ht(),
        ye = 0,
        we = ht(),
        be = ht(),
        xe = ht(),
        _e = function(t, e) {
            return t.x === e.x && t.y === e.y
        },
        Te = function(t, e) {
            return Math.abs(t.x - e.x) < a && Math.abs(t.y - e.y) < a
        },
        Ce = function(t, e) {
            return me.x = Math.abs(t.x - e.x), me.y = Math.abs(t.y - e.y), Math.sqrt(me.x * me.x + me.y * me.y)
        },
        ke = function() {
            K && (P(K), K = null)
        },
        Se = function() {
            X && (K = $(Se), We())
        },
        De = function() {
            return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
        },
        Ee = function(t, e) {
            return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : Ee(t.parentNode, e))
        },
        Me = {},
        Oe = function(t, e) {
            return Me.prevent = !Ee(t.target, l.isClickableElement), Mt("preventDragEvent", t, e, Me), Me.prevent
        },
        Ie = function(t, e) {
            return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
        },
        Ae = function(t, e, n) {
            n.x = .5 * (t.x + e.x), n.y = .5 * (t.y + e.y)
        },
        $e = function(t, e, n) {
            if (t - W > 50) {
                var i = pe.length > 2 ? pe.shift() : {};
                i.x = e, i.y = n, pe.push(i), W = t
            }
        },
        Pe = function() {
            var t = mt.y - r.currItem.initialPosition.y;
            return 1 - Math.abs(t / (gt.y / 2))
        },
        Ne = {},
        Re = {},
        Le = [],
        Ye = function(t) {
            for (; Le.length > 0;) Le.pop();
            return I ? (dt = 0, he.forEach(function(t) {
                0 === dt ? Le[0] = t : 1 === dt && (Le[1] = t), dt++
            })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Le[0] = Ie(t.touches[0], Ne), t.touches.length > 1 && (Le[1] = Ie(t.touches[1], Re))) : (Ne.x = t.pageX, Ne.y = t.pageY, Ne.id = "", Le[0] = Ne), Le
        },
        je = function(t, e) {
            var n, i, o, a, s = 0,
                c = mt[t] + e[t],
                u = e[t] > 0,
                d = we.x + e.x,
                h = we.x - fe.x;
            return n = c > it.min[t] || c < it.max[t] ? l.panEndFriction : 1, c = mt[t] + e[t] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ot ? "h" !== at || "x" !== t || G || (u ? (c > it.min[t] && (n = l.panEndFriction, s = it.min[t] - c, i = it.min[t] - pt[t]), (i <= 0 || h < 0) && tn() > 1 ? (a = d, h < 0 && d > fe.x && (a = fe.x)) : it.min.x !== it.max.x && (o = c)) : (c < it.max[t] && (n = l.panEndFriction, s = c - it.max[t], i = pt[t] - it.max[t]), (i <= 0 || h > 0) && tn() > 1 ? (a = d, h > 0 && d < fe.x && (a = fe.x)) : it.min.x !== it.max.x && (o = c))) : a = d, "x" !== t) ? void(rt || Q || y > r.currItem.fitRatio && (mt[t] += e[t] * n)) : (void 0 !== a && (Rt(a, !0), Q = a !== fe.x), it.min.x !== it.max.x && (void 0 !== o ? mt.x = o : Q || (mt.x += e.x * n)), void 0 !== a)
        },
        He = function(t) {
            if (!("mousedown" === t.type && t.button > 0)) {
                if (Qe) return void t.preventDefault();
                if (!B || "mousedown" !== t.type) {
                    if (Oe(t, !0) && t.preventDefault(), Mt("pointerDown"), I) {
                        var e = o.arraySearch(he, t.pointerId, "id");
                        e < 0 && (e = he.length), he[e] = {
                            x: t.pageX,
                            y: t.pageY,
                            id: t.pointerId
                        }
                    }
                    var n = Ye(t),
                        i = n.length;
                    J = null, ne(), X && 1 !== i || (X = st = !0, o.bind(window, m, r), z = ut = lt = q = Q = Z = V = G = !1, at = null, Mt("firstTouchStart", n), Yt(pt, mt), ft.x = ft.y = 0, Yt(ue, n[0]), Yt(de, ue), fe.x = wt.x * vt, pe = [{
                        x: ue.x,
                        y: ue.y
                    }], W = F = Ot(), zt(y, !0), ke(), Se()), !tt && i > 1 && !rt && !Q && (w = y, G = !1, tt = V = !0, ft.y = ft.x = 0, Yt(pt, mt), Yt(se, n[0]), Yt(le, n[1]), Ae(se, le, xe), be.x = Math.abs(xe.x) - mt.x, be.y = Math.abs(xe.y) - mt.y, et = nt = Ce(se, le))
                }
            }
        },
        Fe = function(t) {
            if (t.preventDefault(), I) {
                var e = o.arraySearch(he, t.pointerId, "id");
                if (e > -1) {
                    var n = he[e];
                    n.x = t.pageX, n.y = t.pageY
                }
            }
            if (X) {
                var i = Ye(t);
                if (at || Z || tt) J = i;
                else if (we.x !== wt.x * vt) at = "h";
                else {
                    var r = Math.abs(i[0].x - ue.x) - Math.abs(i[0].y - ue.y);
                    Math.abs(r) >= ae && (at = r > 0 ? "h" : "v", J = i)
                }
            }
        },
        We = function() {
            if (J) {
                var t = J.length;
                if (0 !== t)
                    if (Yt(se, J[0]), ce.x = se.x - ue.x, ce.y = se.y - ue.y, tt && t > 1) {
                        if (ue.x = se.x, ue.y = se.y, !ce.x && !ce.y && _e(J[1], le)) return;
                        Yt(le, J[1]), G || (G = !0, Mt("zoomGestureStarted"));
                        var e = Ce(se, le),
                            n = Xe(e);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ut = !0);
                        var i = 1,
                            o = qt(),
                            a = Bt();
                        if (n < o)
                            if (l.pinchToClose && !ut && w <= r.currItem.initialZoomLevel) {
                                var s = o - n,
                                    c = 1 - s / (o / 1.2);
                                It(c), Mt("onPinchClose", c), lt = !0
                            } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                        else n > a && (i = (n - a) / (6 * o), i > 1 && (i = 1), n = a + i * o);
                        i < 0 && (i = 0), et = e, Ae(se, le, ve), ft.x += ve.x - xe.x, ft.y += ve.y - xe.y, Yt(xe, ve), mt.x = Lt("x", n), mt.y = Lt("y", n), z = n > y, y = n, $t()
                    } else {
                        if (!at) return;
                        if (st && (st = !1, Math.abs(ce.x) >= ae && (ce.x -= J[0].x - de.x), Math.abs(ce.y) >= ae && (ce.y -= J[0].y - de.y)), ue.x = se.x, ue.y = se.y, 0 === ce.x && 0 === ce.y) return;
                        if ("v" === at && l.closeOnVerticalDrag && !De()) {
                            ft.y += ce.y, mt.y += ce.y;
                            var u = Pe();
                            return q = !0, Mt("onVerticalDrag", u), It(u), void $t()
                        }
                        $e(Ot(), se.x, se.y), Z = !0, it = r.currItem.bounds;
                        var d = je("x", ce);
                        d || (je("y", ce), jt(mt), $t())
                    }
            }
        },
        Ue = function(t) {
            if (j.isOldAndroid) {
                if (B && "mouseup" === t.type) return;
                t.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function() {
                    B = 0
                }, 600))
            }
            Mt("pointerUp"), Oe(t, !1) && t.preventDefault();
            var e;
            if (I) {
                var n = o.arraySearch(he, t.pointerId, "id");
                if (n > -1)
                    if (e = he.splice(n, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                    else {
                        var i = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        };
                        e.type = i[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                    }
            }
            var a, s = Ye(t),
                c = s.length;
            if ("mouseup" === t.type && (c = 0), 2 === c) return J = null, !0;
            1 === c && Yt(de, s[0]), 0 !== c || at || rt || (e || ("mouseup" === t.type ? e = {
                x: t.pageX,
                y: t.pageY,
                type: "mouse"
            } : t.changedTouches && t.changedTouches[0] && (e = {
                x: t.changedTouches[0].pageX,
                y: t.changedTouches[0].pageY,
                type: "touch"
            })), Mt("touchRelease", t, e));
            var u = -1;
            if (0 === c && (X = !1, o.unbind(window, m, r), ke(), tt ? u = 0 : ye !== -1 && (u = Ot() - ye)), ye = 1 === c ? Ot() : -1, a = u !== -1 && u < 150 ? "zoom" : "swipe", tt && c < 2 && (tt = !1, 1 === c && (a = "zoomPointerUp"), Mt("zoomGestureEnded")), J = null, Z || G || rt || q)
                if (ne(), U || (U = ze()), U.calculateSwipeSpeed("x"), q) {
                    var d = Pe();
                    if (d < l.verticalDragRange) r.close();
                    else {
                        var h = mt.y,
                            f = ct;
                        ie("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(t) {
                            mt.y = (r.currItem.initialPosition.y - h) * t + h, It((1 - f) * t + f), $t()
                        }), Mt("onVerticalDrag", 1)
                    }
                } else {
                    if ((Q || rt) && 0 === c) {
                        var p = Be(a, U);
                        if (p) return;
                        a = "zoomPointerUp"
                    }
                    if (!rt) return "swipe" !== a ? void Ve() : void(!Q && y > r.currItem.fitRatio && qe(U))
                }
        },
        ze = function() {
            var t, e, n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(i) {
                    pe.length > 1 ? (t = Ot() - W + 50, e = pe[pe.length - 2][i]) : (t = Ot() - F, e = de[i]), n.lastFlickOffset[i] = ue[i] - e, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / t : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                },
                calculateOverBoundsAnimOffset: function(t, e) {
                    n.backAnimStarted[t] || (mt[t] > it.min[t] ? n.backAnimDestination[t] = it.min[t] : mt[t] < it.max[t] && (n.backAnimDestination[t] = it.max[t]), void 0 !== n.backAnimDestination[t] && (n.slowDownRatio[t] = .7, n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t], n.speedDecelerationRatioAbs[t] < .05 && (n.lastFlickSpeed[t] = 0, n.backAnimStarted[t] = !0, ie("bounceZoomPan" + t, mt[t], n.backAnimDestination[t], e || 300, o.easing.sine.out, function(e) {
                        mt[t] = e, $t()
                    }))))
                },
                calculateAnimOffset: function(t) {
                    n.backAnimStarted[t] || (n.speedDecelerationRatio[t] = n.speedDecelerationRatio[t] * (n.slowDownRatio[t] + n.slowDownRatioReverse[t] - n.slowDownRatioReverse[t] * n.timeDiff / 10), n.speedDecelerationRatioAbs[t] = Math.abs(n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]), n.distanceOffset[t] = n.lastFlickSpeed[t] * n.speedDecelerationRatio[t] * n.timeDiff, mt[t] += n.distanceOffset[t])
                },
                panAnimLoop: function() {
                    if (Qt.zoomPan && (Qt.zoomPan.raf = $(n.panAnimLoop), n.now = Ot(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), $t(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return mt.x = Math.round(mt.x), mt.y = Math.round(mt.y), $t(), void te("zoomPan")
                }
            };
            return n
        },
        qe = function(t) {
            return t.calculateSwipeSpeed("y"), it = r.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (ee("zoomPan"), t.lastNow = Ot(), void t.panAnimLoop())
        },
        Be = function(t, e) {
            var n;
            rt || (ge = h);
            var i;
            if ("swipe" === t) {
                var a = ue.x - de.x,
                    s = e.lastFlickDist.x < 10;
                a > re && (s || e.lastFlickOffset.x > 20) ? i = -1 : a < -re && (s || e.lastFlickOffset.x < -20) && (i = 1)
            }
            var c;
            i && (h += i, h < 0 ? (h = l.loop ? tn() - 1 : 0, c = !0) : h >= tn() && (h = l.loop ? 0 : tn() - 1, c = !0), c && !l.loop || (bt += i, vt -= i, n = !0));
            var u, d = wt.x * vt,
                f = Math.abs(d - we.x);
            return n || d > we.x == e.lastFlickSpeed.x > 0 ? (u = Math.abs(e.lastFlickSpeed.x) > 0 ? f / Math.abs(e.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, ge === h && (n = !1), rt = !0, Mt("mainScrollAnimStart"), ie("mainScroll", we.x, d, u, o.easing.cubic.out, Rt, function() {
                ne(), rt = !1, ge = -1, (n || ge !== h) && r.updateCurrItem(), Mt("mainScrollAnimComplete")
            }), n && r.updateCurrItem(!0), n
        },
        Xe = function(t) {
            return 1 / nt * t * w
        },
        Ve = function() {
            var t = y,
                e = qt(),
                n = Bt();
            y < e ? t = e : y > n && (t = n);
            var i, a = 1,
                s = ct;
            return lt && !z && !ut && y < e ? (r.close(), !0) : (lt && (i = function(t) {
                It((a - s) * t + s)
            }), r.zoomTo(t, 0, 200, o.easing.cubic.out, i), !0)
        };
    kt("Gestures", {
        publicMethods: {
            initGestures: function() {
                var t = function(t, e, n, i, o) {
                    S = t + e, D = t + n, E = t + i, M = o ? t + o : ""
                };
                I = j.pointerEvent, I && j.touch && (j.touch = !1), I ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : j.touch ? (t("touch", "start", "move", "end", "cancel"), A = !0) : t("mouse", "down", "move", "up"), m = D + " " + E + " " + M, g = S, I && !A && (A = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = A, v[S] = He, v[D] = Fe, v[E] = Ue, M && (v[M] = v[E]), j.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[S], v.mousemove = v[D], v.mouseup = v[E]), A || (l.allowPanToNext = !1)
            }
        }
    });
    var Ge, Ze, Ke, Qe, Je, tn, en, nn = function(e, n, i, a) {
            Ge && clearTimeout(Ge), Qe = !0, Ke = !0;
            var s;
            e.initialLayout ? (s = e.initialLayout, e.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(h);
            var c = i ? l.hideAnimationDuration : l.showAnimationDuration,
                u = function() {
                    te("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (It(1), n && (n.style.display = "block"), o.addClass(t, "pswp--animated-in"), Mt("initialZoom" + (i ? "OutEnd" : "InEnd"))), a && a(), Qe = !1
                };
            if (!c || !s || void 0 === s.x) return Mt("initialZoom" + (i ? "Out" : "In")), y = e.initialZoomLevel, Yt(mt, e.initialPosition), $t(), t.style.opacity = i ? 0 : 1, It(1), void(c ? setTimeout(function() {
                u()
            }, c) : u());
            var f = function() {
                var n = d,
                    a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / e.w, mt.x = s.x, mt.y = s.y - R, r[a ? "template" : "bg"].style.opacity = .001, $t()), ee("initialZoom"), i && !n && o.removeClass(t, "pswp--animated-in"), a && (i ? o[(n ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() {
                    o.addClass(t, "pswp--animate_opacity")
                }, 30)), Ge = setTimeout(function() {
                    if (Mt("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = s.w / e.w,
                            l = {
                                x: mt.x,
                                y: mt.y
                            },
                            d = y,
                            h = ct,
                            f = function(e) {
                                1 === e ? (y = r, mt.x = s.x, mt.y = s.y - Y) : (y = (r - d) * e + d, mt.x = (s.x - l.x) * e + l.x, mt.y = (s.y - Y - l.y) * e + l.y), $t(), a ? t.style.opacity = 1 - e : It(h - e * h)
                            };
                        n ? ie("initialZoom", 0, 1, c, o.easing.cubic.out, f, u) : (f(1), Ge = setTimeout(u, c + 20))
                    } else y = e.initialZoomLevel, Yt(mt, e.initialPosition), $t(), It(1), a ? t.style.opacity = 1 : It(1), Ge = setTimeout(u, c + 20)
                }, i ? 25 : 90)
            };
            f()
        },
        on = {},
        rn = [],
        an = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return Ze.length
            }
        },
        sn = function() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        },
        ln = function(t, e, n) {
            var i = t.bounds;
            i.center.x = Math.round((on.x - e) / 2), i.center.y = Math.round((on.y - n) / 2) + t.vGap.top, i.max.x = e > on.x ? Math.round(on.x - e) : i.center.x, i.max.y = n > on.y ? Math.round(on.y - n) + t.vGap.top : i.center.y, i.min.x = e > on.x ? 0 : i.center.x, i.min.y = n > on.y ? t.vGap.top : i.center.y
        },
        cn = function(t, e, n) {
            if (t.src && !t.loadError) {
                var i = !n;
                if (i && (t.vGap || (t.vGap = {
                        top: 0,
                        bottom: 0
                    }), Mt("parseVerticalMargin", t)), on.x = e.x, on.y = e.y - t.vGap.top - t.vGap.bottom, i) {
                    var o = on.x / t.w,
                        r = on.y / t.h;
                    t.fitRatio = o < r ? o : r;
                    var a = l.scaleMode;
                    "orig" === a ? n = 1 : "fit" === a && (n = t.fitRatio), n > 1 && (n = 1), t.initialZoomLevel = n, t.bounds || (t.bounds = sn())
                }
                if (!n) return;
                return ln(t, t.w * n, t.h * n), i && n === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
            }
            return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = sn(), t.initialPosition = t.bounds.center, t.bounds
        },
        un = function(t, e, n, i, o, a) {
            e.loadError || i && (e.imageAppended = !0, fn(e, i, e === r.currItem && Ct), n.appendChild(i), a && setTimeout(function() {
                e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
            }, 500))
        },
        dn = function(t) {
            t.loading = !0, t.loaded = !1;
            var e = t.img = o.createEl("pswp__img", "img"),
                n = function() {
                    t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                };
            return e.onload = n, e.onerror = function() {
                t.loadError = !0, n()
            }, e.src = t.src, e
        },
        hn = function(t, e) {
            if (t.src && t.loadError && t.container) return e && (t.container.innerHTML = ""), t.container.innerHTML = l.errorMsg.replace("%url%", t.src), !0
        },
        fn = function(t, e, n) {
            if (t.src) {
                e || (e = t.container.lastChild);
                var i = n ? t.w : Math.round(t.w * t.fitRatio),
                    o = n ? t.h : Math.round(t.h * t.fitRatio);
                t.placeholder && !t.loaded && (t.placeholder.style.width = i + "px", t.placeholder.style.height = o + "px"), e.style.width = i + "px", e.style.height = o + "px"
            }
        },
        pn = function() {
            if (rn.length) {
                for (var t, e = 0; e < rn.length; e++) t = rn[e], t.holder.index === t.index && un(t.index, t.item, t.baseDiv, t.img, !1, t.clearPlaceholder);
                rn = []
            }
        };
    kt("Controller", {
        publicMethods: {
            lazyLoadItem: function(t) {
                t = St(t);
                var e = Je(t);
                e && (!e.loaded && !e.loading || T) && (Mt("gettingData", t, e), e.src && dn(e))
            },
            initController: function() {
                o.extend(l, an, !0), r.items = Ze = n, Je = r.getItemAt, tn = l.getNumItemsFn, en = l.loop, tn() < 3 && (l.loop = !1), Et("beforeChange", function(t) {
                    var e, n = l.preload,
                        i = null === t || t >= 0,
                        o = Math.min(n[0], tn()),
                        a = Math.min(n[1], tn());
                    for (e = 1; e <= (i ? a : o); e++) r.lazyLoadItem(h + e);
                    for (e = 1; e <= (i ? o : a); e++) r.lazyLoadItem(h - e)
                }), Et("initialLayout", function() {
                    r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(h)
                }), Et("mainScrollAnimComplete", pn), Et("initialZoomInEnd", pn), Et("destroy", function() {
                    for (var t, e = 0; e < Ze.length; e++) t = Ze[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                    rn = null
                })
            },
            getItemAt: function(t) {
                return t >= 0 && void 0 !== Ze[t] && Ze[t]
            },
            allowProgressiveImg: function() {
                return l.forceProgressiveLoading || !A || l.mouseUsed || screen.width > 1200
            },
            setContent: function(t, e) {
                l.loop && (e = St(e));
                var n = r.getItemAt(t.index);
                n && (n.container = null);
                var i, a = r.getItemAt(e);
                if (!a) return void(t.el.innerHTML = "");
                Mt("gettingData", e, a), t.index = e, t.item = a;
                var s = a.container = o.createEl("pswp__zoom-wrap");
                if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html), hn(a), cn(a, gt), !a.src || a.loadError || a.loaded) a.src && !a.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = a.src, fn(a, i), un(e, a, s, i, !0));
                else {
                    if (a.loadComplete = function(n) {
                            if (c) {
                                if (t && t.index === e) {
                                    if (hn(n, !0)) return n.loadComplete = n.img = null, cn(n, gt), Pt(n), void(t.index === h && r.updateCurrZoomItem());
                                    n.imageAppended ? !Qe && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : j.transform && (rt || Qe) ? rn.push({
                                        item: n,
                                        baseDiv: s,
                                        img: n.img,
                                        index: e,
                                        holder: t,
                                        clearPlaceholder: !0
                                    }) : un(e, n, s, n.img, rt || Qe, !0)
                                }
                                n.loadComplete = null, n.img = null, Mt("imageLoadComplete", e, n)
                            }
                        }, o.features.transform) {
                        var u = "pswp__img pswp__img--placeholder";
                        u += a.msrc ? "" : " pswp__img--placeholder--blank";
                        var d = o.createEl(u, a.msrc ? "img" : "");
                        a.msrc && (d.src = a.msrc), fn(a, d), s.appendChild(d), a.placeholder = d
                    }
                    a.loading || dn(a), r.allowProgressiveImg() && (!Ke && j.transform ? rn.push({
                        item: a,
                        baseDiv: s,
                        img: a.img,
                        index: e,
                        holder: t
                    }) : un(e, a, s, a.img, !0, !0))
                }
                Ke || e !== h ? Pt(a) : (ot = s.style, nn(a, i || a.img)), t.el.innerHTML = "", t.el.appendChild(s)
            },
            cleanSlide: function(t) {
                t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
            }
        }
    });
    var mn, gn = {},
        vn = function(t, e, n) {
            var i = document.createEvent("CustomEvent"),
                o = {
                    origEvent: t,
                    target: t.target,
                    releasePoint: e,
                    pointerType: n || "touch"
                };
            i.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(i)
        };
    kt("Tap", {
        publicMethods: {
            initTap: function() {
                Et("firstTouchStart", r.onTapStart), Et("touchRelease", r.onTapRelease), Et("destroy", function() {
                    gn = {}, mn = null
                })
            },
            onTapStart: function(t) {
                t.length > 1 && (clearTimeout(mn), mn = null)
            },
            onTapRelease: function(t, e) {
                if (e && !Z && !V && !Jt) {
                    var n = e;
                    if (mn && (clearTimeout(mn), mn = null, Te(n, gn))) return void Mt("doubleTap", n);
                    if ("mouse" === e.type) return void vn(t, e, "mouse");
                    var i = t.target.tagName.toUpperCase();
                    if ("BUTTON" === i || o.hasClass(t.target, "pswp__single-tap")) return void vn(t, e);
                    Yt(gn, n), mn = setTimeout(function() {
                        vn(t, e), mn = null
                    }, 300)
                }
            }
        }
    });
    var yn;
    kt("DesktopZoom", {
        publicMethods: {
            initDesktopZoom: function() {
                L || (A ? Et("mouseUsed", function() {
                    r.setupDesktopZoom()
                }) : r.setupDesktopZoom(!0))
            },
            setupDesktopZoom: function(e) {
                yn = {};
                var n = "wheel mousewheel DOMMouseScroll";
                Et("bindEvents", function() {
                    o.bind(t, n, r.handleMouseWheel)
                }), Et("unbindEvents", function() {
                    yn && o.unbind(t, n, r.handleMouseWheel)
                }), r.mouseZoomedIn = !1;
                var i, a = function() {
                        r.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), r.mouseZoomedIn = !1), y < 1 ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
                    },
                    s = function() {
                        i && (o.removeClass(t, "pswp--dragging"), i = !1)
                    };
                Et("resize", a), Et("afterChange", a), Et("pointerDown", function() {
                    r.mouseZoomedIn && (i = !0, o.addClass(t, "pswp--dragging"))
                }), Et("pointerUp", s), e || a()
            },
            handleMouseWheel: function(t) {
                if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Jt || X ? t.preventDefault() : O && Math.abs(t.deltaY) > 2 && (d = !0, r.close())), !0;
                if (t.stopPropagation(), yn.x = 0, "deltaX" in t) 1 === t.deltaMode ? (yn.x = 18 * t.deltaX, yn.y = 18 * t.deltaY) : (yn.x = t.deltaX, yn.y = t.deltaY);
                else if ("wheelDelta" in t) t.wheelDeltaX && (yn.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? yn.y = -.16 * t.wheelDeltaY : yn.y = -.16 * t.wheelDelta;
                else {
                    if (!("detail" in t)) return;
                    yn.y = t.detail
                }
                zt(y, !0);
                var e = mt.x - yn.x,
                    n = mt.y - yn.y;
                (l.modal || e <= it.min.x && e >= it.max.x && n <= it.min.y && n >= it.max.y) && t.preventDefault(), r.panTo(e, n)
            },
            toggleDesktopZoom: function(e) {
                e = e || {
                    x: gt.x / 2 + yt.x,
                    y: gt.y / 2 + yt.y
                };
                var n = l.getDoubleTapZoom(!0, r.currItem),
                    i = y === n;
                r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, e, 333), o[(i ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
            }
        }
    });
    var wn, bn, xn, _n, Tn, Cn, kn, Sn, Dn, En, Mn, On, In = {
            history: !0,
            galleryUID: 1
        },
        An = function() {
            return Mn.hash.substring(1)
        },
        $n = function() {
            wn && clearTimeout(wn), xn && clearTimeout(xn)
        },
        Pn = function() {
            var t = An(),
                e = {};
            if (t.length < 5) return e;
            var n, i = t.split("&");
            for (n = 0; n < i.length; n++)
                if (i[n]) {
                    var o = i[n].split("=");
                    o.length < 2 || (e[o[0]] = o[1])
                } if (l.galleryPIDs) {
                var r = e.pid;
                for (e.pid = 0, n = 0; n < Ze.length; n++)
                    if (Ze[n].pid === r) {
                        e.pid = n;
                        break
                    }
            } else e.pid = parseInt(e.pid, 10) - 1;
            return e.pid < 0 && (e.pid = 0), e
        },
        Nn = function() {
            if (xn && clearTimeout(xn), Jt || X) return void(xn = setTimeout(Nn, 500));
            _n ? clearTimeout(bn) : _n = !0;
            var t = h + 1,
                e = Je(h);
            e.hasOwnProperty("pid") && (t = e.pid);
            var n = kn + "&gid=" + l.galleryUID + "&pid=" + t;
            Sn || Mn.hash.indexOf(n) === -1 && (En = !0);
            var i = Mn.href.split("#")[0] + "#" + n;
            On ? "#" + n !== window.location.hash && history[Sn ? "replaceState" : "pushState"]("", document.title, i) : Sn ? Mn.replace(i) : Mn.hash = n, Sn = !0, bn = setTimeout(function() {
                _n = !1
            }, 60)
        };
    kt("History", {
        publicMethods: {
            initHistory: function() {
                if (o.extend(l, In, !0), l.history) {
                    Mn = window.location, En = !1, Dn = !1, Sn = !1, kn = An(), On = "pushState" in history, kn.indexOf("gid=") > -1 && (kn = kn.split("&gid=")[0], kn = kn.split("?gid=")[0]), Et("afterChange", r.updateURL), Et("unbindEvents", function() {
                        o.unbind(window, "hashchange", r.onHashChange)
                    });
                    var t = function() {
                        Cn = !0, Dn || (En ? history.back() : kn ? Mn.hash = kn : On ? history.pushState("", document.title, Mn.pathname + Mn.search) : Mn.hash = ""), $n()
                    };
                    Et("unbindEvents", function() {
                        d && t()
                    }), Et("destroy", function() {
                        Cn || t()
                    }), Et("firstUpdate", function() {
                        h = Pn().pid
                    });
                    var e = kn.indexOf("pid=");
                    e > -1 && (kn = kn.substring(0, e), "&" === kn.slice(-1) && (kn = kn.slice(0, -1))), setTimeout(function() {
                        c && o.bind(window, "hashchange", r.onHashChange)
                    }, 40)
                }
            },
            onHashChange: function() {
                return An() === kn ? (Dn = !0, void r.close()) : void(_n || (Tn = !0, r.goTo(Pn().pid), Tn = !1))
            },
            updateURL: function() {
                $n(), Tn || (Sn ? wn = setTimeout(Nn, 800) : Nn())
            }
        }
    }), o.extend(r, oe)
};
return t
}), ! function(t, e) {
"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
}(this, function() {
"use strict";
var t = function(t, e) {
    var n, i, o, r, a, s, l, c, u, d, h, f, p, m, g, v, y, w, b, x = this,
        _ = !1,
        T = !0,
        C = !0,
        k = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(t, e) {
                return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }],
            getImageURLForShare: function() {
                return t.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return t.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        },
        S = function(t) {
            if (v) return !0;
            t = t || window.event, g.timeToIdle && g.mouseUsed && !u && R();
            for (var n, i, o = t.target || t.srcElement, r = o.getAttribute("class") || "", a = 0; a < z.length; a++) n = z[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
            if (i) {
                t.stopPropagation && t.stopPropagation(), v = !0;
                var s = e.features.isOldAndroid ? 600 : 30;
                y = setTimeout(function() {
                    v = !1
                }, s)
            }
        },
        D = function() {
            return !t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
        },
        E = function(t, n, i) {
            e[(i ? "add" : "remove") + "Class"](t, "pswp__" + n)
        },
        M = function() {
            var t = 1 === g.getNumItemsFn();
            t !== m && (E(i, "ui--one-slide", t), m = t)
        },
        O = function() {
            E(l, "share-modal--hidden", C)
        },
        I = function() {
            return C = !C, C ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                C && O()
            }, 300)) : (O(), setTimeout(function() {
                C || e.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), C || $(), !1
        },
        A = function(e) {
            e = e || window.event;
            var n = e.target || e.srcElement;
            return t.shout("shareLinkClick", e, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || I(), 1))
        },
        $ = function() {
            for (var t, e, n, i, o, r = "", a = 0; a < g.shareButtons.length; a++) t = g.shareButtons[a], n = g.getImageURLForShare(t), i = g.getPageURLForShare(t), o = g.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(t, r));
            l.children[0].innerHTML = r, l.children[0].onclick = A
        },
        P = function(t) {
            for (var n = 0; n < g.closeElClasses.length; n++)
                if (e.hasClass(t, "pswp__" + g.closeElClasses[n])) return !0
        },
        N = 0,
        R = function() {
            clearTimeout(b), N = 0, u && x.setIdle(!1)
        },
        L = function(t) {
            t = t ? t : window.event;
            var e = t.relatedTarget || t.toElement;
            e && "HTML" !== e.nodeName || (clearTimeout(b), b = setTimeout(function() {
                x.setIdle(!0)
            }, g.timeToIdleOutside))
        },
        Y = function() {
            g.fullscreenEl && !e.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (e.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"))
        },
        j = function() {
            g.preloaderEl && (H(!0), d("beforeChange", function() {
                clearTimeout(p), p = setTimeout(function() {
                    t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && H(!1) : H(!0)
                }, g.loadingIndicatorDelay)
            }), d("imageLoadComplete", function(e, n) {
                t.currItem === n && H(!0)
            }))
        },
        H = function(t) {
            f !== t && (E(h, "preloader--active", !t), f = t)
        },
        F = function(t) {
            var n = t.vGap;
            if (D()) {
                var a = g.barsSize;
                if (g.captionEl && "auto" === a.bottom)
                    if (r || (r = e.createEl("pswp__caption pswp__caption--fake"), r.appendChild(e.createEl("pswp__caption__center")), i.insertBefore(r, o), e.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(t, r, !0)) {
                        var s = r.clientHeight;
                        n.bottom = parseInt(s, 10) || 44
                    } else n.bottom = a.top;
                else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                n.top = a.top
            } else n.top = n.bottom = 0
        },
        W = function() {
            g.timeToIdle && d("mouseUsed", function() {
                e.bind(document, "mousemove", R), e.bind(document, "mouseout", L), w = setInterval(function() {
                    N++, 2 === N && x.setIdle(!0)
                }, g.timeToIdle / 2)
            })
        },
        U = function() {
            d("onVerticalDrag", function(t) {
                T && t < .95 ? x.hideControls() : !T && t >= .95 && x.showControls()
            });
            var t;
            d("onPinchClose", function(e) {
                T && e < .9 ? (x.hideControls(), t = !0) : t && !T && e > .9 && x.showControls()
            }), d("zoomGestureEnded", function() {
                t = !1, t && !T && x.showControls()
            })
        },
        z = [{
            name: "caption",
            option: "captionEl",
            onInit: function(t) {
                o = t
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(t) {
                l = t
            },
            onTap: function() {
                I()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(t) {
                s = t
            },
            onTap: function() {
                I()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: t.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(t) {
                a = t
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: t.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: t.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: t.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(t) {
                h = t
            }
        }],
        q = function() {
            var t, n, o, r = function(i) {
                if (i)
                    for (var r = i.length, a = 0; a < r; a++) {
                        t = i[a], n = t.className;
                        for (var s = 0; s < z.length; s++) o = z[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                    }
            };
            r(i.children);
            var a = e.getChildByClass(i, "pswp__top-bar");
            a && r(a.children)
        };
    x.init = function() {
        e.extend(t.options, k, !0), g = t.options, i = e.getChildByClass(t.scrollWrap, "pswp__ui"), d = t.listen, U(), d("beforeChange", x.update), d("doubleTap", function(e) {
            var n = t.currItem.initialZoomLevel;
            t.getZoomLevel() !== n ? t.zoomTo(n, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
        }), d("preventDragEvent", function(t, e, n) {
            var i = t.target || t.srcElement;
            i && i.getAttribute("class") && t.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
        }), d("bindEvents", function() {
            e.bind(i, "pswpTap click", S), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
        }), d("unbindEvents", function() {
            C || I(), w && clearInterval(w), e.unbind(document, "mouseout", L), e.unbind(document, "mousemove", R), e.unbind(i, "pswpTap click", S), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), n && (e.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
        }), d("destroy", function() {
            g.captionEl && (r && i.removeChild(r), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(i, "pswp__ui--over-close"), e.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
        }), g.showAnimationDuration || e.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function() {
            g.showAnimationDuration && e.removeClass(i, "pswp__ui--hidden")
        }), d("initialZoomOut", function() {
            e.addClass(i, "pswp__ui--hidden")
        }), d("parseVerticalMargin", F), q(), g.shareEl && s && l && (C = !0), M(), W(), Y(), j()
    }, x.setIdle = function(t) {
        u = t, E(i, "ui--idle", t)
    }, x.update = function() {
        T && t.currItem ? (x.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, o), E(o, "caption--empty", !t.currItem.title)), _ = !0) : _ = !1, C || I(), M()
    }, x.updateFullscreen = function(i) {
        i && setTimeout(function() {
            t.setScrollOffset(0, e.getScrollY())
        }, 50), e[(n.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
    }, x.updateIndexIndicator = function() {
        g.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
    }, x.onGlobalTap = function(n) {
        n = n || window.event;
        var i = n.target || n.srcElement;
        if (!v)
            if (n.detail && "mouse" === n.detail.pointerType) {
                if (P(i)) return void t.close();
                e.hasClass(i, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(n.detail.releasePoint))
            } else if (g.tapToToggleControls && (T ? x.hideControls() : x.showControls()), g.tapToClose && (e.hasClass(i, "pswp__img") || P(i))) return void t.close()
    }, x.onMouseOver = function(t) {
        t = t || window.event;
        var e = t.target || t.srcElement;
        E(i, "ui--over-close", P(e))
    }, x.hideControls = function() {
        e.addClass(i, "pswp__ui--hidden"), T = !1
    }, x.showControls = function() {
        T = !0, _ || x.update(), e.removeClass(i, "pswp__ui--hidden")
    }, x.supportsFullscreen = function() {
        var t = document;
        return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
    }, x.getFullscreenAPI = function() {
        var e, n = document.documentElement,
            i = "fullscreenchange";
        return n.requestFullscreen ? e = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: i
        } : n.mozRequestFullScreen ? e = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + i
        } : n.webkitRequestFullscreen ? e = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + i
        } : n.msRequestFullscreen && (e = {
            enterK: "msRequestFullscreen",
            exitK: "msExitFullscreen",
            elementK: "msFullscreenElement",
            eventK: "MSFullscreenChange"
        }), e && (e.enter = function() {
            return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
        }, e.exit = function() {
            return g.closeOnScroll = c, document[this.exitK]()
        }, e.isFullscreen = function() {
            return document[this.elementK]
        }), e
    }
};
return t
}),
function(t) {
t.fn.flexisel = function(e) {
    var n, i, o, r, a = t.extend({
            visibleItems: 4,
            itemsToScroll: 3,
            animationSpeed: 400,
            infinite: !0,
            navigationTargetSelector: null,
            autoPlay: {
                enable: !1,
                interval: 5e3,
                pauseOnHover: !0
            },
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1,
                    itemsToScroll: 1
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2,
                    itemsToScroll: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3,
                    itemsToScroll: 3
                }
            }
        }, e),
        s = t(this),
        l = t.extend(a, e),
        c = !0,
        u = l.visibleItems,
        d = l.itemsToScroll,
        h = [],
        f = {
            init: function() {
                return this.each(function() {
                    f.appendHTML(), f.setEventHandlers(), f.initializeItems()
                })
            },
            initializeItems: function() {
                var e = l.responsiveBreakpoints;
                for (var o in e) h.push(e[o]);
                h.sort(function(t, e) {
                    return t.changePoint - e.changePoint
                });
                var r = s.children();
                n = f.getCurrentItemWidth(), i = r.length, r.width(n), s.css({
                    left: -n * (u + 1)
                }), s.fadeIn(), t(window).trigger("resize")
            },
            appendHTML: function() {
                if (s.addClass("nbs-flexisel-ul"), s.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>"), s.find("li").addClass("nbs-flexisel-item"), l.navigationTargetSelector && t(l.navigationTargetSelector).length > 0 ? t("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").appendTo(l.navigationTargetSelector) : (l.navigationTargetSelector = s.parent(), t("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(s)), l.infinite) {
                    var e = s.children(),
                        n = e.clone(),
                        i = e.clone();
                    s.prepend(n), s.append(i)
                }
            },
            setEventHandlers: function() {
                var e = s.children();
                t(window).on("resize", function(i) {
                    clearTimeout(o), o = setTimeout(function() {
                        f.calculateDisplay(), n = f.getCurrentItemWidth(), e.width(n), l.infinite ? s.css({
                            left: -n * Math.floor(e.length / 2)
                        }) : (f.clearDisabled(), t(l.navigationTargetSelector).find(".nbs-flexisel-nav-left").addClass("disabled"), s.css({
                            left: 0
                        }))
                    }, 100)
                }), t(l.navigationTargetSelector).find(".nbs-flexisel-nav-left").on("click", function(t) {
                    f.scroll(!0)
                }), t(l.navigationTargetSelector).find(".nbs-flexisel-nav-right").on("click", function(t) {
                    f.scroll(!1)
                }), l.autoPlay.enable && (f.setAutoplayInterval(), l.autoPlay.pauseOnHover === !0 && s.on({
                    mouseenter: function() {
                        c = !1
                    },
                    mouseleave: function() {
                        c = !0
                    }
                })), s[0].addEventListener("touchstart", f.touchHandler.handleTouchStart, !1), s[0].addEventListener("touchmove", f.touchHandler.handleTouchMove, !1)
            },
            calculateDisplay: function() {
                var e = t("html").width(),
                    n = h[h.length - 1].changePoint;
                for (var i in h) {
                    if (e >= n) {
                        u = l.visibleItems, d = l.itemsToScroll;
                        break
                    }
                    if (e < h[i].changePoint) {
                        u = h[i].visibleItems, d = h[i].itemsToScroll;
                        break
                    }
                }
            },
            scroll: function(t) {
                if ("undefined" == typeof t && (t = !0), 1 == c) {
                    if (c = !1, n = f.getCurrentItemWidth(), l.autoPlay.enable && clearInterval(r), l.infinite) s.animate({
                        left: t ? "+=" + n * d : "-=" + n * d
                    }, l.animationSpeed, function() {
                        c = !0, t ? f.offsetItemsToBeginning(d) : f.offsetItemsToEnd(d), f.offsetSliderPosition(t)
                    });
                    else {
                        var e = n * d;
                        t ? s.animate({
                            left: f.calculateNonInfiniteLeftScroll(e)
                        }, l.animationSpeed, function() {
                            c = !0
                        }) : s.animate({
                            left: f.calculateNonInfiniteRightScroll(e)
                        }, l.animationSpeed, function() {
                            c = !0
                        })
                    }
                    l.autoPlay.enable && f.setAutoplayInterval()
                }
            },
            touchHandler: {
                xDown: null,
                yDown: null,
                handleTouchStart: function(t) {
                    this.xDown = t.touches[0].clientX, this.yDown = t.touches[0].clientY
                },
                handleTouchMove: function(t) {
                    if (this.xDown && this.yDown) {
                        var e = t.touches[0].clientX,
                            n = t.touches[0].clientY,
                            i = this.xDown - e;
                        this.yDown - n;
                        Math.abs(i) > 0 && (i > 0 ? f.scroll(!1) : f.scroll(!0)), this.xDown = null, this.yDown = null, c = !0
                    }
                }
            },
            getCurrentItemWidth: function() {
                return s.parent().width() / u
            },
            offsetItemsToBeginning: function(t) {
                "undefined" == typeof t && (t = 1);
                for (var e = 0; e < t; e++) s.children().last().insertBefore(s.children().first())
            },
            offsetItemsToEnd: function(t) {
                "undefined" == typeof t && (t = 1);
                for (var e = 0; e < t; e++) s.children().first().insertAfter(s.children().last())
            },
            offsetSliderPosition: function(t) {
                var e = parseInt(s.css("left").replace("px", ""));
                t ? e -= n * d : e += n * d, s.css({
                    left: e
                })
            },
            getOffsetPosition: function() {
                return parseInt(s.css("left").replace("px", ""))
            },
            calculateNonInfiniteLeftScroll: function(e) {
                return f.clearDisabled(), f.getOffsetPosition() + e >= 0 ? (t(l.navigationTargetSelector).find(".nbs-flexisel-nav-left").addClass("disabled"), 0) : f.getOffsetPosition() + e
            },
            calculateNonInfiniteRightScroll: function(e) {
                f.clearDisabled();
                var o = i * n - u * n;
                return f.getOffsetPosition() - e <= -o ? (t(l.navigationTargetSelector).find(".nbs-flexisel-nav-right").addClass("disabled"), -o) : f.getOffsetPosition() - e
            },
            setAutoplayInterval: function() {
                r = setInterval(function() {
                    c && f.scroll(!1)
                }, l.autoPlay.interval)
            },
            clearDisabled: function() {
                var e = t(l.navigationTargetSelector);
                e.find(".nbs-flexisel-nav-left").removeClass("disabled"), e.find(".nbs-flexisel-nav-right").removeClass("disabled")
            }
        };
    return f[e] ? f[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error('Method "' + method + '" does not exist in flexisel plugin!') : f.init.apply(this)
}
}(jQuery);
var SMALL_WIDTH = 767;
window.onresize = navigationResize, $(document).ready(function() {
setTimeout(function() {
    navigationResize()
}, 500)
});
var openPhotoSwipe = function(t, e) {
var n = document.querySelectorAll(".pswp")[0],
    i = {
        history: !1,
        index: e,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    },
    o = new PhotoSwipe(n, PhotoSwipeUI_Default, t, i);
o.listen("gettingData", function(t, e) {
    if (e.w < 1 || e.h < 1) {
        var n = new Image;
        n.onload = function() {
            e.w = this.width, e.h = this.height, o.invalidateCurrItems(), o.updateSize(!0)
        }, n.src = e.src
    }
}), o.init()
};
jQuery.fn.extend({
ContentPhotoSwipe: function() {
    var t = $(this);
    t.append(spwp_root_element());
    var e = new Array,
        n = t.find("img.lozad");
    n.each(function(t) {
        $(this).parent("a").length || $(this).css({
            cursor: "zoom-in"
        });
        var n = $(this).attr("data-src").includes("_large");
        if (n) var i = $(this).attr("data-src").replace("_large.", ".");
        else var i = $(this).attr("data-src").replace("_medium.", ".");
        var o = {
            src: i,
            w: 0,
            h: 0
        };
        e.push(o)
    }), t.find("img").on("click", function() {
        var t = n.index($(this));
        $(this).parent("a").length ? console.log("image has link") : openPhotoSwipe(e, t)
    })
}
});
var TIMER = 5,
timeout, hover = !0;
! function(t) {
t(document).ready(function() {})
}(jQuery),
function(t) {
t.fn.preload = function() {
    this.each(function(t, e) {})
}
}(jQuery);
const CAMPAIGN_OPTION_HALF = "half",
CAMPAIGN_OPTION_FULL = "full",
CAMPAIGN_OPTION_SPECIAL = "special",
CAMPAIGN_OPTION_INHOUSE = "inhouse",
CAMPAIGN_OPTION_PREMIUM = "premium",
PREMIUM_OPTION_ARTICLE = "article",
PREMIUM_OPTION_POPUP = "popup",
SCREEN_DESKTOP = "desktop",
SCREEN_MOBILE = "mobile",
UNDEFINED = "undefined";
SBAdvertisement = function(t) {
this.init(t)
}, $.extend(SBAdvertisement.prototype, {
"default": {
    app_code: null,
    default_ads: null,
    gateway_banners: null,
    menu_ads: null,
    tag_ads: null,
    is_landing_page: !1,
    is_menu_page: !1,
    is_tag_page: !1,
    is_article_page: !1,
    curent_category: null,
    curent_tag: null,
    curent_tags: [],
    current_post: null
},
options: new Object,
init: function(t) {
    this.options = this.merge(this["default"], t)
},
merge: function(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
},
consoleOptions: function() {},
is_expired: function(t) {
    var e = (new moment).valueOf(),
        t = new moment.utc(t).valueOf();
    return e >= t
},
replace_sponsor_ads: function(t) {
    var e = this.options.default_ads;
    if (!(e.length < 3)) {
        var n = t[0].campaign.end_date;
        if (!this.is_expired(n)) switch (t[0].campaign.option) {
            case CAMPAIGN_OPTION_HALF:
                e[2] = t[0];
                break;
            case CAMPAIGN_OPTION_FULL:
                e[1] = t[0], e[2] = t[0];
                break;
            case CAMPAIGN_OPTION_SPECIAL:
                e[0] = t[0], e[1] = t[1], e[2] = t[1], this.replace_special_gateway_banners();
                break;
            case CAMPAIGN_OPTION_INHOUSE:
                e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], this.generate_premium_campaign(t);
                break;
            case CAMPAIGN_OPTION_PREMIUM:
                var i = t[0].campaign.param.premium_option,
                    o = t[0].campaign.param.is_underlay;
                if (i == PREMIUM_OPTION_POPUP) var r = t[0].campaign.param.popup_option;
                else var r = "";
                i == PREMIUM_OPTION_ARTICLE ? o ? e[4] = t[0] : e[6] = t[0] : i == PREMIUM_OPTION_POPUP ? r == SCREEN_DESKTOP ? e[7] = t[0] : r == SCREEN_MOBILE ? e[8] = t[0] : (e[7] = t[0], e[8] = t[1]) : (o ? e[4] = t[0] : e[6] = t[0], r == SCREEN_DESKTOP ? e[7] = t[1] : r == SCREEN_MOBILE ? e[8] = t[1] : (e[7] = t[1], e[8] = t[2]))
        }
    }
},
replace_special_gateway_banners: function() {
    var t = this.options.gateway_banners;
    $.each(t, function(e, n) {
        typeof n !== UNDEFINED && "special" != n.campaign.option && t.splice(e, 1)
    })
},
handle_menu_page: function() {
    var t = this.options.curent_category;
    t && (this.handle_menu_sponsor(t), this.handle_exclude_menu())
},
handle_menu_sponsor: function(t) {
    var e = t.id,
        n = this.options.menu_ads;
    return typeof n[e] !== UNDEFINED && (menu_ad = n[e], this.replace_sponsor_ads(menu_ad), !0)
},
handle_tag_page: function() {
    var t = this.options.curent_tag;
    t && (this.options.curent_tags[0] = t, this.handle_tag_sponsor(t), this.handle_exclude_tag())
},
handle_tag_sponsor: function(t) {
    var e = this.options.tag_ads;
    return typeof e[t.id] !== UNDEFINED && (tag_ad = e[t.id], this.replace_sponsor_ads(tag_ad), !0)
},
handle_article_page: function() {
    var t = this.options.current_post;
    if (t) {
        var e = t.tags,
            n = !1,
            i = this;
        if (e.length > 0 && (this.options.curent_tags = e, $.each(e, function(t, e) {
                if (n = i.handle_tag_sponsor(e)) return !1
            })), this.handle_exclude_content(), this.handle_exclude_tags(), !n) {
            var o = this.options.app_code,
                r = t.menus[o];
            this.options.curent_category = r, this.handle_menu_sponsor(r), this.handle_exclude_menu()
        }
    }
},
ad_zone_handler: function() {
    this.options.is_menu_page ? this.handle_menu_page() : this.options.is_tag_page ? this.handle_tag_page() : this.options.is_article_page && this.handle_article_page()
},
display: function() {
    for (this.ad_zone_handler(), i = 0; i < this.options.default_ads.length; i++) {
        var t = i + 1;
        t < 10 && (t = "0" + t), this.create_ads("ad_zone_" + t, this.options.default_ads[i].zone)
    }
    if (this.options.gateway_banners.length > 0)
        for (i = 0; i < this.options.gateway_banners.length; i++) {
            var t = i + 1;
            t < 10 && (t = "0" + t), this.create_ads("gateway_banner_" + t, this.options.gateway_banners[i].campaign.gateway_banner)
        } else $(".gateway-banner").remove()
},
create_ads: function(t, e) {
    if ("ad_zone_08" == t || "ad_zone_09" == t) var n = $("body").find("#" + t);
    else var n = $("body").find("#" + t + ":visible");
    typeof e != UNDEFINED && e && n.attr("zone", e).html(this.template(e))
},
template: function(t) {
    return '<ins data-revive-zoneid="' + t + '"  data-revive-id="4b9ca95baee4430ad25d6d07da6464a5"></ins><script async src="//ads.sabay.com/openx/www/delivery/asyncjs.php">'
},
handle_exclude_menu: function() {
    var t = this,
        e = [];
    if (t.options.gateway_banners.length > 0)
        for (var n = 0; n < t.options.gateway_banners.length; n++) {
            var i = t.options.gateway_banners[n],
                o = t.options.curent_category.id;
            if (typeof i != UNDEFINED) {
                var r = i.campaign.param.exclude_menu_ids;
                r.includes(o.toString()) || e.push(i)
            }
        }
    this.options.gateway_banners = e
},
handle_exclude_tag: function() {
    var t = this,
        e = [];
    if (t.options.gateway_banners.length > 0)
        for (var n = 0; n < t.options.gateway_banners.length; n++) {
            var i = t.options.gateway_banners[n],
                o = t.options.curent_tags[0].id;
            if (typeof i != UNDEFINED) {
                var r = i.campaign.param.exclude_tag_ids;
                r.includes(o.toString()) || e.push(i)
            }
        }
    this.options.gateway_banners = e
},
handle_exclude_tags: function() {
    var t = !1,
        e = this,
        n = [];
    if (e.options.gateway_banners.length > 0)
        for (var i = 0; i < e.options.gateway_banners.length; i++) {
            var o = e.options.gateway_banners[i];
            if (typeof o != UNDEFINED)
                for (var r = o.campaign.param.exclude_tag_ids, a = 0; a < e.options.curent_tags.length; a++) {
                    var s = e.options.curent_tags[a],
                        l = e.handle_tag_sponsor(s);
                    l && (t = !0, r.includes(s.id.toString()) || n.push(o))
                }
        }
    t ? this.options.gateway_banners = n : this.options.gateway_banners = this.options.gateway_banners
},
handle_exclude_content: function() {
    var t = this;
    $.each(t.options.gateway_banners, function(e, n) {
        if (typeof n != UNDEFINED) {
            var i = n.campaign.param.exclude_content_ids,
                o = t.options.current_post.id;
            i.includes(o.toString()) && t.options.gateway_banners.splice(e, 1)
        }
    }), this.options.gateway_banners = t.options.gateway_banners
},
generate_premium_campaign: function(t) {
    for (i = 0; i < t.length; i++)
        if (t[i].campaign.option == CAMPAIGN_OPTION_PREMIUM) {
            var e = t[i].campaign.param.premium_option,
                n = t[i].campaign.param.is_underlay;
            if (e == SCREEN_DESKTOP) var o = t[i].campaign.param.popup_option;
            else var o = "";
            e == PREMIUM_OPTION_ARTICLE ? n ? default_ads[4] = t[i] : default_ads[6] = t[i] : e == PREMIUM_OPTION_POPUP ? o == SCREEN_DESKTOP ? default_ads[7] = t[i] : o == SCREEN_MOBILE ? default_ads[8] = t[i] : (default_ads[7] = t[i], default_ads[8] = t[i + 1]) : (n ? default_ads[4] = t[i] : default_ads[6] = t[i], o == SCREEN_DESKTOP ? default_ads[7] = t[i + 1] : o == SCREEN_MOBILE ? default_ads[8] = t[i + 1] : (default_ads[7] = t[i + 1], default_ads[8] = t[i + 2]));
            break
        }
}
}), $("#ads-close").click(function() {
return $(this).parent().remove(), !1
});
var space = !1,
waypoint;
$(".onoffswitch-wrapper").click(function() {
piwikTrackGoal(7), zero_space(!1)
}), $(document).ready(function() {
var t = $("body").width() <= 480,
    e = "#utm_campaign=fb",
    n = $("#fb_share_top"),
    i = n.attr("rel") + e,
    o = $("#fb_share_bottom"),
    r = o.attr("rel") + e,
    a = "",
    s = "";
t ? (a = i + "&utm_term=m.facebook.com", n.attr("rel", a), s = r + "&utm_term=m.facebook.com", o.attr("rel", s)) : (a = i + "&utm_term=www.facebook.com", n.attr("rel", a), s = r + "&utm_term=www.facebook.com", o.attr("rel", s)), $("#fb_share_top").click(function(t) {
    t.preventDefault();
    var e = $(this).attr("rel");
    return FB.ui({
        method: "feed",
        link: e
    }, function(t) {
        t && !t.error_code ? (console.log("OK: " + JSON.stringify(t)), piwikTrackGoal(1)) : t && 4201 === t.error_code ? console.log("User cancelled: " + decodeURIComponent(t.error_message)) : console.log("Not OK: " + JSON.stringify(t))
    }), !1
}), $("#fb_page_like").click(function() {
    piwikTrackGoal(2)
}), $("#fb_share_bottom").click(function(t) {
    t.preventDefault();
    var e = $(this).attr("rel");
    return FB.ui({
        method: "feed",
        link: e
    }, function(t) {
        t && !t.error_code ? (console.log("OK: " + JSON.stringify(t)), piwikTrackGoal(3)) : t && 4201 === t.error_code ? console.log("User cancelled: " + decodeURIComponent(t.error_message)) : console.log("Not OK: " + JSON.stringify(t))
    }), !1
}), $(".right-hot-news .media").click(function() {
    piwikTrackGoal(4)
}), $(".post_tags a.tag").click(function() {
    piwikTrackGoal(6)
}), $("ul.navbar-nav li").click(function() {
    var t = $(this).hasClass("home");
    piwikTrackGoal(t ? 13 : 14)
}), zero_space(!0)
});
var ad_zone_01 = !1,
is_loaded_popup = !0;
jQuery.fn.extend({
loading: function() {
    $(this).append('<div class="loading-content"><i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i></div>')
}
}), window.view_type = "list";
var symbolMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0"
},
numberMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0"
};
moment.updateLocale("km", {
preparse: function(t) {
    return t.replace(/[1234567890]/g, function(t) {
        return numberMap[t]
    })
},
postformat: function(t) {
    return t.replace(/\d/g, function(t) {
        return symbolMap[t]
    })
}
}), $(document).ready(function() {
update_moment(), $(".tab-by-category .nav-tabs li:not(.title, .sponsor) a:not(.switch-view)").on("click", function() {
    $(this).parents(".tab-by-category").find(".nav-tabs li").removeClass("active"), $(this).parent().addClass("active");
    var t = $(this).attr("href"),
        e = $(this).attr("for"),
        n = $(this).parents(".tab-by-category").attr("rel");
    return load_tab_categories(t, e, n), !1
}), $("a.switch-view").on("click", function() {
    var t = $(this).attr("id");
    return window.view_type = t, $("a.switch-view").parent().removeClass("active"), $(this).parent().addClass("active"), update_post_view_type(), !1
}), load_more_posts(), load_first_tab_category(), update_post_view_type(), fixed_menu(), $(window).scroll(function() {
    load_more_posts(), fixed_menu(), load_first_tab_category(), enable_startup_ads()
}), $(window).resize(function() {
    update_post_view_type(), fixed_menu(), load_first_tab_category(), display_content_slideshow()
}), $(".carousel.slide").carousel({
    swipe: 30
}), $("#features_post .item a").hover(function() {
    $(this).find(".content").slideDown({
        queue: !1
    }), $(this).find(".bg").animate({
        opacity: "1"
    }, {
        queue: !1,
        duration: 300
    }), $(this).find(".title").css({
        color: "#F20D18"
    })
}, function() {
    $(this).find(".content").slideUp({
        queue: !1
    }), $(this).find(".bg").animate({
        opacity: "0.5"
    }, {
        queue: !1,
        duration: 300
    }), $(this).find(".title").css({
        color: "#ffffff"
    })
}), $("#menu #search input").focus(function() {
    window.is_search_show || show_search()
}), $("body").click(function(t) {
    $(t.target).closest("#menu #search").length || window.is_search_show && hide_search()
}), $("#menu #search a").click(function() {
    return window.is_search_show ? hide_search() : show_search(),
        !1
}), $("#menu #search form").submit(function() {
    if (!window.is_search_show) return show_search(), $("#menu #search input").focus(), !1
}), display_content_slideshow(), $("#flexiselDemo3").flexisel({
    visibleItems: 3,
    itemsToScroll: 1,
    autoPlay: {
        enable: !1,
        interval: 5e3,
        pauseOnHover: !0
    }
});
var t = document.getElementById("scene");
new Parallax(t, {
    limitX: 50,
    limitY: 0
})
}), window.is_search_show = !1, $(document).on("click", ".tab-by-category .btn_next_prev[rel=ajax]", function(t) {
var e = $(this).attr("href"),
    n = $(this).parents(".tab-by-category").find(".ajax-content").attr("id"),
    i = $(this).parents(".tab-by-category").attr("rel");
return load_tab_categories(e, n, i), !1
}), window.loaded_categies_arr = [], window.is_loading = !1, window.current_page = 1, $(document).ready(function() {
$("a[href^=http]").each(function() {
    var t = [];
    for (i = 0; i < t.length; i++)
        if (this.href.indexOf(t[i]) != -1) return !0;
    this.href.indexOf(location.hostname) == -1 && ($(this).click(function() {
        return !0
    }), $(this).attr({
        target: "_blank",
        title: "Opens in a new window"
    }), $(this).click())
})
}), ! function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e()
}(this, function() {
"use strict";

function t(t) {
    t.setAttribute("data-loaded", !0)
}
var e = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    },
    n = "undefined" != typeof document && document.documentMode,
    i = {
        rootMargin: "0px",
        threshold: 0,
        load: function(t) {
            if ("picture" === t.nodeName.toLowerCase()) {
                var e = document.createElement("img");
                n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.appendChild(e)
            }
            if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                for (var i = t.children, o = void 0, r = 0; r <= i.length - 1; r++)(o = i[r].getAttribute("data-src")) && (i[r].src = o);
                t.load()
            }
            t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
        },
        loaded: function() {}
    },
    o = function(t) {
        return "true" === t.getAttribute("data-loaded")
    };
return function() {
    var n, r, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        l = e({}, i, s),
        c = l.root,
        u = l.rootMargin,
        d = l.threshold,
        h = l.load,
        f = l.loaded,
        p = void 0;
    return window.IntersectionObserver && (p = new IntersectionObserver((n = h, r = f, function(e, i) {
        e.forEach(function(e) {
            (0 < e.intersectionRatio || e.isIntersecting) && (i.unobserve(e.target), o(e.target) || (n(e.target), t(e.target), r(e.target)))
        })
    }), {
        root: c,
        rootMargin: u,
        threshold: d
    })), {
        observe: function() {
            for (var e = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t)
                }(a, c), n = 0; n < e.length; n++) o(e[n]) || (p ? p.observe(e[n]) : (h(e[n]), t(e[n]), f(e[n])))
        },
        triggerLoad: function(e) {
            o(e) || (h(e), t(e), f(e))
        },
        observer: p
    }
}
}), ! function(t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
}(function() {
return function t(e, n, i) {
    function o(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(a, !0);
                if (r) return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                var n = e[a][1][t];
                return o(n || t)
            }, u, u.exports, t, e, n, i)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var o = Object.getOwnPropertySymbols,
            r = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    i[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, s, l = i(t), c = 1; c < arguments.length; c++) {
                n = Object(arguments[c]);
                for (var u in n) r.call(n, u) && (l[u] = n[u]);
                if (o) {
                    s = o(n);
                    for (var d = 0; d < s.length; d++) a.call(n, s[d]) && (l[s[d]] = n[s[d]])
                }
            }
            return l
        }
    }, {}],
    2: [function(t, e, n) {
        (function(t) {
            (function() {
                var n, i, o, r, a, s;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function() {
                    return (n() - a) / 1e6
                }, i = t.hrtime, r = (n = function() {
                    var t;
                    return 1e9 * (t = i())[0] + t[1]
                })(), s = 1e9 * t.uptime(), a = r - s) : Date.now ? (e.exports = function() {
                    return Date.now() - o
                }, o = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        }).call(this, t("_process"))
    }, {
        _process: 3
    }],
    3: [function(t, e, n) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(t) {
            if (d === setTimeout) return setTimeout(t, 0);
            if ((d === i || !d) && setTimeout) return d = setTimeout, setTimeout(t, 0);
            try {
                return d(t, 0)
            } catch (e) {
                try {
                    return d.call(null, t, 0)
                } catch (e) {
                    return d.call(this, t, 0)
                }
            }
        }

        function a(t) {
            if (h === clearTimeout) return clearTimeout(t);
            if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
            try {
                return h(t)
            } catch (e) {
                try {
                    return h.call(null, t)
                } catch (e) {
                    return h.call(this, t)
                }
            }
        }

        function s() {
            g && p && (g = !1, p.length ? m = p.concat(m) : v = -1, m.length && l())
        }

        function l() {
            if (!g) {
                var t = r(s);
                g = !0;
                for (var e = m.length; e;) {
                    for (p = m, m = []; ++v < e;) p && p[v].run();
                    v = -1, e = m.length
                }
                p = null, g = !1, a(t)
            }
        }

        function c(t, e) {
            this.fun = t, this.array = e
        }

        function u() {}
        var d, h, f = e.exports = {};
        ! function() {
            try {
                d = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                d = i
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                h = o
            }
        }();
        var p, m = [],
            g = !1,
            v = -1;
        f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            m.push(new c(t, e)), 1 !== m.length || g || r(l)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(t) {
            return []
        }, f.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function() {
            return "/"
        }, f.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function() {
            return 0
        }
    }, {}],
    4: [function(t, e, n) {
        (function(n) {
            for (var i = t("performance-now"), o = "undefined" == typeof window ? n : window, r = ["moz", "webkit"], a = "AnimationFrame", s = o["request" + a], l = o["cancel" + a] || o["cancelRequest" + a], c = 0; !s && c < r.length; c++) s = o[r[c] + "Request" + a], l = o[r[c] + "Cancel" + a] || o[r[c] + "CancelRequest" + a];
            if (!s || !l) {
                var u = 0,
                    d = 0,
                    h = [];
                s = function(t) {
                    if (0 === h.length) {
                        var e = i(),
                            n = Math.max(0, 1e3 / 60 - (e - u));
                        u = n + e, setTimeout(function() {
                            var t = h.slice(0);
                            h.length = 0;
                            for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(u)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                        }, Math.round(n))
                    }
                    return h.push({
                        handle: ++d,
                        callback: t,
                        cancelled: !1
                    }), d
                }, l = function(t) {
                    for (var e = 0; e < h.length; e++) h[e].handle === t && (h[e].cancelled = !0)
                }
            }
            e.exports = function(t) {
                return s.call(o, t)
            }, e.exports.cancel = function() {
                l.apply(o, arguments)
            }, e.exports.polyfill = function() {
                o.requestAnimationFrame = s, o.cancelAnimationFrame = l
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "performance-now": 2
    }],
    5: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            r = t("raf"),
            a = t("object-assign"),
            s = {
                propertyCache: {},
                vendors: [null, ["-webkit-", "webkit"],
                    ["-moz-", "Moz"],
                    ["-o-", "O"],
                    ["-ms-", "ms"]
                ],
                clamp: function(t, e, n) {
                    return e < n ? t < e ? e : t > n ? n : t : t < n ? n : t > e ? e : t
                },
                data: function(t, e) {
                    return s.deserialize(t.getAttribute("data-" + e))
                },
                deserialize: function(t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                },
                camelCase: function(t) {
                    return t.replace(/-+(.)?/g, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                },
                accelerate: function(t) {
                    s.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), s.css(t, "transform-style", "preserve-3d"), s.css(t, "backface-visibility", "hidden")
                },
                transformSupport: function(t) {
                    for (var e = document.createElement("div"), n = !1, i = null, o = !1, r = null, a = null, l = 0, c = s.vendors.length; l < c; l++)
                        if (null !== s.vendors[l] ? (r = s.vendors[l][0] + "transform", a = s.vendors[l][1] + "Transform") : (r = "transform", a = "transform"), void 0 !== e.style[a]) {
                            n = !0;
                            break
                        } switch (t) {
                        case "2D":
                            o = n;
                            break;
                        case "3D":
                            if (n) {
                                var u = document.body || document.createElement("body"),
                                    d = document.documentElement,
                                    h = d.style.overflow,
                                    f = !1;
                                document.body || (f = !0, d.style.overflow = "hidden", d.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[a] = "translate3d(1px,1px,1px)", o = void 0 !== (i = window.getComputedStyle(e).getPropertyValue(r)) && i.length > 0 && "none" !== i, d.style.overflow = h, u.removeChild(e), f && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                            }
                    }
                    return o
                },
                css: function(t, e, n) {
                    var i = s.propertyCache[e];
                    if (!i)
                        for (var o = 0, r = s.vendors.length; o < r; o++)
                            if (i = null !== s.vendors[o] ? s.camelCase(s.vendors[o][1] + "-" + e) : e, void 0 !== t.style[i]) {
                                s.propertyCache[e] = i;
                                break
                            } t.style[i] = n
                }
            },
            l = {
                relativeInput: !1,
                clipRelativeInput: !1,
                inputElement: null,
                hoverOnly: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5,
                pointerEvents: !1,
                precision: 1,
                onReady: null,
                selector: null
            },
            c = function() {
                function t(e, n) {
                    i(this, t), this.element = e;
                    var o = {
                        calibrateX: s.data(this.element, "calibrate-x"),
                        calibrateY: s.data(this.element, "calibrate-y"),
                        invertX: s.data(this.element, "invert-x"),
                        invertY: s.data(this.element, "invert-y"),
                        limitX: s.data(this.element, "limit-x"),
                        limitY: s.data(this.element, "limit-y"),
                        scalarX: s.data(this.element, "scalar-x"),
                        scalarY: s.data(this.element, "scalar-y"),
                        frictionX: s.data(this.element, "friction-x"),
                        frictionY: s.data(this.element, "friction-y"),
                        originX: s.data(this.element, "origin-x"),
                        originY: s.data(this.element, "origin-y"),
                        pointerEvents: s.data(this.element, "pointer-events"),
                        precision: s.data(this.element, "precision"),
                        relativeInput: s.data(this.element, "relative-input"),
                        clipRelativeInput: s.data(this.element, "clip-relative-input"),
                        hoverOnly: s.data(this.element, "hover-only"),
                        inputElement: document.querySelector(s.data(this.element, "input-element")),
                        selector: s.data(this.element, "selector")
                    };
                    for (var r in o) null === o[r] && delete o[r];
                    a(this, l, o, n), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                }
                return o(t, [{
                    key: "initialise",
                    value: function() {
                        void 0 === this.transform2DSupport && (this.transform2DSupport = s.transformSupport("2D"), this.transform3DSupport = s.transformSupport("3D")), this.transform3DSupport && s.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                    }
                }, {
                    key: "doReadyCallback",
                    value: function() {
                        this.onReady && this.onReady()
                    }
                }, {
                    key: "updateLayers",
                    value: function() {
                        this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                        for (var t = 0; t < this.layers.length; t++) {
                            var e = this.layers[t];
                            this.transform3DSupport && s.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                            var n = s.data(e, "depth") || 0;
                            this.depthsX.push(s.data(e, "depth-x") || n), this.depthsY.push(s.data(e, "depth-y") || n)
                        }
                    }
                }, {
                    key: "updateDimensions",
                    value: function() {
                        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                    }
                }, {
                    key: "updateBounds",
                    value: function() {
                        this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                    }
                }, {
                    key: "queueCalibration",
                    value: function(t) {
                        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = r(this.onAnimationFrame))
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), r.cancel(this.raf))
                    }
                }, {
                    key: "calibrate",
                    value: function(t, e) {
                        this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                    }
                }, {
                    key: "invert",
                    value: function(t, e) {
                        this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                    }
                }, {
                    key: "friction",
                    value: function(t, e) {
                        this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                    }
                }, {
                    key: "scalar",
                    value: function(t, e) {
                        this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                    }
                }, {
                    key: "limit",
                    value: function(t, e) {
                        this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                    }
                }, {
                    key: "origin",
                    value: function(t, e) {
                        this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                    }
                }, {
                    key: "setInputElement",
                    value: function(t) {
                        this.inputElement = t, this.updateDimensions()
                    }
                }, {
                    key: "setPosition",
                    value: function(t, e, n) {
                        e = e.toFixed(this.precision) + "px", n = n.toFixed(this.precision) + "px", this.transform3DSupport ? s.css(t, "transform", "translate3d(" + e + "," + n + ",0)") : this.transform2DSupport ? s.css(t, "transform", "translate(" + e + "," + n + ")") : (t.style.left = e, t.style.top = n)
                    }
                }, {
                    key: "onOrientationTimer",
                    value: function() {
                        this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                    }
                }, {
                    key: "onMotionTimer",
                    value: function() {
                        this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                    }
                }, {
                    key: "onCalibrationTimer",
                    value: function() {
                        this.calibrationFlag = !0
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.updateDimensions()
                    }
                }, {
                    key: "onAnimationFrame",
                    value: function() {
                        this.updateBounds();
                        var t = this.inputX - this.calibrationX,
                            e = this.inputY - this.calibrationY;
                        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = s.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = s.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                        for (var n = 0; n < this.layers.length; n++) {
                            var i = this.layers[n],
                                o = this.depthsX[n],
                                a = this.depthsY[n],
                                l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                c = this.velocityY * (a * (this.invertY ? -1 : 1));
                            this.setPosition(i, l, c)
                        }
                        this.raf = r(this.onAnimationFrame)
                    }
                }, {
                    key: "rotate",
                    value: function(t, e) {
                        var n = (t || 0) / 30,
                            i = (e || 0) / 30,
                            o = this.windowHeight > this.windowWidth;
                        this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = n, this.calibrationY = i), this.inputX = n, this.inputY = i
                    }
                }, {
                    key: "onDeviceOrientation",
                    value: function(t) {
                        var e = t.beta,
                            n = t.gamma;
                        null !== e && null !== n && (this.orientationStatus = 1, this.rotate(e, n))
                    }
                }, {
                    key: "onDeviceMotion",
                    value: function(t) {
                        var e = t.rotationRate.beta,
                            n = t.rotationRate.gamma;
                        null !== e && null !== n && (this.motionStatus = 1, this.rotate(e, n))
                    }
                }, {
                    key: "onMouseMove",
                    value: function(t) {
                        var e = t.clientX,
                            n = t.clientY;
                        return this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || n < this.elementPositionY || n > this.elementPositionY + this.elementHeight) ? (this.inputX = 0, void(this.inputY = 0)) : void(this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), n = Math.max(n, this.elementPositionY), n = Math.min(n, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (n - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (n - this.windowCenterY) / this.windowRadiusY))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                        for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                        delete this.element, delete this.layers
                    }
                }, {
                    key: "version",
                    value: function() {
                        return "3.1.0"
                    }
                }]), t
            }();
        e.exports = c
    }, {
        "object-assign": 1,
        raf: 4
    }]
}, {}, [5])(5)
});