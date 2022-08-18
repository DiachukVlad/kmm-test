(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var objectMeta = kotlin_kotlin.$_$.d9;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.z3;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.nb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var getStringHashCode = kotlin_kotlin.$_$.j8;
  var classMeta = kotlin_kotlin.$_$.d8;
  //endregion
  //region block: pre-declaration
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.diachuk.vladar.User', this, 2);
    tmp0_serialDesc.xr('name', false);
    tmp0_serialDesc.xr('surname', false);
    this.s18_1 = tmp0_serialDesc;
  }
  $serializer.prototype.ji = function () {
    return this.s18_1;
  };
  $serializer.prototype.zr = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
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
    return tmp$ret$2;
  };
  $serializer.prototype.li = function (decoder) {
    var tmp0_desc = this.s18_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.hl(tmp0_desc);
    if (tmp6_input.ul()) {
      tmp4_local0 = tmp6_input.rl(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.rl(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vl(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.rl(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.rl(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.il(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer.prototype.t18 = function (encoder, value) {
    var tmp0_desc = this.s18_1;
    var tmp1_output = encoder.hl(tmp0_desc);
    tmp1_output.sm(tmp0_desc, 0, value.u18_1);
    tmp1_output.sm(tmp0_desc, 1, value.v18_1);
    tmp1_output.il(tmp0_desc);
  };
  $serializer.prototype.ki = function (encoder, value) {
    return this.t18(encoder, value instanceof User ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function User_init_$Init$(seen1, name, surname, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance().s18_1);
    $this.u18_1 = name;
    $this.v18_1 = surname;
    return $this;
  }
  function User_init_$Create$(seen1, name, surname, serializationConstructorMarker) {
    return User_init_$Init$(seen1, name, surname, serializationConstructorMarker, Object.create(User.prototype));
  }
  function User(name, surname) {
    Companion_getInstance();
    this.u18_1 = name;
    this.v18_1 = surname;
  }
  User.prototype.w18 = function () {
    return this.u18_1;
  };
  User.prototype.x18 = function () {
    return this.v18_1;
  };
  User.prototype.component1 = function () {
    return this.u18_1;
  };
  User.prototype.component2 = function () {
    return this.v18_1;
  };
  User.prototype.copy = function (name, surname) {
    return this.y18(name === void 1 ? this.u18_1 : name, surname === void 1 ? this.v18_1 : surname);
  };
  User.prototype.y18 = function (name, surname) {
    return new User(name, surname);
  };
  User.prototype.z18 = function (name, surname, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.u18_1;
    if (!(($mask0 & 2) === 0))
      surname = this.v18_1;
    return this.y18(name, surname);
  };
  User.prototype.toString = function () {
    return 'User(name=' + this.u18_1 + ', surname=' + this.v18_1 + ')';
  };
  User.prototype.hashCode = function () {
    var result = getStringHashCode(this.u18_1);
    result = imul(result, 31) + getStringHashCode(this.v18_1) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.u18_1 === tmp0_other_with_cast.u18_1))
      return false;
    if (!(this.v18_1 === tmp0_other_with_cast.v18_1))
      return false;
    return true;
  };
  User.$metadata$ = classMeta('User', undefined, undefined, {0: $serializer_getInstance});
  Object.defineProperty(User.prototype, 'name', {
    configurable: true,
    get: User.prototype.w18
  });
  Object.defineProperty(User.prototype, 'surname', {
    configurable: true,
    get: User.prototype.x18
  });
  //region block: post-declaration
  $serializer.prototype.as = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$diachuk = $com.diachuk || ($com.diachuk = {});
    var $com$diachuk$vladar = $com$diachuk.vladar || ($com$diachuk.vladar = {});
    $com$diachuk$vladar.User = User;
    $com$diachuk$vladar.User.User_init_$Create$ = User_init_$Create$;
    Object.defineProperty($com$diachuk$vladar.User, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    Object.defineProperty($com$diachuk$vladar.User, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = User;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js')));

//# sourceMappingURL=kmm-test-models.js.map