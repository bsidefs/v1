/**
 * This script reveals a page section upon scrolling *near* that page's Container div.
 * 
 *  Formerly done in componentDidMount before the site restructuring.
 */

$(function() {
    let $window = $(window);
    var options = {
        strings: [],
        typeSpeed: 30,
        showCursor: false,
        contentType: 'html',
        onComplete: function() {
        }
    };

    // about
    let aboutTyped = ['<h1>Hey! I\'m Brian.</h1><h2>Software Engineering Undergraduate.</h2><h2>Based in Ventura, CA.<span class="cursor">|</span></h2>'];
    let $aboutInsertDiv = "#intro";
    let $aboutHide = $("#about #desc");
    let aboutCallback = function() {
        $aboutHide.fadeIn(650);
    }
    options.strings = aboutTyped;
    options.onComplete = aboutCallback;
    $aboutHide.hide()
    // no call to show for the About section as this does not need to be shown upon scroll depth, but rather upon page load.
    type($aboutInsertDiv,options);

    // resume
    let $resume = $("#resume");
    let resumeTyped = ['<h1>Resume.<span class="cursor">|</span></h1>'];
    let $resumeInsertDiv = "#resume-title";
    let $resumeHide = $("#resume .resume-section");
    let resumeCallBack = function() {
        $resumeHide.fadeIn(650);
        $("#resume hr").fadeIn(650);
    }
    var resumeOptions = Object.assign({}, options);
    resumeOptions.strings = resumeTyped;
    resumeOptions.onComplete = resumeCallBack;
    $resumeHide.hide();
    $("#resume hr").hide();
    // show it. 
    show($resume, $resumeInsertDiv, resumeOptions);

    // contact
    let $contact = $("#contact");
    let contactTyped = ['<h1>Contact.<span class="cursor">|</span></h1>'];
    let $contactInsertDiv = "#contact-title";
    let $contactHide = $("#contact-form");
    let contactCallback = function() {
        $contactHide.fadeIn(650);
    }
    var contactOptions = Object.assign({}, options);
    contactOptions.strings = contactTyped;
    contactOptions.onComplete = contactCallback;
    $contactHide.hide();

    var handler = function(pos, $sectionInsertDiv, sectionOptions) {
        if ($window.scrollTop() > pos - 550) {
            type($sectionInsertDiv, sectionOptions);
        }
    }();

    function show($section, $sectionInsertDiv, sectionOptions) {
        let pos = $section.position().top;
        $window.scroll(handler(pos, $sectionInsertDiv, sectionOptions));
    }

    function type(insertDiv, options) {
        // just to differentiate typed instances...typed.js is just weird like that.
        switch (insertDiv) {
            case "#intro":  let aboutTyped = new Typed(insertDiv, options);
                break;
            case "#resume-title": let resTyped = new Typed(insertDiv, options);
                break;
            case "#contact-title": let contactTyped = new Typed(insertDiv, options);
                break;
        }
    }
})