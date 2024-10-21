let counter = Math.floor(Math.random() * 0xffffff); // 3-byte counter initialized randomly

function generateObjectId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp
  const random = Math.random().toString(16).substring(2, 12); // 5-byte random value
  counter = (counter + 1) % 0xffffff; // Increment counter, loop back if exceeds 3 bytes
  const counterHex = counter.toString(16).padStart(6, "0"); // 3-byte counter

  return (timestamp + random + counterHex).padEnd(24, "0").substring(0, 24);
}

export { generateObjectId };
