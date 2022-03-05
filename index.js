var qualification = document.getElementById("qualification");
var qualifications = document.getElementById("qualifications");
var project = document.getElementById("project");
var projects = document.getElementById("projects");
let saveproject = document.getElementById("saveproject");
let savequal = document.getElementById("savequal");
let submit = document.getElementById("submit");
var arr = [];
var arr1 = [];
qualification.addEventListener("click", () => {
  let degree = document.getElementById("degree");
  let stream = document.getElementById("stream");
  let startyear = document.getElementById("startyear");
  let endyear = document.getElementById("endyear");

  let qobj = {
    degree: "",
    stream: "",
    startyear: "",
    endyear: "",
  };
  qobj.degree = degree.value;
  qobj.stream = stream.value;
  qobj.startyear = startyear.value;
  qobj.endyear = endyear.value;
  arr.push(qobj);

  showqual();
  // console.log(arr);
  degree.value = "";
  stream.value = "";
  startyear.value = "";
  endyear.value = "";
});

project.addEventListener("click", () => {
  let title = document.getElementById("projecttitle");
  let description = document.getElementById("description");
  let skill = document.getElementById("skills");
  let pobj = {
    title: "",
    description: "",
    skill: "",
  };
  pobj.title = title.value;
  pobj.description = description.value;
  pobj.skill = skill.value;
  arr1.push(pobj);

  title.value = "";
  description.value = "";
  skill.value = "";
  showproject();
  // console.log(arr);
});

function showqual() {
  qualifications.innerHTML = "";
  let html = "";
  arr.forEach(function (element, index) {
    html += `<div class="q">
        <p>${arr[index].degree} in ${arr[index].stream} from ${arr[index].startyear}-${arr[index].endyear} <button  style="background-color: grey;"  onclick="edit(${index})">edit</button>
        <button style="background-color: grey;" onclick="deletes(${index})">delete</button> </p>
        </div>`;
  });

  qualifications.innerHTML = html;
}

function showproject() {
  projects.innerHTML = "";
  let html = "";
  arr1.forEach(function (element, index) {
    html += `<div class="q">
        <p>${arr1[index].title} : ${arr1[index].description}. Skills: ${arr1[index].skill} <button  style="background-color: grey;"  onclick="edit1(${index})">edit</button>
        <button style="background-color: grey;" onclick="deletes1(${index})">delete</button> </p>
        </div>`;
  });

  projects.innerHTML = html;
}
function edit(index) {
  let degree = document.getElementById("degree");
  let stream = document.getElementById("stream");
  let startyear = document.getElementById("startyear");
  let endyear = document.getElementById("endyear");

  degree.value = arr[index].degree;
  stream.value = arr[index].stream;
  startyear.value = arr[index].startyear;
  endyear.value = arr[index].endyear;
  qualification.style.display = "none";
  savequal.style.display = "block";
  savequal.addEventListener("click", function () {
    saveq(index);
    degree.value = "";
    stream.value = "";
    startyear.value = "";
    endyear.value = "";
    savequal.style.display = "none";

    qualification.style.display = "block";
  });
}
function saveq(index) {
  let degree = document.getElementById("degree");
  let stream = document.getElementById("stream");
  let startyear = document.getElementById("startyear");
  let endyear = document.getElementById("endyear");
  arr[index].degree = degree.value;
  arr[index].stream = stream.value;
  arr[index].startyear = startyear.value;
  arr[index].endyear = endyear.value;
  showqual();
}

function edit1(index) {
  let title = document.getElementById("projecttitle");
  let description = document.getElementById("description");
  let skill = document.getElementById("skills");
  title.value = arr1[index].title;
  description.value = arr1[index].description;
  skill.value = arr1[index].skill;
  project.style.display = "none";

  saveproject.style.display = "block";

  saveproject.addEventListener("click", function () {
    savep(index);
    saveproject.style.display = "none";

    project.style.display = "block";
    title.value = "";
    description.value = "";
    skill.value = "";
  });
}
function savep(index) {
  let title = document.getElementById("projecttitle");
  let description = document.getElementById("description");
  let skill = document.getElementById("skills");
  arr1[index].title = title.value;
  arr1[index].description = description.value;
  arr1[index].skill = skill.value;
  showproject();
}
function deletes(index) {
  project.style.display = "block";
  arr.splice(index, 1);

  showqual();
}
function deletes1(index) {
  arr1.splice(index, 1);
  showproject();
}
submit.addEventListener("click", () => {
  container.style.display = "none";
  container2.style.display = "block";

  let resumename = document.getElementById("resumename");
  let resumeprojects = document.getElementById("resumeprojects");
  let resumequals = document.getElementById("resumequals");
  let resumeemail = document.getElementById("resumeemail");
  let resumecontact = document.getElementById("resumecontact");
  resumename.innerText = inputname.value;
  resumecontact.innerText = phonenumber.value;
  resumeemail.innerText = inputemail.value;
  arr1.forEach(function (element, index) {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${arr1[index].title} : ${arr1[index].description}. Skills: ${arr1[index].skill} </h3>`;
    resumeprojects.appendChild(li);
  });
  arr.forEach(function (element, index) {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${arr[index].degree} in ${arr[index].stream} from ${arr[index].startyear}-${arr[index].endyear}</h3>`;

    resumequals.appendChild(li);
  });
});
