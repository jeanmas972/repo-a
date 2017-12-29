export const fetchMeetups = () =>
    fetch('http://127.0.0.1:3333/api/meetups')
        .then(res => res.json());