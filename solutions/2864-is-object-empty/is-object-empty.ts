function isEmpty(obj: Record<string, any> | any[]): boolean {
  for (let value in obj) {
    return false;
  }

  return true;
};