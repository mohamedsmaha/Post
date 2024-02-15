import { Create_Post, PostShap, Post_Filter } from "@/Redux/Modules/Post/PostTypes";
import { APP_Folders } from "@/Static_Data/APP_Folders"

class Posts_DataBase_Class{
    Posts_DataBase  : PostShap[] = [
                    { 
                        "main_post" :{
                            "id"    : 1,
                            "Date" : {"number" : 10 , "unite" : "Days"} ,
                            "Public_Interactions" :{ "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User" : {"Username" : "mohamed" , "id" : 4 , "img" : "2.jpeg"},
                            "info" : {"text" : "hey my name is mohamed"},
                            "kind" : "Content" ,
                            "type" : "New"
                        } ,
                        "user_interaction" : {"React" : "Like"}
                    },
                    {
                        "main_post" :{
                            "id"   : 2,
                            "Date" : {"number" : 10 , "unite" : "Days"} ,
                            "Public_Interactions" :{ "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : "Love"} , "total" : 1200}},
                            "User" : {"Username" : "mohamed" , "id" : 4 , "img" : `1.jpeg`},
                            "info" : {"text" : "i love this man"},
                            "kind" : "Content" ,
                            "type" : "Share"
                        } ,
                        "Share_post" :{
                            "id"   : 3,
                            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
                            "Public_Interactions" :{ "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : `6.jpeg`},
                            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
                            "kind"     : "Content",
                            "type"     : "New" 
                        } ,
                        "user_interaction" : {"React" : null}
                    },
                    {
                        "main_post" :{
                            "id"   : 3,
                            "Date" : {"number" : 3 , "unite" : "Weeks"} ,
                            "Public_Interactions" :{ "Comments" : 10 ,"numbers" : {"order" : {"first" : "Like" , "Third" : null , "secound" : null} , "total" : 1200}},
                            "User"     : {"Username" : "Ali Ahemd" , "id" : 1 , "img" : `6.jpeg`},
                            "info"     : {"text" : "What a wonderfull world" , "img" : `${APP_Folders.Posts("images")}/1.jpeg`},
                            "kind"     : "Content",
                            "type"     : "New" 
                        } ,
                        "user_interaction" : {"React" : "Love"}
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
                "Public_Interactions" :{ "Comments" : 0 , "numbers" : {"order" : {"first" : null , "Third" : null , "secound" : null} , "total" : 0}},
                "User" : {"Username" : "mohamed" , "id" : 10 , "img" : "mohamed.jpg"},
                "info" : {"text" : "This is New Post here i hope to see it okay"},
                "kind" : "Content" ,
                "type" : "New"
            } ,
            "user_interaction" : {"React" : null}
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
    public Update(data : Create_Post){
        const index = this.Posts_DataBase.findIndex(item => item.main_post.id)
    }  
}
export const  Posts_DataBase_Model = new Posts_DataBase_Class