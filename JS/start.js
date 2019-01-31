$(".prod-carousel").flickity({
  cellAlign: "left",
  contain: true,
  imagesloaded: true,
  prevNextButtons: true,
  wrapAround: true,
  groupcells: true
});

$(function() {
  $("a[href^='#']")
    .not("a[href='#']")
    .click(function() {
      $(
        "#" +
          $(this)
            .attr("href")
            .slice(1) +
          ""
      ).focus();
    });
});
