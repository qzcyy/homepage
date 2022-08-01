const Controller = require('egg').Controller;

class UserController extends Controller{
  async create(){
    const ctx = this.ctx;
    const name = ctx.query.name;
    const permission = ctx.query.permission;
    if(!name){
      ctx.status=400
      ctx.body='name is required'
    }else {
      await ctx.service.user.create(name,permission)
      ctx.status=200
      ctx.body='success'
    }
  }
}
module.exports = UserController;
