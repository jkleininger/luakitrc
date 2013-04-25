(function(e,t) {
  var n=e.document;
  setTimeout( function() {
                function a(e) {
                  if(e.data==="destroy_bookmarklet") {
                    var r=n.getElementById(t);
                    if(r){ n.body.removeChild(r);r=null}
                  }
                }
                var t="DELI_bookmarklet_iframe",r=n.getElementById(t);
                if(r){return}
                var i="https://delicious.com/save?%22,s=n.createElement(%22iframe%22);
                s.id=t;
                s.src=i+%22url=%22+encodeURIComponent(e.location.href)+%22&title=%22+encodeURIComponent(n.title)+%22&note=%22+encodeURIComponent(%22%22+(e.getSelection?e.getSelection():n.getSelection?n.getSelection():n.selection.createRange().text))+%22&v=1.1%22;
                s.style.position=%22fixed%22;
                s.style.top=%220%22;
                s.style.left=%220%22;
                s.style.height=%22100%25%22;
                s.style.width=%22100%25%22;
                s.style.zIndex=%2216777270%22;
                s.style.border=%22none%22;
                s.style.visibility=%22hidden%22;
                s.onload=function(){this.style.visibility=%22visible%22};
                n.body.appendChild(s);
                var%20o=e.addEventListener?%22addEventListener%22:%22attachEvent%22;
                var%20u=o==%22attachEvent%22?%22onmessage%22:%22message%22;e[o](u,a,false)
              },1)
            })(window)
