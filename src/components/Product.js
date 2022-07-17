import React from 'react'


function product({ item, basket, setBasket, money, total }) {


    // basketin içinden silinecek nesneyi bulama gerekiyor (done )
    // sonrada basketi onsuz setlemelyiim .
    const basketItem = basket.find(basketItem => basketItem.id === item.id)

    const removeBasket = () => {
        const removedItem = basket.find(basketItem => basketItem.id === item.id)
        if (removedItem.amount == 1) {
            setBasket([...basket.filter(basketItem => basketItem.id !== item.id)])


        }
        else if (removedItem.amount > 1) {
            removedItem.amount -= 1;
            setBasket([...basket.filter(basketItem => basketItem.id !== item.id), removedItem])
        }


    }

    const addBasket = () => {
        const alreadyBasket = basket.find(basketItem => basketItem.id === item.id)

        if (alreadyBasket) {

            alreadyBasket.amount += 1
            setBasket([...basket.filter(basketItem => basketItem.id !== item.id), alreadyBasket])


        } else {
            setBasket([...basket, {
                id: item.id,
                title: item.title,
                amount: 1,
                price: item.price
            }])
        }

    }



    return (
        < div className='product'>

            <div className="product-img">

                <img src={item.image} />
            </div>

            <div className="product-detail">

                <h4>{item.title}</h4>
                <span>$ {item.price}</span>

            </div>

            <div className="actions">

                <button className='btn-sell' disabled={!basketItem} onClick={removeBasket}>Sat </button>
                <span> {basketItem && basketItem.amount || 0}</span>
                <button disabled={item.price + total > money} className='btn-buy' onClick={addBasket}>Satın al </button>
            </div>
        </div>
    )
}

export default product