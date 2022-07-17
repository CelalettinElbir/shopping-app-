import React from 'react'


function Basket({ setTotal, total, basket, setBasket }) {

    const resetBasket = () => { setBasket([]) }


    return (
        <>
            {basket.length > 0 &&
                <ul className='basket-container'>
                    <h3 className='basket-title'>Alışveriş detayları </h3>
                    {basket.map(function (item) {
                        return <div className='basket'>
                            <li>{item.title} x {item.amount}</li>
                            <div className='basket-detail'>
                                <p>{item.price * item.amount}</p>
                            </div>
                        </div>
                    })}
                    <hr />
                    <div className="total">

                        <button className='reset-btn' onClick={resetBasket}>Reset</button>
                        <h4> {total}</h4>


                    </div>


                </ul>

            }
        </>

    )
}

export default Basket