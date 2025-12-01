/**
 * Methodology Food Mood - Elevated Meal Intelligence
 *
 * Philosophy: Take any standard dish and elevate every component into something
 * better than Erewhon, Sweetgreen, hot bars, restaurants, or any meal delivery -
 * because those are designed for eating immediately and hot at the point of service.
 *
 * We design for beautiful, photogenic meal prep that sparks emotional reaction.
 */

const API_BASE = window.location.origin;

// ============================================
// CHEF PHILOSOPHY FRAMEWORK
// The minds that shape our approach
// ============================================

const CHEF_PHILOSOPHIES = {
    curtisDuffy: {
        name: "Curtis Duffy",
        focus: "Motion and humanization in food",
        principle: "Every plate should feel alive, with movement and emotional resonance",
        application: "Components should suggest motion - cascading, leaning, floating"
    },
    danBarber: {
        name: "Dan Barber",
        focus: "Sustainability and heritage products with modern touch",
        principle: "Honor the provenance of ingredients while bringing contemporary technique",
        application: "Heritage proteins, heirloom vegetables, traditional methods made new"
    },
    christopherKostow: {
        name: "Christopher Kostow",
        focus: "Obsessive attention to component detail",
        principle: "Every single element on the plate is considered and perfected",
        application: "No throwaway garnish - everything serves a textural or flavor purpose"
    },
    michaelMina: {
        name: "Michael Mina",
        focus: "Familiar food with an elevated twist",
        principle: "Take comfort classics and make them extraordinary",
        application: "Recognize the dish instantly, but experience it transformed"
    },
    joshSkenes: {
        name: "Josh Skenes",
        focus: "Elevated yet grounded subtle elegance",
        principle: "Describe and create food with quiet sophistication that reveals itself",
        application: "Let quality speak - no overwrought descriptions, just excellence"
    }
};

// ============================================
// ELEVATION METHODOLOGY
// Standard → Royale transformation
// ============================================

const ELEVATION_METHODOLOGY = {
    core_principle: "Take any standard dish and upgrade every single component where it's still cost-effective to produce, making it more appealing while keeping it on-brand, refreshing, and driving top-of-funnel conversation.",

    competitive_benchmark: {
        must_beat: ["Erewhon hot bar", "Sweetgreen", "Target deli", "Restaurant meal delivery", "Ghost kitchen delivery"],
        advantage: "Those are designed for eating immediately and hot - we design for beautiful meal prep that travels and reheats perfectly",
        goal: "Make everyone excited at the possibilities that will come up every week to purchase"
    },

    elevation_principles: [
        {
            name: "Protein Elevation",
            standard: "Grilled chicken breast",
            elevated: "Heritage chicken lardon, cornish hen confit, slow-roasted thick-cut applewood lardons",
            technique: "Confit, cure, smoke, braise - never just 'grilled'"
        },
        {
            name: "Egg Elevation",
            standard: "Hard boiled egg",
            elevated: "Perfect six-minute egg with silken runny center, or cured yolk",
            technique: "Precision timing, curing, or sous vide for texture perfection"
        },
        {
            name: "Vegetable Elevation",
            standard: "Steamed broccoli",
            elevated: "Charred spring leeks, baby escarole, frisee with bitter complexity",
            technique: "Char, pickle, confit - add depth and contrast"
        },
        {
            name: "Crunch Elevation",
            standard: "Croutons",
            elevated: "Soldiers cut garlicky herbed batons with crisped cheese exterior, parmesan crisps, sprouted walnut halves",
            technique: "Multiple textures, unexpected crunch elements"
        },
        {
            name: "Dressing Elevation",
            standard: "Vinaigrette",
            elevated: "Champagne-shallot vinaigrette emulsified with roasted garlic and aged sherry vinegar",
            technique: "Layer acid sources, add roasted elements, emulsify properly"
        },
        {
            name: "Finish Elevation",
            standard: "Salt and pepper",
            elevated: "Fleur de sel, fresh herb blossoms, micro greens, edible petals",
            technique: "Thoughtful final touches that photograph beautifully"
        }
    ],

    naming_convention: {
        pattern: "Le/La [Original Name] [Royale/Luxe/Noir/d'Or/Classique]",
        examples: ["Le Lyonnaise Royale", "La Salade Noir", "Le Poulet d'Or"],
        principles: [
            "Sound designed by a smart artistic chef with GOOD taste",
            "Evoke European culinary tradition",
            "Suggest elevation without pretension"
        ]
    },

    visual_requirements: {
        color: "Rainbow palette, never monochrome",
        texture: "Multiple contrasting textures visible",
        finish: "Lacquered, glossy, appetizing sheen",
        emotion: "Photo should make people emotionally react - desire, excitement, aspiration"
    },

    production_constraint: "Must be executable at 3000+ meals per batch in our facility"
};

// ============================================
// SARA'S BEST PRACTICES PLATING CHECKLIST
// Quality assurance for every build
// ============================================

