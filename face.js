var DEBUG_MODE = false;

var NUM_SLIDERS = 9;

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

function Face() {

this.draw = function(positions) {


this.headWidth = positions.chin[16][0]-positions.chin[0][0]+0.5;
this.faceHeight = positions.chin[8][1]*2.5;
this.centerX = 0;
  

//colour range of faces changes based on masc/fem traits + hair colour
  if (this.gender == 1) {
    //masc
    if(this.haircolour == 1) {
      //brun (red)
      this.faceColour = [196, 8, 8];
    } else if (this.haircolour == 2){
      //black hair (eggplant)
      this.faceColour = color('#5E4352')
    } else if (this.haircolour == 3) {
      //blond (peach)
      this.faceColour = [255, 150, 125];
    } else if (this.haircolour == 4) {
      //grey (pink)
      this.faceColour = color('#D59A9F')
    } else if (this.haircolour == 5) {
      //red (Terracotta)
      this.faceColour = color('#C06E52')
    }else if (this.haircolour == 6) {
      // anything else - yellow
      this.faceColour = color('#F29E18')
    }
  } else if (this.gender == 2) {
    //fem
    if(this.haircolour == 1) {
      //brun (blue)
      this.faceColour = [59, 133, 228];
    } else if (this.haircolour == 2) {
      //black hair (green)
      this.faceColour = color('#357266');
    } else if (this.haircolour == 3) {
      //blond (purple)
      this.faceColour = color('#AA7BC3')
    } else if (this.haircolour == 4) {
      //grey (grey)
      this.faceColour = color('#ABB0B0');
    } else if (this.haircolour == 5) {
      //red (magenta)
      this.faceColour = color('#750D37')
    } else {
      // anything else - yellow
      this.faceColour = color('#F29E18')
    }
  }
  
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(0.4);
  stroke(this.faceColour);
  noFill();

  this.headHeight = positions.chin[8][1]*2.3 
  this.headYpos = map(this.faceHeight, 8, 16, 3, 7.5);
  this.sqhairHeight = map(this.headHeight, 8, 16, 8, 12)
  this.hWidth = map(this.headWidth, 8, 16, 3, 4);
  this.hairWidth =  map(this.headWidth, 8, 16, 10, 20);
  this.hWidth = map(this.headWidth, 8, 16, 2, 4);


  //DRAW HAIR
  fill(this.faceColour)
  if (this.Hair_type == 1){
    //hat style
    push();
    translate(0,positions.nose_bridge[1][1]);
    fill(this.faceColour);
    strokeWeight(0.1);
    //center hair and center place it at the headheight top
    rect(0, -this.headHeight/3.9-0.2, this.headWidth+0.5, this.sqhairHeight-1.5, 1);
    //draw hat brim
    let hat_direction;
    if((positions.chin[14][0] - positions.nose_tip[4][0]) < (positions.nose_tip[0][0] - positions.chin[2][0])) {
      hat_direction = 5;
    } else {
      hat_direction = -3;
    }
    strokeWeight(0.3)
    this.hatBrimLength = map(this.headWidth, 10, 16, -8.5, -13.5);
    line(this.centerX-this.headWidth/2, this.headYpos-this.faceHeight/2, positions.chin[0][1] + hat_direction, this.headYpos-this.faceHeight/2);
    //DRAW FACE with top corners square
    strokeWeight(0.1);
    fill('white');
    rect(this.centerX, this.headYpos-0.3, this.headWidth, this.faceHeight-0.2, 0,0,1,1);
    pop();
    } else if (this.Hair_type == 2) {
    //balding style
    push()
    translate(0,positions.nose_bridge[1][1])
    strokeWeight(0.1);
    fill('white');
    rect(this.centerX, this.headYpos-(this.headHeight/this.faceHeight), this.headWidth, this.headHeight+(this.headHeight/this.faceHeight), 0.5);
    //draw hair sides + head spots
    this.sideHairLength = map(this.faceHeight, 7.5, 10.5, 2, 5.7)
    fill(this.faceColour);
    strokeWeight(0)
    rect(-this.headWidth/2,this.headYpos-this.faceHeight/2+0.6, this.hWidth-1.7, this.sideHairLength,0.2);
    rect(this.headWidth/2,this.headYpos-this.faceHeight/2+0.6, this.hWidth-1.7, this.sideHairLength, 0.2);
    strokeWeight(0.2)
    point(this.centerX+this.headWidth/2-0.9, -this.headHeight/2+this.headYpos-0.9)
    strokeWeight(0.3);
    point(this.centerX+this.headWidth/2-0.7, -this.headHeight/2+this.headYpos-0.6)
    pop()
  } else if (this.Hair_type == 3) {
    //big hair/russian hat vibe
    push();
    translate(0,positions.nose_bridge[1][1])
    //draw flat base
    fill(this.faceColour);
    strokeWeight(0.1);
    //center hair and center place it at the headheight top
    rect(0, -this.headHeight/3.9, this.headWidth, this.sqhairHeight, 0.5) 
    //DRAW FACE with top corners square
    fill('white');
    rect(this.centerX, this.headYpos-0.5, this.headWidth, this.faceHeight-0.2, 0,0,0.5,0.5);  
    //DRAW SIDE BURNS/hat sides
    fill(this.faceColour)
    this.sideBrnXpos = map(this.headWidth, 8, 16, -4.8, -10)
    rect(this.sideBrnXpos, -2, 1, 3,0.3);
    rect(-this.sideBrnXpos,-2, 1, 3,0.3);
    pop();
  } else if (this.Hair_type == 4) {
    // hair out
    //DRAW RECTANGLE HAIR BASE
    noStroke();
    this.sqhairHeight = map(this.headHeight, 8, 16, 8, 12)
    fill(this.faceColour)
     //center hair and center place it at the headheight top
    rect(0, -this.headHeight/3.9-0.8, this.hairWidth, this.sqhairHeight-1, 2); 
    //DRAW SIDES OF LONG HAIR based on hair length slider
    fill(this.faceColour)
    push();
    rectMode(CORNER);
    let hXpos = map(this.headWidth, 8, 16, -4, -8)
    rect(hXpos-(this.hWidth/2), -1.2, this.hWidth, this.hairLength,0,0,0.5,0.5);
    rect(-hXpos-(this.hWidth/2),-1.2, this.hWidth, this.hairLength,0,0,0.5,0.5);
    pop();
    strokeWeight(0.1);
    stroke(this.faceColour);
    fill('white');
    rect(this.centerX, this.headYpos-1, this.headWidth, this.faceHeight-0.5, 0,0,1,1);
  } else if (this.Hair_type == 5) {
    //hair up bun
    fill(this.faceColour);
    strokeWeight(0.2);
    //center hair and center place it at the headheight top
    rect(0, this.headHeight-(this.headHeight*1.4), this.hairWidth-0.5, this.sqhairHeight-2, 0.8);
    //draw bun
    ellipse(0,-this.headHeight+(this.headHeight*0.3)-1.2, 2, 2);
    //draw face
    strokeWeight(0.1);
    stroke(this.faceColour);
    fill('white');
    rect(this.centerX, this.headYpos-1, this.headWidth, this.faceHeight-0.5, 0,0,1,1);
    push();
    fill('white')
    noStroke();
    beginShape();
    vertex(-1,-0.5);
    vertex(0,-2.5);
    vertex(1,-0.5);
    endShape(CLOSE);
    pop();
  }

  strokeWeight(0.1);
  fill('white');
  
  //DRAW THE LIPS
  this.mouthYpos = map(this.headHeight, 8, 16, 5, 6.5);
  push()
  translate(0, 0.2);
  if (this.lip_value == 1){
    //lip type 1 - no cupid bow - not smiling
    strokeWeight(0.1);
    fill(this.faceColour)
    line(positions.bottom_lip[2][0], positions.bottom_lip[2][1], positions.bottom_lip[4][0], positions.bottom_lip[4][1])
    noStroke();
    arc(positions.top_lip[9][0], positions.top_lip[9][1], positions.top_lip[6][0]-positions.top_lip[0][0], positions.top_lip[8][1] - 1.2, 180, 360);
  } else if (this.lip_value == 2){
    //lip type 2 - cupid bow - smiling
    push();
    strokeWeight(0.1);
    fill(this.faceColour)
    line(positions.bottom_lip[2][0], positions.bottom_lip[2][1], positions.bottom_lip[4][0], positions.bottom_lip[4][1])
    noStroke();
    arc(positions.top_lip[10][0], positions.top_lip[10][1], 0.8, positions.top_lip[8][1] - 1.2, 180, 360);
    arc(positions.top_lip[10][0]+0.5, positions.top_lip[10][1], 0.8, positions.top_lip[8][1] - 1.2, 180, 360);
    pop();
  } 
  
  this.top_lip_mid = segment_average(positions.top_lip)
  //draw stache
  if (this.stache == 1) {
    push();
    strokeWeight(0.1)
    fill(this.faceColour)
    translate(positions.top_lip[9][0],positions.top_lip[9][1]);
    scale(0.3);
    quad(-1.5, -1, 1.5, -1,3, 0, -3, 0);
    pop();
    line(positions.bottom_lip[2][0], positions.bottom_lip[2][1], positions.bottom_lip[4][0], positions.bottom_lip[4][1]);
  } 
  pop();
  




  //DRAW THE NOSES
  fill('white');
  if (this.nose_value==1) {
     //short point (small)
     push();
     translate(positions.nose_bridge[0][0], positions.nose_bridge[0][1] - 0.1);
     scale(0.35)
     strokeWeight(0.3)
     let nose_direction;
     if((positions.chin[14][0] - positions.nose_tip[4][0]) < (positions.nose_tip[0][0] - positions.chin[2][0])) {
        nose_direction = 1;
      } else {
        nose_direction = -1;
     }
     beginShape(LINES)
     vertex(0, 2.5);
     vertex(nose_direction, 3.5);
     vertex(nose_direction, 3.5);
     vertex(0, 4)
     endShape(); 
     pop()

  } else if (this.nose_value ==2){
    //long point - bigger
    push();
    translate(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    scale(0.35)
    let nose_direction;
    if((positions.chin[14][0] - positions.nose_tip[4][0]) < (positions.nose_tip[0][0] - positions.chin[2][0])) {
      nose_direction = 1;
    } else {
      nose_direction = -1;
  }
    
    strokeWeight(0.3)
    beginShape(LINES)
    vertex(0, 1);
    vertex(nose_direction, 3.5);
    vertex(nose_direction, 3.5);
    vertex(0, 3.5)
    endShape();
    pop()

  } else if (this.nose_value == 3) {
    //longer skinny round bottom - big nose
    push();
    translate(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    scale(0.3);
    strokeWeight(0.35);

    let nose_direction;
    if((positions.chin[14][0] - positions.nose_tip[4][0]) < (positions.nose_tip[0][0] - positions.chin[2][0])) {
       nose_direction = 1;
     } else {
       nose_direction = -1;
    }
    line(0,1,nose_direction,3.5);
    arc(0, 3.5, 2,1, 0, 180);
    pop();

  } else if(this.nose_value ==4) {
    //wide - biggest nose
    push();
    translate(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    scale(0.3);
    strokeWeight(0.35);
    strokeWeight(0.37)
    arc(0, 3.5, 2,1.3, 0, 180);
    arc(-1.4, 3.5, 0.7,0.5, 0, 180);
    arc(1.4, 3.5, 0.7,0.5, 0, 180);

    pop();
  }

  //DRAWING THE EYES
  this.eyeXpos = map(this.headWidth, 8, 16, 1.5, 3);

  //set up lerp for wrinkles based on how old the face is
  let ageColour = lerpColor(color('white'), color(this.faceColour), this.ageLerp);


  stroke(this.faceColour); 
  if (this.eye_value == 1) {
    //tired eyes - small eyes
    push()
    scale(0.3);
    translate(positions.left_eyebrow[2][0]-0.5, positions.left_eyebrow[2][1]-2.5);
    strokeWeight(0.7);
    point(-this.eyeXpos,1.5);
    strokeWeight(0.37);
    line(-this.eyeXpos+0.5,2.2, -this.eyeXpos-0.5, 2.7);
    pop();

    push();
    scale(0.3);
    translate(positions.right_eyebrow[2][0]+0.5, positions.right_eyebrow[2][1]-2.5);
    strokeWeight(0.7);
    point(this.eyeXpos, 1.5);
    strokeWeight(0.37);
    line(this.eyeXpos-0.5, 2.2, this.eyeXpos+0.5, 2.7)
    pop();
    
  } else if (this.eye_value == 2) {
    //curved eye - medium eyes
    push()
    scale(0.37);
    translate(positions.left_eyebrow[2][0]+0.4, positions.left_eyebrow[2][1]-2);
    strokeWeight(0.8);
    noFill();
    point(-this.eyeXpos-0.5,1.5);
    strokeWeight(0.28);
    line(-this.eyeXpos+0.5,1.1, -this.eyeXpos-2, 1.1);
    arc(-this.eyeXpos-0.9, 1.15, 3, 2.5, 0, 90);
    pop()

    push();
    scale(0.37);
    translate(positions.right_eyebrow[2][0]-0.4, positions.right_eyebrow[2][1]-2);
    strokeWeight(0.8);
    noFill();
    point(this.eyeXpos+0.5, 1.5);
    strokeWeight(0.28);
    line(this.eyeXpos-0.5, 1.1, this.eyeXpos+2, 1.1)
    arc(this.eyeXpos+0.9, 1.15, 3, 2.5, 90,180)
    pop();
  } else if (this.eye_value == 3){
      //wide eye - biggest eyes
      push()
      scale(0.43);
      translate(positions.left_eyebrow[2][0]+0.3, positions.left_eyebrow[2][1]-2);        strokeWeight(0.24);
      fill('white');
      ellipse(-this.eyeXpos-0.2, 1.5, 2.5, 2.5);
      strokeWeight(1.5);
      point(-this.eyeXpos-0.2, 1.5);
      pop()

      push() 
      scale(0.43);
      translate(positions.right_eyebrow[2][0]-0.3, positions.right_eyebrow[2][1]-2);
      strokeWeight(0.24);
      fill('white');
      ellipse(this.eyeXpos+0.2, 1.5, 2.5, 2.5);
      strokeWeight(1.5);
      point(this.eyeXpos+0.2, 1.5);
      pop();
  }

  //draw eye wrinkles
  push();
  scale(0.43);
  translate(positions.left_eyebrow[2][0]+0.3, positions.left_eyebrow[2][1]-2);
  fill(ageColour);
  noStroke();
  rotate(48);
  rect(-this.eyeXpos+1, 4, 0.2, 0.8, 1)
  rotate(-8);
  rect(-this.eyeXpos+1, 4, 0.2, 0.8, 1)
  pop()

  push();
  scale(0.43);
  translate(positions.right_eyebrow[2][0]-0.3, positions.right_eyebrow[2][1]-2);
  fill(ageColour);
  noStroke();
  rotate(-48);
  rect(this.eyeXpos-1, 4, 0.2, 0.8, 1)
  rotate(-8);
  rect(this.eyeXpos-1, 4, 0.2, 0.8, 1)
  pop();

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
    this.gender = (int(map(settings[0], 0, 100, 1, 2)));
    this.haircolour = (int(map(settings[1], 0, 100, 1, 6)));
    this.Hair_type = int(map(settings[2], 0, 100, 1, 5));
    this.hairLength = (map(settings[3], 0, 100, 1.2, 5));
    this.lip_value = int(map(settings[4], 0, 100, 1, 2));
    this.stache = int(map(settings[5], 0, 100, 0, 1));
    this.nose_value = int(map(settings[6], 0, 100, 1, 4));
    this.eye_value = int(map(settings[7], 0, 100, 1, 3));
    this.ageLerp = (map(settings[8], 0, 100, 0, 1));
   
    
    
    
    

  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.gender, 1, 2, 0, 100);
    settings[1] = map(this.haircolour, 1, 6, 0, 100);
    settings[2] = map(this.Hair_type, 1, 5, 0, 100);
    settings[3] = map(this.hairLength, 1.2, 5, 0, 100);
    settings[4] = map(this.lip_value, 1, 2, 0, 100);
    settings[5] = map(this.stache, 0, 1, 0, 100);
    settings[6] = map(this.nose_value, 1, 4, 0, 100);
    settings[7] = map(this.eye_value, 1, 3, 0, 100);
    settings[8] = map(this.ageLerp, 0, 1, 0, 100);
    
    
    

    return settings;
  }
}
