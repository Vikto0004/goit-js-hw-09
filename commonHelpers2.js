import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},s=document.querySelector(".feedback-form"),a=s.elements.email,l=s.elements.message;s.addEventListener("input",()=>{e.email=a.value.trim(),e.message=l.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(JSON.stringify(e))});if(localStorage.getItem("feedback-form-state")){const t=JSON.parse(localStorage.getItem("feedback-form-state"));a.value=e.email=t.email,l.value=e.message=t.message}s.addEventListener("submit",t=>{t.preventDefault(),!l.value||!a.value?alert("Fill please all fields"):(console.log(e),console.log(l.value),console.log(a.value),localStorage.removeItem("feedback-form-state"),e.email=e.message="",a.value=l.value="")});
//# sourceMappingURL=commonHelpers2.js.map
