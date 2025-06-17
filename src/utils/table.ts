export const getTableHeads = (data: any) => {
  let heads = [];

  for (const d in data[0]) {
    heads.push(d);
  }

  return heads;
};

export const getTableRows = (data: any) => {
  return data.map((row: any) => {
    let rowData = [];
    for (const [, value] of Object.entries(row)) {
      rowData.push(value);
    }

    return rowData;
  });
};
