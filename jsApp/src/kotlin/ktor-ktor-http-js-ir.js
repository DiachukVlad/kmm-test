(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var encode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.u;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.v;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.t;
  var charArray = kotlin_kotlin.$_$.z7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k2;
  var concatToString = kotlin_kotlin.$_$.v9;
  var charSequenceGet = kotlin_kotlin.$_$.a8;
  var Char = kotlin_kotlin.$_$.za;
  var equals = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.h9;
  var isSurrogate = kotlin_kotlin.$_$.ea;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.o2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.n2;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.b8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c8;
  var toByte = kotlin_kotlin.$_$.e9;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.z;
  var Exception = kotlin_kotlin.$_$.gb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.x7;
  var classMeta = kotlin_kotlin.$_$.d8;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.m2;
  var numberToChar = kotlin_kotlin.$_$.b9;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.p2;
  var plus = kotlin_kotlin.$_$.e6;
  var plus_0 = kotlin_kotlin.$_$.f6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q2;
  var toSet = kotlin_kotlin.$_$.v6;
  var setOf = kotlin_kotlin.$_$.k6;
  var plus_1 = kotlin_kotlin.$_$.d6;
  var listOf = kotlin_kotlin.$_$.z5;
  var interfaceMeta = kotlin_kotlin.$_$.l8;
  var emptyList = kotlin_kotlin.$_$.i5;
  var equals_0 = kotlin_kotlin.$_$.y9;
  var Collection = kotlin_kotlin.$_$.b4;
  var isInterface = kotlin_kotlin.$_$.u8;
  var isBlank = kotlin_kotlin.$_$.aa;
  var last = kotlin_kotlin.$_$.x5;
  var indexOf$default = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var isCharSequence = kotlin_kotlin.$_$.q8;
  var trim = kotlin_kotlin.$_$.xa;
  var contains$default = kotlin_kotlin.$_$.j;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var plus_2 = kotlin_kotlin.$_$.g6;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var hashCode = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.hb;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.u5;
  var last_0 = kotlin_kotlin.$_$.ha;
  var first = kotlin_kotlin.$_$.z9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.ga;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.p;
  var emptySet = kotlin_kotlin.$_$.k5;
  var get = kotlin_io_ktor_ktor_utils.$_$.o;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.n;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var toDoubleOrNull = kotlin_kotlin.$_$.la;
  var rangeTo = kotlin_kotlin.$_$.o9;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.ec;
  var to = kotlin_kotlin.$_$.kc;
  var sortedWith = kotlin_kotlin.$_$.m6;
  var Comparator = kotlin_kotlin.$_$.bb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var compareValues = kotlin_kotlin.$_$.y6;
  var asList = kotlin_kotlin.$_$.t4;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var toLong = kotlin_kotlin.$_$.qa;
  var mapCapacity = kotlin_kotlin.$_$.a6;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var StringValuesBuilder = kotlin_io_ktor_ktor_utils.$_$.q;
  var isWhitespace = kotlin_kotlin.$_$.fa;
  var startsWith$default = kotlin_kotlin.$_$.s;
  var charArrayOf = kotlin_kotlin.$_$.y7;
  var split$default = kotlin_kotlin.$_$.q;
  var toMutableList = kotlin_kotlin.$_$.t6;
  var first_0 = kotlin_kotlin.$_$.p5;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.x;
  var indexOfAny$default = kotlin_kotlin.$_$.l;
  var dropLast = kotlin_kotlin.$_$.h5;
  var IllegalStateException = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.a2;
  var indexOf$default_0 = kotlin_kotlin.$_$.m;
  var toInt = kotlin_kotlin.$_$.oa;
  var listOf_0 = kotlin_kotlin.$_$.y5;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.y;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.v;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith$default_0 = kotlin_kotlin.$_$.r;
  var addAll = kotlin_kotlin.$_$.r4;
  var joinTo$default = kotlin_kotlin.$_$.i;
  var toString_0 = kotlin_kotlin.$_$.jc;
  var lazy_0 = kotlin_kotlin.$_$.fc;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i8;
  var toLong_0 = kotlin_kotlin.$_$.f9;
  var encodeToByteArray = kotlin_kotlin.$_$.x9;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.q;
  var take = kotlin_kotlin.$_$.ja;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  //endregion
  //region block: pre-declaration
  URLDecodeException.prototype = Object.create(Exception.prototype);
  URLDecodeException.prototype.constructor = URLDecodeException;
  ContentType.prototype = Object.create(HeaderValueWithParameters.prototype);
  ContentType.prototype.constructor = ContentType;
  BadContentTypeFormatException.prototype = Object.create(Exception.prototype);
  BadContentTypeFormatException.prototype.constructor = BadContentTypeFormatException;
  HeadersBuilder.prototype = Object.create(StringValuesBuilderImpl.prototype);
  HeadersBuilder.prototype.constructor = HeadersBuilder;
  HeadersImpl.prototype = Object.create(StringValuesImpl.prototype);
  HeadersImpl.prototype.constructor = HeadersImpl;
  IllegalHeaderNameException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderNameException.prototype.constructor = IllegalHeaderNameException;
  IllegalHeaderValueException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderValueException.prototype.constructor = IllegalHeaderValueException;
  UnsafeHeaderException.prototype = Object.create(IllegalArgumentException.prototype);
  UnsafeHeaderException.prototype.constructor = UnsafeHeaderException;
  ParametersBuilderImpl.prototype = Object.create(StringValuesBuilderImpl.prototype);
  ParametersBuilderImpl.prototype.constructor = ParametersBuilderImpl;
  ParametersImpl.prototype = Object.create(StringValuesImpl.prototype);
  ParametersImpl.prototype.constructor = ParametersImpl;
  URLParserException.prototype = Object.create(IllegalStateException.prototype);
  URLParserException.prototype.constructor = URLParserException;
  ByteArrayContent_0.prototype = Object.create(OutgoingContent.prototype);
  ByteArrayContent_0.prototype.constructor = ByteArrayContent_0;
  ByteArrayContent.prototype = Object.create(ByteArrayContent_0.prototype);
  ByteArrayContent.prototype.constructor = ByteArrayContent;
  NoContent.prototype = Object.create(OutgoingContent.prototype);
  NoContent.prototype.constructor = NoContent;
  ReadChannelContent.prototype = Object.create(OutgoingContent.prototype);
  ReadChannelContent.prototype.constructor = ReadChannelContent;
  WriteChannelContent.prototype = Object.create(OutgoingContent.prototype);
  WriteChannelContent.prototype.constructor = WriteChannelContent;
  ProtocolUpgrade.prototype = Object.create(OutgoingContent.prototype);
  ProtocolUpgrade.prototype.constructor = ProtocolUpgrade;
  TextContent.prototype = Object.create(ByteArrayContent_0.prototype);
  TextContent.prototype.constructor = TextContent;
  //endregion
  function get_URL_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_OAUTH_SYMBOLS() {
    init_properties_Codecs_kt_hjkt7n();
    return OAUTH_SYMBOLS;
  }
  var OAUTH_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    init_properties_Codecs_kt_hjkt7n();
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
          var tmp = Charsets_getInstance().k25_1.n25();
          var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
          forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodeURLParameter$default(_this__u8e3s4, spaceToPlus, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      spaceToPlus = false;
    return encodeURLParameter(_this__u8e3s4, spaceToPlus);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeURLPart$default(_this__u8e3s4, start, end, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().k25_1;
    return decodeURLPart(_this__u8e3s4, start, end, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    init_properties_Codecs_kt_hjkt7n();
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
          var tmp = charset.n25();
          var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
          forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodeURLQueryComponent$default(_this__u8e3s4, encodeFull, spaceToPlus, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeFull = false;
    if (!(($mask0 & 2) === 0))
      spaceToPlus = false;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().k25_1;
    return encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset);
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function decodeURLQueryComponent$default(_this__u8e3s4, start, end, plusIsSpace, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      plusIsSpace = false;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().k25_1;
    return decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    init_properties_Codecs_kt_hjkt7n();
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
        $l$loop_1: do {
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = current;
            $l$loop: while (true) {
              var tmp$ret$1;
              {
                tmp$ret$1 = tmp0__anonymous__q1qw7t.h1w_1 > tmp0__anonymous__q1qw7t.g1w_1;
              }
              if (!tmp$ret$1) {
                break $l$loop;
              }
              block(tmp0__anonymous__q1qw7t.y22());
            }
            tmp$ret$2 = true;
          }
          if (!tmp$ret$2) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
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
  }
  function percentEncode(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(37))) ? true : plusIsSpace ? equals(new Char(ch), new Char(_Char___init__impl__6a9atx(43))) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = _this__u8e3s4;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash) {
    init_properties_Codecs_kt_hjkt7n();
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
          var charset = Charsets_getInstance().k25_1;
          var index = 0;
          $l$loop_0: while (index < _this__u8e3s4.length) {
            var current = charSequenceGet(_this__u8e3s4, index);
            if (((!encodeSlash ? equals(new Char(current), new Char(_Char___init__impl__6a9atx(47))) : false) ? true : get_URL_ALPHABET_CHARS().l1(new Char(current))) ? true : get_VALID_PATH_PART().l1(new Char(current))) {
              tmp0_apply.r4(current);
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              continue $l$loop_0;
            }
            if (((equals(new Char(current), new Char(_Char___init__impl__6a9atx(37))) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().l1(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().l1(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
              tmp0_apply.r4(current);
              tmp0_apply.r4(charSequenceGet(_this__u8e3s4, index + 1 | 0));
              tmp0_apply.r4(charSequenceGet(_this__u8e3s4, index + 2 | 0));
              index = index + 3 | 0;
              continue $l$loop_0;
            }
            var symbolSize = isSurrogate(current) ? 2 : 1;
            var tmp = encode(charset.n25(), _this__u8e3s4, index, index + symbolSize | 0);
            forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
            index = index + symbolSize | 0;
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function hexDigitToChar(digit) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = digit;
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.hf(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? equals(new Char(c), new Char(_Char___init__impl__6a9atx(43))) : false) {
        sb.r4(_Char___init__impl__6a9atx(32));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(37))) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            {
              var tmp0_substring = index;
              var tmp1_substring = charSequenceLength(_this__u8e3s4);
              tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            }
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.kf(String_0(bytes, 0, count, charset));
      } else {
        sb.r4(c);
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  URLDecodeException.$metadata$ = classMeta('URLDecodeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charToHexDigit(c2) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = c2;
    return (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().l1(it) ? true : get_OAUTH_SYMBOLS().l1(it)) {
        $tmp0_apply.r4(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          {
            tmp$ret$0 = 32;
          }
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.r4(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.kf(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      {
        tmp$ret$0 = 32;
      }
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.r4(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.kf('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().l1(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().l1(it) : false) {
          $tmp0_apply.r4(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.kf(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.kf(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function init_properties_Codecs_kt_hjkt7n() {
    if (properties_initialized_Codecs_kt_hkj9s1) {
    } else {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      var tmp$ret$3;
      {
        var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
        var tmp$ret$2;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.e();
          while (tmp0_iterator.f()) {
            var item = tmp0_iterator.g().i1_1;
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = Char__toInt_impl_vasixd(item);
              }
              tmp$ret$1 = toByte(tmp$ret$0);
            }
            tmp0_mapTo.b(tmp$ret$1);
          }
          tmp$ret$2 = tmp0_mapTo;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      URL_ALPHABET = toSet(tmp$ret$3);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      var tmp$ret$3_0;
      {
        var tmp0_map_0 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
        var tmp$ret$2_0;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
          var tmp0_iterator_0 = tmp0_map_0.e();
          while (tmp0_iterator_0.f()) {
            var item_0 = tmp0_iterator_0.g().i1_1;
            var tmp$ret$1_0;
            {
              var tmp$ret$0_0;
              {
                tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
              }
              tmp$ret$1_0 = toByte(tmp$ret$0_0);
            }
            tmp0_mapTo_0.b(tmp$ret$1_0);
          }
          tmp$ret$2_0 = tmp0_mapTo_0;
        }
        tmp$ret$3_0 = tmp$ret$2_0;
      }
      URL_PROTOCOL_PART = tmp$ret$3_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      var tmp$ret$3_1;
      {
        var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
        var tmp$ret$2_1;
        {
          var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
          var tmp0_iterator_1 = tmp0_map_1.e();
          while (tmp0_iterator_1.f()) {
            var item_1 = tmp0_iterator_1.g().i1_1;
            var tmp$ret$1_1;
            {
              var tmp$ret$0_1;
              {
                tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
              }
              tmp$ret$1_1 = toByte(tmp$ret$0_1);
            }
            tmp0_mapTo_1.b(tmp$ret$1_1);
          }
          tmp$ret$2_1 = tmp0_mapTo_1;
        }
        tmp$ret$3_1 = tmp$ret$2_1;
      }
      OAUTH_SYMBOLS = tmp$ret$3_1;
    }
  }
  function ContentTypeMatcher() {
  }
  ContentTypeMatcher.$metadata$ = interfaceMeta('ContentTypeMatcher');
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function hasParameter($this, name, value) {
    var tmp0_subject = $this.c2f().d();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        var tmp$ret$1;
        {
          var tmp0_let = $this.c2f().h(0);
          {
          }
          var tmp$ret$0;
          {
            tmp$ret$0 = equals_0(tmp0_let.d2f_1, name, true) ? equals_0(tmp0_let.e2f_1, value, true) : false;
          }
          tmp$ret$1 = tmp$ret$0;
        }

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          var tmp1_any = $this.c2f();
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.m();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.e();
          while (tmp0_iterator.f()) {
            var element = tmp0_iterator.g();
            var tmp$ret$3;
            {
              tmp$ret$3 = equals_0(element.d2f_1, name, true) ? equals_0(element.e2f_1, value, true) : false;
            }
            if (tmp$ret$3) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.g2f_1 = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion.prototype.h2f = function (value) {
    if (isBlank(value))
      return this.g2f_1;
    var tmp$ret$10;
    {
      var tmp0_parse = Companion_getInstance_1();
      var headerValue = last(parseHeaderValue(value));
      var tmp$ret$9;
      {
        var tmp1__anonymous__uwfjfc = headerValue.i2f_1;
        var tmp2__anonymous__z9zvc9 = headerValue.j2f_1;
        var tmp = _Char___init__impl__6a9atx(47);
        var slash = indexOf$default(tmp1__anonymous__uwfjfc, tmp, 0, false, 6, null);
        if (slash === -1) {
          var tmp$ret$0;
          {
            tmp$ret$0 = toString(trim(isCharSequence(tmp1__anonymous__uwfjfc) ? tmp1__anonymous__uwfjfc : THROW_CCE()));
          }
          if (tmp$ret$0 === '*')
            return Companion_getInstance_0().g2f_1;
          throw new BadContentTypeFormatException(value);
        }
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              tmp$ret$1 = tmp1__anonymous__uwfjfc;
            }
            tmp$ret$2 = tmp$ret$1.substring(0, slash);
          }
          var tmp0_trim = tmp$ret$2;
          tmp$ret$3 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
        }
        var type = tmp$ret$3;
        var tmp$ret$4;
        {
          tmp$ret$4 = charSequenceLength(type) === 0;
        }
        if (tmp$ret$4) {
          throw new BadContentTypeFormatException(value);
        }
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            var tmp1_substring = slash + 1 | 0;
            var tmp$ret$5;
            {
              tmp$ret$5 = tmp1__anonymous__uwfjfc;
            }
            tmp$ret$6 = tmp$ret$5.substring(tmp1_substring);
          }
          var tmp2_trim = tmp$ret$6;
          tmp$ret$7 = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
        }
        var subtype = tmp$ret$7;
        var tmp_0;
        var tmp_1 = _Char___init__impl__6a9atx(32);
        if (contains$default(type, tmp_1, false, 2, null)) {
          tmp_0 = true;
        } else {
          var tmp_2 = _Char___init__impl__6a9atx(32);
          tmp_0 = contains$default(subtype, tmp_2, false, 2, null);
        }
        if (tmp_0) {
          throw new BadContentTypeFormatException(value);
        }
        var tmp_3;
        var tmp$ret$8;
        {
          tmp$ret$8 = charSequenceLength(subtype) === 0;
        }
        if (tmp$ret$8) {
          tmp_3 = true;
        } else {
          var tmp_4 = _Char___init__impl__6a9atx(47);
          tmp_3 = contains$default(subtype, tmp_4, false, 2, null);
        }
        if (tmp_3) {
          throw new BadContentTypeFormatException(value);
        }
        tmp$ret$9 = ContentType_init_$Create$(type, subtype, tmp2__anonymous__z9zvc9);
      }
      tmp$ret$10 = tmp$ret$9;
    }
    return tmp$ret$10;
  };
  Companion.prototype.l2f = function () {
    return this.g2f_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    var tmp = this;
    tmp.m2f_1 = ContentType_init_$Create$_0('application', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.n2f_1 = ContentType_init_$Create$_0('application', 'atom+xml', null, 4, null);
    var tmp_1 = this;
    tmp_1.o2f_1 = ContentType_init_$Create$_0('application', 'cbor', null, 4, null);
    var tmp_2 = this;
    tmp_2.p2f_1 = ContentType_init_$Create$_0('application', 'json', null, 4, null);
    var tmp_3 = this;
    tmp_3.q2f_1 = ContentType_init_$Create$_0('application', 'hal+json', null, 4, null);
    var tmp_4 = this;
    tmp_4.r2f_1 = ContentType_init_$Create$_0('application', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.s2f_1 = ContentType_init_$Create$_0('application', 'octet-stream', null, 4, null);
    var tmp_6 = this;
    tmp_6.t2f_1 = ContentType_init_$Create$_0('application', 'font-woff', null, 4, null);
    var tmp_7 = this;
    tmp_7.u2f_1 = ContentType_init_$Create$_0('application', 'rss+xml', null, 4, null);
    var tmp_8 = this;
    tmp_8.v2f_1 = ContentType_init_$Create$_0('application', 'xml', null, 4, null);
    var tmp_9 = this;
    tmp_9.w2f_1 = ContentType_init_$Create$_0('application', 'xml-dtd', null, 4, null);
    var tmp_10 = this;
    tmp_10.x2f_1 = ContentType_init_$Create$_0('application', 'zip', null, 4, null);
    var tmp_11 = this;
    tmp_11.y2f_1 = ContentType_init_$Create$_0('application', 'gzip', null, 4, null);
    var tmp_12 = this;
    tmp_12.z2f_1 = ContentType_init_$Create$_0('application', 'x-www-form-urlencoded', null, 4, null);
    var tmp_13 = this;
    tmp_13.a2g_1 = ContentType_init_$Create$_0('application', 'pdf', null, 4, null);
    var tmp_14 = this;
    tmp_14.b2g_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 4, null);
    var tmp_15 = this;
    tmp_15.c2g_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document', null, 4, null);
    var tmp_16 = this;
    tmp_16.d2g_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.presentationml.presentation', null, 4, null);
    var tmp_17 = this;
    tmp_17.e2g_1 = ContentType_init_$Create$_0('application', 'protobuf', null, 4, null);
    var tmp_18 = this;
    tmp_18.f2g_1 = ContentType_init_$Create$_0('application', 'wasm', null, 4, null);
    var tmp_19 = this;
    tmp_19.g2g_1 = ContentType_init_$Create$_0('application', 'problem+json', null, 4, null);
    var tmp_20 = this;
    tmp_20.h2g_1 = ContentType_init_$Create$_0('application', 'problem+xml', null, 4, null);
  }
  Application.$metadata$ = objectMeta('Application');
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    var tmp = this;
    tmp.i2g_1 = ContentType_init_$Create$_0('text', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.j2g_1 = ContentType_init_$Create$_0('text', 'plain', null, 4, null);
    var tmp_1 = this;
    tmp_1.k2g_1 = ContentType_init_$Create$_0('text', 'css', null, 4, null);
    var tmp_2 = this;
    tmp_2.l2g_1 = ContentType_init_$Create$_0('text', 'csv', null, 4, null);
    var tmp_3 = this;
    tmp_3.m2g_1 = ContentType_init_$Create$_0('text', 'html', null, 4, null);
    var tmp_4 = this;
    tmp_4.n2g_1 = ContentType_init_$Create$_0('text', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.o2g_1 = ContentType_init_$Create$_0('text', 'vcard', null, 4, null);
    var tmp_6 = this;
    tmp_6.p2g_1 = ContentType_init_$Create$_0('text', 'xml', null, 4, null);
    var tmp_7 = this;
    tmp_7.q2g_1 = ContentType_init_$Create$_0('text', 'event-stream', null, 4, null);
  }
  Text.$metadata$ = objectMeta('Text');
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.t2g_1 = contentType;
    this.u2g_1 = contentSubtype;
  }
  ContentType.prototype.v2g = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.t2g_1, this.u2g_1, this.a11(), plus_2(this.c2f(), HeaderValueParam_init_$Create$(name, value)));
  };
  ContentType.prototype.w2g = function () {
    var tmp;
    if (this.c2f().m()) {
      tmp = this;
    } else {
      tmp = ContentType_init_$Create$_0(this.t2g_1, this.u2g_1, null, 4, null);
    }
    return tmp;
  };
  ContentType.prototype.x2g = function (pattern) {
    if (!(pattern.t2g_1 === '*') ? !equals_0(pattern.t2g_1, this.t2g_1, true) : false) {
      return false;
    }
    if (!(pattern.u2g_1 === '*') ? !equals_0(pattern.u2g_1, this.u2g_1, true) : false) {
      return false;
    }
    var tmp0_iterator = pattern.c2f().e();
    while (tmp0_iterator.f()) {
      var tmp1_loop_parameter = tmp0_iterator.g();
      var patternName = tmp1_loop_parameter.h3();
      var patternValue = tmp1_loop_parameter.i3();
      var tmp2_subject = patternName;
      var tmp;
      if (tmp2_subject === '*') {
        var tmp3_subject = patternValue;
        var tmp_0;
        if (tmp3_subject === '*') {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            var tmp0_any = this.c2f();
            var tmp_1;
            if (isInterface(tmp0_any, Collection)) {
              tmp_1 = tmp0_any.m();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator_0 = tmp0_any.e();
            while (tmp0_iterator_0.f()) {
              var element = tmp0_iterator_0.g();
              var tmp$ret$1;
              {
                tmp$ret$1 = equals_0(element.e2f_1, patternValue, true);
              }
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.y2g(patternName);
        var tmp4_subject = patternValue;
        tmp = tmp4_subject === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.t2g_1, other.t2g_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.u2g_1, other.u2g_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.c2f(), other.c2f());
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    {
      var tmp0_lowercase = this.t2g_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    {
      var tmp1_lowercase = this.u2g_1;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_lowercase;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.c2f())) | 0;
    return result;
  };
  ContentType.$metadata$ = classMeta('ContentType', undefined, undefined, undefined, undefined, HeaderValueWithParameters.prototype);
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  BadContentTypeFormatException.$metadata$ = classMeta('BadContentTypeFormatException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y2g('charset');
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
          var tmp_0;
          try {
            tmp_0 = Companion_getInstance().r28(tmp0_safe_receiver);
          } catch ($p) {
            var tmp_1;
            if ($p instanceof IllegalArgumentException) {
              tmp_1 = null;
            } else {
              throw $p;
            }
            tmp_0 = tmp_1;
          }
          tmp$ret$0 = tmp_0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.v2g('charset', get_name(charset));
  }
  function withCharsetIfNeeded(_this__u8e3s4, charset) {
    var tmp;
    var tmp_0;
    var tmp$ret$1;
    {
      var tmp0_lowercase = _this__u8e3s4.t2g_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    if (tmp$ret$1 === 'application') {
      var tmp$ret$3;
      {
        var tmp1_lowercase = _this__u8e3s4.u2g_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_lowercase;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
      }
      tmp_0 = tmp$ret$3 === 'json';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.v2g('charset', get_name(charset));
    }
    return tmp;
  }
  function get_HeaderFieldValueSeparators() {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.z2g = function (value, init) {
    var headerValue = last(parseHeaderValue(value));
    return init(headerValue.i2f_1, headerValue.j2f_1);
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    this.a2f_1 = content;
    this.b2f_1 = parameters;
  }
  HeaderValueWithParameters.prototype.a11 = function () {
    return this.a2f_1;
  };
  HeaderValueWithParameters.prototype.c2f = function () {
    return this.b2f_1;
  };
  HeaderValueWithParameters.prototype.y2g = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.b2f_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.b2f_1.h(index);
        if (equals_0(parameter.d2f_1, name, true)) {
          return parameter.e2f_1;
        }
      }
       while (!(index === last));
    return null;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this.b2f_1.m()) {
      tmp = this.a2f_1;
    } else {
      var tmp_0 = this.a2f_1.length;
      var tmp$ret$1;
      {
        var tmp0_sumOf = this.b2f_1;
        var sum = 0;
        var tmp0_iterator = tmp0_sumOf.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp_1 = sum;
          var tmp$ret$0;
          {
            tmp$ret$0 = (element.d2f_1.length + element.e2f_1.length | 0) + 3 | 0;
          }
          sum = tmp_1 + tmp$ret$0 | 0;
        }
        tmp$ret$1 = sum;
      }
      var size = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      {
        var tmp1_apply = StringBuilder_init_$Create$_0(size);
        {
        }
        {
          tmp1_apply.kf(this.a2f_1);
          var inductionVariable = 0;
          var last = get_lastIndex(this.b2f_1);
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var element_0 = this.b2f_1.h(index);
              tmp1_apply.kf('; ');
              tmp1_apply.kf(element_0.d2f_1);
              tmp1_apply.kf('=');
              {
                var tmp0_escapeIfNeededTo = element_0.e2f_1;
                if (needQuotes$accessor$vynnj(tmp0_escapeIfNeededTo)) {
                  tmp1_apply.kf(quote(tmp0_escapeIfNeededTo));
                } else {
                  tmp1_apply.kf(tmp0_escapeIfNeededTo);
                }
              }
            }
             while (!(index === last));
        }
        tmp$ret$2 = tmp1_apply;
      }
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  HeaderValueWithParameters.$metadata$ = classMeta('HeaderValueWithParameters');
  function escapeIfNeededTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (needQuotes$accessor$vynnj(_this__u8e3s4)) {
      out.kf(quote(_this__u8e3s4));
    } else {
      out.kf(_this__u8e3s4);
    }
  }
  function needQuotes(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    }
    if (tmp$ret$0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().l1(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
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
          quoteTo(_this__u8e3s4, tmp0_apply);
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function isQuoted(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) ? true : !equals(new Char(last_0(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34)))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var tmp = _Char___init__impl__6a9atx(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this__u8e3s4, tmp, tmp_0, false, 4, null);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (equals(new Char(charSequenceGet(_this__u8e3s4, slashIndex)), new Char(_Char___init__impl__6a9atx(92)))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    out.kf('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(92)))) {
          out.kf('\\\\');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) {
          out.kf('\\n');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) {
          out.kf('\\r');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
          out.kf('\\t');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(34)))) {
          out.kf('\\"');
        } else {
          out.r4(ch);
        }
      }
       while (inductionVariable < last);
    out.kf('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function init_properties_HeaderValueWithParameters_kt_2dfzmo() {
    if (properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
    } else {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.a2h_1 = EmptyHeaders_getInstance();
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Headers() {
  }
  Headers.$metadata$ = interfaceMeta('Headers', [StringValues]);
  function HeadersBuilder_init_$Init$(size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    HeadersBuilder.call($this, size);
    return $this;
  }
  function HeadersBuilder_init_$Create$(size, $mask0, $marker) {
    return HeadersBuilder_init_$Init$(size, $mask0, $marker, Object.create(HeadersBuilder.prototype));
  }
  function HeadersBuilder(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  HeadersBuilder.prototype.yn = function () {
    return new HeadersImpl(this.k2());
  };
  HeadersBuilder.prototype.g2b = function (name) {
    StringValuesBuilderImpl.prototype.g2b.call(this, name);
    HttpHeaders_getInstance().z2k(name);
  };
  HeadersBuilder.prototype.j2b = function (value) {
    StringValuesBuilderImpl.prototype.j2b.call(this, value);
    HttpHeaders_getInstance().a2l(value);
  };
  HeadersBuilder.$metadata$ = classMeta('HeadersBuilder', undefined, undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  EmptyHeaders.prototype.z2a = function () {
    return true;
  };
  EmptyHeaders.prototype.a2b = function (name) {
    return null;
  };
  EmptyHeaders.prototype.b2b = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.c2b = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.toString = function () {
    return 'Headers ' + this.c2b();
  };
  EmptyHeaders.$metadata$ = objectMeta('EmptyHeaders', [Headers]);
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  HeadersImpl.prototype.toString = function () {
    return 'Headers ' + this.c2b();
  };
  HeadersImpl.$metadata$ = classMeta('HeadersImpl', [Headers], undefined, undefined, undefined, StringValuesImpl.prototype);
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, Object.create(HeaderValueParam.prototype));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.d2f_1 = name;
    this.e2f_1 = value;
    this.f2f_1 = escapeValue;
  }
  HeaderValueParam.prototype.w18 = function () {
    return this.d2f_1;
  };
  HeaderValueParam.prototype.t = function () {
    return this.e2f_1;
  };
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.d2f_1, this.d2f_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.e2f_1, this.e2f_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    {
      var tmp0_lowercase = this.d2f_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    {
      var tmp1_lowercase = this.e2f_1;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_lowercase;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.h3 = function () {
    return this.d2f_1;
  };
  HeaderValueParam.prototype.i3 = function () {
    return this.e2f_1;
  };
  HeaderValueParam.prototype.toString = function () {
    return 'HeaderValueParam(name=' + this.d2f_1 + ', value=' + this.e2f_1 + ', escapeValue=' + this.f2f_1 + ')';
  };
  HeaderValueParam.$metadata$ = classMeta('HeaderValueParam');
  function HeaderValue(value, params) {
    this.i2f_1 = value;
    this.j2f_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      var tmp0_firstOrNull = this.j2f_1;
      var tmp0_iterator = tmp0_firstOrNull.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$0;
        {
          tmp$ret$0 = element.d2f_1 === 'q';
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2f_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        {
        }
        var tmp_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = rangeTo(0.0, 1.0).g1(tmp2_safe_receiver);
        }
        if (tmp$ret$2) {
          tmp_1 = tmp2_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp$ret$3 = tmp_1;
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.k2f_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.b2l = function () {
    return this.k2f_1;
  };
  HeaderValue.prototype.h3 = function () {
    return this.i2f_1;
  };
  HeaderValue.prototype.toString = function () {
    return 'HeaderValue(value=' + this.i2f_1 + ', params=' + this.j2f_1 + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this.i2f_1);
    result = imul(result, 31) + hashCode(this.j2f_1) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.i2f_1 === tmp0_other_with_cast.i2f_1))
      return false;
    if (!equals(this.j2f_1, tmp0_other_with_cast.j2f_1))
      return false;
    return true;
  };
  HeaderValue.$metadata$ = classMeta('HeaderValue');
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda());
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda());
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        var tmp_0 = items.t();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.b(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.t();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.b(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.t5() ? _this__u8e3s4.t() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = _this__u8e3s4;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
      }
      var tmp0_trim = tmp$ret$1;
      tmp$ret$2 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    }
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.h3();
        var paramValue = tmp1_container.i3();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (equals(new Char(charSequenceGet(value, start)), new Char(_Char___init__impl__6a9atx(34)))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(34))) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(92))) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.r4(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.r4(currentChar);
      var tmp0 = position;
      position = tmp0 + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    {
      var tmp0_plus = builder.toString();
      tmp$ret$0 = '"' + tmp0_plus;
    }
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(32))) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(59)));
  }
  function parseAndSortHeader(header) {
    var tmp$ret$1;
    {
      var tmp0_sortedByDescending = parseHeaderValue(header);
      var tmp$ret$0;
      {
        var tmp = parseAndSortHeader$lambda();
        tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      }
      tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    }
    return tmp$ret$1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.c2l_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.c2l_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(name) === 0;
    }
    if (tmp$ret$0) {
      return Unit_getInstance();
    }
    $parameters.t().b(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$_0();
      }
      return tmp$ret$0;
    };
  }
  function parseHeaderValueItem$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$_0();
      }
      return tmp$ret$0;
    };
  }
  function parseAndSortHeader$lambda() {
    return function (a, b) {
      var tmp$ret$2;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = b.k2f_1;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = a.k2f_1;
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      }
      return tmp$ret$2;
    };
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.d2h_1 = 'Accept';
    this.e2h_1 = 'Accept-Charset';
    this.f2h_1 = 'Accept-Encoding';
    this.g2h_1 = 'Accept-Language';
    this.h2h_1 = 'Accept-Ranges';
    this.i2h_1 = 'Age';
    this.j2h_1 = 'Allow';
    this.k2h_1 = 'ALPN';
    this.l2h_1 = 'Authentication-Info';
    this.m2h_1 = 'Authorization';
    this.n2h_1 = 'Cache-Control';
    this.o2h_1 = 'Connection';
    this.p2h_1 = 'Content-Disposition';
    this.q2h_1 = 'Content-Encoding';
    this.r2h_1 = 'Content-Language';
    this.s2h_1 = 'Content-Length';
    this.t2h_1 = 'Content-Location';
    this.u2h_1 = 'Content-Range';
    this.v2h_1 = 'Content-Type';
    this.w2h_1 = 'Cookie';
    this.x2h_1 = 'DASL';
    this.y2h_1 = 'Date';
    this.z2h_1 = 'DAV';
    this.a2i_1 = 'Depth';
    this.b2i_1 = 'Destination';
    this.c2i_1 = 'ETag';
    this.d2i_1 = 'Expect';
    this.e2i_1 = 'Expires';
    this.f2i_1 = 'From';
    this.g2i_1 = 'Forwarded';
    this.h2i_1 = 'Host';
    this.i2i_1 = 'HTTP2-Settings';
    this.j2i_1 = 'If';
    this.k2i_1 = 'If-Match';
    this.l2i_1 = 'If-Modified-Since';
    this.m2i_1 = 'If-None-Match';
    this.n2i_1 = 'If-Range';
    this.o2i_1 = 'If-Schedule-Tag-Match';
    this.p2i_1 = 'If-Unmodified-Since';
    this.q2i_1 = 'Last-Modified';
    this.r2i_1 = 'Location';
    this.s2i_1 = 'Lock-Token';
    this.t2i_1 = 'Link';
    this.u2i_1 = 'Max-Forwards';
    this.v2i_1 = 'MIME-Version';
    this.w2i_1 = 'Ordering-Type';
    this.x2i_1 = 'Origin';
    this.y2i_1 = 'Overwrite';
    this.z2i_1 = 'Position';
    this.a2j_1 = 'Pragma';
    this.b2j_1 = 'Prefer';
    this.c2j_1 = 'Preference-Applied';
    this.d2j_1 = 'Proxy-Authenticate';
    this.e2j_1 = 'Proxy-Authentication-Info';
    this.f2j_1 = 'Proxy-Authorization';
    this.g2j_1 = 'Public-Key-Pins';
    this.h2j_1 = 'Public-Key-Pins-Report-Only';
    this.i2j_1 = 'Range';
    this.j2j_1 = 'Referer';
    this.k2j_1 = 'Retry-After';
    this.l2j_1 = 'Schedule-Reply';
    this.m2j_1 = 'Schedule-Tag';
    this.n2j_1 = 'Sec-WebSocket-Accept';
    this.o2j_1 = 'Sec-WebSocket-Extensions';
    this.p2j_1 = 'Sec-WebSocket-Key';
    this.q2j_1 = 'Sec-WebSocket-Protocol';
    this.r2j_1 = 'Sec-WebSocket-Version';
    this.s2j_1 = 'Server';
    this.t2j_1 = 'Set-Cookie';
    this.u2j_1 = 'SLUG';
    this.v2j_1 = 'Strict-Transport-Security';
    this.w2j_1 = 'TE';
    this.x2j_1 = 'Timeout';
    this.y2j_1 = 'Trailer';
    this.z2j_1 = 'Transfer-Encoding';
    this.a2k_1 = 'Upgrade';
    this.b2k_1 = 'User-Agent';
    this.c2k_1 = 'Vary';
    this.d2k_1 = 'Via';
    this.e2k_1 = 'Warning';
    this.f2k_1 = 'WWW-Authenticate';
    this.g2k_1 = 'Access-Control-Allow-Origin';
    this.h2k_1 = 'Access-Control-Allow-Methods';
    this.i2k_1 = 'Access-Control-Allow-Credentials';
    this.j2k_1 = 'Access-Control-Allow-Headers';
    this.k2k_1 = 'Access-Control-Request-Method';
    this.l2k_1 = 'Access-Control-Request-Headers';
    this.m2k_1 = 'Access-Control-Expose-Headers';
    this.n2k_1 = 'Access-Control-Max-Age';
    this.o2k_1 = 'X-Http-Method-Override';
    this.p2k_1 = 'X-Forwarded-Host';
    this.q2k_1 = 'X-Forwarded-Server';
    this.r2k_1 = 'X-Forwarded-Proto';
    this.s2k_1 = 'X-Forwarded-For';
    this.t2k_1 = 'X-Forwarded-Port';
    this.u2k_1 = 'X-Request-ID';
    this.v2k_1 = 'X-Correlation-ID';
    this.w2k_1 = 'X-Total-Count';
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [this.z2j_1, this.a2k_1];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.x2k_1 = tmp$ret$2;
    this.y2k_1 = asList(this.x2k_1);
  }
  HttpHeaders.prototype.d2l = function () {
    return this.y2k_1;
  };
  HttpHeaders.prototype.z2k = function (name) {
    {
      var index = 0;
      var indexedObject = name;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = tmp1;
          if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
            throw new IllegalHeaderNameException(name, tmp0__anonymous__q1qw7t);
          }
        }
      }
    }
  };
  HttpHeaders.prototype.a2l = function (value) {
    {
      var index = 0;
      var indexedObject = value;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = tmp1;
          if (equals(new Char(item), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(item), new Char(_Char___init__impl__6a9atx(9)))) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0) {
            throw new IllegalHeaderValueException(value, tmp0__anonymous__q1qw7t);
          }
        }
      }
    }
  };
  HttpHeaders.$metadata$ = objectMeta('HttpHeaders');
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains$default('"(),/:;<=>?@[\\]{}', ch, false, 2, null);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    {
      var tmp0__get_code__88qj9g = charSequenceGet(headerName, position);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.e2l_1 = headerName;
    this.f2l_1 = position;
    captureStack(this, IllegalHeaderNameException);
  }
  IllegalHeaderNameException.$metadata$ = classMeta('IllegalHeaderNameException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    {
      var tmp0__get_code__88qj9g = charSequenceGet(headerValue, position);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.g2l_1 = headerValue;
    this.h2l_1 = position;
    captureStack(this, IllegalHeaderValueException);
  }
  IllegalHeaderValueException.$metadata$ = classMeta('IllegalHeaderValueException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  UnsafeHeaderException.$metadata$ = classMeta('UnsafeHeaderException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function HttpMessage() {
  }
  HttpMessage.$metadata$ = interfaceMeta('HttpMessage');
  function HttpMessageBuilder() {
  }
  HttpMessageBuilder.$metadata$ = interfaceMeta('HttpMessageBuilder');
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i2l().d11(HttpHeaders_getInstance().v2h_1);
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
          tmp$ret$0 = Companion_getInstance_0().h2f(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i2l().d11(HttpHeaders_getInstance().s2h_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4, type) {
    return _this__u8e3s4.i2l().i2b(HttpHeaders_getInstance().v2h_1, type.toString());
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i2l().d11(HttpHeaders_getInstance().v2h_1);
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
          tmp$ret$0 = Companion_getInstance_0().h2f(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.j2l_1 = new HttpMethod('GET');
    this.k2l_1 = new HttpMethod('POST');
    this.l2l_1 = new HttpMethod('PUT');
    this.m2l_1 = new HttpMethod('PATCH');
    this.n2l_1 = new HttpMethod('DELETE');
    this.o2l_1 = new HttpMethod('HEAD');
    this.p2l_1 = new HttpMethod('OPTIONS');
    this.q2l_1 = listOf([this.j2l_1, this.k2l_1, this.l2l_1, this.m2l_1, this.n2l_1, this.o2l_1, this.p2l_1]);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.r2l_1 = value;
  }
  HttpMethod.prototype.toString = function () {
    return 'HttpMethod(value=' + this.r2l_1 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this.r2l_1);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.r2l_1 === tmp0_other_with_cast.r2l_1))
      return false;
    return true;
  };
  HttpMethod.$metadata$ = classMeta('HttpMethod');
  function Companion_3() {
    Companion_instance_3 = this;
    this.s2l_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.t2l_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.u2l_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.v2l_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.w2l_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.x2l_1 = name;
    this.y2l_1 = major;
    this.z2l_1 = minor;
  }
  HttpProtocolVersion.prototype.toString = function () {
    return this.x2l_1 + '/' + this.y2l_1 + '.' + this.z2l_1;
  };
  HttpProtocolVersion.prototype.hashCode = function () {
    var result = getStringHashCode(this.x2l_1);
    result = imul(result, 31) + this.y2l_1 | 0;
    result = imul(result, 31) + this.z2l_1 | 0;
    return result;
  };
  HttpProtocolVersion.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.x2l_1 === tmp0_other_with_cast.x2l_1))
      return false;
    if (!(this.y2l_1 === tmp0_other_with_cast.y2l_1))
      return false;
    if (!(this.z2l_1 === tmp0_other_with_cast.z2l_1))
      return false;
    return true;
  };
  HttpProtocolVersion.$metadata$ = classMeta('HttpProtocolVersion');
  function Companion_4() {
    Companion_instance_4 = this;
    this.a2m_1 = new HttpStatusCode(100, 'Continue');
    this.b2m_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.c2m_1 = new HttpStatusCode(102, 'Processing');
    this.d2m_1 = new HttpStatusCode(200, 'OK');
    this.e2m_1 = new HttpStatusCode(201, 'Created');
    this.f2m_1 = new HttpStatusCode(202, 'Accepted');
    this.g2m_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.h2m_1 = new HttpStatusCode(204, 'No Content');
    this.i2m_1 = new HttpStatusCode(205, 'Reset Content');
    this.j2m_1 = new HttpStatusCode(206, 'Partial Content');
    this.k2m_1 = new HttpStatusCode(207, 'Multi-Status');
    this.l2m_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.m2m_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.n2m_1 = new HttpStatusCode(302, 'Found');
    this.o2m_1 = new HttpStatusCode(303, 'See Other');
    this.p2m_1 = new HttpStatusCode(304, 'Not Modified');
    this.q2m_1 = new HttpStatusCode(305, 'Use Proxy');
    this.r2m_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.s2m_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.t2m_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.u2m_1 = new HttpStatusCode(400, 'Bad Request');
    this.v2m_1 = new HttpStatusCode(401, 'Unauthorized');
    this.w2m_1 = new HttpStatusCode(402, 'Payment Required');
    this.x2m_1 = new HttpStatusCode(403, 'Forbidden');
    this.y2m_1 = new HttpStatusCode(404, 'Not Found');
    this.z2m_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.a2n_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.b2n_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.c2n_1 = new HttpStatusCode(408, 'Request Timeout');
    this.d2n_1 = new HttpStatusCode(409, 'Conflict');
    this.e2n_1 = new HttpStatusCode(410, 'Gone');
    this.f2n_1 = new HttpStatusCode(411, 'Length Required');
    this.g2n_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.h2n_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.i2n_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.j2n_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.k2n_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.l2n_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.m2n_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.n2n_1 = new HttpStatusCode(423, 'Locked');
    this.o2n_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.p2n_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.q2n_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.r2n_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.s2n_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.t2n_1 = new HttpStatusCode(501, 'Not Implemented');
    this.u2n_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.v2n_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.w2n_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.x2n_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.y2n_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.z2n_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.a2o_1 = allStatusCodes();
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_associateBy = this.a2o_1;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
      var tmp$ret$1;
      {
        var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator = tmp0_associateBy.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = element.c2o_1;
          }
          tmp0_associateByTo.a(tmp$ret$0, element);
        }
        tmp$ret$1 = tmp0_associateByTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.b2o_1 = tmp$ret$2;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.c2o_1 = value;
    this.d2o_1 = description;
  }
  HttpStatusCode.prototype.t = function () {
    return this.c2o_1;
  };
  HttpStatusCode.prototype.toString = function () {
    return '' + this.c2o_1 + ' ' + this.d2o_1;
  };
  HttpStatusCode.prototype.equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.c2o_1 === this.c2o_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  HttpStatusCode.prototype.hashCode = function () {
    return this.c2o_1;
  };
  HttpStatusCode.$metadata$ = classMeta('HttpStatusCode');
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().a2m_1, Companion_getInstance_5().b2m_1, Companion_getInstance_5().c2m_1, Companion_getInstance_5().d2m_1, Companion_getInstance_5().e2m_1, Companion_getInstance_5().f2m_1, Companion_getInstance_5().g2m_1, Companion_getInstance_5().h2m_1, Companion_getInstance_5().i2m_1, Companion_getInstance_5().j2m_1, Companion_getInstance_5().k2m_1, Companion_getInstance_5().l2m_1, Companion_getInstance_5().m2m_1, Companion_getInstance_5().n2m_1, Companion_getInstance_5().o2m_1, Companion_getInstance_5().p2m_1, Companion_getInstance_5().q2m_1, Companion_getInstance_5().r2m_1, Companion_getInstance_5().s2m_1, Companion_getInstance_5().t2m_1, Companion_getInstance_5().u2m_1, Companion_getInstance_5().v2m_1, Companion_getInstance_5().w2m_1, Companion_getInstance_5().x2m_1, Companion_getInstance_5().y2m_1, Companion_getInstance_5().z2m_1, Companion_getInstance_5().a2n_1, Companion_getInstance_5().b2n_1, Companion_getInstance_5().c2n_1, Companion_getInstance_5().d2n_1, Companion_getInstance_5().e2n_1, Companion_getInstance_5().f2n_1, Companion_getInstance_5().g2n_1, Companion_getInstance_5().h2n_1, Companion_getInstance_5().i2n_1, Companion_getInstance_5().j2n_1, Companion_getInstance_5().k2n_1, Companion_getInstance_5().l2n_1, Companion_getInstance_5().m2n_1, Companion_getInstance_5().n2n_1, Companion_getInstance_5().o2n_1, Companion_getInstance_5().p2n_1, Companion_getInstance_5().q2n_1, Companion_getInstance_5().r2n_1, Companion_getInstance_5().s2n_1, Companion_getInstance_5().t2n_1, Companion_getInstance_5().u2n_1, Companion_getInstance_5().v2n_1, Companion_getInstance_5().w2n_1, Companion_getInstance_5().x2n_1, Companion_getInstance_5().y2n_1, Companion_getInstance_5().z2n_1]);
  }
  function ParametersBuilder() {
  }
  ParametersBuilder.$metadata$ = interfaceMeta('ParametersBuilder', [StringValuesBuilder]);
  function Companion_5() {
    Companion_instance_5 = this;
    this.e2o_1 = EmptyParameters_getInstance();
  }
  Companion_5.prototype.f2o = function (builder) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      builder(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.yn();
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  Parameters.$metadata$ = interfaceMeta('Parameters', [StringValues]);
  function ParametersBuilder_0(size) {
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilder$default(size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    return ParametersBuilder_0(size);
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  EmptyParameters.prototype.z2a = function () {
    return true;
  };
  EmptyParameters.prototype.a2b = function (name) {
    return null;
  };
  EmptyParameters.prototype.b2b = function () {
    return emptySet();
  };
  EmptyParameters.prototype.c2b = function () {
    return emptySet();
  };
  EmptyParameters.prototype.m = function () {
    return true;
  };
  EmptyParameters.prototype.toString = function () {
    return 'Parameters ' + this.c2b();
  };
  EmptyParameters.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.m();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptyParameters.$metadata$ = objectMeta('EmptyParameters', [Parameters]);
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilderImpl(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  ParametersBuilderImpl.prototype.yn = function () {
    return new ParametersImpl(this.k2());
  };
  ParametersBuilderImpl.$metadata$ = classMeta('ParametersBuilderImpl', [ParametersBuilder], undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function ParametersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  ParametersImpl.prototype.toString = function () {
    return 'Parameters ' + this.c2b();
  };
  ParametersImpl.$metadata$ = classMeta('ParametersImpl', [Parameters], undefined, undefined, undefined, StringValuesImpl.prototype);
  function parseQueryString(query, startIndex, limit, decode) {
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().e2o_1;
    } else {
      var tmp$ret$1;
      {
        var tmp0_build = Companion_getInstance_6();
        var tmp$ret$0;
        {
          var tmp0_apply = ParametersBuilder$default(0, 1, null);
          {
          }
          {
            parse(tmp0_apply, query, startIndex, limit, decode);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.yn();
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function parseQueryString$default(query, startIndex, limit, decode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      limit = 1000;
    if (!(($mask0 & 8) === 0))
      decode = true;
    return parseQueryString(query, startIndex, limit, decode);
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(38)))) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          var tmp2 = count;
          count = tmp2 + 1 | 0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(61)))) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent$default(query, spaceNameIndex, spaceEndIndex, false, null, 12, null);
        } else {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = query;
            }
            tmp$ret$1 = tmp$ret$0.substring(spaceNameIndex, spaceEndIndex);
          }
          tmp = tmp$ret$1;
        }
        var name = tmp;
        _this__u8e3s4.h2b(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent$default(query, spaceNameIndex_0, spaceEqualIndex, false, null, 12, null);
      } else {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = query;
          }
          tmp$ret$3 = tmp$ret$2.substring(spaceNameIndex_0, spaceEqualIndex);
        }
        tmp_0 = tmp$ret$3;
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent$default(query, spaceValueIndex, spaceEndIndex_0, true, null, 8, null);
      } else {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = query;
          }
          tmp$ret$5 = tmp$ret$4.substring(spaceValueIndex, spaceEndIndex_0);
        }
        tmp_1 = tmp$ret$5;
      }
      var value = tmp_1;
      _this__u8e3s4.k2b(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 - 1 | 0;
    }
    return spaceIndex;
  }
  function URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      protocol = Companion_getInstance_8().i2o_1;
    if (!(($mask0 & 2) === 0))
      host = '';
    if (!(($mask0 & 4) === 0))
      port = 0;
    if (!(($mask0 & 8) === 0))
      user = null;
    if (!(($mask0 & 16) === 0))
      password = null;
    if (!(($mask0 & 32) === 0))
      pathSegments = emptyList();
    if (!(($mask0 & 64) === 0))
      parameters = Companion_getInstance_6().e2o_1;
    if (!(($mask0 & 128) === 0))
      fragment = '';
    if (!(($mask0 & 256) === 0))
      trailingQuery = false;
    URLBuilder.call($this, protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery);
    return $this;
  }
  function URLBuilder_init_$Create$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker) {
    return URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, Object.create(URLBuilder.prototype));
  }
  function applyOrigin($this) {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = $this.p2o_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    }
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.o2o_1.y2o_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.p2o_1 = Companion_getInstance_7().q2p_1.b2p_1;
    if ($this.o2o_1.equals(Companion_getInstance_8().i2o_1))
      $this.o2o_1 = Companion_getInstance_7().q2p_1.a2p_1;
    if ($this.q2o_1 === 0)
      $this.q2o_1 = Companion_getInstance_7().q2p_1.c2p_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.q2p_1 = Url(get_origin(this));
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    this.o2o_1 = protocol;
    this.p2o_1 = host;
    this.q2o_1 = port;
    this.r2o_1 = trailingQuery;
    var tmp = this;
    var tmp0_safe_receiver = user;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.s2o_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_0 = password;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      tmp_2 = encodeURLParameter$default(tmp0_safe_receiver_0, false, 1, null);
    }
    tmp_1.t2o_1 = tmp_2;
    var tmp_3 = this;
    tmp_3.u2o_1 = encodeURLQueryComponent$default(fragment, false, false, null, 7, null);
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
        var tmp0_iterator = pathSegments.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = encodeURLPathPart(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp_4.v2o_1 = tmp$ret$2;
    this.w2o_1 = encodeParameters(parameters);
    this.x2o_1 = new UrlDecodedParametersBuilder(this.w2o_1);
  }
  URLBuilder.prototype.r2p = function () {
    return this.o2o_1;
  };
  URLBuilder.prototype.s2p = function () {
    return this.p2o_1;
  };
  URLBuilder.prototype.t2p = function () {
    return this.q2o_1;
  };
  URLBuilder.prototype.u2p = function () {
    return this.s2o_1;
  };
  URLBuilder.prototype.v2p = function (value) {
    var tmp = this;
    var tmp0_safe_receiver = value;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.s2o_1 = tmp_0;
  };
  URLBuilder.prototype.w2p = function () {
    var tmp0_safe_receiver = this.s2o_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.x2p = function () {
    return this.t2o_1;
  };
  URLBuilder.prototype.y2p = function () {
    var tmp0_safe_receiver = this.t2o_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.z2p = function () {
    var tmp = this.u2o_1;
    return decodeURLQueryComponent$default(tmp, 0, 0, false, null, 15, null);
  };
  URLBuilder.prototype.a2q = function () {
    var tmp$ret$2;
    {
      var tmp0_map = this.v2o_1;
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = decodeURLPart$default(item, 0, 0, null, 7, null);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  URLBuilder.prototype.b2q = function (value) {
    this.w2o_1 = value;
    this.x2o_1 = new UrlDecodedParametersBuilder(value);
  };
  URLBuilder.prototype.c2q = function () {
    return this.w2o_1;
  };
  URLBuilder.prototype.d2q = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  URLBuilder.prototype.yn = function () {
    applyOrigin(this);
    return new Url_0(this.o2o_1, this.p2o_1, this.q2o_1, this.a2q(), this.x2o_1.yn(), this.z2p(), this.w2p(), this.y2p(), this.r2o_1, this.d2q());
  };
  URLBuilder.$metadata$ = classMeta('URLBuilder');
  function get_authority(_this__u8e3s4) {
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
          tmp0_apply.kf(get_encodedUserAndPassword(_this__u8e3s4));
          tmp0_apply.kf(_this__u8e3s4.p2o_1);
          if (!(_this__u8e3s4.q2o_1 === 0) ? !(_this__u8e3s4.q2o_1 === _this__u8e3s4.o2o_1.z2o_1) : false) {
            tmp0_apply.kf(':');
            tmp0_apply.kf(_this__u8e3s4.q2o_1.toString());
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.c(_this__u8e3s4.o2o_1.y2o_1);
    var tmp0_subject = _this__u8e3s4.o2o_1.y2o_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.p2o_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.p2o_1);
      return out;
    }
    out.c('://');
    out.c(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.w2o_1, _this__u8e3s4.r2o_1);
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = _this__u8e3s4.u2o_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    }
    if (tmp$ret$0) {
      out.r4(_Char___init__impl__6a9atx(35));
      out.c(_this__u8e3s4.u2o_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
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
          appendUserAndPassword(tmp0_apply, _this__u8e3s4.s2o_1, _this__u8e3s4.t2o_1);
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.c('://');
    _this__u8e3s4.c(host);
    var tmp = _Char___init__impl__6a9atx(47);
    if (!startsWith$default(encodedPath, tmp, false, 2, null)) {
      _this__u8e3s4.r4(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    var tmp = _this__u8e3s4;
    var tmp_0;
    if (isBlank(value)) {
      tmp_0 = emptyList();
    } else if (value === '/') {
      tmp_0 = get_ROOT_PATH();
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = toMutableList(split$default(value, tmp_1, false, 0, 6, null));
    }
    tmp.v2o_1 = tmp_0;
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.v2o_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.c(':');
    _this__u8e3s4.c(encodedUser);
    _this__u8e3s4.c(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.m())
      return '';
    if (_this__u8e3s4.d() === 1) {
      var tmp$ret$0;
      {
        var tmp0_isEmpty = first_0(_this__u8e3s4);
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString$default(_this__u8e3s4, '/', null, null, 0, null, null, 62, null);
  }
  function get_ROOT_PATH() {
    init_properties_URLParser_kt_jyldy();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw new URLParserException(urlString, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    $l$block: {
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            var tmp0__anonymous__q1qw7t = charSequenceGet(urlString, index);
            tmp$ret$0 = !isWhitespace(tmp0__anonymous__q1qw7t);
          }
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var tmp$ret$2;
          {
            var tmp1__anonymous__uwfjfc = charSequenceGet(urlString, index_0);
            tmp$ret$2 = !isWhitespace(tmp1__anonymous__uwfjfc);
          }
          if (tmp$ret$2) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var tmp$ret$5;
      {
        var tmp2_substring = startIndex;
        var tmp3_substring = startIndex + schemeLength | 0;
        var tmp$ret$4;
        {
          tmp$ret$4 = urlString;
        }
        tmp$ret$5 = tmp$ret$4.substring(tmp2_substring, tmp3_substring);
      }
      var scheme = tmp$ret$5;
      _this__u8e3s4.o2o_1 = Companion_getInstance_8().e2q(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.o2o_1.y2o_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.o2o_1.y2o_1 === 'mailto') {
      {
        var tmp4_require = slashCount === 0;
        {
        }
        {
          {
          }
          if (!tmp4_require) {
            var tmp$ret$6;
            {
              tmp$ret$6 = 'Failed requirement.';
            }
            var message = tmp$ret$6;
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
        }
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        var tmp$ret$8;
        {
          var tmp = toCharArray('@/\\?#');
          var tmp_0 = startIndex;
          var tmp5_takeIf = indexOfAny$default(urlString, tmp, tmp_0, false, 4, null);
          {
          }
          var tmp_1;
          var tmp$ret$7;
          {
            tmp$ret$7 = tmp5_takeIf > 0;
          }
          if (tmp$ret$7) {
            tmp_1 = tmp5_takeIf;
          } else {
            tmp_1 = null;
          }
          tmp$ret$8 = tmp_1;
        }
        var tmp0_elvis_lhs = tmp$ret$8;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? equals(new Char(charSequenceGet(urlString, delimiter)), new Char(_Char___init__impl__6a9atx(64))) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_2 = _this__u8e3s4;
            var tmp$ret$10;
            {
              var tmp6_substring = startIndex;
              var tmp$ret$9;
              {
                tmp$ret$9 = urlString;
              }
              tmp$ret$10 = tmp$ret$9.substring(tmp6_substring, passwordIndex);
            }
            tmp_2.s2o_1 = tmp$ret$10;
            var tmp_3 = _this__u8e3s4;
            var tmp$ret$12;
            {
              var tmp7_substring = passwordIndex + 1 | 0;
              var tmp$ret$11;
              {
                tmp$ret$11 = urlString;
              }
              tmp$ret$12 = tmp$ret$11.substring(tmp7_substring, delimiter);
            }
            tmp_3.t2o_1 = tmp$ret$12;
          } else {
            var tmp_4 = _this__u8e3s4;
            var tmp$ret$14;
            {
              var tmp8_substring = startIndex;
              var tmp$ret$13;
              {
                tmp$ret$13 = urlString;
              }
              tmp$ret$14 = tmp$ret$13.substring(tmp8_substring, delimiter);
            }
            tmp_4.s2o_1 = tmp$ret$14;
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.v2o_1 = equals(new Char(charSequenceGet(urlString, endIndex - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_5 = _this__u8e3s4;
    var tmp_6;
    if (slashCount === 0) {
      tmp_6 = dropLast(_this__u8e3s4.v2o_1, 1);
    } else {
      tmp_6 = emptyList();
    }
    tmp_5.v2o_1 = tmp_6;
    var tmp$ret$16;
    {
      var tmp_7 = toCharArray('?#');
      var tmp_8 = startIndex;
      var tmp9_takeIf = indexOfAny$default(urlString, tmp_7, tmp_8, false, 4, null);
      {
      }
      var tmp_9;
      var tmp$ret$15;
      {
        tmp$ret$15 = tmp9_takeIf > 0;
      }
      if (tmp$ret$15) {
        tmp_9 = tmp9_takeIf;
      } else {
        tmp_9 = null;
      }
      tmp$ret$16 = tmp_9;
    }
    var tmp1_elvis_lhs = tmp$ret$16;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp$ret$18;
      {
        var tmp10_substring = startIndex;
        var tmp$ret$17;
        {
          tmp$ret$17 = urlString;
        }
        tmp$ret$18 = tmp$ret$17.substring(tmp10_substring, pathEnd);
      }
      var rawPath = tmp$ret$18;
      var tmp_10;
      var tmp_11;
      if (_this__u8e3s4.v2o_1.d() === 1) {
        var tmp$ret$19;
        {
          var tmp11_isEmpty = first_0(_this__u8e3s4.v2o_1);
          tmp$ret$19 = charSequenceLength(tmp11_isEmpty) === 0;
        }
        tmp_11 = tmp$ret$19;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = emptyList();
      } else {
        tmp_10 = _this__u8e3s4.v2o_1;
      }
      var basePath = tmp_10;
      var tmp_12;
      if (rawPath === '/') {
        tmp_12 = get_ROOT_PATH();
      } else {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(47)]);
        tmp_12 = split$default(rawPath, tmp_13, false, 0, 6, null);
      }
      var rawChunks = tmp_12;
      var tmp2_subject = slashCount;
      var relativePath = plus_0(tmp2_subject === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.v2o_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(63))) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  URLParserException.$metadata$ = classMeta('URLParserException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function findScheme(urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(58)))) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((equals(new Char(char), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(63)))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(35))))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(46))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(43))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(45))) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    init_properties_URLParser_kt_jyldy();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex) {
      if (!equals(new Char(charSequenceGet(urlString, startIndex + result | 0)), new Char(char)))
        break $l$loop;
      var tmp0 = result;
      result = tmp0 + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    init_properties_URLParser_kt_jyldy();
    var tmp0_subject = slashCount;
    switch (tmp0_subject) {
      case 2:
        var tmp = _Char___init__impl__6a9atx(47);
        var nextSlash = indexOf$default(urlString, tmp, startIndex, false, 4, null);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp_0 = _this__u8e3s4;
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = urlString;
            }
            tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
          }
          tmp_0.p2o_1 = tmp$ret$1;
          return Unit_getInstance();
        }

        var tmp_1 = _this__u8e3s4;
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = urlString;
          }
          tmp$ret$3 = tmp$ret$2.substring(startIndex, nextSlash);
        }

        tmp_1.p2o_1 = tmp$ret$3;
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = urlString;
          }
          tmp$ret$5 = tmp$ret$4.substring(nextSlash, endIndex);
        }

        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        break;
      case 3:
        _this__u8e3s4.p2o_1 = '';
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            tmp$ret$6 = urlString;
          }
          tmp$ret$7 = tmp$ret$6.substring(startIndex, endIndex);
        }

        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var delimiter = indexOf$default_0(urlString, '@', startIndex, false, 4, null);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = urlString;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, delimiter);
    }
    var tmp = tmp$ret$1;
    _this__u8e3s4.v2p(decodeURLPart$default(tmp, 0, 0, null, 7, null));
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    {
      var tmp0_substring = delimiter + 1 | 0;
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(tmp0_substring, endIndex);
    }
    tmp_0.p2o_1 = tmp$ret$3;
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(91))))
          skip = true;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93))))
          skip = false;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(58))))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    {
      var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
      {
      }
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeIf > 0;
      }
      if (tmp$ret$0) {
        tmp = tmp0_takeIf;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(startIndex, colonIndex);
    }
    tmp_0.p2o_1 = tmp$ret$3;
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      {
        var tmp1_substring = colonIndex + 1 | 0;
        var tmp$ret$4;
        {
          tmp$ret$4 = urlString;
        }
        tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, endIndex);
      }
      tmp_1.q2o_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.q2o_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.r2o_1 = true;
      return endIndex;
    }
    var tmp$ret$1;
    {
      var tmp = _Char___init__impl__6a9atx(35);
      var tmp_0 = startIndex + 1 | 0;
      var tmp0_takeIf = indexOf$default(urlString, tmp, tmp_0, false, 4, null);
      {
      }
      var tmp_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeIf > 0;
      }
      if (tmp$ret$0) {
        tmp_1 = tmp0_takeIf;
      } else {
        tmp_1 = null;
      }
      tmp$ret$1 = tmp_1;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    {
      var tmp1_substring = startIndex + 1 | 0;
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, fragmentStart);
    }
    var tmp_2 = tmp$ret$3;
    var rawParameters = parseQueryString$default(tmp_2, 0, 0, false, 6, null);
    rawParameters.d2b(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(35))) : false) {
      var tmp = _this__u8e3s4;
      var tmp$ret$1;
      {
        var tmp0_substring = startIndex + 1 | 0;
        var tmp$ret$0;
        {
          tmp$ret$0 = urlString;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, endIndex);
      }
      tmp.u2o_1 = tmp$ret$1;
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.w2o_1.h2b(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function init_properties_URLParser_kt_jyldy() {
    if (properties_initialized_URLParser_kt_hd1g6a) {
    } else {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.y2o_1 === 'ws' ? true : _this__u8e3s4.y2o_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.i2o_1 = new URLProtocol('http', 80);
    this.j2o_1 = new URLProtocol('https', 443);
    this.k2o_1 = new URLProtocol('ws', 80);
    this.l2o_1 = new URLProtocol('wss', 443);
    this.m2o_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_associateBy = listOf([this.i2o_1, this.j2o_1, this.k2o_1, this.l2o_1, this.m2o_1]);
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
      var tmp$ret$1;
      {
        var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator = tmp0_associateBy.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = element.y2o_1;
          }
          tmp0_associateByTo.a(tmp$ret$0, element);
        }
        tmp$ret$1 = tmp0_associateByTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.n2o_1 = tmp$ret$2;
  }
  Companion_7.prototype.f2q = function () {
    return this.n2o_1;
  };
  Companion_7.prototype.e2q = function (name) {
    var tmp$ret$1;
    {
      var tmp0_let = toLowerCasePreservingASCIIRules(name);
      {
      }
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs = Companion_getInstance_8().n2o_1.i2(tmp0_let);
        tmp$ret$0 = tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.y2o_1 = name;
    this.z2o_1 = defaultPort;
    {
      var tmp$ret$1;
      $l$block: {
        var tmp0_all = this.y2o_1;
        var indexedObject = tmp0_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            tmp$ret$0 = isLowerCase(element);
          }
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      var tmp1_require = tmp$ret$1;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = 'All characters should be lower case';
        }
        var message = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  URLProtocol.prototype.w18 = function () {
    return this.y2o_1;
  };
  URLProtocol.prototype.g2q = function () {
    return this.z2o_1;
  };
  URLProtocol.prototype.toString = function () {
    return 'URLProtocol(name=' + this.y2o_1 + ', defaultPort=' + this.z2o_1 + ')';
  };
  URLProtocol.prototype.hashCode = function () {
    var result = getStringHashCode(this.y2o_1);
    result = imul(result, 31) + this.z2o_1 | 0;
    return result;
  };
  URLProtocol.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.y2o_1 === tmp0_other_with_cast.y2o_1))
      return false;
    if (!(this.z2o_1 === tmp0_other_with_cast.z2o_1))
      return false;
    return true;
  };
  URLProtocol.$metadata$ = classMeta('URLProtocol');
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.y2o_1 === 'https' ? true : _this__u8e3s4.y2o_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.o2o_1 = url.o2o_1;
    _this__u8e3s4.p2o_1 = url.p2o_1;
    _this__u8e3s4.q2o_1 = url.q2o_1;
    _this__u8e3s4.v2o_1 = url.v2o_1;
    _this__u8e3s4.s2o_1 = url.s2o_1;
    _this__u8e3s4.t2o_1 = url.t2o_1;
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAll(tmp0_apply, url.w2o_1);
      }
      tmp$ret$0 = tmp0_apply;
    }
    _this__u8e3s4.b2q(tmp$ret$0);
    _this__u8e3s4.u2o_1 = url.u2o_1;
    _this__u8e3s4.r2o_1 = url.r2o_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).yn();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = !isBlank(encodedPath);
    }
    if (tmp$ret$0) {
      tmp = !startsWith$default_0(encodedPath, '/', false, 2, null);
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.r4(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
    if (!encodedQueryParameters.m() ? true : trailingQuery) {
      _this__u8e3s4.c('?');
    }
    var tmp$ret$8;
    {
      var tmp0_flatMap = encodedQueryParameters.c2b();
      var tmp$ret$7;
      {
        var tmp0_flatMapTo = ArrayList_init_$Create$_0();
        var tmp0_iterator = tmp0_flatMap.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$6;
          {
            var tmp$ret$1;
            {
              tmp$ret$1 = element.s();
            }
            var key = tmp$ret$1;
            var tmp$ret$2;
            {
              tmp$ret$2 = element.t();
            }
            var value = tmp$ret$2;
            var tmp_0;
            if (value.m()) {
              tmp_0 = listOf_0(to(key, null));
            } else {
              var tmp$ret$5;
              {
                var tmp$ret$4;
                {
                  var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
                  var tmp0_iterator_0 = value.e();
                  while (tmp0_iterator_0.f()) {
                    var item = tmp0_iterator_0.g();
                    var tmp$ret$3;
                    {
                      tmp$ret$3 = to(key, item);
                    }
                    tmp0_mapTo.b(tmp$ret$3);
                  }
                  tmp$ret$4 = tmp0_mapTo;
                }
                tmp$ret$5 = tmp$ret$4;
              }
              tmp_0 = tmp$ret$5;
            }
            tmp$ret$6 = tmp_0;
          }
          var list = tmp$ret$6;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$7 = tmp0_flatMapTo;
      }
      tmp$ret$8 = tmp$ret$7;
    }
    var tmp_1 = tmp$ret$8;
    joinTo$default(tmp_1, _this__u8e3s4, '&', null, null, 0, null, appendUrlFullPath$lambda(), 60, null);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.kf(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.r4(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.kf(encodedPassword);
    }
    _this__u8e3s4.kf('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.b2p_1 + ':' + _this__u8e3s4.t2p();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null), urlString);
  }
  function appendUrlFullPath$lambda() {
    return function (it) {
      var key = it.f3_1;
      var tmp;
      if (it.g3_1 == null) {
        tmp = key;
      } else {
        var value = toString_0(it.g3_1);
        tmp = key + '=' + value;
      }
      return tmp;
    };
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.d2p_1.m()) {
        return '';
      }
      var tmp_0 = _Char___init__impl__6a9atx(47);
      var tmp_1 = this$0.a2p_1.y2o_1.length + 3 | 0;
      var pathStartIndex = indexOf$default(this$0.j2p_1, tmp_0, tmp_1, false, 4, null);
      var tmp_2;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      }
      var tmp_3 = tmp$ret$0;
      var pathEndIndex = indexOfAny$default(this$0.j2p_1, tmp_3, pathStartIndex, false, 4, null);
      var tmp_4;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        {
          var tmp0_substring = this$0.j2p_1;
          var tmp$ret$1;
          {
            tmp$ret$1 = tmp0_substring;
          }
          tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        }
        return tmp$ret$2;
      }
      var tmp$ret$4;
      {
        var tmp1_substring = this$0.j2p_1;
        var tmp$ret$3;
        {
          tmp$ret$3 = tmp1_substring;
        }
        tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      }
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(63);
      var queryStart = indexOf$default(this$0.j2p_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (queryStart === 0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.j2p_1, tmp_1, queryStart, false, 4, null);
      var tmp_2;
      if (queryEnd === -1) {
        var tmp$ret$1;
        {
          var tmp0_substring = this$0.j2p_1;
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_substring;
          }
          tmp$ret$1 = tmp$ret$0.substring(queryStart);
        }
        return tmp$ret$1;
      }
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.j2p_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(47);
      var tmp_0 = this$0.a2p_1.y2o_1.length + 3 | 0;
      var pathStart = indexOf$default(this$0.j2p_1, tmp, tmp_0, false, 4, null);
      var tmp_1;
      if (pathStart === -1) {
        return '';
      }
      var tmp_2 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.j2p_1, tmp_2, pathStart, false, 4, null);
      var tmp_3;
      if (queryEnd === -1) {
        var tmp$ret$1;
        {
          var tmp0_substring = this$0.j2p_1;
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_substring;
          }
          tmp$ret$1 = tmp$ret$0.substring(pathStart);
        }
        return tmp$ret$1;
      }
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.j2p_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.g2p_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      {
        var tmp0_isEmpty = this$0.g2p_1;
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.a2p_1.y2o_1.length + 3 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      }
      var tmp_1 = tmp$ret$1;
      var usernameEnd = indexOfAny$default(this$0.j2p_1, tmp_1, usernameStart, false, 4, null);
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.j2p_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.h2p_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      {
        var tmp0_isEmpty = this$0.h2p_1;
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(58);
      var tmp_2 = this$0.a2p_1.y2o_1.length + 3 | 0;
      var passwordStart = indexOf$default(this$0.j2p_1, tmp_1, tmp_2, false, 4, null) + 1 | 0;
      var tmp_3 = _Char___init__impl__6a9atx(64);
      var passwordEnd = indexOf$default(this$0.j2p_1, tmp_3, 0, false, 6, null);
      var tmp$ret$2;
      {
        var tmp1_substring = this$0.j2p_1;
        var tmp$ret$1;
        {
          tmp$ret$1 = tmp1_substring;
        }
        tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      }
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(35);
      var fragmentStart = indexOf$default(this$0.j2p_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      {
        var tmp0_substring = this$0.j2p_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_substring;
        }
        tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      }
      return tmp$ret$1;
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.a2p_1 = protocol;
    this.b2p_1 = host;
    this.c2p_1 = specifiedPort;
    this.d2p_1 = pathSegments;
    this.e2p_1 = parameters;
    this.f2p_1 = fragment;
    this.g2p_1 = user;
    this.h2p_1 = password;
    this.i2p_1 = trailingQuery;
    this.j2p_1 = urlString;
    {
      var tmp;
      var containsArg = this.c2p_1;
      if (0 <= containsArg ? containsArg <= 65535 : false) {
        tmp = true;
      } else {
        tmp = this.c2p_1 === get_DEFAULT_PORT();
      }
      var tmp0_require = tmp;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp_0 = this;
    tmp_0.k2p_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.l2p_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.m2p_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.n2p_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.o2p_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.p2p_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  Url_0.prototype.r2p = function () {
    return this.a2p_1;
  };
  Url_0.prototype.s2p = function () {
    return this.b2p_1;
  };
  Url_0.prototype.h2q = function () {
    return this.c2p_1;
  };
  Url_0.prototype.t2p = function () {
    var tmp$ret$1;
    {
      var tmp0_takeUnless = this.c2p_1;
      {
      }
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeUnless === get_DEFAULT_PORT();
      }
      if (!tmp$ret$0) {
        tmp = tmp0_takeUnless;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? this.a2p_1.z2o_1 : tmp0_elvis_lhs;
  };
  Url_0.prototype.u2p = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = encodedUser$factory();
      tmp$ret$0 = this.n2p_1.t();
    }
    return tmp$ret$0;
  };
  Url_0.prototype.x2p = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = encodedPassword$factory();
      tmp$ret$0 = this.o2p_1.t();
    }
    return tmp$ret$0;
  };
  Url_0.prototype.toString = function () {
    return this.j2p_1;
  };
  Url_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Url_0)
      other;
    else
      THROW_CCE();
    if (!(this.j2p_1 === other.j2p_1))
      return false;
    return true;
  };
  Url_0.prototype.hashCode = function () {
    return getStringHashCode(this.j2p_1);
  };
  Url_0.$metadata$ = classMeta('Url');
  function get_authority_0(_this__u8e3s4) {
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
          tmp0_apply.kf(get_encodedUserAndPassword_0(_this__u8e3s4));
          if (_this__u8e3s4.c2p_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.c2p_1 === _this__u8e3s4.a2p_1.z2o_1) {
            tmp0_apply.kf(_this__u8e3s4.b2p_1);
          } else {
            tmp0_apply.kf(get_hostWithPort(_this__u8e3s4));
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
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
          appendUserAndPassword(tmp0_apply, _this__u8e3s4.u2p(), _this__u8e3s4.x2p());
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.u2p();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.x2p();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.i2q_1 = encodedParametersBuilder;
    this.j2q_1 = this.i2q_1.z2a();
  }
  UrlDecodedParametersBuilder.prototype.yn = function () {
    return decodeParameters(this.i2q_1);
  };
  UrlDecodedParametersBuilder.prototype.z2a = function () {
    return this.j2q_1;
  };
  UrlDecodedParametersBuilder.prototype.a2b = function (name) {
    var tmp0_safe_receiver = this.i2q_1.a2b(encodeURLParameter$default(name, false, 1, null));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
          var tmp0_iterator = tmp0_safe_receiver.e();
          while (tmp0_iterator.f()) {
            var item = tmp0_iterator.g();
            var tmp$ret$0;
            {
              tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
            }
            tmp0_mapTo.b(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  UrlDecodedParametersBuilder.prototype.b2b = function () {
    var tmp$ret$2;
    {
      var tmp0_map = this.i2q_1.b2b();
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, false, null, 15, null);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return toSet(tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.m = function () {
    return this.i2q_1.m();
  };
  UrlDecodedParametersBuilder.prototype.c2b = function () {
    return decodeParameters(this.i2q_1).c2b();
  };
  UrlDecodedParametersBuilder.prototype.k2b = function (name, value) {
    return this.i2q_1.k2b(encodeURLParameter$default(name, false, 1, null), encodeURLParameterValue(value));
  };
  UrlDecodedParametersBuilder.prototype.h2b = function (name, values) {
    var tmp = encodeURLParameter$default(name, false, 1, null);
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
        var tmp0_iterator = values.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          var tmp$ret$0;
          {
            tmp$ret$0 = encodeURLParameterValue(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return this.i2q_1.h2b(tmp, tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.r9 = function () {
    return this.i2q_1.r9();
  };
  UrlDecodedParametersBuilder.$metadata$ = classMeta('UrlDecodedParametersBuilder', [ParametersBuilder]);
  function encodeParameters(parameters) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAllEncoded(tmp0_apply, parameters);
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function decodeParameters(parameters) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAllDecoded(tmp0_apply, parameters);
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.yn();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    {
      var tmp0_forEach = parameters.b2b();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp0_elvis_lhs = parameters.a2b(element);
          var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
          var tmp = encodeURLParameter$default(element, false, 1, null);
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
              var tmp0_iterator_0 = values.e();
              while (tmp0_iterator_0.f()) {
                var item = tmp0_iterator_0.g();
                var tmp$ret$0;
                {
                  tmp$ret$0 = encodeURLParameterValue(item);
                }
                tmp0_mapTo.b(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          _this__u8e3s4.h2b(tmp, tmp$ret$2);
        }
      }
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    {
      var tmp0_forEach = parameters.b2b();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        {
          var tmp0_elvis_lhs = parameters.a2b(element);
          var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
          var tmp = decodeURLQueryComponent$default(element, 0, 0, false, null, 15, null);
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
              var tmp0_iterator_0 = values.e();
              while (tmp0_iterator_0.f()) {
                var item = tmp0_iterator_0.g();
                var tmp$ret$0;
                {
                  tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
                }
                tmp0_mapTo.b(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          _this__u8e3s4.h2b(tmp, tmp$ret$2);
        }
      }
    }
  }
  function ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      contentType = null;
    if (!(($mask0 & 4) === 0))
      status = null;
    ByteArrayContent.call($this, bytes, contentType, status);
    return $this;
  }
  function ByteArrayContent_init_$Create$(bytes, contentType, status, $mask0, $marker) {
    return ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, Object.create(ByteArrayContent.prototype));
  }
  function ByteArrayContent(bytes, contentType, status) {
    ByteArrayContent_0.call(this);
    this.l2q_1 = bytes;
    this.m2q_1 = contentType;
    this.n2q_1 = status;
  }
  ByteArrayContent.prototype.o2q = function () {
    return this.m2q_1;
  };
  ByteArrayContent.prototype.p2q = function () {
    return toLong_0(this.l2q_1.length);
  };
  ByteArrayContent.prototype.q2q = function () {
    return this.l2q_1;
  };
  ByteArrayContent.$metadata$ = classMeta('ByteArrayContent', undefined, undefined, undefined, undefined, ByteArrayContent_0.prototype);
  function NoContent() {
    OutgoingContent.call(this);
  }
  NoContent.$metadata$ = classMeta('NoContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  ReadChannelContent.$metadata$ = classMeta('ReadChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function WriteChannelContent() {
  }
  WriteChannelContent.$metadata$ = classMeta('WriteChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  ByteArrayContent_0.$metadata$ = classMeta('ByteArrayContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ProtocolUpgrade() {
  }
  ProtocolUpgrade.$metadata$ = classMeta('ProtocolUpgrade', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function OutgoingContent() {
    this.r2q_1 = null;
  }
  OutgoingContent.prototype.o2q = function () {
    return null;
  };
  OutgoingContent.prototype.p2q = function () {
    return null;
  };
  OutgoingContent.prototype.i2l = function () {
    return Companion_getInstance_2().a2h_1;
  };
  OutgoingContent.$metadata$ = classMeta('OutgoingContent');
  function NullBody() {
    NullBody_instance = this;
  }
  NullBody.$metadata$ = objectMeta('NullBody');
  var NullBody_instance;
  function NullBody_getInstance() {
    if (NullBody_instance == null)
      new NullBody();
    return NullBody_instance;
  }
  function TextContent_init_$Init$(text, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      status = null;
    TextContent.call($this, text, contentType, status);
    return $this;
  }
  function TextContent_init_$Create$(text, contentType, status, $mask0, $marker) {
    return TextContent_init_$Init$(text, contentType, status, $mask0, $marker, Object.create(TextContent.prototype));
  }
  function TextContent(text, contentType, status) {
    ByteArrayContent_0.call(this);
    this.y2q_1 = text;
    this.z2q_1 = contentType;
    this.a2r_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray = this.y2q_1;
      var tmp0_elvis_lhs = charset(this.z2q_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().k25_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().k25_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.n25(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.b2r_1 = tmp$ret$0;
  }
  TextContent.prototype.o2q = function () {
    return this.z2q_1;
  };
  TextContent.prototype.p2q = function () {
    return toLong_0(this.b2r_1.length);
  };
  TextContent.prototype.q2q = function () {
    return this.b2r_1;
  };
  TextContent.prototype.toString = function () {
    return 'TextContent[' + this.z2q_1 + '] "' + take(this.y2q_1, 30) + '"';
  };
  TextContent.$metadata$ = classMeta('TextContent', undefined, undefined, undefined, undefined, ByteArrayContent_0.prototype);
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (PlatformUtils_getInstance().s2e_1) {
      var tmp_0;
      if (!(window === undefined)) {
        tmp_0 = window.location.origin;
      } else {
        var tmp_1 = self.location.origin;
        tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  EmptyHeaders.prototype.d11 = get;
  EmptyHeaders.prototype.d2b = forEach;
  EmptyParameters.prototype.d2b = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteArrayContent_init_$Create$;
  _.$_$.b = TextContent_init_$Create$;
  _.$_$.c = HeadersBuilder_init_$Create$;
  _.$_$.d = URLBuilder_init_$Create$;
  _.$_$.e = NullBody_getInstance;
  _.$_$.f = Application_getInstance;
  _.$_$.g = Text_getInstance;
  _.$_$.h = Companion_getInstance_2;
  _.$_$.i = HttpHeaders_getInstance;
  _.$_$.j = Companion_getInstance_3;
  _.$_$.k = Companion_getInstance_4;
  _.$_$.l = Companion_getInstance_5;
  _.$_$.m = ByteArrayContent_0;
  _.$_$.n = NoContent;
  _.$_$.o = ProtocolUpgrade;
  _.$_$.p = ReadChannelContent;
  _.$_$.q = WriteChannelContent;
  _.$_$.r = OutgoingContent;
  _.$_$.s = ContentTypeMatcher;
  _.$_$.t = HttpMessageBuilder;
  _.$_$.u = HttpMessage;
  _.$_$.v = HttpStatusCode;
  _.$_$.w = UnsafeHeaderException;
  _.$_$.x = get_authority;
  _.$_$.y = get_authority_0;
  _.$_$.z = charset_0;
  _.$_$.a1 = charset;
  _.$_$.b1 = contentLength;
  _.$_$.c1 = contentType;
  _.$_$.d1 = contentType_0;
  _.$_$.e1 = contentType_1;
  _.$_$.f1 = isSecure;
  _.$_$.g1 = isWebsocket;
  _.$_$.h1 = parseAndSortHeader;
  _.$_$.i1 = takeFrom_0;
  _.$_$.j1 = takeFrom;
  _.$_$.k1 = withCharsetIfNeeded;
  _.$_$.l1 = withCharset;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js')));

//# sourceMappingURL=ktor-ktor-http-js-ir.js.map