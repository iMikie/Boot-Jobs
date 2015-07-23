!function(e){"use strict";function t(e,t){var i=e.create("masonry");return i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var e=this.cols;for(this.colYs=[];e--;)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;this.columnWidth=n&&t(n).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},i.prototype.getContainerWidth=function(){var e=this.options.isFitWidth?this.element.parentNode:this.element,n=t(e);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth%this.columnWidth,i=t&&1>t?"round":"ceil",r=Math[i](e.size.outerWidth/this.columnWidth);r=Math.min(r,this.cols);for(var a=this._getColGroup(r),o=Math.min.apply(Math,a),s=n(a,o),l={x:this.columnWidth*s,y:o},u=o+e.size.outerHeight,c=this.cols+1-a.length,h=0;c>h;h++)this.colYs[s+h]=u;return l},i.prototype._getColGroup=function(e){if(2>e)return this.colYs;for(var t=[],n=this.cols+1-e,i=0;n>i;i++){var r=this.colYs.slice(i,i+e);t[i]=Math.max.apply(Math,r)}return t},i.prototype._manageStamp=function(e){var n=t(e),i=this._getElementOffset(e),r=this.options.isOriginLeft?i.left:i.right,a=r+n.outerWidth,o=Math.floor(r/this.columnWidth);o=Math.max(0,o);var s=Math.floor(a/this.columnWidth);s-=a%this.columnWidth?0:1,s=Math.min(this.cols-1,s);for(var l=(this.options.isOriginTop?i.top:i.bottom)+n.outerHeight,u=o;s>=u;u++)this.colYs[u]=Math.max(l,this.colYs[u])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this.options.isFitWidth&&(e.width=this._getContainerFitWidth()),e},i.prototype._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;return(this.cols-e)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!==this.containerWidth},i}var n=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,i=e.length;i>n;n++){var r=e[n];if(r===t)return n}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):e.Masonry=t(e.Outlayer,e.getSize)}(window);