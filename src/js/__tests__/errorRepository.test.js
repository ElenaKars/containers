import ErrorRepository from '../ErrorRepository.js';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Page not found');
    errorRepo.addError(500, 'Internal server error');
  })

  describe('translate', () => {
    it('should return the correct error message for a known code', () => {
      expect(errorRepo.translate(404)).toBe('Page not found');
      expect(errorRepo.translate(500)).toBe('Internal server error');
    });

    it('should return "Unknown Error" for an unknown code', () => {
      expect(errorRepo.translate(403)).toBe('Unknown Error');
    });
  });
})