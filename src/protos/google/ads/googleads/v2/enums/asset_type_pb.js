var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AssetTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AssetTypeEnum.AssetType",null,global),proto.google.ads.googleads.v2.enums.AssetTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AssetTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AssetTypeEnum.displayName="proto.google.ads.googleads.v2.enums.AssetTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AssetTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AssetTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AssetTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AssetTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AssetTypeEnum;return proto.google.ads.googleads.v2.enums.AssetTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AssetTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AssetTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AssetTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AssetTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AssetTypeEnum.AssetType={UNSPECIFIED:0,UNKNOWN:1,YOUTUBE_VIDEO:2,MEDIA_BUNDLE:3,IMAGE:4,TEXT:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);