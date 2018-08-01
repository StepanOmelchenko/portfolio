/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/about.js":
/*!**************************!*\
  !*** ./src/lib/about.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar diagrams = document.querySelector('#diagrams-list');\nvar isBeingWached = false;\n\nif (diagrams) {\n    window.onscroll = function () {\n        var target = diagrams.getBoundingClientRect().top;\n        var win = window.pageYOffset;\n\n        if (target < win && !isBeingWached) {\n            isBeingWached = true;\n            var allCircles = diagrams.querySelectorAll('.about__diagrams-circle');\n\n            allCircles.forEach(function (circle) {\n                var val = circle.dataset.fillClass;\n                circle.classList.add(val);\n            });\n        }\n    };\n}\n\n//# sourceURL=webpack:///./src/lib/about.js?");

/***/ }),

/***/ "./src/lib/blog.js":
/*!*************************!*\
  !*** ./src/lib/blog.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _functions = __webpack_require__(/*! ./functions.js */ \"./src/lib/functions.js\");\n\nvar articles = document.querySelectorAll('.blog__content-item');\nvar articlesList = document.querySelector('.blog__navigation');\nvar articleTitles = document.querySelectorAll('.blog__navigation-item');\nvar activeArticleId = null;\nvar isBeingAnimated = false;\n\nfunction getCoords(elem) {\n    var box = elem.getBoundingClientRect();\n\n    return {\n        top: box.top + window.pageYOffset,\n        left: box.left + window.pageXOffset\n    };\n}\n\nfunction setArticleActive() {\n    function setActive(artcl) {\n        if (artcl.dataset.idtitle !== activeArticleId) {\n            var allTitles = document.querySelectorAll('.blog__navigation-item');\n            allTitles.forEach(function (title) {\n                title.classList.remove('blog__navigation-item--active');\n            });\n            document.getElementById(artcl.dataset.idtitle).classList.add('blog__navigation-item--active');\n            activeArticleId = artcl.dataset.idtitle;\n        }\n    }\n\n    if (window.pageYOffset < getCoords(articles[0]).top) {\n        setActive(articles[0]);\n    } else if (window.pageYOffset + window.innerHeight === document.body.offsetHeight) {\n        setActive(articles[articles.length - 1]);\n    } else {\n        articles.forEach(function (article) {\n            var elemTop = getCoords(article).top;\n            if (window.pageYOffset > elemTop - 150) {\n                setActive(article);\n            }\n        });\n    }\n}\n\nfunction setArticleChords() {\n    var elemChords = getCoords(articles[0]);\n    if (window.pageYOffset >= elemChords.top - 30) {\n\n        articlesList.style.position = 'fixed';\n        articlesList.style.top = '30px';\n    } else {\n        articlesList.style.position = 'static';\n    }\n}\n\nif (articlesList && articles.length) {\n    articlesList.style.width = articlesList.offsetWidth + 'px';\n\n    window.onscroll = function () {\n        setArticleChords();\n        setArticleActive();\n    };\n\n    window.onresize = function () {\n        articlesList.style.width = articlesList.parentNode.offsetWidth + 'px';\n    };\n\n    setArticleChords();\n    setArticleActive();\n}\n\narticleTitles.forEach(function (title, index) {\n    var link = title.querySelector('.blog__navigation-link');\n\n    link.onclick = function (e) {\n        e.preventDefault();\n        if (!isBeingAnimated && articles) {\n            isBeingAnimated = true;\n            var currentPosition = window.pageYOffset;\n            var targetPosition = articles[index].getBoundingClientRect().top + currentPosition;\n            var scrollAnimationDuration = 1000;\n            (0, _functions.animateScroll)(currentPosition, targetPosition, scrollAnimationDuration).then(function (resolve) {\n                isBeingAnimated = false;\n            });\n        }\n    };\n});\n\n//# sourceURL=webpack:///./src/lib/blog.js?");

/***/ }),

