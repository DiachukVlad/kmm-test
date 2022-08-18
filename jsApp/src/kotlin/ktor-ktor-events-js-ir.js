(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var LinkedListNode = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var classMeta = kotlin_kotlin.$_$.d8;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.f;
  var equals = kotlin_kotlin.$_$.f8;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var addSuppressed = kotlin_kotlin.$_$.vb;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  //endregion
  //region block: pre-declaration
  HandlerRegistration.prototype = Object.create(LinkedListNode.prototype);
  HandlerRegistration.prototype.constructor = HandlerRegistration;
  //endregion
  function HandlerRegistration() {
  }
  HandlerRegistration.prototype.g2r = function () {
    return this.f2r_1;
  };
  HandlerRegistration.$metadata$ = classMeta('HandlerRegistration', [DisposableHandle], undefined, undefined, undefined, LinkedListNode.prototype);
  function Events() {
    this.h2r_1 = new CopyOnWriteHashMap();
  }
  Events.prototype.i2r = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.h2r_1.i2(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      {
        var cur = tmp0_safe_receiver.d1h();
        while (!equals(cur, tmp0_safe_receiver)) {
          if (cur instanceof HandlerRegistration) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              var tmp = tmp0__anonymous__q1qw7t.f2r_1;
              (typeof tmp === 'function' ? tmp : THROW_CCE())(value);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_0 = exception;
                var tmp_0;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_0 = null;
                } else {
                  addSuppressed(tmp0_safe_receiver_0, $p);
                  tmp_0 = Unit_getInstance();
                }
                var tmp1_elvis_lhs = tmp_0;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$0;
                  {
                    {
                    }
                    exception = $p;
                    tmp$ret$0 = Unit_getInstance();
                  }
                } else {
                }
              } else {
                throw $p;
              }
            }
          }
          cur = cur.a1h_1;
        }
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp1_safe_receiver;
      }
    }
  };
  Events.$metadata$ = classMeta('Events');
  function EventDefinition() {
  }
  EventDefinition.$metadata$ = classMeta('EventDefinition');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js')));

//# sourceMappingURL=ktor-ktor-events-js-ir.js.map