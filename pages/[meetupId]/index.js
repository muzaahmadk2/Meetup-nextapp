import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailPage() {
  return (
    <MeetupDetails
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/1280px-Moscow-City_%2836211143494%29.jpg"
      title="First Meetup"
      address="Some address 10, 125 some street"
      description="This is a second meetup!!"
    />
  );
}

export async function getStaticPaths(){
  return{
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      },
      {
        params: {
          meetupId: 'm3',
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/1280px-Moscow-City_%2836211143494%29.jpg",
        title: "First Meetup",
        address: "Some address 10, 125 some street",
        description: "This is a second meetup!!",
      },
    },
  };
}

export default MeetupDetailPage;
