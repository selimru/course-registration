import React from 'react';
import Selection from '../Selected/Selection';


const Selections = ({ selections, credit, remainingCredit, totalPrice }) => {
    return (
        <div className=' lg:w-1/5'>
            <div className=' bg-white px-3 bg rounded-md py-3 sticky top-0'>
                <p className='border-b-2 py-3 text-sm font-bold text-blue-400'>Credit Hour Remaining : {remainingCredit > 1 ? `${remainingCredit} hrs` : `${remainingCredit} hr`}</p>
                <h4 className='border-b-2 py-4 text-xl font-bold'>Course Name</h4>

                {
                    selections.map((selection, idx) => <Selection
                        key={idx}
                        idx={idx + 1}
                        selection={selection}></Selection>)
                }
                <p className='border-b-2 py-4 '>Total Credit Hour : {credit > 1 ? `${credit} hrs` : `${credit} hr`}</p>
                <p className='py-4'>Total Price : {totalPrice} USD</p>
            </div>
        </div>
    );
};

export default Selections;