import * as Leishmaniasis from '../../transmission-types/transmitted-by-vectors/leishmaniasis';
import NearInterface from '../../../okdose-web/near/nearInterface';
import {Wallet} from '../../../okdose-web/near/nearWallet';
import * as dotenv from 'dotenv';
import {join} from 'path';
dotenv.config({path: join(__dirname, '../../../', '.env')});

describe('Leishmaniasis smart contract prescription response check', () => {
  const wallet = new Wallet({createAccessKeyFor: process.env.MAIN_ACCOUNT});
  let nearInterface;
  const weight = 100;

  beforeEach(async () => {
    await wallet.startUp();
    nearInterface = new NearInterface({walletToUse: wallet});
  });

  test('It returns the correct properties for N-Metil Glucamine', async () => {
    const dose = await Leishmaniasis.leishmaniasisMedicines.nMetilGlucamine.prescription(
      nearInterface,
      {weight}
    );

    expect(typeof Leishmaniasis.leishmaniasisMedicines.nMetilGlucamine.prescription).toBe('function');
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
  });

  test('It returns the correct properties for Sodium Stibogluconato', async () => {
    const dose = await Leishmaniasis.leishmaniasisMedicines.sodiumStibogluconate.prescription(
      nearInterface,
      weight
    );

    expect(typeof Leishmaniasis.leishmaniasisMedicines.sodiumStibogluconate.prescription).toBe('function');
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
  });

  test('It returns the correct properties for Pentamidine Isethionate', async () => {
    const dose = await Leishmaniasis.leishmaniasisMedicines.pentamidineIsethionate.prescription(
      nearInterface,
      weight
    );

    expect(typeof Leishmaniasis.leishmaniasisMedicines.pentamidineIsethionate.prescription).toBe(
      'function'
    );
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.via).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.preparation).toBeDefined();
  });

  test('It returns the correct properties for Miltefosine', async () => {
    const dose = await Leishmaniasis.leishmaniasisMedicines.miltefosine.prescription(
      nearInterface,
      weight
    );

    expect(typeof Leishmaniasis.leishmaniasisMedicines.miltefosine.prescription).toBe('function');
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.frequency).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.note).toBeDefined();
  });

  test('It returns the correct properties for Amphotericin B Liposomal', async () => {
    const dose = await Leishmaniasis.leishmaniasisMedicines.amphotericinBliposomal.prescription(
      nearInterface,
      weight,
      'LCM2'
    );

    expect(typeof Leishmaniasis.leishmaniasisMedicines.amphotericinBliposomal.prescription).toBe(
      'function'
    );
    expect(dose.name).toBeDefined();
    expect(dose.presentation).toBeDefined();
    expect(dose.weightDose).toBeDefined();
    expect(dose.volumeDose).toBeDefined();
    expect(dose.treatmentTime).toBeDefined();
    expect(dose.warning).toBeDefined();
    expect(dose.preparation).toBeDefined();
  });
});
