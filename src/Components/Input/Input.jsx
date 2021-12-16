import { useState } from 'react';
import './Input.scss';

export default function Input() {
    const [value, setValue] = useState('');

    const handleChange = (value) => {
        setValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <div class="form-group" onSubmit={handleSubmit}>
            <input
                class="form-field"
                type="text"
                placeholder="Letra o Palabra"
                onChange={(e) => handleChange(e.target.value)}
            />

            <input type='submit'>Enter</input>
        </div>
    );
}