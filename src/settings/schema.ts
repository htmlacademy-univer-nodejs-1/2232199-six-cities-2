import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type SettingsSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
  UPLOAD_DIRECTORY: string;
  JWT_SECRET: string;
  HOST: string;
  STATIC_DIRECTORY_PATH: string;
}

export const settingsSchema = convict<SettingsSchema>({
  PORT: {
    doc: 'Номер порта, на котором приложение ожидает подключений',
    format: 'port',
    env: 'PORT',
    default: 4055
  },
  SALT: {
    doc: 'Соль',
    format: String,
    env: 'SALT',
    default: '0'
  },
  DB_HOST: {
    doc: 'Адрес сервера баз данных',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: '127.0.0.1'
  },
  DB_USER: {
    doc: 'Имя пользователя для подключения к базе данных',
    format: String,
    env: 'DB_USER',
    default: null,
  },
  DB_PASSWORD: {
    doc: 'Пароль для подключения к базе данных',
    format: String,
    env: 'DB_PASSWORD',
    default: null,
  },
  DB_PORT: {
    doc: 'Порт для подключения к базе данных',
    format: 'port',
    env: 'DB_PORT',
    default: '27017',
  },
  DB_NAME: {
    doc: 'Имя базы данных',
    format: String,
    env: 'DB_NAME',
    default: 'db'
  },
  UPLOAD_DIRECTORY: {
    doc: 'Папка для загрузки файлов',
    format: String,
    env: 'UPLOAD_DIRECTORY',
    default: null
  },
  JWT_SECRET: {
    doc: 'Секрет для подписи JWT',
    format: String,
    env: 'JWT_SECRET',
    default: null
  },
  HOST: {
    doc: 'Хост для старта сервиса',
    format: String,
    env: 'HOST',
    default: 'localhost'
  },
  STATIC_DIRECTORY_PATH: {
    doc: 'Путь к директории со статическими ресурсами',
    format: String,
    env: 'STATIC_DIRECTORY_PATH',
    default: 'static'
  },
});