/***/ "./src/lib/circles.js":
/*!****************************!*\
  !*** ./src/lib/circles.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Circle = function () {\n    function Circle(data) {\n        _classCallCheck(this, Circle);\n\n        this.svgns = 'http://www.w3.org/2000/svg';\n        this.svg = document.createElementNS(this.svgns, 'svg');\n        this.height = data.size;\n        this.width = data.size;\n        this.radius = data.radius;\n        this.percent = data.percent;\n        this.strokeDasharray = '.001 ' + 2 * Math.PI * this.radius;\n        this.svg.setAttribute('width', this.width);\n        this.svg.setAttribute('height', this.height);\n        this.svg.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);\n        this.svg.classList.add('about__diagrams-svg');\n        this.baseCircle = this.createCircle('#6c9c5a', true);\n        this.baseCircle.setAttribute('data-fill-class', this.percent);\n        this.bgCircle = this.createCircle('#dfdcd5');\n        this.svg.appendChild(this.bgCircle);\n        this.svg.appendChild(this.baseCircle);\n\n        return this.svg;\n    }\n\n    _createClass(Circle, [{\n        key: 'createCircle',\n        value: function createCircle(color) {\n            var isBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n            var circle = document.createElementNS(this.svgns, 'circle');\n            var cx = this.width / 2;\n            var cy = this.height / 2;\n            circle.setAttribute('cx', cx);\n            circle.setAttribute('cy', cy);\n            circle.setAttribute('r', this.radius);\n            circle.setAttribute('fill', 'none');\n            circle.setAttribute('stroke', color);\n            circle.setAttribute('stroke-width', '15');\n            if (isBase) {\n                circle.setAttribute('transform', 'rotate(-90 ' + cx + ' ' + cy + ')');\n                circle.setAttribute('stroke-dasharray', this.strokeDasharray);\n                //circle.setAttribute('stroke-dashoffset', this.strokeDasharray);\n                circle.classList.add('about__diagrams-circle');\n            }\n            return circle;\n        }\n    }]);\n\n    return Circle;\n}();\n\nvar Skill = function Skill(obj) {\n    _classCallCheck(this, Skill);\n\n    this.circle = new Circle(obj.data);\n    this.title = document.createElement('span');\n    this.title.innerText = obj.title;\n    this.title.classList.add('about__diagrams-title');\n    this.item = document.createElement('li');\n    this.item.appendChild(this.circle);\n    this.item.appendChild(this.title);\n    this.item.classList.add('about__diagrams-item');\n\n    return this.item;\n};\n\nvar ScillList = function ScillList(data) {\n    var _this = this;\n\n    _classCallCheck(this, ScillList);\n\n    this.row = document.createElement('li');\n    this.row.classList.add('about__diagrams-row');\n    this.header = document.createElement('h3');\n    this.header.classList.add('about__diagrams-header');\n    this.header.innerText = data.header;\n    this.list = document.createElement('ul');\n    this.list.classList.add('about__diagrams-list');\n\n    data.circles.forEach(function (obj) {\n        _this.list.appendChild(new Skill(obj));\n    });\n\n    this.row.appendChild(this.header);\n    this.row.appendChild(this.list);\n    return this.row;\n};\n\nvar diagramsContainer = document.querySelector('#diagrams-list');\nvar circlesData = [{\n    header: 'Frontend',\n    circles: [{\n        title: 'HTML',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--70'\n        }\n    }, {\n        title: 'CSS',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--70'\n        }\n    }, {\n        title: 'Javascript',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--70'\n        }\n    }]\n}, {\n    header: 'Backend',\n    circles: [{\n        title: 'PHP',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--10'\n        }\n    }, {\n        title: 'Mongo.db',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--10'\n        }\n    }, {\n        title: 'Node.js',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--10'\n        }\n    }]\n}, {\n    header: 'WorkFlow',\n    circles: [{\n        title: 'Git',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--50'\n        }\n    }, {\n        title: 'Gulp',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--30'\n        }\n    }, {\n        title: 'Webpack',\n        data: {\n            size: 110,\n            radius: 45,\n            percent: 'circle--30'\n        }\n    }]\n}];\n\nif (diagramsContainer) {\n    diagramsContainer.innerHTML = null;\n    circlesData.forEach(function (row) {\n        diagramsContainer.appendChild(new ScillList(row));\n    });\n}\n\n//# sourceURL=webpack:///./src/lib/circles.js?");

/***/ }),

