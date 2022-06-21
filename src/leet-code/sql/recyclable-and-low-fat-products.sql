-- https://leetcode.com/problems/recyclable-and-low-fat-products/



SELECT p.product_id
FROM Products p
WHERE p.low_fats = 'Y' AND p.recyclable = 'Y'


