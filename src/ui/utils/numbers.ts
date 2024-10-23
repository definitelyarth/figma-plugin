function roundFloatsToInts(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(roundFloatsToInts);
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = roundFloatsToInts((obj as Record<string, unknown>)[key]);
      }
    }
    return newObj;
  } else if (typeof obj === "number" && !Number.isInteger(obj)) {
    return Math.round(obj);
  } else {
    return obj;
  }
}

export { roundFloatsToInts };
