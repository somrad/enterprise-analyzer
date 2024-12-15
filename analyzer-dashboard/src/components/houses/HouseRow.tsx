import CurrencyFormatter from "../../helpers/CurrencyFormatter"

const HouseRow = ({house})=> {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{CurrencyFormatter.format(house.price)}</td>
        </tr>

    );
}

export default HouseRow