(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.a6;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var Enum = kotlin_kotlin.$_$.eb;
  var classMeta = kotlin_kotlin.$_$.d8;
  var toString = kotlin_kotlin.$_$.h9;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var get_lastIndex = kotlin_kotlin.$_$.v5;
  var compareTo = kotlin_kotlin.$_$.e8;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var encodeToByteArray = kotlin_kotlin.$_$.x9;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.q;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.c1;
  var writeText$default = kotlin_io_ktor_ktor_io.$_$.j;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  //endregion
  //region block: pre-declaration
  Codes.prototype = Object.create(Enum.prototype);
  Codes.prototype.constructor = Codes;
  FrameType.prototype = Object.create(Enum.prototype);
  FrameType.prototype.constructor = FrameType;
  Binary.prototype = Object.create(Frame.prototype);
  Binary.prototype.constructor = Binary;
  Text.prototype = Object.create(Frame.prototype);
  Text.prototype.constructor = Text;
  Close.prototype = Object.create(Frame.prototype);
  Close.prototype.constructor = Close;
  //endregion
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_associateBy = values();
      var capacity = coerceAtLeast(mapCapacity(tmp0_associateBy.length), 16);
      var tmp$ret$1;
      {
        var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
        var indexedObject = tmp0_associateBy;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            tmp$ret$0 = element.l2r_1;
          }
          tmp0_associateByTo.a(tmp$ret$0, element);
        }
        tmp$ret$1 = tmp0_associateByTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.m2r_1 = tmp$ret$2;
    this.n2r_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  Companion.prototype.o2r = function (code) {
    return this.m2r_1.i2(code);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.l2r_1 = code;
  }
  Codes.prototype.p2r = function () {
    return this.l2r_1;
  };
  Codes.$metadata$ = classMeta('Codes', undefined, undefined, undefined, undefined, Enum.prototype);
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.q2r_1 = code;
    this.r2r_1 = message;
  }
  CloseReason.prototype.p2r = function () {
    return this.q2r_1;
  };
  CloseReason.prototype.j1 = function () {
    return this.r2r_1;
  };
  CloseReason.prototype.s2r = function () {
    return Companion_getInstance().o2r(this.q2r_1);
  };
  CloseReason.prototype.toString = function () {
    var tmp0_elvis_lhs = this.s2r();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.q2r_1 : tmp0_elvis_lhs) + ', message=' + this.r2r_1 + ')';
  };
  CloseReason.prototype.hashCode = function () {
    var result = this.q2r_1;
    result = imul(result, 31) + getStringHashCode(this.r2r_1) | 0;
    return result;
  };
  CloseReason.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.q2r_1 === tmp0_other_with_cast.q2r_1))
      return false;
    if (!(this.r2r_1 === tmp0_other_with_cast.r2r_1))
      return false;
    return true;
  };
  CloseReason.$metadata$ = classMeta('CloseReason');
  function DefaultWebSocketSession() {
  }
  DefaultWebSocketSession.$metadata$ = interfaceMeta('DefaultWebSocketSession', [WebSocketSession]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.w1c = function () {
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_maxByOrNull = values_0();
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_maxByOrNull.length === 0;
      }
      if (tmp$ret$0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = tmp0_maxByOrNull[0];
      var lastIndex = get_lastIndex(tmp0_maxByOrNull);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      var tmp$ret$2;
      {
        var tmp1__anonymous__uwfjfc = maxElem;
        tmp$ret$2 = tmp1__anonymous__uwfjfc.w2r_1;
      }
      var maxValue = tmp$ret$2;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          var tmp$ret$3;
          {
            tmp$ret$3 = e.w2r_1;
          }
          var v = tmp$ret$3;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.x2r_1 = ensureNotNull(tmp$ret$1).w2r_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.x2r_1 + 1 | 0;
    var tmp$ret$4;
    {
      tmp$ret$4 = fillArrayVal(Array(tmp_2), null);
    }
    var tmp_3 = tmp$ret$4;
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$7;
      {
        var tmp$ret$6;
        $l$block_2: {
          var tmp0_singleOrNull = values_0();
          var single = null;
          var found = false;
          var indexedObject = tmp0_singleOrNull;
          var inductionVariable_0 = 0;
          var last = indexedObject.length;
          while (inductionVariable_0 < last) {
            var element = indexedObject[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$5;
            {
              tmp$ret$5 = element.w2r_1 === tmp_4;
            }
            if (tmp$ret$5) {
              if (found) {
                tmp$ret$6 = null;
                break $l$block_2;
              }
              single = element;
              found = true;
            }
          }
          if (!found) {
            tmp$ret$6 = null;
            break $l$block_2;
          }
          tmp$ret$6 = single;
        }
        tmp$ret$7 = tmp$ret$6;
      }
      tmp_3[tmp_4] = tmp$ret$7;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.y2r_1 = tmp_3;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    FrameType_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_0();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.v2r_1 = controlFrame;
    this.w2r_1 = opcode;
  }
  FrameType.prototype.z2r = function () {
    return this.w2r_1;
  };
  FrameType.$metadata$ = classMeta('FrameType', undefined, undefined, undefined, undefined, Enum.prototype);
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function WebSocketSession() {
  }
  WebSocketSession.$metadata$ = interfaceMeta('WebSocketSession', [CoroutineScope]);
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, Object.create(Binary.prototype));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray = Charsets_getInstance().k25_1;
      if (tmp0_toByteArray.equals(Charsets_getInstance().k25_1)) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.n25(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, Object.create(Text.prototype));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        {
          writeShort(builder, reason.q2r_1);
          writeText$default(builder, reason.r2r_1, 0, 0, null, 14, null);
        }
        tmp$ret$0 = builder.yn();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.kz();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, Object.create(Close.prototype));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes$default(packet, 0, 1, null));
    return $this;
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Binary.$metadata$ = classMeta('Binary', undefined, undefined, undefined, undefined, Frame.prototype);
  function Text(fin, data, rsv1, rsv2, rsv3) {
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Text.$metadata$ = classMeta('Text', undefined, undefined, undefined, undefined, Frame.prototype);
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  Close.$metadata$ = classMeta('Close', undefined, undefined, undefined, undefined, Frame.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
    this.a2s_1 = new Int8Array(0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_1();
    this.b2s_1 = fin;
    this.c2s_1 = frameType;
    this.d2s_1 = data;
    this.e2s_1 = disposableHandle;
    this.f2s_1 = rsv1;
    this.g2s_1 = rsv2;
    this.h2s_1 = rsv3;
  }
  Frame.prototype.toString = function () {
    return 'Frame ' + this.c2s_1 + ' (fin=' + this.b2s_1 + ', buffer len = ' + this.d2s_1.length + ')';
  };
  Frame.$metadata$ = classMeta('Frame');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_INTERNAL_ERROR_getInstance;
  _.$_$.c = Binary_init_$Create$;
  _.$_$.d = Close_init_$Create$;
  _.$_$.e = Text_init_$Create$;
  _.$_$.f = Companion_getInstance;
  _.$_$.g = CloseReason;
  _.$_$.h = DefaultWebSocketSession;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js')));

//# sourceMappingURL=ktor-ktor-websockets-js-ir.js.map