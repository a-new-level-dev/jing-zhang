// Clicking the Trigger to show/hide the hidden #nav-main element
function showNavigation() {
	var navTrigger = document.getElementById('navTrigger');
	var navClose = document.getElementById('navClose');
	var navigation = document.getElementById('nav-main');

	navigation.style.visibility = 'visible';
	navigation.style.opacity = '1';
	navTrigger.style.visibility = 'hidden';
	navTrigger.style.opacity = '0';
	navClose.style.visibility = 'visible';
	navClose.style.opacity = '1';

}
function hideNavigation() {
	var navTrigger = document.getElementById('navTrigger');
	var navClose = document.getElementById('navClose');
	var navigation = document.getElementById('nav-main');

	navigation.style.visibility = 'hidden';
	navigation.style.opacity = '0';
	navTrigger.style.visibility = 'visible';
	navTrigger.style.opacity = '1';
	navClose.style.visibility = 'hidden';
	navClose.style.opacity = '0';
}
/* ---------------------------------------------
Creating the behavior for all of the "pages"
--------------------------------------------- */
//Grouping functions for simplicity on the Main Navigation
function navPg2() {
	hideNavigation();
	pg2SlideUp();
}
function navPg3() {
	hideNavigation();
	pg3SlideRight();
}
function navPg4() {
	hideNavigation();
	pg4SlideUp();
}
function navPg5() {
	hideNavigation();
	pg5SlideLeft();
}
function navPg6() {
	hideNavigation();
	pg6SlideLeft();
}
function navPg7() {
	hideNavigation();
	pg7SlideLeft();
}
function navPg8() {
	hideNavigation();
	pg8SlideUp();
}
function navPg9() {
	hideNavigation();
	pg9SlideUp();
}
function navPg10() {
	hideNavigation();
	pg10SlideRight();
}
/* Individual Page Movements */
function pg2SlideUp() {
	var pg2 = document.getElementById('pg2Atari');
	var downArrow = document.getElementById('downArrow');
	var leftArrow = document.getElementById('leftArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg2.style.top = "0%";
	pg2.style.visibility = 'visible';
	pg2.style.opacity = '1';
	downArrow.style.visibility = 'hidden';
	downArrow.style.opacity = '0';
	leftArrow.style.visibility = 'visible';
	leftArrow.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	leftArrow.setAttribute( "onClick", "javascript: pg3SlideRight();" );
}
function pg3SlideRight() {
	var pg3 = document.getElementById('pg3Moondust');
	var downArrow = document.getElementById('downArrow');
	var leftArrow = document.getElementById('leftArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg3.style.right = "0%";
	pg3.style.visibility = 'visible';
	pg3.style.opacity = '1';
	downArrow.style.visibility = 'visible';
	downArrow.style.opacity = '1';
	leftArrow.style.visibility = 'hidden';
	leftArrow.style.opacity = '0';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	downArrow.setAttribute( "onClick", "javascript: pg4SlideUp();" );
}
function pg4SlideUp() {
	var pg4 = document.getElementById('pg4DataGlove');
	var downArrow = document.getElementById('downArrow');
	var rightArrow = document.getElementById('rightArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg4.style.top = "0%";
	pg4.style.visibility = 'visible';
	pg4.style.opacity = '1';
	downArrow.style.visibility = 'hidden';
	downArrow.style.opacity = '0';
	rightArrow.style.visibility = 'visible';
	rightArrow.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	rightArrow.setAttribute( "onClick", "javascript: pg5SlideLeft();" );
}
function pg5SlideLeft() {
	var pg5 = document.getElementById('pg5Surgical');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg5.style.left = "0%";
	pg5.style.visibility = 'visible';
	pg5.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	rightArrow.setAttribute( "onClick", "javascript: pg6SlideLeft();" );
}
function pg6SlideLeft() {
	var pg6 = document.getElementById('pg6VirtualSets');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg6.style.left = "0%";
	pg6.style.visibility = 'visible';
	pg6.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	rightArrow.setAttribute( "onClick", "javascript: pg7SlideLeft();" );
}
function pg7SlideLeft() {
	var pg7 = document.getElementById('pg7Music');
	var downArrow = document.getElementById('downArrow');
	var rightArrow = document.getElementById('rightArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg7.style.left = "0%";
	pg7.style.visibility = 'visible';
	pg7.style.opacity = '1';
	downArrow.style.visibility = 'visible';
	downArrow.style.opacity = '1';
	rightArrow.style.visibility = 'hidden';
	rightArrow.style.opacity = '0';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	downArrow.setAttribute( "onClick", "javascript: pg8SlideUp();" );
}
function pg8SlideUp() {
	var pg8 = document.getElementById('pg8Internet2');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg8.style.top = "0%";
	pg8.style.visibility = 'visible';
	pg8.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	downArrow.setAttribute( "onClick", "javascript: pg9SlideUp();" );
}
function pg9SlideUp() {
	var pg9 = document.getElementById('pg9Maoism');
	var downArrow = document.getElementById('downArrow');
	var leftArrow = document.getElementById('leftArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg9.style.top = "0%";
	pg9.style.visibility = 'visible';
	pg9.style.opacity = '1';
	downArrow.style.visibility = 'hidden';
	downArrow.style.opacity = '0';
	leftArrow.style.visibility = 'visible';
	leftArrow.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	leftArrow.setAttribute( "onClick", "javascript: pg10SlideRight();" );
}
function pg10SlideRight() {
	var pg10 = document.getElementById('pg10Kinect');
	var upArrow = document.getElementById('upArrow');
	var leftArrow = document.getElementById('leftArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg10.style.right = "0%";
	pg10.style.visibility = 'visible';
	pg10.style.opacity = '1';
	upArrow.style.visibility = 'visible';
	upArrow.style.opacity = '1';
	leftArrow.style.visibility = 'hidden';
	leftArrow.style.opacity = '0';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	upArrow.setAttribute( "onClick", "javascript: pg10SlideLeft();" );
}
function pg10SlideLeft() {
	var pg10 = document.getElementById('pg10Kinect');
	var upArrow = document.getElementById('upArrow');
	var downArrow = document.getElementById('downArrow');

	pgReset();

	//Changing the CSS styles for the page and the arrows involved, this creates the motion for the new page to come in
	pg10.style.right = "100%";
	pg10.style.visibility = 'hidden';
	pg10.style.opacity = '0';
	upArrow.style.visibility = 'hidden';
	upArrow.style.opacity = '0';
	downArrow.style.visibility = 'visible';
	downArrow.style.opacity = '1';

	//Changing the onClick function for the corresponding Arrow once the page "loads" and that way it's ready to call the next page
	downArrow.setAttribute( "onClick", "javascript: pg2SlideUp();" );
}
/* Resetting Pages 2 thru 10 and all Arrows */
function pgReset() {
	var pg2 = document.getElementById('pg2Atari');
	var pg3 = document.getElementById('pg3Moondust');
	var pg4 = document.getElementById('pg4DataGlove');
	var pg5 = document.getElementById('pg5Surgical');
	var pg6 = document.getElementById('pg6VirtualSets');
	var pg7 = document.getElementById('pg7Music');
	var pg8 = document.getElementById('pg8Internet2');
	var pg9 = document.getElementById('pg9Maoism');
	var pg10 = document.getElementById('pg10Kinect');
	var upArrow = document.getElementById('upArrow');
	var rightArrow = document.getElementById('rightArrow');
	var downArrow = document.getElementById('downArrow');
	var leftArrow = document.getElementById('leftArrow');

	var allPages = pg2, pg3, pg4, pg5, pg6, pg7, pg8, pg9, pg10;
	var allArrows = upArrow, rightArrow, downArrow, leftArrow;

	allPages.style.top = '0%';
	allPages.style.right = '0%';
	allPages.style.bottom = '0%';
	allPages.style.left = '0%';
	allPages.style.visibility = 'hidden';
	allPages.style.opacity = '0';
	allArrows.style.visibility = 'hidden';
	allArrows.style.opacity = '0';
}