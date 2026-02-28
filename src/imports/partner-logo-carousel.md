## Partner Logo Carousel Specifications for Figma

### Section Container (Trust Section)
- **Background:** White (`#ffffff`)
- **Padding:** 5rem (80px) top and bottom
- **Border:** 1px solid `#e9ecef` on top and bottom
- **Heading:** "Trusted by Leading Industrial Contractors" - 2.5rem (40px), color `#1A1A2E`, font-weight 700
- **Subtitle:** 1.125rem (18px), color `#666`, max-width 600px, centered, line-height 1.6

### Carousel Container
- **Overflow:** Hidden (masks content outside bounds)
- **Padding:** 2rem (32px) top and bottom

### Logo Track (Moving Strip)
- **Layout:** Horizontal flex container
- **Gap:** 4rem (64px) between logos
- **Animation:** Continuous scroll from right to left, 20 seconds per cycle, linear, infinite loop
- **Animation behavior:** Translates from X=0 to X=-50% (seamless loop achieved by duplicating logos)
- **Pause on hover:** Animation pauses when user hovers over carousel

### Individual Logos
- **Height:** 60px
- **Width:** Auto (maintains aspect ratio)
- **Object-fit:** Contain
- **Default state:**
  - Filter: grayscale(100%) - fully desaturated
  - Opacity: 0.6 (60% transparent)
- **Hover state:**
  - Filter: grayscale(0%) - full color
  - Opacity: 1 (fully visible)
  - Transform: scale(1.1) - 10% larger
  - Transition: 0.3s ease on all properties

### Logo Images (in order, duplicated for seamless loop)
1. `mortensonlogo.webp` - Mortenson Construction
2. `myrgroup.webp` - Myr Construction  
3. `solvlogo.webp` - SOLV Construction
4. `comingsoon.webp` - Placeholder
5. `comingsoon.webp` - Placeholder
6. `comingsoon.webp` - Placeholder
7. (Repeat 1-6 for seamless loop)

### Animation Details for Figma
- **Direction:** Right to left scroll
- **Speed:** 20 seconds for complete cycle
- **Easing:** Linear (constant speed)
- **Technique:** The track contains 12 logos (6 unique + 6 duplicates) and moves exactly 50% left, creating an infinite seamless loop effect

### Decorative Background Element
The section has a subtle radial gradient overlay positioned top-right:
- `radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%)`
- 60% width, 200% height, rotated -30 degrees