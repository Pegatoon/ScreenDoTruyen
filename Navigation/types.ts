// navigation/types.ts
export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Main: undefined;
  DetailComic: {
    user: {
      id: string;
      username: string;
    };
    comic: {
      id: string;
      title: string;
      image: any;
    };
  };
  ReadChapter: {
    comicId: string;
    comicTitle: string;
  };
  Account: undefined;
  Bookshelf: undefined;
  ChapterSelect: undefined;
  Profile: undefined;
  Search: undefined;
};
  