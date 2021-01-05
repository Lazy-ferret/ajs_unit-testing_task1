export default function showHealth(unit) {
  if (unit.health > 50) {
    return 'healthy';
  } if (unit.health <= 50 && unit.health >= 15) {
    return 'wounded';
  } return 'critical';
}
