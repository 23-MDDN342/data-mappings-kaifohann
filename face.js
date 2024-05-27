/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 4;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {
  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = [119, 85, 17]



  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {

//function for new face object
//uncomment my_draw_segment
//uncomment draw_segment
//one square bracket == the array vs 2 square brackets (x or Y) coord
//coordinate for center of face??
//sliders translate to the AI aspects X relies on X
//ai hair - hairtype
//ai gender - colour
//ai eye type - older = older/tired eye type
//6 things in ai
//small v big mouth
//stubble


//fix eye positioning 
//flip noses
//second lip arcs have to be touching pls
//add hair


//facial hair yes/no
//lips - smiling or not
//noses - nose types - width
//eyes - age
//colour - masc/feminine
//hairtype - hair up/down/hat etc


    
    

//MY CODE STARTS HERE

//this.lip_value ;
//this.nose_value = 1;
//this.eye_value;
this.headWidth = 8;
this.faceHeight = 7.5;
this.MHair_type = 2;

this.peach = false;

  this.centerX = 0;
  this.faceColour;

  if (this.peach == false) {
    //draw red faces
    this.faceColour = [196, 8, 8];
  } else if (this.peach == true) {
    //draw peach faces
    this.faceColour = [255, 150, 125];
  }

      // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(0.4);
  stroke(this.faceColour);
  noFill();
  //scale(0.5);

  this.headHeight = map(this.faceHeight, 7.5, 10.5, 8, 16); //
  this.headYpos = map(this.faceHeight, 8, 16, 3, 7.5);
  this.sqhairHeight = map(this.headHeight, 8, 16, 8, 12)
  this.hWidth = map(this.headWidth, 8, 16, 3, 4);
  /*
  //DRAW HAIR
  fill(this.faceColour)


  if (this.MHair_type == 1){
    //hat style
    fill(this.faceColour);
    strokeWeight(0.4);
    //center hair and center place it at the headheight top
    rect(0, -this.headHeight/3.9, this.headWidth+1, this.sqhairHeight, 2);
    //draw hat brim
    strokeWeight(1)
    this.hatBrimLength = map(this.headWidth, 10, 16, -8.5, -10)
    line(this.centerX-this.headWidth/2, this.headYpos-this.faceHeight/2, this.hatBrimLength, this.headYpos-this.faceHeight/2);
    //DRAW FACE with top corners square
    strokeWeight(0.4);
    fill('white');
    rect(this.centerX, this.headYpos, this.headWidth, this.faceHeight, 0,0,2,2);

  } else if (this.MHair_type == 2) {
    //balding style
    translate(0,-(this.headHeight/this.faceHeight))
    //DRAW FACE with everything rounded 
    strokeWeight(0.4);
    fill('white');
    rect(this.centerX, this.headYpos-(this.headHeight/this.faceHeight), this.headWidth, this.headHeight+(this.headHeight/this.faceHeight), 2);
    //draw hair sides + head spots
    this.sideHairLength = map(this.faceHeight, 7.5, 10.5, 2, 6)
    fill(this.faceColour);
    strokeWeight(0.4)
    rect(this.centerX-this.headWidth/2,this.headYpos-this.faceHeight/2+1, this.hWidth-2, this.sideHairLength, 0.5);
    rect(this.centerX+this.headWidth/2,this.headYpos-this.faceHeight/2+1, this.hWidth-2, this.sideHairLength, 0.5);
    point(this.centerX+this.headWidth/2-2.5, 0-this.headHeight/2+this.headYpos)
    strokeWeight(0.6);
    point(this.centerX+this.headWidth/2-2, 0-this.headHeight/2+this.headYpos+0.5)

  } else if (this.MHair_type == 3) {
    //big hair/russian hat vibe

    //draw flat base
    fill(this.faceColour);
    strokeWeight(0.4);
    //center hair and center place it at the headheight top
    rect(0, -this.headHeight/3.9, this.headWidth, this.sqhairHeight, 2) 
    //DRAW FACE with top corners square
    strokeWeight(0.4);
    fill('white');
    rect(this.centerX, this.headYpos, this.headWidth, this.faceHeight, 0,0,2,2);
    //DRAW SIDE BURNS
    fill(this.faceColour)
    this.sideBrnXpos = map(this.headWidth, 8, 16, -4.8, -8.4)
    rect(this.sideBrnXpos, -2.2, 3, 6.5,1);
    rect(-this.sideBrnXpos,-2.2, 3, 6.5,1);
  }
*/
//could split these functions

  //draws eyes, nose and mouth of character

  //this.left_eye_posX = positions.left_eye[0][0];
  //this.left_eye_posY = positions.left_eye[0][1];
  //this.right_eye_posX = positions.right_eye[3][0];
  //this.right_eye_posY = positions.right_eye[3][1];

  strokeWeight(0.1);
  fill('white');
  rect(0,0,positions.chin[16][0]-positions.chin[0][0]+0.5, positions.chin[8][1]*2.5, 0.5)

  //this.lip_value = 2;
  
  //DRAW THE LIPS
  this.mouthYpos = map(this.headHeight, 8, 16, 5, 6.5);

  if (this.lip_value == 1){
    //lip type 1 - no cupid bow
    push();
    //translate(positions.top_lip[8][0], positions.top_lip[8][1]);
    strokeWeight(0.1);
    fill(this.faceColour)
    line(positions.bottom_lip[2][0], positions.bottom_lip[2][1], positions.bottom_lip[4][0], positions.bottom_lip[4][1])
    noStroke();
    arc(positions.top_lip[9][0], positions.top_lip[9][1], positions.top_lip[6][0]-positions.top_lip[0][0], positions.top_lip[8][1] - 1.2, 180, 360);
    pop();
  } else if (this.lip_value == 2){
    //lip type 2 - cupid bow
    push();
    //translate(positions.top_lip[8][0], positions.top_lip[8][1]);
    strokeWeight(0.1);
    fill(this.faceColour)
    line(positions.bottom_lip[2][0], positions.bottom_lip[2][1], positions.bottom_lip[4][0], positions.bottom_lip[4][1])
    noStroke();
    arc(positions.top_lip[10][0], positions.top_lip[10][1], 0.5, positions.top_lip[8][1] - 1.2, 180, 360);
    arc(positions.top_lip[8][0], positions.top_lip[10][1], 0.5, positions.top_lip[8][1] - 1.2, 180, 360);
    pop();

    /*
    strokeWeight(0.37);
    fill(this.faceColour)
    line(-0.5, this.mouthYpos+0.4, 0.5, this.mouthYpos+0.4)
    noStroke();
    arc(-0.5, this.mouthYpos, 2, 1.5, 180, 360);
    arc(0.5, this.mouthYpos, 2, 1.5, 180, 360);
    */
  } 
  
  this.top_lip_mid = segment_average(positions.top_lip)
  //draw stache
  if (this.stache == 1) {
    push();
    fill(this.faceColour)
    translate(positions.nose_tip[2][0],this.top_lip_mid[1]);
    scale(0.3);
    quad(-1.5, -1, 1.5, -1,3, 0, -3, 0);
    pop();
  }
  




  //DRAW THE NOSES
  push()
  fill('white');
  if (this.nose_value==1) {
    //long point
    strokeWeight(0.1)
    beginShape(LINES)
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    vertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
    endShape();
  } else if (this.nose_value ==2){
     //short point (small)
    strokeWeight(0.1)
    beginShape(LINES)
    vertex(positions.nose_bridge[2][0], positions.nose_bridge[2][1]);
    vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
    endShape();  
    /* 
  } else if(this.nose_value ==3) {
    //straight w/ curve bottom
    strokeWeight(0.1)
    line(positions.nose_bridge[0][0],positions.nose_bridge[0][1], positions.nose_tip[0][0], positions.nose_bridge[3][1]);
    arc(positions.nose_bridge[3][0], positions.nose_bridge[3][3], 2,1, 0, 180);
    */
  } else if (this.nose_value == 3) {
    //longer skinny
    push();
    translate(positions.nose_bridge[2][0],positions.nose_bridge[2][1]);
    scale(0.5);
    strokeWeight(0.2)
    arc(0, 0, 1,3.2, 70, 250);
    pop();
  } else if(this.nose_value ==4) {
    //wide
    push();
    translate(positions.nose_bridge[3][0],positions.nose_bridge[3][1]);
    scale(0.4);
    //fill('white');
    stroke(this.faceColour)
    strokeWeight(0.25)
    arc(0, 0, 2,1.3, 0, 180);
    arc(-1.4, 0, 0.7,0.5, 0, 180);
    arc(1.4, 0, 0.7,0.5, 0, 180);
    pop();
  }
  
  pop();








  this.left_eye_pos = segment_average(positions.left_eye);
  this.right_eye_pos = segment_average(positions.right_eye);

  //DRAWING THE EYES
  this.eyeXpos = map(this.headWidth, 8, 16, 1.5, 3);
  ellipseMode(CENTER);
  

  stroke(this.faceColour); //CHANGE BACK?
  if (this.eye_value == 1) {
    //tired eye
    strokeWeight(0.35);
    point(this.left_eye_pos[0], this.left_eye_pos[1]);
    point(this.right_eye_pos[0], this.right_eye_pos[1]);
    strokeWeight(0.1);
    line(positions.left_eye[3][0], positions.nose_bridge[0][1]+0.2, positions.left_eye[0][0], positions.nose_bridge[1][1]);
    line(positions.right_eye[0][0], positions.nose_bridge[0][1]+0.2, positions.right_eye[3][0], positions.nose_bridge[1][1])
  } else if (this.eye_value == 2) {
    //wide eye
    strokeWeight(0.1); //0.37 originally
    fill('white');
    ellipse(this.left_eye_pos[0], this.left_eye_pos[1], 1.3, 1.3);
    ellipse(this.right_eye_pos[0], this.right_eye_pos[1], 1.3, 1.3);
    strokeWeight(0.9);
    point(this.left_eye_pos[0], this.left_eye_pos[1]);
    point(this.right_eye_pos[0], this.right_eye_pos[1]);
  } else if (this.eye_value == 3){
    //curved eye
    strokeWeight(0.1);
    line(positions.left_eyebrow[0][0], positions.left_eye[1][1], positions.nose_tip[0][0], positions.left_eye[2][1]);
    line(positions.right_eyebrow[4][0], positions.right_eye[3][1], positions.nose_tip[4][0], positions.right_eye[1][1])
    fill('white');
    arc(this.left_eye_pos[0], this.left_eye_pos[1], 1.2, 1, 0, 90)
    arc(this.right_eye_pos[0], this.right_eye_pos[1], 1.2, 1, 90,180)
    strokeWeight(0.4);
    noFill();
    point(this.left_eye_pos[0], this.left_eye_pos[1]+0.1);
    point(this.right_eye_pos[0], this.right_eye_pos[1]+0.1);
    
  /*} else if (this.eye_value ==4) {
    //side eye
    strokeWeight(0.5);
    noFill();
    point(this.left_eye_pos[0]-0.1, this.left_eye_pos[1]);
    point(this.right_eye_pos[0]-0.1, this.right_eye_pos[1]);
    strokeWeight(0.15);
    line(positions.left_eyebrow[0][0], positions.left_eye[1][1], positions.nose_tip[0][0], positions.left_eye[2][1]);
    line(positions.right_eyebrow[4][0], positions.right_eye[3][1], positions.nose_tip[4][0], positions.right_eye[1][1])
   */ 
  }


  
/*


    console.log()
    // head
    ellipseMode(CENTER);
    stroke(stroke_color);
    fill(this.mainColour);
    ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    noStroke();


    // mouth
    fill(this.detailColour);
    ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

    // eyebrows
    fill( this.eyebrowColour);
    stroke( this.eyebrowColour);
    strokeWeight(0.08);
    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);

    // draw the chin segment using points
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

    fill(100, 0, 100);
    stroke(100, 0, 100);
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);

    strokeWeight(0.03);

    fill(this.lipColour);
    stroke(this.lipColour);
    this.draw_segment(positions.top_lip);
    this.draw_segment(positions.bottom_lip);

    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

    // eyes
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes == 2) {
      fill(this.detailColour);
      ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
      ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

      // fill(this.mainColour);
      // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
      // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    }
    else {
      let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
      let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

      fill(this.detailColour);
      ellipse(eyePosX, eyePosY, 0.45, 0.27);

      fill(this.mainColour);
      ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
  }
*/
  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
    
  };

  }

  //SLIDERS

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.lip_value = int(map(settings[0], 0, 100, 1, 2));
    this.nose_value = int(map(settings[1], 0, 100, 1, 4));
    this.eye_value = int(map(settings[2], 0, 100, 1, 3));
    this.stache = int(map(settings[3], 0, 100, 0, 1));

  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.lips_value, 1, 2, 0, 100);
    settings[1] = map(this.nose_value, 1, 4, 0, 100);
    settings[2] = map(this.eye_value, 1, 3, 0, 100);
    settings[3] = map(this.stache, 0, 1, 0, 100);

    return settings;
  }
}
