import { LaravelPage } from './app.po';

describe('laravel App', function() {
  let page: LaravelPage;

  beforeEach(() => {
    page = new LaravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
