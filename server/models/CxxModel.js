import 'isomorphic-fetch';
import cfg from './../../config/domain';

const CxxModel = {};

CxxModel.bannerList = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`${cfg.api}/api/bannerList`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.muralList = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`${cfg.api}/api/muralList`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.exhibitionList = async (ctx, next) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`${cfg.api}/api/exhibitionList`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.exhibitionDetail = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`${cfg.api}/api/exhibitionDetail/${opt.id}`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.generalDetail = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`${cfg.api}/api/generalDetail/${opt.id}`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

export default CxxModel;
