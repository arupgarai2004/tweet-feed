import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const hashtagPattern = /(^|\s)(#[a-z\d-]+)/ig;
    const mentionPattern = /(^|\s)(@[a-z\d-]+)/ig;

    return value
      .replace(urlPattern, '<a href="$1" target="_blank">$1</a>')
      .replace(hashtagPattern, '$1<a href="https://twitter.com/hashtag/$2" target="_blank">$2</a>')
      .replace(mentionPattern, '$1<a href="https://twitter.com/$2" target="_blank">$2</a>');

  }

}
