import { useState } from 'react';

const Form = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleUserChoice = (e) => {
    setError('');
    setValue(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value) {
      setError('');
      onSubmit(value);
    } else {
      setError('Please search for a valid movie!');
    }
  }

  return (
    <div className="formOne">
      <form onSubmit={event => handleSubmit(event)} className="movieSearchForm">
        <h2>Weekend Movies</h2>
        <label htmlFor="search"></label>
        <input type="search" placeholder={'Type your Movie'} id="search" onChange={handleUserChoice} value={value} />
        <button className="searchButton">Search</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Form;