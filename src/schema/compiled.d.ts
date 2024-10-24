import * as $protobuf from "protobufjs";
import Long = require("long");
/** CanvasEditorElementType enum. */
export enum CanvasEditorElementType {
    TEXT = 0,
    SHAPE = 1,
    IMAGE = 2,
    GROUP = 3,
    CREATIVE_BOX = 4,
    CANVAS_MASK = 5
}

/** ObjectFit enum. */
export enum ObjectFit {
    FILL = 0,
    FIT = 1,
    CROP = 2
}

/** TextCase enum. */
export enum TextCase {
    UPPERCASE = 0,
    LOWERCASE = 1,
    TITLECASE = 2,
    NONE = 3
}

/** FontStyle enum. */
export enum FontStyle {
    NORMAL = 0,
    ITALIC = 1,
    OBLIQUE = 2
}

/** ObjectPosition enum. */
export enum ObjectPosition {
    TOP_LEFT = 0,
    TOP_CENTER = 1,
    TOP_RIGHT = 2,
    CENTER_LEFT = 3,
    CENTER = 4,
    CENTER_RIGHT = 5,
    BOTTOM_LEFT = 6,
    BOTTOM_CENTER = 7,
    BOTTOM_RIGHT = 8,
    CUSTOM = 9
}

/** BorderPosition enum. */
export enum BorderPosition {
    CENTER = 0,
    INSIDE = 1,
    OUTSIDE = 2
}

/** Represents a PathSegment. */
export class PathSegment implements IPathSegment {

    /**
     * Constructs a new PathSegment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPathSegment);

    /** PathSegment path. */
    public path: string[];

    /**
     * Creates a new PathSegment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PathSegment instance
     */
    public static create(properties?: IPathSegment): PathSegment;

    /**
     * Encodes the specified PathSegment message. Does not implicitly {@link PathSegment.verify|verify} messages.
     * @param message PathSegment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPathSegment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PathSegment message, length delimited. Does not implicitly {@link PathSegment.verify|verify} messages.
     * @param message PathSegment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPathSegment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PathSegment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PathSegment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PathSegment;

    /**
     * Decodes a PathSegment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PathSegment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PathSegment;

    /**
     * Verifies a PathSegment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PathSegment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PathSegment
     */
    public static fromObject(object: { [k: string]: any }): PathSegment;

    /**
     * Creates a plain object from a PathSegment message. Also converts values to other types if specified.
     * @param message PathSegment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PathSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PathSegment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PathSegment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TextStyle. */
export class TextStyle implements ITextStyle {

    /**
     * Constructs a new TextStyle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextStyle);

    /** TextStyle textCase. */
    public textCase: TextCase;

    /** TextStyle textFill. */
    public textFill?: (ISerializedFillType|null);

    /** TextStyle fontFamily. */
    public fontFamily: string;

    /** TextStyle fontWeight. */
    public fontWeight: string;

    /** TextStyle fontSize. */
    public fontSize: number;

    /** TextStyle underline. */
    public underline: boolean;

    /** TextStyle overline. */
    public overline: boolean;

    /** TextStyle linethrough. */
    public linethrough: boolean;

    /** TextStyle fontStyle. */
    public fontStyle: FontStyle;

    /** TextStyle charSpacing. */
    public charSpacing: number;

    /** TextStyle lineHeight. */
    public lineHeight: number;

    /**
     * Creates a new TextStyle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextStyle instance
     */
    public static create(properties?: ITextStyle): TextStyle;

    /**
     * Encodes the specified TextStyle message. Does not implicitly {@link TextStyle.verify|verify} messages.
     * @param message TextStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextStyle message, length delimited. Does not implicitly {@link TextStyle.verify|verify} messages.
     * @param message TextStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextStyle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextStyle;

    /**
     * Decodes a TextStyle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextStyle;

    /**
     * Verifies a TextStyle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextStyle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextStyle
     */
    public static fromObject(object: { [k: string]: any }): TextStyle;

    /**
     * Creates a plain object from a TextStyle message. Also converts values to other types if specified.
     * @param message TextStyle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextStyle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextStyle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a WordStyle. */
export class WordStyle implements IWordStyle {

