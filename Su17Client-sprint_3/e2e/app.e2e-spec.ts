import { Su17ClientPage } from './app.po';

describe('su17-client App', () => {
  let page: Su17ClientPage;

  beforeEach(() => {
    page = new Su17ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
