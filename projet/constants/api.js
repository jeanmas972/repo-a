import axios from 'axios';

axios.defaults.baseURL = 'http://10.133.2.76:3333/api';

// 10.133.2.76 is the ip address of the computer 
// to fix the error with android emulator : Possible Unhandled Promise Rejection (id: 0): Network Error Error

const fakeGroupId = '5a461a6c4098551eabef1ed4';

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {

        //try {
        const { data } = await axios.get(this.path);

        return data.meetups;
        //} catch (e) {
        //    throw e;
        //}
    }
}

export  { MeetupApi };
/*
export const fetchMeetups = () =>
    fetch('http://127.0.0.1:3333/api/meetups')
        .then(res => res.json());
*/