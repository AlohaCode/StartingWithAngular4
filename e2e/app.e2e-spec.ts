import { Ng2ServicesPage } from './app.po';

describe('ng2-services App', function() {
  let page: Ng2ServicesPage;

  beforeEach(() => {
    page = new Ng2ServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
