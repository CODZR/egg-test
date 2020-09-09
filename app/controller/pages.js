'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await app.mysql.select('page');
    ctx.body = result;
  }
  async show() {
    const { ctx, app } = this;
    const pageId = ctx.params.id;
    const result = await app.mysql.get('page', { page_id: pageId });
    ctx.body = result;
    return result;
  }
  async create() {
    const { ctx, app } = this;
    const data = ctx.request.body;

    console.log(ctx);
    console.log(ctx.request.body);
    console.log(ctx.request.query);
    const row = {
      page_id: data.page_id,
      page_str: data.page_str,
    };
    const result = await app.mysql.insert('page', row);
    ctx.body = result;
    return row;
  }
  async update() {
    const { ctx, app } = this;
    console.log(ctx.request.body);
    ctx.body = 'put';
  }
  async destroy() {
    const { ctx, app } = this;
    const pageId = ctx.params.id;
    const result = await app.mysql.delete('page', { page_id: pageId });
    ctx.body = result;
    return result;
  }
}

module.exports = HomeController;
