import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';
import MainHomeInfo from '../containers/MainHomeInfo';

describe('Test for MainHomeInfo container', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
  }))
  const setWeight = jest.fn()

  describe('MainHomeInfo only renders the CardInputWeight when disease is not selected',()=>{
    const disable = true;

    test('It renders correctly English translations', () => {
      i18n.changeLanguage('en');
      render(
        <I18nextProvider i18n={i18n}>
          <MainHomeInfo
            disease={'Selection'}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
        </I18nextProvider>
      );
      expect(
        screen.getByText(
          i18n.getDataByLanguage('en').translation.app_info.card_selection_title
        )
      ).toBeDefined();
      expect(
        screen.getByText(
          i18n.getDataByLanguage('en').translation.app_info.card_category_title
        )
      ).toBeDefined();
      expect(
        screen.queryByText(
          i18n.getDataByLanguage('en').translation.app_info.show_more
        )
      ).not.toBeInTheDocument();
    })

    test('It renders correctly Spanish translations', () => {
      i18n.changeLanguage('es');
      render(
        <I18nextProvider i18n={i18n}>
          <MainHomeInfo
            disease={'Selección'}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
        </I18nextProvider>
      );
      expect(
        screen.getByText(
          i18n.getDataByLanguage('es').translation.app_info.card_selection_title
        )
      ).toBeDefined();
      expect(
        screen.getByText(
          i18n.getDataByLanguage('es').translation.app_info.card_category_title
        )
      ).toBeDefined();
      expect(
        screen.queryByText(
          i18n.getDataByLanguage('es').translation.app_info.show_more
        )
      ).not.toBeInTheDocument();
    })

    test('The input is disabled', () => {
      render(
          <MainHomeInfo
            disease={'Selección'}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
      );
      expect(screen.getByLabelText('weight-input')).toBeDisabled()
    })
  });

  describe('MainHomeInfo renders the CardInputWeight and MedicinesList components when disease is selected',()=>{
    const disable = false;

    test('It renders correctly English translations', () => {
      const disease = 'Leishmaniasis';

      i18n.changeLanguage('en');
      const { getAllByText } = render(
        <I18nextProvider i18n={i18n}>
          <MainHomeInfo
            disease={disease}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
        </I18nextProvider>
      );
      expect(
        screen.getByText(
          i18n.getDataByLanguage('en').translation.app_info.card_category_title
        )
      ).toBeDefined();
      expect(
        screen.getByText(
          i18n.getDataByLanguage('en').translation.leishmaniasis.name
        )
      ).toBeDefined();
      const items = getAllByText('Show more');
      const firstItem = items[0];

      expect(firstItem).toBeInTheDocument();
    })

    test('It renders correctly Spanish translations', () => {
      const disease = 'Leishmaniasis';

      i18n.changeLanguage('es');
      const { getAllByText } = render(
        <I18nextProvider i18n={i18n}>
          <MainHomeInfo
            disease={disease}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
        </I18nextProvider>
      );
      expect(
        screen.getByText(
          i18n.getDataByLanguage('es').translation.app_info.card_category_title
        )
      ).toBeDefined();
      expect(
        screen.getByText(
          i18n.getDataByLanguage('es').translation.leishmaniasis.name
        )
      ).toBeDefined();
      const items = getAllByText('Ver más');
      const firstItem = items[0];

      expect(firstItem).toBeInTheDocument();
    })

    test('The input is enabled', () => {
      const disease = 'Leishmaniasis';
      render(
          <MainHomeInfo
            disease={disease}
            weight={50}
            updateWeight={setWeight}
            inputStatus={disable}
          />
      );
      expect(screen.getByLabelText('weight-input')).toBeEnabled()
    })
  });
});
