(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var ensureNotNull = kotlin_kotlin.$_$.zb;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var toLong = kotlin_kotlin.$_$.f9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var Long = kotlin_kotlin.$_$.jb;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.u8;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var equals = kotlin_kotlin.$_$.f8;
  var SuspendFunction1 = kotlin_kotlin.$_$.q7;
  var toByte = kotlin_kotlin.$_$.e9;
  var toShort = kotlin_kotlin.$_$.g9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var Exception = kotlin_kotlin.$_$.gb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.r1;
  var numberToChar = kotlin_kotlin.$_$.b9;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var coerceAtMost = kotlin_kotlin.$_$.l9;
  var Companion_getInstance = kotlin_kotlin.$_$.t3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q2;
  var Appendable = kotlin_kotlin.$_$.u9;
  var encodeToByteArray = kotlin_kotlin.$_$.x9;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.f3;
  var Char = kotlin_kotlin.$_$.za;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y3;
  var charSequenceGet = kotlin_kotlin.$_$.a8;
  var isLowSurrogate = kotlin_kotlin.$_$.ca;
  var isHighSurrogate = kotlin_kotlin.$_$.ba;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var coerceAtMost_0 = kotlin_kotlin.$_$.k9;
  var hashCode = kotlin_kotlin.$_$.k8;
  var lazy = kotlin_kotlin.$_$.fc;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var replace$default = kotlin_kotlin.$_$.p;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var get_js = kotlin_kotlin.$_$.z8;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c8;
  var extendThrowable = kotlin_kotlin.$_$.g8;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.s1;
  var isCharSequence = kotlin_kotlin.$_$.q8;
  var trim = kotlin_kotlin.$_$.xa;
  var decodeToString = kotlin_kotlin.$_$.w9;
  var setOf = kotlin_kotlin.$_$.k6;
  var fillArrayVal = kotlin_kotlin.$_$.h8;
  var isObject = kotlin_kotlin.$_$.w8;
  //endregion
  //region block: pre-declaration
  function readRemaining$default(limit, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance();
      limit = new Long(-1, 2147483647);
    }
    return $handler == null ? this.c20(limit, $cont) : $handler(limit, $cont);
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.constructor = $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0;
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.constructor = $awaitAtLeastNBytesAvailableForReadCOROUTINE$1;
  $writeFullyCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$9.prototype.constructor = $writeFullyCOROUTINE$9;
  $writeFullyCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$10.prototype.constructor = $writeFullyCOROUTINE$10;
  $readRemainingCOROUTINE$26.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingCOROUTINE$26.prototype.constructor = $readRemainingCOROUTINE$26;
  $readRemainingSuspendCOROUTINE$27.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingSuspendCOROUTINE$27.prototype.constructor = $readRemainingSuspendCOROUTINE$27;
  $readAvailableCOROUTINE$30.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$30.prototype.constructor = $readAvailableCOROUTINE$30;
  $readAvailableCOROUTINE$33.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$33.prototype.constructor = $readAvailableCOROUTINE$33;
  $awaitInternalAtLeast1COROUTINE$38.prototype = Object.create(CoroutineImpl.prototype);
  $awaitInternalAtLeast1COROUTINE$38.prototype.constructor = $awaitInternalAtLeast1COROUTINE$38;
  $awaitSuspendCOROUTINE$39.prototype = Object.create(CoroutineImpl.prototype);
  $awaitSuspendCOROUTINE$39.prototype.constructor = $awaitSuspendCOROUTINE$39;
  ClosedWriteChannelException.prototype = Object.create(CancellationException.prototype);
  ClosedWriteChannelException.prototype.constructor = ClosedWriteChannelException;
  launchChannel$slambda.prototype = Object.create(CoroutineImpl.prototype);
  launchChannel$slambda.prototype.constructor = launchChannel$slambda;
  InsufficientSpaceException.prototype = Object.create(Exception.prototype);
  InsufficientSpaceException.prototype.constructor = InsufficientSpaceException;
  function close() {
    this.w1c();
  }
  DefaultBufferPool.prototype = Object.create(DefaultPool.prototype);
  DefaultBufferPool.prototype.constructor = DefaultBufferPool;
  BytePacketBuilder.prototype = Object.create(Output.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacket.prototype = Object.create(Input.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  ChunkBuffer$Companion$NoPool$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPool$1.prototype.constructor = ChunkBuffer$Companion$NoPool$1;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.constructor = ChunkBuffer$Companion$NoPoolManuallyManaged$1;
  ChunkBuffer.prototype = Object.create(Buffer.prototype);
  ChunkBuffer.prototype.constructor = ChunkBuffer;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  $sleepCOROUTINE$52.prototype = Object.create(CoroutineImpl.prototype);
  $sleepCOROUTINE$52.prototype.constructor = $sleepCOROUTINE$52;
  $trySuspendCOROUTINE$53.prototype = Object.create(CoroutineImpl.prototype);
  $trySuspendCOROUTINE$53.prototype.constructor = $trySuspendCOROUTINE$53;
  $copyToSequentialImplCOROUTINE$54.prototype = Object.create(CoroutineImpl.prototype);
  $copyToSequentialImplCOROUTINE$54.prototype.constructor = $copyToSequentialImplCOROUTINE$54;
  $copyToTailCOROUTINE$55.prototype = Object.create(CoroutineImpl.prototype);
  $copyToTailCOROUTINE$55.prototype.constructor = $copyToTailCOROUTINE$55;
  ByteArrayPool$1.prototype = Object.create(DefaultPool.prototype);
  ByteArrayPool$1.prototype.constructor = ByteArrayPool$1;
  ByteChannelJS.prototype = Object.create(ByteChannelSequentialBase.prototype);
  ByteChannelJS.prototype.constructor = ByteChannelJS;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  MalformedInputException.prototype = Object.create(Error.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  //endregion
  function ByteChannel() {
  }
  ByteChannel.$metadata$ = interfaceMeta('ByteChannel', [ByteReadChannel_1, ByteWriteChannel]);
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function ByteChannelSequentialBase_init_$Init$(initial, autoFlush, pool, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      pool = Companion_getInstance_4().s1s_1;
    ByteChannelSequentialBase.call($this, initial, autoFlush, pool);
    return $this;
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.d1t_1.a19_1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1t_1) == null);
  }
  function flushImpl($this) {
    if ($this.e1t_1.l1g()) {
      $this.i1t_1.n1t();
      return false;
    }
    flushWrittenBytes($this);
    $this.i1t_1.n1t();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    {
      var tmp0_synchronized = $this.j1t_1;
      var tmp$ret$0;
      {
        var size = $this.e1t_1.d();
        var buffer = ensureNotNull($this.e1t_1.e1u());
        $this.k1t_1.f1u(buffer);
        tmp$ret$0 = $this.b1t_1.atomicfu$addAndGet(size);
      }
      tmp$ret$1 = tmp$ret$0;
    }
  }
  function ensureNotClosed($this) {
    if ($this.h1u()) {
      var tmp0_elvis_lhs = $this.g1u();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.g1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.g1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        closeable.kz();
        throw tmp0_safe_receiver;
      }
    }
  }
  function readRemainingSuspend($this, builder, limit, $cont) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function addBytesRead($this, count) {
    {
      var tmp0_require = count >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Can't read negative amount of bytes: " + count;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_minusAssign = $this.c1t_1;
      tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    }
    $this.z1s_1.atomicfu$addAndGet$long(toLong(count));
    {
      var tmp2_minusAssign = $this.b1t_1;
      tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    }
    {
      var tmp3_check = $this.c1t_1.b19_1 >= 0;
      {
      }
      if (!tmp3_check) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Readable bytes count is negative: ' + $this.w1u() + ', ' + count + ' in ' + $this;
        }
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    {
      var tmp4_check = $this.w1u() >= 0;
      {
      }
      if (!tmp4_check) {
        var tmp$ret$2;
        {
          tmp$ret$2 = 'Readable bytes count is negative: ' + $this.w1u() + ', ' + count + ' in ' + $this;
        }
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
  }
  function addBytesWritten($this, count) {
    {
      var tmp0_require = count >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Can't write negative amount of bytes: " + count;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_plusAssign = $this.c1t_1;
      tmp1_plusAssign.atomicfu$getAndAdd(count);
    }
    $this.a1t_1.atomicfu$addAndGet$long(toLong(count));
    {
      var tmp2_check = $this.c1t_1.b19_1 >= 0;
      {
      }
      if (!tmp2_check) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Readable bytes count is negative: ' + $this.c1t_1.b19_1 + ', ' + count + ' in ' + $this;
        }
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.x1u() < $count ? !this$0.h1u() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.w1u() < $count ? !this$0.y1u() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1v_1 = _this__u8e3s4;
    this.i1v_1 = count;
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.lh = function () {
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
            if (!(this.h1v_1.x1u() < this.i1v_1 ? !this.h1v_1.h1u() : false)) {
              this.bh_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.h1v_1)) {
              this.bh_1 = 2;
              suspendResult = this.h1v_1.i1t_1.j1v(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.h1v_1, this.i1v_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.bh_1 = 3;
            continue $sm;
          case 3:
            this.bh_1 = 1;
            continue $sm;
          case 4:
            throw this.eh_1;
          case 5:
            return Unit_getInstance();
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
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1v_1 = _this__u8e3s4;
    this.t1v_1 = count;
  }
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.s1v_1.w1u() < this.t1v_1 ? !this.s1v_1.y1u() : false)) {
              this.bh_1 = 4;
              continue $sm;
            }

            this.bh_1 = 2;
            suspendResult = this.s1v_1.i1t_1.j1v(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.s1v_1, this.t1v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1w_1 = _this__u8e3s4;
    this.d1w_1 = src;
  }
  $writeFullyCOROUTINE$9.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.c1w_1.e1w(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.d1w_1.h1w_1 - this.d1w_1.g1w_1 | 0;
            writeFully$default(this.c1w_1.e1t_1, this.d1w_1, 0, 2, null);
            this.c1w_1.l1w(count);
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
  $writeFullyCOROUTINE$9.$metadata$ = classMeta('$writeFullyCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1w_1 = _this__u8e3s4;
    this.v1w_1 = src;
    this.w1w_1 = offset;
    this.x1w_1 = length;
  }
  $writeFullyCOROUTINE$10.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 4;
            this.y1w_1 = this.w1w_1;
            this.z1w_1 = this.w1w_1 + this.x1w_1 | 0;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.y1w_1 < this.z1w_1)) {
              this.bh_1 = 3;
              continue $sm;
            }

            this.bh_1 = 2;
            suspendResult = this.u1w_1.e1w(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.u1w_1.x1u();
            var tmp1_min = this.z1w_1 - this.y1w_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.u1w_1.e1t_1, this.v1w_1, this.y1w_1, bytesCount);
            this.y1w_1 = this.y1w_1 + bytesCount | 0;
            this.u1w_1.l1w(bytesCount);
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
  $writeFullyCOROUTINE$10.$metadata$ = classMeta('$writeFullyCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1x_1 = _this__u8e3s4;
    this.j1x_1 = limit;
  }
  $readRemainingCOROUTINE$26.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            ensureNotFailed(this.i1x_1);
            var tmp_0 = this;
            tmp_0.k1x_1 = BytePacketBuilder_init_$Create$(null, 1, null);
            var tmp_1 = this;
            var tmp_2 = this;
            tmp_2.l1x_1 = this.i1x_1.f1t_1.x1x();
            tmp_1.m1x_1 = this.j1x_1.f1(this.l1x_1) <= 0 ? this.j1x_1 : this.l1x_1;
            this.k1x_1.y1x(this.i1x_1.f1t_1, this.m1x_1);
            this.i1x_1.z1x(this.m1x_1.t6());
            var tmp_3 = this;
            var tmp_4 = this;
            tmp_4.n1x_1 = this.k1x_1.d();
            tmp_3.o1x_1 = this.j1x_1.w4(toLong(this.n1x_1));
            if (this.o1x_1.equals(new Long(0, 0)) ? true : this.i1x_1.y1u()) {
              var tmp_5 = this;
              ensureNotFailed_0(this.i1x_1, this.k1x_1);
              tmp_5.p1x_1 = this.k1x_1.yn();
              this.bh_1 = 2;
              continue $sm;
            } else {
              this.bh_1 = 1;
              suspendResult = readRemainingSuspend(this.i1x_1, this.k1x_1, this.j1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.p1x_1 = suspendResult;
            this.bh_1 = 2;
            continue $sm;
          case 2:
            return this.p1x_1;
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
  $readRemainingCOROUTINE$26.$metadata$ = classMeta('$readRemainingCOROUTINE$26', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1u_1 = _this__u8e3s4;
    this.r1u_1 = builder;
    this.s1u_1 = limit;
  }
  $readRemainingSuspendCOROUTINE$27.prototype.lh = function () {
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
            if (!(toLong(this.r1u_1.d()).f1(this.s1u_1) < 0)) {
              this.bh_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp_1 = this;
            var tmp0_minus = this.r1u_1.d();
            tmp_1.t1u_1 = this.s1u_1.w4(toLong(tmp0_minus));
            var tmp_2 = this;
            tmp_2.u1u_1 = this.q1u_1.f1t_1.x1x();
            tmp_0.v1u_1 = this.t1u_1.f1(this.u1u_1) <= 0 ? this.t1u_1 : this.u1u_1;
            this.r1u_1.y1x(this.q1u_1.f1t_1, this.v1u_1);
            this.q1u_1.z1x(this.v1u_1.t6());
            ensureNotFailed_0(this.q1u_1, this.r1u_1);
            if (this.q1u_1.y1u() ? true : this.r1u_1.d() === this.s1u_1.t6()) {
              this.bh_1 = 4;
              continue $sm;
            } else {
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.bh_1 = 3;
            suspendResult = this.q1u_1.a1y(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.bh_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.q1u_1, this.r1u_1);
            return this.r1u_1.yn();
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
  $readRemainingSuspendCOROUTINE$27.$metadata$ = classMeta('$readRemainingSuspendCOROUTINE$27', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1y_1 = _this__u8e3s4;
    this.k1y_1 = dst;
  }
  $readAvailableCOROUTINE$30.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp0_safe_receiver = this.j1y_1.g1u();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.j1y_1.h1u() ? this.j1y_1.w1u() === 0 : false)
              return -1;
            if ((this.k1y_1.j1w_1 - this.k1y_1.h1w_1 | 0) === 0)
              return 0;
            if (this.j1y_1.w1u() === 0) {
              this.bh_1 = 1;
              suspendResult = this.j1y_1.a1y(1, this);
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
            if (!this.j1y_1.f1t_1.m1y()) {
              this.j1y_1.l1y();
            }

            var tmp0_minOf = toLong(this.k1y_1.j1w_1 - this.k1y_1.h1w_1 | 0);
            var tmp1_minOf = this.j1y_1.f1t_1.x1x();
            var size = (tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).t6();
            readFully_3(this.j1y_1.f1t_1, this.k1y_1, size);
            this.j1y_1.z1x(size);
            return size;
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
  $readAvailableCOROUTINE$30.$metadata$ = classMeta('$readAvailableCOROUTINE$30', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1y_1 = _this__u8e3s4;
    this.w1y_1 = dst;
    this.x1y_1 = offset;
    this.y1y_1 = length;
  }
  $readAvailableCOROUTINE$33.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            var tmp0_safe_receiver = this.v1y_1.g1u();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.v1y_1.h1u() ? this.v1y_1.w1u() === 0 : false)
              return -1;
            if (this.y1y_1 === 0)
              return 0;
            if (this.v1y_1.w1u() === 0) {
              this.bh_1 = 1;
              suspendResult = this.v1y_1.a1y(1, this);
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
            if (!this.v1y_1.f1t_1.m1y()) {
              this.v1y_1.l1y();
            }

            var tmp0_minOf = toLong(this.y1y_1);
            var tmp1_minOf = this.v1y_1.f1t_1.x1x();
            var size = (tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).t6();
            readFully_2(this.v1y_1.f1t_1, this.w1y_1, this.x1y_1, size);
            this.v1y_1.z1x(size);
            return size;
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
  $readAvailableCOROUTINE$33.$metadata$ = classMeta('$readAvailableCOROUTINE$33', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1z_1 = _this__u8e3s4;
  }
  $awaitInternalAtLeast1COROUTINE$38.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp_0 = this;
            tmp_0.j1z_1 = this.h1z_1.f1t_1;
            if (!this.j1z_1.k1z()) {
              var tmp_1 = this;
              tmp_1.i1z_1 = true;
              this.bh_1 = 3;
              continue $sm;
            } else {
              this.bh_1 = 1;
              suspendResult = this.h1z_1.a1y(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.i1z_1 = suspendResult;
            this.bh_1 = 3;
            continue $sm;
          case 2:
            throw this.eh_1;
          case 3:
            return this.i1z_1;
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
  $awaitInternalAtLeast1COROUTINE$38.$metadata$ = classMeta('$awaitInternalAtLeast1COROUTINE$38', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1z_1 = _this__u8e3s4;
    this.u1z_1 = atLeast;
  }
  $awaitSuspendCOROUTINE$39.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 2;
            var tmp_0 = this;
            tmp_0.v1z_1 = this.u1z_1 >= 0;
            if (!this.v1z_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.bh_1 = 1;
            suspendResult = this.t1z_1.w1z(this.u1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t1z_1.l1y();
            var tmp0_safe_receiver = this.t1z_1.g1u();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.t1z_1.y1u() ? this.t1z_1.w1u() >= this.u1z_1 : false;
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
  $awaitSuspendCOROUTINE$39.$metadata$ = classMeta('$awaitSuspendCOROUTINE$39', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    this.x1s_1 = autoFlush;
    this.y1s_1 = atomic$ref$1(Companion_getInstance_4().u1s_1);
    this.z1s_1 = atomic$long$1(new Long(0, 0));
    this.a1t_1 = atomic$long$1(new Long(0, 0));
    this.b1t_1 = atomic$int$1(0);
    this.c1t_1 = atomic$int$1(0);
    this.d1t_1 = atomic$ref$1(null);
    this.e1t_1 = new BytePacketBuilder(pool);
    this.f1t_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.g1t_1 = atomic$int$1(0);
    this.h1t_1 = atomic$ref$1(Companion_getInstance_4().u1s_1);
    this.i1t_1 = new AwaitingSlot();
    this.j1t_1 = new Object();
    var tmp = this;
    tmp.k1t_1 = BytePacketBuilder_init_$Create$(null, 1, null);
    var count = remainingAll(initial).t6();
    this.l1w(count);
    this.b1t_1.atomicfu$addAndGet(count);
  }
  ByteChannelSequentialBase.prototype.x1z = function () {
    return this.x1s_1;
  };
  ByteChannelSequentialBase.prototype.h1u = function () {
    return !(this.d1t_1.a19_1 == null);
  };
  ByteChannelSequentialBase.prototype.y1z = function () {
    return this.e1t_1;
  };
  ByteChannelSequentialBase.prototype.z1z = function () {
    return this.f1t_1;
  };
  ByteChannelSequentialBase.prototype.w1u = function () {
    return this.b1t_1.b19_1;
  };
  ByteChannelSequentialBase.prototype.x1u = function () {
    var tmp$ret$0;
    {
      var tmp0_maxOf = 4088 - this.c1t_1.b19_1 | 0;
      tmp$ret$0 = Math.max(0, tmp0_maxOf);
    }
    return tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.y1u = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.h1u() ? this.c1t_1.b19_1 === 0 : false;
  };
  ByteChannelSequentialBase.prototype.g1u = function () {
    var tmp0_safe_receiver = this.d1t_1.a19_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1t_1;
  };
  ByteChannelSequentialBase.prototype.e1w = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.w1z = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.ad = function () {
    flushImpl(this);
  };
  ByteChannelSequentialBase.prototype.l1y = function () {
    var tmp$ret$1;
    {
      var tmp0_synchronized = this.j1t_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = unsafeAppend(this.f1t_1, this.k1t_1);
      }
      tmp$ret$1 = tmp$ret$0;
    }
  };
  ByteChannelSequentialBase.prototype.a20 = function (src, $cont) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.b20 = function (src, offset, length, $cont) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.z1x = function (count) {
    addBytesRead(this, count);
    this.i1t_1.n1t();
  };
  ByteChannelSequentialBase.prototype.c20 = function (limit, $cont) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.e20 = function (dst, $cont) {
    return this.f20(dst instanceof Buffer ? dst : THROW_CCE(), $cont);
  };
  ByteChannelSequentialBase.prototype.f20 = function (dst, $cont) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.g20 = function (dst, offset, length, $cont) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.h20 = function ($cont) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.a1y = function (atLeast, $cont) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  ByteChannelSequentialBase.prototype.r1d = function (cause) {
    if (!(this.g1u() == null) ? true : this.h1u()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.z1m(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  ByteChannelSequentialBase.prototype.z1m = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.d1t_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.f1t_1.kz();
      this.e1t_1.kz();
      this.k1t_1.kz();
    } else {
      this.ad();
    }
    this.i1t_1.i20(cause);
    return true;
  };
  ByteChannelSequentialBase.prototype.j20 = function (dst, limit) {
    var size = this.f1t_1.x1x();
    var tmp;
    if (size.f1(limit) <= 0) {
      dst.e1t_1.k20(this.f1t_1);
      dst.l1w(size.t6());
      this.z1x(size.t6());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  ByteChannelSequentialBase.prototype.l1w = function (count) {
    addBytesWritten(this, count);
    if (this.h1u()) {
      this.e1t_1.kz();
      ensureNotClosed(this);
    }
    if (this.x1z() ? true : this.x1u() === 0) {
      this.ad();
    }
  };
  ByteChannelSequentialBase.$metadata$ = classMeta('ByteChannelSequentialBase', [ByteChannel, ByteReadChannel_1, ByteWriteChannel, SuspendableReadSession, HasReadSession, HasWriteSession]);
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.r1d(null);
  }
  function readAvailable(_this__u8e3s4, dst, $cont) {
    return _this__u8e3s4.g20(dst, 0, dst.length, $cont);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.z1m(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  ClosedWriteChannelException.$metadata$ = classMeta('ClosedWriteChannelException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function writeFully(_this__u8e3s4, src, $cont) {
    return _this__u8e3s4.b20(src, 0, src.length, $cont);
  }
  function get_CLOSED_SUCCESS() {
    init_properties_CloseElement_kt_zcr6ie();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.l1t_1 = cause;
  }
  CloseElement.$metadata$ = classMeta('CloseElement');
  var properties_initialized_CloseElement_kt_clkism;
  function init_properties_CloseElement_kt_zcr6ie() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function WriterJob() {
  }
  WriterJob.$metadata$ = interfaceMeta('WriterJob', [Job]);
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel_0(autoFlush), true, block);
  }
  function writer$default(_this__u8e3s4, coroutineContext, autoFlush, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coroutineContext = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      autoFlush = false;
    return writer(_this__u8e3s4, coroutineContext, autoFlush, block);
  }
  function WriterScope() {
  }
  WriterScope.$metadata$ = interfaceMeta('WriterScope', [CoroutineScope]);
  function ChannelJob(delegate, channel) {
    this.l20_1 = delegate;
    this.m20_1 = channel;
  }
  ChannelJob.prototype.r1l = function () {
    return this.m20_1;
  };
  ChannelJob.prototype.s19 = function () {
    return this.l20_1.s19();
  };
  ChannelJob.prototype.s = function () {
    return this.l20_1.s();
  };
  ChannelJob.prototype.f1b = function (child) {
    return this.l20_1.f1b(child);
  };
  ChannelJob.prototype.x1a = function (cause) {
    this.l20_1.x1a(cause);
  };
  ChannelJob.prototype.b4 = function (initial, operation) {
    return this.l20_1.b4(initial, operation);
  };
  ChannelJob.prototype.v3 = function (key) {
    return this.l20_1.v3(key);
  };
  ChannelJob.prototype.p1a = function () {
    return this.l20_1.p1a();
  };
  ChannelJob.prototype.t1a = function (onCancelling, invokeImmediately, handler) {
    return this.l20_1.t1a(onCancelling, invokeImmediately, handler);
  };
  ChannelJob.prototype.s1a = function (handler) {
    return this.l20_1.s1a(handler);
  };
  ChannelJob.prototype.a4 = function (key) {
    return this.l20_1.a4(key);
  };
  ChannelJob.prototype.c4 = function (context) {
    return this.l20_1.c4(context);
  };
  ChannelJob.prototype.n1a = function () {
    return this.l20_1.n1a();
  };
  ChannelJob.prototype.toString = function () {
    return 'ChannelJob[' + this.l20_1 + ']';
  };
  ChannelJob.$metadata$ = classMeta('ChannelJob', [ReaderJob, WriterJob, Job]);
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.r19().v3(Key_getInstance());
    var job = launch$default(_this__u8e3s4, context, null, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null), 2, null);
    job.s1a(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ReaderJob() {
  }
  ReaderJob.$metadata$ = interfaceMeta('ReaderJob', [Job]);
  function ChannelScope(delegate, channel) {
    this.n20_1 = channel;
    this.o20_1 = delegate;
  }
  ChannelScope.prototype.r1l = function () {
    return this.n20_1;
  };
  ChannelScope.prototype.r19 = function () {
    return this.o20_1.r19();
  };
  ChannelScope.$metadata$ = classMeta('ChannelScope', [ReaderScope, WriterScope, CoroutineScope]);
  function ReaderScope() {
  }
  ReaderScope.$metadata$ = interfaceMeta('ReaderScope', [CoroutineScope]);
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.x20_1 = $attachJob;
    this.y20_1 = $channel;
    this.z20_1 = $block;
    this.a21_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchChannel$slambda.prototype.d21 = function ($this$launch, $cont) {
    var tmp = this.e21($this$launch, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  launchChannel$slambda.prototype.mh = function (p1, $cont) {
    return this.d21((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchChannel$slambda.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            if (this.x20_1) {
              this.y20_1.r1s(ensureNotNull(this.b21_1.r19().v3(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.b21_1, this.y20_1);
            tmp_0.c21_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.ch_1 = 2;
            this.bh_1 = 1;
            suspendResult = this.z20_1(this.c21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ch_1 = 3;
            this.bh_1 = 4;
            continue $sm;
          case 2:
            this.ch_1 = 3;
            var tmp_2 = this.eh_1;
            if (tmp_2 instanceof Error) {
              var cause = this.eh_1;
              if (!equals(this.a21_1, Dispatchers_getInstance().n1k_1) ? !(this.a21_1 == null) : false) {
                throw cause;
              }
              this.y20_1.r1d(cause);
              this.bh_1 = 4;
              continue $sm;
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
  launchChannel$slambda.prototype.e21 = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.x20_1, this.y20_1, this.z20_1, this.a21_1, completion);
    i.b21_1 = $this$launch;
    return i;
  };
  launchChannel$slambda.$metadata$ = classMeta('launchChannel$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.d21($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.z1m(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function ReadSession() {
  }
  ReadSession.$metadata$ = interfaceMeta('ReadSession');
  function SuspendableReadSession() {
  }
  SuspendableReadSession.$metadata$ = interfaceMeta('SuspendableReadSession', [ReadSession]);
  function HasReadSession() {
  }
  HasReadSession.$metadata$ = interfaceMeta('HasReadSession');
  function HasWriteSession() {
  }
  HasWriteSession.$metadata$ = interfaceMeta('HasWriteSession');
  function get_highByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 >>> 8 | 0);
  }
  function get_lowByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 & 255);
  }
  function get_highShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 >>> 16 | 0);
  }
  function get_lowShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 & 65535);
  }
  function get(_this__u8e3s4, index) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.f21_1.getInt8(index);
    }
    return tmp$ret$0;
  }
  function set(_this__u8e3s4, index, value) {
    return _this__u8e3s4.f21_1.setInt8(index, value);
  }
  function Allocator() {
  }
  Allocator.$metadata$ = interfaceMeta('Allocator');
  function storeByteArray(_this__u8e3s4, offset, source, sourceOffset, count) {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0_let = of(Companion_getInstance_6(), source, sourceOffset, count);
        {
        }
        tmp$ret$0 = tmp0_let.i21(_this__u8e3s4, 0, count, offset);
      }
      tmp$ret$1 = tmp$ret$0;
    }
  }
  function decode(_this__u8e3s4, input, max) {
    var tmp$ret$2;
    {
      var tmp$ret$0;
      {
        var tmp0_minOf = toLong(max);
        var tmp1_minOf = sizeEstimate(input);
        tmp$ret$0 = tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
      }
      var tmp2_buildString = tmp$ret$0.t6();
      {
      }
      var tmp$ret$1;
      {
        var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
        {
        }
        {
          decode_0(_this__u8e3s4, input, tmp0_apply, max);
        }
        tmp$ret$1 = tmp0_apply;
      }
      tmp$ret$2 = tmp$ret$1.toString();
    }
    return tmp$ret$2;
  }
  function decode$default(_this__u8e3s4, input, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return decode(_this__u8e3s4, input, max);
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().s1s_1.j21();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        {
          tmp$ret$0 = single.h1w_1 - single.g1w_1 | 0;
        }
        var result = new Int8Array(tmp$ret$0);
        {
          var tmp0_readFully = result.length - 0 | 0;
          readFully_0(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        }
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        {
        }
        var builder = BytePacketBuilder_init_$Create$(null, 1, null);
        try {
          {
            builder.v21(single.u21());
            encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          }
          tmp$ret$1 = builder.yn();
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
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single.w21(Companion_getInstance_4().s1s_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.x1x();
    } else {
      var tmp$ret$0;
      {
        var tmp0_maxOf = _this__u8e3s4.x1x();
        tmp$ret$0 = tmp0_maxOf.f1(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    {
      var tail = prepareWriteHead(destination, 1, null);
      try {
        var size;
        $l$loop: while (true) {
          var tmp$ret$3;
          {
            var tmp0__anonymous__q1qw7t = tail;
            var tmp$ret$0;
            {
              tmp$ret$0 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
            }
            var before = tmp$ret$0;
            var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
            {
              var tmp0_check = rc >= 0;
              {
              }
              {
                {
                }
                if (!tmp0_check) {
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = 'Check failed.';
                  }
                  var message = tmp$ret$1;
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
            start = start + rc | 0;
            var tmp = bytesWritten;
            var tmp$ret$2;
            {
              tmp$ret$2 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
            }
            bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
            tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
          }
          size = tmp$ret$3;
          if (size <= 0)
            break $l$loop;
          tail = prepareWriteHead(destination, size, tail);
        }
      }finally {
        destination.x21();
      }
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    {
      var tail = prepareWriteHead(dst, 1, null);
      try {
        $l$loop: while (true) {
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = tail;
            var tmp$ret$0;
            {
              tmp$ret$0 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
            }
            var before = tmp$ret$0;
            if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
              size = 0;
            } else {
              var tmp0 = size;
              size = tmp0 + 1 | 0;
            }
            var tmp = bytesWritten;
            var tmp$ret$1;
            {
              tmp$ret$1 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
            }
            bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
            tmp$ret$2 = size > 0;
          }
          if (!tmp$ret$2)
            break $l$loop;
          tail = prepareWriteHead(dst, 1, tail);
        }
      }finally {
        dst.x21();
      }
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        {
          encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
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
    return tmp$ret$0;
  }
  function encode$default(_this__u8e3s4, input, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(input);
    return encode(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function Companion() {
    Companion_instance = this;
    this.y21_1 = 8;
  }
  Companion.prototype.z21 = function () {
    return this.y21_1;
  };
  Companion.prototype.a22 = function () {
    return Companion_getInstance_4().u1s_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.f1w_1 = memory;
    this.g1w_1 = 0;
    this.h1w_1 = 0;
    this.i1w_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0__get_size32__ezg0pb = this.f1w_1;
      tmp$ret$0 = tmp0__get_size32__ezg0pb.f21_1.byteLength;
    }
    tmp.j1w_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0__get_size32__ezg0pb_0 = this.f1w_1;
      tmp$ret$1 = tmp0__get_size32__ezg0pb_0.f21_1.byteLength;
    }
    tmp_0.k1w_1 = tmp$ret$1;
  }
  Buffer.prototype.b22 = function () {
    return this.f1w_1;
  };
  Buffer.prototype.c22 = function () {
    return this.g1w_1;
  };
  Buffer.prototype.d22 = function () {
    return this.h1w_1;
  };
  Buffer.prototype.e22 = function () {
    return this.i1w_1;
  };
  Buffer.prototype.f22 = function () {
    return this.j1w_1;
  };
  Buffer.prototype.g22 = function () {
    return this.k1w_1 - this.j1w_1 | 0;
  };
  Buffer.prototype.h22 = function () {
    return this.k1w_1;
  };
  Buffer.prototype.i22 = function () {
    return this.h1w_1 - this.g1w_1 | 0;
  };
  Buffer.prototype.j22 = function () {
    return this.j1w_1 - this.h1w_1 | 0;
  };
  Buffer.prototype.k22 = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.g1w_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.h1w_1) {
      var tmp$ret$1;
      {
        tmp$ret$1 = this.h1w_1 - this.g1w_1 | 0;
      }
      discardFailed(count, tmp$ret$1);
    }
    this.g1w_1 = newReadPosition;
  };
  Buffer.prototype.l22 = function (count) {
    var newWritePosition = this.h1w_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.j1w_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = this.j1w_1 - this.h1w_1 | 0;
      }
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.h1w_1 = newWritePosition;
  };
  Buffer.prototype.m22 = function (position) {
    var limit = this.j1w_1;
    if (position < this.h1w_1) {
      var tmp = position - this.h1w_1 | 0;
      var tmp$ret$0;
      {
        tmp$ret$0 = this.j1w_1 - this.h1w_1 | 0;
      }
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.h1w_1 = position;
        return false;
      }
      var tmp_0 = position - this.h1w_1 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = this.j1w_1 - this.h1w_1 | 0;
      }
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.h1w_1 = position;
    return true;
  };
  Buffer.prototype.n22 = function (position) {
    if (position < 0 ? true : position > this.h1w_1) {
      var tmp = position - this.g1w_1 | 0;
      var tmp$ret$0;
      {
        tmp$ret$0 = this.h1w_1 - this.g1w_1 | 0;
      }
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.g1w_1 === position)) {
      this.g1w_1 = position;
    }
  };
  Buffer.prototype.o22 = function (count) {
    var newReadPosition = this.g1w_1 - count | 0;
    if (newReadPosition < this.i1w_1) {
      rewindFailed(count, this.g1w_1 - this.i1w_1 | 0);
    }
    this.g1w_1 = newReadPosition;
  };
  Buffer.prototype.p22 = function (startGap) {
    {
      var tmp0_require = startGap >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (this.g1w_1 >= startGap) {
      this.i1w_1 = startGap;
      return Unit_getInstance();
    }
    if (this.g1w_1 === this.h1w_1) {
      if (startGap > this.j1w_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.h1w_1 = startGap;
      this.g1w_1 = startGap;
      this.i1w_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.q22 = function (endGap) {
    {
      var tmp0_require = endGap >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var newLimit = this.k1w_1 - endGap | 0;
    if (newLimit >= this.h1w_1) {
      this.j1w_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.i1w_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.g1w_1 === this.h1w_1) {
      this.j1w_1 = newLimit;
      this.g1w_1 = newLimit;
      this.h1w_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.r22 = function () {
    this.i1w_1 = 0;
    this.g1w_1 = 0;
    var capacity = this.k1w_1;
    this.h1w_1 = capacity;
  };
  Buffer.prototype.s22 = function () {
    this.t22(this.k1w_1 - this.i1w_1 | 0);
  };
  Buffer.prototype.t22 = function (limit) {
    var startGap = this.i1w_1;
    this.g1w_1 = startGap;
    this.h1w_1 = startGap;
    this.j1w_1 = limit;
  };
  Buffer.prototype.u22 = function () {
    this.v22(0);
    this.w22();
  };
  Buffer.prototype.w22 = function () {
    this.j1w_1 = this.k1w_1;
  };
  Buffer.prototype.v22 = function (newReadPosition) {
    {
      var tmp0_require = newReadPosition >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = newReadPosition <= this.g1w_1;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.g1w_1;
        }
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    this.g1w_1 = newReadPosition;
    if (this.i1w_1 > newReadPosition) {
      this.i1w_1 = newReadPosition;
    }
  };
  Buffer.prototype.x22 = function (copy) {
    copy.j1w_1 = this.j1w_1;
    copy.i1w_1 = this.i1w_1;
    copy.g1w_1 = this.g1w_1;
    copy.h1w_1 = this.h1w_1;
  };
  Buffer.prototype.y22 = function () {
    var readPosition = this.g1w_1;
    if (readPosition === this.h1w_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.g1w_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    {
      var tmp0_get = this.f1w_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_get.f21_1.getInt8(readPosition);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.z22 = function (value) {
    var writePosition = this.h1w_1;
    if (writePosition === this.j1w_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    {
      var tmp0_set = this.f1w_1;
      tmp$ret$0 = tmp0_set.f21_1.setInt8(writePosition, value);
    }
    this.h1w_1 = writePosition + 1 | 0;
  };
  Buffer.prototype.a23 = function () {
    this.u22();
    this.s22();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = this.h1w_1 - this.g1w_1 | 0;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    {
      tmp$ret$1 = this.j1w_1 - this.h1w_1 | 0;
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.i1w_1;
    var tmp$ret$2;
    {
      tmp$ret$2 = this.k1w_1 - this.j1w_1 | 0;
    }
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.k1w_1 + ')';
  };
  Buffer.$metadata$ = classMeta('Buffer');
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.k1w_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.k1w_1);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.k1w_1 - _this__u8e3s4.j1w_1 | 0;
    }
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.h1w_1 - _this__u8e3s4.g1w_1 | 0;
    }
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.g1w_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.k1w_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.i1w_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.h1w_1 - _this__u8e3s4.g1w_1 | 0;
    }
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.g1w_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  InsufficientSpaceException.$metadata$ = classMeta('InsufficientSpaceException', undefined, undefined, undefined, undefined, Exception.prototype);
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.v22(_this__u8e3s4.g1w_1 - size | 0);
  }
  function canRead(_this__u8e3s4) {
    return _this__u8e3s4.h1w_1 > _this__u8e3s4.g1w_1;
  }
  function write(_this__u8e3s4, block) {
    {
    }
    var rc = block(_this__u8e3s4.f1w_1, _this__u8e3s4.h1w_1, _this__u8e3s4.j1w_1);
    _this__u8e3s4.l22(rc);
    return rc;
  }
  function read(_this__u8e3s4, block) {
    {
    }
    var rc = block(_this__u8e3s4.f1w_1, _this__u8e3s4.g1w_1, _this__u8e3s4.h1w_1);
    _this__u8e3s4.k22(rc);
    return rc;
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = other.h1w_1 - other.g1w_1 | 0;
      }
      var tmp0_minOf = tmp$ret$0;
      tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    }
    var size = tmp$ret$1;
    var tmp$ret$2;
    {
      tmp$ret$2 = _this__u8e3s4.j1w_1 - _this__u8e3s4.h1w_1 | 0;
    }
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    {
      {
      }
      var tmp$ret$5;
      {
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.f1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
        var tmp3__anonymous__ufb84q = _this__u8e3s4.j1w_1;
        var tmp$ret$4;
        {
          {
          }
          var tmp$ret$3;
          {
            var tmp0__anonymous__q1qw7t = other.f1w_1;
            var tmp1__anonymous__uwfjfc_0 = other.g1w_1;
            var tmp2__anonymous__z9zvc9_0 = other.h1w_1;
            tmp0__anonymous__q1qw7t.i21(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
            tmp$ret$3 = size;
          }
          var rc = tmp$ret$3;
          other.k22(rc);
          tmp$ret$4 = rc;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var rc_0 = tmp$ret$5;
      _this__u8e3s4.l22(rc_0);
      tmp$ret$6 = rc_0;
    }
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.j1w_1 - _this__u8e3s4.h1w_1 | 0;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    {
      tmp$ret$1 = _this__u8e3s4.k1w_1 - _this__u8e3s4.j1w_1 | 0;
    }
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.h1w_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.j1w_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.w22();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    {
      tmp$ret$0 = other.h1w_1 - other.g1w_1 | 0;
    }
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.g1w_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.f1w_1.i21(_this__u8e3s4.f1w_1, other.g1w_1, size, newReadPosition);
    other.k22(size);
    _this__u8e3s4.v22(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    init_properties_BufferFactory_kt_l6j3be();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this.e23_1 = bufferSize;
    this.f23_1 = allocator;
  }
  DefaultBufferPool.prototype.g23 = function () {
    return new ChunkBuffer(this.f23_1.g21(this.e23_1), null, this);
  };
  DefaultBufferPool.prototype.h23 = function (instance) {
    this.f23_1.h21(instance.b22());
    DefaultPool.prototype.l23.call(this, instance);
    instance.m23();
  };
  DefaultBufferPool.prototype.l23 = function (instance) {
    return this.h23(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.n23 = function (instance) {
    DefaultPool.prototype.o23.call(this, instance);
    {
      var tmp$ret$0;
      {
        var tmp0__get_size__8hfv5c = instance.b22();
        tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.f21_1.byteLength);
      }
      var tmp1_check = tmp$ret$0.equals(toLong(this.e23_1));
      {
      }
      if (!tmp1_check) {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0__get_size__8hfv5c_0 = instance.b22();
            tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.f21_1.byteLength);
          }
          tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.e23_1 + ', actual: ' + toString(tmp$ret$1);
        }
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    {
      var tmp2_check = !(instance === Companion_getInstance_4().u1s_1);
      {
      }
      if (!tmp2_check) {
        var tmp$ret$3;
        {
          tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
        }
        var message_0 = tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    {
      var tmp3_check = !(instance === Companion_getInstance_1().a22());
      {
      }
      if (!tmp3_check) {
        var tmp$ret$4;
        {
          tmp$ret$4 = "Empty instance couldn't be recycled";
        }
        var message_1 = tmp$ret$4;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    {
      var tmp4_check = instance.p23() === 0;
      {
      }
      if (!tmp4_check) {
        var tmp$ret$5;
        {
          tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
        }
        var message_2 = tmp$ret$5;
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
    }
    {
      var tmp5_check = instance.q23() == null;
      {
      }
      if (!tmp5_check) {
        var tmp$ret$6;
        {
          tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
        }
        var message_3 = tmp$ret$6;
        throw IllegalStateException_init_$Create$(toString(message_3));
      }
    }
    {
      var tmp6_check = instance.t21_1 == null;
      {
      }
      if (!tmp6_check) {
        var tmp$ret$7;
        {
          tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
        }
        var message_4 = tmp$ret$7;
        throw IllegalStateException_init_$Create$(toString(message_4));
      }
    }
  };
  DefaultBufferPool.prototype.o23 = function (instance) {
    return this.n23(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.r23 = function (instance) {
    var tmp$ret$0;
    {
      var tmp0_apply = DefaultPool.prototype.s23.call(this, instance);
      {
      }
      {
        tmp0_apply.t23();
        tmp0_apply.a23();
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.s23 = function (instance) {
    return this.r23(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.$metadata$ = classMeta('DefaultBufferPool', undefined, undefined, undefined, undefined, DefaultPool.prototype);
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function init_properties_BufferFactory_kt_l6j3be() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    {
      {
      }
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
          var tmp1__anonymous__uwfjfc = _this__u8e3s4.h1w_1;
          var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j1w_1;
          var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
          if (writeRemaining < length) {
            throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
          }
          {
            {
              var tmp$ret$1;
              {
                {
                }
                var tmp$ret$0;
                {
                  var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
                  {
                  }
                  tmp$ret$0 = tmp0_let.i21(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
                }
                tmp$ret$1 = tmp$ret$0;
              }
            }
          }
          tmp$ret$2 = length;
        }
        var rc = tmp$ret$2;
        _this__u8e3s4.l22(rc);
        tmp$ret$3 = rc;
      }
    }
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    {
      var tmp0_require = length >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "length shouldn't be negative: " + length;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp$ret$1;
      {
        tmp$ret$1 = src.h1w_1 - src.g1w_1 | 0;
      }
      var tmp1_require = length <= tmp$ret$1;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = src.h1w_1 - src.g1w_1 | 0;
          }
          tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
        }
        var message_0 = tmp$ret$3;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    {
      var tmp$ret$4;
      {
        tmp$ret$4 = _this__u8e3s4.j1w_1 - _this__u8e3s4.h1w_1 | 0;
      }
      var tmp2_require = length <= tmp$ret$4;
      {
      }
      if (!tmp2_require) {
        var tmp$ret$6;
        {
          var tmp$ret$5;
          {
            tmp$ret$5 = _this__u8e3s4.j1w_1 - _this__u8e3s4.h1w_1 | 0;
          }
          tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
        }
        var message_1 = tmp$ret$6;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    {
      {
      }
      var tmp$ret$8;
      {
        {
        }
        var tmp$ret$7;
        {
          var tmp3__anonymous__ufb84q = _this__u8e3s4.f1w_1;
          var tmp4__anonymous__pkmkx7 = _this__u8e3s4.h1w_1;
          var tmp5__anonymous__kpxxpo = _this__u8e3s4.j1w_1;
          var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
          if (writeRemaining < length) {
            throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
          }
          {
            src.f1w_1.i21(tmp3__anonymous__ufb84q, src.g1w_1, length, tmp4__anonymous__pkmkx7);
            src.k22(length);
          }
          tmp$ret$7 = length;
        }
        var rc = tmp$ret$7;
        _this__u8e3s4.l22(rc);
        tmp$ret$8 = rc;
      }
    }
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    readFully_0(_this__u8e3s4 instanceof Buffer ? _this__u8e3s4 : THROW_CCE(), destination, offset, length);
  }
  function writeExact(_this__u8e3s4, size, name, block) {
    {
    }
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.h1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j1w_1;
        var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
        if (writeRemaining < size) {
          throw InsufficientSpaceException_init_$Create$(name, size, writeRemaining);
        }
        block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
        tmp$ret$0 = size;
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.l22(rc);
      tmp$ret$1 = rc;
    }
  }
  function readFully_0(_this__u8e3s4, destination, offset, length) {
    var tmp$ret$2;
    {
      {
      }
      var value;
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
          var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
          var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
          if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
            throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
          }
          value = copyTo_0(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
          tmp$ret$0 = length;
        }
        var rc = tmp$ret$0;
        _this__u8e3s4.k22(rc);
        tmp$ret$1 = rc;
      }
      tmp$ret$2 = value;
    }
  }
  function readExact(_this__u8e3s4, size, name, block) {
    {
    }
    var value;
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
        if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < size) {
          throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + size + '.');
        }
        value = block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
        tmp$ret$0 = size;
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.k22(rc);
      tmp$ret$1 = rc;
    }
    return value;
  }
  function readFully_1(_this__u8e3s4, dst, length) {
    {
      var tmp0_require = length >= 0;
      {
      }
      {
        {
        }
        if (!tmp0_require) {
          var tmp$ret$1;
          {
            tmp$ret$1 = 'Failed requirement.';
          }
          var message = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
    }
    {
      var tmp$ret$2;
      {
        tmp$ret$2 = dst.j1w_1 - dst.h1w_1 | 0;
      }
      var tmp1_require = length <= tmp$ret$2;
      {
      }
      {
        {
        }
        if (!tmp1_require) {
          var tmp$ret$3;
          {
            tmp$ret$3 = 'Failed requirement.';
          }
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
    }
    var tmp$ret$6;
    {
      {
      }
      var value;
      var tmp$ret$5;
      {
        {
        }
        var tmp$ret$4;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
          var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
          var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
          if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
            throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
          }
          tmp0__anonymous__q1qw7t.i21(dst.f1w_1, tmp1__anonymous__uwfjfc, length, dst.h1w_1);
          value = dst.l22(length);
          tmp$ret$4 = length;
        }
        var rc = tmp$ret$4;
        _this__u8e3s4.k22(rc);
        tmp$ret$5 = rc;
      }
      tmp$ret$6 = value;
    }
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    {
    }
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.h1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j1w_1;
        var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
        if (writeRemaining < 2) {
          throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
        }
        {
          {
            tmp0__anonymous__q1qw7t.f21_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
          }
        }
        tmp$ret$0 = 2;
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.l22(rc);
      tmp$ret$1 = rc;
    }
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    {
      {
      }
      var value;
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
          var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
          var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
          if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
            throw new EOFException('Not enough bytes to read a short integer of size 2.');
          }
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = tmp0__anonymous__q1qw7t.f21_1.getInt16(tmp1__anonymous__uwfjfc, false);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          value = tmp$ret$1;
          tmp$ret$2 = 2;
        }
        var rc = tmp$ret$2;
        _this__u8e3s4.k22(rc);
        tmp$ret$3 = rc;
      }
      tmp$ret$4 = value;
    }
    return tmp$ret$4;
  }
  function coerceAtMostMaxIntOrFail(_this__u8e3s4, message) {
    if (_this__u8e3s4.f1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
      throw IllegalArgumentException_init_$Create$(message);
    return _this__u8e3s4.t6();
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    while (true) {
      var $this_0 = $this;
      var tmp0_elvis_lhs = $this_0.q23();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return $this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var next = tmp;
      var tmp0 = next;
      $this = tmp0;
      continue;
    }
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.v23();
      current.w21(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    while (true) {
      var $this_0 = $this;
      var n_1 = n_0;
      var tmp$ret$0;
      {
        tmp$ret$0 = $this_0.h1w_1 - $this_0.g1w_1 | 0;
      }
      var rem = toLong(tmp$ret$0).v4(n_1);
      var tmp0_elvis_lhs = $this_0.q23();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return rem;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var next = tmp;
      var tmp0 = next;
      var tmp1 = rem;
      $this = tmp0;
      n_0 = tmp1;
      continue;
    }
  }
  function forEachChunk(_this__u8e3s4, block) {
    {
    }
    var current = _this__u8e3s4;
    $l$loop: do {
      block(current);
      var tmp0_elvis_lhs = current.q23();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      current = tmp;
    }
     while (true);
  }
  function buildPacket(block) {
    {
    }
    var builder = BytePacketBuilder_init_$Create$(null, 1, null);
    try {
      block(builder);
      return builder.yn();
    } catch ($p) {
      if ($p instanceof Error) {
        builder.kz();
        throw $p;
      } else {
        throw $p;
      }
    }
  }
  function BytePacketBuilder_init_$Init$(pool, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance_4().s1s_1;
    BytePacketBuilder.call($this, pool);
    return $this;
  }
  function BytePacketBuilder_init_$Create$(pool, $mask0, $marker) {
    return BytePacketBuilder_init_$Init$(pool, $mask0, $marker, Object.create(BytePacketBuilder.prototype));
  }
  function BytePacketBuilder(pool) {
    Output.call(this, pool);
  }
  BytePacketBuilder.prototype.d = function () {
    return this.w23();
  };
  BytePacketBuilder.prototype.l1g = function () {
    return this.w23() === 0;
  };
  BytePacketBuilder.prototype.x23 = function () {
  };
  BytePacketBuilder.prototype.y23 = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.r4 = function (value) {
    var tmp = Output.prototype.r4.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.c = function (value) {
    var tmp = Output.prototype.c.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.hf = function (value, startIndex, endIndex) {
    var tmp = Output.prototype.hf.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.yn = function () {
    var size = this.d();
    var head = this.e1u();
    return head == null ? Companion_getInstance_2().a24_1 : new ByteReadPacket(head, toLong(size), this.z23());
  };
  BytePacketBuilder.prototype.toString = function () {
    return 'BytePacketBuilder(' + this.d() + ' bytes written)';
  };
  BytePacketBuilder.$metadata$ = classMeta('BytePacketBuilder', undefined, undefined, undefined, undefined, Output.prototype);
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, Object.create(ByteReadPacket.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.a24_1 = new ByteReadPacket(Companion_getInstance_4().u1s_1, new Long(0, 0), Companion_getInstance_4().t1s_1);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.h24();
  }
  ByteReadPacket.prototype.p24 = function () {
    return null;
  };
  ByteReadPacket.prototype.q24 = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.r24 = function () {
  };
  ByteReadPacket.prototype.toString = function () {
    return 'ByteReadPacket(' + toString(this.x1x()) + ' bytes remaining)';
  };
  ByteReadPacket.$metadata$ = classMeta('ByteReadPacket', undefined, undefined, undefined, undefined, Input.prototype);
  function _set__head__b4pap2($this, newHead) {
    $this.r1x_1 = newHead;
    $this.s1x_1 = newHead.b22();
    $this.t1x_1 = newHead.c22();
    $this.u1x_1 = newHead.d22();
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.k1z())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t = current;
            var tmp$ret$4;
            $l$block_0: {
              var tmp$ret$6;
              {
                {
                }
                var tmp$ret$5;
                {
                  var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.f1w_1;
                  var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.g1w_1;
                  var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.h1w_1;
                  var inductionVariable = tmp1__anonymous__uwfjfc;
                  if (inductionVariable < tmp2__anonymous__z9zvc9)
                    do {
                      var index = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          tmp$ret$1 = tmp0__anonymous__q1qw7t_0.f21_1.getInt8(index);
                        }
                        tmp$ret$2 = tmp$ret$1;
                      }
                      var codepoint = tmp$ret$2 & 255;
                      var tmp_0;
                      if ((codepoint & 128) === 128) {
                        tmp_0 = true;
                      } else {
                        var tmp$ret$3;
                        {
                          var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.r4(tmp3__anonymous__ufb84q);
                            var tmp0 = copied;
                            copied = tmp0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$3 = tmp_1;
                        }
                        tmp_0 = !tmp$ret$3;
                      }
                      if (tmp_0) {
                        tmp0__anonymous__q1qw7t.k22(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$4 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable < tmp2__anonymous__z9zvc9);
                  tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                }
                var rc = tmp$ret$5;
                tmp0__anonymous__q1qw7t.k22(rc);
                tmp$ret$6 = rc;
              }
              tmp$ret$4 = true;
            }
            var rc_0 = tmp$ret$4;
            var tmp_2;
            if (rc_0) {
              tmp_2 = true;
            } else if (copied === max) {
              tmp_2 = false;
            } else {
              utf8 = true;
              tmp_2 = false;
            }
            tmp$ret$7 = tmp_2;
          }
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          {
            var tmp0__get_readRemaining__u3cy9h = current;
            tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h1w_1 - tmp0__get_readRemaining__u3cy9h.g1w_1 | 0;
          }
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              {
                var tmp3__anonymous__ufb84q = current;
                var tmp$ret$5;
                $l$block_3: {
                  var byteCount = 0;
                  var value = 0;
                  var lastByteCount = 0;
                  var tmp$ret$10;
                  {
                    {
                    }
                    var tmp$ret$9;
                    {
                      var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.f1w_1;
                      var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.g1w_1;
                      var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.h1w_1;
                      var inductionVariable = tmp1__anonymous__uwfjfc;
                      if (inductionVariable < tmp2__anonymous__z9zvc9)
                        do {
                          var index = inductionVariable;
                          inductionVariable = inductionVariable + 1 | 0;
                          var tmp$ret$3;
                          {
                            var tmp$ret$2;
                            {
                              tmp$ret$2 = tmp0__anonymous__q1qw7t.f21_1.getInt8(index);
                            }
                            tmp$ret$3 = tmp$ret$2;
                          }
                          var v = tmp$ret$3 & 255;
                          if ((v & 128) === 0) {
                            if (!(byteCount === 0)) {
                              malformedByteCount(byteCount);
                            }
                            var tmp$ret$4;
                            {
                              var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                              var tmp_0;
                              if (copied === max) {
                                tmp_0 = false;
                              } else {
                                out.r4(tmp3__anonymous__ufb84q_0);
                                var tmp0 = copied;
                                copied = tmp0 + 1 | 0;
                                tmp_0 = true;
                              }
                              tmp$ret$4 = tmp_0;
                            }
                            if (!tmp$ret$4) {
                              tmp3__anonymous__ufb84q.k22(index - tmp1__anonymous__uwfjfc | 0);
                              tmp$ret$5 = -1;
                              break $l$block_3;
                            }
                          } else if (byteCount === 0) {
                            var mask = 128;
                            value = v;
                            var inductionVariable_0 = 1;
                            if (inductionVariable_0 <= 6)
                              $l$loop: do {
                                var i = inductionVariable_0;
                                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                                if (!((value & mask) === 0)) {
                                  value = value & ~mask;
                                  mask = mask >> 1;
                                  var tmp2 = byteCount;
                                  byteCount = tmp2 + 1 | 0;
                                } else {
                                  break $l$loop;
                                }
                              }
                               while (inductionVariable_0 <= 6);
                            lastByteCount = byteCount;
                            var tmp3 = byteCount;
                            byteCount = tmp3 - 1 | 0;
                            if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                              tmp3__anonymous__ufb84q.k22(index - tmp1__anonymous__uwfjfc | 0);
                              tmp$ret$5 = lastByteCount;
                              break $l$block_3;
                            }
                          } else {
                            value = value << 6 | v & 127;
                            var tmp4 = byteCount;
                            byteCount = tmp4 - 1 | 0;
                            if (byteCount === 0) {
                              if (isBmpCodePoint(value)) {
                                var tmp$ret$6;
                                {
                                  var tmp4__anonymous__pkmkx7 = numberToChar(value);
                                  var tmp_1;
                                  if (copied === max) {
                                    tmp_1 = false;
                                  } else {
                                    out.r4(tmp4__anonymous__pkmkx7);
                                    var tmp0_0 = copied;
                                    copied = tmp0_0 + 1 | 0;
                                    tmp_1 = true;
                                  }
                                  tmp$ret$6 = tmp_1;
                                }
                                if (!tmp$ret$6) {
                                  tmp3__anonymous__ufb84q.k22(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                                  tmp$ret$5 = -1;
                                  break $l$block_3;
                                }
                              } else if (!isValidCodePoint(value)) {
                                malformedCodePoint(value);
                              } else {
                                var tmp_2;
                                var tmp$ret$7;
                                {
                                  var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                                  var tmp_3;
                                  if (copied === max) {
                                    tmp_3 = false;
                                  } else {
                                    out.r4(tmp5__anonymous__kpxxpo);
                                    var tmp0_1 = copied;
                                    copied = tmp0_1 + 1 | 0;
                                    tmp_3 = true;
                                  }
                                  tmp$ret$7 = tmp_3;
                                }
                                if (!tmp$ret$7) {
                                  tmp_2 = true;
                                } else {
                                  var tmp$ret$8;
                                  {
                                    var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                                    var tmp_4;
                                    if (copied === max) {
                                      tmp_4 = false;
                                    } else {
                                      out.r4(tmp6__anonymous__fv9ai5);
                                      var tmp0_2 = copied;
                                      copied = tmp0_2 + 1 | 0;
                                      tmp_4 = true;
                                    }
                                    tmp$ret$8 = tmp_4;
                                  }
                                  tmp_2 = !tmp$ret$8;
                                }
                                if (tmp_2) {
                                  tmp3__anonymous__ufb84q.k22(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                                  tmp$ret$5 = -1;
                                  break $l$block_3;
                                }
                              }
                              value = 0;
                            }
                          }
                        }
                         while (inductionVariable < tmp2__anonymous__z9zvc9);
                      tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                    }
                    var rc = tmp$ret$9;
                    tmp3__anonymous__ufb84q.k22(rc);
                    tmp$ret$10 = rc;
                  }
                  tmp$ret$5 = 0;
                }
                var size_0 = tmp$ret$5;
                tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              }
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              {
                var tmp1__get_readRemaining__qliyus = current;
                tmp$ret$12 = tmp1__get_readRemaining__qliyus.h1w_1 - tmp1__get_readRemaining__qliyus.g1w_1 | 0;
              }
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              {
                var tmp2__get_endGap__m31424 = current;
                tmp$ret$13 = tmp2__get_endGap__m31424.k1w_1 - tmp2__get_endGap__m31424.j1w_1 | 0;
              }
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    while (true) {
      var $this_1 = $this_0;
      var n_1 = n_0;
      var skipped_1 = skipped_0;
      if (n_1.equals(new Long(0, 0)))
        return skipped_1;
      var tmp0_elvis_lhs = $this_1.g25(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return skipped_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = current.h1w_1 - current.g1w_1 | 0;
        }
        var tmp0_minOf = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf.f1(n_1) <= 0 ? tmp0_minOf : n_1;
      }
      var size = tmp$ret$1.t6();
      current.k22(size);
      var tmp1_this = $this_1;
      tmp1_this.t1x_1 = tmp1_this.t1x_1 + size | 0;
      afterRead($this_1, current);
      var tmp0 = $this_1;
      var tmp$ret$2;
      {
        tmp$ret$2 = n_1.w4(toLong(size));
      }
      var tmp1 = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = skipped_1.v4(toLong(size));
      }
      var tmp2 = tmp$ret$3;
      $this_0 = tmp0;
      n_0 = tmp1;
      skipped_0 = tmp2;
      continue;
    }
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.g25(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = current.h1w_1 - current.g1w_1 | 0;
        }
        var tmp0_minOf = tmp$ret$0;
        var tmp1_minOf = currentCount;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      }
      var size = tmp$ret$1;
      current.k22(size);
      var tmp1_this = $this;
      tmp1_this.t1x_1 = tmp1_this.t1x_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.w1x_1 ? current.q23() == null : false) {
      $this.t1x_1 = current.c22();
      $this.u1x_1 = current.d22();
      $this.t24(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = current.h1w_1 - current.g1w_1 | 0;
    }
    var size = tmp$ret$0;
    var tmp$ret$2;
    {
      Companion_getInstance_1();
      var tmp$ret$1;
      {
        tmp$ret$1 = current.k1w_1 - current.j1w_1 | 0;
      }
      var tmp0_minOf = 8 - tmp$ret$1 | 0;
      tmp$ret$2 = Math.min(size, tmp0_minOf);
    }
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.q1x_1.j21();
      Companion_getInstance_1();
      new_0.q22(8);
      new_0.i25(current.v23());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.w21($this.q1x_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.q1x_1.j21();
    var chunk2 = $this.q1x_1.j21();
    Companion_getInstance_1();
    chunk1.q22(8);
    Companion_getInstance_1();
    chunk2.q22(8);
    chunk1.i25(chunk2);
    chunk2.i25(current.v23());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.t24(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$loop_0: while (true) {
      var $this_1 = $this_0;
      var current_1 = current_0;
      var empty_1 = empty_0;
      if (current_1 === empty_1) {
        return doFill($this_1);
      }
      var next = current_1.v23();
      current_1.w21($this_1.q1x_1);
      var tmp;
      if (next == null) {
        _set__head__b4pap2($this_1, empty_1);
        $this_1.t24(new Long(0, 0));
        var tmp0 = $this_1;
        var tmp1 = empty_1;
        var tmp2 = empty_1;
        $this_0 = tmp0;
        current_0 = tmp1;
        empty_0 = tmp2;
        continue $l$loop_0;
      } else {
        var tmp$ret$0;
        {
          tmp$ret$0 = next.h1w_1 > next.g1w_1;
        }
        if (tmp$ret$0) {
          _set__head__b4pap2($this_1, next);
          var tmp0_this = $this_1;
          var tmp$ret$2;
          {
            var tmp0_minus = tmp0_this.v1x_1;
            var tmp$ret$1;
            {
              tmp$ret$1 = next.h1w_1 - next.g1w_1 | 0;
            }
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.w4(toLong(tmp1_minus));
          }
          tmp0_this.t24(tmp$ret$2);
          tmp = next;
        } else {
          var tmp3 = $this_1;
          var tmp4 = next;
          var tmp5 = empty_1;
          $this_0 = tmp3;
          current_0 = tmp4;
          empty_0 = tmp5;
          continue $l$loop_0;
        }
      }
      return tmp;
    }
  }
  function doFill($this) {
    if ($this.w1x_1)
      return null;
    var chunk = $this.p24();
    if (chunk == null) {
      $this.w1x_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.r1x_1);
    if (tail === Companion_getInstance_4().u1s_1) {
      _set__head__b4pap2($this, chunk);
      {
        var tmp0_require = $this.v1x_1.equals(new Long(0, 0));
        {
        }
        if (!tmp0_require) {
          throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
        }
      }
      var tmp0_safe_receiver = chunk.q23();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.t24(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.i25(chunk);
      var tmp2_this = $this;
      tmp2_this.t24(tmp2_this.v1x_1.v4(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$loop: while (true) {
      var $this_1 = $this_0;
      var minSize_1 = minSize_0;
      var head_1 = head_0;
      var tmp$ret$0;
      {
        tmp$ret$0 = $this_1.u1x_1 - $this_1.t1x_1 | 0;
      }
      var headSize = tmp$ret$0;
      if (headSize >= minSize_1)
        return head_1;
      var tmp0_elvis_lhs = head_1.q23();
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var next = tmp;
      if (headSize === 0) {
        if (!(head_1 === Companion_getInstance_4().u1s_1)) {
          $this_1.h25(head_1);
        }
        var tmp0 = $this_1;
        var tmp1 = minSize_1;
        var tmp2 = next;
        $this_0 = tmp0;
        minSize_0 = tmp1;
        head_0 = tmp2;
        continue $l$loop;
      } else {
        var desiredExtraBytes = minSize_1 - headSize | 0;
        var copied = writeBufferAppend(head_1, next, desiredExtraBytes);
        $this_1.u1x_1 = head_1.d22();
        var tmp2_this = $this_1;
        var tmp$ret$1;
        {
          var tmp0_minus = tmp2_this.v1x_1;
          tmp$ret$1 = tmp0_minus.w4(toLong(copied));
        }
        tmp2_this.t24(tmp$ret$1);
        var tmp$ret$2;
        {
          tmp$ret$2 = next.h1w_1 > next.g1w_1;
        }
        if (!tmp$ret$2) {
          head_1.i25(null);
          head_1.i25(next.v23());
          next.w21($this_1.q1x_1);
        } else {
          next.p22(copied);
        }
      }
      var tmp$ret$3;
      {
        tmp$ret$3 = head_1.h1w_1 - head_1.g1w_1 | 0;
      }
      if (tmp$ret$3 >= minSize_1)
        return head_1;
      Companion_getInstance_1();
      if (minSize_1 > 8) {
        minSizeIsTooBig($this_1, minSize_1);
      }
      var tmp3 = $this_1;
      var tmp4 = minSize_1;
      var tmp5 = head_1;
      $this_0 = tmp3;
      minSize_0 = tmp4;
      head_0 = tmp5;
      continue $l$loop;
    }
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    {
      tmp$ret$0 = head.h1w_1 - head.g1w_1 | 0;
    }
    if (tmp$ret$0 === 0) {
      $this.h25(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    this.q1x_1 = pool;
    this.r1x_1 = head;
    this.s1x_1 = head.b22();
    this.t1x_1 = head.c22();
    this.u1x_1 = head.d22();
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_minus = this.u1x_1 - this.t1x_1 | 0;
      tmp$ret$0 = remaining.w4(toLong(tmp0_minus));
    }
    tmp.v1x_1 = tmp$ret$0;
    this.w1x_1 = false;
  }
  Input.prototype.z23 = function () {
    return this.q1x_1;
  };
  Input.prototype.k1z = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    {
      tmp$ret$0 = this.u1x_1 - this.t1x_1 | 0;
    }
    if (tmp$ret$0 === 0) {
      tmp_0 = this.v1x_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.w1x_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Input.prototype.b24 = function () {
    var tmp$ret$0;
    {
      var tmp0_also = this.r1x_1;
      {
      }
      {
        tmp0_also.n22(this.t1x_1);
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Input.prototype.s24 = function () {
    return this.t1x_1;
  };
  Input.prototype.t24 = function (newValue) {
    {
      var tmp0_require = newValue.f1(new Long(0, 0)) >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    this.v1x_1 = newValue;
  };
  Input.prototype.u24 = function () {
    return this.u1x_1 - this.t1x_1 | 0;
  };
  Input.prototype.x1x = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = this.u1x_1 - this.t1x_1 | 0;
    }
    return toLong(tmp$ret$0).v4(this.v1x_1);
  };
  Input.prototype.m1y = function () {
    return !(this.t1x_1 === this.u1x_1) ? true : !this.v1x_1.equals(new Long(0, 0));
  };
  Input.prototype.kz = function () {
    var head = this.b24();
    var empty = Companion_getInstance_4().u1s_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.t24(new Long(0, 0));
      releaseAll(head, this.q1x_1);
    }
  };
  Input.prototype.y1q = function () {
    this.kz();
    if (!this.w1x_1) {
      this.w1x_1 = true;
    }
    this.r24();
  };
  Input.prototype.e1u = function () {
    var head = this.b24();
    var empty = Companion_getInstance_4().u1s_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.t24(new Long(0, 0));
    return head;
  };
  Input.prototype.v24 = function () {
    var head = this.b24();
    var next = head.q23();
    var empty = Companion_getInstance_4().u1s_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.t24(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      {
        var tmp0_minus = tmp0_this.v1x_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = next.h1w_1 - next.g1w_1 | 0;
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp0_minus.w4(toLong(tmp1_minus));
      }
      tmp0_this.t24(tmp$ret$1);
    }
    head.i25(null);
    return head;
  };
  Input.prototype.w24 = function (chain) {
    if (chain === Companion_getInstance_4().u1s_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.r1x_1 === Companion_getInstance_4().u1s_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = this.u1x_1 - this.t1x_1 | 0;
        }
        var tmp0_minus = tmp$ret$0;
        tmp$ret$1 = size.w4(toLong(tmp0_minus));
      }
      this.t24(tmp$ret$1);
    } else {
      findTail(this.r1x_1).i25(chain);
      var tmp0_this = this;
      tmp0_this.t24(tmp0_this.v1x_1.v4(size));
    }
  };
  Input.prototype.x24 = function (chain) {
    var tail = findTail(this.b24());
    var tmp$ret$0;
    {
      tmp$ret$0 = chain.h1w_1 - chain.g1w_1 | 0;
    }
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = tail.j1w_1 - tail.h1w_1 | 0;
      }
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.b24() === tail) {
      this.u1x_1 = tail.d22();
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      {
        var tmp0_plus = tmp0_this.v1x_1;
        tmp$ret$2 = tmp0_plus.v4(toLong(size));
      }
      tmp0_this.t24(tmp$ret$2);
    }
    return true;
  };
  Input.prototype.y24 = function (n) {
    {
      var tmp0_require = n >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Negative discard is not allowed: ' + n;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  Input.prototype.k22 = function (n) {
    if (!(this.y24(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  Input.prototype.z24 = function (n) {
    if (n.f1(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  Input.prototype.a25 = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.k1z() : false)
      return '';
    var remaining = this.x1x();
    if (remaining.f1(new Long(0, 0)) > 0 ? toLong(max).f1(remaining) >= 0 : false) {
      var tmp = remaining.t6();
      return readTextExactBytes$default(this, tmp, null, 2, null);
    }
    var tmp$ret$1;
    {
      var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
      {
      }
      var tmp$ret$0;
      {
        var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
        {
        }
        {
          readASCII(this, tmp0_apply, min, max);
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  Input.prototype.b25 = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = 0;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return this.a25(min, max);
  };
  Input.prototype.c25 = function (minSize) {
    return prepareReadLoop(this, minSize, this.b24());
  };
  Input.prototype.d25 = function (current) {
    return this.e25(current);
  };
  Input.prototype.e25 = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().u1s_1);
  };
  Input.prototype.f25 = function (current) {
    var tmp0_elvis_lhs = current.q23();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = current.h1w_1 - current.g1w_1 | 0;
    }
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    {
      Companion_getInstance_1();
      var tmp$ret$1;
      {
        tmp$ret$1 = current.k1w_1 - current.j1w_1 | 0;
      }
      var tmp0_minOf = 8 - tmp$ret$1 | 0;
      tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    }
    var overrunSize = tmp$ret$2;
    if (next.e22() < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.w22();
      this.u1x_1 = current.d22();
      var tmp1_this = this;
      var tmp$ret$3;
      {
        var tmp1_plus = tmp1_this.v1x_1;
        tmp$ret$3 = tmp1_plus.v4(toLong(overrunSize));
      }
      tmp1_this.t24(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      {
        var tmp2_minus = tmp2_this.v1x_1;
        var tmp$ret$4;
        {
          tmp$ret$4 = next.h1w_1 - next.g1w_1 | 0;
        }
        var tmp3_minus = tmp$ret$4 - overrunSize | 0;
        tmp$ret$5 = tmp2_minus.w4(toLong(tmp3_minus));
      }
      tmp2_this.t24(tmp$ret$5);
      current.v23();
      current.w21(this.q1x_1);
    }
  };
  Input.prototype.p24 = function () {
    var buffer = this.q1x_1.j21();
    try {
      Companion_getInstance_1();
      buffer.q22(8);
      var tmp = buffer.b22();
      var tmp_0 = buffer.d22();
      var tmp$ret$0;
      {
        tmp$ret$0 = buffer.j1w_1 - buffer.h1w_1 | 0;
      }
      var copied = this.q24(tmp, tmp_0, tmp$ret$0);
      if (copied === 0) {
        this.w1x_1 = true;
        var tmp$ret$1;
        {
          tmp$ret$1 = buffer.h1w_1 > buffer.g1w_1;
        }
        if (!tmp$ret$1) {
          buffer.w21(this.q1x_1);
          return null;
        }
      }
      buffer.l22(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.w21(this.q1x_1);
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  Input.prototype.h24 = function () {
    if (!this.w1x_1) {
      this.w1x_1 = true;
    }
  };
  Input.prototype.g25 = function (minSize) {
    var head = this.b24();
    if ((this.u1x_1 - this.t1x_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  Input.prototype.h25 = function (head) {
    var tmp0_elvis_lhs = head.v23();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().u1s_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    {
      var tmp0_minus = tmp1_this.v1x_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = next.h1w_1 - next.g1w_1 | 0;
      }
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.w4(toLong(tmp1_minus));
    }
    tmp1_this.t24(tmp$ret$1);
    head.w21(this.q1x_1);
    return next;
  };
  Input.$metadata$ = classMeta('Input', [Closeable]);
  function takeWhile(_this__u8e3s4, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    try {
      $l$loop_0: do {
        if (!block(current)) {
          break $l$loop_0;
        }
        release = false;
        var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var next = tmp_0;
        current = next;
        release = true;
      }
       while (true);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function takeWhileSize(_this__u8e3s4, initialSize, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, initialSize);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    var size = initialSize;
    try {
      $l$loop: do {
        var tmp$ret$0;
        {
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$0 = tmp0__get_readRemaining__u3cy9h.h1w_1 - tmp0__get_readRemaining__u3cy9h.g1w_1 | 0;
        }
        var before = tmp$ret$0;
        var after;
        if (before >= size) {
          try {
            size = block(current);
          }finally {
            var tmp$ret$1;
            {
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$1 = tmp1__get_readRemaining__qliyus.h1w_1 - tmp1__get_readRemaining__qliyus.g1w_1 | 0;
            }
            after = tmp$ret$1;
          }
        } else {
          after = before;
        }
        release = false;
        var tmp_0;
        if (after === 0) {
          tmp_0 = prepareReadNextHead(_this__u8e3s4, current);
        } else {
          var tmp_1;
          if (after < size) {
            tmp_1 = true;
          } else {
            var tmp$ret$2;
            {
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$2 = tmp2__get_endGap__m31424.k1w_1 - tmp2__get_endGap__m31424.j1w_1 | 0;
            }
            var tmp_2 = tmp$ret$2;
            Companion_getInstance_1();
            tmp_1 = tmp_2 < 8;
          }
          if (tmp_1) {
            completeReadHead(_this__u8e3s4, current);
            tmp_0 = prepareReadFirstHead(_this__u8e3s4, size);
          } else {
            tmp_0 = current;
          }
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_3;
        if (tmp1_elvis_lhs == null) {
          break $l$loop;
        } else {
          tmp_3 = tmp1_elvis_lhs;
        }
        var next = tmp_3;
        current = next;
        release = true;
      }
       while (size > 0);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.z24(new Long(-1, 2147483647));
  }
  function readFully_2(_this__u8e3s4, dst, offset, length) {
    {
      var tmp$ret$4;
      {
        var remaining = length;
        var dstOffset = offset;
        var tmp$ret$0;
        $l$block: {
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          try {
            $l$loop_0: do {
              var tmp$ret$3;
              {
                var tmp0__anonymous__q1qw7t = current;
                var tmp$ret$2;
                {
                  var tmp0_minOf = remaining;
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
                  }
                  var tmp1_minOf = tmp$ret$1;
                  tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
                }
                var count = tmp$ret$2;
                {
                  var tmp1__anonymous__uwfjfc = dstOffset;
                  readFully_0(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
                }
                remaining = remaining - count | 0;
                dstOffset = dstOffset + count | 0;
                tmp$ret$3 = remaining > 0;
              }
              if (!tmp$ret$3) {
                break $l$loop_0;
              }
              release = false;
              var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
              var tmp_0;
              if (tmp1_elvis_lhs == null) {
                break $l$loop_0;
              } else {
                tmp_0 = tmp1_elvis_lhs;
              }
              var next = tmp_0;
              current = next;
              release = true;
            }
             while (true);
          }finally {
            if (release) {
              completeReadHead(_this__u8e3s4, current);
            }
          }
        }
        tmp$ret$4 = remaining;
      }
      var tmp2_requireNoRemaining = tmp$ret$4;
      if (tmp2_requireNoRemaining > 0) {
        prematureEndOfStream(tmp2_requireNoRemaining);
      }
    }
  }
  function readFully_3(_this__u8e3s4, dst, length) {
    {
      var tmp$ret$5;
      {
        var remaining = length;
        var dstOffset = 0;
        var tmp$ret$1;
        $l$block: {
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          try {
            $l$loop_0: do {
              var tmp$ret$4;
              {
                var tmp0__anonymous__q1qw7t = current;
                var tmp$ret$3;
                {
                  var tmp0_minOf = remaining;
                  var tmp$ret$2;
                  {
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
                  }
                  var tmp1_minOf = tmp$ret$2;
                  tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
                }
                var count = tmp$ret$3;
                {
                  var tmp1__anonymous__uwfjfc = dstOffset;
                  readFully_1(tmp0__anonymous__q1qw7t, dst, count);
                }
                remaining = remaining - count | 0;
                dstOffset = dstOffset + count | 0;
                tmp$ret$4 = remaining > 0;
              }
              if (!tmp$ret$4) {
                break $l$loop_0;
              }
              release = false;
              var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
              var tmp_0;
              if (tmp1_elvis_lhs == null) {
                break $l$loop_0;
              } else {
                tmp_0 = tmp1_elvis_lhs;
              }
              var next = tmp_0;
              current = next;
              release = true;
            }
             while (true);
          }finally {
            if (release) {
              completeReadHead(_this__u8e3s4, current);
            }
          }
        }
        tmp$ret$5 = remaining;
      }
      var tmp2_requireNoRemaining = tmp$ret$5;
      if (tmp2_requireNoRemaining > 0) {
        prematureEndOfStream(tmp2_requireNoRemaining);
      }
    }
  }
  function requireNoRemaining(_this__u8e3s4) {
    if (_this__u8e3s4 > 0) {
      prematureEndOfStream(_this__u8e3s4);
    }
  }
  function readFullyBytesTemplate(_this__u8e3s4, initialDstOffset, length, readBlock) {
    var remaining = length;
    var dstOffset = initialDstOffset;
    var tmp$ret$0;
    $l$block: {
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          {
            var tmp0__anonymous__q1qw7t = current;
            var tmp$ret$2;
            {
              var tmp0_minOf = remaining;
              var tmp$ret$1;
              {
                tmp$ret$1 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
              }
              var tmp1_minOf = tmp$ret$1;
              tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
            }
            var count = tmp$ret$2;
            readBlock(tmp0__anonymous__q1qw7t, dstOffset, count);
            remaining = remaining - count | 0;
            dstOffset = dstOffset + count | 0;
            tmp$ret$3 = remaining > 0;
          }
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    return remaining;
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4.u1x_1 - _this__u8e3s4.t1x_1 | 0;
      }
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.t1x_1;
        _this__u8e3s4.t1x_1 = index + 2 | 0;
        var tmp$ret$2;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.s1x_1;
          var tmp$ret$1;
          {
            tmp$ret$1 = tmp0__anonymous__q1qw7t.f21_1.getInt16(index, false);
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      {
        tmp$ret$4 = readShortFallback(_this__u8e3s4);
      }
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readPrimitive(_this__u8e3s4, size, main, fallback) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.u1x_1 - _this__u8e3s4.t1x_1 | 0;
    }
    if (tmp$ret$0 > size) {
      var index = _this__u8e3s4.t1x_1;
      _this__u8e3s4.t1x_1 = index + size | 0;
      return main(_this__u8e3s4.s1x_1, index);
    }
    return fallback();
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    {
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        prematureEndOfStream(2);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = readShort(head);
      }
      var value = tmp$ret$0;
      completeReadHead(_this__u8e3s4, head);
      tmp$ret$1 = value;
    }
    return tmp$ret$1;
  }
  function readPrimitiveFallback(_this__u8e3s4, size, read) {
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, size);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(size);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var value = read(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.e1u();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      {
        {
        }
        var current = oldTail;
        $l$loop: do {
          {
            var tmp0__anonymous__q1qw7t = current;
            var tmp_0 = tmp0__anonymous__q1qw7t.b22();
            var tmp_1 = tmp0__anonymous__q1qw7t.c22();
            var tmp$ret$0;
            {
              tmp$ret$0 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
            }
            $this.y23(tmp_0, tmp_1, tmp$ret$0);
          }
          var tmp0_elvis_lhs_0 = current.q23();
          var tmp_2;
          if (tmp0_elvis_lhs_0 == null) {
            break $l$loop;
          } else {
            tmp_2 = tmp0_elvis_lhs_0;
          }
          current = tmp_2;
        }
         while (true);
      }
    }finally {
      releaseAll(oldTail, $this.w1t_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.w1t_1.j21();
    Companion_getInstance_1();
    new_0.q22(8);
    $this.v21(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.y1t_1;
    if (_tail == null) {
      $this.x1t_1 = head;
      $this.d1u_1 = 0;
    } else {
      _tail.i25(head);
      var tailPosition = $this.a1u_1;
      _tail.m22(tailPosition);
      var tmp0_this = $this;
      tmp0_this.d1u_1 = tmp0_this.d1u_1 + (tailPosition - $this.c1u_1 | 0) | 0;
    }
    $this.y1t_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.d1u_1 = tmp1_this.d1u_1 + chainedSizeDelta | 0;
    $this.z1t_1 = newTail.b22();
    $this.a1u_1 = newTail.d22();
    $this.c1u_1 = newTail.c22();
    $this.b1u_1 = newTail.f22();
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).z22(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.a1u_1;
    tmp0_this.a1u_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      var buffer = $this.e24(3);
      try {
        var tmp$ret$11;
        {
          var tmp$ret$10;
          {
            var tmp16_putUtf8Char = buffer.f1w_1;
            var tmp17_putUtf8Char = buffer.h1w_1;
            var tmp$ret$0;
            {
              tmp$ret$0 = Char__toInt_impl_vasixd(c);
            }
            var tmp18_putUtf8Char = tmp$ret$0;
            var tmp0_subject = tmp18_putUtf8Char;
            var tmp;
            if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
              {
                var tmp0_storeAt = toByte(tmp18_putUtf8Char);
                tmp16_putUtf8Char.f21_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
              }
              tmp = 1;
            } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
              var tmp$ret$1;
              {
                var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
                tmp$ret$1 = tmp16_putUtf8Char.f21_1.setInt8(tmp17_putUtf8Char, tmp1_set);
              }
              var tmp$ret$2;
              {
                var tmp2_set = tmp17_putUtf8Char + 1 | 0;
                var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
                tmp$ret$2 = tmp16_putUtf8Char.f21_1.setInt8(tmp2_set, tmp3_set);
              }
              tmp = 2;
            } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
              var tmp$ret$3;
              {
                var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
                tmp$ret$3 = tmp16_putUtf8Char.f21_1.setInt8(tmp17_putUtf8Char, tmp4_set);
              }
              var tmp$ret$4;
              {
                var tmp5_set = tmp17_putUtf8Char + 1 | 0;
                var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
                tmp$ret$4 = tmp16_putUtf8Char.f21_1.setInt8(tmp5_set, tmp6_set);
              }
              var tmp$ret$5;
              {
                var tmp7_set = tmp17_putUtf8Char + 2 | 0;
                var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
                tmp$ret$5 = tmp16_putUtf8Char.f21_1.setInt8(tmp7_set, tmp8_set);
              }
              tmp = 3;
            } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
              var tmp$ret$6;
              {
                var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
                tmp$ret$6 = tmp16_putUtf8Char.f21_1.setInt8(tmp17_putUtf8Char, tmp9_set);
              }
              var tmp$ret$7;
              {
                var tmp10_set = tmp17_putUtf8Char + 1 | 0;
                var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
                tmp$ret$7 = tmp16_putUtf8Char.f21_1.setInt8(tmp10_set, tmp11_set);
              }
              var tmp$ret$8;
              {
                var tmp12_set = tmp17_putUtf8Char + 2 | 0;
                var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
                tmp$ret$8 = tmp16_putUtf8Char.f21_1.setInt8(tmp12_set, tmp13_set);
              }
              var tmp$ret$9;
              {
                var tmp14_set = tmp17_putUtf8Char + 3 | 0;
                var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
                tmp$ret$9 = tmp16_putUtf8Char.f21_1.setInt8(tmp14_set, tmp15_set);
              }
              tmp = 4;
            } else {
              malformedCodePoint(tmp18_putUtf8Char);
            }
            tmp$ret$10 = tmp;
          }
          var size = tmp$ret$10;
          buffer.l22(size);
          tmp$ret$11 = size;
        }
        var result = tmp$ret$11;
        {
          var tmp0_check = result >= 0;
          {
          }
          if (!tmp0_check) {
            var tmp$ret$12;
            {
              tmp$ret$12 = "The returned value shouldn't be negative";
            }
            var message = tmp$ret$12;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.x21();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.m22($this.a1u_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = tail.h1w_1 - tail.g1w_1 | 0;
    }
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    {
      tmp$ret$1 = foreignStolen.h1w_1 - foreignStolen.g1w_1 | 0;
    }
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      {
        tmp$ret$2 = tail.k1w_1 - tail.j1w_1 | 0;
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = tail.j1w_1 - tail.h1w_1 | 0;
      }
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.e22() : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.d24(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      {
        tmp$ret$4 = tail.j1w_1 - tail.h1w_1 | 0;
      }
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      {
        tmp$ret$5 = tail.k1w_1 - tail.j1w_1 | 0;
      }
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.x21();
      var tmp0_safe_receiver = foreignStolen.v23();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        {
          {
          }
          tmp$ret$6 = $this.d24(tmp0_safe_receiver);
        }
      }
      foreignStolen.w21(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.x1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.x1t_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.q23());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.i25(foreignStolen);
    }
    tail.w21($this.w1t_1);
    $this.y1t_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.w1t_1 = pool;
    this.x1t_1 = null;
    this.y1t_1 = null;
    this.z1t_1 = Companion_getInstance_6().j25_1;
    this.a1u_1 = 0;
    this.b1u_1 = 0;
    this.c1u_1 = 0;
    this.d1u_1 = 0;
  }
  Output.prototype.z23 = function () {
    return this.w1t_1;
  };
  Output.prototype.w23 = function () {
    return this.d1u_1 + (this.a1u_1 - this.c1u_1 | 0) | 0;
  };
  Output.prototype.b24 = function () {
    var tmp0_elvis_lhs = this.x1t_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().u1s_1 : tmp0_elvis_lhs;
  };
  Output.prototype.c24 = function () {
    return this.b1u_1 - this.a1u_1 | 0;
  };
  Output.prototype.ad = function () {
    flushChain(this);
  };
  Output.prototype.e1u = function () {
    var tmp0_elvis_lhs = this.x1t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.y1t_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.m22(this.a1u_1);
    this.x1t_1 = null;
    this.y1t_1 = null;
    this.a1u_1 = 0;
    this.b1u_1 = 0;
    this.c1u_1 = 0;
    this.d1u_1 = 0;
    this.z1t_1 = Companion_getInstance_6().j25_1;
    return head;
  };
  Output.prototype.v21 = function (buffer) {
    {
      var tmp0_check = buffer.q23() == null;
      {
      }
      if (!tmp0_check) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'It should be a single buffer chunk.';
        }
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  Output.prototype.d24 = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_minus = remainingAll(head);
        var tmp$ret$0;
        {
          tmp$ret$0 = tail.h1w_1 - tail.g1w_1 | 0;
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp0_minus.w4(toLong(tmp1_minus));
      }
      var tmp2_toIntOrFail = tmp$ret$1;
      if (tmp2_toIntOrFail.f1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
        failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
      }
      tmp$ret$2 = tmp2_toIntOrFail.t6();
    }
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  Output.prototype.z22 = function (v) {
    var index = this.a1u_1;
    if (index < this.b1u_1) {
      this.a1u_1 = index + 1 | 0;
      var tmp$ret$0;
      {
        var tmp0_set = this.z1t_1;
        tmp$ret$0 = tmp0_set.f21_1.setInt8(index, v);
      }
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  Output.prototype.y1q = function () {
    try {
      this.ad();
    }finally {
      this.x23();
    }
  };
  Output.prototype.r4 = function (value) {
    var tailPosition = this.a1u_1;
    if ((this.b1u_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      {
        var tmp16_putUtf8Char = this.z1t_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(value);
        }
        var tmp17_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp17_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          {
            var tmp0_storeAt = toByte(tmp17_putUtf8Char);
            tmp16_putUtf8Char.f21_1.setInt8(tailPosition, tmp0_storeAt);
          }
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          {
            var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
            tmp$ret$1 = tmp16_putUtf8Char.f21_1.setInt8(tailPosition, tmp1_set);
          }
          var tmp$ret$2;
          {
            var tmp2_set = tailPosition + 1 | 0;
            var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
            tmp$ret$2 = tmp16_putUtf8Char.f21_1.setInt8(tmp2_set, tmp3_set);
          }
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          {
            var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
            tmp$ret$3 = tmp16_putUtf8Char.f21_1.setInt8(tailPosition, tmp4_set);
          }
          var tmp$ret$4;
          {
            var tmp5_set = tailPosition + 1 | 0;
            var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
            tmp$ret$4 = tmp16_putUtf8Char.f21_1.setInt8(tmp5_set, tmp6_set);
          }
          var tmp$ret$5;
          {
            var tmp7_set = tailPosition + 2 | 0;
            var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
            tmp$ret$5 = tmp16_putUtf8Char.f21_1.setInt8(tmp7_set, tmp8_set);
          }
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          {
            var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
            tmp$ret$6 = tmp16_putUtf8Char.f21_1.setInt8(tailPosition, tmp9_set);
          }
          var tmp$ret$7;
          {
            var tmp10_set = tailPosition + 1 | 0;
            var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
            tmp$ret$7 = tmp16_putUtf8Char.f21_1.setInt8(tmp10_set, tmp11_set);
          }
          var tmp$ret$8;
          {
            var tmp12_set = tailPosition + 2 | 0;
            var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
            tmp$ret$8 = tmp16_putUtf8Char.f21_1.setInt8(tmp12_set, tmp13_set);
          }
          var tmp$ret$9;
          {
            var tmp14_set = tailPosition + 3 | 0;
            var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
            tmp$ret$9 = tmp16_putUtf8Char.f21_1.setInt8(tmp14_set, tmp15_set);
          }
          tmp = 4;
        } else {
          malformedCodePoint(tmp17_putUtf8Char);
        }
        tmp$ret$10 = tmp;
      }
      var size = tmp$ret$10;
      this.a1u_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  Output.prototype.c = function (value) {
    if (value == null) {
      this.hf('null', 0, 4);
    } else {
      this.hf(value, 0, charSequenceLength(value));
    }
    return this;
  };
  Output.prototype.hf = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.hf('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().k25_1);
    return this;
  };
  Output.prototype.k20 = function (packet) {
    var foreignStolen = packet.e1u();
    if (foreignStolen == null) {
      packet.kz();
      return Unit_getInstance();
    }
    var tail = this.y1t_1;
    if (tail == null) {
      this.d24(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.z23());
  };
  Output.prototype.f1u = function (chunkBuffer) {
    var _tail = this.y1t_1;
    if (_tail == null) {
      this.d24(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.w1t_1);
  };
  Output.prototype.y1x = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.f1(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      {
        tmp$ret$0 = p.u1x_1 - p.t1x_1 | 0;
      }
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.f1(remaining) <= 0) {
        remaining = remaining.w4(headRemaining);
        var tmp0_elvis_lhs = p.v24();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.v21(tmp);
      } else {
        {
          {
          }
          var tmp0_elvis_lhs_0 = p.g25(1);
          var tmp_0;
          if (tmp0_elvis_lhs_0 == null) {
            prematureEndOfStream(1);
          } else {
            tmp_0 = tmp0_elvis_lhs_0;
          }
          var buffer = tmp_0;
          var positionBefore = buffer.c22();
          try {
            {
              writeFully_2(this, buffer, remaining.t6());
            }
          }finally {
            var positionAfter = buffer.c22();
            if (positionAfter < positionBefore) {
              throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
            }
            if (positionAfter === buffer.d22()) {
              p.e25(buffer);
            } else {
              p.t1x_1 = positionAfter;
            }
          }
        }
        break $l$loop;
      }
    }
  };
  Output.prototype.kz = function () {
    this.y1q();
  };
  Output.prototype.e24 = function (n) {
    var tmp$ret$0;
    {
      tmp$ret$0 = this.b1u_1 - this.a1u_1 | 0;
    }
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.y1t_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        {
          {
          }
          tmp0_safe_receiver.m22(this.a1u_1);
          return tmp0_safe_receiver;
        }
      }
    }
    return appendNewChunk(this);
  };
  Output.prototype.x21 = function () {
    var tmp0_safe_receiver = this.y1t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        this.a1u_1 = tmp0_safe_receiver.d22();
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  Output.prototype.f24 = function (size, block) {
    var buffer = this.e24(size);
    try {
      var result = block(buffer);
      {
        var tmp0_check = result >= 0;
        {
        }
        if (!tmp0_check) {
          var tmp$ret$0;
          {
            tmp$ret$0 = "The returned value shouldn't be negative";
          }
          var message = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return result;
    }finally {
      this.x21();
    }
  };
  Output.prototype.g24 = function () {
    var head = this.b24();
    if (!(head === Companion_getInstance_4().u1s_1)) {
      {
        var tmp0_check = head.q23() == null;
        {
        }
        {
          {
          }
          if (!tmp0_check) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'Check failed.';
            }
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      head.s22();
      Companion_getInstance_1();
      head.q22(8);
      this.a1u_1 = head.d22();
      this.c1u_1 = this.a1u_1;
      this.b1u_1 = head.f22();
    }
  };
  Output.$metadata$ = classMeta('Output', [Appendable, Closeable]);
  function writeWhileSize(_this__u8e3s4, initialSize, block) {
    var tail = prepareWriteHead(_this__u8e3s4, initialSize, null);
    try {
      var size;
      $l$loop: while (true) {
        size = block(tail);
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.x21();
    }
  }
  function writeWhile(_this__u8e3s4, block) {
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        if (!block(tail))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.x21();
    }
  }
  function writeFully_2(_this__u8e3s4, src, length) {
    {
      var currentOffset = 0;
      var remaining = length;
      {
        var tail = prepareWriteHead(_this__u8e3s4, 1, null);
        try {
          $l$loop: while (true) {
            var tmp$ret$3;
            {
              var tmp0__anonymous__q1qw7t = tail;
              var tmp$ret$2;
              {
                var tmp0_minOf = remaining;
                var tmp$ret$1;
                {
                  tmp$ret$1 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
                }
                var tmp1_minOf = tmp$ret$1;
                tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
              }
              var size = tmp$ret$2;
              {
                var tmp1__anonymous__uwfjfc = currentOffset;
                writeFully_1(tmp0__anonymous__q1qw7t, src, size);
              }
              currentOffset = currentOffset + size | 0;
              remaining = remaining - size | 0;
              tmp$ret$3 = remaining > 0;
            }
            if (!tmp$ret$3)
              break $l$loop;
            tail = prepareWriteHead(_this__u8e3s4, 1, tail);
          }
        }finally {
          _this__u8e3s4.x21();
        }
      }
    }
  }
  function writeFully$default(_this__u8e3s4, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      {
        tmp$ret$0 = src.h1w_1 - src.g1w_1 | 0;
        tmp$ret$0_0 = Unit_getInstance();
      }
      length = tmp$ret$0;
    }
    return writeFully_2(_this__u8e3s4, src, length);
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    {
      var currentOffset = offset;
      var remaining = length;
      {
        var tail = prepareWriteHead(_this__u8e3s4, 1, null);
        try {
          $l$loop: while (true) {
            var tmp$ret$2;
            {
              var tmp0__anonymous__q1qw7t = tail;
              var tmp$ret$1;
              {
                var tmp0_minOf = remaining;
                var tmp$ret$0;
                {
                  tmp$ret$0 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
                }
                var tmp1_minOf = tmp$ret$0;
                tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
              }
              var size = tmp$ret$1;
              {
                var tmp1__anonymous__uwfjfc = currentOffset;
                writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
              }
              currentOffset = currentOffset + size | 0;
              remaining = remaining - size | 0;
              tmp$ret$2 = remaining > 0;
            }
            if (!tmp$ret$2)
              break $l$loop;
            tail = prepareWriteHead(_this__u8e3s4, 1, tail);
          }
        }finally {
          _this__u8e3s4.x21();
        }
      }
    }
  }
  function writeFully$default_0(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.length - offset | 0;
    return writeFully_3(_this__u8e3s4, src, offset, length);
  }
  function writeFullyBytesTemplate(_this__u8e3s4, offset, length, block) {
    var currentOffset = offset;
    var remaining = length;
    {
      var tail = prepareWriteHead(_this__u8e3s4, 1, null);
      try {
        $l$loop: while (true) {
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = tail;
            var tmp$ret$1;
            {
              var tmp0_minOf = remaining;
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0__anonymous__q1qw7t.j1w_1 - tmp0__anonymous__q1qw7t.h1w_1 | 0;
              }
              var tmp1_minOf = tmp$ret$0;
              tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
            }
            var size = tmp$ret$1;
            block(tmp0__anonymous__q1qw7t, currentOffset, size);
            currentOffset = currentOffset + size | 0;
            remaining = remaining - size | 0;
            tmp$ret$2 = remaining > 0;
          }
          if (!tmp$ret$2)
            break $l$loop;
          tail = prepareWriteHead(_this__u8e3s4, 1, tail);
        }
      }finally {
        _this__u8e3s4.x21();
      }
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      var index = _this__u8e3s4.a1u_1;
      if ((_this__u8e3s4.b1u_1 - index | 0) > 2) {
        _this__u8e3s4.a1u_1 = index + 2 | 0;
        {
          var tmp0__anonymous__q1qw7t = _this__u8e3s4.z1t_1;
          {
            tmp0__anonymous__q1qw7t.f21_1.setInt16(index, value, false);
          }
        }
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writePrimitiveTemplate(_this__u8e3s4, componentSize, block) {
    var index = _this__u8e3s4.a1u_1;
    if ((_this__u8e3s4.b1u_1 - index | 0) > componentSize) {
      _this__u8e3s4.a1u_1 = index + componentSize | 0;
      block(_this__u8e3s4.z1t_1, index);
      return true;
    }
    return false;
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    {
      var tail = _this__u8e3s4.e24(2);
      {
        writeShort(tail, value);
      }
      _this__u8e3s4.x21();
      tmp$ret$0 = true;
    }
    if (!tmp$ret$0) {
      var tmp$ret$1;
      {
        tmp$ret$1 = toByte(value >>> 8 | 0);
      }
      _this__u8e3s4.z22(tmp$ret$1);
      var tmp$ret$2;
      {
        tmp$ret$2 = toByte(value & 255);
      }
      _this__u8e3s4.z22(tmp$ret$2);
    }
  }
  function writePrimitiveFallbackTemplate(_this__u8e3s4, componentSize, writeOperation) {
    var tail = _this__u8e3s4.e24(componentSize);
    writeOperation(tail);
    _this__u8e3s4.x21();
    return true;
  }
  function read_0(_this__u8e3s4, n, block) {
    {
    }
    var tmp0_elvis_lhs = _this__u8e3s4.g25(n);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    var positionBefore = buffer.c22();
    try {
      block(buffer);
    }finally {
      var positionAfter = buffer.c22();
      if (positionAfter < positionBefore) {
        throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
      }
      if (positionAfter === buffer.d22()) {
        _this__u8e3s4.e25(buffer);
      } else {
        _this__u8e3s4.t1x_1 = positionAfter;
      }
    }
  }
  function toByteArray(_this__u8e3s4, charset) {
    if (charset.equals(Charsets_getInstance().k25_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.n25(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText(_this__u8e3s4, charset, max) {
    return decode(charset.o25(), _this__u8e3s4, max);
  }
  function readText$default(_this__u8e3s4, charset, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      charset = Charsets_getInstance().k25_1;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return readText(_this__u8e3s4, charset, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      {
        var tmp0_also = new Int8Array(n);
        {
        }
        {
          readFully_2(_this__u8e3s4, tmp0_also, 0, n);
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = get_EmptyByteArray();
    }
    return tmp;
  }
  function readBytes$default(_this__u8e3s4, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      {
        var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.x1x();
        if (tmp0_coerceAtMostMaxIntOrFail.f1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
          throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
        tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.t6();
        tmp$ret$0_0 = Unit_getInstance();
      }
      n = tmp$ret$0;
    }
    return readBytes(_this__u8e3s4, n);
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    return decodeExactBytes(charset.o25(), _this__u8e3s4, bytesCount);
  }
  function readTextExactBytes$default(_this__u8e3s4, bytesCount, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      charset = Charsets_getInstance().k25_1;
    return readTextExactBytes(_this__u8e3s4, bytesCount, charset);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance().k25_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.n25(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeText$default(_this__u8e3s4, text, fromIndex, toIndex, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(text);
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().k25_1;
    return writeText(_this__u8e3s4, text, fromIndex, toIndex, charset);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    {
      var tail = prepareWriteHead(_this__u8e3s4, 1, null);
      try {
        var size;
        $l$loop: while (true) {
          var tmp$ret$3;
          {
            var tmp0__anonymous__q1qw7t = tail;
            var memory = tmp0__anonymous__q1qw7t.f1w_1;
            var dstOffset = tmp0__anonymous__q1qw7t.h1w_1;
            var dstLimit = tmp0__anonymous__q1qw7t.j1w_1;
            var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
            var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
            var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
            var tmp = index;
            var tmp$ret$0;
            {
              tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
            }
            index = tmp + tmp$ret$0 | 0;
            var tmp$ret$1;
            {
              tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
            }
            tmp0__anonymous__q1qw7t.l22(tmp$ret$1);
            var tmp_0;
            var tmp_1;
            var tmp$ret$2;
            {
              tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
            }
            if (tmp$ret$2 === 0) {
              tmp_1 = index < toIndex;
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = 8;
            } else {
              if (index < toIndex) {
                tmp_0 = 1;
              } else {
                tmp_0 = 0;
              }
            }
            tmp$ret$3 = tmp_0;
          }
          size = tmp$ret$3;
          if (size <= 0)
            break $l$loop;
          tail = prepareWriteHead(_this__u8e3s4, size, tail);
        }
      }finally {
        _this__u8e3s4.x21();
      }
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  ChunkBuffer$Companion$Pool$1.prototype.j21 = function () {
    return get_DefaultChunkedBufferPool().j21();
  };
  ChunkBuffer$Companion$Pool$1.prototype.p25 = function (instance) {
    get_DefaultChunkedBufferPool().u23(instance);
  };
  ChunkBuffer$Companion$Pool$1.prototype.u23 = function (instance) {
    return this.p25(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$Pool$1.prototype.w1c = function () {
    get_DefaultChunkedBufferPool().w1c();
  };
  ChunkBuffer$Companion$Pool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  ChunkBuffer$Companion$EmptyPool$1.prototype.j21 = function () {
    return Companion_getInstance_4().u1s_1;
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.p25 = function (instance) {
    {
      var tmp0_require = instance === Companion_getInstance_4().u1s_1;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.u23 = function (instance) {
    return this.p25(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.w1c = function () {
  };
  ChunkBuffer$Companion$EmptyPool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$1.prototype.j21 = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().g21(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.p25 = function (instance) {
    DefaultAllocator_getInstance().h21(instance.b22());
  };
  ChunkBuffer$Companion$NoPool$1.prototype.u23 = function (instance) {
    return this.p25(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.j21 = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.p25 = function (instance) {
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.u23 = function (instance) {
    return this.p25(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function appendNext($this, chunk) {
    if (!$this.r21_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.s1s_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.t1s_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.u1s_1 = new ChunkBuffer(Companion_getInstance_6().j25_1, null, this.t1s_1);
    var tmp_1 = this;
    tmp_1.v1s_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.w1s_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.q21_1 = parentPool;
    {
      var tmp0_require = !(origin === this);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "A chunk couldn't be a view of itself.";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    this.r21_1 = atomic$ref$1(null);
    this.s21_1 = atomic$int$1(1);
    this.t21_1 = origin;
  }
  ChunkBuffer.prototype.q25 = function () {
    return this.q21_1;
  };
  ChunkBuffer.prototype.i25 = function (newValue) {
    if (newValue == null) {
      this.v23();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype.q23 = function () {
    return this.r21_1.a19_1;
  };
  ChunkBuffer.prototype.p23 = function () {
    return this.s21_1.b19_1;
  };
  ChunkBuffer.prototype.v23 = function () {
    return this.r21_1.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.u21 = function () {
    var tmp$ret$2;
    {
      var tmp0_elvis_lhs = this.t21_1;
      var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
      {
      }
      var tmp$ret$1;
      {
        tmp0_let.r25();
        var tmp$ret$0;
        {
          var tmp0_also = new ChunkBuffer(this.b22(), tmp0_let, this.q21_1);
          {
          }
          {
            this.x22(tmp0_also);
          }
          tmp$ret$0 = tmp0_also;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.w21 = function (pool) {
    if (this.s25()) {
      var origin = this.t21_1;
      if (!(origin == null)) {
        this.m23();
        origin.w21(pool);
      } else {
        var tmp0_elvis_lhs = this.q21_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.u23(this);
      }
    }
  };
  ChunkBuffer.prototype.m23 = function () {
    if (!this.s21_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.v23();
    this.t21_1 = null;
  };
  ChunkBuffer.prototype.r25 = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_update = this.s21_1;
      while (true) {
        var cur = tmp0_update.b19_1;
        var tmp$ret$0;
        {
          if (cur <= 0)
            throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
          tmp$ret$0 = cur + 1 | 0;
        }
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.t23 = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_update = this.s21_1;
      while (true) {
        var cur = tmp0_update.b19_1;
        var tmp$ret$0;
        {
          if (cur < 0) {
            throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
          }
          if (cur > 0) {
            throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
          }
          tmp$ret$0 = 1;
        }
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.s25 = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_updateAndGet = this.s21_1;
      while (true) {
        var cur = tmp0_updateAndGet.b19_1;
        var tmp$ret$0;
        {
          if (cur <= 0)
            throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
          tmp$ret$0 = cur - 1 | 0;
        }
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.a23 = function () {
    {
      var tmp0_require = this.t21_1 == null;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Unable to reset buffer with origin';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    Buffer.prototype.a23.call(this);
    this.r21_1.a19_1 = null;
  };
  ChunkBuffer.$metadata$ = classMeta('ChunkBuffer', undefined, undefined, undefined, undefined, Buffer.prototype);
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.p23() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    }
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    {
      tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    }
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
        tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
      }
      var tmp1_toUShort = tmp$ret$0;
      tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    }
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
        tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
      }
      var tmp1_toUShort = tmp$ret$0;
      tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    }
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function toIntOrFail(_this__u8e3s4, name) {
    if (_this__u8e3s4.f1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(_this__u8e3s4, name);
    }
    return _this__u8e3s4.t6();
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function decodeASCII(_this__u8e3s4, consumer) {
    var tmp$ret$3;
    {
      {
      }
      var tmp$ret$2;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
        var inductionVariable = tmp1__anonymous__uwfjfc;
        if (inductionVariable < tmp2__anonymous__z9zvc9)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0__anonymous__q1qw7t.f21_1.getInt8(index);
              }
              tmp$ret$1 = tmp$ret$0;
            }
            var codepoint = tmp$ret$1 & 255;
            if ((codepoint & 128) === 128 ? true : !consumer(new Char(numberToChar(codepoint)))) {
              _this__u8e3s4.k22(index - tmp1__anonymous__uwfjfc | 0);
              return false;
            }
          }
           while (inductionVariable < tmp2__anonymous__z9zvc9);
        tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
      }
      var rc = tmp$ret$2;
      _this__u8e3s4.k22(rc);
      tmp$ret$3 = rc;
    }
    return true;
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  MalformedUTF8InputException.$metadata$ = classMeta('MalformedUTF8InputException', undefined, undefined, undefined, undefined, Exception.prototype);
  function decodeUTF8(_this__u8e3s4, consumer) {
    var byteCount = 0;
    var value = 0;
    var lastByteCount = 0;
    var tmp$ret$3;
    {
      {
      }
      var tmp$ret$2;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
        var inductionVariable = tmp1__anonymous__uwfjfc;
        if (inductionVariable < tmp2__anonymous__z9zvc9)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0__anonymous__q1qw7t.f21_1.getInt8(index);
              }
              tmp$ret$1 = tmp$ret$0;
            }
            var v = tmp$ret$1 & 255;
            if ((v & 128) === 0) {
              if (!(byteCount === 0)) {
                malformedByteCount(byteCount);
              }
              if (!consumer(new Char(numberToChar(v)))) {
                _this__u8e3s4.k22(index - tmp1__anonymous__uwfjfc | 0);
                return -1;
              }
            } else if (byteCount === 0) {
              var mask = 128;
              value = v;
              var inductionVariable_0 = 1;
              if (inductionVariable_0 <= 6)
                $l$loop: do {
                  var i = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  if (!((value & mask) === 0)) {
                    value = value & ~mask;
                    mask = mask >> 1;
                    var tmp2 = byteCount;
                    byteCount = tmp2 + 1 | 0;
                  } else {
                    break $l$loop;
                  }
                }
                 while (inductionVariable_0 <= 6);
              lastByteCount = byteCount;
              var tmp3 = byteCount;
              byteCount = tmp3 - 1 | 0;
              if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                _this__u8e3s4.k22(index - tmp1__anonymous__uwfjfc | 0);
                return lastByteCount;
              }
            } else {
              value = value << 6 | v & 127;
              var tmp4 = byteCount;
              byteCount = tmp4 - 1 | 0;
              if (byteCount === 0) {
                if (isBmpCodePoint(value)) {
                  if (!consumer(new Char(numberToChar(value)))) {
                    _this__u8e3s4.k22(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                    return -1;
                  }
                } else if (!isValidCodePoint(value)) {
                  malformedCodePoint(value);
                } else {
                  if (!consumer(new Char(numberToChar(highSurrogate(value)))) ? true : !consumer(new Char(numberToChar(lowSurrogate(value))))) {
                    _this__u8e3s4.k22(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                    return -1;
                  }
                }
                value = 0;
              }
            }
          }
           while (inductionVariable < tmp2__anonymous__z9zvc9);
        tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
      }
      var rc = tmp$ret$2;
      _this__u8e3s4.k22(rc);
      tmp$ret$3 = rc;
    }
    return 0;
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function putUtf8Char(_this__u8e3s4, offset, v) {
    var tmp0_subject = v;
    var tmp;
    if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      {
        var tmp0_storeAt = toByte(v);
        _this__u8e3s4.f21_1.setInt8(offset, tmp0_storeAt);
      }
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      var tmp$ret$0;
      {
        var tmp1_set = toByte(192 | v >> 6 & 31);
        tmp$ret$0 = _this__u8e3s4.f21_1.setInt8(offset, tmp1_set);
      }
      var tmp$ret$1;
      {
        var tmp2_set = offset + 1 | 0;
        var tmp3_set = toByte(128 | v & 63);
        tmp$ret$1 = _this__u8e3s4.f21_1.setInt8(tmp2_set, tmp3_set);
      }
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      var tmp$ret$2;
      {
        var tmp4_set = toByte(224 | v >> 12 & 15);
        tmp$ret$2 = _this__u8e3s4.f21_1.setInt8(offset, tmp4_set);
      }
      var tmp$ret$3;
      {
        var tmp5_set = offset + 1 | 0;
        var tmp6_set = toByte(128 | v >> 6 & 63);
        tmp$ret$3 = _this__u8e3s4.f21_1.setInt8(tmp5_set, tmp6_set);
      }
      var tmp$ret$4;
      {
        var tmp7_set = offset + 2 | 0;
        var tmp8_set = toByte(128 | v & 63);
        tmp$ret$4 = _this__u8e3s4.f21_1.setInt8(tmp7_set, tmp8_set);
      }
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      var tmp$ret$5;
      {
        var tmp9_set = toByte(240 | v >> 18 & 7);
        tmp$ret$5 = _this__u8e3s4.f21_1.setInt8(offset, tmp9_set);
      }
      var tmp$ret$6;
      {
        var tmp10_set = offset + 1 | 0;
        var tmp11_set = toByte(128 | v >> 12 & 63);
        tmp$ret$6 = _this__u8e3s4.f21_1.setInt8(tmp10_set, tmp11_set);
      }
      var tmp$ret$7;
      {
        var tmp12_set = offset + 2 | 0;
        var tmp13_set = toByte(128 | v >> 6 & 63);
        tmp$ret$7 = _this__u8e3s4.f21_1.setInt8(tmp12_set, tmp13_set);
      }
      var tmp$ret$8;
      {
        var tmp14_set = offset + 3 | 0;
        var tmp15_set = toByte(128 | v & 63);
        tmp$ret$8 = _this__u8e3s4.f21_1.setInt8(tmp14_set, tmp15_set);
      }
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        Companion_getInstance_0();
        var tmp0_toInt = _UShort___init__impl__jigrne(-1);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
      }
      var tmp1_minOf = from + tmp$ret$0 | 0;
      tmp$ret$1 = Math.min(to, tmp1_minOf);
    }
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    {
      Companion_getInstance_0();
      var tmp2_toInt = _UShort___init__impl__jigrne(-1);
      tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    }
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        {
          var tmp3_toUShort = index - from | 0;
          tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        }
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        {
          var tmp4_toUShort = resultPosition - dstOffset | 0;
          tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        }
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
        tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      }
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        {
          var tmp1 = resultPosition;
          resultPosition = tmp1 + 1 | 0;
          var tmp6_storeAt = tmp1;
          var tmp7_storeAt = toByte(character);
          _this__u8e3s4.f21_1.setInt8(tmp6_storeAt, tmp7_storeAt);
        }
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(character);
        }
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      {
        var tmp0_putUtf8Char = resultPosition;
        var tmp0_subject = codepoint;
        var tmp_1;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          {
            var tmp0_storeAt = toByte(codepoint);
            _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
          }
          tmp_1 = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          {
            var tmp1_set = toByte(192 | codepoint >> 6 & 31);
            tmp$ret$1 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp1_set);
          }
          var tmp$ret$2;
          {
            var tmp2_set = tmp0_putUtf8Char + 1 | 0;
            var tmp3_set = toByte(128 | codepoint & 63);
            tmp$ret$2 = _this__u8e3s4.f21_1.setInt8(tmp2_set, tmp3_set);
          }
          tmp_1 = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          {
            var tmp4_set = toByte(224 | codepoint >> 12 & 15);
            tmp$ret$3 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp4_set);
          }
          var tmp$ret$4;
          {
            var tmp5_set = tmp0_putUtf8Char + 1 | 0;
            var tmp6_set = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$4 = _this__u8e3s4.f21_1.setInt8(tmp5_set, tmp6_set);
          }
          var tmp$ret$5;
          {
            var tmp7_set = tmp0_putUtf8Char + 2 | 0;
            var tmp8_set = toByte(128 | codepoint & 63);
            tmp$ret$5 = _this__u8e3s4.f21_1.setInt8(tmp7_set, tmp8_set);
          }
          tmp_1 = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          {
            var tmp9_set = toByte(240 | codepoint >> 18 & 7);
            tmp$ret$6 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp9_set);
          }
          var tmp$ret$7;
          {
            var tmp10_set = tmp0_putUtf8Char + 1 | 0;
            var tmp11_set = toByte(128 | codepoint >> 12 & 63);
            tmp$ret$7 = _this__u8e3s4.f21_1.setInt8(tmp10_set, tmp11_set);
          }
          var tmp$ret$8;
          {
            var tmp12_set = tmp0_putUtf8Char + 2 | 0;
            var tmp13_set = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$8 = _this__u8e3s4.f21_1.setInt8(tmp12_set, tmp13_set);
          }
          var tmp$ret$9;
          {
            var tmp14_set = tmp0_putUtf8Char + 3 | 0;
            var tmp15_set = toByte(128 | codepoint & 63);
            tmp$ret$9 = _this__u8e3s4.f21_1.setInt8(tmp14_set, tmp15_set);
          }
          tmp_1 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$10 = tmp_1;
      }
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    {
      var tmp1_toUShort = index - from | 0;
      tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    }
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    {
      var tmp2_toUShort = resultPosition - dstOffset | 0;
      tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    }
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(high);
    }
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    {
      tmp$ret$1 = Char__toInt_impl_vasixd(low);
    }
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(character);
        }
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      {
        var tmp0_subject = codepoint;
        var tmp_1;
        if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          tmp_1 = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          tmp_1 = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          tmp_1 = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          tmp_1 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$1 = tmp_1;
      }
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      {
        var tmp0_putUtf8Char = resultPosition;
        var tmp0_subject_0 = codepoint;
        var tmp_2;
        if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
          {
            var tmp0_storeAt = toByte(codepoint);
            _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
          }
          tmp_2 = 1;
        } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
          var tmp$ret$2;
          {
            var tmp1_set = toByte(192 | codepoint >> 6 & 31);
            tmp$ret$2 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp1_set);
          }
          var tmp$ret$3;
          {
            var tmp2_set = tmp0_putUtf8Char + 1 | 0;
            var tmp3_set = toByte(128 | codepoint & 63);
            tmp$ret$3 = _this__u8e3s4.f21_1.setInt8(tmp2_set, tmp3_set);
          }
          tmp_2 = 2;
        } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
          var tmp$ret$4;
          {
            var tmp4_set = toByte(224 | codepoint >> 12 & 15);
            tmp$ret$4 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp4_set);
          }
          var tmp$ret$5;
          {
            var tmp5_set = tmp0_putUtf8Char + 1 | 0;
            var tmp6_set = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$5 = _this__u8e3s4.f21_1.setInt8(tmp5_set, tmp6_set);
          }
          var tmp$ret$6;
          {
            var tmp7_set = tmp0_putUtf8Char + 2 | 0;
            var tmp8_set = toByte(128 | codepoint & 63);
            tmp$ret$6 = _this__u8e3s4.f21_1.setInt8(tmp7_set, tmp8_set);
          }
          tmp_2 = 3;
        } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
          var tmp$ret$7;
          {
            var tmp9_set = toByte(240 | codepoint >> 18 & 7);
            tmp$ret$7 = _this__u8e3s4.f21_1.setInt8(tmp0_putUtf8Char, tmp9_set);
          }
          var tmp$ret$8;
          {
            var tmp10_set = tmp0_putUtf8Char + 1 | 0;
            var tmp11_set = toByte(128 | codepoint >> 12 & 63);
            tmp$ret$8 = _this__u8e3s4.f21_1.setInt8(tmp10_set, tmp11_set);
          }
          var tmp$ret$9;
          {
            var tmp12_set = tmp0_putUtf8Char + 2 | 0;
            var tmp13_set = toByte(128 | codepoint >> 6 & 63);
            tmp$ret$9 = _this__u8e3s4.f21_1.setInt8(tmp12_set, tmp13_set);
          }
          var tmp$ret$10;
          {
            var tmp14_set = tmp0_putUtf8Char + 3 | 0;
            var tmp15_set = toByte(128 | codepoint & 63);
            tmp$ret$10 = _this__u8e3s4.f21_1.setInt8(tmp14_set, tmp15_set);
          }
          tmp_2 = 4;
        } else {
          malformedCodePoint(codepoint);
        }
        tmp$ret$11 = tmp_2;
      }
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    {
      var tmp1_toUShort = index - from | 0;
      tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    }
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    {
      var tmp2_toUShort = resultPosition - dstOffset | 0;
      tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    }
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function charactersSize(v) {
    var tmp0_subject = v;
    var tmp;
    if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function get_EmptyByteArray() {
    init_properties_Unsafe_kt_ayh6vg();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      {
        tmp$ret$0 = current.h1w_1 > current.g1w_1;
      }
      if (!tmp$ret$0) {
        _this__u8e3s4.e25(current);
      } else {
        var tmp$ret$1;
        {
          tmp$ret$1 = current.k1w_1 - current.j1w_1 | 0;
        }
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8)
          _this__u8e3s4.f25(current);
        else {
          _this__u8e3s4.t1x_1 = current.c22();
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    init_properties_Unsafe_kt_ayh6vg();
    return _this__u8e3s4.c25(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.m1y() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.d25(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    init_properties_Unsafe_kt_ayh6vg();
    var builderSize = builder.d();
    var tmp0_elvis_lhs = builder.e1u();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.q23() == null : false) ? _this__u8e3s4.x24(builderHead) : false) {
      builder.g24();
      return builderSize;
    }
    _this__u8e3s4.w24(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (!(current == null)) {
      _this__u8e3s4.x21();
    }
    return _this__u8e3s4.e24(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function init_properties_Unsafe_kt_ayh6vg() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $cont) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n26_1 = _this__u8e3s4;
    this.o26_1 = sleepCondition;
  }
  $sleepCOROUTINE$52.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.bh_1 = 1;
            suspendResult = trySuspend(this.n26_1, this.o26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.bh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.n26_1.n1t();
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
  $sleepCOROUTINE$52.$metadata$ = classMeta('$sleepCOROUTINE$52', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b26_1 = _this__u8e3s4;
    this.c26_1 = sleepCondition;
  }
  $trySuspendCOROUTINE$53.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 3;
            this.d26_1 = false;
            var tmp_0 = this;
            tmp_0.e26_1 = Job$default(null, 1, null);
            if (this.b26_1.m1t_1.atomicfu$compareAndSet(null, this.e26_1) ? this.c26_1() : false) {
              this.d26_1 = true;
              this.bh_1 = 1;
              suspendResult = this.e26_1.m1f(this);
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
            this.bh_1 = 2;
            continue $sm;
          case 2:
            return this.d26_1;
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
  $trySuspendCOROUTINE$53.$metadata$ = classMeta('$trySuspendCOROUTINE$53', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AwaitingSlot() {
    this.m1t_1 = atomic$ref$1(null);
  }
  AwaitingSlot.prototype.j1v = function (sleepCondition, $cont) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  };
  AwaitingSlot.prototype.n1t = function () {
    var tmp0_safe_receiver = this.m1t_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.l1f();
  };
  AwaitingSlot.prototype.i20 = function (cause) {
    var tmp0_elvis_lhs = this.m1t_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.y1e(cause);
    } else {
      continuation.l1f();
    }
  };
  AwaitingSlot.$metadata$ = classMeta('AwaitingSlot');
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $cont);
    tmp.dh_1 = Unit_getInstance();
    tmp.eh_1 = null;
    return tmp.lh();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x26_1 = _this__u8e3s4;
    this.y26_1 = dst;
    this.z26_1 = limit;
  }
  $copyToSequentialImplCOROUTINE$54.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 10;
            var tmp_0 = this;
            tmp_0.a27_1 = !(this.x26_1 === this.y26_1);
            if (!this.a27_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.x26_1.g1u() == null)) {
              this.y26_1.z1m(this.x26_1.g1u());
              return new Long(0, 0);
            }

            this.b27_1 = this.z26_1;
            this.bh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.b27_1.f1(new Long(0, 0)) > 0)) {
              this.bh_1 = 9;
              continue $sm;
            }

            this.bh_1 = 2;
            suspendResult = this.x26_1.h20(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c27_1 = suspendResult;
            if (!this.c27_1) {
              this.bh_1 = 9;
              continue $sm;
            } else {
              this.bh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.d27_1 = this.x26_1.j20(this.y26_1, this.b27_1);
            if (this.d27_1.equals(new Long(0, 0))) {
              this.bh_1 = 6;
              suspendResult = copyToTail(this.x26_1, this.y26_1, this.b27_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.y26_1.x1u() === 0) {
                this.bh_1 = 4;
                suspendResult = this.y26_1.e1w(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.bh_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.bh_1 = 5;
            continue $sm;
          case 5:
            this.e27_1 = this.d27_1;
            this.bh_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.bh_1 = 9;
              continue $sm;
            } else {
              this.bh_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.e27_1 = tail;
            this.bh_1 = 8;
            continue $sm;
          case 8:
            var copied = this.e27_1;
            this.b27_1 = this.b27_1.w4(copied);
            if (copied.f1(new Long(0, 0)) > 0) {
              this.y26_1.ad();
            }

            this.bh_1 = 1;
            continue $sm;
          case 9:
            return this.z26_1.w4(this.b27_1);
          case 10:
            throw this.eh_1;
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
  $copyToSequentialImplCOROUTINE$54.$metadata$ = classMeta('$copyToSequentialImplCOROUTINE$54', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n27_1 = _this__u8e3s4;
    this.o27_1 = dst;
    this.p27_1 = limit;
  }
  $copyToTailCOROUTINE$55.prototype.lh = function () {
    var suspendResult = this.dh_1;
    $sm: do
      try {
        var tmp = this.bh_1;
        switch (tmp) {
          case 0:
            this.ch_1 = 9;
            this.q27_1 = Companion_getInstance_4().s1s_1.j21();
            this.bh_1 = 1;
            continue $sm;
          case 1:
            this.bh_1 = 2;
            continue $sm;
          case 2:
            this.ch_1 = 8;
            this.q27_1.t22(coerceAtMost_0(this.p27_1, toLong(this.q27_1.h22())).t6());
            this.bh_1 = 3;
            suspendResult = this.n27_1.e20(this.q27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.s27_1 = suspendResult;
            if (this.s27_1 === -1) {
              this.q27_1.w21(Companion_getInstance_4().s1s_1);
              this.r27_1 = new Long(0, 0);
              this.ch_1 = 9;
              this.bh_1 = 6;
              continue $sm;
            } else {
              this.bh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.bh_1 = 5;
            suspendResult = this.o27_1.a20(this.q27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.r27_1 = toLong(this.s27_1);
            this.ch_1 = 9;
            this.bh_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.r27_1;
            this.q27_1.w21(Companion_getInstance_4().s1s_1);
            return tmp_1;
          case 7:
            this.q27_1.w21(Companion_getInstance_4().s1s_1);
            return Unit_getInstance();
          case 8:
            this.ch_1 = 9;
            var t = this.eh_1;
            this.q27_1.w21(Companion_getInstance_4().s1s_1);
            throw t;
          case 9:
            throw this.eh_1;
        }
      } catch ($p) {
        if (this.ch_1 === 9) {
          throw $p;
        } else {
          this.bh_1 = this.ch_1;
          this.eh_1 = $p;
        }
      }
     while (true);
  };
  $copyToTailCOROUTINE$55.$metadata$ = classMeta('$copyToTailCOROUTINE$55', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_ByteArrayPool() {
    init_properties_ByteArrayPool_kt_ygh2ft();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  ByteArrayPool$1.prototype.g23 = function () {
    return new Int8Array(4096);
  };
  ByteArrayPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, DefaultPool.prototype);
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function init_properties_ByteArrayPool_kt_ygh2ft() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  ObjectPool.$metadata$ = interfaceMeta('ObjectPool', [Closeable]);
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.u23 = function (instance) {
  };
  NoPoolImpl.prototype.w1c = function () {
  };
  NoPoolImpl.$metadata$ = classMeta('NoPoolImpl', [ObjectPool]);
  function ByteChannel_0(autoFlush) {
    return new ByteChannelJS(Companion_getInstance_4().u1s_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $cont) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $cont);
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    {
      tmp$ret$0 = content.length === 0;
    }
    if (tmp$ret$0)
      return Companion_getInstance_5().a22();
    var head = Companion_getInstance_4().s1s_1.j21();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.q22(8);
      var tmp$ret$2;
      {
        var tmp1_minOf = end - start | 0;
        var tmp$ret$1;
        {
          var tmp0__get_writeRemaining__z8qq3e = tail;
          tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.j1w_1 - tmp0__get_writeRemaining__z8qq3e.h1w_1 | 0;
        }
        var tmp2_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      }
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().s1s_1.j21();
      current.i25(tail);
    }
    var tmp$ret$3;
    {
      var tmp3_apply = new ByteChannelJS(head, false);
      {
      }
      {
        close_0(tmp3_apply);
      }
      tmp$ret$3 = tmp3_apply;
    }
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.l28_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.r1d(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase_init_$Init$(initial, autoFlush, null, 4, null, this);
    this.l28_1 = null;
  }
  ByteChannelJS.prototype.r1s = function (job) {
    var tmp0_safe_receiver = this.l28_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1a(null, 1, null);
    }
    this.l28_1 = job;
    job.u1a(true, false, ByteChannelJS$attachJob$lambda(this), 2, null);
  };
  ByteChannelJS.prototype.toString = function () {
    return 'ByteChannel[' + this.l28_1 + ', ' + hashCode(this) + ']';
  };
  ByteChannelJS.$metadata$ = classMeta('ByteChannelJS', undefined, undefined, undefined, undefined, ByteChannelSequentialBase.prototype);
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    return function () {
      var tmp$ret$0;
      {
        var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().u1s_1, false);
        {
        }
        {
          tmp0_apply.z1m(null);
        }
        tmp$ret$0 = tmp0_apply;
      }
      return tmp$ret$0;
    };
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.w27_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda());
  }
  Companion_3.prototype.a22 = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = Empty$factory();
      tmp$ret$0 = this.w27_1.t();
    }
    return tmp$ret$0;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
    Companion_getInstance_5();
  }
  ByteReadChannel_1.$metadata$ = interfaceMeta('ByteReadChannel');
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.a22();
    }, null);
  }
  function ByteWriteChannel() {
  }
  ByteWriteChannel.$metadata$ = interfaceMeta('ByteWriteChannel');
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.g21 = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  DefaultAllocator.prototype.h21 = function (instance) {
  };
  DefaultAllocator.$metadata$ = objectMeta('DefaultAllocator', [Allocator]);
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function useMemory(_this__u8e3s4, offset, length, block) {
    {
    }
    var tmp$ret$0;
    {
      var tmp0_let = of(Companion_getInstance_6(), _this__u8e3s4, offset, length);
      {
      }
      tmp$ret$0 = block(tmp0_let);
    }
    return tmp$ret$0;
  }
  function of(_this__u8e3s4, array, offset, length) {
    var tmp$ret$0;
    {
      tmp$ret$0 = array;
    }
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    return new Memory(new DataView(buffer, offset, length));
  }
  function of$default(_this__u8e3s4, buffer, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = buffer.byteLength - offset | 0;
    return of_1(_this__u8e3s4, buffer, offset, length);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.j25_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.f21_1 = view;
  }
  Memory.prototype.m28 = function () {
    return this.f21_1;
  };
  Memory.prototype.d = function () {
    return toLong(this.f21_1.byteLength);
  };
  Memory.prototype.n28 = function () {
    return this.f21_1.byteLength;
  };
  Memory.prototype.o28 = function (index) {
    return this.f21_1.getInt8(index);
  };
  Memory.prototype.p28 = function (index, value) {
    this.f21_1.setInt8(index, value);
  };
  Memory.prototype.q28 = function (offset, length) {
    {
      var tmp0_require = offset >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "offset shouldn't be negative: " + offset;
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = length >= 0;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = "length shouldn't be negative: " + length;
        }
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    {
      tmp$ret$2 = toLong(this.f21_1.byteLength);
    }
    if (tmp.f1(tmp$ret$2) > 0) {
      var tmp$ret$3;
      {
        tmp$ret$3 = toLong(this.f21_1.byteLength);
      }
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.f21_1.buffer, this.f21_1.byteOffset + offset | 0, length));
  };
  Memory.prototype.i21 = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.f21_1.buffer, this.f21_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.f21_1.buffer, destination.f21_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  Memory.$metadata$ = classMeta('Memory');
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    {
      tmp$ret$0 = destination;
    }
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.f21_1.buffer, _this__u8e3s4.f21_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.f21_1.buffer, destination.f21_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function storeShortAt(_this__u8e3s4, offset, value) {
    _this__u8e3s4.f21_1.setInt16(offset, value, false);
  }
  function loadShortAt(_this__u8e3s4, offset) {
    return _this__u8e3s4.f21_1.getInt16(offset, false);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.r28 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().k25_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        {
          var tmp_2 = _Char___init__impl__6a9atx(95);
          var tmp_3 = _Char___init__impl__6a9atx(45);
          var tmp0_let = replace$default(name, tmp_2, tmp_3, false, 4, null);
          {
          }
          var tmp$ret$2;
          {
            var tmp_4;
            if (tmp0_let === 'iso-8859-1') {
              tmp_4 = true;
            } else {
              var tmp$ret$1;
              {
                var tmp$ret$0;
                {
                  tmp$ret$0 = tmp0_let;
                }
                tmp$ret$1 = tmp$ret$0.toLowerCase();
              }
              tmp_4 = tmp$ret$1 === 'iso-8859-1';
            }
            tmp$ret$2 = tmp_4;
          }
          tmp$ret$3 = tmp$ret$2;
        }

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().l25_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  Companion_5.prototype.s28 = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            var tmp$ret$3;
            {
              var tmp_2 = _Char___init__impl__6a9atx(95);
              var tmp_3 = _Char___init__impl__6a9atx(45);
              var tmp0_let = replace$default(charset, tmp_2, tmp_3, false, 4, null);
              {
              }
              var tmp$ret$2;
              {
                var tmp_4;
                if (tmp0_let === 'iso-8859-1') {
                  tmp_4 = true;
                } else {
                  var tmp$ret$1;
                  {
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = tmp0_let;
                    }
                    tmp$ret$1 = tmp$ret$0.toLowerCase();
                  }
                  tmp_4 = tmp$ret$1 === 'iso-8859-1';
                }
                tmp$ret$2 = tmp_4;
              }
              tmp$ret$3 = tmp$ret$2;
            }

            tmp_1 = tmp$ret$3;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.m25_1 = _name;
  }
  Charset.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(get_js(getKClassFromExpression(this)), get_js(getKClassFromExpression(other))))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.m25_1 === other.m25_1))
      return false;
    return true;
  };
  Charset.prototype.hashCode = function () {
    return getStringHashCode(this.m25_1);
  };
  Charset.prototype.toString = function () {
    return this.m25_1;
  };
  Charset.$metadata$ = classMeta('Charset');
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.m25_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.k25_1 = new CharsetImpl('UTF-8');
    this.l25_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.prototype.t28 = function () {
    return this.k25_1;
  };
  Charsets.$metadata$ = objectMeta('Charsets');
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.u28_1 = _charset;
  }
  CharsetDecoder.$metadata$ = classMeta('CharsetDecoder');
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.v28_1 = _charset;
  }
  CharsetEncoder.$metadata$ = classMeta('CharsetEncoder');
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.x28_1 = name;
  }
  CharsetImpl.prototype.n25 = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.o25 = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + this.x28_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this.x28_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.x28_1 === tmp0_other_with_cast.x28_1))
      return false;
    return true;
  };
  CharsetImpl.$metadata$ = classMeta('CharsetImpl', undefined, undefined, undefined, undefined, Charset.prototype);
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.z28_1 = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.z28_1 + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return this.z28_1.hashCode();
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.z28_1.equals(tmp0_other_with_cast.z28_1))
      return false;
    return true;
  };
  CharsetEncoderImpl.$metadata$ = classMeta('CharsetEncoderImpl', undefined, undefined, undefined, undefined, CharsetEncoder.prototype);
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.b29_1 = charset;
  }
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.b29_1 + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    return this.b29_1.hashCode();
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.b29_1.equals(tmp0_other_with_cast.b29_1))
      return false;
    return true;
  };
  CharsetDecoderImpl.$metadata$ = classMeta('CharsetDecoderImpl', undefined, undefined, undefined, undefined, CharsetDecoder.prototype);
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          {
            var tmp0__get_readRemaining__u3cy9h = current;
            tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h1w_1 - tmp0__get_readRemaining__u3cy9h.g1w_1 | 0;
          }
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                var tmp0__anonymous__q1qw7t = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                {
                  tmp$ret$2 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
                }
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                {
                  {
                  }
                  var tmp$ret$10;
                  {
                    {
                    }
                    var tmp$ret$9;
                    {
                      var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.f1w_1;
                      var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.g1w_1;
                      var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.h1w_1;
                      var tmp$ret$8;
                      {
                        var tmp3__anonymous__ufb84q = new Int8Array(tmp0__anonymous__q1qw7t_0.f21_1.buffer, tmp0__anonymous__q1qw7t_0.f21_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                        var tmp$ret$7;
                        $l$block_2: {
                          try {
                            var tmp$ret$6;
                            {
                              var tmp$ret$4;
                              $l$block_1: {
                                var tmp$ret$5;
                                {
                                  try {
                                    tmp$ret$4 = decoder.c29(tmp3__anonymous__ufb84q, decodeOptions(true));
                                    break $l$block_1;
                                  } catch ($p) {
                                    if ($p instanceof Error) {
                                      var tmp0_elvis_lhs_0 = $p.message;
                                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                                    } else {
                                      throw $p;
                                    }
                                  }
                                }
                              }
                              tmp$ret$6 = tmp$ret$4;
                            }
                            tmp$ret$7 = tmp$ret$6;
                            break $l$block_2;
                          } catch ($p) {
                            if ($p instanceof Error) {
                              var tmp0_elvis_lhs_1 = $p.message;
                              throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                            } else {
                              throw $p;
                            }
                          }
                        }
                        var decodedText = tmp$ret$7;
                        dst.c(decodedText);
                        charactersCopied = charactersCopied + decodedText.length | 0;
                        tmp$ret$8 = tmp3__anonymous__ufb84q.byteLength;
                      }
                      tmp$ret$9 = tmp$ret$8;
                    }
                    var rc = tmp$ret$9;
                    tmp0__anonymous__q1qw7t.k22(rc);
                    tmp$ret$10 = rc;
                  }
                  tmp$ret$11 = tmp$ret$10;
                }
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.d29();
                  } catch ($p) {
                    var tmp_2;
                    {
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  {
                    tmp$ret$12 = charSequenceLength(tail) > 0;
                  }
                  if (tmp$ret$12) {
                    tmp0__anonymous__q1qw7t.o22(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              {
                var tmp1__get_readRemaining__qliyus = current;
                tmp$ret$13 = tmp1__get_readRemaining__qliyus.h1w_1 - tmp1__get_readRemaining__qliyus.g1w_1 | 0;
              }
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              {
                var tmp2__get_endGap__m31424 = current;
                tmp$ret$14 = tmp2__get_endGap__m31424.k1w_1 - tmp2__get_endGap__m31424.j1w_1 | 0;
              }
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            {
              var tmp0__get_readRemaining__u3cy9h_0 = current_0;
              tmp$ret$16 = tmp0__get_readRemaining__u3cy9h_0.h1w_1 - tmp0__get_readRemaining__u3cy9h_0.g1w_1 | 0;
            }
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                {
                  var tmp1__anonymous__uwfjfc_0 = current_0;
                  var tmp$ret$20;
                  {
                    {
                    }
                    var tmp$ret$19;
                    {
                      {
                      }
                      var tmp$ret$18;
                      {
                        var tmp0__anonymous__q1qw7t_1 = tmp1__anonymous__uwfjfc_0.f1w_1;
                        var tmp1__anonymous__uwfjfc_1 = tmp1__anonymous__uwfjfc_0.g1w_1;
                        var tmp2__anonymous__z9zvc9_0 = tmp1__anonymous__uwfjfc_0.h1w_1;
                        var tmp$ret$17;
                        {
                          var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t_1.f21_1.buffer, tmp0__anonymous__q1qw7t_1.f21_1.byteOffset + tmp1__anonymous__uwfjfc_1 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_1 | 0);
                          var result = decodeBufferImpl(tmp3__anonymous__ufb84q_0, decoder, max - charactersCopied | 0);
                          dst.c(result.e29_1);
                          charactersCopied = charactersCopied + result.e29_1.length | 0;
                          tmp$ret$17 = result.f29_1;
                        }
                        tmp$ret$18 = tmp$ret$17;
                      }
                      var rc_0 = tmp$ret$18;
                      tmp1__anonymous__uwfjfc_0.k22(rc_0);
                      tmp$ret$19 = rc_0;
                    }
                    tmp$ret$20 = tmp$ret$19;
                  }
                  var rc_1 = tmp$ret$20;
                  if (rc_1 > 0)
                    size_0 = 1;
                  else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                    size_0 = 0;
                  else {
                    var tmp0 = size_0;
                    size_0 = tmp0 + 1 | 0;
                  }
                  tmp$ret$21 = size_0;
                }
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                {
                  var tmp1__get_readRemaining__qliyus_0 = current_0;
                  tmp$ret$22 = tmp1__get_readRemaining__qliyus_0.h1w_1 - tmp1__get_readRemaining__qliyus_0.g1w_1 | 0;
                }
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                {
                  var tmp2__get_endGap__m31424_0 = current_0;
                  tmp$ret$23 = tmp2__get_endGap__m31424_0.k1w_1 - tmp2__get_endGap__m31424_0.j1w_1 | 0;
                }
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    {
      var tmp0_require = fromIndex <= toIndex;
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
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().l25_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    {
      var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().k25_1;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
        }
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    {
      tmp$ret$2 = dst.j1w_1 - dst.h1w_1 | 0;
    }
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      {
        var tmp2_minOf = toIndex - start | 0;
        var tmp3_minOf = dstRemaining / 6 | 0;
        tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      }
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      {
        var tmp4_substring = start;
        tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      }
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully$default_1(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    {
      tmp$ret$0 = input.u1x_1 - input.t1x_1 | 0;
    }
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder_0(get_charset(_this__u8e3s4).m25_1, true);
      var head = input.b24();
      var view = input.s1x_1.f21_1;
      var tmp$ret$2;
      $l$block: {
        try {
          var tmp$ret$1;
          {
            var subView = (head.c22() === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.c22() | 0, inputLength);
            tmp$ret$1 = decoder.g29(subView);
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_elvis_lhs = $p.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.k22(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.u28_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.v28_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      try {
        var tmp$ret$17;
        {
          var tmp$ret$0;
          $l$block: {
            var release = true;
            var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var current = tmp;
            var size = 6;
            try {
              $l$loop: do {
                var tmp$ret$1;
                {
                  var tmp0__get_readRemaining__u3cy9h = current;
                  tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h1w_1 - tmp0__get_readRemaining__u3cy9h.g1w_1 | 0;
                }
                var before = tmp$ret$1;
                var after;
                if (before >= size) {
                  try {
                    var tmp$ret$8;
                    {
                      var tmp0__anonymous__q1qw7t = current;
                      var tmp$ret$2;
                      {
                        tmp$ret$2 = tmp0__anonymous__q1qw7t.h1w_1 - tmp0__anonymous__q1qw7t.g1w_1 | 0;
                      }
                      var chunkSize = tmp$ret$2;
                      var tmp$ret$3;
                      {
                        var tmp0_minOf = inputRemaining;
                        tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                      }
                      var size_0 = tmp$ret$3;
                      var tmp_0;
                      if (tmp0__anonymous__q1qw7t.g1w_1 === 0 ? tmp0__anonymous__q1qw7t.f1w_1.f21_1.byteLength === size_0 : false) {
                        var tmp$ret$4;
                        $l$block_0: {
                          var tmp1_decodeStream = tmp0__anonymous__q1qw7t.f1w_1.f21_1;
                          var tmp$ret$5;
                          {
                            try {
                              tmp$ret$4 = decoder.c29(tmp1_decodeStream, decodeOptions(true));
                              break $l$block_0;
                            } catch ($p) {
                              if ($p instanceof Error) {
                                var tmp0_elvis_lhs_0 = $p.message;
                                throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                              } else {
                                throw $p;
                              }
                            }
                          }
                        }
                        tmp_0 = tmp$ret$4;
                      } else {
                        var tmp$ret$6;
                        $l$block_1: {
                          var tmp2_decodeStream = new Int8Array(tmp0__anonymous__q1qw7t.f1w_1.f21_1.buffer, tmp0__anonymous__q1qw7t.f1w_1.f21_1.byteOffset + tmp0__anonymous__q1qw7t.g1w_1 | 0, size_0);
                          var tmp$ret$7;
                          {
                            try {
                              tmp$ret$6 = decoder.c29(tmp2_decodeStream, decodeOptions(true));
                              break $l$block_1;
                            } catch ($p) {
                              if ($p instanceof Error) {
                                var tmp0_elvis_lhs_1 = $p.message;
                                throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                              } else {
                                throw $p;
                              }
                            }
                          }
                        }
                        tmp_0 = tmp$ret$6;
                      }
                      var text = tmp_0;
                      sb.kf(text);
                      tmp0__anonymous__q1qw7t.k22(size_0);
                      inputRemaining = inputRemaining - size_0 | 0;
                      tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                    }
                    size = tmp$ret$8;
                  }finally {
                    var tmp$ret$9;
                    {
                      var tmp1__get_readRemaining__qliyus = current;
                      tmp$ret$9 = tmp1__get_readRemaining__qliyus.h1w_1 - tmp1__get_readRemaining__qliyus.g1w_1 | 0;
                    }
                    after = tmp$ret$9;
                  }
                } else {
                  after = before;
                }
                release = false;
                var tmp_1;
                if (after === 0) {
                  tmp_1 = prepareReadNextHead(input, current);
                } else {
                  var tmp_2;
                  if (after < size) {
                    tmp_2 = true;
                  } else {
                    var tmp$ret$10;
                    {
                      var tmp2__get_endGap__m31424 = current;
                      tmp$ret$10 = tmp2__get_endGap__m31424.k1w_1 - tmp2__get_endGap__m31424.j1w_1 | 0;
                    }
                    var tmp_3 = tmp$ret$10;
                    Companion_getInstance_1();
                    tmp_2 = tmp_3 < 8;
                  }
                  if (tmp_2) {
                    completeReadHead(input, current);
                    tmp_1 = prepareReadFirstHead(input, size);
                  } else {
                    tmp_1 = current;
                  }
                }
                var tmp1_elvis_lhs = tmp_1;
                var tmp_4;
                if (tmp1_elvis_lhs == null) {
                  break $l$loop;
                } else {
                  tmp_4 = tmp1_elvis_lhs;
                }
                var next = tmp_4;
                current = next;
                release = true;
              }
               while (size > 0);
            }finally {
              if (release) {
                completeReadHead(input, current);
              }
            }
          }
          if (inputRemaining > 0) {
            var tmp$ret$11;
            $l$block_2: {
              var release_0 = true;
              var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
              var tmp_5;
              if (tmp0_elvis_lhs_2 == null) {
                tmp$ret$11 = Unit_getInstance();
                break $l$block_2;
              } else {
                tmp_5 = tmp0_elvis_lhs_2;
              }
              var current_0 = tmp_5;
              try {
                $l$loop_1: do {
                  var tmp$ret$16;
                  {
                    var tmp1__anonymous__uwfjfc = current_0;
                    var tmp$ret$12;
                    {
                      tmp$ret$12 = tmp1__anonymous__uwfjfc.h1w_1 - tmp1__anonymous__uwfjfc.g1w_1 | 0;
                    }
                    var chunkSize_0 = tmp$ret$12;
                    var tmp$ret$13;
                    {
                      var tmp0_minOf_0 = inputRemaining;
                      tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                    }
                    var size_1 = tmp$ret$13;
                    var tmp_6;
                    if (tmp1__anonymous__uwfjfc.g1w_1 === 0 ? tmp1__anonymous__uwfjfc.f1w_1.f21_1.byteLength === size_1 : false) {
                      tmp_6 = decoder.g29(tmp1__anonymous__uwfjfc.f1w_1.f21_1);
                    } else {
                      var tmp$ret$14;
                      $l$block_3: {
                        var tmp1_decodeStream_0 = new Int8Array(tmp1__anonymous__uwfjfc.f1w_1.f21_1.buffer, tmp1__anonymous__uwfjfc.f1w_1.f21_1.byteOffset + tmp1__anonymous__uwfjfc.g1w_1 | 0, size_1);
                        var tmp$ret$15;
                        {
                          try {
                            tmp$ret$14 = decoder.c29(tmp1_decodeStream_0, decodeOptions(true));
                            break $l$block_3;
                          } catch ($p) {
                            if ($p instanceof Error) {
                              var tmp0_elvis_lhs_3 = $p.message;
                              throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                            } else {
                              throw $p;
                            }
                          }
                        }
                      }
                      tmp_6 = tmp$ret$14;
                    }
                    var text_0 = tmp_6;
                    sb.kf(text_0);
                    tmp1__anonymous__uwfjfc.k22(size_1);
                    inputRemaining = inputRemaining - size_1 | 0;
                    tmp$ret$16 = true;
                  }
                  if (!tmp$ret$16) {
                    break $l$loop_1;
                  }
                  release_0 = false;
                  var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                  var tmp_7;
                  if (tmp1_elvis_lhs_0 == null) {
                    break $l$loop_1;
                  } else {
                    tmp_7 = tmp1_elvis_lhs_0;
                  }
                  var next_0 = tmp_7;
                  current_0 = next_0;
                  release_0 = true;
                }
                 while (true);
              }finally {
                if (release_0) {
                  completeReadHead(input, current_0);
                }
              }
            }
          }
          tmp$ret$17 = sb.kf(decoder.d29());
        }
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs_4 = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  MalformedInputException.$metadata$ = classMeta('MalformedInputException', undefined, undefined, undefined, undefined, Error.prototype);
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.e29_1 = charactersDecoded;
    this.f29_1 = bytesConsumed;
  }
  DecodeBufferResult.prototype.h29 = function () {
    return this.e29_1;
  };
  DecodeBufferResult.prototype.i29 = function () {
    return this.f29_1;
  };
  DecodeBufferResult.prototype.toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.e29_1 + ', bytesConsumed=' + this.f29_1 + ')';
  };
  DecodeBufferResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.e29_1);
    result = imul(result, 31) + this.f29_1 | 0;
    return result;
  };
  DecodeBufferResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.e29_1 === tmp0_other_with_cast.e29_1))
      return false;
    if (!(this.f29_1 === tmp0_other_with_cast.f29_1))
      return false;
    return true;
  };
  DecodeBufferResult.$metadata$ = classMeta('DecodeBufferResult');
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.g29(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().w_1 : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.g29(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.g29(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = nativeDecoder.g29(_this__u8e3s4);
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    {
      {
      }
      var tmp$ret$4;
      {
        {
        }
        var tmp$ret$3;
        {
          var tmp0__anonymous__q1qw7t = dst.f1w_1;
          var tmp1__anonymous__uwfjfc = dst.h1w_1;
          var tmp2__anonymous__z9zvc9 = dst.j1w_1;
          var tmp$ret$2;
          {
            var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.q28(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).f21_1;
            var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
            var writeIndex = 0;
            var inductionVariable = fromIndex;
            if (inductionVariable < toIndex)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$0;
                {
                  var tmp0__get_code__88qj9g = charSequenceGet(input, index);
                  tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
                }
                var character = tmp$ret$0;
                if (character > 255) {
                  failedToMapError(character);
                }
                {
                  var tmp1 = writeIndex;
                  writeIndex = tmp1 + 1 | 0;
                  var tmp1_set = tmp1;
                  var tmp2_set = toByte(character);
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = i8;
                  }
                  tmp$ret$1[tmp1_set] = tmp2_set;
                }
              }
               while (inductionVariable < toIndex);
            tmp$ret$2 = writeIndex;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        var rc = tmp$ret$3;
        dst.l22(rc);
        tmp$ret$4 = rc;
      }
      tmp$ret$5 = tmp$ret$4;
    }
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function readDirectInt8Array(_this__u8e3s4, block) {
    {
    }
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.g1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h1w_1;
        tmp$ret$0 = block(new Int8Array(tmp0__anonymous__q1qw7t.f21_1.buffer, tmp0__anonymous__q1qw7t.f21_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0));
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.k22(rc);
      tmp$ret$1 = rc;
    }
    return tmp$ret$1;
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.h1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j1w_1;
        if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
          throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
        }
        copyTo_1(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
        tmp$ret$0 = length;
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.l22(rc);
      tmp$ret$1 = rc;
    }
  }
  function writeFully$default_1(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_4(_this__u8e3s4, src, offset, length);
  }
  function writeDirect(_this__u8e3s4, block) {
    {
    }
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.f1w_1;
        var tmp1__anonymous__uwfjfc = _this__u8e3s4.h1w_1;
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j1w_1;
        tmp$ret$0 = block(tmp0__anonymous__q1qw7t.q28(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).f21_1);
      }
      var rc = tmp$ret$0;
      _this__u8e3s4.l22(rc);
      tmp$ret$1 = rc;
    }
    return tmp$ret$1;
  }
  function Closeable() {
  }
  Closeable.$metadata$ = interfaceMeta('Closeable');
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = bytes;
    }
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var tmp = Companion_getInstance_6();
    var view = new ChunkBuffer(of$default(tmp, buffer, 0, 0, 6, null), null, Companion_getInstance_4().v1s_1);
    view.r22();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().w1s_1);
    return decode(charset.o25(), packet, IntCompanionObject_getInstance().w_1);
  }
  function String$default(bytes, offset, length, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().k25_1;
    return String_0(bytes, offset, length, charset);
  }
  function checkIndices(offset, length, bytes) {
    {
      var tmp0_require = offset >= 0;
      {
      }
      if (!tmp0_require) {
        throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
      }
    }
    {
      var tmp1_require = length >= 0;
      {
      }
      if (!tmp1_require) {
        throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
      }
    }
    {
      var tmp2_require = (offset + length | 0) <= bytes.length;
      {
      }
      if (!tmp2_require) {
        throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
      }
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  EOFException.$metadata$ = classMeta('EOFException', undefined, undefined, undefined, undefined, IOException.prototype);
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = classMeta('IOException', undefined, undefined, undefined, undefined, Exception.prototype);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Decoder_0(encoding, fatal) {
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeStream(_this__u8e3s4, buffer, stream) {
    var tmp$ret$0;
    {
      try {
        return _this__u8e3s4.c29(buffer, decodeOptions(stream));
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    {
      var tmp0_apply = new Object();
      {
      }
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_apply;
          }
          var tmp0_with = tmp$ret$0;
          {
          }
          tmp$ret$1 = tmp0_with.stream = stream;
        }
      }
      tmp$ret$2 = tmp0_apply;
    }
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    var tmp$ret$2;
    {
      var tmp0_apply = new Object();
      {
      }
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_apply;
          }
          var tmp0_with = tmp$ret$0;
          {
          }
          tmp$ret$1 = tmp0_with.fatal = fatal;
        }
      }
      tmp$ret$2 = tmp0_apply;
    }
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.j29_1 = $this_toKtor;
  }
  toKtor$1.prototype.d29 = function () {
    return this.j29_1.decode();
  };
  toKtor$1.prototype.g29 = function (buffer) {
    return this.j29_1.decode(buffer);
  };
  toKtor$1.prototype.c29 = function (buffer, options) {
    return this.j29_1.decode(buffer, options);
  };
  toKtor$1.$metadata$ = classMeta(undefined, [Decoder]);
  function get_ENCODING_ALIASES() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.k29_1 = fatal;
    var tmp$ret$2;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
      }
      var tmp0_lowercase = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = tmp0_lowercase;
      }
      tmp$ret$2 = tmp$ret$1.toLowerCase();
    }
    var requestedEncoding = tmp$ret$2;
    {
      var tmp1_check = get_ENCODING_ALIASES().l1(requestedEncoding);
      {
      }
      if (!tmp1_check) {
        var tmp$ret$3;
        {
          tmp$ret$3 = encoding + ' is not supported.';
        }
        var message = tmp$ret$3;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  TextDecoderFallback.prototype.l29 = function () {
    return this.k29_1;
  };
  TextDecoderFallback.prototype.d29 = function () {
    return '';
  };
  TextDecoderFallback.prototype.g29 = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      {
      }
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        {
          var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
          var inductionVariable = 0;
          var last = bytes.length;
          if (inductionVariable < last)
            $l$loop: do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$1;
              {
                var tmp$ret$0;
                {
                  tmp$ret$0 = bytes;
                }
                tmp$ret$1 = tmp$ret$0[index];
              }
              var byte = tmp$ret$1;
              var point = toCodePoint(byte);
              if (point < 0) {
                {
                  var tmp0_check = !this.k29_1;
                  {
                  }
                  if (!tmp0_check) {
                    var tmp$ret$2;
                    {
                      tmp$ret$2 = 'Invalid character: ' + point;
                    }
                    var message = tmp$ret$2;
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
                var tmp = get_REPLACEMENT();
                writeFully$default_0(builder, tmp, 0, 0, 6, null);
                continue $l$loop;
              }
              if (point > 255) {
                builder.z22(toByte(point >> 8));
              }
              builder.z22(toByte(point & 255));
            }
             while (inductionVariable < last);
        }
        tmp$ret$3 = builder.yn();
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
    var tmp_0 = tmp$ret$3;
    return decodeToString(readBytes$default(tmp_0, 0, 1, null));
  };
  TextDecoderFallback.prototype.c29 = function (buffer, options) {
    return this.g29(buffer);
  };
  TextDecoderFallback.$metadata$ = classMeta('TextDecoderFallback', [Decoder]);
  function toCodePoint(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function init_properties_TextDecoderFallback_kt_mch4cl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      {
        var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
        tmp$ret$0 = tmp0_byteArrayOf;
      }
      REPLACEMENT = tmp$ret$0;
    }
  }
  function decodeWrap(block) {
    try {
      return block();
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = $p.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
  }
  function get_WIN1252_TABLE() {
    init_properties_Win1252Table_kt_2hu70m();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function init_properties_Win1252Table_kt_2hu70m() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      {
        tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      }
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.i23_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_arrayOfNulls = this.i23_1;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp.j23_1 = tmp$ret$0;
    this.k23_1 = 0;
  }
  DefaultPool.prototype.l23 = function (instance) {
  };
  DefaultPool.prototype.s23 = function (instance) {
    return instance;
  };
  DefaultPool.prototype.o23 = function (instance) {
  };
  DefaultPool.prototype.j21 = function () {
    if (this.k23_1 === 0)
      return this.g23();
    var tmp0_this = this;
    tmp0_this.k23_1 = tmp0_this.k23_1 - 1 | 0;
    var idx = tmp0_this.k23_1;
    var tmp = this.j23_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.j23_1[idx] = null;
    return this.s23(instance);
  };
  DefaultPool.prototype.u23 = function (instance) {
    this.o23(instance);
    if (this.k23_1 === this.i23_1) {
      this.l23(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.k23_1;
      tmp0_this.k23_1 = tmp1 + 1 | 0;
      this.j23_1[tmp1] = instance;
    }
  };
  DefaultPool.prototype.w1c = function () {
    var inductionVariable = 0;
    var last = this.k23_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.j23_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.j23_1[i] = null;
        this.l23(instance);
      }
       while (inductionVariable < last);
    this.k23_1 = 0;
  };
  DefaultPool.$metadata$ = classMeta('DefaultPool', [ObjectPool]);
  //region block: post-declaration
  ByteChannelSequentialBase.prototype.d20 = readRemaining$default;
  ChannelJob.prototype.y1a = cancel$default;
  ChannelJob.prototype.u1a = invokeOnCompletion$default;
  DefaultPool.prototype.y1q = close;
  DefaultBufferPool.prototype.y1q = close;
  ChunkBuffer$Companion$Pool$1.prototype.y1q = close;
  ChunkBuffer$Companion$EmptyPool$1.prototype.y1q = close;
  NoPoolImpl.prototype.y1q = close;
  ChunkBuffer$Companion$NoPool$1.prototype.y1q = close;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.y1q = close;
  ByteArrayPool$1.prototype.y1q = close;
  ByteChannelJS.prototype.d20 = readRemaining$default;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = decode$default;
  _.$_$.e = encode$default;
  _.$_$.f = String$default;
  _.$_$.g = readBytes$default;
  _.$_$.h = readText$default;
  _.$_$.i = writeFully$default_0;
  _.$_$.j = writeText$default;
  _.$_$.k = writer$default;
  _.$_$.l = BytePacketBuilder_init_$Create$;
  _.$_$.m = IOException_init_$Init$;
  _.$_$.n = Companion_getInstance_7;
  _.$_$.o = Charsets_getInstance;
  _.$_$.p = Companion_getInstance_5;
  _.$_$.q = encodeToByteArray_0;
  _.$_$.r = encode;
  _.$_$.s = get_name;
  _.$_$.t = completeReadHead;
  _.$_$.u = prepareReadFirstHead;
  _.$_$.v = prepareReadNextHead;
  _.$_$.w = ByteReadPacket;
  _.$_$.x = Closeable;
  _.$_$.y = Input;
  _.$_$.z = String_0;
  _.$_$.a1 = discard;
  _.$_$.b1 = readShort_0;
  _.$_$.c1 = writeShort_0;
  _.$_$.d1 = IOException;
  _.$_$.e1 = get_ByteArrayPool;
  _.$_$.f1 = ByteReadChannel;
  _.$_$.g1 = ByteReadChannel_1;
  _.$_$.h1 = WriterScope;
  _.$_$.i1 = cancel;
  _.$_$.j1 = writer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js')));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map