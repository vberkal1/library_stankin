export type PublicResponse = {
  data: {
    totalCount: number;
    currentCount: number;
    publications: Array<PublicCard>;
  };
};

export type PublicCard = {
  id: string;
  title: string;
  specializationName: string;
  specializationNumber: string;
  createDate: string;
  editDate: string;
  author: Author;
};

type Author = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
};

export type PublicRequestParams = {
  limit: number;
  offset: number;
};
