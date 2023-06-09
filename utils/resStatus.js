const ResStatus = {
  OK: {
    CODE: 200,
    MESSAGE: 'Запрос успешно выполнен',
    DEL_MOVIE_MESSAGE: 'Фильм удален',
    AUTH_MESSAGE: 'Авторизация прошла успешно!',
  },
  CREATED: {
    CODE: 201,
    MESSAGE: 'Объект успешно создан',
  },
  INVALID_DATA: {
    CODE: 400,
    MESSAGE: 'Данные введены некорректно',
  },
  UNAUTHORIZED: {
    CODE: 401,
    MESSAGE: 'Необходима авторизация',
    USER_MESSAGE: 'Пользователь не найден',
    PASSWORD_MESSAGE: 'Неправильные почта или пароль',
  },
  FORBIDDEN: {
    CODE: 403,
    MESSAGE: 'Доступ запрещен',
  },
  NOT_FOUND: {
    CODE: 404,
    USER_MESSAGE: 'Пользователь с таким ID не найден',
    MOVIE_MESSAGE: 'Фильм не найден',
    PAGE_MESSAGE: 'Страницы не существует',
  },
  CONFLICT: {
    CODE: 409,
    EMAIL_MESSAGE: 'Пользователь с таким email уже существует',
  },
  INTERNAL: {
    CODE: 500,
    MESSAGE: 'Произошла ошибка',
  },
};

module.exports = ResStatus;
