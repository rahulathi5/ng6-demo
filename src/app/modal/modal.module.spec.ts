import { ModalDemoModule } from './modal.module';

describe('ModalDemoModule', () => {
  let modalModule: ModalDemoModule;

  beforeEach(() => {
    modalModule = new ModalDemoModule();
  });

  it('should create an instance', () => {
    expect(modalModule).toBeTruthy();
  });
});
