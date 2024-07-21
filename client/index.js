let inputs = document.querySelectorAll("input");

function formHandle() {
  event.preventDefault();
  let payload = {
    name: inputs[0].value,
    email: inputs[1].value,
    phNum: inputs[2].value,
    createpass: inputs[3].value,
  };
  fetch(`http://localhost:5000/formData`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      // console.log("hiii");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
