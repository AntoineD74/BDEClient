import { BDEClientPage } from './app.po';

describe('bdeclient App', () => {
  let page: BDEClientPage;

  beforeEach(() => {
    page = new BDEClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
