import { All_User_Data, User_Login_Request, User_Type, anyUser_Type } from "@/Redux/Modules/User/UserTypes";
import { User_Login_Response } from "../Redux/Modules/User/UserTypes";
import { Delete } from "@mui/icons-material";

class Users_DataBase_Class{
    Data : All_User_Data[] = [
        {
            "id"         : 1 ,
            "Email"      : "mohamedsabry@gmail.com",
            "ApiToken"   : "",
            "From"       : "Egypt",
            "Phonenumber": "01015556737",
            "Status"     : "Married" ,
            "Username"   : "mohamed sabry" ,
            "birthday"   : "21/10/2021",
            "colortheme" : 1 ,
            "img"        : "mohamed.jpg" ,
            "lang"       : "Ar" ,
            "password"   : "" ,
            "secound_img": "1.jpeg"
        },
        {
            "id": 2,
            "Email": "john.doe@example.com",
            "ApiToken": "",
            "From": "United States",
            "Phonenumber": "1234567890",
            "Status": "Single",
            "Username": "John Doe",
            "birthday": "01/01/1990",
            "colortheme": 1,
            "img": "1.jpeg",
            "lang": "En",
            "password": "",
            "secound_img": "1.jpeg"
        },
        {
            "id": 3,
            "Email": "alice.smith@example.com",
            "ApiToken": "",
            "From": "Canada",
            "Phonenumber": "9876543210",
            "Status": "Married",
            "Username": "Alice Smith",
            "birthday": "05/12/1985",
            "colortheme": 1,
            "img": "2.jpeg",
            "lang": "En",
            "password": "",
            "secound_img": "1.jpeg"
        },
        {
            "id": 4,
            "Email": "david.wong@example.com",
            "ApiToken": "",
            "From": "Australia",
            "Phonenumber": "4567890123",
            "Status": "Married",
            "Username": "David Wong",
            "birthday": "09/25/1978",
            "colortheme": 1,
            "img": "3.jpeg",
            "lang": "En",
            "password": "",
            "secound_img": "1.jpeg"
        },
        {
            "id": 5,
            "Email": "emily.jones@example.com",
            "ApiToken": "",
            "From": "United Kingdom",
            "Phonenumber": "7890123456",
            "Status": "Single",
            "Username": "Emily Jones",
            "birthday": "03/30/1987",
            "colortheme": 1,
            "img": "4.jpeg",
            "lang": "En",
            "password": "",
            "secound_img": "7.jpeg"
        },
        {
            "id": 6,
            "Email": "michael.brown@example.com",
            "ApiToken": "",
            "From": "New Zealand",
            "Phonenumber": "3210987654",
            "Status": "Married",
            "Username": "Michael Brown",
            "birthday": "11/15/1982",
            "colortheme": 1,
            "img": "5.jpeg",
            "lang": "En",
            "password": "",
            "secound_img": "1.jpeg"
        }
    ]
    Check_User(Data : User_Login_Request): User_Login_Response{
        let login = false
        for(let i = 0 ; i < this.Data.length ; i++){
            let Check_Value = Check(this.Data[i])
            if(Check_Value){
                return {"Login" : true , "data" : Prepare_Data(this.Data[i])}
            }
        }
        function Check(user: All_User_Data){
            if(user.Email != Data.UserName && user.Phonenumber != Data.UserName ){return false}
            if(user.password != Data.Password){return false}
            return true
        }
        function Prepare_Data(data : All_User_Data):User_Type{
            let Data : User_Type = {
            "id"         : data['id'] ,
            "Email"      : data['Email'],
            "ApiToken"   : data['ApiToken'],
            "From"       : data['From'],
            "Phonenumber": data['Phonenumber'],
            "Status"     : data['Status'] ,
            "Username"   : data['Username'] ,
            "birthday"   : data['birthday'],
            "colortheme" : data['colortheme'] ,
            "img"        : data['img'] ,
            "lang"       : data['lang'] ,
            "secound_img": data['secound_img']
        }
            return Data
        }
        return {"Login" : false , "data" : null}
    }
    Get_User(id : number) : anyUser_Type{
        const index = this.Data.findIndex(item => item.id == id)
        return {
            "id" : id ,
            'Username' : this.Data[index]['Username'],
            "img"      : this.Data[index]['img']
        }
    }
}
export const User_DataBase_Model = new Users_DataBase_Class