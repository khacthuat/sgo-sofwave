import{h as j,r as h,i as ee,j as te,a as o,b as T,k as $,w as t,c as e,f as l,d as F,e as m,u as O,F as ae,D as oe,l as le,t as A,M as ne,E as se}from"./index-uDXqgQ0i.js";import{f as z}from"./formatDate-DZmpU-DR.js";import{c as ie}from"./createUser-sn41MZ5M.js";import{m as D,E as ce}from"./message-Cjuqcqqe.js";import"./useSider-BAFr6GtI.js";import{_ as K}from"./ThePageHeader-Bgrj-Al6.js";import{F as de}from"./FilterOutlined-D8WW8et8.js";const re=async()=>{try{return(await axios.get(`${j.baseURL}/users`)).data}catch(f){console.error(f)}},ue=async f=>{try{return(await axios.delete(`${j.baseURL}/users/${f}`)).data}catch(x){console.log(x)}},_e=async(f,x)=>{try{const c=await axios.put(`${j.baseURL}/users/${f}`,x);return console.log(c.data),c.data}catch(c){console.log(c)}},me={__name:"UserDetail",props:{title:String,userSelected:Object},emits:["isShowDetail","updateUserList"],setup(f,{emit:x}){const c=f,U=x,y=h(!1),a=ee({name:"",email:"",role_id:"",is_active:""}),b=h({});te(()=>c.userSelected,(d,i)=>{d&&(a.id=d.id,a.name=d.name,a.email=d.email,a.role_id=d.role_id,a.is_active=d.is_active)});const E=async()=>{if(y.value=!0,a.name===""||a.email===""){D.error("Vui lòng nhập đầy đủ thông tin"),y.value=!1;return}if(c.title==="Thêm mới"){const d={name:a.name,email:a.email,role_id:a.role_id,is_active:a.is_active};(async k=>{try{const r=await ie(k);U("updateUserList")}catch(r){b.value=r.responsive.data.errors}finally{U("isShowDetail",!1),y.value=!1}})(d)}else if(c.title==="Sửa"){const d=a.id,i={name:a.name,email:a.email,role_id:a.role_id,is_active:a.is_active};(async(r,u)=>{try{const w=await _e(r,u);U("updateUserList"),D.success()}catch(w){b.value=w.responsive.data.errors}finally{U("isShowDetail",!1),y.value=!1}})(d,i)}};return(d,i)=>{const k=o("a-input"),r=o("a-form-item"),u=o("a-select-option"),w=o("a-select"),M=o("a-form"),C=o("a-modal");return T(),$(C,{title:f.title,cancelText:"Huỷ",okText:"Lưu",onOk:()=>{E()},"confirm-loading":y.value},{default:t(()=>[e(M,{layout:"horizontal",style:{"max-width":"600px"}},{default:t(()=>[e(r,{label:"Tên"},{default:t(()=>[e(k,{value:a.name,"onUpdate:value":i[0]||(i[0]=g=>a.name=g)},null,8,["value"])]),_:1}),e(r,{label:"Email"},{default:t(()=>[e(k,{value:a.email,"onUpdate:value":i[1]||(i[1]=g=>a.email=g)},null,8,["value"])]),_:1}),e(r,{label:"Chọn quyền:"},{default:t(()=>[e(w,{ref:"select",value:a.role_id,"onUpdate:value":i[2]||(i[2]=g=>a.role_id=g)},{default:t(()=>[e(u,{value:1},{default:t(()=>[l("Admin")]),_:1}),e(u,{value:2},{default:t(()=>[l("Đầu chủ")]),_:1}),e(u,{value:3},{default:t(()=>[l(" Sale ")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"Trạng thái:"},{default:t(()=>[e(w,{ref:"select",value:a.is_active,"onUpdate:value":i[3]||(i[3]=g=>a.is_active=g)},{default:t(()=>[e(u,{value:1},{default:t(()=>[l("Hoạt động")]),_:1}),e(u,{value:0},{default:t(()=>[l("Không hoạt động")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["title","onOk","confirm-loading"])}}},pe={class:""},fe={class:"card-header flex justify-between flex-wrap py-4"},ve={class:"card-title my-1"},he={class:"card-toolbar my-1"},ye={class:"flex justify-end flex-wrap"},ge=m("span",null,"Lọc",-1),xe=m("span",null,"Xuất file",-1),ke={class:"card-body"},Ue={clas:"table"},we={key:0},be=["onClick"],Ce=["onClick"],Se={key:3,class:""},Te={components:{ThePageHeader:K}},Ae=Object.assign(Te,{__name:"UserList",setup(f){const x=[{title:"Tên",width:200,dataIndex:"name",key:"2"},{title:"Email",dataIndex:"email",key:"3",width:150},{title:"Ngày tham gia",dataIndex:"created_at",key:"4",width:150},{title:"Ngày cập nhật",dataIndex:"updated_at",key:"5",width:150},{title:"Chức vụ",dataIndex:"role_id",key:"6",width:100},{title:"Trạng thái",dataIndex:"is_active",key:"7",width:100},{title:"Số tin đã đăng",dataIndex:"activity",key:"8",width:100},{title:"Action",key:"operation",width:100}],c=h([]),U=async()=>{c.value=[];const v=await re(),n=[];for(const p of v)n.push({id:p.id,name:p.name,email:p.email,created_at:z(p.created_at),updated_at:z(p.updated_at),role_id:p.role_id,is_active:p.is_active,activity:120});c.value=n};U();const y=h(""),a=h(!1),b=h({name:"",email:"",role_id:"",is_active:""}),E=v=>{a.value=v},d=()=>{b.value={name:"",email:"",role_id:"",is_active:""},a.value=!0,y.value="Thêm mới"},i=async v=>{y.value="Sửa",b.value=v,a.value=!0},k=h("1"),r=h("1"),u=h(!1),w=()=>{u.value=!0},M=v=>{u.value=!1},C=h(!1),g=()=>{C.value=!0},q=v=>{C.value=!1},V=async v=>{ne.confirm({title:"Cảnh báo",icon:e(se),content:e("div",{class:"text-danger"},"Bạn chắc chắn muốn xoá người dùng này ?"),okText:"Xoá",cancelText:"Huỷ",onOk(){(async p=>{await ue(p),updateUserList(),D.success()})(v)},onCancel(){}})};return(v,n)=>{const p=o("a-input-search"),I=o("a-button"),S=o("a-select-option"),H=o("a-select"),L=o("a-form-item"),N=o("a-radio"),Z=o("a-radio-group"),P=o("a-form"),B=o("a-modal"),G=o("a-range-picker"),R=o("a-menu-item"),J=o("a-menu"),Q=o("a-dropdown"),X=o("a-tag"),W=o("a-table");return T(),F(ae,null,[e(K),m("div",pe,[m("div",fe,[m("div",ve,[e(p,{placeholder:"Tìm kiếm",style:{"min-width":"200px"}})]),m("div",he,[m("div",ye,[e(I,{class:"me-3 flex align-items-center justify-center",onClick:w},{icon:t(()=>[e(O(de))]),default:t(()=>[ge]),_:1}),e(B,{open:u.value,"onUpdate:open":n[2]||(n[2]=s=>u.value=s),title:"Lọc",cancelText:"Reset",okText:"Áp dụng",onOk:()=>{M(),O(D).success()}},{default:t(()=>[e(P,{layout:"horizontal",style:{"max-width":"600px"}},{default:t(()=>[e(L,{label:"Chức vụ"},{default:t(()=>[e(H,{value:r.value,"onUpdate:value":n[0]||(n[0]=s=>r.value=s)},{default:t(()=>[e(S,{value:"1"},{default:t(()=>[l("Admin")]),_:1}),e(S,{value:"2"},{default:t(()=>[l("Đầu chủ")]),_:1}),e(S,{value:"3"},{default:t(()=>[l("Sale")]),_:1})]),_:1},8,["value"])]),_:1}),e(L,{label:"Trạng thái"},{default:t(()=>[e(Z,{value:k.value,"onUpdate:value":n[1]||(n[1]=s=>k.value=s)},{default:t(()=>[e(N,{value:"1"},{default:t(()=>[l("Hoạt động")]),_:1}),e(N,{value:"0"},{default:t(()=>[l("Không hoạt động")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["open","onOk"]),e(I,{class:"me-0 me-sm-3 mb-3 mb-lg-0 flex align-items-center justify-center",onClick:g},{icon:t(()=>[e(O(ce))]),default:t(()=>[xe]),_:1}),e(B,{open:C.value,"onUpdate:open":n[3]||(n[3]=s=>C.value=s),title:"Xuất file",cancelText:"Huỷ",okText:"Xuất file",onOk:()=>{q(),O(D).success()}},{default:t(()=>[e(P,{layout:"horizontal",style:{"max-width":"600px"}},{default:t(()=>[e(L,{label:"Loại file"},{default:t(()=>[e(H,null,{default:t(()=>[e(S,{value:"excel"},{default:t(()=>[l("Excel")]),_:1}),e(S,{value:"pdf"},{default:t(()=>[l("PDF")]),_:1}),e(S,{value:"zip"},{default:t(()=>[l("Zip")]),_:1})]),_:1})]),_:1}),e(L,{label:"Khoảng thời gian"},{default:t(()=>[e(G)]),_:1})]),_:1})]),_:1},8,["open","onOk"]),e(I,{type:"primary",onClick:d},{default:t(()=>[l(" Thêm mới ")]),_:1})])])]),m("div",ke,[m("div",Ue,[e(W,{columns:x,"data-source":c.value,"onUpdate:dataSource":n[4]||(n[4]=s=>c.value=s),scroll:{x:1500}},{bodyCell:t(({column:s,record:_})=>[s.key==="operation"?(T(),F("div",we,[e(Q,{trigger:"click"},{overlay:t(()=>[e(J,null,{default:t(()=>[e(R,{key:"1"},{default:t(()=>[m("div",null,[m("div",{onClick:Y=>i(_)},"Sửa",8,be)])]),_:2},1024),e(R,{key:"2"},{default:t(()=>[m("div",{onClick:Y=>V(_.id)},"Xoá",8,Ce)]),_:2},1024)]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>[l(" Chức năng "),e(O(oe))]),_:1})]),_:2},1024)])):le("",!0),s.dataIndex==="role_id"?(T(),$(X,{key:1,color:_.role_id===1?"#87d068":_.role_id===2?"#2db7f5":_.role_id===3?"#8b5cf6":""},{default:t(()=>[l(A(_.role_id===1?"admin":_.role_id===2?"đầu chủ":_.role_id===3?"sale":""),1)]),_:2},1032,["color"])):s.dataIndex==="is_active"?(T(),$(X,{key:2,bordered:!1,color:_.is_active==1?"success":_.is_active==0?"error":""},{default:t(()=>[l(A(_.is_active==1?"hoạt động":"không hoạt động"),1)]),_:2},1032,["color"])):(T(),F("div",Se,A(_[s.dataIndex]),1))]),_:1},8,["data-source"])])])]),e(me,{open:a.value,"onUpdate:open":n[5]||(n[5]=s=>a.value=s),onIsShowDetail:E,onUpdateUserList:U,title:y.value,userSelected:b.value},null,8,["open","title","userSelected"])],64)}}});export{Ae as default};
