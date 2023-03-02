import {t} from 'i18next';
import PropTypes from 'prop-types';
import DisplayCardInformation from 'components/common/DisplayCardInformation';
import {CARD_TYPES} from '../constants';

function MedicinesList ({medicines}) {
  const medicinesList = Object.keys(medicines).map((medicine, index) =>
      <DisplayCardInformation
      key={index}
      type={CARD_TYPES.info}
      title={t(medicines[medicine].name)}
      description={t(
        medicines[medicine].presentation,
        {joinArrays: '\n'}
      )}
      showViewMore={true}
      showMore={t('app_info.show_more')}
      />
  );

  return (
  <div>
    {medicinesList}
  </div>
  );
}

MedicinesList.propTypes = {
  medicines: PropTypes.object.isRequired
};

export default MedicinesList;
