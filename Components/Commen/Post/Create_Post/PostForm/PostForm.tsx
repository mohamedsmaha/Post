import React, {useEffect, useRef, useState } from 'react'
import "@/Scss/Commen/Post/CreatePost/Form/Form.css"
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { CreatePostElementsLangType } from '@/Lang/Types/Components/CreatePost';
import { Translate_Object } from '@/Helpers/Translate';
import { Helper_Functions, Props_type } from './PostFormTypes';
import { Close } from '@mui/icons-material';
// Description 
  // Component Deal with Updata or Share or insert new  Post
// Massions
  //  
function PostForm(props : Props_type) {
// Lang
    const CreatePostObj= Translate_Object("CreatePost") as CreatePostElementsLangType;
// Hooks 
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [Textare_content , SetTextareaContent] = useState<string | undefined>("")
    const text_ref:React.RefObject<HTMLTextAreaElement> = useRef(null)
    const Form_Ref :React.RefObject<HTMLDivElement>   = useRef(null)
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
      if(props.Method == "Updata"){
          SetTextareaContent(props.SharePost?.Data.main_post.info.text);
      }
    }, [])
// Helper Functions
    const Helper_Functions : Helper_Functions = {
        adjustTextareaHeight: (element) => {
            element.style.height = 'auto';
            element.style.height = Math.max(element.scrollHeight, 50) + 'px';
        },
        Show_Contentinfo_image(element) {
          const file = element.files?.[0];
          const url = file ? URL.createObjectURL(file) : null;
          setImageUrl(url);
          setVideoUrl(null)
        },
        Show_Contentinfo_Videos(element) {
            const file = element.files?.[0];
            const url = file ? URL.createObjectURL(file) : null;
            setVideoUrl(url);
            setImageUrl(null)
        },
        Handel_Hide_Click: (element) => {
          if(!Form_Ref.current?.contains(element.target as Node)){
            props.Close()
          }
        },
        Handel_Textarea_onchange(element) {
          SetTextareaContent(element.value)
        },
    }
  function Textarea(){
    return <textarea name="" autoCorrect= 'off'  spellCheck="false"  value={Textare_content}   
                        ref = {text_ref}
                        placeholder={`${CreatePostObj.InputFiled(User_Model.GetName())}`}
                        onInput={(e) => {
                          Helper_Functions.Handel_Textarea_onchange(e.target as HTMLTextAreaElement)
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
        return props.SharePost?.Image
      }
      return <>
        {props.Method == "CreatePost" ? CreatePostImage() : Share() }
      </>
  }
  function MediaInputs(){
    return <>
            <div className="Media">
                <div className="Box">
                    <label htmlFor="Media">Image</label>
                    <input type="file" id = "Media"  accept="image/*" onChange={(e) => Helper_Functions.Show_Contentinfo_image(e.target)}
                    />
                </div>
                <div className="Box">
          <label htmlFor="Media1">Video</label>
          <input type="file" id="Media1" accept="video/*" onChange={(e) => Helper_Functions.Show_Contentinfo_Videos(e.target)}
          />
                </div>
            </div>
    </>
  }
  function Content_Info_Post(){
    return (
      <form className='Content_info_Post'>
        <div className="Info">
            <Textarea/>
            <ShowMedia/>
            {props.Method == "CreatePost" ? <MediaInputs/> : null}
        </div>
        <button>Post</button>
      </form>)
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
          <div className="Bottom">
              {<Content_Info_Post/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm