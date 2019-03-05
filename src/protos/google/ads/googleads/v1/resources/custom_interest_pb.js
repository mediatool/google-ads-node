/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v1_enums_custom_interest_member_type_pb = require('../../../../../google/ads/googleads/v1/enums/custom_interest_member_type_pb.js');
var google_ads_googleads_v1_enums_custom_interest_status_pb = require('../../../../../google/ads/googleads/v1/enums/custom_interest_status_pb.js');
var google_ads_googleads_v1_enums_custom_interest_type_pb = require('../../../../../google/ads/googleads/v1/enums/custom_interest_type_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.resources.CustomInterest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.resources.CustomInterestMember', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.resources.CustomInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.resources.CustomInterest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.CustomInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.CustomInterest.displayName = 'proto.google.ads.googleads.v1.resources.CustomInterest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.resources.CustomInterest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.CustomInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CustomInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    description: (f = msg.getDescription()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.google.ads.googleads.v1.resources.CustomInterestMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.resources.CustomInterest}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.CustomInterest;
  return proto.google.ads.googleads.v1.resources.CustomInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.CustomInterest}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestStatusEnum.CustomInterestStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestTypeEnum.CustomInterestType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.google.ads.googleads.v1.resources.CustomInterestMember;
      reader.readMessage(value,proto.google.ads.googleads.v1.resources.CustomInterestMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.CustomInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CustomInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.ads.googleads.v1.resources.CustomInterestMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v1.resources.CustomInterest.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v1.enums.CustomInterestStatusEnum.CustomInterestStatus status = 3;
 * @return {!proto.google.ads.googleads.v1.enums.CustomInterestStatusEnum.CustomInterestStatus}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestStatusEnum.CustomInterestStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.CustomInterestStatusEnum.CustomInterestStatus} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.resources.CustomInterest.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v1.enums.CustomInterestTypeEnum.CustomInterestType type = 5;
 * @return {!proto.google.ads.googleads.v1.enums.CustomInterestTypeEnum.CustomInterestType}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestTypeEnum.CustomInterestType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.CustomInterestTypeEnum.CustomInterestType} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue description = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getDescription = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setDescription = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.google.ads.googleads.v1.resources.CustomInterest.prototype.clearDescription = function() {
  this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated CustomInterestMember members = 7;
 * @return {!Array<!proto.google.ads.googleads.v1.resources.CustomInterestMember>}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.resources.CustomInterestMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.resources.CustomInterestMember, 7));
};


/** @param {!Array<!proto.google.ads.googleads.v1.resources.CustomInterestMember>} value */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterestMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.resources.CustomInterestMember}
 */
proto.google.ads.googleads.v1.resources.CustomInterest.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.ads.googleads.v1.resources.CustomInterestMember, opt_index);
};


proto.google.ads.googleads.v1.resources.CustomInterest.prototype.clearMembersList = function() {
  this.setMembersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.CustomInterestMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.CustomInterestMember.displayName = 'proto.google.ads.googleads.v1.resources.CustomInterestMember';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.CustomInterestMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterestMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    parameter: (f = msg.getParameter()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.resources.CustomInterestMember}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.CustomInterestMember;
  return proto.google.ads.googleads.v1.resources.CustomInterestMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterestMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.CustomInterestMember}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType} */ (reader.readEnum());
      msg.setMemberType(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.CustomInterestMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.CustomInterestMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v1.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType member_type = 1;
 * @return {!proto.google.ads.googleads.v1.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.getMemberType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType} value */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.setMemberType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue parameter = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.getParameter = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.setParameter = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.clearParameter = function() {
  this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.CustomInterestMember.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