const SARA_PLATING_CHECKLIST = {
    name: "Sara's Best Practices Plating Checklist",

    categories: [
        {
            title: "1. Ingredient Visibility",
            checks: [
                "Can you easily recognize each major ingredient at a glance?",
                "Are ingredients separated by type, not mixed together too much?",
                "Is the dish still clearly legible when viewed as a small photo/thumbnail?"
            ]
        },
        {
            title: "2. Structure & Organization",
            checks: [
                "Are you using defined areas, color blocks, or clear organization (not a busy 'pattern')?",
                "Have you grouped less familiar or adventurous items together to help them stand out?",
                "For bowls/plates with many items, have you applied 'bento box' or compartment style organization?"
            ]
        },
        {
            title: "3. Main Features",
            checks: [
                "Are signature or special ingredients (e.g., truffle, unique veggies, colored stalks) placed where they are immediately visible and not hidden?",
                "Is there a section of uninterrupted grain, risotto, noodle, or salad for visual balance?"
            ]
        },
        {
            title: "4. Highlighting Meat/Proteins",
            checks: [
                "Are sliced meats arranged so you can see the inside (not just the outside/back)?",
                "If there is sauce, can you still see the meat's interior?",
                "Are the slices fanned out or shown at least partly 'open' rather than stacked or all facing the same way?"
            ]
        },
        {
            title: "5. Rectangular Items (quiche, salmon, etc.)",
            checks: [
                "Have you shown at least one edge or side to display its thickness or heartiness?",
                "If one item is unfamiliar, have you angled or tilted it for a better side view?"
            ]
        },
        {
            title: "6. Light & Contrast",
            checks: [
                "Have you used lighting or plate color to ensure all items stand out clearly?",
                "Is there enough contrast so ingredients don't blend too much?"
            ]
        },
        {
            title: "7. Brand & Presentation",
            checks: [
                "If packaging (e.g., a Methodology jar) is visible, is the logo clear and not covered by food?",
                "For hero images, are both the branding and the ingredients legible and inviting?"
            ]
        }
    ],

    finalCheck: {
        instruction: "Take a quick overhead phone photo at thumbnail size:",
        questions: [
            "Can you immediately identify most components?",
            "Does the dish look appetizing and organized at a glance?"
        ]
    }
};

// ============================================
// WEEKLY BEEF REQUIREMENT
// Fixed beef protein every single week
// ============================================

const WEEKLY_REQUIREMENTS = {
    beef: {
        required: true,
        reason: "Stay on our menu every single week - customer expectation",
        options: [
            {
                id: "flank-steak",
                standard: "Grilled Flank Steak",
                elevated: "Grass-Fed Flank Steak, reverse-seared, herb butter basted",
                elevation_notes: "24hr dry brine, reverse sear for perfect medium-rare edge-to-edge, compound butter finish"
            },
            {
                id: "short-rib",
                standard: "Braised Short Rib",
                elevated: "Red Wine Braised Heritage Short Rib, 48hr slow-cooked",
                elevation_notes: "Source heritage beef, 48hr braise, reduce sauce to lacquered glaze"
            },
            {
                id: "beef-tenderloin",
                standard: "Beef Tenderloin",
                elevated: "Tournedos of Beef, truffle-crusted, bone marrow butter",
                elevation_notes: "Portion to perfect medallions, truffle crust, bone marrow compound butter"
            },
            {
                id: "beef-bulgogi",
                standard: "Korean Beef",
                elevated: "Heritage Wagyu Bulgogi, pear-gochujang marinade, toasted sesame",
                elevation_notes: "Use wagyu trim for marbling, fresh Asian pear in marinade, hand-toasted sesame"
            }
        ]
    }
};

// ============================================
// FOUNDER TASTE PROFILES
// Julie & Stephen's preferences from 50+ R&D sessions
// ============================================

const TASTE_PROFILES = {
    julie: {
        name: "Julie's Vision",
        priorities: [
            "Taste over strict macros - food must be delicious first",
            "Instagrammable presentation that stops the scroll",
            "Consistent execution across every single meal",
            "Functional ingredients (adaptogens, GLP-1 boosting, nervous system soothing)",
            "Fresh, premium ingredients - never cheap substitutes",
            "Easy to eat - eatability is essential"
        ],
        likes: [
            "seasonal salads", "honey dijon", "lacquered finishes",
            "celery leaves", "buffalo burrata", "bright rainbow colors",
            "nervous system soothing foods", "GLP-1 boosting ingredients",
            "crispy textures", "premium packaging", "frisee", "baby escarole"
        ],
        dislikes: [
            "gritty textures", "overcooked proteins", "cheap ingredients",
            "inconsistent taste", "complex preparation by customer", "pre-bagged herbs",
            "monochrome plates", "boring presentation"
        ],
        benchmark: "Would it make someone feel calm and excited at the same time? Does it spark joy AND nourish?"
    },
    stephen: {
        name: "Stephen's Aesthetic",
        priorities: [
            "Elevation of familiar concepts - recognize it, but transformed",
            "Premium locally-sourced and heritage ingredients",
            "Bright colors & rainbow palettes that photograph beautifully",
            "Lacquered and caramelized finishes that shine",
            "Contrasting textures - crisp against creamy against chewy",
            "Shingled, cascading presentation with motion"
        ],
        likes: [
            "rainbow palettes", "lacquered radicchio", "kyoto carrots",
            "sous vide proteins", "crispy rice", "miso-cured egg yolk",
            "feta mousse", "truffle", "confit techniques",
            "honey butter glazes", "charred elements", "heritage products",
            "fleur de sel", "edible flowers", "micro greens"
        ],
        dislikes: [
            "cheap generic ingredients", "monochrome plates",
            "inconsistent portioning", "poor photography potential",
            "boring standard preparations", "no textural contrast"
        ],
        benchmark: "The Erewhon Test PLUS - Would this be sold at Erewhon AND be better than anything else there?"
    }
};

// ============================================
// OKR CONSTRAINTS
// Business requirements that shape every meal
// ============================================

const OKR_CONSTRAINTS = {
    targetMargin: 47,
    maxCOGS: 53,
    laborTarget: 14,
    foodTarget: 15.2,
    packagingTarget: 7.3,
    batchMinimum: 3000,
    priorityProteins: [
        "grass-fed beef", "heritage chicken", "wild salmon", "sustainable cod", "gulf shrimp"
    ]
};

