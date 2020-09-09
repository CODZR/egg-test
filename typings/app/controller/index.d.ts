// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportPages = require('../../../app/controller/pages');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    pages: ExportPages;
  }
}
