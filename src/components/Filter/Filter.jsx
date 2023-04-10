export const Filter = ({ value, onChange }) => {
  return (
    <div  style={{
          fontSize: 40,
          color: '#010101'
      }}>
          <label>
           {' '}
        <p>Find contacts by name</p>
          <input
          style={{
          fontSize: 40,
          color: '#010101'
        }}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
