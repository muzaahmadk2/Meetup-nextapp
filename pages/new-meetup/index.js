import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {

    async function addMeetupHnadler(newMeetupData){
        const response = await fetch('api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHnadler}/>
}

export default NewMeetupPage;