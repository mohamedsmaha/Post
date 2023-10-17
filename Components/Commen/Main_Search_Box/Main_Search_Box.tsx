import React from 'react'
import "@/Scss/Commen/Main_Search_Box/Main_Search_Box.css"
import { Search } from '@mui/icons-material'

import { Translate } from '@/Helpers/Translate'
function Main_Search_Box() {
    return (
      <div className={`Main_Search_Box_Component`}>
          <Search/>
          <input type="text" placeholder={`${Translate("Search")}`}/>
      </div>
    )
}

export default Main_Search_Box