/***/ "./src/lib/controls.js":
/*!*****************************!*\
  !*** ./src/lib/controls.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _functions = __webpack_require__(/*! ./functions.js */ \"./src/lib/functions.js\");\n\nvar hamburger = document.querySelector('.hamburger');\nvar authorizationBtn = document.querySelector('#autr-btn');\nvar flipper = document.querySelector('#flipper');\nvar loginReturn = document.querySelector('#login-return');\nvar moveDownBtn = document.querySelector('#btn-movedown');\n\nif (hamburger) {\n    hamburger.addEventListener('click', function (e) {\n        e.preventDefault();\n        var overlay = document.querySelector('.overlay');\n        if (overlay) {\n            hamburger.classList.toggle('hamburger--active');\n            overlay.classList.toggle('overlay--active');\n        }\n    });\n}\n\nif (authorizationBtn && flipper) {\n    authorizationBtn.addEventListener('click', function (e) {\n        flipper.classList.toggle('welcome__flipper--active');\n    });\n\n    document.querySelector('body').addEventListener('click', function (e) {\n        if (!e.target.closest('#flipper') && !e.target.closest('#autr-btn')) {\n            if (flipper.classList.contains('welcome__flipper--active')) {\n                flipper.classList.remove('welcome__flipper--active');\n            }\n        }\n    });\n}\n\nif (loginReturn) {\n    loginReturn.addEventListener('click', function (e) {\n        e.preventDefault();\n        if (flipper.classList.contains('welcome__flipper--active')) {\n            flipper.classList.remove('welcome__flipper--active');\n        }\n    });\n}\n\nif (moveDownBtn) {\n    moveDownBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n        var currentPosition = window.pageYOffset;\n        var targetPosition = window.innerHeight;\n        var duration = 1000;\n\n        (0, _functions.animateScroll)(currentPosition, targetPosition, duration);\n    });\n}\n\n//# sourceURL=webpack:///./src/lib/controls.js?");

/***/ }),

/***/ "./src/lib/functions.js":
/*!******************************!*\
  !*** ./src/lib/functions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction animateScroll(from, to, duration) {\n  return new Promise(function (resolve) {\n\n    function animate() {\n      var currentTime = Date.now();\n      var timesLeft = startTime + duration - currentTime;\n\n      if (timesLeft <= 0) {\n        scroll(0, to);\n        resolve();\n      } else {\n        var progress = 1 / duration * (duration - timesLeft);\n        var nextPoint = from + (to - from) * progress;\n        scroll(0, nextPoint);\n        requestAnimationFrame(animate);\n      }\n    }\n\n    var startTime = Date.now();\n    requestAnimationFrame(animate);\n  });\n}\n\nexports.animateScroll = animateScroll;\n\n//# sourceURL=webpack:///./src/lib/functions.js?");

/***/ }),

/***/ "./src/lib/map.js":
/*!************************!*\
  !*** ./src/lib/map.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar map = document.querySelector('#map');\n\nif (map) {\n  var init = function init() {\n    myMap = new ymaps.Map(\"map\", {\n      center: [59.941392, 30.293756],\n      zoom: 12,\n      controls: ['zoomControl']\n    });\n    myMap.behaviors.disable('scrollZoom');\n\n    var placemarks = createPlacemarks(coords);\n\n    placemarks.forEach(function (placemark) {\n      myMap.geoObjects.add(placemark);\n    });\n\n    function createPlacemarks(array) {\n      var placemarks = [];\n\n      array.forEach(function (coord) {\n        var oneMark = new ymaps.Placemark([coord[0], coord[1]], {}, {\n          iconLayout: 'default#image',\n          iconImageSize: [46, 57],\n          iconImageOffset: [0, 0]\n        });\n        placemarks.push(oneMark);\n      });\n\n      return placemarks;\n    }\n  };\n\n  ymaps.ready(init);\n  var myMap;\n  var coords = [[59.961368, 30.288778]];\n}\n\n//# sourceURL=webpack:///./src/lib/map.js?");

/***/ }),

