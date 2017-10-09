import Router from 'koa-router';
import Cxx from './../controllers/Cxx';

const router = new Router({
    prefix: '/api'
});

router.get('/muralList', Cxx.muralList);
router.get('/bannerList', Cxx.bannerList);
router.get('/exhibitionList', Cxx.exhibitionList);
router.get('/exhibitionDetail/:id', Cxx.exhibitionDetail);
router.get('/generalDetail/:id', Cxx.generalDetail);

export default router;
