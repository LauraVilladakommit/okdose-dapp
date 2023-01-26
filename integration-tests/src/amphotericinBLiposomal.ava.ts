import { NearAccount, Worker } from 'near-workspaces';
import anyTest, { TestFn } from 'ava';

const CONTRACT_ACCOUNT = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT;

const BLOCK_ID = process.env.AMPHOTERICINBLIPOSOMAL_CONTRACT_BLOCK_ID;

const test = anyTest as TestFn<{
  worker: Worker;
  accounts: Record<string, NearAccount>;
}>;

test.beforeEach(async (t) => {
  // Init the worker and start a Sandbox server
  const worker = await Worker.init();

  // Deploy contract
  const root = worker.rootAccount;

  const contract = await root.importContract({
    testnetContract: CONTRACT_ACCOUNT,
    blockId: BLOCK_ID,
    withData: false,
  });

  // Save state for test runs, it is unique for each test
  t.context.worker = worker;
  t.context.accounts = {root, contract };
});

test.afterEach.always(async (t) => {
  await t.context.worker.tearDown().catch(error => {
    console.log('Failed to tear down the worker:', error);
  });
});

test('It returns the correct type attributes', async (t) => {
  const { contract } = t.context.accounts;
  const dose: any = await contract.view('get_dose', { weight: 20, prescriptionType: "LCM2" });

  t.is(typeof dose.name, 'string');
  t.is(typeof dose.presentation, 'string');
  t.is(typeof dose.weightDose[0], 'string');
  t.is(typeof dose.volumeDose[0],'string');
  t.is(typeof dose.treatmentTime, 'string');
  t.is(typeof dose.preparation, 'string');
  t.is(typeof dose.warning, 'string');
});
