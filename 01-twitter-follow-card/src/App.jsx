import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return (
        <>
            <div className='App'>
                <TwitterFollowCard userName='midudev' initialIsFollowing>
                 Miguel Ángel Durán
                </TwitterFollowCard>
                
                <TwitterFollowCard userName='MoureDev' initialIsFollowing={false}>
                 Brais Moure
                </TwitterFollowCard>
                
                <TwitterFollowCard userName='iamCarolinaSV' initialIsFollowing>
                Carolina
                </TwitterFollowCard>
            </div>
        </>
    )
}