    /**
     * Constructs a new WordStyle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWordStyle);

    /** WordStyle id. */
    public id: string;

    /** WordStyle data. */
    public data?: (IWordStyleData|null);

    /**
     * Creates a new WordStyle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WordStyle instance
     */
    public static create(properties?: IWordStyle): WordStyle;

    /**
     * Encodes the specified WordStyle message. Does not implicitly {@link WordStyle.verify|verify} messages.
     * @param message WordStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWordStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WordStyle message, length delimited. Does not implicitly {@link WordStyle.verify|verify} messages.
     * @param message WordStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWordStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WordStyle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WordStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WordStyle;

    /**
     * Decodes a WordStyle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WordStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WordStyle;

    /**
     * Verifies a WordStyle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WordStyle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WordStyle
     */
    public static fromObject(object: { [k: string]: any }): WordStyle;

    /**
     * Creates a plain object from a WordStyle message. Also converts values to other types if specified.
     * @param message WordStyle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WordStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WordStyle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WordStyle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a WordStyleData. */
export class WordStyleData implements IWordStyleData {

    /**
     * Constructs a new WordStyleData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWordStyleData);

    /** WordStyleData start. */
    public start: number;

    /** WordStyleData end. */
    public end: number;

    /** WordStyleData styles. */
    public styles?: (IWordStyleProperties|null);

    /**
     * Creates a new WordStyleData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WordStyleData instance
     */
    public static create(properties?: IWordStyleData): WordStyleData;

    /**
     * Encodes the specified WordStyleData message. Does not implicitly {@link WordStyleData.verify|verify} messages.
     * @param message WordStyleData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWordStyleData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WordStyleData message, length delimited. Does not implicitly {@link WordStyleData.verify|verify} messages.
     * @param message WordStyleData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWordStyleData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WordStyleData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WordStyleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WordStyleData;

    /**
     * Decodes a WordStyleData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WordStyleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WordStyleData;

    /**
     * Verifies a WordStyleData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WordStyleData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WordStyleData
     */
    public static fromObject(object: { [k: string]: any }): WordStyleData;

    /**
     * Creates a plain object from a WordStyleData message. Also converts values to other types if specified.
     * @param message WordStyleData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WordStyleData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WordStyleData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WordStyleData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a WordStyleProperties. */
export class WordStyleProperties implements IWordStyleProperties {

    /**
     * Constructs a new WordStyleProperties.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWordStyleProperties);

    /** WordStyleProperties fontFamily. */
    public fontFamily: string;

    /** WordStyleProperties fontSize. */
    public fontSize: number;

    /** WordStyleProperties fontWeight. */
    public fontWeight: string;

    /** WordStyleProperties fontStyle. */
    public fontStyle: FontStyle;

    /** WordStyleProperties textDecoration. */
    public textDecoration: string;

    /** WordStyleProperties textAlign. */
    public textAlign: string;

    /** WordStyleProperties textBackgroundColor. */
    public textBackgroundColor?: (ISerializedFillType|null);

    /** WordStyleProperties fill. */
    public fill?: (ISerializedFillType|null);

    /** WordStyleProperties stroke. */
    public stroke: string;

    /** WordStyleProperties strokeWidth. */
    public strokeWidth: number;

    /**
     * Creates a new WordStyleProperties instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WordStyleProperties instance
     */
    public static create(properties?: IWordStyleProperties): WordStyleProperties;

    /**
     * Encodes the specified WordStyleProperties message. Does not implicitly {@link WordStyleProperties.verify|verify} messages.
     * @param message WordStyleProperties message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWordStyleProperties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WordStyleProperties message, length delimited. Does not implicitly {@link WordStyleProperties.verify|verify} messages.
     * @param message WordStyleProperties message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWordStyleProperties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WordStyleProperties message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WordStyleProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WordStyleProperties;

    /**
     * Decodes a WordStyleProperties message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WordStyleProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WordStyleProperties;

    /**
     * Verifies a WordStyleProperties message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WordStyleProperties message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WordStyleProperties
     */
    public static fromObject(object: { [k: string]: any }): WordStyleProperties;

