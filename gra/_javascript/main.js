!function(e, t) {
  var n,
    o = "forEach",
    i = "querySelectorAll",
    r = "parentNode",
    c = "getBoundingClientRect",
    a = "prototype",
    u = "IntersectionObserver",
    l = u + "Entry",
    s = "src",
    f = "srcset",
    g = "data-",
    d = g + s,
    v = g + f,
    m = [
      "scroll", "touchmove"
    ],
    y = [
      "orientationchange", "resize"
    ],
    b = 0,
    h = function(e, t, n) {
      var o = e.getAttribute(t);
      o && (e[n] = o, e.removeAttribute(t))
    },
    p = function(e) {
      "VIDEO" == e.tagName
        ? (Array[a].slice.call(e[i]("source"))[o](function(e) {
          h(e, d, s)
        }), e.load())
        : ("PICTURE" == e[r].tagName && Array[a].slice.call(e[r][i]("source"))[o](function(e) {
          h(e, v, f)
        }), h(e, d, s), h(e, v, f)),
      e.classList.remove("lazy"),
      n = n.filter(function(t) {
        return t !== e
      })
    },
    A = function(e, t, n, i) {
      t[o](function(t) {
        i
          ? e.removeEventListener(t, n)
          : e.addEventListener(t, n)
      })
    },
    E = function() {
      n.length || (A(t, m, E, 1), A(e, y, E, 1)),
      b || (b = 1, setTimeout(function() {
        n[o](function(t) {
          t[c]().top <= e.innerHeight && t[c]().bottom >= 0 && "none" != getComputedStyle(t).display && p(t)
        }),
        b = 0
      }, 200))
    };
  A(t, ["DOMContentLoaded"], function() {
    if ((n = Array[a].slice.call(t[i](".lazy"))).length)
      if (u in e && l in e && "intersectionRatio" in e[l][a]) {
        var r = new e[u](function(e, t) {
          e[o](function(e) {
            e.isIntersecting && (p(e.target), r.unobserve(e.target))
          })
        });
        n[o](function(e) {
          r.observe(e)
        })
      } else
        E(), A(t, m, E), A(e, y, E)
  })
}(window, document);
