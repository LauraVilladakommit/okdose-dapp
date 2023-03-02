import {t} from 'i18next';
import PropTypes from 'prop-types';
import CardInputWeight from '../components/CardInputWeight';
import MedicinesList from './MedicinesList';

function MainHomeInfo ({disease, weight, updateWeight, inputStatus, medicines}) {
  return (
    <div>
      <CardInputWeight
        showCategoryIcon={true}
        showTitleCard={true}
        titleCard={t('app_info.card_category_title')}
        titleContent={disease}
        description={t('app_info.input_weight_description', {
          weight: weight
        })}
        disableComponent={inputStatus}
        setWeight={updateWeight}
      />
      <div className='pt-5'>
        <MedicinesList medicines={medicines} />
      </div>
    </div>
  );
}

MainHomeInfo.propTypes = {
  disease: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  updateWeight: PropTypes.func,
  inputStatus: PropTypes.bool,
  medicines: PropTypes.object.isRequired
};

export default MainHomeInfo;
