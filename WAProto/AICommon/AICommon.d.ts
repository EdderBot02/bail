import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace AICommon. */
export namespace AICommon {

    /** Properties of a AIRichResponseSubMessage. */
    interface IAIRichResponseSubMessage {

        /** AIRichResponseSubMessage messageType */
        messageType?: (AICommon.AIRichResponseSubMessageType|null);

        /** AIRichResponseSubMessage gridImageMetadata */
        gridImageMetadata?: (AICommon.IAIRichResponseGridImageMetadata|null);

        /** AIRichResponseSubMessage messageText */
        messageText?: (string|null);

        /** AIRichResponseSubMessage imageMetadata */
        imageMetadata?: (AICommon.IAIRichResponseInlineImageMetadata|null);

        /** AIRichResponseSubMessage codeMetadata */
        codeMetadata?: (AICommon.IAIRichResponseCodeMetadata|null);

        /** AIRichResponseSubMessage tableMetadata */
        tableMetadata?: (AICommon.IAIRichResponseTableMetadata|null);

        /** AIRichResponseSubMessage dynamicMetadata */
        dynamicMetadata?: (AICommon.IAIRichResponseDynamicMetadata|null);

        /** AIRichResponseSubMessage latexMetadata */
        latexMetadata?: (AICommon.IAIRichResponseLatexMetadata|null);

        /** AIRichResponseSubMessage mapMetadata */
        mapMetadata?: (AICommon.IAIRichResponseMapMetadata|null);

        /** AIRichResponseSubMessage contentItemsMetadata */
        contentItemsMetadata?: (AICommon.IAIRichResponseContentItemsMetadata|null);
    }

    /** Represents a AIRichResponseSubMessage. */
    class AIRichResponseSubMessage implements IAIRichResponseSubMessage {

        /**
         * Constructs a new AIRichResponseSubMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseSubMessage);

        /** AIRichResponseSubMessage messageType. */
        public messageType?: (AICommon.AIRichResponseSubMessageType|null);

        /** AIRichResponseSubMessage gridImageMetadata. */
        public gridImageMetadata?: (AICommon.IAIRichResponseGridImageMetadata|null);

        /** AIRichResponseSubMessage messageText. */
        public messageText?: (string|null);

        /** AIRichResponseSubMessage imageMetadata. */
        public imageMetadata?: (AICommon.IAIRichResponseInlineImageMetadata|null);

        /** AIRichResponseSubMessage codeMetadata. */
        public codeMetadata?: (AICommon.IAIRichResponseCodeMetadata|null);

        /** AIRichResponseSubMessage tableMetadata. */
        public tableMetadata?: (AICommon.IAIRichResponseTableMetadata|null);

        /** AIRichResponseSubMessage dynamicMetadata. */
        public dynamicMetadata?: (AICommon.IAIRichResponseDynamicMetadata|null);

        /** AIRichResponseSubMessage latexMetadata. */
        public latexMetadata?: (AICommon.IAIRichResponseLatexMetadata|null);

        /** AIRichResponseSubMessage mapMetadata. */
        public mapMetadata?: (AICommon.IAIRichResponseMapMetadata|null);

        /** AIRichResponseSubMessage contentItemsMetadata. */
        public contentItemsMetadata?: (AICommon.IAIRichResponseContentItemsMetadata|null);

        /** AIRichResponseSubMessage _messageType. */
        public _messageType?: "messageType";

        /** AIRichResponseSubMessage _gridImageMetadata. */
        public _gridImageMetadata?: "gridImageMetadata";

        /** AIRichResponseSubMessage _messageText. */
        public _messageText?: "messageText";

        /** AIRichResponseSubMessage _imageMetadata. */
        public _imageMetadata?: "imageMetadata";

        /** AIRichResponseSubMessage _codeMetadata. */
        public _codeMetadata?: "codeMetadata";

        /** AIRichResponseSubMessage _tableMetadata. */
        public _tableMetadata?: "tableMetadata";

        /** AIRichResponseSubMessage _dynamicMetadata. */
        public _dynamicMetadata?: "dynamicMetadata";

        /** AIRichResponseSubMessage _latexMetadata. */
        public _latexMetadata?: "latexMetadata";

        /** AIRichResponseSubMessage _mapMetadata. */
        public _mapMetadata?: "mapMetadata";

        /** AIRichResponseSubMessage _contentItemsMetadata. */
        public _contentItemsMetadata?: "contentItemsMetadata";

        /**
         * Creates a new AIRichResponseSubMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseSubMessage instance
         */
        public static create(properties?: AICommon.IAIRichResponseSubMessage): AICommon.AIRichResponseSubMessage;

        /**
         * Encodes the specified AIRichResponseSubMessage message. Does not implicitly {@link AICommon.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseSubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseSubMessage message, length delimited. Does not implicitly {@link AICommon.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseSubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseSubMessage;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseSubMessage;

        /**
         * Verifies a AIRichResponseSubMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseSubMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseSubMessage
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseSubMessage;

        /**
         * Creates a plain object from a AIRichResponseSubMessage message. Also converts values to other types if specified.
         * @param message AIRichResponseSubMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseSubMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseSubMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseSubMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIRichResponseContentItemsMetadata. */
    interface IAIRichResponseContentItemsMetadata {

        /** AIRichResponseContentItemsMetadata itemsMetadata */
        itemsMetadata?: (AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[]|null);

        /** AIRichResponseContentItemsMetadata contentType */
        contentType?: (AICommon.AIRichResponseContentItemsMetadata.ContentType|null);
    }

    /** Represents a AIRichResponseContentItemsMetadata. */
    class AIRichResponseContentItemsMetadata implements IAIRichResponseContentItemsMetadata {

        /**
         * Constructs a new AIRichResponseContentItemsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseContentItemsMetadata);

        /** AIRichResponseContentItemsMetadata itemsMetadata. */
        public itemsMetadata: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[];

        /** AIRichResponseContentItemsMetadata contentType. */
        public contentType?: (AICommon.AIRichResponseContentItemsMetadata.ContentType|null);

        /** AIRichResponseContentItemsMetadata _contentType. */
        public _contentType?: "contentType";

        /**
         * Creates a new AIRichResponseContentItemsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseContentItemsMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseContentItemsMetadata): AICommon.AIRichResponseContentItemsMetadata;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseContentItemsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseContentItemsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseContentItemsMetadata;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseContentItemsMetadata;

        /**
         * Verifies a AIRichResponseContentItemsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseContentItemsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseContentItemsMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseContentItemsMetadata;

        /**
         * Creates a plain object from a AIRichResponseContentItemsMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseContentItemsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseContentItemsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseContentItemsMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseContentItemsMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseContentItemsMetadata {

        /** Properties of a AIRichResponseContentItemMetadata. */
        interface IAIRichResponseContentItemMetadata {

            /** AIRichResponseContentItemMetadata reelItem */
            reelItem?: (AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);
        }

        /** Represents a AIRichResponseContentItemMetadata. */
        class AIRichResponseContentItemMetadata implements IAIRichResponseContentItemMetadata {

            /**
             * Constructs a new AIRichResponseContentItemMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata);

            /** AIRichResponseContentItemMetadata reelItem. */
            public reelItem?: (AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);

            /** AIRichResponseContentItemMetadata aIRichResponseContentItem. */
            public aIRichResponseContentItem?: "reelItem";

