import{i as r}from"./vendor-BbSUbo7J.js";const s=document.querySelector(".form");let t;s.addEventListener("submit",a);function a(o){let i=o.currentTarget.elements.state.value==="fulfilled";t=o.currentTarget.delay.value,o.preventDefault();const l=new Promise((e,n)=>{setTimeout(()=>{i?e(`✅ Fulfilled promise in ${t}ms`):n(`❌ Rejected promise in ${t}ms`)},`${t}`)});s.reset(),l.then(e=>{r.show({color:"rgba(86, 216, 248, 0.9)",position:"center",message:e})}).catch(e=>{r.show({color:"rgba(202, 90, 156, 0.9)",position:"center",message:e})})}
//# sourceMappingURL=2-snackbar-D3dOVM9B.js.map
