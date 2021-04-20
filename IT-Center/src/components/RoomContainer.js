import React from 'react'
import { withRoomConsumer } from '../context';
// import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';


// Higher order component call.
function RoomContainer({ context }) {
  const { loading, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* <RoomsFilter rooms={rooms} /> */}
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);


// export default function RoomContainer() {
//   return (
//     <RoomConsumer>

//       {value => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value

//         return (
//           <div>
//             Hello Form Room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
