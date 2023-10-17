"use client"
import { default_data_model } from '@/Helpers/Redux_models/Deafult_data/Class'
import { redirect } from 'next/navigation'
import React from 'react'

function Body( {children}: {children: React.ReactNode}) {
    let redux = {
        defaultData : default_data_model
    }
    return (
        <body className={`${redux.defaultData.GetLang()} ColorTheme_${redux.defaultData.GetColorTheme()}`}>
            {children}
        </body>
    )
}

export default Body