    /**
     * Creates a plain object from a WordStyleProperties message. Also converts values to other types if specified.
     * @param message WordStyleProperties
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WordStyleProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WordStyleProperties to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WordStyleProperties
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SerializedFillType. */
export class SerializedFillType implements ISerializedFillType {

    /**
     * Constructs a new SerializedFillType.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISerializedFillType);

    /** SerializedFillType solidColor. */
    public solidColor?: (string|null);

    /** SerializedFillType pattern. */
    public pattern?: (IPatternOptions|null);

    /** SerializedFillType gradient. */
    public gradient?: (IGradientOptions|null);

    /** SerializedFillType fillType. */
    public fillType?: ("solidColor"|"pattern"|"gradient");

    /**
     * Creates a new SerializedFillType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SerializedFillType instance
     */
    public static create(properties?: ISerializedFillType): SerializedFillType;

    /**
     * Encodes the specified SerializedFillType message. Does not implicitly {@link SerializedFillType.verify|verify} messages.
     * @param message SerializedFillType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISerializedFillType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SerializedFillType message, length delimited. Does not implicitly {@link SerializedFillType.verify|verify} messages.
     * @param message SerializedFillType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISerializedFillType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SerializedFillType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SerializedFillType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SerializedFillType;

    /**
     * Decodes a SerializedFillType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SerializedFillType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SerializedFillType;

    /**
     * Verifies a SerializedFillType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SerializedFillType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SerializedFillType
     */
    public static fromObject(object: { [k: string]: any }): SerializedFillType;

    /**
     * Creates a plain object from a SerializedFillType message. Also converts values to other types if specified.
     * @param message SerializedFillType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SerializedFillType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SerializedFillType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SerializedFillType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PatternOptions. */
export class PatternOptions implements IPatternOptions {

    /**
     * Constructs a new PatternOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPatternOptions);

    /** PatternOptions patternType. */
    public patternType: string;

    /** PatternOptions patternSrc. */
    public patternSrc: string;

    /**
     * Creates a new PatternOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PatternOptions instance
     */
    public static create(properties?: IPatternOptions): PatternOptions;

    /**
     * Encodes the specified PatternOptions message. Does not implicitly {@link PatternOptions.verify|verify} messages.
     * @param message PatternOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPatternOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PatternOptions message, length delimited. Does not implicitly {@link PatternOptions.verify|verify} messages.
     * @param message PatternOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPatternOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PatternOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PatternOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PatternOptions;

    /**
     * Decodes a PatternOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PatternOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PatternOptions;

    /**
     * Verifies a PatternOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PatternOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PatternOptions
     */
    public static fromObject(object: { [k: string]: any }): PatternOptions;

    /**
     * Creates a plain object from a PatternOptions message. Also converts values to other types if specified.
     * @param message PatternOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PatternOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PatternOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PatternOptions
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GradientOptions. */
export class GradientOptions implements IGradientOptions {

    /**
     * Constructs a new GradientOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGradientOptions);

    /** GradientOptions stops. */
    public stops: IGradientStop[];

    /** GradientOptions gradientUnits. */
    public gradientUnits: string;

    /**
     * Creates a new GradientOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GradientOptions instance
     */
    public static create(properties?: IGradientOptions): GradientOptions;

    /**
     * Encodes the specified GradientOptions message. Does not implicitly {@link GradientOptions.verify|verify} messages.
     * @param message GradientOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGradientOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GradientOptions message, length delimited. Does not implicitly {@link GradientOptions.verify|verify} messages.
     * @param message GradientOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGradientOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GradientOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GradientOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GradientOptions;

    /**
     * Decodes a GradientOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GradientOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GradientOptions;

    /**
     * Verifies a GradientOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GradientOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GradientOptions
     */
    public static fromObject(object: { [k: string]: any }): GradientOptions;

