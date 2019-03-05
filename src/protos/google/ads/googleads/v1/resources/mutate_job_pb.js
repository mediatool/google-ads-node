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

var google_ads_googleads_v1_enums_mutate_job_status_pb = require('../../../../../google/ads/googleads/v1/enums/mutate_job_status_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.resources.MutateJob', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata', null, global);

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
proto.google.ads.googleads.v1.resources.MutateJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.MutateJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.MutateJob.displayName = 'proto.google.ads.googleads.v1.resources.MutateJob';
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
proto.google.ads.googleads.v1.resources.MutateJob.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.MutateJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.MutateJob.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    nextAddSequenceToken: (f = msg.getNextAddSequenceToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.ads.googleads.v1.resources.MutateJob}
 */
proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.MutateJob;
  return proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.MutateJob}
 */
proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setNextAddSequenceToken(value);
      break;
    case 4:
      var value = new proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata;
      reader.readMessage(value,proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.google.ads.googleads.v1.resources.MutateJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.MutateJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.MutateJob.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNextAddSequenceToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
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
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.displayName = 'proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata';
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
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    creationDateTime: (f = msg.getCreationDateTime()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    completionDateTime: (f = msg.getCompletionDateTime()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    estimatedCompletionRatio: (f = msg.getEstimatedCompletionRatio()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata;
  return proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCreationDateTime(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCompletionDateTime(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEstimatedCompletionRatio(value);
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
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCompletionDateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEstimatedCompletionRatio();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue creation_date_time = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getCreationDateTime = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setCreationDateTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearCreationDateTime = function() {
  this.setCreationDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasCreationDateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue completion_date_time = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getCompletionDateTime = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setCompletionDateTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearCompletionDateTime = function() {
  this.setCompletionDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasCompletionDateTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue estimated_completion_ratio = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getEstimatedCompletionRatio = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setEstimatedCompletionRatio = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearEstimatedCompletionRatio = function() {
  this.setEstimatedCompletionRatio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasEstimatedCompletionRatio = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue next_add_sequence_token = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.getNextAddSequenceToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.setNextAddSequenceToken = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearNextAddSequenceToken = function() {
  this.setNextAddSequenceToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasNextAddSequenceToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MutateJobMetadata metadata = 4;
 * @return {?proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.getMetadata = function() {
  return /** @type{?proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata, 4));
};


/** @param {?proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata|undefined} value */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus status = 5;
 * @return {!proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus}
 */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus} value */
proto.google.ads.googleads.v1.resources.MutateJob.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
