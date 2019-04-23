
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/contact",
    "title": "Contact Memair",
    "body": "Please email us at support@memair. com "
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Kid Friendly Video Recommender                              :               Memair is excited to introduce our Kid Friendly Video recommender. To try it out;:                                                                                                                                                                       memair                                26 Feb 2019                                                                                                                                                                                                                                                                                                                                    FOMO in my hometown                              :               Memair lets you know where you’ve been, which is wonderful. But quantifying yourself also lets you know where you haven’t been. After asking Memair “Where. . . :                                                                                                                                                                       Greg                                16 Sep 2016                                                                                                                                  All Stories:                                                                                                     Kid Friendly Video Recommender              :       Memair is excited to introduce our Kid Friendly Video recommender. To try it out;:                                                                               memair                26 Feb 2019                                                                                                                                    Better YouTube Recommendations              :       We’re making better YouTube recommendations. Our first video recommender is designed for people with Autism, limiting their exposure to inappropriate content. We decided to service the Autism community first as. . . :                                                                               memair                11 Feb 2019                                                                                                                                    Introducing Create &amp; Bulk Create GraphQL endpoints              :       Memair has introduced two new GraphQL mutations for importing data. :                                                                               memair                19 Sep 2018                                                                                                                                    Quantified Self &amp; Biohacking in Media              :       Most quantified self / biohacking movies &amp; TV shows are dystopian focusing on the possible harmful affects of life logging. We obviously believe that quantifying our selves will improve quality. . . :                                                                               Greg                20 Sep 2016                                                                                                                                    FOMO in my hometown              :       Memair lets you know where you’ve been, which is wonderful. But quantifying yourself also lets you know where you haven’t been. After asking Memair “Where have I been this year”. . . :                                                                               Greg                16 Sep 2016                                                                                                                                    Otto explains Memair              :       Introducing Otto to explain the power of Quantified Self and Memair:                                                                               memair                09 Aug 2016                                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/blogs/news/setting-up-a-kid-friendly-video-recommender",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/redirects.json",
    "title": "",
    "body": "{“/blogs/news/setting-up-a-kid-friendly-video-recommender”:”http://localhost:4000/kid-friendly-video-recommender/”} "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "http://localhost:4000/kid-friendly-video-recommender/",
    "title": "Kid Friendly Video Recommender",
    "body": "2019/02/26 - Memair is excited to introduce our Kid Friendly Video recommender. To try it out; First First Signup for Memair Then connect the First Kid Friendly Video app Select an appropriate functional age, daily watch time, and some interests. Once you’ve added your child’s details, launch the Memair Player. Your child can start enjoying safe &amp; age appropriate YouTube videos without the risk of being recommended inappropriate content or being exposed to dangerous comments.  Videos disappear once they have been watched and there are no more recommendations once the daily limit has been reached. New videos will be recommended every 24 hours. Parents can visit the Kid Friendly Video app to update the preferences or to add extra reward time.  We would like to add more channels to our recommender system. Please submit your suggestions here. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/better-youtube-recommendations/",
    "title": "Better YouTube Recommendations",
    "body": "2019/02/11 - We’re making better YouTube recommendations. Our first video recommender is designed for people with Autism, limiting their exposure to inappropriate content. We decided to service the Autism community first as it is an under resourced community and our product can have a positive impactful.  "
    }, {
    "id": 10,
    "url": "http://localhost:4000/bulk-create-graphql/",
    "title": "Introducing Create & Bulk Create GraphQL endpoints",
    "body": "2018/09/19 - Memair has introduced two new GraphQL mutations for importing data. Create Creates up to 100 records per request. Records are created immediately. Bulk Create Creates up to 10,000 records per request. Records are created with a background process. The progress of which can be monitored using the Bulk Create Status endpoint. Checkout the live Jupyter Notebook examples using Otto, the sandbox user’s data or explore with your own data using GraphiQL. Checkout the Document Explorer in GraphiQL for more details. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/quantified-self-and-biohacking-in-media/",
    "title": "Quantified Self & Biohacking in Media",
    "body": "2016/09/20 - Most quantified self / biohacking movies &amp; TV shows are dystopian focusing on the possible harmful affects of life logging. We obviously believe that quantifying our selves will improve quality of life however it is useful to acknowledge the fear that is represented in media. Here is a collection of interesting movies and TV shows that feature the possible dangers of self quantifying and biohacking. The Entire History of You - Black Mirror (TV Mini Series): An alternate reality where people have an implanted device that records everything they perceive. The device allows them to perfectly recall their experiences.  Be Right Back - Black Mirror (TV Mini Series): A person is brought back to life using their social media and communications footprint.  The Quantified Self (Movie): When well-meaning parents turn the self-tracking into a family religion, the consequences fall outside the quantifiable.  Please let us know of any others and we will append them to this list. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/fomo-in-my-hometown/",
    "title": "FOMO in my hometown",
    "body": "2016/09/16 - Memair lets you know where you’ve been, which is wonderful. But quantifying yourself also lets you know where you haven’t been. After asking Memair “Where have I been this year” and then zooming in on my hometown, I found lots of areas that I haven’t recently explored. This weekend’s challenge is to offset FOMO (fear of missing out) by exploring the recently unexplored. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/otto-explains-memair/",
    "title": "Otto explains Memair",
    "body": "2016/08/09 - Introducing Otto to explain the power of Quantified Self and Memair  "
    }, {
    "id": 14,
    "url": "http://localhost:4000/android-app-released/",
    "title": "Launching Android Beta",
    "body": "2016/07/17 - We’re excited to announce that Memair has launched it’s Android Beta! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});