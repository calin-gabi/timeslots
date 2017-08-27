import { timeslotsPage } from './app.po';

describe('timeslots App', () => {
  let page: timeslotsPage;

  beforeEach(() => {
    page = new timeslotsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
