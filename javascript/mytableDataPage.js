define(['jquery','Pager'],function($,Pager){
	
	function Mytable(){
		this.options = {
			"theader" : [],
			"data" : [],
			"rows" : 5
		};
		this.$box = null;
	}

	Mytable.prototype = {

		constructor : 'Mytable',

		init : function(id,options){

			this.options = $.extend({},this.options,options);

			this.render(id);
			
		},
		//整体渲染
		render : function(id){

			this.$box= $('#'+id);
			var strHtml="<div class=\"tableBody\">" +
						"<table>" +
							"<thead>" +
							"</thead>" +
							"<tbody>" +
							"</tbody>" +
						"</table>" +
						"</div>" +
						"<div class=\"tablePage\">" +
							"<select id='selectPage' class=\"selectPage\" value='5'>" +
								"<option value=\"5\" selected>5</option>" +
								"<option value=\"10\">10</option>" +
								"<option value=\"15\">15</option>" +
								"<option value=\"30\">30</option>" +
								"<option value=\"50\">50</option>" +
							"</select>" +
							"<div id='table_pages' class=\"table_pages\">" +
							"</div>" +
						"</div>";

			this.$box.html(strHtml);

			this.renderSelectPage();
			this.renderPage(1,this.options.rows,this.options.data.length);
			this.renderTable(1,this.options.rows);
		},

		//渲染表格
		renderTable : function(pageNow,rows){
			var theader = this.options.theader;
			var data = this.options.data;
			var keyMark = [];
			var $table = this.$box.find('table');
			
			var tableHtml = "<table><thead><tr>";

			//渲染表头
			$.each(theader,function(index, item) {
				keyMark.push(item.id);
				tableHtml+='<td mark='+item.id;
				for(var i=0;i<item.attrs.length; i++){
					for(var key in item.attrs[i]){
						//$td.attr(key) = item.attrs[i][key];
						tableHtml+= ' '+key+'='+item.attrs[i][key];
					}
				}
				tableHtml+='>'+item.txt+'</td>';
			});
			tableHtml+='</tr><tbody>';


			//渲染表身
			//console.log(data.length,pageNow,rows);
			var copyArr; //备份数据
			copyArr = data.concat(); 

			copyArr = copyArr.splice((pageNow-1)*rows, rows);

			$.each(copyArr,function(index,item){
				tableHtml+='<tr>';
				for(var i=0; i<keyMark.length; i++){
					tableHtml+='<td>'+item[keyMark[i]]+'</td>'
				}
				tableHtml+='</tr>';
			})

			tableHtml+='</tbody></table>'

			$table.html(tableHtml);

		},

		//渲染筛选页数
		renderSelectPage : function(){
			var selectPage = null;
			var _this =this;
			var counts = this.options.data.length;

			this.$box.find('#selectPage').on('change', function(event) {
				selectPage = $(this).val();
				//return selectPage;
				_this.renderPage(1,selectPage,counts);
				_this.renderTable(1,selectPage);
			});
			
		},

		//渲染分页部分
		renderPage : function(index,size,counts){
			
			var _this = this;
			var pager = new Pager('table_pages',index,size,counts);

		    pager.onclick = function(index){
		   		_this.renderTable(index,size); 
		    };
		    if(counts > 10){
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