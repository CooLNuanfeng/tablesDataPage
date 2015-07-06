define(function(){

	function Pager(id,index,size,itemCount){ 
		this.id = id;
		this.container = null;
		this.index = index;         // 当前页码, 从1开始
		this.size = size;         // 每页显示记录数
		this.maxButtons = 9;    // 显示的分页按钮数量
		this.itemCount = itemCount;     // 记录总数
		this.pageCount = 0;     // 总页数
		 
		this.zh = {
		    'pre' : '',  // 上一页
		    'next' : '', // 下一页
		    'start': '', // 首页
		    'end'  : ''  // 末页
		};
	}

	Pager.prototype = {
		constructor: 'Pager',
		onclick :  function (index) {},
		_onclick : function (index) {
		   var self = this;
           self.index = index;
           self.onclick(index);
           self.render();
        },
        /**
        * 在显示之前计算各种页码变量的值.
        */
        calculate : function () {
           var self = this;
           self.pageCount = parseInt(Math.ceil(self.itemCount / self.size));
           self.index = parseInt(self.index);
           if (self.index > self.pageCount) {
               self.index = self.pageCount;
           }
        },
        /**
        * 渲染分页控件.
        */
        render : function () {
        	  var self = this;
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
                      str += '<a href="javascript://1" class="firstPage">'+this.zh.start+'</a>';
                      str += '<a href="javascript://' + (self.index - 1) + '" class="prevPage"><em class="border_t"></em>'+this.zh.pre+'</a>';
                  } else {
                      str += '<span class="firstPage">'+this.zh.start+'</span>';
                      str += '<span class="prevPage">'+this.zh.pre+'</span>';
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
                      str += '<a href="javascript://' + (self.index + 1) + '" class="nextPage">'+this.zh.next+'<em class="border_t"></em></a>';
                      str += '<a href="javascript://' + self.pageCount + '" class="lastPage">'+this.zh.end+'</a>';
                  } else {
                      str += '<span class="nextPage">'+this.zh.next+'</span>';
                      str += '<span class="lastPage">'+this.zh.end+'</span>';
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
        }
	};
   
    return Pager;
})