// YOUR CODE GOES HERE
$(document).ready(function(){
    
    function action(APIresult){
        console.log(APIresult);
        $.each(APIresult, function(i,item){
            var storeLink = item.media.m;
            console.log(storeLink);
            var image = "<img src=" + storeLink + " height='200' width='200'>"
            $('#search-results').append(image);
        });
    }
    
    $('#search-btn').click(function(){
        var searchItem = $('#search-query').val();
        console.log(searchItem);
        
        searchFlickr(searchItem, action);
    });
    
});