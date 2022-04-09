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

type Author = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
};

type Specialization = {
  id: number;
  name: string;
  number: string;
};

type Course = {
  id: number;
  name: string;
  education_year: string;
};
type Specialitie = {
  id: number;
  name: string;
  number: string;
};

type File = {
  name: string;
  location: string;
  type: string;
};
