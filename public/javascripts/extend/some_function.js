function obj2str(o){
    var r = [];
    if(typeof o == "string" || o == null) {
        return o;
    }
    if(typeof o == "object"){
        if(!o.sort){
            r[0]="{"
            for(var i in o){
                r[r.length]=i;
                r[r.length]=":";
                r[r.length]=obj2str(o[i]);
                r[r.length]=",";
            }
            r[r.length-1]="}"
        }else{
            r[0]="["
            for(var i =0;i<o.length;i++){
                r[r.length]=obj2str(o[i]);
                r[r.length]=",";
            }
            r[r.length-1]="]"
        }
        return r.join("");
    }
    return o.toString();
}



var OSX = null
var OSX2 = null
var OSX3 = null
jQuery(function ($) {
    
    //标签窗口
    OSX = {
        container: null,
        init: function () {
            $("#add_tag").click(function (e) {
                e.preventDefault();	

                $("#osx-modal-content").modal({
                    overlayId: 'osx-overlay',
                    containerId: 'osx-container',
                    closeHTML: null,
                    minHeight: 80,
                    opacity: 65, 
                    position: [0,0],
                    overlayClose: true,
                    onOpen: OSX.open,
                    onClose: OSX.close
                });
            });
        },
        open: function (d) {
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn( function () {

                $("#osx-modal-content", self.container).show();
                var title = $("#osx-modal-title", self.container);
                title.show();
                d.container.slideDown( function () {
                    setTimeout(function () {
                        var h = $("#osx-modal-data", self.container).height()
                        + title.height()
                        + 20; // padding
                        d.container.animate(
                        {
                            height: h
                        }, 
                        200,
                        function () {
                            //                            alert(3)
                            $("div.close", self.container).show();
                            $("#osx-modal-data", self.container).show();
                            $('#plan_day').datepicker({
                                changeYear:true, 
                                yearRange:'1900:2025', 
                                dateFormat:'mm/dd/yy'
                            });

                            $('#plan_day').live('keyup', function(){
                                var val = $(this).val();
                                if(val == '' || val.match(/1900/)) {
                                    $('#child-selection').show();
                                } else {
                                    $('#child-selection select').val('');
                                    $('#child-selection').hide();
                                }
                            }).trigger('keyup');
                            
                            
                            
                        }
                        );
                    }, 300);
                });
            })
        },
        close: function (d) {

            var self = this; // this = SimpleModal object
            d.container.animate(
            {
                top:"-" + (d.container.height() + 20)
            },
            500,
            function () {
                temp_my_all_tags= $("#my_all_tags").clone();
                temp_place_tags_input = $("#place_tags_input").attr("value")
                //                                       alert(temp_my_all_tags.html())
                //                                        alert($("#place_tags_input").attr("value"))
                                        
                self.close(); // or $.modal.close();
                $("#my_all_tags").html(temp_my_all_tags.html())
                $("#place_tags_input").attr("value",temp_place_tags_input)
                                        
            }
            );
        }
    };

    OSX.init();
        
        
        
        

    OSX2 = {
        container: null,
        init: function () {
            $("#i_want_to_go").click(function (e) {
                e.preventDefault();	

                $("#osx-modal-content").modal({
                    overlayId: 'osx-overlay',
                    containerId: 'osx-container',
                    closeHTML: null,
                    minHeight: 200,
                    opacity: 65, 
                    position: ["0",],
                    overlayClose: true,
                    autoResize:true,
                    onOpen: OSX2.open,
                    onClose: OSX2.close
                });
            });
        },
        open: function (d) {
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn( function () {

                $("#osx-modal-content", self.container).show();
                var title = $("#osx-modal-title", self.container);
                title.show();
                d.container.slideDown( function () {
                    setTimeout(function () {
                        var h = $("#osx-modal-data", self.container).height()
                        + title.height()
                        + 20; // padding
                        d.container.animate(
                        {
                            height: h
                        }, 
                        200,
                        function () {
                            $("div.close", self.container).show();
                            $("#osx-modal-data", self.container).show();
                          
                        }
                        );
                    }, 300);
                });
            })
        },
        close: function (d) {

            var self = this; // this = SimpleModal object
            d.container.animate(
            {
                top:"-" + (d.container.height() + 20)
            },
            500,
            function () {
                temp_my_all_tags= $("#my_all_tags").clone();
                temp_place_tags_input = $("#place_tags_input").attr("value")
                //                                        alert(temp_my_all_tags.html())
                //                                        alert($("#place_tags_input").attr("value"))
                                        
                self.close(); // or $.modal.close();
                $("#my_all_tags").html(temp_my_all_tags.html())
                $("#place_tags_input").attr("value",temp_place_tags_input)
                                        
            }
            );
        }
    };

    OSX2.init();
    
    //我的标签
    OSX3= {
        container: null,
        init: function () {
            $("#new_place_in_window").click(function (e) {

                e.preventDefault();	

                $("#osx-modal-content").modal({
                    overlayId: 'osx-overlay',
                    containerId: 'osx-container',
                    closeHTML: null,
                    minHeight: 200,
                    opacity: 65, 
                    position: ["0",],
                    overlayClose: true,
                    autoResize:true,
                    onOpen: OSX3.open,
                    onClose: OSX3.close
                });
            });
        },
        open: function (d) {
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn( function () {

                $("#osx-modal-content", self.container).show();
                var title = $("#osx-modal-title", self.container);
                title.show();
                d.container.slideDown( function () {
                    setTimeout(function () {
                        var h = $("#osx-modal-data", self.container).height()
                        + title.height()
                        + 20; // padding
                        d.container.animate(
                        {
                            height: h
                        }, 
                        200,
                        function () {

                            
                            $("div.close", self.container).show();
                            $("#osx-modal-data", self.container).show();
                            MapObject.initialize(null) ;
                        }
                        );
                    }, 300);
                });
            })
        },
        close: function (d) {

            var self = this; // this = SimpleModal object
            d.container.animate(
            {
                top:"-" + (d.container.height() + 20)
            },
            500,
            function () {
                //               alert();
                self.close(); // or $.modal.close();             
            }
            );
        }
    };

    OSX3.init();
    //活动
    OSX4 = {
        container: null,
        init: function () {
            $("#activity").click(function (e) {
                e.preventDefault();	

                $("#activity-modal-content").modal({
                    overlayId: 'activity-overlay',
                    containerId: 'activity-container',
                    closeHTML: null,
                    minHeight: 200,
                    opacity: 65, 
                    position: ["0",],
                    overlayClose: false,
                    autoResize:true,
                    onOpen: OSX4.open,
                    onClose: OSX4.close
                });
            });
        },
        open: function (d) {
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn( function () {

                $("#activity-modal-content", self.container).show();
                var title = $("#activity-modal-title", self.container);
                title.show();
                    
                $('#activity_activity_time, #activity_apply_time').datepicker({
                    changeYear:true, 
                    yearRange:'1900:2025', 
                    dateFormat:'yy-m-d'
                });
                d.container.slideDown( function () {
                    setTimeout(function () {
                        var h = $("#activity-modal-data", self.container).height()
                        + title.height()
                        + 20; // padding
                        d.container.animate(
                        {
                            height: h
                        }, 
                        200,
                        function () {
                            $("div.close", self.container).show();
                            $("#activity-modal-data", self.container).show();
                          
                        }
                        );
                    }, 300);
                });
            })
        },
        close: function (d) {

            var self = this; // this = SimpleModal object
            d.container.animate(
            {
                top:"-" + (d.container.height() + 20)
            },
            500,
            function () {
                temp_my_all_tags= $("#my_all_tags").clone();
                temp_place_tags_input = $("#place_tags_input").attr("value")
                //                                        alert(temp_my_all_tags.html())
                //                                        alert($("#place_tags_input").attr("value"))
                                        
                self.close(); // or $.modal.close();
                $("#my_all_tags").html(temp_my_all_tags.html())
                $("#place_tags_input").attr("value",temp_place_tags_input)
                                        
            }
            );
        }
    };

    OSX4.init();
    
    
     //活动
    OSX5 = {
        container: null,
        init: function () {
            $("#dream").click(function (e) {
                e.preventDefault();	

                $("#dream-modal-content").modal({
                    overlayId: 'dream-overlay',
                    containerId: 'dream-container',
                    closeHTML: null,
                    minHeight: 200,
                    opacity: 65, 
                    position: ["0",],
                    overlayClose: false,
                    autoResize:true,
                    onOpen: OSX5.open,
                    onClose: OSX5.close
                });
            });
        },
        open: function (d) {
            var self = this;
            self.container = d.container[0];
            d.overlay.fadeIn( function () {

                $("#dream-modal-content", self.container).show();
                var title = $("#dream-modal-title", self.container);
                title.show();
                    
                d.container.slideDown( function () {
                    setTimeout(function () {
                        var h = $("#dream-modal-data", self.container).height()
                        + title.height()
                        + 20; // padding
                        d.container.animate(
                        {
                            height: h
                        }, 
                        200,
                        function () {
                            $("div.close", self.container).show();
                            $("#dream-modal-data", self.container).show();
                          
                        }
                        );
                    }, 300);
                });
            })
        },
        close: function (d) {

            var self = this; // this = SimpleModal object
            d.container.animate(
            {
                top:"-" + (d.container.height() + 20)
            },
            500,
            function () {
                temp_my_all_tags= $("#my_all_tags").clone();
                temp_place_tags_input = $("#place_tags_input").attr("value")
                //                                        alert(temp_my_all_tags.html())
                //                                        alert($("#place_tags_input").attr("value"))
                                        
                self.close(); // or $.modal.close();
                                        
            }
            );
        }
    };

    OSX5.init();

});





