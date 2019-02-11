child selectors
layout choices/google - table, float, inline-block, flex, grid, boxes, positioning
image scaling -> remember flex stretch default
object-fit
chrome devtools: can search with css selectors
chrome devtools: css is ordered by specificity
workflow learnings
transform applies after box model
    => for example self-scale image
:after is inside the element, not after it
clearfix: applied after children are scaled, therefore relative child scaling is different
shadows: default shadow is 0, must be explicit to see something
absolute positioning with no positioned ancestor uses VIEWPORT (html), not body
    => = initial formatting context
using svg as mask to fill its shape
border-radius slash syntax for separate horizontal/vertical radius
block element inside inline-block
inline-block is put on new line if it doesn't fit as a block on previous line
paddings can overlap (when inline) => must be inline-block or block to respect paddings
margin collapsing
font-size can be relative using percentage to scale from inherited size
fill remaining width via css: float, flex, table
CSS specificity OVERRULES ORDER (later definition)
flex-basis overrules width/height
mobile resolutions
    > high-res phones may declare themselves as lower-res to prevent
        desktop-optimized display of websites
    > Narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.
problem with zooming and relative sizing
IMAGE PADDING with border-box sizing affects image aspect ratio
media queries: width, height, aspect-ratio, orientation


/* Child selector learnings
:last-child selects an element that is the last child
    => NOT the last child of that element

To select last child of an element
=> parent > :last-child

Note: remember that descendent selector selects ALL descendants
To select only direct children use > selector
*/


/* WORKFLOW LEARNINGS
- the initial layout and planning is harder than adding padding and margins after
- must consider mobile/desktop layout differences for responsive design
- mobile serving: m-dot vs responsive vs dynamic serve
    - vs. progressive web app
*/


/* layout choice
-> google does use table for layout, for example on pagination
    => role = presentation
-> otherwise flex, sometimes float
-> inline-block for simple columns next to each other
*/

/* IMAGE SCALING
*********
images are scaled by aspect ratio automatically if only setting one value
except if inside flex container with align-self = stretch = default, or table etc.
==> set align-self or set height = 100% (for horizontal flex container)
*************

images and video are "replaced elements"
    => width and height depends on loaded file
    => presentation is (technically) outside the scope of CSS

*** object-fit property
=> default is fill = stretch
=> maintain aspect ratio: contain, cover, scale-down, none

Alternative: container + img with height 100%
Alternative: flex container + flex img
Also: max-width/max-height for responsive resizing
*/

/* JUSTIFY/ALIGN ITEMS 
in theory can apply to block-level elements
but in practice imlpementation only supports flex and grid
*/

/* LEARNINGS IMAGE SCALING
 scale image relative to itself: transform: scale(50%);
*/

/* LEARNINGS CSS DISPLAY
The display CSS property defines the display type of an element, which consists
of the two basic qualities of how an element generates boxes — the outer display
type defining how the box participates in flow layout, and the inner display
type defining how the children of the box are laid out.
*/

/* LEARNINGS - CSS table layout
CSS table layout is acceptable if HTML is not table semantics
=> using display: table, table-row, table-cell

=> works like a rigid flexbox
*/


/* LEARNINGS :after
:after pseudo element is placed INSIDE the element, at the very element
not actually after the element
*/

/* LEARNINGS INLINE-FLEX/BLOCK with multiple child elements
=> significance of VERTICAL-ALIGN for positioning in text flow
=> bottom vertical-align for inline-flex
*/

/* LEARNINGS FLOAT
float with clearfix does not affect the relative sizing of sibling elements
float forces block element

AFTER CLEARFIX: relative height of children doesn't account for clearfix
=> when position: absolute set, height works but taken out of page flow

*/

/* LEARNINGS
block element inside inline-block element = ?
=> block element takes up maximal width, therefore forces parent container to act as block level too?

inline-block with text grows to full width if not constrained
=> inline-block parents are treated as a single unit of all its children
=> if one child grows to full-width, the whole container does
=> if doesn't fit into line, will STAY AS BLOCK and put on next line
If the content of the inline-block does not fit on a single row, it will try
to fit as a whole on the next line. This is different from regular inline
elements, that most of the time is allowed to wrap to the next line.
*/

/* FLEX
=> default align-self is auto = stretch
=> set to something else to get correct aspect ratio
=> also reset by explicitly setting height: 100%

flex justify-content does not support "stretch"

default flex-shrink is 1

Difference between FLEX BASIS and WIDTH

Flex relative %width depends on AVAILABLE space

flex shorthand without explicit basis sets basis to 0%
*/
/*
footer .logo svg * {
    fill: hsl(193, 100%, 96%);
    color: hsl(193, 100%, 96%);
    
    display: block;
}
*/
/* LEARNINGS
- can use SVG as a MASK to get single color, using CSS property "mask" with no-repeat center
- alternatively: include svg code and apply fill to all svg elements
*/

/* PILL SHAPE BORDER
=> border-radius slash syntax to set horizontal vertical separately
*/

/* LEARNINGS SHADOW
default shadow is 0, therefore none
*/

/*
    absolute positioning note
    ==> when no positioned ancestor
        uses --- VIEWPORT (<html>) --- NOT body
    ====> Solve by setting body as positioned element
*/
