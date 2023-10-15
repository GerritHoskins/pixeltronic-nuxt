export type Project = {
  _id: string;
  name: string;
  desc: string;
  file: string;
  fileName?: string;
};

export type ProjectGetRequestParams = {
  id: string;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  file: File | null;
  fileName: string;
};
