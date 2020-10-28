import React, { useState, useRef, useEffect } from 'react';

function Paypal() {
    const product = {
        price: 50.00,
        name: 'Donation',
        description: 'A generous donation'
    };
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
        .Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                    {
                        description: product.description,
                        amount: {
                        currency_code: 'EUR',
                        value: product.price,
                        },
                    },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaidFor(true);
                console.log(order);
            },
            onError: err => {
                setError(err);
                console.error(err);
            },
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);

    if (paidFor) {
        return (
        <div>
            <h1>Thank you so much for your generous donation! &lt;3</h1>
        </div>
        );
    }

    return (
        <div style={{height:"100%",display: "flex", alignItems:"stretch", flexDirection:"column"}}>
            {error && <div>Uh oh, an error occurred! {error.message}</div>}
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", flexGrow:"2"}}>
                <h2 style={textStyle}>Make a donation of</h2>
                <p/>
                <input style={inputStyle}/>
                <p/>
                <h2 style={textStyle}>&euro;</h2>
            </div>
            <div style={buttonDivStyle} ref={paypalRef} />
        </div>
    );
}

const textStyle = {
}

const inputStyle = {
}

const buttonDivStyle = {
    flexGrow:"1",
    alignSelf:"center"
}

export default Paypal;