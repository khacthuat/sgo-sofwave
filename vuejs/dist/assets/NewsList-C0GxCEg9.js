import{m as U,E as X}from"./message-Cjuqcqqe.js";import{f as b}from"./formatDate-DZmpU-DR.js";import{l as A}from"./index-B8geXA2g.js";import"./useSider-BAFr6GtI.js";import{_ as N}from"./ThePageHeader-Bgrj-Al6.js";import{r as w,b as l,d as u,c as t,e as _,w as e,u as i,F as H,a,f as n,t as m,k,C as z,m as K,l as I}from"./index-uDXqgQ0i.js";import{U as C}from"./UserOutlined-C6Ifm4N5.js";import{F as S}from"./FilterOutlined-D8WW8et8.js";const Z={class:"card"},$={class:"card-header flex justify-between flex-wrap pb-4"},q={class:"card-title"},G={class:"card-toolbar"},J={class:"flex justify-end"},Q={class:"card-body"},R={key:0},W={key:1},Y={key:3},tt={key:4,class:"line-clamp-2"},et={components:{ThePageHeader:N}},rt=Object.assign(et,{__name:"NewsList",setup(at){const r=w(!1),O=()=>{r.value=!0},P=f=>{r.value=!1},T=[{title:"Người đăng",dataIndex:"username"},{title:"Tiêu đề",dataIndex:"title"},{title:"Địa chỉ",dataIndex:"address",width:250},{title:"Ngày đăng",dataIndex:"created_at"},{title:"Ngày sửa",dataIndex:"updated_at"},{title:"Lượt xem",dataIndex:"view"},{title:"Trạng thái",dataIndex:"sold_status"},{title:"Trạng thái bài viết",dataIndex:"status"},{title:"Chi tiết",key:"detail",fixed:"right",width:120}],p=w([]);return(async()=>{p.value=[];const f=await A.getPostNotPending(),c=[];for(const o of f)c.push({id:o.id,username:o.user.name,title:o.title,address:o.address,created_at:b(o.created_at),updated_at:b(o.updated_at),view:1e3,sold_status:o.sold_status,status:o.status.name});p.value=c})(),(f,c)=>{const o=a("a-input-search"),g=a("a-menu-item"),E=a("a-menu"),h=a("a-button"),L=a("a-dropdown"),x=a("a-select-option"),F=a("a-select"),y=a("a-form-item"),B=a("a-range-picker"),V=a("a-form"),j=a("a-modal"),D=a("router-link"),v=a("a-tag"),M=a("a-table");return l(),u(H,null,[t(N),_("div",Z,[_("div",$,[_("div",q,[t(o,{placeholder:"Tìm kiếm",style:{width:"200px"}})]),_("div",G,[_("div",J,[t(L,{trigger:"click"},{overlay:e(()=>[t(E,null,{default:e(()=>[t(g,{key:"1"},{default:e(()=>[t(i(C)),n(" Trạng thái ")]),_:1}),t(g,{key:"2"},{default:e(()=>[t(i(C)),n(" Ngày đăng ")]),_:1})]),_:1})]),default:e(()=>[t(h,{class:"me-3"},{icon:e(()=>[t(i(S))]),default:e(()=>[n(" Lọc ")]),_:1})]),_:1}),t(h,{onClick:O},{icon:e(()=>[t(i(X))]),default:e(()=>[n(" Xuất file ")]),_:1}),t(j,{open:r.value,"onUpdate:open":c[0]||(c[0]=d=>r.value=d),title:"Xuất file",cancelText:"Huỷ",okText:"Xuất file",onOk:()=>{P(),i(U).success()}},{default:e(()=>[t(V,{layout:"horizontal",style:{"max-width":"600px"}},{default:e(()=>[t(y,{label:"Loại file"},{default:e(()=>[t(F,null,{default:e(()=>[t(x,{value:"excel"},{default:e(()=>[n("Excel")]),_:1}),t(x,{value:"admin"},{default:e(()=>[n("PDF")]),_:1}),t(x,{value:"admin"},{default:e(()=>[n("Zip")]),_:1})]),_:1})]),_:1}),t(y,{label:"Khoảng thời gian"},{default:e(()=>[t(B)]),_:1})]),_:1})]),_:1},8,["open","onOk"])])])]),_("div",Q,[t(M,{columns:T,"data-source":p.value,scroll:{x:1500},id:"main-table"},{bodyCell:e(({column:d,record:s})=>[d.key==="detail"?(l(),u("div",R,[t(D,{to:{name:"admin-news-detail",params:{id:s.id}}},{default:e(()=>[t(h,{type:"",style:{color:"red"}},{default:e(()=>[n("Chi tiết")]),_:1})]),_:2},1032,["to"])])):d.dataIndex==="username"?(l(),u("a",W,m(s.username),1)):d.dataIndex==="sold_status"?(l(),k(v,{key:2,color:s.sold_status===1?"#87d068":s.sold_status===0?"#f50":""},{default:e(()=>[n(m(s.sold_status==1?"đã bán":"chưa bán"),1)]),_:2},1032,["color"])):d.dataIndex==="status"?(l(),u("div",Y,[t(v,{color:s.status==="published"?"success":s.status==="unpublished"?"error":""},{icon:e(()=>[s.status==="published"?(l(),k(i(z),{key:0})):s.status==="unpublished"?(l(),k(i(K),{key:1})):I("",!0)]),default:e(()=>[n(m(s.status=="published"?"công khai":s.status=="unpublished"?"không công khai":"")+" ",1)]),_:2},1032,["color"])])):d.dataIndex==="title"?(l(),u("div",tt,m(s.title),1)):I("",!0)]),_:1},8,["data-source"])])])],64)}}});export{rt as default};