//ajax 省市查询效果 和全站 marker搜索js
function InputSuggest(opt){
    this.win = null;
    this.doc = null;
    this.url = opt.url||"/addresses/search_address";
    this.container = null;
    this.items = null;
    this.dataType = 'simple'; //查询类型，包括基本的省市信息查询和网站整体的marker查询
    this.ajaxing = false;
    this.last_ajax_time = null; //每隔一段时间才去AJAX请求
    this.input = opt.input || null;
    this.containerCls = opt.containerCls || 'suggest-container';
    this.itemCls = opt.itemCls || 'suggest-item';
    this.activeCls = opt.activeCls || 'suggest-active';
    this.width = opt.width;
    this.opacity = opt.opacity;
    this.data = opt.data || [];
    this.active = null;
    this.visible = false;
    this.init();
}
InputSuggest.prototype = {
    init: function(){
        this.win = window;
        this.doc = window.document;
        this.container = this.$C('div');
        this.attr(this.container, 'class', this.containerCls);
        this.doc.body.appendChild(this.container);
		
        var _this = this, input = this.input;

        this.on(input,'keyup',function(e){
            if(input.value==''){
                _this.hide();
            }else{
                _this.onKeyup(e);
            }

        });
                
        this.on(input,'focus',function(e){
	
            _this.onfocus(e);
			

        });
                
                
        // blur会在click前发生，这里使用mousedown
        this.on(input,'blur',function(e){
            _this.hide();
        });
        this.onMouseover();
        this.onMousedown();
        this.setPos();

    },
    $C: function(tag){
        return this.doc.createElement(tag);
    },
    getPos: function (el){

        var target = el;
        var pos = [target.offsetLeft, target.offsetTop];
    
        var target = target.offsetParent;
        while (target)
        {
            pos[0] += target.offsetLeft;
            pos[1] += target.offsetTop;
        
            target = target.offsetParent
        }
   
        return pos;


    },
    setPos: function(){
        var input = this.input,
        pos = this.getPos(input),
        brow = this.brow,
        width = this.width,
        opacity = this.opacity,
        container = this.container;
        container.style.cssText =
        'position:absolute;overflow:hidden;left:'
        + pos[0] + 'px;top:'
        + (pos[1]+input.offsetHeight) + 'px;width:'
        // IE6/7/8/9/Chrome/Safari input[type=text] border默认为2，Firefox为1，因此取offsetWidth-2保证与FF一致
        + (brow.firefox ? input.clientWidth : input.offsetWidth-2) + 'px;';
        if(width){
            container.style.width = width + 'px';
        }
        if(opacity){
            if(this.brow.ie){
                container.style.filter = 'Alpha(Opacity=' + opacity * 100 + ');';
            }else{
                container.style.opacity = (opacity == 1 ? '' : '' + opacity);
            }
        }
    },
    show: function(){
        this.container.style.visibility = 'visible';
        this.visible = true;
    },
    hide: function(){
        this.container.style.visibility = 'hidden';
        this.visible = false;
    },
    attr: function(el, name, val){
        if(val === undefined){
            return el.getAttribute(name);
        }else{
            el.setAttribute(name,val);
            name=='class' && (el.className = val);
        }
    },
    on: function(el, type, fn){
        el.addEventListener ? el.addEventListener(type, fn, false) : el.attachEvent('on' + type, fn);
    },
    un: function(el, type, fn){
        el.removeEventListener ? el.removeEventListener(type, fn, false) : el.detachEvent('on' + type, fn);
    },
    brow: function(ua){
        return {
            ie: /msie/.test(ua) && !/opera/.test(ua),
            opera: /opera/.test(ua),
            firefox: /firefox/.test(ua)
        };
    }(navigator.userAgent.toLowerCase()),
    onKeyup: function(e){
        // this.setPos();
        var container = this.container, input = this.input, iCls = this.itemCls, aCls = this.activeCls;
        if(this.visible){
                    
            switch(e.keyCode){
                case 13: // Enter
                    if(this.active){
                        input.value = this.active.firstChild.data;
                        this.hide();
                    }
                    return;
                case 38: // 方向键上
                    if(this.active==null){
                        this.active = container.lastChild;
                        this.attr(this.active, 'class', aCls);
                        input.value = this.active.firstChild.data;
                    }else{
                        if(this.active.previousSibling!=null){
                            this.attr(this.active, 'class', iCls);
                            this.active = this.active.previousSibling;
                            this.attr(this.active, 'class', aCls);
                            input.value = this.active.firstChild.data;
                        }else{
                            this.attr(this.active, 'class', iCls);
                            this.active = null;
                            input.focus();
                            input.value = input.getAttribute("curr_val");
                        }
                    }
                    return;
                case 40: // 方向键下
                    if(this.active==null){
                        this.active = container.firstChild;
                        this.attr(this.active, 'class', aCls);
                        input.value = this.active.firstChild.data;
                    }else{
                        if(this.active.nextSibling!=null){
                            this.attr(this.active, 'class', iCls);
                            this.active = this.active.nextSibling;
                            this.attr(this.active, 'class', aCls);
                            input.value = this.active.firstChild.data;
                        }else{
                            this.attr(this.active, 'class', iCls);
                            this.active = null;
                            input.focus();
                            input.value = input.getAttribute("curr_val");
                        }
                    }
                    return;

            }
        }
        if(e.keyCode==27){ // ESC键
            this.hide();
            input.value = this.attr(input,'curr_val');
            return;
        }
                
        if(input.value.indexOf('@')!=-1){
            return;
        }
        this.items = [];
        if(this.attr(input,'curr_val')!=input.value){
            this.getDataFromService(this,input)
        }
    },
        
        
    onfocus: function(e){
        this.items = [];
        this.getDataFromService(this,this.input)
    },
        

    //从后台获取省市搜索信息
    getDataFromService: function(obj,input){
        obj.ajaxing = true;
        now = (new   Date()).getTime()
        if (obj.last_ajax_time !=null && eval(now - obj.last_ajax_time)<'500'){
            return
        }
        obj.last_ajax_time = now
        this.setPos();
        $.ajax({
            type: "POST",
            url: obj.url +"?type="+obj.dataType+"&key="+input.value,
            success: function(message){
                obj.data = message.data;
                obj.container.innerHTML = '';
                if ( obj ==null){
                    this.ajaxing =false
                    return 
                }
                for(var i=0,len=obj.data.length;i<len;i++){
                    var item = obj.$C('div');
                    obj.attr(item, 'class', obj.itemCls);
                    item.innerHTML =  obj.data[i];
                    obj.items[i] = item;
                    obj.container.appendChild(item);
                }
                if (obj.data.length>0){
                    obj.attr(input,'curr_val',input.value);
                    obj.show();   
                }
                this.ajaxing =false
			
            }
        });

    },
    onMouseover: function(){
        var _this = this, icls = this.itemCls, acls = this.activeCls;
        this.on(this.container,'mouseover',function(e){
            var target = e.target || e.srcElement;
            if(target.className == icls){
                if(_this.active){
                    _this.active.className = icls;
                }
                target.className = acls;
                _this.active = target;
            }
        });
    },
    onMousedown: function(){
        var _this = this;
        this.on(this.container,'mousedown',function(e){
            var target = e.target || e.srcElement;
            _this.input.value = target.innerHTML;
            _this.hide();
        });
    }
}









