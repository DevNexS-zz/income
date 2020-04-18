function first(){
    setTimeout( function(){
        console.log(1);
    }, 500 );
}

function learnJS(lang, callback){
    console.log("Language:" + lang);
    callback();
}

function done(){
    console.log("i have finished it!");
}

learnJS("JavaScript", done);