import { useState } from "react";
import HouseRow from "./HouseRow";

const houseArray = [
    {
        id: 1,
        address: "102, W.Mayfield",
        price: 300000
    },
    {
        id: 2,
        address: "106, E.Mayfield",
        price: 500000
    },
];


const Houses = () => {
    const [houses, setHouses] = useState(houseArray)
    const [houseId, setHouseId] = useState(2)
    const addHouse =()=>{
        const newhouseId = houseId + 1
        setHouseId(newhouseId)
        setHouses([...houses,{id: newhouseId,
            address: "whitehouse",
            price: 300000}])
    }
    return (
        <>
            <div className="row mb-2">
                <h3 className="">List of available houses in the market</h3>
            </div>
            
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>House Address</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {houses.map((h) => (
                            <HouseRow key={h.id} house={h} />
                            // <tr key={h.id}>
                            //     <td>{h.address}</td>
                            //     <td>{h.price}</td>
                            // </tr>
                        ))}
                    </tbody>

                </table>
                <button className="btn btn-primary" onClick={addHouse}>
                     Add a House       
                </button>
        </>
    );
}

export default Houses;