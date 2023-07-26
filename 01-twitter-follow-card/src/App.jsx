import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return (
        <>
            <div className='App'>
                <TwitterFollowCard isFollowing userName='midudev'>
                 Miguel Ángel Durán
                </TwitterFollowCard>
                
                <TwitterFollowCard isFollowing={false} userName='MoureDev'>
                 Brais Moure
                </TwitterFollowCard>
                
                <TwitterFollowCard isFollowing userName='iamCarolinaSV'>
                Carolina
                </TwitterFollowCard>
            </div>
        </>
    )
}