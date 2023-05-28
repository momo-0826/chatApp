export interface randomUsersTypes {
  resultCount?: number;
  results: Result[];
}

export interface Result {
  name: {
    first: string;
    last: string;
    title: string;
  };
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  location: {
    city: string;
    country: string;
  };
  email: string;
  login: string;
  dob: {
    age: string;
    date: string;
  };
  registered: {
    age: string;
    date: string;
  };
  phone: string;
  nat: string;
}
