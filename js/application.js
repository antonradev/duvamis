$(document).ready(function() {




    /* Resizing left and right part of the content areas */
    $('#resizeLemmaLeft').click(function() {
        $('body').toggleClass('resizable-left');
    });

    $('#resizeLemmaRight').click(function() {
        $('body').toggleClass('resizable-right');
    });
    /* End of Resizing left and right part of the content areas */



    /*###################*/



    /* Changing top left fixed Global time clock - virtual and social time */
    $('.global-time .virtual-time').click(function() {
        $('.global-time .virtual-time').addClass('hidden');
        $('.global-time .real-time').removeClass('hidden');
    });

    $('.global-time .real-time').click(function() {
        $('.global-time .real-time').addClass('hidden');
        $('.global-time .virtual-time').removeClass('hidden');
    });
    /* End of Changing top left fixed Global time clock - virtual and social time */




    /*###################*/




    /* Show-Hide Global Time help box */
    $('.show-times-helpbox').click(function() {
        $('.time-help-box-outher').animate({
            marginTop: '25px',
            opacity: '1'
        }, 500);
    });
    /* Hides the Global time help box when the window close button is clicked */
    $('.time-help-box button.close').click(function() {
        $('.time-help-box-outher').animate({
            marginTop: '-690px',
            opacity: '0'
        }, 500);
    });
    /* Hides the Global time help box when escape key is pressed */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('.time-help-box-outher').animate({
                marginTop: '-690px',
                opacity: '0'
            }, 500);
        }
    });
    /* End of Show-Hide Global Time help box */



    /*###################*/



    /* Notifications */
    $(document).delegate('.notification-button .notification-button-wrapper', 'click', function(e) {
        $(this).next().toggleClass('hidden');
        $('.notification-count').fadeOut(100);
    });
    /* End of Notifications */




    /*###################*/



    /* Main sections menu buttons */
    /* Clicking adds and remove buttons active states */
    /* Top-bar Navigation buttons clicks */
    $(".main-sections-menu ul li").click(function()
    {
        $(this).addClass('active');
        $(this).siblings(".main-sections-menu ul li").removeClass('active');
    });
    /* End of Top-bar Navigation buttons clicks */
    /* End of Main sections menu buttons */



    /*###################*/



    /* Switch Vision menu */
    $('#showVisionsMenu').click(function() {
        $('.my-virtual-visions-list').animate({
            left: '85px',
            opacity: "1"
        }, 500);
    });

    $('.my-virtual-visions-list .close').click(function() {
        $('.my-virtual-visions-list').animate({
            left: '-500px',
            opacity: "0"
        }, 500);
    });

    /* Hide switch vision menu when escape key is pressed */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('.my-virtual-visions-list').animate({
                left: '-500px',
                opacity: "0"
            }, 500);
        }
    });
    /* End of Switch Vision menu */



    /*###################*/



    /* I think window - show and hide */
    $('.ithink-button').click(function() {
        $('.ithink-container').fadeIn(1);
        $('.ithink-container').animate({
            right: '-465px',
            top: '-5px',
            opacity: "1"
        }, 500);
    });

    $('.ithink-container .close').click(function() {
        $('.ithink-container').animate({
            right: '270px',
            top: '-190px',
            opacity: "0"
        }, 500);
    });

    /* When Save button is ithink window is clicked, 
     * textarea is disabled and a tiny success message appears
     */
    $(".ithink-container .btn").click(function()
    {
        $('.ithink-container textarea').attr('disabled', 'disabled');
        setTimeout(function() {
            $('.ithink-saved').removeClass('hidden');
        }, 800);
        $('.ithink-container').delay(2000).fadeOut(100);
    });

    /* Hide ithink window by pressing escape key */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('.ithink-container').animate({
                right: '270px',
                top: '-190px',
                opacity: "0"
            }, 500);
        }
    });
    /* End of I think window - show and hide */



    /*###################*/



    /* Functions menu */
    /* Adding active states on the buttons when they are clicked */
    $(".main-functions-menu ul li a").click(function() {
        $(".main-functions-menu ul li a").not(this).removeClass("active");
        $(this).toggleClass("active");
    });
    /* End of Functions menu */



    /*###################*/



    /* Show My Close Virtual Visions in Small screens */
    $('.show-close-visions').on("click", "span", function() {
        $('.my-close-visions-list').animate({
            left: '133px'
        }, 500);
        $('.show-close-visions span').addClass('clicked').html("Hide visions");
    });

    $('.show-close-visions').on("click", ".clicked", function() {
        $('.my-close-visions-list').animate({
            left: '-500px'
        }, 500);
        $('.show-close-visions span').removeClass('clicked').html("Show visions");
    });
    /* End of Show My Close Virtual Visions in Small screens */




    /*###################*/



    /* My Profile Form */

    $('#openInsertMediaLink, .inser-media-box .close').click(function() {
        $('#insertMediaLink').toggleClass('hidden');
    });

    /* End of My Profile Form */



    /*###################*/



    /* Open Help menu in footer */
    $("#openHelpMenu").click(function()
    {
        $('.help-menu').toggleClass('hidden');
    });
    /* End of Open Help menu in footer */



    /*###################*/



    /* Simulating visions list notification - used only for design demos */
    $(".fountain-sign").click(function(e) {
        for (var i = 0; i < 10; i++) {
            $(".visions-notificator")
                    .animate({opacity: "0"}, 1000)
                    .animate({opacity: "1"}, 1000);
        }
    });

    $(".fountain-sign").click(function(e) {
        for (var i = 0; i < 10; i++) {
            $(".vision-notificator")
                    .animate({opacity: "0"}, 1000)
                    .animate({opacity: "1"}, 1000);
        }
    });
    /* End of Simulating visions list notification - used only for design demos */



    /*###################*/



    /* Minimize and Maximize footer */
    $('.minimize-footer').click(function() {
        $('.bottom-corners-right, .bottom-right-corner, .footer-right, .lemmas-tabs, .bottom-corners-left, .footer-left').fadeOut(200);
        $('.maximize-footer').removeClass('hidden');
        $('.lemmas-dots').removeClass('hidden');
    });

    $('.maximize-footer').click(function() {
        $('.bottom-corners-right, .bottom-right-corner, .footer-right, .lemmas-tabs, .bottom-corners-left, .footer-left').fadeIn(200);
        $('.maximize-footer').addClass('hidden');
        $('.lemmas-dots').addClass('hidden');
    });
    /* End of Minimize and Maximize footer */




    /*###################*/




    /* Tooltips */
    $('[rel=tooltip]').tooltip();
    $('.open-tooltip').tooltip();
    /* End of Tooltips */





    /*###################*/




    /* Ratings icons: sets active class and brighter colored icons on click */
    $('.ratings a').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.ratings a').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    /* End of Ratings icons: sets active class and brighter colored icons on click */



    /*###################*/



    /* Social - Virtual time switcher */
    $(".post-date .created-time.social").click(function()
    {
        $(".created-time.social").addClass('hidden');
        $(".created-time.virtual.hidden").removeClass('hidden');
    });
    $(".post-date .created-time.virtual").click(function()
    {
        $(".created-time.virtual").addClass('hidden');
        $(".created-time.social.hidden").removeClass('hidden');
    });
    /* End of Social - Virtual time switcher */




    /*###################*/




    /* Caption full text show/hide */
    $(".caption-continues").hover(function()
    {
        $("span.caption-fulltext").delay(400).show(200);
    });
