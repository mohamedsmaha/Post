"use client";
import { Translate, Translate_Object } from "@/Helpers/Translate";
import { RightbarElementsLangType } from "@/Lang/Types/Components/Rightbar";
import "@/Scss/Commen/Rightbar/Rightbar.css"
import { Static_images } from "@/Static_Data/Images";

function Rightbar() {
// Lang
    const RightbarLangObj= Translate_Object("Rightbar") as RightbarElementsLangType;
// Redux
    const Sponsersarr  = [
        {id : 1 , title : "udemy" , Description : "Chose what you want to learn" , img : '/assets/Sponsers/ad.png'}
    ]
    const arr = [
        { id: 5, Name: 'Emily Brown', img: '/assets/persons/6.jpeg' },
        { id: 9, Name: 'Isaac Moore', img: '/assets/persons/10.jpeg' },
        { id: 3, Name: 'Charlie Williams', img: '/assets/persons/4.jpeg' },
        { id: 6, Name: 'Fiona Davis'  , img: '/assets/persons/7.jpeg' },
        { id: 7, Name: 'George Miller', img: '/assets/persons/8.jpeg' },
        { id: 8, Name: 'Hannah Wilson', img: '/assets/persons/9.jpeg' },
        { id: 4, Name: 'David Jones', img: '/assets/persons/5.jpeg' },
        { id: 1, Name: 'Alice Smith', img: '/assets/persons/2.jpeg' },
        { id: 2, Name: 'Bob Johnson', img: '/assets/persons/3.jpeg' }
    ]
// Small Components
    function OnlineFriendList (){
        return(
            <>
            <div className="Online">
                <h4 className="rightbartitle">{Translate("Online Friends")}</h4>
                <ul className="OnlineFriendsList">
                    {arr.map(friend => (
                        <li className="item" key = {friend.id}>
                            <div className="Left">
                                <img src={friend.img} alt="" className="img" />
                                <span className="Icon"></span>
                            </div>
                            <div className="Right">
                                <span className="name">{friend.Name}</span>
                            </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
        )
    }
    function Sponsers(){
        return(
            <div className="sponsers">
                {Sponsersarr.map((item) => (
                    <div className="box" key = {item.id}>
                        <img src={`${item.img}`} alt="" />
                        <div className="discreption">
                            <span className="title">{item.title}</span>
                            <span className="Description">{item.Description}</span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    function Birthday(){
        return (<div className="birthday">
                <img src={`${Static_images.Gift}`} alt="" className="birthdayimg" />
                <span className="birthdaytext">
                    {RightbarLangObj.Birthday("mohamed" , 4)}
                </span>
        </div>
        )
    }
    const Homepage = () => {
        return (
            <div className={`Home`}>
                    <Birthday/>
                    <Sponsers/>
                    <OnlineFriendList/>
            </div>
        )
    }
    return (
        <div className='Rightbar_Component'>
            {Homepage()}
        </div>
    )
}

export default Rightbar