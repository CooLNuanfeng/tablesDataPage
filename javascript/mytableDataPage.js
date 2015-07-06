define(['jquery','Fzxa'],function($,Fzxa){
	
	function Mytable(){
		this.options = {
			"theader" : [],
			"data" : [],
			"rows" : 5
		};
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
							"<div id='table_pages' class=\"table_pages\">" +
							"</div>" +
						"</div>";

			$box.html(strHtml);

			this.renderTable($box);
			this.renderSelectPage($box);
			this.renderPage($box);
		},
		
		//渲染表格
		renderTable : function($obj){

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
			console.log(Fzxa);
			var pager = Fzxa.Pager('table_pages');
			   pager.itemCount = 20;
			   pager.size = 10;
			   pager.index = 1;
			   pager.onclick = function(index){
			   	alert(index);
			   };
			   if(pager.itemCount > 10){
			       pager.render();
			   }
		},

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