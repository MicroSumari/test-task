export const DEFAULT_ROOT_INDEX = 3.6;
export const SIZE_TAGS = [
  "xxxs",
  "xxs",
  "xs",
  "sm",
  "smx",
  "md",
  "mdx",
  "lg",
  "xl",
  "xxl",
];
export const ROOT_MULTIPLIER = 1.618;

export function AssignValuesToSizes(root, sizes_list, multiplier) {
  let defaultSize = root || DEFAULT_ROOT_INDEX;
  const sizes = {};
  (SIZE_TAGS || sizes_list).forEach((el) => (sizes[el] = ""));

  for (const size in sizes) {
    sizes[size] = defaultSize;
    defaultSize = defaultSize * (ROOT_MULTIPLIER || multiplier);
  }

  return sizes;
}

export const SIZE_VALUES = AssignValuesToSizes(
  DEFAULT_ROOT_INDEX,
  SIZE_TAGS,
  ROOT_MULTIPLIER
);
