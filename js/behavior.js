// Start Google Analytics
document.addEventListener("DOMContentLoaded", function(event) {
    
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-69574948-1', 'auto');
      ga('send', 'pageview');
      // End Google Analytics
     
     // Set time 
     
    var get_time = setInterval(time, 1000);
    
    function time() {
        var d = new Date();
        document.getElementById("time_today").innerHTML = d.toLocaleTimeString();
    }
    
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        
        var thumbnailElement = document.getElementById("smart_thumbnail");
        thumbnailElement.className;
        
        if (thumbnailElement.className == "small") {
            if (time < 10) {
                greeting = "Good morning";
            } else if (time < 20) {
                greeting = "Good day";
            } else {
                greeting = "Good evening";
            }
        }
        return alert(greeting)
    });
});