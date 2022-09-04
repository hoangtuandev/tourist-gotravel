import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPall(props) {
    const { handlePayBookingTour } = props;

    return (
        <PayPalScriptProvider options={{ 'client-id': 'test' }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: '1',
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        handlePayBookingTour();
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPall;
