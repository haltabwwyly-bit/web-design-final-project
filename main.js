//بيانات الجلسات النفسية 
const sessions=[
    {
        type:"جلسة فردية ",
        description:" دعم نفسي خاص  مع مختص ",
        duration:"دقيقة 30",
        available:true
    },
    {
       type:"جلسة جماعية  ",
        description:"مشاركة تجارب ودعم متبادل  ",
        duration:"دقيقة 60",
        available:false  
    }
];
// عرض الجلسات ديناميكيا 
const tableBody =document.querySelector("tbody");
     if(tableBody)
        {
    tableBody.innerHTML="";
       sessions.forEach(session=>{
        const row=document.createElement("tr");
        //إضافة البيانات مع حالة الجلسة نصيا 
        row.innerHTML=`
        <td>${session.type}</td>
        <td>${session.description}</td>
        <td>${session.duration}</td>
        `
        if(!session.available){
            row.style.opacity="0.6";
        }
        tableBody.appendChild(row);
       });    
      
    };

//jQure Animation 
$(document).ready(function(){
//Fade  عند تحميل الصفحة 
$("section").hide().fadeIn();
//Smooth Scroll
$("a.nav-link").click(function(e){
    e.preventDefult();
    const target=$(this).attr("href");
    $("html,body").animate(
        {scrollTop: $(target).offset().top}
    );
});

// رسالة عند إرسال النموذج
$("form").submit(function(e){
    e.preventDefult();
    alert(" تم إرسال بنجاح  سنتواصل معك قريبا  ")
$(this).trigger("reset");
});

});

