import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/1280px-Moscow-City_%2836211143494%29.jpg",
    address: "Some address 5, 123 some street",
    description: "This is a first meetup!!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Moscow-City_%2836211143494%29.jpg/1280px-Moscow-City_%2836211143494%29.jpg",
    address: "Some address 10, 125 some street",
    description: "This is a second meetup!!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
