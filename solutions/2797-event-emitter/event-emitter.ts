type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  private _subs: Record<string, Set<Callback>> = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    let set = this._subs[eventName];
    if (!set) {
      this._subs[eventName] = set = new Set();
    }

    set.add(callback);

    return {
      unsubscribe: () => {
          set.delete(callback);
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const result: any[] = [];
    
    const set = this._subs[eventName];
    if (set) {
        set.forEach((fn) => {
            result.push(fn(...args));
        });
    }

    return result;
  }
}