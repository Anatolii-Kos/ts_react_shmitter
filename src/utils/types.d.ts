export interface SmitContextValue {
    user: UserType,
    stats: StatsType,
    changeAvatar: (url: string) => void,
    changeName: (name: string) => void,
    changeStatsUp: (field: keyof StatsType) => void,
    changeStatsDown: (field: keyof StatsType) => void,
}

export interface UserType {
    name: string,
    avatar: string
}

export interface StatsType {
    following: number,
    followers: number
}
