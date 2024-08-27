import React, { useState }  from 'react';

const ExpenseForm = ({ onAddTransaction}) => {
    const [dateTime, setDateTime] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: Date.now(),
            dateTime,
            sum: parseFloat(sum),
            category,
            comment
        };

        onAddTransaction(newTransaction);
        setDateTime('');
        setSum('');
        setCategory('');
        setComment('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Date:</label>
                <input
                    type="datetime-local"
                    id="dateTime"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required/>
            </div>

            <div>
                <label>Sum:</label>
                <input
                type="number"
                id="sum"
                value={sum}
                onChange = {(e) => setSum(e.target.value)}
                required/>
            </div>

            <div>
                <label>Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required>
                    <option value="" disabled>Select category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>

            <div>
                <label>Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <button type="submit">Add</button>



            </form>
    );
};

export default ExpenseForm;