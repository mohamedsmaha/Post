import { Create_Post, PostShap, Post_Filter, Update_Post, Update_Response } from "@/Redux/Modules/Post/PostTypes";
import { APP_Folders } from "@/Static_Data/APP_Folders"
import { User_DataBase_Model } from "./Users";
import { Update } from "@reduxjs/toolkit";

class Posts_DataBase_Class{
    Posts_DataBase  : PostShap[] = [
                    {
                        "main_post" :{
                            "id"   : 4 ,
                            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
                            "Public_Interactions" :{
                                    "share"      : 20 ,
                                    "Comments"   : 10 ,
                                    "numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : "Love"} , "total" : 1200}},
                            "User"     : User_DataBase_Model.Get_User(1),
                            "info"     : 
                                    {
  "Question": "Who is known as the 'God of Mischief' in the Marvel Cinematic Universe?",
  "Options": [
    { "Number_Of_Votes": 15000, "id": 1, "text": "Thor" },
    { "Number_Of_Votes": 2200, "id": 2, "text": "Hulk" },
    { "Number_Of_Votes": 400, "id": 3, "text": "Loki" },
    { "Number_Of_Votes": 600, "id": 4, "text": "Captain America" },
    { "Number_Of_Votes": 300, "id": 5, "text": "Iron Man" }
  ],
  "UserInterAction": { "UserChoice": [3] },
  "Number_Of_Votes": 18300,
  "Setting" : {
    "Ability to add more options" : false ,
    "Multiple choice"             : false
  }
}
,
                            "kind"     : "Voting",
                            "type"     : "New" 
                        } ,
                        "user_interaction" : {"React" : null},
                        "Comments": {
                            "loading": {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false} ,
                            "error": null,
                            "data" : [] ,
                            }
                    },      
                    { 
                        "main_post" :{
                            "id"    : 1,
                            "Date" : {"number" : 10 , "unite" : "Days"} ,
                            "Public_Interactions" :{ 
                                "share" :  0 ,
                                "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User" : User_DataBase_Model.Get_User(2),
                            "info" : {"text" : "hey my name is mohamed"},
                            "kind" : "Content" ,
                            "type" : "New"
                        } ,
                        "user_interaction" : {"React" : "Like"},
                        "Comments" : {
        "loading": {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false} ,
        "error": null,
        "data" : [] ,
                                        }
                    },
                    {
                        "main_post" :{
                            "id"   : 2,
                            "Date" : {"number" : 10 , "unite" : "Days"} ,
                            "Public_Interactions" :{ 
                                "share" : 0 ,
                                "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : "Love"} , "total" : 1200}},
                            "User" : User_DataBase_Model.Get_User(5),
                            "info" : {"text" : "i love this man"},
                            "kind" : "Content" ,
                            "type" : "Share"
                        } ,
                        "Share_post" :{
                            "id"   : 3,
                            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
                            "Public_Interactions" :{ "share" : 10 , "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User"     : User_DataBase_Model.Get_User(3),
                            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
                            "kind"     : "Content",
                            "type"     : "New" 
                        } ,
                        "user_interaction" : {"React" : null},
                        "Comments" : {
        "loading": {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false} ,
        "error": null,
        "data" : [] ,
                                        }
                    },
                    {
                        "main_post" :{
                            "id"   : 3,
                            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
                            "Public_Interactions" :{"share" : 0 , "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User"     : User_DataBase_Model.Get_User(3),
                            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
                            "kind"     : "Content",
                            "type"     : "New" 
                        } ,
                        "user_interaction" : {"React" : "Love"},
                        "Comments": {
                            "loading": {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false} ,
                            "error": null,
                            "data" : [] ,
                            }
                    },
                ]
    public Get(Data ?: Post_Filter): PostShap[] {
        let array : PostShap [] = []
        if( Data && Data['User_Id'] != undefined ){
            for(let i = 0 ; i < this.Posts_DataBase.length; i++){
                if(this.Posts_DataBase[i].main_post.User.id == Data['User_Id']){array.push(this.Posts_DataBase[i])}
            }
        }
        else if (Data && Data['Post_Id']){
            for(let i = 0 ; i < this.Posts_DataBase.length; i++){
                if(this.Posts_DataBase[i].main_post.id == Data["Post_Id"]){
                    array.push(this.Posts_DataBase[i])
                }
            }
        }
        else{
            return this.Posts_DataBase
        }
        return array
    }
    public Delete(index:number) : void{
        let newData :PostShap[]= []
        for(let i = 0 , n = this.Posts_DataBase.length ; i < n ; i++){
            if(i== index){continue}
            newData.push(this.Posts_DataBase[i])
        }
        this.Posts_DataBase   = newData; 
        return
    }
    public Insert(data : Create_Post){
        let new_post : PostShap= { 
            "main_post" :{
                "id"    : Posts_DataBase_Model.Get({}).length + 1  ,
                "Date" : {"number" : 1 , "unite" : "Hour" } ,
                "Public_Interactions" :{ "share" : 0 ,  "Comments" : 0 , "numbers" : {"order" : {"first" : null , "Third" : null , "secound" : null} , "total" : 0}},
                "User" : User_DataBase_Model.Get_User(data.User.UserID),
                "info" : {"text" : "This is New Post here i hope to see it okay"},
                "kind" : "Content" ,
                "type" : "New"
            } ,
            "user_interaction" : {"React" : null},
            "Comments" : {
        "loading": {"Delete" : false , "Insert" : false , "Select" : true , "Update" : false} ,
        "error": null,
        "data" : [] ,
                        }
        }
        new_post['main_post']['User']['id'] = data['User']['UserID']
        new_post['main_post']['info']       = data['info']
        new_post['main_post']['kind']       = data['kind']
        new_post['main_post']['type']       = data['type']

        if(data['type'] == 'Share' && data['SharePostId'] && this.Get({'Post_Id' : data['SharePostId']})[0]){
            const index = this.Get({'Post_Id' : data['SharePostId']})
            if(index[0]['Share_post']){new_post['Share_post'] = index[0]['Share_post']}
            else{new_post['Share_post'] = index[0]['main_post']}
        }
        this.Posts_DataBase.unshift(new_post)
        return new_post
    }
    public Update(data : Update_Post):Update_Response{
        const index = this.Posts_DataBase.findIndex(item => item.main_post.id == data.Id)
        this.Posts_DataBase[index].main_post.info = data['info']
        return {info : data.info , Id : data.Id , Done : true}
    }  
}
export const  Posts_DataBase_Model = new Posts_DataBase_Class