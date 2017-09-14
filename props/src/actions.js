/* Tip #1: Make constants for your action type strings
this is what we want to produce as an action object:
{
    type: ADD_MEMBER,
    name: 'crusher',
    rank: 'CMO',
    id: 12345,
    location: 'PLANET_SUN'
}

{
    type: BEAM_MEMBER,
    id: 12345,
    location: 'LOCATION_SHIP'
}

{
    type: ADD_SHIP,
    name: 'enterprise',
    id: 54321
}
{
    type: ADD_PLANET,
    name: 'Earth',
    id: 9876
}
*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';

export default {
    ADD_MEMBER,
    BEAM_MEMBER
}