    /**
     * Creates a plain object from a GradientOptions message. Also converts values to other types if specified.
     * @param message GradientOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GradientOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GradientOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GradientOptions
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GradientStop. */
export class GradientStop implements IGradientStop {

    /**
     * Constructs a new GradientStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGradientStop);

    /** GradientStop position. */
    public position: number;

    /** GradientStop color. */
    public color: string;

    /**
     * Creates a new GradientStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GradientStop instance
     */
    public static create(properties?: IGradientStop): GradientStop;

    /**
     * Encodes the specified GradientStop message. Does not implicitly {@link GradientStop.verify|verify} messages.
     * @param message GradientStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGradientStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GradientStop message, length delimited. Does not implicitly {@link GradientStop.verify|verify} messages.
     * @param message GradientStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGradientStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GradientStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GradientStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GradientStop;

    /**
     * Decodes a GradientStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GradientStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GradientStop;

    /**
     * Verifies a GradientStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GradientStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GradientStop
     */
    public static fromObject(object: { [k: string]: any }): GradientStop;

    /**
     * Creates a plain object from a GradientStop message. Also converts values to other types if specified.
     * @param message GradientStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GradientStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GradientStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GradientStop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SerializedFabricShadow. */
export class SerializedFabricShadow implements ISerializedFabricShadow {

    /**
     * Constructs a new SerializedFabricShadow.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISerializedFabricShadow);

    /** SerializedFabricShadow color. */
    public color: string;

    /** SerializedFabricShadow blur. */
    public blur: number;

    /** SerializedFabricShadow offsetX. */
    public offsetX: number;

    /** SerializedFabricShadow offsetY. */
    public offsetY: number;

    /**
     * Creates a new SerializedFabricShadow instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SerializedFabricShadow instance
     */
    public static create(properties?: ISerializedFabricShadow): SerializedFabricShadow;

    /**
     * Encodes the specified SerializedFabricShadow message. Does not implicitly {@link SerializedFabricShadow.verify|verify} messages.
     * @param message SerializedFabricShadow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISerializedFabricShadow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SerializedFabricShadow message, length delimited. Does not implicitly {@link SerializedFabricShadow.verify|verify} messages.
     * @param message SerializedFabricShadow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISerializedFabricShadow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SerializedFabricShadow message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SerializedFabricShadow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SerializedFabricShadow;

    /**
     * Decodes a SerializedFabricShadow message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SerializedFabricShadow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SerializedFabricShadow;

    /**
     * Verifies a SerializedFabricShadow message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SerializedFabricShadow message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SerializedFabricShadow
     */
    public static fromObject(object: { [k: string]: any }): SerializedFabricShadow;

    /**
     * Creates a plain object from a SerializedFabricShadow message. Also converts values to other types if specified.
     * @param message SerializedFabricShadow
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SerializedFabricShadow, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SerializedFabricShadow to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SerializedFabricShadow
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Border. */
export class Border implements IBorder {

    /**
     * Constructs a new Border.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBorder);

    /** Border color. */
    public color: string;

    /** Border style. */
    public style: string;

    /** Border top. */
    public top: number;

    /** Border right. */
    public right: number;

    /** Border bottom. */
    public bottom: number;

    /** Border left. */
    public left: number;

    /** Border position. */
    public position: BorderPosition;

    /** Border dashWidth. */
    public dashWidth: number;

    /** Border dashGap. */
    public dashGap: number;

    /** Border dashCap. */
    public dashCap: string;

    /**
     * Creates a new Border instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Border instance
     */
    public static create(properties?: IBorder): Border;

    /**
     * Encodes the specified Border message. Does not implicitly {@link Border.verify|verify} messages.
     * @param message Border message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBorder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Border message, length delimited. Does not implicitly {@link Border.verify|verify} messages.
     * @param message Border message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBorder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Border message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Border
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Border;

    /**
     * Decodes a Border message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Border
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Border;

    /**
     * Verifies a Border message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Border message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Border
     */
    public static fromObject(object: { [k: string]: any }): Border;

    /**
     * Creates a plain object from a Border message. Also converts values to other types if specified.
     * @param message Border
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Border, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Border to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Border
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Radius. */
export class Radius implements IRadius {

