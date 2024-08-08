// {/* <script type="module"> */}
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCCWEpgOpUkVk_hUKIs6VFfLP6CYtpm544",
//     authDomain: "formschoolipt.firebaseapp.com",
//     projectId: "formschoolipt",
//     storageBucket: "formschoolipt.appspot.com",
//     messagingSenderId: "118125934970",
//     appId: "1:118125934970:web:7d5e728687c446ea0b7ec3",
//     measurementId: "G-34Q6PRKW31"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);



let objstudent = {
  name :"afaq",
    Email : "syedafaq@gmail.com" ,
    PhoneNumber : "000",
    DateofBirth : "111", 
    ProgramApplayingFor:"3",
    HighSchoolName:"bbsul", 
    GPA : "3",
}
console.log(objstudent) 
// btnUpdate.onclick = () =>{
//     objstudent.studentName = txtName.value
//     student['studentName'] = txtName.value
//     console.log(student)
// }


btnUpdate.onclick = () =>{
  // set the value of key of object
  objstudent.Name =name.value 
  objstudent['Name']= name.value 

  console.log(objstudent)
}