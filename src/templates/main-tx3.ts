export const mainTx3Template = `party Sender;

party Receiver;


tx transfer(
    quantity: Int
) {
    input source {
        from: Sender,
        min_amount: Ada(quantity),
    }
    
    output {
        to: Receiver,
        amount: Ada(quantity),
    }

    output {
        to: Sender,
        amount: source - Ada(quantity) - fees,
    }
}
`;
