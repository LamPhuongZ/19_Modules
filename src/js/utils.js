// export: Khai báo để các module khác có thể gọi tới để sử dụng biến/hàm này
// - 1 module có thể import nhiều biến/hàm
// - Khi ta import cần đặt trong cặp {} và tên biến phải giống với tên đã export

export const PI = 3.14;

export function cicrleArea(r) {
    return PI * Math.pow(r, 2);
}