(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var emptyList = kotlin_kotlin.$_$.i5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.ec;
  var classMeta = kotlin_kotlin.$_$.d8;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.w1;
  var IllegalArgumentException = kotlin_kotlin.$_$.hb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var isInterface = kotlin_kotlin.$_$.u8;
  var KClass = kotlin_kotlin.$_$.r9;
  var copyToArray = kotlin_kotlin.$_$.g5;
  var Triple = kotlin_kotlin.$_$.ob;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.lb;
  var Entry = kotlin_kotlin.$_$.j4;
  var LinkedHashMap = kotlin_kotlin.$_$.g4;
  var MutableMap = kotlin_kotlin.$_$.o4;
  var Map = kotlin_kotlin.$_$.k4;
  var HashMap = kotlin_kotlin.$_$.c4;
  var LinkedHashSet = kotlin_kotlin.$_$.h4;
  var MutableSet = kotlin_kotlin.$_$.p4;
  var Set = kotlin_kotlin.$_$.q4;
  var HashSet = kotlin_kotlin.$_$.d4;
  var ArrayList = kotlin_kotlin.$_$.a4;
  var MutableList = kotlin_kotlin.$_$.m4;
  var List = kotlin_kotlin.$_$.i4;
  var Collection = kotlin_kotlin.$_$.b4;
  var equals = kotlin_kotlin.$_$.f8;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var Iterator = kotlin_kotlin.$_$.f4;
  var Iterable = kotlin_kotlin.$_$.e4;
  var isBlank = kotlin_kotlin.$_$.aa;
  var toList = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toHashSet = kotlin_kotlin.$_$.o6;
  var toBooleanArray = kotlin_kotlin.$_$.n6;
  var withIndex = kotlin_kotlin.$_$.x6;
  var to = kotlin_kotlin.$_$.kc;
  var toMap = kotlin_kotlin.$_$.s6;
  var lazy_0 = kotlin_kotlin.$_$.fc;
  var contentEquals = kotlin_kotlin.$_$.v4;
  var until = kotlin_kotlin.$_$.q9;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var Long = kotlin_kotlin.$_$.jb;
  var Char = kotlin_kotlin.$_$.za;
  var isObject = kotlin_kotlin.$_$.w8;
  var toIntOrNull = kotlin_kotlin.$_$.na;
  var hashCode = kotlin_kotlin.$_$.k8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var isArray = kotlin_kotlin.$_$.m8;
  var arrayIterator = kotlin_kotlin.$_$.v7;
  var asList = kotlin_kotlin.$_$.t4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.w;
  var step = kotlin_kotlin.$_$.p9;
  var getValue = kotlin_kotlin.$_$.q5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var longArray = kotlin_kotlin.$_$.a9;
  var Companion_getInstance = kotlin_kotlin.$_$.t3;
  var get_lastIndex = kotlin_kotlin.$_$.t5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.xb;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var UInt = kotlin_kotlin.$_$.qb;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.d3;
  var ULong = kotlin_kotlin.$_$.rb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.c3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.l3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.x2;
  var UByte = kotlin_kotlin.$_$.pb;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.w2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.p3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var UShort = kotlin_kotlin.$_$.sb;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.f3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.a1;
  var KTypeParameter = kotlin_kotlin.$_$.t9;
  var contentHashCode = kotlin_kotlin.$_$.w4;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var booleanArray = kotlin_kotlin.$_$.w7;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s3;
  var isCharArray = kotlin_kotlin.$_$.p8;
  var charArray = kotlin_kotlin.$_$.z7;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.m3;
  var isDoubleArray = kotlin_kotlin.$_$.r8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var isFloatArray = kotlin_kotlin.$_$.s8;
  var isLongArray = kotlin_kotlin.$_$.v8;
  var isIntArray = kotlin_kotlin.$_$.t8;
  var isShortArray = kotlin_kotlin.$_$.x8;
  var isByteArray = kotlin_kotlin.$_$.o8;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.k3;
  var isBooleanArray = kotlin_kotlin.$_$.n8;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var copyOf = kotlin_kotlin.$_$.a5;
  var copyOf_0 = kotlin_kotlin.$_$.c5;
  var copyOf_1 = kotlin_kotlin.$_$.d5;
  var copyOf_2 = kotlin_kotlin.$_$.y4;
  var copyOf_3 = kotlin_kotlin.$_$.f5;
  var copyOf_4 = kotlin_kotlin.$_$.x4;
  var copyOf_5 = kotlin_kotlin.$_$.b5;
  var copyOf_6 = kotlin_kotlin.$_$.z4;
  var Unit = kotlin_kotlin.$_$.tb;
  var trimIndent = kotlin_kotlin.$_$.wa;
  var equals_0 = kotlin_kotlin.$_$.y9;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var charSequenceGet = kotlin_kotlin.$_$.a8;
  var toString_0 = kotlin_kotlin.$_$.r2;
  var titlecase = kotlin_kotlin.$_$.ka;
  var isLowerCase = kotlin_kotlin.$_$.da;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r3;
  var mapOf = kotlin_kotlin.$_$.b6;
  var lastOrNull = kotlin_kotlin.$_$.w5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.u5;
  var Annotation = kotlin_kotlin.$_$.ya;
  var get_indices = kotlin_kotlin.$_$.s5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var get_indices_0 = kotlin_kotlin.$_$.r5;
  var get_js = kotlin_kotlin.$_$.z8;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.li(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.sl(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.hl(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ki(this, value);
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.oy(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.mi(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ni());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.oi(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ni());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).ji();
      $this$buildSerialDescriptor.xi('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.yi_1.dd() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.xi('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.ri_1 = this$0.zi_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.yi_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.yi_1 = baseClass;
    this.zi_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.aj_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.ni = function () {
    return this.yi_1;
  };
  PolymorphicSerializer.prototype.ji = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.aj_1.t();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.yi_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ji();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = interfaceMeta('BinaryFormat', [SerialFormat]);
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.d() === 1 ? "Field '" + fieldNames.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializerOrNull(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.od();
    var tmp$ret$4;
    {
      var tmp0_map = type.nd();
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$2;
          {
            var tmp$ret$1;
            $l$block: {
              var tmp0_requireNotNull = item.hj_1;
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$0;
                {
                  tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
                }
                var message = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$1 = tmp0_requireNotNull;
                break $l$block;
              }
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.m()) {
      var tmp0_elvis_lhs = serializerOrNull_0(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.ij(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      {
        tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      }
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator = typeArguments.e();
          while (tmp0_iterator.f()) {
            var item = tmp0_iterator.g();
            tmp0_mapTo.b(serializer_0(_this__u8e3s4, item));
          }
          tmp$ret$0 = tmp0_mapTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator_0 = typeArguments.e();
          while (tmp0_iterator_0.f()) {
            var item_0 = tmp0_iterator_0.g();
            var tmp$ret$2;
            {
              var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4, item_0);
              var tmp_0;
              if (tmp0_elvis_lhs == null) {
                return null;
              } else {
                tmp_0 = tmp0_elvis_lhs;
              }
              tmp$ret$2 = tmp_0;
            }
            tmp0_mapTo_0.b(tmp$ret$2);
          }
          tmp$ret$3 = tmp0_mapTo_0;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        {
          var tmp_2 = typeArguments.h(0).md();
          var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.h(0));
          tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        return tmp$ret$5;
      }
      var tmp$ret$6;
      {
        tmp$ret$6 = copyToArray(serializers);
      }
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull_0(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.jj(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.ji().kj()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
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
          var tmp0_safe_receiver_0 = _this__u8e3s4.ij(tmp0_safe_receiver, null, 2, null);
          tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ji();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.pj_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.lj_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.oj_1 = original;
    this.pj_1 = kClass;
    this.qj_1 = this.oj_1.rj() + '<' + this.pj_1.dd() + '>';
  }
  ContextDescriptor.prototype.sj = function () {
    return this.oj_1.sj();
  };
  ContextDescriptor.prototype.tj = function () {
    return this.oj_1.tj();
  };
  ContextDescriptor.prototype.uj = function () {
    return this.oj_1.uj();
  };
  ContextDescriptor.prototype.kj = function () {
    return this.oj_1.kj();
  };
  ContextDescriptor.prototype.vj = function () {
    return this.oj_1.vj();
  };
  ContextDescriptor.prototype.wj = function (index) {
    return this.oj_1.wj(index);
  };
  ContextDescriptor.prototype.xj = function (index) {
    return this.oj_1.xj(index);
  };
  ContextDescriptor.prototype.yj = function (name) {
    return this.oj_1.yj(name);
  };
  ContextDescriptor.prototype.zj = function (index) {
    return this.oj_1.zj(index);
  };
  ContextDescriptor.prototype.ak = function (index) {
    return this.oj_1.ak(index);
  };
  ContextDescriptor.prototype.rj = function () {
    return this.qj_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.oj_1, another.oj_1) ? another.pj_1.equals(this.pj_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.pj_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.qj_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.pj_1 + ', original: ' + this.oj_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.ck_1 = $this_elementDescriptors;
    this.bk_1 = $this_elementDescriptors.tj();
  }
  elementDescriptors$1$1.prototype.f = function () {
    return this.bk_1 > 0;
  };
  elementDescriptors$1$1.prototype.g = function () {
    var tmp = this.ck_1.tj();
    var tmp0_this = this;
    var tmp1 = tmp0_this.bk_1;
    tmp0_this.bk_1 = tmp1 - 1 | 0;
    return this.ck_1.xj(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.dk_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.e = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.dk_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.si_1.d(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.pi_1 = serialName;
    this.qi_1 = false;
    this.ri_1 = emptyList();
    this.si_1 = ArrayList_init_$Create$_0();
    this.ti_1 = HashSet_init_$Create$();
    this.ui_1 = ArrayList_init_$Create$_0();
    this.vi_1 = ArrayList_init_$Create$_0();
    this.wi_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.ek = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.ti_1.b(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.si_1;
      tmp1_plusAssign.b(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.ui_1;
      tmp2_plusAssign.b(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.vi_1;
      tmp3_plusAssign.b(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.wi_1;
      tmp4_plusAssign.b(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.xi = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.ek(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this.qk_1.t();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.pk_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.zj(it) + ': ' + this$0.xj(it).rj();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.fk_1 = serialName;
    this.gk_1 = kind;
    this.hk_1 = elementsCount;
    this.ik_1 = builder.ri_1;
    this.jk_1 = toHashSet(builder.si_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.si_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.kk_1 = tmp$ret$0;
    this.lk_1 = compactArray(builder.ui_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.vi_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.mk_1 = tmp$ret$1;
    this.nk_1 = toBooleanArray(builder.wi_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.kk_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.u2_1, item.t2_1);
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.ok_1 = toMap(tmp$ret$4);
    this.pk_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.qk_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.rj = function () {
    return this.fk_1;
  };
  SerialDescriptorImpl.prototype.vj = function () {
    return this.gk_1;
  };
  SerialDescriptorImpl.prototype.tj = function () {
    return this.hk_1;
  };
  SerialDescriptorImpl.prototype.sj = function () {
    return this.ik_1;
  };
  SerialDescriptorImpl.prototype.rk = function () {
    return this.jk_1;
  };
  SerialDescriptorImpl.prototype.zj = function (index) {
    return getChecked(this.kk_1, index);
  };
  SerialDescriptorImpl.prototype.yj = function (name) {
    var tmp0_elvis_lhs = this.ok_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.wj = function (index) {
    return getChecked(this.mk_1, index);
  };
  SerialDescriptorImpl.prototype.xj = function (index) {
    return getChecked(this.lk_1, index);
  };
  SerialDescriptorImpl.prototype.ak = function (index) {
    return getChecked_0(this.nk_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rj() === other.rj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.pk_1, tmp0__anonymous__q1qw7t.pk_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tj() === other.tj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xj(index).rj() === other.xj(index).rj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xj(index).vj(), other.xj(index).vj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.hk_1);
    var tmp_0 = this.fk_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.si_1.d(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda();
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function buildClassSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).dd());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.sk = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.tk = function () {
    return true;
  };
  AbstractDecoder.prototype.uk = function () {
    return null;
  };
  AbstractDecoder.prototype.vk = function () {
    var tmp = this.sk();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.wk = function () {
    var tmp = this.sk();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.xk = function () {
    var tmp = this.sk();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.yk = function () {
    var tmp = this.sk();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.zk = function () {
    var tmp = this.sk();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.al = function () {
    var tmp = this.sk();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.bl = function () {
    var tmp = this.sk();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.cl = function () {
    var tmp = this.sk();
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.dl = function () {
    var tmp = this.sk();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.el = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.fl = function (deserializer, previousValue) {
    return this.gl(deserializer);
  };
  AbstractDecoder.prototype.hl = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.il = function (descriptor) {
  };
  AbstractDecoder.prototype.jl = function (descriptor, index) {
    return this.vk();
  };
  AbstractDecoder.prototype.kl = function (descriptor, index) {
    return this.wk();
  };
  AbstractDecoder.prototype.ll = function (descriptor, index) {
    return this.xk();
  };
  AbstractDecoder.prototype.ml = function (descriptor, index) {
    return this.yk();
  };
  AbstractDecoder.prototype.nl = function (descriptor, index) {
    return this.zk();
  };
  AbstractDecoder.prototype.ol = function (descriptor, index) {
    return this.al();
  };
  AbstractDecoder.prototype.pl = function (descriptor, index) {
    return this.bl();
  };
  AbstractDecoder.prototype.ql = function (descriptor, index) {
    return this.cl();
  };
  AbstractDecoder.prototype.rl = function (descriptor, index) {
    return this.dl();
  };
  AbstractDecoder.prototype.sl = function (descriptor, index, deserializer, previousValue) {
    return this.fl(deserializer, previousValue);
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.hl = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.il = function (descriptor) {
  };
  AbstractEncoder.prototype.xl = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.yl = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.zl = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.am = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.bm = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.cm = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.dm = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.em = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.fm = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.gm = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.hm = function (value) {
    return this.yl(new Char(value));
  };
  AbstractEncoder.prototype.im = function (value) {
    return this.yl(value);
  };
  AbstractEncoder.prototype.jm = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.km = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.am(value);
  };
  AbstractEncoder.prototype.lm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.bm(value);
  };
  AbstractEncoder.prototype.mm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.cm(value);
  };
  AbstractEncoder.prototype.nm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.dm(value);
  };
  AbstractEncoder.prototype.om = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.em(value);
  };
  AbstractEncoder.prototype.pm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.fm(value);
  };
  AbstractEncoder.prototype.qm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.gm(value);
  };
  AbstractEncoder.prototype.rm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.hm(value);
  };
  AbstractEncoder.prototype.sm = function (descriptor, index, value) {
    if (this.xl(descriptor, index))
      this.im(value);
  };
  AbstractEncoder.prototype.tm = function (descriptor, index, serializer, value) {
    if (this.xl(descriptor, index))
      this.um(serializer, value);
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.xm_1 = -1;
    this.ym_1 = -3;
  }
  Companion.prototype.zm = function () {
    return this.xm_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.hl(descriptor);
    var result = block(composite);
    composite.il(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.wm(descriptor, collectionSize);
    block(composite);
    composite.il(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.hl(descriptor);
    block(composite);
    composite.il(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.rl($this.ji(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.ji();
    return compositeDecoder.tl(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.ki = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure = this.ji();
      var composite = encoder.hl(tmp0_encodeStructure);
      {
        composite.sm(this.ji(), 0, actualSerializer.ji().rj());
        var tmp = this.ji();
        var tmp$ret$0;
        {
          tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
        }
        composite.tm(tmp, 1, tmp$ret$0, value);
      }
      composite.il(tmp0_encodeStructure);
    }
  };
  AbstractPolymorphicSerializer.prototype.li = function (decoder) {
    var tmp$ret$5;
    {
      var tmp0_decodeStructure = this.ji();
      var composite = decoder.hl(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.ul()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.vl(this.ji());
          Companion_getInstance_1();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.rl(this.ji(), index);
            } else {
              if (index === 1) {
                var tmp$ret$2;
                $l$block_0: {
                  var tmp0_requireNotNull = klassName;
                  {
                  }
                  if (tmp0_requireNotNull == null) {
                    var tmp$ret$1;
                    {
                      tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                    }
                    var message = tmp$ret$1;
                    throw IllegalArgumentException_init_$Create$(toString(message));
                  } else {
                    tmp$ret$2 = tmp0_requireNotNull;
                    break $l$block_0;
                  }
                }
                klassName = tmp$ret$2;
                var serializer = findPolymorphicSerializer_0(this, composite, klassName);
                var tmp = this.ji();
                value = composite.tl(tmp, index, serializer, null, 8, null);
              } else {
                var tmp0_elvis_lhs = klassName;
                throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
              }
            }
          }
        }
        var tmp$ret$4;
        $l$block_1: {
          var tmp1_requireNotNull = value;
          {
          }
          if (tmp1_requireNotNull == null) {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
            }
            var message_0 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = tmp1_requireNotNull;
            break $l$block_1;
          }
        }
        var tmp_0 = tmp$ret$4;
        tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      }
      var result = tmp$ret$0;
      composite.il(tmp0_decodeStructure);
      tmp$ret$5 = result;
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.oi = function (decoder, klassName) {
    return decoder.dj().an(this.ni(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.mi = function (encoder, value) {
    return encoder.dj().bn(this.ni(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.dd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.dd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.en_1 = primitive.rj() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.rj = function () {
    return this.en_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.rj = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.fn_1 = elementDescriptor;
    this.gn_1 = 1;
  }
  ListLikeDescriptor.prototype.vj = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.tj = function () {
    return this.gn_1;
  };
  ListLikeDescriptor.prototype.zj = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.yj = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.ak = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.wj = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.xj = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.fn_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.fn_1, other.fn_1) ? this.rj() === other.rj() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.fn_1), 31) + getStringHashCode(this.rj()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.rj() + '(' + this.fn_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.jn_1 = serialName;
    this.kn_1 = keyDescriptor;
    this.ln_1 = valueDescriptor;
    this.mn_1 = 2;
  }
  MapLikeDescriptor.prototype.rj = function () {
    return this.jn_1;
  };
  MapLikeDescriptor.prototype.vj = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.tj = function () {
    return this.mn_1;
  };
  MapLikeDescriptor.prototype.zj = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.yj = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.ak = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.wj = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.xj = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.rj() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.kn_1;
        break;
      case 1:
        tmp = this.ln_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.rj() === other.rj()))
      return false;
    if (!equals(this.kn_1, other.kn_1))
      return false;
    if (!equals(this.ln_1, other.ln_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.rj());
    result = imul(31, result) + hashCode(this.kn_1) | 0;
    result = imul(31, result) + hashCode(this.ln_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.rj() + '(' + this.kn_1 + ', ' + this.ln_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.rj = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.rj = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.rj = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.un_1 = new PrimitiveArrayDescriptor(primitiveSerializer.ji());
  }
  PrimitiveArraySerializer.prototype.ji = function () {
    return this.un_1;
  };
  PrimitiveArraySerializer.prototype.vn = function (_this__u8e3s4) {
    return _this__u8e3s4.wn();
  };
  PrimitiveArraySerializer.prototype.xn = function (_this__u8e3s4) {
    return _this__u8e3s4.yn();
  };
  PrimitiveArraySerializer.prototype.zn = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  PrimitiveArraySerializer.prototype.ao = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.bo = function (_this__u8e3s4) {
    return this.ao((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.co = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.do = function () {
    return this.fo(this.eo());
  };
  PrimitiveArraySerializer.prototype.jo = function (encoder, value) {
    var size = this.ko(value);
    {
      var tmp0_encodeCollection = this.un_1;
      var composite = encoder.wm(tmp0_encodeCollection, size);
      {
        this.io(composite, value, size);
      }
      composite.il(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.ki = function (encoder, value) {
    return this.jo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.lo = function (encoder, value) {
    return this.jo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.li = function (decoder) {
    return this.mo(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.po = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.wn() + 1 | 0;
    return $handler == null ? this.wa(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.no_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.lo = function (encoder, value) {
    var size = this.ko(value);
    {
      var tmp0_encodeCollection = this.ji();
      var composite = encoder.wm(tmp0_encodeCollection, size);
      {
        var iterator = this.bo(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.tm(this.ji(), index, this.no_1, iterator.g());
          }
           while (inductionVariable < size);
      }
      composite.il(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.ki = function (encoder, value) {
    return this.lo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.oo = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.go(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.go = function (decoder, index, builder, checkIndex) {
    var tmp = this.ji();
    this.co(builder, index, decoder.tl(tmp, index, this.no_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.wl($this.ji());
    $this.zn(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.mo = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.fo(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.do() : tmp1_elvis_lhs;
    var startIndex = this.vn(builder);
    var compositeDecoder = decoder.hl(this.ji());
    if (compositeDecoder.ul()) {
      this.oo(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.vl(this.ji());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.ho(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.il(this.ji());
    return this.xn(builder);
  };
  AbstractCollectionSerializer.prototype.li = function (decoder) {
    return this.mo(decoder, null);
  };
  AbstractCollectionSerializer.prototype.ho = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.go(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ro_1 = kClass;
    this.so_1 = new ArrayClassDesc(eSerializer.ji());
  }
  ReferenceArraySerializer.prototype.ji = function () {
    return this.so_1;
  };
  ReferenceArraySerializer.prototype.to = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.ko = function (_this__u8e3s4) {
    return this.to((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.uo = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.bo = function (_this__u8e3s4) {
    return this.uo((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.do = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.vo = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  ReferenceArraySerializer.prototype.vn = function (_this__u8e3s4) {
    return this.vo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.wo = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ro_1);
  };
  ReferenceArraySerializer.prototype.xn = function (_this__u8e3s4) {
    return this.wo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.xo = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.fo = function (_this__u8e3s4) {
    return this.xo((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.yo = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  ReferenceArraySerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.yo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.zo = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ReferenceArraySerializer.prototype.co = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.zo(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.bp = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.ko = function (_this__u8e3s4) {
    return this.bp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.cp = function (_this__u8e3s4) {
    return _this__u8e3s4.e();
  };
  CollectionSerializer.prototype.bo = function (_this__u8e3s4) {
    return this.cp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.dp_1 = keySerializer;
    this.ep_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.fp = function () {
    return this.dp_1;
  };
  MapLikeSerializer.prototype.gp = function () {
    return this.ep_1;
  };
  MapLikeSerializer.prototype.oo = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.go(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.go = function (decoder, index, builder, checkIndex) {
    var tmp = this.ji();
    var key = decoder.tl(tmp, index, this.dp_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.vl(this.ji());
        {
        }
        {
          {
            var tmp0_require = tmp0_also === (index + 1 | 0);
            {
            }
            if (!tmp0_require) {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
              }
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.c2(key)) {
      var tmp_3 = this.ep_1.ji().vj();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.sl(this.ji(), vIndex, this.ep_1, getValue(builder, key));
    } else {
      var tmp_4 = this.ji();
      tmp_1 = decoder.tl(tmp_4, vIndex, this.ep_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.a(key, value);
    }
  };
  MapLikeSerializer.prototype.lo = function (encoder, value) {
    var size = this.ko(value);
    {
      var tmp0_encodeCollection = this.ji();
      var composite = encoder.wm(tmp0_encodeCollection, size);
      {
        var iterator = this.bo(value);
        var index = 0;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = iterator;
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.f()) {
            var element = tmp0_iterator.g();
            {
              var tmp$ret$1;
              {
                tmp$ret$1 = element.s();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.t();
              }
              var v = tmp$ret$2;
              var tmp = this.ji();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.tm(tmp, tmp0, this.dp_1, k);
              var tmp_0 = this.ji();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.tm(tmp_0, tmp1, this.ep_1, v);
            }
          }
        }
      }
      composite.il(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.ki = function (encoder, value) {
    return this.lo(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.jp_1 = new LinkedHashMapClassDesc(kSerializer.ji(), vSerializer.ji());
  }
  LinkedHashMapSerializer.prototype.ji = function () {
    return this.jp_1;
  };
  LinkedHashMapSerializer.prototype.kp = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  LinkedHashMapSerializer.prototype.ko = function (_this__u8e3s4) {
    return this.kp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.lp = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.r().e();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.bo = function (_this__u8e3s4) {
    return this.lp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.do = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.mp = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d(), 2);
  };
  LinkedHashMapSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.mp(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.np = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.xn = function (_this__u8e3s4) {
    return this.np(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.op = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.fo = function (_this__u8e3s4) {
    return this.op((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.pp = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.pp(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.sp_1 = new HashMapClassDesc(kSerializer.ji(), vSerializer.ji());
  }
  HashMapSerializer.prototype.ji = function () {
    return this.sp_1;
  };
  HashMapSerializer.prototype.kp = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  HashMapSerializer.prototype.ko = function (_this__u8e3s4) {
    return this.kp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.lp = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.r().e();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.bo = function (_this__u8e3s4) {
    return this.lp((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.do = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.tp = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d(), 2);
  };
  HashMapSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.tp(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.up = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.xn = function (_this__u8e3s4) {
    return this.up(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.op = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.fo = function (_this__u8e3s4) {
    return this.op((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.vp = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.vp(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.xp_1 = new ArrayListClassDesc(element.ji());
  }
  ArrayListSerializer.prototype.ji = function () {
    return this.xp_1;
  };
  ArrayListSerializer.prototype.do = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.yp = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  ArrayListSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.yp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.zp = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.xn = function (_this__u8e3s4) {
    return this.zp(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.aq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.fo = function (_this__u8e3s4) {
    return this.aq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.bq = function (_this__u8e3s4, size) {
    return _this__u8e3s4.wa(size);
  };
  ArrayListSerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.bq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.cq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ArrayListSerializer.prototype.co = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.cq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.eq_1 = new HashSetClassDesc(eSerializer.ji());
  }
  HashSetSerializer.prototype.ji = function () {
    return this.eq_1;
  };
  HashSetSerializer.prototype.do = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.fq = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  HashSetSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.fq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.gq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.xn = function (_this__u8e3s4) {
    return this.gq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.hq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.fo = function (_this__u8e3s4) {
    return this.hq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.iq = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.iq(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.jq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.co = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.jq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.lq_1 = new LinkedHashSetClassDesc(eSerializer.ji());
  }
  LinkedHashSetSerializer.prototype.ji = function () {
    return this.lq_1;
  };
  LinkedHashSetSerializer.prototype.do = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.mq = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  LinkedHashSetSerializer.prototype.vn = function (_this__u8e3s4) {
    return this.mq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.nq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.xn = function (_this__u8e3s4) {
    return this.nq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.hq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.fo = function (_this__u8e3s4) {
    return this.hq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.oq = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.zn = function (_this__u8e3s4, size) {
    return this.oq(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.pq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.co = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.pq(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.qq_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).i7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.uq_1[slot] = $this.uq_1[slot].rg((new Long(1, 0)).i7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.uq_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.uq_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.qg());
          slotMarks = slotMarks.rg((new Long(1, 0)).i7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.sq_1($this.rq_1, index)) {
            $this.uq_1[slot] = slotMarks;
            return index;
          }
        }
        $this.uq_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_1();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_2();
    this.rq_1 = descriptor;
    this.sq_1 = readIfAbsent;
    var elementsCount = this.rq_1.tj();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).i7(elementsCount);
      }
      tmp.tq_1 = tmp_0;
      this.uq_1 = Companion_getInstance_2().qq_1;
    } else {
      this.tq_1 = new Long(0, 0);
      this.uq_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.vq = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.tq_1 = this.tq_1.rg((new Long(1, 0)).i7(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.wq = function () {
    var elementsCount = this.rq_1.tj();
    while (!this.tq_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.tq_1.qg());
      this.tq_1 = this.tq_1.rg((new Long(1, 0)).i7(index));
      if (this.sq_1(this.rq_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_1();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.jr_1 = true;
  }
  InlineClassDescriptor.prototype.uj = function () {
    return this.jr_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rj() === other.rj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = tmp0__anonymous__q1qw7t.jr_1 ? contentEquals(this.wr(), tmp0__anonymous__q1qw7t.wr()) : false;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tj() === other.tj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xj(index).rj() === other.xj(index).rj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xj(index).vj(), other.xj(index).vj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.yr_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.zr = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.yr_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.ji = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.ki = function (encoder, value) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.prototype.li = function (decoder) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.bs_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.ji = function () {
    return this.bs_1;
  };
  UIntSerializer.prototype.cs = function (encoder, value) {
    var tmp = encoder.jm(this.bs_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    }
    tmp.dm(tmp$ret$0);
  };
  UIntSerializer.prototype.ki = function (encoder, value) {
    return this.cs(encoder, value instanceof UInt ? value.q6_1 : THROW_CCE());
  };
  UIntSerializer.prototype.ds = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUInt = decoder.el(this.bs_1).yk();
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    }
    return tmp$ret$0;
  };
  UIntSerializer.prototype.li = function (decoder) {
    return new UInt(this.ds(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.es_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance()));
  }
  ULongSerializer.prototype.ji = function () {
    return this.es_1;
  };
  ULongSerializer.prototype.fs = function (encoder, value) {
    var tmp = encoder.jm(this.es_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    }
    tmp.em(tmp$ret$0);
  };
  ULongSerializer.prototype.ki = function (encoder, value) {
    return this.fs(encoder, value instanceof ULong ? value.y6_1 : THROW_CCE());
  };
  ULongSerializer.prototype.gs = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toULong = decoder.el(this.es_1).zk();
      tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    }
    return tmp$ret$0;
  };
  ULongSerializer.prototype.li = function (decoder) {
    return new ULong(this.gs(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.hs_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.ji = function () {
    return this.hs_1;
  };
  UByteSerializer.prototype.is = function (encoder, value) {
    var tmp = encoder.jm(this.hs_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    }
    tmp.bm(tmp$ret$0);
  };
  UByteSerializer.prototype.ki = function (encoder, value) {
    return this.is(encoder, value instanceof UByte ? value.j6_1 : THROW_CCE());
  };
  UByteSerializer.prototype.js = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUByte = decoder.el(this.hs_1).wk();
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    }
    return tmp$ret$0;
  };
  UByteSerializer.prototype.li = function (decoder) {
    return new UByte(this.js(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.ks_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.ji = function () {
    return this.ks_1;
  };
  UShortSerializer.prototype.ls = function (encoder, value) {
    var tmp = encoder.jm(this.ks_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    }
    tmp.cm(tmp$ret$0);
  };
  UShortSerializer.prototype.ki = function (encoder, value) {
    return this.ls(encoder, value instanceof UShort ? value.e7_1 : THROW_CCE());
  };
  UShortSerializer.prototype.ms = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUShort = decoder.el(this.ks_1).xk();
      tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    }
    return tmp$ret$0;
  };
  UShortSerializer.prototype.li = function (decoder) {
    return new UShort(this.ms(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function SerialDescriptorForNullable(original) {
    this.lj_1 = original;
    this.mj_1 = this.lj_1.rj() + '?';
    this.nj_1 = cachedSerialNames(this.lj_1);
  }
  SerialDescriptorForNullable.prototype.sj = function () {
    return this.lj_1.sj();
  };
  SerialDescriptorForNullable.prototype.tj = function () {
    return this.lj_1.tj();
  };
  SerialDescriptorForNullable.prototype.uj = function () {
    return this.lj_1.uj();
  };
  SerialDescriptorForNullable.prototype.vj = function () {
    return this.lj_1.vj();
  };
  SerialDescriptorForNullable.prototype.wj = function (index) {
    return this.lj_1.wj(index);
  };
  SerialDescriptorForNullable.prototype.xj = function (index) {
    return this.lj_1.xj(index);
  };
  SerialDescriptorForNullable.prototype.yj = function (name) {
    return this.lj_1.yj(name);
  };
  SerialDescriptorForNullable.prototype.zj = function (index) {
    return this.lj_1.zj(index);
  };
  SerialDescriptorForNullable.prototype.ak = function (index) {
    return this.lj_1.ak(index);
  };
  SerialDescriptorForNullable.prototype.rj = function () {
    return this.mj_1;
  };
  SerialDescriptorForNullable.prototype.rk = function () {
    return this.nj_1;
  };
  SerialDescriptorForNullable.prototype.kj = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.lj_1, other.lj_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.lj_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.lj_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function NullableSerializer(serializer) {
    this.ns_1 = serializer;
    this.os_1 = new SerialDescriptorForNullable(this.ns_1.ji());
  }
  NullableSerializer.prototype.ji = function () {
    return this.os_1;
  };
  NullableSerializer.prototype.ps = function (encoder, value) {
    if (!(value == null)) {
      encoder.vm();
      encoder.um(this.ns_1, value);
    } else {
      encoder.zl();
    }
  };
  NullableSerializer.prototype.ki = function (encoder, value) {
    return this.ps(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.li = function (decoder) {
    return decoder.tk() ? decoder.gl(this.ns_1) : decoder.uk();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.ns_1, other.ns_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.ns_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ri_1 = this$0.rs_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.qs_1 = objectInstance;
    this.rs_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ss_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.ji = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.ss_1.t();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.ki = function (encoder, value) {
    encoder.hl(this.ji()).il(this.ji());
  };
  ObjectSerializer.prototype.li = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.ji();
      var composite = decoder.hl(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.vl(this.ji());
        Companion_getInstance_1();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.il(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.qs_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ji();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.m();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.rk();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.tj());
    var inductionVariable = 0;
    var last = _this__u8e3s4.tj();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.zj(i);
          result.b(tmp0_plusAssign);
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.dd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.md();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          {
            var tmp0_plusAssign = descriptor.zj(i);
            missingFields.b(tmp0_plusAssign);
          }
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.rj());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.rj());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.rj();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.e();
        while (tmp0_iterator_0.f()) {
          var element_0 = tmp0_iterator_0.g();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.vj();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = childSerializers$factory();
      tmp$ret$0 = $this.tr_1.t();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this.vr_1.t();
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.or_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set = $this.or_1[i];
          indices.a(tmp0_set, i);
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lr_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zr();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lr_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.as();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
            var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator.f()) {
              var item = tmp0_iterator.g();
              var tmp$ret$0;
              {
                tmp$ret$0 = item.ji();
              }
              tmp0_mapTo.b(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.wr());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.zj(i) + ': ' + this$0.xj(i).rj();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.kr_1 = serialName;
    this.lr_1 = generatedSerializer;
    this.mr_1 = elementsCount;
    this.nr_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.mr_1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = '[UNINITIALIZED]';
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.or_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.mr_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.pr_1 = tmp$ret$2;
    this.qr_1 = null;
    this.rr_1 = booleanArray(this.mr_1);
    this.sr_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.tr_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.ur_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.vr_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.rj = function () {
    return this.kr_1;
  };
  PluginGeneratedSerialDescriptor.prototype.tj = function () {
    return this.mr_1;
  };
  PluginGeneratedSerialDescriptor.prototype.vj = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.sj = function () {
    var tmp0_elvis_lhs = this.qr_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.rk = function () {
    return this.sr_1.j2();
  };
  PluginGeneratedSerialDescriptor.prototype.wr = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.ur_1.t();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.xr = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.nr_1 = tmp0_this.nr_1 + 1 | 0;
    this.or_1[tmp0_this.nr_1] = name;
    this.rr_1[this.nr_1] = isOptional;
    this.pr_1[this.nr_1] = null;
    if (this.nr_1 === (this.mr_1 - 1 | 0)) {
      this.sr_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.xj = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ji();
  };
  PluginGeneratedSerialDescriptor.prototype.ak = function (index) {
    return getChecked_0(this.rr_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.wj = function (index) {
    var tmp0_elvis_lhs = getChecked(this.pr_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.zj = function (index) {
    return getChecked(this.or_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.yj = function (name) {
    var tmp0_elvis_lhs = this.sr_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rj() === other.rj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.wr(), tmp0__anonymous__q1qw7t.wr());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tj() === other.tj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tj();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xj(index).rj() === other.xj(index).rj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xj(index).vj(), other.xj(index).vj())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.mr_1);
    var tmp_0 = this.rj() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.wr();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_0()));
  }
  CharArraySerializer_0.prototype.ws = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.ws((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.xs = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.xs((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.eo = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.ys = function (decoder, index, builder, checkIndex) {
    builder.bt(decoder.ql(this.ji(), index));
  };
  CharArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.ys(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.ct = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.ct(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.ft = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.ft((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.gt = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.gt((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.eo = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.ht = function (decoder, index, builder, checkIndex) {
    builder.kt(decoder.pl(this.ji(), index));
  };
  DoubleArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.ht(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.lt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.lt(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.ot = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.ot((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.pt = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.pt((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.eo = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.qt = function (decoder, index, builder, checkIndex) {
    builder.tt(decoder.ol(this.ji(), index));
  };
  FloatArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.qt(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.ut = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.ut(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance()));
  }
  LongArraySerializer_0.prototype.xt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.xt((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.yt = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.yt((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.eo = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.zt = function (decoder, index, builder, checkIndex) {
    builder.cu(decoder.nl(this.ji(), index));
  };
  LongArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.zt(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.du = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.om(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.du(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.gu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.gu((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.hu = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.hu((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.eo = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.iu = function (decoder, index, builder, checkIndex) {
    builder.lu(decoder.ml(this.ji(), index));
  };
  IntArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.iu(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.mu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.mu(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.pu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.pu((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.qu = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.qu((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.eo = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.ru = function (decoder, index, builder, checkIndex) {
    builder.uu(decoder.ll(this.ji(), index));
  };
  ShortArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.ru(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.vu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.vu(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.yu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.yu((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.zu = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.zu((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.eo = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.av = function (decoder, index, builder, checkIndex) {
    builder.dv(decoder.kl(this.ji(), index));
  };
  ByteArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.av(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.ev = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.lm(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.ev(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.hv = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.ko = function (_this__u8e3s4) {
    return this.hv((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.iv = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.fo = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.eo = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.jv = function (decoder, index, builder, checkIndex) {
    builder.mv(decoder.jl(this.ji(), index));
  };
  BooleanArraySerializer_0.prototype.go = function (decoder, index, builder, checkIndex) {
    return this.jv(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.nv = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.km(this.ji(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.io = function (encoder, content, size) {
    return this.nv(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zs_1 = bufferWithData;
    this.at_1 = bufferWithData.length;
    this.wa(10);
  }
  CharArrayBuilder.prototype.wn = function () {
    return this.at_1;
  };
  CharArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.zs_1.length < requiredCapacity)
      this.zs_1 = copyOf(this.zs_1, coerceAtLeast(requiredCapacity, imul(this.zs_1.length, 2)));
  };
  CharArrayBuilder.prototype.bt = function (c) {
    this.po(0, 1, null);
    var tmp = this.zs_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.at_1;
    tmp0_this.at_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.yn = function () {
    return copyOf(this.zs_1, this.at_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.it_1 = bufferWithData;
    this.jt_1 = bufferWithData.length;
    this.wa(10);
  }
  DoubleArrayBuilder.prototype.wn = function () {
    return this.jt_1;
  };
  DoubleArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.it_1.length < requiredCapacity)
      this.it_1 = copyOf_0(this.it_1, coerceAtLeast(requiredCapacity, imul(this.it_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.kt = function (c) {
    this.po(0, 1, null);
    var tmp = this.it_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.jt_1;
    tmp0_this.jt_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.yn = function () {
    return copyOf_0(this.it_1, this.jt_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rt_1 = bufferWithData;
    this.st_1 = bufferWithData.length;
    this.wa(10);
  }
  FloatArrayBuilder.prototype.wn = function () {
    return this.st_1;
  };
  FloatArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.rt_1.length < requiredCapacity)
      this.rt_1 = copyOf_1(this.rt_1, coerceAtLeast(requiredCapacity, imul(this.rt_1.length, 2)));
  };
  FloatArrayBuilder.prototype.tt = function (c) {
    this.po(0, 1, null);
    var tmp = this.rt_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.st_1;
    tmp0_this.st_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.yn = function () {
    return copyOf_1(this.rt_1, this.st_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.au_1 = bufferWithData;
    this.bu_1 = bufferWithData.length;
    this.wa(10);
  }
  LongArrayBuilder.prototype.wn = function () {
    return this.bu_1;
  };
  LongArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.au_1.length < requiredCapacity)
      this.au_1 = copyOf_2(this.au_1, coerceAtLeast(requiredCapacity, imul(this.au_1.length, 2)));
  };
  LongArrayBuilder.prototype.cu = function (c) {
    this.po(0, 1, null);
    var tmp = this.au_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.bu_1;
    tmp0_this.bu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.yn = function () {
    return copyOf_2(this.au_1, this.bu_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ju_1 = bufferWithData;
    this.ku_1 = bufferWithData.length;
    this.wa(10);
  }
  IntArrayBuilder.prototype.wn = function () {
    return this.ku_1;
  };
  IntArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.ju_1.length < requiredCapacity)
      this.ju_1 = copyOf_3(this.ju_1, coerceAtLeast(requiredCapacity, imul(this.ju_1.length, 2)));
  };
  IntArrayBuilder.prototype.lu = function (c) {
    this.po(0, 1, null);
    var tmp = this.ju_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.ku_1;
    tmp0_this.ku_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.yn = function () {
    return copyOf_3(this.ju_1, this.ku_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.su_1 = bufferWithData;
    this.tu_1 = bufferWithData.length;
    this.wa(10);
  }
  ShortArrayBuilder.prototype.wn = function () {
    return this.tu_1;
  };
  ShortArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.su_1.length < requiredCapacity)
      this.su_1 = copyOf_4(this.su_1, coerceAtLeast(requiredCapacity, imul(this.su_1.length, 2)));
  };
  ShortArrayBuilder.prototype.uu = function (c) {
    this.po(0, 1, null);
    var tmp = this.su_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.tu_1;
    tmp0_this.tu_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.yn = function () {
    return copyOf_4(this.su_1, this.tu_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.bv_1 = bufferWithData;
    this.cv_1 = bufferWithData.length;
    this.wa(10);
  }
  ByteArrayBuilder.prototype.wn = function () {
    return this.cv_1;
  };
  ByteArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.bv_1.length < requiredCapacity)
      this.bv_1 = copyOf_5(this.bv_1, coerceAtLeast(requiredCapacity, imul(this.bv_1.length, 2)));
  };
  ByteArrayBuilder.prototype.dv = function (c) {
    this.po(0, 1, null);
    var tmp = this.bv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.cv_1;
    tmp0_this.cv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.yn = function () {
    return copyOf_5(this.bv_1, this.cv_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kv_1 = bufferWithData;
    this.lv_1 = bufferWithData.length;
    this.wa(10);
  }
  BooleanArrayBuilder.prototype.wn = function () {
    return this.lv_1;
  };
  BooleanArrayBuilder.prototype.wa = function (requiredCapacity) {
    if (this.kv_1.length < requiredCapacity)
      this.kv_1 = copyOf_6(this.kv_1, coerceAtLeast(requiredCapacity, imul(this.kv_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.mv = function (c) {
    this.po(0, 1, null);
    var tmp = this.kv_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.lv_1;
    tmp0_this.lv_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.yn = function () {
    return copyOf_6(this.kv_1, this.lv_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.ov_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.ji = function () {
    return this.ov_1;
  };
  StringSerializer.prototype.pv = function (encoder, value) {
    return encoder.im(value);
  };
  StringSerializer.prototype.ki = function (encoder, value) {
    return this.pv(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.li = function (decoder) {
    return decoder.dl();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.qv_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.ji = function () {
    return this.qv_1;
  };
  CharSerializer.prototype.rv = function (encoder, value) {
    return encoder.hm(value);
  };
  CharSerializer.prototype.ki = function (encoder, value) {
    return this.rv(encoder, value instanceof Char ? value.i1_1 : THROW_CCE());
  };
  CharSerializer.prototype.sv = function (decoder) {
    return decoder.cl();
  };
  CharSerializer.prototype.li = function (decoder) {
    return new Char(this.sv(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.tv_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.ji = function () {
    return this.tv_1;
  };
  DoubleSerializer.prototype.uv = function (encoder, value) {
    return encoder.gm(value);
  };
  DoubleSerializer.prototype.ki = function (encoder, value) {
    return this.uv(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.li = function (decoder) {
    return decoder.bl();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.vv_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.ji = function () {
    return this.vv_1;
  };
  FloatSerializer.prototype.wv = function (encoder, value) {
    return encoder.fm(value);
  };
  FloatSerializer.prototype.ki = function (encoder, value) {
    return this.wv(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.li = function (decoder) {
    return decoder.al();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.xv_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.ji = function () {
    return this.xv_1;
  };
  LongSerializer.prototype.yv = function (encoder, value) {
    return encoder.em(value);
  };
  LongSerializer.prototype.ki = function (encoder, value) {
    return this.yv(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.li = function (decoder) {
    return decoder.zk();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.zv_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.ji = function () {
    return this.zv_1;
  };
  IntSerializer.prototype.aw = function (encoder, value) {
    return encoder.dm(value);
  };
  IntSerializer.prototype.ki = function (encoder, value) {
    return this.aw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.li = function (decoder) {
    return decoder.yk();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.bw_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.ji = function () {
    return this.bw_1;
  };
  ShortSerializer.prototype.cw = function (encoder, value) {
    return encoder.cm(value);
  };
  ShortSerializer.prototype.ki = function (encoder, value) {
    return this.cw(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.li = function (decoder) {
    return decoder.xk();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.dw_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.ji = function () {
    return this.dw_1;
  };
  ByteSerializer.prototype.ew = function (encoder, value) {
    return encoder.bm(value);
  };
  ByteSerializer.prototype.ki = function (encoder, value) {
    return this.ew(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.li = function (decoder) {
    return decoder.wk();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.fw_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.ji = function () {
    return this.fw_1;
  };
  BooleanSerializer.prototype.gw = function (encoder, value) {
    return encoder.am(value);
  };
  BooleanSerializer.prototype.ki = function (encoder, value) {
    return this.gw(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.li = function (decoder) {
    return decoder.vk();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.hw_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.ji = function () {
    return this.hw_1.ji();
  };
  UnitSerializer.prototype.iw = function (decoder) {
    this.hw_1.li(decoder);
  };
  UnitSerializer.prototype.li = function (decoder) {
    this.iw(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.jw = function (encoder, value) {
    this.hw_1.ki(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.ki = function (encoder, value) {
    return this.jw(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.kw_1 = serialName;
    this.lw_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.rj = function () {
    return this.kw_1;
  };
  PrimitiveSerialDescriptor_0.prototype.vj = function () {
    return this.lw_1;
  };
  PrimitiveSerialDescriptor_0.prototype.tj = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.zj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.yj = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.ak = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.xj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.wj = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.kw_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().j2();
    var tmp0_iterator = keys.e();
    while (tmp0_iterator.f()) {
      var primitive = tmp0_iterator.g();
      var simpleName = capitalize(ensureNotNull(primitive.dd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    {
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
      }
      if (tmp$ret$0) {
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
          tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
        }
        var tmp_0 = toString(tmp$ret$1);
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = _this__u8e3s4;
          }
          tmp$ret$3 = tmp$ret$2.substring(1);
        }
        tmp = tmp_0 + tmp$ret$3;
      } else {
        tmp = _this__u8e3s4;
      }
      tmp$ret$4 = tmp;
    }
    return tmp$ret$4;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().i2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().we(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().ze(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ue(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ff(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().te(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ef(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance())), to(PrimitiveClasses_getInstance().df(), LongArraySerializer()), to(PrimitiveClasses_getInstance().se(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().cf(), IntArraySerializer()), to(PrimitiveClasses_getInstance().re(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().bf(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().qe(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().af(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().pe(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ye(), BooleanArraySerializer()), to(getKClass(Unit), serializer_10(Unit_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.ow = function (_this__u8e3s4, index) {
    return this.qw(this.pw(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.qw = function (nestedName) {
    var tmp0_elvis_lhs = this.tw();
    return this.uw(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.pw = function (desc, index) {
    return desc.zj(index);
  };
  NamedValueDecoder.prototype.uw = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.hx(tag);
    var r = block();
    if (!$this.sw_1) {
      $this.ix();
    }
    $this.sw_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.fl($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.rw_1 = tmp$ret$0;
    this.sw_1 = false;
  }
  TaggedDecoder.prototype.dj = function () {
    return get_EmptySerializersModule();
  };
  TaggedDecoder.prototype.vw = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.ww = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.xw = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.yw = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.zw = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.ax = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.bx = function (tag) {
    var tmp = this.vw(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.cx = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.dx = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.ex = function (tag) {
    var tmp = this.vw(tag);
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.fx = function (tag) {
    var tmp = this.vw(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.gx = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.hx(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.fl = function (deserializer, previousValue) {
    return this.gl(deserializer);
  };
  TaggedDecoder.prototype.el = function (inlineDescriptor) {
    return this.gx(this.ix(), inlineDescriptor);
  };
  TaggedDecoder.prototype.tk = function () {
    var tmp0_elvis_lhs = this.tw();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.ww(currentTag);
  };
  TaggedDecoder.prototype.uk = function () {
    return null;
  };
  TaggedDecoder.prototype.vk = function () {
    return this.xw(this.ix());
  };
  TaggedDecoder.prototype.wk = function () {
    return this.yw(this.ix());
  };
  TaggedDecoder.prototype.xk = function () {
    return this.zw(this.ix());
  };
  TaggedDecoder.prototype.yk = function () {
    return this.ax(this.ix());
  };
  TaggedDecoder.prototype.zk = function () {
    return this.bx(this.ix());
  };
  TaggedDecoder.prototype.al = function () {
    return this.cx(this.ix());
  };
  TaggedDecoder.prototype.bl = function () {
    return this.dx(this.ix());
  };
  TaggedDecoder.prototype.cl = function () {
    return this.ex(this.ix());
  };
  TaggedDecoder.prototype.dl = function () {
    return this.fx(this.ix());
  };
  TaggedDecoder.prototype.hl = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.il = function (descriptor) {
  };
  TaggedDecoder.prototype.jl = function (descriptor, index) {
    return this.xw(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.kl = function (descriptor, index) {
    return this.yw(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.ll = function (descriptor, index) {
    return this.zw(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.ml = function (descriptor, index) {
    return this.ax(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.nl = function (descriptor, index) {
    return this.bx(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.ol = function (descriptor, index) {
    return this.cx(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.pl = function (descriptor, index) {
    return this.dx(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.ql = function (descriptor, index) {
    return this.ex(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.rl = function (descriptor, index) {
    return this.fx(this.ow(descriptor, index));
  };
  TaggedDecoder.prototype.sl = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ow(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.tw = function () {
    return lastOrNull(this.rw_1);
  };
  TaggedDecoder.prototype.hx = function (name) {
    this.rw_1.b(name);
  };
  TaggedDecoder.prototype.ix = function () {
    var r = this.rw_1.j3(get_lastIndex_0(this.rw_1));
    this.sw_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.jx_1 = key;
    this.kx_1 = value;
  }
  MapEntry.prototype.s = function () {
    return this.jx_1;
  };
  MapEntry.prototype.t = function () {
    return this.kx_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.jx_1 + ', value=' + this.kx_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.jx_1 == null ? 0 : hashCode(this.jx_1);
    result = imul(result, 31) + (this.kx_1 == null ? 0 : hashCode(this.kx_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.jx_1, tmp0_other_with_cast.jx_1))
      return false;
    if (!equals(this.kx_1, tmp0_other_with_cast.kx_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.ji();
      $this$buildSerialDescriptor.xi('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.ji();
      $this$buildSerialDescriptor.xi('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.nx_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.ji = function () {
    return this.nx_1;
  };
  MapEntrySerializer_0.prototype.ox = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  MapEntrySerializer_0.prototype.px = function (_this__u8e3s4) {
    return this.ox((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.qx = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  MapEntrySerializer_0.prototype.rx = function (_this__u8e3s4) {
    return this.qx((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.sx = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.ji();
      $this$buildClassSerialDescriptor.xi('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.ji();
      $this$buildClassSerialDescriptor.xi('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.yx_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.ji = function () {
    return this.yx_1;
  };
  PairSerializer_0.prototype.zx = function (_this__u8e3s4) {
    return _this__u8e3s4.f3_1;
  };
  PairSerializer_0.prototype.px = function (_this__u8e3s4) {
    return this.zx(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.ay = function (_this__u8e3s4) {
    return _this__u8e3s4.g3_1;
  };
  PairSerializer_0.prototype.rx = function (_this__u8e3s4) {
    return this.ay(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.sx = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.tl($this.ey_1, 0, $this.by_1, null, 8, null);
    var b = composite.tl($this.ey_1, 1, $this.cy_1, null, 8, null);
    var c = composite.tl($this.ey_1, 2, $this.dy_1, null, 8, null);
    composite.il($this.ey_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.vl($this.ey_1);
      Companion_getInstance_1();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.tl($this.ey_1, 0, $this.by_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.tl($this.ey_1, 1, $this.cy_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.tl($this.ey_1, 2, $this.dy_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.il($this.ey_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.by_1.ji();
      $this$buildClassSerialDescriptor.xi('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.cy_1.ji();
      $this$buildClassSerialDescriptor.xi('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.dy_1.ji();
      $this$buildClassSerialDescriptor.xi('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.by_1 = aSerializer;
    this.cy_1 = bSerializer;
    this.dy_1 = cSerializer;
    var tmp = this;
    tmp.ey_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.ji = function () {
    return this.ey_1;
  };
  TripleSerializer_0.prototype.fy = function (encoder, value) {
    var structuredEncoder = encoder.hl(this.ey_1);
    structuredEncoder.tm(this.ey_1, 0, this.by_1, value.c6_1);
    structuredEncoder.tm(this.ey_1, 1, this.cy_1, value.d6_1);
    structuredEncoder.tm(this.ey_1, 2, this.dy_1, value.e6_1);
    structuredEncoder.il(this.ey_1);
  };
  TripleSerializer_0.prototype.ki = function (encoder, value) {
    return this.fy(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.li = function (decoder) {
    var composite = decoder.hl(this.ey_1);
    if (composite.ul()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.tx_1 = keySerializer;
    this.ux_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.vx = function (encoder, value) {
    var structuredEncoder = encoder.hl(this.ji());
    structuredEncoder.tm(this.ji(), 0, this.tx_1, this.px(value));
    structuredEncoder.tm(this.ji(), 1, this.ux_1, this.rx(value));
    structuredEncoder.il(this.ji());
  };
  KeyValueSerializer.prototype.ki = function (encoder, value) {
    return this.vx(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.li = function (decoder) {
    var composite = decoder.hl(this.ji());
    if (composite.ul()) {
      var tmp = this.ji();
      var key = composite.tl(tmp, 0, this.tx_1, null, 8, null);
      var tmp_0 = this.ji();
      var value = composite.tl(tmp_0, 1, this.ux_1, null, 8, null);
      return this.sx(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.vl(this.ji());
      Companion_getInstance_1();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.ji();
          key_0 = composite.tl(tmp_1, 0, this.tx_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.ji();
            value_0 = composite.tl(tmp_2, 1, this.ux_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.il(this.ji());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.sx(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.ij = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.jj(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.hy_1 = class2ContextualFactory;
    this.iy_1 = polyBase2Serializers;
    this.jy_1 = polyBase2DefaultSerializerProvider;
    this.ky_1 = polyBase2NamedSerializers;
    this.ly_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.bn = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.iy_1.i2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.jy_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.an = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.ky_1.i2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).i2(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.ly_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.jj = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.hy_1.i2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.my(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.gy = function (collector) {
    {
      var tmp0_forEach = this.hy_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_forEach.r().e();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = element.s();
          }
          var kclass = tmp$ret$1;
          var tmp$ret$2;
          {
            tmp$ret$2 = element.t();
          }
          var serial = tmp$ret$2;
          var tmp0_subject = serial;
          if (tmp0_subject instanceof Argless) {
            var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
            var tmp_0 = serial.py_1;
            collector.qy(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
          } else {
            if (tmp0_subject instanceof WithTypeArguments)
              collector.oy(kclass, serial.ny_1);
          }
        }
      }
    }
    {
      var tmp1_forEach = this.iy_1;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_forEach.r().e();
      }
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = element_0.s();
          }
          var baseClass = tmp$ret$4;
          var tmp$ret$5;
          {
            tmp$ret$5 = element_0.t();
          }
          var classMap = tmp$ret$5;
          {
            var tmp$ret$6;
            {
              tmp$ret$6 = classMap.r().e();
            }
            var tmp0_iterator_1 = tmp$ret$6;
            while (tmp0_iterator_1.f()) {
              var element_1 = tmp0_iterator_1.g();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = element_1.s();
                }
                var actualClass = tmp$ret$7;
                var tmp$ret$8;
                {
                  tmp$ret$8 = element_1.t();
                }
                var serializer = tmp$ret$8;
                var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
                var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
                var tmp$ret$9;
                {
                  tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
                }
                collector.ry(tmp_1, tmp_2, tmp$ret$9);
              }
            }
          }
        }
      }
    }
    {
      var tmp2_forEach = this.jy_1;
      var tmp$ret$10;
      {
        tmp$ret$10 = tmp2_forEach.r().e();
      }
      var tmp0_iterator_2 = tmp$ret$10;
      while (tmp0_iterator_2.f()) {
        var element_2 = tmp0_iterator_2.g();
        {
          var tmp$ret$11;
          {
            tmp$ret$11 = element_2.s();
          }
          var baseClass_0 = tmp$ret$11;
          var tmp$ret$12;
          {
            tmp$ret$12 = element_2.t();
          }
          var provider = tmp$ret$12;
          var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
          collector.sy(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
        }
      }
    }
    {
      var tmp3_forEach = this.ly_1;
      var tmp$ret$13;
      {
        tmp$ret$13 = tmp3_forEach.r().e();
      }
      var tmp0_iterator_3 = tmp$ret$13;
      while (tmp0_iterator_3.f()) {
        var element_3 = tmp0_iterator_3.g();
        {
          var tmp$ret$14;
          {
            tmp$ret$14 = element_3.s();
          }
          var baseClass_1 = tmp$ret$14;
          var tmp$ret$15;
          {
            tmp$ret$15 = element_3.t();
          }
          var provider_0 = tmp$ret$15;
          var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
          collector.ty(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
        }
      }
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.uy = function () {
    return this.py_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.vy = function () {
    return this.ny_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.wy_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.wy_1.equals(tmp0_other_with_cast.wy_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.wy_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.wy_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.ed(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    {
      tmp$ret$0 = copyToArray(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_asDynamic = get_js(_this__u8e3s4);
        tmp$ret$0 = tmp0_asDynamic;
      }
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ve());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      {
        tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      }
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.ts(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.dd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
    }
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.kj = get_isNullable;
  SerialDescriptorImpl.prototype.uj = get_isInline;
  AbstractDecoder.prototype.tl = decodeSerializableElement$default;
  AbstractDecoder.prototype.gl = decodeSerializableValue;
  AbstractDecoder.prototype.ul = decodeSequentially;
  AbstractDecoder.prototype.wl = decodeCollectionSize;
  AbstractEncoder.prototype.vm = encodeNotNullMark;
  AbstractEncoder.prototype.wm = beginCollection;
  AbstractEncoder.prototype.um = encodeSerializableValue;
  ListLikeDescriptor.prototype.kj = get_isNullable;
  ListLikeDescriptor.prototype.uj = get_isInline;
  ListLikeDescriptor.prototype.sj = get_annotations;
  PrimitiveArrayDescriptor.prototype.kj = get_isNullable;
  PrimitiveArrayDescriptor.prototype.uj = get_isInline;
  PrimitiveArrayDescriptor.prototype.sj = get_annotations;
  ArrayClassDesc.prototype.kj = get_isNullable;
  ArrayClassDesc.prototype.uj = get_isInline;
  ArrayClassDesc.prototype.sj = get_annotations;
  MapLikeDescriptor.prototype.kj = get_isNullable;
  MapLikeDescriptor.prototype.uj = get_isInline;
  MapLikeDescriptor.prototype.sj = get_annotations;
  LinkedHashMapClassDesc.prototype.kj = get_isNullable;
  LinkedHashMapClassDesc.prototype.uj = get_isInline;
  LinkedHashMapClassDesc.prototype.sj = get_annotations;
  HashMapClassDesc.prototype.kj = get_isNullable;
  HashMapClassDesc.prototype.uj = get_isInline;
  HashMapClassDesc.prototype.sj = get_annotations;
  ArrayListClassDesc.prototype.kj = get_isNullable;
  ArrayListClassDesc.prototype.uj = get_isInline;
  ArrayListClassDesc.prototype.sj = get_annotations;
  LinkedHashSetClassDesc.prototype.kj = get_isNullable;
  LinkedHashSetClassDesc.prototype.uj = get_isInline;
  LinkedHashSetClassDesc.prototype.sj = get_annotations;
  HashSetClassDesc.prototype.kj = get_isNullable;
  HashSetClassDesc.prototype.uj = get_isInline;
  HashSetClassDesc.prototype.sj = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.kj = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.uj = get_isInline;
  InlineClassDescriptor.prototype.kj = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.as = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.kj = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.uj = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.sj = get_annotations;
  TaggedDecoder.prototype.tl = decodeSerializableElement$default;
  TaggedDecoder.prototype.gl = decodeSerializableValue;
  TaggedDecoder.prototype.ul = decodeSequentially;
  TaggedDecoder.prototype.wl = decodeCollectionSize;
  NamedValueDecoder.prototype.gl = decodeSerializableValue;
  NamedValueDecoder.prototype.tl = decodeSerializableElement$default;
  NamedValueDecoder.prototype.ul = decodeSequentially;
  NamedValueDecoder.prototype.wl = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_getInstance_1;
  _.$_$.l = StringSerializer_getInstance;
  _.$_$.m = ListSerializer;
  _.$_$.n = MapSerializer;
  _.$_$.o = SetSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer_1;
  _.$_$.r = serializer_14;
  _.$_$.s = serializer_11;
  _.$_$.t = serializer_13;
  _.$_$.u = serializer_12;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = ENUM;
  _.$_$.d1 = getContextualDescriptor;
  _.$_$.e1 = AbstractDecoder;
  _.$_$.f1 = AbstractEncoder;
  _.$_$.g1 = decodeCollectionSize;
  _.$_$.h1 = decodeSequentially;
  _.$_$.i1 = CompositeDecoder;
  _.$_$.j1 = CompositeEncoder;
  _.$_$.k1 = decodeSerializableValue;
  _.$_$.l1 = Decoder;
  _.$_$.m1 = beginCollection;
  _.$_$.n1 = encodeNotNullMark;
  _.$_$.o1 = Encoder;
  _.$_$.p1 = AbstractPolymorphicSerializer;
  _.$_$.q1 = ElementMarker;
  _.$_$.r1 = typeParametersSerializers;
  _.$_$.s1 = GeneratedSerializer;
  _.$_$.t1 = NamedValueDecoder;
  _.$_$.u1 = PluginGeneratedSerialDescriptor;
  _.$_$.v1 = SerializerFactory;
  _.$_$.w1 = jsonCachedSerialNames;
  _.$_$.x1 = throwMissingFieldException;
  _.$_$.y1 = get_EmptySerializersModule;
  _.$_$.z1 = contextual;
  _.$_$.a2 = SerializersModuleCollector;
  _.$_$.b2 = BinaryFormat;
  _.$_$.c2 = DeserializationStrategy;
  _.$_$.d2 = KSerializer;
  _.$_$.e2 = MissingFieldException;
  _.$_$.f2 = SealedClassSerializer;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = StringFormat;
  _.$_$.i2 = findPolymorphicSerializer;
  _.$_$.j2 = serializerOrNull;
  _.$_$.k2 = serializer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map