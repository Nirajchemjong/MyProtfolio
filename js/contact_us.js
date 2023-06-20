//contact us form
$(".contact_btn").on("click", function () {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:nirajlimbu7@gmail.com" +
    "?subject=" +
    encodeURIComponent("New Message from Contact Form") +
    "&body=" +
    encodeURIComponent(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message +
        "\nPhone: " +
        phone
    );

  window.location.href = mailtoLink;
});
