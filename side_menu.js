/* Copyright Andrew McConachie <andrew@depht.com> 2025 */

// Tick all checkboxes
function check_all(){
  var boxes = document.getElementsByTagName("input");
  for(ii = 0; ii < boxes.length; ii++){
    boxes[ii].checked = true;
  }
  set_hidden();
}

// Untick all checkboxes
function uncheck_all(){
  var boxes = document.getElementsByTagName("input");
  for(ii = 0; ii < boxes.length; ii++){
    boxes[ii].checked = false;
  }
  set_hidden();
}

// Returns an object composed of two arrays
// ticked: values of ticked checkboxes
// unticked: values of unticked checkboxes
function get_menu_state(){
  var rv = {
    ticked: [],
    unticked: [],
  };

  var boxes = document.getElementsByTagName("input");
  for(ii=0; ii< boxes.length; ii++){
    if(boxes[ii].checked == true){
      rv['ticked'].push(boxes[ii].value);
    }else{
      rv['unticked'].push(boxes[ii].value);
    }
  }
  return rv;
}

// Sets hidden values when checkboxes are ticked or unticked
// 'J' signals to xapian-omega this is a site path
function set_hidden(){
  var state = get_menu_state();
  var iframe_search = parent.document.getElementById("haz_search").contentWindow.document;

  if(state['ticked'].length == 0 || state['unticked'].length == 0){
    iframe_search.getElementById('hid_N').innerHTML = "";
    iframe_search.getElementById('hid_B').innerHTML = "";

  }else if(state['ticked'].length > state['unticked'].length){
    var ns = "";
    for(ii = 0; ii < state['unticked'].length; ii++){
      ns += "<input type=\'hidden\' name=\'N\' value=\'J" + state['unticked'][ii] + "'>";
    }
    iframe_search.getElementById('hid_N').innerHTML = ns;
    iframe_search.getElementById('hid_B').innerHTML = "";
    
  }else{
    var bs = "";
    for(ii = 0; ii < state['ticked'].length; ii++){
      bs += "<input type=\'hidden\' name=\'B\' value=\'J" + state['ticked'][ii] + "'>";
    }
    iframe_search.getElementById('hid_N').innerHTML = "";
    iframe_search.getElementById('hid_B').innerHTML = bs;
  }
}

// Handle ticking and unticking checkboxes
function handle_click(){
  set_hidden();
  
  var iframe_search = parent.document.getElementById("haz_search").contentWindow.document;
  if(iframe_search.getElementById("omega-autofocus").value.length != 0){
    iframe_search.getElementById("but_search").click();
  }
}

// Handle showing and hiding checkboxes
function show_hide(but_id){
  var boxes_div = document.getElementById(but_id).nextElementSibling;

  if(boxes_div.style.display == "block"){
    boxes_div.style.display = "none";
  }else{
    boxes_div.style.display = "block";
  }
}
