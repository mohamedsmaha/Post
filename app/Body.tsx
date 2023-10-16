"use client"
import { useAppSelector } from '@/Redux/Hooks'
import { Providers } from '@/Redux/Provider'
import React from 'react'

function Body( {children}: {children: React.ReactNode}) {
    let redux = {
        defaultData : useAppSelector((state) => state.DefaultData)
    }
    return (
        <body className={`${redux.defaultData.Lang} ColorTheme_${redux.defaultData.ColorTheme}`}>
            {children}
        </body>
    )
}

export default Body