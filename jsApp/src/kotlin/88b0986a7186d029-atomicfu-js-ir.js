(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.a2;
  var classMeta = kotlin_kotlin.$_$.s1;
  var toString = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.c9_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.d9_1);
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
    this.c9_1 = value;
  }
  AtomicRef.prototype.e9 = function (_set____db54di) {
    this.c9_1 = _set____db54di;
  };
  AtomicRef.prototype.f9 = function () {
    return this.c9_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.c9_1 === expect))
      return false;
    this.c9_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.c9_1;
    this.c9_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.c9_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.f9,
    set: AtomicRef.prototype.e9
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.g9_1 = value;
  }
  AtomicBoolean.prototype.h9 = function (_set____db54di) {
    this.g9_1 = _set____db54di;
  };
  AtomicBoolean.prototype.f9 = function () {
    return this.g9_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.g9_1 === expect))
      return false;
    this.g9_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.g9_1;
    this.g9_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.g9_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.f9,
    set: AtomicBoolean.prototype.h9
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.d9_1 = value;
  }
  AtomicInt.prototype.i9 = function (_set____db54di) {
    this.d9_1 = _set____db54di;
  };
  AtomicInt.prototype.f9 = function () {
    return this.d9_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.d9_1 === expect))
      return false;
    this.d9_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.d9_1;
    this.d9_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.d9_1;
    tmp0_this.d9_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.d9_1;
    tmp0_this.d9_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.d9_1;
    var tmp0_this = this;
    tmp0_this.d9_1 = tmp0_this.d9_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.d9_1 = tmp0_this.d9_1 + delta | 0;
    return this.d9_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.d9_1 = tmp0_this.d9_1 + 1 | 0;
    return tmp0_this.d9_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.d9_1 = tmp0_this.d9_1 - 1 | 0;
    return tmp0_this.d9_1;
  };
  AtomicInt.prototype.toString = function () {
    return this.d9_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.f9,
    set: AtomicInt.prototype.i9
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$ref$1;
  _.$_$.c = atomic$int$1;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map
