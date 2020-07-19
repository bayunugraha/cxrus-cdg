$(document).ready(function () {
    $('.notif-open').click(function () {
        $('#notif-cover').fadeIn();
    });
    $('#notif-cover').click(function () {
        $('#notif-cover').fadeOut();
    });

    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });
    // Flex
    // End Flex

    // Show-code-hint
    $(".show-hint-code").on("click", function () {
        var code = $(this).siblings('.hint-code'),
            code_value = $(code).attr("data-value"),
            code_original = $(code).attr("data-original");


        if (!$(this).hasClass("active")) {
            $(this).html("HIDE")
            $(code).html(code_value);
            $(this).addClass("active");
        } else {
            $(this).html("SHOW")
            $(code).html(code_original);
            $(this).removeClass("active");
        }
    });
    // Show-code-hint
});