// Menu
export type MenuItem = {
  filePath: string;
  itemKey: string;
  content: string;
  data: {
    [key: string]: string;
  };
};

export type MenuItemsByCategory = {
  [key: string]: MenuItem[];
};

export type ItemQtyMap = {
  [itemKey: string]: number | undefined;
};

// Staff
export type StaffBio = {
  filePath: string;
  itemKey: string;
  content: string;
  data: {
    jobTitle: string;
    headshot: string;
    [key: string]: string;
  };
};
