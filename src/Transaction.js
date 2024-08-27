import React from 'react';

const Transaction = ({ transactions}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sum</th>
                    <th>Category</th>
                    <th>Comment</th>

                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.dateTime}</td>
                    <td>{transaction.sum}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.comment}</td>
                    

                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Transaction;