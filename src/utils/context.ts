import {createContext} from 'react'
import {SmitContextValue, StatsType} from "./types";

export const Twittercontext = createContext<SmitContextValue>({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 42,
        following: 10
    },
    changeAvatar: (url: string) =>console.log(`New avatar is here: ${url}`),
    changeName: (name: string) => console.log(`New name is ${name}`),
    changeStatsUp: (field: keyof StatsType) =>console.log(`${field} was changed up`),
    changeStatsDown: (field: keyof StatsType) => console.log(`${field} was changed down`),
    }

);
