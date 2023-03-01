import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';
import MedicinesList from '../containers/MedicinesList';

describe('Test for MedicinesList container', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('MedicinesList container renders with English translations', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <MedicinesList selectedDisease={'Leishmaniasis'}/>,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.n_metil_glucamine.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.sodium_stibogluconate.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.pentamidine_isethionate.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.amphotericin_b_liposomal.name
      )
    ).toBeDefined();
  });

  test('MedicinesList container renders with Spanish translations', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <MedicinesList selectedDisease={'Leishmaniasis'}/>,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.n_metil_glucamine.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.sodium_stibogluconate.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.pentamidine_isethionate.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.amphotericin_b_liposomal.name
      )
    ).toBeDefined();
  });
});
