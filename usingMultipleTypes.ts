// In this tutorial, we will be using multiple types.

type cardNumber = {
    cardnum: number;
}
type cardDate = {
    carddate: string;
}
// Here we are using the '&' operator to combine two types
type cardDetails = cardNumber & cardDate & {
    cardname: string;
    cardcvv: number;
}

function createCard(card: cardDetails): cardDetails {
    return card;
}

console.log(createCard({cardcvv: 123, carddate: '20/12/2069', cardname: 'Ashiq', cardnum: 123456789}))

/*
    Here is the result:
    {
        cardcvv: 123,
        carddate: '20/12/2069',
        cardname: 'Ashiq',
        cardnum: 123456789
    }
*/ 