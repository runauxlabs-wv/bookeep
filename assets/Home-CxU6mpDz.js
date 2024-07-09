import{_ as P,u as I,c as $,r as Y,o as E,w as D,a as n,b as k,F as T,d as W,n as ae,e as v,t as m,f as U,g as s,h,i as d,j as l,k as w,l as S,m as ne,p as se,q as re,s as ue}from"./index-DJb8MkJb.js";const de={class:"bookshelf"},ce={class:"book-title"},ie={__name:"BookShelf",setup(V){const a=r=>{const _=[1,1];for(;;){const g=_[_.length-1]+_[_.length-2];if(g>r)break;_.push(g)}return _},t=I(),i=$(()=>t.books.finished||[]),p=Y([]),b=Y({}),e=(r,_,g)=>{const c=30+r.pages/1e3*50,u=150,f=Math.floor(Math.random()*(200-u+1)+u),A=g.includes(_+1)?Math.random()*10-5:0;return{width:`${c}px`,height:`${f}px`,backgroundColor:"#F2F2F5",transform:`rotate(${A}deg)`,transformOrigin:"bottom"}},o=()=>{p.splice(0,p.length,...a(i.value.length)),i.value.forEach((r,_)=>{b[r.isbn]||(b[r.isbn]=e(r,_,p))})};return E(()=>{t.loadBooks(),o()}),D(i,()=>{o()}),(r,_)=>(n(),k("div",de,[(n(!0),k(T,null,W(i.value,(g,x)=>(n(),k("div",{key:g.isbn,class:"book",style:ae(b[g.isbn])},[v("span",ce,m(g.title),1)],4))),128))]))}},_e=P(ie,[["__scopeId","data-v-08ee7aee"]]),ve=V=>(se("data-v-eadee236"),V=V(),re(),V),me={key:0},pe={key:1},ge=ve(()=>v("span",null,"ISBN:",-1)),fe={key:0},he={key:2},ye={key:3},ke={__name:"SavedBookDetailModal",setup(V){const a=I(),t=$(()=>a.selectedSavedBook),i=$(()=>a.showSavedBookModal),p=$(()=>a.selectedSavedBookCategory),b=a.categories,e=U({...t.value}),o=U(p.value),r=U(!1);D(t,c=>{c&&(e.value={...c,reading_page:c.reading_page||""})}),D(p,c=>{o.value=c});const _=()=>{r.value=!0},g=async()=>{try{await a.updateSavedBook(e.value,o.value)}catch(c){console.error("Error updating book:",c),alert("책 업데이트에 실패했습니다.")}finally{a.closeSavedBookModal(),r.value=!1}},x=async()=>{try{await a.deleteSavedBook(e.value.id),alert("책이 삭제되었습니다.")}catch(c){console.error("Error deleting book:",c),alert("책 삭제에 실패했습니다.")}finally{a.closeSavedBookModal(),r.value=!1}},C=()=>{a.closeSavedBookModal(),r.value=!1};return(c,u)=>{const B=s("v-spacer"),f=s("v-icon"),A=s("v-card-title"),Z=s("v-img"),M=s("v-text-field"),ee=s("v-select"),H=s("v-rating"),F=s("v-btn"),te=s("v-card-text"),oe=s("v-card"),le=s("v-dialog");return n(),h(le,{modelValue:i.value,"onUpdate:modelValue":u[8]||(u[8]=N=>i.value=N),"max-width":"500"},{default:d(()=>[l(oe,null,{default:d(()=>[l(A,null,{default:d(()=>[l(B),l(f,{onClick:C,size:"x-small"},{default:d(()=>[w("mdi-close")]),_:1})]),_:1}),l(te,{class:"bookDetailWrapper"},{default:d(()=>{var N,L,j,q,R,z,Q,O,G,J,K,X;return[l(Z,{src:(N=t.value)==null?void 0:N.thumbnail,class:"bookDetailImage","aspect-ratio":"1.5"},null,8,["src"]),r.value?(n(),k("div",me,[l(M,{modelValue:e.value.title,"onUpdate:modelValue":u[0]||(u[0]=y=>e.value.title=y),label:"제목",dense:"",class:"mt-4",id:"modalTitle"},null,8,["modelValue"]),l(M,{modelValue:e.value.pages,"onUpdate:modelValue":u[1]||(u[1]=y=>e.value.pages=y),label:"페이지 수",dense:"",class:"mt-4",id:"modalPages"},null,8,["modelValue"]),o.value==="읽는 중인 책"?(n(),h(M,{key:0,modelValue:e.value.reading_page,"onUpdate:modelValue":u[2]||(u[2]=y=>e.value.reading_page=y),label:"읽는 중인 페이지",dense:"",class:"mt-4",id:"modalReadingPage"},null,8,["modelValue"])):S("",!0),l(M,{modelValue:e.value.comment,"onUpdate:modelValue":u[3]||(u[3]=y=>e.value.comment=y),label:"코멘트",dense:"",class:"mt-4",id:"modalComment"},null,8,["modelValue"]),l(ee,{modelValue:o.value,"onUpdate:modelValue":u[4]||(u[4]=y=>o.value=y),items:ne(b),label:"카테고리 선택",dense:"",class:"mt-4",id:"modalCategory"},null,8,["modelValue","items"]),o.value!=="읽고 싶은 책"?(n(),h(M,{key:1,modelValue:e.value.start_date,"onUpdate:modelValue":u[5]||(u[5]=y=>e.value.start_date=y),label:"독서 시작일",type:"date",dense:"",class:"mt-4",id:"modalStartDate"},null,8,["modelValue"])):S("",!0),o.value==="다 읽은 책"?(n(),h(M,{key:2,modelValue:e.value.end_date,"onUpdate:modelValue":u[6]||(u[6]=y=>e.value.end_date=y),label:"독서 종료일",type:"date",dense:"",class:"mt-4",id:"modalEndDate"},null,8,["modelValue"])):S("",!0),o.value==="다 읽은 책"?(n(),h(H,{key:3,modelValue:e.value.rating,"onUpdate:modelValue":u[7]||(u[7]=y=>e.value.rating=y),density:"compact","background-color":"purple",color:"deep-purple-lighten-3",length:"5","half-increments":"",clearable:""},null,8,["modelValue"])):S("",!0),l(F,{color:"primary",onClick:g,class:"mt-4"},{default:d(()=>[w("저장")]),_:1})])):(n(),k("div",pe,[v("span",null,m((L=t.value)==null?void 0:L.title),1),v("p",null,m(Array.isArray((j=t.value)==null?void 0:j.authors)?(q=t.value)==null?void 0:q.authors.join(", "):"작가 정보 없음"),1),v("p",null,[ge,w(" "+m((R=t.value)==null?void 0:R.isbn),1)]),p.value==="읽는 중인 책"&&((z=t.value)!=null&&z.reading_page)?(n(),k("p",fe,[v("span",null,"독서 진행률: "+m((Q=t.value)==null?void 0:Q.reading_page)+" / "+m((O=t.value)==null?void 0:O.pages),1)])):S("",!0),v("p",null,"코멘트: "+m((G=t.value)==null?void 0:G.comment),1),p.value==="다 읽은 책"?(n(),h(H,{key:1,"model-value":(J=t.value)==null?void 0:J.rating,density:"compact","background-color":"purple",color:"deep-purple-lighten-3",length:"5","half-increments":"",readonly:""},null,8,["model-value"])):S("",!0),p.value==="읽는 중인 책"||p.value==="다 읽은 책"?(n(),k("p",he,"독서 시작일 : "+m((K=t.value)==null?void 0:K.start_date),1)):S("",!0),p.value==="다 읽은 책"?(n(),k("p",ye,"독서 종료일 : "+m((X=t.value)==null?void 0:X.end_date),1)):S("",!0),l(F,{color:"primary",onClick:_,class:"mt-4"},{default:d(()=>[w("수정")]),_:1}),l(F,{color:"error",onClick:x,class:"mt-4"},{default:d(()=>[w("삭제하기")]),_:1})]))]}),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Be=P(ke,[["__scopeId","data-v-eadee236"]]),Se={key:0},be=v("br",null,null,-1),Ve={key:2},xe={key:3},Ce=v("p",null,"저장된 책이 없습니다.",-1),$e={__name:"BookList",props:{category:{type:String,required:!0}},setup(V){const a=I(),t=V,i=$(()=>{var e,o,r;return t.category==="읽고 싶은 책"?((e=a.books)==null?void 0:e.wantToRead)||[]:t.category==="읽는 중인 책"?((o=a.books)==null?void 0:o.reading)||[]:t.category==="다 읽은 책"?((r=a.books)==null?void 0:r.finished)||[]:[]}),p=(e,o)=>{a.selectSavedBook(e,o)},b=(e,o)=>!o||o===0?0:Math.floor(e/o*100);return E(()=>{a.loadBooks()}),D(()=>t.category,()=>{a.loadBooks()}),(e,o)=>{const r=s("v-img"),_=s("v-progress-linear"),g=s("v-rating"),x=s("v-card-text"),C=s("v-card"),c=s("v-col"),u=s("v-row"),B=s("v-container");return n(),h(B,null,{default:d(()=>[i.value&&i.value.length?(n(),h(u,{key:0},{default:d(()=>[(n(!0),k(T,null,W(i.value,f=>(n(),h(c,{xs:"12",sm:"6",md:"4",lg:"3",key:f.isbn},{default:d(()=>[l(C,{onClick:A=>p(f,t.category)},{default:d(()=>[l(r,{src:f.thumbnail,"aspect-ratio":"1"},null,8,["src"]),l(x,null,{default:d(()=>[t.category==="읽는 중인 책"?(n(),k("p",Se,[l(_,{"model-value":b(f.reading_page,f.pages),color:"deep-purple-lighten-3",height:"5","bg-color":"grey lighten-4"},null,8,["model-value"])])):S("",!0),be,t.category==="다 읽은 책"?(n(),h(g,{key:1,"model-value":f.rating,density:"compact","background-color":"purple",color:"deep-purple-lighten-3",length:"5","half-increments":"",readonly:""},null,8,["model-value"])):S("",!0),v("p",null,m(Array.isArray(f.authors)?f.authors.join(", "):"작가 정보 없음"),1),v("p",null,[v("strong",null,m(f.title),1)]),t.category==="읽는 중인 책"?(n(),k("p",Ve,m(f.start_date)+" ~",1)):S("",!0),t.category==="다 읽은 책"?(n(),k("p",xe,m(f.start_date)+" ~ "+m(f.end_date),1)):S("",!0)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})):(n(),h(u,{key:1},{default:d(()=>[l(c,null,{default:d(()=>[Ce]),_:1})]),_:1})),l(Be)]),_:1})}}},we=v("p",null,"검색 결과가 없습니다.",-1),Me={__name:"SearchSavedBook",setup(V){const a=U(""),t=I(),i=U([]);D(a,()=>{p()});const p=()=>{if(!a.value.trim()){i.value=[];return}const e=a.value.toLowerCase();i.value=t.books.all.filter(o=>o.title.toLowerCase().includes(e)||Array.isArray(o.authors)&&o.authors.some(r=>r.toLowerCase().includes(e)))},b=e=>{t.selectSavedBook(e,e.category)};return(e,o)=>{const r=s("v-text-field"),_=s("v-img"),g=s("v-card-text"),x=s("v-card"),C=s("v-col"),c=s("v-row"),u=s("v-container");return n(),h(u,null,{default:d(()=>[l(r,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=B=>a.value=B),label:"책 이름 또는 저자명으로 검색",dense:"",clearable:"",onInput:p},null,8,["modelValue"]),i.value.length?(n(),h(c,{key:0},{default:d(()=>[(n(!0),k(T,null,W(i.value,B=>(n(),h(C,{xs:"12",sm:"6",md:"4",lg:"3",key:B.id},{default:d(()=>[l(x,{onClick:f=>b(B)},{default:d(()=>[l(_,{src:B.thumbnail,"aspect-ratio":"1"},null,8,["src"]),l(g,null,{default:d(()=>[v("p",null,m(B.title),1),v("p",null,m(Array.isArray(B.authors)?B.authors.join(", "):"작가 정보 없음"),1),v("p",null,m(B.category),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})):a.value?(n(),h(c,{key:1},{default:d(()=>[l(C,null,{default:d(()=>[we]),_:1})]),_:1})):S("",!0)]),_:1})}}},Ue={class:"tabs"},De={__name:"BookTabs",setup(V){const a=I(),t=U(0),i=["읽고 싶은 책","읽는 중인 책","다 읽은 책"],p=$(()=>{var o,r,_;const e=a.books;return{"읽고 싶은 책":((o=e==null?void 0:e.wantToRead)==null?void 0:o.length)||0,"읽는 중인 책":((r=e==null?void 0:e.reading)==null?void 0:r.length)||0,"다 읽은 책":((_=e==null?void 0:e.finished)==null?void 0:_.length)||0}}),b=$(()=>{const e=i[t.value];return p.value[e]});return E(()=>{a.loadBooks()}),D(t,()=>{a.loadBooks()}),(e,o)=>{const r=s("v-tab"),_=s("v-tabs"),g=s("v-tab-item"),x=s("v-tabs-items"),C=s("v-container");return n(),h(C,null,{default:d(()=>[v("div",Ue,[l(_,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=c=>t.value=c),"show-arrows":"",color:"deep-purple-lighten-2"},{default:d(()=>[(n(),k(T,null,W(i,(c,u)=>l(r,{key:u},{default:d(()=>[w(m(c),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),v("p",null,m(b.value)+"권의 책 저장중",1)]),l(x,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=c=>t.value=c)},{default:d(()=>[l(g,null,{default:d(()=>[l(Me)]),_:1}),l(g,null,{default:d(()=>[l($e,{category:i[t.value]},null,8,["category"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Ie=P(De,[["__scopeId","data-v-e7e18cf1"]]),Ae=v("h1",null,"나의 책장 페이지",-1),Ne={class:"userName"},Ee=v("p",null,"새로운 세상을 만나 보세요.",-1),We={__name:"Home",setup(V){const a=ue(),t=I(),i=$(()=>a.userName);return $(()=>t.books),E(()=>{t.loadBooks()}),(p,b)=>(n(),k("div",null,[Ae,v("p",null,[v("span",Ne,m(i.value),1),w("님, Bookeep과 함께 한 권의 책이 열어주는 ")]),Ee,l(_e),l(Ie)]))}};export{We as default};