export type MenuItem = {
  filePath: string;
  itemKey: string;
  content: string;
  data: {
    [key: string]: string;
  };
};

export type ItemQtyMap = {
  [itemKey: string]: number | undefined;
};
