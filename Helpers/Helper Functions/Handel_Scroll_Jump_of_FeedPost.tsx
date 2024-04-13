import { HTMLDivElementRef } from '@/Ts/Hooks_Types'
import React, { useEffect } from 'react'
import { Posts_Model } from '../Redux_models/Posts/Posts.Class';

function Handel_Scroll_Jump_of_FeedPost(props : {div: HTMLDivElementRef}) {
    const { loading } = Posts_Model.Get_Data();
    useEffect(() => {
        if(loading.Select == false){
            console.log(props.div.current)
        props.div.current?.scrollTo(0 , 0 )
        }

    } , [loading.Select ])
    return (
    <></>
)
}

export default Handel_Scroll_Jump_of_FeedPost