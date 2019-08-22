// 默认导出
export default {
  name: 'test1',
  height: 180,
  age: 25
}
// 一个模块只能用一次默认导出

// 按需导出
export const a = 12;
export function test() {
  console.log('按需导出函数test')
}
