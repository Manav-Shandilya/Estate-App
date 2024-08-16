import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({items}){
  return (
    <MapContainer center={
      items.length === 1 
        ? [items[0].latitude, items[0].longitude]
        : [20.593683, 78.962883]
    } zoom={items.length === 1 ? 9 : 5} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map