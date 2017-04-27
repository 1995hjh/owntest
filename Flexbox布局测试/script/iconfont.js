;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M495.372298 70.467935 60.628846 505.211387c-14.618952 14.618952-4.26514 39.61423 16.408715 39.61423l108.623953 0c12.815887 0 23.205515 10.389628 23.205515 23.205515l0 269.215488c0 12.815887 10.389628 23.205515 23.205515 23.205515l155.531286 0c12.815887 0 23.205515-10.389628 23.205515-23.205515L410.809343 717.351971c0-12.815887 10.389628-23.205515 23.205515-23.205515l155.531286 0c12.815887 0 23.205515 10.389628 23.205515 23.205515l0 119.896694c0 12.815887 10.389628 23.205515 23.205515 23.205515l153.295362 0c14.051017 0 25.441439-11.390421 25.441439-16.46602L814.693973 579.243497c0-23.026436 11.390421-34.416857 25.441439-34.416857l106.388029 0c20.673855 0 31.027667-24.996301 16.408715-39.61423L528.190751 70.467935C519.128351 61.405535 504.434697 61.405535 495.372298 70.467935z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-messagesico1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M42.666667 128l938.666667 0 0 768-938.666667 0 0-768Z"  ></path>' +
    '' +
    '<path d="M128 213.333333 512 554.666667 896 213.333333"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M962.285714 233.142857q-38.285714 56-92.571429 95.428571 0.571429 8 0.571429 24 0 74.285714-21.714286 148.285714t-66 142-105.428571 120.285714-147.428571 83.428571-184.571429 31.142857q-154.857143 0-283.428571-82.857143 20 2.285714 44.571429 2.285714 128.571429 0 229.142857-78.857143-60-1.142857-107.428571-36.857143t-65.142857-91.142857q18.857143 2.857143 34.857143 2.857143 24.571429 0 48.571429-6.285714-64-13.142857-106-63.714286t-42-117.428571l0-2.285714q38.857143 21.714286 83.428571 23.428571-37.714286-25.142857-60-65.714286t-22.285714-88q0-50.285714 25.142857-93.142857 69.142857 85.142857 168.285714 136.285714t212.285714 56.857143q-4.571429-21.714286-4.571429-42.285714 0-76.571429 54-130.571429t130.571429-54q80 0 134.857143 58.285714 62.285714-12 117.142857-44.571429-21.142857 65.714286-81.142857 101.714286 53.142857-5.714286 106.285714-28.571429z" fill="#1296db" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ion-android-notifications-Ionicons" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M150.752 850.144c-19.419-19.419-28.799-43.083-28.206-70.993 0.044-25.43 9.768-50.851 29.174-70.257 0.26-0.26 0.521-0.518 0.783-0.775l140.233 140.313c-19.385 19.385-43.049 29.358-70.96 29.95-27.943 0.559-51.64-8.853-71.026-28.239zM595.598 867.259l-1.712 141.985-35.941 35.941-602.235-602.235 35.941-35.941 141.985-1.712 195.040-195.040c53.615-53.615 118.058-84.421 193.329-92.352 75.304-8.031 144.881 7.373 208.765 46.177l25.672-25.672c14.81-14.81 32.188-22.512 52.134-23.104 19.978-0.559 37.948 7.142 53.944 23.138 15.963 15.963 23.664 33.933 23.105 53.911-0.593 19.945-8.261 37.356-23.071 52.166l-25.672 25.672c38.771 63.85 54.174 133.428 46.144 208.732-6.457 69.315-36.51 137.509-90.088 191.086-0.793 0.793-1.588 1.58-2.387 2.362l-194.919 194.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bootstrap" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M259.048429 134.334521c85.677335-13.33675 186.702216-5.484921 296.201096-5.484921 154.988934 0 289.310152-14.646582 329.11267 82.277912 21.98778 53.544497 10.969842 115.656113 10.969842 153.585981 0 115.898637 26.762527 394.700457-21.939685 471.727785-8.433066 13.33675-38.058804 40.187281-60.337203 49.366338-71.973218 29.652344-205.003024 10.970866-301.686017 10.970866-164.143431 0-327.563384 27.6395-372.994086-82.277912-32.79287-79.339999-10.970866-338.198605-10.970866-460.756919 0-27.317159-9.54233-93.462648 10.970866-142.615115C156.383188 167.974689 201.164091 143.344732 259.048429 134.334521zM703.349561 430.535617c61.211107-203.128327-239.259222-151.566998-378.479007-153.585981 0 160.898527 0 321.7991 0 482.69865 124.227326-8.600889 309.915445 27.76639 378.479007-49.367361 28.786627-32.383548 45.367257-99.078553 16.455787-159.069879-14.398942-29.879518-43.252083-34.652218-71.308069-60.337203C679.420569 472.569966 694.057941 461.369879 703.349561 430.535617z" fill="#13227a" ></path>' +
    '' +
    '<path d="M434.575118 353.742626c42.825364 15.683191 123.754558-6.736425 159.070902 16.455787 51.684126 97.568153-67.080791 109.325941-159.070902 98.733699C434.575118 430.535617 434.575118 392.139122 434.575118 353.742626z" fill="#13227a" ></path>' +
    '' +
    '<path d="M615.585705 655.428643c-37.360909 30.289863-114.706485 20.595061-181.01161 21.940708 0-43.881416 0-87.763856 0-131.644249C539.550984 534.164812 668.470169 544.17991 615.585705 655.428643z" fill="#13227a" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)