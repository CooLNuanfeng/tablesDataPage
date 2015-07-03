requirejs.config({
    paths: {
        jquery: 'jquery',
        mytableDataPage : '../lib/mytableDataPage.min'
    }
});

define(['mytableDataPage'],function(tab){
    var mytable = new tab.mytable();


    mytable.alert();
})