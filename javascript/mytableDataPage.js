define(['jquery'],function($){
	
	function Mytable(){
		this.options = {
			"theader" : [],
			"data" : [],
			"rows" : 5
		};
		//this.tableHtml = '';
	}

	Mytable.prototype = {

		constructor : 'Mytable',

		init : function(id,options){

			this.options = $.extend({},this.options,options);

			this.render(id);
			
		},
		//整体渲染
		render : function(id){

			var $box = $('#'+id);
			var strHtml="<div class=\"tableBody\">" +
						"</div>" +
						"<div class=\"tablePage\">" +
							"<select class=\"selectPage\" value=''>" +
								"<option value=\"5\">5</option>" +
								"<option value=\"10\">10</option>" +
								"<option value=\"15\">15</option>" +
								"<option value=\"30\">30</option>" +
								"<option value=\"50\">50</option>" +
							"</select>" +
							"<div class=\"table_pages\">" +
							"</div>" +
						"</div>";

			$box.html(strHtml);

			this.renderTable($box);
			this.renderSelectPage($box);
			this.renderPage($box);
		},
		//渲染表格
		renderTable : function($obj){

			var pages = this.getPagesSum();
			var tableHtml ="";

			$obj.find('.tableBody').html(tableHtml);
		},
		//渲染筛选页数
		renderSelectPage : function($obj){
			var rows = this.options.rows;
			var html = '';
			var arr = [5,10,15,30,50];

			$.each(arr,function(index,value){
				if(value == rows){
					html +="<option value="+value+" selected>"+value+"</option>";
				}else{
					html+="<option value="+value+">"+value+"</option>"
				}
			});
			
			$obj.find('.selectPage').html(html);
		},
		//渲染分页部分
		renderPage : function($obj){
			var pages = this.getPagesSum()+1;
			var pageNow = 1;
			var pageHtml='<a href="javascript:;" class="firstPage"></a><a href="javascript:;" class="prevPage"></a>';

			if(pages>6){
				pageHtml+='<a href="javascript:;" class="active page_row">1</a><a href="javascript:;" class="page_row">2</a><a href="javascript:;" class="page_row">3</a><a href="javascript:;" class="page_row">4</a><a href="javascript:;" class="page_row">5</a><span>...</span><a href="javascript:;" class="page_row">'+pages+'</a>';	
			}else{				
				for(var i=1; i<=pages;i++){
					if(i==pageNow){
						pageHtml+='<a href="javascript:;" class="active page_row">'+i+'</a>';
					}else{
						pageHtml+='<a href="javascript:;" class="page_row">'+i+'</a>';
					}					
				}			
			}
			pageHtml+='<a href="javascript:;" class="nextPage"></a><a href="javascript:;" class="lastPage"></a>';
			$obj.find('.table_pages').html(pageHtml);

			this.pageEvent($obj);	
		},

		//分页按钮相关交互
		pageEvent : function($obj){
			$obj.find('.table_pages').on('click','.page_row',function(){
				$(this).addClass('active').siblings('a').removeClass('active');
			})
		},

		//计算每页应显示的行数或个数
		getPagesSum : function(){
			var sum = Math.floor(this.options.data.length/this.options.rows);

			return sum;
		}

	}

	function FactoryTable(id,json){
		var mytab = new Mytable();

		mytab.init(id,json);

		return mytab;
	}

	return {
		mytable : FactoryTable
	}
});