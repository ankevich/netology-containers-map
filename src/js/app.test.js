import { ErrorRepository } from "./app";

test("функция возвращает текст ошибки по коду", () => {
  const expected = "Not Found";
  const result = ErrorRepository.translate(404);

  expect(result).toEqual(expected);
});

test("функция возвращает Unknown error если код ошибки не существует", () => {
  const expected = "Unknown error";
  const result = ErrorRepository.translate(900);
  expect(result).toEqual(expected);
});
