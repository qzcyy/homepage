const Service = require('egg').Service;

class UserService extends Service{
  async create(name,permission="A001"){
    const ctx=this.ctx
    const user = await ctx.model.User.create({ name, permission });
  }
}
module.exports=UserService