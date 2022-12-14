url = "https://localhost:5001/api/Designation/GetDesignationDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      //------star for loop
      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.des_Id + "</td>";
        temp += "<td>" + u.dep_Name + "</td>";
        temp += "<td>" + u.des_Name + "</td>";
        // temp += "<td>" + u.isActive + "</td>";
        //         temp +="<td><button>Edit</button> <button>Delete</button></td></tr>";
        // })
        temp +=
          "<td><span> <i  class='fa fa-pencil' aria-hidden='true'></i></span><span><i class='fa fa-trash' aria-hidden='true' onClick='removeItem(" +
          u.des_Id +
          ")'></i></span></td></tr>";
      });
      document.getElementById("data").innerHTML = temp;
    }
  });

//----------------Data in Post Api--------------------

// var form = document.getElementById("myForm");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   debugger;
function desi() {
  debugger;
  window.location.reload();
  var Department = document.getElementById("deper").value;
  var Designation = document.getElementById("des").value;
  fetch("https://localhost:5001/api/Designation/AddDesignations", {
    method: "POST",
    body: JSON.stringify({
      dep_Id: Department,
      des_Name: Designation,
      isActive: true,
      actionPerformedBy: "Shubham",
    }),
    headers: {
      "content-type": "application/json ; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  alert("Added successfully!!!");
}

url = "https://localhost:5001/api/Department/GetDepartmentDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("deper");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.dep_Id}">${items.dep_Name}</option>`;
    });
  });

function removeItem(id) {
  window.location.reload();
  console.log(id);
  fetch(
    `https://localhost:5001/api/Designation/DeleteDesignations?Des_Id=${id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  alert("Delete successfully!!!");
}
