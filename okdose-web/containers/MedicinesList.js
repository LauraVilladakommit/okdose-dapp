import {t} from 'i18next';
import {transmissionTypes} from '../../okdose/app';
import PropTypes from 'prop-types';
import DisplayCardInformation from 'components/common/DisplayCardInformation';
import {CARD_TYPES} from '../constants';

function MedicinesList ({selectedDisease}) {
  const medicinesList = Object.keys(transmissionTypes).map((medium) =>
    Object.keys(transmissionTypes[medium].diseases).map(
      (disease) =>
        disease.toLowerCase() === selectedDisease.toLowerCase() &&
        Object.keys(transmissionTypes[medium].diseases[disease].medicines).map(
          (medicine, index) => (
            <DisplayCardInformation
              key={index}
              type={CARD_TYPES.info}
              title={t(
                transmissionTypes[medium].diseases[disease].medicines[medicine]
                  .name
              )}
              description={t(
                transmissionTypes[medium].diseases[disease].medicines[medicine]
                  .presentation,
                {joinArrays: '\n'}
              )}
              showViewMore={true}
              showMore={t('app_info.show_more')}
            />
          )
        )
    )
  );

  return (
  <div>
    {medicinesList}
  </div>
  );
}

MedicinesList.propTypes = {
  selectedDisease: PropTypes.string.isRequired
};

export default MedicinesList;
