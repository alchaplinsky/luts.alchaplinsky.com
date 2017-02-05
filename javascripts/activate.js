$(document).ready(function() {

  // Some options for customization
  var leftgap = 10;		/* gap on the left */
  var rightgap = 10;		/* gap on the right */
  var defaultgap = 50;	/* the intro gap */
  var caption = true;		/* toggle caption */
  var reveal = 0.5;		/* define 0 - 1 far does it goes to reveal the second caption */

  // find each of the .beforeafter
  $('.beforeafter').each(function () {

    // set current selected item to variable
    var i = $(this);
    // get the source of the first image and second image using eq(index)
    var img_mask = i.children('img:eq(0)').attr('src');
    var img_bg = i.children('img:eq(1)').attr('src');

    // get the caption for the first image as default caption
    var img_cap_one = i.children('img:eq(0)').attr('alt');

    // get the dimension of the first image, assuming second image has the same dimension
    var width = i.width();
    var height = i.height();

    // hide the images, not removing it because we will need it later
    i.find('img').hide();

    // set some css attribute to current item
    i.css({'overflow': 'hidden', 'position': 'relative'});

    // append additional html element
    i.append('<div class="ba-mask"></div>');
    i.append('<div class="ba-bg"></div>');
    i.append('<div class="ba-caption">' + img_cap_one + '</div>');

    // set the dimension of appended html element
    i.children('.ba-mask, .ba-bg').width(width);
    i.children('.ba-mask, .ba-bg').height(height);

    // set the images as background for ba-mask and ba-bg
    i.children('.ba-mask').css('backgroundImage','url(' + img_mask + ')');
    i.children('.ba-bg').css('backgroundImage','url(' + img_bg + ')');

    // animate to reveal the background image
    i.children('.ba-mask').animate({'width':width - defaultgap}, 1000);

    // if caption is true, then display it, otherwise, hide it
    if (caption) i.children('.caption').show();
    else i.children('.ba-caption').hide();

  }).mousemove(function (e) {

    // set current selected item to variable
    var i = $(this);

    // get the position of the image
    pos_img = i.offset()['left'];

    // get the position of the mouse pointer
    pos_mouse = e.pageX;

    // calculate the difference between the image and cursor
    // the difference will the width of the mask image
    new_width = pos_mouse - pos_img;
    img_width = i.width();

    // get the captions for first and second images
    img_cap_one = i.children('img:eq(0)').attr('alt');
    img_cap_two = i.children('img:eq(1)').attr('alt');

    /*
    // for debugging purposes
    $('#debug').html("X Axis : " + e.pageX + " | Y Axis " + e.pageY);
    $('#debug2').html(i.position()['left']);
    $('#debug3').html(new_width);
    */

    // make sure it reveal the image and left some gaps on left and right
    // it depends on the value of leftgap and rightgap
    if (new_width > leftgap && new_width < (img_width - rightgap)) {
      i.children('.ba-mask').width(new_width);
    }

    // toggle between captions.
    // it uses the reveal variable to calculate
    // eg, display caption two once the image is 50% (0.5) revealed.
    if (new_width < (img_width * reveal)) {
      i.children('.ba-caption').html(img_cap_two);
    } else {
      i.children('.ba-caption').html(img_cap_one);
    }

  });
});
