﻿import Promise from './promise.min';

//TODO: make Promise = Promise.Promise

class Utils {
	constructor() {
        this.loadUrl = function(url) {
            return new Promise.Promise(function(resolve, reject) {
                var req = new XMLHttpRequest();
                req.open('GET', url);
                req.onload = function() {
                    if(req.status === 200){
                        resolve(req.response);
                    }else{
                        reject(Error(req.statusText));
                    }
                };
                req.onerror = function(){
                    reject(Error('Network Error'));
                };
                req.send();
            });
        };
        this.loadScript = function(url) {
        	return new Promise.Promise(function(resolve, reject) {
                var ready = false,
					tag = document.getElementsByTagName('script')[0],
					script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                script.async = true;
                script.onload = script.onreadystatechange = function() {
                    if(!ready && (!this.readyState || this.readyState === 'complete')){
                        ready = true;
                        resolve(this);
                    }
                };
                script.onerror = script.onabort = reject;
                tag.parentNode.insertBefore(script, tag);
            });
        };
        this.testFeature = function(feature) {
        	if(window[feature] === undefined) {
        		return false;
        	}
        	return true;
        };
       
	}

	loadUrl(url) {
		this.loadUrl(url);
	}

	loadScript(url) {
		this.loadScript(url);
	}

	testFeature(feature) {
		this.testFeature(feature);
	}

	name() {
		return "Utils";
	}
}
export default Utils;