//一些加載文檔后執行的js
$(document).ready(function() {
    //添加和刪除關注place
    $(".follow_link").live("click",function(){
        link = $(this)
        marker_id =link.attr("marker_id")
        marker_type = link.attr("marker_type")
        action = link.attr("action")
        $.ajax({
            type: "post",
            url: "/markers/follow?marker_id="+marker_id +"&do="+action +"&marker_type="+marker_type ,
            success: function(message){
                if(message.success ==true){
                    if(action=='add'){
                        link.attr("action",'cancer')
                        link.html("取消关注")
                        link.attr("data-confirm","真的要取消关注")
                    }else{
                        link.attr("action",'add')
                        link.html("添加关注")
                        link.removeAttr("data-confirm")
                    }
                }
            }
        });
    });


    $(".location_now").tooltip({
        position: 'bottom center ',  
        delay: 50
    });

    

    $("#invite_friends").click(function(){
        friend_ids = ""
        actiity_id = $("#new_dream").attr("dream_id")
        $.each($(".select_friends"), function(){
            if($(this).attr("checked")==true){
                friend_ids += ($(this).attr("friend_id")+",")
            }
        })
        if(friend_ids!="" && actiity_id!= null){
            $.ajax({                                                
                type: "GET",                                    
                url: "/activities/invite_friend?dream_id="+actiity_id+"&friends_ids="+friend_ids,
                success: function(data, textStatus){
                    $("#update_notice").html("邀请已发出")
                    $("#update_notice").show()
                    $('#update_notice').fadeOut(15000);
                } 
            });
        }else{
            $("#update_notice").html("请选择好友")
            $("#update_notice").show()
            $('#update_notice').fadeOut(15000);
        }
    })


})