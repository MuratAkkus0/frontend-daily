$(document).ready(function() {
    // sayfanın altına doğru kaydırıldığında bir sonraki bölüme geçmek için
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        var sectionHeight = $('section.content').height();
        var windowHeight = $(window).height();

        if (scrollPos >= (sectionHeight - windowHeight)) {
// son bölüme geldiğinde sayfanın en üstüne dön
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    });
});