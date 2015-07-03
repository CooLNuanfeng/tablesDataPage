requirejs.config({
    paths: {
        jquery: 'jquery',
        //mytableDataPage : '../lib/mytableDataPage.min'
    }
});

define(['mytableDataPage'],function(t){

    var mytable = t.mytable("myTableBox",{
    	theader : [
    		{"attr" : [{"id":"1"},{'data-name':'ID'}],"txt":'序号',"id" :"userid"},
    		{"attr" : [{"id":"2"}],"txt":'姓名',"id":"username"},
    		{"attr" : [{"id":"3"}],"txt":'序号',"id":"userage"}
    	],
    	data : [
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