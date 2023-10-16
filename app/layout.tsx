import { Providers } from "@/Redux/Provider"
import { Children } from "react"
import "@/Scss/Commen/Body/Body.css"
import { useAppSelector } from "@/Redux/Hooks"
import Body from "./Body"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Providers> <Body >{children} </Body></Providers>
    </html>
  )
}
