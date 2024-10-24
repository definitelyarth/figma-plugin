function roundFloatsToInts(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(roundFloatsToInts);
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: Record<string, unknown> = {};
    for (const key in obj) {
      if (key == "opacity") {
        newObj[key] = (obj as Record<string, unknown>)[key];
        continue;
      }
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

function roundTo3Decimals(n: number): number {
  return Math.round((n + Number.EPSILON) * 1000) / 1000;
}

export { roundFloatsToInts, roundTo3Decimals };
