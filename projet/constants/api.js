import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333/api';

const fakeGroupId = '5a461a6c4098551eabef1ed4';

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {

        try {
        const { data } = await axios.get(this.path);

        return data.meetups;
        } catch (e) {
            throw e;
        }
    }
}

export  { MeetupApi };
/*
export const fetchMeetups = () =>
    fetch('http://127.0.0.1:3333/api/meetups')
        .then(res => res.json());
*/