/*Updating elements in html file*/

/*$('.post-list-item-header').html("Title added with JavaScript");
$('.post-list-item-body').html("This post's body text was populated with javascript too");
$('.post-load-btn').on('click', function (event) {
    $('.post-list-item-header').html("Title added with JavaScript");
    $('.post-list-item-body').html("This post's body text was populated with javascript too");
});*/


/*Updating elements in html file in a clean way*/
/*var post = {
    "header": "Title added with JavaScript",
    "body": "This post's body text was populated with JavaScript too"
};

$('.post-load-btn').on('click', function (event) {
    $('.post-list-item-header').html(post.header);
    $('.post-list-item-body').html(post.body);
});*/

/*Updating elements in html file by getting data from json file*/
/*    $.ajax({
        url: 'post.json',
        success: function (post) {
            $('.post-list-item-header').html(post.header);
            $('.post-list-item-body').html(post.body);
        }
    });
});
*/

/*updating it such that it communicates with the route in app.js 
because elements will be dynamic and extracted from database not static*/
$('.post-load-btn').on('click', function (event) {
    $.ajax({
        url: 'api/post',
        success: function (post) {
            $('.post-list-item-header').html(post.header);
            $('.post-list-item-body').html(post.body);
        }
    });
})