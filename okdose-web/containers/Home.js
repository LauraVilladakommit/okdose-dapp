import {useEffect, useState} from 'react';
import {t} from 'i18next';
import Welcome from '../components/Welcome';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import DropdownMenu from '../components/DropdownMenu';
import MainHomeInfo from './MainHomeInfo';
import {HEADER_TYPES, WEIGHT_RANGE} from '../constants';

function Home () {
  const [loadWelcome, setLoadWelcome] = useState(true);
  const [disease, setDisease] = useState(t('app_info.card_selection_title'));
  const [medicinesList, setMedicinesList] = useState({});
  const [disable, setDisable] = useState(true);
  const [weight, setWeight] = useState(WEIGHT_RANGE.minBound);

  useEffect(() => {
    setTimeout(() => {
      setLoadWelcome(false);
    }, 2000);
  }, []);

  return (
    <div className='items-center sm:bg-no-repeat sm:bg-home-background-medium lg:bg-cover'>
      {loadWelcome && <Welcome />}
      <header className='mb-16'>
        <Header type={HEADER_TYPES.home} />
      </header>
      <div className='mt-5 mb-16 w-full flex flex-col md:flex-row md:justify-center'>
        <aside className='h-1/2 px-5 2md:pt-10 lg:pt-24'>
          <p className='mb-2 p-5 text-dark-gray text-center'>
            {t('app_info.dropdown_description')}
          </p>
          <DropdownMenu selectedDisease={setDisease} inputStatus={setDisable} setMedicines={setMedicinesList} />
        </aside>
        <main>
          <div className='hidden 2md:block md:px-10 md:pt-16 md:pb-5 lg:pt-28'>
            <MainHomeInfo
              disease={disease}
              weight={weight}
              updateWeight={setWeight}
              inputStatus={disable}
              medicines={medicinesList}
            />
          </div>
        </main>
      </div>
      <footer className='m-auto px-5 max-w-sm'>
        <Footer showExtraInfo={true} />
      </footer>
    </div>
  );
}

export default Home;
