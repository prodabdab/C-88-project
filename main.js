var canvas = new fabric.Canvas('iwilldoit');

widht = 30;
height = 30;

player_x = 10;
player_y = 10;

var oblct ="";
 function player_move() {
     fabric.Image.fromURL("player.png", function (Img) {
        oblct=Img;
        oblct.scaleToWidth(140);
        oblct.scaleToHeight(150);
        oblct.set({top:player_y,left:player_x});
        canvas.add(oblct);
     });
 } 


 window.addEventListener("keydown",My_Keydown);
 function My_Keydown(e) {
    keypressed=e.keyCode;
    if (e.shiftKey==true&&keypressed=='77'){
        widht=widht+10;
        height=height+10;
        document.getElementById("id").innerHTML=widht;
        document.getElementById("id_2").innerHTML=height;
    }
    if (e.shiftKey==true&&keypressed=='78'){
        widht=widht+10;
        height=height+10;
        document.getElementById("id").innerHTML=widht;
        document.getElementById("id_2").innerHTML=height;
    }

    if (keypressed == '70') {
        new_image(' spiderman_face.png ');
        console.log("f")
    }

    
    if (keypressed == '66') {
        new_image(' hulk_head.png ');
        console.log("b")
    }

    
    if (keypressed == '76') {
        new_image(' captain_america_left_hand.png ');
        console.log("l")
    }

    
    if (keypressed == '82') {
        new_image(' hulk_right_hand.png ');
        console.log("r")
    }

    
    if (keypressed == '72') {
        new_image(' ironman_body.png ');
        console.log("h")
    }

    
    if (keypressed == '80') {
        new_image(' player.png ');
        console.log("p")
    }

       
    if (keypressed == '40') {
        down();
        console.log(" down ")
    }

    if (keypressed == '38') {
        up();
        console.log(" up ")
    }

    if (keypressed == '37') {
            left();
        console.log(" left ")
    }
     if (keypressed == '39') {
        right();
        console.log(" right ")
    }

    function up() {

        if (player_y >=0){
           player_y=player_y - height;
           console.log(player_y);
           console.log(height);
         canvas.remove(oblct);
         player_move();
        }
     
     }

     function down() {

        if (player_y < 400){
           player_y=player_y + height;
           console.log(player_y);
           console.log(height);
         canvas.remove(oblct);
         player_move();
        }
     
     }

     function left() {

        if (player_x > 0){
           player_x=player_x - widht;
           console.log(player_y);
           console.log(height);
         canvas.remove(oblct);
         player_move();
        }
     
     }

     function right() {

        if (player_x <= 1100){
           player_x=player_x + widht;
           console.log(player_y);
           console.log(height);
         canvas.remove(oblct);
         player_move();
        }
     
     }
 }