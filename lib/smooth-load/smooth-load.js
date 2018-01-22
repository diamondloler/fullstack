(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory();
        });
    } else if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = factory();
    } else {
        window.smoothLoading = factory();
    }
})(function () {
    function smoothLoading(options_) {
        'use strict';

        
        //default settings
        var options = {
            speed: 1000,
            elem: null,
            easing: 'ease-in-out'
        };


        /**
         * merge user settings
         * @param {obj} target Merged destination
         * @returns {obj}
         */
        var merge = function (target) {
            for (var i = 1; i < arguments.length; i++) {
                let source = arguments[i] || {};
                for (var key in source) {
                    if (source.hasOwnProperty(key) && source[key] !== undefined) {
                        target[key] = source[key]
                    }
                }
            }
            return target;
        }

        options = merge(options, options_)

        var loadingElement = options.elem
        if (loadingElement == undefined || loadingElement.nodeType == undefined || loadingElement.nodeType != 1) {
            throw new TypeError('elem must be a HTMLElement');
            return;
        }

        var getTimeFunc = function (setting, time) {
            var pattern = 0;
            if (setting == 'ease-in-out') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
            if (setting == 'ease-in') pattern = time * time;
            if (setting == 'ease-out') pattern = time * (2 - time);
            return pattern || time;
        }


        /**
         * ready to loading
         */
        var start = null,
            percentage = 0,
            time_interseptal = 0,
            width = 0,
            frameId = 0;

        var stopLoop =  function () {
            window.cancelAnimationFrame(frameId);
            return true;
        }

        var loopWidth = function (timestamp) {
            if (!start) { start = timestamp; } //记录第一次绘制时间
            time_interseptal += timestamp - start; //第一次绘制时间与第二次绘制时间的时间差 （递增）
            percentage = time_interseptal / parseInt(options.speed, 10);
            loadingElement.style.width = (60 * getTimeFunc(options.easing, percentage)) + '%';
            width = loadingElement.style.width.replace(/\%*$/, '')
            if (width < 100) {
                frameId = window.requestAnimationFrame(loopWidth)
            }
        }

        //start loading
        stopLoop()
        frameId = window.requestAnimationFrame(loopWidth)

        return {
            stopLoop: stopLoop
        }
    }

    return smoothLoading;
})
