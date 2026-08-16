/**
 * Given the full agent list and the active index, splits the list into
 * "before" and "after" groups relative to the active agent, and decides
 * which side the detail panel should render on.
 *
 * Rule: the panel sits on whichever side has *more* remaining thumbnails,
 * since that's the side with more open room to grow into. If both sides
 * are equal, it defaults to the right.
 */
export function getAgentLayout(agents, activeIndex) {
  const before = agents.slice(0, activeIndex);
  const active = agents[activeIndex];
  const after = agents.slice(activeIndex + 1);
  const panelOnRight = after.length >= before.length;

  return { before, active, after, panelOnRight };
}
