// whatsapp form
$(document).on("click", ".send_form", function () {
  var input_form = document.getElementById("nama");

  /* Whatsapp Settings */
  var walink = "https://web.whatsapp.com/send",
    phone = "6281217152473",
    walink2 = "Halo",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = "whatsapp://send";
  }

  if ("" != input_form.value) {
    /* Call Input Form */

    var input_nama = $("#nama").val(),
      input_pesan = $("#pesan").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + walink2 + "%0A%0A" + "*Nama* : " + input_nama + "%0A" + "*pesan* : " + input_pesan + "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML = '<span class="yes"><i class="bi bi-check2"></i>' + text_yes + "</span>";
    $("#nama").val("");
    $("#pesan").val("");
  } else {
    document.getElementById("text-info").innerHTML = '<span class="no"><i class="bi bi-exclamation-diamond"></i>' + text_no + "</span>";
  }
});
