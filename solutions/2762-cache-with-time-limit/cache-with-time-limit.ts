class TimeLimitedCache {
  private data: Map<number, { value: number, expiration: number }> = new Map();

  set(key: number, value: number, duration: number): boolean {
    if (this.data.has(key) && this.data.get(key).expiration > Date.now()) {
      this.data.set(key, { value, expiration: Date.now() + duration });
      return true;
    } else {
      this.data.set(key, { value, expiration: Date.now() + duration });
      return false;
    }
  }

  get(key: number): number {
    if (this.data.has(key) && this.data.get(key).expiration > Date.now()) {
      return this.data.get(key).value;
    } else {
      return -1;
    }
  }

  count(): number {
    let count = 0;
    for (const key of this.data.keys()) {
      if (this.data.get(key).expiration > Date.now()) {
        count++;
      }
    }
    return count;
  }
}