(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.d8;
  var ContentTypeMatcher = kotlin_io_ktor_ktor_http.$_$.s;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.w8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.j;
  var contentType = kotlin_io_ktor_ktor_http.$_$.e1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.c;
  var plus = kotlin_kotlin.$_$.d6;
  var toMutableSet = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.d;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var toString = kotlin_kotlin.$_$.h9;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Collection = kotlin_kotlin.$_$.b4;
  var isInterface = kotlin_kotlin.$_$.u8;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Unit = kotlin_kotlin.$_$.tb;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.f8;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.gb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r3;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.v;
  var getKClass = kotlin_kotlin.$_$.d;
  var setOf = kotlin_kotlin.$_$.k6;
  var SuspendFunction2 = kotlin_kotlin.$_$.r7;
  var endsWith$default = kotlin_kotlin.$_$.k;
  var startsWith$default = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  //endregion
  //region block: pre-declaration
  ContentNegotiation$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda.prototype.constructor = ContentNegotiation$Plugin$install$slambda;
  ContentNegotiation$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda_1.prototype.constructor = ContentNegotiation$Plugin$install$slambda_1;
  $convertRequestCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $convertRequestCOROUTINE$0.prototype.constructor = $convertRequestCOROUTINE$0;
  ContentConverterException.prototype = Object.create(Exception.prototype);
  ContentConverterException.prototype.constructor = ContentConverterException;
  //endregion
  function get_DefaultCommonIgnoredTypes() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.i3t_1 = converter;
    this.j3t_1 = contentTypeToSend;
    this.k3t_1 = contentTypeMatcher;
  }
  ConverterRegistration.prototype.l3t = function () {
    return this.i3t_1;
  };
  ConverterRegistration.prototype.m3t = function () {
    return this.k3t_1;
  };
  ConverterRegistration.$metadata$ = classMeta('ConverterRegistration');
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.n3t_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.z2e = function (contentType) {
    return contentType.x2g(this.n3t_1);
  };
  ContentNegotiation$Config$defaultMatcher$1.$metadata$ = classMeta(undefined, [ContentTypeMatcher]);
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.w3t_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.q2w = function ($this$intercept, it, $cont) {
    var tmp = this.r2w($this$intercept, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = this.w3t_1.d3u(this.x3t_1.x2d_1, this.x3t_1.a2d(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z3t_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.z3t_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.z3t_1;
            }

            tmp_0.a3u_1 = tmp_1;
            this.bh_1 = 2;
            suspendResult = this.x3t_1.b2d(this.a3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  ContentNegotiation$Plugin$install$slambda.prototype.r2w = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.w3t_1, completion);
    i.x3t_1 = $this$intercept;
    i.y3t_1 = it;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2w($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.m3u_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.k2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.p3u_1 = this.o3u_1.h3();
            this.q3u_1 = this.o3u_1.i3();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.n3u_1.x2d_1.x2w());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.r3u_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.n3u_1.x2d_1.g30().i2l();
            tmp_2.s3u_1 = suitableCharset$default(tmp_3, null, 1, null);
            this.bh_1 = 1;
            suspendResult = this.m3u_1.w3u(this.p3u_1, this.q3u_1, this.r3u_1, this.s3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t3u_1 = suspendResult;
            var tmp_4 = this;
            var tmp_5;
            if (this.t3u_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_5 = this.t3u_1;
            }

            tmp_4.u3u_1 = tmp_5;
            this.v3u_1 = new HttpResponseContainer(this.p3u_1, this.u3u_1);
            this.bh_1 = 2;
            suspendResult = this.n3u_1.b2d(this.v3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  ContentNegotiation$Plugin$install$slambda_1.prototype.l2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.m3u_1, completion);
    i.n3u_1 = $this$intercept;
    i.o3u_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda_1.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.x3u_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.y3u_1 = tmp$ret$0;
  }
  Config.prototype.i2s = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().p2f_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.z3u(contentType, converter, matcher, configuration);
  };
  Config.prototype.z3u = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    {
      {
      }
      configuration(converter);
      tmp$ret$0 = converter;
    }
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.y3u_1.b(registration);
  };
  Config.$metadata$ = classMeta('Config', [Configuration]);
  function Plugin() {
    Plugin_instance = this;
    this.a3v_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.s = function () {
    return this.a3v_1;
  };
  Plugin.prototype.b3v = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new ContentNegotiation(config.y3u_1, config.x3u_1);
  };
  Plugin.prototype.b2z = function (block) {
    return this.b3v(block);
  };
  Plugin.prototype.c3v = function (plugin, scope) {
    var tmp = Phases_getInstance().y34_1;
    scope.w2v_1.b2e(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().w2y_1;
    scope.x2v_1.b2e(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.c2z = function (plugin, scope) {
    return this.c3v(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda() {
    return function (it) {
      return toString(it.i3t_1);
    };
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3v_1 = _this__u8e3s4;
    this.m3v_1 = request;
    this.n3v_1 = body;
  }
  $convertRequestCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 7;
            var tmp_0 = this;
            tmp_0.o3v_1 = this.l3v_1.b3u_1;
            var tmp0_iterator = this.o3v_1.e();
            while (tmp0_iterator.f()) {
              var element = tmp0_iterator.g();
              accept(this.m3v_1, element.j3t_1);
            }

            var tmp_1;
            var tmp_2 = this.n3v_1;
            if (tmp_2 instanceof OutgoingContent) {
              tmp_1 = true;
            } else {
              l$ret$1: do {
                var tmp1_any = this.l3v_1.c3u_1;
                var tmp_3;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_3 = tmp1_any.m();
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  this.p3v_1 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.e();
                while (tmp0_iterator_0.f()) {
                  var element_0 = tmp0_iterator_0.g();
                  if (element_0.ed(this.n3v_1)) {
                    this.p3v_1 = true;
                    break l$ret$1;
                  }
                }
                this.p3v_1 = false;
              }
               while (false);
              tmp_1 = this.p3v_1;
            }

            if (tmp_1)
              return null;
            var tmp_4 = this;
            var tmp0_elvis_lhs = contentType_0(this.m3v_1);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.q3v_1 = tmp_5;
            var tmp_6 = this.n3v_1;
            if (tmp_6 instanceof Unit) {
              this.m3v_1.y2x_1.m2b(HttpHeaders_getInstance().v2h_1);
              return EmptyContent_getInstance();
            }

            var tmp_7 = this;
            var tmp2_filter = this.l3v_1.b3u_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.e();
            while (tmp0_iterator_1.f()) {
              var element_1 = tmp0_iterator_1.g();
              if (element_1.k3t_1.z2e(this.q3v_1)) {
                tmp0_filterTo.b(element_1);
              }
            }

            var tmp3_takeIf = tmp0_filterTo;
            var tmp_8;
            if (!tmp3_takeIf.m()) {
              tmp_8 = tmp3_takeIf;
            } else {
              tmp_8 = null;
            }

            var tmp1_elvis_lhs = tmp_8;
            var tmp_9;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_9 = tmp1_elvis_lhs;
            }

            tmp_7.r3v_1 = tmp_9;
            if (this.m3v_1.x3j() == null)
              return null;
            this.m3v_1.y2x_1.m2b(HttpHeaders_getInstance().v2h_1);
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.t3v_1 = this.r3v_1.e();
            this.bh_1 = 2;
            continue $sm;
          case 2:
            if (!this.t3v_1.f()) {
              this.bh_1 = 5;
              continue $sm;
            }

            this.u3v_1 = this.t3v_1.g();
            this.bh_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.q3v_1);
            var tmp_10 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().k25_1 : tmp0_elvis_lhs_0;
            var tmp_11 = ensureNotNull(this.m3v_1.x3j());
            var tmp_12;
            if (!equals(this.n3v_1, NullBody_getInstance())) {
              tmp_12 = this.n3v_1;
            } else {
              tmp_12 = null;
            }

            suspendResult = this.u3v_1.i3t_1.l2s(this.q3v_1, tmp_10, tmp_11, tmp_12, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              this.s3v_1 = result;
              this.bh_1 = 6;
              continue $sm;
            } else {
              this.bh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.bh_1 = 2;
            continue $sm;
          case 5:
            this.s3v_1 = null;
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.s3v_1;
            var tmp_13;
            if (tmp2_elvis_lhs == null) {
              var tmp_14 = "Can't convert " + toString(this.n3v_1) + ' with contentType ' + this.q3v_1 + ' using converters ';
              throw new ContentConverterException(tmp_14 + joinToString$default(this.r3v_1, null, null, null, 0, null, ContentNegotiation$convertRequest$lambda(), 31, null));
            } else {
              tmp_13 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_13;
            return serializedContent;
          case 7:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 7) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $convertRequestCOROUTINE$0.$metadata$ = classMeta('$convertRequestCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.b3u_1 = registrations;
    this.c3u_1 = ignoredTypes;
  }
  ContentNegotiation.prototype.d3u = function (request, body, $cont) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ContentNegotiation.prototype.w3u = function (info, body, responseContentType, charset, $cont) {
    if (!isInterface(body, ByteReadChannel))
      return null;
    if (this.c3u_1.l1(info.o2e_1))
      return null;
    var tmp$ret$8;
    {
      var tmp$ret$5;
      {
        var tmp$ret$2;
        {
          var tmp0_filter = this.b3u_1;
          var tmp$ret$1;
          {
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filter.e();
            while (tmp0_iterator.f()) {
              var element = tmp0_iterator.g();
              var tmp$ret$0;
              {
                tmp$ret$0 = element.k3t_1.z2e(responseContentType);
              }
              if (tmp$ret$0) {
                tmp0_filterTo.b(element);
              }
            }
            tmp$ret$1 = tmp0_filterTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        var tmp1_map = tmp$ret$2;
        var tmp$ret$4;
        {
          var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
          var tmp0_iterator_0 = tmp1_map.e();
          while (tmp0_iterator_0.f()) {
            var item = tmp0_iterator_0.g();
            var tmp$ret$3;
            {
              tmp$ret$3 = item.i3t_1;
            }
            tmp0_mapTo.b(tmp$ret$3);
          }
          tmp$ret$4 = tmp0_mapTo;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp2_takeIf = tmp$ret$5;
      {
      }
      var tmp;
      var tmp$ret$7;
      {
        var tmp$ret$6;
        {
          tmp$ret$6 = !tmp2_takeIf.m();
        }
        tmp$ret$7 = tmp$ret$6;
      }
      if (tmp$ret$7) {
        tmp = tmp2_takeIf;
      } else {
        tmp = null;
      }
      tmp$ret$8 = tmp;
    }
    var tmp0_elvis_lhs = tmp$ret$8;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var suitableConverters = tmp_0;
    return deserialize(suitableConverters, body, info, charset, $cont);
  };
  ContentNegotiation.$metadata$ = classMeta('ContentNegotiation');
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  ContentConverterException.$metadata$ = classMeta('ContentConverterException', undefined, undefined, undefined, undefined, Exception.prototype);
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function init_properties_ContentNegotiation_kt_d83xzi() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().af(), PrimitiveClasses_getInstance().we(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.z2e = function (contentType) {
    if (contentType.x2g(Application_getInstance().p2f_1)) {
      return true;
    }
    var value = contentType.w2g().toString();
    var tmp;
    if (startsWith$default(value, 'application/', false, 2, null)) {
      tmp = endsWith$default(value, '+json', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  JsonContentTypeMatcher.$metadata$ = objectMeta('JsonContentTypeMatcher', [ContentTypeMatcher]);
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashSet_init_$Create$();
      }
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: post-declaration
  Config.prototype.j2s = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'), require('./ktor-ktor-io-js-ir.js')));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map