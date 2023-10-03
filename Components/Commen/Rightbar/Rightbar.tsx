"use client";
import { Languagh } from "@/Lang/Main_file";
import { useAppSelector , useAppDispatch } from "@/Redux/Hooks";
import "@/Scss/Commen/Rightbar/Rightbar.css"
type RightbarType = {
    kind : "profile" | "Home"
}
function Rightbar(props : RightbarType) {
    const Sponsersarr  = [
        {id : 1 , title : "udemy" , Description : "Chose what you want to learn" , img : './assets/Sponsers/ad.png'}
    ]
    const arr = [
        { id: 5, Name: 'Emily Brown', img: './assets/persons/6.jpeg' },
        { id: 9, Name: 'Isaac Moore', img: './assets/persons/10.jpeg' },
        { id: 3, Name: 'Charlie Williams', img: './assets/persons/4.jpeg' },
        { id: 6, Name: 'Fiona Davis', img: './assets/persons/7.jpeg' },
        { id: 7, Name: 'George Miller', img: './assets/persons/8.jpeg' },
        { id: 8, Name: 'Hannah Wilson', img: './assets/persons/9.jpeg' },
        { id: 4, Name: 'David Jones', img: './assets/persons/5.jpeg' },
        { id: 1, Name: 'Alice Smith', img: './assets/persons/2.jpeg' },
        { id: 2, Name: 'Bob Johnson', img: './assets/persons/3.jpeg' }
    ]
    let main_redux = {
        DefaultData : useAppSelector((state) => state.DefaultData)
    }
    const Homepage = () => {
        function OnlineFriendList (){
            return(
                <>
                <div className="Online">
                    <h4 className="rightbartitle">{Languagh[main_redux.DefaultData.Lang]["Online Friends"]}</h4>
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
                    <img src="./assets/gift.png" alt="" className="birthdayimg" />
                    <span className="birthdaytext">
                        <b>Pola Foster </b> and <b>3 other friends</b> have a birthday today
                    </span>
            </div>
            )
        }
        function Fetched_data(){
            return(
                <>

                </>
            )
        }
        return (
            <div className={`Home color_theme1`}>
                    <Birthday/>
                    <Sponsers/>
                    <OnlineFriendList/>
                    <Fetched_data/>
            </div>
        )
    }
    const profilepage = () => {
        return (

            <div className="Profile">
                <h4 className="rightbartitle">User Information</h4>
                <div className="rightbarinfo">
                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">City : </span>
                    <span className="rightbarinfovalue">NewWork</span>
                </div>
                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">From : </span>
                    <span className="rightbarinfovalue">Egypt</span>
                </div>
                                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">Realtionship : </span>
                    <span className="rightbarinfovalue">Single</span>
                </div>
                </div>
                <h4 className="rightbartitle">User friends</h4>
                <div className="rightbarfollowings">
                    {arr.map(friend => (
                        <div className="rightbarfollowing" key={friend.id} >
                            <img src={friend.img} alt="" className="rightbarfollowingimg" />
                            <span className="rightbarfollowingname">{friend.Name}</span>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
    return (
        <div className='Rightbar'>
            {props.kind == "profile" ? profilepage() : Homepage()}
        </div>
    )
}

export default Rightbar