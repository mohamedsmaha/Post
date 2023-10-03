import Rightbar from '@/Components/Commen/Rightbar/Rightbar'
import Share from '@/Components/Commen/Share/Share'
import Sidebar from '@/Components/Commen/Sidebar/Sidebar'
import Topbar from '@/Components/Commen/Topbar/Topbar'
import FeedPosts from '@/Components/Pages/Home/FeedHome'
import "@/Scss/Pages/Home/Home.css"
export default function Home() {
  return (
    <div className='HomePage'>
      <Topbar/>
      <div className="bottom">
        <Sidebar/>
        <div className="Feed">
          <Share/>
          <FeedPosts/>
        </div>
        <Rightbar kind="Home"/>
      </div>
    </div>
  )
}
