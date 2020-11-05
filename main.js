menue_list_array = ["Chicken Tandoori Pizza",
                    "Veg Supreeme Pizza",
                    "Paneer tikka pizza",
                    "Deluxe veggie pizza",
                    "Veg extravanza pizza",]
 function getmenu(){
var htmldata;
htmldata="<ol class='menu list'>"
menue_list_array.sort ();
for(var i=0;i<menue_list_array.lenth;i++)
htmldata=htmldata+'<li>' + menue_list_array[i] + '</li>'
 }
 htmldata=htmldata+"<lo>"
 document.getElementById("display_menu").innerHTML = htmldata;
 function add_item(){
     var htmldata;
     var item=doocument.getElementById("add_item").value;
     menue_list_array.push(item);
     menue_list_array.sort();
     htmldata="<section class='cards'>"
     for(var i=0;i<menue_list_array.lenth;i++){
         htmldata=htmldata+ "<div class="card">" + "<img src="images/pizza img.png"/>" + menu_list_array[i] + '</div>'
 }
 htmldata=htmldata+"</section>"
 document.getElementById("display_addmenu").innerHTML=htmldata