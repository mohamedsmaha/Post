import React from 'react'
import "@/Scss/Commen/Main_Search_Box/Main_Search_Box.css"
import { Search } from '@mui/icons-material'
import { Languagh } from '@/Lang/Main_file'
import { useAppSelector } from '@/Redux/Hooks'
import { Redux } from './MainSearchBoxType'
function Main_Search_Box() {
    let Redux :Redux= {
      DefaultData : useAppSelector((state) => state.DefaultData)
    }
    return (
      <div className={`Main_Search_Box_Component`}>
          <Search/>
          <input type="text" placeholder={`${Languagh[Redux.DefaultData.Lang].Search}`}/>
      </div>
    )
}

export default Main_Search_Box