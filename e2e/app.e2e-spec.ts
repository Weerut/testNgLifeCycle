import { LifeCycleTestPage } from './app.po';

describe('life-cycle-test App', () => {
  let page: LifeCycleTestPage;

  beforeEach(() => {
    page = new LifeCycleTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
