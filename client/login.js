let inputs = document.querySelectorAll("input");

function formHandle() {
  event.preventDefault();
  let alreadyUser = {
    name: inputs[0].value,
    pass: inputs[1].value,
  };
  fetch(`http://localhost:5000/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(alreadyUser),
  })
    .then((data) => {
      return(data.json());
    })
    .then((res)=>{
       console.log(res);
       window.location.assign("users.html");
    })
    .catch((err) => {
      console.log(err);
    });
}
