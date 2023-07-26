import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },

    {
        userName: 'MoureDev',
        name: 'Brais Moure',
        isFollowing:true
    },

    {
        userName: 'iamCarolinaSV',
        name: 'Carolina',
        isFollowing:false
    }
]


export function App (){
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing= {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}