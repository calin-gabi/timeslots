import { TimeslotsPage } from './app.po';

describe('timeslots App', () => {
  let page: TimeslotsPage;

  beforeEach(() => {
    page = new TimeslotsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
