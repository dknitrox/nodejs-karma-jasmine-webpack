import { AppComponent } from './../src/app/app.component';
describe('Testing message state in message.component', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should set new message', () => {
    app.setMessage('Testing');
    expect(app.message).toBe('Testingxxx');
  });

  it('should clear message', () => {
    app.clearMessage();
    expect(app.message).toBe('');
  });
});