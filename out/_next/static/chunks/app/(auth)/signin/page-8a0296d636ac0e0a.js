(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{89713:function(e,t,s){Promise.resolve().then(s.bind(s,14996))},14996:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return SignIn}});var l=s(57437),a=s(61396),n=s.n(a),r=s(2265),c=s(57614),i=s(48347),d=s(17590),x=s(75826),o=s(3198),u=s(25418),h=s(58837),m=s(24033),f=s(10689);function SignIn(){let e=(0,o.I0)();(0,o.v9)(u.a);let[t,s]=(0,r.useState)(""),[a,p]=(0,r.useState)(!1),[g,j]=(0,r.useState)(""),[b,N]=(0,r.useState)(!1),[k,v]=(0,r.useState)("password"),[w,y]=(0,r.useState)(""),S=(0,m.useRouter)(),changeStatus=()=>{"password"==k?v("text"):v("password")};async function handleSignIn(){x.Z.get("/users/"+t).then(s=>{e(h.Y.updateAuthState({signedIn:!0,logging:!1,studentId:t,name:s.name})),S.push("/")})}async function onSignInClick(){y(""),x.Z.post("/users/auth",{studentid:t,password:g}).then(async e=>{let s=new Date;s.setDate(s.getDate()+999999),f.cookies.set("authToken",e.authToken,{expires:s,path:"/"}),f.cookies.set("studentid",t,{expires:s,path:"/"}),f.cookies.set("password",g,{expires:s,path:"/"}),f.cookies.set("role",e.role,{expires:s,path:"/"}),await handleSignIn()}).catch(e=>{y("T\xe0i khoản hoặc mật khẩu kh\xf4ng đ\xfang.")})}return(0,l.jsx)("main",{className:"h-screen flex",children:(0,l.jsxs)("div",{className:"py-6 w-[420px] mx-auto bg-white rounded-xl shadow-lg border self-center",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,l.jsx)("button",{className:"bg-transparent text-4xl my-6 text-primary font-bold font-mainfont",children:(0,l.jsx)(n(),{href:"/",children:"UETable"})}),(0,l.jsx)("div",{className:"text-3xl text-black font-bold text-center my-8",children:"Đăng Nhập"}),(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-center p-6",children:[(0,l.jsxs)("div",{className:"flex w-full justify-center relative pb-6",children:[(0,l.jsxs)("div",{className:"absolute bottom-21 left-5 bg-white px-2 flex gap-[2px]",children:[(0,l.jsx)("pre",{className:"text-red-500 text-xs",children:"*"}),(0,l.jsx)("p",{className:"text-gray-500 text-xs font-semibold",children:"MSSV"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col pr-4",children:[(0,l.jsx)("input",{value:t,onChange:e=>{s(e.target.value)},onFocus:()=>{p(!0)},type:"text",name:"email",className:"w-full border rounded-lg text-black caret-black p-4 m-2 ".concat(a&&""===t?"border-red-500":""),placeholder:"Nhập email hoặc MSSV"}),a&&""===t&&(0,l.jsx)("p",{className:"text-red-500 ml-2 text-sm",children:"Vui l\xf2ng nhập email hoặc MSSV"})]})]}),(0,l.jsxs)("div",{className:"flex w-full justify-center relative",children:[(0,l.jsxs)("div",{className:"absolute bottom-15 left-5 bg-white px-2 flex gap-[2px]",children:[(0,l.jsx)("pre",{className:"text-red-500 text-xs",children:"*"}),(0,l.jsx)("p",{className:"text-gray-500 text-xs font-semibold",children:"MẬT KHẨU"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col pr-4",children:[(0,l.jsx)("input",{value:g,onChange:e=>{j(e.target.value)},onFocus:()=>{N(!0)},type:k,className:"w-full border rounded-lg text-black caret-black p-4 m-2 ".concat(b&&""===g?"border-red-500":""),placeholder:"Nhập mật khẩu"}),b&&""===g&&(0,l.jsx)("p",{className:"text-red-500 ml-2 text-sm",children:"Vui l\xf2ng nhập mật khẩu"})]}),(0,l.jsxs)("div",{children:["password"==k&&(0,l.jsx)(i.default,{className:"absolute top-8 right-6",onClick:changeStatus}),"text"==k&&(0,l.jsx)(d.default,{className:"absolute top-8 right-6",onClick:changeStatus})]})]}),""!=w&&(0,l.jsx)("div",{className:"w-full p-2",children:(0,l.jsxs)("div",{className:"w-full rounded-lg flex bg-red-300 p-4 mt-6",children:[(0,l.jsx)(c.default,{style:{color:"#FF0000"}}),(0,l.jsx)("p",{className:"text-sm ml-4",children:w})]})})]})]}),(0,l.jsx)("div",{className:"w-full flex justify-end items-end",children:(0,l.jsx)("button",{className:"text-sm text-primary mr-8 hover:underline hover:underline-offset-2",onClick:()=>{S.push("/forgotpassword")},children:"Qu\xean mật khẩu?"})}),(0,l.jsxs)("div",{className:"w-full flex justify-end items-end",children:["Chưa c\xf3 t\xe0i khoản?",(0,l.jsx)("button",{className:"text-sm text-primary mr-8 mt-2 ml-2 hover:underline hover:underline-offset-2",children:(0,l.jsx)(n(),{href:"/signup",children:"Đăng k\xfd ngay"})})]}),(0,l.jsxs)("div",{className:"w-full flex justify-between",children:[(0,l.jsx)("button",{className:"text-lg text-black rounded-lg px-6 py-2 font-bold ml-8 mt-16 hover:bg-slate-300",children:(0,l.jsx)(n(),{href:"/",children:"Quay lại"})}),(0,l.jsx)("button",{className:"text-lg text-white rounded-lg bg-primary px-3 py-2 mr-8 mt-16 hover:bg-dark-primary",onClick:onSignInClick,children:"Đăng nhập"})]})]})})}}},function(e){e.O(0,[1866,2400,3190,3712,9020,1718,9273,2808,350,260,3986,5022,3954,8110,9385,5623,6912,3574,2333,2838,5895,1396,413,8466,2276,689,2971,2472,1744],function(){return e(e.s=89713)}),_N_E=e.O()}]);