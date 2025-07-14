
import react, { useEffect, useState } from 'react'


const Search = ()=>{

    const [value , setValue]= useState("")
    const [filteredList, setFilteredList] = useState([]);
    const List = [
        {
          "id": 1,
          "name": "Ocean View Resort",
          "location": "Goa, India",
          "rating": 4.3,
          "pricePerNight": 5800,
          "amenities": ["Beach Access", "Free Breakfast", "WiFi", "Bar"],
          "availability": true
        },
        {
          "id": 2,
          "name": "Sunset Bay Hotel",
          "location": "Goa, India",
          "rating": 4.0,
          "pricePerNight": 4500,
          "amenities": ["Swimming Pool", "Restaurant", "WiFi", "Balcony Rooms"],
          "availability": true
        },
        {
          "id": 3,
          "name": "Goa Comfort Inn",
          "location": "Goa, India",
          "rating": 3.9,
          "pricePerNight": 3200,
          "amenities": ["Parking", "Free WiFi", "Air Conditioning"],
          "availability": false
        },
        {
          "id": 4,
          "name": "Grand Palace Hotel",
          "location": "Mumbai, India",
          "rating": 4.5,
          "pricePerNight": 7500,
          "amenities": ["Free WiFi", "Swimming Pool", "Spa", "Gym"],
          "availability": true
        },
        {
          "id": 5,
          "name": "Cityscape Hotel",
          "location": "Mumbai, India",
          "rating": 4.2,
          "pricePerNight": 6200,
          "amenities": ["Restaurant", "Business Center", "Airport Shuttle"],
          "availability": true
        },
        {
          "id": 6,
          "name": "Marine Drive Stay",
          "location": "Mumbai, India",
          "rating": 3.8,
          "pricePerNight": 5100,
          "amenities": ["Seaview", "Rooftop Cafe", "WiFi", "Laundry"],
          "availability": false
        },
        {
          "id": 7,
          "name": "Royal Heritage Inn",
          "location": "Delhi, India",
          "rating": 4.4,
          "pricePerNight": 5400,
          "amenities": ["Free WiFi", "Parking", "Restaurant", "Spa"],
          "availability": true
        },
        {
          "id": 8,
          "name": "Capital Comforts",
          "location": "Delhi, India",
          "rating": 4.1,
          "pricePerNight": 4900,
          "amenities": ["Airport Pickup", "WiFi", "Meeting Rooms", "Gym"],
          "availability": true
        },
        {
          "id": 9,
          "name": "Lotus Residency",
          "location": "Delhi, India",
          "rating": 3.7,
          "pricePerNight": 3600,
          "amenities": ["Breakfast Included", "Parking", "WiFi"],
          "availability": true
        }
    ]

    useEffect(()=>{
        let filter = List.filter(a=> a.location.toLowerCase().includes(value.toLowerCase()))
        setFilteredList(filter)
    },[value])
    
    let location = []
    List.filter(a=> {
        if(!location.includes(a.location)){
            location.push(a.location)
        }
    })
      
    return(
        <>
        Location: <input value={value} placeholder="Search" onChange={(e)=> setValue(e.target.value)}></input>
        <select onChange={(e)=> setValue(e.target.value)}>
            <option value="">Select Location</option>
            {location.map(a=>(
                <option value={a}>{a}</option>
            ))}
        </select>
        {filteredList.map(a=>(
            <ul>
            <li>{a.name}</li>
            <li>{a.location}</li>
            </ul>
        ))}
        </>
    )
}

export default Search