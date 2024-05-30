function draw_one_frame(cur_frac) {
	background('white');
	angleMode(DEGREES);
	
	var circleSize = height/2.5; //establish circle size
	noStroke();
	GridDraw(cur_frac, circleSize); //call function that draws the grid of circles
	
}	

function GridDraw(cur_frac, circleSize){

	//establish what points each set of circles passes through
	let grid_points1 = [ 
		-0.25 * width,
    	0.0 * width,
    	0.25 * width,
    	0.50 * width,
    	0.75 * width,
    	1.00 * width,
		1.25*width
	]
	let grid_points2 = [
		1.375*width, 
		1.125*width, 
		0.875*width, 
		0.625 * width, 
		0.375 * width, 
		0.125* width, 
		-0.125*width, 
		-0.375*width, 
		-0.625*width, 
		-width, 
		-1.375*width
	]
	let grid_points3 = [
		1.25 * width, 
		1.00 * width,
		0.75 * width,
		0.50 * width,
		0.25 * width,
		0.0 * width,
		-0.25 * width
	]

	//side scroll for loop. Sections of code taken from example_sidescroll.js
	for(let i=0; i<grid_points1.length-1; i++) {

		//establish movement maps for each circle set
		let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1])
		let cur_x_pos2 = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
		let cur_x_pos3 = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])


		drawSphere(cur_frac, cur_x_pos3, height*0.5, circleSize/1.85);
		drawSphere(cur_frac, cur_x_pos3, height*0.8, circleSize/1.85);
		drawSphere(cur_frac, cur_x_pos3, height*0.2, circleSize/1.85);


		drawSphere(cur_frac, cur_x_pos2, height/height, circleSize/1.85);	
		drawSphere(cur_frac, cur_x_pos2, height*0.33, circleSize/1.85);	
		drawSphere(cur_frac, cur_x_pos2, height*0.67, circleSize/1.85);	
		drawSphere(cur_frac, cur_x_pos2, height, circleSize/1.85);	
	
						
		//draw the big circles in reverse 
		REVdrawSphere(cur_frac, cur_x_pos, height/2, circleSize);	
		REVdrawSphere(cur_frac, cur_x_pos, height/11, circleSize);	
		REVdrawSphere(cur_frac, cur_x_pos, height/1.1, circleSize);

	}

	
}




