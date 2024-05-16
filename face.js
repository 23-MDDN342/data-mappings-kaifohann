/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

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


    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);
    

//MY CODE STARTS HERE

this.lip_value = 2;
this.nose_value = 2;
this.eye_value = 2;
this.headWidth = 8;
this.faceHeight = 7.5;
this.MHair_type = 2;
this.stache = 1;
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
  scale(0.5);

  this.headHeight = map(this.faceHeight, 7.5, 10.5, 8, 16); //
  this.headYpos = map(this.faceHeight, 8, 16, 3, 7.5);
  this.sqhairHeight = map(this.headHeight, 8, 16, 8, 12)
  this.hWidth = map(this.headWidth, 8, 16, 3, 4);
  
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

//could split these functions

  //draws eyes, nose and mouth of character

  //DRAWING THE EYES
  this.eyeXpos = map(this.headWidth, 8, 16, 1.5, 3);
  stroke(this.faceColour); //CHANGE BACK?
  if (this.eye_value == 1) {
    //tired eye
    strokeWeight(0.7);
    point(-this.eyeXpos,1.5);
    point(this.eyeXpos, 1.5);
    strokeWeight(0.37);
    line(-this.eyeXpos+0.5,2.2, -this.eyeXpos-0.5, 2.7);
    line(this.eyeXpos-0.5, 2.2, this.eyeXpos+0.5, 2.7)
  } else if (this.eye_value == 2) {
    //wide eye
    strokeWeight(0.37);
    noFill();
    ellipse(-this.eyeXpos-0.2, 1.5, 2.5, 2.5);
    ellipse(this.eyeXpos+0.2, 1.5, 2.5, 2.5);
    strokeWeight(1.5);
    point(-this.eyeXpos-0.2, 1.5);
    point(this.eyeXpos+0.2, 1.5);
  } else if (this.eye_value == 3){
    //curved eye
    strokeWeight(0.9);
    noFill();
    point(-this.eyeXpos-0.5,1.5);
    point(this.eyeXpos+0.5, 1.5);
    strokeWeight(0.37);
    line(-this.eyeXpos+0.5,1.1, -this.eyeXpos-2, 1.1);
    line(this.eyeXpos-0.5, 1.1, this.eyeXpos+2, 1.1)
    arc(-this.eyeXpos-0.9, 1.15, 3, 2.5, 0, 90)
    arc(this.eyeXpos+0.9, 1.15, 3, 2.5, 90,180)
  } else if (this.eye_value ==4) {
    //side eye
    strokeWeight(0.9);
    noFill();
    point(-this.eyeXpos-1,1.5);
    point(this.eyeXpos+0.5, 1.5);
    strokeWeight(0.37);
    line(-this.eyeXpos+0.5,1.1, -this.eyeXpos-2, 1.1);
    line(this.eyeXpos-0.5, 1.1, this.eyeXpos+2, 1.1)
    
  }
  
  //DRAW THE NOSES
  noFill();
  if (this.nose_value==1) {
    //long point
    strokeWeight(0.37)
    beginShape(LINES)
    vertex(0, 1);
    vertex(-1, 3.5);
    vertex(-1, 3.5);
    vertex(0, 3.5)
    endShape();
  } else if (this.nose_value ==2){
     //even point
    strokeWeight(0.37)
    beginShape(LINES)
    vertex(0, 2.5);
    vertex(-1, 3.5);
    vertex(-1, 3.5);
    vertex(0, 4)
    endShape();   
  } else if(this.nose_value ==5) {
    //straight w/ curve bottom
    strokeWeight(0.37)
    line(0,1,-1,3.5);
    arc(0, 3.5, 2,1, 0, 180);
  } else if (this.nose_value == 4) {
    //longer skinny
    strokeWeight(0.37)
    arc(0, 2.4, 1,3.2, 70, 250);
  } else if(this.nose_value ==3) {
    //wide
    strokeWeight(0.37)
    arc(0, 3.5, 2,1.3, 0, 180);
    arc(-1.4, 3.5, 0.7,0.5, 0, 180);
    arc(1.4, 3.5, 0.7,0.5, 0, 180);
  }
  
  
  //DRAW THE LIPS
  this.mouthYpos = map(this.headHeight, 8, 16, 5, 6.5);
  if (this.lip_value == 1){
    //lip type 1 - no cupid bow
    strokeWeight(0.37);
    fill(colour)
    line(-0.5, this.mouthYpos+0.4, 0.5, this.mouthYpos+0.4)
    noStroke();
    arc(0, this.mouthYpos, 3, 1.5, 180, 360);
  } else if (this.lip_value == 2){
    //lip type 2 - cupid bow
    strokeWeight(0.37);
    fill(this.faceColour)
    line(-0.5, this.mouthYpos+0.4, 0.5, this.mouthYpos+0.4)
    noStroke();
    arc(-0.5, this.mouthYpos, 2, 1.5, 180, 360);
    arc(0.5, this.mouthYpos, 2, 1.5, 180, 360);
  } 
  
  //draw stache
  if (this.stache == 1) {
      quad(-2, 4.2, 2, 4.2,3, this.mouthYpos, -3, this.mouthYpos);
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
    */
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}
