export const downloadJSON = async (data) => {
  const { movements, worths } = data;
  console.log(movements);
  console.log(worths);

  const json = JSON.stringify({ movements, worths });

  const blob = new Blob([json], { type: "application/json" });

  const href = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = href;

  link.download = "data.json";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(href);
};
