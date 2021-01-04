import { Twitter } from './twitter';

const twitter = new Twitter();

export function startTwitter(calback) {
    twitter.setTWid('1266954523081183232');
    twitter.setListener(calback);
    twitter.start();
}

export function getLastPost(calback){
    twitter.getPostlast();
}