    /**
     * Constructs a new Radius.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRadius);

    /** Radius tl. */
    public tl: number;

    /** Radius tr. */
    public tr: number;

    /** Radius bl. */
    public bl: number;

    /** Radius br. */
    public br: number;

    /**
     * Creates a new Radius instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Radius instance
     */
    public static create(properties?: IRadius): Radius;

    /**
     * Encodes the specified Radius message. Does not implicitly {@link Radius.verify|verify} messages.
     * @param message Radius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Radius message, length delimited. Does not implicitly {@link Radius.verify|verify} messages.
     * @param message Radius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Radius message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Radius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Radius;

    /**
     * Decodes a Radius message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Radius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Radius;

    /**
     * Verifies a Radius message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Radius message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Radius
     */
    public static fromObject(object: { [k: string]: any }): Radius;

    /**
     * Creates a plain object from a Radius message. Also converts values to other types if specified.
     * @param message Radius
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Radius, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Radius to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Radius
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Padding. */
export class Padding implements IPadding {

    /**
     * Constructs a new Padding.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPadding);

    /** Padding top. */
    public top: number;

    /** Padding right. */
    public right: number;

    /** Padding bottom. */
    public bottom: number;

    /** Padding left. */
    public left: number;

    /**
     * Creates a new Padding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Padding instance
     */
    public static create(properties?: IPadding): Padding;

    /**
     * Encodes the specified Padding message. Does not implicitly {@link Padding.verify|verify} messages.
     * @param message Padding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPadding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Padding message, length delimited. Does not implicitly {@link Padding.verify|verify} messages.
     * @param message Padding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPadding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Padding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Padding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Padding;

    /**
     * Decodes a Padding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Padding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Padding;

    /**
     * Verifies a Padding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Padding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Padding
     */
    public static fromObject(object: { [k: string]: any }): Padding;

    /**
     * Creates a plain object from a Padding message. Also converts values to other types if specified.
     * @param message Padding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Padding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Padding to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Padding
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FontMetaData. */
export class FontMetaData implements IFontMetaData {

    /**
     * Constructs a new FontMetaData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFontMetaData);

    /** FontMetaData fontId. */
    public fontId: string;

    /** FontMetaData fontUrl. */
    public fontUrl: string;

    /**
     * Creates a new FontMetaData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FontMetaData instance
     */
    public static create(properties?: IFontMetaData): FontMetaData;

    /**
     * Encodes the specified FontMetaData message. Does not implicitly {@link FontMetaData.verify|verify} messages.
     * @param message FontMetaData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFontMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FontMetaData message, length delimited. Does not implicitly {@link FontMetaData.verify|verify} messages.
     * @param message FontMetaData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFontMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FontMetaData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FontMetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FontMetaData;

    /**
     * Decodes a FontMetaData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FontMetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FontMetaData;

    /**
     * Verifies a FontMetaData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FontMetaData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FontMetaData
     */
    public static fromObject(object: { [k: string]: any }): FontMetaData;

    /**
     * Creates a plain object from a FontMetaData message. Also converts values to other types if specified.
     * @param message FontMetaData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FontMetaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FontMetaData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FontMetaData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Variants. */
export class Variants implements IVariants {

    /**
     * Constructs a new Variants.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVariants);

    /** Variants metadata. */
    public metadata?: (IVariantMetadata|null);

    /** Variants variant. */
    public variant?: (IVariant|null);

    /**
     * Creates a new Variants instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Variants instance
     */
    public static create(properties?: IVariants): Variants;

    /**
     * Encodes the specified Variants message. Does not implicitly {@link Variants.verify|verify} messages.
     * @param message Variants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVariants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Variants message, length delimited. Does not implicitly {@link Variants.verify|verify} messages.
     * @param message Variants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVariants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Variants message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Variants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Variants;

    /**
     * Decodes a Variants message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Variants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Variants;

    /**
     * Verifies a Variants message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Variants message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Variants
     */
    public static fromObject(object: { [k: string]: any }): Variants;

