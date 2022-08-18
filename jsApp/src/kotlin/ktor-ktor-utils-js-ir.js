(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var classMeta = kotlin_kotlin.$_$.d8;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var Long = kotlin_kotlin.$_$.jb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var isObject = kotlin_kotlin.$_$.w8;
  var equals = kotlin_kotlin.$_$.f8;
  var hashCode = kotlin_kotlin.$_$.k8;
  var MutableMap = kotlin_kotlin.$_$.o4;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var Entry = kotlin_kotlin.$_$.j4;
  var isInterface = kotlin_kotlin.$_$.u8;
  var MutableEntry = kotlin_kotlin.$_$.n4;
  var charArray = kotlin_kotlin.$_$.z7;
  var charSequenceGet = kotlin_kotlin.$_$.a8;
  var toString = kotlin_kotlin.$_$.r2;
  var Char = kotlin_kotlin.$_$.za;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.d7;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var plus = kotlin_kotlin.$_$.o7;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var MutableIterator = kotlin_kotlin.$_$.l4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var Set = kotlin_kotlin.$_$.q4;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var MutableSet = kotlin_kotlin.$_$.p4;
  var firstOrNull = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var to = kotlin_kotlin.$_$.kc;
  var addAll = kotlin_kotlin.$_$.r4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_lastIndex = kotlin_kotlin.$_$.ga;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.o2;
  var equals_0 = kotlin_kotlin.$_$.y9;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var Comparable = kotlin_kotlin.$_$.ab;
  var Enum = kotlin_kotlin.$_$.eb;
  var isSuspendFunction = kotlin_kotlin.$_$.y8;
  var MutableList = kotlin_kotlin.$_$.m4;
  var ArrayList = kotlin_kotlin.$_$.a4;
  var emptyList = kotlin_kotlin.$_$.i5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.u5;
  var last = kotlin_kotlin.$_$.x5;
  var mutableListOf = kotlin_kotlin.$_$.c6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var extendThrowable = kotlin_kotlin.$_$.g8;
  var captureStack = kotlin_kotlin.$_$.x7;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Companion_getInstance = kotlin_kotlin.$_$.u3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s2;
  var createFailure = kotlin_kotlin.$_$.yb;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.t2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.u2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var Continuation = kotlin_kotlin.$_$.i7;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var toList = kotlin_kotlin.$_$.q6;
  var isNaN_0 = kotlin_kotlin.$_$.dc;
  var numberToLong = kotlin_kotlin.$_$.c9;
  var IllegalStateException = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.y1;
  //endregion
  //region block: pre-declaration
  function get_0(key) {
    var tmp0_elvis_lhs = this.o29(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  $toByteArrayCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $toByteArrayCOROUTINE$0.prototype.constructor = $toByteArrayCOROUTINE$0;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  function get_1(name) {
    var tmp0_safe_receiver = this.a2b(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_forEach = this.c2b();
    var tmp0_iterator = tmp0_forEach.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = element.s();
        }
        var k = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = element.t();
        }
        var v = tmp$ret$1;
        body(k, v);
      }
    }
    return Unit_getInstance();
  }
  WeekDay.prototype = Object.create(Enum.prototype);
  WeekDay.prototype.constructor = WeekDay;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  $proceedLoopCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $proceedLoopCOROUTINE$1.prototype.constructor = $proceedLoopCOROUTINE$1;
  DebugPipelineContext.prototype = Object.create(PipelineContext.prototype);
  DebugPipelineContext.prototype.constructor = DebugPipelineContext;
  InvalidPhaseException.prototype = Object.create(Error.prototype);
  InvalidPhaseException.prototype.constructor = InvalidPhaseException;
  After.prototype = Object.create(PipelinePhaseRelation.prototype);
  After.prototype.constructor = After;
  Before.prototype = Object.create(PipelinePhaseRelation.prototype);
  Before.prototype.constructor = Before;
  Last.prototype = Object.create(PipelinePhaseRelation.prototype);
  Last.prototype.constructor = Last;
  SuspendFunctionGun.prototype = Object.create(PipelineContext.prototype);
  SuspendFunctionGun.prototype.constructor = SuspendFunctionGun;
  InvalidTimestampException.prototype = Object.create(IllegalStateException.prototype);
  InvalidTimestampException.prototype.constructor = InvalidTimestampException;
  //endregion
  function AttributeKey(name) {
    this.m29_1 = name;
    var tmp$ret$0;
    {
      var tmp0_isEmpty = this.m29_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    }
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.m29_1;
  };
  AttributeKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.m29_1 === other.m29_1))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return getStringHashCode(this.m29_1);
  };
  AttributeKey.$metadata$ = classMeta('AttributeKey');
  function Attributes() {
  }
  Attributes.$metadata$ = interfaceMeta('Attributes');
  function putAll(_this__u8e3s4, other) {
    {
      var tmp0_forEach = other.t29();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          _this__u8e3s4.q29(element instanceof AttributeKey ? element : THROW_CCE(), other.n29(element));
        }
      }
    }
  }
  function toByteArray(_this__u8e3s4, $cont) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2a_1 = _this__u8e3s4;
  }
  $toByteArrayCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.c2a_1.d20(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes$default(ARGUMENT, 0, 1, null);
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
  $toByteArrayCOROUTINE$0.$metadata$ = classMeta('$toByteArrayCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj() {
    return function ($this$$receiver) {
      return $this$$receiver.d2a_1;
    };
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0() {
    return function ($this$$receiver) {
      return caseInsensitive($this$$receiver);
    };
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19() {
    return function ($this$$receiver) {
      return new Entry_0($this$$receiver.s().d2a_1, $this$$receiver.t());
    };
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0() {
    return function ($this$$receiver) {
      return new Entry_0(caseInsensitive($this$$receiver.s()), $this$$receiver.t());
    };
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    tmp.f2a_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype.d = function () {
    return this.f2a_1.d();
  };
  CaseInsensitiveMap.prototype.c11 = function (key) {
    return this.f2a_1.c2(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.d11 = function (key) {
    return this.f2a_1.i2(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.d11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.m = function () {
    return this.f2a_1.m();
  };
  CaseInsensitiveMap.prototype.r9 = function () {
    this.f2a_1.r9();
  };
  CaseInsensitiveMap.prototype.g2a = function (key, value) {
    return this.f2a_1.a(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.a = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.g2a(tmp, isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.h2a = function (from) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = from.r().e();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = element.s();
          }
          var key = tmp$ret$1;
          var tmp$ret$2;
          {
            tmp$ret$2 = element.t();
          }
          var value = tmp$ret$2;
          this.g2a(key, value);
        }
      }
    }
  };
  CaseInsensitiveMap.prototype.b3 = function (from) {
    return this.h2a(from);
  };
  CaseInsensitiveMap.prototype.i2a = function (key) {
    return this.f2a_1.va(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.va = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i2a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.j2 = function () {
    var tmp = this.f2a_1.j2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj();
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0());
  };
  CaseInsensitiveMap.prototype.r = function () {
    var tmp = this.f2a_1.r();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19();
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0());
  };
  CaseInsensitiveMap.prototype.k2 = function () {
    return this.f2a_1.k2();
  };
  CaseInsensitiveMap.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.f2a_1, this.f2a_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.f2a_1);
  };
  CaseInsensitiveMap.$metadata$ = classMeta('CaseInsensitiveMap', [MutableMap]);
  function Entry_0(key, value) {
    this.j2a_1 = key;
    this.k2a_1 = value;
  }
  Entry_0.prototype.s = function () {
    return this.j2a_1;
  };
  Entry_0.prototype.t = function () {
    return this.k2a_1;
  };
  Entry_0.prototype.l2a = function (newValue) {
    this.k2a_1 = newValue;
    return this.k2a_1;
  };
  Entry_0.prototype.la = function (newValue) {
    return this.l2a((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.j2a_1)) | 0) + hashCode(ensureNotNull(this.k2a_1)) | 0;
  };
  Entry_0.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.s(), this.j2a_1) ? equals(other.t(), this.k2a_1) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this.j2a_1 + '=' + this.k2a_1;
  };
  Entry_0.$metadata$ = classMeta('Entry', [MutableEntry]);
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      }
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_asDynamic = toString(_this__u8e3s4);
            tmp$ret$0 = tmp0_asDynamic;
          }
          var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
          tmp$ret$1 = tmp1_unsafeCast;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    }
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv();
    }
    return tmp.c4(tmp$ret$0);
  }
  function SilentSupervisor$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SilentSupervisor(parent);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.s1f = function (context, exception) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Unit_getInstance();
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function DelegatingMutableSet$iterator$1(this$0) {
    this.o2a_1 = this$0;
    this.n2a_1 = this$0.p2a_1.e();
  }
  DelegatingMutableSet$iterator$1.prototype.f = function () {
    return this.n2a_1.f();
  };
  DelegatingMutableSet$iterator$1.prototype.g = function () {
    return this.o2a_1.q2a_1(this.n2a_1.g());
  };
  DelegatingMutableSet$iterator$1.prototype.m7 = function () {
    return this.n2a_1.m7();
  };
  DelegatingMutableSet$iterator$1.$metadata$ = classMeta(undefined, [MutableIterator]);
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.p2a_1 = delegate;
    this.q2a_1 = convertTo;
    this.r2a_1 = convert;
    this.s2a_1 = this.p2a_1.d();
  }
  DelegatingMutableSet.prototype.t2a = function (_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
        var tmp0_iterator = _this__u8e3s4.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = this.r2a_1(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.u2a = function (_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
        var tmp0_iterator = _this__u8e3s4.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = this.q2a_1(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.d = function () {
    return this.s2a_1;
  };
  DelegatingMutableSet.prototype.v2a = function (element) {
    return this.p2a_1.b(this.r2a_1(element));
  };
  DelegatingMutableSet.prototype.b = function (element) {
    return this.v2a((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.w2a = function (elements) {
    return this.p2a_1.l(this.t2a(elements));
  };
  DelegatingMutableSet.prototype.l = function (elements) {
    return this.w2a(elements);
  };
  DelegatingMutableSet.prototype.r9 = function () {
    this.p2a_1.r9();
  };
  DelegatingMutableSet.prototype.x2a = function (element) {
    return this.p2a_1.l1(this.r2a_1(element));
  };
  DelegatingMutableSet.prototype.l1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x2a((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.y2a = function (elements) {
    return this.p2a_1.m1(this.t2a(elements));
  };
  DelegatingMutableSet.prototype.m1 = function (elements) {
    return this.y2a(elements);
  };
  DelegatingMutableSet.prototype.m = function () {
    return this.p2a_1.m();
  };
  DelegatingMutableSet.prototype.e = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.p2a_1);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.u2a(this.p2a_1);
    var tmp_0;
    if (other.m1(elements)) {
      var tmp$ret$0;
      {
        var tmp0_containsAll = other;
        tmp$ret$0 = elements.m1(tmp0_containsAll);
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_0(this.u2a(this.p2a_1));
  };
  DelegatingMutableSet.$metadata$ = classMeta('DelegatingMutableSet', [MutableSet]);
  function StringValues() {
  }
  StringValues.$metadata$ = interfaceMeta('StringValues');
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.f2b_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = ArrayList_init_$Create$_0();
        }
        var tmp0_also = tmp$ret$0;
        {
        }
        {
          $this.g2b(name);
          {
            var tmp0_set = $this.f2b_1;
            tmp0_set.a(name, tmp0_also);
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.h2b(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    this.e2b_1 = caseInsensitiveName;
    this.f2b_1 = this.e2b_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  StringValuesBuilderImpl.prototype.z2a = function () {
    return this.e2b_1;
  };
  StringValuesBuilderImpl.prototype.k2 = function () {
    return this.f2b_1;
  };
  StringValuesBuilderImpl.prototype.a2b = function (name) {
    return this.f2b_1.i2(name);
  };
  StringValuesBuilderImpl.prototype.b2b = function () {
    return this.f2b_1.j2();
  };
  StringValuesBuilderImpl.prototype.m = function () {
    return this.f2b_1.m();
  };
  StringValuesBuilderImpl.prototype.c2b = function () {
    return unmodifiable(this.f2b_1.r());
  };
  StringValuesBuilderImpl.prototype.i2b = function (name, value) {
    this.j2b(value);
    var list = ensureListForKey(this, name);
    list.r9();
    list.b(value);
  };
  StringValuesBuilderImpl.prototype.d11 = function (name) {
    var tmp0_safe_receiver = this.a2b(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesBuilderImpl.prototype.k2b = function (name, value) {
    this.j2b(value);
    ensureListForKey(this, name).b(value);
  };
  StringValuesBuilderImpl.prototype.l2b = function (stringValues) {
    stringValues.d2b(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  StringValuesBuilderImpl.prototype.h2b = function (name, values) {
    var tmp$ret$0;
    {
      var tmp0_let = ensureListForKey(this, name);
      {
      }
      var tmp0_iterator = values.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          this.j2b(element);
          tmp0_let.b(element);
        }
      }
      tmp$ret$0 = Unit_getInstance();
    }
  };
  StringValuesBuilderImpl.prototype.m2b = function (name) {
    this.f2b_1.va(name);
  };
  StringValuesBuilderImpl.prototype.r9 = function () {
    this.f2b_1.r9();
  };
  StringValuesBuilderImpl.prototype.g2b = function (name) {
  };
  StringValuesBuilderImpl.prototype.j2b = function (value) {
  };
  StringValuesBuilderImpl.$metadata$ = classMeta('StringValuesBuilderImpl', [StringValuesBuilder]);
  function listForKey($this, name) {
    return $this.o2b_1.i2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    this.n2b_1 = caseInsensitiveName;
    var tmp;
    if (this.n2b_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    {
      var tmp$ret$1;
      {
        tmp$ret$1 = values.r().e();
      }
      var tmp0_iterator = tmp$ret$1;
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = element.s();
          }
          var key = tmp$ret$2;
          var tmp$ret$3;
          {
            tmp$ret$3 = element.t();
          }
          var value = tmp$ret$3;
          {
            var tmp$ret$6;
            {
              var tmp0_List = value.d();
              var tmp$ret$5;
              {
                var list = ArrayList_init_$Create$(tmp0_List);
                {
                  {
                  }
                  var inductionVariable = 0;
                  if (inductionVariable < tmp0_List)
                    do {
                      var index = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      {
                        var tmp$ret$4;
                        {
                          tmp$ret$4 = value.h(index);
                        }
                        list.b(tmp$ret$4);
                      }
                    }
                     while (inductionVariable < tmp0_List);
                }
                tmp$ret$5 = list;
              }
              tmp$ret$6 = tmp$ret$5;
            }
            var tmp1_set = tmp$ret$6;
            newMap.a(key, tmp1_set);
          }
        }
      }
    }
    this.o2b_1 = newMap;
  }
  StringValuesImpl.prototype.z2a = function () {
    return this.n2b_1;
  };
  StringValuesImpl.prototype.d11 = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesImpl.prototype.a2b = function (name) {
    return listForKey(this, name);
  };
  StringValuesImpl.prototype.b2b = function () {
    return unmodifiable(this.o2b_1.j2());
  };
  StringValuesImpl.prototype.m = function () {
    return this.o2b_1.m();
  };
  StringValuesImpl.prototype.c2b = function () {
    return unmodifiable(this.o2b_1.r());
  };
  StringValuesImpl.prototype.d2b = function (body) {
    var tmp$ret$0;
    {
      var tmp0_iterator = this.o2b_1;
      tmp$ret$0 = tmp0_iterator.r().e();
    }
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.f()) {
      var tmp1_loop_parameter = tmp0_iterator_0.g();
      var tmp$ret$1;
      {
        tmp$ret$1 = tmp1_loop_parameter.s();
      }
      var key = tmp$ret$1;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_loop_parameter.t();
      }
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.n2b_1 + ') ' + this.c2b();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.n2b_1 === other.z2a()))
      return false;
    return entriesEquals(this.c2b(), other.c2b());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.c2b(), imul(31, this.n2b_1 | 0));
  };
  StringValuesImpl.$metadata$ = classMeta('StringValuesImpl', [StringValues]);
  function StringValuesBuilder() {
  }
  StringValuesBuilder.$metadata$ = interfaceMeta('StringValuesBuilder');
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    {
      {
      }
      {
        {
          var tmp0_forEach = builder.c2b();
          var tmp0_iterator = tmp0_forEach.e();
          while (tmp0_iterator.f()) {
            var element = tmp0_iterator.g();
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.s();
              }
              var name = tmp$ret$0;
              var tmp$ret$1;
              {
                tmp$ret$1 = element.t();
              }
              var values = tmp$ret$1;
              _this__u8e3s4.h2b(name, values);
            }
          }
        }
      }
      tmp$ret$2 = _this__u8e3s4;
    }
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    {
      var tmp0_flatMap = _this__u8e3s4.c2b();
      var tmp$ret$4;
      {
        var tmp0_flatMapTo = ArrayList_init_$Create$_0();
        var tmp0_iterator = tmp0_flatMap.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$3;
          {
            var tmp$ret$2;
            {
              var tmp0_map = element.t();
              var tmp$ret$1;
              {
                var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
                var tmp0_iterator_0 = tmp0_map.e();
                while (tmp0_iterator_0.f()) {
                  var item = tmp0_iterator_0.g();
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = to(element.s(), item);
                  }
                  tmp0_mapTo.b(tmp$ret$0);
                }
                tmp$ret$1 = tmp0_mapTo;
              }
              tmp$ret$2 = tmp$ret$1;
            }
            tmp$ret$3 = tmp$ret$2;
          }
          var list = tmp$ret$3;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$4 = tmp0_flatMapTo;
      }
      tmp$ret$5 = tmp$ret$4;
    }
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
            tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          }
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    {
      var tmp1_buildString = _this__u8e3s4.length;
      {
      }
      var tmp$ret$2;
      {
        var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
        {
        }
        {
          tmp0_apply.hf(original, 0, firstIndex);
          var inductionVariable_0 = firstIndex;
          var last_0 = get_lastIndex(original);
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply.r4(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
            }
             while (!(index_0 === last_0));
        }
        tmp$ret$2 = tmp0_apply;
      }
      tmp$ret$3 = tmp$ret$2.toString();
    }
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              var tmp0_asDynamic = toString(ch);
              tmp$ret$0 = tmp0_asDynamic;
            }
            var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.d2a_1 = content;
    var tmp = this;
    var tmp$ret$1;
    {
      var tmp0_lowercase = this.d2a_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    tmp.e2a_1 = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2a_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.d2a_1, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.e2a_1;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.d2a_1;
  };
  CaseInsensitiveString.$metadata$ = classMeta('CaseInsensitiveString');
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.p2b_1 = atomic$ref$1(emptyMap());
  }
  CopyOnWriteHashMap.prototype.i2 = function (key) {
    return this.p2b_1.a19_1.i2(key);
  };
  CopyOnWriteHashMap.$metadata$ = classMeta('CopyOnWriteHashMap');
  function Companion() {
    Companion_instance = this;
    this.q2b_1 = GMTDate_0(new Long(0, 0));
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_0();
    this.r2b_1 = seconds;
    this.s2b_1 = minutes;
    this.t2b_1 = hours;
    this.u2b_1 = dayOfWeek;
    this.v2b_1 = dayOfMonth;
    this.w2b_1 = dayOfYear;
    this.x2b_1 = month;
    this.y2b_1 = year;
    this.z2b_1 = timestamp;
  }
  GMTDate.prototype.a2c = function (other) {
    return this.z2b_1.f1(other.z2b_1);
  };
  GMTDate.prototype.l6 = function (other) {
    return this.a2c(other instanceof GMTDate ? other : THROW_CCE());
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + this.r2b_1 + ', minutes=' + this.s2b_1 + ', hours=' + this.t2b_1 + ', dayOfWeek=' + this.u2b_1 + ', dayOfMonth=' + this.v2b_1 + ', dayOfYear=' + this.w2b_1 + ', month=' + this.x2b_1 + ', year=' + this.y2b_1 + ', timestamp=' + toString_0(this.z2b_1) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = this.r2b_1;
    result = imul(result, 31) + this.s2b_1 | 0;
    result = imul(result, 31) + this.t2b_1 | 0;
    result = imul(result, 31) + this.u2b_1.hashCode() | 0;
    result = imul(result, 31) + this.v2b_1 | 0;
    result = imul(result, 31) + this.w2b_1 | 0;
    result = imul(result, 31) + this.x2b_1.hashCode() | 0;
    result = imul(result, 31) + this.y2b_1 | 0;
    result = imul(result, 31) + this.z2b_1.hashCode() | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.r2b_1 === tmp0_other_with_cast.r2b_1))
      return false;
    if (!(this.s2b_1 === tmp0_other_with_cast.s2b_1))
      return false;
    if (!(this.t2b_1 === tmp0_other_with_cast.t2b_1))
      return false;
    if (!this.u2b_1.equals(tmp0_other_with_cast.u2b_1))
      return false;
    if (!(this.v2b_1 === tmp0_other_with_cast.v2b_1))
      return false;
    if (!(this.w2b_1 === tmp0_other_with_cast.w2b_1))
      return false;
    if (!this.x2b_1.equals(tmp0_other_with_cast.x2b_1))
      return false;
    if (!(this.y2b_1 === tmp0_other_with_cast.y2b_1))
      return false;
    if (!this.z2b_1.equals(tmp0_other_with_cast.z2b_1))
      return false;
    return true;
  };
  GMTDate.$metadata$ = classMeta('GMTDate', [Comparable]);
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.b2c = function (ordinal) {
    return values()[ordinal];
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    WeekDay_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_1();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.e2c_1 = value;
  }
  WeekDay.$metadata$ = classMeta('WeekDay', undefined, undefined, undefined, undefined, Enum.prototype);
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.b2c = function (ordinal) {
    return values_0()[ordinal];
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    Month_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_2();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.h2c_1 = value;
  }
  Month.$metadata$ = classMeta('Month', undefined, undefined, undefined, undefined, Enum.prototype);
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $cont) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2c_1 = _this__u8e3s4;
  }
  $proceedLoopCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.r2c_1 = this.q2c_1.y2c_1;
            if (this.r2c_1 === -1) {
              this.bh_1 = 5;
              continue $sm;
            } else {
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.s2c_1 = this.q2c_1.v2c_1;
            if (this.r2c_1 >= this.s2c_1.d()) {
              this.q2c_1.z2c();
              this.bh_1 = 5;
              continue $sm;
            } else {
              this.bh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.t2c_1 = this.s2c_1.h(this.r2c_1);
            this.q2c_1.y2c_1 = this.r2c_1 + 1 | 0;
            this.bh_1 = 4;
            var tmp_0 = this.t2c_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.q2c_1, this.q2c_1.x2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 5;
            continue $sm;
          case 5:
            return this.q2c_1.x2c_1;
          case 6:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 6) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $proceedLoopCOROUTINE$1.$metadata$ = classMeta('$proceedLoopCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.v2c_1 = interceptors;
    this.w2c_1 = coroutineContext;
    this.x2c_1 = subject;
    this.y2c_1 = 0;
  }
  DebugPipelineContext.prototype.r19 = function () {
    return this.w2c_1;
  };
  DebugPipelineContext.prototype.a2d = function () {
    return this.x2c_1;
  };
  DebugPipelineContext.prototype.z2c = function () {
    this.y2c_1 = -1;
  };
  DebugPipelineContext.prototype.b2d = function (subject, $cont) {
    this.x2c_1 = subject;
    return this.c2d($cont);
  };
  DebugPipelineContext.prototype.c2d = function ($cont) {
    var index = this.y2c_1;
    if (index < 0)
      return this.x2c_1;
    if (index >= this.v2c_1.d()) {
      this.z2c();
      return this.x2c_1;
    }
    return proceedLoop(this, $cont);
  };
  DebugPipelineContext.prototype.d2d = function (initial, $cont) {
    this.y2c_1 = 0;
    this.x2c_1 = initial;
    return this.c2d($cont);
  };
  DebugPipelineContext.$metadata$ = classMeta('DebugPipelineContext', undefined, undefined, undefined, undefined, PipelineContext.prototype);
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_3().e2d_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    {
      var tmp0_check = Companion_getInstance_3().e2d_1.m();
      {
      }
      if (!tmp0_check) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'The shared empty array list has been modified';
        }
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, Object.create(PhaseContent.prototype));
  }
  function copyInterceptors($this) {
    $this.h2d_1 = $this.j2d();
    $this.i2d_1 = false;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.e2d_1 = tmp$ret$0;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_3();
    this.f2d_1 = phase;
    this.g2d_1 = relation;
    this.h2d_1 = interceptors;
    this.i2d_1 = true;
  }
  PhaseContent.prototype.l1g = function () {
    return this.h2d_1.m();
  };
  PhaseContent.prototype.d = function () {
    return this.h2d_1.d();
  };
  PhaseContent.prototype.k2d = function (interceptor) {
    if (this.i2d_1) {
      copyInterceptors(this);
    }
    this.h2d_1.b(interceptor);
  };
  PhaseContent.prototype.l2d = function (destination) {
    var interceptors = this.h2d_1;
    if (destination instanceof ArrayList) {
      destination.wa(destination.d() + interceptors.d() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.d();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.b(interceptors.h(index));
      }
       while (inductionVariable < last);
  };
  PhaseContent.prototype.m2d = function () {
    this.i2d_1 = true;
    return this.h2d_1;
  };
  PhaseContent.prototype.j2d = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$_0();
      }
      var tmp0_apply = tmp$ret$0;
      {
      }
      {
        tmp0_apply.l(this.h2d_1);
      }
      tmp$ret$1 = tmp0_apply;
    }
    return tmp$ret$1;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.f2d_1.n2d_1 + '`, ' + this.d() + ' handlers';
  };
  PhaseContent.$metadata$ = classMeta('PhaseContent');
  function _set_interceptors__wod97b($this, value) {
    $this.s2d_1.a19_1 = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.s2d_1.a19_1;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.v2d());
  }
  function findPhase($this, phase) {
    var phasesList = $this.q2d_1;
    var inductionVariable = 0;
    var last = phasesList.d();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.p9(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.f2d_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.q2d_1;
    var inductionVariable = 0;
    var last = phasesList.d();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.f2d_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.q2d_1;
    var inductionVariable = 0;
    var last = phasesList.d();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.f2d_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.r2d_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.q2d_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.h(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.l1g())
            continue $l$loop_0;
          var interceptors = phaseContent.m2d();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.h(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.l2d(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.t2d_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.t2d_1 = false;
    $this.u2d_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.t2d_1 = false;
    $this.u2d_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.m2d());
    $this.t2d_1 = false;
    $this.u2d_1 = phaseContent.f2d_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.q2d_1.m() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.t2d_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.u2d_1, phase)) {
      currentInterceptors.b(block);
      return true;
    }
    if (equals(phase, last($this.q2d_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.q2d_1)) {
      ensureNotNull(findPhase($this, phase)).k2d(block);
      currentInterceptors.b(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.o2d_1 = Attributes_0(true);
    this.p2d_1 = false;
    this.q2d_1 = mutableListOf(phases.slice());
    this.r2d_1 = 0;
    this.s2d_1 = atomic$ref$1(null);
    this.t2d_1 = false;
    this.u2d_1 = null;
  }
  Pipeline.prototype.v2d = function () {
    return this.p2d_1;
  };
  Pipeline.prototype.w2d = function (context, subject, $cont) {
    var tmp$ret$0;
    {
      tmp$ret$0 = $cont.r3();
    }
    return createContext(this, context, subject, tmp$ret$0).d2d(subject, $cont);
  };
  Pipeline.prototype.y2d = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.q2d_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.q2d_1.h(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g2d_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.z2d_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.q2d_1.da(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  Pipeline.prototype.a2e = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.q2d_1.da(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  Pipeline.prototype.b2e = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.r2d_1;
      tmp1_this.r2d_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.k2d(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.r2d_1;
    tmp3_this.r2d_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.c2e();
  };
  Pipeline.prototype.c2e = function () {
  };
  Pipeline.$metadata$ = classMeta('Pipeline');
  function PipelineContext(context) {
    this.x2d_1 = context;
  }
  PipelineContext.$metadata$ = classMeta('PipelineContext', [CoroutineScope]);
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    var tmp;
    if (debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.n2d_1 = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.n2d_1 + "')";
  };
  PipelinePhase.$metadata$ = classMeta('PipelinePhase');
  function InvalidPhaseException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, InvalidPhaseException);
  }
  InvalidPhaseException.$metadata$ = classMeta('InvalidPhaseException', undefined, undefined, undefined, undefined, Error.prototype);
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.z2d_1 = relativeTo;
  }
  After.$metadata$ = classMeta('After', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.d2e_1 = relativeTo;
  }
  Before.$metadata$ = classMeta('Before', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  Last.$metadata$ = objectMeta('Last', undefined, undefined, undefined, undefined, PipelinePhaseRelation.prototype);
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  PipelinePhaseRelation.$metadata$ = classMeta('PipelinePhaseRelation');
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.k2e_1;
      if (currentIndex === $this.f2e_1.d()) {
        if (!direct) {
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance();
            var tmp1_success = $this.h2e_1;
            tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          }
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.k2e_1 = currentIndex + 1 | 0;
      var next = $this.f2e_1.h(currentIndex);
      try {
        var result = next($this, $this.h2e_1, $this.g2e_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp$ret$1;
          {
            var tmp2_failure = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.j2e_1 < 0) {
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.i2e_1[$this.j2e_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.j2e_1;
    tmp0_this.j2e_1 = tmp1 - 1 | 0;
    $this.i2e_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.s3(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        }
        tmp$ret$1 = next.s3(tmp$ret$0);
      }
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.j2e_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.j2e_1;
    tmp0_this.j2e_1 = tmp1 - 1 | 0;
    $this.i2e_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.j2e_1 = tmp0_this.j2e_1 + 1 | 0;
    $this.i2e_1[tmp0_this.j2e_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.m2e_1 = this$0;
    this.l2e_1 = IntCompanionObject_getInstance().v_1;
  }
  SuspendFunctionGun$continuation$1.prototype.r3 = function () {
    var tmp0_safe_receiver = this.m2e_1.i2e_1[this.m2e_1.j2e_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r3();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  SuspendFunctionGun$continuation$1.prototype.n2e = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      }
      resumeRootWith(this.m2e_1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.m2e_1, false);
  };
  SuspendFunctionGun$continuation$1.prototype.s3 = function (result) {
    return this.n2e(result);
  };
  SuspendFunctionGun$continuation$1.$metadata$ = classMeta(undefined, [Continuation, CoroutineStackFrame]);
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.f2e_1 = blocks;
    var tmp = this;
    tmp.g2e_1 = new SuspendFunctionGun$continuation$1(this);
    this.h2e_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    {
      var tmp0_arrayOfNulls = this.f2e_1.d();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_0.i2e_1 = tmp$ret$0;
    this.j2e_1 = -1;
    this.k2e_1 = 0;
  }
  SuspendFunctionGun.prototype.r19 = function () {
    return this.g2e_1.r3();
  };
  SuspendFunctionGun.prototype.a2d = function () {
    return this.h2e_1;
  };
  SuspendFunctionGun.prototype.c2d = function ($cont) {
    var tmp$ret$0;
    $l$block_0: {
      var tmp0__anonymous__q1qw7t = $cont;
      if (this.k2e_1 === this.f2e_1.d()) {
        tmp$ret$0 = this.h2e_1;
        break $l$block_0;
      }
      addContinuation(this, tmp0__anonymous__q1qw7t);
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.h2e_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  SuspendFunctionGun.prototype.b2d = function (subject, $cont) {
    this.h2e_1 = subject;
    return this.c2d($cont);
  };
  SuspendFunctionGun.prototype.d2d = function (initial, $cont) {
    this.k2e_1 = 0;
    if (this.k2e_1 === this.f2e_1.d())
      return initial;
    this.h2e_1 = initial;
    if (this.j2e_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.c2d($cont);
  };
  SuspendFunctionGun.$metadata$ = classMeta('SuspendFunctionGun', undefined, undefined, undefined, undefined, PipelineContext.prototype);
  function TypeInfo(type, reifiedType, kotlinType) {
    this.o2e_1 = type;
    this.p2e_1 = reifiedType;
    this.q2e_1 = kotlinType;
  }
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + this.o2e_1 + ', reifiedType=' + this.p2e_1 + ', kotlinType=' + this.q2e_1 + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = this.o2e_1.hashCode();
    result = imul(result, 31) + hashCode(this.p2e_1) | 0;
    result = imul(result, 31) + (this.q2e_1 == null ? 0 : hashCode(this.q2e_1)) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.o2e_1.equals(tmp0_other_with_cast.o2e_1))
      return false;
    if (!equals(this.p2e_1, tmp0_other_with_cast.p2e_1))
      return false;
    if (!equals(this.q2e_1, tmp0_other_with_cast.q2e_1))
      return false;
    return true;
  };
  TypeInfo.$metadata$ = classMeta('TypeInfo');
  function Attributes_0(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    tmp.r2e_1 = tmp$ret$0;
  }
  AttributesJs.prototype.o29 = function (key) {
    var tmp = this.r2e_1.i2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AttributesJs.prototype.p29 = function (key) {
    return this.r2e_1.c2(key);
  };
  AttributesJs.prototype.q29 = function (key, value) {
    {
      var tmp0_set = this.r2e_1;
      tmp0_set.a(key, value);
    }
  };
  AttributesJs.prototype.r29 = function (key) {
    this.r2e_1.va(key);
  };
  AttributesJs.prototype.s29 = function (key, block) {
    var tmp0_safe_receiver = this.r2e_1.i2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
      }
    }
    var tmp$ret$1;
    {
      var tmp0_also = block();
      {
      }
      {
        {
          var tmp0_set = this.r2e_1;
          tmp0_set.a(key, tmp0_also);
        }
      }
      tmp$ret$1 = tmp0_also;
    }
    return tmp$ret$1;
  };
  AttributesJs.prototype.t29 = function () {
    return toList(this.r2e_1.j2());
  };
  AttributesJs.$metadata$ = classMeta('AttributesJs', [Attributes]);
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.s2e_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.t2e_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.u2e_1 = false;
    this.v2e_1 = false;
    this.w2e_1 = false;
    this.x2e_1 = true;
  }
  PlatformUtils.prototype.y2e = function () {
    return this.s2e_1;
  };
  PlatformUtils.$metadata$ = objectMeta('PlatformUtils');
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function GMTDate_0(timestamp) {
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fg();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = new Date(tmp1_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    {
      {
      }
      var dayOfWeek = Companion_getInstance_1().b2c((date.getUTCDay() + 6 | 0) % 7 | 0);
      var month = Companion_getInstance_2().b2c(date.getUTCMonth());
      return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
    }
  }
  function GMTDate$default(timestamp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      timestamp = null;
    return GMTDate_0(timestamp);
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  InvalidTimestampException.$metadata$ = classMeta('InvalidTimestampException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.ed(_this__u8e3s4);
  }
  function Type() {
  }
  Type.$metadata$ = interfaceMeta('Type');
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = objectMeta('JsType', [Type]);
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  _no_name_provided__qut3iv.prototype.v3 = get;
  _no_name_provided__qut3iv.prototype.b4 = fold;
  _no_name_provided__qut3iv.prototype.a4 = minusKey;
  _no_name_provided__qut3iv.prototype.c4 = plus;
  AttributesJs.prototype.n29 = get_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = GMTDate$default;
  _.$_$.c = SilentSupervisor$default;
  _.$_$.d = JsType_getInstance;
  _.$_$.e = PlatformUtils_getInstance;
  _.$_$.f = CopyOnWriteHashMap;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = instanceOf;
  _.$_$.k = typeInfoImpl;
  _.$_$.l = AttributeKey;
  _.$_$.m = Attributes_0;
  _.$_$.n = forEach;
  _.$_$.o = get_1;
  _.$_$.p = StringValuesBuilderImpl;
  _.$_$.q = StringValuesBuilder;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = flattenEntries;
  _.$_$.v = isLowerCase;
  _.$_$.w = putAll;
  _.$_$.x = toCharArray;
  _.$_$.y = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js')));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map