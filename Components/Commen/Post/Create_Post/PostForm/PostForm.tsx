import React, {useEffect, useRef, useState } from 'react'
import "@/Scss/Commen/Post/CreatePost/Form/Form.css"
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { User, User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { CreatePostElementsLangType } from '@/Lang/Types/Components/CreatePost';
import { Translate_Object } from '@/Helpers/Translate';
import { Content_HelperFunction, Helper_Functions, Props_type, TextArea_Props, Voting_HelperFunction } from './PostFormTypes';
import { Close } from '@mui/icons-material';
import { Content_info, Create_Post, Option_For_Voting, Post_Type, Post_info, Post_kind, Update_Post, Voting_Setting, Voting_info } from '@/Redux/Modules/Post/PostTypes';
import { UserAction } from '@/Redux/Modules/User/UserTypes';
import { Posts_Model } from '@/Helpers/Redux_models/Posts/Posts.Class';
import { create } from 'domain';
import { useAppDispatch } from '@/Redux/Hooks';
import AvaliableBox from '@/Helpers/Small_Helper_Components/AvaliableBox/AvaliableBox';

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
// UseEffect
    useEffect(() => {if(props.Method == "Update"){SetKind(props.Source_Post?.Data.main_post.kind as  Post_kind)}} , [])
// Small Components
function Textarea(TextArea_Props : TextArea_Props){
  const text_ref:React.RefObject<HTMLTextAreaElement> = useRef(null)
  useEffect(() => {
                  const textarea = text_ref.current;
                  if (textarea) {
                    // Set the selection to the end of the content
                    const textLength = textarea.value.length;
                    textarea.setSelectionRange(textLength, textLength);
                    // Focus on the textarea
                    textarea.focus();
                  }
              }, [TextArea_Props.State.Value]);
  return <textarea name="" autoCorrect= 'off'  spellCheck="false"  value={TextArea_Props.State.Value ? TextArea_Props.State.Value : ""}   
                                  ref = {text_ref}
                                  placeholder={`${TextArea_Props.PlaceHolder}`}
                                  onBlur={() => TextArea_Props.OnBlur ? TextArea_Props.OnBlur() : null}
                                  onInput={(e) => {
                                    let element = e.target as HTMLTextAreaElement
                                    {TextArea_Props.Onclick ? TextArea_Props.Onclick(element) : TextArea_Props.State.Fn ? TextArea_Props.State.Fn(element.value) : null}
                                    Helper_Functions.adjustTextareaHeight(e.target as HTMLTextAreaElement)}}>
                </textarea>
}
// Options
    function Content_Info_Post(){
          let Main_info  = props.Source_Post?.Data.main_post.info  as Content_info
          const [imageUrl , setImageUrl] = useState<string | undefined>(undefined);
          const [videoUrl , setVideoUrl] = useState<string | undefined>(undefined);
          const [Textare_content , SetTextareaContent] = useState<string | undefined>(undefined)
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
                    if(props.Method == "Update" && Main_info?.text  != undefined  ){
                        SetTextareaContent(Main_info?.text);
                    }
              }, [])
          // Helepr

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
                    <Textarea State={{"Fn" : SetTextareaContent , "Value" : Textare_content}}
                              PlaceHolder={`${CreatePostObj.Content_InputFiled(User_Model.GetName())}`}
                              />
                    <ShowMedia/>
                    {Content_HelperFunction.Choose_Media_Inputs()}
                </div>
                <button  onClick={() => {Content_HelperFunction.GetReady()}}>{props.Method}</button>
              </div>

              </>

              )
    }
    function Voting_Info_Post(){
          const [Textare_content , SetTextareaContent] = useState<string | ''>('')
          const [Options         , SetOptions        ] = useState<Option_For_Voting[]>([])
          const [Counter         , SetCounter        ] = useState<number>(0)
          const [Target          , SetTarget         ] = useState<number>(-1) 
          const [Setting         , SetSetting        ] = useState<Voting_Setting>({"Ability to add more options" : false , "Multiple choice" : false})
          const dispatch = useAppDispatch()
          const Voting_HelperFunction : Voting_HelperFunction= {
              Add_Option     : () => {
                  let new_option : Option_For_Voting = {"id" : Counter , "Number_Of_Votes" : 0 , "text" : `New Option` }
                  SetCounter(Counter + 1)
                  SetOptions([...Options , new_option])
              },
              Change_Option : (id , Option) => {
                let index  = Options.findIndex(item => item.id == id)
                let option = {...Options[index] , ...Option}
                SetOptions( [...Options.slice(0 , index) , option , ...Options.slice(index+ 1 , Options.length)])
              },
              Delete_Option : (id) => {
                let index  = Options.findIndex(item => item.id == id)
                SetCounter(Counter - 1)
                SetOptions( [...Options.slice(0 , index) , ...Options.slice(index+ 1 , Options.length)])
              },
              Update   : () => {
                  const info = (): Voting_info => {
                    let array : Voting_info = {
                      "Question"            : Textare_content ,
                      "Number_Of_Votes"     : 0 ,
                      "Setting"             : {"Ability to add more options" : Setting['Ability to add more options'],
                                                "Multiple choice"            : Setting['Multiple choice']},
                      "UserInterAction"     : {"UserChoice" : []} ,
                      "Options"             : Options
                  }
                  return array
                
                };
                const Update : Update_Post = {
                    Id     : props.Source_Post?.Data.main_post.id as number,
                    User   : UserAction   , 
                    Data   : new Date     ,
                    info   : info()       ,
                    kind   : "Voting"     ,
                }
                Posts_Model.Action_ON_Post(dispatch , Update , "Update")
              },
              New_Share: () => {              
                const info = (): Voting_info => {
                  let array : Voting_info = {
                    "Question"            : Textare_content ,
                    "Number_Of_Votes"     : 1200            ,
                    "Setting"             : {"Ability to add more options" : Setting['Ability to add more options'],
                                              "Multiple choice"            : Setting['Multiple choice']},
                    "UserInterAction"     : {"UserChoice" : []} ,
                    "Options"             : Options
                  }
                  return array
                
                };
                const SharePostId = () : number => {
                    return props.Source_Post?.Data.main_post.id as number
                }
                const Create : Create_Post= {
                    User   : UserAction   , 
                    Data   : new Date     ,
                    info   : info()       ,
                    kind   : "Voting"     ,
                    type   : props.Method ,
                  }
                if(props.Method == "Share"){Create["SharePostId"] = SharePostId()}
                Posts_Model.Action_ON_Post(dispatch , Create , "Insert")
              },
              GetReady:()=>{
                props.Close();
                if(props.Method == "New" || props.Method == "Share"){Voting_HelperFunction.New_Share()}
                if(props.Method == "Update"){Voting_HelperFunction.Update()}
                return;
              },
              Is_Method_Equal_Update : () => {
                let info = props.Source_Post?.Data.main_post.info as Voting_info
                SetTextareaContent(info.Question);
                SetOptions(info.Options)
                SetSetting({"Ability to add more options" : info.Setting['Ability to add more options'] , "Multiple choice" : info.Setting['Multiple choice']})
                SetCounter(info.Options.length); 
                console.log(info.Options.length , "lol" , Options)
              }
          }   
          useEffect(() => {
            if(props.Method == "Update"){Voting_HelperFunction.Is_Method_Equal_Update()}
          } , [])      

      return <>
        <div className="Voting_Info_Post">
          <div className="Info">
                <div className="Setting">
                    <div className="item" onClick={() => {SetSetting({...Setting , "Ability to add more options" : !Setting['Ability to add more options']})}}><p className="text">Ability to add more options</p> <AvaliableBox value={Setting['Ability to add more options']}/></div>
                    <div className='item' onClick={() => {SetSetting({...Setting , "Multiple choice"             : !Setting['Multiple choice'            ]})}}><p className="text">Multiple choice</p> <AvaliableBox value={Setting['Multiple choice']}/></div>
                </div>
                <Textarea State={{"Fn" : SetTextareaContent , "Value" : Textare_content}}
                          PlaceHolder={`${CreatePostObj.Voting_InputFiled(User_Model.GetName())}`}
                          />
                <div className="Options_Container">
                  {Options.map((item) => (
                    <div key  = {item.id} className="option" onClick={()=> {SetTarget(item.id)}}>
                        <div className="Vote_info" >
                          {Target  != item.id ? item.text : <Textarea 
                                                                  OnBlur={()=> {SetTarget(-1)}}
                                                                  PlaceHolder='New Option'
                                                                  Onclick={(element) =>  {Voting_HelperFunction.Change_Option(item.id ,{text : element.value})}}
                                                                  State={{"Value" : item.text ,"Fn" : null }} />}
                        </div>
                          <span onClick={() => Voting_HelperFunction.Delete_Option(item.id)}><Close/></span>
                      </div>
                  ))}
                </div>
                <div className="Low_Level">
                  <button onClick={Voting_HelperFunction.Add_Option}>Add Option</button>
                  <p className="Counter">{Counter}</p>
                </div>
            </div>
          <button onClick={() => {Voting_HelperFunction.GetReady()}}>{props.Method}</button>
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