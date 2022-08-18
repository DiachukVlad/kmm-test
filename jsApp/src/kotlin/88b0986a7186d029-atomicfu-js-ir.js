(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var classMeta = kotlin_kotlin.$_$.d8;
  var toString = kotlin_kotlin.$_$.jc;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.a19_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.b19_1);
    }
  }
  function update(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.b19_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.b19_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function AtomicRef(value) {
    this.a19_1 = value;
  }
  AtomicRef.prototype.c19 = function (_set____db54di) {
    this.a19_1 = _set____db54di;
  };
  AtomicRef.prototype.d19 = function () {
    return this.a19_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.a19_1 === expect))
      return false;
    this.a19_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.a19_1;
    this.a19_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.a19_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.d19,
    set: AtomicRef.prototype.c19
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.e19_1 = value;
  }
  AtomicBoolean.prototype.f19 = function (_set____db54di) {
    this.e19_1 = _set____db54di;
  };
  AtomicBoolean.prototype.d19 = function () {
    return this.e19_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.e19_1 === expect))
      return false;
    this.e19_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.e19_1;
    this.e19_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.e19_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.d19,
    set: AtomicBoolean.prototype.f19
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.b19_1 = value;
  }
  AtomicInt.prototype.g19 = function (_set____db54di) {
    this.b19_1 = _set____db54di;
  };
  AtomicInt.prototype.d19 = function () {
    return this.b19_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.b19_1 === expect))
      return false;
    this.b19_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.b19_1;
    this.b19_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b19_1;
    tmp0_this.b19_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b19_1;
    tmp0_this.b19_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.b19_1;
    var tmp0_this = this;
    tmp0_this.b19_1 = tmp0_this.b19_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.b19_1 = tmp0_this.b19_1 + delta | 0;
    return this.b19_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.b19_1 = tmp0_this.b19_1 + 1 | 0;
    return tmp0_this.b19_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.b19_1 = tmp0_this.b19_1 - 1 | 0;
    return tmp0_this.b19_1;
  };
  AtomicInt.prototype.h19 = function (delta) {
    this.atomicfu$getAndAdd(delta);
  };
  AtomicInt.prototype.i19 = function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  };
  AtomicInt.prototype.toString = function () {
    return this.b19_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.d19,
    set: AtomicInt.prototype.g19
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.j19_1 = value;
  }
  AtomicLong.prototype.k19 = function (_set____db54di) {
    this.j19_1 = _set____db54di;
  };
  AtomicLong.prototype.d19 = function () {
    return this.j19_1;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this.j19_1.equals(expect))
      return false;
    this.j19_1 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.j19_1;
    this.j19_1 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.j19_1;
    tmp0_this.j19_1 = tmp1.og();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.j19_1;
    tmp0_this.j19_1 = tmp1.pg();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.j19_1;
    var tmp0_this = this;
    tmp0_this.j19_1 = tmp0_this.j19_1.v4(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.j19_1 = tmp0_this.j19_1.v4(delta);
    return this.j19_1;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.j19_1 = tmp0_this.j19_1.og();
    return tmp0_this.j19_1;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.j19_1 = tmp0_this.j19_1.pg();
    return tmp0_this.j19_1;
  };
  AtomicLong.prototype.toString = function () {
    return this.j19_1.toString();
  };
  AtomicLong.$metadata$ = classMeta('AtomicLong');
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype.d19,
    set: AtomicLong.prototype.k19
  });
  function atomic$long$1(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_2(initial, trace) {
    return new AtomicLong(initial);
  }
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.$metadata$ = classMeta('ReentrantLock');
  function synchronized(lock, block) {
    init_properties_Synchronized_kt_vep4ze();
    return block();
  }
  var properties_initialized_Synchronized_kt_8bwsba;
  function init_properties_Synchronized_kt_vep4ze() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$long$1;
  _.$_$.c = atomic$ref$1;
  _.$_$.d = atomic$int$1;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map