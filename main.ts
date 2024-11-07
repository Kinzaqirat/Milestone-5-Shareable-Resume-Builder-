let resume =document.querySelector("button");
resume?.addEventListener( "click",(even)=>{
even.preventDefault();
let Name=document.getElementById("name") as HTMLInputElement;
let Email=document.getElementById("email") as HTMLInputElement;
let Phone=document.getElementById("phone") as HTMLInputElement;
let Company=document.getElementById("company") as HTMLInputElement;
let CompanyDescrib=document.getElementById("companydescription") as HTMLInputElement;
let Education=document.getElementById("Education") as HTMLInputElement;
let Skills=document.getElementById("Skills") as HTMLInputElement;
let createImageInput = document.getElementById("pic") as HTMLInputElement;
let UserURL = document.getElementById('userURL') as HTMLInputElement;
if(
Name&&
Email&&
Phone&&
Company&&
CompanyDescrib&&
Education&&
Skills&&
createImageInput&&
UserURL

){
let NameValue=Name.value;
let EmailValue=Email.value;
let PhoneValue=Phone.value;
let CompanyValue=Company.value;
let CompanyDescribValue=CompanyDescrib.value;
let EducationValue=Education.value;
let SkillsValue=Skills.value


 // here is the code of PDF
 let urlPDFValue = UserURL.value;
 let path = `resume/${urlPDFValue.replace(/\s+/g,"__")}__cv.html` 
    // Handle image
    let imageURL = "";
    const file = createImageInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        imageURL = reader.result as string;



// input
let resumeOutput=`
<div style="background-color: #ebd6c9;">
<h2 style="display: flex; justify-content: center; color: #DCA47C;">RESUME</h2>
<br>
<h3 style="color: #DCA47C; display: flex; justify-content: center;">INFORMATION</h3>
<div style="display: flex; justify-content: center ;gap: 20px;">
<img src="${imageURL}" alt="profile-image" height="100" width="100" />
<p>Name:${NameValue}  </p> 
<p>Email: ${EmailValue}</p> 
<p>Phone:${PhoneValue}  </p> 
</div>
<br>

<h3 style="display: flex; justify-content: center; color: #DCA47C;">EXPERIENCE</h3>
<p style="display: flex; justify-content: center;"> Company: ${CompanyValue}  </p>
<p style="display: flex; justify-content: center;">Company Description: ${CompanyDescribValue}  </p>
<br>
<h3 style="display: flex; justify-content: center; color: #DCA47C;">EDUCATION</h3>
<p style="display: flex; justify-content: center;">Education: ${EducationValue}  </p>



<br>
<h3 style="display: flex; justify-content: center; color: #DCA47C;">SKILLS</h3>
<p style="display: flex; justify-content: center; ">Skills: ${SkillsValue} </p>
</div>
`;



let downloadLink = document.createElement('a');
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = path
downloadLink.textContent = 'download your 2024 resume'
let resumeOutputElement = document.getElementById('output-resume');
if (resumeOutputElement) {
  resumeOutputElement.innerHTML = resumeOutput;
  resumeOutputElement.classList.remove('hidden');

             // Create Container for Button
             let buttonContainer =document.createElement("div");
             buttonContainer.id = 'buttonContainer';
             resumeOutputElement.appendChild(buttonContainer);
         
         
             // Add download PDF button
             let downloadButton = document.createElement('button');
             downloadButton.textContent = 'Download as PDF';
             downloadButton.addEventListener('click', function(){
                 window.print();  //Open the print dialog, allowing the user to save the PDF;
             });
             buttonContainer.appendChild(downloadButton);




























 // Add sharable link in button
 let sharableLinkButton = document.createElement('button');
 sharableLinkButton.textContent = "Copy Shareable Link";
 sharableLinkButton.addEventListener('click',async function () {
     try {
         // create shareable link
         let shareLink = `https://yourdomain.com/resume/${NameValue.replace(/\s+/g, "__")}_cv.html`;
         await navigator.clipboard.writeText(shareLink);
         alert(`Link copied to clipboard`);
     } catch (error) {
         console.error('failed too copied', error);
         alert('Failed to copy to clipboard.Please try again.')
     }
 })
 buttonContainer.appendChild(sharableLinkButton);
 resumeOutputElement.appendChild(downloadLink)
 


  makeEditable();
} else {
  console.error('The resume output element is missing');
}
};
reader.readAsDataURL(file); // Read file as Data URL
} else {
console.error("No image file selected.");
}
} else {
console.error('One or more form elements are missing');
}
});;    
function makeEditable() {
    let editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((editableElement) =>{
        editableElement.addEventListener('click',function(){
            let currentElement = editableElement as  HTMLElement;
            let currentValue = currentElement.textContent || "";
  
            // Replace Contact
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                let input = document.createElement('input');
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing input')
  
  
                input.addEventListener('blur', function(){
                    currentElement.textContent =  input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
  }