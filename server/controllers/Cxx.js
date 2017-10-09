import CxxModel from './../models/CxxModel';

const Cxx = {};

Cxx.bannerList = async (ctx, next) => {
    try {
        ctx.body = await CxxModel.bannerList(ctx, next);
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

Cxx.muralList = async (ctx, next) => {
    try {
        ctx.body = await CxxModel.muralList(ctx, next);
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

Cxx.exhibitionList = async (ctx, next) => {
    try {
        ctx.body = await CxxModel.exhibitionList(ctx, next);
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

Cxx.exhibitionDetail = async (ctx, next) => {
    try {
        const opt = {
            id: ctx.params.id,
        };
        ctx.body = await CxxModel.exhibitionDetail(ctx, next, opt);
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

Cxx.generalDetail = async (ctx, next) => {
    try {
        const opt = {
            id: ctx.params.id,
        };
        ctx.body = await CxxModel.generalDetail(ctx, next, opt);
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

export default Cxx;
