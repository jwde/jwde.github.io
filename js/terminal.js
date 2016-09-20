$(window).load(function() {
    var terminalText = "";
    var aboutText = "Hi, I'm Jay.<br>" +
                    "I'm a masters student at Tufts University studying computer science.<br>" +
                    "I'm excited to learn more about machine learning and information security.<br>" +
                    "I love to play guitar, climb rocks, and play video games.";
    var portfolioText = "<a href='https://www.cs.tufts.edu/comp/116/archive/fall2015/jdestories.pdf'>Probabilistic Password Modeling: Predicting Passwords with Machine Learning</a> - paper exploring applications of natural language processing in guessing passwords.<br>" +
                        "<a href='http://piper.link'>piper</a> - image sharing and realtime discussion site. <a href='https://github.com/jwde/Piper'>- github</a><br>" +
                        "<a href='http://fairfieldauction.com'>fairfieldauction</a> - antiques and fine art auction site<br>" +
                        "<a href='https://github.com/jwde/comp20/tree/master/mmap'>Marauder's Map</a> - Broadcast user locations to one another and display on a map.<br>" +
                        "<a href='https://github.com/jwde/comp20/tree/master/whereintheworld'>WhereInTheWorld</a> - Backend location tracker for Marauder's Map.<br>" +
                        "<a href='https://github.com/jwde/comp20/tree/master/security'>Security Analysis</a> of a classmate's website similar to Marauder's Map";
    var contactText = "email: <a href='mailto:jaydestories@gmail.com'>jaydestories@gmail.com</a><br>" +
                      "<a href='https://www.linkedin.com/pub/jay-destories/105/399/75b'>LinkedIn</a>";
    function clearPrompt() {
        $('#terminal-prompt-text').replaceWith("<span id='terminal-prompt-text'></span>");
        $('.typed-cursor').remove();
    }
    function typeAnimated(strings, returnFun) {
        clearPrompt();
        $('.terminal-body').scrollTop(9007199254740992);
        $('#terminal-prompt-text').typed({
            strings: strings,
            typeSpeed: 5,
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
            }, 400);
        }
    }

    function about() {
        typeAnimated(["cat Jay_DeStories"], commandResponse(aboutText));
    }

    function portfolio() {
        typeAnimated(["ls -l projects"], commandResponse(portfolioText));
    }

    function contact() {
        typeAnimated(["apropos contact jay"], commandResponse(contactText));
    }

    $('#aboutNav').on('click touchstart', about);
    $('#portfolioNav').on('click touchstart', portfolio);
    $('#contactNav').on('click touchstart', contact);

    typeAnimated(["Hi there!", "I'm Jay and this is my website.", "cat Jay_DeStories"],
                 commandResponse(aboutText));

    $('.terminal-body').enscroll({
        showOnHover: false,
        verticalTrackClass: 'track',
        verticalHandleClass: 'handle',
    });
});
