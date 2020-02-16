        $(function () {
            $('#colors_sketch').sketch();
            $(".tools a").eq(0).attr("style", "color:#000");
            $(".tools a").click(function () {
                $(".tools a").removeAttr("style");
                $(this).attr("style", "color:#000");
            });
        });

      function save(){
        var canvas = document.getElementById('colors_sketch');
        var dataURL = canvas.toDataURL();
        document.getElementById("imgs").innerHTML="<img src="+dataURL+">"

      }

      function timer(){
        document.getElementById("sve").click();
      }

      $(document).ready(function(){
    myVar = setInterval("timer()", 100);
});