    /**
     * Creates a plain object from a Variants message. Also converts values to other types if specified.
     * @param message Variants
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Variants, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Variants to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Variants
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VariantMetadata. */
export class VariantMetadata implements IVariantMetadata {

    /**
     * Constructs a new VariantMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVariantMetadata);

    /** VariantMetadata name. */
    public name: string;

    /** VariantMetadata createdAt. */
    public createdAt: string;

    /** VariantMetadata lastModified. */
    public lastModified: string;

    /** VariantMetadata author. */
    public author: string;

    /** VariantMetadata source. */
    public source: string;

    /** VariantMetadata sourceVersion. */
    public sourceVersion: string;

    /** VariantMetadata schemaVersion. */
    public schemaVersion: string;

    /**
     * Creates a new VariantMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VariantMetadata instance
     */
    public static create(properties?: IVariantMetadata): VariantMetadata;

    /**
     * Encodes the specified VariantMetadata message. Does not implicitly {@link VariantMetadata.verify|verify} messages.
     * @param message VariantMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVariantMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VariantMetadata message, length delimited. Does not implicitly {@link VariantMetadata.verify|verify} messages.
     * @param message VariantMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVariantMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VariantMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VariantMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VariantMetadata;

    /**
     * Decodes a VariantMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VariantMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VariantMetadata;

    /**
     * Verifies a VariantMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VariantMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VariantMetadata
     */
    public static fromObject(object: { [k: string]: any }): VariantMetadata;

    /**
     * Creates a plain object from a VariantMetadata message. Also converts values to other types if specified.
     * @param message VariantMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VariantMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VariantMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VariantMetadata
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Variant. */
export class Variant implements IVariant {

    /**
     * Constructs a new Variant.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVariant);

    /** Variant sizes. */
    public sizes: { [k: string]: ISize };

    /** Variant objects. */
    public objects: { [k: string]: ICanvasElementWithOverrides };

    /**
     * Creates a new Variant instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Variant instance
     */
    public static create(properties?: IVariant): Variant;

    /**
     * Encodes the specified Variant message. Does not implicitly {@link Variant.verify|verify} messages.
     * @param message Variant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVariant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Variant message, length delimited. Does not implicitly {@link Variant.verify|verify} messages.
     * @param message Variant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVariant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Variant message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Variant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Variant;

    /**
     * Decodes a Variant message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Variant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Variant;

    /**
     * Verifies a Variant message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Variant message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Variant
     */
    public static fromObject(object: { [k: string]: any }): Variant;

    /**
     * Creates a plain object from a Variant message. Also converts values to other types if specified.
     * @param message Variant
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Variant, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Variant to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Variant
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Size. */
export class Size implements ISize {

    /**
     * Constructs a new Size.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISize);

    /** Size width. */
    public width: number;

    /** Size height. */
    public height: number;

    /** Size id. */
    public id: string;

    /** Size displayName. */
    public displayName: string;

    /**
     * Creates a new Size instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Size instance
     */
    public static create(properties?: ISize): Size;

    /**
     * Encodes the specified Size message. Does not implicitly {@link Size.verify|verify} messages.
     * @param message Size message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISize, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Size message, length delimited. Does not implicitly {@link Size.verify|verify} messages.
     * @param message Size message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISize, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Size message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Size;

    /**
     * Decodes a Size message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Size;

    /**
     * Verifies a Size message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Size message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Size
     */
    public static fromObject(object: { [k: string]: any }): Size;

    /**
     * Creates a plain object from a Size message. Also converts values to other types if specified.
     * @param message Size
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Size to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Size
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CanvasElementWithOverrides. */
export class CanvasElementWithOverrides implements ICanvasElementWithOverrides {

    /**
     * Constructs a new CanvasElementWithOverrides.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICanvasElementWithOverrides);

    /** CanvasElementWithOverrides id. */
    public id: string;

    /** CanvasElementWithOverrides type. */
    public type: string;

    /** CanvasElementWithOverrides displayText. */
    public displayText: string;

    /** CanvasElementWithOverrides dataType. */
    public dataType: CanvasEditorElementType;

