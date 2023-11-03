import PropsTypes from 'prop-types';

const Tag = ({ data }) => {
  return <div className="bg-black rounded-md px-2 py-1 shadow-md text-xs text-white">{data}</div>;
};

Tag.propTypes = {
  data: PropsTypes.string.isRequired,
};

export default Tag;
