(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_http, kotlin_kmm_test_models, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.l;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var isInterface = kotlin_kotlin.$_$.u8;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var bodyAsText$default = kotlin_io_ktor_ktor_client_core.$_$.a;
  var println = kotlin_kotlin.$_$.t7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var User = kotlin_kmm_test_models.$_$.a;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.wb;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.q7;
  //endregion
  //region block: pre-declaration
  sendTestGet$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sendTestGet$slambda.prototype.constructor = sendTestGet$slambda;
  sendTestPost$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sendTestPost$slambda.prototype.constructor = sendTestPost$slambda;
  //endregion
  function get_client() {
    init_properties_Platform_kt_l8up1j();
    return client;
  }
  var client;
  function client$lambda$lambda$lambda() {
    return function ($this$Json) {
      $this$Json.c10_1 = true;
      $this$Json.a10_1 = true;
      return Unit_getInstance();
    };
  }
  function client$lambda$lambda() {
    return function ($this$install) {
      var tmp = Json$default(null, client$lambda$lambda$lambda(), 1, null);
      json$default($this$install, tmp, null, 2, null);
      return Unit_getInstance();
    };
  }
  function client$lambda() {
    return function ($this$HttpClient) {
      var tmp = Plugin_getInstance();
      $this$HttpClient.d2z(tmp, client$lambda$lambda());
      return Unit_getInstance();
    };
  }
  var properties_initialized_Platform_kt_qdcgvf;
  function init_properties_Platform_kt_l8up1j() {
    if (properties_initialized_Platform_kt_qdcgvf) {
    } else {
      properties_initialized_Platform_kt_qdcgvf = true;
      var tmp = get_engine();
      client = HttpClient(tmp, client$lambda());
    }
  }
  function get_engine() {
    init_properties_Platform_kt_l8up1j_0();
    return engine;
  }
  var engine;
  var properties_initialized_Platform_kt_qdcgvf_0;
  function init_properties_Platform_kt_l8up1j_0() {
    if (properties_initialized_Platform_kt_qdcgvf_0) {
    } else {
      properties_initialized_Platform_kt_qdcgvf_0 = true;
      engine = Js_getInstance();
    }
  }
  function sendTestGet() {
    var tmp = GlobalScope_getInstance();
    launch$default(tmp, null, null, sendTestGet$slambda_0(null), 3, null);
  }
  function sendTestPost() {
    var tmp = GlobalScope_getInstance();
    launch$default(tmp, null, null, sendTestPost$slambda_0(null), 3, null);
  }
  function sendTestGet$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  sendTestGet$slambda.prototype.d21 = function ($this$launch, $cont) {
    var tmp = this.e21($this$launch, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  sendTestGet$slambda.prototype.mh = function (p1, $cont) {
    return this.d21((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sendTestGet$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp_0 = this;
            tmp_0.i3y_1 = get_client();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'http://127.0.0.1:8080');
            ;
            tmp_1.j3y_1 = tmp0_apply;
            this.j3y_1.x2x_1 = Companion_getInstance().j2l_1;
            this.bh_1 = 1;
            suspendResult = (new HttpStatement(this.j3y_1, this.i3y_1)).b3o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3y_1 = suspendResult;
            this.bh_1 = 2;
            suspendResult = bodyAsText$default(this.k3y_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            println(ARGUMENT);
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
  sendTestGet$slambda.prototype.e21 = function ($this$launch, completion) {
    var i = new sendTestGet$slambda(completion);
    i.h3y_1 = $this$launch;
    return i;
  };
  sendTestGet$slambda.$metadata$ = classMeta('sendTestGet$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sendTestGet$slambda_0(resultContinuation) {
    var i = new sendTestGet$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.d21($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sendTestPost$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  sendTestPost$slambda.prototype.d21 = function ($this$launch, $cont) {
    var tmp = this.e21($this$launch, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  sendTestPost$slambda.prototype.mh = function (p1, $cont) {
    return this.d21((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  sendTestPost$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp_0 = this;
            tmp_0.u3y_1 = get_client();
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'http://127.0.0.1:8080/');
            contentType(tmp0_apply, Application_getInstance().p2f_1);
            var tmp0_setBody = new User('Inna', 'Kostiuk');
            var tmp0_subject = tmp0_setBody;
            if (tmp0_subject == null) {
              tmp0_apply.z2x_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(User);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(User), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.z33(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.z2x_1 = tmp0_setBody;
                tmp0_apply.z33(null);
              } else {
                tmp0_apply.z2x_1 = tmp0_setBody;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(User);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(User), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.z33(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.v3y_1 = tmp0_apply;
            this.v3y_1.x2x_1 = Companion_getInstance().k2l_1;
            this.bh_1 = 1;
            suspendResult = (new HttpStatement(this.v3y_1, this.u3y_1)).b3o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w3y_1 = suspendResult;
            this.bh_1 = 2;
            suspendResult = bodyAsText$default(this.w3y_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            println(ARGUMENT);
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
  sendTestPost$slambda.prototype.e21 = function ($this$launch, completion) {
    var i = new sendTestPost$slambda(completion);
    i.t3y_1 = $this$launch;
    return i;
  };
  sendTestPost$slambda.$metadata$ = classMeta('sendTestPost$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sendTestPost$slambda_0(resultContinuation) {
    var i = new sendTestPost$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.d21($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  function $jsExportAll$(_) {
    _.sendTestGet = sendTestGet;
    _.sendTestPost = sendTestPost;
  }
  $jsExportAll$(_);
  kotlin_kmm_test_models.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kmm-test-models.js'), require('./ktor-ktor-utils-js-ir.js')));

//# sourceMappingURL=sharedClient.js.map