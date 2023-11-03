import PropsTypes from 'prop-types';

const Button = ({ isSaved, toggleSaved }) => {
  return (
    <button
      className={`py-2 px-4 w-full mt-5 ${
        isSaved
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-green-600 text-white hover:bg-green-700'
      } hover:bg-${isSaved ? 'red-600' : 'orange-600'}`}
      onClick={toggleSaved}
    >
      {isSaved ? 'Un-Saved' : 'Save'}
    </button>
  );
};

Button.propTypes = {
  isSaved: PropsTypes.bool.isRequired,
  toggleSaved: PropsTypes.func.isRequired,
};

export default Button;
