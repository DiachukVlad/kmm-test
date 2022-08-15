(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.s1;
  var objectMeta = kotlin_kotlin.$_$.a2;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.n1;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.i2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.y1;
  var until = kotlin_kotlin.$_$.d2;
  var Long = kotlin_kotlin.$_$.g2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y;
  var SuspendFunction1 = kotlin_kotlin.$_$.o1;
  //endregion
  //region block: pre-declaration
  mainFunc$slambda.prototype = Object.create(CoroutineImpl.prototype);
  mainFunc$slambda.prototype.constructor = mainFunc$slambda;
  //endregion
  function Module() {
    this.pj_1 = 'fghjj';
  }
  Module.prototype.qwe = function () {
    return 'qweqwe';
  };
  Module.prototype.qj = function (_set____db54di) {
    this.pj_1 = _set____db54di;
  };
  Module.prototype.rj = function () {
    return this.pj_1;
  };
  Module.$metadata$ = classMeta('Module');
  Object.defineProperty(Module.prototype, 's', {
    configurable: true,
    get: Module.prototype.rj,
    set: Module.prototype.qj
  });
  function Obg() {
    Obg_instance = this;
    this.sj_1 = 123;
  }
  Obg.prototype.tj = function () {
    return this.sj_1;
  };
  Obg.$metadata$ = objectMeta('Obg');
  Object.defineProperty(Obg.prototype, 'r', {
    configurable: true,
    get: Obg.prototype.tj
  });
  var Obg_instance;
  function Obg_getInstance() {
    if (Obg_instance == null)
      new Obg();
    return Obg_instance;
  }
  function mainFunc() {
    var tmp = GlobalScope_getInstance();
    launch$default(tmp, null, null, mainFunc$slambda_0(null), 3, null);
    console.log('Hello Taras');
  }
  function mainFunc$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  mainFunc$slambda.prototype.fk = function ($this$launch, $cont) {
    var tmp = this.gk($this$launch, $cont);
    tmp.z7_1 = Unit_getInstance();
    tmp.a8_1 = null;
    return tmp.g8();
  };
  mainFunc$slambda.prototype.h8 = function (p1, $cont) {
    return this.fk((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mainFunc$slambda.prototype.g8 = function () {
    var suspendResult = this.z7_1;
    $sm: do
      try {
        var tmp = this.x7_1;
        switch (tmp) {
          case 0:
            this.y7_1 = 4;
            this.dk_1 = until(0, 5).b();
            this.x7_1 = 1;
            continue $sm;
          case 1:
            if (!this.dk_1.c()) {
              this.x7_1 = 3;
              continue $sm;
            }

            this.ek_1 = this.dk_1.d();
            this.x7_1 = 2;
            suspendResult = delay(new Long(2000, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            console.log('Message - ' + this.ek_1);
            this.x7_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.a8_1;
        }
      } catch ($p) {
        if (this.y7_1 === 4) {
          throw $p;
        } else {
          this.x7_1 = this.y7_1;
          this.a8_1 = $p;
        }
      }
     while (true);
  };
  mainFunc$slambda.prototype.gk = function ($this$launch, completion) {
    var i = new mainFunc$slambda(completion);
    i.ck_1 = $this$launch;
    return i;
  };
  mainFunc$slambda.$metadata$ = classMeta('mainFunc$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function mainFunc$slambda_0(resultContinuation) {
    var i = new mainFunc$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.fk($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  function $jsExportAll$(_) {
    _.Module = Module;
    Object.defineProperty(_, 'Obg', {
      configurable: true,
      get: Obg_getInstance
    });
    _.mainFunc = mainFunc;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js')));

//# sourceMappingURL=kmm-test-shared.js.map
