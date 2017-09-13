import {combineReducers} from 'redux';
import actions from './actions';

export const LOCATIONS = {
    TRANSPORTER_ROOM: "TRANSPORTER_ROOM",
    PLANET_EARTH: "PLANET_EARTH",
    PLANET_SUN: "PLANET_SUN"
};

export const ships = (state=[], action) => {
    switch(action.type) {
        case actions.ADD_SHIP:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        default:
            return state;
    }
};

const crewMembers = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_MEMBER: 
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
            });

            /*
            return [
                ...state,
                {
                   name: action.name,
                    rank: action.rank,
                    id: action.id,
                    location: action.location 
                }
            ]
            */
            case actions.BEAM_MEMBER:
                return state.map((crewMember) => {
                    //if the id matches, then update location
                    if (action.id === crewMember.id) {
                        let newLocation = crewMember.location;
                        if (action.location in LOCATIONS) {
                            newLocation = action.location;
                        
                        }
                        // return Object.assign({}, crewMember, {
                        //     location: action.location
                        // })
                        return {
                            ...crewMember,
                            location: newLocation
                        }
                    } else{
                        return crewMember;
                    }
                    //else return member
                });

            default:
            return state;
    }
    
}

// export default crewMembers;
export default combineReducers({
    ships,
    crewMembers
})