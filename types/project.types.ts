export type Project = {
  _id: number;
  name: string;
  desc: string;
  file: string;
  fileName?: string;
};

export type ProjectGetRequestParams = {
  id: number;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  file: File | null;
  fileName: string;
};
