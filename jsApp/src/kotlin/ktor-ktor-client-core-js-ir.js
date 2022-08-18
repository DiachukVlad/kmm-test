(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.w8;
  var toString = kotlin_kotlin.$_$.h9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.m;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.x;
  var isInterface = kotlin_kotlin.$_$.u8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var SuspendFunction2 = kotlin_kotlin.$_$.r7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.f8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ic;
  var IllegalStateException = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ub;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.u;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var trimMargin$default = kotlin_kotlin.$_$.t;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.f1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Long = kotlin_kotlin.$_$.jb;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.h1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gc;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var writer = kotlin_io_ktor_ktor_io.$_$.j1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.n;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.o;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.q7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r3;
  var arrayOf = kotlin_kotlin.$_$.wb;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var emptySet = kotlin_kotlin.$_$.k5;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.w;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.fc;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i8;
  var setOf = kotlin_kotlin.$_$.j6;
  var Key = kotlin_kotlin.$_$.n7;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var plus = kotlin_kotlin.$_$.o7;
  var Element = kotlin_kotlin.$_$.m7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.b1;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var toLong = kotlin_kotlin.$_$.f9;
  var toLong_0 = kotlin_kotlin.$_$.qa;
  var contentType = kotlin_io_ktor_ktor_http.$_$.c1;
  var isByteArray = kotlin_kotlin.$_$.o8;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t3;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.i1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.v;
  var getKClass = kotlin_kotlin.$_$.d;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.y;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.w;
  var Unit = kotlin_kotlin.$_$.tb;
  var toString_0 = kotlin_kotlin.$_$.jc;
  var toInt = kotlin_kotlin.$_$.oa;
  var reversed = kotlin_kotlin.$_$.i6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.l1;
  var Comparator = kotlin_kotlin.$_$.bb;
  var compareValues = kotlin_kotlin.$_$.y6;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var toList = kotlin_kotlin.$_$.p6;
  var sortedWith = kotlin_kotlin.$_$.m6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var roundToInt = kotlin_kotlin.$_$.i9;
  var firstOrNull = kotlin_kotlin.$_$.n5;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.z;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.y;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.j1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.f1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var setOf_0 = kotlin_kotlin.$_$.k6;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var get_lastIndex = kotlin_kotlin.$_$.u5;
  var downTo = kotlin_kotlin.$_$.n9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.g1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var IOException = kotlin_io_ktor_ktor_io.$_$.d1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var HttpMessage = kotlin_io_ktor_ktor_http.$_$.u;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var HttpMessageBuilder = kotlin_io_ktor_ktor_http.$_$.t;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.i;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.k8;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.e1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var intercepted = kotlin_kotlin.$_$.c7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var extendThrowable = kotlin_kotlin.$_$.g8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.u3;
  var createFailure = kotlin_kotlin.$_$.yb;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s2;
  var toTypedArray = kotlin_kotlin.$_$.w6;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.b1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.h;
  //endregion
  //region block: pre-declaration
  HttpClient$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda.prototype.constructor = HttpClient$slambda;
  HttpClient$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda_1.prototype.constructor = HttpClient$slambda_1;
  $executeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$0.prototype.constructor = $executeCOROUTINE$0;
  $bodyNullableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $bodyNullableCOROUTINE$1.prototype.constructor = $bodyNullableCOROUTINE$1;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  function get_coroutineContext() {
    return this.g31().r19();
  }
  SavedHttpResponse.prototype = Object.create(HttpResponse.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  $saveCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $saveCOROUTINE$3.prototype.constructor = $saveCOROUTINE$3;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  ObservableContent$content$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ObservableContent$content$slambda.prototype.constructor = ObservableContent$content$slambda;
  ObservableContent.prototype = Object.create(ReadChannelContent.prototype);
  ObservableContent.prototype.constructor = ObservableContent;
  HttpClientEngine$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$install$slambda.prototype.constructor = HttpClientEngine$install$slambda;
  HttpClientEngine$executeWithinCallContext$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$executeWithinCallContext$slambda.prototype.constructor = HttpClientEngine$executeWithinCallContext$slambda;
  $executeWithinCallContextCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $executeWithinCallContextCOROUTINE$4.prototype.constructor = $executeWithinCallContextCOROUTINE$4;
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().p2y_1;
    client.y2v_1.b2e(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  ClientEngineClosedException.prototype = Object.create(IllegalStateException.prototype);
  ClientEngineClosedException.prototype.constructor = ClientEngineClosedException;
  BodyProgress$handle$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda.prototype.constructor = BodyProgress$handle$slambda;
  BodyProgress$handle$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda_1.prototype.constructor = BodyProgress$handle$slambda_1;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  addDefaultResponseValidation$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  addDefaultResponseValidation$lambda$slambda.prototype.constructor = addDefaultResponseValidation$lambda$slambda;
  defaultTransformers$1$content$1.prototype = Object.create(ByteArrayContent.prototype);
  defaultTransformers$1$content$1.prototype.constructor = defaultTransformers$1$content$1;
  defaultTransformers$1$content$2.prototype = Object.create(ReadChannelContent.prototype);
  defaultTransformers$1$content$2.prototype.constructor = defaultTransformers$1$content$2;
  defaultTransformers$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda.prototype.constructor = defaultTransformers$slambda;
  defaultTransformers$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda$slambda.prototype.constructor = defaultTransformers$slambda$slambda;
  defaultTransformers$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda_1.prototype.constructor = defaultTransformers$slambda_1;
  HttpCallValidator$Companion$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda.prototype.constructor = HttpCallValidator$Companion$install$slambda;
  HttpCallValidator$Companion$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_1.prototype.constructor = HttpCallValidator$Companion$install$slambda_1;
  HttpCallValidator$Companion$install$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_3.prototype.constructor = HttpCallValidator$Companion$install$slambda_3;
  $validateResponseCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $validateResponseCOROUTINE$5.prototype.constructor = $validateResponseCOROUTINE$5;
  $processExceptionCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $processExceptionCOROUTINE$6.prototype.constructor = $processExceptionCOROUTINE$6;
  HttpPlainText$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda.prototype.constructor = HttpPlainText$Plugin$install$slambda;
  HttpPlainText$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda_1.prototype.constructor = HttpPlainText$Plugin$install$slambda_1;
  HttpRedirect$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRedirect$Plugin$install$slambda.prototype.constructor = HttpRedirect$Plugin$install$slambda;
  $handleCallCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $handleCallCOROUTINE$7.prototype.constructor = $handleCallCOROUTINE$7;
  HttpRequestLifecycle$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRequestLifecycle$Plugin$install$slambda.prototype.constructor = HttpRequestLifecycle$Plugin$install$slambda;
  HttpSend$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpSend$Plugin$install$slambda.prototype.constructor = HttpSend$Plugin$install$slambda;
  $executeCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$8.prototype.constructor = $executeCOROUTINE$8;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpTimeout$Plugin$install$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda$slambda;
  HttpTimeout$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda;
  HttpRequestTimeoutException.prototype = Object.create(IOException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  DelegatedResponse.prototype = Object.create(HttpResponse.prototype);
  DelegatedResponse.prototype.constructor = DelegatedResponse;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  ClientUpgradeContent.prototype = Object.create(NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  DefaultHttpResponse.prototype = Object.create(HttpResponse.prototype);
  DefaultHttpResponse.prototype.constructor = DefaultHttpResponse;
  $bodyAsTextCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $bodyAsTextCOROUTINE$14.prototype.constructor = $bodyAsTextCOROUTINE$14;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  HttpStatement$execute$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpStatement$execute$slambda.prototype.constructor = HttpStatement$execute$slambda;
  $executeCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$15.prototype.constructor = $executeCOROUTINE$15;
  $executeUnsafeCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $executeUnsafeCOROUTINE$16.prototype.constructor = $executeUnsafeCOROUTINE$16;
  $cleanupCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $cleanupCOROUTINE$17.prototype.constructor = $cleanupCOROUTINE$17;
  observable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  observable$slambda.prototype.constructor = observable$slambda;
  EmptyContent.prototype = Object.create(NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  $executeCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$18.prototype.constructor = $executeCOROUTINE$18;
  $executeWebSocketRequestCOROUTINE$19.prototype = Object.create(CoroutineImpl.prototype);
  $executeWebSocketRequestCOROUTINE$19.prototype.constructor = $executeWebSocketRequestCOROUTINE$19;
  JsClientEngine.prototype = Object.create(HttpClientEngineBase.prototype);
  JsClientEngine.prototype.constructor = JsClientEngine;
  JsError.prototype = Object.create(Error.prototype);
  JsError.prototype.constructor = JsError;
  toRaw$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toRaw$slambda.prototype.constructor = toRaw$slambda;
  $toRawCOROUTINE$20.prototype = Object.create(CoroutineImpl.prototype);
  $toRawCOROUTINE$20.prototype.constructor = $toRawCOROUTINE$20;
  channelFromStream$slambda.prototype = Object.create(CoroutineImpl.prototype);
  channelFromStream$slambda.prototype.constructor = channelFromStream$slambda;
  readBodyNode$slambda.prototype = Object.create(CoroutineImpl.prototype);
  readBodyNode$slambda.prototype.constructor = readBodyNode$slambda;
  JsWebSocketSession$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsWebSocketSession$slambda.prototype.constructor = JsWebSocketSession$slambda;
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.s2v_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        tmp = cancel$default(this$0.q2v_1, null, 1, null);
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.m2w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.q2w = function ($this$intercept, call, $cont) {
    var tmp = this.r2w($this$intercept, call, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClient$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp_0 = this.o2w_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.o2w_1) + '(' + getKClassFromExpression(this.o2w_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.bh_1 = 1;
            suspendResult = this.m2w_1.z2v_1.w2d(Unit_getInstance(), this.o2w_1.x2w(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p2w_1 = suspendResult;
            this.o2w_1.y2w(this.p2w_1);
            this.bh_1 = 2;
            suspendResult = this.n2w_1.b2d(this.o2w_1, this);
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
  HttpClient$slambda.prototype.r2w = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.m2w_1, completion);
    i.n2w_1 = $this$intercept;
    i.o2w_1 = call;
    return i;
  };
  HttpClient$slambda.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.q2w($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0() {
    return function ($this$install) {
      defaultTransformers($this$install);
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.h2x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.k2x = function ($this$intercept, it, $cont) {
    var tmp = this.l2x($this$intercept, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClient$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.i2x_1.c2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ch_1 = 3;
            this.bh_1 = 4;
            continue $sm;
          case 2:
            this.ch_1 = 3;
            var tmp_0 = this.eh_1;
            if (tmp_0 instanceof Error) {
              var cause = this.eh_1;
              this.h2x_1.c2w_1.i2r(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.i2x_1.x2d_1.x2w(), cause));
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 3:
            throw this.eh_1;
          case 4:
            this.ch_1 = 3;
            return Unit_getInstance();
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
  HttpClient$slambda_1.prototype.l2x = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.h2x_1, completion);
    i.i2x_1 = $this$intercept;
    i.j2x_1 = it;
    return i;
  };
  HttpClient$slambda_1.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.k2x($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2x_1 = _this__u8e3s4;
    this.v2x_1 = builder;
  }
  $executeCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.u2x_1.c2w_1.i2r(get_HttpRequestCreated(), this.v2x_1);
            this.bh_1 = 1;
            suspendResult = this.u2x_1.w2v_1.w2d(this.v2x_1, this.v2x_1.z2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  $executeCOROUTINE$0.$metadata$ = classMeta('$executeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClient(engine, userConfig) {
    this.q2v_1 = engine;
    this.r2v_1 = userConfig;
    this.s2v_1 = false;
    this.t2v_1 = atomic$boolean$1(false);
    this.u2v_1 = Job(this.q2v_1.r19().v3(Key_getInstance()));
    this.v2v_1 = this.q2v_1.r19().c4(this.u2v_1);
    this.w2v_1 = new HttpRequestPipeline(this.r2v_1.j2y_1);
    this.x2v_1 = new HttpResponsePipeline(this.r2v_1.j2y_1);
    this.y2v_1 = new HttpSendPipeline(this.r2v_1.j2y_1);
    this.z2v_1 = new HttpReceivePipeline(this.r2v_1.j2y_1);
    this.a2w_1 = Attributes(true);
    this.b2w_1 = this.q2v_1.k2y();
    this.c2w_1 = new Events();
    this.d2w_1 = new HttpClientConfig();
    if (this.s2v_1) {
      this.u2v_1.s1a(HttpClient$lambda(this));
    }
    this.q2v_1.l2y(this);
    var tmp = Phases_getInstance_0().q2y_1;
    this.y2v_1.b2e(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    {
      var tmp0_with = this.r2v_1;
      {
      }
      var tmp_0 = Plugin_getInstance_2();
      this.d2w_1.r2y(tmp_0, null, 2, null);
      var tmp_1 = Plugin_getInstance();
      this.d2w_1.r2y(tmp_1, null, 2, null);
      if (tmp0_with.h2y_1) {
        this.d2w_1.s2y('DefaultTransformers', HttpClient$lambda_0());
      }
      var tmp_2 = Plugin_getInstance_3();
      this.d2w_1.r2y(tmp_2, null, 2, null);
      var tmp_3 = Companion_getInstance_9();
      this.d2w_1.r2y(tmp_3, null, 2, null);
      if (tmp0_with.g2y_1) {
        var tmp_4 = Plugin_getInstance_1();
        this.d2w_1.r2y(tmp_4, null, 2, null);
      }
      var tmp0_this = this;
      tmp0_this.d2w_1.t2y(tmp0_with);
      if (tmp0_with.h2y_1) {
        var tmp_5 = Plugin_getInstance_0();
        this.d2w_1.r2y(tmp_5, null, 2, null);
      }
      addDefaultResponseValidation(this.d2w_1);
      tmp$ret$0 = this.d2w_1.l2y(this);
    }
    var tmp_6 = Phases_getInstance_1().u2y_1;
    this.x2v_1.b2e(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.r19 = function () {
    return this.v2v_1;
  };
  HttpClient.prototype.z2y = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClient.prototype.y1q = function () {
    var success = this.t2v_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.a2w_1.n29(get_PLUGIN_INSTALLED_LIST());
    {
      var tmp0_forEach = installedFeatures.t29();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var plugin = installedFeatures.n29(element instanceof AttributeKey ? element : THROW_CCE());
          if (isInterface(plugin, Closeable)) {
            plugin.y1q();
          }
        }
      }
    }
    this.u2v_1.l1f();
    if (this.s2v_1) {
      this.q2v_1.y1q();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.q2v_1 + ']';
  };
  HttpClient.$metadata$ = classMeta('HttpClient', [CoroutineScope, Closeable]);
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new HttpClientConfig();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    var engine = engineFactory.a2z(config.f2y_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.v2v_1.v3(Key_getInstance()));
    tmp.s1a(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.y1q();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return function () {
      return Attributes(true);
    };
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.a2w_1.s29(tmp, HttpClientConfig$install$lambda$lambda());
      var config = ensureNotNull(scope.d2w_1.d2y_1.i2($plugin.s()));
      var pluginData = $plugin.b2z(config);
      $plugin.c2z(pluginData, scope);
      attributes.q29($plugin.s(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    tmp.c2y_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
    }
    tmp_0.d2y_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    {
      tmp$ret$2 = LinkedHashMap_init_$Create$();
    }
    tmp_1.e2y_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.f2y_1 = HttpClientConfig$engineConfig$lambda();
    this.g2y_1 = true;
    this.h2y_1 = true;
    this.i2y_1 = false;
    this.j2y_1 = PlatformUtils_getInstance().w2e_1;
  }
  HttpClientConfig.prototype.d2z = function (plugin, configure) {
    var previousConfigBlock = this.d2y_1.i2(plugin.s());
    {
      var tmp0_set = this.d2y_1;
      var tmp1_set = plugin.s();
      tmp0_set.a(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    }
    if (this.c2y_1.c2(plugin.s()))
      return Unit_getInstance();
    {
      var tmp2_set = this.c2y_1;
      var tmp3_set = plugin.s();
      tmp2_set.a(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
    }
  };
  HttpClientConfig.prototype.r2y = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda();
    }
    return this.d2z(plugin, configure);
  };
  HttpClientConfig.prototype.s2y = function (key, block) {
    {
      var tmp0_set = this.e2y_1;
      tmp0_set.a(key, block);
    }
  };
  HttpClientConfig.prototype.l2y = function (client) {
    {
      var tmp0_forEach = this.c2y_1.k2();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp$ret$0;
          {
            {
            }
            element(client);
            tmp$ret$0 = client;
          }
        }
      }
    }
    {
      var tmp1_forEach = this.e2y_1.k2();
      var tmp0_iterator_0 = tmp1_forEach.e();
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        {
          var tmp$ret$1;
          {
            {
            }
            element_0(client);
            tmp$ret$1 = client;
          }
        }
      }
    }
  };
  HttpClientConfig.prototype.t2y = function (other) {
    this.g2y_1 = other.g2y_1;
    this.h2y_1 = other.h2y_1;
    this.i2y_1 = other.i2y_1;
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.c2y_1;
      var tmp1_plusAssign = other.c2y_1;
      tmp0_plusAssign.b3(tmp1_plusAssign);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.d2y_1;
      var tmp3_plusAssign = other.d2y_1;
      tmp2_plusAssign.b3(tmp3_plusAssign);
    }
    var tmp2_this = this;
    {
      var tmp4_plusAssign = tmp2_this.e2y_1;
      var tmp5_plusAssign = other.e2y_1;
      tmp4_plusAssign.b3(tmp5_plusAssign);
    }
  };
  HttpClientConfig.$metadata$ = classMeta('HttpClientConfig');
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.u2w_1 = new DefaultHttpRequest($this, requestData);
    $this.v2w_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.i2z_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.l2z().q29(Companion_getInstance_7().m2z_1, responseData.i2z_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.m2z_1 = new AttributeKey('CustomResponse');
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2z_1 = _this__u8e3s4;
    this.w2z_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 10;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.ch_1 = 9;
            this.ch_1 = 8;
            if (instanceOf(this.v2z_1.x2w(), this.w2z_1.o2e_1)) {
              this.x2z_1 = this.v2z_1.x2w();
              this.ch_1 = 10;
              this.bh_1 = 7;
              continue $sm;
            } else {
              this.bh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.v2z_1.c30() ? !this.v2z_1.t2w_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.v2z_1);
            }

            this.y2z_1 = this.v2z_1.l2z().o29(Companion_getInstance_7().m2z_1);
            if (this.y2z_1 == null) {
              this.bh_1 = 4;
              suspendResult = this.v2z_1.d30(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.z2z_1 = this.y2z_1;
              this.bh_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.z2z_1 = suspendResult;
            this.bh_1 = 5;
            continue $sm;
          case 5:
            this.a30_1 = this.z2z_1;
            this.b30_1 = new HttpResponseContainer(this.w2z_1, this.a30_1);
            this.bh_1 = 6;
            suspendResult = this.v2z_1.s2w_1.x2v_1.w2d(this.v2z_1, this.b30_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.f30_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.w2z_1.o2e_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.w2z_1.o2e_1;
              throw new NoTransformationFoundException(this.v2z_1.x2w(), from, to);
            }

            this.x2z_1 = result;
            this.ch_1 = 10;
            this.bh_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.x2z_1;
            complete(this.v2z_1.x2w());
            return tmp_2;
          case 8:
            this.ch_1 = 9;
            var tmp_3 = this.eh_1;
            if (tmp_3 instanceof Error) {
              var cause = this.eh_1;
              var tmp_4 = this;
              cancel(this.v2z_1.x2w(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 9:
            this.ch_1 = 10;
            var t = this.eh_1;
            complete(this.v2z_1.x2w());
            throw t;
          case 10:
            throw this.eh_1;
          case 11:
            complete(this.v2z_1.x2w());
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ch_1 === 10) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $bodyNullableCOROUTINE$1.$metadata$ = classMeta('$bodyNullableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.s2w_1 = client;
    this.t2w_1 = atomic$boolean$1(false);
    this.w2w_1 = false;
  }
  HttpClientCall.prototype.r19 = function () {
    return this.x2w().r19();
  };
  HttpClientCall.prototype.l2z = function () {
    return this.g30().l2z();
  };
  HttpClientCall.prototype.h30 = function (_set____db54di) {
    this.u2w_1 = _set____db54di;
  };
  HttpClientCall.prototype.g30 = function () {
    var tmp = this.u2w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.i30 = function (_set____db54di) {
    this.v2w_1 = _set____db54di;
  };
  HttpClientCall.prototype.x2w = function () {
    var tmp = this.v2w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.c30 = function () {
    return this.w2w_1;
  };
  HttpClientCall.prototype.d30 = function ($cont) {
    return this.x2w().a11();
  };
  HttpClientCall.prototype.j30 = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.g30().k30() + ', ' + this.x2w().l30() + ']';
  };
  HttpClientCall.prototype.y2w = function (response) {
    this.v2w_1 = response;
  };
  HttpClientCall.$metadata$ = classMeta('HttpClientCall', [CoroutineScope]);
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.m30_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.j1 = function () {
    return this.m30_1;
  };
  DoubleReceiveException.$metadata$ = classMeta('DoubleReceiveException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function NoTransformationFoundException$message$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var key = _name_for_destructuring_parameter_0__wldtmu.h3();
      var value = _name_for_destructuring_parameter_0__wldtmu.i3();
      return key + ': ' + value + '\n';
    };
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).k30();
    var tmp_1 = response.l30();
    var tmp_2 = flattenEntries(response.i2l());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda(), 31, null) + '\n    ';
    tmp.n30_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.j1 = function () {
    return this.n30_1;
  };
  NoTransformationFoundException.$metadata$ = classMeta('NoTransformationFoundException', undefined, undefined, undefined, undefined, UnsupportedOperationException.prototype);
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.c31_1 = responseBody;
    this.h30(new SavedHttpRequest(this, request));
    this.i30(new SavedHttpResponse(this, this.c31_1, response));
    this.d31_1 = true;
  }
  SavedHttpCall.prototype.d30 = function ($cont) {
    return ByteReadChannel_0(this.c31_1);
  };
  SavedHttpCall.prototype.c30 = function () {
    return this.d31_1;
  };
  SavedHttpCall.$metadata$ = classMeta('SavedHttpCall', undefined, undefined, undefined, undefined, HttpClientCall.prototype);
  function SavedHttpRequest(call, origin) {
    this.e31_1 = call;
    this.f31_1 = origin;
  }
  SavedHttpRequest.prototype.g31 = function () {
    return this.e31_1;
  };
  SavedHttpRequest.prototype.l2z = function () {
    return this.f31_1.l2z();
  };
  SavedHttpRequest.prototype.r19 = function () {
    return this.f31_1.r19();
  };
  SavedHttpRequest.prototype.i2l = function () {
    return this.f31_1.i2l();
  };
  SavedHttpRequest.prototype.h31 = function () {
    return this.f31_1.h31();
  };
  SavedHttpRequest.prototype.k30 = function () {
    return this.f31_1.k30();
  };
  SavedHttpRequest.$metadata$ = classMeta('SavedHttpRequest', [HttpRequest_0]);
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.i31_1 = call;
    var tmp = this;
    tmp.j31_1 = Job$default(null, 1, null);
    this.k31_1 = origin.l30();
    this.l31_1 = origin.r31();
    this.m31_1 = origin.s31();
    this.n31_1 = origin.t31();
    this.o31_1 = origin.i2l();
    this.p31_1 = origin.r19().c4(this.j31_1);
    this.q31_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.g31 = function () {
    return this.i31_1;
  };
  SavedHttpResponse.prototype.l30 = function () {
    return this.k31_1;
  };
  SavedHttpResponse.prototype.r31 = function () {
    return this.l31_1;
  };
  SavedHttpResponse.prototype.s31 = function () {
    return this.m31_1;
  };
  SavedHttpResponse.prototype.t31 = function () {
    return this.n31_1;
  };
  SavedHttpResponse.prototype.i2l = function () {
    return this.o31_1;
  };
  SavedHttpResponse.prototype.r19 = function () {
    return this.p31_1;
  };
  SavedHttpResponse.prototype.a11 = function () {
    return this.q31_1;
  };
  SavedHttpResponse.$metadata$ = classMeta('SavedHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w30_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            var tmp_0 = this.w30_1.x2w().a11();
            suspendResult = tmp_0.d20(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.w30_1.s2w_1, this.w30_1.g30(), this.w30_1.x2w(), responseBody);
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
  $saveCOROUTINE$3.$metadata$ = classMeta('$saveCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  UnsupportedContentTypeException.$metadata$ = classMeta('UnsupportedContentTypeException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.c32_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ObservableContent$content$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.c32_1.v2q(this.d32_1.r1l(), this);
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
  ObservableContent$content$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.c32_1, completion);
    i.d32_1 = $this$writer;
    return i;
  };
  ObservableContent$content$slambda.$metadata$ = classMeta('ObservableContent$content$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.h32_1 = callContext;
    this.i32_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.q2q());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().a22();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.t2q();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.h32_1, true, ObservableContent$content$slambda_0(delegate, null)).r1l();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.j32_1 = tmp_0;
    this.k32_1 = delegate;
  }
  ObservableContent.prototype.o2q = function () {
    return this.k32_1.o2q();
  };
  ObservableContent.prototype.p2q = function () {
    return this.k32_1.p2q();
  };
  ObservableContent.prototype.i2l = function () {
    return this.k32_1.i2l();
  };
  ObservableContent.prototype.t2q = function () {
    return observable(this.j32_1, this.h32_1, this.p2q(), this.i32_1);
  };
  ObservableContent.$metadata$ = classMeta('ObservableContent', undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        tmp = $client.c2w_1.i2r(get_HttpResponseCancelled(), $response);
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.r19().v3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s19();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.d33_1.e();
    while (tmp0_iterator.f()) {
      var requestedExtension = tmp0_iterator.g();
      {
        var tmp0_require = $this.e33().l1(requestedExtension);
        {
        }
        if (!tmp0_require) {
          var tmp$ret$0;
          {
            tmp$ret$0 = "Engine doesn't support " + requestedExtension;
          }
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.n33_1 = $client;
    this.o33_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.q2w = function ($this$intercept, content, $cont) {
    var tmp = this.r2w($this$intercept, content, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClientEngine$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.r33_1 = new HttpRequestBuilder();
            this.r33_1.y33(this.p33_1.x2d_1);
            ;
            var tmp0_subject = this.q33_1;
            if (tmp0_subject == null) {
              this.r33_1.z2x_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = PrimitiveClasses_getInstance().me();
              var tmp_4;
              try {
                tmp_4 = createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              this.r33_1.z33(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.r33_1.z2x_1 = this.q33_1;
                this.r33_1.z33(null);
              } else {
                this.r33_1.z2x_1 = this.q33_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = PrimitiveClasses_getInstance().me();
                var tmp_8;
                try {
                  tmp_8 = createKType(PrimitiveClasses_getInstance().me(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                this.r33_1.z33(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_0.s33_1 = this.r33_1;
            this.n33_1.c2w_1.i2r(get_HttpRequestIsReadyForSending(), this.s33_1);
            var tmp_10 = this;
            var tmp_11 = this;
            tmp_11.t33_1 = this.s33_1.yn();
            this.t33_1.c33_1.q29(get_CLIENT_CONFIG(), this.n33_1.d2w_1);
            tmp_10.u33_1 = this.t33_1;
            validateHeaders(this.u33_1);
            checkExtensions(this.o33_1, this.u33_1);
            this.bh_1 = 1;
            suspendResult = executeWithinCallContext(this.o33_1, this.u33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v33_1 = suspendResult;
            this.w33_1 = HttpClientCall_init_$Create$(this.n33_1, this.u33_1, this.v33_1);
            this.x33_1 = this.w33_1.x2w();
            this.n33_1.c2w_1.i2r(get_HttpResponseReceived(), this.x33_1);
            var tmp_12 = get_job(this.x33_1.r19());
            tmp_12.s1a(HttpClientEngine$install$slambda$lambda(this.n33_1, this.x33_1));
            ;
            this.bh_1 = 2;
            suspendResult = this.p33_1.b2d(this.w33_1, this);
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
  HttpClientEngine$install$slambda.prototype.r2w = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.n33_1, this.o33_1, completion);
    i.p33_1 = $this$intercept;
    i.q33_1 = content;
    return i;
  };
  HttpClientEngine$install$slambda.$metadata$ = classMeta('HttpClientEngine$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2w($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.i34_1 = this$0;
    this.j34_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.l34 = function ($this$async, $cont) {
    var tmp = this.e21($this$async, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.mh = function (p1, $cont) {
    return this.l34((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            if (_get_closed__iwkfs1(this.i34_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.bh_1 = 1;
            suspendResult = this.i34_1.m34(this.j34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.e21 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.i34_1, this.j34_1, completion);
    i.k34_1 = $this$async;
    return i;
  };
  HttpClientEngine$executeWithinCallContext$slambda.$metadata$ = classMeta('HttpClientEngine$executeWithinCallContext$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.l34($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t32_1 = _this__u8e3s4;
    this.u32_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = createCallContext(this.t32_1, this.u32_1.b33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v32_1 = suspendResult;
            this.w32_1 = this.v32_1.c4(new KtorCallContextElement(this.v32_1));
            this.bh_1 = 2;
            suspendResult = async$default(this.t32_1, this.w32_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.t32_1, this.u32_1, null), 2, null).g1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  $executeWithinCallContextCOROUTINE$4.$metadata$ = classMeta('$executeWithinCallContextCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientEngine() {
  }
  HttpClientEngine.$metadata$ = interfaceMeta('HttpClientEngine', [CoroutineScope, Closeable]);
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.z32_1;
    var tmp$ret$2;
    {
      var tmp0_filter = requestHeaders.b2b();
      var tmp$ret$1;
      {
        var tmp0_filterTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filter.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = HttpHeaders_getInstance().y2k_1.l1(element);
          }
          if (tmp$ret$0) {
            tmp0_filterTo.b(element);
          }
        }
        tmp$ret$1 = tmp0_filterTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    {
      tmp$ret$3 = !unsafeRequestHeaders.m();
    }
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.r19().c4(callJob).c4(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $cont.r3();
      }
      var tmp0_elvis_lhs = tmp$ret$0.v3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.u1a(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.s1a(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function HttpClientEngineFactory() {
  }
  HttpClientEngineFactory.$metadata$ = interfaceMeta('HttpClientEngineFactory');
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.x1a(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.w1c();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.n34_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.k1 = function () {
    return this.n34_1;
  };
  ClientEngineClosedException.$metadata$ = classMeta('ClientEngineClosedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.k1();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).c4(this$0.o34()).c4(new CoroutineName(this$0.p34_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.o34());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.p34_1 = engineName;
    this.q34_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.r34_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.r19 = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = coroutineContext$factory();
      tmp$ret$0 = this.r34_1.t();
    }
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.y1q = function () {
    if (!this.q34_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.r19().v3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.l1f();
    requestJob.s1a(HttpClientEngineBase$close$lambda(this));
  };
  HttpClientEngineBase.$metadata$ = classMeta('HttpClientEngineBase', [HttpClientEngine]);
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher)
        _this__u8e3s4.y1q();
      else {
        if (isInterface(tmp0_subject, Closeable))
          _this__u8e3s4.y1q();
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.r19();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = interfaceMeta('HttpClientEngineCapability');
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.s34_1 = 4;
    this.t34_1 = false;
    this.u34_1 = null;
  }
  HttpClientEngineConfig.$metadata$ = classMeta('HttpClientEngineConfig');
  var KTOR_DEFAULT_USER_AGENT;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion', [Key]);
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.v34_1 = callContext;
  }
  KtorCallContextElement.prototype.s = function () {
    return Companion_getInstance_8();
  };
  KtorCallContextElement.$metadata$ = classMeta('KtorCallContextElement', [Element]);
  function callContext($cont) {
    var tmp$ret$0;
    {
      tmp$ret$0 = $cont.r3();
    }
    return ensureNotNull(tmp$ret$0.v3(Companion_getInstance_8())).v34_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.d2b(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.d11(HttpHeaders_getInstance().b2k_1) == null ? content.i2l().d11(HttpHeaders_getInstance().b2k_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().b2k_1, KTOR_DEFAULT_USER_AGENT);
    }
    var tmp0_safe_receiver = content.o2q();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var type = tmp1_elvis_lhs == null ? content.i2l().d11(HttpHeaders_getInstance().v2h_1) : tmp1_elvis_lhs;
    var tmp2_safe_receiver = content.p2q();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString();
    var length = tmp3_elvis_lhs == null ? content.i2l().d11(HttpHeaders_getInstance().s2h_1) : tmp3_elvis_lhs;
    var tmp4_safe_receiver = type;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = block(HttpHeaders_getInstance().v2h_1, tmp4_safe_receiver);
      }
    }
    var tmp5_safe_receiver = length;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = block(HttpHeaders_getInstance().s2h_1, tmp5_safe_receiver);
      }
    }
  }
  function needUserAgent() {
    return !PlatformUtils_getInstance().s2e_1;
  }
  function attachToUserJob$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.x1a(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function attachToUserJob$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.w1c();
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.l2b($requestHeaders);
      $this$buildHeaders.l2b($content.i2l());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().s2h_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().v2h_1 === key) {
        return Unit_getInstance();
      }
      $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      return Unit_getInstance();
    };
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.w2v_1.y2d(Phases_getInstance().z34_1, observableContentPhase);
    scope.w2v_1.b2e(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().d35_1;
    scope.z2v_1.b2e(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.e35_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.s = function () {
    return this.e35_1;
  };
  Plugin.prototype.f35 = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.b2z = function (block) {
    return this.f35(block);
  };
  Plugin.prototype.g35 = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.c2z = function (plugin, scope) {
    return this.g35(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.q2w = function ($this$intercept, content, $cont) {
    var tmp = this.r2w($this$intercept, content, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  BodyProgress$handle$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p35_1.x2d_1.b2y_1.o29(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.r35_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.q35_1;
            tmp_2.s35_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.p35_1.x2d_1.a2y_1, this.r35_1);
            this.bh_1 = 1;
            suspendResult = this.p35_1.b2d(this.s35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda.prototype.r2w = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.p35_1 = $this$intercept;
    i.q35_1 = content;
    return i;
  };
  BodyProgress$handle$slambda.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2w($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.f36 = function ($this$intercept, response, $cont) {
    var tmp = this.g36($this$intercept, response, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  BodyProgress$handle$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f36(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.c36_1.g31().g30().l2z().o29(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.d36_1 = tmp_1;
            this.e36_1 = withObservableDownload(this.c36_1, this.d36_1);
            this.bh_1 = 1;
            suspendResult = this.b36_1.b2d(this.e36_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda_1.prototype.g36 = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.b36_1 = $this$intercept;
    i.c36_1 = response;
    return i;
  };
  BodyProgress$handle$slambda_1.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.f36($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  BodyProgress.$metadata$ = classMeta('BodyProgress');
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.a11(), _this__u8e3s4.r19(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.i36_1 = 'Unhandled redirect: ' + response.g31().g30().h31().r2l_1 + ' ' + response.g31().g30().k30() + '. ' + ('Status: ' + response.l30() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.j1 = function () {
    return this.i36_1;
  };
  RedirectResponseException.$metadata$ = classMeta('RedirectResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.k36_1 = 'Client request(' + response.g31().g30().h31().r2l_1 + ' ' + response.g31().g30().k30() + ') ' + ('invalid: ' + response.l30() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.j1 = function () {
    return this.k36_1;
  };
  ClientRequestException.$metadata$ = classMeta('ClientRequestException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.m36_1 = 'Server error(' + response.g31().g30().h31().r2l_1 + ' ' + response.g31().g30().k30() + ': ' + ('' + response.l30() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.j1 = function () {
    return this.m36_1;
  };
  ServerResponseException.$metadata$ = classMeta('ServerResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.n36_1 = response;
    captureStack(this, ResponseException);
  }
  ResponseException.$metadata$ = classMeta('ResponseException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.d37 = function (response, $cont) {
    var tmp = this.e37(response, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.mh = function (p1, $cont) {
    return this.d37(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.x36_1 = this.w36_1.g31().l2z().n29(get_ExpectSuccessAttributeKey());
            if (!this.x36_1) {
              return Unit_getInstance();
            }

            this.y36_1 = this.w36_1.l30().c2o_1;
            this.z36_1 = this.w36_1.g31();
            if (this.y36_1 < 300 ? true : this.z36_1.l2z().p29(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.bh_1 = 1;
            suspendResult = save(this.z36_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a37_1 = suspendResult;
            this.a37_1.l2z().q29(get_ValidateMark(), Unit_getInstance());
            this.b37_1 = this.a37_1;
            this.c37_1 = this.b37_1.x2w();
            this.bh_1 = 2;
            suspendResult = bodyAsText$default(this.c37_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var exceptionResponseText = suspendResult;
            var tmp0_subject = this.y36_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.c37_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.c37_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.c37_1, exceptionResponseText);
            else
              throw new ResponseException(this.c37_1, exceptionResponseText);
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
  addDefaultResponseValidation$lambda$slambda.prototype.e37 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.w36_1 = response;
    return i;
  };
  addDefaultResponseValidation$lambda$slambda.$metadata$ = classMeta('addDefaultResponseValidation$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.d37(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.h37_1 = $this_addDefaultResponseValidation.i2y_1;
      $this$HttpResponseValidator.i37(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().z34_1;
    _this__u8e3s4.w2v_1.b2e(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().v2y_1;
    _this__u8e3s4.x2v_1.b2e(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.m37_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.k37_1 = tmp0_elvis_lhs == null ? Application_getInstance().s2f_1 : tmp0_elvis_lhs;
    this.l37_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.o2q = function () {
    return this.k37_1;
  };
  defaultTransformers$1$content$1.prototype.p2q = function () {
    return this.l37_1;
  };
  defaultTransformers$1$content$1.prototype.q2q = function () {
    return this.m37_1;
  };
  defaultTransformers$1$content$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ByteArrayContent.prototype);
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.q37_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.x2d_1.y2x_1.d11(HttpHeaders_getInstance().s2h_1);
    tmp.o37_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.p37_1 = tmp0_elvis_lhs == null ? Application_getInstance().s2f_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.p2q = function () {
    return this.o37_1;
  };
  defaultTransformers$1$content$2.prototype.o2q = function () {
    return this.p37_1;
  };
  defaultTransformers$1$content$2.prototype.t2q = function () {
    return this.q37_1;
  };
  defaultTransformers$1$content$2.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.q2w = function ($this$intercept, body, $cont) {
    var tmp = this.r2w($this$intercept, body, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  defaultTransformers$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            if (this.z37_1.x2d_1.y2x_1.d11(HttpHeaders_getInstance().d2h_1) == null) {
              this.z37_1.x2d_1.y2x_1.k2b(HttpHeaders_getInstance().d2h_1, '*/*');
            }

            this.b38_1 = contentType(this.z37_1.x2d_1);
            var tmp_0 = this;
            var tmp0_subject = this.a38_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.b38_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().j2g_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.a38_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.b38_1, this.a38_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.z37_1, this.b38_1, this.a38_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.a38_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.b38_1, this.z37_1.x2d_1, this.a38_1);
                  }
                }
              }
            }

            tmp_0.c38_1 = tmp_1;
            if (!(this.c38_1 == null)) {
              this.z37_1.x2d_1.y2x_1.m2b(HttpHeaders_getInstance().v2h_1);
              this.bh_1 = 1;
              suspendResult = this.z37_1.b2d(this.c38_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.bh_1 = 2;
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
  defaultTransformers$slambda.prototype.r2w = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.z37_1 = $this$intercept;
    i.a38_1 = body;
    return i;
  };
  defaultTransformers$slambda.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.q2w($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.l38_1 = $body;
    this.m38_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  defaultTransformers$slambda$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.lh = function () {
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
            this.ch_1 = 4;
            this.ch_1 = 3;
            this.bh_1 = 2;
            var tmp_0 = this.n38_1.r1l();
            Companion_getInstance_0();
            suspendResult = copyTo(this.l38_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.o38_1 = Unit_getInstance();
            this.ch_1 = 5;
            this.bh_1 = 6;
            continue $sm;
          case 3:
            this.ch_1 = 4;
            var tmp_2 = this.eh_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.eh_1;
              var tmp_3 = this;
              cancel_0(this.m38_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.eh_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.eh_1;
                var tmp_5 = this;
                cancel(this.m38_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.eh_1;
              }
            }

            break;
          case 4:
            this.ch_1 = 5;
            var t = this.eh_1;
            complete(this.m38_1);
            throw t;
          case 5:
            throw this.eh_1;
          case 6:
            complete(this.m38_1);
            return Unit_getInstance();
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
  defaultTransformers$slambda$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.l38_1, this.m38_1, completion);
    i.n38_1 = $this$writer;
    return i;
  };
  defaultTransformers$slambda$slambda.$metadata$ = classMeta('defaultTransformers$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.l1f();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.k2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  defaultTransformers$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 11;
            this.z38_1 = this.y38_1.h3();
            this.a39_1 = this.y38_1.i3();
            var tmp_0 = this.a39_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.b39_1 = this.x38_1.x2d_1.x2w();
            this.c39_1 = this.z38_1.o2e_1;
            if (this.c39_1.equals(getKClass(Unit))) {
              cancel_1(this.a39_1);
              this.bh_1 = 9;
              suspendResult = this.x38_1.b2d(new HttpResponseContainer(this.z38_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.c39_1.equals(PrimitiveClasses_getInstance().se())) {
                this.bh_1 = 7;
                suspendResult = this.a39_1.d20(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.c39_1.equals(getKClass(ByteReadPacket)) ? true : this.c39_1.equals(getKClass(Input))) {
                  this.bh_1 = 5;
                  suspendResult = this.a39_1.d20(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.c39_1.equals(PrimitiveClasses_getInstance().af())) {
                    this.bh_1 = 3;
                    suspendResult = toByteArray(this.a39_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.c39_1.equals(getKClass(ByteReadChannel))) {
                      this.d39_1 = Job(this.b39_1.r19().v3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this;
                      var tmp_3 = this.b39_1.r19();
                      tmp_2.e39_1 = writer$default(this.x38_1, tmp_3, false, defaultTransformers$slambda$slambda_0(this.a39_1, this.b39_1, null), 2, null);
                      this.e39_1.s1a(defaultTransformers$slambda$lambda(this.d39_1));
                      tmp_1.f39_1 = this.e39_1.r1l();
                      this.bh_1 = 2;
                      suspendResult = this.x38_1.b2d(new HttpResponseContainer(this.z38_1, this.f39_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.c39_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.a39_1);
                        this.bh_1 = 1;
                        suspendResult = this.x38_1.b2d(new HttpResponseContainer(this.z38_1, this.b39_1.l30()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.bh_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 2:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 3:
            this.g39_1 = suspendResult;
            this.h39_1 = contentLength(this.b39_1);
            this.i39_1 = this.b39_1.i2l().d11(HttpHeaders_getInstance().q2h_1);
            if ((this.i39_1 == null ? !(this.h39_1 == null) : false) ? this.h39_1.f1(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.g39_1.length === this.h39_1.t6();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.h39_1) + ', actual ' + this.g39_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.bh_1 = 4;
            suspendResult = this.x38_1.b2d(new HttpResponseContainer(this.z38_1, this.g39_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 5:
            this.j39_1 = suspendResult;
            this.k39_1 = new HttpResponseContainer(this.z38_1, this.j39_1);
            this.bh_1 = 6;
            suspendResult = this.x38_1.b2d(this.k39_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 7:
            this.l39_1 = suspendResult;
            var tmp_4 = this;
            tmp_4.m39_1 = this.l39_1.b25(0, 0, 3, null);
            this.n39_1 = toInt(this.m39_1);
            this.o39_1 = new HttpResponseContainer(this.z38_1, this.n39_1);
            this.bh_1 = 8;
            suspendResult = this.x38_1.b2d(this.o39_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 9:
            ;
            this.bh_1 = 10;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 11) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.l2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.x38_1 = $this$intercept;
    i.y38_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  defaultTransformers$slambda_1.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.r39_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.a3a_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.q2w = function ($this$intercept, it, $cont) {
    var tmp = this.r2w($this$intercept, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpCallValidator$Companion$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 5;
            this.ch_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.b3a_1.x2d_1.b2y_1.s29(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.a3a_1));
            ;
            this.bh_1 = 1;
            suspendResult = this.b3a_1.b2d(this.c3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ch_1 = 5;
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.ch_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ch_1 = 5;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof Error) {
              this.d3a_1 = this.eh_1;
              this.e3a_1 = unwrapCancellationException(this.d3a_1);
              this.bh_1 = 4;
              suspendResult = processException(this.a3a_1, this.e3a_1, HttpRequest(this.b3a_1.x2d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.eh_1;
            }

            break;
          case 4:
            throw this.e3a_1;
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
  HttpCallValidator$Companion$install$slambda.prototype.r2w = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.a3a_1, completion);
    i.b3a_1 = $this$intercept;
    i.c3a_1 = it;
    return i;
  };
  HttpCallValidator$Companion$install$slambda.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2w($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.n3a_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.k2x = function ($this$intercept, container, $cont) {
    var tmp = this.l2x($this$intercept, container, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 5;
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = this.o3a_1.b2d(this.p3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ch_1 = 5;
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.ch_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ch_1 = 5;
            var tmp_0 = this.eh_1;
            if (tmp_0 instanceof Error) {
              this.q3a_1 = this.eh_1;
              this.r3a_1 = unwrapCancellationException(this.q3a_1);
              this.bh_1 = 4;
              suspendResult = processException(this.n3a_1, this.r3a_1, this.o3a_1.x2d_1.g30(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.eh_1;
            }

            break;
          case 4:
            throw this.r3a_1;
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
  HttpCallValidator$Companion$install$slambda_1.prototype.l2x = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.n3a_1, completion);
    i.o3a_1 = $this$intercept;
    i.p3a_1 = container;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_1.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.k2x($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.a3b_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.e3b = function ($this$intercept, request, $cont) {
    var tmp = this.f3b($this$intercept, request, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.s5 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.e3b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = this.b3b_1.z2y(this.c3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d3b_1 = suspendResult;
            this.bh_1 = 2;
            suspendResult = validateResponse(this.a3b_1, this.d3b_1.x2w(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.d3b_1;
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
  HttpCallValidator$Companion$install$slambda_3.prototype.f3b = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.a3b_1, completion);
    i.b3b_1 = $this$intercept;
    i.c3b_1 = request;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_3.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.e3b($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.f37_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = ArrayList_init_$Create$();
    }
    tmp_0.g37_1 = tmp$ret$1;
    this.h37_1 = true;
  }
  Config.prototype.i37 = function (block) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.f37_1;
      tmp0_plusAssign.b(block);
    }
  };
  Config.$metadata$ = classMeta('Config');
  function Companion_1() {
    Companion_instance_1 = this;
    this.i3c_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.s = function () {
    return this.i3c_1;
  };
  Companion_1.prototype.j3c = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.f37_1), reversed(config.g37_1), config.h37_1);
  };
  Companion_1.prototype.b2z = function (block) {
    return this.j3c(block);
  };
  Companion_1.prototype.k3c = function (plugin_0, scope) {
    var tmp = Phases_getInstance().w34_1;
    scope.w2v_1.b2e(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.x2v_1.a2e(Phases_getInstance_1().u2y_1, BeforeReceive);
    scope.x2v_1.b2e(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.n3c(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.c2z = function (plugin, scope) {
    return this.k3c(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  Companion_1.$metadata$ = objectMeta('Companion', [HttpClientPlugin]);
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o3b_1 = _this__u8e3s4;
    this.p3b_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            var tmp_0 = this;
            tmp_0.q3b_1 = this.o3b_1.p39_1;
            this.r3b_1 = this.q3b_1.e();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!this.r3b_1.f()) {
              this.bh_1 = 3;
              continue $sm;
            }

            this.s3b_1 = this.r3b_1.g();
            this.bh_1 = 2;
            suspendResult = this.s3b_1(this.p3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.bh_1 = 1;
            continue $sm;
          case 3:
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
  $validateResponseCOROUTINE$5.$metadata$ = classMeta('$validateResponseCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3c_1 = _this__u8e3s4;
    this.c3c_1 = cause;
    this.d3c_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            var tmp_0 = this;
            tmp_0.e3c_1 = this.b3c_1.q39_1;
            this.f3c_1 = this.e3c_1.e();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!this.f3c_1.f()) {
              this.bh_1 = 5;
              continue $sm;
            }

            this.g3c_1 = this.f3c_1.g();
            this.h3c_1 = this.g3c_1;
            var tmp_1 = this.h3c_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.bh_1 = 3;
              suspendResult = this.g3c_1.p3c_1(this.c3c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.h3c_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.bh_1 = 2;
                suspendResult = this.g3c_1.o3c_1(this.c3c_1, this.d3c_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.bh_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.bh_1 = 4;
            continue $sm;
          case 3:
            this.bh_1 = 4;
            continue $sm;
          case 4:
            this.bh_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  $processExceptionCOROUTINE$6.$metadata$ = classMeta('$processExceptionCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.p39_1 = responseValidators;
    this.q39_1 = callExceptionHandlers;
    this.r39_1 = expectSuccess;
  }
  HttpCallValidator.$metadata$ = classMeta('HttpCallValidator');
  function HandlerWrapper() {
  }
  HandlerWrapper.$metadata$ = interfaceMeta('HandlerWrapper');
  function ExceptionHandlerWrapper() {
  }
  ExceptionHandlerWrapper.$metadata$ = classMeta('ExceptionHandlerWrapper', [HandlerWrapper]);
  function RequestExceptionHandlerWrapper() {
  }
  RequestExceptionHandlerWrapper.$metadata$ = classMeta('RequestExceptionHandlerWrapper', [HandlerWrapper]);
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.d2z(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.u3c_1 = $builder;
    this.q3c_1 = $builder.x2x_1;
    this.r3c_1 = $builder.w2x_1.yn();
    this.s3c_1 = $builder.b2y_1;
    this.t3c_1 = $builder.y2x_1.yn();
  }
  HttpRequest$1.prototype.g31 = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.h31 = function () {
    return this.q3c_1;
  };
  HttpRequest$1.prototype.k30 = function () {
    return this.r3c_1;
  };
  HttpRequest$1.prototype.l2z = function () {
    return this.s3c_1;
  };
  HttpRequest$1.prototype.i2l = function () {
    return this.t3c_1;
  };
  HttpRequest$1.$metadata$ = classMeta(undefined, [HttpRequest_0]);
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.s() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  HttpClientPlugin.$metadata$ = interfaceMeta('HttpClientPlugin');
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.a2w_1.o29(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o29(plugin.s());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.d3d_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.q2w = function ($this$intercept, content, $cont) {
    var tmp = this.r2w($this$intercept, content, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpPlainText$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.d3d_1.k3d(this.e3d_1.x2d_1);
            var tmp_0 = this.f3d_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.g3d_1 = contentType(this.e3d_1.x2d_1);
            if (!(this.g3d_1 == null) ? !(this.g3d_1.t2g_1 === Text_getInstance().j2g_1.t2g_1) : false) {
              return Unit_getInstance();
            }

            this.bh_1 = 1;
            suspendResult = this.e3d_1.b2d(wrapContent(this.d3d_1, this.f3d_1, this.g3d_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  HttpPlainText$Plugin$install$slambda.prototype.r2w = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.d3d_1, completion);
    i.e3d_1 = $this$intercept;
    i.f3d_1 = content;
    return i;
  };
  HttpPlainText$Plugin$install$slambda.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2w($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.t3d_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.k2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2x(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.w3d_1 = this.v3d_1.h3();
            this.x3d_1 = this.v3d_1.i3();
            var tmp_0;
            if (!this.w3d_1.o2e_1.equals(PrimitiveClasses_getInstance().we())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.x3d_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.bh_1 = 1;
            suspendResult = this.x3d_1.d20(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y3d_1 = suspendResult;
            this.z3d_1 = this.t3d_1.a3e(this.u3d_1.x2d_1, this.y3d_1);
            this.bh_1 = 2;
            suspendResult = this.u3d_1.b2d(new HttpResponseContainer(this.w3d_1, this.z3d_1), this);
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
  HttpPlainText$Plugin$install$slambda_1.prototype.l2x = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.t3d_1, completion);
    i.u3d_1 = $this$intercept;
    i.v3d_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  HttpPlainText$Plugin$install$slambda_1.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2x($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    tmp.b3e_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
    }
    tmp_0.c3e_1 = tmp$ret$1;
    this.d3e_1 = null;
    this.e3e_1 = Charsets_getInstance().k25_1;
  }
  Config_0.$metadata$ = classMeta('Config');
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.f3e_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.s = function () {
    return this.f3e_1;
  };
  Plugin_0.prototype.j3c = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_0();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    var tmp$ret$1;
    {
      {
      }
      return new HttpPlainText(config.b3e_1, config.c3e_1, config.d3e_1, config.e3e_1);
    }
  };
  Plugin_0.prototype.b2z = function (block) {
    return this.j3c(block);
  };
  Plugin_0.prototype.g3e = function (plugin, scope) {
    var tmp = Phases_getInstance().z34_1;
    scope.w2v_1.b2e(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().w2y_1;
    scope.x2v_1.b2e(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.c2z = function (plugin, scope) {
    return this.g3e(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  Plugin_0.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().j2g_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.i3d_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.h3e_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.h3e_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function HttpPlainText$lambda() {
    return function (a, b) {
      var tmp$ret$2;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = b.g3_1;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = a.g3_1;
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      }
      return tmp$ret$2;
    };
  }
  function HttpPlainText$lambda_0() {
    return function (a, b) {
      var tmp$ret$2;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_name(a);
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = get_name(b);
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      }
      return tmp$ret$2;
    };
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.h3d_1 = responseCharsetFallback;
    var tmp$ret$1;
    {
      var tmp0_sortedByDescending = toList(charsetQuality);
      var tmp$ret$0;
      {
        var tmp = HttpPlainText$lambda();
        tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      }
      tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    }
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_filterTo = ArrayList_init_$Create$();
          var tmp0_iterator = charsets.e();
          while (tmp0_iterator.f()) {
            var element = tmp0_iterator.g();
            var tmp$ret$2;
            {
              tmp$ret$2 = !charsetQuality.c2(element);
            }
            if (tmp$ret$2) {
              tmp0_filterTo.b(element);
            }
          }
          tmp$ret$3 = tmp0_filterTo;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      var tmp1_sortedBy = tmp$ret$4;
      var tmp$ret$5;
      {
        var tmp_0 = HttpPlainText$lambda_0();
        tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
      }
      tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    }
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    {
      {
      }
      var tmp$ret$12;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          {
            var tmp0_iterator_0 = withoutQuality.e();
            while (tmp0_iterator_0.f()) {
              var element_0 = tmp0_iterator_0.g();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
                }
                if (tmp$ret$7) {
                  tmp0_apply.kf(',');
                }
                tmp0_apply.kf(get_name(element_0));
              }
            }
          }
          {
            var tmp0_iterator_1 = withQuality.e();
            while (tmp0_iterator_1.f()) {
              var element_1 = tmp0_iterator_1.g();
              {
                var charset = element_1.h3();
                var quality = element_1.i3();
                var tmp$ret$8;
                {
                  tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
                }
                if (tmp$ret$8) {
                  tmp0_apply.kf(',');
                }
                {
                  var containsArg = quality;
                  var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
                  {
                  }
                  {
                    {
                    }
                    if (!tmp0_check) {
                      var tmp$ret$9;
                      {
                        tmp$ret$9 = 'Check failed.';
                      }
                      var message = tmp$ret$9;
                      throw IllegalStateException_init_$Create$(toString(message));
                    }
                  }
                }
                var tmp$ret$10;
                {
                  var tmp1_roundToInt = 100 * quality;
                  tmp$ret$10 = roundToInt(tmp1_roundToInt);
                }
                var truncatedQuality = tmp$ret$10 / 100.0;
                tmp0_apply.kf(get_name(charset) + ';q=' + truncatedQuality);
              }
            }
          }
          var tmp$ret$11;
          {
            tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
          }
          if (tmp$ret$11) {
            tmp0_apply.kf(get_name(this.h3d_1));
          }
        }
        tmp$ret$12 = tmp0_apply;
      }
      tmp$ret$13 = tmp$ret$12.toString();
    }
    tmp_1.j3d_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f3_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.i3d_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().k25_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.a3e = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.x2w());
    var actualCharset = tmp0_elvis_lhs == null ? this.h3d_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.k3d = function (context) {
    if (!(context.y2x_1.d11(HttpHeaders_getInstance().e2h_1) == null))
      return Unit_getInstance();
    context.y2x_1.i2b(HttpHeaders_getInstance().e2h_1, this.j3d_1);
  };
  HttpPlainText.$metadata$ = classMeta('HttpPlainText');
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.k3f_1 = $plugin;
    this.l3f_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.e3b = function ($this$intercept, context, $cont) {
    var tmp = this.f3b($this$intercept, context, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpRedirect$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.e3b(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = this.m3f_1.z2y(this.n3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3f_1 = suspendResult;
            if (this.k3f_1.p3f_1 ? !get_ALLOWED_FOR_REDIRECT().l1(this.o3f_1.g30().h31()) : false) {
              return this.o3f_1;
            }

            this.bh_1 = 2;
            suspendResult = handleCall(this.m3f_1, Plugin_getInstance_1(), this.n3f_1, this.o3f_1, this.k3f_1.q3f_1, this.l3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  HttpRedirect$Plugin$install$slambda.prototype.f3b = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.k3f_1, this.l3f_1, completion);
    i.m3f_1 = $this$intercept;
    i.n3f_1 = context;
    return i;
  };
  HttpRedirect$Plugin$install$slambda.$metadata$ = classMeta('HttpRedirect$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.e3b($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3e_1 = _this__u8e3s4;
    this.r3e_1 = _this__u8e3s4_0;
    this.s3e_1 = context;
    this.t3e_1 = origin;
    this.u3e_1 = allowHttpsDowngrade;
    this.v3e_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            if (!isRedirect(this.t3e_1.x2w().l30()))
              return this.t3e_1;
            this.w3e_1 = this.t3e_1;
            this.x3e_1 = this.s3e_1;
            this.y3e_1 = this.t3e_1.g30().k30().a2p_1;
            this.z3e_1 = get_authority(this.t3e_1.g30().k30());
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.bh_1 = 4;
              continue $sm;
            }

            this.v3e_1.c2w_1.i2r(this.q3e_1.s3f_1, this.w3e_1.x2w());
            this.a3f_1 = this.w3e_1.x2w().i2l().d11(HttpHeaders_getInstance().r2i_1);
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.b3f_1 = new HttpRequestBuilder();
            this.b3f_1.y33(this.x3e_1);
            ;
            this.b3f_1.w2x_1.x2o_1.r9();
            var tmp0_safe_receiver = this.a3f_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(this.b3f_1.w2x_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.u3e_1 ? isSecure(this.y3e_1) : false) ? !isSecure(this.b3f_1.w2x_1.o2o_1) : false) {
              return this.w3e_1;
            }

            if (!(this.z3e_1 === get_authority_0(this.b3f_1.w2x_1))) {
              this.b3f_1.y2x_1.m2b(HttpHeaders_getInstance().m2h_1);
            }

            tmp_0.x3e_1 = this.b3f_1;
            this.bh_1 = 2;
            suspendResult = this.r3e_1.z2y(this.x3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3e_1 = suspendResult;
            if (!isRedirect(this.w3e_1.x2w().l30()))
              return this.w3e_1;
            this.bh_1 = 1;
            continue $sm;
          case 3:
            throw this.eh_1;
          case 4:
            return Unit_getInstance();
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
  $handleCallCOROUTINE$7.$metadata$ = classMeta('$handleCallCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_1() {
    this.t3f_1 = true;
    this.u3f_1 = false;
  }
  Config_1.$metadata$ = classMeta('Config');
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.r3f_1 = new AttributeKey('HttpRedirect');
    this.s3f_1 = new EventDefinition();
  }
  Plugin_1.prototype.s = function () {
    return this.r3f_1;
  };
  Plugin_1.prototype.j3c = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_1();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpRedirect(config.t3f_1, config.u3f_1);
  };
  Plugin_1.prototype.b2z = function (block) {
    return this.j3c(block);
  };
  Plugin_1.prototype.v3f = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.n3c(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.c2z = function (plugin, scope) {
    return this.v3f(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  Plugin_1.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.p3f_1 = checkHttpMethod;
    this.q3f_1 = allowHttpsDowngrade;
  }
  HttpRedirect.$metadata$ = classMeta('HttpRedirect');
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.c2o_1;
    return ((((tmp0_subject === Companion_getInstance_1().m2m_1.c2o_1 ? true : tmp0_subject === Companion_getInstance_1().n2m_1.c2o_1) ? true : tmp0_subject === Companion_getInstance_1().s2m_1.c2o_1) ? true : tmp0_subject === Companion_getInstance_1().t2m_1.c2o_1) ? true : tmp0_subject === Companion_getInstance_1().o2m_1.c2o_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().j2l_1, Companion_getInstance_2().o2l_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.e3g_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.q2w = function ($this$intercept, it, $cont) {
    var tmp = this.r2w($this$intercept, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            this.h3g_1 = Job(this.f3g_1.x2d_1.a2y_1);
            attachToClientEngineJob(this.h3g_1, ensureNotNull(this.e3g_1.v2v_1.v3(Key_getInstance())));
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.ch_1 = 4;
            this.ch_1 = 3;
            this.f3g_1.x2d_1.a2y_1 = this.h3g_1;
            this.bh_1 = 2;
            suspendResult = this.f3g_1.c2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.i3g_1 = Unit_getInstance();
            this.ch_1 = 6;
            this.bh_1 = 5;
            continue $sm;
          case 3:
            this.ch_1 = 4;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.eh_1;
              var tmp_2 = this;
              this.h3g_1.y1e(cause);
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 4:
            this.ch_1 = 6;
            var t = this.eh_1;
            this.h3g_1.l1f();
            ;
            throw t;
          case 5:
            this.h3g_1.l1f();
            ;
            return Unit_getInstance();
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.r2w = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.e3g_1, completion);
    i.f3g_1 = $this$intercept;
    i.g3g_1 = it;
    return i;
  };
  HttpRequestLifecycle$Plugin$install$slambda.$metadata$ = classMeta('HttpRequestLifecycle$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2w($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.j3g_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.s = function () {
    return this.j3g_1;
  };
  Plugin_2.prototype.f35 = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.b2z = function (block) {
    return this.f35(block);
  };
  Plugin_2.prototype.k3g = function (plugin, scope) {
    var tmp = Phases_getInstance().w34_1;
    scope.w2v_1.b2e(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.c2z = function (plugin, scope) {
    return this.k3g(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  Plugin_2.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  HttpRequestLifecycle.$metadata$ = classMeta('HttpRequestLifecycle');
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.s1a(attachToClientEngineJob$lambda(requestJob));
    requestJob.s1a(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        tmp = cancel_2($requestJob, 'Engine failed', cause);
      } else {
        $requestJob.l1f();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.w1c();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.t3g_1 = $plugin;
    this.u3g_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.q2w = function ($this$intercept, content, $cont) {
    var tmp = this.r2w($this$intercept, content, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpSend$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp_0 = this.w3g_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.w3g_1) + ', with Content-Type: ' + contentType(this.v3g_1.x2d_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_2 = this;
            tmp_2.x3g_1 = this.v3g_1.x2d_1;
            var tmp_3 = this;
            tmp_3.y3g_1 = this.w3g_1;
            var tmp0_subject = this.y3g_1;
            if (tmp0_subject == null) {
              this.x3g_1.z2x_1 = NullBody_getInstance();
              var tmp_4 = JsType_getInstance();
              var tmp_5 = getKClass(OutgoingContent);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this.x3g_1.z33(typeInfoImpl(tmp_4, tmp_5, tmp_6));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.x3g_1.z2x_1 = this.y3g_1;
                this.x3g_1.z33(null);
              } else {
                this.x3g_1.z2x_1 = this.y3g_1;
                var tmp_8 = JsType_getInstance();
                var tmp_9 = getKClass(OutgoingContent);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this.x3g_1.z33(typeInfoImpl(tmp_8, tmp_9, tmp_10));
              }
            }

            this.z3g_1 = new DefaultSender(this.t3g_1.l3c_1, this.u3g_1);
            this.a3h_1 = this.z3g_1;
            var tmp_12 = this;
            tmp_12.b3h_1 = downTo(get_lastIndex(this.t3g_1.m3c_1), 0);
            var progression = this.b3h_1;
            var inductionVariable = progression.z_1;
            var last = progression.a1_1;
            var step = progression.b1_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.t3g_1.m3c_1.h(element);
                this.a3h_1 = new InterceptedSender(interceptor, this.a3h_1);
              }
               while (!(element === last));
            this.bh_1 = 1;
            suspendResult = this.a3h_1.z2y(this.v3g_1.x2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c3h_1 = suspendResult;
            this.bh_1 = 2;
            suspendResult = this.v3g_1.b2d(this.c3h_1, this);
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
  HttpSend$Plugin$install$slambda.prototype.r2w = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.t3g_1, this.u3g_1, completion);
    i.v3g_1 = $this$intercept;
    i.w3g_1 = content;
    return i;
  };
  HttpSend$Plugin$install$slambda.$metadata$ = classMeta('HttpSend$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2w($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3h_1 = _this__u8e3s4;
    this.m3h_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp0_safe_receiver = this.l3h_1.q3h_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.l3h_1.p3h_1 >= this.l3h_1.n3h_1) {
              throw new SendCountExceedException('Max send count ' + this.l3h_1.n3h_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.l3h_1;
            var tmp2 = tmp1_this.p3h_1;
            tmp1_this.p3h_1 = tmp2 + 1 | 0;
            ;
            this.bh_1 = 1;
            suspendResult = this.l3h_1.o3h_1.y2v_1.w2d(this.m3h_1, this.m3h_1.z2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.l3h_1.q3h_1 = call;
            return call;
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
  $executeCOROUTINE$8.$metadata$ = classMeta('$executeCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_2() {
    this.r3h_1 = 20;
  }
  Config_2.$metadata$ = classMeta('Config');
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.s3h_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.s = function () {
    return this.s3h_1;
  };
  Plugin_3.prototype.j3c = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_2();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpSend(config.r3h_1);
  };
  Plugin_3.prototype.b2z = function (block) {
    return this.j3c(block);
  };
  Plugin_3.prototype.t3h = function (plugin, scope) {
    var tmp = Phases_getInstance().a35_1;
    scope.w2v_1.b2e(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.c2z = function (plugin, scope) {
    return this.t3h(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  Plugin_3.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.u3h_1 = interceptor;
    this.v3h_1 = nextSender;
  }
  InterceptedSender.prototype.z2y = function (requestBuilder, $cont) {
    return this.u3h_1(this.v3h_1, requestBuilder, $cont);
  };
  InterceptedSender.$metadata$ = classMeta('InterceptedSender', [Sender]);
  function DefaultSender(maxSendCount, client) {
    this.n3h_1 = maxSendCount;
    this.o3h_1 = client;
    this.p3h_1 = 0;
    this.q3h_1 = null;
  }
  DefaultSender.prototype.z2y = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  DefaultSender.$metadata$ = classMeta('DefaultSender', [Sender]);
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.l3c_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.m3c_1 = tmp$ret$0;
  }
  HttpSend.prototype.n3c = function (block) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.m3c_1;
      tmp0_plusAssign.b(block);
    }
  };
  HttpSend.$metadata$ = classMeta('HttpSend');
  function Sender() {
  }
  Sender.$metadata$ = interfaceMeta('Sender');
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  SendCountExceedException.$metadata$ = classMeta('SendCountExceedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.z3h(requestTimeoutMillis);
    $this.a3i(connectTimeoutMillis);
    $this.b3i(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    {
      var tmp0_require = value == null ? true : value.f1(new Long(0, 0)) > 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.c3i_1 = new AttributeKey('TimeoutConfiguration');
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation) {
    this.l3i_1 = $requestTimeout;
    this.m3i_1 = $context;
    this.n3i_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.d21 = function ($this$launch, $cont) {
    var tmp = this.e21($this$launch, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.mh = function (p1, $cont) {
    return this.d21((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = delay(this.l3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.m3i_1);
            cancel_2(this.n3i_1, ensureNotNull(cause.message), cause);
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.e21 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.l3i_1, this.m3i_1, this.n3i_1, completion);
    i.o3i_1 = $this$launch;
    return i;
  };
  HttpTimeout$Plugin$install$slambda$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $context, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.d21($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.y1a(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.x3i_1 = $plugin;
    this.y3i_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.q2w = function ($this$intercept, it, $cont) {
    var tmp = this.r2w($this$intercept, it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpTimeout$Plugin$install$slambda.prototype.s5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2w(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        if (tmp === 0) {
          this.ch_1 = 1;
          var isWebSocket = isWebsocket(this.z3i_1.x2d_1.w2x_1.o2o_1);
          var tmp_0;
          if (isWebSocket) {
            tmp_0 = true;
          } else {
            var tmp_1 = this.z3i_1.x2d_1.z2x_1;
            tmp_0 = tmp_1 instanceof ClientUpgradeContent;
          }
          if (tmp_0)
            return Unit_getInstance();
          var configuration = this.z3i_1.x2d_1.b3j(Plugin_getInstance_4());
          if (configuration == null ? hasNotNullTimeouts(this.x3i_1) : false) {
            configuration = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
            this.z3i_1.x2d_1.c3j(Plugin_getInstance_4(), configuration);
          }
          var tmp0_safe_receiver = configuration;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$0;
            l$ret$1: do {
              var context = this.z3i_1.x2d_1;
              var tmp0_elvis_lhs = tmp0_safe_receiver.d3j();
              tmp0_safe_receiver.a3i(tmp0_elvis_lhs == null ? this.x3i_1.f3j_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.h3j();
              tmp0_safe_receiver.b3i(tmp1_elvis_lhs == null ? this.x3i_1.g3j_1 : tmp1_elvis_lhs);
              var tmp2_elvis_lhs = tmp0_safe_receiver.i3j();
              tmp0_safe_receiver.z3h(tmp2_elvis_lhs == null ? this.x3i_1.e3j_1 : tmp2_elvis_lhs);
              var tmp3_elvis_lhs = tmp0_safe_receiver.i3j();
              var requestTimeout = tmp3_elvis_lhs == null ? this.x3i_1.e3j_1 : tmp3_elvis_lhs;
              var tmp_2;
              if (requestTimeout == null) {
                tmp_2 = true;
              } else {
                Plugin_getInstance_4();
                tmp_2 = equals(requestTimeout, new Long(-1, 2147483647));
              }
              if (tmp_2) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var executionContext = context.a2y_1;
              var killer = launch$default(this.y3i_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, context, executionContext, null), 3, null);
              var tmp_3 = context.a2y_1;
              tmp_3.s1a(HttpTimeout$Plugin$install$slambda$lambda(killer));
            }
             while (false);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.eh_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.r2w = function ($this$intercept, it, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.x3i_1, this.y3i_1, completion);
    i.z3i_1 = $this$intercept;
    i.a3j_1 = it;
    return i;
  };
  HttpTimeout$Plugin$install$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2w($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.z3h = function (value) {
    this.w3h_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.i3j = function () {
    return this.w3h_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.a3i = function (value) {
    this.x3h_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.d3j = function () {
    return this.x3h_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.b3i = function (value) {
    this.y3h_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.h3j = function () {
    return this.y3h_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.yn = function () {
    return new HttpTimeout(this.i3j(), this.d3j(), this.h3j());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.w3h_1, other.w3h_1))
      return false;
    if (!equals(this.x3h_1, other.x3h_1))
      return false;
    if (!equals(this.y3h_1, other.y3h_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.w3h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.x3h_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.y3h_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.w3h_1 = new Long(0, 0);
    this.x3h_1 = new Long(0, 0);
    this.y3h_1 = new Long(0, 0);
  }
  HttpTimeoutCapabilityConfiguration.$metadata$ = classMeta('HttpTimeoutCapabilityConfiguration');
  function hasNotNullTimeouts($this) {
    return (!($this.e3j_1 == null) ? true : !($this.f3j_1 == null)) ? true : !($this.g3j_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.j3j_1 = new AttributeKey('TimeoutPlugin');
    this.k3j_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.s = function () {
    return this.j3j_1;
  };
  Plugin_4.prototype.l3j = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.yn();
  };
  Plugin_4.prototype.b2z = function (block) {
    return this.l3j(block);
  };
  Plugin_4.prototype.m3j = function (plugin, scope) {
    var tmp = Phases_getInstance().w34_1;
    scope.w2v_1.b2e(tmp, HttpTimeout$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_4.prototype.c2z = function (plugin, scope) {
    return this.m3j(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  Plugin_4.$metadata$ = objectMeta('Plugin', [HttpClientPlugin, HttpClientEngineCapability]);
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.e3j_1 = requestTimeoutMillis;
    this.f3j_1 = connectTimeoutMillis;
    this.g3j_1 = socketTimeoutMillis;
  }
  HttpTimeout.$metadata$ = classMeta('HttpTimeout');
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.w2x_1.d2q();
    var tmp0_safe_receiver = request.b3j(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i3j());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  HttpRequestTimeoutException.$metadata$ = classMeta('HttpRequestTimeoutException', undefined, undefined, undefined, undefined, IOException.prototype);
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.g31(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.n3j_1 = call;
    this.o3j_1 = content;
    this.p3j_1 = origin;
    this.q3j_1 = this.p3j_1.r19();
  }
  DelegatedResponse.prototype.g31 = function () {
    return this.n3j_1;
  };
  DelegatedResponse.prototype.a11 = function () {
    return this.o3j_1;
  };
  DelegatedResponse.prototype.r19 = function () {
    return this.q3j_1;
  };
  DelegatedResponse.prototype.l30 = function () {
    return this.p3j_1.l30();
  };
  DelegatedResponse.prototype.r31 = function () {
    return this.p3j_1.r31();
  };
  DelegatedResponse.prototype.s31 = function () {
    return this.p3j_1.s31();
  };
  DelegatedResponse.prototype.t31 = function () {
    return this.p3j_1.t31();
  };
  DelegatedResponse.prototype.i2l = function () {
    return this.p3j_1.i2l();
  };
  DelegatedResponse.$metadata$ = classMeta('DelegatedResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  WebSocketCapability.$metadata$ = objectMeta('WebSocketCapability', [HttpClientEngineCapability]);
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  WebSocketException.$metadata$ = classMeta('WebSocketException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ClientUpgradeContent() {
  }
  ClientUpgradeContent.$metadata$ = classMeta('ClientUpgradeContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  function DefaultHttpRequest(call, data) {
    this.r3j_1 = call;
    this.s3j_1 = data.y32_1;
    this.t3j_1 = data.x32_1;
    this.u3j_1 = data.a33_1;
    this.v3j_1 = data.z32_1;
    this.w3j_1 = data.c33_1;
  }
  DefaultHttpRequest.prototype.g31 = function () {
    return this.r3j_1;
  };
  DefaultHttpRequest.prototype.r19 = function () {
    return this.g31().r19();
  };
  DefaultHttpRequest.prototype.h31 = function () {
    return this.s3j_1;
  };
  DefaultHttpRequest.prototype.k30 = function () {
    return this.t3j_1;
  };
  DefaultHttpRequest.prototype.i2l = function () {
    return this.v3j_1;
  };
  DefaultHttpRequest.prototype.l2z = function () {
    return this.w3j_1;
  };
  DefaultHttpRequest.$metadata$ = classMeta('DefaultHttpRequest', [HttpRequest_0]);
  function HttpRequest_0() {
  }
  HttpRequest_0.$metadata$ = interfaceMeta('HttpRequest', [HttpMessage, CoroutineScope]);
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      return tmp$ret$0;
    };
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.w2x_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.x2x_1 = Companion_getInstance_2().j2l_1;
    var tmp_0 = this;
    tmp_0.y2x_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.z2x_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.a2y_1 = SupervisorJob$default(null, 1, null);
    this.b2y_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.i2l = function () {
    return this.y2x_1;
  };
  HttpRequestBuilder.prototype.z33 = function (value) {
    if (!(value == null)) {
      this.b2y_1.q29(get_BodyTypeAttributeKey(), value);
    } else {
      this.b2y_1.r29(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.x3j = function () {
    return this.b2y_1.o29(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.yn = function () {
    var tmp = this.w2x_1.yn();
    var tmp_0 = this.x2x_1;
    var tmp_1 = this.y2x_1.yn();
    var tmp_2 = this.z2x_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.z2x_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.a2y_1, this.b2y_1);
  };
  HttpRequestBuilder.prototype.y33 = function (builder) {
    this.a2y_1 = builder.a2y_1;
    return this.y3j(builder);
  };
  HttpRequestBuilder.prototype.y3j = function (builder) {
    this.x2x_1 = builder.x2x_1;
    this.z2x_1 = builder.z2x_1;
    this.z33(builder.x3j());
    takeFrom_0(this.w2x_1, builder.w2x_1);
    this.w2x_1.v2o_1 = this.w2x_1.v2o_1;
    appendAll(this.y2x_1, builder.y2x_1);
    putAll(this.b2y_1, builder.b2y_1);
    return this;
  };
  HttpRequestBuilder.prototype.c3j = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.b2y_1.s29(tmp, HttpRequestBuilder$setCapability$lambda());
    {
      capabilities.a(key, capability);
    }
  };
  HttpRequestBuilder.prototype.b3j = function (key) {
    var tmp0_safe_receiver = this.b2y_1.o29(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  HttpRequestBuilder.$metadata$ = classMeta('HttpRequestBuilder', [HttpMessageBuilder]);
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.x32_1 = url;
    this.y32_1 = method;
    this.z32_1 = headers;
    this.a33_1 = body;
    this.b33_1 = executionContext;
    this.c33_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.c33_1.o29(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    tmp.d33_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.x32_1 + ', method=' + this.y32_1 + ')';
  };
  HttpRequestData.$metadata$ = classMeta('HttpRequestData');
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.e2z_1 = statusCode;
    this.f2z_1 = requestTime;
    this.g2z_1 = headers;
    this.h2z_1 = version;
    this.i2z_1 = body;
    this.j2z_1 = callContext;
    var tmp = this;
    tmp.k2z_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.e2z_1 + ')';
  };
  HttpResponseData.$metadata$ = classMeta('HttpResponseData');
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.w2x_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.a33_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.w34_1 = new PipelinePhase('Before');
    this.x34_1 = new PipelinePhase('State');
    this.y34_1 = new PipelinePhase('Transform');
    this.z34_1 = new PipelinePhase('Render');
    this.a35_1 = new PipelinePhase('Send');
  }
  Phases.$metadata$ = objectMeta('Phases');
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().w34_1, Phases_getInstance().x34_1, Phases_getInstance().y34_1, Phases_getInstance().z34_1, Phases_getInstance().a35_1]);
    this.g3k_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.v2d = function () {
    return this.g3k_1;
  };
  HttpRequestPipeline.$metadata$ = classMeta('HttpRequestPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_0() {
    Phases_instance_0 = this;
    this.m2y_1 = new PipelinePhase('Before');
    this.n2y_1 = new PipelinePhase('State');
    this.o2y_1 = new PipelinePhase('Monitoring');
    this.p2y_1 = new PipelinePhase('Engine');
    this.q2y_1 = new PipelinePhase('Receive');
  }
  Phases_0.$metadata$ = objectMeta('Phases');
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().m2y_1, Phases_getInstance_0().n2y_1, Phases_getInstance_0().o2y_1, Phases_getInstance_0().p2y_1, Phases_getInstance_0().q2y_1]);
    this.o3k_1 = developmentMode;
  }
  HttpSendPipeline.prototype.v2d = function () {
    return this.o3k_1;
  };
  HttpSendPipeline.$metadata$ = classMeta('HttpSendPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.i2l().k2b(HttpHeaders_getInstance().d2h_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.p3k_1 = call;
    this.q3k_1 = responseData.j2z_1;
    this.r3k_1 = responseData.e2z_1;
    this.s3k_1 = responseData.h2z_1;
    this.t3k_1 = responseData.f2z_1;
    this.u3k_1 = responseData.k2z_1;
    var tmp = this;
    var tmp_0 = responseData.i2z_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.v3k_1 = tmp0_elvis_lhs == null ? Companion_getInstance().a22() : tmp0_elvis_lhs;
    this.w3k_1 = responseData.g2z_1;
  }
  DefaultHttpResponse.prototype.g31 = function () {
    return this.p3k_1;
  };
  DefaultHttpResponse.prototype.r19 = function () {
    return this.q3k_1;
  };
  DefaultHttpResponse.prototype.l30 = function () {
    return this.r3k_1;
  };
  DefaultHttpResponse.prototype.r31 = function () {
    return this.s3k_1;
  };
  DefaultHttpResponse.prototype.s31 = function () {
    return this.t3k_1;
  };
  DefaultHttpResponse.prototype.t31 = function () {
    return this.u3k_1;
  };
  DefaultHttpResponse.prototype.a11 = function () {
    return this.v3k_1;
  };
  DefaultHttpResponse.prototype.i2l = function () {
    return this.w3k_1;
  };
  DefaultHttpResponse.$metadata$ = classMeta('DefaultHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).k30() + ', ' + this.l30() + ']';
  };
  HttpResponse.$metadata$ = classMeta('HttpResponse', [HttpMessage, CoroutineScope]);
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.g31().g30();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.r19().v3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.l1f();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$14(_this__u8e3s4, fallbackCharset, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().k25_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$14(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3l_1 = _this__u8e3s4;
    this.g3l_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$14.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.f3l_1);
            tmp_0.h3l_1 = tmp0_elvis_lhs == null ? this.g3l_1 : tmp0_elvis_lhs;
            this.i3l_1 = this.h3l_1.o25();
            this.bh_1 = 1;
            var tmp_1 = this.f3l_1.g31();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.j30(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.i3l_1, input, 0, 2, null);
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
  $bodyAsTextCOROUTINE$14.$metadata$ = classMeta('$bodyAsTextCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Phases_1() {
    Phases_instance_1 = this;
    this.u2y_1 = new PipelinePhase('Receive');
    this.v2y_1 = new PipelinePhase('Parse');
    this.w2y_1 = new PipelinePhase('Transform');
    this.x2y_1 = new PipelinePhase('State');
    this.y2y_1 = new PipelinePhase('After');
  }
  Phases_1.$metadata$ = objectMeta('Phases');
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().u2y_1, Phases_getInstance_1().v2y_1, Phases_getInstance_1().w2y_1, Phases_getInstance_1().x2y_1, Phases_getInstance_1().y2y_1]);
    this.q3l_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.v2d = function () {
    return this.q3l_1;
  };
  HttpResponsePipeline.$metadata$ = classMeta('HttpResponsePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_2() {
    Phases_instance_2 = this;
    this.b35_1 = new PipelinePhase('Before');
    this.c35_1 = new PipelinePhase('State');
    this.d35_1 = new PipelinePhase('After');
  }
  Phases_2.$metadata$ = objectMeta('Phases');
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().b35_1, Phases_getInstance_2().c35_1, Phases_getInstance_2().d35_1]);
    this.y3l_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.v2d = function () {
    return this.y3l_1;
  };
  HttpReceivePipeline.$metadata$ = classMeta('HttpReceivePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function HttpResponseContainer(expectedType, response) {
    this.e30_1 = expectedType;
    this.f30_1 = response;
  }
  HttpResponseContainer.prototype.h3 = function () {
    return this.e30_1;
  };
  HttpResponseContainer.prototype.i3 = function () {
    return this.f30_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.e30_1 + ', response=' + toString(this.f30_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.e30_1.hashCode();
    result = imul(result, 31) + hashCode(this.f30_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.e30_1.equals(tmp0_other_with_cast.e30_1))
      return false;
    if (!equals(this.f30_1, tmp0_other_with_cast.f30_1))
      return false;
    return true;
  };
  HttpResponseContainer.$metadata$ = classMeta('HttpResponseContainer');
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.z3l_1.b2y_1.o29(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
          var tmp0_iterator = tmp1_safe_receiver.e();
          while (tmp0_iterator.f()) {
            var element = tmp0_iterator.g();
            if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
              tmp0_filterIsInstanceTo.b(element);
            }
          }
          tmp$ret$0 = tmp0_filterIsInstanceTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      {
        var tmp0_iterator_0 = tmp2_safe_receiver.e();
        while (tmp0_iterator_0.f()) {
          var element_0 = tmp0_iterator_0.g();
          {
            var tmp$ret$3;
            $l$block: {
              var tmp0_requireNotNull = pluginOrNull($this.a3m_1, element_0);
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$2;
                {
                  tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
                }
                var message = tmp$ret$2;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$3 = tmp0_requireNotNull;
                break $l$block;
              }
            }
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.k3m = function (it, $cont) {
    var tmp = this.e37(it, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpStatement$execute$slambda.prototype.mh = function (p1, $cont) {
    return this.k3m(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = save(this.j3m_1.g31(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.x2w();
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
  HttpStatement$execute$slambda.prototype.e37 = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.j3m_1 = it;
    return i;
  };
  HttpStatement$execute$slambda.$metadata$ = classMeta('HttpStatement$execute$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.k3m(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$15(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3m_1 = _this__u8e3s4;
    this.u3m_1 = block;
  }
  $executeCOROUTINE$15.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 13;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.ch_1 = 12;
            this.bh_1 = 2;
            suspendResult = this.t3m_1.a3n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3m_1 = suspendResult;
            this.bh_1 = 3;
            continue $sm;
          case 3:
            this.bh_1 = 4;
            continue $sm;
          case 4:
            this.ch_1 = 10;
            this.bh_1 = 5;
            suspendResult = this.u3m_1(this.w3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.x3m_1 = suspendResult;
            this.bh_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.y3m_1 = this.x3m_1;
            this.bh_1 = 7;
            suspendResult = this.t3m_1.b3n(this.w3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.y3m_1;
          case 8:
            this.bh_1 = 9;
            suspendResult = this.t3m_1.b3n(this.w3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.v3m_1 = Unit_getInstance();
            this.ch_1 = 13;
            this.bh_1 = 15;
            continue $sm;
          case 10:
            this.ch_1 = 12;
            this.z3m_1 = this.eh_1;
            this.bh_1 = 11;
            suspendResult = this.t3m_1.b3n(this.w3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.z3m_1;
          case 12:
            this.ch_1 = 13;
            var tmp_2 = this.eh_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.eh_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.eh_1;
            }

            break;
          case 13:
            throw this.eh_1;
          case 14:
            this.ch_1 = 13;
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 15;
            continue $sm;
          case 15:
            return this.v3m_1;
        }
      } catch ($p) {
        if (this.ch_1 === 13) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$15.$metadata$ = classMeta('$executeCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeUnsafeCOROUTINE$16(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3n_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$16.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.ch_1 = 3;
            this.m3n_1 = (new HttpRequestBuilder()).y33(this.k3n_1.z3l_1);
            this.bh_1 = 2;
            suspendResult = this.k3n_1.a3m_1.z2y(this.m3n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.x2w();
          case 3:
            this.ch_1 = 4;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.eh_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.eh_1;
            }

            break;
          case 4:
            throw this.eh_1;
          case 5:
            this.ch_1 = 4;
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 6;
            continue $sm;
          case 6:
            return this.l3n_1;
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
  $executeUnsafeCOROUTINE$16.$metadata$ = classMeta('$executeUnsafeCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $cleanupCOROUTINE$17(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3n_1 = _this__u8e3s4;
    this.w3n_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$17.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.w3n_1.r19().v3(Key_getInstance()));
            tmp_0.x3n_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.x3n_1.l1f();
            ;
            this.ch_1 = 1;
            cancel_1(this.w3n_1.a11());
            ;
            this.ch_1 = 4;
            this.bh_1 = 2;
            continue $sm;
          case 1:
            this.ch_1 = 4;
            var tmp_2 = this.eh_1;
            if (tmp_2 instanceof Error) {
              this.y3n_1 = this.eh_1;
              this.bh_1 = 2;
              continue $sm;
            } else {
              throw this.eh_1;
            }

            break;
          case 2:
            this.ch_1 = 4;
            this.bh_1 = 3;
            suspendResult = this.x3n_1.m1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
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
  $cleanupCOROUTINE$17.$metadata$ = classMeta('$cleanupCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpStatement(builder, client) {
    this.z3l_1 = builder;
    this.a3m_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.z3n = function () {
    return this.a3m_1;
  };
  HttpStatement.prototype.a3o = function (block, $cont) {
    var tmp = new $executeCOROUTINE$15(this, block, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpStatement.prototype.b3o = function ($cont) {
    return this.a3o(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.a3n = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$16(this, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpStatement.prototype.b3n = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$17(this, _this__u8e3s4, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.z3l_1.w2x_1.d2q() + ']';
  };
  HttpStatement.$metadata$ = classMeta('HttpStatement');
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).r1l();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.k3o_1 = $contentLength;
    this.l3o_1 = $this_observable;
    this.m3o_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  observable$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 15;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.p3o_1 = get_ByteArrayPool();
            this.q3o_1 = this.p3o_1.j21();
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.bh_1 = 3;
            continue $sm;
          case 3:
            this.ch_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.k3o_1;
            tmp_1.s3o_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.t3o_1 = new Long(0, 0);
            this.bh_1 = 4;
            continue $sm;
          case 4:
            if (!!this.l3o_1.y1u()) {
              this.bh_1 = 8;
              continue $sm;
            }

            this.bh_1 = 5;
            suspendResult = readAvailable(this.l3o_1, this.q3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.u3o_1 = suspendResult;
            this.bh_1 = 6;
            suspendResult = this.n3o_1.r1l().b20(this.q3o_1, 0, this.u3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.v3o_1 = this.t3o_1;
            tmp_2.t3o_1 = this.v3o_1.v4(toLong(this.u3o_1));
            this.bh_1 = 7;
            suspendResult = this.m3o_1(this.t3o_1, this.s3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.bh_1 = 4;
            continue $sm;
          case 8:
            this.w3o_1 = this.l3o_1.g1u();
            this.n3o_1.r1l().z1m(this.w3o_1);
            ;
            if (this.w3o_1 == null ? this.t3o_1.equals(new Long(0, 0)) : false) {
              this.bh_1 = 9;
              suspendResult = this.m3o_1(this.t3o_1, this.s3o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bh_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.bh_1 = 10;
            continue $sm;
          case 10:
            this.r3o_1 = Unit_getInstance();
            this.ch_1 = 15;
            this.bh_1 = 11;
            var tmp_4 = this;
            continue $sm;
          case 11:
            var tmp_5 = this;
            tmp_5.o3o_1 = this.p3o_1.u23(this.q3o_1);
            this.bh_1 = 13;
            continue $sm;
          case 12:
            this.p3o_1.u23(this.q3o_1);
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.ch_1 = 15;
            var t = this.eh_1;
            this.p3o_1.u23(this.q3o_1);
            throw t;
          case 15:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 15) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new observable$slambda(this.k3o_1, this.l3o_1, this.m3o_1, completion);
    i.n3o_1 = $this$writer;
    return i;
  };
  observable$slambda.$metadata$ = classMeta('observable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.x3o_1 = response;
    this.y3o_1 = cause;
  }
  HttpResponseReceiveFail.$metadata$ = classMeta('HttpResponseReceiveFail');
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.a3p_1 = new Long(0, 0);
  }
  EmptyContent.prototype.p2q = function () {
    return this.a3p_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = objectMeta('EmptyContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    {
      var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.yn();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.b3p = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new HttpClientEngineConfig();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.a2z = function (block) {
    return this.b3p(block);
  };
  Js.$metadata$ = objectMeta('Js', [HttpClientEngineFactory]);
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().t2e_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.d2b(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$19($this, request, callContext, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  JsClientEngine$createWebSocket$headers_capturingHack$1.$metadata$ = classMeta();
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$18(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3p_1 = _this__u8e3s4;
    this.z3p_1 = data;
  }
  $executeCOROUTINE$18.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            this.bh_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a3q_1 = suspendResult;
            this.b3q_1 = this.z3p_1.c33_1.n29(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.z3p_1)) {
              this.bh_1 = 5;
              suspendResult = executeWebSocketRequest(this.y3p_1, this.z3p_1, this.a3q_1, this);
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
            var tmp_0 = this;
            tmp_0.c3q_1 = GMTDate$default(null, 1, null);
            this.bh_1 = 3;
            suspendResult = toRaw(this.z3p_1, this.b3q_1, this.a3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.d3q_1 = suspendResult;
            this.bh_1 = 4;
            suspendResult = commonFetch(this.z3p_1.x32_1.toString(), this.d3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().t2l_1;
            var body = readBody(CoroutineScope_0(this.a3q_1), rawResponse);
            return new HttpResponseData(status, this.c3q_1, headers, version, body, this.a3q_1);
          case 5:
            return suspendResult;
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
  $executeCOROUTINE$18.$metadata$ = classMeta('$executeCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeWebSocketRequestCOROUTINE$19(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3p_1 = _this__u8e3s4;
    this.l3p_1 = request;
    this.m3p_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$19.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            var tmp_0 = this;
            tmp_0.n3p_1 = GMTDate$default(null, 1, null);
            this.o3p_1 = this.l3p_1.x32_1.toString();
            this.p3p_1 = createWebSocket(this.k3p_1, this.o3p_1, this.l3p_1.z32_1);
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = awaitConnection(this.p3p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ch_1 = 4;
            this.bh_1 = 3;
            continue $sm;
          case 2:
            this.ch_1 = 4;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.eh_1;
              cancel_3(this.m3p_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.o3p_1, cause));
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 3:
            this.ch_1 = 4;
            var session = new JsWebSocketSession(this.m3p_1, this.p3p_1);
            return new HttpResponseData(Companion_getInstance_1().d2m_1, this.n3p_1, Companion_getInstance_4().a2h_1, Companion_getInstance_3().t2l_1, session, this.m3p_1);
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
  $executeWebSocketRequestCOROUTINE$19.$metadata$ = classMeta('$executeWebSocketRequestCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.h3q_1 = config;
    this.i3q_1 = Dispatchers_getInstance().m1k_1;
    this.j3q_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    {
      var tmp0_check = this.h3q_1.u34_1 == null;
      {
      }
      if (!tmp0_check) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Proxy unsupported in Js engine.';
        }
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  JsClientEngine.prototype.k2y = function () {
    return this.h3q_1;
  };
  JsClientEngine.prototype.o34 = function () {
    return this.i3q_1;
  };
  JsClientEngine.prototype.e33 = function () {
    return this.j3q_1;
  };
  JsClientEngine.prototype.m34 = function (data, $cont) {
    var tmp = new $executeCOROUTINE$18(this, data, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  JsClientEngine.$metadata$ = classMeta('JsClientEngine', undefined, undefined, undefined, undefined, HttpClientEngineBase.prototype);
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.d1e();
      var tmp$ret$0;
      $l$block: {
        if (cancellable.l1c()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
        _this__u8e3s4.addEventListener('open', eventListener);
        _this__u8e3s4.addEventListener('error', eventListener);
        cancellable.r1c(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
      }
      tmp$ret$1 = cancellable.m1e();
    }
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    {
      {
      }
      var tmp$ret$3;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          var tmp = JSON;
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_apply.kf(tmp.stringify(_this__u8e3s4, tmp$ret$2));
        }
        tmp$ret$3 = tmp0_apply;
      }
      tmp$ret$4 = tmp$ret$3.toString();
    }
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.k3q_1 = origin;
    captureStack(this, JsError);
  }
  JsError.$metadata$ = classMeta('JsError', undefined, undefined, undefined, undefined, Error.prototype);
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.k2b(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this_mapToKtor;
      }
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance_5();
            tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
          }
          tmp$ret$1 = $cancellable.s3(tmp$ret$0);
        }
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        {
          var tmp0_resumeWithException = new WebSocketException(asString(event));
          var tmp$ret$2;
          {
            var tmp0_failure = Companion_getInstance_5();
            tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
          }
          tmp$ret$3 = $cancellable.s3(tmp$ret$2);
        }
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        tmp = $this_awaitConnection.close();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$20(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function buildObject(block) {
    var tmp$ret$0;
    {
      var tmp = {};
      var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.h3r_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  toRaw$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.h3r_1.v2q(this.i3r_1.r1l(), this);
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
  toRaw$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.h3r_1, completion);
    i.i3r_1 = $this$writer;
    return i;
  };
  toRaw$slambda.$metadata$ = classMeta('toRaw$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.y32_1.r2l_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.g2y_1) {
        var tmp$ret$2;
        {
          var tmp0__get_FOLLOW__lsxog0 = null;
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'follow';
            }
            var tmp0_unsafeCast = tmp$ret$0;
            tmp$ret$1 = tmp0_unsafeCast;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        {
          var tmp1__get_MANUAL__wgvzkm = null;
          var tmp$ret$4;
          {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'manual';
            }
            var tmp0_unsafeCast_0 = tmp$ret$3;
            tmp$ret$4 = tmp0_unsafeCast_0;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        {
          {
          }
          tmp$ret$6 = $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        }
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$20(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3q_1 = _this__u8e3s4;
    this.u3q_1 = clientConfig;
    this.v3q_1 = callContext;
  }
  $toRawCOROUTINE$20.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.w3q_1 = {};
            mergeHeaders(this.t3q_1.z32_1, this.t3q_1.a33_1, toRaw$lambda(this.w3q_1));
            this.x3q_1 = this.t3q_1.a33_1;
            var tmp_0 = this.x3q_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.y3q_1 = this.x3q_1.q2q();
              this.bh_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.x3q_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.bh_1 = 2;
                var tmp_2 = this.x3q_1.t2q();
                suspendResult = tmp_2.d20(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.x3q_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.bh_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.v3q_1, false, toRaw$slambda_0(this.x3q_1, null), 2, null).r1l();
                  suspendResult = tmp_5.d20(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.y3q_1 = null;
                  this.bh_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.y3q_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.bh_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.y3q_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.bh_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.y3q_1;
            return buildObject(toRaw$lambda_0(this.t3q_1, this.w3q_1, this.u3q_1, bodyBytes));
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
  $toRawCOROUTINE$20.$metadata$ = classMeta('$toRawCOROUTINE$20', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
      tmp$ret$0 = tmp0_asDynamic;
    }
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().a22();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).r1l();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.d1e();
      {
        var tmp = _this__u8e3s4.read();
        var tmp_0 = tmp.then(readChunk$lambda(cancellable));
        tmp_0.catch(readChunk$lambda_0(cancellable));
      }
      tmp$ret$0 = cancellable.m1e();
    }
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.r3r_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  channelFromStream$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            this.t3r_1 = this.r3r_1.getReader();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.bh_1 = 8;
              continue $sm;
            }

            this.ch_1 = 5;
            this.bh_1 = 2;
            suspendResult = readChunk(this.t3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u3r_1 = suspendResult;
            if (this.u3r_1 == null) {
              this.ch_1 = 6;
              this.bh_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.v3r_1 = this.u3r_1;
              this.bh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.w3r_1 = this.v3r_1;
            this.bh_1 = 4;
            suspendResult = writeFully(this.s3r_1.r1l(), asByteArray(this.w3r_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ch_1 = 6;
            this.bh_1 = 7;
            continue $sm;
          case 5:
            this.ch_1 = 6;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.eh_1;
              this.t3r_1.cancel(cause);
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 6:
            throw this.eh_1;
          case 7:
            this.ch_1 = 6;
            this.bh_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.r3r_1, completion);
    i.s3r_1 = $this$writer;
    return i;
  };
  channelFromStream$slambda.$metadata$ = classMeta('channelFromStream$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      }
      $cancellable.s3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_5();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = $cancellable.s3(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.d1e();
      {
        var controller = AbortController_0();
        init.signal = controller.signal;
        cancellable.r1c(commonFetch$lambda(controller));
        var tmp;
        if (PlatformUtils_getInstance().s2e_1) {
          tmp = fetch(input, init);
        } else {
          tmp = jsRequireNodeFetch()(input, init);
        }
        var promise = tmp;
        var tmp_0 = commonFetch$lambda_0(cancellable);
        promise.then(tmp_0, commonFetch$lambda_1(cancellable));
      }
      tmp$ret$0 = cancellable.m1e();
    }
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().s2e_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().s2e_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      }
      $cancellable.s3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance_5();
        var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      }
      $cancellable.s3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).r1l();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.g1n(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.z1m(cause);
      return $this_writer.r1l().z1m(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.h1n(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.f3s_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.e32 = function ($this$writer, $cont) {
    var tmp = this.f32($this$writer, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  readBodyNode$slambda.prototype.mh = function (p1, $cont) {
    return this.e32((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.f3s_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.h3s_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.i3s_1 = Channel$default(1, null, null, 6, null);
            this.h3s_1.on('data', readBodyNode$slambda$lambda(this.i3s_1, this.h3s_1));
            this.h3s_1.on('error', readBodyNode$slambda$lambda_0(this.i3s_1, this.g3s_1));
            this.h3s_1.on('end', readBodyNode$slambda$lambda_1(this.i3s_1));
            this.ch_1 = 5;
            this.j3s_1 = this.i3s_1.e();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.bh_1 = 2;
            suspendResult = this.j3s_1.t1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.bh_1 = 4;
              continue $sm;
            }

            this.k3s_1 = this.j3s_1.g();
            this.bh_1 = 3;
            suspendResult = writeFully(this.g3s_1.r1l(), this.k3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.h3s_1.resume();
            this.bh_1 = 1;
            continue $sm;
          case 4:
            this.ch_1 = 6;
            this.bh_1 = 7;
            continue $sm;
          case 5:
            this.ch_1 = 6;
            var tmp_3 = this.eh_1;
            if (tmp_3 instanceof Error) {
              var cause = this.eh_1;
              this.h3s_1.destroy(cause);
              throw cause;
            } else {
              throw this.eh_1;
            }

            break;
          case 6:
            throw this.eh_1;
          case 7:
            this.ch_1 = 6;
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.f32 = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.f3s_1, completion);
    i.g3s_1 = $this$writer;
    return i;
  };
  readBodyNode$slambda.$metadata$ = classMeta('readBodyNode$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.e32($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    {
      var tmp0_let = Companion_getInstance_6().o2r(_this__u8e3s4);
      {
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = it;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        {
          var tmp0_unsafeCast = new Int8Array(data);
          var tmp$ret$2;
          {
            tmp$ret$2 = tmp0_unsafeCast;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.n3s_1.y1e(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.o3s_1.g1n(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.n3s_1.y1e(cause);
      this$0.o3s_1.z1m(cause);
      this$0.p3s_1.y1a(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.n3s_1.x1e(reason);
      this$0.o3s_1.g1n(Close_init_$Create$(reason));
      this$0.o3s_1.h1n(null, 1, null);
      this$0.p3s_1.y1a(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.b3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.d21 = function ($this$launch, $cont) {
    var tmp = this.e21($this$launch, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  JsWebSocketSession$slambda.prototype.mh = function (p1, $cont) {
    return this.d21((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 10;
            var tmp_0 = this;
            tmp_0.d3t_1 = this.b3t_1.p3s_1;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.f3t_1 = null;
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.bh_1 = 3;
            continue $sm;
          case 3:
            this.ch_1 = 9;
            this.ch_1 = 8;
            this.h3t_1 = this.d3t_1.e();
            this.bh_1 = 4;
            continue $sm;
          case 4:
            this.bh_1 = 5;
            suspendResult = this.h3t_1.t1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.bh_1 = 6;
              continue $sm;
            }

            var e = this.h3t_1.g();
            var tmp0_subject = e.c2s_1;
            var tmp0 = tmp0_subject.cg();
            switch (tmp0) {
              case 0:
                var text = e.d2s_1;
                this.b3t_1.m3s_1.send(String$default(text, 0, 0, null, 14, null));
                break;
              case 1:
                var tmp_1 = e.d2s_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.b3t_1.m3s_1.send(frameData);
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.d2s_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.yn();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.kz();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.b25(0, 0, 3, null);
                this.b3t_1.n3s_1.x1e(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.b3t_1)) {
                  this.b3t_1.m3s_1.close();
                } else {
                  this.b3t_1.m3s_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.bh_1 = 4;
            continue $sm;
          case 6:
            this.g3t_1 = Unit_getInstance();
            this.ch_1 = 10;
            this.bh_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            tmp_3.e3t_1 = cancelConsumed(this.d3t_1, this.f3t_1);
            this.bh_1 = 12;
            continue $sm;
          case 8:
            this.ch_1 = 9;
            var tmp_4 = this.eh_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.eh_1;
              var tmp_5 = this;
              this.f3t_1 = e_0;
              throw e_0;
            } else {
              throw this.eh_1;
            }

            break;
          case 9:
            this.ch_1 = 10;
            var t = this.eh_1;
            cancelConsumed(this.d3t_1, this.f3t_1);
            throw t;
          case 10:
            throw this.eh_1;
          case 11:
            cancelConsumed(this.d3t_1, this.f3t_1);
            if (false) {
              this.bh_1 = 1;
              continue $sm;
            }

            this.bh_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ch_1 === 10) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.e21 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.b3t_1, completion);
    i.c3t_1 = $this$launch;
    return i;
  };
  JsWebSocketSession$slambda.$metadata$ = classMeta('JsWebSocketSession$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.d21($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        tmp = this$0.m3s_1.close();
      } else {
        tmp = this$0.m3s_1.close(Codes_INTERNAL_ERROR_getInstance().l2r_1, 'Client failed');
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.l3s_1 = coroutineContext;
    this.m3s_1 = websocket;
    var tmp = this;
    tmp.n3s_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.o3s_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.p3s_1 = Channel$default(2147483647, null, null, 6, null);
    this.q3s_1 = this.o3s_1;
    this.r3s_1 = this.p3s_1;
    this.s3s_1 = this.n3s_1;
    var tmp$ret$2;
    {
      var tmp0__get_ARRAYBUFFER__ua4cvm = null;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'arraybuffer';
        }
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    this.m3s_1.binaryType = tmp$ret$2;
    this.m3s_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.m3s_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.m3s_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.l3s_1.v3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s1a(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.r19 = function () {
    return this.l3s_1;
  };
  JsWebSocketSession.$metadata$ = classMeta('JsWebSocketSession', [DefaultWebSocketSession]);
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.e33 = get_supportedCapabilities;
  HttpClientEngineBase.prototype.l2y = install;
  KtorCallContextElement.prototype.v3 = get;
  KtorCallContextElement.prototype.b4 = fold;
  KtorCallContextElement.prototype.a4 = minusKey;
  KtorCallContextElement.prototype.c4 = plus;
  HttpRequest$1.prototype.r19 = get_coroutineContext;
  JsClientEngine.prototype.l2y = install;
  //endregion
  //region block: init
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = bodyAsText$default;
  _.$_$.b = Js_getInstance;
  _.$_$.c = Phases_getInstance;
  _.$_$.d = Phases_getInstance_1;
  _.$_$.e = EmptyContent_getInstance;
  _.$_$.f = HttpClientPlugin;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = accept;
  _.$_$.i = url;
  _.$_$.j = HttpResponseContainer;
  _.$_$.k = HttpStatement;
  _.$_$.l = HttpClient_0;
  //endregion
  return _;
}(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js')));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map