// ============================================
// EXAMPLE: LE LYONNAISE ROYALE
// The gold standard for elevation
// ============================================

const EXAMPLE_ELEVATIONS = {
    lyonnaise_royale: {
        original: "Lyonnaise Salad",
        elevated_name: "Le Lyonnaise Royale",
        subtitle: "Crisp frisee & baby escarole layered with slow-roasted lardon, silken six-minute egg, cornish hen confit, charred leeks, champagne-shallot vinaigrette. Finished with herb blossoms and fleur de sel.",
        components: {
            protein_garnish: [
                "Applewood-smoked lardons, thick-cut and slow-roasted for crisp-tender perfection",
                "Warm cornish hen confit shards",
                "Perfect six-minute egg, peeled and halved (better texture than classic poached, still runny) OR cured yolk"
            ],
            vegetables: [
                "Frisee, baby escarole - bitter complexity",
                "Pickled red onion rings and paper-thin breakfast radishes for snap",
                "Charred spring leeks for subtle, smoky sweetness"
            ],
            crunch: [
                "Soldiers cut croutons: golden, garlicky, herbed batons with crisped cheese exterior",
                "Sprouted walnut halves / seed nut crunch",
                "Parmesan crisp"
            ],
            dressing: "Champagne-shallot vinaigrette, emulsified with roasted garlic and aged sherry vinegar",
            finish: "Fresh herb blossoms, micro greens, edible petals, fleur de sel"
        },
        why_better: "Every component elevated beyond any local option - impossible to replicate at home, too labor-intensive for restaurants at this price point"
    }
};

// ============================================
// ELEVATED MEAL TEMPLATES
// Each designed with elevation methodology
// ============================================

