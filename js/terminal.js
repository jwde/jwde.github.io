$(window).load(function() {
    var terminalText = "";
    var aboutText = "Junior at Tufts University.<br>"
        + "Studies computer science and mathematics.<br>"
        + "Interested in full stack web development, machine learning, and programming languages.<br>"
        + "Software Co-op at Teradyne.<br>"
        + "Enjoys playing strategy games.<br>"
        + "Enjoys playing guitar.";
    var portfolioText = "<a href='http://piper.link'>piper</a> - image sharing and realtime discussion site<br>" +
                        "<a href='http://fairfieldauction.com'>fairfieldauction</a> - antiques and fine art auction site";
    var cvText = "";
    function clearPrompt() {
        $('#terminal-prompt-text').replaceWith("<span id='terminal-prompt-text'></span>");
        $('.typed-cursor').remove();
    }
    function typeAnimated(strings, returnFun) {
        clearPrompt();
        $('.terminal-body').scrollTop(9007199254740992);
        $('#terminal-prompt-text').typed({
            strings: strings,
            typeSpeed: 20,
            backDelay: 0,
            loop: false,
            loopCount: false,
            cursorChar: String.fromCharCode(parseInt('2588', 16)),
            callback: returnFun,
        });
    }

    function commandResponse(text) {
        return function() {
            setTimeout(function() {
                terminalText += "> " + $('#terminal-prompt-text').html() + "<br>";
                clearPrompt();
                terminalText += text + "<br>";
                $('#terminal-text').html(terminalText);
                $('#terminal-text').removeClass("invisible");
                $('.terminal-body').scrollTop(9007199254740992);
            }, 750);
        }
    }

    function about() {
        typeAnimated(["more Jay_DeStories"], commandResponse(aboutText));
    }

    function portfolio() {
        typeAnimated(["ls -l projects"], commandResponse(portfolioText));
    }

    function cv() {
        typeAnimated(["history"], commandResponse(cvText));
    }

    $('#aboutNav').on('click touchstart', about);
    $('#portfolioNav').on('click touchstart', portfolio);
    $('#cvNav').on('click touchstart', cv);

    typeAnimated(["Hi! My name is Jay and this is my website.", "more Jay_DeStories"],
                 commandResponse(aboutText));

    $('.terminal-body').enscroll({
        showOnHover: false,
        verticalTrackClass: 'track',
        verticalHandleClass: 'handle',
    });
});
