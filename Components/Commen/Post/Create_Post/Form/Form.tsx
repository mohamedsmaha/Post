import React, { useEffect, useRef, useState } from 'react'
import "@/Scss/Commen/Post/CreatePost/Form/Form.css"
import { APP_Folders } from '@/Static_Data/APP_Folders'
import { User_Model } from '@/Helpers/Redux_models/Users/Users_Class'
import { CreatePostElementsLangType } from '@/Lang/Types/Components/CreatePost';
import { Translate_Object } from '@/Helpers/Translate';
import { Helper_Functions, Props_type } from './FormTypes';
function Form(props : Props_type) {
// Lang
    const CreatePostObj= Translate_Object("CreatePost") as CreatePostElementsLangType;
// Hooks 
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const Form_Ref :React.RefObject<HTMLDivElement>   = useRef(null)

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
    }
  function Content_Info_Post(){
    return (
      <form className='Content_info_Post'>
        <div className="info">
                  <textarea name="" autoCorrect= 'off' spellCheck="false"
                          placeholder={`${CreatePostObj.InputFiled(User_Model.GetName())}`}
                          onInput={(e) => Helper_Functions.adjustTextareaHeight(e.target as HTMLTextAreaElement)}></textarea>
                  <div className="ShowMedia">
                    {imageUrl && <img src={imageUrl} alt="Selected File" />}
                          {videoUrl && (
                  <video controls width="300">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                  </div>
                  <div className="media">
                      <div className="box">
                          <label htmlFor="media">Image</label>
                          <input type="file" id = "media"  accept="image/*" onChange={(e) => Helper_Functions.Show_Contentinfo_image(e.target)}
                          />
                      </div>
                      <div className="box">
                <label htmlFor="media1">Video</label>
                <input type="file" id="media1" accept="video/*" onChange={(e) => Helper_Functions.Show_Contentinfo_Videos(e.target)}

                />
                      </div>
                  </div>
        </div>
        <button>Post</button>
      </form>)
  }
  return (
    <div className='PostForm_Component' onClick={(e) => Helper_Functions.Handel_Hide_Click(e)} >
      <div className="container" ref={Form_Ref}>
        <div className="Main_Form">
          <div className="top">
            <img src={`${APP_Folders.Users()}/${User_Model.GetMainImg()}`} alt="" />
            <p className="text">mohamed sabry</p>
          </div>
          <div className="bottom">
            {<Content_Info_Post/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form