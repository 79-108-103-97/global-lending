"use strict";

const url = "https://baconipsum.com/api/?type=lucky";
$.getJSON(url, { text: "Текст" }, function (data) {
  $("#paragraph").html(data[0]);
});

$(document).ready(function () {
  $(".header__nav-btn").on("click", function () {
    $(".header__nav-btn").toggleClass("active");
    $(".header__nav").toggleClass("active");
  });
  $("#form").on("submit", function (event) {
    if (validateForm()) {
      event.preventDefault();
    } else {
      form.submit();
    }
  });

  function validateForm() {
    $(".error").remove();
    let input = $("#input");
    if (input.val().length < 4) {
      input.after('<span class="error">Должно быть не менее 4 символов</span>');
      return true;
    }
    return false;
  }

  $("#input").on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[!@#$%^&*()]/g, "")
    );
  });

  setTimeout(function () {
    let elems = [
      { name: "#item1", top: "60%", left: "0%" },
      { name: "#item2", top: "20%", left: "0%" },
      { name: "#item3", top: "-5%", left: "55%" },
      { name: "#item4", top: "25%", left: "90%" },
      { name: "#item5", top: "60%", left: "95%" },
    ];

    next(0);
    function next(i) {
      $(elems[i].name).animate(
        {
          left: elems[i].left,
          top: elems[i].top,
        },
        800,
        function () {
          setTimeout(function () {
            if (i < elems.length - 1) {
              next(++i);
            } else {
              $(".section__img-circle-items").addClass("animate");
            }
          }, 400);
        }
      );
    }
  }, 3000);
});
