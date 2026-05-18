class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       if (nums.length === 0) return 0;

    // 1. Sắp xếp mảng theo thứ tự tăng dần
    nums.sort((a, b) => a - b);

    // 2. Loại bỏ các số trùng lặp để xử lý dễ hơn
    // Ví dụ: [1, 2, 2, 3] -> [1, 2, 3]
    const newNums = Array.from(new Set(nums));

    let longestStreak = 1;
    let currentStreak = 1;

    // 3. Chỉ cần một vòng lặp duy nhất để kiểm tra tính liên tiếp
    for (let i = 1; i < newNums.length; i++) {
        // Nếu số hiện tại bằng số trước đó + 1
        if (newNums[i] === newNums[i - 1] + 1) {
            currentStreak += 1;
        } else {
            // Nếu bị ngắt quãng, cập nhật kỷ lục và reset streak
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1;
        }
    }

    // Cuối cùng so sánh thêm lần nữa để tránh trường hợp dãy dài nhất nằm ở cuối mảng
    return Math.max(longestStreak, currentStreak);
    }
}
