class ErrorRepository {
  static errors = new Map([
    [404, 'Not Found'],
    [200, 'OK'],
  ]);

  static translate = (errorCode) => {
    if (this.errors.has(errorCode)) {
      return this.errors.get(errorCode);
    }
    return 'Unknown error';
  };
}
// eslint-disable-next-line import/prefer-default-export
export { ErrorRepository };

// console.log(ErrorRepository.errors);
// console.log(ErrorRepository.translate(404));
// console.log(ErrorRepository.translate(200));
// console.log(ErrorRepository.translate(900));