//Draw sphere (colours spinning right to left)
function drawSphere(cur_frac, CoordX1, CoordY1, circleSize) {

	//establish size of internal circle in sphere
	var innerCircleSize = circleSize/1.5; 
	
	//establish colour arrays for each section. These have to be staggered for the effect to work
	const fill_Array = ['#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24', '#24171e'];
	const fill_Array1 = ['#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24'];
	const fill_Array2 = ['#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233'];
	const fill_Array3 = ['#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c'];
	const fill_Array4 = ['#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43'];
	const fill_Array5 = ['#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f'];
	const fill_Array6 = ['#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5'];
	const fill_Array7 = ['#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8'];
	const fill_Array8 = ['#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854'];
	const fill_Array9 = ['#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161'];
	const fill_Array10 = ['#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68'];
	const fill_Array11 = ['#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f'];
	const fill_Array12 = ['#351a2f','#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c'];

	//map colour arrays to cur_frac
	let colourMap =int(map(cur_frac, 0, 1, 0,fill_Array.length))

	//Draw the sphere in sections using a for loop
	for (let i = 0; i < 13; i ++) {
		if (i == 0) {
			fill(fill_Array[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 270, 90);
			fill(fill_Array12[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 90, 270);
		} else if (i == 1) {
			fill(fill_Array1[colourMap]);
			ellipse(CoordX1+circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2)
			fill(fill_Array11[colourMap]);
			arc(CoordX1-circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2, 60, 300);
		} else if (i == 2) {
			fill(fill_Array2[colourMap]);
			ellipse(CoordX1+circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3)
			fill(fill_Array10[colourMap]);
			arc(CoordX1-circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3, 65, 295);
		} else if (i == 3) {
			fill(fill_Array3[colourMap]);
			ellipse(CoordX1+circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4)
			fill(fill_Array9[colourMap]);
			arc( CoordX1-circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4, 70, 290);
		} else if (i == 4) {
			fill(fill_Array4[colourMap]);
			arc(CoordX1+circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 0, 360);
			fill(fill_Array8[colourMap]);
			arc(CoordX1-circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 80, 280);	
		} else if (i == 5) {	
			fill(fill_Array5[colourMap]);
			arc(CoordX1+circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 0, 360);
			fill(fill_Array7[colourMap]);
			arc(CoordX1-circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 83, 277);
		} else if (i == 6){
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 270, 90);
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
		} else if (i == 7) {
			fill(fill_Array7[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 270, 90);
			fill(fill_Array5[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);	
		} else if (i == 8) {	
			fill(fill_Array8[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 270, 90);
			fill(fill_Array4[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
		}else if (i == 9) {	
			fill(fill_Array9[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 270, 90);
			fill(fill_Array3[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
		}else if (i == 10) {
			fill(fill_Array10[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 270, 90);
			fill(fill_Array2[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
		}else if (i == 11) {	
			fill(fill_Array11[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 270, 90);
			fill(fill_Array1[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize,  90,270);
		}else if (i == 12) {	
			fill(fill_Array12[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 270, 90);
			fill(fill_Array[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
		}
	
	}
}

//Duplicate function, drawing spheres with a reverse colour palette - giving the impression of the sphere spinning from left to right
function REVdrawSphere(cur_frac, CoordX1, CoordY1, circleSize) {

	//establish size of internal circle in sphere
	var innerCircleSize = circleSize/1.5;
	
	//establish colour arrays for each section. These have to be staggered for the effect to work
	const fill_Array12 = ['#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24', '#24171e'];
	const fill_Array11 = ['#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233','#4a2a24'];
	const fill_Array10 = ['#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c','#955233'];
	const fill_Array9 = ['#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43','#a2863c'];
	const fill_Array8 = ['#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f', '#aebc43'];
	const fill_Array7 = ['#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5', '#d6dd9f'];
	const fill_Array6 = ['#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8','#fbfcf5'];
	const fill_Array5 = ['#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854', '#f6cda8'];
	const fill_Array4 = ['#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161', '#ea9854'];
	const fill_Array3 = ['#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68','#c56161'];
	const fill_Array2 = ['#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f', '#a83b68'];
	const fill_Array1 = ['#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c','#351a2f'];
	const fill_Array = ['#351a2f','#a83b68','#c56161','#ea9854','#f6cda8','#fbfcf5','#d6dd9f','#aebc43','#a2863c','#955233','#4a2a24','#24171e','#0f101c'];

	//map colour arrays to cur_frac
	let colourMap =int(map(cur_frac, 0, 1, 0,fill_Array.length))

	
	//Draw the sphere in sections using a for loop
	for (let i = 0; i < 13; i ++) {
		if (i == 0) {
			fill(fill_Array[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 270, 90);
			fill(fill_Array12[colourMap]);
			arc(CoordX1, CoordY1, circleSize+circleSize/30, circleSize, 90, 270);
		} else if (i == 1) {
			fill(fill_Array1[colourMap]);
			ellipse(CoordX1+circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2)
			fill(fill_Array11[colourMap]);
			arc(CoordX1-circleSize/5.2, CoordY1, circleSize/1.55, circleSize/1.2, 60, 300);
		} else if (i == 2) {
			fill(fill_Array2[colourMap]);
			ellipse(CoordX1+circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3)
			fill(fill_Array10[colourMap]);
			arc(CoordX1-circleSize/6.2, CoordY1, circleSize/1.5, circleSize/1.3, 65, 295);
		} else if (i == 3) {
			fill(fill_Array3[colourMap]);
			ellipse(CoordX1+circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4)
			fill(fill_Array9[colourMap]);
			arc( CoordX1-circleSize/8.2, CoordY1, circleSize/1.45, circleSize/1.4, 70, 290);
		} else if (i == 4) {
			fill(fill_Array4[colourMap]);
			arc(CoordX1+circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 0, 360);
			fill(fill_Array8[colourMap]);
			arc(CoordX1-circleSize/12,CoordY1,circleSize/1.45, circleSize/1.46, 80, 280);	
		} else if (i == 5) {	
			fill(fill_Array5[colourMap]);
			arc(CoordX1+circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 0, 360);
			fill(fill_Array7[colourMap]);
			arc(CoordX1-circleSize/22,CoordY1,circleSize/1.5, circleSize/1.48, 83, 277);
		} else if (i == 6){
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 270, 90);
			fill(fill_Array6[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize, innerCircleSize, 90, 270);
		} else if (i == 7) {
			fill(fill_Array7[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 270, 90);
			fill(fill_Array5[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/9.9), innerCircleSize, 90, 270);	
		} else if (i == 8) {	
			fill(fill_Array8[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 270, 90);
			fill(fill_Array4[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/4.9), innerCircleSize, 90, 270);
		}else if (i == 9) {	
			fill(fill_Array9[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 270, 90);
			fill(fill_Array3[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/3), innerCircleSize, 90, 270);
		}else if (i == 10) {
			fill(fill_Array10[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 270, 90);
			fill(fill_Array2[colourMap]);
		arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/2), innerCircleSize, 90, 270);
		}else if (i == 11) {	
			fill(fill_Array11[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize, 270, 90);
			fill(fill_Array1[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.5), innerCircleSize,  90,270);
		}else if (i == 12) {	
			fill(fill_Array12[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 270, 90);
			fill(fill_Array[colourMap]);
			arc(CoordX1,CoordY1,innerCircleSize-(innerCircleSize/1.2), innerCircleSize, 90, 270);
		}
	}
}