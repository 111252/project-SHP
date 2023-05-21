import requests from './request'
import mockrequests from "./mockAjax";

export const reqCategoryList = () => 
  requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  });
  
export const reqFloorList = () => mockrequests.get('/floor');
export const reqGetBannerList = () => mockrequests({
  url: "/banner",
  method: "get",
  headers: { 'Content-Type': 'application/json' }
});

export const reqGetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });












