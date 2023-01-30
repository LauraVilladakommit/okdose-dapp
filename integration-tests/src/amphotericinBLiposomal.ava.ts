import  initContract  from './helpers/initContract';
import { test } from './helpers/initTest';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({path: join(__dirname, '../../', '.env')})

const CONTRACT_ACCOUNT = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT as string;
const BLOCK_ID = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT_BLOCK_ID as string;
const CONTRACT_METHOD = process.env.CONTRACT_METHOD as string;

initContract(CONTRACT_ACCOUNT, BLOCK_ID)

test('It returns the correct type attributes', async (t) => {
  const { contract } = t.context.accounts;
  const dose: any = await contract.view(CONTRACT_METHOD, { weight: 20, prescriptionType: "LCM2" });

  t.is(typeof dose.name, 'string');
  t.is(typeof dose.presentation, 'string');
  t.is(typeof dose.treatmentTime, 'string');
  t.is(typeof dose.weightDose[0], 'string');
  t.is(typeof dose.volumeDose[0], 'string');
  t.is(typeof dose.preparation, 'string');
  t.is(typeof dose.warning, 'string');
});