const MEAL_TEMPLATES = {
    // REQUIRED WEEKLY BEEF
    beef_royale: {
        name: "Le Boeuf Royale",
        category: "beef_weekly",
        required: true,
        description: "Heritage grass-fed beef with truffle-roasted root vegetables, bone marrow butter, micro herbs",
        original_concept: "Steak and vegetables",
        elevation_notes: "Reverse-seared for perfect doneness, bone marrow compound butter, truffle oil drizzle, rainbow root vegetable medley",
        proteins: ['flank-steak', 'short-rib'],
        starches: ['truffle-potato', 'sweet-potato'],
        vegetables: ['kyoto-carrots', 'charred-leeks', 'radicchio'],
        sauces: ['bone-marrow-butter', 'red-wine-reduction'],
        julieScore: 92,
        stephenScore: 95,
        erewhonPlus: true
    },
    asian_noir: {
        name: "L'Asiatique Noir",
        category: "asian_fusion",
        description: "Miso-glazed salmon over forbidden black rice, pickled ginger, crispy shallots, wasabi cream",
        original_concept: "Asian salmon bowl",
        elevation_notes: "Forbidden rice for drama, miso-maple glaze, hand-pickled ginger, fresh wasabi not tube",
        proteins: ['salmon', 'miso-cod'],
        starches: ['forbidden-rice', 'crispy-rice'],
        vegetables: ['broccolini', 'snap-peas', 'pickled-ginger'],
        sauces: ['miso-maple-glaze', 'wasabi-cream'],
        julieScore: 94,
        stephenScore: 92,
        erewhonPlus: true
    },
    mediterranean_dor: {
        name: "La Méditerranée d'Or",
        category: "mediterranean",
        description: "Herb-crusted lamb loin, whipped feta, charred lemon, za'atar roasted vegetables, tahini drizzle",
        original_concept: "Mediterranean plate",
        elevation_notes: "Lamb loin not leg, whipped feta mousse, preserved lemon, house-made za'atar",
        proteins: ['lamb-loin', 'chicken-shawarma'],
        starches: ['quinoa-pilaf', 'farro'],
        vegetables: ['charred-eggplant', 'blistered-tomatoes', 'za'atar-vegetables'],
        sauces: ['whipped-feta', 'tahini-drizzle', 'preserved-lemon-oil'],
        julieScore: 91,
        stephenScore: 94,
        erewhonPlus: true
    },
    comfort_luxe: {
        name: "Le Confort Luxe",
        category: "elevated_comfort",
        description: "48-hour short rib over truffle cauliflower puree, glazed heirloom carrots, red wine reduction, gremolata",
        original_concept: "Pot roast / comfort classic",
        elevation_notes: "48hr braise, cauliflower puree not mash, heirloom carrots, proper gremolata",
        proteins: ['short-rib', 'braised-chicken'],
        starches: ['truffle-cauliflower', 'sweet-potato'],
        vegetables: ['glazed-carrots', 'charred-leeks', 'wilted-greens'],
        sauces: ['red-wine-reduction', 'gremolata'],
        julieScore: 90,
        stephenScore: 93,
        erewhonPlus: true
    },
    wellness_vert: {
        name: "Le Wellness Vert",
        category: "functional_wellness",
        description: "Adaptogen-marinated chicken, ancient grain bowl, GLP-1 boosting vegetables, turmeric-ginger elixir",
        original_concept: "Healthy bowl",
        elevation_notes: "Reishi and ashwagandha in marinade, sprouted grains, bitter greens for GLP-1, fresh turmeric",
        proteins: ['adaptogen-chicken', 'miso-tofu'],
        starches: ['sprouted-grain', 'quinoa'],
        vegetables: ['bitter-greens', 'broccolini', 'asparagus'],
        sauces: ['turmeric-elixir', 'lemon-tahini'],
        julieScore: 96,
        stephenScore: 88,
        erewhonPlus: true
    },
    rainbow_classique: {
        name: "L'Arc-en-Ciel Classique",
        category: "rainbow_salad",
        description: "Seven-color vegetable mosaic, grilled heritage chicken, feta mousse, champagne vinaigrette, edible flowers",
        original_concept: "Colorful salad",
        elevation_notes: "Precisely seven distinct colors, heritage breed chicken, house-made feta mousse, fresh edible flowers",
        proteins: ['heritage-chicken', 'salmon'],
        starches: ['crispy-quinoa', 'farro'],
        vegetables: ['rainbow-carrots', 'beets', 'radicchio', 'snap-peas', 'radishes'],
        sauces: ['feta-mousse', 'champagne-vinaigrette'],
        julieScore: 95,
        stephenScore: 97,
        erewhonPlus: true
    },
    athlete_or: {
        name: "L'Athlète d'Or",
        category: "athletic_performance",
        description: "40g+ protein powerhouse - double grass-fed beef, sweet potato, power greens, chimichurri",
        original_concept: "High protein meal",
        elevation_notes: "Dual protein portions, complex carbs, performance-optimized macros, fresh chimichurri daily",
        proteins: ['flank-steak', 'chicken-breast'],
        starches: ['sweet-potato', 'quinoa'],
        vegetables: ['power-greens', 'asparagus', 'broccolini'],
        sauces: ['fresh-chimichurri', 'lemon-herb'],
        julieScore: 89,
        stephenScore: 86,
        erewhonPlus: true
    },
    lyonnaise_royale: {
        name: "Le Lyonnaise Royale",
        category: "elevated_salad",
        description: "Crisp frisee & baby escarole, slow-roasted lardon, silken six-minute egg, cornish hen confit, charred leeks, champagne-shallot vinaigrette",
        original_concept: "Lyonnaise Salad",
        elevation_notes: "The gold standard - every component maximally elevated",
        proteins: ['lardon', 'cornish-confit', 'six-minute-egg'],
        starches: ['soldiers-crouton'],
        vegetables: ['frisee', 'escarole', 'charred-leeks', 'pickled-onion', 'breakfast-radish'],
        sauces: ['champagne-shallot-vinaigrette'],
        crunch: ['parmesan-crisp', 'sprouted-walnuts'],
        finish: ['herb-blossoms', 'micro-greens', 'fleur-de-sel'],
        julieScore: 96,
        stephenScore: 98,
        erewhonPlus: true,
        signature: true
    }
};

// ============================================
// EXPANDED INGREDIENT DATABASE
// With elevation context
// ============================================

const INGREDIENTS = {
    proteins: [
        { id: 'flank-steak', name: 'Grass-Fed Flank Steak', elevatedName: 'Reverse-Seared Heritage Flank', color: 'food-steak', julieScore: 90, stephenScore: 95, cost: 'medium', technique: 'reverse-sear, herb butter baste' },
        { id: 'short-rib', name: 'Braised Short Rib', elevatedName: '48-Hour Red Wine Braised Short Rib', color: 'food-steak', julieScore: 88, stephenScore: 92, cost: 'high', technique: '48hr braise, reduce sauce to glaze' },
        { id: 'salmon', name: 'Farm-Raised Salmon', elevatedName: 'Miso-Maple Glazed Wild Salmon', color: 'food-salmon', julieScore: 95, stephenScore: 90, cost: 'medium', technique: 'cure, glaze, torch finish' },
        { id: 'heritage-chicken', name: 'Chicken Breast', elevatedName: 'Heritage Breed Chicken, Herb-Crusted', color: 'food-chicken', julieScore: 88, stephenScore: 85, cost: 'medium', technique: 'brine, sous vide, sear' },
        { id: 'lamb-loin', name: 'Lamb', elevatedName: 'Herb-Crusted Lamb Loin', color: 'food-steak', julieScore: 85, stephenScore: 94, cost: 'high', technique: 'crust with herbs, rest properly' },
        { id: 'lardon', name: 'Bacon', elevatedName: 'Applewood-Smoked Thick-Cut Lardons', color: 'food-steak', julieScore: 88, stephenScore: 90, cost: 'medium', technique: 'slow-roast for crisp-tender' },
        { id: 'cornish-confit', name: 'Chicken', elevatedName: 'Cornish Hen Confit Shards', color: 'food-chicken', julieScore: 92, stephenScore: 96, cost: 'high', technique: 'confit, shred, crisp' },
        { id: 'six-minute-egg', name: 'Egg', elevatedName: 'Silken Six-Minute Egg', color: 'food-egg', julieScore: 94, stephenScore: 92, cost: 'low', technique: 'precision timing, perfect runny center' },
        { id: 'miso-cod', name: 'Cod', elevatedName: 'Miso-Marinated Black Cod', color: 'food-chicken', julieScore: 90, stephenScore: 88, cost: 'high', technique: '72hr miso cure' }
    ],
    starches: [
        { id: 'forbidden-rice', name: 'Black Rice', elevatedName: 'Forbidden Rice with Coconut', color: 'food-dark', julieScore: 88, stephenScore: 94 },
        { id: 'crispy-rice', name: 'Rice', elevatedName: 'Crispy Garlic-Sesame Rice', color: 'food-rice', julieScore: 92, stephenScore: 95 },
        { id: 'truffle-cauliflower', name: 'Cauliflower', elevatedName: 'Truffle Cauliflower Puree', color: 'food-rice', julieScore: 90, stephenScore: 94 },
        { id: 'quinoa-pilaf', name: 'Quinoa', elevatedName: 'Toasted Quinoa Pilaf with Herbs', color: 'food-quinoa', julieScore: 88, stephenScore: 85 },
        { id: 'sweet-potato', name: 'Sweet Potato', elevatedName: 'Maple-Glazed Sweet Potato', color: 'food-carrots', julieScore: 85, stephenScore: 88 },
        { id: 'soldiers-crouton', name: 'Croutons', elevatedName: 'Soldiers Cut Garlic-Herb Croutons with Crisped Cheese', color: 'food-quinoa', julieScore: 90, stephenScore: 92 }
    ],
    vegetables: [
        { id: 'frisee', name: 'Lettuce', elevatedName: 'Crisp Frisee & Baby Escarole', color: 'food-asparagus', julieScore: 92, stephenScore: 94 },
        { id: 'charred-leeks', name: 'Leeks', elevatedName: 'Charred Spring Leeks', color: 'food-asparagus', julieScore: 90, stephenScore: 95 },
        { id: 'kyoto-carrots', name: 'Carrots', elevatedName: 'Kyoto Carrots, Honey-Butter Glazed', color: 'food-carrots', julieScore: 90, stephenScore: 95 },
        { id: 'radicchio', name: 'Radicchio', elevatedName: 'Lacquered Radicchio', color: 'food-beets', julieScore: 88, stephenScore: 96 },
        { id: 'broccolini', name: 'Broccolini', elevatedName: 'Charred Broccolini with Lemon', color: 'food-broccoli', julieScore: 90, stephenScore: 92 },
        { id: 'pickled-onion', name: 'Red Onion', elevatedName: 'House-Pickled Red Onion Rings', color: 'food-beets', julieScore: 86, stephenScore: 88 },
        { id: 'breakfast-radish', name: 'Radish', elevatedName: 'Paper-Thin Breakfast Radishes', color: 'food-salmon', julieScore: 88, stephenScore: 90 },
        { id: 'bitter-greens', name: 'Greens', elevatedName: 'GLP-1 Boosting Bitter Greens', color: 'food-broccoli', julieScore: 95, stephenScore: 85 }
    ],
    sauces: [
        { id: 'champagne-vinaigrette', name: 'Vinaigrette', elevatedName: 'Champagne-Shallot Vinaigrette with Roasted Garlic', color: 'food-sauce', julieScore: 94, stephenScore: 96 },
        { id: 'bone-marrow-butter', name: 'Butter', elevatedName: 'Bone Marrow Compound Butter', color: 'food-sauce', julieScore: 88, stephenScore: 95 },
        { id: 'miso-maple-glaze', name: 'Glaze', elevatedName: 'Miso-Maple Glaze', color: 'food-sauce', julieScore: 92, stephenScore: 94 },
        { id: 'whipped-feta', name: 'Feta', elevatedName: 'Whipped Feta Mousse', color: 'food-rice', julieScore: 92, stephenScore: 95 },
        { id: 'fresh-chimichurri', name: 'Chimichurri', elevatedName: 'Fresh Daily Chimichurri', color: 'food-broccoli', julieScore: 90, stephenScore: 88 },
        { id: 'red-wine-reduction', name: 'Sauce', elevatedName: 'Red Wine Reduction', color: 'food-beets', julieScore: 86, stephenScore: 92 }
    ],
    finishes: [
        { id: 'fleur-de-sel', name: 'Salt', elevatedName: 'Fleur de Sel', color: 'food-rice', julieScore: 90, stephenScore: 94 },
        { id: 'herb-blossoms', name: 'Herbs', elevatedName: 'Fresh Herb Blossoms', color: 'food-salmon', julieScore: 94, stephenScore: 96 },
        { id: 'micro-greens', name: 'Greens', elevatedName: 'Micro Greens & Edible Petals', color: 'food-asparagus', julieScore: 92, stephenScore: 95 },
        { id: 'parmesan-crisp', name: 'Cheese', elevatedName: 'Parmesan Frico Crisp', color: 'food-quinoa', julieScore: 88, stephenScore: 92 },
        { id: 'sprouted-walnuts', name: 'Nuts', elevatedName: 'Sprouted Walnut Halves', color: 'food-quinoa', julieScore: 86, stephenScore: 88 }
    ]
};

// ============================================
// ARTFUL NAMING GENERATOR
// Creates chef-worthy names for any concept
// ============================================

const NAMING_PATTERNS = {
    prefixes: ['Le', 'La', 'L\''],
    suffixes: ['Royale', 'Luxe', 'Noir', 'd\'Or', 'Classique', 'Vert', 'Doré', 'Maison'],

    generateName: function(concept, style) {
        const base = concept.split(' ')[0];
        const prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
        const suffix = this.suffixes[style] || this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
        return `${prefix} ${base} ${suffix}`;
    }
};

// ============================================
// DOM ELEMENTS (initialized after DOM loads)
// ============================================

let step1, step2, step3, moodInput, analyzeBtn, moodEcho, suggestionsGrid, loadingOverlay;

function initDOMElements() {
    step1 = document.getElementById('step1');
    step2 = document.getElementById('step2');
    step3 = document.getElementById('step3');
    moodInput = document.getElementById('moodInput');
    analyzeBtn = document.getElementById('analyzeBtn');
    moodEcho = document.getElementById('moodEcho');
    suggestionsGrid = document.getElementById('suggestionsGrid');
    loadingOverlay = document.getElementById('loadingOverlay');
}

// ============================================
// NAVIGATION
// ============================================

function showStep(stepNum) {
    const steps = [step1, step2, step3];
    steps.forEach(s => { if (s) s.classList.remove('active'); });
    const targetStep = document.getElementById(`step${stepNum}`);
    if (targetStep) targetStep.classList.add('active');
    window.scrollTo(0, 0);
}

// ============================================
// MOOD ANALYSIS & SUGGESTION GENERATION
// ============================================

function analyzeMood(moodText) {
    const mood = moodText.toLowerCase();
    const scores = {};

    for (const [key, template] of Object.entries(MEAL_TEMPLATES)) {
        let score = 50;

        // Beef keywords - always include beef option
        if (mood.includes('beef') || mood.includes('steak') || mood.includes('meat')) {
            if (template.category === 'beef_weekly') score += 50;
        }

        // Asian keywords
        if (mood.includes('asian') || mood.includes('miso') || mood.includes('japanese') ||
            mood.includes('korean') || mood.includes('soy') || mood.includes('ginger')) {
            if (key === 'asian_noir') score += 45;
        }

        // Mediterranean keywords
        if (mood.includes('mediterranean') || mood.includes('greek') || mood.includes('lamb') ||
            mood.includes('tahini') || mood.includes('feta') || mood.includes('za\'atar')) {
            if (key === 'mediterranean_dor') score += 45;
        }

        // Comfort keywords
        if (mood.includes('comfort') || mood.includes('cozy') || mood.includes('warm') ||
            mood.includes('braised') || mood.includes('hearty')) {
            if (key === 'comfort_luxe') score += 45;
        }

        // Wellness keywords
        if (mood.includes('wellness') || mood.includes('functional') || mood.includes('glp') ||
            mood.includes('adaptogen') || mood.includes('healthy') || mood.includes('gut')) {
            if (key === 'wellness_vert') score += 45;
        }

        // Salad/colorful keywords
        if (mood.includes('salad') || mood.includes('rainbow') || mood.includes('colorful') ||
            mood.includes('bright') || mood.includes('fresh')) {
            if (key === 'rainbow_classique' || key === 'lyonnaise_royale') score += 45;
        }

        // Lyonnaise specific
        if (mood.includes('lyonnaise') || mood.includes('lardon') || mood.includes('egg') ||
            mood.includes('frisee') || mood.includes('french')) {
            if (key === 'lyonnaise_royale') score += 50;
        }

        // Athletic/protein keywords
        if (mood.includes('athletic') || mood.includes('protein') || mood.includes('macro') ||
            mood.includes('performance') || mood.includes('gym') || mood.includes('muscle')) {
            if (key === 'athlete_or') score += 45;
        }

        // Instagram/photo keywords - boost visually stunning options
        if (mood.includes('instagram') || mood.includes('photo') || mood.includes('beautiful') ||
            mood.includes('gorgeous') || mood.includes('stunning')) {
            if (template.stephenScore >= 94) score += 20;
        }

        // Elevated/premium keywords
        if (mood.includes('elevated') || mood.includes('premium') || mood.includes('luxury') ||
            mood.includes('erewhon') || mood.includes('upscale')) {
            score += template.erewhonPlus ? 15 : -10;
        }

        scores[key] = score;
    }

    // Always ensure beef option is available
    if (scores['beef_royale'] < 60) {
        scores['beef_royale'] = 60; // Minimum score for required beef
    }

    return scores;
}

function generateSuggestions(moodText) {
    const scores = analyzeMood(moodText);
    const suggestions = [];

    const sortedTemplates = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    for (const [templateKey, score] of sortedTemplates) {
        const template = MEAL_TEMPLATES[templateKey];
        const numVariations = suggestions.length === 0 ? 2 : 1;

        for (let i = 0; i < numVariations; i++) {
            const variation = generateElevatedVariation(template, templateKey, i);
            suggestions.push(variation);
        }
    }

    return suggestions.slice(0, 6);
}

function generateElevatedVariation(template, templateKey, varIndex) {
    const protein = INGREDIENTS.proteins.find(p => template.proteins.includes(p.id)) || INGREDIENTS.proteins[0];
    const starch = INGREDIENTS.starches.find(s => template.starches.includes(s.id)) || INGREDIENTS.starches[0];
    const veg1 = INGREDIENTS.vegetables.find(v => template.vegetables.includes(v.id)) || INGREDIENTS.vegetables[0];
    const veg2 = INGREDIENTS.vegetables.find(v => v.id === template.vegetables[1]);
    const sauce = INGREDIENTS.sauces.find(s => template.sauces.includes(s.id)) || INGREDIENTS.sauces[0];
    const finish = INGREDIENTS.finishes[varIndex % INGREDIENTS.finishes.length];

    const containerTypes = ['bento', 'bento', 'jar', 'bowl'];
    const container = containerTypes[varIndex % containerTypes.length];

    const julieScore = Math.round((protein.julieScore + starch.julieScore + veg1.julieScore + sauce.julieScore) / 4);
    const stephenScore = Math.round((protein.stephenScore + starch.stephenScore + veg1.stephenScore + sauce.stephenScore) / 4);

    return {
        id: `${templateKey}-${varIndex}`,
        name: template.name,
        description: template.description,
        original_concept: template.original_concept,
        elevation_notes: template.elevation_notes,
        container: container,
        erewhonPlus: template.erewhonPlus,
        signature: template.signature,
        julieScore: template.julieScore || julieScore,
        stephenScore: template.stephenScore || stephenScore,
        components: {
            protein: { ...protein, portion: '5oz', zone: 'P1' },
            starch: { ...starch, portion: '4oz', zone: 'P2' },
            veg1: { ...veg1, portion: '3oz', zone: 'P3' },
            veg2: veg2 ? { ...veg2, portion: '2oz', zone: 'P4' } : null,
            sauce: { ...sauce, portion: '1.5oz', zone: 'CUP' },
            finish: finish ? { ...finish, portion: 'garnish', zone: 'TOP' } : null
        }
    };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderSuggestionCard(suggestion) {
    const card = document.createElement('div');
    card.className = 'suggestion-card' + (suggestion.signature ? ' signature' : '');
    card.dataset.container = suggestion.container;
    card.onclick = () => showBuildDetail(suggestion);

    const visualHTML = suggestion.container === 'jar'
        ? renderJarMini(suggestion)
        : renderBentoMini(suggestion);

    card.innerHTML = `
        <div class="card-visual">
            ${visualHTML}
        </div>
        <div class="card-content">
            <h3 class="card-title">${suggestion.name}</h3>
            <p class="card-description">${suggestion.description}</p>
            <div class="card-meta">
                <span class="meta-tag">${suggestion.container}</span>
                ${suggestion.erewhonPlus ? '<span class="meta-tag erewhon">Erewhon+</span>' : ''}
                ${suggestion.signature ? '<span class="meta-tag signature">Signature</span>' : ''}
            </div>
            <div class="card-alignment">
                <div class="alignment-mini">
                    <span class="dot julie"></span>
                    <span>${suggestion.julieScore}%</span>
                </div>
                <div class="alignment-mini">
                    <span class="dot stephen"></span>
                    <span>${suggestion.stephenScore}%</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

function renderBentoMini(suggestion) {
    const { protein, starch, veg1, veg2, sauce } = suggestion.components;
    return `
        <div class="bento-mini">
            <div class="zone zone-protein ${protein.color}"></div>
            <div class="zone ${starch.color}"></div>
            <div class="zone ${veg1.color}"></div>
            <div class="zone ${veg2 ? veg2.color : 'food-rice'}"></div>
        </div>
    `;
}

function renderJarMini(suggestion) {
    const { protein, starch, veg1, sauce } = suggestion.components;
    return `
        <div class="jar-mini">
            <div class="jar-shape">
                <div class="jar-layer ${sauce.color}"></div>
                <div class="jar-layer ${starch.color}"></div>
                <div class="jar-layer ${veg1.color}"></div>
                <div class="jar-layer ${protein.color}"></div>
            </div>
        </div>
    `;
}

function renderBuildPreview(suggestion) {
    const { protein, starch, veg1, veg2, sauce } = suggestion.components;

    if (suggestion.container === 'jar') {
        return `
            <div class="jar-large">
                <div class="jar-layer ${sauce.color}"><span class="zone-label-mini">${sauce.elevatedName || sauce.name}</span></div>
                <div class="jar-layer ${starch.color}"><span class="zone-label-mini">${starch.elevatedName || starch.name}</span></div>
                <div class="jar-layer ${veg1.color}"><span class="zone-label-mini">${veg1.elevatedName || veg1.name}</span></div>
                <div class="jar-layer ${protein.color}"><span class="zone-label-mini">${protein.elevatedName || protein.name}</span></div>
            </div>
        `;
    }

    return `
        <div class="bento-large">
            <div class="zone zone-protein ${protein.color}"><span class="zone-label-mini">${protein.elevatedName || protein.name}</span></div>
            <div class="zone ${starch.color}"><span class="zone-label-mini">${starch.elevatedName || starch.name}</span></div>
            <div class="zone ${veg1.color}"><span class="zone-label-mini">${veg1.elevatedName || veg1.name}</span></div>
            <div class="zone ${veg2 ? veg2.color : ''}"><span class="zone-label-mini">${veg2 ? (veg2.elevatedName || veg2.name) : ''}</span></div>
        </div>
    `;
}

function renderComponents(suggestion) {
    const components = Object.values(suggestion.components).filter(Boolean);
    return components.map(c => `
        <div class="component-item">
            <div class="component-color ${c.color}"></div>
            <div class="component-info">
                <span class="component-name">${c.elevatedName || c.name}</span>
                ${c.technique ? `<span class="component-technique">${c.technique}</span>` : ''}
            </div>
            <span class="component-portion">${c.portion}</span>
            <span class="component-zone">${c.zone}</span>
        </div>
    `).join('');
}

function renderPlatingSteps(suggestion) {
    const steps = [
        `Orient ${suggestion.container} with primary protein zone accessible`,
        `Place ${suggestion.components.protein.portion} ${suggestion.components.protein.elevatedName || suggestion.components.protein.name} - ${suggestion.components.protein.technique || 'arrange with intention'}`,
        `Add ${suggestion.components.starch.portion} ${suggestion.components.starch.elevatedName || suggestion.components.starch.name} - use precise scoop for consistency`,
        `Arrange ${suggestion.components.veg1.portion} ${suggestion.components.veg1.elevatedName || suggestion.components.veg1.name} - create height and visual interest`,
        suggestion.components.veg2 ? `Layer ${suggestion.components.veg2.portion} ${suggestion.components.veg2.elevatedName || suggestion.components.veg2.name} for color contrast` : null,
        `Fill sauce vessel with ${suggestion.components.sauce.portion} ${suggestion.components.sauce.elevatedName || suggestion.components.sauce.name}`,
        suggestion.components.finish ? `Finish with ${suggestion.components.finish.elevatedName} - the final touch that elevates` : null,
        `Quality check: Clean edges, visible colors, glossy finishes, Instagram-ready`
    ].filter(Boolean);

    return steps.map((step, i) => `
        <div class="plating-step">
            <span class="step-num">${i + 1}</span>
            <span class="step-text">${step}</span>
        </div>
    `).join('');
}

function renderSaraChecklist() {
    let html = `<div class="sara-checklist">
        <h4 class="checklist-title">${SARA_PLATING_CHECKLIST.name}</h4>`;

    SARA_PLATING_CHECKLIST.categories.forEach(category => {
        html += `
            <div class="checklist-category">
                <h5 class="category-title">${category.title}</h5>
                <div class="checklist-items">
                    ${category.checks.map(check => `
                        <label class="checklist-item">
                            <input type="checkbox" class="check-input">
                            <span class="check-text">${check}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `
        <div class="checklist-final">
            <h5 class="final-title">Final Check</h5>
            <p class="final-instruction">${SARA_PLATING_CHECKLIST.finalCheck.instruction}</p>
            <div class="checklist-items">
                ${SARA_PLATING_CHECKLIST.finalCheck.questions.map(q => `
                    <label class="checklist-item final">
                        <input type="checkbox" class="check-input">
                        <span class="check-text">${q}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    </div>`;

    return html;
}

function generateNanoBananaPrompt(suggestion) {
    const components = Object.values(suggestion.components).filter(Boolean);
    const ingredientList = components.map(c => (c.elevatedName || c.name).toLowerCase()).join(', ');

    // Use Josh Skenes-inspired description style - elevated but grounded
    const chefDescription = `${suggestion.name}: ${suggestion.description}`;

    return `Professional editorial food photography of "${suggestion.name}" - ${suggestion.description}

Premium ${suggestion.container} container presentation featuring: ${ingredientList}.

Style references: Curtis Duffy's sense of motion, Dan Barber's heritage ingredient philosophy, Christopher Kostow's obsessive component detail, Michael Mina's elevated familiar comfort, Josh Skenes' quiet sophistication.

Visual requirements:
- Rainbow color palette, never monochrome
- Lacquered, glossy finishes that catch light
- Multiple contrasting textures visible
- Cascading, shingled arrangement suggesting motion
- Fresh herb blossoms and micro greens as finish
- Fleur de sel crystals catching light

Photography specs:
- Soft natural window light, golden hour warmth
- 45-degree overhead angle
- Sharp focus on food textures
- Shallow depth of field, bokeh background
- Editorial quality, Bon Appetit / Saveur magazine style

Must evoke: This is better than Erewhon, Sweetgreen, any restaurant delivery. This is meal prep elevated to fine dining. Emotionally compelling - desire, aspiration, "I need this."

8K resolution, photorealistic, appetizing, premium meal prep aesthetic --ar 1:1 --v 6.1 --style raw`;
}

// ============================================
// BUILD DETAIL VIEW
// ============================================

let currentSuggestion = null;

function showBuildDetail(suggestion) {
    currentSuggestion = suggestion;

    document.getElementById('buildTitle').textContent = suggestion.name;
    document.getElementById('erewhonBadge').style.display = suggestion.erewhonPlus ? 'inline' : 'none';

    document.getElementById('julieBar').style.width = `${suggestion.julieScore}%`;
    document.getElementById('juliePercent').textContent = `${suggestion.julieScore}%`;
    document.getElementById('stephenBar').style.width = `${suggestion.stephenScore}%`;
    document.getElementById('stephenPercent').textContent = `${suggestion.stephenScore}%`;

    document.getElementById('containerPreview').innerHTML = renderBuildPreview(suggestion);
    document.getElementById('componentsList').innerHTML = renderComponents(suggestion);
    document.getElementById('platingNotes').innerHTML = renderPlatingSteps(suggestion);
    document.getElementById('saraChecklist').innerHTML = renderSaraChecklist();
    document.getElementById('nanoBananaPrompt').value = generateNanoBananaPrompt(suggestion);

    showStep(3);
}

// ============================================
// EVENT HANDLERS
// ============================================

async function analyzeAndShow() {
    const mood = moodInput.value.trim();
    if (!mood) return;

    loadingOverlay.classList.add('active');
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        const response = await fetch(`${API_BASE}/api/generate-suggestions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood })
        });
    } catch (e) {
        // Use local generation
    }

    const suggestions = generateSuggestions(mood);

    suggestionsGrid.innerHTML = '';
    suggestions.forEach(s => {
        suggestionsGrid.appendChild(renderSuggestionCard(s));
    });

    moodEcho.textContent = `"${mood}"`;

    loadingOverlay.classList.remove('active');
    showStep(2);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function initEventHandlers() {
    // Back buttons
    const backBtn1 = document.getElementById('backToStep1');
    const backBtn2 = document.getElementById('backToStep2');
    if (backBtn1) backBtn1.addEventListener('click', () => showStep(1));
    if (backBtn2) backBtn2.addEventListener('click', () => showStep(2));

    // Mood chips
    document.querySelectorAll('.mood-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            moodInput.value = chip.dataset.mood;
            analyzeAndShow();
        });
    });

    // Analyze button
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeAndShow);
    }

    // Enter key in textarea
    if (moodInput) {
        moodInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                analyzeAndShow();
            }
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            document.querySelectorAll('.suggestion-card').forEach(card => {
                if (filter === 'all' || card.dataset.container === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Copy prompt button
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const prompt = document.getElementById('nanoBananaPrompt');
            prompt.select();
            document.execCommand('copy');
            showToast('Prompt copied to clipboard!');
        });
    }

    // Generate image button
    const genBtn = document.getElementById('generateImageBtn');
    if (genBtn) {
        genBtn.addEventListener('click', () => {
            showToast('Prompt copied - paste into Midjourney or Nano Banana');
            document.getElementById('nanoBananaPrompt').select();
            document.execCommand('copy');
        });
    }

    // Print guide button
    const printBtn = document.getElementById('printGuideBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Methodology Food Mood - Elevated Meal Intelligence loaded');

    // Initialize DOM elements
    initDOMElements();

    // Initialize event handlers
    initEventHandlers();

    console.log('Chef Philosophies:', Object.keys(CHEF_PHILOSOPHIES));
    console.log('Elevation Methodology:', ELEVATION_METHODOLOGY.core_principle);
    console.log('Weekly Beef Requirement:', WEEKLY_REQUIREMENTS.beef.required);
    console.log('App initialized successfully');
});
