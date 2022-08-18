(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var classMeta = kotlin_kotlin.$_$.d8;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var charSequenceGet = kotlin_kotlin.$_$.a8;
  var Char = kotlin_kotlin.$_$.za;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.f8;
  var Annotation = kotlin_kotlin.$_$.ya;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var hashCode = kotlin_kotlin.$_$.k8;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var Map = kotlin_kotlin.$_$.k4;
  var List = kotlin_kotlin.$_$.i4;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.ec;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var toInt = kotlin_kotlin.$_$.oa;
  var toLong = kotlin_kotlin.$_$.qa;
  var toDouble = kotlin_kotlin.$_$.ma;
  var toLongOrNull = kotlin_kotlin.$_$.pa;
  var toDoubleOrNull = kotlin_kotlin.$_$.la;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var toULongOrNull = kotlin_kotlin.$_$.ta;
  var Companion_getInstance = kotlin_kotlin.$_$.x3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.d3;
  var ULong = kotlin_kotlin.$_$.rb;
  var isInterface = kotlin_kotlin.$_$.u8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var lazy_0 = kotlin_kotlin.$_$.fc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toLong_0 = kotlin_kotlin.$_$.f9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.c3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.e3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.w2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.y2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.f3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.h3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c8;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var coerceAtMost = kotlin_kotlin.$_$.l9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var singleOrNull = kotlin_kotlin.$_$.l6;
  var arrayIterator = kotlin_kotlin.$_$.v7;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var getValue = kotlin_kotlin.$_$.q5;
  var copyOf = kotlin_kotlin.$_$.e5;
  var copyOf_0 = kotlin_kotlin.$_$.f5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.cb;
  var invoke = kotlin_kotlin.$_$.ac;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.db;
  var Unit = kotlin_kotlin.$_$.tb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var SuspendFunction2 = kotlin_kotlin.$_$.r7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var isObject = kotlin_kotlin.$_$.w8;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var plus = kotlin_kotlin.$_$.hc;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.hb;
  var isFinite = kotlin_kotlin.$_$.cc;
  var isFinite_0 = kotlin_kotlin.$_$.bc;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toUInt = kotlin_kotlin.$_$.sa;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var toULong = kotlin_kotlin.$_$.ua;
  var toUByte = kotlin_kotlin.$_$.ra;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.x2;
  var toUShort = kotlin_kotlin.$_$.va;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toString_0 = kotlin_kotlin.$_$.r2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.y3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.k6;
  var numberToChar = kotlin_kotlin.$_$.b9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q2;
  var equals_0 = kotlin_kotlin.$_$.y9;
  var toByte = kotlin_kotlin.$_$.e9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.l3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.p3;
  var toShort = kotlin_kotlin.$_$.g9;
  var single = kotlin_kotlin.$_$.ia;
  var emptySet = kotlin_kotlin.$_$.k5;
  var plus_0 = kotlin_kotlin.$_$.d6;
  var toList = kotlin_kotlin.$_$.q6;
  var Enum = kotlin_kotlin.$_$.eb;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var last = kotlin_kotlin.$_$.x5;
  var removeLast = kotlin_kotlin.$_$.h6;
  var lastIndexOf$default = kotlin_kotlin.$_$.o;
  var Long = kotlin_kotlin.$_$.jb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.m2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.t3;
  var charArray = kotlin_kotlin.$_$.z7;
  var indexOf$default = kotlin_kotlin.$_$.n;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), get_EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.xy_1 = configuration;
    this.yy_1 = serializersModule;
    this.zy_1 = new DescriptorSchemaCache();
  }
  Json.prototype.az = function () {
    return this.xy_1;
  };
  Json.prototype.dj = function () {
    return this.yy_1;
  };
  Json.prototype.bj = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp$ret$0;
      {
        var tmp0_arrayOfNulls = values().length;
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      }
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
      encoder.um(serializer, value);
      return result.toString();
    }finally {
      result.kz();
    }
  };
  Json.prototype.cj = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ji());
    var result = input.gl(deserializer);
    lexer.wz();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.yn();
    return new JsonImpl(conf, builder.j10_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.xz_1 = json.xy_1.k10_1;
    this.yz_1 = json.xy_1.p10_1;
    this.zz_1 = json.xy_1.l10_1;
    this.a10_1 = json.xy_1.m10_1;
    this.b10_1 = json.xy_1.n10_1;
    this.c10_1 = json.xy_1.o10_1;
    this.d10_1 = json.xy_1.q10_1;
    this.e10_1 = json.xy_1.r10_1;
    this.f10_1 = json.xy_1.s10_1;
    this.g10_1 = json.xy_1.t10_1;
    this.h10_1 = json.xy_1.u10_1;
    this.i10_1 = json.xy_1.v10_1;
    this.j10_1 = json.dj();
  }
  JsonBuilder.prototype.w10 = function () {
    return this.d10_1;
  };
  JsonBuilder.prototype.yn = function () {
    if (this.f10_1) {
      var tmp0_require = this.g10_1 === 'type';
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.c10_1) {
      {
        var tmp1_require = this.d10_1 === '    ';
        {
        }
        if (!tmp1_require) {
          var tmp$ret$1;
          {
            tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
          }
          var message_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
    } else if (!(this.d10_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        var tmp2_all = this.d10_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          {
            tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          }
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      {
        {
        }
        if (!allWhitespaces) {
          var tmp$ret$4;
          {
            tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.d10_1;
          }
          var message_1 = tmp$ret$4;
          throw IllegalArgumentException_init_$Create$(toString(message_1));
        }
      }
    }
    return new JsonConfiguration(this.xz_1, this.zz_1, this.a10_1, this.b10_1, this.c10_1, this.yz_1, this.d10_1, this.e10_1, this.f10_1, this.g10_1, this.h10_1, this.i10_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.dj(), get_EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.az().s10_1, $this.az().t10_1);
    $this.dj().gy(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.k10_1 = encodeDefaults;
    this.l10_1 = ignoreUnknownKeys;
    this.m10_1 = isLenient;
    this.n10_1 = allowStructuredMapKeys;
    this.o10_1 = prettyPrint;
    this.p10_1 = explicitNulls;
    this.q10_1 = prettyPrintIndent;
    this.r10_1 = coerceInputValues;
    this.s10_1 = useArrayPolymorphism;
    this.t10_1 = classDiscriminator;
    this.u10_1 = allowSpecialFloatingPointValues;
    this.v10_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.x10 = function () {
    return this.m10_1;
  };
  JsonConfiguration.prototype.w10 = function () {
    return this.q10_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.k10_1 + ', ignoreUnknownKeys=' + this.l10_1 + ', isLenient=' + this.m10_1 + ', ' + ('allowStructuredMapKeys=' + this.n10_1 + ', prettyPrint=' + this.o10_1 + ', explicitNulls=' + this.p10_1 + ', ') + ("prettyPrintIndent='" + this.q10_1 + "', coerceInputValues=" + this.r10_1 + ', useArrayPolymorphism=' + this.s10_1 + ', ') + ("classDiscriminator='" + this.t10_1 + "', allowSpecialFloatingPointValues=" + this.u10_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    Companion_getInstance_6();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.a11();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.s();
      }
      var k = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.t();
      }
      var v = tmp$ret$1;
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp0_apply = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply, k);
            tmp0_apply.r4(_Char___init__impl__6a9atx(58));
            tmp0_apply.jf(v);
          }
          tmp$ret$2 = tmp0_apply;
        }
        tmp$ret$3 = tmp$ret$2.toString();
      }
      return tmp$ret$3;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.b11_1 = content;
  }
  JsonObject.prototype.r = function () {
    return this.b11_1.r();
  };
  JsonObject.prototype.j2 = function () {
    return this.b11_1.j2();
  };
  JsonObject.prototype.d = function () {
    return this.b11_1.d();
  };
  JsonObject.prototype.k2 = function () {
    return this.b11_1.k2();
  };
  JsonObject.prototype.c11 = function (key) {
    return this.b11_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.d11 = function (key) {
    return this.b11_1.i2(key);
  };
  JsonObject.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.d11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.m = function () {
    return this.b11_1.m();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.b11_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.b11_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.b11_1.r();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda(), 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.e11_1 = content;
  }
  JsonArray.prototype.d = function () {
    return this.e11_1.d();
  };
  JsonArray.prototype.f11 = function (element) {
    return this.e11_1.l1(element);
  };
  JsonArray.prototype.l1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.f11(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.g11 = function (elements) {
    return this.e11_1.m1(elements);
  };
  JsonArray.prototype.m1 = function (elements) {
    return this.g11(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.e11_1.h(index);
  };
  JsonArray.prototype.m = function () {
    return this.e11_1.m();
  };
  JsonArray.prototype.e = function () {
    return this.e11_1.e();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.e11_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.e11_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.e11_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.h11_1 = isString;
    this.i11_1 = toString(body);
  }
  JsonLiteral.prototype.a11 = function () {
    return this.i11_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.h11_1) {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp0_apply = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply, this.i11_1);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.toString();
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.i11_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.h11_1 === other.h11_1))
      return false;
    if (!(this.i11_1 === other.i11_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.h11_1 | 0;
    result = imul(31, result) + getStringHashCode(this.i11_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return function () {
      return JsonNullSerializer_getInstance();
    };
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.j11_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.k11_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1());
  }
  JsonNull.prototype.a11 = function () {
    return this.j11_1;
  };
  JsonNull.prototype.l11 = function () {
    return this.k11_1.t();
  };
  JsonNull.prototype.ts = function (typeParamsSerializers) {
    return this.l11();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.a11());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.a11());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.a11());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp0_toFloat = _this__u8e3s4.a11();
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = toDouble(tmp0_toFloat);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_unsafeCast;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.a11());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.a11();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.a11());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.a11());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return function () {
      return JsonPrimitiveSerializer_getInstance().m11_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().n11_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().o11_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().p11_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().q11_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.xi('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.xi('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.xi('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.xi('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.xi('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.r11_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype.ji = function () {
    return this.r11_1;
  };
  JsonElementSerializer.prototype.s11 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.um(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.um(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.um(JsonArraySerializer_getInstance(), value);
      }
    }
  };
  JsonElementSerializer.prototype.ki = function (encoder, value) {
    return this.s11(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.li = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.z10();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.m11_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.ji = function () {
    return this.m11_1;
  };
  JsonPrimitiveSerializer.prototype.t11 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.um(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      tmp = encoder.um(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.ki = function (encoder, value) {
    return this.t11(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.li = function (decoder) {
    var result = asJsonDecoder(decoder).z10();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.u11_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).ji();
    this.v11_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.sj = function () {
    return this.u11_1.sj();
  };
  JsonObjectDescriptor.prototype.tj = function () {
    return this.u11_1.tj();
  };
  JsonObjectDescriptor.prototype.uj = function () {
    return this.u11_1.uj();
  };
  JsonObjectDescriptor.prototype.kj = function () {
    return this.u11_1.kj();
  };
  JsonObjectDescriptor.prototype.vj = function () {
    return this.u11_1.vj();
  };
  JsonObjectDescriptor.prototype.wj = function (index) {
    return this.u11_1.wj(index);
  };
  JsonObjectDescriptor.prototype.xj = function (index) {
    return this.u11_1.xj(index);
  };
  JsonObjectDescriptor.prototype.yj = function (name) {
    return this.u11_1.yj(name);
  };
  JsonObjectDescriptor.prototype.zj = function (index) {
    return this.u11_1.zj(index);
  };
  JsonObjectDescriptor.prototype.ak = function (index) {
    return this.u11_1.ak(index);
  };
  JsonObjectDescriptor.prototype.rj = function () {
    return this.v11_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.p11_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.ji = function () {
    return this.p11_1;
  };
  JsonObjectSerializer.prototype.w11 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).ki(encoder, value);
  };
  JsonObjectSerializer.prototype.ki = function (encoder, value) {
    return this.w11(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.li = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).li(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.x11_1 = ListSerializer(JsonElementSerializer_getInstance()).ji();
    this.y11_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.sj = function () {
    return this.x11_1.sj();
  };
  JsonArrayDescriptor.prototype.tj = function () {
    return this.x11_1.tj();
  };
  JsonArrayDescriptor.prototype.uj = function () {
    return this.x11_1.uj();
  };
  JsonArrayDescriptor.prototype.kj = function () {
    return this.x11_1.kj();
  };
  JsonArrayDescriptor.prototype.vj = function () {
    return this.x11_1.vj();
  };
  JsonArrayDescriptor.prototype.wj = function (index) {
    return this.x11_1.wj(index);
  };
  JsonArrayDescriptor.prototype.xj = function (index) {
    return this.x11_1.xj(index);
  };
  JsonArrayDescriptor.prototype.yj = function (name) {
    return this.x11_1.yj(name);
  };
  JsonArrayDescriptor.prototype.zj = function (index) {
    return this.x11_1.zj(index);
  };
  JsonArrayDescriptor.prototype.ak = function (index) {
    return this.x11_1.ak(index);
  };
  JsonArrayDescriptor.prototype.rj = function () {
    return this.y11_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.q11_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.ji = function () {
    return this.q11_1;
  };
  JsonArraySerializer.prototype.z11 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ki(encoder, value);
  };
  JsonArraySerializer.prototype.ki = function (encoder, value) {
    return this.z11(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.li = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).li(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.n11_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.ji = function () {
    return this.n11_1;
  };
  JsonNullSerializer.prototype.a12 = function (encoder, value) {
    verify(encoder);
    encoder.zl();
  };
  JsonNullSerializer.prototype.ki = function (encoder, value) {
    return this.a12(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.li = function (decoder) {
    verify_0(decoder);
    if (decoder.tk()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.uk();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.o11_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.ji = function () {
    return this.o11_1;
  };
  JsonLiteralSerializer.prototype.b12 = function (encoder, value) {
    verify(encoder);
    if (value.h11_1) {
      return encoder.im(value.i11_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return encoder.em(tmp0_safe_receiver);
      }
    }
    var tmp1_safe_receiver = toULongOrNull(value.i11_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        var tmp_0 = encoder.jm(serializer_0(Companion_getInstance()).ji());
        var tmp$ret$1;
        {
          tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
        }
        tmp_0.em(tmp$ret$1);
        return Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      {
        {
        }
        return encoder.gm(tmp2_safe_receiver);
      }
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        return encoder.am(tmp3_safe_receiver);
      }
    }
    encoder.im(value.i11_1);
  };
  JsonLiteralSerializer.prototype.ki = function (encoder, value) {
    return this.b12(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.li = function (decoder) {
    var result = asJsonDecoder(decoder).z10();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = original$factory();
      tmp$ret$0 = $this.c12_1.t();
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.c12_1 = lazy_0($deferred);
  }
  defer$1.prototype.rj = function () {
    return _get_original__l7ku1m(this).rj();
  };
  defer$1.prototype.vj = function () {
    return _get_original__l7ku1m(this).vj();
  };
  defer$1.prototype.tj = function () {
    return _get_original__l7ku1m(this).tj();
  };
  defer$1.prototype.zj = function (index) {
    return _get_original__l7ku1m(this).zj(index);
  };
  defer$1.prototype.yj = function (name) {
    return _get_original__l7ku1m(this).yj(name);
  };
  defer$1.prototype.wj = function (index) {
    return _get_original__l7ku1m(this).wj(index);
  };
  defer$1.prototype.xj = function (index) {
    return _get_original__l7ku1m(this).xj(index);
  };
  defer$1.prototype.ak = function (index) {
    return _get_original__l7ku1m(this).ak(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(sb) {
    this.d12_1 = sb;
    this.e12_1 = true;
  }
  Composer.prototype.f12 = function (_set____db54di) {
    this.e12_1 = _set____db54di;
  };
  Composer.prototype.g12 = function () {
    this.e12_1 = true;
  };
  Composer.prototype.h12 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.i12 = function () {
    this.e12_1 = false;
  };
  Composer.prototype.j12 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.k12 = function (v) {
    return this.d12_1.bt(v);
  };
  Composer.prototype.l12 = function (v) {
    return this.d12_1.m12(v);
  };
  Composer.prototype.n12 = function (v) {
    return this.d12_1.m12(v.toString());
  };
  Composer.prototype.o12 = function (v) {
    return this.d12_1.m12(v.toString());
  };
  Composer.prototype.p12 = function (v) {
    return this.d12_1.cu(toLong_0(v));
  };
  Composer.prototype.q12 = function (v) {
    return this.d12_1.cu(toLong_0(v));
  };
  Composer.prototype.r12 = function (v) {
    return this.d12_1.cu(toLong_0(v));
  };
  Composer.prototype.s12 = function (v) {
    return this.d12_1.cu(v);
  };
  Composer.prototype.t12 = function (v) {
    return this.d12_1.m12(v.toString());
  };
  Composer.prototype.u12 = function (value) {
    return this.d12_1.v12(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.xy_1.o10_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(sb) {
    Composer.call(this, sb);
  }
  ComposerForUnsignedNumbers.prototype.r12 = function (v) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    }
    return Composer.prototype.l12.call(this, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.s12 = function (v) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    }
    return Composer.prototype.l12.call(this, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.p12 = function (v) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    }
    return Composer.prototype.l12.call(this, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.q12 = function (v) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
    }
    return Composer.prototype.l12.call(this, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(sb, json) {
    Composer.call(this, sb);
    this.a13_1 = json;
    this.b13_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.g12 = function () {
    this.f12(true);
    var tmp0_this = this;
    var tmp1 = tmp0_this.b13_1;
    tmp0_this.b13_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.h12 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.b13_1;
    tmp0_this.b13_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.i12 = function () {
    this.f12(false);
    this.l12('\n');
    {
      var tmp0_repeat = this.b13_1;
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            this.l12(this.a13_1.xy_1.q10_1);
          }
        }
         while (inductionVariable < tmp0_repeat);
    }
  };
  ComposerWithPrettyPrint.prototype.j12 = function () {
    this.k12(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.d13_1 = !descriptor.ak(index) ? descriptor.xj(index).kj() : false;
    return $this.d13_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.c13_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.d13_1 = false;
  }
  JsonElementMarker.prototype.vq = function (index) {
    this.c13_1.vq(index);
  };
  JsonElementMarker.prototype.wq = function () {
    return this.c13_1.wq();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.rj() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.vj() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.e13(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      {
        var tmp0_substring = charSequenceLength(_this__u8e3s4);
        tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      }
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    {
      var tmp1_substring = coerceAtLeast(start_0, 0);
      var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
      tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    }
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.kj() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.vj(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.yj(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.xy_1.v10_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.g13(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.i2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.tj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        {
          var tmp0_filterIsInstance = _this__u8e3s4.wj(i);
          var tmp$ret$0;
          {
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filterIsInstance.e();
            while (tmp0_iterator.f()) {
              var element = tmp0_iterator.g();
              if (element instanceof JsonNames) {
                tmp0_filterIsInstanceTo.b(element);
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h13_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_0.f()) {
              var element_0 = tmp0_iterator_0.g();
              {
                if (builder == null)
                  builder = createMapForCache(_this__u8e3s4.tj());
                buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
              }
            }
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).c2(name);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.zj(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.zj(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    {
      _this__u8e3s4.a(name, index);
    }
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.k13_1, 2);
    $this.i13_1 = copyOf($this.i13_1, newSize);
    $this.j13_1 = copyOf_0($this.j13_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(8), null);
    }
    tmp.i13_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = -1;
      }
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.j13_1 = tmp_3;
    this.k13_1 = -1;
  }
  JsonPath.prototype.l13 = function (sd) {
    var tmp0_this = this;
    tmp0_this.k13_1 = tmp0_this.k13_1 + 1 | 0;
    var depth = tmp0_this.k13_1;
    if (depth === this.i13_1.length) {
      resize(this);
    }
    this.i13_1[depth] = sd;
  };
  JsonPath.prototype.m13 = function (index) {
    this.j13_1[this.k13_1] = index;
  };
  JsonPath.prototype.n13 = function (key) {
    var tmp;
    if (!(this.j13_1[this.k13_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.k13_1 = tmp0_this.k13_1 + 1 | 0;
      tmp = tmp0_this.k13_1 === this.i13_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.i13_1[this.k13_1] = key;
    this.j13_1[this.k13_1] = -2;
  };
  JsonPath.prototype.o13 = function () {
    if (this.j13_1[this.k13_1] === -2) {
      this.i13_1[this.k13_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.p13 = function () {
    var depth = this.k13_1;
    if (this.j13_1[depth] === -2) {
      this.j13_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.k13_1;
      tmp0_this.k13_1 = tmp1 - 1 | 0;
    }
    if (!(this.k13_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.k13_1;
      tmp2_this.k13_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.q13 = function () {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply.kf('$');
          {
            var tmp0_repeat = this.k13_1 + 1 | 0;
            {
            }
            var inductionVariable = 0;
            if (inductionVariable < tmp0_repeat)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                {
                  var element = this.i13_1[index];
                  if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
                    if (equals(element.vj(), LIST_getInstance())) {
                      if (!(this.j13_1[index] === -1)) {
                        tmp0_apply.kf('[');
                        tmp0_apply.jf(this.j13_1[index]);
                        tmp0_apply.kf(']');
                      }
                    } else {
                      var idx = this.j13_1[index];
                      if (idx >= 0) {
                        tmp0_apply.kf('.');
                        tmp0_apply.kf(element.zj(idx));
                      }
                    }
                  } else {
                    if (!(element === Tombstone_getInstance())) {
                      tmp0_apply.kf('[');
                      tmp0_apply.kf("'");
                      tmp0_apply.jf(element);
                      tmp0_apply.kf("'");
                      tmp0_apply.kf(']');
                    }
                  }
                }
              }
               while (inductionVariable < tmp0_repeat);
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.q13();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function readObject($this) {
    var tmp$ret$2;
    {
      var lastToken = $this.r13_1.u13(get_TC_BEGIN_OBJ());
      if ($this.r13_1.v13() === get_TC_COMMA()) {
        $this.r13_1.e13('Unexpected leading comma', 0, null, 6, null);
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      var result = tmp$ret$0;
      $l$loop: while ($this.r13_1.w13()) {
        var key = $this.s13_1 ? $this.r13_1.y13() : $this.r13_1.x13();
        $this.r13_1.u13(get_TC_COLON());
        var tmp$ret$1;
        {
          tmp$ret$1 = $this.z13();
        }
        var element = tmp$ret$1;
        {
          result.a(key, element);
        }
        lastToken = $this.r13_1.a14();
        var tmp0_subject = lastToken;
        if (tmp0_subject === get_TC_COMMA())
        ;
        else if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.r13_1.e13('Expected end of the object or comma', 0, null, 6, null);
        }
      }
      if (lastToken === get_TC_BEGIN_OBJ()) {
        $this.r13_1.u13(get_TC_END_OBJ());
      } else if (lastToken === get_TC_COMMA()) {
        $this.r13_1.e13('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp$ret$2 = new JsonObject(result);
    }
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function readArray($this) {
    var lastToken = $this.r13_1.a14();
    if ($this.r13_1.v13() === get_TC_COMMA()) {
      $this.r13_1.e13('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var result = tmp$ret$0;
    while ($this.r13_1.w13()) {
      var element = $this.z13();
      result.b(element);
      lastToken = $this.r13_1.a14();
      if (!(lastToken === get_TC_COMMA())) {
        {
          var tmp0_require = $this.r13_1;
          var tmp1_require = lastToken === get_TC_END_LIST();
          var tmp2_require = tmp0_require.sz_1;
          if (!tmp1_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected end of the array or comma';
            }
            var tmp = tmp$ret$1;
            tmp0_require.e13(tmp, tmp2_require, null, 4, null);
          }
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.r13_1.u13(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.r13_1.e13('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.s13_1 ? true : !isString) {
      tmp = $this.r13_1.y13();
    } else {
      tmp = $this.r13_1.x13();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.w14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.b15 = function ($this$$receiver, it, $cont) {
    var tmp = this.c15($this$$receiver, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.b15(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.z14_1 = this.w14_1.r13_1.v13();
            if (this.z14_1 === get_TC_STRING()) {
              this.a15_1 = readValue(this.w14_1, true);
              this.bh_1 = 2;
              continue $sm;
            } else {
              if (this.z14_1 === get_TC_OTHER()) {
                this.a15_1 = readValue(this.w14_1, false);
                this.bh_1 = 2;
                continue $sm;
              } else {
                if (this.z14_1 === get_TC_BEGIN_OBJ()) {
                  this.bh_1 = 1;
                  suspendResult = readObject_0(this.x14_1, this.w14_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.z14_1 === get_TC_BEGIN_LIST()) {
                    this.a15_1 = readArray(this.w14_1);
                    this.bh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.w14_1.r13_1.e13("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.a15_1 = suspendResult;
            this.bh_1 = 2;
            continue $sm;
          case 2:
            return this.a15_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.c15 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.w14_1, completion);
    i.x14_1 = $this$$receiver;
    i.y14_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.b15($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j14_1 = _this__u8e3s4;
    this.k14_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 5;
            this.l14_1 = this.j14_1.r13_1.u13(get_TC_BEGIN_OBJ());
            if (this.j14_1.r13_1.v13() === get_TC_COMMA()) {
              this.j14_1.r13_1.e13('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.m14_1 = LinkedHashMap_init_$Create$();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!this.j14_1.r13_1.w13()) {
              this.bh_1 = 4;
              continue $sm;
            }

            this.n14_1 = this.j14_1.s13_1 ? this.j14_1.r13_1.y13() : this.j14_1.r13_1.x13();
            this.j14_1.r13_1.u13(get_TC_COLON());
            ;
            this.bh_1 = 2;
            suspendResult = this.k14_1.k5(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.m14_1.a(this.n14_1, element);
            ;
            this.l14_1 = this.j14_1.r13_1.a14();
            var tmp0_subject = this.l14_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.bh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.bh_1 = 4;
                continue $sm;
              } else {
                this.j14_1.r13_1.e13('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.bh_1 = 1;
            continue $sm;
          case 4:
            if (this.l14_1 === get_TC_BEGIN_OBJ()) {
              this.j14_1.r13_1.u13(get_TC_END_OBJ());
            } else if (this.l14_1 === get_TC_COMMA()) {
              this.j14_1.r13_1.e13('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.m14_1);
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
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.r13_1 = lexer;
    this.s13_1 = configuration.m10_1;
    this.t13_1 = 0;
  }
  JsonTreeReader.prototype.z13 = function () {
    var token = this.r13_1.v13();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.t13_1 = tmp0_this.t13_1 + 1 | 0;
      if (tmp0_this.t13_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.t13_1 = tmp1_this.t13_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.r13_1.e13(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.y10().xy_1.s10_1;
    }
    if (tmp) {
      serializer.ki(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.ji(), _this__u8e3s4.y10());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.ji().vj());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.ki(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.y10().xy_1.s10_1;
    }
    if (tmp) {
      return deserializer.li(_this__u8e3s4);
    }
    var tmp$ret$0;
    {
      var tmp0_cast = _this__u8e3s4.z10();
      var tmp1_cast = deserializer.ji();
      if (!(tmp0_cast instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.rj() + ', but had ' + getKClassFromExpression(tmp0_cast));
      }
      tmp$ret$0 = tmp0_cast;
    }
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer.ji(), _this__u8e3s4.y10());
    var tmp0_safe_receiver = jsonTree.d11(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a11();
    var tmp2_elvis_lhs = deserializer.oi(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.y10();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.sj().e();
    while (tmp0_iterator.f()) {
      var annotation = tmp0_iterator.g();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.d15_1;
    }
    return json.xy_1.t10_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.ji()).l1(classDiscriminator)) {
      var baseName = serializer.ji().rj();
      var actualName = actualSerializer.ji().rj();
      {
        var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.vj();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.dd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.e15_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.dd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.tj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.zj(i);
        if (name === $this.f15_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.e15_1 = useArrayPolymorphism;
    this.f15_1 = discriminator;
  }
  PolymorphismValidator.prototype.oy = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.ry = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ji();
    checkKind_0(this, descriptor, actualClass);
    if (!this.e15_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.sy = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.ty = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.f13_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.g15 = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      {
        var tmp0_getOrPut = this.f13_1;
        var value_0 = tmp0_getOrPut.i2(descriptor);
        var tmp;
        if (value_0 == null) {
          var tmp$ret$0;
          {
            tmp$ret$0 = createMapForCache(1);
          }
          var answer = tmp$ret$0;
          tmp0_getOrPut.a(descriptor, answer);
          tmp = answer;
        } else {
          tmp = value_0;
        }
        tmp$ret$1 = tmp;
      }
      var tmp1_set = tmp$ret$1;
      var tmp2_set = key instanceof Key ? key : THROW_CCE();
      var tmp3_set = isObject(value) ? value : THROW_CCE();
      tmp1_set.a(tmp2_set, tmp3_set);
    }
  };
  DescriptorSchemaCache.prototype.g13 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.h15(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return tmp0_safe_receiver;
      }
    }
    var value = defaultValue();
    this.g15(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.h15 = function (descriptor, key) {
    var tmp0_safe_receiver = this.f13_1.i2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.i2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.vl(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.nz_1.v13() === get_TC_COMMA()) {
      $this.nz_1.e13('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.pz_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.pz_1 === -1)) {
        hasComma = $this.nz_1.j15();
      }
    } else {
      $this.nz_1.i15(get_COLON());
    }
    var tmp;
    if ($this.nz_1.w13()) {
      if (decodingKey) {
        if ($this.pz_1 === -1) {
          var tmp0_require = $this.nz_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.sz_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'Unexpected trailing comma';
            }
            var tmp_0 = tmp$ret$0;
            tmp0_require.e13(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          var tmp3_require = $this.nz_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.sz_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected comma after the key-value pair';
            }
            var tmp_1 = tmp$ret$1;
            tmp3_require.e13(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.pz_1 = tmp0_this.pz_1 + 1 | 0;
      tmp = tmp0_this.pz_1;
    } else {
      if (hasComma) {
        $this.nz_1.e13("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.lz_1;
      var tmp1_tryCoerceValue = descriptor.xj(index);
      var tmp;
      if (!tmp1_tryCoerceValue.kj()) {
        var tmp$ret$0;
        {
          tmp$ret$0 = !$this.nz_1.k15();
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.vj(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          tmp$ret$2 = $this.nz_1.l15($this.qz_1.m10_1);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          {
            $this.nz_1.x13();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.nz_1.j15();
    while ($this.nz_1.w13()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.nz_1.i15(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.lz_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.qz_1.r10_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.nz_1.j15();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.rz_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.vq(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.nz_1.e13('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.rz_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wq();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.qz_1.l10_1) {
      $this.nz_1.n15($this.qz_1.m10_1);
    } else {
      $this.nz_1.m15(key);
    }
    return $this.nz_1.j15();
  }
  function decodeListIndex($this) {
    var hasComma = $this.nz_1.j15();
    var tmp;
    if ($this.nz_1.w13()) {
      if (!($this.pz_1 === -1) ? !hasComma : false) {
        $this.nz_1.e13('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.pz_1 = tmp0_this.pz_1 + 1 | 0;
      tmp = tmp0_this.pz_1;
    } else {
      if (hasComma) {
        $this.nz_1.e13('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.qz_1.m10_1) {
      tmp = $this.nz_1.p15();
    } else {
      tmp = $this.nz_1.o15();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.lz_1 = json;
    this.mz_1 = mode;
    this.nz_1 = lexer;
    this.oz_1 = this.lz_1.dj();
    this.pz_1 = -1;
    this.qz_1 = this.lz_1.xy_1;
    this.rz_1 = this.qz_1.p10_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.y10 = function () {
    return this.lz_1;
  };
  StreamingJsonDecoder.prototype.q15 = function () {
    return this.nz_1;
  };
  StreamingJsonDecoder.prototype.dj = function () {
    return this.oz_1;
  };
  StreamingJsonDecoder.prototype.z10 = function () {
    return (new JsonTreeReader(this.lz_1.xy_1, this.nz_1)).z13();
  };
  StreamingJsonDecoder.prototype.gl = function (deserializer) {
    try {
      return decodeSerializableValuePolymorphic(this, deserializer);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException(plus($p.message, ' at path: ') + this.nz_1.tz_1.q13(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.hl = function (descriptor) {
    var newMode = switchMode(this.lz_1, descriptor);
    this.nz_1.tz_1.l13(descriptor);
    this.nz_1.i15(newMode.t15_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.cg();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.lz_1, newMode, this.nz_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.mz_1.equals(newMode) ? this.lz_1.xy_1.p10_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.lz_1, newMode, this.nz_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.il = function (descriptor) {
    if (this.lz_1.xy_1.l10_1 ? descriptor.tj() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.nz_1.i15(this.mz_1.u15_1);
    this.nz_1.tz_1.p13();
  };
  StreamingJsonDecoder.prototype.tk = function () {
    var tmp;
    var tmp0_safe_receiver = this.rz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d13_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.nz_1.k15();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.uk = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.sl = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.mz_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.nz_1.tz_1.o13();
    }
    var value = AbstractDecoder.prototype.sl.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.nz_1.tz_1.n13(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.vl = function (descriptor) {
    var tmp0_subject = this.mz_1;
    var tmp0 = tmp0_subject.cg();
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.mz_1.equals(WriteMode_MAP_getInstance())) {
      this.nz_1.tz_1.m13(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.vk = function () {
    var tmp;
    if (this.qz_1.m10_1) {
      tmp = this.nz_1.w15();
    } else {
      tmp = this.nz_1.v15();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.wk = function () {
    var value = this.nz_1.x15();
    if (!value.equals(toLong_0(value.sg()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.nz_1.e13(tmp, 0, null, 6, null);
    }
    return value.sg();
  };
  StreamingJsonDecoder.prototype.xk = function () {
    var value = this.nz_1.x15();
    if (!value.equals(toLong_0(value.tg()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.nz_1.e13(tmp, 0, null, 6, null);
    }
    return value.tg();
  };
  StreamingJsonDecoder.prototype.yk = function () {
    var value = this.nz_1.x15();
    if (!value.equals(toLong_0(value.t6()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.nz_1.e13(tmp, 0, null, 6, null);
    }
    return value.t6();
  };
  StreamingJsonDecoder.prototype.zk = function () {
    return this.nz_1.x15();
  };
  StreamingJsonDecoder.prototype.al = function () {
    var tmp$ret$4;
    $l$block: {
      var tmp0_parseString = this.nz_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_unsafeCast = toDouble(input);
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0_unsafeCast;
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.lz_1.xy_1.u10_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.nz_1, result);
  };
  StreamingJsonDecoder.prototype.bl = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_parseString = this.nz_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = toDouble(input);
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.lz_1.xy_1.u10_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.nz_1, result);
  };
  StreamingJsonDecoder.prototype.cl = function () {
    var string = this.nz_1.y13();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.nz_1.e13(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.dl = function () {
    var tmp;
    if (this.qz_1.m10_1) {
      tmp = this.nz_1.p15();
    } else {
      tmp = this.nz_1.x13();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.el = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.nz_1, this.lz_1) : AbstractDecoder.prototype.el.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.y13();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.e13(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.y15_1 = lexer;
    this.z15_1 = json.dj();
  }
  JsonDecoderForUnsignedTypes.prototype.dj = function () {
    return this.z15_1;
  };
  JsonDecoderForUnsignedTypes.prototype.vl = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.yk = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.y15_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toInt = toUInt(input);
            tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.zk = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.y15_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toLong = toULong(input);
            tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.wk = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.y15_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toByte = toUByte(input);
            tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.xk = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.y15_1;
      var input = tmp0_parseString.y13();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toShort = toUShort(input);
            tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.e13(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.bz_1.i12();
    $this.im(ensureNotNull($this.iz_1));
    $this.bz_1.k12(get_COLON());
    $this.bz_1.j12();
    $this.im(descriptor.rj());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.bz_1 = composer;
    this.cz_1 = json;
    this.dz_1 = mode;
    this.ez_1 = modeReuseCache;
    this.fz_1 = this.cz_1.dj();
    this.gz_1 = this.cz_1.xy_1;
    this.hz_1 = false;
    this.iz_1 = null;
    var i = this.dz_1.cg();
    if (!(this.ez_1 == null)) {
      if (!(this.ez_1[i] === null) ? true : !(this.ez_1[i] === this))
        this.ez_1[i] = this;
    }
  }
  StreamingJsonEncoder.prototype.y10 = function () {
    return this.cz_1;
  };
  StreamingJsonEncoder.prototype.dj = function () {
    return this.fz_1;
  };
  StreamingJsonEncoder.prototype.um = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.y10().xy_1.s10_1;
      }
      if (tmp) {
        serializer.ki(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.ji(), this.y10());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.ji().vj());
      {
        this.iz_1 = baseClassDiscriminator;
      }
      actualSerializer.ki(this, value);
    }
  };
  StreamingJsonEncoder.prototype.hl = function (descriptor) {
    var newMode = switchMode(this.cz_1, descriptor);
    if (!equals(new Char(newMode.t15_1), new Char(get_INVALID()))) {
      this.bz_1.k12(newMode.t15_1);
      this.bz_1.g12();
    }
    if (!(this.iz_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.iz_1 = null;
    }
    if (this.dz_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.ez_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.cg()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.bz_1, this.cz_1, newMode, this.ez_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.il = function (descriptor) {
    if (!equals(new Char(this.dz_1.u15_1), new Char(get_INVALID()))) {
      this.bz_1.h12();
      this.bz_1.i12();
      this.bz_1.k12(this.dz_1.u15_1);
    }
  };
  StreamingJsonEncoder.prototype.xl = function (descriptor, index) {
    var tmp0_subject = this.dz_1;
    var tmp0 = tmp0_subject.cg();
    switch (tmp0) {
      case 1:
        if (!this.bz_1.e12_1)
          this.bz_1.k12(get_COMMA());
        this.bz_1.i12();
        break;
      case 2:
        if (!this.bz_1.e12_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.bz_1.k12(get_COMMA());
            this.bz_1.i12();
            tmp_0 = true;
          } else {
            this.bz_1.k12(get_COLON());
            this.bz_1.j12();
            tmp_0 = false;
          }
          tmp.hz_1 = tmp_0;
        } else {
          this.hz_1 = true;
          this.bz_1.i12();
        }

        break;
      case 3:
        if (index === 0)
          this.hz_1 = true;
        if (index === 1) {
          this.bz_1.k12(get_COMMA());
          this.bz_1.j12();
          this.hz_1 = false;
        }

        break;
      default:
        if (!this.bz_1.e12_1)
          this.bz_1.k12(get_COMMA());
        this.bz_1.i12();
        this.im(descriptor.zj(index));
        this.bz_1.k12(get_COLON());
        this.bz_1.j12();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.jm = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.bz_1.d12_1), this.cz_1, this.dz_1, null) : AbstractEncoder.prototype.jm.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.zl = function () {
    this.bz_1.l12(get_NULL());
  };
  StreamingJsonEncoder.prototype.am = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.t12(value);
  };
  StreamingJsonEncoder.prototype.bm = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.p12(value);
  };
  StreamingJsonEncoder.prototype.cm = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.q12(value);
  };
  StreamingJsonEncoder.prototype.dm = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.r12(value);
  };
  StreamingJsonEncoder.prototype.em = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.s12(value);
  };
  StreamingJsonEncoder.prototype.fm = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.n12(value);
    if (!this.gz_1.u10_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.bz_1.d12_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.gm = function (value) {
    if (this.hz_1)
      this.im(value.toString());
    else
      this.bz_1.o12(value);
    if (!this.gz_1.u10_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.bz_1.d12_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.hm = function (value) {
    this.im(toString_0(value));
  };
  StreamingJsonEncoder.prototype.im = function (value) {
    return this.bz_1.u12(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.uj() ? get_unsignedNumberDescriptors().l1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).ji(), serializer_0(Companion_getInstance()).ji(), serializer_2(Companion_getInstance_2()).ji(), serializer_3(Companion_getInstance_3()).ji()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      {
        tmp$ret$0 = 48;
      }
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 97;
      }
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.r4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          var tmp0__get_code__88qj9g = charSequenceGet(value, i);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        }
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.hf(value, lastPos, i);
          _this__u8e3s4.kf(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.hf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.kf(value);
    }
    _this__u8e3s4.r4(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = fillArrayVal(Array(93), null);
        }
        var tmp0_apply = tmp$ret$0;
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 31)
            do {
              var c = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var c1 = toHexChar(c >> 12);
              var c2 = toHexChar(c >> 8);
              var c3 = toHexChar(c >> 4);
              var c4 = toHexChar(c);
              tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
            }
             while (inductionVariable <= 31);
          var tmp$ret$1;
          {
            tmp$ret$1 = 34;
          }
          tmp0_apply[tmp$ret$1] = '\\"';
          var tmp$ret$2;
          {
            tmp$ret$2 = 92;
          }
          tmp0_apply[tmp$ret$2] = '\\\\';
          var tmp$ret$3;
          {
            tmp$ret$3 = 9;
          }
          tmp0_apply[tmp$ret$3] = '\\t';
          var tmp$ret$4;
          {
            tmp$ret$4 = 8;
          }
          tmp0_apply[tmp$ret$4] = '\\b';
          var tmp$ret$5;
          {
            tmp$ret$5 = 10;
          }
          tmp0_apply[tmp$ret$5] = '\\n';
          var tmp$ret$6;
          {
            tmp$ret$6 = 13;
          }
          tmp0_apply[tmp$ret$6] = '\\r';
          tmp0_apply[12] = '\\f';
        }
        tmp$ret$7 = tmp0_apply;
      }
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      {
        var tmp0_apply_0 = new Int8Array(93);
        {
        }
        {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 <= 31)
            do {
              var c_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0[c_0] = 1;
            }
             while (inductionVariable_0 <= 31);
          var tmp$ret$0_0;
          {
            tmp$ret$0_0 = 34;
          }
          var tmp = tmp$ret$0_0;
          var tmp$ret$1_0;
          {
            tmp$ret$1_0 = 34;
          }
          tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
          var tmp$ret$2_0;
          {
            tmp$ret$2_0 = 92;
          }
          var tmp_0 = tmp$ret$2_0;
          var tmp$ret$3_0;
          {
            tmp$ret$3_0 = 92;
          }
          tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
          var tmp$ret$4_0;
          {
            tmp$ret$4_0 = 9;
          }
          var tmp_1 = tmp$ret$4_0;
          var tmp$ret$5_0;
          {
            tmp$ret$5_0 = 116;
          }
          tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
          var tmp$ret$6_0;
          {
            tmp$ret$6_0 = 8;
          }
          var tmp_2 = tmp$ret$6_0;
          var tmp$ret$7_0;
          {
            tmp$ret$7_0 = 98;
          }
          tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
          var tmp$ret$8;
          {
            tmp$ret$8 = 10;
          }
          var tmp_3 = tmp$ret$8;
          var tmp$ret$9;
          {
            tmp$ret$9 = 110;
          }
          tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
          var tmp$ret$10;
          {
            tmp$ret$10 = 13;
          }
          var tmp_4 = tmp$ret$10;
          var tmp$ret$11;
          {
            tmp$ret$11 = 114;
          }
          tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
          var tmp$ret$12;
          {
            tmp$ret$12 = 102;
          }
          tmp0_apply_0[12] = toByte(tmp$ret$12);
        }
        tmp$ret$13 = tmp0_apply_0;
      }
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.tw();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = $this.f16(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.t() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.c16_1 = json;
    this.d16_1 = value;
    this.e16_1 = this.y10().xy_1;
  }
  AbstractJsonTreeDecoder.prototype.y10 = function () {
    return this.c16_1;
  };
  AbstractJsonTreeDecoder.prototype.t = function () {
    return this.d16_1;
  };
  AbstractJsonTreeDecoder.prototype.dj = function () {
    return this.y10().dj();
  };
  AbstractJsonTreeDecoder.prototype.az = function () {
    return this.e16_1;
  };
  AbstractJsonTreeDecoder.prototype.z10 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.gl = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.uw = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.hl = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.vj();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.y10();
      var tmp$ret$0;
      {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.rj() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$0 = currentObject_0;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        {
          var tmp0_selectMapMode = this.y10();
          var keyDescriptor = carrierDescriptor(descriptor.xj(0), tmp0_selectMapMode.dj());
          var keyKind = keyDescriptor.vj();
          var tmp_2;
          var tmp_3;
          if (keyKind instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            tmp_3 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_3) {
            var tmp$ret$2;
            {
              var tmp_4 = this.y10();
              var tmp$ret$1;
              {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.rj() + ', but had ' + getKClassFromExpression(currentObject_0));
                }
                tmp$ret$1 = currentObject_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode.xy_1.n10_1) {
              var tmp$ret$4;
              {
                var tmp_5 = this.y10();
                var tmp$ret$3;
                {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.rj() + ', but had ' + getKClassFromExpression(currentObject_0));
                  }
                  tmp$ret$3 = currentObject_0;
                }
                tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
              }
              tmp_2 = tmp$ret$4;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$5 = tmp_2;
        }
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.y10();
        var tmp$ret$6;
        {
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.rj() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$6 = currentObject_0;
        }
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.il = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.tk = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.g16 = function (tag) {
    var currentElement = this.f16(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.h16 = function (tag) {
    return !(this.f16(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.ww = function (tag) {
    return this.h16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i16 = function (tag) {
    var value = this.g16(tag);
    if (!this.y10().xy_1.m10_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.h11_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      try {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = get_booleanOrNull(value);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$_0();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.xw = function (tag) {
    return this.i16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.j16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance().m8_1;
          if (result <= ByteCompanionObject_getInstance().n8_1 ? containsLower <= result : false) {
            tmp = toByte(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.yw = function (tag) {
    return this.j16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.k16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance().u8_1;
          if (result <= ShortCompanionObject_getInstance().v8_1 ? containsLower <= result : false) {
            tmp = toShort(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.zw = function (tag) {
    return this.k16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.l16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_int(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.ax = function (tag) {
    return this.l16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.m16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_long(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.bx = function (tag) {
    return this.m16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.n16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_float(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.y10().xy_1.u10_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.cx = function (tag) {
    return this.n16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.o16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_double(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.y10().xy_1.u10_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.dx = function (tag) {
    return this.o16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.p16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.g16(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = single(tmp0_primitive.a11());
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.ex = function (tag) {
    return this.p16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.q16 = function (tag) {
    var value = this.g16(tag);
    if (!this.y10().xy_1.m10_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.h11_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.a11();
  };
  AbstractJsonTreeDecoder.prototype.fx = function (tag) {
    return this.q16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.r16 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.g16(tag).a11()), this.y10()) : NamedValueDecoder.prototype.gx.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.gx = function (tag, inlineDescriptor) {
    return this.r16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.y10();
      var tmp1_tryCoerceValue = descriptor.xj(index);
      var tmp;
      if (!tmp1_tryCoerceValue.kj()) {
        var tmp$ret$0;
        {
          var tmp_0 = $this.f16(tag);
          tmp$ret$0 = tmp_0 instanceof JsonNull;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.vj(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          var tmp_1 = $this.f16(tag);
          var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
          tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          {
            tmp$ret$3 = Unit_getInstance();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.b17_1 = (!$this.y10().xy_1.p10_1 ? !descriptor.ak(index) : false) ? descriptor.xj(index).kj() : false;
    return $this.b17_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.x16_1 = value;
    this.y16_1 = polyDiscriminator;
    this.z16_1 = polyDescriptor;
    this.a17_1 = 0;
    this.b17_1 = false;
  }
  JsonTreeDecoder.prototype.t = function () {
    return this.x16_1;
  };
  JsonTreeDecoder.prototype.vl = function (descriptor) {
    while (this.a17_1 < descriptor.tj()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.a17_1;
      tmp0_this.a17_1 = tmp1 + 1 | 0;
      var name = this.ow(descriptor, tmp1);
      var index = this.a17_1 - 1 | 0;
      this.b17_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      {
        var tmp0_contains = this.t();
        var tmp$ret$0;
        {
          tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).c2(name);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.az().r10_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.tk = function () {
    return !this.b17_1 ? AbstractJsonTreeDecoder.prototype.tk.call(this) : false;
  };
  JsonTreeDecoder.prototype.pw = function (desc, index) {
    var mainName = desc.zj(index);
    if (!this.az().v10_1)
      return mainName;
    if (this.t().j2().l1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.y10());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.g13(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    {
      var tmp0_find = this.t().j2();
      var tmp$ret$1;
      $l$block: {
        var tmp0_iterator = tmp0_find.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = alternativeNamesMap.i2(element) === index;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.f16 = function (tag) {
    return getValue(this.t(), tag);
  };
  JsonTreeDecoder.prototype.hl = function (descriptor) {
    if (descriptor === this.z16_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.hl.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.il = function (descriptor) {
    var tmp;
    if (this.az().l10_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.vj();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.az().v10_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      {
        var tmp0_safe_receiver = get_schemaCache(this.y10()).h15(descriptor, get_JsonAlternativeNamesKey());
        var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      }
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t().j2().e();
    while (tmp1_iterator.f()) {
      var key = tmp1_iterator.g();
      if (!names.l1(key) ? !(key === this.y16_1) : false) {
        throw UnknownKeyException(key, this.t().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.h17_1 = value;
    this.i17_1 = this.h17_1.d();
    this.j17_1 = -1;
  }
  JsonTreeListDecoder.prototype.t = function () {
    return this.h17_1;
  };
  JsonTreeListDecoder.prototype.pw = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.f16 = function (tag) {
    return this.h17_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.vl = function (descriptor) {
    while (this.j17_1 < (this.i17_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.j17_1;
      tmp0_this.j17_1 = tmp1 + 1 | 0;
      return this.j17_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.u17_1 = value;
    this.v17_1 = toList(this.u17_1.j2());
    this.w17_1 = imul(this.v17_1.d(), 2);
    this.x17_1 = -1;
  }
  JsonTreeMapDecoder.prototype.t = function () {
    return this.u17_1;
  };
  JsonTreeMapDecoder.prototype.pw = function (desc, index) {
    var i = index / 2 | 0;
    return this.v17_1.h(i);
  };
  JsonTreeMapDecoder.prototype.vl = function (descriptor) {
    while (this.x17_1 < (this.w17_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.x17_1;
      tmp0_this.x17_1 = tmp1 + 1 | 0;
      return this.x17_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.f16 = function (tag) {
    return (this.x17_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.u17_1, tag);
  };
  JsonTreeMapDecoder.prototype.il = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ji())).gl(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.t15_1 = begin;
    this.u15_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.vj();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          {
            var keyDescriptor = carrierDescriptor(desc.xj(0), _this__u8e3s4.dj());
            var keyKind = keyDescriptor.vj();
            var tmp_0;
            var tmp_1;
            if (keyKind instanceof PrimitiveKind) {
              tmp_1 = true;
            } else {
              tmp_1 = equals(keyKind, ENUM_getInstance());
            }
            if (tmp_1) {
              var tmp$ret$0;
              {
                tmp$ret$0 = WriteMode_MAP_getInstance();
              }
              tmp_0 = tmp$ret$0;
            } else {
              if (_this__u8e3s4.xy_1.n10_1) {
                var tmp$ret$1;
                {
                  tmp$ret$1 = WriteMode_LIST_getInstance();
                }
                tmp_0 = tmp$ret$1;
              } else {
                throw InvalidKeyKindException(keyDescriptor);
              }
            }
            tmp$ret$2 = tmp_0;
          }
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.xj(0), _this__u8e3s4.dj());
    var keyKind = keyDescriptor.vj();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.xy_1.n10_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.vj(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.uj()) {
      tmp = carrierDescriptor(_this__u8e3s4.xj(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function appendEscape($this, lastPosition, current) {
    $this.y17(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.y17(lastPosition, currentPosition);
    var result = $this.vz_1.toString();
    $this.vz_1.lf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    {
      var tmp0_also = ensureNotNull($this.uz_1);
      {
      }
      {
        $this.uz_1 = null;
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.z17(), $this.sz_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.a18(currentPosition);
    if (currentPosition === -1) {
      $this.e13('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.z17();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.z17(), currentPosition);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.e13(tmp_0, 0, null, 6, null);
    }
    $this.vz_1.r4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.sz_1 = startPos;
      $this.b18();
      if (($this.sz_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.e13('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.sz_1);
    }
    $this.vz_1.r4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 48;
      }
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      {
        tmp$ret$2 = Char__toInt_impl_vasixd(character);
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = 97;
      }
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      {
        tmp$ret$4 = Char__toInt_impl_vasixd(character);
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      {
        tmp$ret$5 = 65;
      }
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.e13(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.a18(start);
    if (current >= charSequenceLength($this.z17()) ? true : current === -1) {
      $this.e13('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      var tmp = $this.z17();
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    {
      tmp$ret$1 = 116;
    }
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      {
        tmp$ret$2 = 102;
      }
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.y13() + "'";
        $this.e13(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.z17()) - current | 0) < literalSuffix.length) {
      $this.e13('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.z17(), current + i | 0);
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        }
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.y13() + "'";
          $this.e13(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.sz_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.sz_1 = 0;
    this.tz_1 = new JsonPath();
    this.uz_1 = null;
    this.vz_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.c18 = function (_set____db54di) {
    this.sz_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.d18 = function () {
    return this.sz_1;
  };
  AbstractJsonLexer.prototype.b18 = function () {
  };
  AbstractJsonLexer.prototype.e18 = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.wz = function () {
    var nextToken = this.a14();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.z17(), this.sz_1 - 1 | 0)) + ' instead';
      this.e13(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.u13 = function (expected) {
    var token = this.a14();
    if (!(token === expected)) {
      this.f18(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.i15 = function (expected) {
    this.b18();
    var source = this.z17();
    var cpos = this.sz_1;
    $l$loop_0: while (true) {
      cpos = this.a18(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.sz_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.g18(expected);
    }
    this.sz_1 = cpos;
    this.g18(expected);
  };
  AbstractJsonLexer.prototype.g18 = function (expected) {
    var tmp0_this = this;
    tmp0_this.sz_1 = tmp0_this.sz_1 - 1 | 0;
    if ((this.sz_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.y13() === 'null' : false) {
      this.h18("Expected string literal but 'null' literal was found", this.sz_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.f18(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.f18 = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.sz_1 === charSequenceLength(this.z17()) ? true : this.sz_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.z17(), this.sz_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.sz_1 - 1 | 0;
    this.e13(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.v13 = function () {
    var source = this.z17();
    var cpos = this.sz_1;
    $l$loop_0: while (true) {
      cpos = this.a18(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.sz_1 = cpos;
      return charToTokenClass(ch);
    }
    this.sz_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.k15 = function () {
    var current = this.i18();
    current = this.a18(current);
    var len = charSequenceLength(this.z17()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.z17(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.z17(), current + 4 | 0)) === 0 : false)
      return true;
    this.sz_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.i18 = function () {
    var current = this.sz_1;
    $l$loop_0: while (true) {
      current = this.a18(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.z17(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.sz_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.l15 = function (isLenient) {
    var token = this.v13();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.y13();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.x13();
    }
    var string = tmp;
    this.uz_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.j18 = function (startPos, endPos) {
    var tmp$ret$0;
    {
      var tmp0_substring = this.z17();
      tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    }
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.x13 = function () {
    if (!(this.uz_1 == null)) {
      return takePeeked(this);
    }
    return this.o15();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.a18(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.e13('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.y17(lastPosition, currentPosition);
          currentPosition = this.a18(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.e13('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.j18(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.sz_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.p15 = function () {
    var result = this.y13();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.e13("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.y13 = function () {
    if (!(this.uz_1 == null)) {
      return takePeeked(this);
    }
    var current = this.i18();
    if (current >= charSequenceLength(this.z17()) ? true : current === -1) {
      var tmp = current;
      this.e13('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.z17(), current));
    if (token === 1) {
      return this.x13();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.z17(), current));
      this.e13(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.z17(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.z17())) {
        usedAppend = true;
        this.y17(this.sz_1, current);
        var eof = this.a18(current);
        if (eof === -1) {
          this.sz_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.j18(this.sz_1, current);
    } else {
      tmp_1 = decodedString(this, this.sz_1, current);
    }
    var result = tmp_1;
    this.sz_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.y17 = function (fromIndex, toIndex) {
    this.vz_1.hf(this.z17(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.k18 = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.e13(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.n15 = function (allowLenientStrings) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.v13();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.y13();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.v13();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.y13();
        } else {
          this.o15();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.sz_1, 'found ] instead of } at path: ' + this.tz_1, this.z17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.sz_1, 'found } instead of ] at path: ' + this.tz_1, this.z17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.e13('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.a14();
      if (tokenStack.d() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.z17() + "', currentPosition=" + this.sz_1 + ')';
  };
  AbstractJsonLexer.prototype.m15 = function (key) {
    var processed = this.j18(0, this.sz_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.h18("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.h18 = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(hint) === 0;
    }
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.tz_1.q13() + hintMessage, this.z17());
  };
  AbstractJsonLexer.prototype.e13 = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.sz_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.h18(message, position, hint);
  };
  AbstractJsonLexer.prototype.x15 = function () {
    var current = this.i18();
    current = this.a18(current);
    if (current >= charSequenceLength(this.z17()) ? true : current === -1) {
      this.e13('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.z17(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.z17())) {
        this.e13('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.z17(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.e13("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.z17()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.e13(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_times = accumulator;
          tmp$ret$0 = tmp0_times.u4(new Long(10, 0));
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp1_minus.w4(toLong_0(digit));
      }
      accumulator = tmp$ret$1;
      if (accumulator.f1(new Long(0, 0)) > 0) {
        this.e13('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.e13('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.e13('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.z17(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.e13('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.sz_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.s4();
      } else {
        this.e13('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.v15 = function () {
    return consumeBoolean(this, this.i18());
  };
  AbstractJsonLexer.prototype.w15 = function () {
    var current = this.i18();
    if (current === charSequenceLength(this.z17())) {
      this.e13('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.z17(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.sz_1 === charSequenceLength(this.z17())) {
        this.e13('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.z17(), this.sz_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.e13('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.sz_1 = tmp0_this.sz_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().m18_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = Char__toInt_impl_vasixd(c);
      }
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().l18_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      }
      $this.l18_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.m18_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.l18_1 = charArray(117);
    this.m18_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.r18_1 = source;
  }
  StringJsonLexer.prototype.z17 = function () {
    return this.r18_1;
  };
  StringJsonLexer.prototype.a18 = function (position) {
    return position < this.r18_1.length ? position : -1;
  };
  StringJsonLexer.prototype.a14 = function () {
    var source = this.r18_1;
    $l$loop: while (!(this.d18() === -1) ? this.d18() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.d18();
      tmp0_this.c18(tmp1 + 1 | 0);
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.j15 = function () {
    var current = this.i18();
    if (current === this.r18_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.r18_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.c18(tmp0_this.d18() + 1 | 0);
      tmp0_this.d18();
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.w13 = function () {
    var current = this.d18();
    if (current === -1)
      return false;
    $l$loop: while (current < this.r18_1.length) {
      var c = charSequenceGet(this.r18_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c18(current);
      return this.e18(c);
    }
    this.c18(current);
    return false;
  };
  StringJsonLexer.prototype.i18 = function () {
    var current = this.d18();
    if (current === -1)
      return current;
    $l$loop: while (current < this.r18_1.length) {
      var c = charSequenceGet(this.r18_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c18(current);
    return current;
  };
  StringJsonLexer.prototype.i15 = function (expected) {
    if (this.d18() === -1)
      this.g18(expected);
    var source = this.r18_1;
    $l$loop: while (this.d18() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.d18();
      tmp0_this.c18(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.g18(expected);
    }
    this.g18(expected);
  };
  StringJsonLexer.prototype.o15 = function () {
    this.i15(get_STRING());
    var current = this.d18();
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.r18_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.f18(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.r18_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.r18_1, this.d18(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c18(closingQuote + 1 | 0);
    var tmp$ret$1;
    {
      var tmp0_substring = this.r18_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_substring;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    }
    return tmp$ret$1;
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.zy_1;
  }
  function JsonStringBuilder() {
    this.jz_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.cu = function (value) {
    this.jz_1.jf(value);
  };
  JsonStringBuilder.prototype.bt = function (ch) {
    this.jz_1.r4(ch);
  };
  JsonStringBuilder.prototype.m12 = function (string) {
    this.jz_1.kf(string);
  };
  JsonStringBuilder.prototype.v12 = function (string) {
    printQuoted(this.jz_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.jz_1.toString();
  };
  JsonStringBuilder.prototype.kz = function () {
  };
  JsonStringBuilder.$metadata$ = classMeta('JsonStringBuilder');
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.kj = get_isNullable;
  defer$1.prototype.uj = get_isInline;
  defer$1.prototype.sj = get_annotations;
  PolymorphismValidator.prototype.qy = contextual;
  StreamingJsonDecoder.prototype.tl = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.ul = decodeSequentially;
  StreamingJsonDecoder.prototype.wl = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.gl = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.tl = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.ul = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.wl = decodeCollectionSize;
  StreamingJsonEncoder.prototype.vm = encodeNotNullMark;
  StreamingJsonEncoder.prototype.wm = beginCollection;
  AbstractJsonTreeDecoder.prototype.tl = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.ul = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.wl = decodeCollectionSize;
  JsonTreeDecoder.prototype.tl = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.ul = decodeSequentially;
  JsonTreeDecoder.prototype.wl = decodeCollectionSize;
  JsonTreeListDecoder.prototype.tl = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.ul = decodeSequentially;
  JsonTreeListDecoder.prototype.wl = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.tl = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.ul = decodeSequentially;
  JsonTreeMapDecoder.prototype.wl = decodeCollectionSize;
  //endregion
  //region block: init
  COLON = _Char___init__impl__6a9atx(58);
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_COMMA = 4;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map