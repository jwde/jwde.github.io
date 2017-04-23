jQuery(document).ready(function() {
    jQuery(".cite")
        .click(function() {
            let refId = jQuery(this).attr("data-cite");
            let refPosition = jQuery("p[data-ref=" + refId + "]").offset().top;
            $('body').animate({
                scrollTop: refPosition
            }, 500);
        })
        .hover(function() {
            let refId = jQuery(this).attr("data-cite");
            let refHtml = jQuery("p[data-ref=" + refId + "]").html();
            let popup = $("<div/>").addClass("popup").html(refHtml);
            popup.appendTo($(this));
        }, function() {
            $(this).find(".popup").remove();
        });
});
