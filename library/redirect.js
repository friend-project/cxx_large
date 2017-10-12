import cfg from '../config/domain';
export default async(ctx, next) => {
  const ua = ctx.headers['user-agent'];

  if (
    /AppleWebKit.*Mobile/i.test(ua) ||
    (
     /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(ua)
    )
  ) {
    const url = 'http://m.guwenming.org' + ctx.url;
    ctx.redirect(url);
  }

  await next();
};

