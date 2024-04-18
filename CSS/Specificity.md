The topic of specificity in CSS is fundamental to understanding how styles
applied to an HTML element are resolved when there are conflicting rules.

SPECIFICITY IN CSS: UNDERSTANDING STYLE PRIORITY

Specificity in CSS determines which rule is applied to an element when multiple
rules have conflicting styles. It is calculated based on the combination of
selectors used in a CSS rule. The more specific a rule is, the higher priority
it has over others.

CALCULATING SPECIFICITY
Specificity is calculated by adding values assigned to selectors in a CSS rule:

ID specificity: ----------------> 100
Class, Pseudo-class
or Attribute Specificity: ------> 10
Element Specificity: -----------> 1

For example:

p has a specificity of 1.
div p has a specificity of 2.
#id has a specificity of 100.

CONFLICT RESOLUTION
When two or more CSS rules have the same specificity, the rule that appears later in the document or style sheet is applied, in a process called "last rule standing."
