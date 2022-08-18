(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var captureStack = kotlin_kotlin.$_$.x7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var Exception = kotlin_kotlin.$_$.gb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.h1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var isInterface = kotlin_kotlin.$_$.u8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isObject = kotlin_kotlin.$_$.w8;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.q7;
  //endregion
  //region block: pre-declaration
  ContentConvertException.prototype = Object.create(Exception.prototype);
  ContentConvertException.prototype.constructor = ContentConvertException;
  JsonConvertException.prototype = Object.create(ContentConvertException.prototype);
  JsonConvertException.prototype.constructor = JsonConvertException;
  function register$default(contentType, converter, configuration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      configuration = Configuration$register$lambda();
    }
    return $handler == null ? this.i2s(contentType, converter, configuration) : $handler(contentType, converter, configuration);
  }
  function serialize(contentType, charset, typeInfo, value, $cont) {
    return this.l2s(contentType, charset, typeInfo, value, $cont);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $cont) {
    return this.k2s(contentType, charset, typeInfo, ensureNotNull(value), $cont);
  }
  deserialize$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$o$collect$slambda.prototype.constructor = deserialize$o$collect$slambda;
  $collectCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$1.prototype.constructor = $collectCOROUTINE$1;
  deserialize$o$collect$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$o$collect$slambda_1.prototype.constructor = deserialize$o$collect$slambda_1;
  $collectCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$2.prototype.constructor = $collectCOROUTINE$2;
  deserialize$slambda.prototype = Object.create(CoroutineImpl.prototype);
  deserialize$slambda.prototype.constructor = deserialize$slambda;
  $deserializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$0.prototype.constructor = $deserializeCOROUTINE$0;
  //endregion
  function JsonConvertException(message, cause) {
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  JsonConvertException.$metadata$ = classMeta('JsonConvertException', undefined, undefined, undefined, undefined, ContentConvertException.prototype);
  function ContentConvertException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  ContentConvertException.$metadata$ = classMeta('ContentConvertException', undefined, undefined, undefined, undefined, Exception.prototype);
  function Configuration$register$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function Configuration() {
  }
  Configuration.$metadata$ = interfaceMeta('Configuration');
  function ContentConverter() {
  }
  ContentConverter.$metadata$ = interfaceMeta('ContentConverter');
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $cont) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().k25_1;
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.d11(HttpHeaders_getInstance().e2h_1)).e();
    while (tmp0_iterator.f()) {
      var tmp1_loop_parameter = tmp0_iterator.g();
      var charset = tmp1_loop_parameter.h3();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().s28(charset))
        return Companion_getInstance().r28(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.a2t_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.l1p = function (value, $cont) {
    return this.a2t_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function deserialize$o$collect$slambda($body, $collector, resultContinuation) {
    this.j2t_1 = $body;
    this.k2t_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda.prototype.n2t = function (value, $cont) {
    var tmp = this.o2t(value, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  deserialize$o$collect$slambda.prototype.mh = function (p1, $cont) {
    return this.n2t((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 5;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!this.j2t_1.y1u()) {
              this.bh_1 = 3;
              suspendResult = this.k2t_1.l1p(this.l2t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 4;
            continue $sm;
          case 3:
            this.m2t_1 = suspendResult;
            this.bh_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 5) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  deserialize$o$collect$slambda.prototype.o2t = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.j2t_1, this.k2t_1, completion);
    i.l2t_1 = value;
    return i;
  };
  deserialize$o$collect$slambda.$metadata$ = classMeta('deserialize$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$o$collect$slambda_0($body, $collector, resultContinuation) {
    var i = new deserialize$o$collect$slambda($body, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.n2t(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x2t_1 = _this__u8e3s4;
    this.y2t_1 = collector;
  }
  $collectCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.x2t_1.a2u_1, this.y2t_1, null);
            suspendResult = this.x2t_1.z2t_1.m1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 2) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$1.$metadata$ = classMeta('$collectCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv($tmp0_filter, $body) {
    this.z2t_1 = $tmp0_filter;
    this.a2u_1 = $body;
  }
  _no_name_provided__qut3iv.prototype.b2u = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$1(this, collector, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  _no_name_provided__qut3iv.prototype.m1p = function (collector, $cont) {
    return this.b2u(collector, $cont);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Flow]);
  function deserialize$o$collect$slambda_1($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.k2u_1 = $collector;
    this.l2u_1 = $charset;
    this.m2u_1 = $typeInfo;
    this.n2u_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$o$collect$slambda_1.prototype.n2t = function (value, $cont) {
    var tmp = this.o2t(value, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  deserialize$o$collect$slambda_1.prototype.mh = function (p1, $cont) {
    return this.n2t((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$o$collect$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = this.o2u_1.m2s(this.l2u_1, this.m2u_1, this.n2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p2u_1 = suspendResult;
            this.bh_1 = 2;
            suspendResult = this.k2u_1.l1p(this.p2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 3) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  deserialize$o$collect$slambda_1.prototype.o2t = function (value, completion) {
    var i = new deserialize$o$collect$slambda_1(this.k2u_1, this.l2u_1, this.m2u_1, this.n2u_1, completion);
    i.o2u_1 = value;
    return i;
  };
  deserialize$o$collect$slambda_1.$metadata$ = classMeta('deserialize$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$o$collect$slambda_2($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda_1($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $cont) {
      return i.n2t(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y2u_1 = _this__u8e3s4;
    this.z2u_1 = collector;
  }
  $collectCOROUTINE$2.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_2(this.z2u_1, this.y2u_1.b2v_1, this.y2u_1.c2v_1, this.y2u_1.d2v_1, null);
            suspendResult = this.y2u_1.a2v_1.m1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 2) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $collectCOROUTINE$2.$metadata$ = classMeta('$collectCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_0($tmp1_map, $charset, $typeInfo, $body) {
    this.a2v_1 = $tmp1_map;
    this.b2v_1 = $charset;
    this.c2v_1 = $typeInfo;
    this.d2v_1 = $body;
  }
  _no_name_provided__qut3iv_0.prototype.e2v = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$2(this, collector, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  _no_name_provided__qut3iv_0.prototype.m1p = function (collector, $cont) {
    return this.e2v(collector, $cont);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function deserialize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  deserialize$slambda.prototype.o2v = function (it, $cont) {
    var tmp = this.p2v(it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  deserialize$slambda.prototype.mh = function (p1, $cont) {
    return this.o2v((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  deserialize$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        if (tmp === 0) {
          this.ch_1 = 1;
          return !(this.n2v_1 == null);
        } else if (tmp === 1) {
          throw this.eh_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  deserialize$slambda.prototype.p2v = function (it, completion) {
    var i = new deserialize$slambda(completion);
    i.n2v_1 = it;
    return i;
  };
  deserialize$slambda.$metadata$ = classMeta('deserialize$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function deserialize$slambda_0(resultContinuation) {
    var i = new deserialize$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.o2v(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2s_1 = _this__u8e3s4;
    this.w2s_1 = body;
    this.x2s_1 = typeInfo;
    this.y2s_1 = charset;
  }
  $deserializeCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            var tmp_0 = this;
            var tmp0_filter = asFlow(this.v2s_1);
            tmp_0.z2s_1 = new _no_name_provided__qut3iv(tmp0_filter, this.w2s_1);
            var tmp_1 = new _no_name_provided__qut3iv_0(this.z2s_1, this.y2s_1, this.x2s_1, this.w2s_1);
            suspendResult = firstOrNull(tmp_1, deserialize$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            return !(result == null) ? result : !this.w2s_1.y1u() ? this.w2s_1 : NullBody_getInstance();
          case 2:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 2) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$0.$metadata$ = classMeta('$deserializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = suitableCharset$default;
  _.$_$.d = Configuration;
  _.$_$.e = ContentConverter;
  _.$_$.f = JsonConvertException;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js')));

//# sourceMappingURL=ktor-ktor-serialization-js-ir.js.map