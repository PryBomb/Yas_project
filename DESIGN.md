# Modern Developer Portfolio - Design Details

## 1. Overview
- **Color Mode**: LIGHT
- **Primary Custom Color**: `#A5C9FF`
- **Spacing Scale**: 3
- **Roundness**: ROUND_EIGHT

## 2. Typography
- **Headline Font**: MANROPE
- **Body Font**: INTER
- **Label Font**: INTER

## 3. Named Colors
- **background**: `#f7f9fc`
- **surface**: `#f7f9fc`
- **surface_container_lowest**: `#ffffff`
- **surface_container_low**: `#f1f4f7`
- **surface_container**: `#eaeef3`
- **surface_container_high**: `#e3e9ee`
- **surface_container_highest**: `#dde3e9`
- **primary**: `#3c6090`
- **primary_container**: `#a2c6fc`
- **on_primary**: `#f8f8ff`
- **secondary**: `#795465`
- **secondary_container**: `#ffd8e7`
- **tertiary**: `#735578`
- **tertiary_container**: `#fad3fd`
- **error**: `#ac3434`
- **on_surface**: `#2d3338`
- **outline**: `#757c81`
- **outline_variant**: `#acb3b8`

*(Select essential base colors listed above. Consult the project JSON for the complete exhaustive list of 30+ tonal variants).*

---

## 4. Design Guidelines

# Design System Strategy: The Ethereal Professional

## 1. Overview & Creative North Star: "The Digital Curator"
This design system moves away from the rigid, "boxed-in" layout of traditional developer portfolios. Instead, it adopts the persona of **The Digital Curator**. The goal is to present technical expertise through an editorial lens—treating code samples and project case studies like high-end gallery pieces.

The system breaks the "template" look by utilizing **intentional asymmetry** and **tonal layering**. Rather than standard grids, we use expansive whitespace and overlapping elements to create a sense of effortless sophistication. This isn't just a portfolio; it’s an immersive, atmospheric experience that proves a developer understands aesthetics as deeply as logic.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is a sophisticated blend of soft pastels (`primary`, `secondary`, `tertiary`) grounded by a cooling neutral base (`surface`).

*   **The "No-Line" Rule:** To achieve a premium, seamless feel, **do not use 1px solid borders** for sectioning. Boundaries must be defined solely through background color shifts. For example, a project gallery section should transition from `surface` to `surface-container-low` to define its start and end.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper. 
    *   **Base:** `surface` (#f7f9fc)
    *   **Sectioning:** `surface-container-low` (#f1f4f7)
    *   **Cards/Elements:** `surface-container-lowest` (#ffffff) to create a soft "pop" against the background.
*   **The "Glass & Gradient" Rule:** Floating navigation menus or hero accents should utilize **Glassmorphism**. Use `surface` at 70% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For main Call-to-Actions (CTAs) or Hero headers, use a subtle linear gradient: `primary` (#3c6090) to `primary-container` (#a2c6fc) at a 135-degree angle. This adds "soul" and prevents the pastels from feeling flat or "childish."

---

## 3. Typography: The Editorial Scale
We use a dual-font strategy to balance character with readability.

*   **Display & Headlines (Manrope):** This geometric sans-serif provides the "authoritative" voice. `display-lg` (3.5rem) should be used for hero statements with tight letter-spacing (-0.02em) to create a high-fashion, editorial impact.
*   **Body & Labels (Inter):** A highly legible, neutral face. Use `body-lg` (1rem) for project descriptions to ensure the technical content remains the focus.
*   **Hierarchy as Identity:** Use `label-md` in all-caps with increased letter-spacing (0.1em) for "Category" tags (e.g., "BACKEND", "UI DESIGN"). This creates a professional, organized contrast against the softer display fonts.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too heavy for a pastel theme. We achieve depth through environmental light and color.

*   **The Layering Principle:** Avoid shadows where possible. Instead, place a `surface-container-lowest` card on a `surface-container` background. The subtle shift in hex code provides enough contrast for the eye to perceive a "lift."
*   **Ambient Shadows:** If an element must float (like a modal or hovered card), use an "Ambient Shadow":
    *   `box-shadow: 0 12px 40px rgba(45, 51, 56, 0.04);` 
    *   The shadow is a tinted version of `on-surface`, kept at an extremely low opacity (4-8%) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a layout requires a container but color-shifting isn't enough, use a **Ghost Border**: `outline-variant` (#acb3b8) at 15% opacity. It should be felt, not seen.

---

## 5. Components: Fluidity & Softness

### Buttons
*   **Primary:** A gradient of `primary` to `primary_dim`. Roundedness: `full` (pill-shape). Padding: `1rem 2rem`. 
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Interaction:** On hover, the button should scale (`scale(1.02)`) and the ambient shadow should slightly intensify.

### Project Cards
*   **Structure:** Forbidden use of divider lines. Separate the project image from the metadata using a 24px vertical gap (`spacing-xl`).
*   **Background:** Use `surface-container-lowest`.
*   **Radius:** Use `xl` (1.5rem) for a friendly, modern feel.

### Chips (Technology Tags)
*   **Selection Chips:** Use `tertiary-container` (#fad3fd) with `on-tertiary-container` text.
*   **Visuals:** Use `sm` (0.25rem) roundedness to keep them distinct from the pill-shaped buttons.

### Floating Navigation
*   **Style:** A glassmorphic bar using `surface` at 80% opacity, `backdrop-blur: 12px`, and a "Ghost Border" at 10% opacity. 
*   **Position:** Fixed at the bottom center of the viewport to keep the top of the page airy and open.

### Input Fields
*   **State:** Default state uses `surface-container-high`. 
*   **Focus State:** Transitions to `surface-container-lowest` with a 1px "Ghost Border" using `primary`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If a project title is left-aligned, try right-aligning the description to create a dynamic visual flow.
*   **Do** leverage `primary-container`, `secondary-container`, and `tertiary-container` as soft "washes" of color behind large typography.
*   **Do** ensure text on pastel backgrounds meets WCAG AA standards by using the `on-primary-container` or `on-surface` tokens.

### Don’t:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#2d3338) to maintain the soft aesthetic.
*   **Don't** use standard "Card" components with heavy borders and dark shadows. It breaks the "Ethereal" North Star.
*   **Don't** crowd the layout. If you think there is enough whitespace, add 20% more. The content needs room to "breathe" to feel premium.
