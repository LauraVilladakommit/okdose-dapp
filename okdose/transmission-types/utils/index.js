/**
 * Gets the translation keys and dosage of the smart contracts.
 * @param {NearInterface} nearInterface Class that allows the connection to a near wallet.
 * In the params is set the weight and prescriptionType if apply:
 * @param {number} weight Patient's weight in kg to one decimal point
 * @param {string} prescriptionType Just for Amphotericin B Liposomal.
 * Type of prescription based on disease can be any of the following:
 * LCM2, LCM3, LV3, LV4, where L = Leishmaniasis, C = Cutaneous, M = Mucocutaneous, V = Visceral
 * and 2, 3, 4 are the concentration in mg/kg/day.
 * @returns {Prescription} It is an object with the translation keys and the prescribed dosage.
 */

const getPrescription = async (
  nearInterface,
  contractName,
  contractMethod,
  params = {}
) => nearInterface.viewMethod(contractName, contractMethod, params);

export {getPrescription};
