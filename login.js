function checklogin() {
  UserName = document.getElementById("name").value;
  Password = document.getElementById("pass").value;
  debugger;
  console.log(UserName);
  console.log(Password);
  fetch("https://localhost:5001/CheckLogin", {
    method: "POST",
    body: JSON.stringify({
      user_Name: UserName,
      password: Password,
    }),
    headers: {
      "content-type": "application/json ; charset=UTF-8",
    },
  })
    .then(function (data) {
      console.log(data);
      return data.json();
    })
    .then(function (data) {
      console.log(data.responseMessage);
      bb = data.role;
      a = data.responseMessage;
      if (bb === "Admin") {
        location.href = "dashboard.html";
      } else if (bb === "Human Resources") {
        location.href = "HRDashboard.html";
      } else if (bb === "Employee") {
        location.href = "EmpDashboard.html";
      } else {
        alert("Enter Correct UserName & Password");
      }
    });
}
