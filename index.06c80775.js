const e=document.querySelector(".btn"),t=document.querySelector(".user-list");e.addEventListener("click",()=>{fetch("https://jsonplaceholder.typicode.com/users").then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>(function(e){let n=e.map(e=>`<li>
          <p><b>Name</b>: ${e.name}</p>
          <p><b>Email</b>: ${e.email}</p>
          <p><b>Company</b>: ${e.company.name}</p>
        </li>`).join("");t.innerHTML=n})(e)).catch(e=>console.log(e))});
//# sourceMappingURL=index.06c80775.js.map
