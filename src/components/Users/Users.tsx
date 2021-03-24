import React from 'react';
import {PropsUsersType} from "./UsersContainer";
import {v1} from "uuid";

export let Users = (props: PropsUsersType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: v1(),
                    photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
                    followed: false,
                    fullName: 'Vlad',
                    status: 'Student',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
                    followed: false,
                    fullName: 'Julia',
                    status: 'lawyer',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
                    followed: false,
                    fullName: 'Vadim',
                    status: 'foreman',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
                    followed: false,
                    fullName: 'Eva',
                    status: 'apprentice',
                    location: {city: 'Minsk', country: 'Belarus'}
                },

            ]
        )
    }

    return (<div>
        {
            props.usersPage.users.map(u => <div key={u.id}>

            </div>)
        }
    </div>)
}