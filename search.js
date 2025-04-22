/* Copyright Andrew McConachie <andrew@depht.com> 2025 */

// Gets called whenever search_haz frame body loads
function on_load(){
  if(document.getElementById("haz_menu").contentWindow.set_hidden == null){
    window.addEventListener('load', function(event){
      document.getElementById("haz_menu").contentWindow.set_hidden();
    });
  }else{
    document.getElementById("haz_menu").contentWindow.set_hidden();
  }
}
