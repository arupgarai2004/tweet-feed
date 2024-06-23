
import { LinkifyPipe } from './linkify.pipe';

describe('LinkifyPipe', () => {
  let pipe: LinkifyPipe;
  beforeEach(() => {
    pipe = new LinkifyPipe();
  });

  it('create an instance', () => {
    const pipe = new LinkifyPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms URLs into anchor tags', () => {
    const value = 'Check this link: https://abc.com';
    const result = pipe.transform(value);
    expect(result).toBe('Check this link: <a href="https://abc.com" target="_blank">https://abc.com</a>');
  });

  it('returns the original string when there are no URLs, hashtags, or mentions', () => {
    const value = 'Just a plain text.';
    const result = pipe.transform(value);
    expect(result).toBe('Just a plain text.');
  });
   

});
