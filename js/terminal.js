$(window).load(function() {
    var terminalText = "";
    var aboutText = "Junior at Tufts University.<br>"
        + "Studies computer science and mathematics.<br>"
        + "Interests include full stack web development, machine learning, and programming languages.<br>"
        + "Software Co-op at Teradyne.<br>"
        + "Enjoys playing strategy games.<br>"
        + "Enjoys playing guitar.";
    var portfolioText = "<a href='http://piper.link'>piper</a> - image sharing and realtime discussion site<br>" +
                        "<a href='http://fairfieldauction.com'>fairfieldauction</a> - antiques and fine art auction site<br>" +
                        "<a href='https://github.com/jwde/Digital-Composer'>Digital Composer</a> - melody composer trained by humans on the web";
    var cvText = "Academics<br>"
                + "Tufts University - School of Engineering, Medford, MA, expected diploma May 2017<br>"
                + "- Double-Majoring in Computer Science and Mathematics<br>"
                + "- Deans List - Fall 2013, Spring 2014, Fall 2014, Spring 2015<br>"
                + "- GPA: 3.75<br>"
                + "- Major Courses: Data Structures, Machine Structure and Assembly Language, Web Programming, Web Engineering, Programming Languages, Operating Systems, Computation Theory, Networks, Computer System Security, Visualization, Natural Language Processing, Intro Electrical Systems, Intro Digital Electronics, Discrete Math, Multivariate Calculus, Differential Equations, Abstract Linear Algebra, Probability<br><br>"
                + "Skills<br>"
                + "Programming Languages: C, C++, C#, Python, Javascript, HTML5, Clojure<br>"
                + "Technologies: Django, Heroku, Amazon Web Services, jQuery, Node.js, XML, CSS, WPF, Bootstrap, Semantic-UI, PostgreSQL, UML, LaTeX<br>"
                + "Software: Git, Clearcase, Vim, Emacs, VirtualBox, gdb, Visual Studio<br><br>"
                + "Employment<br>"
                + "Teradyne, North Reading, Massachusetts, June 2014 - Present<br>"
                + "- Software Engineer Co-op - Semiconductor Test<br>"
                + "- Designed, implemented, and tested new driver language, customer-facing tool using WPF/.NET and producer/consumer pattern, and code-generation tools for regression testing and driver language generation<br>"
                + "- Identified and corrected bugs in core driver software<br>"
                + "- Configured and produced engineering process tools including programming style review, code-counting, and code-review<br><br>"
                + "Fairfield Auction, LLC. Monroe, Connecticut, 2009-2013<br>"
                + "- Rebuilt and maintained <a href='http://fairfieldauction.com'>company website</a><br>"
                + "- Built and configured office workstations<br>"
                + "- Advised marketing strategy for transition to web-only auction platform<br><br>"
                + "Activities<br>"
                + "Studied Guitar - 2005 - Present<br>"
                + "&nbsp;&nbsp;&nbsp;&nbsp;Berklee College of Music Five-Week Summer Performance program - Guitar, Summer 2012<br>"
                + "Tufts Taekwondo"
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
