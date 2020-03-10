if (window.PaymentRequest) {
    const metodopago = [
        {
            supportedMethods: ['basic-card']
        }
    ];
    const detallePago = {
        total: {
            label: 'Tatal a pagar ...',
            amount: {
                currency: 'MXN',
                value: 199
            }
        }
    }
    const peticionPago = new PaymentRequest(metodopago,detallePago);
    peticionPago.show();
}
else{
    alert('Api no soportable')
}