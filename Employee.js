url = "https://localhost:5001/GetEmployees";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    if (data.length > 0) {
      var temp = "";
      //------star for loop
      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.emp_Id + "</td>";
        temp += "<td>" + u.name + "</td>";
        temp += "<td>" + u.father_Name + "</td>";
        temp += "<td>" + u.current_Address + "</td>";
        temp += "<td>" + u.office_Email + "</td>";
        temp += "<td>" + u.phone_Number + "</td>";
        temp += "<td>" + u.experience + "</td>";
        temp += "<td>" + u.dep_Name + "</td>";
        temp += "<td>" + u.prof_Name + "</td>";
        temp += "<td>" + u.skill_Name + "</td>";
        temp +=
          "<td><span> <i  class='fa fa-pencil' aria-hidden='true'></i></span><span><i class='fa fa-trash' aria-hidden='true'  onClick='removeItem(" +
          u.emp_Id +
          ")'></i></span></td></tr>";
      });
      document.getElementById("dat").innerHTML = temp;
    }
  });

function addemp() {
  debugger;
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let fathername = document.getElementById("fathername").value;
  let gender = document.getElementById("gender").value;
  let dob = document.getElementById("dob").value;
  let ms = document.getElementById("ms").value;
  let qualification = document.getElementById("qualification").value;
  let caddress = document.getElementById("caddress").value;
  let city1 = document.getElementById("city1").value;
  let state1 = document.getElementById("state1").value;
  let Zip1 = document.getElementById("Zip1").value;
  let paddress = document.getElementById("paddress").value;
  let city2 = document.getElementById("city2").value;
  let state2 = document.getElementById("state2").value;
  let Zip2 = document.getElementById("Zip2").value;
  let phone = document.getElementById("phone").value;
  let alphone = document.getElementById("alphone").value;
  let pemail = document.getElementById("pemail").value;
  let oemail = document.getElementById("oemail").value;
  let password = document.getElementById("pass").value;
  let role = document.getElementById("role").value;
  let dep = document.getElementById("dep").value;
  let des = document.getElementById("des").value;
  let pro = document.getElementById("pro").value;
  let skill = document.getElementById("skill").value;
  let jdate = document.getElementById("jdate").value;
  let offerdate = document.getElementById("offerdate").value;
  let experience = document.getElementById("experience").value;
  let image = document.getElementById("image").value;
  // let inputZip1 = document.getElementById("inputZip1").value;
  // let inputZip2 = document.getElementById("inputZip2").value;
  // let inputZip3 = document.getElementById("inputZip3").value;
  // let inputZip4 = document.getElementById("inputZip4").value;
  // let inputZip5 = document.getElementById("inputZip5").value;

  fetch("https://localhost:5001/AddEmployees", {
    method: "POST",
    body: JSON.stringify({
      first_Name: firstname,
      last_Name: lastname,
      father_Name: fathername,
      gender: gender,
      current_Address: caddress,
      city1: city1,
      state1: state1,
      zip_Code1: Zip1,
      permanent_Address: paddress,
      city1: city2,
      state1: state2,
      zip_Code2: Zip2,
      email: pemail,
      office_Email: oemail,
      phone_Number: phone,
      alternate_Phone_Number: alphone,
      qualification: qualification,
      marital_Id: ms,
      birth_Day: dob,
      image: image,
      join_Date: jdate,
      salary: 10000,
      role_Id: role,
      dep_Id: dep,
      des_Id: des,
      prof_Id: pro,
      // doc_Image: inputZip1,
      experience: experience,
      offer_date: offerdate,
      skill_Id: skill,
      password: password,
      isActive: true,
      actionPerformedBy: "Soni",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
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

url = "https://localhost:5001/api/Marital/GetMarital";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("ms");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.marital_Id}">${items.maritals_Name}</option>`;
    });
  });

url = "https://localhost:5001/api/SetRole/GetSetRole";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("role");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.role_Id}">${items.role_Name}</option>`;
    });
  });

url = "https://localhost:5001/api/Department/GetDepartmentDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("dep");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.dep_Id}">${items.dep_Name}</option>`;
    });
  });

url = "https://localhost:5001/api/Designation/GetDesignationDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("des");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.des_Id}">${items.des_Name}</option>`;
    });
  });

url = "https://localhost:5001/api/Profile/GetProfileDetail";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("pro");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.prof_Id}">${items.prof_Name}</option>`;
    });
  });

url = "https://localhost:5001/api/Skill/GetSkill";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newData = document.getElementById("skill");
    data.forEach(function (items, index) {
      newData.innerHTML += `<option value="${items.skill_Id}">${items.skill_Name}</option>`;
    });
  });

function removeItem(id) {
  window.location.reload();
  console.log(id);
  fetch(`https://localhost:5001/DeleteEmployees?Emp_Id=${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  alert("Delete successfully!!!");
}
