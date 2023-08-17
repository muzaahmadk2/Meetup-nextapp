import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {

    function addMeetupHnadler(newMeetupData){
        console.log(newMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHnadler}/>
}

export default NewMeetupPage;