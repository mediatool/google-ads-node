// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/feed_mapping_criterion_type.proto

import * as jspb from "google-protobuf";

export class FeedMappingCriterionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingCriterionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingCriterionTypeEnum): FeedMappingCriterionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMappingCriterionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingCriterionTypeEnum;
  static deserializeBinaryFromReader(message: FeedMappingCriterionTypeEnum, reader: jspb.BinaryReader): FeedMappingCriterionTypeEnum;
}

export namespace FeedMappingCriterionTypeEnum {
  export type AsObject = {
  }

  export enum FeedMappingCriterionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN_LOCATION_TARGETS = 2,
    DSA_PAGE_FEED = 3,
  }
}
