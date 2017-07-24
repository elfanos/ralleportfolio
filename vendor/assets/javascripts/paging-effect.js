/**
 * Created by Rasmus on 22/07/17.
 */
function PagingEffectClass(navBar, childNodes, context, textAnimation, numberOfEffects, navigationSide, container, navBars, contentContainer, arrowDiv){
    this._navBar = navBar;
    this._childNodes = childNodes;
    this._context = context;
    this._textAnimation = textAnimation;
    this._numberOfEffects = numberOfEffects;
    this._navigationSide = navigationSide;
    this._instance = null;
    this._container = container;
    this._randomSpeed = 1;
    this._navBars = navBars;
    this._contentContainer = contentContainer;
    this._arrowDiv = arrowDiv;
    this._initalizeNavPosition = false;
    this._animationCompleted = false;
    this._setClicked = function () {
        this._navBar.style.pointerEvents = "none";
    };
    this._pagingApplyNodes = function () {
        this._applyNodesBaseOnSide();
    };
    this._applyNodesBaseOnSide = function () {
        var div = null;
        var progressbar = null;
        if(navigationSide == 'contact' || navigationSide == 'about'){
            for(var i = 0; i < this._numberOfEffects; i++){
                console.log("jakh");
                div = document.createElement("div");
                div.className = "pagechange-content";
                progressbar = document.createElement("div");
                progressbar.className = "pagechange-progress";
                div.appendChild(progressbar);
                this._container.appendChild(div);
            }
        }else if(navigationSide == 'music' || navigationSide == 'project'){
            for(var j = 0; j < this._numberOfEffects; j++){
                console.log("jakh");
                div = document.createElement("div");
                div.className = "page-change-content-vertical";
                progressbar = document.createElement("div");
                progressbar.className = "page-change-progress-vertical";
                div.appendChild(progressbar);
                this._container.appendChild(div);
            }
        }
    };
    this._pagingIntervalForEachNode = function (direction, child) {
        this._setClicked();
        if(child < this._numberOfEffects){
            child++;
            if(direction == 0){
                //console.log("youe", this._childNodes[child]);
                this._startInterValOnEachNode(direction, this._childNodes[child].childNodes[0], this._instance);
                this._pagingIntervalForEachNode(direction, child);
            }else if(direction == 1){
                this._startInterValOnEachNode(direction, this._childNodes[child].childNodes[0], this._instance)
                this._pagingIntervalForEachNode(direction, child);
            }
        }
    };
    this._startInterValOnEachNode = function (direction, child, instance) {
        switch (this._randomSpeed){
            case 1:
                this._randomSpeed++;
                var width = 0;
                if(direction == 0){
                    (function(instance) {

                        var interval = setInterval(function () {
                            if (width >= 100) {
                                clearInterval(interval);
                            } else {
                                width += 1;
                                instance._styleMovingBasedOnNav(child, width, 0,0);
                            }
                        }, 1)
                    })(instance);

                }else if(direction == 1){
                    var d_width = 100;
                    var d_left = 0;
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (d_width <= 0) {
                                clearInterval(interval);
                            } else {
                                d_width -= 1;
                                d_left += 1;
                                instance._styleMovingBasedOnNav(child,d_width,1,d_left);
                            }
                        }, 1)
                    })(instance);
                }
                break;
            case 2:
                this._randomSpeed++;
                width = 0;
                if(direction == 0){
                    (function(instance) {

                        var interval = setInterval(function () {
                            if (width >= 100) {
                                clearInterval(interval);
                            } else {
                                width += 1;
                                instance._styleMovingBasedOnNav(child, width, 0, 0);;
                            }
                        }, 10)
                    })(instance);

                }else if(direction == 1){
                    d_width = 100;
                    d_left = 0;
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (d_width <= 0) {
                                clearInterval(interval);
                            } else {
                                d_width -= 1;
                                d_left += 1;
                                instance._styleMovingBasedOnNav(child,d_width,1,d_left);
                            }
                        }, 10)
                    })(instance);
                }
                break;
            case 3:
                this._randomSpeed++;
                width = 0;
                if(direction == 0){
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (width >= 100) {
                                clearInterval(interval);
                            } else {
                                width += 1;
                                instance._styleMovingBasedOnNav(child, width, 0, 0);
                            }
                        }, 8)
                    })(instance);

                }else if(direction == 1){
                    d_width = 100;
                    d_left = 0;
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (d_width <= 0) {
                                clearInterval(interval);
                            } else {
                                d_width -= 1;
                                d_left += 1;
                                instance._styleMovingBasedOnNav(child,d_width,1,d_left);
                            }
                        }, 8)
                    })(instance);
                }
                break;
            case 4:
                this._randomSpeed++;
                width = 6;
                if(direction == 0){
                    (function(instance) {

                        var interval = setInterval(function () {
                            if (width >= 100) {
                                clearInterval(interval);
                            } else {
                                width += 1;
                                instance._styleMovingBasedOnNav(child, width, 0, 0);
                            }
                        }, 4)
                    })(instance);

                }else if(direction == 1){
                    d_width = 100;
                    d_left = 0;
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (d_width <= 0) {
                                clearInterval(interval);
                            } else {
                                d_width -= 1;
                                d_left += 1;
                                instance._styleMovingBasedOnNav(child,d_width,1,d_left);
                            }
                        }, 4)
                    })(instance);
                }
                break;
            case 5:
                this._randomSpeed = 1;
                width = 0;
                if(direction == 0){
                    (function(instance) {

                        var interval = setInterval(function () {
                            if (width >= 100) {
                                clearInterval(interval);
                            } else {
                                width += 1;
                                instance._styleMovingBasedOnNav(child, width, 0, 0);
                            }
                        }, 2)
                    })(instance);

                }else if(direction == 1){
                    d_width = 100;
                    d_left = 0;
                    (function(instance) {
                        var interval = setInterval(function () {
                            if (d_width <= 0) {
                                clearInterval(interval);
                            } else {
                                d_width -= 1;
                                d_left += 1;
                                instance._styleMovingBasedOnNav(child,d_width,1,d_left);
                            }
                        }, 2)
                    })(instance);
                }
                break;
        }
    };
    this._styleMovingBasedOnNav = function (child, width, direction, left) {
        switch (this._navigationSide){
            case 'contact':
                if(direction == 0) {
                    this._navBar.style.zIndex = "1001";
                    child.style.float = "right";
                    child.style.width = width + '%';
                }else if(direction == 1){
                    child.style.width = width + '%';
                    child.style.float = "left";
                    child.style.left =  left + '%';
                }
                break;
            case 'about':
                if(direction == 0) {
                    this._navBar.style.zIndex = "1001";
                    child.style.float = "left";
                    child.style.width = width + '%';
                }else if(direction == 1){
                    child.style.width = width + '%';
                    child.style.float = "right";
                    child.style.left =  left + '%';
                }
                break;
            case 'project':
                if(direction == 0) {
                    child.style.position = "absolute";
                    this._navBar.style.zIndex = "1001";
                    child.style.float = "left";
                    child.style.height = width + '%';
                    child.style.bottom = 0;
                }else if(direction == 1){
                    child.style.position = "absolute";
                    child.style.top = 0;
                    child.style.bottom = "auto";
                    child.style.height = width + '%';
                    child.style.float = "right";
                }
                break;
            case 'music':
                if(direction == 0) {
                    child.style.position = "absolute";
                    this._navBar.style.zIndex = "1001";
                    child.style.float = "left";
                    child.style.height = width + '%';
                }else if(direction == 1){
                    child.style.position = "absolute";
                    child.style.bottom = 0;
                    child.style.height = width + '%';
                    child.style.float = "right";
                }
                break;
        }
    };
    this._waitForPagingThenMoveChar = function (instance, counter) {
        if (instance === undefined) {
            instance = this._instance;
        }
        (function(instance) {
            var interval = setInterval(function () {
                if (counter > 1) {
                    counter++;
                    PagingEffect.checkIfPagingEffectIsDone(margin, counter, navBar, childNodes);
                } else {
                    clearInterval(interval);
                    instance._getCharBar();
                }
            }, 1500);
        })(instance);
    };
    this._getCharBar = function() {
        for(var i = 0; i < this._textAnimation.textDivTags.length; i++){
            this._moveCharBar(i,0);
        }
    };
    this._moveCharBar = function(child, position, instance) {
        if (instance === undefined) {
            instance = this._instance;
        }
        (function(instance) {
            setTimeout(function () {
                (function(instance) {
                    var interval = setInterval(function () {
                        if (instance._navigationSide == 'contact' || instance._navigationSide == 'about') {
                            if (position > -$(window).width()) {
                                position -= 10;
                                instance._checkScreenWidth(child, position)
                            } else {
                                clearInterval(interval);

                            }
                        } else if(instance._navigationSide == 'project' || instance._navigationSide == 'music'){
                            if(instance._navigationSide == 'project' ) {
                                if (position > -$(window).height()) {
                                    position -= 10;
                                    instance._checkScreenHeight(child, position)
                                } else {
                                    clearInterval(interval);
                                }
                            }else if(instance._navigationSide == 'music'){
                                if (position < $(window).height()) {
                                    position += 10;
                                    instance._checkScreenHeight(child, position)
                                } else {
                                    clearInterval(interval);
                                }
                            }
                        }
                    }, 2)
                })(instance);
                if(child == (instance._textAnimation.textDivTags.length-1) ){
                    instance._moveNavBar();
                }
            }, 100 * child);
        })(instance);
    };
    this._checkScreenWidth = function(child,position){
        var width = 0;
        if($(window).width() >  900){
            width = 150 -$(window).width();
            if(position > width) {
                this._textAnimation.textDivTags[child].style.position = "relative";
                this._textAnimation.textDivTags[child].style.top = position + "px";
            }

        }else if($(window).width() > 700){
            this._textAnimation.textDivTags[child].style.position = "relative";
            this._textAnimation.textDivTags[child].style.top = position + "px";

        }
        else if($(window).width() > 500){
            this._textAnimation.textDivTags[child].style.position = "relative";
            this._textAnimation.textDivTags[child].style.top = position + "px";

        }else{
            this._textAnimation.textDivTags[child].style.position = "relative";
            this._textAnimation.textDivTags[child].style.top = position + "px";

        }
    };
    this._checkScreenHeight = function (child, position) {
        console.log("position??", position);
        console.log("position??", $(window).height());
        var width = 0;
        if(this._navigationSide == 'project' ) {
            if($(window).height() >  900){
                width = 150 -$(window).height();
                if(position > width) {
                    this._textAnimation.textDivTags[child].style.position = "relative";
                    this._textAnimation.textDivTags[child].style.top = position + "px";
                }

            }else if($(window).height() > 700){
                this._textAnimation.textDivTags[child].style.position = "relative";
                this._textAnimation.textDivTags[child].style.top = position + "px";

            }
            else if($(window).height() > 500){
                this._textAnimation.textDivTags[child].style.position = "relative";
                this._textAnimation.textDivTags[child].style.top = position + "px";

            }else{
                width = 80 -$(window).height();
                if(position > width) {
                    this._textAnimation.textDivTags[child].style.position = "relative";
                    this._textAnimation.textDivTags[child].style.top = position + "px";
                }

            }
        }else if(this._navigationSide == 'music'){
            if($(window).height() >  900){
                width = $(window).height() - 150;
                if(position < width) {
                    this._textAnimation.textDivTags[child].style.position = "relative";
                    this._textAnimation.textDivTags[child].style.top = position + "px";
                }

            }else if($(window).height() > 700){
                this._textAnimation.textDivTags[child].style.position = "relative";
                this._textAnimation.textDivTags[child].style.top = position + "px";

            }
            else if($(window).height() > 500){
                this._textAnimation.textDivTags[child].style.position = "relative";
                this._textAnimation.textDivTags[child].style.top = position + "px";

            }else{
                width = $(window).height() - 80;
                if(position < width) {
                    this._textAnimation.textDivTags[child].style.position = "relative";
                    this._textAnimation.textDivTags[child].style.top = position + "px";
                }

            }
        }
    };
    this._checkScreenWidthNavBar = function (position) {
        var width = 0;
        var tempWithText = 0;
        switch (this._navigationSide){
            case 'contact':
                if($(window).width() >  900){
                    width = $(window).width()-120;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.right = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);
                    }

                }else if($(window).width() > 700){
                    width = $(window).width()-100;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.right = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);
                    }

                }
                else if($(window).width() > 500){
                    width = $(window).width()- 80;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.right = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);

                    }

                }else{
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.right = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);

                    }
                }
                break;

            case 'about':
                if($(window).width() >  900){
                    width = $(window).width()-120;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.left = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);

                    }

                }else if($(window).width() > 700){
                    width = $(window).width()-100;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.left = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);
                    }

                }
                else if($(window).width() > 500){
                    width = $(window).width()- 80;
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.left = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);

                    }

                }else{
                    if(position < width) {
                        tempWithText = position - (($(window).width()) - 120);
                        navBar.style.left = position + "px";
                        this._getPositionOfCharToDefault(tempWithText);
                    }
                }
                break;
        }
    };
    this._moveNavBar = function (){
        var instance = this._instance;
        (function(instance) {
            setTimeout(function () {
                var margin = 0;
                var interval = setInterval(function () {
                    if (margin < $(window).width()) {
                        margin += 10;
                        if (margin < $(window).width() - 120){
                            instance._checkScreenWidthNavBar(margin);
                        }
                    } else {
                        console.log("yoyo=?");
                        clearInterval(interval);
                        instance._pagingIntervalForEachNode(1, 0, instance);
                        instance._initializeRightValueForNav();
                        instance._setRightValueForChar();
                        instance._setNextPage();
                        instance._fadeInArrowBar();

                        (function (instance) {
                            setTimeout(function () {
                                instance._animationCompleted = true;
                            }, 2000)
                        })(instance)

                    }
                }, 2);
            },500)
        })(instance);
    };
    this._getPositionOfCharToDefault = function(marginMax){
        for(var i = 0; i < this._textAnimation.textDivTags.length; i++){
            this._textAnimation.textDivTags[i].style.top = marginMax + "px";
        }
    };
    this._initializeRightValueForNav = function() {
        switch (this._navigationSide){
            case 'contact':
                this._context.hideDiv(this._navBars.navMusic);
                this._context.hideDiv(this._navBars.navProjects);
                this._context.hideDiv(this._navBars.navAbout);
                this._navBar.style.transform = "matrix(1,0,0,1,0,0)";
                this._navBar.style.left = "0px";
                this._navBar.style.right = "auto";
                this._navBar.style.display = "block";
                break;
            case 'about':
                this._context.hideDiv(this._navBars.navMusic);
                this._context.hideDiv(this._navBars.navProjects);
                this._context.hideDiv(this._navBars.navContact);
                this._navBar.style.transform = "matrix(1,0,0,1,0,0)";
                this._navBar.style.left = "auto";
                this._navBar.style.right = "0";
                this._navBar.style.display = "block";
                break;
            case 'project':
                this._context.hideDiv(this._navBars.navMusic);
                this._context.hideDiv(this._navBars.navAbout);
                this._context.hideDiv(this._navBars.navContact);
                this._navBar.style.transform = "matrix(1,0,0,1,0,0)";
                this._navBar.style.left = "auto";
                this._navBar.style.right = "0";
                this._navBar.style.display = "block";
                this._navBar.style.top = "0";
                break;
            case 'music':
                this._context.hideDiv(this._navBars.navProjects);
                this._context.hideDiv(this._navBars.navAbout);
                this._context.hideDiv(this._navBars.navContact);
                this._navBar.style.transform = "matrix(1,0,0,1,0,0)";
                this._navBar.style.top = "auto";
                this._navBar.style.display = "block";
                this._navBar.style.bottom = "0px";
                break;
        }
    };
    this._setRightValueForChar = function (){
        for(var i = 0; i < this._textAnimation.textDivTags.length; i++){
            this._textAnimation.textDivTags[i].style.top = 0 + "px";
            this._textAnimation.textDivTags[i].style.position = "relative";
        }
    };
    this._setNextPage = function (){
        this._container.zIndex = "500";
        this._context.showDivLoadTime(this._contentContainer);
    };
    this._fadeInArrowBar = function () {
        var opacity = 0;
        if(this._navigationSide == 'contact' || this._navigationSide == 'about') {
            this._arrowDiv.style.opacity = "0";
            this._arrowDiv.style.display = "table";
        }else if(this._navigationSide == 'project' || this._navigationSide == 'music'){
            this._arrowDiv.style.opacity = "0";
            this._arrowDiv.style.display = "inline-block";
        }
        (function (instance) {

            setTimeout(function () {
                var interval = setInterval(function () {
                    if (opacity <= 1) {
                        opacity += 0.1;
                        instance._arrowDiv.style.opacity = opacity;
                    } else {
                        clearInterval(interval);
                    }
                }, 10)
            },1200)
        })(this._instance);
    };

};