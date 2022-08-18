(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var isObject = kotlin_kotlin.$_$.w8;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var plus = kotlin_kotlin.$_$.o7;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var Continuation = kotlin_kotlin.$_$.i7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j3;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.b7;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var isInterface = kotlin_kotlin.$_$.u8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var toString = kotlin_kotlin.$_$.jc;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var hashCode = kotlin_kotlin.$_$.k8;
  var equals = kotlin_kotlin.$_$.f8;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.t2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.e7;
  var Key_getInstance = kotlin_kotlin.$_$.i3;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.d7;
  var get_0 = kotlin_kotlin.$_$.f7;
  var minusKey_0 = kotlin_kotlin.$_$.g7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.h7;
  var Key = kotlin_kotlin.$_$.n7;
  var Element = kotlin_kotlin.$_$.m7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var Enum = kotlin_kotlin.$_$.eb;
  var startCoroutine = kotlin_kotlin.$_$.s7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gc;
  var Long = kotlin_kotlin.$_$.jb;
  var intercepted = kotlin_kotlin.$_$.c7;
  var Companion_getInstance = kotlin_kotlin.$_$.t3;
  var RuntimeException = kotlin_kotlin.$_$.mb;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var captureStack = kotlin_kotlin.$_$.x7;
  var Error_0 = kotlin_kotlin.$_$.fb;
  var Error_init_$Init$ = kotlin_kotlin.$_$.p1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var anyToString = kotlin_kotlin.$_$.u7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ic;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var ArrayList = kotlin_kotlin.$_$.a4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s2;
  var createFailure = kotlin_kotlin.$_$.yb;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ub;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var fill = kotlin_kotlin.$_$.l5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var fill$default = kotlin_kotlin.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var NoSuchElementException = kotlin_kotlin.$_$.kb;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var IllegalStateException = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var arrayCopy = kotlin_kotlin.$_$.s4;
  var toLong = kotlin_kotlin.$_$.f9;
  var toLongOrNull = kotlin_kotlin.$_$.pa;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var coerceIn = kotlin_kotlin.$_$.m9;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.i1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.x1a(cause) : $handler(cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.t1a(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  $awaitCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$0.prototype.constructor = $awaitCOROUTINE$0;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.m1c(value, idempotent) : $handler(value, idempotent);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  $awaitCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$1.prototype.constructor = $awaitCOROUTINE$1;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.z1m(cause) : $handler(cause);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.x1a(cause) : $handler(cause);
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  $collectCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$5.prototype.constructor = $collectCOROUTINE$5;
  $emitCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $emitCOROUTINE$12.prototype.constructor = $emitCOROUTINE$12;
  $firstOrNullCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $firstOrNullCOROUTINE$11.prototype.constructor = $firstOrNullCOROUTINE$11;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  CloseableCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  CloseableCoroutineDispatcher.prototype.constructor = CloseableCoroutineDispatcher;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  AbortFlowException.prototype = Object.create(CancellationException.prototype);
  AbortFlowException.prototype.constructor = AbortFlowException;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.n19(parentContext.v3(Key_getInstance_3()));
    this.q19_1 = parentContext.c4(this);
  }
  AbstractCoroutine.prototype.r3 = function () {
    return this.q19_1;
  };
  AbstractCoroutine.prototype.r19 = function () {
    return this.q19_1;
  };
  AbstractCoroutine.prototype.s19 = function () {
    return JobSupport.prototype.s19.call(this);
  };
  AbstractCoroutine.prototype.t19 = function (value) {
  };
  AbstractCoroutine.prototype.u19 = function (cause, handled) {
  };
  AbstractCoroutine.prototype.v19 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.w19 = function (state) {
    if (state instanceof CompletedExceptionally)
      this.u19(state.x19_1, state.z19());
    else {
      this.t19((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.s3 = function (result) {
    var state = this.a1a(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.b1a(state);
  };
  AbstractCoroutine.prototype.b1a = function (state) {
    return this.c1a(state);
  };
  AbstractCoroutine.prototype.d1a = function (exception) {
    handleCoroutineException(this.q19_1, exception);
  };
  AbstractCoroutine.prototype.e1a = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.q19_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.e1a.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.e1a.call(this);
  };
  AbstractCoroutine.prototype.f1a = function (start, receiver, block) {
    start.i1a(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.l1b() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.f1a(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.l1b() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.f1a(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.j1b = function (exception) {
    handleCoroutineException(this.r3(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.s1b_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.o1a = function () {
    startCoroutineCancellable_0(this.s1b_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1c_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.b1c_1.c1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$0.$metadata$ = classMeta('$awaitCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.g1c = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  DeferredCoroutine.$metadata$ = classMeta('DeferredCoroutine', [Deferred, SelectClause1], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.k1c_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.o1a = function () {
    startCoroutineCancellable_0(this.k1c_1, this);
  };
  LazyDeferredCoroutine.$metadata$ = classMeta('LazyDeferredCoroutine', undefined, undefined, undefined, undefined, DeferredCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return _this__u8e3s4.r1c(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.u1c_1 = handle;
  }
  DisposeOnCancel.prototype.v1c = function (cause) {
    return this.u1c_1.w1c();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.u1c_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.d1d();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp_0;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_safe_receiver.k1d();
        }
        if (tmp$ret$0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp$ret$1 = tmp_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.l1a();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.n1d())) {
      var tmp_0 = $this.f1d_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).l1d();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.f1d_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.o1d(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this.r3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop = $this.h1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.b19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.h1d_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop = $this.h1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.b19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.h1d_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.r3().v3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var handle = parent.u1a(true, false, tmp$ret$1, 2, null);
    $this.j1d_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.f1d_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1d($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.q1d();
    $this.r1d(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop = $this.i1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelledContinuation) {
              if (tmp1__anonymous__uwfjfc.w1d()) {
                var tmp1_safe_receiver = onCancellation;
                if (tmp1_safe_receiver == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp$ret$1 = $this.s1d(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.k1());
                  }
                }
                return Unit_getInstance();
              }
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    {
      var tmp0_loop = $this.i1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.n1d(), onCancellation, idempotent);
            if (!$this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            return get_RESUME_TOKEN();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              var tmp;
              if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.a1e_1 === idempotent : false) {
                {
                }
                tmp = get_RESUME_TOKEN();
              } else {
                tmp = null;
              }
              return tmp;
            } else {
              return null;
            }
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.q1d();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.f1d_1 = delegate;
    {
    }
    this.g1d_1 = this.f1d_1.r3();
    this.h1d_1 = atomic$int$1(0);
    this.i1d_1 = atomic$ref$1(Active_getInstance());
    this.j1d_1 = null;
  }
  CancellableContinuationImpl.prototype.c1e = function () {
    return this.f1d_1;
  };
  CancellableContinuationImpl.prototype.r3 = function () {
    return this.g1d_1;
  };
  CancellableContinuationImpl.prototype.l1a = function () {
    return this.i1d_1.a19_1;
  };
  CancellableContinuationImpl.prototype.m1a = function () {
    var tmp = this.l1a();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.l1c = function () {
    var tmp = this.l1a();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.d1e = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.m1a()) {
      handle.w1c();
      this.j1d_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.k1d = function () {
    {
    }
    {
    }
    var state = this.i1d_1.a19_1;
    {
    }
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.a1e_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.q1d();
      return false;
    }
    this.h1d_1.b19_1 = 0;
    this.i1d_1.a19_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.e1e = function () {
    return this.l1a();
  };
  CancellableContinuationImpl.prototype.f1e = function (takenState, cause) {
    var tmp0_loop = this.i1d_1;
    while (true) {
      {
        var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject instanceof CompletedContinuation) {
              {
                var tmp0_check = !tmp1__anonymous__uwfjfc.g1e();
                {
                }
                if (!tmp0_check) {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'Must be called at most once';
                  }
                  var message = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message));
                }
              }
              var update = tmp1__anonymous__uwfjfc.h1e(null, null, null, null, cause, 15, null);
              if (this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                tmp1__anonymous__uwfjfc.i1e(this, cause);
                return Unit_getInstance();
              }
            } else {
              if (this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.r1d = function (cause) {
    {
      var tmp0_loop = this.i1d_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
            return false;
          var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
          if (!this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$1;
            {
              {
              }
              tmp$ret$1 = this.j1e(tmp0_safe_receiver, cause);
            }
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, this.n1d());
          return true;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.k1e = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.r1d(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.j1e = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this.r3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.s1d = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.r3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.l1e = function (parent) {
    return parent.p1a();
  };
  CancellableContinuationImpl.prototype.m1e = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.j1d_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.l1a();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.x19_1, this);
    if (get_isCancellableMode(this.n1d())) {
      var job = this.r3().v3(Key_getInstance_3());
      if (!(job == null) ? !job.s19() : false) {
        var cause = job.p1a();
        this.f1e(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.n1e(state);
  };
  CancellableContinuationImpl.prototype.s3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.n1d();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.t1c = function (value, onCancellation) {
    return resumeImpl(this, value, this.n1d(), onCancellation);
  };
  CancellableContinuationImpl.prototype.r1c = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop = this.i1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Active) {
            if (this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            else {
              if (tmp0_subject instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__uwfjfc.o1e())
                  multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
                  var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x19_1);
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject instanceof CompletedContinuation) {
                  if (!(tmp1__anonymous__uwfjfc.y1d_1 == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  if (tmp1__anonymous__uwfjfc.g1e()) {
                    callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.b1e_1);
                    return Unit_getInstance();
                  }
                  var update = tmp1__anonymous__uwfjfc.h1e(null, cancelHandler, null, null, null, 29, null);
                  if (this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                    return Unit_getInstance();
                } else {
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
                  if (this.i1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                    return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.q1d = function () {
    var tmp0_elvis_lhs = this.j1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.w1c();
    this.j1d_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.m1c = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.o1c = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.p1c = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.q1c = function (token) {
    {
    }
    dispatchResume(this, this.n1d());
  };
  CancellableContinuationImpl.prototype.s1c = function (_this__u8e3s4, value) {
    var tmp = this.f1d_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1c_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.n1d();
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.n1e = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.x1d_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.p1e = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.p1e.call(this, state);
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
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.f1d_1);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.e1a() + '(' + toDebugString(this.f1d_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.e1a = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.x1d_1 = result;
    this.y1d_1 = cancelHandler;
    this.z1d_1 = onCancellation;
    this.a1e_1 = idempotentResume;
    this.b1e_1 = cancelCause;
  }
  CompletedContinuation.prototype.s1e = function () {
    return this.y1d_1;
  };
  CompletedContinuation.prototype.t1e = function () {
    return this.a1e_1;
  };
  CompletedContinuation.prototype.u1e = function () {
    return this.b1e_1;
  };
  CompletedContinuation.prototype.g1e = function () {
    return !(this.b1e_1 == null);
  };
  CompletedContinuation.prototype.i1e = function (cont, cause) {
    var tmp0_safe_receiver = this.y1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = cont.j1e(tmp0_safe_receiver, cause);
      }
    }
    var tmp1_safe_receiver = this.z1d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = cont.s1d(tmp1_safe_receiver, cause);
      }
    }
  };
  CompletedContinuation.prototype.v1e = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.h1e = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.x1d_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.y1d_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.z1d_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.a1e_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.b1e_1;
    return this.v1e(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.x1d_1) + ', cancelHandler=' + this.y1d_1 + ', onCancellation=' + this.z1d_1 + ', idempotentResume=' + toString(this.a1e_1) + ', cancelCause=' + this.b1e_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.x1d_1 == null ? 0 : hashCode(this.x1d_1);
    result = imul(result, 31) + (this.y1d_1 == null ? 0 : hashCode(this.y1d_1)) | 0;
    result = imul(result, 31) + (this.z1d_1 == null ? 0 : hashCode(this.z1d_1)) | 0;
    result = imul(result, 31) + (this.a1e_1 == null ? 0 : hashCode(this.a1e_1)) | 0;
    result = imul(result, 31) + (this.b1e_1 == null ? 0 : hashCode(this.b1e_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.x1d_1, tmp0_other_with_cast.x1d_1))
      return false;
    if (!equals(this.y1d_1, tmp0_other_with_cast.y1d_1))
      return false;
    if (!equals(this.z1d_1, tmp0_other_with_cast.z1d_1))
      return false;
    if (!equals(this.a1e_1, tmp0_other_with_cast.a1e_1))
      return false;
    if (!equals(this.b1e_1, tmp0_other_with_cast.b1e_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.w1e_1 = handler;
  }
  InvokeOnCancel.prototype.v1c = function (cause) {
    this.w1e_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.w1e_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = interfaceMeta('CompletableDeferred', [Deferred]);
  function CompletableDeferred_0(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred_0(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1f_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.h1f_1.c1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$1.$metadata$ = classMeta('$awaitCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.n19(parent);
  }
  CompletableDeferredImpl.prototype.w1a = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.g1c = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  CompletableDeferredImpl.prototype.x1e = function (value) {
    return this.k1f(value);
  };
  CompletableDeferredImpl.prototype.y1e = function (exception) {
    return this.k1f(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  CompletableDeferredImpl.$metadata$ = classMeta('CompletableDeferredImpl', [CompletableDeferred, SelectClause1], undefined, undefined, undefined, JobSupport.prototype);
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.x19_1 = cause;
    this.y19_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.k1 = function () {
    return this.x19_1;
  };
  CompletedExceptionally.prototype.z19 = function () {
    return this.y19_1.e19_1;
  };
  CompletedExceptionally.prototype.o1e = function () {
    return this.y19_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.x19_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.v1d_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.w1d = function () {
    return this.v1d_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          var tmp_1 = recoverStackTrace(exception, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.n1f_1 = result;
    this.o1f_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.n1f_1) + ', onCancellation=' + this.o1f_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.n1f_1 == null ? 0 : hashCode(this.n1f_1);
    result = imul(result, 31) + hashCode(this.o1f_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.n1f_1, tmp0_other_with_cast.n1f_1))
      return false;
    if (!equals(this.o1f_1, tmp0_other_with_cast.o1f_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5());
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.q1f = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.t3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.u3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.kz();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.v3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.s1f(context, exception);
          return Unit_getInstance();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  CoroutineExceptionHandler.$metadata$ = interfaceMeta('CoroutineExceptionHandler', [Element]);
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    {
      var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.u1f_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__qut3iv.prototype.s1f = function (context, exception) {
    return this.u1f_1(context, exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.w1f_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.w1f_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.w1f_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.w1f_1 === tmp0_other_with_cast.w1f_1))
      return false;
    return true;
  };
  CoroutineName.$metadata$ = classMeta('CoroutineName', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.v3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.c4(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.r19().v3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.x1a(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.r19 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.i1a = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.cg();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        break;
      case 2:
        tmp = startCoroutine(block, receiver, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched(block, receiver, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.l1b = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Deferred() {
  }
  Deferred.$metadata$ = interfaceMeta('Deferred', [Job]);
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delay(timeMillis, $cont) {
    if (timeMillis.f1(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.d1e();
      {
        Companion_getInstance();
        if (timeMillis.f1(new Long(-1, 2147483647)) < 0) {
          get_delay(cancellable.r3()).x1f(timeMillis, cancellable);
        }
      }
      tmp$ret$0 = cancellable.m1e();
    }
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.v3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.z1f_1 = new Long(0, 0);
    this.a1g_1 = false;
    this.b1g_1 = null;
  }
  EventLoop.prototype.c1g = function () {
    var tmp0_elvis_lhs = this.b1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.g1g();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.q1e();
    return true;
  };
  EventLoop.prototype.h1g = function (task) {
    var tmp0_elvis_lhs = this.b1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = new ArrayQueue();
        {
        }
        {
          this.b1g_1 = tmp0_also;
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.i1g(task);
  };
  EventLoop.prototype.j1g = function () {
    return this.z1f_1.f1(delta(this, true)) >= 0;
  };
  EventLoop.prototype.k1g = function () {
    var tmp0_safe_receiver = this.b1g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1g();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.m1g = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.z1f_1 = tmp0_this.z1f_1.v4(delta(this, unconfined));
    if (!unconfined)
      this.a1g_1 = true;
  };
  EventLoop.prototype.n1g = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.z1f_1 = tmp0_this.z1f_1.w4(delta(this, unconfined));
    if (this.z1f_1.f1(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.a1g_1) {
      this.o1g();
    }
  };
  EventLoop.prototype.o1g = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.p1g_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.q1g = function () {
    var tmp0_elvis_lhs = this.p1g_1.s1g();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().p1g_1.t1g(tmp0_also);
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.w1c = function () {
  };
  NonDisposableHandle.prototype.b1b = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.s19())
      throw _this__u8e3s4.p1a();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.x1a(CancellationException_init_$Create$_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.v3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.v3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x1a(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.u1g_1 = isActive;
  }
  Empty.prototype.s19 = function () {
    return this.u1g_1;
  };
  Empty.prototype.v1g = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.u1g_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.s19 = function () {
    return true;
  };
  NodeList.prototype.v1g = function () {
    return this;
  };
  NodeList.prototype.z1g = function (state) {
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
          tmp0_apply.kf('List{');
          tmp0_apply.kf(state);
          tmp0_apply.kf('}[');
          var first = true;
          {
            var cur = this.d1h();
            while (!equals(cur, this)) {
              if (cur instanceof JobNode) {
                var tmp0__anonymous__q1qw7t = cur;
                if (first)
                  first = false;
                else {
                  tmp0_apply.kf(', ');
                }
                tmp0_apply.jf(tmp0__anonymous__q1qw7t);
              }
              cur = cur.a1h_1;
            }
          }
          tmp0_apply.kf(']');
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.z1g('Active') : anyToString(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.v1h = function () {
    var tmp = this.u1h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.s19 = function () {
    return true;
  };
  JobNode.prototype.v1g = function () {
    return null;
  };
  JobNode.prototype.w1c = function () {
    return this.v1h().v1a(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.v1h()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.a1i_1.a19_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.a1i_1.a19_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x19_1;
    var wasCancelling = false;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        wasCancelling = state.b1i();
        var exceptions = state.c1i(proposedException);
        var finalCause = getFinalRootCause($this, state, exceptions);
        if (!(finalCause == null))
          addSuppressedExceptions($this, finalCause, exceptions);
        tmp$ret$0 = finalCause;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.j1b(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).o1e();
      }
    }
    if (!wasCancelling)
      $this.g1b(finalException);
    $this.w19(finalState);
    var casSuccess = $this.l19_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.m()) {
      if (state.b1i()) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.v19() : tmp0_elvis_lhs, null, $this);
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      var tmp0_iterator = exceptions.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        {
          tmp$ret$1 = !(element instanceof CancellationException);
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.h(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        var tmp0_iterator_0 = exceptions.e();
        while (tmp0_iterator_0.f()) {
          var element_0 = tmp0_iterator_0.g();
          var tmp$ret$3;
          {
            var tmp;
            if (!(element_0 === first)) {
              tmp = element_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.d() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.d());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.e();
    while (tmp0_iterator.f()) {
      var exception = tmp0_iterator.g();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        {
        }
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.l19_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.g1b(null);
    $this.w19(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.k1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp0_safe_receiver.w1c();
        tmp$ret$0 = $this.j1a(NonDisposableHandle_getInstance());
      }
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x19_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.d1a(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.v1g();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.g1b(cause);
    {
      var exception = null;
      {
        var cur = list.d1h();
        while (!equals(cur, list)) {
          if (cur instanceof JobCancellingNode) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              tmp0__anonymous__q1qw7t.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver = exception;
                var tmp;
                if (tmp0_safe_receiver == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs = tmp;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$1;
                  {
                    {
                    }
                    exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                  }
                } else
                  tmp1_elvis_lhs;
              } else {
                throw $p;
              }
            }
          }
          cur = cur.a1h_1;
        }
      }
      var tmp0_safe_receiver_0 = exception;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$2;
        {
          {
          }
          tmp$ret$2 = $this.d1a(tmp0_safe_receiver_0);
        }
      }
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.h1b())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.k1a();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.b1b(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    {
      var cur = _this__u8e3s4.d1h();
      while (!equals(cur, _this__u8e3s4)) {
        if (cur instanceof JobNode) {
          var tmp0__anonymous__q1qw7t = cur;
          try {
            tmp0__anonymous__q1qw7t.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver = exception;
              var tmp;
              if (tmp0_safe_receiver == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs = tmp;
              if (tmp1_elvis_lhs == null) {
                var tmp$ret$1;
                {
                  {
                  }
                  exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                }
              } else
                tmp1_elvis_lhs;
            } else {
              throw $p;
            }
          }
        }
        cur = cur.a1h_1;
      }
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        tmp$ret$2 = $this.d1a(tmp0_safe_receiver_0);
      }
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.u1g_1)
        return 0;
      if (!$this.l19_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.o1a();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.l19_1.atomicfu$compareAndSet(state, state.d1i_1))
          return -1;
        $this.o1a();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.u1h_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this.l1a() === expect;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.l1h(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.u1g_1 ? list : new InactiveNodeList(list);
    $this.l19_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.w1h(new NodeList());
    var tmp$ret$0;
    {
      tmp$ret$0 = state.a1h_1;
    }
    var list = tmp$ret$0;
    $this.l19_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.l1a();
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
            return false;
          if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
            return true;
        }
      }
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.d1e();
      {
        var tmp$ret$1;
        {
          var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        disposeOnCancellation(cancellable, $this.s1a(tmp$ret$1));
      }
      tmp$ret$2 = cancellable.m1e();
    }
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.l1a();
          var tmp;
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
            tmp = true;
          } else {
            var tmp_0;
            if (tmp0__anonymous__q1qw7t instanceof Finishing) {
              tmp_0 = tmp0__anonymous__q1qw7t.e1i();
            } else {
              tmp_0 = false;
            }
            tmp = tmp_0;
          }
          if (tmp) {
            return get_COMPLETING_ALREADY();
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (!(finalState === get_COMPLETING_RETRY()))
            return finalState;
        }
      }
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.v19() : tmp0_elvis_lhs, null, $this);
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).e1b();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block: {
          var tmp0__anonymous__q1qw7t = $this.l1a();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Finishing) {
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                if (tmp0__anonymous__q1qw7t.f1i())
                  return get_TOO_LATE_TO_CANCEL();
                var wasCancelling = tmp0__anonymous__q1qw7t.b1i();
                if (!(cause == null) ? true : !wasCancelling) {
                  var tmp0_elvis_lhs = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs == null) {
                    var tmp$ret$0;
                    {
                      var tmp0_also = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also;
                      }
                      tmp$ret$0 = tmp0_also;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs;
                  }
                  var causeException = tmp;
                  tmp0__anonymous__q1qw7t.g1i(causeException);
                }
                var tmp$ret$2;
                {
                  var tmp1_takeIf = tmp0__anonymous__q1qw7t.h1i();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = !wasCancelling;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf;
                  } else {
                    tmp_0 = null;
                  }
                  tmp$ret$2 = tmp_0;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var notifyRootCause = tmp$ret$4;
            var tmp1_safe_receiver = notifyRootCause;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp$ret$5;
              {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__q1qw7t.x1h_1, tmp1_safe_receiver);
              }
            }
            return get_COMPLETING_ALREADY();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var tmp2_elvis_lhs = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs == null) {
                var tmp$ret$6;
                {
                  var tmp0_also_0 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0;
                  }
                  tmp$ret$6 = tmp0_also_0;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs;
              }
              var causeException_0 = tmp_1;
              if (tmp0__anonymous__q1qw7t.s19()) {
                if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                  return get_COMPLETING_ALREADY();
              } else {
                var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
                if (finalState === get_COMPLETING_ALREADY()) {
                  var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
                } else if (finalState === get_COMPLETING_RETRY()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block;
                } else
                  return finalState;
              }
            } else {
              return get_TOO_LATE_TO_CANCEL();
            }
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.v1g();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.l19_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    {
      if (finishing.e1i())
        return get_COMPLETING_ALREADY();
      finishing.i1i(true);
      if (!(finishing === state)) {
        if (!$this.l19_1.atomicfu$compareAndSet(state, finishing))
          return get_COMPLETING_RETRY();
      }
      {
      }
      var wasCancelling = finishing.b1i();
      var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = finishing.g1i(tmp0_safe_receiver.x19_1);
        }
      }
      var tmp$ret$2;
      {
        var tmp0_takeIf = finishing.h1i();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        {
          tmp$ret$1 = !wasCancelling;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf;
        } else {
          tmp_0 = null;
        }
        tmp$ret$2 = tmp_0;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
      }
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x19_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.v1g();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var handle = child_1.n1i_1.u1a(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.c1a(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      {
        var tmp0__get_isRemoved__hsfvgr = cur;
        tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.c1h_1;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      {
        var tmp1__get_prevNode__b1i0ed = cur;
        tmp$ret$1 = tmp1__get_prevNode__b1i0ed.b1h_1;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      {
        var tmp2__get_nextNode__ek7k4a = cur;
        tmp$ret$2 = tmp2__get_nextNode__ek7k4a.a1h_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      {
        var tmp3__get_isRemoved__lodk3s = cur;
        tmp$ret$3 = tmp3__get_isRemoved__lodk3s.c1h_1;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.b1i() ? 'Cancelling' : state.e1i() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.s19() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.x1h_1 = list;
    this.y1h_1 = atomic$boolean$1(isCompleting);
    this.z1h_1 = atomic$ref$1(rootCause);
    this.a1i_1 = atomic$ref$1(null);
  }
  Finishing.prototype.v1g = function () {
    return this.x1h_1;
  };
  Finishing.prototype.i1i = function (value) {
    this.y1h_1.e19_1 = value;
  };
  Finishing.prototype.e1i = function () {
    return this.y1h_1.e19_1;
  };
  Finishing.prototype.o1i = function (value) {
    this.z1h_1.a19_1 = value;
  };
  Finishing.prototype.h1i = function () {
    return this.z1h_1.a19_1;
  };
  Finishing.prototype.f1i = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.b1i = function () {
    return !(this.h1i() == null);
  };
  Finishing.prototype.s19 = function () {
    return this.h1i() == null;
  };
  Finishing.prototype.c1i = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        {
          var tmp0_also = allocateList(this);
          {
          }
          {
            tmp0_also.b(eh);
          }
          tmp$ret$0 = tmp0_also;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.h1i();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = list.da(0, tmp0_safe_receiver);
      }
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.b(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.g1i = function (exception) {
    var rootCause = this.h1i();
    if (rootCause == null) {
      this.o1i(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null)
      _set_exceptionsHolder__tqm22h(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        {
          var tmp0_apply = allocateList(this);
          {
          }
          {
            tmp0_apply.b(eh);
            tmp0_apply.b(exception);
          }
          tmp$ret$0 = tmp0_apply;
        }
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.b1i() + ', completing=' + this.e1i() + ', rootCause=' + this.h1i() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.x1h_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.t1i_1 = parent;
    this.u1i_1 = state;
    this.v1i_1 = child;
    this.w1i_1 = proposedUpdate;
  }
  ChildCompletion.prototype.v1c = function (cause) {
    continueCompleting(this.t1i_1, this.u1i_1, this.v1i_1, this.w1i_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.d1j_1 = job;
  }
  AwaitContinuation.prototype.l1e = function (parent) {
    var state = this.d1j_1.l1a();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.h1i();
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
    }
    if (state instanceof CompletedExceptionally)
      return state.x19_1;
    return parent.p1a();
  };
  AwaitContinuation.prototype.e1a = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = classMeta('AwaitContinuation', undefined, undefined, undefined, undefined, CancellableContinuationImpl.prototype);
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
      cont.d1e();
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      disposeOnCancellation(cont, $this.s1a(tmp$ret$1));
      tmp$ret$2 = cont.m1e();
    }
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.l19_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.m19_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.s = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.j1a = function (value) {
    this.m19_1.a19_1 = value;
  };
  JobSupport.prototype.k1a = function () {
    return this.m19_1.a19_1;
  };
  JobSupport.prototype.n19 = function (parent) {
    {
    }
    if (parent == null) {
      this.j1a(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.n1a();
    var handle = parent.f1b(this);
    this.j1a(handle);
    if (this.m1a()) {
      handle.w1c();
      this.j1a(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.l1a = function () {
    {
      var tmp0_loop = this.l19_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
            return tmp1__anonymous__uwfjfc;
          tmp1__anonymous__uwfjfc.e1j(this);
        }
      }
    }
  };
  JobSupport.prototype.s19 = function () {
    var state = this.l1a();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.s19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.m1a = function () {
    var tmp = this.l1a();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.n1a = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.l1a();
          var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
          if (tmp0_subject === 0)
            return false;
          else if (tmp0_subject === 1)
            return true;
        }
      }
    }
  };
  JobSupport.prototype.o1a = function () {
  };
  JobSupport.prototype.p1a = function () {
    var state = this.l1a();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.h1i();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.q1a(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.r1a(state.x19_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.q1a = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.v19() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.r1a = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.q1a(_this__u8e3s4, message);
  };
  JobSupport.prototype.s1a = function (handler) {
    return this.t1a(false, true, handler);
  };
  JobSupport.prototype.t1a = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.l1a();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Empty) {
            if (tmp0__anonymous__q1qw7t.u1g_1) {
              if (this.l19_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var list = tmp0__anonymous__q1qw7t.v1g();
              if (list == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
              } else {
                var rootCause = null;
                var handle = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  {
                    rootCause = tmp0__anonymous__q1qw7t.h1i();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__q1qw7t.e1i();
                      } else {
                        tmp_2 = false;
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block;
                      }
                      if (rootCause == null)
                        return node;
                      handle = node;
                      tmp_0 = Unit_getInstance();
                    }
                    tmp$ret$2 = tmp_0;
                  }
                }
                if (!(rootCause == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause);
                  return handle;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                    return node;
                }
              }
            } else {
              if (invokeImmediately) {
                var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
                invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x19_1);
              }
              return NonDisposableHandle_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.m1f = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      {
        tmp$ret$0 = $cont.r3();
      }
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.v1a = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.l1a();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof JobNode) {
            if (!(tmp0__anonymous__q1qw7t === node))
              return Unit_getInstance();
            if (this.l19_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              if (!(tmp0__anonymous__q1qw7t.v1g() == null)) {
                node.h1h();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.w1a = function () {
    return false;
  };
  JobSupport.prototype.x1a = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.v19() : tmp0_elvis_lhs_0, null, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.z1a(tmp);
  };
  JobSupport.prototype.v19 = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.z1a = function (cause) {
    this.c1b(cause);
  };
  JobSupport.prototype.a1b = function (parentJob) {
    this.c1b(parentJob);
  };
  JobSupport.prototype.b1b = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.c1b(cause) ? this.i1b() : false;
  };
  JobSupport.prototype.c1b = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.w1a()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.c1a(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.d1b = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.v19() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.e1b = function () {
    var state = this.l1a();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.h1i();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.x19_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.k1f = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.l1a();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            return false;
          else if (finalState === get_COMPLETING_WAITING_CHILDREN())
            return true;
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            this.c1a(finalState);
            return true;
          }
        }
      }
    }
  };
  JobSupport.prototype.a1a = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.l1a();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState;
        }
      }
    }
  };
  JobSupport.prototype.f1b = function (child) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = this.u1a(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.d1a = function (exception) {
    throw exception;
  };
  JobSupport.prototype.g1b = function (cause) {
  };
  JobSupport.prototype.h1b = function () {
    return false;
  };
  JobSupport.prototype.i1b = function () {
    return true;
  };
  JobSupport.prototype.j1b = function (exception) {
    return false;
  };
  JobSupport.prototype.w19 = function (state) {
  };
  JobSupport.prototype.c1a = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.k1b() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.k1b = function () {
    return this.e1a() + '{' + stateString(this, this.l1a()) + '}';
  };
  JobSupport.prototype.e1a = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.c1c = function ($cont) {
    $l$loop: while (true) {
      var state = this.l1a();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          {
            var tmp0_recoverAndThrow = state.x19_1;
            throw tmp0_recoverAndThrow;
          }
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.d1i_1 = list;
  }
  InactiveNodeList.prototype.v1g = function () {
    return this.d1i_1;
  };
  InactiveNodeList.prototype.s19 = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.d1i_1.z1g('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.n1i_1 = childJob;
  }
  ChildHandleNode.prototype.v1c = function (cause) {
    return this.n1i_1.a1b(this.v1h());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ChildHandleNode.prototype.b1b = function (cause) {
    return this.v1h().b1b(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.j1j_1 = handler;
    this.k1j_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.v1c = function (cause) {
    if (this.k1j_1.atomicfu$compareAndSet(0, 1))
      this.j1j_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.p1j_1 = handler;
  }
  InvokeOnCompletion.prototype.v1c = function (cause) {
    return this.p1j_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.u1j_1 = continuation;
  }
  ResumeOnCompletion.prototype.v1c = function (cause) {
    var tmp$ret$1;
    {
      var tmp0_resume = this.u1j_1;
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp$ret$1 = tmp0_resume.s3(tmp$ret$0);
    }
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ResumeOnCompletion.$metadata$ = classMeta('ResumeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1j_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.a1k_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.v1c = function (cause) {
    var state = this.v1h().l1a();
    {
    }
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      {
        var tmp0_resumeWithException = this.a1k_1;
        var tmp1_resumeWithException = state.x19_1;
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
        }
        tmp$ret$1 = tmp0_resumeWithException.s3(tmp$ret$0);
      }
    } else {
      var tmp$ret$3;
      {
        var tmp2_resume = this.a1k_1;
        var tmp = unboxState(state);
        var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        var tmp$ret$2;
        {
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
        }
        tmp$ret$3 = tmp2_resume.s3(tmp$ret$2);
      }
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = classMeta('ResumeAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.v1j_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.f1k_1 = child;
  }
  ChildContinuation.prototype.v1c = function (cause) {
    this.f1k_1.k1e(this.f1k_1.l1e(this.v1h()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.k1a();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1h();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.i1b())
        return true;
      var tmp_1 = parentJob.k1a();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v1h();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.n19(parent);
    this.i1k_1 = handlesException(this);
  }
  JobImpl.prototype.w1a = function () {
    return true;
  };
  JobImpl.prototype.i1b = function () {
    return this.i1k_1;
  };
  JobImpl.prototype.l1f = function () {
    return this.k1f(Unit_getInstance());
  };
  JobImpl.prototype.y1e = function (exception) {
    return this.k1f(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.l1k();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.l1k = function () {
    var main = Dispatchers_getInstance().q1k();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.k1k();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.b1b = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = classMeta('SupervisorJobImpl', undefined, undefined, undefined, undefined, JobImpl.prototype);
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.q1f = function (context) {
    return false;
  };
  Unconfined.prototype.r1f = function (context, block) {
    var yieldContext = context.v3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.w1k_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.a1l_1 == null))
        throw recoverStackTrace_0(result.b1l());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
      var tmp$ret$0;
      $l$block_1: {
        var receive = new ReceiveHasNext($this, cancellable);
        while (true) {
          if (enqueueReceive($this.c1l_1, receive)) {
            removeReceiveOnCancel($this.c1l_1, cancellable, receive);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          var result = $this.c1l_1.h1l();
          $this.d1l_1 = result;
          if (result instanceof Closed) {
            if (result.a1l_1 == null) {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  var tmp0_success = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(false);
                }
                tmp$ret$2 = cancellable.s3(tmp$ret$1);
              }
            } else {
              var tmp$ret$4;
              {
                var tmp0_resumeWithException = result.b1l();
                var tmp$ret$3;
                {
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
                }
                tmp$ret$4 = cancellable.s3(tmp$ret$3);
              }
            }
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          if (!(result === get_POLL_FAILED())) {
            var tmp0_safe_receiver = $this.c1l_1.l1l();
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.r3());
            }
            cancellable.t1c(true, tmp);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      tmp$ret$5 = cancellable.m1e();
    }
    return tmp$ret$5;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    {
      var tmp0_also = $this.m1l(receive);
      {
      }
      {
        if (tmp0_also)
          $this.n1l();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return cont.r1c(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.p1l_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.o1l_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.v1c = function (cause) {
    if (this.o1l_1.h1h())
      this.p1l_1.q1l();
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.o1l_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function Itr(channel) {
    this.c1l_1 = channel;
    this.d1l_1 = get_POLL_FAILED();
  }
  Itr.prototype.r1l = function () {
    return this.c1l_1;
  };
  Itr.prototype.s1l = function (_set____db54di) {
    this.d1l_1 = _set____db54di;
  };
  Itr.prototype.t1l = function ($cont) {
    if (!(this.d1l_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.d1l_1);
    this.d1l_1 = this.c1l_1.h1l();
    if (!(this.d1l_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.d1l_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.g = function () {
    var result = this.d1l_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.b1l());
    if (!(result === get_POLL_FAILED())) {
      this.d1l_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = classMeta('Itr', [ChannelIterator]);
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.x1l_1 = iterator;
    this.y1l_1 = cont;
  }
  ReceiveHasNext.prototype.z1l = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.y1l_1.o1c(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1m_1, this.d1m(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.e1m();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.f1m = function (value) {
    this.x1l_1.d1l_1 = value;
    this.y1l_1.q1c(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.g1m = function (closed) {
    var tmp;
    if (closed.a1l_1 == null) {
      tmp = this.y1l_1.n1c(false, null, 2, null);
    } else {
      tmp = this.y1l_1.p1c(closed.b1l());
    }
    var token = tmp;
    if (!(token == null)) {
      this.x1l_1.d1l_1 = closed;
      this.y1l_1.q1c(token);
    }
  };
  ReceiveHasNext.prototype.d1m = function (value) {
    var tmp0_safe_receiver = this.x1l_1.c1l_1.l1l();
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.y1l_1.r3());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  ReceiveHasNext.$metadata$ = classMeta('ReceiveHasNext', undefined, undefined, undefined, undefined, Receive.prototype);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.h1l = function () {
    while (true) {
      var tmp0_elvis_lhs = this.n1m();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.r1m(null);
      if (!(token == null)) {
        {
        }
        send.s1m();
        return send.t1m();
      }
      send.u1m();
    }
  };
  AbstractChannel.prototype.v1m = function () {
    return !(this.w1m() == null) ? this.m1m() : false;
  };
  AbstractChannel.prototype.m1l = function (receive) {
    var tmp;
    if (this.l1m()) {
      var tmp$ret$1;
      $l$block: {
        var tmp0_addLastIfPrev = this.x1m();
        var tmp$ret$0;
        {
          var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.b1h_1;
          tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.l1h(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        var tmp2_addLastIfPrevAndIf = this.x1m();
        var tmp$ret$2;
        {
          var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.b1h_1;
          tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        {
          tmp$ret$4 = this.m1m();
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.l1h(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.x1a = function (cause) {
    if (this.v1m())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.y1m(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.y1m = function (cause) {
    var tmp$ret$0;
    {
      var tmp0_also = this.z1m(cause);
      {
      }
      {
        this.a1n(tmp0_also);
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.a1n = function (wasClosed) {
    var tmp0_elvis_lhs = this.b1n();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.b1h_1;
      }
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      {
      }
      if (!previous.h1h()) {
        previous.q1h();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.c1n(list, closed);
  };
  AbstractChannel.prototype.c1n = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.d1n(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.d() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.h(i);
                tmp1__anonymous__uwfjfc.d1n(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.e = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.e1n = function () {
    var tmp$ret$0;
    {
      var tmp0_also = AbstractSendChannel.prototype.e1n.call(this);
      {
      }
      {
        var tmp;
        if (!(tmp0_also == null)) {
          tmp = !(tmp0_also instanceof Closed);
        } else {
          tmp = false;
        }
        if (tmp)
          this.q1l();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.n1l = function () {
  };
  AbstractChannel.prototype.q1l = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.k1n();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.k1l_1.a19_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.k1l_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.b1h_1;
      }
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.h1h()) {
        previous.q1h();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.g1m(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.d() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp2__anonymous__z9zvc9 = list.h(i);
                tmp2__anonymous__z9zvc9.g1m(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.i1n(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = $this.j1l_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.a1h_1;
    }
    var head = tmp$ret$0;
    if (head === $this.j1l_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    {
      var tmp1__get_prevNode__b1i0ed = $this.j1l_1;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.b1h_1;
    }
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    {
      var tmp0_forEach = $this.j1l_1;
      var cur = tmp0_forEach.d1h();
      while (!equals(cur, tmp0_forEach)) {
        if (cur instanceof LinkedListNode) {
          var tmp1__anonymous__uwfjfc = cur;
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        cur = cur.a1h_1;
      }
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.o1n_1 = element;
  }
  SendBuffered.prototype.p1n = function () {
    return this.o1n_1;
  };
  SendBuffered.prototype.t1m = function () {
    return this.o1n_1;
  };
  SendBuffered.prototype.r1m = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.e1m();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  SendBuffered.prototype.s1m = function () {
  };
  SendBuffered.prototype.d1n = function (closed) {
    {
    }
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.o1n_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel(onUndeliveredElement) {
    this.i1l_1 = onUndeliveredElement;
    this.j1l_1 = new LinkedListHead();
    this.k1l_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.l1l = function () {
    return this.i1l_1;
  };
  AbstractSendChannel.prototype.x1m = function () {
    return this.j1l_1;
  };
  AbstractSendChannel.prototype.f1n = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.e1n();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.z1l(element, null);
      if (!(token == null)) {
        {
        }
        receive.f1m(element);
        return receive.k1m();
      }
    }
  };
  AbstractSendChannel.prototype.b1n = function () {
    var tmp$ret$0;
    {
      var tmp0__get_prevNode__2ljhpg = this.j1l_1;
      tmp$ret$0 = tmp0__get_prevNode__2ljhpg.b1h_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.w1m = function () {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = this.j1l_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.a1h_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.n1m = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.j1l_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.a1h_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.m1h();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.q1n = function (element) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.j1l_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      {
        var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.b1h_1;
        if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
          return tmp2__anonymous__z9zvc9;
        tmp$ret$0 = true;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.l1h(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.g1n = function (element) {
    var result = this.f1n(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().u1n(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.b1n();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().t1n();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().s1n(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().s1n(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.z1m = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.j1l_1;
      var tmp$ret$0;
      {
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.b1h_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.l1h(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      {
        var tmp2__get_prevNode__jhgj3a = this.j1l_1;
        tmp$ret$2 = tmp2__get_prevNode__jhgj3a.b1h_1;
      }
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded)
      invokeOnCloseHandler(this, cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.i1n = function (closed) {
  };
  AbstractSendChannel.prototype.e1n = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.j1l_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.a1h_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.m1h();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.j1n();
  };
  AbstractSendChannel.prototype.j1n = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.u1m = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.a1l_1 = closeCause;
  }
  Closed.prototype.v1n = function () {
    return this.a1l_1;
  };
  Closed.prototype.k1n = function () {
    var tmp0_elvis_lhs = this.a1l_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.b1l = function () {
    var tmp0_elvis_lhs = this.a1l_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.k1m = function () {
    return this;
  };
  Closed.prototype.t1m = function () {
    return this;
  };
  Closed.prototype.r1m = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.e1m();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.s1m = function () {
  };
  Closed.prototype.z1l = function (value, otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.e1m();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.f1m = function (value) {
  };
  Closed.prototype.d1n = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.a1l_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.k1m = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.z1n_1) {
      $this.e1o_1.b19_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.a1o_1;
    var tmp0 = tmp0_subject.cg();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.z1n_1) {
      ensureCapacity($this, currentSize);
      $this.c1o_1[($this.d1o_1 + currentSize | 0) % $this.c1o_1.length | 0] = element;
    } else {
      {
      }
      $this.c1o_1[$this.d1o_1 % $this.c1o_1.length | 0] = null;
      $this.c1o_1[($this.d1o_1 + currentSize | 0) % $this.c1o_1.length | 0] = element;
      $this.d1o_1 = ($this.d1o_1 + 1 | 0) % $this.c1o_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.c1o_1.length) {
      var tmp$ret$0;
      {
        var tmp0_min = imul($this.c1o_1.length, 2);
        var tmp1_min = $this.z1n_1;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      }
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
      }
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.c1o_1[($this.d1o_1 + i | 0) % $this.c1o_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.c1o_1 = newBuffer;
      $this.d1o_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.z1n_1 = capacity;
    this.a1o_1 = onBufferOverflow;
    {
      var tmp0_require = this.z1n_1 >= 1;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.z1n_1 + ' was specified';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    this.b1o_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_min = this.z1n_1;
          tmp$ret$1 = Math.min(tmp0_min, 8);
        }
        var tmp1_arrayOfNulls = tmp$ret$1;
        tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
      }
      var tmp2_apply = tmp$ret$2;
      {
      }
      {
        var tmp_0 = get_EMPTY();
        fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
      }
      tmp$ret$3 = tmp2_apply;
    }
    tmp.c1o_1 = tmp$ret$3;
    this.d1o_1 = 0;
    this.e1o_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.l1m = function () {
    return false;
  };
  ArrayChannel.prototype.m1m = function () {
    return this.e1o_1.b19_1 === 0;
  };
  ArrayChannel.prototype.v1m = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.b1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.v1m.call(this);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.f1n = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.b1o_1;
      var tmp$ret$2;
      $l$block: {
        var size = this.e1o_1.b19_1;
        var tmp0_safe_receiver = this.b1n();
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
        var tmp1_safe_receiver = updateBufferSize(this, size);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          {
            {
            }
            return tmp1_safe_receiver;
          }
        }
        if (size === 0) {
          loop: while (true) {
            var tmp2_elvis_lhs = this.e1n();
            var tmp;
            if (tmp2_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp2_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              this.e1o_1.b19_1 = size;
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).z1l(element, null);
            if (!(token == null)) {
              {
              }
              this.e1o_1.b19_1 = size;
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        enqueueElement(this, size, element);
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$2;
    }
    ensureNotNull(receive).f1m(element);
    return ensureNotNull(receive).k1m();
  };
  ArrayChannel.prototype.h1l = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.b1o_1;
      var size = this.e1o_1.b19_1;
      if (size === 0) {
        var tmp0_elvis_lhs = this.b1n();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.c1o_1[this.d1o_1];
      this.c1o_1[this.d1o_1] = null;
      this.e1o_1.b19_1 = size - 1 | 0;
      var replacement = get_POLL_FAILED();
      if (size === this.z1n_1) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.n1m();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          send = tmp;
          var token = ensureNotNull(send).r1m(null);
          if (!(token == null)) {
            {
            }
            resumed = true;
            replacement = ensureNotNull(send).t1m();
            break loop;
          }
          ensureNotNull(send).u1m();
        }
      }
      var tmp_0;
      if (!(replacement === get_POLL_FAILED())) {
        tmp_0 = !(replacement instanceof Closed);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.e1o_1.b19_1 = size;
        this.c1o_1[(this.d1o_1 + size | 0) % this.c1o_1.length | 0] = replacement;
      }
      this.d1o_1 = (this.d1o_1 + 1 | 0) % this.c1o_1.length | 0;
      tmp$ret$0 = Unit_getInstance();
    }
    if (resumed)
      ensureNotNull(send).s1m();
    return result;
  };
  ArrayChannel.prototype.m1l = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.b1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.m1l.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.a1n = function (wasClosed) {
    var onUndeliveredElement = this.l1l();
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.b1o_1;
      {
        var tmp0_repeat = this.e1o_1.b19_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var value = this.c1o_1[this.d1o_1];
              if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
                undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
              }
              this.c1o_1[this.d1o_1] = get_EMPTY();
              this.d1o_1 = (this.d1o_1 + 1 | 0) % this.c1o_1.length | 0;
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
      this.e1o_1.b19_1 = 0;
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.a1n.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ArrayChannel.prototype.j1n = function () {
    return '(buffer:capacity=' + this.z1n_1 + ',size=' + this.e1o_1.b19_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.f1o_1 = 2147483647;
    this.g1o_1 = 0;
    this.h1o_1 = -1;
    this.i1o_1 = -2;
    this.j1o_1 = -3;
    this.k1o_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.l1o_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        {
          var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
          {
          }
          if (!tmp0_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
            }
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().l1o_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.m1o_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.m1o_1, other.m1o_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    {
      var tmp0_hashCode = this.m1o_1;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.m1o_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.r1n_1 = new Failed();
  }
  Companion.prototype.u1n = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.t1n = function () {
    return _ChannelResult___init__impl__siwsuf(this.r1n_1);
  };
  Companion.prototype.s1n = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = interfaceMeta('ChannelIterator');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
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
          var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
          tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.x1a(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.r1o_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.l1l();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.r1o_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.q1o_1 = new NoOpLock();
    this.r1o_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.l1m = function () {
    return false;
  };
  ConflatedChannel.prototype.m1m = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.q1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = this.r1o_1 === get_EMPTY();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.f1n = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.q1o_1;
      var tmp$ret$1;
      $l$block: {
        var tmp0_safe_receiver = this.b1n();
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
        if (this.r1o_1 === get_EMPTY()) {
          loop: while (true) {
            var tmp1_elvis_lhs = this.e1n();
            var tmp;
            if (tmp1_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp1_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).z1l(element, null);
            if (!(token == null)) {
              {
              }
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        var tmp2_safe_receiver = updateValueLocked(this, element);
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          {
            {
            }
            throw tmp2_safe_receiver;
          }
        }
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$1;
    }
    ensureNotNull(receive).f1m(element);
    return ensureNotNull(receive).k1m();
  };
  ConflatedChannel.prototype.h1l = function () {
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.q1o_1;
      if (this.r1o_1 === get_EMPTY()) {
        var tmp0_elvis_lhs = this.b1n();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.r1o_1;
      this.r1o_1 = get_EMPTY();
      tmp$ret$0 = Unit_getInstance();
    }
    return result;
  };
  ConflatedChannel.prototype.a1n = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.q1o_1;
      undeliveredElementException = updateValueLocked(this, get_EMPTY());
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.a1n.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ConflatedChannel.prototype.m1l = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.q1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.m1l.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.j1n = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.q1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = '(value=' + toString(this.r1o_1) + ')';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.l1m = function () {
    return true;
  };
  LinkedListChannel.prototype.m1m = function () {
    return true;
  };
  LinkedListChannel.prototype.f1n = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.f1n.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.q1n(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.c1n = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.l1l();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.o1n_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.d1n(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.d() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.h(i);
                var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
                if (tmp0_subject_1 instanceof SendBuffered) {
                  var tmp1_safe_receiver_0 = this.l1l();
                  var tmp_3;
                  if (tmp1_safe_receiver_0 == null) {
                    tmp_3 = null;
                  } else {
                    var tmp_4 = tmp1__anonymous__uwfjfc.o1n_1;
                    tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                  }
                  undeliveredElementException = tmp_3;
                } else {
                  tmp1__anonymous__uwfjfc.d1n(closed);
                }
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.l1m = function () {
    return true;
  };
  RendezvousChannel.prototype.m1m = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function asFlow(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1p_1 = _this__u8e3s4;
    this.h1p_1 = collector;
  }
  $collectCOROUTINE$5.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.i1p_1 = this.g1p_1.k1p_1.e();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!this.i1p_1.f()) {
              this.bh_1 = 3;
              continue $sm;
            }

            this.j1p_1 = this.i1p_1.g();
            this.bh_1 = 2;
            suspendResult = this.h1p_1.l1p(this.j1p_1, this);
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
  $collectCOROUTINE$5.$metadata$ = classMeta('$collectCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_0($this_asFlow) {
    this.k1p_1 = $this_asFlow;
  }
  _no_name_provided__qut3iv_0.prototype.m1p = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function Flow() {
  }
  Flow.$metadata$ = interfaceMeta('Flow');
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = interfaceMeta('FlowCollector');
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.n1p_1 === owner))
      throw _this__u8e3s4;
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_1(block);
  }
  function _no_name_provided__qut3iv_1($block) {
    this.o1p_1 = $block;
  }
  _no_name_provided__qut3iv_1.prototype.m1p = function (collector, $cont) {
    return this.o1p_1(collector, $cont);
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Flow]);
  function firstOrNull(_this__u8e3s4, predicate, $cont) {
    var tmp = new $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function $emitCOROUTINE$12(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1q_1 = _this__u8e3s4;
    this.k1q_1 = value;
  }
  $emitCOROUTINE$12.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.bh_1 = 1;
            suspendResult = this.j1q_1.m1q_1(this.k1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.j1q_1.n1q_1._v = this.k1q_1;
              tmp_0.l1q_1 = false;
              this.bh_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.l1q_1 = true;
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.l1q_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.j1q_1);
            } else {
              this.bh_1 = 3;
              continue $sm;
            }

            ;
            break;
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
  $emitCOROUTINE$12.$metadata$ = classMeta('$emitCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_2($predicate, $result) {
    this.m1q_1 = $predicate;
    this.n1q_1 = $result;
  }
  _no_name_provided__qut3iv_2.prototype.l1p = function (value, $cont) {
    var tmp = new $emitCOROUTINE$12(this, value, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [FlowCollector]);
  function $firstOrNullCOROUTINE$11(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1p_1 = _this__u8e3s4;
    this.y1p_1 = predicate;
  }
  $firstOrNullCOROUTINE$11.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.z1p_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.a1q_1 = new _no_name_provided__qut3iv_2(this.y1p_1, this.z1p_1);
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.x1p_1.m1p(this.a1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ch_1 = 4;
            this.bh_1 = 3;
            continue $sm;
          case 2:
            this.ch_1 = 4;
            var tmp_1 = this.eh_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.eh_1;
              checkOwnership(e, this.a1q_1);
              this.bh_1 = 3;
              continue $sm;
            } else {
              throw this.eh_1;
            }

            break;
          case 3:
            this.ch_1 = 4;
            return this.z1p_1._v;
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
  $firstOrNullCOROUTINE$11.$metadata$ = classMeta('$firstOrNullCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ensureCapacity_0($this) {
    var currentSize = $this.d1g_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp0_copyInto = $this.d1g_1;
      var tmp1_copyInto = $this.e1g_1;
      var tmp2_copyInto = tmp0_copyInto.length;
      arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newElements;
    }
    var tmp$ret$2;
    {
      var tmp3_copyInto = $this.d1g_1;
      var tmp4_copyInto = $this.d1g_1.length - $this.e1g_1 | 0;
      var tmp5_copyInto = $this.e1g_1;
      arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
      tmp$ret$2 = newElements;
    }
    $this.d1g_1 = newElements;
    $this.e1g_1 = 0;
    $this.f1g_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(16), null);
    }
    tmp.d1g_1 = tmp$ret$0;
    this.e1g_1 = 0;
    this.f1g_1 = 0;
  }
  ArrayQueue.prototype.l1g = function () {
    return this.e1g_1 === this.f1g_1;
  };
  ArrayQueue.prototype.i1g = function (element) {
    this.d1g_1[this.f1g_1] = element;
    this.f1g_1 = (this.f1g_1 + 1 | 0) & (this.d1g_1.length - 1 | 0);
    if (this.f1g_1 === this.e1g_1)
      ensureCapacity_0(this);
  };
  ArrayQueue.prototype.g1g = function () {
    if (this.e1g_1 === this.f1g_1)
      return null;
    var element = this.d1g_1[this.e1g_1];
    this.d1g_1[this.e1g_1] = null;
    this.e1g_1 = (this.e1g_1 + 1 | 0) & (this.d1g_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.y1c_1.q1f(tmp1_resumeCancellableWith.r3())) {
        tmp1_resumeCancellableWith.a1d_1 = state;
        tmp1_resumeCancellableWith.o1q(get_MODE_CANCELLABLE());
        tmp_0 = tmp1_resumeCancellableWith.y1c_1.r1f(tmp1_resumeCancellableWith.r3(), tmp1_resumeCancellableWith);
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          {
          }
          var eventLoop = ThreadLocalEventLoop_getInstance().q1g();
          if (false ? eventLoop.k1g() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.j1g()) {
            tmp1_resumeCancellableWith.a1d_1 = state;
            tmp1_resumeCancellableWith.o1q(tmp0_executeUnconfined);
            eventLoop.h1g(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            {
              eventLoop.m1g(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_0: {
                    var job = tmp1_resumeCancellableWith.r3().v3(Key_getInstance_3());
                    if (!(job == null) ? !job.s19() : false) {
                      var cause = job.p1a();
                      tmp1_resumeCancellableWith.f1e(state, cause);
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          var tmp0_failure = Companion_getInstance_0();
                          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith.s3(tmp$ret$1);
                      }
                      tmp$ret$3 = true;
                      break $l$block_0;
                    }
                    tmp$ret$3 = false;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      {
                        var tmp0_withContinuationContext = tmp1_resumeCancellableWith.z1c_1;
                        var tmp1_withContinuationContext = tmp1_resumeCancellableWith.b1d_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith.z1c_1.s3(result);
                      }
                    }
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop.c1g())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith.r1e($p, null);
                } else {
                  throw $p;
                }
              }
              finally {
                eventLoop.n1g(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = _this__u8e3s4.s3(result);
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.c1d_1.a19_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.y1c_1 = dispatcher;
    this.z1c_1 = continuation;
    this.a1d_1 = get_UNDEFINED();
    this.b1d_1 = threadContextElements(this.r3());
    this.c1d_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.p1q = function () {
    return this.z1c_1;
  };
  DispatchedContinuation.prototype.r3 = function () {
    return this.z1c_1.r3();
  };
  DispatchedContinuation.prototype.q1q = function () {
    return this.b1d_1;
  };
  DispatchedContinuation.prototype.l1d = function () {
    return !(this.c1d_1.a19_1 == null);
  };
  DispatchedContinuation.prototype.r1q = function () {
    {
      var tmp0_loop = this.c1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
            return Unit_getInstance();
        }
      }
    }
  };
  DispatchedContinuation.prototype.kz = function () {
    this.r1q();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1d();
    }
  };
  DispatchedContinuation.prototype.d1d = function () {
    {
      var tmp0_loop = this.c1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          if (tmp1__anonymous__uwfjfc === null) {
            this.c1d_1.a19_1 = get_REUSABLE_CLAIMED();
            return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
              if (this.c1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
                return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
              }
            } else {
              if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
              } else {
                if (tmp1__anonymous__uwfjfc instanceof Error) {
                } else {
                  var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.p1d = function (continuation) {
    {
      var tmp0_loop = this.c1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
            if (this.c1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
              {
                var tmp0_require = this.c1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require) {
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = 'Failed requirement.';
                    }
                    var message = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message));
                  }
                }
              }
              return tmp1__anonymous__uwfjfc;
            } else {
              var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.o1d = function (cause) {
    {
      var tmp0_loop = this.c1d_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.a19_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
            if (this.c1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
              return true;
          } else {
            if (tmp0_subject instanceof Error)
              return true;
            else {
              if (this.c1d_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
                return false;
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.e1e = function () {
    var state = this.a1d_1;
    {
    }
    this.a1d_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.c1e = function () {
    return this;
  };
  DispatchedContinuation.prototype.s3 = function (result) {
    var context = this.z1c_1.r3();
    var state = toState$default(result, null, 1, null);
    if (this.y1c_1.q1f(context)) {
      this.a1d_1 = state;
      this.o1q(get_MODE_ATOMIC());
      this.y1c_1.r1f(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        {
        }
        var eventLoop = ThreadLocalEventLoop_getInstance().q1g();
        if (false ? eventLoop.k1g() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.j1g()) {
          this.a1d_1 = state;
          this.o1q(tmp0_executeUnconfined);
          eventLoop.h1g(this);
          tmp = true;
        } else {
          {
            eventLoop.m1g(true);
            try {
              {
                var tmp$ret$1;
                {
                  var tmp0_withCoroutineContext = this.r3();
                  var tmp1_withCoroutineContext = this.b1d_1;
                  tmp$ret$1 = this.z1c_1.s3(result);
                }
              }
              $l$loop: while (true) {
                if (!eventLoop.c1g())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.r1e($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.n1g(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.f1e = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.o1f_1(cause);
    }
  };
  DispatchedContinuation.prototype.s1q = function (state) {
    var job = this.r3().v3(Key_getInstance_3());
    if (!(job == null) ? !job.s19() : false) {
      var cause = job.p1a();
      this.f1e(state, cause);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = this.s3(tmp$ret$0);
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.t1q = function (result) {
    var tmp$ret$0;
    {
      var tmp0_withContinuationContext = this.z1c_1;
      var tmp1_withContinuationContext = this.b1d_1;
      tmp$ret$0 = this.z1c_1.s3(result);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.y1c_1 + ', ' + toDebugString(this.z1c_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance().q1g();
    if (doYield ? eventLoop.k1g() : false)
      return false;
    var tmp;
    if (eventLoop.j1g()) {
      _this__u8e3s4.a1d_1 = contState;
      _this__u8e3s4.o1q(mode);
      eventLoop.h1g(_this__u8e3s4);
      tmp = true;
    } else {
      {
        eventLoop.m1g(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.c1g())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.r1e($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.n1g(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.m1d_1 = resumeMode;
  }
  DispatchedTask.prototype.o1q = function (_set____db54di) {
    this.m1d_1 = _set____db54di;
  };
  DispatchedTask.prototype.n1d = function () {
    return this.m1d_1;
  };
  DispatchedTask.prototype.f1e = function (takenState, cause) {
  };
  DispatchedTask.prototype.n1e = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.p1e = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x19_1;
  };
  DispatchedTask.prototype.q1e = function () {
    {
    }
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.c1e();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.z1c_1;
      var tmp$ret$5;
      {
        var tmp0_withContinuationContext = delegate.b1d_1;
        var context = continuation.r3();
        var state = this.e1e();
        var exception = this.p1e(state);
        var job = (exception == null ? get_isCancellableMode(this.m1d_1) : false) ? context.v3(Key_getInstance_3()) : null;
        var tmp_0;
        if (!(job == null) ? !job.s19() : false) {
          var cause = job.p1a();
          this.f1e(state, cause);
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance_0();
            var tmp1_failure = recoverStackTrace(cause, continuation);
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
          }
          tmp_0 = continuation.s3(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception == null)) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_failure_0 = Companion_getInstance_0();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
              }
              tmp$ret$2 = continuation.s3(tmp$ret$1);
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            {
              var tmp2_resume = this.n1e(state);
              var tmp$ret$3;
              {
                var tmp0_success = Companion_getInstance_0();
                tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
              }
              tmp$ret$4 = continuation.s3(tmp$ret$3);
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      {
        var tmp_2;
        try {
          var tmp$ret$6;
          {
            var tmp0_success_0 = Companion_getInstance_0();
            var tmp1_success = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            {
              var tmp2_failure = Companion_getInstance_0();
              tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_3 = tmp$ret$7;
          } else {
            throw $p;
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
      }
      var result = tmp$ret$8;
      this.r1e(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.r1e = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.c1e().r3(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    {
    }
    var delegate = _this__u8e3s4.c1e();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.m1d_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.y1c_1;
      var context = delegate.r3();
      if (dispatcher.q1f(context)) {
        dispatcher.r1f(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.m1g(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.c1g())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.r1e($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.n1g(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().q1g();
    if (eventLoop.j1g()) {
      eventLoop.h1g(_this__u8e3s4);
    } else {
      {
        eventLoop.m1g(true);
        try {
          {
            resume(_this__u8e3s4, _this__u8e3s4.c1e(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.c1g())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.r1e($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.n1g(true);
        }
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.e1e();
    var exception = _this__u8e3s4.p1e(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp1_success = Companion_getInstance_0();
        var tmp2_success = _this__u8e3s4.n1e(state);
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      {
        var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.z1c_1;
        var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.b1d_1;
        tmp$ret$2 = tmp3_resumeUndispatchedWith.z1c_1.s3(result);
      }
    } else
      delegate.s3(result);
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    {
    }
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.b((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.b(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.d() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.h(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.u1q_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.u1q_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.u1q_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.u1q_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.u1q_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          {
          }
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = handleCoroutineException(context, tmp0_safe_receiver);
      }
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.v1q_1 = context;
  }
  ContextScope.prototype.r19 = function () {
    return this.v1q_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.v1q_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function Symbol(symbol) {
    this.w1q_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.w1q_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).t6();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.f1(parsed) <= 0 ? parsed.f1(maxValue) <= 0 : false)) {
      {
        var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      }
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$paksz7(completion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    {
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    }
    completion.s3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = completion;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          tmp$ret$2 = actualCompletion.s3(tmp$ret$1);
        }
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      {
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        {
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
        }
        tmp$ret$4 = actualCompletion.s3(tmp$ret$3);
      }
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = completion;
      }
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            var tmp0_withCoroutineContext = completion.r3();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  tmp$ret$1 = _this__u8e3s4;
                }
                var a = tmp$ret$1;
                tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.mh(receiver, actualCompletion);
              }
              tmp$ret$3 = tmp$ret$2;
            }
            tmp$ret$4 = tmp$ret$3;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          {
            var tmp$ret$6;
            {
              var tmp0_failure = Companion_getInstance_0();
              tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp$ret$7 = actualCompletion.s3(tmp$ret$6);
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        {
          var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
          var tmp$ret$9;
          {
            var tmp0_success = Companion_getInstance_0();
            tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$10 = actualCompletion.s3(tmp$ret$9);
        }
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = interfaceMeta('SelectClause1');
  function CloseableCoroutineDispatcher() {
  }
  CloseableCoroutineDispatcher.$metadata$ = classMeta('CloseableCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().m1k_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        {
          var tmp0_asDynamic = window;
          tmp$ret$0 = tmp0_asDynamic;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        {
          var tmp1_asDynamic = window;
          tmp$ret$1 = tmp1_asDynamic;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.r19().c4(context);
    return (!(combined === Dispatchers_getInstance().m1k_1) ? combined.v3(Key_getInstance()) == null : false) ? combined.c4(Dispatchers_getInstance().m1k_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).dd();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      {
        tmp$ret$1 = _this__u8e3s4;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.m1k_1 = createDefaultDispatcher();
    this.n1k_1 = Unconfined_getInstance();
    this.o1k_1 = new JsMainDispatcher(this.m1k_1, false);
    this.p1k_1 = null;
  }
  Dispatchers.prototype.q1k = function () {
    var tmp0_elvis_lhs = this.p1k_1;
    return tmp0_elvis_lhs == null ? this.o1k_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.a1r_1 = delegate;
    this.b1r_1 = invokeImmediately;
    this.c1r_1 = this.b1r_1 ? this : new JsMainDispatcher(this.a1r_1, true);
  }
  JsMainDispatcher.prototype.k1k = function () {
    return this.c1r_1;
  };
  JsMainDispatcher.prototype.q1f = function (context) {
    return !this.b1r_1;
  };
  JsMainDispatcher.prototype.r1f = function (context, block) {
    return this.a1r_1.r1f(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.l1k();
    return tmp0_elvis_lhs == null ? this.a1r_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.r1f = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.h1r_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.h1r_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.h1r_1, this.h1r_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.h1r_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.k1r = function () {
    process.nextTick(this.u1r().q1r_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.k1r = function () {
    setTimeout(this.u1r().q1r_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.c1s();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.r1r_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.q1r_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.d1s = function () {
    this.r1r_1.k1r();
  };
  ScheduledMessageQueue.prototype.e1s = function () {
    setTimeout(this.q1r_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = $continuation.s1c(this$0, Unit_getInstance());
      }
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.t1r_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.u1r = function () {
    return this.t1r_1;
  };
  SetTimeoutBasedDispatcher.prototype.r1f = function (context, block) {
    this.t1r_1.f1s(block);
  };
  SetTimeoutBasedDispatcher.prototype.x1f = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    continuation.r1c(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.a1s_1 = 16;
    this.b1s_1 = false;
  }
  MessageQueue.prototype.f1s = function (element) {
    this.i1g(element);
    if (!this.b1s_1) {
      this.b1s_1 = true;
      this.d1s();
    }
  };
  MessageQueue.prototype.c1s = function () {
    try {
      {
        var tmp0_repeat = this.a1s_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs = this.g1g();
              var tmp;
              if (tmp0_elvis_lhs == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var element = tmp;
              element.q1e();
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
    }finally {
      if (this.l1g()) {
        this.b1s_1 = false;
      } else {
        this.e1s();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).t6();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.g1s_1 = handle;
  }
  ClearTimeout.prototype.w1c = function () {
    clearTimeout(this.g1s_1);
  };
  ClearTimeout.prototype.v1c = function (cause) {
    this.w1c();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.v1c(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.g1s_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = $continuation.s1c(this$0, Unit_getInstance());
      }
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.i1s_1 = window_0;
    this.j1s_1 = new WindowMessageQueue(this.i1s_1);
  }
  WindowDispatcher.prototype.r1f = function (context, block) {
    return this.j1s_1.f1s(block);
  };
  WindowDispatcher.prototype.x1f = function (timeMillis, continuation) {
    this.i1s_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.p1s_1 ? event.data == this$0.q1s_1 : false) {
        event.stopPropagation();
        tmp = this$0.c1s();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.c1s();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.p1s_1 = window_0;
    this.q1s_1 = 'dispatchCoroutine';
    this.p1s_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.d1s = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.e1s = function () {
    this.p1s_1.postMessage(this.q1s_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      {
        var tmp0_also = new WindowDispatcher(_this__u8e3s4);
        {
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = _this__u8e3s4;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also;
        }
        tmp$ret$2 = tmp0_also;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$_0('Flow was aborted, no more elements needed', this);
    this.n1p_1 = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.$metadata$ = classMeta('AbortFlowException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.h1h = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.a1h_1 = this;
    this.b1h_1 = this;
    this.c1h_1 = false;
  }
  LinkedListNode.prototype.d1h = function () {
    return this.a1h_1;
  };
  LinkedListNode.prototype.i1h = function () {
    return this.a1h_1;
  };
  LinkedListNode.prototype.j1h = function () {
    return this.b1h_1;
  };
  LinkedListNode.prototype.k1h = function () {
    return this.c1h_1;
  };
  LinkedListNode.prototype.l1h = function (node) {
    var prev = this.b1h_1;
    node.a1h_1 = this;
    node.b1h_1 = prev;
    prev.a1h_1 = node;
    this.b1h_1 = node;
  };
  LinkedListNode.prototype.h1h = function () {
    return this.m1h();
  };
  LinkedListNode.prototype.m1h = function () {
    if (this.c1h_1)
      return false;
    var prev = this.b1h_1;
    var next = this.a1h_1;
    prev.a1h_1 = next;
    next.b1h_1 = prev;
    this.c1h_1 = true;
    return true;
  };
  LinkedListNode.prototype.w1h = function (node) {
    if (!(this.a1h_1 === this))
      return false;
    this.l1h(node);
    return true;
  };
  LinkedListNode.prototype.n1h = function (node, condition) {
    if (!condition())
      return false;
    this.l1h(node);
    return true;
  };
  LinkedListNode.prototype.o1h = function (node, predicate) {
    if (!predicate(this.b1h_1))
      return false;
    this.l1h(node);
    return true;
  };
  LinkedListNode.prototype.p1h = function (node, predicate, condition) {
    if (!predicate(this.b1h_1))
      return false;
    if (!condition())
      return false;
    this.l1h(node);
    return true;
  };
  LinkedListNode.prototype.q1h = function () {
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.r1g_1 = null;
  }
  CommonThreadLocal.prototype.s1g = function () {
    var tmp = this.r1g_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.t1g = function (value) {
    this.r1g_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.u1a = invokeOnCompletion$default;
  JobSupport.prototype.y1a = cancel$default;
  JobSupport.prototype.c4 = plus;
  JobSupport.prototype.v3 = get;
  JobSupport.prototype.b4 = fold;
  JobSupport.prototype.a4 = minusKey;
  AbstractCoroutine.prototype.u1a = invokeOnCompletion$default;
  AbstractCoroutine.prototype.y1a = cancel$default;
  AbstractCoroutine.prototype.c4 = plus;
  AbstractCoroutine.prototype.v3 = get;
  AbstractCoroutine.prototype.b4 = fold;
  AbstractCoroutine.prototype.a4 = minusKey;
  StandaloneCoroutine.prototype.u1a = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.y1a = cancel$default;
  StandaloneCoroutine.prototype.c4 = plus;
  StandaloneCoroutine.prototype.v3 = get;
  StandaloneCoroutine.prototype.b4 = fold;
  StandaloneCoroutine.prototype.a4 = minusKey;
  LazyStandaloneCoroutine.prototype.u1a = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.y1a = cancel$default;
  LazyStandaloneCoroutine.prototype.c4 = plus;
  LazyStandaloneCoroutine.prototype.v3 = get;
  LazyStandaloneCoroutine.prototype.b4 = fold;
  LazyStandaloneCoroutine.prototype.a4 = minusKey;
  DeferredCoroutine.prototype.u1a = invokeOnCompletion$default;
  DeferredCoroutine.prototype.y1a = cancel$default;
  DeferredCoroutine.prototype.c4 = plus;
  DeferredCoroutine.prototype.v3 = get;
  DeferredCoroutine.prototype.b4 = fold;
  DeferredCoroutine.prototype.a4 = minusKey;
  LazyDeferredCoroutine.prototype.u1a = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.y1a = cancel$default;
  LazyDeferredCoroutine.prototype.c4 = plus;
  LazyDeferredCoroutine.prototype.v3 = get;
  LazyDeferredCoroutine.prototype.b4 = fold;
  LazyDeferredCoroutine.prototype.a4 = minusKey;
  CancellableContinuationImpl.prototype.n1c = tryResume$default;
  CompletableDeferredImpl.prototype.u1a = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.y1a = cancel$default;
  CompletableDeferredImpl.prototype.c4 = plus;
  CompletableDeferredImpl.prototype.v3 = get;
  CompletableDeferredImpl.prototype.b4 = fold;
  CompletableDeferredImpl.prototype.a4 = minusKey;
  CoroutineDispatcher.prototype.v3 = get_0;
  CoroutineDispatcher.prototype.b4 = fold;
  CoroutineDispatcher.prototype.a4 = minusKey_0;
  CoroutineDispatcher.prototype.c4 = plus;
  _no_name_provided__qut3iv.prototype.v3 = get;
  _no_name_provided__qut3iv.prototype.b4 = fold;
  _no_name_provided__qut3iv.prototype.a4 = minusKey;
  _no_name_provided__qut3iv.prototype.c4 = plus;
  CoroutineName.prototype.v3 = get;
  CoroutineName.prototype.b4 = fold;
  CoroutineName.prototype.a4 = minusKey;
  CoroutineName.prototype.c4 = plus;
  EventLoop.prototype.c4 = plus;
  EventLoop.prototype.v3 = get_0;
  EventLoop.prototype.b4 = fold;
  EventLoop.prototype.a4 = minusKey_0;
  AwaitContinuation.prototype.n1c = tryResume$default;
  JobImpl.prototype.u1a = invokeOnCompletion$default;
  JobImpl.prototype.y1a = cancel$default;
  JobImpl.prototype.c4 = plus;
  JobImpl.prototype.v3 = get;
  JobImpl.prototype.b4 = fold;
  JobImpl.prototype.a4 = minusKey;
  MainCoroutineDispatcher.prototype.c4 = plus;
  MainCoroutineDispatcher.prototype.v3 = get_0;
  MainCoroutineDispatcher.prototype.b4 = fold;
  MainCoroutineDispatcher.prototype.a4 = minusKey_0;
  SupervisorJobImpl.prototype.u1a = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.y1a = cancel$default;
  SupervisorJobImpl.prototype.c4 = plus;
  SupervisorJobImpl.prototype.v3 = get;
  SupervisorJobImpl.prototype.b4 = fold;
  SupervisorJobImpl.prototype.a4 = minusKey;
  Unconfined.prototype.c4 = plus;
  Unconfined.prototype.v3 = get_0;
  Unconfined.prototype.b4 = fold;
  Unconfined.prototype.a4 = minusKey_0;
  AbstractSendChannel.prototype.h1n = close$default;
  AbstractChannel.prototype.y1a = cancel$default_0;
  AbstractChannel.prototype.h1n = close$default;
  ArrayChannel.prototype.y1a = cancel$default_0;
  ArrayChannel.prototype.h1n = close$default;
  ConflatedChannel.prototype.y1a = cancel$default_0;
  ConflatedChannel.prototype.h1n = close$default;
  LinkedListChannel.prototype.y1a = cancel$default_0;
  LinkedListChannel.prototype.h1n = close$default;
  RendezvousChannel.prototype.y1a = cancel$default_0;
  RendezvousChannel.prototype.h1n = close$default;
  JsMainDispatcher.prototype.c4 = plus;
  JsMainDispatcher.prototype.v3 = get_0;
  JsMainDispatcher.prototype.b4 = fold;
  JsMainDispatcher.prototype.a4 = minusKey_0;
  UnconfinedEventLoop.prototype.c4 = plus;
  UnconfinedEventLoop.prototype.v3 = get_0;
  UnconfinedEventLoop.prototype.b4 = fold;
  UnconfinedEventLoop.prototype.a4 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.c4 = plus;
  SetTimeoutBasedDispatcher.prototype.v3 = get_0;
  SetTimeoutBasedDispatcher.prototype.b4 = fold;
  SetTimeoutBasedDispatcher.prototype.a4 = minusKey_0;
  NodeDispatcher.prototype.c4 = plus;
  NodeDispatcher.prototype.v3 = get_0;
  NodeDispatcher.prototype.b4 = fold;
  NodeDispatcher.prototype.a4 = minusKey_0;
  SetTimeoutDispatcher.prototype.c4 = plus;
  SetTimeoutDispatcher.prototype.v3 = get_0;
  SetTimeoutDispatcher.prototype.b4 = fold;
  SetTimeoutDispatcher.prototype.a4 = minusKey_0;
  WindowDispatcher.prototype.c4 = plus;
  WindowDispatcher.prototype.v3 = get_0;
  WindowDispatcher.prototype.b4 = fold;
  WindowDispatcher.prototype.a4 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = firstOrNull;
  _.$_$.b = delay;
  _.$_$.c = Channel$default;
  _.$_$.d = CompletableDeferred$default;
  _.$_$.e = cancel$default;
  _.$_$.f = invokeOnCompletion$default;
  _.$_$.g = Job$default;
  _.$_$.h = SupervisorJob$default;
  _.$_$.i = async$default;
  _.$_$.j = cancel$default_1;
  _.$_$.k = launch$default;
  _.$_$.l = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.m = Factory_getInstance;
  _.$_$.n = Key_getInstance_0;
  _.$_$.o = Key_getInstance_1;
  _.$_$.p = Dispatchers_getInstance;
  _.$_$.q = GlobalScope_getInstance;
  _.$_$.r = Key_getInstance_3;
  _.$_$.s = cancelConsumed;
  _.$_$.t = FlowCollector;
  _.$_$.u = Flow;
  _.$_$.v = asFlow;
  _.$_$.w = LinkedListNode;
  _.$_$.x = recoverStackTrace;
  _.$_$.y = CancellableContinuationImpl;
  _.$_$.z = CloseableCoroutineDispatcher;
  _.$_$.a1 = CompletableJob;
  _.$_$.b1 = CoroutineExceptionHandler;
  _.$_$.c1 = CoroutineName;
  _.$_$.d1 = CoroutineScope_0;
  _.$_$.e1 = CoroutineScope;
  _.$_$.f1 = DisposableHandle;
  _.$_$.g1 = Job_0;
  _.$_$.h1 = Job;
  _.$_$.i1 = get_MODE_CANCELLABLE;
  _.$_$.j1 = SupervisorJob;
  _.$_$.k1 = cancel;
  _.$_$.l1 = cancel_2;
  _.$_$.m1 = cancel_0;
  _.$_$.n1 = cancel_1;
  _.$_$.o1 = get_job;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js')));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map