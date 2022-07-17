import React from 'react'

function Header({ money, total, basket }) {
    return (
        <div className='header'>
            {
                money - total > 0 ? <h3>Harcayacak $ {money - total} kaldı  </h3> : <h3>kalan para   = {money - total}</h3>
            }

        </div>

    )
}

export default Header