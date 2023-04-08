export const getCircles = ({ size, thickness, sections, roundCaps }) => {
  const sum = sections.reduce((acc, current) => acc + current.value, 0);
  const accumulated = Math.PI * ((size * 0.9 - thickness * 2) / 2) * 2;
  let offset = accumulated;
  const circles = [];
  const circlesInOrder = [];

  for (let i = 0; i < sections.length; i++) {
    circles.push({ sum, offset, data: sections[i], root: false });
    offset -= (sections[i].value / 100) * accumulated;
  }

  circles.push({ sum, offset, data: null, root: true });

  circlesInOrder.push({ ...circles[circles.length - 1], lineRoundCaps: false });
  if (circles.length > 2) {
    circlesInOrder.push({ ...circles[0], lineRoundCaps: roundCaps });
    circlesInOrder.push({
      ...circles[circles.length - 2],
      lineRoundCaps: roundCaps,
    });
    for (let i = 1; i <= circles.length - 3; i += 1) {
      circlesInOrder.push({ ...circles[i], lineRoundCaps: false });
    }
  } else {
    circlesInOrder.push({ ...circles[0], lineRoundCaps: roundCaps });
  }

  return circlesInOrder;
};
