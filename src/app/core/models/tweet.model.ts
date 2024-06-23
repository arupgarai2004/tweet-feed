// tweet.model.ts
export interface Tweet {
  [x: string]: unknown;
  id: string |number;
  text: string;
  user: User;
  retweeted_status?: Retweet;

}

// user.model.ts
export interface User {
  id: string;
  name: string;
  screen_name: string;
  profile_image_url:string;
  profile_image_url_https:string
}

// retweet.model.ts
export interface Retweet extends Tweet {
  originalTweetId: string;
}
