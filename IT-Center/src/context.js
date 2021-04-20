import React, { Component } from 'react'
import items from "./data"

const RoomContext = React.createContext();

// <RoomContext.Provider value={'hello'}

class RoomProvider extends Component {

  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    benefits: []

  };

  //getDate
  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  formatData(items) {
    /*
    * using some distructuring to 
    * iterate over the list of items
    */
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url); // Here we iterate through the items to get the images anf the iterate through the images to get its properties.

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  /* Setting properties for 
  * different single page data 
  */
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    const type = e.target.type
    const name = e.target.name
    const value = e.target.value

    console.log(type, name, value);

  }
  filterRooms = () => {
    console.log('Hello');
  }

  render() {
    return (
      <RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;


export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}


export { RoomConsumer, RoomContext, RoomProvider };