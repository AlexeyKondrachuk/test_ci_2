export default function Heroes(units) {
  units.sort((a, b) => b.health - a.health);
  return units;
}
