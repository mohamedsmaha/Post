import { Languagh_model } from "../Types/Languagh_model";
import React from "react";

export const Arbic : Languagh_model = {
    "Activity"         : "النشاط",
    "Bookmarks"        : "المفضلة",
    "BirthDay"         : "عيد الميلاد",
    "Calendar"         : "النتيجة",
    "Chats"            : "المحادثات",
    "Comment"          : "تعليق",
    "Courses"          : "الكورسات",
    "Confirm"          : "تاكيد",
    "Create"           : "انشاء",
    "Change"           : "تغيير",
    "Day"              : "يوم",
    "Days"             : "ايام",
    "Email"            : "البريد الالكتروني",
    "Feelings"         : "المشاعر",
    "Forget_Password"  : "نسيت كلمه المرور",
    "Groups"           : "المجموعات",
    "Hour"             : "ساعه",
    "Hours"            : "ساعات",
    "Jobs"             : "الوظائف",
    "Like"             : "اعجبني",
    "Login"            : "تسجيل الدخول",
    "More"             : "المزيد",
    "Month"            : "شهر",
    "Months"           : "Months",
    "Online Friends"  : "الأصدقاء المتصلين",
    "Password"         :"كلمه السر",
    "Pages"            : "الصفحات",
    "Photo"            : "الصور",
    "Phone"            : "الهاتف",
    "Questions"        : "الأسئلة",
    "Register"         : "انشاء حساب",
    "Resend"           : "اعادة ارسال",
    "Share"            : "مشاركة",
    "Search"           : "ابحث",
    "Settings"         : "الإعدادات",
    "Shop"             : "متجر",
    "UserName"         : "اسم المستخدم",
    "Videos"           : "فيديوهات",
    "Week"             : "اسبوع",
    "Weeks"            : "اسابيع",
    "Year"             : "سنة",
    "Years"            : "سنوات",
    Sharecomponent :{
        InputFiled:(name : string)=>{
            return `؟ ${name} ماذا في بالك يا `
        }
    },
    Postcomponent : {
        Likes: (likes : number)=>{
            return ` ${convertToArabicNumber(likes)} من المعجبين `
        },
        Comments: (comments : number)=>{
            return `${convertToArabicNumber(comments)} تعليق `
        },
        Time:(number , unite)=>{
            return `منذ ${convertToArabicNumber(number)} ${Arbic[unite]}`
        }
    },
    Rightbarcomponent:{
        Birthday:(name , number)=>{
            return <> 
                <b> {name} </b>
                و
                <b>{convertToArabicNumber(number)}</b>
                <b> من اصدقائك </b>
                يحتفلون ب اعياد ميلادهم
            </>
        }
    }
}
function convertToArabicNumber(englishNumber : number) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    
    const arabicNumberString = englishNumber.toString().split('').map(char => {
        if (/\d/.test(char)) {
            return arabicNumbers[parseInt(char)];
        } else {
            return char;
        }
    }).join('');

    return arabicNumberString;
}