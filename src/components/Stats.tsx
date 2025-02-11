import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {Twittercontext} from "../utils/context.js";



const Stats = () => {
    const {user, stats, changeStatsUp, changeStatsDown} = useContext(Twittercontext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar size={''}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                   onClick={() => changeStatsUp('followers')}
                   onContextMenu={(e) => {
                       e.preventDefault()
                       changeStatsDown('followers')
                   }
                }
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => changeStatsUp('following')}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        changeStatsDown('following')
                    }
                }
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;
