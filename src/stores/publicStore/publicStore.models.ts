export type PublicResponse = {
  data: {
    totalCount: number;
    currentCount: number;
    publications: Array<PublicCard>;
  };
};

export type CoursesResponse = {
  data: {
    courses: Array<Course>;
  };
};
export type SpecialitiesResponse = {
  data: {
    specialities: Array<Specialitie>;
  };
};
export type AuthorsResponse = {
  data: {
    authors: Array<Author>;
  };
};

export type PublicCard = {
  id: string;
  title: string;
  content: string;
  author: Author;
  specializations: Array<Specialization>;
  courses: Array<Course>;
  files: Array<File>;
  createDate: string;
  editDate: string;
};

export type PublicRequestParams = {
  limit: number;
  offset: number;
  courses?: string;
  specialities?: string;
  authors?: string;
};

export type DetailedCard = {
  data: {
    id: string;
    title: string;
    content: string;
    createDate: string;
    editDate: string;
    author: Author;
    specializations: Array<Specialization>;
    courses: Array<Course>;
    files: Array<File>;
  };
};

export type Author = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  name: string;
};

export type Specialization = {
  id: number;
  name: string;
  number: string;
};

export type Course = {
  id: number;
  name: string;
  education_year: string;
};
export type Specialitie = {
  id: number;
  name: string;
  number: string;
};

type File = {
  name: string;
  location: string;
  type: string;
};
