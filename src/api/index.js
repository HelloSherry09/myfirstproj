
/* eslint-disable */

import http from './adapter'
// get 请求 不带参数
export const getHome = async () => await http.get('home/api')

// get 请求 带参数
export const getHome2 = async (
  solutionId,
  pageNo,
  pageSize
) => await http.get('home/api', {
  params: { page: pageNo, rows: pageSize, solutionId }
})