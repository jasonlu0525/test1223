import{_ as m,r as p,o as n,c as r,a as e,B as a,p as t,q as u,F as f,z as c,t as i}from"./DMSHaTso.js";const b={class:"row gap-6 gap-md-0"},v={class:"col-12 col-md-5"},x={class:"rounded-3xl d-flex flex-column gap-6 gap-md-10 p-6 p-md-10 bg-neutral-0"},w={class:"d-flex flex-column gap-4 gap-md-6"},_={class:"col-12 col-md-7"},g={class:"rounded-3xl d-flex flex-column gap-6 gap-md-10 p-6 p-md-10 bg-neutral-0"},y={class:"d-flex flex-column gap-4 gap-md-6"},h={class:"fs-8 fs-md-7"},P={class:"fs-8 fs-md-7"},k={class:"fs-8 fs-md-7"},$={id:"birth",class:"form-select p-4 text-neutral-80 fw-medium rounded-3"},B={class:"form-select p-4 text-neutral-80 fw-medium rounded-3"},C={class:"form-select p-4 text-neutral-80 fw-medium rounded-3"},E={class:"fs-8 fs-md-7"},z={__name:"UserProfile",setup(F){const d=p(!1),s=p(!1);return(J,l)=>(n(),r("div",b,[e("div",v,[e("section",x,[l[5]||(l[5]=e("h2",{class:"fs-6 fs-md-5 fw-bold"}," 修改密碼 ",-1)),e("div",w,[l[4]||(l[4]=e("div",{class:"fs-8 fs-md-7"},[e("p",{class:"mb-2 text-neutral-80 fw-medium"}," 電子信箱 "),e("span",{class:"form-control pe-none p-0 text-neutral-100 fw-bold border-0"},"Jessica@exsample.com")],-1)),e("div",{class:a(["d-flex justify-content-between align-items-center",{"d-none":t(d)}])},[l[2]||(l[2]=e("div",null,[e("label",{class:"mb-0 text-neutral-80 fs-8 fs-md-7 fw-medium"}," 密碼 "),e("input",{class:"form-control pe-none p-0 text-neutral-100 fs-5 fs-md-3 fw-bold border-0",type:"password",value:"**********"})],-1)),e("button",{class:"flex-shrink-0 text-primary-100 fs-8 fs-md-7 fw-bold text-decoration-underline border-0 bg-transparent",type:"button",onClick:l[0]||(l[0]=o=>d.value=!t(d))}," 重設 ")],2),e("div",{class:a(["d-flex flex-column gap-4 gap-md-6",{"d-none":!t(d)}])},l[3]||(l[3]=[u('<div data-v-5cd172ea><label for="oldPassword" class="form-label fs-8 fs-md-7 fw-bold" data-v-5cd172ea>舊密碼</label><input id="oldPassword" type="password" class="form-control p-4 fs-7 rounded-3" placeholder="請輸入舊密碼" data-v-5cd172ea></div><div data-v-5cd172ea><label for="newPassword" class="form-label fs-8 fs-md-7 fw-bold" data-v-5cd172ea>新密碼</label><input id="newPassword" type="password" class="form-control p-4 fs-7 rounded-3" placeholder="請輸入新密碼" data-v-5cd172ea></div><div data-v-5cd172ea><label for="confirmPassword" class="form-label fs-8 fs-md-7 fw-bold" data-v-5cd172ea>確認新密碼</label><input id="confirmPassword" type="password" class="form-control p-4 fs-7 rounded-3" placeholder="請再輸入一次新密碼" data-v-5cd172ea></div>',3)]),2),e("button",{class:a([{"d-none":!t(d)},"btn btn-neutral-40 align-self-md-start px-8 py-4 text-neutral-60 rounded-3"]),type:"button"}," 儲存設定 ",2)])])]),e("div",_,[e("section",g,[l[7]||(l[7]=e("h2",{class:"fs-6 fs-md-5 fw-bold"}," 基本資料 ",-1)),e("div",y,[e("div",h,[e("label",{class:a(["form-label",{"fw-bold text-neutral-100":t(s),"fw-medium text-neutral-80":!t(s)}]),for:"name"}," 姓名 ",2),e("input",{id:"name",name:"name",class:a(["form-control text-neutral-100 fw-bold",{"pe-none p-0 border-0":!t(s),"p-4":t(s)}]),type:"text",value:"Jessica Ｗang"},null,2)]),e("div",P,[e("label",{class:a(["form-label",{"fw-bold text-neutral-100":t(s),"fw-medium text-neutral-80":!t(s)}]),for:"phone"}," 手機號碼 ",2),e("input",{id:"phone",name:"phone",class:a(["form-control text-neutral-100 fw-bold",{"pe-none p-0 border-0":!t(s),"p-4":t(s)}]),type:"tel",value:"+886 912 345 678"},null,2)]),e("div",k,[e("label",{class:a(["form-label",{"fw-bold text-neutral-100":t(s),"fw-medium text-neutral-80":!t(s)}]),for:"birth"}," 生日 ",2),e("span",{class:a(["form-control pe-none p-0 text-neutral-100 fw-bold border-0",{"d-none":t(s)}])},"1990 年 8 月 15 日",2),e("div",{class:a(["d-flex gap-2",{"d-none":!t(s)}])},[e("select",$,[(n(),r(f,null,c(65,o=>e("option",{key:o,value:"`${year + 1958} 年`"},i(o+1958)+" 年 ",1)),64))]),e("select",B,[(n(),r(f,null,c(12,o=>e("option",{key:o,value:"`${month} 月`"},i(o)+" 月 ",1)),64))]),e("select",C,[(n(),r(f,null,c(30,o=>e("option",{key:o,value:"`${day} 日`"},i(o)+" 日 ",1)),64))])],2)]),e("div",E,[e("label",{class:a(["form-label",{"fw-bold text-neutral-100":t(s),"fw-medium text-neutral-80":!t(s)}]),for:"address"}," 地址 ",2),e("span",{class:a(["form-control pe-none p-0 text-neutral-100 fw-bold border-0",{"d-none":t(s)}])},"高雄市新興區六角路 123 號",2),e("div",{class:a({"d-none":!t(s)})},l[6]||(l[6]=[u('<div class="d-flex gap-2 mb-2" data-v-5cd172ea><select class="form-select p-4 text-neutral-80 fw-medium rounded-3" data-v-5cd172ea><option value="臺北市" data-v-5cd172ea> 臺北市 </option><option value="臺中市" data-v-5cd172ea> 臺中市 </option><option selected value="高雄市" data-v-5cd172ea> 高雄市 </option></select><select class="form-select p-4 text-neutral-80 fw-medium rounded-3" data-v-5cd172ea><option value="前金區" data-v-5cd172ea> 前金區 </option><option value="鹽埕區" data-v-5cd172ea> 鹽埕區 </option><option selected value="新興區" data-v-5cd172ea> 新興區 </option></select></div><input id="address" type="text" class="form-control p-4 rounded-3" placeholder="請輸入詳細地址" data-v-5cd172ea>',2)]),2)])]),e("button",{class:a([{"d-none":t(s)},"btn btn-outline-primary-100 align-self-start px-8 py-4 rounded-3"]),type:"button",onClick:l[1]||(l[1]=o=>s.value=!t(s))}," 編輯 ",2),e("button",{class:a([{"d-none":!t(s)},"btn btn-neutral-40 align-self-md-start px-8 py-4 text-neutral-60 rounded-3"]),type:"button"}," 儲存設定 ",2)])])]))}},S=m(z,[["__scopeId","data-v-5cd172ea"]]);export{S as default};
