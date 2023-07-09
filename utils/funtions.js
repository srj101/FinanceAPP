import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import moment from "moment";

export const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

export const downloadJSON = async (data) => {
  const { actualMovements, estimatedMovements, assetWorths, liabilityWorths } =
    data;

  console.log("actualMovements", actualMovements.length);
  console.log("estimatedMovements", estimatedMovements.length);
  console.log("assetWorths", assetWorths.length);
  console.log("liabilityWorths", liabilityWorths.length);

  //
  const budgetData = {
    actualMovements,
    estimatedMovements,
  };

  const worthData = {
    assetWorths,
    liabilityWorths,
  };

  const json = JSON.stringify({ budgetData, worthData });

  // create csv file

  const csv = await convertToCSVFunc(json);

  // create file
  // Save the CSV file
  const downloadsDirectory = FileSystem.documentDirectory + "downloads/";
  const fileUri = downloadsDirectory + "data.csv";

  await FileSystem.makeDirectoryAsync(downloadsDirectory, {
    intermediates: true,
  });

  await FileSystem.writeAsStringAsync(fileUri, csv, {
    encoding: FileSystem.EncodingType.UTF8,
  });

  // Share the file
  await Sharing.shareAsync(fileUri, {
    mimeType: "text/csv",
    dialogTitle: "Save CSV",
  });

  return fileUri;
};

const convertToCSVFunc = async (jsonData) => {
  const json = JSON.parse(jsonData);

  const { budgetData, worthData } = json;

  const { actualMovements, estimatedMovements } = budgetData;

  const { assetWorths, liabilityWorths } = worthData;

  console.log("actualMovements", actualMovements[0]);

  const actualMovementsCSV = actualMovements.map((item) => {
    const { id, month, data } = item;

    const movement = data.map((item) => {
      const {
        amount,
        category: { name },
        date,
        notes,
        type,
      } = item;

      return {
        id,
        month,
        amount,
        category: name,
        date: moment(date).format("DD/MM/YYYY"),
        notes,
        type,
      };
    });

    return movement;
  });

  const estimatedMovementsCSV = estimatedMovements.map((item) => {
    const { id, month, data } = item;

    const movement = data.map((item) => {
      const {
        amount,
        category: { name },
        date,
        notes,
        type,
      } = item;

      return {
        id,
        month,
        amount,
        category: name,
        date: moment(date).format("DD/MM/YYYY"),
        notes,
        type,
      };
    });

    return movement;
  });

  const assetWorthsCSV = assetWorths.map((item) => {
    const { id, month, data } = item;

    const asset = data.map((item) => {
      const {
        amount,
        category: { name },
        date,
        notes,
        type,
      } = item;

      return {
        id,
        month,
        amount,
        category: name,
        date: moment(date).format("DD/MM/YYYY"),
        notes,
        type,
      };
    });

    return asset;
  });

  const liabilityWorthsCSV = liabilityWorths.map((item) => {
    const { id, month, data } = item;

    const liability = data.map((item) => {
      const {
        amount,
        category: { name },
        date,
        notes,
        type,
      } = item;

      return {
        id,
        month,
        amount,
        category: name,
        date: moment(date).format("DD/MM/YYYY"),
        notes,
        type,
      };
    });

    return liability;
  });

  // lets construct the csv string

  let csvString = "";

  // add the headers
  csvString += "Actual Movements\n";
  csvString += "ID,Month,Amount,Category,Date,Notes,Type\n";

  // add the data
  actualMovementsCSV.forEach((item) => {
    item.forEach((movement) => {
      csvString += `${movement.id},${movement.month},${movement.amount},${movement.category},${movement.date},${movement.notes},${movement.type}\n`;
    });
  });

  // add the headers
  csvString += "\n\nEstimated Movements\n";
  csvString += "ID,Month,Amount,Category,Date,Notes,Type\n";

  // add the data
  estimatedMovementsCSV.forEach((item) => {
    item.forEach((movement) => {
      csvString += `${movement.id},${movement.month},${movement.amount},${movement.category},${movement.date},${movement.notes},${movement.type}\n`;
    });
  });

  // add the headers
  csvString += "\n\nAssets\n";

  csvString += "ID,Month,Amount,Category,Date,Notes,Type\n";

  // add the data
  assetWorthsCSV.forEach((item) => {
    item.forEach((movement) => {
      csvString += `${movement.id},${movement.month},${movement.amount},${movement.category},${movement.date},${movement.notes},${movement.type}\n`;
    });
  });

  // add the headers
  csvString += "\n\nLiabilities\n";

  csvString += "ID,Month,Amount,Category,Date,Notes,Type\n";

  // add the data
  liabilityWorthsCSV.forEach((item) => {
    item.forEach((movement) => {
      csvString += `${movement.id},${movement.month},${movement.amount},${movement.category},${movement.date},${movement.notes},${movement.type}\n`;
    });
  });

  return csvString;
};

const getDocumentDirectory = async () => {
  const documentDirectory = FileSystem.documentDirectory;
  console.log(documentDirectory);
};

export const NumberFormat = (
  amount = 0,
  currency = "€",
  exchangeRate = 1.0,
  decimalEnabled = false
) => {
  if (!amount) {
    if (decimalEnabled) {
      return `0.00 ${currency}`;
    } else {
      return `0 ${currency}`;
    }
  }
  if (decimalEnabled) {
    return `${amount
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ${currency}`; // 12,345.67
  } else {
    return `${parseInt(amount)} ${currency}`; // 12,345
  }
};

/**
 * replaces /$#d\+/ symbol with actual symbols in the given string
 *
 * Returns given string with symbol code replaced with actual symbol
 *
 * @param {string} name
 */
export function convertSymbolsFromCode(name = "") {
  let final = null;
  if (name) {
    const val = name.match(/&#\d+;/) ? name.match(/&#\d+;/)[0] : false; // need to check whether it is an actual symbol code
    if (val) {
      const num = val.match(/\d+;/) ? val.match(/\d+;/)[0] : false; // if symbol, then get numeric code
      if (num) {
        final = num.replace(/;/g, "");
      }
    }
    if (final) {
      name = name.replace(/&#\d+;/g, String.fromCharCode(final));
    }
  }
  return name;
}
