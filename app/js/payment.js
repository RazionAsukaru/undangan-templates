(function () {
  const $ = require("jquery");

  $("input[type='radio']").click(function () {
    var radioValue = $("input[name='tab-input']:checked").val();
    if (radioValue) {
      if (radioValue === "others") {
        $(".others-nominal-group").removeClass("hidden");
      } else {
        $(".others-nominal-group").addClass("hidden");
      }
    }
  });

  getById("payment-btn").click(function () {
    // submitForm();
  });
})();
