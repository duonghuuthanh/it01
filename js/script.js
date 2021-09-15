function search() {
    var d = document.getElementById("kw")
    if (d != null) {

        var items = document.querySelectorAll("div.item")

        for (var i = 0; i < items.length; i++) {
            items[i].style.outline = null;
        }

        d = d.value.toLowerCase()

        var items = document.querySelectorAll("div.item")

        for (var i = 0; i < items.length; i++) {
            var text = items[i].getElementsByTagName("h1")[0].innerText
            if (text.toLowerCase().indexOf(d) >= 0)
                items[i].style.outline = "5px dashed red"
        }

        setTimeout(function() {
            var items = document.querySelectorAll("div.item")

            for (var i = 0; i < items.length; i++) {
                items[i].style.outline = null;
            }
        }, 2000)
    }
}

$(document).ready(function() {
    $("#btnSearch").click(function() {
        var d = $("#kw").val();
        
        $(`div.item h1:contains(${d})`).parent().parent().css("outline", "5px dashed red")

        setTimeout(function() {
            $("div.item").css("outline", "none")
        }, 2000)
        // for (var i = 0; i < items.length; i++)
        //     if ($(items[i]).text().indexOf(d) >= 0)
        //         $(items[i]).css("outline","5px dashed red")

    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 120) {
            $(".social").css('top', 0)

            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": 0
            })
        }else {
            $(".social").css('top', 'auto')

            $("nav").css({
                "position": "relative"
                
            })
        }
    })

    $("nav ul.menu a").click(function(event) {
        // event.preventDefault()

        var id = $(this).attr("href")
       
        $("html, body").animate({
            scrollTop: $(id).last().offset().top //$(id).scrollTop()
        }, 1000)
    })
})