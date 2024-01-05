export default function taskBlock(trueOrFalse) {
  let task = false;  // Changed from var to let
  const task2 = true; // Changed from var to const

  if (trueOrFalse) {
    let task = true;  // Changed from var to let
    const task2 = false;  // Changed from var to const
  }

  return [task, task2];
}
