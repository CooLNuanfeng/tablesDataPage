requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(), //阻止缓存
    paths: {
        jquery: 'jquery',
        Pager :'Fzxa.page'
        //mytableDataPage : '../lib/mytableDataPage.min'
    }
});

require(['mytableDataPage'],function(t){

    var mytable = t.mytable("myTableBox",{
    	theader : [
    		{"attrs" : [{"id":"1"},{'data-name':'ID'}],"txt":'序号',"id" :"userid"},
    		{"attrs" : [{"id":"2"}],"txt":'姓名',"id":"username"},
    		{"attrs" : [{"id":"3"}],"txt":'年龄',"id":"userage"}
    	],
    	data : [
    		{"userid":1,"username":'blue',"userage":23},
    		{"username":'blue',"userid":2,"userage":23},
    		{"userid":3,"userage":23,"username":'blue'},
    		{"userid":4,"username":'blue',"userage":23},
    		{"userid":5,"username":'blue',"userage":23},
    		{"userid":6,"username":'blue',"userage":23},
    		{"userid":7,"username":'blue',"userage":23},
    		{"userid":8,"username":'blue',"userage":23},
    		{"userid":9,"username":'blue',"userage":23},
    		{"userid":10,"username":'blue',"userage":23},
            {"userid":11,"username":'blue',"userage":23},
    		{"userid":12,"username":'blue',"userage":23},
    		{"userid":13,"username":'blue',"userage":23},
    		{"userid":14,"username":'blue',"userage":23},
    		{"userid":15,"username":'blue',"userage":23},
    		{"userid":16,"username":'blue',"userage":23},
    		{"userid":17,"username":'blue',"userage":23},
    		{"userid":18,"username":'blue',"userage":23},
    		{"userid":19,"username":'blue',"userage":23},
    		{"userid":20,"username":'blue',"userage":23},
    		{"userid":21,"username":'blue',"userage":23},
    		{"userid":22,"username":'blue',"userage":23},
    		{"userid":23,"username":'blue',"userage":23},
    		{"userid":24,"username":'blue',"userage":23},
    		{"userid":25,"username":'blue',"userage":23},
    		{"userid":26,"username":'blue',"userage":23},
    		{"userid":27,"username":'blue',"userage":23},
    		{"userid":28,"username":'blue',"userage":23},
    		{"userid":29,"username":'blue',"userage":23},
    		{"userid":30,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23},
    		{"userid":0,"username":'blue',"userage":23}
    	]

    });


})