            /**
             * Creates a new AIRichResponseContentItemMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseContentItemMetadata instance
             */
            public static create(properties?: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Verifies a AIRichResponseContentItemMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseContentItemMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseContentItemMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Creates a plain object from a AIRichResponseContentItemMetadata message. Also converts values to other types if specified.
             * @param message AIRichResponseContentItemMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseContentItemMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseContentItemMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AIRichResponseReelItem. */
        interface IAIRichResponseReelItem {

            /** AIRichResponseReelItem title */
            title?: (string|null);

            /** AIRichResponseReelItem profileIconUrl */
            profileIconUrl?: (string|null);

            /** AIRichResponseReelItem thumbnailUrl */
            thumbnailUrl?: (string|null);

            /** AIRichResponseReelItem videoUrl */
            videoUrl?: (string|null);
        }

        /** Represents a AIRichResponseReelItem. */
        class AIRichResponseReelItem implements IAIRichResponseReelItem {

            /**
             * Constructs a new AIRichResponseReelItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem);

            /** AIRichResponseReelItem title. */
            public title?: (string|null);

            /** AIRichResponseReelItem profileIconUrl. */
            public profileIconUrl?: (string|null);

            /** AIRichResponseReelItem thumbnailUrl. */
            public thumbnailUrl?: (string|null);

            /** AIRichResponseReelItem videoUrl. */
            public videoUrl?: (string|null);

            /** AIRichResponseReelItem _title. */
            public _title?: "title";

            /** AIRichResponseReelItem _profileIconUrl. */
            public _profileIconUrl?: "profileIconUrl";

            /** AIRichResponseReelItem _thumbnailUrl. */
            public _thumbnailUrl?: "thumbnailUrl";

            /** AIRichResponseReelItem _videoUrl. */
            public _videoUrl?: "videoUrl";

            /**
             * Creates a new AIRichResponseReelItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseReelItem instance
             */
            public static create(properties?: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Encodes the specified AIRichResponseReelItem message. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseReelItem message, length delimited. Does not implicitly {@link AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Verifies a AIRichResponseReelItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseReelItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseReelItem
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Creates a plain object from a AIRichResponseReelItem message. Also converts values to other types if specified.
             * @param message AIRichResponseReelItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseReelItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseReelItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ContentType enum. */
        enum ContentType {
            DEFAULT = 0,
            CAROUSEL = 1
        }
    }

    /** Properties of a AIRichResponseMapMetadata. */
    interface IAIRichResponseMapMetadata {

        /** AIRichResponseMapMetadata centerLatitude */
        centerLatitude?: (number|null);

        /** AIRichResponseMapMetadata centerLongitude */
        centerLongitude?: (number|null);

        /** AIRichResponseMapMetadata latitudeDelta */
        latitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata longitudeDelta */
        longitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata annotations */
        annotations?: (AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[]|null);

        /** AIRichResponseMapMetadata showInfoList */
        showInfoList?: (boolean|null);
    }

    /** Represents a AIRichResponseMapMetadata. */
    class AIRichResponseMapMetadata implements IAIRichResponseMapMetadata {

        /**
         * Constructs a new AIRichResponseMapMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseMapMetadata);

        /** AIRichResponseMapMetadata centerLatitude. */
        public centerLatitude?: (number|null);

        /** AIRichResponseMapMetadata centerLongitude. */
        public centerLongitude?: (number|null);

        /** AIRichResponseMapMetadata latitudeDelta. */
        public latitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata longitudeDelta. */
        public longitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata annotations. */
        public annotations: AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[];

        /** AIRichResponseMapMetadata showInfoList. */
        public showInfoList?: (boolean|null);

        /** AIRichResponseMapMetadata _centerLatitude. */
        public _centerLatitude?: "centerLatitude";

        /** AIRichResponseMapMetadata _centerLongitude. */
        public _centerLongitude?: "centerLongitude";

        /** AIRichResponseMapMetadata _latitudeDelta. */
        public _latitudeDelta?: "latitudeDelta";

        /** AIRichResponseMapMetadata _longitudeDelta. */
        public _longitudeDelta?: "longitudeDelta";

        /** AIRichResponseMapMetadata _showInfoList. */
        public _showInfoList?: "showInfoList";

        /**
         * Creates a new AIRichResponseMapMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseMapMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseMapMetadata): AICommon.AIRichResponseMapMetadata;

        /**
         * Encodes the specified AIRichResponseMapMetadata message. Does not implicitly {@link AICommon.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseMapMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseMapMetadata;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseMapMetadata;

        /**
         * Verifies a AIRichResponseMapMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseMapMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseMapMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseMapMetadata;

        /**
         * Creates a plain object from a AIRichResponseMapMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseMapMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseMapMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseMapMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseMapMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseMapMetadata {

        /** Properties of a AIRichResponseMapAnnotation. */
        interface IAIRichResponseMapAnnotation {

            /** AIRichResponseMapAnnotation annotationNumber */
            annotationNumber?: (number|null);

            /** AIRichResponseMapAnnotation latitude */
            latitude?: (number|null);

            /** AIRichResponseMapAnnotation longitude */
            longitude?: (number|null);

            /** AIRichResponseMapAnnotation title */
            title?: (string|null);

            /** AIRichResponseMapAnnotation body */
            body?: (string|null);
        }

        /** Represents a AIRichResponseMapAnnotation. */
        class AIRichResponseMapAnnotation implements IAIRichResponseMapAnnotation {

            /**
             * Constructs a new AIRichResponseMapAnnotation.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation);

            /** AIRichResponseMapAnnotation annotationNumber. */
            public annotationNumber?: (number|null);

            /** AIRichResponseMapAnnotation latitude. */
            public latitude?: (number|null);

            /** AIRichResponseMapAnnotation longitude. */
            public longitude?: (number|null);

            /** AIRichResponseMapAnnotation title. */
            public title?: (string|null);

            /** AIRichResponseMapAnnotation body. */
            public body?: (string|null);

            /** AIRichResponseMapAnnotation _annotationNumber. */
            public _annotationNumber?: "annotationNumber";

            /** AIRichResponseMapAnnotation _latitude. */
            public _latitude?: "latitude";

            /** AIRichResponseMapAnnotation _longitude. */
            public _longitude?: "longitude";

            /** AIRichResponseMapAnnotation _title. */
            public _title?: "title";

            /** AIRichResponseMapAnnotation _body. */
            public _body?: "body";

            /**
             * Creates a new AIRichResponseMapAnnotation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseMapAnnotation instance
             */
            public static create(properties?: AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation): AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message. Does not implicitly {@link AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message, length delimited. Does not implicitly {@link AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Verifies a AIRichResponseMapAnnotation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseMapAnnotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseMapAnnotation
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Creates a plain object from a AIRichResponseMapAnnotation message. Also converts values to other types if specified.
             * @param message AIRichResponseMapAnnotation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseMapAnnotation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseMapAnnotation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseLatexMetadata. */
    interface IAIRichResponseLatexMetadata {

        /** AIRichResponseLatexMetadata text */
        text?: (string|null);

        /** AIRichResponseLatexMetadata expressions */
        expressions?: (AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[]|null);
    }

    /** Represents a AIRichResponseLatexMetadata. */
    class AIRichResponseLatexMetadata implements IAIRichResponseLatexMetadata {

        /**
         * Constructs a new AIRichResponseLatexMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseLatexMetadata);

        /** AIRichResponseLatexMetadata text. */
        public text?: (string|null);

        /** AIRichResponseLatexMetadata expressions. */
        public expressions: AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[];

        /** AIRichResponseLatexMetadata _text. */
        public _text?: "text";

        /**
         * Creates a new AIRichResponseLatexMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseLatexMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseLatexMetadata): AICommon.AIRichResponseLatexMetadata;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message. Does not implicitly {@link AICommon.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseLatexMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseLatexMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseLatexMetadata;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseLatexMetadata;

        /**
         * Verifies a AIRichResponseLatexMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseLatexMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseLatexMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseLatexMetadata;

        /**
         * Creates a plain object from a AIRichResponseLatexMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseLatexMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseLatexMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseLatexMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseLatexMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseLatexMetadata {

        /** Properties of a AIRichResponseLatexExpression. */
        interface IAIRichResponseLatexExpression {

            /** AIRichResponseLatexExpression latexExpression */
            latexExpression?: (string|null);

            /** AIRichResponseLatexExpression url */
            url?: (string|null);

            /** AIRichResponseLatexExpression width */
            width?: (number|null);

            /** AIRichResponseLatexExpression height */
            height?: (number|null);

            /** AIRichResponseLatexExpression fontHeight */
            fontHeight?: (number|null);

            /** AIRichResponseLatexExpression imageTopPadding */
            imageTopPadding?: (number|null);

            /** AIRichResponseLatexExpression imageLeadingPadding */
            imageLeadingPadding?: (number|null);

            /** AIRichResponseLatexExpression imageBottomPadding */
            imageBottomPadding?: (number|null);

            /** AIRichResponseLatexExpression imageTrailingPadding */
            imageTrailingPadding?: (number|null);
        }

        /** Represents a AIRichResponseLatexExpression. */
        class AIRichResponseLatexExpression implements IAIRichResponseLatexExpression {

            /**
             * Constructs a new AIRichResponseLatexExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression);

            /** AIRichResponseLatexExpression latexExpression. */
            public latexExpression?: (string|null);

            /** AIRichResponseLatexExpression url. */
            public url?: (string|null);

            /** AIRichResponseLatexExpression width. */
            public width?: (number|null);

            /** AIRichResponseLatexExpression height. */
            public height?: (number|null);

            /** AIRichResponseLatexExpression fontHeight. */
            public fontHeight?: (number|null);

            /** AIRichResponseLatexExpression imageTopPadding. */
            public imageTopPadding?: (number|null);

            /** AIRichResponseLatexExpression imageLeadingPadding. */
            public imageLeadingPadding?: (number|null);

            /** AIRichResponseLatexExpression imageBottomPadding. */
            public imageBottomPadding?: (number|null);

            /** AIRichResponseLatexExpression imageTrailingPadding. */
            public imageTrailingPadding?: (number|null);

            /** AIRichResponseLatexExpression _latexExpression. */
            public _latexExpression?: "latexExpression";

            /** AIRichResponseLatexExpression _url. */
            public _url?: "url";

            /** AIRichResponseLatexExpression _width. */
            public _width?: "width";

            /** AIRichResponseLatexExpression _height. */
            public _height?: "height";

            /** AIRichResponseLatexExpression _fontHeight. */
            public _fontHeight?: "fontHeight";

            /** AIRichResponseLatexExpression _imageTopPadding. */
            public _imageTopPadding?: "imageTopPadding";

            /** AIRichResponseLatexExpression _imageLeadingPadding. */
            public _imageLeadingPadding?: "imageLeadingPadding";

            /** AIRichResponseLatexExpression _imageBottomPadding. */
            public _imageBottomPadding?: "imageBottomPadding";

            /** AIRichResponseLatexExpression _imageTrailingPadding. */
            public _imageTrailingPadding?: "imageTrailingPadding";

            /**
             * Creates a new AIRichResponseLatexExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseLatexExpression instance
             */
            public static create(properties?: AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression): AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Encodes the specified AIRichResponseLatexExpression message. Does not implicitly {@link AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseLatexExpression message, length delimited. Does not implicitly {@link AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Verifies a AIRichResponseLatexExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseLatexExpression message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseLatexExpression
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Creates a plain object from a AIRichResponseLatexExpression message. Also converts values to other types if specified.
             * @param message AIRichResponseLatexExpression
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseLatexExpression to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseLatexExpression
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseUnifiedResponse. */
    interface IAIRichResponseUnifiedResponse {

        /** AIRichResponseUnifiedResponse data */
        data?: (Uint8Array|null);
    }

    /** Represents a AIRichResponseUnifiedResponse. */
    class AIRichResponseUnifiedResponse implements IAIRichResponseUnifiedResponse {

        /**
         * Constructs a new AIRichResponseUnifiedResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseUnifiedResponse);

        /** AIRichResponseUnifiedResponse data. */
        public data?: (Uint8Array|null);

        /** AIRichResponseUnifiedResponse _data. */
        public _data?: "data";

        /**
         * Creates a new AIRichResponseUnifiedResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseUnifiedResponse instance
         */
        public static create(properties?: AICommon.IAIRichResponseUnifiedResponse): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Encodes the specified AIRichResponseUnifiedResponse message. Does not implicitly {@link AICommon.AIRichResponseUnifiedResponse.verify|verify} messages.
         * @param message AIRichResponseUnifiedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseUnifiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseUnifiedResponse message, length delimited. Does not implicitly {@link AICommon.AIRichResponseUnifiedResponse.verify|verify} messages.
         * @param message AIRichResponseUnifiedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseUnifiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseUnifiedResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseUnifiedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Decodes a AIRichResponseUnifiedResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseUnifiedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Verifies a AIRichResponseUnifiedResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseUnifiedResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseUnifiedResponse
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseUnifiedResponse;

        /**
         * Creates a plain object from a AIRichResponseUnifiedResponse message. Also converts values to other types if specified.
         * @param message AIRichResponseUnifiedResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseUnifiedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseUnifiedResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseUnifiedResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIRichResponseDynamicMetadata. */
    interface IAIRichResponseDynamicMetadata {

        /** AIRichResponseDynamicMetadata type */
        type?: (AICommon.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);

        /** AIRichResponseDynamicMetadata version */
        version?: (number|Long|null);

        /** AIRichResponseDynamicMetadata url */
        url?: (string|null);

        /** AIRichResponseDynamicMetadata loopCount */
        loopCount?: (number|null);
    }

    /** Represents a AIRichResponseDynamicMetadata. */
    class AIRichResponseDynamicMetadata implements IAIRichResponseDynamicMetadata {

        /**
         * Constructs a new AIRichResponseDynamicMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseDynamicMetadata);

        /** AIRichResponseDynamicMetadata type. */
        public type?: (AICommon.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);

        /** AIRichResponseDynamicMetadata version. */
        public version?: (number|Long|null);

        /** AIRichResponseDynamicMetadata url. */
        public url?: (string|null);

        /** AIRichResponseDynamicMetadata loopCount. */
        public loopCount?: (number|null);

        /** AIRichResponseDynamicMetadata _type. */
        public _type?: "type";

        /** AIRichResponseDynamicMetadata _version. */
        public _version?: "version";

        /** AIRichResponseDynamicMetadata _url. */
        public _url?: "url";

        /** AIRichResponseDynamicMetadata _loopCount. */
        public _loopCount?: "loopCount";

        /**
         * Creates a new AIRichResponseDynamicMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseDynamicMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseDynamicMetadata): AICommon.AIRichResponseDynamicMetadata;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message. Does not implicitly {@link AICommon.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseDynamicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseDynamicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseDynamicMetadata;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseDynamicMetadata;

        /**
         * Verifies a AIRichResponseDynamicMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseDynamicMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseDynamicMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseDynamicMetadata;

        /**
         * Creates a plain object from a AIRichResponseDynamicMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseDynamicMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseDynamicMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseDynamicMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseDynamicMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseDynamicMetadata {

        /** AIRichResponseDynamicMetadataType enum. */
        enum AIRichResponseDynamicMetadataType {
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2
        }
    }

    /** Properties of a AIRichResponseTableMetadata. */
    interface IAIRichResponseTableMetadata {

        /** AIRichResponseTableMetadata rows */
        rows?: (AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow[]|null);

        /** AIRichResponseTableMetadata title */
        title?: (string|null);
    }

    /** Represents a AIRichResponseTableMetadata. */
    class AIRichResponseTableMetadata implements IAIRichResponseTableMetadata {

        /**
         * Constructs a new AIRichResponseTableMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseTableMetadata);

        /** AIRichResponseTableMetadata rows. */
        public rows: AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow[];

        /** AIRichResponseTableMetadata title. */
        public title?: (string|null);

        /** AIRichResponseTableMetadata _title. */
        public _title?: "title";

        /**
         * Creates a new AIRichResponseTableMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseTableMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseTableMetadata): AICommon.AIRichResponseTableMetadata;

        /**
         * Encodes the specified AIRichResponseTableMetadata message. Does not implicitly {@link AICommon.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseTableMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseTableMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseTableMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseTableMetadata;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseTableMetadata;

        /**
         * Verifies a AIRichResponseTableMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseTableMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseTableMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseTableMetadata;

        /**
         * Creates a plain object from a AIRichResponseTableMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseTableMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseTableMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseTableMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseTableMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseTableMetadata {

        /** Properties of a AIRichResponseTableRow. */
        interface IAIRichResponseTableRow {

            /** AIRichResponseTableRow items */
            items?: (string[]|null);

            /** AIRichResponseTableRow isHeading */
            isHeading?: (boolean|null);
        }

        /** Represents a AIRichResponseTableRow. */
        class AIRichResponseTableRow implements IAIRichResponseTableRow {

            /**
             * Constructs a new AIRichResponseTableRow.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow);

            /** AIRichResponseTableRow items. */
            public items: string[];

            /** AIRichResponseTableRow isHeading. */
            public isHeading?: (boolean|null);

            /** AIRichResponseTableRow _isHeading. */
            public _isHeading?: "isHeading";

            /**
             * Creates a new AIRichResponseTableRow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseTableRow instance
             */
            public static create(properties?: AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow): AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Encodes the specified AIRichResponseTableRow message. Does not implicitly {@link AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseTableRow message, length delimited. Does not implicitly {@link AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseTableMetadata.IAIRichResponseTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Verifies a AIRichResponseTableRow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseTableRow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseTableRow
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Creates a plain object from a AIRichResponseTableRow message. Also converts values to other types if specified.
             * @param message AIRichResponseTableRow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseTableMetadata.AIRichResponseTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseTableRow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseTableRow
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseCodeMetadata. */
    interface IAIRichResponseCodeMetadata {

        /** AIRichResponseCodeMetadata codeLanguage */
        codeLanguage?: (string|null);

        /** AIRichResponseCodeMetadata codeBlocks */
        codeBlocks?: (AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[]|null);
    }

    /** Represents a AIRichResponseCodeMetadata. */
    class AIRichResponseCodeMetadata implements IAIRichResponseCodeMetadata {

        /**
         * Constructs a new AIRichResponseCodeMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseCodeMetadata);

        /** AIRichResponseCodeMetadata codeLanguage. */
        public codeLanguage?: (string|null);

        /** AIRichResponseCodeMetadata codeBlocks. */
        public codeBlocks: AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[];

        /** AIRichResponseCodeMetadata _codeLanguage. */
        public _codeLanguage?: "codeLanguage";

        /**
         * Creates a new AIRichResponseCodeMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseCodeMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseCodeMetadata): AICommon.AIRichResponseCodeMetadata;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message. Does not implicitly {@link AICommon.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseCodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseCodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseCodeMetadata;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseCodeMetadata;

        /**
         * Verifies a AIRichResponseCodeMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseCodeMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseCodeMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseCodeMetadata;

        /**
         * Creates a plain object from a AIRichResponseCodeMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseCodeMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseCodeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseCodeMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseCodeMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseCodeMetadata {

        /** Properties of a AIRichResponseCodeBlock. */
        interface IAIRichResponseCodeBlock {

            /** AIRichResponseCodeBlock highlightType */
            highlightType?: (AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);

            /** AIRichResponseCodeBlock codeContent */
            codeContent?: (string|null);
        }

        /** Represents a AIRichResponseCodeBlock. */
        class AIRichResponseCodeBlock implements IAIRichResponseCodeBlock {

            /**
             * Constructs a new AIRichResponseCodeBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock);

            /** AIRichResponseCodeBlock highlightType. */
            public highlightType?: (AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);

            /** AIRichResponseCodeBlock codeContent. */
            public codeContent?: (string|null);

            /** AIRichResponseCodeBlock _highlightType. */
            public _highlightType?: "highlightType";

            /** AIRichResponseCodeBlock _codeContent. */
            public _codeContent?: "codeContent";

            /**
             * Creates a new AIRichResponseCodeBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseCodeBlock instance
             */
            public static create(properties?: AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock): AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Encodes the specified AIRichResponseCodeBlock message. Does not implicitly {@link AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseCodeBlock message, length delimited. Does not implicitly {@link AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Verifies a AIRichResponseCodeBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseCodeBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseCodeBlock
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Creates a plain object from a AIRichResponseCodeBlock message. Also converts values to other types if specified.
             * @param message AIRichResponseCodeBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseCodeBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseCodeBlock
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** AIRichResponseCodeHighlightType enum. */
        enum AIRichResponseCodeHighlightType {
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5
        }
    }

    /** Properties of a AIRichResponseInlineImageMetadata. */
    interface IAIRichResponseInlineImageMetadata {

        /** AIRichResponseInlineImageMetadata imageUrl */
        imageUrl?: (AICommon.IAIRichResponseImageURL|null);

        /** AIRichResponseInlineImageMetadata imageText */
        imageText?: (string|null);

        /** AIRichResponseInlineImageMetadata alignment */
        alignment?: (AICommon.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);

        /** AIRichResponseInlineImageMetadata tapLinkUrl */
        tapLinkUrl?: (string|null);
    }

    /** Represents a AIRichResponseInlineImageMetadata. */
    class AIRichResponseInlineImageMetadata implements IAIRichResponseInlineImageMetadata {

        /**
         * Constructs a new AIRichResponseInlineImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseInlineImageMetadata);

        /** AIRichResponseInlineImageMetadata imageUrl. */
        public imageUrl?: (AICommon.IAIRichResponseImageURL|null);

        /** AIRichResponseInlineImageMetadata imageText. */
        public imageText?: (string|null);

        /** AIRichResponseInlineImageMetadata alignment. */
        public alignment?: (AICommon.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);

        /** AIRichResponseInlineImageMetadata tapLinkUrl. */
        public tapLinkUrl?: (string|null);

        /** AIRichResponseInlineImageMetadata _imageUrl. */
        public _imageUrl?: "imageUrl";

        /** AIRichResponseInlineImageMetadata _imageText. */
        public _imageText?: "imageText";

        /** AIRichResponseInlineImageMetadata _alignment. */
        public _alignment?: "alignment";

        /** AIRichResponseInlineImageMetadata _tapLinkUrl. */
        public _tapLinkUrl?: "tapLinkUrl";

        /**
         * Creates a new AIRichResponseInlineImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseInlineImageMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseInlineImageMetadata): AICommon.AIRichResponseInlineImageMetadata;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message. Does not implicitly {@link AICommon.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseInlineImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseInlineImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseInlineImageMetadata;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseInlineImageMetadata;

        /**
         * Verifies a AIRichResponseInlineImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseInlineImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseInlineImageMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseInlineImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseInlineImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseInlineImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseInlineImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseInlineImageMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseInlineImageMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseInlineImageMetadata {

        /** AIRichResponseImageAlignment enum. */
        enum AIRichResponseImageAlignment {
            AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2
        }
    }

    /** Properties of a AIRichResponseGridImageMetadata. */
    interface IAIRichResponseGridImageMetadata {

        /** AIRichResponseGridImageMetadata gridImageUrl */
        gridImageUrl?: (AICommon.IAIRichResponseImageURL|null);

        /** AIRichResponseGridImageMetadata imageUrls */
        imageUrls?: (AICommon.IAIRichResponseImageURL[]|null);
    }

    /** Represents a AIRichResponseGridImageMetadata. */
    class AIRichResponseGridImageMetadata implements IAIRichResponseGridImageMetadata {

        /**
         * Constructs a new AIRichResponseGridImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseGridImageMetadata);

        /** AIRichResponseGridImageMetadata gridImageUrl. */
        public gridImageUrl?: (AICommon.IAIRichResponseImageURL|null);

        /** AIRichResponseGridImageMetadata imageUrls. */
        public imageUrls: AICommon.IAIRichResponseImageURL[];

        /** AIRichResponseGridImageMetadata _gridImageUrl. */
        public _gridImageUrl?: "gridImageUrl";

        /**
         * Creates a new AIRichResponseGridImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseGridImageMetadata instance
         */
        public static create(properties?: AICommon.IAIRichResponseGridImageMetadata): AICommon.AIRichResponseGridImageMetadata;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message. Does not implicitly {@link AICommon.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseGridImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message, length delimited. Does not implicitly {@link AICommon.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseGridImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseGridImageMetadata;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseGridImageMetadata;

        /**
         * Verifies a AIRichResponseGridImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseGridImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseGridImageMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseGridImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseGridImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseGridImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseGridImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseGridImageMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseGridImageMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIRichResponseImageURL. */
    interface IAIRichResponseImageURL {

        /** AIRichResponseImageURL imagePreviewUrl */
        imagePreviewUrl?: (string|null);

        /** AIRichResponseImageURL imageHighResUrl */
        imageHighResUrl?: (string|null);

        /** AIRichResponseImageURL sourceUrl */
        sourceUrl?: (string|null);
    }

    /** Represents a AIRichResponseImageURL. */
    class AIRichResponseImageURL implements IAIRichResponseImageURL {

        /**
         * Constructs a new AIRichResponseImageURL.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIRichResponseImageURL);

        /** AIRichResponseImageURL imagePreviewUrl. */
        public imagePreviewUrl?: (string|null);

        /** AIRichResponseImageURL imageHighResUrl. */
        public imageHighResUrl?: (string|null);

        /** AIRichResponseImageURL sourceUrl. */
        public sourceUrl?: (string|null);

        /** AIRichResponseImageURL _imagePreviewUrl. */
        public _imagePreviewUrl?: "imagePreviewUrl";

        /** AIRichResponseImageURL _imageHighResUrl. */
        public _imageHighResUrl?: "imageHighResUrl";

        /** AIRichResponseImageURL _sourceUrl. */
        public _sourceUrl?: "sourceUrl";

        /**
         * Creates a new AIRichResponseImageURL instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseImageURL instance
         */
        public static create(properties?: AICommon.IAIRichResponseImageURL): AICommon.AIRichResponseImageURL;

        /**
         * Encodes the specified AIRichResponseImageURL message. Does not implicitly {@link AICommon.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIRichResponseImageURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseImageURL message, length delimited. Does not implicitly {@link AICommon.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIRichResponseImageURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIRichResponseImageURL;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIRichResponseImageURL;

        /**
         * Verifies a AIRichResponseImageURL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseImageURL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseImageURL
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIRichResponseImageURL;

        /**
         * Creates a plain object from a AIRichResponseImageURL message. Also converts values to other types if specified.
         * @param message AIRichResponseImageURL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIRichResponseImageURL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseImageURL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseImageURL
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ForwardedAIBotMessageInfo. */
    interface IForwardedAIBotMessageInfo {

        /** ForwardedAIBotMessageInfo botName */
        botName?: (string|null);

        /** ForwardedAIBotMessageInfo botJid */
        botJid?: (string|null);

        /** ForwardedAIBotMessageInfo creatorName */
        creatorName?: (string|null);
    }

    /** Represents a ForwardedAIBotMessageInfo. */
    class ForwardedAIBotMessageInfo implements IForwardedAIBotMessageInfo {

        /**
         * Constructs a new ForwardedAIBotMessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IForwardedAIBotMessageInfo);

        /** ForwardedAIBotMessageInfo botName. */
        public botName?: (string|null);

        /** ForwardedAIBotMessageInfo botJid. */
        public botJid?: (string|null);

        /** ForwardedAIBotMessageInfo creatorName. */
        public creatorName?: (string|null);

        /** ForwardedAIBotMessageInfo _botName. */
        public _botName?: "botName";

        /** ForwardedAIBotMessageInfo _botJid. */
        public _botJid?: "botJid";

        /** ForwardedAIBotMessageInfo _creatorName. */
        public _creatorName?: "creatorName";

        /**
         * Creates a new ForwardedAIBotMessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForwardedAIBotMessageInfo instance
         */
        public static create(properties?: AICommon.IForwardedAIBotMessageInfo): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Encodes the specified ForwardedAIBotMessageInfo message. Does not implicitly {@link AICommon.ForwardedAIBotMessageInfo.verify|verify} messages.
         * @param message ForwardedAIBotMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IForwardedAIBotMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForwardedAIBotMessageInfo message, length delimited. Does not implicitly {@link AICommon.ForwardedAIBotMessageInfo.verify|verify} messages.
         * @param message ForwardedAIBotMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IForwardedAIBotMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForwardedAIBotMessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForwardedAIBotMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Decodes a ForwardedAIBotMessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForwardedAIBotMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Verifies a ForwardedAIBotMessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForwardedAIBotMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForwardedAIBotMessageInfo
         */
        public static fromObject(object: { [k: string]: any }): AICommon.ForwardedAIBotMessageInfo;

        /**
         * Creates a plain object from a ForwardedAIBotMessageInfo message. Also converts values to other types if specified.
         * @param message ForwardedAIBotMessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.ForwardedAIBotMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForwardedAIBotMessageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ForwardedAIBotMessageInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotFeedbackMessage. */
    interface IBotFeedbackMessage {

        /** BotFeedbackMessage messageKey */
        messageKey?: (Protocol.IMessageKey|null);

        /** BotFeedbackMessage kind */
        kind?: (AICommon.BotFeedbackMessage.BotFeedbackKind|null);

        /** BotFeedbackMessage text */
        text?: (string|null);

        /** BotFeedbackMessage kindNegative */
        kindNegative?: (number|Long|null);

        /** BotFeedbackMessage kindPositive */
        kindPositive?: (number|Long|null);

        /** BotFeedbackMessage kindReport */
        kindReport?: (AICommon.BotFeedbackMessage.ReportKind|null);

        /** BotFeedbackMessage sideBySideSurveyMetadata */
        sideBySideSurveyMetadata?: (AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata|null);
    }

    /** Represents a BotFeedbackMessage. */
    class BotFeedbackMessage implements IBotFeedbackMessage {

        /**
         * Constructs a new BotFeedbackMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotFeedbackMessage);

        /** BotFeedbackMessage messageKey. */
        public messageKey?: (Protocol.IMessageKey|null);

        /** BotFeedbackMessage kind. */
        public kind?: (AICommon.BotFeedbackMessage.BotFeedbackKind|null);

        /** BotFeedbackMessage text. */
        public text?: (string|null);

        /** BotFeedbackMessage kindNegative. */
        public kindNegative?: (number|Long|null);

        /** BotFeedbackMessage kindPositive. */
        public kindPositive?: (number|Long|null);

        /** BotFeedbackMessage kindReport. */
        public kindReport?: (AICommon.BotFeedbackMessage.ReportKind|null);

        /** BotFeedbackMessage sideBySideSurveyMetadata. */
        public sideBySideSurveyMetadata?: (AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata|null);

        /** BotFeedbackMessage _messageKey. */
        public _messageKey?: "messageKey";

        /** BotFeedbackMessage _kind. */
        public _kind?: "kind";

        /** BotFeedbackMessage _text. */
        public _text?: "text";

        /** BotFeedbackMessage _kindNegative. */
        public _kindNegative?: "kindNegative";

        /** BotFeedbackMessage _kindPositive. */
        public _kindPositive?: "kindPositive";

        /** BotFeedbackMessage _kindReport. */
        public _kindReport?: "kindReport";

        /** BotFeedbackMessage _sideBySideSurveyMetadata. */
        public _sideBySideSurveyMetadata?: "sideBySideSurveyMetadata";

        /**
         * Creates a new BotFeedbackMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotFeedbackMessage instance
         */
        public static create(properties?: AICommon.IBotFeedbackMessage): AICommon.BotFeedbackMessage;

        /**
         * Encodes the specified BotFeedbackMessage message. Does not implicitly {@link AICommon.BotFeedbackMessage.verify|verify} messages.
         * @param message BotFeedbackMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotFeedbackMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotFeedbackMessage message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.verify|verify} messages.
         * @param message BotFeedbackMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotFeedbackMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotFeedbackMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotFeedbackMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage;

        /**
         * Decodes a BotFeedbackMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotFeedbackMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage;

        /**
         * Verifies a BotFeedbackMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotFeedbackMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotFeedbackMessage
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage;

        /**
         * Creates a plain object from a BotFeedbackMessage message. Also converts values to other types if specified.
         * @param message BotFeedbackMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotFeedbackMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotFeedbackMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotFeedbackMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotFeedbackMessage {

        /** BotFeedbackKind enum. */
        enum BotFeedbackKind {
            BOT_FEEDBACK_POSITIVE = 0,
            BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
            BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
            BOT_FEEDBACK_NEGATIVE_SAFE = 5,
            BOT_FEEDBACK_NEGATIVE_OTHER = 6,
            BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
            BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
            BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
            BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,
            BOT_FEEDBACK_NEGATIVE_CLARITY = 11,
            BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,
            BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,
            BOT_FEEDBACK_NEGATIVE = 14
        }

        /** BotFeedbackKindMultipleNegative enum. */
        enum BotFeedbackKindMultipleNegative {
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256
        }

        /** BotFeedbackKindMultiplePositive enum. */
        enum BotFeedbackKindMultiplePositive {
            BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1
        }

        /** ReportKind enum. */
        enum ReportKind {
            NONE = 0,
            GENERIC = 1
        }

        /** Properties of a SideBySideSurveyMetadata. */
        interface ISideBySideSurveyMetadata {

            /** SideBySideSurveyMetadata selectedRequestId */
            selectedRequestId?: (string|null);

            /** SideBySideSurveyMetadata surveyId */
            surveyId?: (number|null);

            /** SideBySideSurveyMetadata simonSessionFbid */
            simonSessionFbid?: (string|null);

            /** SideBySideSurveyMetadata responseOtid */
            responseOtid?: (string|null);

            /** SideBySideSurveyMetadata responseTimestampMsString */
            responseTimestampMsString?: (string|null);

            /** SideBySideSurveyMetadata isSelectedResponsePrimary */
            isSelectedResponsePrimary?: (boolean|null);

            /** SideBySideSurveyMetadata messageIdToEdit */
            messageIdToEdit?: (string|null);

            /** SideBySideSurveyMetadata analyticsData */
            analyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData|null);
        }

        /** Represents a SideBySideSurveyMetadata. */
        class SideBySideSurveyMetadata implements ISideBySideSurveyMetadata {

            /**
             * Constructs a new SideBySideSurveyMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata);

            /** SideBySideSurveyMetadata selectedRequestId. */
            public selectedRequestId?: (string|null);

            /** SideBySideSurveyMetadata surveyId. */
            public surveyId?: (number|null);

            /** SideBySideSurveyMetadata simonSessionFbid. */
            public simonSessionFbid?: (string|null);

            /** SideBySideSurveyMetadata responseOtid. */
            public responseOtid?: (string|null);

            /** SideBySideSurveyMetadata responseTimestampMsString. */
            public responseTimestampMsString?: (string|null);

            /** SideBySideSurveyMetadata isSelectedResponsePrimary. */
            public isSelectedResponsePrimary?: (boolean|null);

            /** SideBySideSurveyMetadata messageIdToEdit. */
            public messageIdToEdit?: (string|null);

            /** SideBySideSurveyMetadata analyticsData. */
            public analyticsData?: (AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData|null);

            /** SideBySideSurveyMetadata _selectedRequestId. */
            public _selectedRequestId?: "selectedRequestId";

            /** SideBySideSurveyMetadata _surveyId. */
            public _surveyId?: "surveyId";

            /** SideBySideSurveyMetadata _simonSessionFbid. */
            public _simonSessionFbid?: "simonSessionFbid";

            /** SideBySideSurveyMetadata _responseOtid. */
            public _responseOtid?: "responseOtid";

            /** SideBySideSurveyMetadata _responseTimestampMsString. */
            public _responseTimestampMsString?: "responseTimestampMsString";

            /** SideBySideSurveyMetadata _isSelectedResponsePrimary. */
            public _isSelectedResponsePrimary?: "isSelectedResponsePrimary";

            /** SideBySideSurveyMetadata _messageIdToEdit. */
            public _messageIdToEdit?: "messageIdToEdit";

            /** SideBySideSurveyMetadata _analyticsData. */
            public _analyticsData?: "analyticsData";

            /**
             * Creates a new SideBySideSurveyMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideBySideSurveyMetadata instance
             */
            public static create(properties?: AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Encodes the specified SideBySideSurveyMetadata message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.verify|verify} messages.
             * @param message SideBySideSurveyMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideBySideSurveyMetadata message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.verify|verify} messages.
             * @param message SideBySideSurveyMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotFeedbackMessage.ISideBySideSurveyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideBySideSurveyMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SideBySideSurveyMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Decodes a SideBySideSurveyMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SideBySideSurveyMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Verifies a SideBySideSurveyMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SideBySideSurveyMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SideBySideSurveyMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata;

            /**
             * Creates a plain object from a SideBySideSurveyMetadata message. Also converts values to other types if specified.
             * @param message SideBySideSurveyMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SideBySideSurveyMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SideBySideSurveyMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SideBySideSurveyMetadata {

            /** Properties of a SideBySideSurveyAnalyticsData. */
            interface ISideBySideSurveyAnalyticsData {

                /** SideBySideSurveyAnalyticsData tessaEvent */
                tessaEvent?: (string|null);

                /** SideBySideSurveyAnalyticsData tessaSessionFbid */
                tessaSessionFbid?: (string|null);
            }

            /** Represents a SideBySideSurveyAnalyticsData. */
            class SideBySideSurveyAnalyticsData implements ISideBySideSurveyAnalyticsData {

                /**
                 * Constructs a new SideBySideSurveyAnalyticsData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData);

                /** SideBySideSurveyAnalyticsData tessaEvent. */
                public tessaEvent?: (string|null);

                /** SideBySideSurveyAnalyticsData tessaSessionFbid. */
                public tessaSessionFbid?: (string|null);

                /** SideBySideSurveyAnalyticsData _tessaEvent. */
                public _tessaEvent?: "tessaEvent";

                /** SideBySideSurveyAnalyticsData _tessaSessionFbid. */
                public _tessaSessionFbid?: "tessaSessionFbid";

                /**
                 * Creates a new SideBySideSurveyAnalyticsData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SideBySideSurveyAnalyticsData instance
                 */
                public static create(properties?: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Encodes the specified SideBySideSurveyAnalyticsData message. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.verify|verify} messages.
                 * @param message SideBySideSurveyAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SideBySideSurveyAnalyticsData message, length delimited. Does not implicitly {@link AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.verify|verify} messages.
                 * @param message SideBySideSurveyAnalyticsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SideBySideSurveyAnalyticsData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SideBySideSurveyAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Decodes a SideBySideSurveyAnalyticsData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SideBySideSurveyAnalyticsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Verifies a SideBySideSurveyAnalyticsData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SideBySideSurveyAnalyticsData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SideBySideSurveyAnalyticsData
                 */
                public static fromObject(object: { [k: string]: any }): AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;

                /**
                 * Creates a plain object from a SideBySideSurveyAnalyticsData message. Also converts values to other types if specified.
                 * @param message SideBySideSurveyAnalyticsData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SideBySideSurveyAnalyticsData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SideBySideSurveyAnalyticsData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a BotMetadata. */
    interface IBotMetadata {

        /** BotMetadata avatarMetadata */
        avatarMetadata?: (AICommon.IBotAvatarMetadata|null);

        /** BotMetadata personaId */
        personaId?: (string|null);

        /** BotMetadata pluginMetadata */
        pluginMetadata?: (AICommon.IBotPluginMetadata|null);

        /** BotMetadata suggestedPromptMetadata */
        suggestedPromptMetadata?: (AICommon.IBotSuggestedPromptMetadata|null);

        /** BotMetadata invokerJid */
        invokerJid?: (string|null);

        /** BotMetadata sessionMetadata */
        sessionMetadata?: (AICommon.IBotSessionMetadata|null);

        /** BotMetadata memuMetadata */
        memuMetadata?: (AICommon.IBotMemuMetadata|null);

        /** BotMetadata timezone */
        timezone?: (string|null);

        /** BotMetadata reminderMetadata */
        reminderMetadata?: (AICommon.IBotReminderMetadata|null);

        /** BotMetadata modelMetadata */
        modelMetadata?: (AICommon.IBotModelMetadata|null);

        /** BotMetadata messageDisclaimerText */
        messageDisclaimerText?: (string|null);

        /** BotMetadata progressIndicatorMetadata */
        progressIndicatorMetadata?: (AICommon.IBotProgressIndicatorMetadata|null);

        /** BotMetadata capabilityMetadata */
        capabilityMetadata?: (AICommon.IBotCapabilityMetadata|null);

        /** BotMetadata imagineMetadata */
        imagineMetadata?: (AICommon.IBotImagineMetadata|null);

        /** BotMetadata memoryMetadata */
        memoryMetadata?: (AICommon.IBotMemoryMetadata|null);

        /** BotMetadata renderingMetadata */
        renderingMetadata?: (AICommon.IBotRenderingMetadata|null);

        /** BotMetadata botMetricsMetadata */
        botMetricsMetadata?: (AICommon.IBotMetricsMetadata|null);

        /** BotMetadata botLinkedAccountsMetadata */
        botLinkedAccountsMetadata?: (AICommon.IBotLinkedAccountsMetadata|null);

        /** BotMetadata richResponseSourcesMetadata */
        richResponseSourcesMetadata?: (AICommon.IBotSourcesMetadata|null);

        /** BotMetadata aiConversationContext */
        aiConversationContext?: (Uint8Array|null);

        /** BotMetadata botPromotionMessageMetadata */
        botPromotionMessageMetadata?: (AICommon.IBotPromotionMessageMetadata|null);

        /** BotMetadata botModeSelectionMetadata */
        botModeSelectionMetadata?: (AICommon.IBotModeSelectionMetadata|null);

        /** BotMetadata botQuotaMetadata */
        botQuotaMetadata?: (AICommon.IBotQuotaMetadata|null);

        /** BotMetadata botAgeCollectionMetadata */
        botAgeCollectionMetadata?: (AICommon.IBotAgeCollectionMetadata|null);

        /** BotMetadata conversationStarterPromptId */
        conversationStarterPromptId?: (string|null);

        /** BotMetadata botResponseId */
        botResponseId?: (string|null);

        /** BotMetadata verificationMetadata */
        verificationMetadata?: (AICommon.IBotSignatureVerificationMetadata|null);

        /** BotMetadata unifiedResponseMutation */
        unifiedResponseMutation?: (AICommon.IBotUnifiedResponseMutation|null);

        /** BotMetadata botMessageOriginMetadata */
        botMessageOriginMetadata?: (AICommon.IBotMessageOriginMetadata|null);

        /** BotMetadata inThreadSurveyMetadata */
        inThreadSurveyMetadata?: (AICommon.IInThreadSurveyMetadata|null);

        /** BotMetadata botThreadInfo */
        botThreadInfo?: (AICommon.IAIThreadInfo|null);

        /** BotMetadata internalMetadata */
        internalMetadata?: (Uint8Array|null);
    }

    /** Represents a BotMetadata. */
    class BotMetadata implements IBotMetadata {

        /**
         * Constructs a new BotMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMetadata);

        /** BotMetadata avatarMetadata. */
        public avatarMetadata?: (AICommon.IBotAvatarMetadata|null);

        /** BotMetadata personaId. */
        public personaId?: (string|null);

        /** BotMetadata pluginMetadata. */
        public pluginMetadata?: (AICommon.IBotPluginMetadata|null);

        /** BotMetadata suggestedPromptMetadata. */
        public suggestedPromptMetadata?: (AICommon.IBotSuggestedPromptMetadata|null);

        /** BotMetadata invokerJid. */
        public invokerJid?: (string|null);

        /** BotMetadata sessionMetadata. */
        public sessionMetadata?: (AICommon.IBotSessionMetadata|null);

        /** BotMetadata memuMetadata. */
        public memuMetadata?: (AICommon.IBotMemuMetadata|null);

        /** BotMetadata timezone. */
        public timezone?: (string|null);

        /** BotMetadata reminderMetadata. */
        public reminderMetadata?: (AICommon.IBotReminderMetadata|null);

        /** BotMetadata modelMetadata. */
        public modelMetadata?: (AICommon.IBotModelMetadata|null);

        /** BotMetadata messageDisclaimerText. */
        public messageDisclaimerText?: (string|null);

        /** BotMetadata progressIndicatorMetadata. */
        public progressIndicatorMetadata?: (AICommon.IBotProgressIndicatorMetadata|null);

        /** BotMetadata capabilityMetadata. */
        public capabilityMetadata?: (AICommon.IBotCapabilityMetadata|null);

        /** BotMetadata imagineMetadata. */
        public imagineMetadata?: (AICommon.IBotImagineMetadata|null);

        /** BotMetadata memoryMetadata. */
        public memoryMetadata?: (AICommon.IBotMemoryMetadata|null);

        /** BotMetadata renderingMetadata. */
        public renderingMetadata?: (AICommon.IBotRenderingMetadata|null);

        /** BotMetadata botMetricsMetadata. */
        public botMetricsMetadata?: (AICommon.IBotMetricsMetadata|null);

        /** BotMetadata botLinkedAccountsMetadata. */
        public botLinkedAccountsMetadata?: (AICommon.IBotLinkedAccountsMetadata|null);

        /** BotMetadata richResponseSourcesMetadata. */
        public richResponseSourcesMetadata?: (AICommon.IBotSourcesMetadata|null);

        /** BotMetadata aiConversationContext. */
        public aiConversationContext?: (Uint8Array|null);

        /** BotMetadata botPromotionMessageMetadata. */
        public botPromotionMessageMetadata?: (AICommon.IBotPromotionMessageMetadata|null);

        /** BotMetadata botModeSelectionMetadata. */
        public botModeSelectionMetadata?: (AICommon.IBotModeSelectionMetadata|null);

        /** BotMetadata botQuotaMetadata. */
        public botQuotaMetadata?: (AICommon.IBotQuotaMetadata|null);

        /** BotMetadata botAgeCollectionMetadata. */
        public botAgeCollectionMetadata?: (AICommon.IBotAgeCollectionMetadata|null);

        /** BotMetadata conversationStarterPromptId. */
        public conversationStarterPromptId?: (string|null);

        /** BotMetadata botResponseId. */
        public botResponseId?: (string|null);

        /** BotMetadata verificationMetadata. */
        public verificationMetadata?: (AICommon.IBotSignatureVerificationMetadata|null);

        /** BotMetadata unifiedResponseMutation. */
        public unifiedResponseMutation?: (AICommon.IBotUnifiedResponseMutation|null);

        /** BotMetadata botMessageOriginMetadata. */
        public botMessageOriginMetadata?: (AICommon.IBotMessageOriginMetadata|null);

        /** BotMetadata inThreadSurveyMetadata. */
        public inThreadSurveyMetadata?: (AICommon.IInThreadSurveyMetadata|null);

        /** BotMetadata botThreadInfo. */
        public botThreadInfo?: (AICommon.IAIThreadInfo|null);

        /** BotMetadata internalMetadata. */
        public internalMetadata?: (Uint8Array|null);

        /** BotMetadata _avatarMetadata. */
        public _avatarMetadata?: "avatarMetadata";

        /** BotMetadata _personaId. */
        public _personaId?: "personaId";

        /** BotMetadata _pluginMetadata. */
        public _pluginMetadata?: "pluginMetadata";

        /** BotMetadata _suggestedPromptMetadata. */
        public _suggestedPromptMetadata?: "suggestedPromptMetadata";

        /** BotMetadata _invokerJid. */
        public _invokerJid?: "invokerJid";

        /** BotMetadata _sessionMetadata. */
        public _sessionMetadata?: "sessionMetadata";

        /** BotMetadata _memuMetadata. */
        public _memuMetadata?: "memuMetadata";

        /** BotMetadata _timezone. */
        public _timezone?: "timezone";

        /** BotMetadata _reminderMetadata. */
        public _reminderMetadata?: "reminderMetadata";

        /** BotMetadata _modelMetadata. */
        public _modelMetadata?: "modelMetadata";

        /** BotMetadata _messageDisclaimerText. */
        public _messageDisclaimerText?: "messageDisclaimerText";

        /** BotMetadata _progressIndicatorMetadata. */
        public _progressIndicatorMetadata?: "progressIndicatorMetadata";

        /** BotMetadata _capabilityMetadata. */
        public _capabilityMetadata?: "capabilityMetadata";

        /** BotMetadata _imagineMetadata. */
        public _imagineMetadata?: "imagineMetadata";

        /** BotMetadata _memoryMetadata. */
        public _memoryMetadata?: "memoryMetadata";

        /** BotMetadata _renderingMetadata. */
        public _renderingMetadata?: "renderingMetadata";

        /** BotMetadata _botMetricsMetadata. */
        public _botMetricsMetadata?: "botMetricsMetadata";

        /** BotMetadata _botLinkedAccountsMetadata. */
        public _botLinkedAccountsMetadata?: "botLinkedAccountsMetadata";

        /** BotMetadata _richResponseSourcesMetadata. */
        public _richResponseSourcesMetadata?: "richResponseSourcesMetadata";

        /** BotMetadata _aiConversationContext. */
        public _aiConversationContext?: "aiConversationContext";

        /** BotMetadata _botPromotionMessageMetadata. */
        public _botPromotionMessageMetadata?: "botPromotionMessageMetadata";

        /** BotMetadata _botModeSelectionMetadata. */
        public _botModeSelectionMetadata?: "botModeSelectionMetadata";

        /** BotMetadata _botQuotaMetadata. */
        public _botQuotaMetadata?: "botQuotaMetadata";

        /** BotMetadata _botAgeCollectionMetadata. */
        public _botAgeCollectionMetadata?: "botAgeCollectionMetadata";

        /** BotMetadata _conversationStarterPromptId. */
        public _conversationStarterPromptId?: "conversationStarterPromptId";

        /** BotMetadata _botResponseId. */
        public _botResponseId?: "botResponseId";

        /** BotMetadata _verificationMetadata. */
        public _verificationMetadata?: "verificationMetadata";

        /** BotMetadata _unifiedResponseMutation. */
        public _unifiedResponseMutation?: "unifiedResponseMutation";

        /** BotMetadata _botMessageOriginMetadata. */
        public _botMessageOriginMetadata?: "botMessageOriginMetadata";

        /** BotMetadata _inThreadSurveyMetadata. */
        public _inThreadSurveyMetadata?: "inThreadSurveyMetadata";

        /** BotMetadata _botThreadInfo. */
        public _botThreadInfo?: "botThreadInfo";

        /** BotMetadata _internalMetadata. */
        public _internalMetadata?: "internalMetadata";

        /**
         * Creates a new BotMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetadata instance
         */
        public static create(properties?: AICommon.IBotMetadata): AICommon.BotMetadata;

        /**
         * Encodes the specified BotMetadata message. Does not implicitly {@link AICommon.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetadata message, length delimited. Does not implicitly {@link AICommon.BotMetadata.verify|verify} messages.
         * @param message BotMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMetadata;

        /**
         * Decodes a BotMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMetadata;

        /**
         * Verifies a BotMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMetadata;

        /**
         * Creates a plain object from a BotMetadata message. Also converts values to other types if specified.
         * @param message BotMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIThreadInfo. */
    interface IAIThreadInfo {

        /** AIThreadInfo serverInfo */
        serverInfo?: (AICommon.AIThreadInfo.IAIThreadServerInfo|null);

        /** AIThreadInfo clientInfo */
        clientInfo?: (AICommon.AIThreadInfo.IAIThreadClientInfo|null);
    }

    /** Represents a AIThreadInfo. */
    class AIThreadInfo implements IAIThreadInfo {

        /**
         * Constructs a new AIThreadInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IAIThreadInfo);

        /** AIThreadInfo serverInfo. */
        public serverInfo?: (AICommon.AIThreadInfo.IAIThreadServerInfo|null);

        /** AIThreadInfo clientInfo. */
        public clientInfo?: (AICommon.AIThreadInfo.IAIThreadClientInfo|null);

        /** AIThreadInfo _serverInfo. */
        public _serverInfo?: "serverInfo";

        /** AIThreadInfo _clientInfo. */
        public _clientInfo?: "clientInfo";

        /**
         * Creates a new AIThreadInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIThreadInfo instance
         */
        public static create(properties?: AICommon.IAIThreadInfo): AICommon.AIThreadInfo;

        /**
         * Encodes the specified AIThreadInfo message. Does not implicitly {@link AICommon.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IAIThreadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIThreadInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.verify|verify} messages.
         * @param message AIThreadInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IAIThreadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo;

        /**
         * Decodes a AIThreadInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIThreadInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo;

        /**
         * Verifies a AIThreadInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIThreadInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIThreadInfo
         */
        public static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo;

        /**
         * Creates a plain object from a AIThreadInfo message. Also converts values to other types if specified.
         * @param message AIThreadInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.AIThreadInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIThreadInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIThreadInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIThreadInfo {

        /** Properties of a AIThreadClientInfo. */
        interface IAIThreadClientInfo {

            /** AIThreadClientInfo type */
            type?: (AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);
        }

        /** Represents a AIThreadClientInfo. */
        class AIThreadClientInfo implements IAIThreadClientInfo {

            /**
             * Constructs a new AIThreadClientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIThreadInfo.IAIThreadClientInfo);

            /** AIThreadClientInfo type. */
            public type?: (AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);

            /** AIThreadClientInfo _type. */
            public _type?: "type";

            /**
             * Creates a new AIThreadClientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadClientInfo instance
             */
            public static create(properties?: AICommon.AIThreadInfo.IAIThreadClientInfo): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Encodes the specified AIThreadClientInfo message. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIThreadInfo.IAIThreadClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadClientInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadClientInfo.verify|verify} messages.
             * @param message AIThreadClientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIThreadInfo.IAIThreadClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Decodes a AIThreadClientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIThreadClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Verifies a AIThreadClientInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIThreadClientInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIThreadClientInfo
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo.AIThreadClientInfo;

            /**
             * Creates a plain object from a AIThreadClientInfo message. Also converts values to other types if specified.
             * @param message AIThreadClientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIThreadInfo.AIThreadClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIThreadClientInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIThreadClientInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AIThreadClientInfo {

            /** AIThreadType enum. */
            enum AIThreadType {
                UNKNOWN = 0,
                DEFAULT = 1,
                INCOGNITO = 2
            }
        }

        /** Properties of a AIThreadServerInfo. */
        interface IAIThreadServerInfo {

            /** AIThreadServerInfo title */
            title?: (string|null);
        }

        /** Represents a AIThreadServerInfo. */
        class AIThreadServerInfo implements IAIThreadServerInfo {

            /**
             * Constructs a new AIThreadServerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.AIThreadInfo.IAIThreadServerInfo);

            /** AIThreadServerInfo title. */
            public title?: (string|null);

            /** AIThreadServerInfo _title. */
            public _title?: "title";

            /**
             * Creates a new AIThreadServerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIThreadServerInfo instance
             */
            public static create(properties?: AICommon.AIThreadInfo.IAIThreadServerInfo): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Encodes the specified AIThreadServerInfo message. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.AIThreadInfo.IAIThreadServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIThreadServerInfo message, length delimited. Does not implicitly {@link AICommon.AIThreadInfo.AIThreadServerInfo.verify|verify} messages.
             * @param message AIThreadServerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.AIThreadInfo.IAIThreadServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Decodes a AIThreadServerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIThreadServerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Verifies a AIThreadServerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIThreadServerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIThreadServerInfo
             */
            public static fromObject(object: { [k: string]: any }): AICommon.AIThreadInfo.AIThreadServerInfo;

            /**
             * Creates a plain object from a AIThreadServerInfo message. Also converts values to other types if specified.
             * @param message AIThreadServerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.AIThreadInfo.AIThreadServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIThreadServerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIThreadServerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BotUnifiedResponseMutation. */
    interface IBotUnifiedResponseMutation {

        /** BotUnifiedResponseMutation sbsMetadata */
        sbsMetadata?: (AICommon.BotUnifiedResponseMutation.ISideBySideMetadata|null);

        /** BotUnifiedResponseMutation mediaDetailsMetadataList */
        mediaDetailsMetadataList?: (AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata[]|null);
    }

    /** Represents a BotUnifiedResponseMutation. */
    class BotUnifiedResponseMutation implements IBotUnifiedResponseMutation {

        /**
         * Constructs a new BotUnifiedResponseMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotUnifiedResponseMutation);

        /** BotUnifiedResponseMutation sbsMetadata. */
        public sbsMetadata?: (AICommon.BotUnifiedResponseMutation.ISideBySideMetadata|null);

        /** BotUnifiedResponseMutation mediaDetailsMetadataList. */
        public mediaDetailsMetadataList: AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata[];

        /** BotUnifiedResponseMutation _sbsMetadata. */
        public _sbsMetadata?: "sbsMetadata";

        /**
         * Creates a new BotUnifiedResponseMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotUnifiedResponseMutation instance
         */
        public static create(properties?: AICommon.IBotUnifiedResponseMutation): AICommon.BotUnifiedResponseMutation;

        /**
         * Encodes the specified BotUnifiedResponseMutation message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotUnifiedResponseMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotUnifiedResponseMutation message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.verify|verify} messages.
         * @param message BotUnifiedResponseMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotUnifiedResponseMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation;

        /**
         * Decodes a BotUnifiedResponseMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotUnifiedResponseMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation;

        /**
         * Verifies a BotUnifiedResponseMutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotUnifiedResponseMutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotUnifiedResponseMutation
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation;

        /**
         * Creates a plain object from a BotUnifiedResponseMutation message. Also converts values to other types if specified.
         * @param message BotUnifiedResponseMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotUnifiedResponseMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotUnifiedResponseMutation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotUnifiedResponseMutation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotUnifiedResponseMutation {

        /** Properties of a MediaDetailsMetadata. */
        interface IMediaDetailsMetadata {

            /** MediaDetailsMetadata id */
            id?: (string|null);

            /** MediaDetailsMetadata highResMedia */
            highResMedia?: (AICommon.IBotMediaMetadata|null);

            /** MediaDetailsMetadata previewMedia */
            previewMedia?: (AICommon.IBotMediaMetadata|null);
        }

        /** Represents a MediaDetailsMetadata. */
        class MediaDetailsMetadata implements IMediaDetailsMetadata {

            /**
             * Constructs a new MediaDetailsMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata);

            /** MediaDetailsMetadata id. */
            public id?: (string|null);

            /** MediaDetailsMetadata highResMedia. */
            public highResMedia?: (AICommon.IBotMediaMetadata|null);

            /** MediaDetailsMetadata previewMedia. */
            public previewMedia?: (AICommon.IBotMediaMetadata|null);

            /** MediaDetailsMetadata _id. */
            public _id?: "id";

            /** MediaDetailsMetadata _highResMedia. */
            public _highResMedia?: "highResMedia";

            /** MediaDetailsMetadata _previewMedia. */
            public _previewMedia?: "previewMedia";

            /**
             * Creates a new MediaDetailsMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MediaDetailsMetadata instance
             */
            public static create(properties?: AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Encodes the specified MediaDetailsMetadata message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.verify|verify} messages.
             * @param message MediaDetailsMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MediaDetailsMetadata message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.verify|verify} messages.
             * @param message MediaDetailsMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MediaDetailsMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MediaDetailsMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Decodes a MediaDetailsMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MediaDetailsMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Verifies a MediaDetailsMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MediaDetailsMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MediaDetailsMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;

            /**
             * Creates a plain object from a MediaDetailsMetadata message. Also converts values to other types if specified.
             * @param message MediaDetailsMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MediaDetailsMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MediaDetailsMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SideBySideMetadata. */
        interface ISideBySideMetadata {

            /** SideBySideMetadata primaryResponseId */
            primaryResponseId?: (string|null);
        }

        /** Represents a SideBySideMetadata. */
        class SideBySideMetadata implements ISideBySideMetadata {

            /**
             * Constructs a new SideBySideMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotUnifiedResponseMutation.ISideBySideMetadata);

            /** SideBySideMetadata primaryResponseId. */
            public primaryResponseId?: (string|null);

            /** SideBySideMetadata _primaryResponseId. */
            public _primaryResponseId?: "primaryResponseId";

            /**
             * Creates a new SideBySideMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideBySideMetadata instance
             */
            public static create(properties?: AICommon.BotUnifiedResponseMutation.ISideBySideMetadata): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Encodes the specified SideBySideMetadata message. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotUnifiedResponseMutation.ISideBySideMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideBySideMetadata message, length delimited. Does not implicitly {@link AICommon.BotUnifiedResponseMutation.SideBySideMetadata.verify|verify} messages.
             * @param message SideBySideMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotUnifiedResponseMutation.ISideBySideMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Decodes a SideBySideMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SideBySideMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Verifies a SideBySideMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SideBySideMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SideBySideMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotUnifiedResponseMutation.SideBySideMetadata;

            /**
             * Creates a plain object from a SideBySideMetadata message. Also converts values to other types if specified.
             * @param message SideBySideMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotUnifiedResponseMutation.SideBySideMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SideBySideMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SideBySideMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BotMessageOrigin. */
    interface IBotMessageOrigin {

        /** BotMessageOrigin type */
        type?: (AICommon.BotMessageOrigin.BotMessageOriginType|null);
    }

    /** Represents a BotMessageOrigin. */
    class BotMessageOrigin implements IBotMessageOrigin {

        /**
         * Constructs a new BotMessageOrigin.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMessageOrigin);

        /** BotMessageOrigin type. */
        public type?: (AICommon.BotMessageOrigin.BotMessageOriginType|null);

        /** BotMessageOrigin _type. */
        public _type?: "type";

        /**
         * Creates a new BotMessageOrigin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOrigin instance
         */
        public static create(properties?: AICommon.IBotMessageOrigin): AICommon.BotMessageOrigin;

        /**
         * Encodes the specified BotMessageOrigin message. Does not implicitly {@link AICommon.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMessageOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOrigin message, length delimited. Does not implicitly {@link AICommon.BotMessageOrigin.verify|verify} messages.
         * @param message BotMessageOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMessageOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMessageOrigin;

        /**
         * Decodes a BotMessageOrigin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMessageOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMessageOrigin;

        /**
         * Verifies a BotMessageOrigin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMessageOrigin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMessageOrigin
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMessageOrigin;

        /**
         * Creates a plain object from a BotMessageOrigin message. Also converts values to other types if specified.
         * @param message BotMessageOrigin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMessageOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMessageOrigin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMessageOrigin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotMessageOrigin {

        /** BotMessageOriginType enum. */
        enum BotMessageOriginType {
            BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0
        }
    }

    /** Properties of a BotMessageOriginMetadata. */
    interface IBotMessageOriginMetadata {

        /** BotMessageOriginMetadata origins */
        origins?: (AICommon.IBotMessageOrigin[]|null);
    }

    /** Represents a BotMessageOriginMetadata. */
    class BotMessageOriginMetadata implements IBotMessageOriginMetadata {

        /**
         * Constructs a new BotMessageOriginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMessageOriginMetadata);

        /** BotMessageOriginMetadata origins. */
        public origins: AICommon.IBotMessageOrigin[];

        /**
         * Creates a new BotMessageOriginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMessageOriginMetadata instance
         */
        public static create(properties?: AICommon.IBotMessageOriginMetadata): AICommon.BotMessageOriginMetadata;

        /**
         * Encodes the specified BotMessageOriginMetadata message. Does not implicitly {@link AICommon.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMessageOriginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMessageOriginMetadata message, length delimited. Does not implicitly {@link AICommon.BotMessageOriginMetadata.verify|verify} messages.
         * @param message BotMessageOriginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMessageOriginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMessageOriginMetadata;

        /**
         * Decodes a BotMessageOriginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMessageOriginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMessageOriginMetadata;

        /**
         * Verifies a BotMessageOriginMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMessageOriginMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMessageOriginMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMessageOriginMetadata;

        /**
         * Creates a plain object from a BotMessageOriginMetadata message. Also converts values to other types if specified.
         * @param message BotMessageOriginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMessageOriginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMessageOriginMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMessageOriginMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InThreadSurveyMetadata. */
    interface IInThreadSurveyMetadata {

        /** InThreadSurveyMetadata tessaSessionId */
        tessaSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSessionId */
        simonSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSurveyId */
        simonSurveyId?: (string|null);

        /** InThreadSurveyMetadata tessaRootId */
        tessaRootId?: (string|null);

        /** InThreadSurveyMetadata requestId */
        requestId?: (string|null);

        /** InThreadSurveyMetadata tessaEvent */
        tessaEvent?: (string|null);

        /** InThreadSurveyMetadata invitationHeaderText */
        invitationHeaderText?: (string|null);

        /** InThreadSurveyMetadata invitationBodyText */
        invitationBodyText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaText */
        invitationCtaText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaUrl */
        invitationCtaUrl?: (string|null);

        /** InThreadSurveyMetadata surveyTitle */
        surveyTitle?: (string|null);

        /** InThreadSurveyMetadata questions */
        questions?: (AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion[]|null);

        /** InThreadSurveyMetadata surveyContinueButtonText */
        surveyContinueButtonText?: (string|null);

        /** InThreadSurveyMetadata surveySubmitButtonText */
        surveySubmitButtonText?: (string|null);

        /** InThreadSurveyMetadata privacyStatementFull */
        privacyStatementFull?: (string|null);

        /** InThreadSurveyMetadata privacyStatementParts */
        privacyStatementParts?: (AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart[]|null);

        /** InThreadSurveyMetadata feedbackToastText */
        feedbackToastText?: (string|null);
    }

    /** Represents an InThreadSurveyMetadata. */
    class InThreadSurveyMetadata implements IInThreadSurveyMetadata {

        /**
         * Constructs a new InThreadSurveyMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IInThreadSurveyMetadata);

        /** InThreadSurveyMetadata tessaSessionId. */
        public tessaSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSessionId. */
        public simonSessionId?: (string|null);

        /** InThreadSurveyMetadata simonSurveyId. */
        public simonSurveyId?: (string|null);

        /** InThreadSurveyMetadata tessaRootId. */
        public tessaRootId?: (string|null);

        /** InThreadSurveyMetadata requestId. */
        public requestId?: (string|null);

        /** InThreadSurveyMetadata tessaEvent. */
        public tessaEvent?: (string|null);

        /** InThreadSurveyMetadata invitationHeaderText. */
        public invitationHeaderText?: (string|null);

        /** InThreadSurveyMetadata invitationBodyText. */
        public invitationBodyText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaText. */
        public invitationCtaText?: (string|null);

        /** InThreadSurveyMetadata invitationCtaUrl. */
        public invitationCtaUrl?: (string|null);

        /** InThreadSurveyMetadata surveyTitle. */
        public surveyTitle?: (string|null);

        /** InThreadSurveyMetadata questions. */
        public questions: AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion[];

        /** InThreadSurveyMetadata surveyContinueButtonText. */
        public surveyContinueButtonText?: (string|null);

        /** InThreadSurveyMetadata surveySubmitButtonText. */
        public surveySubmitButtonText?: (string|null);

        /** InThreadSurveyMetadata privacyStatementFull. */
        public privacyStatementFull?: (string|null);

        /** InThreadSurveyMetadata privacyStatementParts. */
        public privacyStatementParts: AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart[];

        /** InThreadSurveyMetadata feedbackToastText. */
        public feedbackToastText?: (string|null);

        /** InThreadSurveyMetadata _tessaSessionId. */
        public _tessaSessionId?: "tessaSessionId";

        /** InThreadSurveyMetadata _simonSessionId. */
        public _simonSessionId?: "simonSessionId";

        /** InThreadSurveyMetadata _simonSurveyId. */
        public _simonSurveyId?: "simonSurveyId";

        /** InThreadSurveyMetadata _tessaRootId. */
        public _tessaRootId?: "tessaRootId";

        /** InThreadSurveyMetadata _requestId. */
        public _requestId?: "requestId";

        /** InThreadSurveyMetadata _tessaEvent. */
        public _tessaEvent?: "tessaEvent";

        /** InThreadSurveyMetadata _invitationHeaderText. */
        public _invitationHeaderText?: "invitationHeaderText";

        /** InThreadSurveyMetadata _invitationBodyText. */
        public _invitationBodyText?: "invitationBodyText";

        /** InThreadSurveyMetadata _invitationCtaText. */
        public _invitationCtaText?: "invitationCtaText";

        /** InThreadSurveyMetadata _invitationCtaUrl. */
        public _invitationCtaUrl?: "invitationCtaUrl";

        /** InThreadSurveyMetadata _surveyTitle. */
        public _surveyTitle?: "surveyTitle";

        /** InThreadSurveyMetadata _surveyContinueButtonText. */
        public _surveyContinueButtonText?: "surveyContinueButtonText";

        /** InThreadSurveyMetadata _surveySubmitButtonText. */
        public _surveySubmitButtonText?: "surveySubmitButtonText";

        /** InThreadSurveyMetadata _privacyStatementFull. */
        public _privacyStatementFull?: "privacyStatementFull";

        /** InThreadSurveyMetadata _feedbackToastText. */
        public _feedbackToastText?: "feedbackToastText";

        /**
         * Creates a new InThreadSurveyMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InThreadSurveyMetadata instance
         */
        public static create(properties?: AICommon.IInThreadSurveyMetadata): AICommon.InThreadSurveyMetadata;

        /**
         * Encodes the specified InThreadSurveyMetadata message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IInThreadSurveyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InThreadSurveyMetadata message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.verify|verify} messages.
         * @param message InThreadSurveyMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IInThreadSurveyMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata;

        /**
         * Decodes an InThreadSurveyMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InThreadSurveyMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata;

        /**
         * Verifies an InThreadSurveyMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InThreadSurveyMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InThreadSurveyMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata;

        /**
         * Creates a plain object from an InThreadSurveyMetadata message. Also converts values to other types if specified.
         * @param message InThreadSurveyMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.InThreadSurveyMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InThreadSurveyMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InThreadSurveyMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InThreadSurveyMetadata {

        /** Properties of an InThreadSurveyOption. */
        interface IInThreadSurveyOption {

            /** InThreadSurveyOption stringValue */
            stringValue?: (string|null);

            /** InThreadSurveyOption numericValue */
            numericValue?: (number|null);

            /** InThreadSurveyOption textTranslated */
            textTranslated?: (string|null);
        }

        /** Represents an InThreadSurveyOption. */
        class InThreadSurveyOption implements IInThreadSurveyOption {

            /**
             * Constructs a new InThreadSurveyOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyOption);

            /** InThreadSurveyOption stringValue. */
            public stringValue?: (string|null);

            /** InThreadSurveyOption numericValue. */
            public numericValue?: (number|null);

            /** InThreadSurveyOption textTranslated. */
            public textTranslated?: (string|null);

            /** InThreadSurveyOption _stringValue. */
            public _stringValue?: "stringValue";

            /** InThreadSurveyOption _numericValue. */
            public _numericValue?: "numericValue";

            /** InThreadSurveyOption _textTranslated. */
            public _textTranslated?: "textTranslated";

            /**
             * Creates a new InThreadSurveyOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyOption instance
             */
            public static create(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyOption): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Encodes the specified InThreadSurveyOption message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyOption message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyOption.verify|verify} messages.
             * @param message InThreadSurveyOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Decodes an InThreadSurveyOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InThreadSurveyOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Verifies an InThreadSurveyOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyOption
             */
            public static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyOption;

            /**
             * Creates a plain object from an InThreadSurveyOption message. Also converts values to other types if specified.
             * @param message InThreadSurveyOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InThreadSurveyOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InThreadSurveyPrivacyStatementPart. */
        interface IInThreadSurveyPrivacyStatementPart {

            /** InThreadSurveyPrivacyStatementPart text */
            text?: (string|null);

            /** InThreadSurveyPrivacyStatementPart url */
            url?: (string|null);
        }

        /** Represents an InThreadSurveyPrivacyStatementPart. */
        class InThreadSurveyPrivacyStatementPart implements IInThreadSurveyPrivacyStatementPart {

            /**
             * Constructs a new InThreadSurveyPrivacyStatementPart.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart);

            /** InThreadSurveyPrivacyStatementPart text. */
            public text?: (string|null);

            /** InThreadSurveyPrivacyStatementPart url. */
            public url?: (string|null);

            /** InThreadSurveyPrivacyStatementPart _text. */
            public _text?: "text";

            /** InThreadSurveyPrivacyStatementPart _url. */
            public _url?: "url";

            /**
             * Creates a new InThreadSurveyPrivacyStatementPart instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyPrivacyStatementPart instance
             */
            public static create(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyPrivacyStatementPart message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.verify|verify} messages.
             * @param message InThreadSurveyPrivacyStatementPart message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Decodes an InThreadSurveyPrivacyStatementPart message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InThreadSurveyPrivacyStatementPart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Verifies an InThreadSurveyPrivacyStatementPart message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyPrivacyStatementPart message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyPrivacyStatementPart
             */
            public static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;

            /**
             * Creates a plain object from an InThreadSurveyPrivacyStatementPart message. Also converts values to other types if specified.
             * @param message InThreadSurveyPrivacyStatementPart
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyPrivacyStatementPart to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InThreadSurveyPrivacyStatementPart
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InThreadSurveyQuestion. */
        interface IInThreadSurveyQuestion {

            /** InThreadSurveyQuestion questionText */
            questionText?: (string|null);

            /** InThreadSurveyQuestion questionId */
            questionId?: (string|null);

            /** InThreadSurveyQuestion questionOptions */
            questionOptions?: (AICommon.InThreadSurveyMetadata.IInThreadSurveyOption[]|null);
        }

        /** Represents an InThreadSurveyQuestion. */
        class InThreadSurveyQuestion implements IInThreadSurveyQuestion {

            /**
             * Constructs a new InThreadSurveyQuestion.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion);

            /** InThreadSurveyQuestion questionText. */
            public questionText?: (string|null);

            /** InThreadSurveyQuestion questionId. */
            public questionId?: (string|null);

            /** InThreadSurveyQuestion questionOptions. */
            public questionOptions: AICommon.InThreadSurveyMetadata.IInThreadSurveyOption[];

            /** InThreadSurveyQuestion _questionText. */
            public _questionText?: "questionText";

            /** InThreadSurveyQuestion _questionId. */
            public _questionId?: "questionId";

            /**
             * Creates a new InThreadSurveyQuestion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InThreadSurveyQuestion instance
             */
            public static create(properties?: AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Encodes the specified InThreadSurveyQuestion message. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InThreadSurveyQuestion message, length delimited. Does not implicitly {@link AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.verify|verify} messages.
             * @param message InThreadSurveyQuestion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Decodes an InThreadSurveyQuestion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InThreadSurveyQuestion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Verifies an InThreadSurveyQuestion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InThreadSurveyQuestion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InThreadSurveyQuestion
             */
            public static fromObject(object: { [k: string]: any }): AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;

            /**
             * Creates a plain object from an InThreadSurveyQuestion message. Also converts values to other types if specified.
             * @param message InThreadSurveyQuestion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InThreadSurveyQuestion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InThreadSurveyQuestion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BotSourcesMetadata. */
    interface IBotSourcesMetadata {

        /** BotSourcesMetadata sources */
        sources?: (AICommon.BotSourcesMetadata.IBotSourceItem[]|null);
    }

    /** Represents a BotSourcesMetadata. */
    class BotSourcesMetadata implements IBotSourcesMetadata {

        /**
         * Constructs a new BotSourcesMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotSourcesMetadata);

        /** BotSourcesMetadata sources. */
        public sources: AICommon.BotSourcesMetadata.IBotSourceItem[];

        /**
         * Creates a new BotSourcesMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSourcesMetadata instance
         */
        public static create(properties?: AICommon.IBotSourcesMetadata): AICommon.BotSourcesMetadata;

        /**
         * Encodes the specified BotSourcesMetadata message. Does not implicitly {@link AICommon.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotSourcesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSourcesMetadata message, length delimited. Does not implicitly {@link AICommon.BotSourcesMetadata.verify|verify} messages.
         * @param message BotSourcesMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotSourcesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSourcesMetadata;

        /**
         * Decodes a BotSourcesMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSourcesMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSourcesMetadata;

        /**
         * Verifies a BotSourcesMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSourcesMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSourcesMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotSourcesMetadata;

        /**
         * Creates a plain object from a BotSourcesMetadata message. Also converts values to other types if specified.
         * @param message BotSourcesMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSourcesMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSourcesMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotSourcesMetadata {

        /** Properties of a BotSourceItem. */
        interface IBotSourceItem {

            /** BotSourceItem provider */
            provider?: (AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

            /** BotSourceItem thumbnailCdnUrl */
            thumbnailCdnUrl?: (string|null);

            /** BotSourceItem sourceProviderUrl */
            sourceProviderUrl?: (string|null);

            /** BotSourceItem sourceQuery */
            sourceQuery?: (string|null);

            /** BotSourceItem faviconCdnUrl */
            faviconCdnUrl?: (string|null);

            /** BotSourceItem citationNumber */
            citationNumber?: (number|null);

            /** BotSourceItem sourceTitle */
            sourceTitle?: (string|null);
        }

        /** Represents a BotSourceItem. */
        class BotSourceItem implements IBotSourceItem {

            /**
             * Constructs a new BotSourceItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotSourcesMetadata.IBotSourceItem);

            /** BotSourceItem provider. */
            public provider?: (AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);

            /** BotSourceItem thumbnailCdnUrl. */
            public thumbnailCdnUrl?: (string|null);

            /** BotSourceItem sourceProviderUrl. */
            public sourceProviderUrl?: (string|null);

            /** BotSourceItem sourceQuery. */
            public sourceQuery?: (string|null);

            /** BotSourceItem faviconCdnUrl. */
            public faviconCdnUrl?: (string|null);

            /** BotSourceItem citationNumber. */
            public citationNumber?: (number|null);

            /** BotSourceItem sourceTitle. */
            public sourceTitle?: (string|null);

            /** BotSourceItem _provider. */
            public _provider?: "provider";

            /** BotSourceItem _thumbnailCdnUrl. */
            public _thumbnailCdnUrl?: "thumbnailCdnUrl";

            /** BotSourceItem _sourceProviderUrl. */
            public _sourceProviderUrl?: "sourceProviderUrl";

            /** BotSourceItem _sourceQuery. */
            public _sourceQuery?: "sourceQuery";

            /** BotSourceItem _faviconCdnUrl. */
            public _faviconCdnUrl?: "faviconCdnUrl";

            /** BotSourceItem _citationNumber. */
            public _citationNumber?: "citationNumber";

            /** BotSourceItem _sourceTitle. */
            public _sourceTitle?: "sourceTitle";

            /**
             * Creates a new BotSourceItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotSourceItem instance
             */
            public static create(properties?: AICommon.BotSourcesMetadata.IBotSourceItem): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Encodes the specified BotSourceItem message. Does not implicitly {@link AICommon.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotSourcesMetadata.IBotSourceItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotSourceItem message, length delimited. Does not implicitly {@link AICommon.BotSourcesMetadata.BotSourceItem.verify|verify} messages.
             * @param message BotSourceItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotSourcesMetadata.IBotSourceItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Decodes a BotSourceItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BotSourceItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Verifies a BotSourceItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotSourceItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotSourceItem
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotSourcesMetadata.BotSourceItem;

            /**
             * Creates a plain object from a BotSourceItem message. Also converts values to other types if specified.
             * @param message BotSourceItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotSourcesMetadata.BotSourceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotSourceItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BotSourceItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotSourceItem {

            /** SourceProvider enum. */
            enum SourceProvider {
                UNKNOWN = 0,
                BING = 1,
                GOOGLE = 2,
                SUPPORT = 3,
                OTHER = 4
            }
        }
    }

    /** Properties of a BotAgeCollectionMetadata. */
    interface IBotAgeCollectionMetadata {

        /** BotAgeCollectionMetadata ageCollectionEligible */
        ageCollectionEligible?: (boolean|null);

        /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient */
        shouldTriggerAgeCollectionOnClient?: (boolean|null);
    }

    /** Represents a BotAgeCollectionMetadata. */
    class BotAgeCollectionMetadata implements IBotAgeCollectionMetadata {

        /**
         * Constructs a new BotAgeCollectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotAgeCollectionMetadata);

        /** BotAgeCollectionMetadata ageCollectionEligible. */
        public ageCollectionEligible?: (boolean|null);

        /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient. */
        public shouldTriggerAgeCollectionOnClient?: (boolean|null);

        /** BotAgeCollectionMetadata _ageCollectionEligible. */
        public _ageCollectionEligible?: "ageCollectionEligible";

        /** BotAgeCollectionMetadata _shouldTriggerAgeCollectionOnClient. */
        public _shouldTriggerAgeCollectionOnClient?: "shouldTriggerAgeCollectionOnClient";

        /**
         * Creates a new BotAgeCollectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAgeCollectionMetadata instance
         */
        public static create(properties?: AICommon.IBotAgeCollectionMetadata): AICommon.BotAgeCollectionMetadata;

        /**
         * Encodes the specified BotAgeCollectionMetadata message. Does not implicitly {@link AICommon.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotAgeCollectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAgeCollectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotAgeCollectionMetadata.verify|verify} messages.
         * @param message BotAgeCollectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotAgeCollectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotAgeCollectionMetadata;

        /**
         * Decodes a BotAgeCollectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotAgeCollectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotAgeCollectionMetadata;

        /**
         * Verifies a BotAgeCollectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAgeCollectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAgeCollectionMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotAgeCollectionMetadata;

        /**
         * Creates a plain object from a BotAgeCollectionMetadata message. Also converts values to other types if specified.
         * @param message BotAgeCollectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotAgeCollectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAgeCollectionMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotAgeCollectionMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotImagineMetadata. */
    interface IBotImagineMetadata {

        /** BotImagineMetadata imagineType */
        imagineType?: (AICommon.BotImagineMetadata.ImagineType|null);
    }

    /** Represents a BotImagineMetadata. */
    class BotImagineMetadata implements IBotImagineMetadata {

        /**
         * Constructs a new BotImagineMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotImagineMetadata);

        /** BotImagineMetadata imagineType. */
        public imagineType?: (AICommon.BotImagineMetadata.ImagineType|null);

        /** BotImagineMetadata _imagineType. */
        public _imagineType?: "imagineType";

        /**
         * Creates a new BotImagineMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotImagineMetadata instance
         */
        public static create(properties?: AICommon.IBotImagineMetadata): AICommon.BotImagineMetadata;

        /**
         * Encodes the specified BotImagineMetadata message. Does not implicitly {@link AICommon.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotImagineMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotImagineMetadata message, length delimited. Does not implicitly {@link AICommon.BotImagineMetadata.verify|verify} messages.
         * @param message BotImagineMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotImagineMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotImagineMetadata;

        /**
         * Decodes a BotImagineMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotImagineMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotImagineMetadata;

        /**
         * Verifies a BotImagineMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotImagineMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotImagineMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotImagineMetadata;

        /**
         * Creates a plain object from a BotImagineMetadata message. Also converts values to other types if specified.
         * @param message BotImagineMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotImagineMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotImagineMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotImagineMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotImagineMetadata {

        /** ImagineType enum. */
        enum ImagineType {
            UNKNOWN = 0,
            IMAGINE = 1,
            MEMU = 2,
            FLASH = 3,
            EDIT = 4
        }
    }

    /** Properties of a BotQuotaMetadata. */
    interface IBotQuotaMetadata {

        /** BotQuotaMetadata botFeatureQuotaMetadata */
        botFeatureQuotaMetadata?: (AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata[]|null);
    }

    /** Represents a BotQuotaMetadata. */
    class BotQuotaMetadata implements IBotQuotaMetadata {

        /**
         * Constructs a new BotQuotaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotQuotaMetadata);

        /** BotQuotaMetadata botFeatureQuotaMetadata. */
        public botFeatureQuotaMetadata: AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata[];

        /**
         * Creates a new BotQuotaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotQuotaMetadata instance
         */
        public static create(properties?: AICommon.IBotQuotaMetadata): AICommon.BotQuotaMetadata;

        /**
         * Encodes the specified BotQuotaMetadata message. Does not implicitly {@link AICommon.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotQuotaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotQuotaMetadata message, length delimited. Does not implicitly {@link AICommon.BotQuotaMetadata.verify|verify} messages.
         * @param message BotQuotaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotQuotaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotQuotaMetadata;

        /**
         * Decodes a BotQuotaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotQuotaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotQuotaMetadata;

        /**
         * Verifies a BotQuotaMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotQuotaMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotQuotaMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotQuotaMetadata;

        /**
         * Creates a plain object from a BotQuotaMetadata message. Also converts values to other types if specified.
         * @param message BotQuotaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotQuotaMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotQuotaMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotQuotaMetadata {

        /** Properties of a BotFeatureQuotaMetadata. */
        interface IBotFeatureQuotaMetadata {

            /** BotFeatureQuotaMetadata featureType */
            featureType?: (AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

            /** BotFeatureQuotaMetadata remainingQuota */
            remainingQuota?: (number|null);

            /** BotFeatureQuotaMetadata expirationTimestamp */
            expirationTimestamp?: (number|Long|null);
        }

        /** Represents a BotFeatureQuotaMetadata. */
        class BotFeatureQuotaMetadata implements IBotFeatureQuotaMetadata {

            /**
             * Constructs a new BotFeatureQuotaMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata);

            /** BotFeatureQuotaMetadata featureType. */
            public featureType?: (AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);

            /** BotFeatureQuotaMetadata remainingQuota. */
            public remainingQuota?: (number|null);

            /** BotFeatureQuotaMetadata expirationTimestamp. */
            public expirationTimestamp?: (number|Long|null);

            /** BotFeatureQuotaMetadata _featureType. */
            public _featureType?: "featureType";

            /** BotFeatureQuotaMetadata _remainingQuota. */
            public _remainingQuota?: "remainingQuota";

            /** BotFeatureQuotaMetadata _expirationTimestamp. */
            public _expirationTimestamp?: "expirationTimestamp";

            /**
             * Creates a new BotFeatureQuotaMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotFeatureQuotaMetadata instance
             */
            public static create(properties?: AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message. Does not implicitly {@link AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotFeatureQuotaMetadata message, length delimited. Does not implicitly {@link AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.verify|verify} messages.
             * @param message BotFeatureQuotaMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Decodes a BotFeatureQuotaMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BotFeatureQuotaMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Verifies a BotFeatureQuotaMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotFeatureQuotaMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotFeatureQuotaMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;

            /**
             * Creates a plain object from a BotFeatureQuotaMetadata message. Also converts values to other types if specified.
             * @param message BotFeatureQuotaMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotFeatureQuotaMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BotFeatureQuotaMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotFeatureQuotaMetadata {

            /** BotFeatureType enum. */
            enum BotFeatureType {
                UNKNOWN_FEATURE = 0,
                REASONING_FEATURE = 1
            }
        }
    }

    /** Properties of a BotModeSelectionMetadata. */
    interface IBotModeSelectionMetadata {

        /** BotModeSelectionMetadata mode */
        mode?: (AICommon.BotModeSelectionMetadata.BotUserSelectionMode[]|null);
    }

    /** Represents a BotModeSelectionMetadata. */
    class BotModeSelectionMetadata implements IBotModeSelectionMetadata {

        /**
         * Constructs a new BotModeSelectionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotModeSelectionMetadata);

        /** BotModeSelectionMetadata mode. */
        public mode: AICommon.BotModeSelectionMetadata.BotUserSelectionMode[];

        /**
         * Creates a new BotModeSelectionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModeSelectionMetadata instance
         */
        public static create(properties?: AICommon.IBotModeSelectionMetadata): AICommon.BotModeSelectionMetadata;

        /**
         * Encodes the specified BotModeSelectionMetadata message. Does not implicitly {@link AICommon.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotModeSelectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModeSelectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotModeSelectionMetadata.verify|verify} messages.
         * @param message BotModeSelectionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotModeSelectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotModeSelectionMetadata;

        /**
         * Decodes a BotModeSelectionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotModeSelectionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotModeSelectionMetadata;

        /**
         * Verifies a BotModeSelectionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotModeSelectionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotModeSelectionMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotModeSelectionMetadata;

        /**
         * Creates a plain object from a BotModeSelectionMetadata message. Also converts values to other types if specified.
         * @param message BotModeSelectionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotModeSelectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotModeSelectionMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotModeSelectionMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotModeSelectionMetadata {

        /** BotUserSelectionMode enum. */
        enum BotUserSelectionMode {
            UNKNOWN_MODE = 0,
            REASONING_MODE = 1
        }
    }

    /** Properties of a BotCapabilityMetadata. */
    interface IBotCapabilityMetadata {

        /** BotCapabilityMetadata capabilities */
        capabilities?: (AICommon.BotCapabilityMetadata.BotCapabilityType[]|null);
    }

    /** Represents a BotCapabilityMetadata. */
    class BotCapabilityMetadata implements IBotCapabilityMetadata {

        /**
         * Constructs a new BotCapabilityMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotCapabilityMetadata);

        /** BotCapabilityMetadata capabilities. */
        public capabilities: AICommon.BotCapabilityMetadata.BotCapabilityType[];

        /**
         * Creates a new BotCapabilityMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotCapabilityMetadata instance
         */
        public static create(properties?: AICommon.IBotCapabilityMetadata): AICommon.BotCapabilityMetadata;

        /**
         * Encodes the specified BotCapabilityMetadata message. Does not implicitly {@link AICommon.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotCapabilityMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotCapabilityMetadata message, length delimited. Does not implicitly {@link AICommon.BotCapabilityMetadata.verify|verify} messages.
         * @param message BotCapabilityMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotCapabilityMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotCapabilityMetadata;

        /**
         * Decodes a BotCapabilityMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotCapabilityMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotCapabilityMetadata;

        /**
         * Verifies a BotCapabilityMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotCapabilityMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotCapabilityMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotCapabilityMetadata;

        /**
         * Creates a plain object from a BotCapabilityMetadata message. Also converts values to other types if specified.
         * @param message BotCapabilityMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotCapabilityMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotCapabilityMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotCapabilityMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotCapabilityMetadata {

        /** BotCapabilityType enum. */
        enum BotCapabilityType {
            UNKNOWN = 0,
            PROGRESS_INDICATOR = 1,
            RICH_RESPONSE_HEADING = 2,
            RICH_RESPONSE_NESTED_LIST = 3,
            AI_MEMORY = 4,
            RICH_RESPONSE_THREAD_SURFING = 5,
            RICH_RESPONSE_TABLE = 6,
            RICH_RESPONSE_CODE = 7,
            RICH_RESPONSE_STRUCTURED_RESPONSE = 8,
            RICH_RESPONSE_INLINE_IMAGE = 9,
            WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,
            RICH_RESPONSE_SUB_HEADING = 21,
            RICH_RESPONSE_GRID_IMAGE = 22,
            AI_STUDIO_UGC_MEMORY = 23,
            RICH_RESPONSE_LATEX = 24,
            RICH_RESPONSE_MAPS = 25,
            RICH_RESPONSE_INLINE_REELS = 26,
            AGENTIC_PLANNING = 27,
            ACCOUNT_LINKING = 28,
            STREAMING_DISAGGREGATION = 29,
            RICH_RESPONSE_GRID_IMAGE_3P = 30,
            RICH_RESPONSE_LATEX_INLINE = 31,
            QUERY_PLAN = 32,
            PROACTIVE_MESSAGE = 33,
            RICH_RESPONSE_UNIFIED_RESPONSE = 34,
            PROMOTION_MESSAGE = 35,
            SIMPLIFIED_PROFILE_PAGE = 36,
            RICH_RESPONSE_SOURCES_IN_MESSAGE = 37,
            RICH_RESPONSE_SIDE_BY_SIDE_SURVEY = 38,
            RICH_RESPONSE_UNIFIED_TEXT_COMPONENT = 39,
            AI_SHARED_MEMORY = 40,
            RICH_RESPONSE_UNIFIED_SOURCES = 41,
            RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42,
            RICH_RESPONSE_UR_INLINE_REELS_ENABLED = 43,
            RICH_RESPONSE_UR_MEDIA_GRID_ENABLED = 44,
            RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER = 45
        }
    }

    /** Properties of a BotProgressIndicatorMetadata. */
    interface IBotProgressIndicatorMetadata {

        /** BotProgressIndicatorMetadata progressDescription */
        progressDescription?: (string|null);

        /** BotProgressIndicatorMetadata stepsMetadata */
        stepsMetadata?: (AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata[]|null);
    }

    /** Represents a BotProgressIndicatorMetadata. */
    class BotProgressIndicatorMetadata implements IBotProgressIndicatorMetadata {

        /**
         * Constructs a new BotProgressIndicatorMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotProgressIndicatorMetadata);

        /** BotProgressIndicatorMetadata progressDescription. */
        public progressDescription?: (string|null);

        /** BotProgressIndicatorMetadata stepsMetadata. */
        public stepsMetadata: AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata[];

        /** BotProgressIndicatorMetadata _progressDescription. */
        public _progressDescription?: "progressDescription";

        /**
         * Creates a new BotProgressIndicatorMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotProgressIndicatorMetadata instance
         */
        public static create(properties?: AICommon.IBotProgressIndicatorMetadata): AICommon.BotProgressIndicatorMetadata;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotProgressIndicatorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotProgressIndicatorMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.verify|verify} messages.
         * @param message BotProgressIndicatorMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotProgressIndicatorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata;

        /**
         * Decodes a BotProgressIndicatorMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotProgressIndicatorMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata;

        /**
         * Verifies a BotProgressIndicatorMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotProgressIndicatorMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotProgressIndicatorMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata;

        /**
         * Creates a plain object from a BotProgressIndicatorMetadata message. Also converts values to other types if specified.
         * @param message BotProgressIndicatorMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotProgressIndicatorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotProgressIndicatorMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotProgressIndicatorMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotProgressIndicatorMetadata {

        /** Properties of a BotPlanningStepMetadata. */
        interface IBotPlanningStepMetadata {

            /** BotPlanningStepMetadata statusTitle */
            statusTitle?: (string|null);

            /** BotPlanningStepMetadata statusBody */
            statusBody?: (string|null);

            /** BotPlanningStepMetadata sourcesMetadata */
            sourcesMetadata?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata[]|null);

            /** BotPlanningStepMetadata status */
            status?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

            /** BotPlanningStepMetadata isReasoning */
            isReasoning?: (boolean|null);

            /** BotPlanningStepMetadata isEnhancedSearch */
            isEnhancedSearch?: (boolean|null);

            /** BotPlanningStepMetadata sections */
            sections?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata[]|null);
        }

        /** Represents a BotPlanningStepMetadata. */
        class BotPlanningStepMetadata implements IBotPlanningStepMetadata {

            /**
             * Constructs a new BotPlanningStepMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata);

            /** BotPlanningStepMetadata statusTitle. */
            public statusTitle?: (string|null);

            /** BotPlanningStepMetadata statusBody. */
            public statusBody?: (string|null);

            /** BotPlanningStepMetadata sourcesMetadata. */
            public sourcesMetadata: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata[];

            /** BotPlanningStepMetadata status. */
            public status?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);

            /** BotPlanningStepMetadata isReasoning. */
            public isReasoning?: (boolean|null);

            /** BotPlanningStepMetadata isEnhancedSearch. */
            public isEnhancedSearch?: (boolean|null);

            /** BotPlanningStepMetadata sections. */
            public sections: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata[];

            /** BotPlanningStepMetadata _statusTitle. */
            public _statusTitle?: "statusTitle";

            /** BotPlanningStepMetadata _statusBody. */
            public _statusBody?: "statusBody";

            /** BotPlanningStepMetadata _status. */
            public _status?: "status";

            /** BotPlanningStepMetadata _isReasoning. */
            public _isReasoning?: "isReasoning";

            /** BotPlanningStepMetadata _isEnhancedSearch. */
            public _isEnhancedSearch?: "isEnhancedSearch";

            /**
             * Creates a new BotPlanningStepMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BotPlanningStepMetadata instance
             */
            public static create(properties?: AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Encodes the specified BotPlanningStepMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BotPlanningStepMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.verify|verify} messages.
             * @param message BotPlanningStepMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Decodes a BotPlanningStepMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BotPlanningStepMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Verifies a BotPlanningStepMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BotPlanningStepMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BotPlanningStepMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;

            /**
             * Creates a plain object from a BotPlanningStepMetadata message. Also converts values to other types if specified.
             * @param message BotPlanningStepMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BotPlanningStepMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BotPlanningStepMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotPlanningStepMetadata {

            /** Properties of a BotPlanningSearchSourceMetadata. */
            interface IBotPlanningSearchSourceMetadata {

                /** BotPlanningSearchSourceMetadata title */
                title?: (string|null);

                /** BotPlanningSearchSourceMetadata provider */
                provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                /** BotPlanningSearchSourceMetadata sourceUrl */
                sourceUrl?: (string|null);

                /** BotPlanningSearchSourceMetadata favIconUrl */
                favIconUrl?: (string|null);
            }

            /** Represents a BotPlanningSearchSourceMetadata. */
            class BotPlanningSearchSourceMetadata implements IBotPlanningSearchSourceMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourceMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata);

                /** BotPlanningSearchSourceMetadata title. */
                public title?: (string|null);

                /** BotPlanningSearchSourceMetadata provider. */
                public provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);

                /** BotPlanningSearchSourceMetadata sourceUrl. */
                public sourceUrl?: (string|null);

                /** BotPlanningSearchSourceMetadata favIconUrl. */
                public favIconUrl?: (string|null);

                /** BotPlanningSearchSourceMetadata _title. */
                public _title?: "title";

                /** BotPlanningSearchSourceMetadata _provider. */
                public _provider?: "provider";

                /** BotPlanningSearchSourceMetadata _sourceUrl. */
                public _sourceUrl?: "sourceUrl";

                /** BotPlanningSearchSourceMetadata _favIconUrl. */
                public _favIconUrl?: "favIconUrl";

                /**
                 * Creates a new BotPlanningSearchSourceMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourceMetadata instance
                 */
                public static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourceMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourceMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Decodes a BotPlanningSearchSourceMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BotPlanningSearchSourceMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Verifies a BotPlanningSearchSourceMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningSearchSourceMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningSearchSourceMetadata
                 */
                public static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourceMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourceMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningSearchSourceMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BotPlanningSearchSourceMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BotPlanningSearchSourcesMetadata. */
            interface IBotPlanningSearchSourcesMetadata {

                /** BotPlanningSearchSourcesMetadata sourceTitle */
                sourceTitle?: (string|null);

                /** BotPlanningSearchSourcesMetadata provider */
                provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                /** BotPlanningSearchSourcesMetadata sourceUrl */
                sourceUrl?: (string|null);
            }

            /** Represents a BotPlanningSearchSourcesMetadata. */
            class BotPlanningSearchSourcesMetadata implements IBotPlanningSearchSourcesMetadata {

                /**
                 * Constructs a new BotPlanningSearchSourcesMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata);

                /** BotPlanningSearchSourcesMetadata sourceTitle. */
                public sourceTitle?: (string|null);

                /** BotPlanningSearchSourcesMetadata provider. */
                public provider?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);

                /** BotPlanningSearchSourcesMetadata sourceUrl. */
                public sourceUrl?: (string|null);

                /** BotPlanningSearchSourcesMetadata _sourceTitle. */
                public _sourceTitle?: "sourceTitle";

                /** BotPlanningSearchSourcesMetadata _provider. */
                public _provider?: "provider";

                /** BotPlanningSearchSourcesMetadata _sourceUrl. */
                public _sourceUrl?: "sourceUrl";

                /**
                 * Creates a new BotPlanningSearchSourcesMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningSearchSourcesMetadata instance
                 */
                public static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningSearchSourcesMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.verify|verify} messages.
                 * @param message BotPlanningSearchSourcesMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Decodes a BotPlanningSearchSourcesMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BotPlanningSearchSourcesMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Verifies a BotPlanningSearchSourcesMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningSearchSourcesMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningSearchSourcesMetadata
                 */
                public static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;

                /**
                 * Creates a plain object from a BotPlanningSearchSourcesMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningSearchSourcesMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningSearchSourcesMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BotPlanningSearchSourcesMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BotPlanningSearchSourcesMetadata {

                /** BotPlanningSearchSourceProvider enum. */
                enum BotPlanningSearchSourceProvider {
                    UNKNOWN = 0,
                    OTHER = 1,
                    GOOGLE = 2,
                    BING = 3
                }
            }

            /** Properties of a BotPlanningStepSectionMetadata. */
            interface IBotPlanningStepSectionMetadata {

                /** BotPlanningStepSectionMetadata sectionTitle */
                sectionTitle?: (string|null);

                /** BotPlanningStepSectionMetadata sectionBody */
                sectionBody?: (string|null);

                /** BotPlanningStepSectionMetadata sourcesMetadata */
                sourcesMetadata?: (AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata[]|null);
            }

            /** Represents a BotPlanningStepSectionMetadata. */
            class BotPlanningStepSectionMetadata implements IBotPlanningStepSectionMetadata {

                /**
                 * Constructs a new BotPlanningStepSectionMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata);

                /** BotPlanningStepSectionMetadata sectionTitle. */
                public sectionTitle?: (string|null);

                /** BotPlanningStepSectionMetadata sectionBody. */
                public sectionBody?: (string|null);

                /** BotPlanningStepSectionMetadata sourcesMetadata. */
                public sourcesMetadata: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata[];

                /** BotPlanningStepSectionMetadata _sectionTitle. */
                public _sectionTitle?: "sectionTitle";

                /** BotPlanningStepSectionMetadata _sectionBody. */
                public _sectionBody?: "sectionBody";

                /**
                 * Creates a new BotPlanningStepSectionMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BotPlanningStepSectionMetadata instance
                 */
                public static create(properties?: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BotPlanningStepSectionMetadata message, length delimited. Does not implicitly {@link AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.verify|verify} messages.
                 * @param message BotPlanningStepSectionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Decodes a BotPlanningStepSectionMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BotPlanningStepSectionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Verifies a BotPlanningStepSectionMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BotPlanningStepSectionMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BotPlanningStepSectionMetadata
                 */
                public static fromObject(object: { [k: string]: any }): AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;

                /**
                 * Creates a plain object from a BotPlanningStepSectionMetadata message. Also converts values to other types if specified.
                 * @param message BotPlanningStepSectionMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BotPlanningStepSectionMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BotPlanningStepSectionMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** BotSearchSourceProvider enum. */
            enum BotSearchSourceProvider {
                UNKNOWN_PROVIDER = 0,
                OTHER = 1,
                GOOGLE = 2,
                BING = 3
            }

            /** PlanningStepStatus enum. */
            enum PlanningStepStatus {
                UNKNOWN = 0,
                PLANNED = 1,
                EXECUTING = 2,
                FINISHED = 3
            }
        }
    }

    /** Properties of a BotModelMetadata. */
    interface IBotModelMetadata {

        /** BotModelMetadata modelType */
        modelType?: (AICommon.BotModelMetadata.ModelType|null);

        /** BotModelMetadata premiumModelStatus */
        premiumModelStatus?: (AICommon.BotModelMetadata.PremiumModelStatus|null);
    }

    /** Represents a BotModelMetadata. */
    class BotModelMetadata implements IBotModelMetadata {

        /**
         * Constructs a new BotModelMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotModelMetadata);

        /** BotModelMetadata modelType. */
        public modelType?: (AICommon.BotModelMetadata.ModelType|null);

        /** BotModelMetadata premiumModelStatus. */
        public premiumModelStatus?: (AICommon.BotModelMetadata.PremiumModelStatus|null);

        /** BotModelMetadata _modelType. */
        public _modelType?: "modelType";

        /** BotModelMetadata _premiumModelStatus. */
        public _premiumModelStatus?: "premiumModelStatus";

        /**
         * Creates a new BotModelMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotModelMetadata instance
         */
        public static create(properties?: AICommon.IBotModelMetadata): AICommon.BotModelMetadata;

        /**
         * Encodes the specified BotModelMetadata message. Does not implicitly {@link AICommon.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotModelMetadata message, length delimited. Does not implicitly {@link AICommon.BotModelMetadata.verify|verify} messages.
         * @param message BotModelMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotModelMetadata;

        /**
         * Decodes a BotModelMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotModelMetadata;

        /**
         * Verifies a BotModelMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotModelMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotModelMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotModelMetadata;

        /**
         * Creates a plain object from a BotModelMetadata message. Also converts values to other types if specified.
         * @param message BotModelMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotModelMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotModelMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotModelMetadata {

        /** ModelType enum. */
        enum ModelType {
            UNKNOWN_TYPE = 0,
            LLAMA_PROD = 1,
            LLAMA_PROD_PREMIUM = 2
        }

        /** PremiumModelStatus enum. */
        enum PremiumModelStatus {
            UNKNOWN_STATUS = 0,
            AVAILABLE = 1,
            QUOTA_EXCEED_LIMIT = 2
        }
    }

    /** Properties of a BotReminderMetadata. */
    interface IBotReminderMetadata {

        /** BotReminderMetadata requestMessageKey */
        requestMessageKey?: (Protocol.IMessageKey|null);

        /** BotReminderMetadata action */
        action?: (AICommon.BotReminderMetadata.ReminderAction|null);

        /** BotReminderMetadata name */
        name?: (string|null);

        /** BotReminderMetadata nextTriggerTimestamp */
        nextTriggerTimestamp?: (number|Long|null);

        /** BotReminderMetadata frequency */
        frequency?: (AICommon.BotReminderMetadata.ReminderFrequency|null);
    }

    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata implements IBotReminderMetadata {

        /**
         * Constructs a new BotReminderMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotReminderMetadata);

        /** BotReminderMetadata requestMessageKey. */
        public requestMessageKey?: (Protocol.IMessageKey|null);

        /** BotReminderMetadata action. */
        public action?: (AICommon.BotReminderMetadata.ReminderAction|null);

        /** BotReminderMetadata name. */
        public name?: (string|null);

        /** BotReminderMetadata nextTriggerTimestamp. */
        public nextTriggerTimestamp?: (number|Long|null);

        /** BotReminderMetadata frequency. */
        public frequency?: (AICommon.BotReminderMetadata.ReminderFrequency|null);

        /** BotReminderMetadata _requestMessageKey. */
        public _requestMessageKey?: "requestMessageKey";

        /** BotReminderMetadata _action. */
        public _action?: "action";

        /** BotReminderMetadata _name. */
        public _name?: "name";

        /** BotReminderMetadata _nextTriggerTimestamp. */
        public _nextTriggerTimestamp?: "nextTriggerTimestamp";

        /** BotReminderMetadata _frequency. */
        public _frequency?: "frequency";

        /**
         * Creates a new BotReminderMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReminderMetadata instance
         */
        public static create(properties?: AICommon.IBotReminderMetadata): AICommon.BotReminderMetadata;

        /**
         * Encodes the specified BotReminderMetadata message. Does not implicitly {@link AICommon.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotReminderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReminderMetadata message, length delimited. Does not implicitly {@link AICommon.BotReminderMetadata.verify|verify} messages.
         * @param message BotReminderMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotReminderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotReminderMetadata;

        /**
         * Decodes a BotReminderMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotReminderMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotReminderMetadata;

        /**
         * Verifies a BotReminderMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotReminderMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotReminderMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotReminderMetadata;

        /**
         * Creates a plain object from a BotReminderMetadata message. Also converts values to other types if specified.
         * @param message BotReminderMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotReminderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotReminderMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotReminderMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotReminderMetadata {

        /** ReminderAction enum. */
        enum ReminderAction {
            NOTIFY = 1,
            CREATE = 2,
            DELETE = 3,
            UPDATE = 4
        }

        /** ReminderFrequency enum. */
        enum ReminderFrequency {
            ONCE = 1,
            DAILY = 2,
            WEEKLY = 3,
            BIWEEKLY = 4,
            MONTHLY = 5
        }
    }

    /** Properties of a BotMemuMetadata. */
    interface IBotMemuMetadata {

        /** BotMemuMetadata faceImages */
        faceImages?: (AICommon.IBotMediaMetadata[]|null);
    }

    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata implements IBotMemuMetadata {

        /**
         * Constructs a new BotMemuMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMemuMetadata);

        /** BotMemuMetadata faceImages. */
        public faceImages: AICommon.IBotMediaMetadata[];

        /**
         * Creates a new BotMemuMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemuMetadata instance
         */
        public static create(properties?: AICommon.IBotMemuMetadata): AICommon.BotMemuMetadata;

        /**
         * Encodes the specified BotMemuMetadata message. Does not implicitly {@link AICommon.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMemuMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemuMetadata message, length delimited. Does not implicitly {@link AICommon.BotMemuMetadata.verify|verify} messages.
         * @param message BotMemuMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMemuMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemuMetadata;

        /**
         * Decodes a BotMemuMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMemuMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemuMetadata;

        /**
         * Verifies a BotMemuMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemuMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemuMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMemuMetadata;

        /**
         * Creates a plain object from a BotMemuMetadata message. Also converts values to other types if specified.
         * @param message BotMemuMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMemuMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemuMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMemuMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMediaMetadata. */
    interface IBotMediaMetadata {

        /** BotMediaMetadata fileSha256 */
        fileSha256?: (string|null);

        /** BotMediaMetadata mediaKey */
        mediaKey?: (string|null);

        /** BotMediaMetadata fileEncSha256 */
        fileEncSha256?: (string|null);

        /** BotMediaMetadata directPath */
        directPath?: (string|null);

        /** BotMediaMetadata mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** BotMediaMetadata mimetype */
        mimetype?: (string|null);

        /** BotMediaMetadata orientationType */
        orientationType?: (AICommon.BotMediaMetadata.OrientationType|null);
    }

    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata implements IBotMediaMetadata {

        /**
         * Constructs a new BotMediaMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMediaMetadata);

        /** BotMediaMetadata fileSha256. */
        public fileSha256?: (string|null);

        /** BotMediaMetadata mediaKey. */
        public mediaKey?: (string|null);

        /** BotMediaMetadata fileEncSha256. */
        public fileEncSha256?: (string|null);

        /** BotMediaMetadata directPath. */
        public directPath?: (string|null);

        /** BotMediaMetadata mediaKeyTimestamp. */
        public mediaKeyTimestamp?: (number|Long|null);

        /** BotMediaMetadata mimetype. */
        public mimetype?: (string|null);

        /** BotMediaMetadata orientationType. */
        public orientationType?: (AICommon.BotMediaMetadata.OrientationType|null);

        /** BotMediaMetadata _fileSha256. */
        public _fileSha256?: "fileSha256";

        /** BotMediaMetadata _mediaKey. */
        public _mediaKey?: "mediaKey";

        /** BotMediaMetadata _fileEncSha256. */
        public _fileEncSha256?: "fileEncSha256";

        /** BotMediaMetadata _directPath. */
        public _directPath?: "directPath";

        /** BotMediaMetadata _mediaKeyTimestamp. */
        public _mediaKeyTimestamp?: "mediaKeyTimestamp";

        /** BotMediaMetadata _mimetype. */
        public _mimetype?: "mimetype";

        /** BotMediaMetadata _orientationType. */
        public _orientationType?: "orientationType";

        /**
         * Creates a new BotMediaMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMediaMetadata instance
         */
        public static create(properties?: AICommon.IBotMediaMetadata): AICommon.BotMediaMetadata;

        /**
         * Encodes the specified BotMediaMetadata message. Does not implicitly {@link AICommon.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMediaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMediaMetadata message, length delimited. Does not implicitly {@link AICommon.BotMediaMetadata.verify|verify} messages.
         * @param message BotMediaMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMediaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMediaMetadata;

        /**
         * Decodes a BotMediaMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMediaMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMediaMetadata;

        /**
         * Verifies a BotMediaMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMediaMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMediaMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMediaMetadata;

        /**
         * Creates a plain object from a BotMediaMetadata message. Also converts values to other types if specified.
         * @param message BotMediaMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMediaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMediaMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMediaMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotMediaMetadata {

        /** OrientationType enum. */
        enum OrientationType {
            CENTER = 1,
            LEFT = 2,
            RIGHT = 3
        }
    }

    /** Properties of a BotSessionMetadata. */
    interface IBotSessionMetadata {

        /** BotSessionMetadata sessionId */
        sessionId?: (string|null);

        /** BotSessionMetadata sessionSource */
        sessionSource?: (AICommon.BotSessionSource|null);
    }

    /** Represents a BotSessionMetadata. */
    class BotSessionMetadata implements IBotSessionMetadata {

        /**
         * Constructs a new BotSessionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotSessionMetadata);

        /** BotSessionMetadata sessionId. */
        public sessionId?: (string|null);

        /** BotSessionMetadata sessionSource. */
        public sessionSource?: (AICommon.BotSessionSource|null);

        /** BotSessionMetadata _sessionId. */
        public _sessionId?: "sessionId";

        /** BotSessionMetadata _sessionSource. */
        public _sessionSource?: "sessionSource";

        /**
         * Creates a new BotSessionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSessionMetadata instance
         */
        public static create(properties?: AICommon.IBotSessionMetadata): AICommon.BotSessionMetadata;

        /**
         * Encodes the specified BotSessionMetadata message. Does not implicitly {@link AICommon.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotSessionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSessionMetadata message, length delimited. Does not implicitly {@link AICommon.BotSessionMetadata.verify|verify} messages.
         * @param message BotSessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotSessionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSessionMetadata;

        /**
         * Decodes a BotSessionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSessionMetadata;

        /**
         * Verifies a BotSessionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSessionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSessionMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotSessionMetadata;

        /**
         * Creates a plain object from a BotSessionMetadata message. Also converts values to other types if specified.
         * @param message BotSessionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotSessionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSessionMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSessionMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMetricsMetadata. */
    interface IBotMetricsMetadata {

        /** BotMetricsMetadata destinationId */
        destinationId?: (string|null);

        /** BotMetricsMetadata destinationEntryPoint */
        destinationEntryPoint?: (AICommon.BotMetricsEntryPoint|null);

        /** BotMetricsMetadata threadOrigin */
        threadOrigin?: (AICommon.BotMetricsThreadEntryPoint|null);
    }

    /** Represents a BotMetricsMetadata. */
    class BotMetricsMetadata implements IBotMetricsMetadata {

        /**
         * Constructs a new BotMetricsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMetricsMetadata);

        /** BotMetricsMetadata destinationId. */
        public destinationId?: (string|null);

        /** BotMetricsMetadata destinationEntryPoint. */
        public destinationEntryPoint?: (AICommon.BotMetricsEntryPoint|null);

        /** BotMetricsMetadata threadOrigin. */
        public threadOrigin?: (AICommon.BotMetricsThreadEntryPoint|null);

        /** BotMetricsMetadata _destinationId. */
        public _destinationId?: "destinationId";

        /** BotMetricsMetadata _destinationEntryPoint. */
        public _destinationEntryPoint?: "destinationEntryPoint";

        /** BotMetricsMetadata _threadOrigin. */
        public _threadOrigin?: "threadOrigin";

        /**
         * Creates a new BotMetricsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMetricsMetadata instance
         */
        public static create(properties?: AICommon.IBotMetricsMetadata): AICommon.BotMetricsMetadata;

        /**
         * Encodes the specified BotMetricsMetadata message. Does not implicitly {@link AICommon.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMetricsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMetricsMetadata message, length delimited. Does not implicitly {@link AICommon.BotMetricsMetadata.verify|verify} messages.
         * @param message BotMetricsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMetricsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMetricsMetadata;

        /**
         * Decodes a BotMetricsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMetricsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMetricsMetadata;

        /**
         * Verifies a BotMetricsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMetricsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMetricsMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMetricsMetadata;

        /**
         * Creates a plain object from a BotMetricsMetadata message. Also converts values to other types if specified.
         * @param message BotMetricsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMetricsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMetricsMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMetricsMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotRenderingMetadata. */
    interface IBotRenderingMetadata {

        /** BotRenderingMetadata keywords */
        keywords?: (AICommon.BotRenderingMetadata.IKeyword[]|null);
    }

    /** Represents a BotRenderingMetadata. */
    class BotRenderingMetadata implements IBotRenderingMetadata {

        /**
         * Constructs a new BotRenderingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotRenderingMetadata);

        /** BotRenderingMetadata keywords. */
        public keywords: AICommon.BotRenderingMetadata.IKeyword[];

        /**
         * Creates a new BotRenderingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotRenderingMetadata instance
         */
        public static create(properties?: AICommon.IBotRenderingMetadata): AICommon.BotRenderingMetadata;

        /**
         * Encodes the specified BotRenderingMetadata message. Does not implicitly {@link AICommon.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotRenderingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotRenderingMetadata message, length delimited. Does not implicitly {@link AICommon.BotRenderingMetadata.verify|verify} messages.
         * @param message BotRenderingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotRenderingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotRenderingMetadata;

        /**
         * Decodes a BotRenderingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotRenderingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotRenderingMetadata;

        /**
         * Verifies a BotRenderingMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotRenderingMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotRenderingMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotRenderingMetadata;

        /**
         * Creates a plain object from a BotRenderingMetadata message. Also converts values to other types if specified.
         * @param message BotRenderingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotRenderingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotRenderingMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotRenderingMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotRenderingMetadata {

        /** Properties of a Keyword. */
        interface IKeyword {

            /** Keyword value */
            value?: (string|null);

            /** Keyword associatedPrompts */
            associatedPrompts?: (string[]|null);
        }

        /** Represents a Keyword. */
        class Keyword implements IKeyword {

            /**
             * Constructs a new Keyword.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommon.BotRenderingMetadata.IKeyword);

            /** Keyword value. */
            public value?: (string|null);

            /** Keyword associatedPrompts. */
            public associatedPrompts: string[];

            /** Keyword _value. */
            public _value?: "value";

            /**
             * Creates a new Keyword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Keyword instance
             */
            public static create(properties?: AICommon.BotRenderingMetadata.IKeyword): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Encodes the specified Keyword message. Does not implicitly {@link AICommon.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommon.BotRenderingMetadata.IKeyword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Keyword message, length delimited. Does not implicitly {@link AICommon.BotRenderingMetadata.Keyword.verify|verify} messages.
             * @param message Keyword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommon.BotRenderingMetadata.IKeyword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Keyword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Decodes a Keyword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Keyword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Verifies a Keyword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Keyword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Keyword
             */
            public static fromObject(object: { [k: string]: any }): AICommon.BotRenderingMetadata.Keyword;

            /**
             * Creates a plain object from a Keyword message. Also converts values to other types if specified.
             * @param message Keyword
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommon.BotRenderingMetadata.Keyword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Keyword to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Keyword
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a BotPromotionMessageMetadata. */
    interface IBotPromotionMessageMetadata {

        /** BotPromotionMessageMetadata promotionType */
        promotionType?: (AICommon.BotPromotionMessageMetadata.BotPromotionType|null);

        /** BotPromotionMessageMetadata buttonTitle */
        buttonTitle?: (string|null);
    }

    /** Represents a BotPromotionMessageMetadata. */
    class BotPromotionMessageMetadata implements IBotPromotionMessageMetadata {

        /**
         * Constructs a new BotPromotionMessageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotPromotionMessageMetadata);

        /** BotPromotionMessageMetadata promotionType. */
        public promotionType?: (AICommon.BotPromotionMessageMetadata.BotPromotionType|null);

        /** BotPromotionMessageMetadata buttonTitle. */
        public buttonTitle?: (string|null);

        /** BotPromotionMessageMetadata _promotionType. */
        public _promotionType?: "promotionType";

        /** BotPromotionMessageMetadata _buttonTitle. */
        public _buttonTitle?: "buttonTitle";

        /**
         * Creates a new BotPromotionMessageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromotionMessageMetadata instance
         */
        public static create(properties?: AICommon.IBotPromotionMessageMetadata): AICommon.BotPromotionMessageMetadata;

        /**
         * Encodes the specified BotPromotionMessageMetadata message. Does not implicitly {@link AICommon.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotPromotionMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromotionMessageMetadata message, length delimited. Does not implicitly {@link AICommon.BotPromotionMessageMetadata.verify|verify} messages.
         * @param message BotPromotionMessageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotPromotionMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromotionMessageMetadata;

        /**
         * Decodes a BotPromotionMessageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotPromotionMessageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromotionMessageMetadata;

        /**
         * Verifies a BotPromotionMessageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromotionMessageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromotionMessageMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotPromotionMessageMetadata;

        /**
         * Creates a plain object from a BotPromotionMessageMetadata message. Also converts values to other types if specified.
         * @param message BotPromotionMessageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotPromotionMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromotionMessageMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotPromotionMessageMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotPromotionMessageMetadata {

        /** BotPromotionType enum. */
        enum BotPromotionType {
            UNKNOWN_TYPE = 0,
            C50 = 1,
            SURVEY_PLATFORM = 2
        }
    }

    /** Properties of a BotSignatureVerificationUseCaseProof. */
    interface IBotSignatureVerificationUseCaseProof {

        /** BotSignatureVerificationUseCaseProof version */
        version?: (number|null);

        /** BotSignatureVerificationUseCaseProof useCase */
        useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

        /** BotSignatureVerificationUseCaseProof signature */
        signature?: (Uint8Array|null);

        /** BotSignatureVerificationUseCaseProof certificateChain */
        certificateChain?: (Uint8Array[]|null);
    }

    /** Represents a BotSignatureVerificationUseCaseProof. */
    class BotSignatureVerificationUseCaseProof implements IBotSignatureVerificationUseCaseProof {

        /**
         * Constructs a new BotSignatureVerificationUseCaseProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotSignatureVerificationUseCaseProof);

        /** BotSignatureVerificationUseCaseProof version. */
        public version?: (number|null);

        /** BotSignatureVerificationUseCaseProof useCase. */
        public useCase?: (AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);

        /** BotSignatureVerificationUseCaseProof signature. */
        public signature?: (Uint8Array|null);

        /** BotSignatureVerificationUseCaseProof certificateChain. */
        public certificateChain: Uint8Array[];

        /** BotSignatureVerificationUseCaseProof _version. */
        public _version?: "version";

        /** BotSignatureVerificationUseCaseProof _useCase. */
        public _useCase?: "useCase";

        /** BotSignatureVerificationUseCaseProof _signature. */
        public _signature?: "signature";

        /**
         * Creates a new BotSignatureVerificationUseCaseProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationUseCaseProof instance
         */
        public static create(properties?: AICommon.IBotSignatureVerificationUseCaseProof): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotSignatureVerificationUseCaseProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationUseCaseProof message, length delimited. Does not implicitly {@link AICommon.BotSignatureVerificationUseCaseProof.verify|verify} messages.
         * @param message BotSignatureVerificationUseCaseProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotSignatureVerificationUseCaseProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Decodes a BotSignatureVerificationUseCaseProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSignatureVerificationUseCaseProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Verifies a BotSignatureVerificationUseCaseProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSignatureVerificationUseCaseProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSignatureVerificationUseCaseProof
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotSignatureVerificationUseCaseProof;

        /**
         * Creates a plain object from a BotSignatureVerificationUseCaseProof message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationUseCaseProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotSignatureVerificationUseCaseProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSignatureVerificationUseCaseProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSignatureVerificationUseCaseProof
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotSignatureVerificationUseCaseProof {

        /** BotSignatureUseCase enum. */
        enum BotSignatureUseCase {
            UNSPECIFIED = 0,
            WA_BOT_MSG = 1
        }
    }

    /** Properties of a BotSignatureVerificationMetadata. */
    interface IBotSignatureVerificationMetadata {

        /** BotSignatureVerificationMetadata proofs */
        proofs?: (AICommon.IBotSignatureVerificationUseCaseProof[]|null);
    }

    /** Represents a BotSignatureVerificationMetadata. */
    class BotSignatureVerificationMetadata implements IBotSignatureVerificationMetadata {

        /**
         * Constructs a new BotSignatureVerificationMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotSignatureVerificationMetadata);

        /** BotSignatureVerificationMetadata proofs. */
        public proofs: AICommon.IBotSignatureVerificationUseCaseProof[];

        /**
         * Creates a new BotSignatureVerificationMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSignatureVerificationMetadata instance
         */
        public static create(properties?: AICommon.IBotSignatureVerificationMetadata): AICommon.BotSignatureVerificationMetadata;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message. Does not implicitly {@link AICommon.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotSignatureVerificationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSignatureVerificationMetadata message, length delimited. Does not implicitly {@link AICommon.BotSignatureVerificationMetadata.verify|verify} messages.
         * @param message BotSignatureVerificationMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotSignatureVerificationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSignatureVerificationMetadata;

        /**
         * Decodes a BotSignatureVerificationMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSignatureVerificationMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSignatureVerificationMetadata;

        /**
         * Verifies a BotSignatureVerificationMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSignatureVerificationMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSignatureVerificationMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotSignatureVerificationMetadata;

        /**
         * Creates a plain object from a BotSignatureVerificationMetadata message. Also converts values to other types if specified.
         * @param message BotSignatureVerificationMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotSignatureVerificationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSignatureVerificationMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSignatureVerificationMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMemoryFact. */
    interface IBotMemoryFact {

        /** BotMemoryFact fact */
        fact?: (string|null);

        /** BotMemoryFact factId */
        factId?: (string|null);
    }

    /** Represents a BotMemoryFact. */
    class BotMemoryFact implements IBotMemoryFact {

        /**
         * Constructs a new BotMemoryFact.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMemoryFact);

        /** BotMemoryFact fact. */
        public fact?: (string|null);

        /** BotMemoryFact factId. */
        public factId?: (string|null);

        /** BotMemoryFact _fact. */
        public _fact?: "fact";

        /** BotMemoryFact _factId. */
        public _factId?: "factId";

        /**
         * Creates a new BotMemoryFact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemoryFact instance
         */
        public static create(properties?: AICommon.IBotMemoryFact): AICommon.BotMemoryFact;

        /**
         * Encodes the specified BotMemoryFact message. Does not implicitly {@link AICommon.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMemoryFact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryFact message, length delimited. Does not implicitly {@link AICommon.BotMemoryFact.verify|verify} messages.
         * @param message BotMemoryFact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMemoryFact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemoryFact;

        /**
         * Decodes a BotMemoryFact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMemoryFact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemoryFact;

        /**
         * Verifies a BotMemoryFact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemoryFact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemoryFact
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMemoryFact;

        /**
         * Creates a plain object from a BotMemoryFact message. Also converts values to other types if specified.
         * @param message BotMemoryFact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMemoryFact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemoryFact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMemoryFact
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotMemoryMetadata. */
    interface IBotMemoryMetadata {

        /** BotMemoryMetadata addedFacts */
        addedFacts?: (AICommon.IBotMemoryFact[]|null);

        /** BotMemoryMetadata removedFacts */
        removedFacts?: (AICommon.IBotMemoryFact[]|null);

        /** BotMemoryMetadata disclaimer */
        disclaimer?: (string|null);
    }

    /** Represents a BotMemoryMetadata. */
    class BotMemoryMetadata implements IBotMemoryMetadata {

        /**
         * Constructs a new BotMemoryMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotMemoryMetadata);

        /** BotMemoryMetadata addedFacts. */
        public addedFacts: AICommon.IBotMemoryFact[];

        /** BotMemoryMetadata removedFacts. */
        public removedFacts: AICommon.IBotMemoryFact[];

        /** BotMemoryMetadata disclaimer. */
        public disclaimer?: (string|null);

        /** BotMemoryMetadata _disclaimer. */
        public _disclaimer?: "disclaimer";

        /**
         * Creates a new BotMemoryMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotMemoryMetadata instance
         */
        public static create(properties?: AICommon.IBotMemoryMetadata): AICommon.BotMemoryMetadata;

        /**
         * Encodes the specified BotMemoryMetadata message. Does not implicitly {@link AICommon.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotMemoryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotMemoryMetadata message, length delimited. Does not implicitly {@link AICommon.BotMemoryMetadata.verify|verify} messages.
         * @param message BotMemoryMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotMemoryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotMemoryMetadata;

        /**
         * Decodes a BotMemoryMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotMemoryMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotMemoryMetadata;

        /**
         * Verifies a BotMemoryMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotMemoryMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotMemoryMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotMemoryMetadata;

        /**
         * Creates a plain object from a BotMemoryMetadata message. Also converts values to other types if specified.
         * @param message BotMemoryMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotMemoryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotMemoryMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotMemoryMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotLinkedAccount. */
    interface IBotLinkedAccount {

        /** BotLinkedAccount type */
        type?: (AICommon.BotLinkedAccount.BotLinkedAccountType|null);
    }

    /** Represents a BotLinkedAccount. */
    class BotLinkedAccount implements IBotLinkedAccount {

        /**
         * Constructs a new BotLinkedAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotLinkedAccount);

        /** BotLinkedAccount type. */
        public type?: (AICommon.BotLinkedAccount.BotLinkedAccountType|null);

        /** BotLinkedAccount _type. */
        public _type?: "type";

        /**
         * Creates a new BotLinkedAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccount instance
         */
        public static create(properties?: AICommon.IBotLinkedAccount): AICommon.BotLinkedAccount;

        /**
         * Encodes the specified BotLinkedAccount message. Does not implicitly {@link AICommon.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotLinkedAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccount message, length delimited. Does not implicitly {@link AICommon.BotLinkedAccount.verify|verify} messages.
         * @param message BotLinkedAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotLinkedAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotLinkedAccount;

        /**
         * Decodes a BotLinkedAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotLinkedAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotLinkedAccount;

        /**
         * Verifies a BotLinkedAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLinkedAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLinkedAccount
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotLinkedAccount;

        /**
         * Creates a plain object from a BotLinkedAccount message. Also converts values to other types if specified.
         * @param message BotLinkedAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotLinkedAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLinkedAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotLinkedAccount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotLinkedAccount {

        /** BotLinkedAccountType enum. */
        enum BotLinkedAccountType {
            BOT_LINKED_ACCOUNT_TYPE_1P = 0
        }
    }

    /** Properties of a BotLinkedAccountsMetadata. */
    interface IBotLinkedAccountsMetadata {

        /** BotLinkedAccountsMetadata accounts */
        accounts?: (AICommon.IBotLinkedAccount[]|null);

        /** BotLinkedAccountsMetadata acAuthTokens */
        acAuthTokens?: (Uint8Array|null);

        /** BotLinkedAccountsMetadata acErrorCode */
        acErrorCode?: (number|null);
    }

    /** Represents a BotLinkedAccountsMetadata. */
    class BotLinkedAccountsMetadata implements IBotLinkedAccountsMetadata {

        /**
         * Constructs a new BotLinkedAccountsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotLinkedAccountsMetadata);

        /** BotLinkedAccountsMetadata accounts. */
        public accounts: AICommon.IBotLinkedAccount[];

        /** BotLinkedAccountsMetadata acAuthTokens. */
        public acAuthTokens?: (Uint8Array|null);

        /** BotLinkedAccountsMetadata acErrorCode. */
        public acErrorCode?: (number|null);

        /** BotLinkedAccountsMetadata _acAuthTokens. */
        public _acAuthTokens?: "acAuthTokens";

        /** BotLinkedAccountsMetadata _acErrorCode. */
        public _acErrorCode?: "acErrorCode";

        /**
         * Creates a new BotLinkedAccountsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotLinkedAccountsMetadata instance
         */
        public static create(properties?: AICommon.IBotLinkedAccountsMetadata): AICommon.BotLinkedAccountsMetadata;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message. Does not implicitly {@link AICommon.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotLinkedAccountsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotLinkedAccountsMetadata message, length delimited. Does not implicitly {@link AICommon.BotLinkedAccountsMetadata.verify|verify} messages.
         * @param message BotLinkedAccountsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotLinkedAccountsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotLinkedAccountsMetadata;

        /**
         * Decodes a BotLinkedAccountsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotLinkedAccountsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotLinkedAccountsMetadata;

        /**
         * Verifies a BotLinkedAccountsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotLinkedAccountsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotLinkedAccountsMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotLinkedAccountsMetadata;

        /**
         * Creates a plain object from a BotLinkedAccountsMetadata message. Also converts values to other types if specified.
         * @param message BotLinkedAccountsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotLinkedAccountsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotLinkedAccountsMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotLinkedAccountsMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotPromptSuggestion. */
    interface IBotPromptSuggestion {

        /** BotPromptSuggestion prompt */
        prompt?: (string|null);

        /** BotPromptSuggestion promptId */
        promptId?: (string|null);
    }

    /** Represents a BotPromptSuggestion. */
    class BotPromptSuggestion implements IBotPromptSuggestion {

        /**
         * Constructs a new BotPromptSuggestion.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotPromptSuggestion);

        /** BotPromptSuggestion prompt. */
        public prompt?: (string|null);

        /** BotPromptSuggestion promptId. */
        public promptId?: (string|null);

        /** BotPromptSuggestion _prompt. */
        public _prompt?: "prompt";

        /** BotPromptSuggestion _promptId. */
        public _promptId?: "promptId";

        /**
         * Creates a new BotPromptSuggestion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromptSuggestion instance
         */
        public static create(properties?: AICommon.IBotPromptSuggestion): AICommon.BotPromptSuggestion;

        /**
         * Encodes the specified BotPromptSuggestion message. Does not implicitly {@link AICommon.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotPromptSuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestion message, length delimited. Does not implicitly {@link AICommon.BotPromptSuggestion.verify|verify} messages.
         * @param message BotPromptSuggestion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotPromptSuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromptSuggestion;

        /**
         * Decodes a BotPromptSuggestion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotPromptSuggestion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromptSuggestion;

        /**
         * Verifies a BotPromptSuggestion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromptSuggestion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromptSuggestion
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotPromptSuggestion;

        /**
         * Creates a plain object from a BotPromptSuggestion message. Also converts values to other types if specified.
         * @param message BotPromptSuggestion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotPromptSuggestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromptSuggestion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotPromptSuggestion
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotPromptSuggestions. */
    interface IBotPromptSuggestions {

        /** BotPromptSuggestions suggestions */
        suggestions?: (AICommon.IBotPromptSuggestion[]|null);
    }

    /** Represents a BotPromptSuggestions. */
    class BotPromptSuggestions implements IBotPromptSuggestions {

        /**
         * Constructs a new BotPromptSuggestions.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotPromptSuggestions);

        /** BotPromptSuggestions suggestions. */
        public suggestions: AICommon.IBotPromptSuggestion[];

        /**
         * Creates a new BotPromptSuggestions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPromptSuggestions instance
         */
        public static create(properties?: AICommon.IBotPromptSuggestions): AICommon.BotPromptSuggestions;

        /**
         * Encodes the specified BotPromptSuggestions message. Does not implicitly {@link AICommon.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotPromptSuggestions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPromptSuggestions message, length delimited. Does not implicitly {@link AICommon.BotPromptSuggestions.verify|verify} messages.
         * @param message BotPromptSuggestions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotPromptSuggestions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPromptSuggestions;

        /**
         * Decodes a BotPromptSuggestions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotPromptSuggestions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPromptSuggestions;

        /**
         * Verifies a BotPromptSuggestions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPromptSuggestions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPromptSuggestions
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotPromptSuggestions;

        /**
         * Creates a plain object from a BotPromptSuggestions message. Also converts values to other types if specified.
         * @param message BotPromptSuggestions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotPromptSuggestions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPromptSuggestions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotPromptSuggestions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotSuggestedPromptMetadata. */
    interface IBotSuggestedPromptMetadata {

        /** BotSuggestedPromptMetadata suggestedPrompts */
        suggestedPrompts?: (string[]|null);

        /** BotSuggestedPromptMetadata selectedPromptIndex */
        selectedPromptIndex?: (number|null);

        /** BotSuggestedPromptMetadata promptSuggestions */
        promptSuggestions?: (AICommon.IBotPromptSuggestions|null);

        /** BotSuggestedPromptMetadata selectedPromptId */
        selectedPromptId?: (string|null);
    }

    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {

        /**
         * Constructs a new BotSuggestedPromptMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotSuggestedPromptMetadata);

        /** BotSuggestedPromptMetadata suggestedPrompts. */
        public suggestedPrompts: string[];

        /** BotSuggestedPromptMetadata selectedPromptIndex. */
        public selectedPromptIndex?: (number|null);

        /** BotSuggestedPromptMetadata promptSuggestions. */
        public promptSuggestions?: (AICommon.IBotPromptSuggestions|null);

        /** BotSuggestedPromptMetadata selectedPromptId. */
        public selectedPromptId?: (string|null);

        /** BotSuggestedPromptMetadata _selectedPromptIndex. */
        public _selectedPromptIndex?: "selectedPromptIndex";

        /** BotSuggestedPromptMetadata _promptSuggestions. */
        public _promptSuggestions?: "promptSuggestions";

        /** BotSuggestedPromptMetadata _selectedPromptId. */
        public _selectedPromptId?: "selectedPromptId";

        /**
         * Creates a new BotSuggestedPromptMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotSuggestedPromptMetadata instance
         */
        public static create(properties?: AICommon.IBotSuggestedPromptMetadata): AICommon.BotSuggestedPromptMetadata;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message. Does not implicitly {@link AICommon.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotSuggestedPromptMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotSuggestedPromptMetadata message, length delimited. Does not implicitly {@link AICommon.BotSuggestedPromptMetadata.verify|verify} messages.
         * @param message BotSuggestedPromptMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotSuggestedPromptMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotSuggestedPromptMetadata;

        /**
         * Decodes a BotSuggestedPromptMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotSuggestedPromptMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotSuggestedPromptMetadata;

        /**
         * Verifies a BotSuggestedPromptMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotSuggestedPromptMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotSuggestedPromptMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotSuggestedPromptMetadata;

        /**
         * Creates a plain object from a BotSuggestedPromptMetadata message. Also converts values to other types if specified.
         * @param message BotSuggestedPromptMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotSuggestedPromptMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotSuggestedPromptMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotSuggestedPromptMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotPluginMetadata. */
    interface IBotPluginMetadata {

        /** BotPluginMetadata provider */
        provider?: (AICommon.BotPluginMetadata.SearchProvider|null);

        /** BotPluginMetadata pluginType */
        pluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata thumbnailCdnUrl */
        thumbnailCdnUrl?: (string|null);

        /** BotPluginMetadata profilePhotoCdnUrl */
        profilePhotoCdnUrl?: (string|null);

        /** BotPluginMetadata searchProviderUrl */
        searchProviderUrl?: (string|null);

        /** BotPluginMetadata referenceIndex */
        referenceIndex?: (number|null);

        /** BotPluginMetadata expectedLinksCount */
        expectedLinksCount?: (number|null);

        /** BotPluginMetadata searchQuery */
        searchQuery?: (string|null);

        /** BotPluginMetadata parentPluginMessageKey */
        parentPluginMessageKey?: (Protocol.IMessageKey|null);

        /** BotPluginMetadata deprecatedField */
        deprecatedField?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata parentPluginType */
        parentPluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata faviconCdnUrl */
        faviconCdnUrl?: (string|null);
    }

    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata implements IBotPluginMetadata {

        /**
         * Constructs a new BotPluginMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotPluginMetadata);

        /** BotPluginMetadata provider. */
        public provider?: (AICommon.BotPluginMetadata.SearchProvider|null);

        /** BotPluginMetadata pluginType. */
        public pluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata thumbnailCdnUrl. */
        public thumbnailCdnUrl?: (string|null);

        /** BotPluginMetadata profilePhotoCdnUrl. */
        public profilePhotoCdnUrl?: (string|null);

        /** BotPluginMetadata searchProviderUrl. */
        public searchProviderUrl?: (string|null);

        /** BotPluginMetadata referenceIndex. */
        public referenceIndex?: (number|null);

        /** BotPluginMetadata expectedLinksCount. */
        public expectedLinksCount?: (number|null);

        /** BotPluginMetadata searchQuery. */
        public searchQuery?: (string|null);

        /** BotPluginMetadata parentPluginMessageKey. */
        public parentPluginMessageKey?: (Protocol.IMessageKey|null);

        /** BotPluginMetadata deprecatedField. */
        public deprecatedField?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata parentPluginType. */
        public parentPluginType?: (AICommon.BotPluginMetadata.PluginType|null);

        /** BotPluginMetadata faviconCdnUrl. */
        public faviconCdnUrl?: (string|null);

        /** BotPluginMetadata _provider. */
        public _provider?: "provider";

        /** BotPluginMetadata _pluginType. */
        public _pluginType?: "pluginType";

        /** BotPluginMetadata _thumbnailCdnUrl. */
        public _thumbnailCdnUrl?: "thumbnailCdnUrl";

        /** BotPluginMetadata _profilePhotoCdnUrl. */
        public _profilePhotoCdnUrl?: "profilePhotoCdnUrl";

        /** BotPluginMetadata _searchProviderUrl. */
        public _searchProviderUrl?: "searchProviderUrl";

        /** BotPluginMetadata _referenceIndex. */
        public _referenceIndex?: "referenceIndex";

        /** BotPluginMetadata _expectedLinksCount. */
        public _expectedLinksCount?: "expectedLinksCount";

        /** BotPluginMetadata _searchQuery. */
        public _searchQuery?: "searchQuery";

        /** BotPluginMetadata _parentPluginMessageKey. */
        public _parentPluginMessageKey?: "parentPluginMessageKey";

        /** BotPluginMetadata _deprecatedField. */
        public _deprecatedField?: "deprecatedField";

        /** BotPluginMetadata _parentPluginType. */
        public _parentPluginType?: "parentPluginType";

        /** BotPluginMetadata _faviconCdnUrl. */
        public _faviconCdnUrl?: "faviconCdnUrl";

        /**
         * Creates a new BotPluginMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotPluginMetadata instance
         */
        public static create(properties?: AICommon.IBotPluginMetadata): AICommon.BotPluginMetadata;

        /**
         * Encodes the specified BotPluginMetadata message. Does not implicitly {@link AICommon.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotPluginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotPluginMetadata message, length delimited. Does not implicitly {@link AICommon.BotPluginMetadata.verify|verify} messages.
         * @param message BotPluginMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotPluginMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotPluginMetadata;

        /**
         * Decodes a BotPluginMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotPluginMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotPluginMetadata;

        /**
         * Verifies a BotPluginMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotPluginMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotPluginMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotPluginMetadata;

        /**
         * Creates a plain object from a BotPluginMetadata message. Also converts values to other types if specified.
         * @param message BotPluginMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotPluginMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotPluginMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotPluginMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotPluginMetadata {

        /** PluginType enum. */
        enum PluginType {
            UNKNOWN_PLUGIN = 0,
            REELS = 1,
            SEARCH = 2
        }

        /** SearchProvider enum. */
        enum SearchProvider {
            UNKNOWN = 0,
            BING = 1,
            GOOGLE = 2,
            SUPPORT = 3
        }
    }

    /** Properties of a BotAvatarMetadata. */
    interface IBotAvatarMetadata {

        /** BotAvatarMetadata sentiment */
        sentiment?: (number|null);

        /** BotAvatarMetadata behaviorGraph */
        behaviorGraph?: (string|null);

        /** BotAvatarMetadata action */
        action?: (number|null);

        /** BotAvatarMetadata intensity */
        intensity?: (number|null);

        /** BotAvatarMetadata wordCount */
        wordCount?: (number|null);
    }

    /** Represents a BotAvatarMetadata. */
    class BotAvatarMetadata implements IBotAvatarMetadata {

        /**
         * Constructs a new BotAvatarMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommon.IBotAvatarMetadata);

        /** BotAvatarMetadata sentiment. */
        public sentiment?: (number|null);

        /** BotAvatarMetadata behaviorGraph. */
        public behaviorGraph?: (string|null);

        /** BotAvatarMetadata action. */
        public action?: (number|null);

        /** BotAvatarMetadata intensity. */
        public intensity?: (number|null);

        /** BotAvatarMetadata wordCount. */
        public wordCount?: (number|null);

        /** BotAvatarMetadata _sentiment. */
        public _sentiment?: "sentiment";

        /** BotAvatarMetadata _behaviorGraph. */
        public _behaviorGraph?: "behaviorGraph";

        /** BotAvatarMetadata _action. */
        public _action?: "action";

        /** BotAvatarMetadata _intensity. */
        public _intensity?: "intensity";

        /** BotAvatarMetadata _wordCount. */
        public _wordCount?: "wordCount";

        /**
         * Creates a new BotAvatarMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotAvatarMetadata instance
         */
        public static create(properties?: AICommon.IBotAvatarMetadata): AICommon.BotAvatarMetadata;

        /**
         * Encodes the specified BotAvatarMetadata message. Does not implicitly {@link AICommon.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommon.IBotAvatarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotAvatarMetadata message, length delimited. Does not implicitly {@link AICommon.BotAvatarMetadata.verify|verify} messages.
         * @param message BotAvatarMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommon.IBotAvatarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommon.BotAvatarMetadata;

        /**
         * Decodes a BotAvatarMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotAvatarMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommon.BotAvatarMetadata;

        /**
         * Verifies a BotAvatarMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotAvatarMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotAvatarMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommon.BotAvatarMetadata;

        /**
         * Creates a plain object from a BotAvatarMetadata message. Also converts values to other types if specified.
         * @param message BotAvatarMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommon.BotAvatarMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotAvatarMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotAvatarMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AIRichResponseSubMessageType enum. */
    enum AIRichResponseSubMessageType {
        AI_RICH_RESPONSE_UNKNOWN = 0,
        AI_RICH_RESPONSE_GRID_IMAGE = 1,
        AI_RICH_RESPONSE_TEXT = 2,
        AI_RICH_RESPONSE_INLINE_IMAGE = 3,
        AI_RICH_RESPONSE_TABLE = 4,
        AI_RICH_RESPONSE_CODE = 5,
        AI_RICH_RESPONSE_DYNAMIC = 6,
        AI_RICH_RESPONSE_MAP = 7,
        AI_RICH_RESPONSE_LATEX = 8,
        AI_RICH_RESPONSE_CONTENT_ITEMS = 9
    }

    /** AIRichResponseMessageType enum. */
    enum AIRichResponseMessageType {
        AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
        AI_RICH_RESPONSE_TYPE_STANDARD = 1
    }

    /** BotSessionSource enum. */
    enum BotSessionSource {
        NONE = 0,
        NULL_STATE = 1,
        TYPEAHEAD = 2,
        USER_INPUT = 3,
        EMU_FLASH = 4,
        EMU_FLASH_FOLLOWUP = 5,
        VOICE = 6
    }

    /** BotMetricsThreadEntryPoint enum. */
    enum BotMetricsThreadEntryPoint {
        AI_TAB_THREAD = 1,
        AI_HOME_THREAD = 2,
        AI_DEEPLINK_IMMERSIVE_THREAD = 3,
        AI_DEEPLINK_THREAD = 4,
        ASK_META_AI_CONTEXT_MENU_THREAD = 5
    }

    /** BotMetricsEntryPoint enum. */
    enum BotMetricsEntryPoint {
        UNDEFINED_ENTRY_POINT = 0,
        FAVICON = 1,
        CHATLIST = 2,
        AISEARCH_NULL_STATE_PAPER_PLANE = 3,
        AISEARCH_NULL_STATE_SUGGESTION = 4,
        AISEARCH_TYPE_AHEAD_SUGGESTION = 5,
        AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,
        AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,
        AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,
        AIVOICE_SEARCH_BAR = 9,
        AIVOICE_FAVICON = 10,
        AISTUDIO = 11,
        DEEPLINK = 12,
        NOTIFICATION = 13,
        PROFILE_MESSAGE_BUTTON = 14,
        FORWARD = 15,
        APP_SHORTCUT = 16,
        FF_FAMILY = 17,
        AI_TAB = 18,
        AI_HOME = 19,
        AI_DEEPLINK_IMMERSIVE = 20,
        AI_DEEPLINK = 21,
        META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,
        UGC_CHAT_SHORTCUT_AI_STUDIO = 23,
        NEW_CHAT_AI_STUDIO = 24,
        AIVOICE_FAVICON_CALL_HISTORY = 25,
        ASK_META_AI_CONTEXT_MENU = 26,
        ASK_META_AI_CONTEXT_MENU_1ON1 = 27,
        ASK_META_AI_CONTEXT_MENU_GROUP = 28,
        INVOKE_META_AI_1ON1 = 29,
        INVOKE_META_AI_GROUP = 30,
        META_AI_FORWARD = 31,
        NEW_CHAT_AI_CONTACT = 32,
        MESSAGE_QUICK_ACTION = 33,
        ATTACHMENT_TRAY = 34
    }
}

/** Namespace StatusAttributions. */
export namespace StatusAttributions {

    /** Properties of a StatusAttribution. */
    interface IStatusAttribution {

        /** StatusAttribution type */
        type?: (StatusAttributions.StatusAttribution.Type|null);

        /** StatusAttribution actionUrl */
        actionUrl?: (string|null);

        /** StatusAttribution statusReshare */
        statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);

        /** StatusAttribution externalShare */
        externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);

        /** StatusAttribution music */
        music?: (StatusAttributions.StatusAttribution.IMusic|null);

        /** StatusAttribution groupStatus */
        groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);

        /** StatusAttribution rlAttribution */
        rlAttribution?: (StatusAttributions.StatusAttribution.IRLAttribution|null);

        /** StatusAttribution aiCreatedAttribution */
        aiCreatedAttribution?: (StatusAttributions.StatusAttribution.IAiCreatedAttribution|null);
    }

    /** Represents a StatusAttribution. */
    class StatusAttribution implements IStatusAttribution {

        /**
         * Constructs a new StatusAttribution.
         * @param [properties] Properties to set
         */
        constructor(properties?: StatusAttributions.IStatusAttribution);

        /** StatusAttribution type. */
        public type?: (StatusAttributions.StatusAttribution.Type|null);

        /** StatusAttribution actionUrl. */
        public actionUrl?: (string|null);

        /** StatusAttribution statusReshare. */
        public statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);

        /** StatusAttribution externalShare. */
        public externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);

        /** StatusAttribution music. */
        public music?: (StatusAttributions.StatusAttribution.IMusic|null);

        /** StatusAttribution groupStatus. */
        public groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);

        /** StatusAttribution rlAttribution. */
        public rlAttribution?: (StatusAttributions.StatusAttribution.IRLAttribution|null);

        /** StatusAttribution aiCreatedAttribution. */
        public aiCreatedAttribution?: (StatusAttributions.StatusAttribution.IAiCreatedAttribution|null);

        /** StatusAttribution _type. */
        public _type?: "type";

        /** StatusAttribution _actionUrl. */
        public _actionUrl?: "actionUrl";

        /** StatusAttribution attributionData. */
        public attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution");

        /**
         * Creates a new StatusAttribution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusAttribution instance
         */
        public static create(properties?: StatusAttributions.IStatusAttribution): StatusAttributions.StatusAttribution;

        /**
         * Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution;

        /**
         * Verifies a StatusAttribution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusAttribution
         */
        public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution;

        /**
         * Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
         * @param message StatusAttribution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: StatusAttributions.StatusAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusAttribution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StatusAttribution
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusAttribution {

        /** Properties of an AiCreatedAttribution. */
        interface IAiCreatedAttribution {

            /** AiCreatedAttribution source */
            source?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);
        }

        /** Represents an AiCreatedAttribution. */
        class AiCreatedAttribution implements IAiCreatedAttribution {

            /**
             * Constructs a new AiCreatedAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IAiCreatedAttribution);

            /** AiCreatedAttribution source. */
            public source?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);

            /** AiCreatedAttribution _source. */
            public _source?: "source";

            /**
             * Creates a new AiCreatedAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiCreatedAttribution instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IAiCreatedAttribution): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Encodes the specified AiCreatedAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IAiCreatedAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiCreatedAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IAiCreatedAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Verifies an AiCreatedAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiCreatedAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiCreatedAttribution
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Creates a plain object from an AiCreatedAttribution message. Also converts values to other types if specified.
             * @param message AiCreatedAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.AiCreatedAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiCreatedAttribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AiCreatedAttribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AiCreatedAttribution {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                STATUS_MIMICRY = 1
            }
        }

        /** Properties of an ExternalShare. */
        interface IExternalShare {

            /** ExternalShare actionUrl */
            actionUrl?: (string|null);

            /** ExternalShare source */
            source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);

            /** ExternalShare duration */
            duration?: (number|null);

            /** ExternalShare actionFallbackUrl */
            actionFallbackUrl?: (string|null);
        }

        /** Represents an ExternalShare. */
        class ExternalShare implements IExternalShare {

            /**
             * Constructs a new ExternalShare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IExternalShare);

            /** ExternalShare actionUrl. */
            public actionUrl?: (string|null);

            /** ExternalShare source. */
            public source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);

            /** ExternalShare duration. */
            public duration?: (number|null);

            /** ExternalShare actionFallbackUrl. */
            public actionFallbackUrl?: (string|null);

            /** ExternalShare _actionUrl. */
            public _actionUrl?: "actionUrl";

            /** ExternalShare _source. */
            public _source?: "source";

            /** ExternalShare _duration. */
            public _duration?: "duration";

            /** ExternalShare _actionFallbackUrl. */
            public _actionFallbackUrl?: "actionFallbackUrl";

            /**
             * Creates a new ExternalShare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalShare instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IExternalShare): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Verifies an ExternalShare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalShare
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
             * @param message ExternalShare
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.ExternalShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalShare to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExternalShare
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExternalShare {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                INSTAGRAM = 1,
                FACEBOOK = 2,
                MESSENGER = 3,
                SPOTIFY = 4,
                YOUTUBE = 5,
                PINTEREST = 6,
                THREADS = 7,
                APPLE_MUSIC = 8
            }
        }

        /** Properties of a GroupStatus. */
        interface IGroupStatus {

            /** GroupStatus authorJid */
            authorJid?: (string|null);
        }

        /** Represents a GroupStatus. */
        class GroupStatus implements IGroupStatus {

            /**
             * Constructs a new GroupStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IGroupStatus);

            /** GroupStatus authorJid. */
            public authorJid?: (string|null);

            /** GroupStatus _authorJid. */
            public _authorJid?: "authorJid";

            /**
             * Creates a new GroupStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupStatus instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IGroupStatus): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Verifies a GroupStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupStatus
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
             * @param message GroupStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.GroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GroupStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Music. */
        interface IMusic {

            /** Music authorName */
            authorName?: (string|null);

            /** Music songId */
            songId?: (string|null);

            /** Music title */
            title?: (string|null);

            /** Music author */
            author?: (string|null);

            /** Music artistAttribution */
            artistAttribution?: (string|null);

            /** Music isExplicit */
            isExplicit?: (boolean|null);
        }

        /** Represents a Music. */
        class Music implements IMusic {

            /**
             * Constructs a new Music.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IMusic);

            /** Music authorName. */
            public authorName?: (string|null);

            /** Music songId. */
            public songId?: (string|null);

            /** Music title. */
            public title?: (string|null);

            /** Music author. */
            public author?: (string|null);

            /** Music artistAttribution. */
            public artistAttribution?: (string|null);

            /** Music isExplicit. */
            public isExplicit?: (boolean|null);

            /** Music _authorName. */
            public _authorName?: "authorName";

            /** Music _songId. */
            public _songId?: "songId";

            /** Music _title. */
            public _title?: "title";

            /** Music _author. */
            public _author?: "author";

            /** Music _artistAttribution. */
            public _artistAttribution?: "artistAttribution";

            /** Music _isExplicit. */
            public _isExplicit?: "isExplicit";

            /**
             * Creates a new Music instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Music instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IMusic): StatusAttributions.StatusAttribution.Music;

            /**
             * Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Music message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.Music;

            /**
             * Decodes a Music message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.Music;

            /**
             * Verifies a Music message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Music message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Music
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.Music;

            /**
             * Creates a plain object from a Music message. Also converts values to other types if specified.
             * @param message Music
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.Music, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Music to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Music
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RLAttribution. */
        interface IRLAttribution {

            /** RLAttribution source */
            source?: (StatusAttributions.StatusAttribution.RLAttribution.Source|null);
        }

        /** Represents a RLAttribution. */
        class RLAttribution implements IRLAttribution {

            /**
             * Constructs a new RLAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IRLAttribution);

            /** RLAttribution source. */
            public source?: (StatusAttributions.StatusAttribution.RLAttribution.Source|null);

            /** RLAttribution _source. */
            public _source?: "source";

            /**
             * Creates a new RLAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RLAttribution instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IRLAttribution): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Encodes the specified RLAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IRLAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RLAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IRLAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Verifies a RLAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RLAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RLAttribution
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Creates a plain object from a RLAttribution message. Also converts values to other types if specified.
             * @param message RLAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.RLAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RLAttribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RLAttribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RLAttribution {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                RAY_BAN_META_GLASSES = 1,
                OAKLEY_META_GLASSES = 2,
                HYPERNOVA_GLASSES = 3
            }
        }

        /** Properties of a StatusReshare. */
        interface IStatusReshare {

            /** StatusReshare source */
            source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);

            /** StatusReshare metadata */
            metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
        }

        /** Represents a StatusReshare. */
        class StatusReshare implements IStatusReshare {

            /**
             * Constructs a new StatusReshare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IStatusReshare);

            /** StatusReshare source. */
            public source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);

            /** StatusReshare metadata. */
            public metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);

            /** StatusReshare _source. */
            public _source?: "source";

            /** StatusReshare _metadata. */
            public _metadata?: "metadata";

            /**
             * Creates a new StatusReshare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusReshare instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IStatusReshare): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Verifies a StatusReshare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusReshare
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
             * @param message StatusReshare
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusReshare to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StatusReshare
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StatusReshare {

            /** Properties of a Metadata. */
            interface IMetadata {

                /** Metadata duration */
                duration?: (number|null);

                /** Metadata channelJid */
                channelJid?: (string|null);

                /** Metadata channelMessageId */
                channelMessageId?: (number|null);

                /** Metadata hasMultipleReshares */
                hasMultipleReshares?: (boolean|null);
            }

            /** Represents a Metadata. */
            class Metadata implements IMetadata {

                /**
                 * Constructs a new Metadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata);

                /** Metadata duration. */
                public duration?: (number|null);

                /** Metadata channelJid. */
                public channelJid?: (string|null);

                /** Metadata channelMessageId. */
                public channelMessageId?: (number|null);

                /** Metadata hasMultipleReshares. */
                public hasMultipleReshares?: (boolean|null);

                /** Metadata _duration. */
                public _duration?: "duration";

                /** Metadata _channelJid. */
                public _channelJid?: "channelJid";

                /** Metadata _channelMessageId. */
                public _channelMessageId?: "channelMessageId";

                /** Metadata _hasMultipleReshares. */
                public _hasMultipleReshares?: "hasMultipleReshares";

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Metadata instance
                 */
                public static create(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Verifies a Metadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Metadata
                 */
                public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @param message Metadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Metadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Metadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                INTERNAL_RESHARE = 1,
                MENTION_RESHARE = 2,
                CHANNEL_RESHARE = 3,
                FORWARD = 4
            }
        }

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            RESHARE = 1,
            EXTERNAL_SHARE = 2,
            MUSIC = 3,
            STATUS_MENTION = 4,
            GROUP_STATUS = 5,
            RL_ATTRIBUTION = 6,
            AI_CREATED = 7
        }
    }
}

/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a LimitSharing. */
    interface ILimitSharing {

        /** LimitSharing sharingLimited */
        sharingLimited?: (boolean|null);

        /** LimitSharing trigger */
        trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** LimitSharing limitSharingSettingTimestamp */
        limitSharingSettingTimestamp?: (number|Long|null);

        /** LimitSharing initiatedByMe */
        initiatedByMe?: (boolean|null);
    }

    /** Represents a LimitSharing. */
    class LimitSharing implements ILimitSharing {

        /**
         * Constructs a new LimitSharing.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ILimitSharing);

        /** LimitSharing sharingLimited. */
        public sharingLimited?: (boolean|null);

        /** LimitSharing trigger. */
        public trigger?: (Protocol.LimitSharing.TriggerType|null);

        /** LimitSharing limitSharingSettingTimestamp. */
        public limitSharingSettingTimestamp?: (number|Long|null);

        /** LimitSharing initiatedByMe. */
        public initiatedByMe?: (boolean|null);

        /** LimitSharing _sharingLimited. */
        public _sharingLimited?: "sharingLimited";

        /** LimitSharing _trigger. */
        public _trigger?: "trigger";

        /** LimitSharing _limitSharingSettingTimestamp. */
        public _limitSharingSettingTimestamp?: "limitSharingSettingTimestamp";

        /** LimitSharing _initiatedByMe. */
        public _initiatedByMe?: "initiatedByMe";

        /**
         * Creates a new LimitSharing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LimitSharing instance
         */
        public static create(properties?: Protocol.ILimitSharing): Protocol.LimitSharing;

        /**
         * Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ILimitSharing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @param message LimitSharing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ILimitSharing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.LimitSharing;

        /**
         * Decodes a LimitSharing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.LimitSharing;

        /**
         * Verifies a LimitSharing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LimitSharing
         */
        public static fromObject(object: { [k: string]: any }): Protocol.LimitSharing;

        /**
         * Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
         * @param message LimitSharing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.LimitSharing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LimitSharing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LimitSharing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LimitSharing {

        /** TriggerType enum. */
        enum TriggerType {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            BIZ_SUPPORTS_FB_HOSTING = 2,
            UNKNOWN_GROUP = 3
        }
    }

    /** Properties of a MessageKey. */
    interface IMessageKey {

        /** MessageKey remoteJid */
        remoteJid?: (string|null);

        /** MessageKey fromMe */
        fromMe?: (boolean|null);

        /** MessageKey id */
        id?: (string|null);

        /** MessageKey participant */
        participant?: (string|null);
    }

    /** Represents a MessageKey. */
    class MessageKey implements IMessageKey {

        /**
         * Constructs a new MessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMessageKey);

        /** MessageKey remoteJid. */
        public remoteJid?: (string|null);

        /** MessageKey fromMe. */
        public fromMe?: (boolean|null);

        /** MessageKey id. */
        public id?: (string|null);

        /** MessageKey participant. */
        public participant?: (string|null);

        /** MessageKey _remoteJid. */
        public _remoteJid?: "remoteJid";

        /** MessageKey _fromMe. */
        public _fromMe?: "fromMe";

        /** MessageKey _id. */
        public _id?: "id";

        /** MessageKey _participant. */
        public _participant?: "participant";

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageKey instance
         */
        public static create(properties?: Protocol.IMessageKey): Protocol.MessageKey;

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageKey;

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageKey;

        /**
         * Verifies a MessageKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageKey
         */
        public static fromObject(object: { [k: string]: any }): Protocol.MessageKey;

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @param message MessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