//  $("span.caption-fulltext").mouseleave(function()
//  {
//    $("span.caption-fulltext").hide(200);
//  });
    $(document).click(function()
    {
        $("span.caption-fulltext").hide(200);
    });
    /* End of Caption full text show/hide */




    /*###################*/




    /* Report content: popup modal window, resporting steps, selcting report reasons */

    /* Buttons IDs and classes:
     * .report-content a
     * #gotoStepTwo
     * #backtoStepOne
     * #intellectualProperty
     * #privacyProtection
     * #sendReport
     * #backtoStepTwo
     * #closeSentReport
     * #closeReportWindow
     */

    /* Containers IDs and classes:
     * .report-content-window
     * .report-content-window-body
     * #reportStepOne
     * #reportStepTwo
     * #reportEmailOnly
     * #sentReport
     */

    /* Open Report content window:
     * 1. Removing hidden class on the overlay element, so it shows up and screen gets
     * darker
     * 2. Waiting some miliseconds and showing the window itself over the overlay 
     */
    $('.report-content a').click(function()
    {
        $('.report-content-window').removeClass('hidden');
        setTimeout(function() {
            $('.report-content-window-body').animate({
                opacity: "1"
            }, 600);
        }, 200);
    });

    /* Hiding Step 2, Report via E-mail and Thank you message by default */
    $('#reportStepTwo').css('display', 'none');
    $('#reportEmailOnly').css('display', 'none');
    $('#sentReport').css('display', 'none');

    /* Selecting some of the report reasons, only one can be selected:
     * 1. Adding class on the clicked reason
     * 2. Removing 'active' class from the others
     */
    $(".report-reason").click(function()
    {
        $(this).addClass('active');
        $(this).siblings(".report-reason").removeClass('active');
    });

    /* Go to next step, when button "Continue report" is clicked */
    $('#gotoStepTwo').click(function()
    {
        $('#reportStepOne').delay(200).slideUp(300);
        $('#reportStepTwo').delay(200).slideDown(300);
    });

    /* There is Back button on Step 2, it goes back user to Step 1 */
    $('#backtoStepOne').click(function()
    {
        $('#reportStepOne').delay(200).slideDown(300);
        $('#reportStepTwo').delay(200).slideUp(300);
    });

    /* Select custom report way for Intellectual Property and Privacy Protection:
     * These two reasons (elements) open another Step where E-mail instructions are shown
     */
    $('#intellectualProperty, #privacyProtection').click(function()
    {
        $('#reportEmailOnly').delay(200).slideDown(300);
        $('#reportStepOne').delay(200).slideUp(300);
        $('#reportStepTwo').delay(200).slideUp(300);
    });

    /* Main button that sends the report:
     * Hides everything and shows only the Thank you message - Final Step 
     * After clicking the Send report button, the button and the textarea gets 
     * disabled attributes. Sending Report message appears to show that sending
     * process is live. 
     * */
    $('#sendReport').click(function()
    {
        $('#sendReport').addClass('disabled').attr("disabled", "disabled");
        $('.report-custom-description textarea').addClass('disabled').attr("disabled", "disabled");
        setTimeout(function() {
            $('.report-sending').removeClass('hidden');
        }, 200);
        setTimeout(function() {
            $('#reportEmailOnly').delay(200).slideUp(300);
            $('#reportStepOne').delay(200).slideUp(300);
            $('#reportStepTwo').delay(200).slideUp(300);
            $('#sentReport').delay(200).slideDown(300);
        }, 1300);
    });

    /* If we are on E-mail instructions Step, we can go back to Reasons selecting
     * by clicking Back button. 
     * No further buttons here for any other steps
     */
    $('#backtoStepTwo').click(function()
    {
        $('#reportEmailOnly').delay(200).slideUp(300);
        $('#reportStepTwo').delay(200).slideDown(300);
    });

    /* Closing Report window: we can use the window [x] close button 
     * on top right corner or the final Close window button on the Thank you step
     */
    $('#closeSentReport, #closeReportWindow').click(function()
    {
        setTimeout(function() {
            $('.report-content-window-body').animate({
                opacity: "0"
            }, 400);
        }, 200);
        setTimeout(function() {
            $('.report-content-window').addClass('hidden');
        }, 800);
    });

    /* Closing the Report window using escape key */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            setTimeout(function() {
                $('.report-content-window-body').animate({
                    opacity: "0"
                }, 400);
            }, 200);
            setTimeout(function() {
                $('.report-content-window').addClass('hidden');
            }, 800);
        }
    });
    /* End of Report content */




    /*###################*/



    /* Media Files in multiview - Duviknow and DMC */
    /* Hiding the black overlay (overinfo) element from the file preview */
    $('.media-file-overinfo').css('bottom', '-200px');

    /* Showing the black overinfo box on hover */
    $('.media-file').hover(function() {
        $('.media-file-overinfo', this).animate({
            bottom: '0'
        }, 500);
    });

    /* Hiding the black overinfo box when mouse cursor is not longer over the box */
    $('.media-file').mouseleave(function() {
        $('.media-file-overinfo', this).animate({
            bottom: '-200px'
        }, 500);
    });
    /* End of Media Files in multiview - Duviknow and DMC */




    /*###################*/





    /* Media files window: images in contents, characteristics attachments, etc */
    /* Open the media window when thumbnail is clicked */
    $('.caption .thumb').click(function()
    {
        $('.media-window').removeClass('hidden');
        setTimeout(function() {
            $('.media-window-body').animate({
                opacity: "1"
            }, 600);
        }, 200);
    });

    /* Close the media window when its close button is clicked */
    $('#closeMediaWindow').click(function()
    {
        setTimeout(function() {
            $('.media-window-body').animate({
                opacity: "0"
            }, 400);
        }, 200);
        setTimeout(function() {
            $('.media-window').addClass('hidden');
        }, 800);
    });

    /* Close media window when escape key is pressed */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            setTimeout(function() {
                $('.media-window-body').animate({
                    opacity: "0"
                }, 400);
            }, 200);
            setTimeout(function() {
                $('.media-window').addClass('hidden');
            }, 800);
        }
    });
    /* End of Media files window */





    /*###################*/







    /* Media Center (DMC) files window: images, video and documents 
     * from DMC element and My Media Center */
    /* Open the media window when thumbnail is clicked */
    $('div.media-file').click(function()
    {
        $('.media-center-window').removeClass('hidden');
        setTimeout(function() {
            $('.media-center-window-body').animate({
                opacity: "1"
            }, 600, function() {
                $(".scroller-parent").nanoScroller();
            });
        }, 200);
    });

    /* Close the Media Center window when its close button is clicked */
    $('#closeMediaCenterWindow').click(function()
    {
        setTimeout(function() {
            $('.media-center-window-body').animate({
                opacity: "0"
            }, 400);
        }, 200);
        setTimeout(function() {
            $('.media-center-window').addClass('hidden');
        }, 800);
    });

    /* Close Media Center window when escape key is pressed */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            setTimeout(function() {
                $('.media-center-window-body').animate({
                    opacity: "0"
                }, 400);
            }, 200);
            setTimeout(function() {
                $('.media-center-window').addClass('hidden');
            }, 800);
        }
    });
    /* End of Media Center (DMC) files window */







    /*###################*/







    /* DMC Window - Sharing file with a legion */
    $('#shareFileButton').click(function() {
        $('.share-file-box').removeClass('hidden');
        $('.share-file-box').animate({
            top: '-370px',
            opacity: '1'
        }, 500);
    });
    /* Hides the Global time help box when the window close button is clicked */
    $('.share-file-box .close, #cancelSharing').click(function() {
        $('.share-file-box').animate({
            top: '200px',
            opacity: '0'
        }, 500);
        setTimeout(function() {
            $('.share-file-box').addClass('hidden');
        }, 800);
    });

    /* Selecting legion from list */
    $(".legion-item").click(function()
    {
        $(this).addClass('active');
        $(this).siblings(".legion-item").removeClass('active');
    });
    /* End of Selecting legion from list */

    /* Sharing messages for the user:
     * Clicking on the Share button show "Sharing... please wait!" 
     * and "Successfully shared" message. 
     * Share and Cancel buttons become disabled for some time too.
     */
    $("#shareWithLegion").click(function()
    {
        $('#shareWithLegion').attr('disabled', 'true');
        $('#cancelSharing').attr('disabled', 'true');
        /* "Sharing... please wait!" message appears */
        $('.content-is-sharing.hidden').removeClass('hidden');
        setTimeout(function() {
            $('.content-is-sharing').addClass('hidden');
            $('.content-is-shared').removeClass('hidden');
        }, 1000);
        /* "Content is successfully shared" message appears */
        setTimeout(function() {
            $('.content-is-shared').addClass('hidden');
        }, 3800);
        /* Let's have our Share and Cancel buttons enabled again! */
        setTimeout(function() {
            $('#shareWithLegion').attr('disabled', false);
            $('#cancelSharing').attr('disabled', false);
        }, 4800);
    });
    /* End of Sharing messages for the user */


    /* End of DMC Window - Sharing file with a legion */







    /*###################*/






    /* DMC Window - Reply on comment */
    $(".media-file-comment .post-comment-stats a, .replying-comment #hideCommentReplyBox").click(function()
    {
        $(".replying-comment").toggleClass('hidden');
        $(".replying-comment textarea").focus();
    });
    /* End of DMC Window - Reply on comment */





    /*###################*/



    /* My Media Center */
    $('.create-album-button, .new-album-box .close').click(function() {
        $('.new-album-box').toggleClass('hidden');
    });
    /* End of My Media Center */





    /*###################*/





    /* Legio Invite Window */
    $("#openLegioInviteWindow").click(function()
    {
        $("body").prepend("<div id='prependedOverlay' style='background-color:rgba(0,0,0,0.5); position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 3;'></div>");
        $("#legioInviteWindow").animate({
            opacity: 1,
            top: 15 + "%"
        }, 400);
    });
    $("#legioInviteWindow .close span").click(function()
    {
        $("#legioInviteWindow").animate({
            opacity: 0,
            top: -1500
        }, 700);
        setTimeout(function() {
            $("#prependedOverlay").remove();
        }, 800);
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            setTimeout(function() {
                $("#legioInviteWindow").animate({
                    opacity: 0,
                    top: -1500
                }, 700);
            }, 200);
            setTimeout(function() {
                $("#prependedOverlay").remove();
            }, 900);

        }
    });

    /* End of Legio Invite Window */










    /* Comments Board Window */
    $("#openCommentsBoardWindow").click(function()
    {
        $("body").prepend("<div id='prependedOverlay' style='background-color:rgba(0,0,0,0.5); position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 3;'></div>");
        $("#talkCommentsBoard").animate({
            opacity: 1,
            top: 15 + "%"
        }, 400);
    });
    $("#talkCommentsBoard .close span").click(function()
    {
        $("#talkCommentsBoard").animate({
            opacity: 0,
            top: -1500
        }, 700);
        setTimeout(function() {
            $("#prependedOverlay").remove();
        }, 800);
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            setTimeout(function() {
                $("#talkCommentsBoard").animate({
                    opacity: 0,
                    top: -1500
                }, 700);
            }, 200);
            setTimeout(function() {
                $("#prependedOverlay").remove();
            }, 900);

        }
    });

    /* End of Comments Board Window */




    /*###################*/





    /* Invitation to a Legion. Accept/Decline */
    $('.invitation-actions a').click(function()
    {
        $('.invitation-actions a').css('background', "#aaaaaa");

        setTimeout(function() {
            $(".invitation-actions a").animate({
                opacity: 0
            }, 300);
        }, 300);

        $('.invitation-actions .fa.fa-spinner.fa-spin').removeClass('hidden');
        setTimeout(function() {
            $(".invitation-actions").hide();
            $(".invitation-action-taken").removeClass('hidden');
        }, 1900);

    });



    /*###################*/




    /* DMC Window - Reply on comment */
    $(".more-from-dmc, .close-dmc-more-files").click(function()
    {
        $(".dmc-more-files").toggleClass('hidden');
    });
    /* End of DMC Window - Reply on comment */





    /*###################*/




    /* Change Avatar via Switch to prev one dialog */
    $(".images-collection .image-item").click(function()
    {
        $(this).toggleClass('selected');
        $(this).append("<span class='fa fa-check' id='selected-avatar-switch'></span>");
        $(this).siblings(".images-collection .image-item").removeClass('selected');
        $(".images-collection .image-item #selected-avatar-switch").remove();

        if ($(".images-collection .image-item").hasClass('selected')) {
            $(this).append("<span class='fa fa-check' id='selected-avatar-switch'></span>");
        }
    });

    $('.images-collection .close, .characteristic-entry .attach-media-elements a').click(function() {
        $('.images-collection').toggleClass('hidden');
    });




    /* End of Change Avatar via Switch to prev one dialog */






    /*###################*/



    /* Calculation of Media Center (DMC) files window heights:
     * Calculation of the scrollable inner content height
     */
    /* Calculation of the scrollable inner content height */
    /* Disable
     var topOfMediaFileScrollable = $('.media-file-scrollable').offset().top;
     var bottomOfVisibleWindow = $(window).height();
     $('.media-file-scrollable').css('max-height', bottomOfVisibleWindow - topOfMediaFileScrollable - 130);
     
     if ($(window).width() < 1000) {
     var topOfMediaFileScrollable = $('.media-file-scrollable').offset().top;
     var bottomOfVisibleWindow = $(window).height();
     $('.media-file-scrollable').css('max-height', bottomOfVisibleWindow - topOfMediaFileScrollable - 90);
     }
     /* End Disable
     /* The same happens when the window is resized */
    /* Disable
     $(window).resize(function() {
     var topOfMediaFileScrollable = $('.media-file-scrollable').offset().top;
     var bottomOfVisibleWindow = $(window).height();
     $('.media-file-scrollable').css('max-height', bottomOfVisibleWindow - topOfMediaFileScrollable - 90);
     });
     /* End Disable 
     /* Gets the space between the window and the top of the screen */
    /* Disable
     var topOfMediaCenterWindowBody = $('.media-center-window-body').offset().top;
     var bottomOfVisibleWindow = $(window).height();
     $('.media-center-window-body').css('max-height', bottomOfVisibleWindow - topOfMediaCenterWindowBody - 75);
     /* The same happens when the window is resized */
    /* End Disable
     $(window).resize(function() {
     var topOfMediaCenterWindowBody = $('.media-center-window-body').offset().top;
     var bottomOfVisibleWindow = $(window).height();
     $('.media-center-window-body').css('max-height', bottomOfVisibleWindow - topOfMediaCenterWindowBody - 75);
     });
     /* End of Calculation of Media Center (DMC) files window heights
     
     
     
     
     
     /*###################*/




    /* Selecting Publication post form section buttons. 
     * Only once selected button at a time */
    $(".section-button").click(function()
    {
        $(this).addClass('active');
        $(this).siblings(".section-button").removeClass('active');
    });





    /*###################*/




    /* Post content form */
    /* Check Title for min inputed characters length */
    if ($("#ContentTitle").length) {
        if ($("#ContentTitle").val().length < 2) {
            $("#postContentButton").attr('disabled', 'true');
        }

        /* Hidden by default content in multiview: to preview the showing of just published content by the Publish Content form left screen. */
        $("#justPublishedContent").css('display', 'none');

        /* Enabling publish button if title value is enough */
        $("#ContentTitle").keyup(function() {
            if ($(this).val().length >= 2) {
                $("#postContentButton").attr('disabled', false);
                $("#ContentTitle").removeClass('input-text-error');
                /* Showing the just published content (the hidden by default content in the multiview) */
                $("#postContentButton").click(function()
                {
                    $("#justPublishedContent").addClass('just-published');
                    $("#justPublishedContent").fadeIn(1000);
                    setTimeout(function() {
                        $("#justPublishedContent").removeClass('just-published');
                    }, 1500);
                    setTimeout(function() {
                        $(".loading-content-picture").animate({
                            opacity: 0
                        }, 200);
                    }, 700);
                    setTimeout(function() {
                        $(".loading-content-picture").css('display', 'none');
                    }, 900);
                });
                /* End of Showing the just published content */
            } else {
                $("#postContentButton").attr('disabled', 'disabled');
            }
        });
        /* Post Title input expresses error state */
        $("#postContentButton").click(function()
        {
            var postContentTitle = $("#ContentTitle").val();
            if (postContentTitle.length < 2) {
                $("#ContentTitle").addClass('input-text-error');
            }
        });

        /* Switching between tabs - Publish content and My contents */
        /* Elements IDs:
         * #publishContentTab
         * #myPublishedContentTab
         * #publishContentForm
         * #myPublishedContentList
         */
        /* The Content list tab is hidden by default */
        $("#myPublishedContentList").css('display', 'none');
        /* Clicking on the My Published contents tab */
        $("#myPublishedContentTab").click(function() {
            $("#publishContentTab").removeClass('active');
            $("#publishContentTab").addClass('inactive');
            $("#myPublishedContentTab").addClass('active');
            $("#myPublishedContentTab").removeClass('inactive');
            $("#publishContentForm").css('display', 'none');
            $("#myPublishedContentList").css('display', 'block');
            /* Loading contents list */
            $(".loading-contents-list").removeClass('hidden');
            setTimeout(function() {
                $(".loading-contents-list").animate({
                    opacity: 0
                }, 200);
            }, 200);
            setTimeout(function() {
                $(".loading-contents-list").addClass('hidden');
            }, 300);
            /* End of Loading contents list */
        });
        /* Clicking on the Publish content tab */
        $("#publishContentTab").click(function() {
            $("#publishContentTab").addClass('active');
            $("#publishContentTab").removeClass('inactive');
            $("#myPublishedContentTab").addClass('inactive');
            $("#myPublishedContentTab").removeClass('active');
            $("#publishContentForm").css('display', 'block');
            $("#myPublishedContentList").css('display', 'none');
            /* Restoring Loading contents list elements for the next time the tab is clicked */
            $(".loading-contents-list").addClass('hidden');
            setTimeout(function() {
                $(".loading-contents-list").animate({
                    opacity: 1
                }, 200);
            }, 200);
            setTimeout(function() {
                $(".loading-contents-list").removeClass('hidden');
            }, 300);
            /* End of Restoring Loading contents list elements*/
        });

        /* Delete content from list button */
        /* Dialog comes in */
        $(".edit-content-options .delete-content").click(function() {
            $(".delete-content-dialog").animate({
                left: '1px',
                opacity: 1
            }, 400);
        });
        /* Dialog goes out */
        $(".confirm-dialog .cancel-delete").click(function() {
            $(".delete-content-dialog").animate({
                left: '-1000px',
                opacity: 0
            }, 400);
        });

        /* Confirm content delete. Clicking Yes, I'm sure button */
        $(".confirm-dialog .confirm-delete").click(function() {
            setTimeout(function() {
                $(".delete-content-dialog").animate({
                    left: '-1000px'
                }, 1);
            }, 500);
            $(".delete-content-dialog").animate({
                opacity: 0
            }, 100);

            $(".my-published-content-list .content-multiview:first-child").addClass('deleting');

            setTimeout(function() {
                $(".my-published-content-list .content-multiview:first-child").animate({
                    left: '-1000px'
                }, 1);
                $(".my-published-content-list .content-multiview:first-child").slideUp(200);
                $(".undo-deleted-content").removeClass('hidden');
            }, 300);

        });
        /* End of Confirm content delete */

        /* Restore the deleted publication */
        $(".undo-deleted-content a").click(function() {
            setTimeout(function() {
                $(".delete-content-dialog").animate({
                    left: '-1000px'
                }, 1);
            }, 500);
            $(".delete-content-dialog").animate({
                opacity: 0
            }, 100);
            $(".my-published-content-list .content-multiview:first-child").removeClass('deleting');
            setTimeout(function() {
                $(".my-published-content-list .content-multiview:first-child").animate({
                    left: '0'
                }, 1);
                $(".my-published-content-list .content-multiview:first-child").slideDown(200);
                $(".undo-deleted-content").addClass('hidden');
            }, 300);
        });
        /* End of Restore the deleted publication */


        $(".publish-section.published .section-button").click(function() {

            $(".loading-contents-list").removeClass('hidden');
            $(".loading-contents-list").css('opacity', "1");
            setTimeout(function() {
                $(".loading-contents-list").animate({
                    opacity: 0
                }, 200);
            }, 200);
            setTimeout(function() {
                $(".loading-contents-list").addClass('hidden');
            }, 300);
            /* End of Loading contents list */

        });


        /* Create Poll */
        $(".publish-section .section-button.in-attitudes, .publish-section .section-button.in-duviknow").click(function() {
            $(".add-poll-answers").addClass('hidden');
        });
        /* Displaying poll answer adding and answers fields */
        $(".publish-section .section-button.in-polls").click(function() {
            /* A sweet loading poll options message. 
             * Displays for the user to notice the additional fields (change in environment) 
             */
            $(".add-poll-answers").removeClass('hidden');
            $(".loading-answer-adding").removeClass('hidden');
            setTimeout(function() {
                $(".loading-answer-adding").addClass('hidden');
            }, 400);
        });
        /* Displaying poll answer adding and answers fields */

        $(".add-answer-button").click(function() {
            $(".added-answers").removeClass('hidden');
        });

        $(".remove-answer").click(function() {
            $(".added-answers").addClass('hidden');
        });


        /* End of Create Poll */

    }
    /* End of Post content form */




    /*###################*/




    /** Post Comment form */
    /* Post reply */
    $(".comments .post-comment-stats a .comments-count-stats").click(function() {
        $(".left-box.post-comment").fadeOut(300);
        setTimeout(function() {
            $(".left-box.post-reply").removeClass('hidden');
        }, 400);
    });
    /* Cancel reply */
    $(".cancel-comment-reply, #cancelReplybutton").click(function() {
        $(".left-box.post-reply").fadeOut(300);
        setTimeout(function() {
            $(".left-box.post-comment").fadeIn(300);
        }, 400);
    });

    /* Show All replies to a single comment */
    $("#repliesToCommentView").css('display', 'none');
    $(".show-all-replies span").click(function() {
        $("#commentsDefaultView").fadeOut(300);
        setTimeout(function() {
            $("#repliesToCommentView").fadeIn(300);
        }, 400);
    });

    $(".back-to-comments span").click(function() {
        $("#repliesToCommentView").fadeOut(300);
        setTimeout(function() {
            $("#commentsDefaultView").fadeIn(300);
        }, 400);
    });
    /* End of Show All replies */

    /* End of Post Comment form */






    /*###################*/





    /* My History */

    $(".show-upvotes").click(function() {
        $(".show-upvotes").toggleClass('active');
        $(".show-downvotes").removeClass('active');
    });
    $(".show-downvotes").click(function() {
        $(".show-upvotes").removeClass('active');
        $(".show-downvotes").toggleClass('active');
    });

    $(".show-periods a").click(function() {
        $(this).addClass('active');
        $(this).siblings(".show-periods a").removeClass('active');

    });

    /* End of My History */






    /*###################*/




    /* Bequeath vision */
    $(".bequeath-vision .close-vision-boxes .close-vision-box").click(function() {
        $(this).addClass('selected');
        $(this).siblings(".bequeath-vision .close-vision-boxes .close-vision-box").removeClass('selected');

    });
    /* End of Bequeate vision */




    /*###################*/





    /* Notifications settings */

    $('.notification-setting-row').click(function() {
        $(this).toggleClass('active');
    });

    /* End of Notifications settings */




    /*###################*/




    /* Filter by Languages */


    /* Open Languages select list */
    $(".filter-by-language .content-by-language").click(function()
    {
        $('.filter-by-language-overlay').removeClass('hidden');
        $('.filter-by-language-container').removeClass('hidden');
        /* Animating In the overlay and the popup window */
        $(".filter-by-language-overlay, .filter-by-language-container").animate({
            opacity: 1
        }, 200);
    });
    /* End of Open Languages select list */
    /* Close Languages select list */
    $(".close-languages-filter, #cancelButtonLanguages").click(function()
    {
        /* Animating Out the overlay and the popup window */
        $(".filter-by-language-overlay, .filter-by-language-container").animate({
            opacity: 0
        }, 200);
        setTimeout(function() {
            $('.filter-by-language-overlay').addClass('hidden');
            $('.filter-by-language-container').addClass('hidden');
        }, 220);
    });
    /* End of Close Languages select list */
    /* Close the Language select window via Esc key */
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $(".filter-by-language-overlay, .filter-by-language-container").animate({
                opacity: 0
            }, 200);
            setTimeout(function() {
                $('.filter-by-language-overlay').addClass('hidden');
                $('.filter-by-language-container').addClass('hidden');
            }, 220);
        }
    });
    /* End of Close the Language select window via Esc key */

    /* Selecting Languages */
    $(".languages-filter-list .language-item").click(function()
    {
        $(this).toggleClass('active');
    });
    $("#selectAllFilterLanguages").click(function()
    {
        $(this).toggleClass('active');
        $('.languages-filter-list .language-item').addClass('active');
    });

    $(".save-languages .btn.btn-primary").click(function()
    {
        $('.saving-languages-filter-overlay').removeClass('hidden');
        $(".save-languages .btn.btn-primary").addClass('disabled');
        $(".save-languages .btn.btn-primary").attr('disabled', true);
        setTimeout(function() {
            $('.saving-languages-filter-overlay').addClass('hidden');
            $(".save-languages .btn.btn-primary").removeClass('disabled');
            $(".save-languages .btn.btn-primary").attr('disabled', false);
            $(".languages-saved").removeClass('hidden');
        }, 1220);
        setTimeout(function() {
            $(".languages-saved").addClass('hidden');
        }, 3300);



    });

    /* End of Filter by Languages */





    /*###################*/





    /* Initializing TinyMCE text editor */

    /* For post comment forms */
    if ($(".post-comment-form").length) {
        $(function() {
            $('textarea.publish-content.post-comment').tinymce({
                script_url: 'js/vendors/tinymce/tinymce.min.js',
                selector: "textarea.publish-content.post-comment",
                theme: "duvamis",
                skin: "duvamis",
                menubar: false,
                statusbar: false,
                height: 130
            });
        });
    }

    /* For Publish content forms */
    $(function() {
        $('textarea.publish-content').tinymce({
            script_url: 'js/vendors/tinymce/tinymce.min.js',
            selector: "textarea.publish-content.post-comment",
            theme: "duvamis",
            skin: "duvamis",
            menubar: false,
            statusbar: false,
            height: 200
        });
    });








    /* End of Initializing TinyMCE text editor */









    /*###################*/



    /* Initialize Tag-it */
    $("#addTags").tagit();
    /* End of Initialize Tag-it */






    /*###################*/






    /* Nano Scroller */
    $(".scroller-parent").nanoScroller();
    /* End of Nano Scroller */





    /*###################*/




    /* Poll bar animation */
    $('.answer-bar-body').each(function() {
//  $(this).animate({'width':$(this).data('width')+'%'});
        $(this).animate({'width': $(this).children('span').text()}, 1300);
    });

    $('.poll-answer').click(function() {
        $(this).toggleClass('active');
        $(".poll-answer").not(this).removeClass('active');
        $(".save-vote").addClass('active');
    });

    $('.save-vote').click(function() {
        $(".poll-answer.active").animate({
            backgroundColor: '#e7f0d1',
            borderBottomColor: '#a4c63b'
        }, 400);

        $(".save-vote").animate({
            backgroundColor: '#dedede',
            borderColor: '#dedede'
        }, 400);

        setTimeout(function() {
            $(".vote-thank-you").animate({
                opacity: '1'
            }, 400);
        }, 900);

    });






}); /* End document ready */