/***/ "./src/lib/overlay.js":
/*!****************************!*\
  !*** ./src/lib/overlay.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CreateOverlay = function () {\n    function CreateOverlay(menuList) {\n        var _this = this;\n\n        _classCallCheck(this, CreateOverlay);\n\n        this.menu = document.createElement('ul');\n        this.menu.classList.add('overlay__list');\n        this.overlay = document.createElement('div');\n        this.overlay.classList.add('overlay');\n\n        menuList.forEach(function (item) {\n            _this.menu.appendChild(_this.createItem(item));\n        });\n\n        this.overlay.appendChild(this.menu);\n        return this.overlay;\n    }\n\n    _createClass(CreateOverlay, [{\n        key: 'createItem',\n        value: function createItem(obj) {\n            var item = document.createElement('li');\n            item.classList.add('overlay__item');\n            var link = document.createElement('a');\n            link.classList.add('overlay__link');\n            link.innerText = obj.title;\n            link.setAttribute('href', obj.href);\n            item.appendChild(link);\n            return item;\n        }\n    }]);\n\n    return CreateOverlay;\n}();\n\nvar overlayMenu = [{\n    title: 'мои работы',\n    href: 'works.html'\n}, {\n    title: 'блог',\n    href: 'blog.html'\n}, {\n    title: 'обо мне',\n    href: 'about.html'\n}, {\n    title: 'авторизация',\n    href: 'index.html'\n}];\n\ndocument.querySelector('body').appendChild(new CreateOverlay(overlayMenu));\n\n//# sourceURL=webpack:///./src/lib/overlay.js?");

/***/ }),

/***/ "./src/lib/preloader.js":
/*!******************************!*\
  !*** ./src/lib/preloader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar preloader = document.querySelector('#preloader');\n\nif (preloader) {\n    var imgLoader = function imgLoader(path) {\n        return new Promise(function (resolve) {\n            var fakeImg = document.createElement('img');\n            fakeImg.src = path;\n\n            fakeImg.addEventListener('load', function () {\n                resolve();\n            });\n            fakeImg.addEventListener('error', function () {\n                resolve();\n            });\n        });\n    };\n\n    var setPercent = function setPercent(total, current) {\n        var percents = Math.ceil(current / total * 100);\n\n        preloderTitle.innerText = percents + '%';\n\n        if (percents >= 100) {\n            _preloader.classList.add('preloader--hide');\n        }\n    };\n\n    var precentTotal = 0;\n    var _preloader = document.querySelector('#preloader');\n    var preloderTitle = document.querySelector('#preloader-title');\n    var paths = [];\n    var imgs = document.querySelectorAll('img').forEach(function (img) {\n        paths.push(img.src);\n    });\n    var backGrounds = document.querySelectorAll('*').forEach(function (elem) {\n        var bg = getComputedStyle(elem).getPropertyValue('background-image');\n        if (bg && bg !== 'none') {\n            paths.push(bg.replace('url(\"', '').replace('\")', ''));\n        }\n    });\n    if (paths.length) {\n        paths.forEach(function (path) {\n            imgLoader(path).then(function () {\n                precentTotal++;\n                setPercent(paths.length, precentTotal);\n            });\n        });\n    } else {\n        _preloader.classList.add('preloader--hide');\n    }\n}\n\n//# sourceURL=webpack:///./src/lib/preloader.js?");

/***/ }),