    /** CanvasElementWithOverrides left. */
    public left: number;

    /** CanvasElementWithOverrides top. */
    public top: number;

    /** CanvasElementWithOverrides width. */
    public width: number;

    /** CanvasElementWithOverrides height. */
    public height: number;

    /** CanvasElementWithOverrides angle. */
    public angle: number;

    /** CanvasElementWithOverrides opacity. */
    public opacity: number;

    /** CanvasElementWithOverrides shadow. */
    public shadow?: (ISerializedFabricShadow|null);

    /** CanvasElementWithOverrides visible. */
    public visible: boolean;

    /** CanvasElementWithOverrides globalCompositeOperation. */
    public globalCompositeOperation: string;

    /** CanvasElementWithOverrides selectable. */
    public selectable: boolean;

    /** CanvasElementWithOverrides fill. */
    public fill?: (ISerializedFillType|null);

    /** CanvasElementWithOverrides border. */
    public border?: (IBorder|null);

    /** CanvasElementWithOverrides padding. */
    public padding?: (IPadding|null);

    /** CanvasElementWithOverrides cornerRadius. */
    public cornerRadius?: (IRadius|null);

    /** CanvasElementWithOverrides objectPosition. */
    public objectPosition: ObjectPosition;

    /** CanvasElementWithOverrides imageScale. */
    public imageScale: number;

    /** CanvasElementWithOverrides imageLeft. */
    public imageLeft: number;

    /** CanvasElementWithOverrides imageTop. */
    public imageTop: number;

    /** CanvasElementWithOverrides imageWidth. */
    public imageWidth: number;

    /** CanvasElementWithOverrides imageHeight. */
    public imageHeight: number;

    /** CanvasElementWithOverrides objectFit. */
    public objectFit: ObjectFit;

    /** CanvasElementWithOverrides src. */
    public src: string;

    /** CanvasElementWithOverrides path. */
    public path: IPathSegment[];

    /** CanvasElementWithOverrides scale. */
    public scale: number;

    /** CanvasElementWithOverrides roundedRectScale. */
    public roundedRectScale: number;

    /** CanvasElementWithOverrides textStyle. */
    public textStyle?: (ITextStyle|null);

    /** CanvasElementWithOverrides autoFit. */
    public autoFit: boolean;

    /** CanvasElementWithOverrides autoFitSizes. */
    public autoFitSizes: number[];

    /** CanvasElementWithOverrides serializedText. */
    public serializedText: string;

    /** CanvasElementWithOverrides fontMetaData. */
    public fontMetaData?: (IFontMetaData|null);

    /** CanvasElementWithOverrides textLeft. */
    public textLeft: number;

    /** CanvasElementWithOverrides textTop. */
    public textTop: number;

    /** CanvasElementWithOverrides textHeight. */
    public textHeight: number;

    /** CanvasElementWithOverrides text. */
    public text: string;

    /** CanvasElementWithOverrides textAlign. */
    public textAlign: string;

    /** CanvasElementWithOverrides wordStyles. */
    public wordStyles: IWordStyle[];

    /** CanvasElementWithOverrides zIndex. */
    public zIndex: number;

    /** CanvasElementWithOverrides overrides. */
    public overrides: { [k: string]: IOverride };

    /**
     * Creates a new CanvasElementWithOverrides instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CanvasElementWithOverrides instance
     */
    public static create(properties?: ICanvasElementWithOverrides): CanvasElementWithOverrides;

    /**
     * Encodes the specified CanvasElementWithOverrides message. Does not implicitly {@link CanvasElementWithOverrides.verify|verify} messages.
     * @param message CanvasElementWithOverrides message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICanvasElementWithOverrides, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CanvasElementWithOverrides message, length delimited. Does not implicitly {@link CanvasElementWithOverrides.verify|verify} messages.
     * @param message CanvasElementWithOverrides message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICanvasElementWithOverrides, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CanvasElementWithOverrides message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CanvasElementWithOverrides
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CanvasElementWithOverrides;

    /**
     * Decodes a CanvasElementWithOverrides message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CanvasElementWithOverrides
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CanvasElementWithOverrides;

    /**
     * Verifies a CanvasElementWithOverrides message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CanvasElementWithOverrides message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CanvasElementWithOverrides
     */
    public static fromObject(object: { [k: string]: any }): CanvasElementWithOverrides;

