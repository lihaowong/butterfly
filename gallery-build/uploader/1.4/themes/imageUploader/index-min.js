KISSY.add(function(g,i,j){function h(a){h.superclass.constructor.call(this,a)}var d=i.all;g.extend(h,j,{_addHandler:function(a){var b=this,c=a.file,a=c.id,e=c.target,f=d(".J_Del_"+a);e.on("mouseover mouseout",function(a){"mouseover"==a.type?(f.show(),b._setDisplayMsg(!0,c)):(f.hide(),b._setDisplayMsg(!1,c))});f.data("data-file",c);f.on("click",b._delHandler,b);a=d(".J_Pic_"+a);a.show();b.preview(a)},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(a){var b=a.file,
c=b.id,b=b.result;this._setCount();b&&this._changeImageSrc(a);d(".J_Mask_"+c).hide()},_errorHandler:function(a){var b=a.msg;if(!a.file)return!1;d(".J_ErrorMsg_"+a.file.id).html(b);this._setDisplayMsg(!0,a.file);g.log(b)},preview:function(a){var b=this.get("uploader"),c=b.getPlugin("preview"),b=b.get("fileInput");if(!c)return!1;c.preview(b,a);return this},_setCount:function(){var a=this.get("elCount");if(!a.length)return!1;var b=this.get("uploader").getPlugin("auth");if(!b)return!1;b=b.get("max");
if(!b)return!1;var c=this.getFilesLen();a.text(Number(b)-c)},_setDisplayMsg:function(a,b){if(!b)return!1;var c=d(".J_Mask_"+b.id);if(c.parent("li")&&c.parent("li").hasClass("error"))return!1;c[a&&"show"||"hide"]()},_delHandler:function(a){var b=this.get("uploader"),c=b.get("queue"),e=d(a.target).data("data-file"),a=c.getFileIndex(e.id),e=e.status;("start"==e||"progress"==e)&&b.cancel(a);c.remove(a);this._setCount()},getFilesLen:function(a){a||(a="success");return this.get("queue").getFiles(a).length},
_changeImageSrc:function(a){var b=a.result.url,a=d(".J_Pic_"+a.file.id);if(""==a.attr("src")||g.UA.safari)a.show(),a.attr("src",b)}},{ATTRS:{name:{value:"imageUploader"},cssUrl:{value:"gallery/uploader/1.4/themes/imageUploader/style.css"},fileTpl:{value:'<li id="queue-file-{id}" class="g-u" data-name="{name}"><div class="pic"><a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</p></div></div><a class="J_Del_{id} del-pic" href="#">\u5220\u9664</a></li>'},
use:{value:"proBars,filedrop,preview"},allowExts:{value:"jpg,png,gif,jpeg"},authMsg:{value:{max:"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u56fe\u7247\uff01",maxSize:"\u56fe\u7247\u8d85\u8fc7{maxSize}\uff01",required:"\u81f3\u5c11\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247\uff01",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",allowRepeat:"\u8be5\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\uff01",widthHeight:"\u56fe\u7247\u5c3a\u5bf8\u5fc5\u987b\u662f{wh}\uff01"}},elCount:{value:"#J_UploadCount",getter:function(a){return d(a)}}}});return h},{requires:["node","../../theme"]});