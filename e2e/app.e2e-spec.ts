import { MakeITPage } from './app.po';

describe('make-it App', () => {
  let page: MakeITPage;

  beforeEach(() => {
    page = new MakeITPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
