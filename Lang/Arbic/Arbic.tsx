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
    "New"              : "جديدة",
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
    ShareObject :{
        InputFiled:(name : string)=>{
            return `؟ ${name} ماذا في بالك يا `
        }
    },
    PostObject : {
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
    RightbarObject:{
        Birthday:(name , number)=>{
            return <> 
                <b> {name} </b>
                و
                <b>{convertToArabicNumber(number)}</b>
                <b> من اصدقائك </b>
                يحتفلون ب اعياد ميلادهم
            </>
        }
    },
    AssuntocationObject:{
        "Sentence" : {
            "Your account has been successfully created"  : "تم إنشاء حسابك بنجاح",
            "Email verification code"                     : "كود التحقق من البريد الإلكتروني" ,
            "Confirm Your Email"                          : "قم بتأكيد بريدك الإلكتروني",
            "Create New Password"                         : "انشاء كلمه المرور " ,
            "New Password"                                : "كلمه المرور" ,
            "Confirm New Password"                        : "تاكيد كلمه المرور ",
            "Change Password"                             : "تغير كلمه المرور" ,
            "Password successfully changed"               : "تم تغير كلمه المرور بنجاح"
        }
    },
    StaticWordsObject:{
        sentence : {
            "App_name"   : "Post" ,
            "App_slogan" : "كيف يجب ان يكون المجتمع افضل"
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