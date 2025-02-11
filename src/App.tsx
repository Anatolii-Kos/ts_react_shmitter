import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {Twittercontext} from "./utils/context.ts";
import {StatsType, UserType} from "./utils/types";


function App() {
    const [user, setUser] = useState<UserType>({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState<StatsType>({
        followers: 42,
        following: 10
    });

    const changeAvatar = (url:string) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name:string) => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }

    const changeStatsUp = (field:keyof StatsType) => {
        setStats((prevValue: StatsType) => ({
            ...prevValue,
            [field]: prevValue[field] < 1000
                ? prevValue[field] + 1
                : 0
        }));
    };

    const changeStatsDown= (field: keyof StatsType)  => {
        setStats((prevValue) => ({
            ...prevValue,
            [field]: prevValue[field] > 1
                ? prevValue[field] - 1
                : prevValue[field]
        }));
    };

    return (
        <div className={'app'}>
            <Twittercontext.Provider value={{
                user,
                stats,
                changeAvatar,
                changeName,
                changeStatsUp,
                changeStatsDown
            }}>
                <Navigation/>
                <Body/>
            </Twittercontext.Provider>
        </div>
    )
}

export default App
