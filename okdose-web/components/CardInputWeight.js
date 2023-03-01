import {useEffect, useState} from 'react';
import {t} from 'i18next';
import PropTypes from 'prop-types';
import AlertCard from './common/AlertCard';
import Button from './common/Button';
import arrowRightIcon from '@icons/arrowRightIcon.svg';
import {WEIGHT_RANGE} from '../constants';

function CardInputWeight ({
  titleContent,
  description,
  showCategoryIcon,
  showTitleCard,
  titleCard,
  upperBound,
  lowerBound,
  disableComponent,
  setWeight
}) {
  const [inputValue, setInputValue] = useState();
  const [fontStyle, setFontStyle] = useState('');
  const [buttonStyle, setButtonStyle] = useState('');

  useEffect(() => {
    if (disableComponent) {
      setButtonStyle('weightDisabled');
      setFontStyle('disable');
    } else {
      setButtonStyle('weight');
      setFontStyle('normal');
    }
  }, [disableComponent]);

  const inputStyle = {
    error: 'text-strong-red placeholder-strong-red',
    normal: 'text-black placeholder-gray-400',
    disable: 'text-gray-400'
  };

  const errorMsgLowerBound = t('app_info.input_err_lower_bound', {
    weight: lowerBound
  });
  const errorMsgUpperBound = t('app_info.input_err_upper_bound', {
    weight: upperBound
  });

  function handleChange (event) {
    let value = event.target.value;
    setInputValue(parseInt(value));
    if (value < lowerBound || value > upperBound) {
      setFontStyle('error');
    } else {
      setFontStyle('normal');
    }
  }

  function sendWeight (event) {
    let value = event.target.value;
    setWeight(value);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      {showTitleCard && (
        <div className='flex text-center items-center justify-center h-8 w-36 bg-blue-800 text-white rounded-full relative -mb-4'>
          {showCategoryIcon && <img src={arrowRightIcon} className='pr-1' />}
          {titleCard}
        </div>
      )}
      <div className='flex flex-col justify-center items-center md:max-w-md lg:max-w-lg bg-white p-10 px-20 text-center'>
        <h1 className='w-64 h-9 text-indigo-700 font-medium text-3xl mb-2'>
          {titleContent}
        </h1>
        <p className='font-normal text-sm text-light-gray'>{description}</p>
        <div className='flex flex-row items-center justify-center'>
          <input
            aria-label='weight-input'
            disabled={disableComponent}
            className={`${inputStyle[fontStyle]} border-0 border-transparent outline-none w-[45%] h-[160px] text-7xl text-center`}
            type='text'
            placeholder='0.0'
            onChange={handleChange}
          />
          <span className={`${inputStyle[fontStyle]} text-5xl`}>kg</span>
        </div>
        {inputValue < lowerBound && <AlertCard msg={errorMsgLowerBound} />}
        {inputValue > upperBound && <AlertCard msg={errorMsgUpperBound} />}
        <Button
          type={buttonStyle}
          title={t('app_info.weight_button')}
          disable={disableComponent}
          onClick={sendWeight}
        />
      </div>
    </div>
  );
}

CardInputWeight.defaultProps = {
  showCategoryIcon: false,
  showTitleCard: false,
  disableComponent: false,
  lowerBound: WEIGHT_RANGE.minBound,
  upperBound: WEIGHT_RANGE.maxBound
};

CardInputWeight.propTypes = {
  titleContent: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showCategoryIcon: PropTypes.bool,
  showTitleCard: PropTypes.bool,
  titleCard: PropTypes.string,
  upperBound: PropTypes.number,
  lowerBound: PropTypes.number,
  disableComponent: PropTypes.bool
};

export default CardInputWeight;
