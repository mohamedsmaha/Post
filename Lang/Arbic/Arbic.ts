import { Languagh_model } from "../Types/Languagh_model";

export const Arbic : Languagh_model = {
    "Activity"         : "النشاط",
    "Bookmarks"        : "المفضلة",
    "Calendar"         : "النتيجة",
    "Chats"            : "المحادثات",
    "Comment"          : "تعليق",
    "Courses"          : "الكورسات",
    "Day"              : "يوم",
    "Feelings"         : "المشاعر",
    "Groups"           : "المجموعات",
    "Jobs"             : "الوظائف",
    "Like"             : "اعجبني",
    "More"             : "المزيد",
    "Online Friends"  : "الأصدقاء المتصلين",
    "Pages"            : "الصفحات",
    "Photo"            : "الصور",
    "Questions"        : "الأسئلة",
    "Share"            : "مشاركة",
    "Search"           : "ابحث",
    "Settings"         : "الإعدادات",
    "Shop"             : "متجر",
    "Videos"           : "فيديوهات",

    Sharecomponent :{
        InputFiled(name : string){
            return `؟ ${name} ماذا في بالك يا `
        }
    },
        Postcomponent : {
        Likes(likes : number){
            return ` ${convertToArabicNumber(likes)} من المعجبين `
        },
        comments(comments : number){
            return `${convertToArabicNumber(comments)} تعليق `
        },
        Time(number , unite){
            return `منذ ${convertToArabicNumber(number + 1)} ${Arbic[unite]}`
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