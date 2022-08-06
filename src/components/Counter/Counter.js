import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './CounterSlice.js';

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            {/* omit additional rendering output here */}
        </div>
    );
}

export default Counter;
