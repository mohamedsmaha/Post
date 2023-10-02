import React from 'react'
import "@/Scss/Commen/Main_Search_Box/Main_Search_Box.css"
import { Search } from '@mui/icons-material'
function Main_Search_Box() {
  return (
    <div className='Main_Search_Box_Component ColorTheme_1'>
        <Search/>
        <input type="text" placeholder='Search Post'/>
    </div>
  )
}

export default Main_Search_Box