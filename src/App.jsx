import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const clearButton = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood && `${selectedGood} is selected`}
        {selectedGood ? (
          <button
            onClick={clearButton}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              data-cy="goodName"
              key={goodName}
              className={
                selectedGood === goodName && 'has-background-success-light'
              }
            >
              <td>
                {selectedGood !== goodName ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${goodName === selectedGood && 'has-background-success-light'}`}
                    onClick={() => setSelectedGood(goodName)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearButton}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