/***/ "./src/lib/slider.js":
/*!***************************!*\
  !*** ./src/lib/slider.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CreateList = function () {\n    function CreateList(data) {\n        var _this = this;\n\n        _classCallCheck(this, CreateList);\n\n        this.list = document.createElement('ul');\n        this.list.classList.add('slider__link-list');\n\n        data.forEach(function (elem) {\n            _this.list.appendChild(_this.makeItem(elem));\n        });\n    }\n\n    _createClass(CreateList, [{\n        key: 'makeItem',\n        value: function makeItem(obj) {\n            var item = document.createElement('li');\n            item.classList.add('slider__link-item');\n            item.style.backgroundImage = 'url(' + obj.img + ')';\n            return item;\n        }\n    }]);\n\n    return CreateList;\n}();\n\nvar data = [{\n    title: 'Airplanet',\n    img: 'img/slider/airplanet1.jpg',\n    tech: 'HTML, CSS, Gulp',\n    link: 'https://stepanomelchenko.github.io/airplanet/build'\n}, {\n    title: 'Coworking',\n    img: 'img/slider/coworking1.jpg',\n    tech: 'HTML, CSS, Gulp',\n    link: 'https://stepanomelchenko.github.io/coworking/build'\n}, {\n    title: 'Burger',\n    img: 'img/slider/burger1.jpg',\n    tech: 'HTML, SCSS, Javascript, Gulp',\n    link: 'https://stepanomelchenko.github.io/burger/build'\n}, {\n    title: 'Portfolio',\n    img: 'img/slider/portfolio.jpg',\n    tech: 'Pug, SCSS, Javascript, Vue, Node.js, Gulp, Webpack',\n    link: 'https://stepanomelchenko.github.io/portfolio/build' /* ,\r\n                                                               {\r\n                                                                  title: 'site5',\r\n                                                                  img: 'img/slider/3.png',\r\n                                                                  tech: 'HTML , CSS, JAVASCRIPT',\r\n                                                                  link: 'https://stepanomelchenko.github.io/'\r\n                                                               } */\n}];\n\nvar slider = document.querySelector('#slider');\n\nif (slider) {\n    var animateSlider = function animateSlider(elem, currentPosition, targetPosition, duration) {\n        return new Promise(function (resolve) {\n            function animate() {\n                var currentTime = Date.now();\n                var timesLeft = startTime + duration - currentTime;\n\n                if (timesLeft <= 0) {\n                    elem.style.transform = 'translateY(' + targetPosition + '%)';\n                    resolve();\n                } else {\n                    var progress = 1 / duration * (duration - timesLeft);\n                    var step = currentPosition + (targetPosition - currentPosition) * progress;\n                    elem.style.transform = 'translateY(' + step + '%)';\n                    requestAnimationFrame(animate);\n                }\n            }\n\n            var startTime = Date.now();\n            requestAnimationFrame(animate);\n        });\n    };\n\n    var animateOpacity = function animateOpacity(elem, duration) {\n        return new Promise(function (resolve) {\n            function animate() {\n                var currentTime = Date.now();\n                var timesLeft = startTime + duration - currentTime;\n\n                if (timesLeft <= 0) {\n                    elem.style.opacity = 1;\n                    resolve();\n                } else {\n                    var progress = 1 / duration * (duration - timesLeft);\n                    var step = progress;\n                    elem.style.opacity = step;\n                    requestAnimationFrame(animate);\n                }\n            }\n\n            var startTime = Date.now();\n            requestAnimationFrame(animate);\n        });\n    };\n\n    var setCurrentPicture = function setCurrentPicture(index) {\n        var duration = 1000;\n        current.style.backgroundImage = 'url(' + data[index].img + ')';\n        animateOpacity(current, duration).then(function () {\n            isBeingAnimated = false;\n        });\n        sliderTitle.innerText = data[index].title;\n        sliderTech.innerText = data[index].tech;\n        sliderLink.setAttribute('href', data[index].link);\n        animateOpacity(sliderTitle, duration);\n        animateOpacity(sliderTech, duration);\n    };\n\n    var sliderMoveUp = function sliderMoveUp(upList, downList, direction) {\n        isBeingAnimated = true;\n        var beforeElemCounter = currentIndex.get();\n        var currentElemCounter = void 0;\n        var nextElemCounter = void 0;\n        var nextElemCounter2 = void 0;\n        if (direction === 'left') {\n            currentElemCounter = currentIndex.inc(upList);\n            nextElemCounter = currentIndex.ifExist(currentElemCounter + 1, upList);\n            nextElemCounter2 = currentIndex.ifExist(beforeElemCounter - 1, downList);\n        } else {\n            currentElemCounter = currentIndex.dec(upList);\n            nextElemCounter = currentIndex.ifExist(currentElemCounter - 1, upList);\n            nextElemCounter2 = currentIndex.ifExist(beforeElemCounter + 1, downList);\n        }\n\n        animateSlider(upList[currentElemCounter], 100, 0, duration);\n        animateSlider(upList[nextElemCounter], 200, 100, duration);\n        animateSlider(downList[nextElemCounter2], 100, 200, duration);\n        animateSlider(downList[beforeElemCounter], 0, 100, duration);\n        setCurrentPicture(currentElemCounter);\n    };\n\n    var current = document.querySelector('#slider-current');\n    var leftBtn = document.querySelector('#slider-left');\n    var rightBtn = document.querySelector('#slider-right');\n    var duration = 1000;\n    var leftSlider = new CreateList(data);\n    var rightSlider = new CreateList(data);\n    var listLeft = void 0,\n        listRight = void 0;\n    var isBeingAnimated = false;\n    var sliderTitle = document.querySelector('#slider-title');\n    var sliderTech = document.querySelector('#slider-tech');\n    var sliderLink = document.querySelector('#slider-link');\n\n    var currentIndex = {\n        index: 1,\n\n        get: function get() {\n            return this.index;\n        },\n        inc: function inc(array) {\n            this.index++;\n            if (this.index > array.length - 1) {\n                this.index = 0;\n            }\n            return this.index;\n        },\n        dec: function dec(array) {\n            this.index--;\n            if (this.index < 0) {\n                this.index = array.length - 1;\n            }\n\n            return this.index;\n        },\n        ifExist: function ifExist(val, array) {\n            var result = void 0;\n            if (val < 0) {\n                result = array.length - 1;\n            } else if (val > array.length - 1) {\n                result = 0;\n            } else {\n                result = val;\n            }\n\n            return result;\n        }\n    };\n\n    leftBtn.appendChild(leftSlider.list);\n    rightBtn.appendChild(rightSlider.list);\n    listLeft = leftBtn.querySelectorAll('.slider__link-item');\n    listRight = rightBtn.querySelectorAll('.slider__link-item');\n\n    setCurrentPicture(currentIndex.get());\n    animateSlider(listLeft[2], 0, 100, duration);\n    animateSlider(listRight[0], 0, 100, duration);\n\n    leftBtn.onclick = function (e) {\n        e.preventDefault();\n        if (!isBeingAnimated) {\n            sliderMoveUp(listLeft, listRight, 'left');\n        }\n    };\n\n    rightBtn.onclick = function (e) {\n        e.preventDefault();\n        if (!isBeingAnimated) {\n            sliderMoveUp(listRight, listLeft, 'right');\n        }\n    };\n}\n\n//# sourceURL=webpack:///./src/lib/slider.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/lib/about.js ./src/lib/blog.js ./src/lib/circles.js ./src/lib/controls.js ./src/lib/functions.js ./src/lib/map.js ./src/lib/overlay.js ./src/lib/preloader.js ./src/lib/slider.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\about.js */\"./src/lib/about.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\blog.js */\"./src/lib/blog.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\circles.js */\"./src/lib/circles.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\controls.js */\"./src/lib/controls.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\functions.js */\"./src/lib/functions.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\map.js */\"./src/lib/map.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\overlay.js */\"./src/lib/overlay.js\");\n__webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\preloader.js */\"./src/lib/preloader.js\");\nmodule.exports = __webpack_require__(/*! D:\\projects\\loftschool\\portfolio\\src\\lib\\slider.js */\"./src/lib/slider.js\");\n\n\n//# sourceURL=webpack:///multi_./src/lib/about.js_./src/lib/blog.js_./src/lib/circles.js_./src/lib/controls.js_./src/lib/functions.js_./src/lib/map.js_./src/lib/overlay.js_./src/lib/preloader.js_./src/lib/slider.js?");

/***/ })

/******/ });