var alert = document.getElementById("container");
var alertTrigger = document.getElementById("show_all_alerts");
var types = ["danger", "info", "success", "warning"];

function showAllerts(message, type) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
        '<div class="mt-3 alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alert.append(wrapper);
}

if (alertTrigger) {
    alertTrigger.addEventListener("click", function () {
        var type = types[Math.floor(Math.random() * types.length)];
        showAllerts("Casa ta pegando fogo bixo!", `${type}`);
        console.log(type);
    });
}
