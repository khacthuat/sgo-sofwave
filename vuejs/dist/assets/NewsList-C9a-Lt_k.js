import{_ as j}from"./ThePageHeader-643Jvm7P.js";import{r as F,b as u,d as h,e as i,c as t,w as e,m as X,a,f as n,u as f,h as g,t as N,i as D}from"./index-Cwk4H8rk.js";import{F as P}from"./FilterOutlined-BwuehHvS.js";import{E as z}from"./ExportOutlined-Bz8H1vHQ.js";const K={class:"card"},Z={class:"card-header flex justify-between flex-wrap pt-4"},$={class:"card-title"},q={class:"card-toolbar"},A={class:"flex justify-end"},G={class:"card-body"},J={key:0},Q={key:1},R={components:{ThePageHeader:j}},nt=Object.assign(R,{__name:"NewsList",setup(W){const o=F(!1),k=()=>{o.value=!0},v=s=>{console.log(s),o.value=!1},w=()=>{X.success("Thao tác thành công")},x={style:{width:"150px"}},B={span:14},C=[{title:"Người đăng",dataIndex:"name"},{title:"Tiêu đề",dataIndex:"title"},{title:"Địa chỉ",dataIndex:"address"},{title:"Ngày đăng",dataIndex:"created_at"},{title:"Ngày sửa",dataIndex:"updated_at"},{title:"Lươt xem",dataIndex:"view"},{title:"Trạng thái",dataIndex:"status"},{title:"Chi tiết",key:"detail",fixed:"right",width:120}],T=[{key:"1",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"2",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"},{key:"3",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"},{key:"4",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"},{key:"5",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"},{key:"6",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"7",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"8",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"9",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"10",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"},{key:"11",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"sold",detail:"Chi tiết"},{key:"12",name:"Nguyễn Văn Bách",title:"Bất động sản",address:"Nam Từ Liêm, Hà Nội",created_at:"10/10/2021 10:00:00",updated_at:"10/10/2021 10:00:00",view:"150",status:"unsold",detail:"Chi tiết"}],L=s=>{console.log("click",s)};return(s,l)=>{const V=a("a-input-search"),_=a("UserOutlined"),r=a("a-menu-item"),b=a("a-menu"),m=a("a-button"),H=a("a-dropdown"),p=a("a-select-option"),I=a("a-select"),y=a("a-form-item"),E=a("a-range-picker"),O=a("a-form"),M=a("a-modal"),S=a("a-tag"),U=a("a-table");return u(),h("div",K,[i("div",Z,[i("div",$,[t(V,{value:s.value,"onUpdate:value":l[0]||(l[0]=d=>s.value=d),placeholder:"Tìm kiếm",style:{width:"200px"},onSearch:s.onSearch},null,8,["value","onSearch"])]),i("div",q,[i("div",A,[t(H,{trigger:s.click},{overlay:e(()=>[t(b,{onClick:L},{default:e(()=>[t(r,{key:"1"},{default:e(()=>[t(_),n(" Trạng thái ")]),_:1}),t(r,{key:"2"},{default:e(()=>[t(_),n(" Ngày đăng ")]),_:1}),t(r,{key:"3"},{default:e(()=>[t(_),n(" 3rd item ")]),_:1})]),_:1})]),default:e(()=>[t(m,{class:"me-3"},{icon:e(()=>[t(f(P))]),default:e(()=>[n(" Lọc ")]),_:1})]),_:1},8,["trigger"]),t(m,{onClick:k},{icon:e(()=>[t(f(z))]),default:e(()=>[n(" Xuất file ")]),_:1}),t(M,{open:o.value,"onUpdate:open":l[1]||(l[1]=d=>o.value=d),title:"Xuất file",onOk:[v,w],cancelText:"Huỷ",okText:"Xuất file"},{default:e(()=>[t(O,{"label-col":x,"wrapper-col":B,layout:"horizontal",style:{"max-width":"600px"}},{default:e(()=>[t(y,{label:"Loại file"},{default:e(()=>[t(I,null,{default:e(()=>[t(p,{value:"excel"},{default:e(()=>[n("Excel")]),_:1}),t(p,{value:"admin"},{default:e(()=>[n("PDF")]),_:1}),t(p,{value:"admin"},{default:e(()=>[n("Zip")]),_:1})]),_:1})]),_:1}),t(y,{label:"Khoảng thời gian"},{default:e(()=>[t(E)]),_:1})]),_:1})]),_:1},8,["open"])])])]),i("div",G,[t(U,{columns:C,"data-source":T,scroll:{x:1500}},{bodyCell:e(({column:d,record:c})=>[d.key==="detail"?(u(),h("div",J,[t(m,{type:"link",style:{color:"red"},href:"/admin/news-detail"},{default:e(()=>[n("Chi tiết")]),_:1})])):g("",!0),d.dataIndex==="name"?(u(),h("a",Q,N(c[d.dataIndex]),1)):g("",!0),d.dataIndex==="status"?(u(),D(S,{key:2,color:c.status==="sold"?"green":c.status==="unsold"?"red":""},{default:e(()=>[n(N(c.status),1)]),_:2},1032,["color"])):g("",!0)]),_:1})])])}}});export{nt as default};
