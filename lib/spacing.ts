const unit = 8;

const units = (n: number) => n * unit;

export const spacing = {
  xxs: units(0.25),
  xs: units(0.5),
  sm: unit,
  md: units(2),
  lg: units(4),
  xl: units(8),
  xxl: units(16),
  xxxl: units(2 * 16),
  unit,
  units
};
