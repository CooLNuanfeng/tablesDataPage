requirejs.config({
    paths: {
        jquery: 'jquery'
    }
});

define(['mytableDataPage.min'],function(tab){
    var mytable = new tab.mytable();


    mytable.alert();
})