    /**
     * Creates a plain object from a CanvasElementWithOverrides message. Also converts values to other types if specified.
     * @param message CanvasElementWithOverrides
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CanvasElementWithOverrides, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CanvasElementWithOverrides to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CanvasElementWithOverrides
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Override. */
export class Override implements IOverride {

    /**
     * Constructs a new Override.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOverride);

    /** Override override. */
    public override?: (ICanvasElementWithOverrides|null);

    /** Override zIndex. */
    public zIndex: number;

    /**
     * Creates a new Override instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Override instance
     */
    public static create(properties?: IOverride): Override;

    /**
     * Encodes the specified Override message. Does not implicitly {@link Override.verify|verify} messages.
     * @param message Override message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Override message, length delimited. Does not implicitly {@link Override.verify|verify} messages.
     * @param message Override message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Override message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Override;

    /**
     * Decodes an Override message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Override;

    /**
     * Verifies an Override message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Override message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Override
     */
    public static fromObject(object: { [k: string]: any }): Override;

    /**
     * Creates a plain object from an Override message. Also converts values to other types if specified.
     * @param message Override
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Override, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Override to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Override
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RocketiumPortableFormat. */
export class RocketiumPortableFormat implements IRocketiumPortableFormat {

    /**
     * Constructs a new RocketiumPortableFormat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRocketiumPortableFormat);

    /** RocketiumPortableFormat variants. */
    public variants: IVariants[];

    /** RocketiumPortableFormat metadata. */
    public metadata?: (IMetadata|null);

    /**
     * Creates a new RocketiumPortableFormat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RocketiumPortableFormat instance
     */
    public static create(properties?: IRocketiumPortableFormat): RocketiumPortableFormat;

    /**
     * Encodes the specified RocketiumPortableFormat message. Does not implicitly {@link RocketiumPortableFormat.verify|verify} messages.
     * @param message RocketiumPortableFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRocketiumPortableFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RocketiumPortableFormat message, length delimited. Does not implicitly {@link RocketiumPortableFormat.verify|verify} messages.
     * @param message RocketiumPortableFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRocketiumPortableFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RocketiumPortableFormat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RocketiumPortableFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RocketiumPortableFormat;

    /**
     * Decodes a RocketiumPortableFormat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RocketiumPortableFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RocketiumPortableFormat;

    /**
     * Verifies a RocketiumPortableFormat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RocketiumPortableFormat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RocketiumPortableFormat
     */
    public static fromObject(object: { [k: string]: any }): RocketiumPortableFormat;

    /**
     * Creates a plain object from a RocketiumPortableFormat message. Also converts values to other types if specified.
     * @param message RocketiumPortableFormat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RocketiumPortableFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RocketiumPortableFormat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RocketiumPortableFormat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Metadata. */
export class Metadata implements IMetadata {

    /**
     * Constructs a new Metadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetadata);

    /** Metadata name. */
    public name: string;

    /** Metadata createdAt. */
    public createdAt: string;

    /** Metadata lastModified. */
    public lastModified: string;

    /** Metadata author. */
    public author: string;

    /** Metadata source. */
    public source: string;

    /** Metadata sourceVersion. */
    public sourceVersion: string;

    /** Metadata schemaVersion. */
    public schemaVersion: string;

    /**
     * Creates a new Metadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Metadata instance
     */
    public static create(properties?: IMetadata): Metadata;

    /**
     * Encodes the specified Metadata message. Does not implicitly {@link Metadata.verify|verify} messages.
     * @param message Metadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link Metadata.verify|verify} messages.
     * @param message Metadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Metadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Metadata;

    /**
     * Decodes a Metadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Metadata;

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
    public static fromObject(object: { [k: string]: any }): Metadata;

    /**
     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
     * @param message Metadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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