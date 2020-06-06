var page = ['dimsum', 'katsu_tempe', 'martabak_manis'];

var dimsum = [
  'img/dimsum/IMG_20200409_094645_772.jpg',
  'img/dimsum/IMG_20200409_094536_055.jpg',
  'img/dimsum/IMG_20200409_094741_443.jpg',
  'img/dimsum/IMG_20200409_094903_239.jpg',
];
var katsu_tempe = [
  'img/katsu-tempe/widyamarinil_20200605_1.png',
  'img/katsu-tempe/widyamarinil_20200605_2.png',
  'img/katsu-tempe/widyamarinil_20200605_3.png',
  'img/katsu-tempe/widyamarinil_20200605_4.png',
];
var martabak_manis = [
  'img/martabak-manis/1.jpg',
  'img/martabak-manis/2.jpg',
  'img/martabak-manis/3.jpg',
  'img/martabak-manis/4.jpg',
  'img/martabak-manis/5.jpg',
  'img/martabak-manis/6.jpg',
  'img/martabak-manis/7.jpg',
];
var hal = 0;

function change(x) {
  $('#wrapper').fadeOut(500, function () {
    $('#wrapper').fadeIn(500, function () {
      $('#carousel').fadeIn('slow');
      //kode lanjutan
      if (page[x] == 'dimsum') {
        let this_page = dimsum;
        $('.nextpage').click(function () {
          hal = 1;
          change(hal);
          console.log(hal);
        });
        images(this_page);
      } else if (page[x] == 'katsu_tempe') {
        let this_page = katsu_tempe;
        $('.nextpage').click(function () {
          hal = 2;
          change(hal);
          console.log(hal);
        });
        images(this_page);
      } else if (page[x] == 'martabak_manis') {
        let this_page = martabak_manis;
        $('.nextpage').click(function () {
          hal = 0;
          change(hal);
          console.log(hal);
        });
        images(this_page);
      }
    });
    if (x == 0) {
      $('#wrapper').load('dimsum.html');
    } else if (x == 1) {
      $('#wrapper').load('katsu-tempe.html');
    } else if (x == 2) {
      $('#wrapper').load('martabak-manis.html');
    }
  });
}

$(document).ready(function () {
  $('.button-main').click(function () {
    change(hal);
  });
});
function images(page) {
  let value = 0;
  console.log(page[value]);
  $('.img-show').attr('src', page[value]);
  $('.img-next').attr('src', page[value + 1]);
  $('.img-next').click(function () {
    $('#carousel').fadeOut('slow', function () {
      if (value < page.length - 2) {
        $('#carousel').fadeIn('slow');
        console.log((value = value + 1));
        $('.img-show').attr('src', page[value]);
        $('.img-next').attr('src', page[value + 1]);
      } else if (value == page.length - 2) {
        $('#carousel').fadeIn('slow');
        console.log((value = value + 1));
        $('.img-show').attr('src', page[value]);
        $('.img-next').attr('src', page[0]);
      } else {
        $('#carousel').fadeIn('slow');
        console.log((value = 0));
        $('.img-show').attr('src', page[value]);
        $('.img-next').attr('src', page[value + 1]);
      }
    });
  });
}
