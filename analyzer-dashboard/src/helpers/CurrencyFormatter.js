const CurrentFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        MaximumFractionDigits: 0,
    }

);

export default CurrentFormatter;