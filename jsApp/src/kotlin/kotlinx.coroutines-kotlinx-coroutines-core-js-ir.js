(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.i2;
  var isObject = kotlin_kotlin.$_$.z1;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var plus = kotlin_kotlin.$_$.m1;
  var get = kotlin_kotlin.$_$.i1;
  var fold = kotlin_kotlin.$_$.h1;
  var minusKey = kotlin_kotlin.$_$.j1;
  var Continuation = kotlin_kotlin.$_$.g1;
  var classMeta = kotlin_kotlin.$_$.s1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.z;
  var interfaceMeta = kotlin_kotlin.$_$.x1;
  var isInterface = kotlin_kotlin.$_$.y1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.o2;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y;
  var objectMeta = kotlin_kotlin.$_$.a2;
  var hashCode = kotlin_kotlin.$_$.w1;
  var equals = kotlin_kotlin.$_$.t1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.o;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.c1;
  var Key_getInstance = kotlin_kotlin.$_$.q;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b1;
  var get_0 = kotlin_kotlin.$_$.d1;
  var minusKey_0 = kotlin_kotlin.$_$.e1;
  var ContinuationInterceptor = kotlin_kotlin.$_$.f1;
  var Key = kotlin_kotlin.$_$.l1;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.l;
  var Enum = kotlin_kotlin.$_$.e2;
  var startCoroutine = kotlin_kotlin.$_$.p1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.m2;
  var Long = kotlin_kotlin.$_$.g2;
  var intercepted = kotlin_kotlin.$_$.a1;
  var Companion_getInstance = kotlin_kotlin.$_$.s;
  var RuntimeException = kotlin_kotlin.$_$.h2;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.k;
  var captureStack = kotlin_kotlin.$_$.r1;
  var Error_0 = kotlin_kotlin.$_$.f2;
  var Error_init_$Init$ = kotlin_kotlin.$_$.g;
  var Element = kotlin_kotlin.$_$.k1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.x;
  var ArrayList = kotlin_kotlin.$_$.v;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var anyToString = kotlin_kotlin.$_$.q1;
  var UnsupportedOperationException = kotlin_kotlin.$_$.j2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.m;
  var fillArrayVal = kotlin_kotlin.$_$.u1;
  var arrayCopy = kotlin_kotlin.$_$.w;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t;
  var createFailure = kotlin_kotlin.$_$.k2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.n;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.l2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.v1;
  var coerceIn = kotlin_kotlin.$_$.c2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.qa(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
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
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
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
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.l9(parentContext.o1(Key_getInstance_2()));
    }
    this.o9_1 = parentContext.v1(this);
  }
  AbstractCoroutine.prototype.k1 = function () {
    return this.o9_1;
  };
  AbstractCoroutine.prototype.p9 = function () {
    return this.o9_1;
  };
  AbstractCoroutine.prototype.q9 = function () {
    return JobSupport.prototype.q9.call(this);
  };
  AbstractCoroutine.prototype.r9 = function (value) {
  };
  AbstractCoroutine.prototype.s9 = function (cause, handled) {
  };
  AbstractCoroutine.prototype.t9 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.u9 = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.s9(state.v9_1, state.x9());
    } else {
      this.r9((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.l1 = function (result) {
    var state = this.y9(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.z9(state);
  };
  AbstractCoroutine.prototype.z9 = function (state) {
    return this.aa(state);
  };
  AbstractCoroutine.prototype.ba = function (exception) {
    handleCoroutineException(this.o9_1, exception);
  };
  AbstractCoroutine.prototype.ca = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.o9_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.ca.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.ca.call(this);
  };
  AbstractCoroutine.prototype.da = function (start, receiver, block) {
    start.ga(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.fb() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.da(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.db = function (exception) {
    handleCoroutineException(this.o9_1, exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.mb_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.ma = function () {
    startCoroutineCancellable_0(this.mb_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.ja();
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
    if (get_isReusableMode($this.cc_1)) {
      var tmp_0 = $this.qb_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).bc();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.qb_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.dc(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.k1(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.sb_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.d9_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.sb_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.sb_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.d9_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.sb_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.k1().o1(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.ra(true, false, tmp$ret$1, 2, null);
    $this.ub_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.qb_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ec($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.fc();
    $this.gc(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
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
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
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
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.tb_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.lc()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.hc(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.v9_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.fc();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.qb_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.rb_1 = this.qb_1.k1();
    this.sb_1 = atomic$int$1(0);
    this.tb_1 = atomic$ref$1(Active_getInstance());
    this.ub_1 = null;
  }
  CancellableContinuationImpl.prototype.mc = function () {
    return this.qb_1;
  };
  CancellableContinuationImpl.prototype.k1 = function () {
    return this.rb_1;
  };
  CancellableContinuationImpl.prototype.ja = function () {
    return this.tb_1.c9_1;
  };
  CancellableContinuationImpl.prototype.ka = function () {
    var tmp = this.ja();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.nc = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ka()) {
      handle.oc();
      this.ub_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.pc = function () {
    return this.ja();
  };
  CancellableContinuationImpl.prototype.qc = function (takenState, cause) {
    var tmp0_loop = this.tb_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.wc();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.xc(null, null, null, null, cause, 15, null);
            if (this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.yc(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.gc = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tb_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.zc(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.cc_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.ad = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.gc(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.zc = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.k1(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.hc = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.k1(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.bd = function (parent) {
    return parent.na();
  };
  CancellableContinuationImpl.prototype.cd = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.ub_1 == null) {
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
    var state = this.ja();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.v9_1, this);
    if (get_isCancellableMode(this.cc_1)) {
      var job = this.k1().o1(Key_getInstance_2());
      if (!(job == null) ? !job.q9() : false) {
        var cause = job.na();
        this.qc(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.dd(state);
  };
  CancellableContinuationImpl.prototype.l1 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.cc_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.nb = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.tb_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.ed()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v9_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.sc_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.wc()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.vc_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.xc(null, cancelHandler, null, null, null, 29, null);
              if (this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.tb_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.fc = function () {
    var tmp0_elvis_lhs = this.ub_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.oc();
    this.ub_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.ob = function (_this__u8e3s4, value) {
    var tmp = this.qb_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wb_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.cc_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.dd = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.rc_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.fd = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.fd.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.qb_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.ca() + '(' + toDebugString(this.qb_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.ca = function () {
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
    this.rc_1 = result;
    this.sc_1 = cancelHandler;
    this.tc_1 = onCancellation;
    this.uc_1 = idempotentResume;
    this.vc_1 = cancelCause;
  }
  CompletedContinuation.prototype.jd = function () {
    return this.sc_1;
  };
  CompletedContinuation.prototype.kd = function () {
    return this.vc_1;
  };
  CompletedContinuation.prototype.wc = function () {
    return !(this.vc_1 == null);
  };
  CompletedContinuation.prototype.yc = function (cont, cause) {
    var tmp0_safe_receiver = this.sc_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.zc(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.tc_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.hc(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.ld = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.xc = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.rc_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.sc_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.tc_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.uc_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.vc_1;
    return this.ld(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.rc_1) + ', cancelHandler=' + this.sc_1 + ', onCancellation=' + this.tc_1 + ', idempotentResume=' + toString(this.uc_1) + ', cancelCause=' + this.vc_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.rc_1 == null ? 0 : hashCode(this.rc_1);
    result = imul(result, 31) + (this.sc_1 == null ? 0 : hashCode(this.sc_1)) | 0;
    result = imul(result, 31) + (this.tc_1 == null ? 0 : hashCode(this.tc_1)) | 0;
    result = imul(result, 31) + (this.uc_1 == null ? 0 : hashCode(this.uc_1)) | 0;
    result = imul(result, 31) + (this.vc_1 == null ? 0 : hashCode(this.vc_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.rc_1, tmp0_other_with_cast.rc_1))
      return false;
    if (!equals(this.sc_1, tmp0_other_with_cast.sc_1))
      return false;
    if (!equals(this.tc_1, tmp0_other_with_cast.tc_1))
      return false;
    if (!equals(this.uc_1, tmp0_other_with_cast.uc_1))
      return false;
    if (!equals(this.vc_1, tmp0_other_with_cast.vc_1))
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
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.md_1 = handler;
  }
  InvokeOnCancel.prototype.nd = function (cause) {
    this.md_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.md_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
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
    this.v9_1 = cause;
    this.w9_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.r2 = function () {
    return this.v9_1;
  };
  CompletedExceptionally.prototype.x9 = function () {
    return this.w9_1.g9_1;
  };
  CompletedExceptionally.prototype.ed = function () {
    return this.w9_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.v9_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.kc_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.lc = function () {
    return this.kc_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.od_1 = result;
    this.pd_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.od_1) + ', onCancellation=' + this.pd_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.od_1 == null ? 0 : hashCode(this.od_1);
    result = imul(result, 31) + hashCode(this.pd_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.od_1, tmp0_other_with_cast.od_1))
      return false;
    if (!equals(this.pd_1, tmp0_other_with_cast.pd_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
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
  CoroutineDispatcher.prototype.rd = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.m1 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.n1 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.td();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.o1(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.ud(context, exception);
        return Unit_getInstance();
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
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.p9 = function () {
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
  CoroutineStart.prototype.ga = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.k7_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
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
  CoroutineStart.prototype.fb = function () {
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
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delay(timeMillis, $cont) {
    if (timeMillis.m(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.nc();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance();
    if (timeMillis.m(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.k1()).vd(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.cd();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.o1(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.xd_1 = new Long(0, 0);
    this.yd_1 = false;
    this.zd_1 = null;
  }
  EventLoop.prototype.ae = function () {
    var tmp0_elvis_lhs = this.zd_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.ee();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.hd();
    return true;
  };
  EventLoop.prototype.fe = function (task) {
    var tmp0_elvis_lhs = this.zd_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.zd_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ge(task);
  };
  EventLoop.prototype.he = function () {
    return this.xd_1.m(delta(this, true)) >= 0;
  };
  EventLoop.prototype.ie = function () {
    var tmp0_safe_receiver = this.zd_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.je();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.ke = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.xd_1 = tmp0_this.xd_1.p7(delta(this, unconfined));
    if (!unconfined)
      this.yd_1 = true;
  };
  EventLoop.prototype.le = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.xd_1 = tmp0_this.xd_1.q7(delta(this, unconfined));
    if (this.xd_1.m(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.yd_1) {
      this.me();
    }
  };
  EventLoop.prototype.me = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ne_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.oe = function () {
    var tmp0_elvis_lhs = this.ne_1.qe();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ne_1.re(tmp0_also);
      tmp$ret$0 = tmp0_also;
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
  NonDisposableHandle.prototype.oc = function () {
  };
  NonDisposableHandle.prototype.va = function (cause) {
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
    this.se_1 = isActive;
  }
  Empty.prototype.q9 = function () {
    return this.se_1;
  };
  Empty.prototype.te = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.se_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.q9 = function () {
    return true;
  };
  NodeList.prototype.te = function () {
    return this;
  };
  NodeList.prototype.xe = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.y6('List{');
    tmp0_apply.y6(state);
    tmp0_apply.y6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.ye_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.y6(', ');
        }
        tmp0_apply.x6(tmp0__anonymous__q1qw7t);
      }
      cur = cur.ye_1;
    }
    tmp0_apply.y6(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.xe('Active') : LinkedListHead.prototype.toString.call(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.mf = function () {
    var tmp = this.lf_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.q9 = function () {
    return true;
  };
  JobNode.prototype.te = function () {
    return null;
  };
  JobNode.prototype.oc = function () {
    return this.mf().sa(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.mf()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.sf_1.c9_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.sf_1.c9_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v9_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.tf();
    var exceptions = state.uf(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
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
      var handled = cancelParent($this, finalException) ? true : $this.db(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).ed();
      }
    }
    if (!wasCancelling) {
      $this.ab(finalException);
    }
    $this.u9(finalState);
    var casSuccess = $this.j9_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.e()) {
      if (state.tf()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.t9() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.b();
      while (tmp0_iterator.c()) {
        var element = tmp0_iterator.d();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
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
    var first = exceptions.a3(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.b();
        while (tmp0_iterator_0.c()) {
          var element_0 = tmp0_iterator_0.d();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
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
    if (exceptions.n() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.n());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.b();
    while (tmp0_iterator.c()) {
      var exception = tmp0_iterator.d();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.i3(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.j9_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.ab(null);
    $this.u9(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.ia();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.oc();
      $this.ha(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v9_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.ba(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.te();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.ab(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.ye_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
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
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.ye_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ba(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.bb())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.ia();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.va(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.ye_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
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
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.ye_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ba(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.se_1)
        return 0;
      if (!$this.j9_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.ma();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.j9_1.atomicfu$compareAndSet(state, state.vf_1))
          return -1;
        $this.ma();
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
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.lf_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.ja() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.ff(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.se_1 ? list : new InactiveNodeList(list);
    $this.j9_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.of(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.ye_1;
    var list = tmp$ret$0;
    $this.j9_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.ja();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.wf();
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
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.t9() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ya();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.ja();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.xf())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.tf();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.yf(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.zf();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.pf_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.q9()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
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
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.te();
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
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.j9_1.atomicfu$compareAndSet(state, cancelling))
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
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.wf())
      return get_COMPLETING_ALREADY();
    finishing.ag(true);
    if (!(finishing === state)) {
      if (!$this.j9_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.tf();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.yf(tmp0_safe_receiver.v9_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.zf();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v9_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.te();
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
    $l$1: do {
      $l$0: do {
        var tmp = child_0.fg_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.ra(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.aa(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.af_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.ze_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.ye_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.af_1;
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
      tmp = state.tf() ? 'Cancelling' : state.wf() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.q9() ? 'Active' : 'New';
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
    this.pf_1 = list;
    this.qf_1 = atomic$boolean$1(isCompleting);
    this.rf_1 = atomic$ref$1(rootCause);
    this.sf_1 = atomic$ref$1(null);
  }
  Finishing.prototype.te = function () {
    return this.pf_1;
  };
  Finishing.prototype.ag = function (value) {
    this.qf_1.g9_1 = value;
  };
  Finishing.prototype.wf = function () {
    return this.qf_1.g9_1;
  };
  Finishing.prototype.gg = function (value) {
    this.rf_1.c9_1 = value;
  };
  Finishing.prototype.zf = function () {
    return this.rf_1.c9_1;
  };
  Finishing.prototype.xf = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.tf = function () {
    return !(this.zf() == null);
  };
  Finishing.prototype.q9 = function () {
    return this.zf() == null;
  };
  Finishing.prototype.uf = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.i3(eh);
        tmp$ret$0 = tmp0_also;
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
    var rootCause = this.zf();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.v3(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.i3(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.yf = function (exception) {
    var rootCause = this.zf();
    if (rootCause == null) {
      this.gg(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.i3(eh);
        tmp0_apply.i3(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).i3(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.tf() + ', completing=' + this.wf() + ', rootCause=' + this.zf() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.pf_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.lg_1 = parent;
    this.mg_1 = state;
    this.ng_1 = child;
    this.og_1 = proposedUpdate;
  }
  ChildCompletion.prototype.nd = function (cause) {
    continueCompleting(this.lg_1, this.mg_1, this.ng_1, this.og_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function JobSupport(active) {
    this.j9_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.k9_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.w = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.ha = function (value) {
    this.k9_1.c9_1 = value;
  };
  JobSupport.prototype.ia = function () {
    return this.k9_1.c9_1;
  };
  JobSupport.prototype.l9 = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ha(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.la();
    var handle = parent.za(this);
    this.ha(handle);
    if (this.ka()) {
      handle.oc();
      this.ha(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.ja = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.j9_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.pg(this);
    }
  };
  JobSupport.prototype.q9 = function () {
    var state = this.ja();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.q9();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.ka = function () {
    var tmp = this.ja();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.la = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.ja();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.ma = function () {
  };
  JobSupport.prototype.na = function () {
    var state = this.ja();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.zf();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.oa(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.pa(state.v9_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.oa = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.t9() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.pa = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.oa(_this__u8e3s4, message);
  };
  JobSupport.prototype.qa = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.ja();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.se_1) {
            if (this.j9_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.te();
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
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.zf();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.wf();
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
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v9_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.sa = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.ja();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.j9_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.te() == null)) {
            node.nf();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.ta = function () {
    return false;
  };
  JobSupport.prototype.t9 = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.ua = function (parentJob) {
    this.wa(parentJob);
  };
  JobSupport.prototype.va = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.wa(cause) ? this.cb() : false;
  };
  JobSupport.prototype.wa = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ta()) {
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
      this.aa(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.xa = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.t9() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.ya = function () {
    var state = this.ja();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.zf();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.v9_1;
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
  JobSupport.prototype.y9 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.ja();
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
  };
  JobSupport.prototype.za = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.ra(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.ba = function (exception) {
    throw exception;
  };
  JobSupport.prototype.ab = function (cause) {
  };
  JobSupport.prototype.bb = function () {
    return false;
  };
  JobSupport.prototype.cb = function () {
    return true;
  };
  JobSupport.prototype.db = function (exception) {
    return false;
  };
  JobSupport.prototype.u9 = function (state) {
  };
  JobSupport.prototype.aa = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.eb() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.eb = function () {
    return this.ca() + '{' + stateString(this, this.ja()) + '}';
  };
  JobSupport.prototype.ca = function () {
    return get_classSimpleName(this);
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
    this.vf_1 = list;
  }
  InactiveNodeList.prototype.te = function () {
    return this.vf_1;
  };
  InactiveNodeList.prototype.q9 = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.vf_1.xe('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.fg_1 = childJob;
  }
  ChildHandleNode.prototype.nd = function (cause) {
    return this.fg_1.ua(this.mf());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  ChildHandleNode.prototype.va = function (cause) {
    return this.mf().va(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.ug_1 = handler;
    this.vg_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.nd = function (cause) {
    if (this.vg_1.atomicfu$compareAndSet(0, 1))
      this.ug_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ah_1 = handler;
  }
  InvokeOnCompletion.prototype.nd = function (cause) {
    return this.ah_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.bh_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.gh_1 = child;
  }
  ChildContinuation.prototype.nd = function (cause) {
    this.gh_1.ad(this.gh_1.bd(this.mf()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
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
    var tmp0_elvis_lhs = this.jh();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.jh = function () {
    var main = Dispatchers_getInstance().oh();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.ih();
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
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.rd = function (context) {
    return false;
  };
  Unconfined.prototype.sd = function (context, block) {
    var yieldContext = context.o1(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.rh_1 = true;
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
  function ensureCapacity($this) {
    var currentSize = $this.be_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.be_1;
    var tmp1_copyInto = $this.ce_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.be_1;
    var tmp4_copyInto = $this.be_1.length - $this.ce_1 | 0;
    var tmp5_copyInto = $this.ce_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.be_1 = newElements;
    $this.ce_1 = 0;
    $this.de_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.be_1 = tmp$ret$0;
    this.ce_1 = 0;
    this.de_1 = 0;
  }
  ArrayQueue.prototype.je = function () {
    return this.ce_1 === this.de_1;
  };
  ArrayQueue.prototype.ge = function (element) {
    this.be_1[this.de_1] = element;
    this.de_1 = (this.de_1 + 1 | 0) & (this.be_1.length - 1 | 0);
    if (this.de_1 === this.ce_1) {
      ensureCapacity(this);
    }
  };
  ArrayQueue.prototype.ee = function () {
    if (this.ce_1 === this.de_1)
      return null;
    var element = this.be_1[this.ce_1];
    this.be_1[this.ce_1] = null;
    this.ce_1 = (this.ce_1 + 1 | 0) & (this.be_1.length - 1 | 0);
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
      if (tmp1_resumeCancellableWith.wb_1.rd(tmp1_resumeCancellableWith.k1())) {
        tmp1_resumeCancellableWith.yb_1 = state;
        tmp1_resumeCancellableWith.cc_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.wb_1.sd(tmp1_resumeCancellableWith.k1(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().oe();
          if (false ? eventLoop.ie() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.he()) {
            tmp1_resumeCancellableWith.yb_1 = state;
            tmp1_resumeCancellableWith.cc_1 = tmp0_executeUnconfined;
            eventLoop.fe(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.ke(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.k1().o1(Key_getInstance_2());
                if (!(job == null) ? !job.q9() : false) {
                  var cause = job.na();
                  tmp1_resumeCancellableWith.qc(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.l1(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.xb_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.zb_1;
                tmp1_resumeCancellableWith.xb_1.l1(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.ae())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.id($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.le(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.l1(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.ac_1.c9_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.wb_1 = dispatcher;
    this.xb_1 = continuation;
    this.yb_1 = get_UNDEFINED();
    this.zb_1 = threadContextElements(this.k1());
    this.ac_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.sh = function () {
    return this.xb_1;
  };
  DispatchedContinuation.prototype.k1 = function () {
    return this.xb_1.k1();
  };
  DispatchedContinuation.prototype.th = function () {
    return this.zb_1;
  };
  DispatchedContinuation.prototype.bc = function () {
    return !(this.ac_1.c9_1 == null);
  };
  DispatchedContinuation.prototype.uh = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ac_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.td = function () {
    this.uh();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fc();
    }
  };
  DispatchedContinuation.prototype.ec = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ac_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.ac_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.ac_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.dc = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ac_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.c9_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.ac_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.ac_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.pc = function () {
    var state = this.yb_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.yb_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.mc = function () {
    return this;
  };
  DispatchedContinuation.prototype.l1 = function (result) {
    var context = this.xb_1.k1();
    var state = toState$default(result, null, 1, null);
    if (this.wb_1.rd(context)) {
      this.yb_1 = state;
      this.cc_1 = get_MODE_ATOMIC();
      this.wb_1.sd(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().oe();
        if (false ? eventLoop.ie() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.he()) {
          this.yb_1 = state;
          this.cc_1 = tmp0_executeUnconfined;
          eventLoop.fe(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.ke(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.k1();
            var tmp1_withCoroutineContext = this.zb_1;
            this.xb_1.l1(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.ae())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.id($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.le(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.qc = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.pd_1(cause);
    }
  };
  DispatchedContinuation.prototype.vh = function (state) {
    var job = this.k1().o1(Key_getInstance_2());
    if (!(job == null) ? !job.q9() : false) {
      var cause = job.na();
      this.qc(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.l1(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.wh = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.xb_1;
    var tmp1_withContinuationContext = this.zb_1;
    this.xb_1.l1(result);
    tmp$ret$0 = Unit_getInstance();
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.wb_1 + ', ' + toDebugString(this.xb_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().oe();
    if (doYield ? eventLoop.ie() : false)
      return false;
    var tmp;
    if (eventLoop.he()) {
      _this__u8e3s4.yb_1 = contState;
      _this__u8e3s4.cc_1 = mode;
      eventLoop.fe(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.ke(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.ae())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.id($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.le(true);
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
    this.cc_1 = resumeMode;
  }
  DispatchedTask.prototype.gd = function () {
    return this.cc_1;
  };
  DispatchedTask.prototype.qc = function (takenState, cause) {
  };
  DispatchedTask.prototype.dd = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.fd = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v9_1;
  };
  DispatchedTask.prototype.hd = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.mc();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.xb_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.zb_1;
      var context = continuation.k1();
      var state = this.pc();
      var exception = this.fd(state);
      var job = (exception == null ? get_isCancellableMode(this.cc_1) : false) ? context.o1(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.q9() : false) {
        var cause = job.na();
        this.qc(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.l1(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.l1(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.dd(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.l1(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance_0();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_0();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.id(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.id = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.mc().k1(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.mc();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.cc_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.wb_1;
      var context = delegate.k1();
      if (dispatcher.rd(context)) {
        dispatcher.sd(context, _this__u8e3s4);
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
    eventLoop.ke(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.ae())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.id($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.le(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().oe();
    if (eventLoop.he()) {
      eventLoop.fe(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.ke(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.mc(), true);
        $l$loop: while (true) {
          if (!eventLoop.ae())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.id($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.le(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.pc();
    var exception = _this__u8e3s4.fd(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance_0();
      var tmp2_success = _this__u8e3s4.dd(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.xb_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.zb_1;
      tmp3_resumeUndispatchedWith.xb_1.l1(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.l1(result);
    }
  }
  function Symbol(symbol) {
    this.xh_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.xh_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
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
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.l1(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
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
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        actualCompletion.l1(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      actualCompletion.l1(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.k1();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.h8(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.l1(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
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
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.l1(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
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
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
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
    var tmp = Dispatchers_getInstance().kh_1;
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
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
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
    var combined = _this__u8e3s4.p9().v1(context);
    return (!(combined === Dispatchers_getInstance().kh_1) ? combined.o1(Key_getInstance()) == null : false) ? combined.v1(Dispatchers_getInstance().kh_1) : combined;
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
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).a5();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.kh_1 = createDefaultDispatcher();
    this.lh_1 = Unconfined_getInstance();
    this.mh_1 = new JsMainDispatcher(this.kh_1, false);
    this.nh_1 = null;
  }
  Dispatchers.prototype.oh = function () {
    var tmp0_elvis_lhs = this.nh_1;
    return tmp0_elvis_lhs == null ? this.mh_1 : tmp0_elvis_lhs;
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
    this.zh_1 = delegate;
    this.ai_1 = invokeImmediately;
    this.bi_1 = this.ai_1 ? this : new JsMainDispatcher(this.zh_1, true);
  }
  JsMainDispatcher.prototype.ih = function () {
    return this.bi_1;
  };
  JsMainDispatcher.prototype.rd = function (context) {
    return !this.ai_1;
  };
  JsMainDispatcher.prototype.sd = function (context, block) {
    return this.zh_1.sd(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.jh();
    return tmp0_elvis_lhs == null ? this.zh_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.sd = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.gi_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.gi_1;
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
        tmp_1 = equals(other.gi_1, this.gi_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.gi_1) | 0, 31);
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
  NodeDispatcher.prototype.ji = function () {
    process.nextTick(this.si_1.pi_1);
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
  SetTimeoutDispatcher.prototype.ji = function () {
    setTimeout(this.si_1.pi_1, 0);
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
      this$0.aj();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.qi_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.pi_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.bj = function () {
    this.qi_1.ji();
  };
  ScheduledMessageQueue.prototype.cj = function () {
    setTimeout(this.pi_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.ob(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.si_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.sd = function (context, block) {
    this.si_1.dj(block);
  };
  SetTimeoutBasedDispatcher.prototype.vd = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.nb(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yi_1 = 16;
    this.zi_1 = false;
  }
  MessageQueue.prototype.dj = function (element) {
    this.ge(element);
    if (!this.zi_1) {
      this.zi_1 = true;
      this.bj();
    }
  };
  MessageQueue.prototype.aj = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.yi_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.ee();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.hd();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.je()) {
        this.zi_1 = false;
      } else {
        this.cj();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).u7();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.ej_1 = handle;
  }
  ClearTimeout.prototype.oc = function () {
    clearTimeout(this.ej_1);
  };
  ClearTimeout.prototype.nd = function (cause) {
    this.oc();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.nd(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.ej_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.ob(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.gj_1 = window_0;
    this.hj_1 = new WindowMessageQueue(this.gj_1);
  }
  WindowDispatcher.prototype.sd = function (context, block) {
    return this.hj_1.dj(block);
  };
  WindowDispatcher.prototype.vd = function (timeMillis, continuation) {
    this.gj_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.nj_1 ? event.data == this$0.oj_1 : false) {
        event.stopPropagation();
        this$0.aj();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.aj();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.nj_1 = window_0;
    this.oj_1 = 'dispatchCoroutine';
    this.nj_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.bj = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.cj = function () {
    this.nj_1.postMessage(this.oj_1, '*');
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
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.ye_1 = this;
    this.ze_1 = this;
    this.af_1 = false;
  }
  LinkedListNode.prototype.bf = function () {
    return this.ye_1;
  };
  LinkedListNode.prototype.cf = function () {
    return this.ye_1;
  };
  LinkedListNode.prototype.df = function () {
    return this.ze_1;
  };
  LinkedListNode.prototype.ef = function () {
    return this.af_1;
  };
  LinkedListNode.prototype.ff = function (node) {
    var prev = this.ze_1;
    node.ye_1 = this;
    node.ze_1 = prev;
    prev.ye_1 = node;
    this.ze_1 = node;
  };
  LinkedListNode.prototype.nf = function () {
    return this.gf();
  };
  LinkedListNode.prototype.gf = function () {
    if (this.af_1)
      return false;
    var prev = this.ze_1;
    var next = this.ye_1;
    prev.ye_1 = next;
    next.ze_1 = prev;
    this.af_1 = true;
    return true;
  };
  LinkedListNode.prototype.of = function (node) {
    if (!(this.ye_1 === this))
      return false;
    this.ff(node);
    return true;
  };
  LinkedListNode.prototype.hf = function (node, condition) {
    if (!condition())
      return false;
    this.ff(node);
    return true;
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
  function synchronized(lock, block) {
    return block();
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.pe_1 = null;
  }
  CommonThreadLocal.prototype.qe = function () {
    var tmp = this.pe_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.re = function (value) {
    this.pe_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.ra = invokeOnCompletion$default;
  JobSupport.prototype.v1 = plus;
  JobSupport.prototype.o1 = get;
  JobSupport.prototype.u1 = fold;
  JobSupport.prototype.t1 = minusKey;
  AbstractCoroutine.prototype.ra = invokeOnCompletion$default;
  AbstractCoroutine.prototype.v1 = plus;
  AbstractCoroutine.prototype.o1 = get;
  AbstractCoroutine.prototype.u1 = fold;
  AbstractCoroutine.prototype.t1 = minusKey;
  StandaloneCoroutine.prototype.ra = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.v1 = plus;
  StandaloneCoroutine.prototype.o1 = get;
  StandaloneCoroutine.prototype.u1 = fold;
  StandaloneCoroutine.prototype.t1 = minusKey;
  LazyStandaloneCoroutine.prototype.ra = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.v1 = plus;
  LazyStandaloneCoroutine.prototype.o1 = get;
  LazyStandaloneCoroutine.prototype.u1 = fold;
  LazyStandaloneCoroutine.prototype.t1 = minusKey;
  CoroutineDispatcher.prototype.o1 = get_0;
  CoroutineDispatcher.prototype.u1 = fold;
  CoroutineDispatcher.prototype.t1 = minusKey_0;
  CoroutineDispatcher.prototype.v1 = plus;
  EventLoop.prototype.v1 = plus;
  EventLoop.prototype.o1 = get_0;
  EventLoop.prototype.u1 = fold;
  EventLoop.prototype.t1 = minusKey_0;
  MainCoroutineDispatcher.prototype.v1 = plus;
  MainCoroutineDispatcher.prototype.o1 = get_0;
  MainCoroutineDispatcher.prototype.u1 = fold;
  MainCoroutineDispatcher.prototype.t1 = minusKey_0;
  Unconfined.prototype.v1 = plus;
  Unconfined.prototype.o1 = get_0;
  Unconfined.prototype.u1 = fold;
  Unconfined.prototype.t1 = minusKey_0;
  JsMainDispatcher.prototype.v1 = plus;
  JsMainDispatcher.prototype.o1 = get_0;
  JsMainDispatcher.prototype.u1 = fold;
  JsMainDispatcher.prototype.t1 = minusKey_0;
  UnconfinedEventLoop.prototype.v1 = plus;
  UnconfinedEventLoop.prototype.o1 = get_0;
  UnconfinedEventLoop.prototype.u1 = fold;
  UnconfinedEventLoop.prototype.t1 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.v1 = plus;
  SetTimeoutBasedDispatcher.prototype.o1 = get_0;
  SetTimeoutBasedDispatcher.prototype.u1 = fold;
  SetTimeoutBasedDispatcher.prototype.t1 = minusKey_0;
  NodeDispatcher.prototype.v1 = plus;
  NodeDispatcher.prototype.o1 = get_0;
  NodeDispatcher.prototype.u1 = fold;
  NodeDispatcher.prototype.t1 = minusKey_0;
  SetTimeoutDispatcher.prototype.v1 = plus;
  SetTimeoutDispatcher.prototype.o1 = get_0;
  SetTimeoutDispatcher.prototype.u1 = fold;
  SetTimeoutDispatcher.prototype.t1 = minusKey_0;
  WindowDispatcher.prototype.v1 = plus;
  WindowDispatcher.prototype.o1 = get_0;
  WindowDispatcher.prototype.u1 = fold;
  WindowDispatcher.prototype.t1 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = delay;
  _.$_$.b = launch$default;
  _.$_$.c = GlobalScope_getInstance;
  _.$_$.d = CoroutineScope;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js')));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
