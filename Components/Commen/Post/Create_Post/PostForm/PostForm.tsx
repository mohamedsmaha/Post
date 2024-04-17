import React, {useEffect, useRef, useState } from 'react'
import "@/Scss/Commen/Post/CreatePost/Form/Form.css"
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { User, User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { CreatePostElementsLangType } from '@/Lang/Types/Components/CreatePost';
import { Translate_Object } from '@/Helpers/Translate';
import { Content_HelperFunction, Helper_Functions, Props_type } from './PostFormTypes';
import { Close } from '@mui/icons-material';
import { Content_info, Create_Post, Post_Type, Post_info, Post_kind, Update_Post } from '@/Redux/Modules/Post/PostTypes';
import { UserAction } from '@/Redux/Modules/User/UserTypes';
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class';
import { create } from 'domain';
import { useAppDispatch } from '@/Redux/Hooks';

// Description 
  // Component Deal with Updata or Share or insert new  Post
// Massions
  //  
function PostForm(props : Props_type) {
// Lang
    const CreatePostObj= Translate_Object("CreatePost") as CreatePostElementsLangType;
// Hooks 
    const [Kind     , SetKind    ]   = useState<Post_kind>("Content")
    const arr_Post_Kind :Post_kind[] = ["Content" , "Voting"] 
    const UserAction : UserAction    = User_Model.Get_User_Action() as UserAction
    const Form_Ref :React.RefObject<HTMLDivElement>   = useRef(null)
  // UseEffect
// Helper Functions
    const Helper_Functions : Helper_Functions = {
        Handel_Hide_Click: (element) => {
          if(!Form_Ref.current?.contains(element.target as Node)){
            props.Close()
          }
        },
        adjustTextareaHeight: (element) => {
            element.style.height = 'auto';
            element.style.height = Math.max(element.scrollHeight, 50) + 'px';
        },
        Select_Kind() {
          switch(Kind){
            case "Content" : return <Content_Info_Post/>
            case "Voting"  : return <Voting_Info_Post/>
          }
        },
        // Content Type Functions 
    }
// Options
    function Content_Info_Post(){
          let Main_info  = props.Source_Post?.Data.main_post.info  as Content_info
          const [imageUrl , setImageUrl] = useState<string | undefined>(undefined);
          const [videoUrl , setVideoUrl] = useState<string | undefined>(undefined);
          const [Textare_content , SetTextareaContent] = useState<string | undefined>(undefined)
          const text_ref:React.RefObject<HTMLTextAreaElement> = useRef(null)
          const dispatch = useAppDispatch()
          // Helper Functions
          const Content_HelperFunction : Content_HelperFunction= {
              Show_Contentinfo_image(element) {
              const file = element.files ? element.files[0] : null;
              if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                  const imageUrl = event.target?.result as string | undefined
                  setImageUrl(imageUrl);
                };
                reader.readAsDataURL(file);
              }
              setVideoUrl(undefined)
              },
              Show_Contentinfo_Videos(element) {
                  const file = element.files?.[0];
                  const url = file ? URL.createObjectURL(file) : undefined;
                  setVideoUrl(url);
                  setImageUrl(undefined)
              },
              Handel_Textarea_onchange(element) {
                SetTextareaContent(element.value)
              },
              Update  : () => {
                const info = (): Content_info => {
                    let array: { [Key:string] : string | undefined } = {
                        "img": imageUrl,
                        "video": videoUrl,
                        "text": Textare_content
                    };
                    let data : {[key:string] : string} = {} ; // Type assertion
                    for(const item in array){
                      if(array[item] != undefined){
                        data[item] = array[item] as string
                      }
                    }
                    return data as Content_info;
                };
                const Update : Update_Post = {
                    Id     : props.Source_Post?.Data.main_post.id as number,
                    User   : UserAction   , 
                    Data   : new Date     ,
                    info   : info()       ,
                    kind   : "Content"    ,
                }
                Posts_Model.Action_ON_Post(dispatch , Update , "Update")
              } ,
              New_Share: () => {              
                const info = (): Content_info => {
                    let array: { [Key:string] : string | undefined } = {
                        "img": imageUrl,
                        "video": videoUrl,
                        "text": Textare_content
                    };
                    let data : {[key:string] : string} = {} ; // Type assertion
                    for(const item in array){
                      if(array[item] != undefined){
                        data[item] = array[item] as string
                      }
                    }
                    return data as Content_info;
                };
                const SharePostId = () : number => {
                    return props.Source_Post?.Data.main_post.id as number
                }
                const Create : Create_Post= {
                    User   : UserAction   , 
                    Data   : new Date     ,
                    info   : info()       ,
                    kind   : "Content"    ,
                    type   : props.Method ,
                  }
                if(props.Method == "Share"){Create["SharePostId"] = SharePostId()}
                Posts_Model.Action_ON_Post(dispatch , Create , "Insert")
              },
              GetReady:()=>{
                props.Close();
                if(props.Method == "New" || props.Method == "Share"){Content_HelperFunction.New_Share()}
                if(props.Method == "Update"){Content_HelperFunction.Update()}
                return;
              },
              Choose_Media_Inputs : () => {
                if(props.Method == 'New' || (props.Method == "Update" && props.Source_Post?.Data.Share_post == undefined)){
                  return <MediaInputs/>
                }
                return <></>
              },
          }
          // Useeffect
              useEffect(() => {
                  const textarea = text_ref.current;
                  if (textarea) {
                    // Set the selection to the end of the content
                    const textLength = textarea.value.length;
                    textarea.setSelectionRange(textLength, textLength);
                    // Focus on the textarea
                    textarea.focus();
                  }
              }, [Textare_content]);
              useEffect(() => {
                    if(props.Method == "Update" && Main_info?.text  != undefined  ){
                        SetTextareaContent(Main_info?.text);
                    }
              }, [])
          // Helepr
            function Textarea(){
              return <textarea name="" autoCorrect= 'off'  spellCheck="false"  value={Textare_content ? Textare_content : ""}   
                                  ref = {text_ref}
                                  placeholder={`${CreatePostObj.InputFiled(User_Model.GetName())}`}
                                  onInput={(e) => {
                                    Content_HelperFunction.Handel_Textarea_onchange(e.target as HTMLTextAreaElement)
                                    Helper_Functions.adjustTextareaHeight(e.target as HTMLTextAreaElement)}}>
                </textarea>
            }
            function ShowMedia(){
                function CreatePostImage(){
                  return <>
                        <div className="ShowMedia">
                          {imageUrl && <img src={imageUrl} alt="Selected File" />}
                          {videoUrl && (
                            <video controls width="300">
                              <source src={videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                  </>
                }
                function Share(){
                  if( props.Method == "Share" || props.Source_Post?.Data.Share_post){
                      return props.Source_Post?.Image
                  }else{
                    const image = Main_info?.img  ;
                    const video = Main_info?.vidoe;
                    if(imageUrl == undefined && image != undefined && videoUrl == undefined){
                      setImageUrl(image)
                    }
                    if(videoUrl == undefined && video != undefined){
                      setImageUrl(video)
                    }
                      return CreatePostImage()
                  }
                }
                return <>
                  {props.Method == "New" ? CreatePostImage() : Share() }
                </>
            }
            function MediaInputs(){
              return <>
                      <div className="Media">
                          <div className="Box">
                              <label htmlFor="Media">Image</label>
                              <input type="file" id = "Media"  accept="image/*" onChange={(e) => Content_HelperFunction.Show_Contentinfo_image(e.target)}
                              />
                          </div>
                          <div className="Box">
                    <label htmlFor="Media1">Video</label>
                    <input type="file" id="Media1" accept="video/*" onChange={(e) => Content_HelperFunction.Show_Contentinfo_Videos(e.target)}
                    />
                          </div>
                      </div>
              </>
            }
          // Main
            return (
              <>
              <div className='Content_info_Post'>
                <div className="Info">
                    <Textarea/>
                    <ShowMedia/>
                    {Content_HelperFunction.Choose_Media_Inputs()}
                </div>
                <button  onClick={() => {Content_HelperFunction.GetReady()}}>{props.Method}</button>
              </div>

              </>

              )
    }
    function Voting_Info_Post(){
          const [Textare_content , SetTextareaContent] = useState<string | undefined>(undefined)
          const text_ref:React.RefObject<HTMLTextAreaElement> = useRef(null)
          function Textarea(){
              return <textarea name="" autoCorrect= 'off'  spellCheck="false"  value={Textare_content ? Textare_content : ""}   
                                  placeholder={`${CreatePostObj.InputFiled(User_Model.GetName())}`}>
                </textarea>
            }
      return <>
        <div className="Voting_Info_Post">
          <div className="Info">
            </div>
          <button>click me daddy</button>
        </div>
      </>
    }
  return (
    <div className='PostForm_Component' onClick={(e) => Helper_Functions.Handel_Hide_Click(e)} >
      <div className="Container" ref={Form_Ref}>
        <div className="Main_Form">
          <div className="Top">
              <div className="Userinfo">
                    <img src={`${APP_Folders.Users()}/${User_Model.GetMainImg()}`} alt="" />
                    <p className="Text">mohamed sabry</p>
              </div>
              <span onClick={props.Close}><Close/></span>
          </div>
          <div className="Middel">
            <div className="Container">
              {arr_Post_Kind.map((item , index) => (
                <div 
                  onClick={()=>{SetKind(item)}}
                  className={`option ${item == Kind ?'active' : null}`} key = {index}>{item}</div>
              ))}
            </div>
          </div>
          <div className="Bottom">
              {Helper_Functions.Select_Kind()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm