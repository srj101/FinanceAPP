import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

export const downloadJSON = async (data) => {
  const { movements, worths } = data;

  const budgetData = movements.map((movement) => {
    const { estimatedBudgets, actualBudgets } = movement;
    const { month, year } = movement;

    const estimatedBudgetsData = estimatedBudgets.map((budget) => {
      const { amount, category, date, type, notes } = budget;

      const name = category.name;

      return {
        amount,
        name,
        date,
        type,
        notes,
        month,
      };
    });

    const actualBudgetsData = actualBudgets.map((budget) => {
      const { amount, category, date, type, notes } = budget;

      const name = category.name;

      return {
        amount,
        name,
        date,
        type,
        notes,
        month,
      };
    });

    return {
      estimatedBudgetsData,
      actualBudgetsData,
    };
  });

  const worthData = worths.map((worth) => {
    const { month, assets, liabilities } = worth;

    const assetsData = assets.map((asset) => {
      const { amount, category, type } = asset;

      const name = category.name;

      return {
        amount,
        name,
        month,
        type,
      };
    });

    const liabilitiesData = liabilities.map((liability) => {
      const { amount, category, type } = liability;

      const name = category.name;

      return {
        amount,
        name,
        month,
        type,
      };
    });

    return {
      assetsData,
      liabilitiesData,
    };
  });

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

  const budgetDataCSV = budgetData.map((data) => {
    const { estimatedBudgetsData, actualBudgetsData } = data;

    const estimatedBudgetsDataCSV = estimatedBudgetsData.map((data) => {
      const { amount, name, date, type, notes, month } = data;

      return {
        amount,
        name,
        date,
        type,
        notes,
        month,
      };
    });

    const actualBudgetsDataCSV = actualBudgetsData.map((data) => {
      const { amount, name, date, type, notes, month } = data;

      return {
        amount,
        name,
        date,
        type,
        notes,
        month,
      };
    });

    return {
      estimatedBudgetsDataCSV,
      actualBudgetsDataCSV,
    };
  });

  const worthDataCSV = worthData.map((data) => {
    const { assetsData, liabilitiesData } = data;

    const assetsDataCSV = assetsData.map((data) => {
      const { amount, name, month, type } = data;

      return {
        amount,
        name,
        month,
        type,
      };
    });

    const liabilitiesDataCSV = liabilitiesData.map((data) => {
      const { amount, name, month, type } = data;

      return {
        amount,
        name,
        month,
        type,
      };
    });

    return {
      assetsDataCSV,
      liabilitiesDataCSV,
    };
  });

  // construct the csv string

  // budget data

  let csv = "";

  // Add Heading

  csv += "Budget Data\n\n";

  csv += "Estimated Budgets\n\n";

  // Add Estimated Budgets columns

  csv += "Amount,Name,Date,Type,Notes,Month\n";

  budgetDataCSV.forEach((data) => {
    const { estimatedBudgetsDataCSV } = data;

    estimatedBudgetsDataCSV.forEach((data) => {
      const { amount, name, date, type, notes, month } = data;

      csv += `${amount},${name},${date},${type},${notes},${month}\n`;
    });
  });

  csv += "\n\n";

  csv += "Actual Budgets\n\n";

  // Add Actual Budgets columns

  csv += "Amount,Name,Date,Type,Notes,Month\n";

  budgetDataCSV.forEach((data) => {
    const { actualBudgetsDataCSV } = data;

    actualBudgetsDataCSV.forEach((data) => {
      const { amount, name, date, type, notes, month } = data;

      csv += `${amount},${name},${date},${type},${notes},${month}\n`;
    });
  });

  csv += "\n\n";

  // worth data

  csv += "Net Worth Data\n\n";

  csv += "Assets\n\n";

  // Add Assets columns

  csv += "Amount,Name,Month,Type\n";

  worthDataCSV.forEach((data) => {
    const { assetsDataCSV } = data;

    assetsDataCSV.forEach((data) => {
      const { amount, name, month, type } = data;

      csv += `${amount},${name},${month},${type}\n`;
    });
  });

  csv += "\n\n";

  csv += "Liabilities\n\n";

  // Add Liabilities columns

  csv += "Amount,Name,Month,Type\n";

  worthDataCSV.forEach((data) => {
    const { liabilitiesDataCSV } = data;

    liabilitiesDataCSV.forEach((data) => {
      const { amount, name, month, type } = data;

      csv += `${amount},${name},${month},${type}\n`;
    });
  });

  return csv;
};

const getDocumentDirectory = async () => {
  const documentDirectory = FileSystem.documentDirectory;
  console.log(documentDirectory);
};

export const NumberFormat = (
  amount = 0,
  currency = "EUR",
  exchangeRate = 1,
  decimalEnabled = false
) => {
  if (decimalEnabled) {
    return `${(amount * exchangeRate)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ${currency}`;
  } else {
    return `${(amount * exchangeRate)
      .toFixed(0)
      .replace(/\d(?=(\d{3})+$)/g, "$&,")} ${currency}`;
  }
};
