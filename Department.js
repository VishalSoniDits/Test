url = "https://localhost:5001/api/Department/GetDepartmentDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";

      //------star for loop--------------
      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.dep_Id + "</td>";
        temp += "<td>" + u.dep_Name + "</td>";
        // temp +="<td>"+u.isActive+"</td>";
        //         temp +="<td><button>Edit</button> <button onClick='removeItem(${id})'>Delete</button></td></tr>";
        // })
        //let id=u.dep_Id;
        temp +=
          "<td><span> <i class='fa fa-pencil' data-toggle='modal' data-target='#exampleModal1' aria-hidden='true' ></i></span><span><i class='fa fa-trash' aria-hidden='true' onClick='removeItem(" +
          u.dep_Id +
          ")'></i></span></td></tr>";
      });
      document.getElementById("data").innerHTML = temp;
    }
  });

//----------------Data in Post Api--------------------

var form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var Department = document.getElementById("dep").value;
  fetch("https://localhost:5001/api/Department/AddDepartments", {
    method: "POST",
    body: JSON.stringify({
      dep_Name: Department,
      isActive: true,
      actionPerformedBy: "Akshay",
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
});

// Data Delete in Table
function removeItem(id) {
  window.location.reload();
  console.log(id);
  //https://localhost:5001/api/Department/DeleteDepartments
  fetch(
    `https://localhost:5001/api/Department/DeleteDepartments?Dep_Id=${id}`,
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

//---------------------Update Data in Api from Table----------------
function updateFunction(id) {
  debugger;
  var updepartment = document.getElementById("dep").value;
  fetch(`https://localhost:5001/api/Department/EditDepartments?Dep_Id=${id}`, {
    method: "PUT",
    body: JSON.stringify({
      dep_Id: id,
      dep_Name: updepartment,
      isActive: true,
      actionPerformedBy: "mohan",
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(function (data) {
    return data.json();
  });
  alert("update successfully!!!");
}
