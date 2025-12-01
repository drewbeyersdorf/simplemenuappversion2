-- ============================================
-- METHODOLOGY PLATING STUDIO
-- Run these queries to extract ingredient data
-- ============================================

-- 1. GET ALL INGREDIENT CATEGORIES
SELECT id, name, position
FROM cook_book_ingredient_categories
ORDER BY position, name;

-- 2. GET ALL INGREDIENTS BY CATEGORY
SELECT
    i.id,
    i.name,
    i.admin_name,
    c.name AS category_name,
    c.id AS category_id,
    i.protein_grams,
    i.carb_grams,
    i.fat_grams,
    i.calories
FROM cook_book_ingredients i
LEFT JOIN cook_book_ingredient_categories c ON i.ingredient_category_id = c.id
WHERE i.deleted_at IS NULL
  AND i.discarded_at IS NULL
ORDER BY c.name, i.name;

-- 3. EXPORT AS JSON FOR WEB APP (PostgreSQL 9.4+)
SELECT json_agg(
    json_build_object(
        'id', i.id,
        'name', i.name,
        'category', c.name,
        'category_id', c.id,
        'protein', i.protein_grams,
        'carbs', i.carb_grams,
        'fat', i.fat_grams,
        'calories', i.calories
    )
) AS ingredients_json
FROM cook_book_ingredients i
LEFT JOIN cook_book_ingredient_categories c ON i.ingredient_category_id = c.id
WHERE i.deleted_at IS NULL
  AND i.discarded_at IS NULL;

-- 4. GET CATEGORY COUNTS
SELECT
    c.name AS category,
    COUNT(i.id) AS ingredient_count
FROM cook_book_ingredient_categories c
LEFT JOIN cook_book_ingredients i ON c.id = i.ingredient_category_id
    AND i.deleted_at IS NULL
    AND i.discarded_at IS NULL
GROUP BY c.id, c.name
ORDER BY ingredient_count DESC;

-- 5. GET POPULAR PROTEINS (high protein content)
SELECT name, protein_grams, calories
FROM cook_book_ingredients
WHERE deleted_at IS NULL
  AND protein_grams > 15
ORDER BY protein_grams DESC
LIMIT 50;

-- 6. GET POPULAR STARCHES/CARBS
SELECT name, carb_grams, calories
FROM cook_book_ingredients
WHERE deleted_at IS NULL
  AND carb_grams > 20
ORDER BY carb_grams DESC
LIMIT 50;
