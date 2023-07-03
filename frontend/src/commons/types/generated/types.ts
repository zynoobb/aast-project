export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type IArtist = {
  __typename?: 'Artist';
  amount?: Maybe<Scalars['Int']['output']>;
  defined?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  generation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type IArtistObj = {
  __typename?: 'ArtistObj';
  amount?: Maybe<Scalars['Int']['output']>;
  defined?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  per?: Maybe<Scalars['String']['output']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<Scalars['String']['output']>;
  saveResponse?: Maybe<IUser>;
};


export type IMutationCreateUserArgs = {
  nickname?: InputMaybe<Scalars['String']['input']>;
};


export type IMutationSaveResponseArgs = {
  saveResponseInput?: InputMaybe<ISaveResponseInput>;
};

export type IQuery = {
  __typename?: 'Query';
  authUser?: Maybe<Scalars['String']['output']>;
  fetchArtist?: Maybe<IArtist>;
  fetchArtistStatistics?: Maybe<Array<Maybe<IArtistObj>>>;
  fetchQuestions?: Maybe<Array<Maybe<IQuestion>>>;
  fetchUser?: Maybe<IUser>;
  getTotalUsers?: Maybe<Scalars['Int']['output']>;
};


export type IQueryFetchArtistArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchQuestionsArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type IQueryFetchUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IQuestion = {
  __typename?: 'Question';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type IUser = {
  __typename?: 'User';
  createAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  score_BR?: Maybe<Scalars['Int']['output']>;
  score_EI?: Maybe<Scalars['Int']['output']>;
  score_IR?: Maybe<Scalars['Int']['output']>;
};

export type ISaveResponseInput = {
  score?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};
