(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.d8;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ic;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.u8;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.k1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getKClass = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.jb;
  var discard = kotlin_io_ktor_ktor_io.$_$.a1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.e;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Map = kotlin_kotlin.$_$.k4;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Set = kotlin_kotlin.$_$.q4;
  var firstOrNull = kotlin_kotlin.$_$.o5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var isArray = kotlin_kotlin.$_$.m8;
  var List = kotlin_kotlin.$_$.i4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var filterNotNull = kotlin_kotlin.$_$.m5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var singleOrNull = kotlin_kotlin.$_$.l6;
  var Collection = kotlin_kotlin.$_$.b4;
  //endregion
  //region block: pre-declaration
  SerializationNegotiationParameters.prototype = Object.create(SerializationParameters.prototype);
  SerializationNegotiationParameters.prototype.constructor = SerializationNegotiationParameters;
  $serializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $serializeCOROUTINE$0.prototype.constructor = $serializeCOROUTINE$0;
  KotlinxSerializationConverter$serializationBase$1.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxSerializationConverter$serializationBase$1.prototype.constructor = KotlinxSerializationConverter$serializationBase$1;
  $deserializeCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$1.prototype.constructor = $deserializeCOROUTINE$1;
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.a3w_1 = format;
    this.b3w_1 = value;
    this.c3w_1 = typeInfo;
    this.d3w_1 = charset;
    this.e3w_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.f3w = function () {
    return this.a3w_1;
  };
  SerializationNegotiationParameters.prototype.t = function () {
    return this.b3w_1;
  };
  SerializationNegotiationParameters.prototype.g3w = function () {
    return this.c3w_1;
  };
  SerializationNegotiationParameters.prototype.h3w = function () {
    return this.d3w_1;
  };
  SerializationNegotiationParameters.$metadata$ = classMeta('SerializationNegotiationParameters', undefined, undefined, undefined, undefined, SerializationParameters.prototype);
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3w_1 = _this__u8e3s4;
    this.w3w_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 5;
            this.ch_1 = 2;
            var tmp_0 = this;
            tmp_0.y3w_1 = serializerFromTypeInfo(this.w3w_1.g3w(), this.v3w_1.c3x_1.dj());
            this.w3w_1.m3w_1 = this.y3w_1;
            this.bh_1 = 1;
            suspendResult = this.v3w_1.d3x(this.w3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x3w_1 = suspendResult;
            this.ch_1 = 5;
            this.bh_1 = 3;
            continue $sm;
          case 2:
            this.ch_1 = 5;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof SerializationException) {
              this.z3w_1 = this.eh_1;
              var tmp_2 = this;
              tmp_2.x3w_1 = null;
              this.bh_1 = 3;
              continue $sm;
            } else {
              throw this.eh_1;
            }

            break;
          case 3:
            this.ch_1 = 5;
            this.a3x_1 = this.x3w_1;
            if (!(this.a3x_1 == null)) {
              return this.a3x_1;
            }

            this.b3x_1 = guessSerializer(this.w3w_1.t(), this.v3w_1.c3x_1.dj());
            this.w3w_1.m3w_1 = this.b3x_1;
            this.bh_1 = 4;
            suspendResult = this.v3w_1.d3x(this.w3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
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
  $serializeCOROUTINE$0.$metadata$ = classMeta('$serializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationBase(format) {
    this.c3x_1 = format;
  }
  KotlinxSerializationBase.prototype.e3x = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  KotlinxSerializationBase.$metadata$ = classMeta('KotlinxSerializationBase');
  function SerializationParameters(format, value, typeInfo, charset) {
    this.i3w_1 = format;
    this.j3w_1 = value;
    this.k3w_1 = typeInfo;
    this.l3w_1 = charset;
  }
  SerializationParameters.prototype.f3w = function () {
    return this.i3w_1;
  };
  SerializationParameters.prototype.t = function () {
    return this.j3w_1;
  };
  SerializationParameters.prototype.g3w = function () {
    return this.k3w_1;
  };
  SerializationParameters.prototype.h3w = function () {
    return this.l3w_1;
  };
  SerializationParameters.prototype.uy = function () {
    var tmp = this.m3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  SerializationParameters.$metadata$ = classMeta('SerializationParameters');
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.j2s(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.bj(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.ej(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.g3x_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.h3x_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.j3x = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      {
        var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).dd() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).dd());
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return serializeContent(this.g3x_1, parameters.uy(), parameters.f3w(), parameters.t(), parameters.e3w_1, parameters.h3w());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.d3x = function (parameters, $cont) {
    return this.j3x(parameters, $cont);
  };
  KotlinxSerializationConverter$serializationBase$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, KotlinxSerializationBase.prototype);
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s3x_1 = _this__u8e3s4;
    this.t3x_1 = charset;
    this.u3x_1 = typeInfo;
    this.v3x_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.w3x_1 = serializerFromTypeInfo(this.u3x_1, this.s3x_1.h3x_1.dj());
            this.bh_1 = 1;
            suspendResult = this.v3x_1.d20(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.ch_1 = 2;
            var tmp0_subject = this.s3x_1.h3x_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.s3x_1.h3x_1.cj(this.w3x_1, readText$default(contentPacket, this.t3x_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.s3x_1.h3x_1.fj(this.w3x_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.s3x_1.h3x_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.ch_1 = 4;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.eh_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.eh_1;
            }

            break;
          case 3:
            this.ch_1 = 4;
            return Unit_getInstance();
          case 4:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 4) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $deserializeCOROUTINE$1.$metadata$ = classMeta('$deserializeCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationConverter(format) {
    this.h3x_1 = format;
    {
      var tmp;
      var tmp_0 = this.h3x_1;
      if (isInterface(tmp_0, BinaryFormat)) {
        tmp = true;
      } else {
        var tmp_1 = this.h3x_1;
        tmp = isInterface(tmp_1, StringFormat);
      }
      var tmp0_require = tmp;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.h3x_1 + ' is not supported.');
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp_2 = this;
    tmp_2.i3x_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.x3x = function (contentType, charset, typeInfo, value, $cont) {
    return this.y3x(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.k2s = function (contentType, charset, typeInfo, value, $cont) {
    return this.x3x(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.y3x = function (contentType, charset, typeInfo, value, $cont) {
    return this.i3x_1.e3x(new SerializationNegotiationParameters(this.h3x_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.l2s = function (contentType, charset, typeInfo, value, $cont) {
    return this.y3x(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.m2s = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  KotlinxSerializationConverter.$metadata$ = classMeta('KotlinxSerializationConverter', [ContentConverter]);
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.q2e_1;
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
          tmp$ret$0 = tmp0_safe_receiver.nd().m() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.ij(typeInfo.o2e_1, null, 2, null);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.o2e_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            {
              {
              }
              var tmp$ret$0;
              {
                tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.j2(), module_0);
              var valueSerializer = elementSerializer(value.k2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.ij(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.q2e_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.od()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    {
      var tmp$ret$2;
      {
        var tmp0_map = filterNotNull(_this__u8e3s4);
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.e();
          while (tmp0_iterator.f()) {
            var item = tmp0_iterator.g();
            var tmp$ret$0;
            {
              tmp$ret$0 = guessSerializer(item, module_0);
            }
            tmp0_mapTo.b(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp1_distinctBy = tmp$ret$2;
      var set = HashSet_init_$Create$();
      var list = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = tmp1_distinctBy.e();
      while (tmp0_iterator_0.f()) {
        var e = tmp0_iterator_0.g();
        var tmp$ret$3;
        {
          tmp$ret$3 = e.ji().rj();
        }
        var key = tmp$ret$3;
        if (set.b(key)) {
          list.b(e);
        }
      }
      tmp$ret$4 = list;
    }
    var serializers = tmp$ret$4;
    if (serializers.d() > 1) {
      {
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
            var tmp0_iterator_1 = serializers.e();
            while (tmp0_iterator_1.f()) {
              var item_0 = tmp0_iterator_1.g();
              var tmp$ret$5;
              {
                tmp$ret$5 = item_0.ji().rj();
              }
              tmp0_mapTo_0.b(tmp$ret$5);
            }
            tmp$ret$6 = tmp0_mapTo_0;
          }
          tmp$ret$7 = tmp$ret$6;
        }
        var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
        throw IllegalStateException_init_$Create$(toString(tmp2_error));
      }
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.ji().kj()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.m();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.e();
      while (tmp0_iterator_2.f()) {
        var element = tmp0_iterator_2.g();
        var tmp$ret$9;
        {
          tmp$ret$9 = element == null;
        }
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js')));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map