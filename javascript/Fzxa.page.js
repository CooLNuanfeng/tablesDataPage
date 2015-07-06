define(function(){
	var Fzxa = Fzxa ? Fzxa : {};
    var Pager = function(id) {
       var self = this;
       this.id = id;
       this.container = null;
       this.index = 1;         // 当前页码, 从1开始
       this.size = 10;         // 每页显示记录数
       this.maxButtons = 9;    // 显示的分页按钮数量
       this.itemCount = 0;     // 记录总数
       this.pageCount = 0;     // 总页数
        
       this.zh = {
           'pre' : '上一页',  // 上一页
           'next' : '下一页', // 下一页
           'start': '首页',       // 首页
           'end'  : '末页'            // 末页
       };
        
       /**
        * 自定义click
        * @param index: 被点击的页码.
        */
       this.onclick = function (index) {};
        
       /**
        * 内部方法.
        */
       this._onclick = function (index) {
           self.index = index;
           self.onclick(index);
           self.render();
       };
        
       /**
        * 在显示之前计算各种页码变量的值.
        */
       this.calculate = function () {
           self.pageCount = parseInt(Math.ceil(self.itemCount / self.size));
           self.index = parseInt(self.index);
           if (self.index > self.pageCount) {
               self.index = self.pageCount;
           }
       };
        
       /**
        * 渲染分页控件.
        */
       this.render = function () {
           if (self.id != undefined) {
               var div = document.getElementById(self.id);
               div.view = self;
               self.container = div;
           }
           self.calculate();
           var start,end;
           start = Math.max(1, self.index - parseInt(self.maxButtons / 2));
           end = Math.min(self.pageCount, start + self.maxButtons - 1);
           start = Math.max(1, end - self.maxButtons + 1);
           var str = "";
           str += "<div class=\"fzxa-page\">\n";
           if (self.pageCount > 1) {
               if (self.index != 1) {
                   str += '<a href="javascript://1">'+this.zh.start+'</a>';
                   str += '<a href="javascript://' + (self.index - 1) + '" class="pre"><em class="border_t"></em>'+this.zh.pre+'</a>';
               } else {
                   str += '<span>'+this.zh.start+'</span>';
                   str += '<span>'+this.zh.pre+'</span>';
               }
           }
           for (var i = start; i <= end; i++) {
               if (i == this.index) {
                   str += '<span class="cur">' + i + "</span>";
               } else {
                   str += '<a href="javascript://' + i + '">' + i + "</a>";
               }
           }
           if (self.pageCount > 1) {
               if (self.index != self.pageCount) {
                   str += '<a href="javascript://' + (self.index + 1) + '" class="next">'+this.zh.next+'<em class="border_t"></em></a>';
                   str += '<a href="javascript://' + self.pageCount + '">'+this.zh.end+'</a>';
               } else {
                   str += '<span class="next">'+this.zh.next+'</span>';
                   str += '<span>'+this.zh.end+'</span>';
               }
           }
           //str += ' 一共' + self.pageCount + '页, ' + self.itemCount + '条记录 ';
           str += "</div><!-- /.pagerView -->\n";
           self.container.innerHTML = str;
           var a_list = self.container.getElementsByTagName('a');
           for (var i = 0; i < a_list.length; i++) {
               a_list[i].onclick = function () {
                   var index = this.getAttribute('href');
                   if (index != undefined && index != '') {
                       index = parseInt(index.replace('javascript://', ''));
                       self._onclick(index)
                   }
                   return false;
               };
           }
       };
    }
	   
	Fzxa.Pager = function(id){
	    return new Pager(id);
	};
   
    return {
   		Fzxa : Fzxa	
    }
})