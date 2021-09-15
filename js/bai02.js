$(document).ready(function() {
    // new WOW().init();

    $("div.figures > figure").addClass("wow animate__slideInUp")
    $("div.items > div.item:nth-child(even)").addClass("wow animate__slideInLeft")
    $("div.items > div.item:nth-child(odd)").addClass("wow animate__slideInRight")
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    $("#btnThem").click(function() {
        var content = $("#content").val()
        var date = $("#date").val()

        $(".items").prepend(`
        <div class="item active">
            <div><img src="images/lab2/calendar2.png" alt="calendar" /></div>
            <div>
                <a href="#">${content}</a>
            </div>
            <div>
                ${date}
            </div>
            <div>
                <input type="button" value="Xoa" />
            </div>
        </div>
        `)

        setTimeout(function() {
            $(".item").removeClass("active")
        }, 2000);
    })

    $("div.items").on("click", "div.item input[type=button]", function() {
        if (confirm("Ban co chac chan xoa cong viec?") == true)
            $(this).parent().parent().remove()
    })
})