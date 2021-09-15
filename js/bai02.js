$(document).ready(function() {
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
})