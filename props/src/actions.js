/*
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
*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';

export default {
    ADD_MEMBER,
    BEAM_MEMBER
}