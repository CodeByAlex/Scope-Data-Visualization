import { DataBreachVisualizationPage } from './app.po';

describe('data-breach-visualization App', () => {
  let page: DataBreachVisualizationPage;

  beforeEach(() => {
    page = new DataBreachVisualizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
