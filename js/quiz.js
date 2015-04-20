/*
* JS for the quiz form
*/

$(function() {

    STRINGS = {
        frame2 : [ "How sad for you. We'll call you %name% then. Okay %name%..."
                 , "Alright %name%, answer honestly..." ]

      , frame4 : "Okay so far %name%. <br/>These next few are about how Bitcoin works..."

      , frame5 : [ "Right. Now how about the 'minting' process..."
                 , "Not quite. The coins are worth what others will pay for them." ]

      , frameEndNo : [ ""
                     , ""
                     , "" 
                     , "" 
                     , ""
                     , ""
                     , "" 
                     , "" 
                     , "" ]

      , frameEndYes : ""
    };

    var _UserName = "";

    function submitFrame1( userGaveName ) {
        if ( ! userGaveName ) {
            _UserName = 'Timmy';
            showFrame2( 0 );
            return;
        }

        // validate name
        usernameInput = $('#quiz-frame1-username');
        if ( usernameInput.val() == '' ) { 
            usernameInput.addClass( 'invalid' );
            return;
        }

        _UserName = usernameInput.val();
        showFrame2( 1 );
    }

    function showFrame2( introIndex ) {
        introText = STRINGS.frame2[ introIndex ].replace( /%name%/gi, _UserName );
        $('#quiz-frame2 .quiz-intro').text ( introText );

        $('#quiz-frame1').fadeOut( 300, function(){
            $('#quiz-frame2').fadeIn(300);
        } );
    }

    function showFrame3() {
        $('#quiz-frame2').fadeOut( 300, function(){
            $('#quiz-frame3').fadeIn(300);
        } );
    }

    function showFrame4() {
        introText = STRINGS.frame4.replace( /%name%/gi, _UserName );
        $('#quiz-frame4 .quiz-intro').html( introText );

        $('#quiz-frame3').fadeOut( 300, function(){
            $('#quiz-frame4').fadeIn(300);
        } );
    }

    function showFrame5( introIndex ) {
        introText = STRINGS.frame5[ introIndex ].replace( /%name%/gi, _UserName );
        $('#quiz-frame5 .quiz-intro').text ( introText );

        $('#quiz-frame4').fadeOut( 300, function(){
            $('#quiz-frame5').fadeIn(300);
        } );
    }

    function showFrame6() {
        $('#quiz-frame5').fadeOut( 300, function(){
            $('#quiz-frame6').fadeIn(300);
        } );
    }

    function showFrame7() {
        $('#quiz-frame6').fadeOut( 300, function(){
            $('#quiz-frame7').fadeIn(300);
        } );
    }

    function showFrame8() {
        $('#quiz-frame7').fadeOut( 300, function(){
            $('#quiz-frame8').fadeIn(300);
        } );
    }

    function showFrameNo( reasonIndex ) {
        reasonText = STRINGS.frameEndNo[ reasonIndex ].replace( /%name%/i, _UserName );
        $('.quiz-end-reason').html( reasonText );
        $('.quiz-container').fadeOut( 300 );
        $('.quiz-container').promise().done( function(){
            $('#quiz-frame-no').fadeIn(300);
        } );
    }

    function showFrameYes() {
        reasonText = STRINGS.frameEndYes.replace( /%name%/i, _UserName );
        $('.quiz-end-reason').html( reasonText );
        $('.quiz-container').fadeOut( 300 );
        $('.quiz-container').promise().done( function(){
            $('#quiz-frame-yes').fadeIn(300);
        } );
    }


    /* WIRE UP BUTTONS */

    $('#quiz-frame1-noname').click( function() {
        submitFrame1( false ); 
    } );

    $('#quiz-frame1 form').submit( function( evt ) {
        evt.preventDefault();
        submitFrame1( true ); 
    } );

    $('#quiz-frame1 .quiz-next').click( function() {
        submitFrame1( true ); 
    } );

    $('#quiz-frame2-yes').click( function() {
        showFrame3(); 
    } );

    $('#quiz-frame2-no').click( function() {
        showFrameNo( 0 ); 
    } );

    $('#quiz-frame3-long').click( function() {
        showFrame4(); 
    } );

    $('#quiz-frame3-short').click( function() {
        showFrameNo( 1 ); 
    } );

    $('#quiz-frame4-opt1').click( function() {
        showFrameNo( 2 ); 
    } );

    $('#quiz-frame4-opt2').click( function() {
        showFrameNo( 3 ); 
    } );

    $('#quiz-frame4-opt3').click( function() {
        showFrame5( 0 ); 
    } );

    $('#quiz-frame4-opt4').click( function() {
        showFrame5( 1 ); 
    } );

    $('#quiz-frame5-opt1').click( function() {
        showFrameNo( 4 ); 
    } );

    $('#quiz-frame5-opt2').click( function() {
        showFrame6(); 
    } );

    $('#quiz-frame5-opt3').click( function() {
        showFrameNo( 5 ); 
    } );

    $('#quiz-frame5-opt4').click( function() {
        showFrameNo( 6 ); 
    } );

    $('#quiz-frame6-yes').click( function() {
        showFrame7(); 
    } );

    $('#quiz-frame6-no').click( function() {
        showFrameNo( 7 ); 
    } );

    $('#quiz-frame7-yes').click( function() {
        showFrame8(); 
    } );

    $('#quiz-frame7-no').click( function() {
        showFrameNo( 8 ); 
    } );

    $('#quiz-frame8-yes').click( function() {
        showFrameYes(); 
    } );

    $('#quiz-frame8-no').click( function() {
        showFrameNo( 9 ); 
    } );
});

