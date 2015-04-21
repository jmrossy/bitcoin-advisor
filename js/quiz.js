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

      , frameEndNo : 
            [ "The future of Bitcoin is still uncertain. It's a risky investment, not suitable for those without money they can afford to lose. You should build up some savings or invest in more traditional assets."
             , "There's been a lot of money won off short-term specutaltion of the Bitcoin to fiat currency exchange rates. That ship has sailed. The easy money's been had. Investors looking for big short-term gains should look elsewhere."
             , "Bitcoin is not backed by any fiat currencies. Neither is it based on a gold standard. Before you consider investing in Bitcoin, you should learn more about <a target=\"_blank\" href=\"http://www.investopedia.com/ask/answers/100314/why-do-bitcoins-have-value.asp\" title=\"Investopedia\">why it has value.</a>" 
             , "Bitcoin is not based on a gold standard. Neither is it backed by any fiat currencies. Before you consider investing in Bitcoin, you should learn more about <a target=\"_blank\" href=\"http://www.investopedia.com/ask/answers/100314/why-do-bitcoins-have-value.asp\" title=\"Investopedia\">why it has value.</a>" 
             , "Bitcoin is a decentralized system and there is no concept of 'Registration' or formal 'Sign up'. There's also no free cake for new users starting out. Before you consider investing in Bitcoin, you should learn more about <a target=\"_blank\" href=\"https://en.bitcoin.it/wiki/Mining\" title=\"Bitcoin Wiki\">how Bitcoins are created.</a>" 
             , "Bitcoin is a decentralized system and no one entity, including the Bitcoin Foundation, controls coin generation. Before you consider investing in Bitcoin, you should learn more about <a target=\"_blank\" href=\"https://en.bitcoin.it/wiki/Mining\" title=\"Bitcoin Wiki\">how Bitcoins are created.</a>" 
             , "Before you consider investing in Bitcoin, you should first learn about <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/The_birds_and_the_bees\" title=\"Bitcoin Wiki\">the birds and the bees</a> and then later about <a target=\"_blank\" href=\"https://en.bitcoin.it/wiki/Mining\" title=\"Bitcoin Wiki\">how Bitcoins are created.</a>" 
             , "A 51% attack is when a single group (like a company or guild) controls more than half of the mining power on the Bitcoin network. If sustained, a 51% attack can compromise the integrity of the network and its history. Understanding about the balance of power is crucial in knowing why Bitcoin works. Before you consider investing in Bitcoin, you should learn more about <a target=\"_blank\" href=\"http://www.coindesk.com/51-attacks-real-threat-bitcoin/\" title=\"Coindesk article\">how power is distributed.</a>" 
             , "Your concern is justified. There have been a few instances of guilds controlling <a target=\"_blank\" href=\"http://www.coindesk.com/51-attacks-real-threat-bitcoin/\" title=\"Coindesk article\">nearly half of the hash rate</a> on the network. If you're not confident the balance of power can be maintaned, then you shouldn't invest in Bitcoin." 
             , "Bitcoin has the potential to enable scenarios like micropayments that existing payment processors can't easily support. But that doesn't mean incumbent players won't adapt. It's entirely possible that more 'traditional' methods for online transactions remain 'good enough'. It's entirely possible that Bitcoin remains a niche interest. If you don't believe that Bitcoin is necessary to enable new avenues for commerce, then you shouldn't invest." ]

      , frameEndYes : "You understand at least the basics of how Bitcoin works and seem to believe in its potential. If you haven't handled Bitcoins before, you should start small. Don't do anything crazy like sell your teeth to buy more coins. Learn about <a target=\"_blank\" href=\"https://bitcoin.org/en/secure-your-wallet\" title=\"Bitcoin Foundation\">keeping your wallet secure</a>. Be careful to buy only from reputable exchanges. And avoid the temptation to speculate on the exchange price. Happy coining %name%!"
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

