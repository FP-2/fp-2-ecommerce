// import { useState, useEffect, useContext } from 'react';
import IMG from '/src/assets/img/header-card.png';
import PropsTypes from 'prop-types';
import Tag from './../moleculs/Tag';
import { formatDateToLocale } from '../../utils';
// import { updateCtx } from '../../context/updateContext';
// import Button from '../moleculs/Button';

const Card = ({ data }) => {
  return (
    <div className="pb-2 border-b border-gray-300 mb-4 h-full flex flex-col">
      <div className="w-full">
        <img src={data?.image || IMG} alt={data?.title} className="object-cover w-full" />
      </div>
      <div className="flex my-2 flex-wrap gap-2 ">
        <Tag data={data?.title} />
        <Tag data={data?.price || 'unknown'} />
        <Tag data={formatDateToLocale(data?.category)} />
      </div>
      <p className="text-sm">{data?.description}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropsTypes.object.isRequired,
};

export default Card;
