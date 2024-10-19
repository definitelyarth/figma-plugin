import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a BaseNode. */
export interface IBaseNode {

    /** BaseNode id */
    id?: (string|null);

    /** BaseNode name */
    name?: (string|null);

    /** BaseNode visible */
    visible?: (boolean|null);

    /** BaseNode type */
    type?: (NodeType|null);

    /** BaseNode children */
    children?: (IBaseNode[]|null);

    /** BaseNode source */
    source?: (string|null);

    /** BaseNode link */
    link?: (string|null);
}

/** Represents a BaseNode. */
export class BaseNode implements IBaseNode {

    /**
     * Constructs a new BaseNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBaseNode);

    /** BaseNode id. */
    public id: string;

    /** BaseNode name. */
    public name: string;

    /** BaseNode visible. */
    public visible: boolean;

    /** BaseNode type. */
    public type: NodeType;

    /** BaseNode children. */
    public children: IBaseNode[];

    /** BaseNode source. */
    public source: string;

    /** BaseNode link. */
    public link: string;

    /**
     * Creates a new BaseNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BaseNode instance
     */
    public static create(properties?: IBaseNode): BaseNode;

    /**
     * Encodes the specified BaseNode message. Does not implicitly {@link BaseNode.verify|verify} messages.
     * @param message BaseNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBaseNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BaseNode message, length delimited. Does not implicitly {@link BaseNode.verify|verify} messages.
     * @param message BaseNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBaseNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BaseNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BaseNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BaseNode;

    /**
     * Decodes a BaseNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BaseNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BaseNode;

    /**
     * Verifies a BaseNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BaseNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BaseNode
     */
    public static fromObject(object: { [k: string]: any }): BaseNode;

    /**
     * Creates a plain object from a BaseNode message. Also converts values to other types if specified.
     * @param message BaseNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BaseNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BaseNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BaseNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DocumentNode. */
export interface IDocumentNode {

    /** DocumentNode id */
    id?: (string|null);

    /** DocumentNode name */
    name?: (string|null);

    /** DocumentNode visible */
    visible?: (boolean|null);

    /** DocumentNode type */
    type?: (NodeType|null);

    /** DocumentNode children */
    children?: (ICanvasNode[]|null);

    /** DocumentNode source */
    source?: (string|null);

    /** DocumentNode link */
    link?: (string|null);

    /** DocumentNode exportSettings */
    exportSettings?: (IExportSetting[]|null);
}

/** Represents a DocumentNode. */
export class DocumentNode implements IDocumentNode {

    /**
     * Constructs a new DocumentNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDocumentNode);

    /** DocumentNode id. */
    public id: string;

    /** DocumentNode name. */
    public name: string;

    /** DocumentNode visible. */
    public visible: boolean;

    /** DocumentNode type. */
    public type: NodeType;

    /** DocumentNode children. */
    public children: ICanvasNode[];

    /** DocumentNode source. */
    public source: string;

    /** DocumentNode link. */
    public link: string;

    /** DocumentNode exportSettings. */
    public exportSettings: IExportSetting[];

    /**
     * Creates a new DocumentNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DocumentNode instance
     */
    public static create(properties?: IDocumentNode): DocumentNode;

    /**
     * Encodes the specified DocumentNode message. Does not implicitly {@link DocumentNode.verify|verify} messages.
     * @param message DocumentNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDocumentNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DocumentNode message, length delimited. Does not implicitly {@link DocumentNode.verify|verify} messages.
     * @param message DocumentNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDocumentNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DocumentNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DocumentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DocumentNode;

    /**
     * Decodes a DocumentNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DocumentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DocumentNode;

    /**
     * Verifies a DocumentNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DocumentNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DocumentNode
     */
    public static fromObject(object: { [k: string]: any }): DocumentNode;

    /**
     * Creates a plain object from a DocumentNode message. Also converts values to other types if specified.
     * @param message DocumentNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DocumentNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DocumentNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DocumentNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CanvasNode. */
export interface ICanvasNode {

    /** CanvasNode id */
    id?: (string|null);

    /** CanvasNode name */
    name?: (string|null);

    /** CanvasNode visible */
    visible?: (boolean|null);

    /** CanvasNode type */
    type?: (NodeType|null);

    /** CanvasNode children */
    children?: (IFrameNode[]|null);

    /** CanvasNode source */
    source?: (string|null);

    /** CanvasNode link */
    link?: (string|null);
}

/** Represents a CanvasNode. */
export class CanvasNode implements ICanvasNode {

    /**
     * Constructs a new CanvasNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICanvasNode);

    /** CanvasNode id. */
    public id: string;

    /** CanvasNode name. */
    public name: string;

    /** CanvasNode visible. */
    public visible: boolean;

    /** CanvasNode type. */
    public type: NodeType;

    /** CanvasNode children. */
    public children: IFrameNode[];

    /** CanvasNode source. */
    public source: string;

    /** CanvasNode link. */
    public link: string;

    /**
     * Creates a new CanvasNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CanvasNode instance
     */
    public static create(properties?: ICanvasNode): CanvasNode;

    /**
     * Encodes the specified CanvasNode message. Does not implicitly {@link CanvasNode.verify|verify} messages.
     * @param message CanvasNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICanvasNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CanvasNode message, length delimited. Does not implicitly {@link CanvasNode.verify|verify} messages.
     * @param message CanvasNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICanvasNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CanvasNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CanvasNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CanvasNode;

    /**
     * Decodes a CanvasNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CanvasNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CanvasNode;

    /**
     * Verifies a CanvasNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CanvasNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CanvasNode
     */
    public static fromObject(object: { [k: string]: any }): CanvasNode;

    /**
     * Creates a plain object from a CanvasNode message. Also converts values to other types if specified.
     * @param message CanvasNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CanvasNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CanvasNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CanvasNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FrameNode. */
export interface IFrameNode {

    /** FrameNode id */
    id?: (string|null);

    /** FrameNode name */
    name?: (string|null);

    /** FrameNode visible */
    visible?: (boolean|null);

    /** FrameNode type */
    type?: (NodeType|null);

    /** FrameNode children */
    children?: (IFrameChildNode[]|null);

    /** FrameNode source */
    source?: (string|null);

    /** FrameNode link */
    link?: (string|null);

    /** FrameNode backgroundColor */
    backgroundColor?: (IPaint|null);

    /** FrameNode absoluteBoundingBox */
    absoluteBoundingBox?: (IRect|null);

    /** FrameNode cornerRadius */
    cornerRadius?: (number|null);
}

/** Represents a FrameNode. */
export class FrameNode implements IFrameNode {

    /**
     * Constructs a new FrameNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameNode);

    /** FrameNode id. */
    public id: string;

    /** FrameNode name. */
    public name: string;

    /** FrameNode visible. */
    public visible: boolean;

    /** FrameNode type. */
    public type: NodeType;

    /** FrameNode children. */
    public children: IFrameChildNode[];

    /** FrameNode source. */
    public source: string;

    /** FrameNode link. */
    public link: string;

    /** FrameNode backgroundColor. */
    public backgroundColor?: (IPaint|null);

    /** FrameNode absoluteBoundingBox. */
    public absoluteBoundingBox?: (IRect|null);

    /** FrameNode cornerRadius. */
    public cornerRadius: number;

    /**
     * Creates a new FrameNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameNode instance
     */
    public static create(properties?: IFrameNode): FrameNode;

    /**
     * Encodes the specified FrameNode message. Does not implicitly {@link FrameNode.verify|verify} messages.
     * @param message FrameNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameNode message, length delimited. Does not implicitly {@link FrameNode.verify|verify} messages.
     * @param message FrameNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameNode;

    /**
     * Decodes a FrameNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameNode;

    /**
     * Verifies a FrameNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameNode
     */
    public static fromObject(object: { [k: string]: any }): FrameNode;

    /**
     * Creates a plain object from a FrameNode message. Also converts values to other types if specified.
     * @param message FrameNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FrameNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FrameChildNode. */
export interface IFrameChildNode {

    /** FrameChildNode textNode */
    textNode?: (ITextNode|null);

    /** FrameChildNode imageNode */
    imageNode?: (IImageNode|null);

    /** FrameChildNode vectorNode */
    vectorNode?: (IVectorNode|null);
}

/** Represents a FrameChildNode. */
export class FrameChildNode implements IFrameChildNode {

    /**
     * Constructs a new FrameChildNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameChildNode);

    /** FrameChildNode textNode. */
    public textNode?: (ITextNode|null);

    /** FrameChildNode imageNode. */
    public imageNode?: (IImageNode|null);

    /** FrameChildNode vectorNode. */
    public vectorNode?: (IVectorNode|null);

    /** FrameChildNode child. */
    public child?: ("textNode"|"imageNode"|"vectorNode");

    /**
     * Creates a new FrameChildNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameChildNode instance
     */
    public static create(properties?: IFrameChildNode): FrameChildNode;

    /**
     * Encodes the specified FrameChildNode message. Does not implicitly {@link FrameChildNode.verify|verify} messages.
     * @param message FrameChildNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameChildNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameChildNode message, length delimited. Does not implicitly {@link FrameChildNode.verify|verify} messages.
     * @param message FrameChildNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameChildNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameChildNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameChildNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameChildNode;

    /**
     * Decodes a FrameChildNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameChildNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameChildNode;

    /**
     * Verifies a FrameChildNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameChildNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameChildNode
     */
    public static fromObject(object: { [k: string]: any }): FrameChildNode;

    /**
     * Creates a plain object from a FrameChildNode message. Also converts values to other types if specified.
     * @param message FrameChildNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameChildNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameChildNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FrameChildNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TextNode. */
export interface ITextNode {

    /** TextNode id */
    id?: (string|null);

    /** TextNode name */
    name?: (string|null);

    /** TextNode visible */
    visible?: (boolean|null);

    /** TextNode width */
    width?: (number|null);

    /** TextNode height */
    height?: (number|null);

    /** TextNode position */
    position?: (IPosition|null);

    /** TextNode rotation */
    rotation?: (number|null);

    /** TextNode zIndex */
    zIndex?: (number|null);

    /** TextNode type */
    type?: (PaintTypeText|null);

    /** TextNode characters */
    characters?: (string|null);

    /** TextNode styles */
    styles?: (ITypeStyle|null);

    /** TextNode styleRuns */
    styleRuns?: (ITextStyleRun[]|null);
}

/** Represents a TextNode. */
export class TextNode implements ITextNode {

    /**
     * Constructs a new TextNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextNode);

    /** TextNode id. */
    public id: string;

    /** TextNode name. */
    public name: string;

    /** TextNode visible. */
    public visible: boolean;

    /** TextNode width. */
    public width: number;

    /** TextNode height. */
    public height: number;

    /** TextNode position. */
    public position?: (IPosition|null);

    /** TextNode rotation. */
    public rotation: number;

    /** TextNode zIndex. */
    public zIndex: number;

    /** TextNode type. */
    public type: PaintTypeText;

    /** TextNode characters. */
    public characters: string;

    /** TextNode styles. */
    public styles?: (ITypeStyle|null);

    /** TextNode styleRuns. */
    public styleRuns: ITextStyleRun[];

    /**
     * Creates a new TextNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextNode instance
     */
    public static create(properties?: ITextNode): TextNode;

    /**
     * Encodes the specified TextNode message. Does not implicitly {@link TextNode.verify|verify} messages.
     * @param message TextNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextNode message, length delimited. Does not implicitly {@link TextNode.verify|verify} messages.
     * @param message TextNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextNode;

    /**
     * Decodes a TextNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextNode;

    /**
     * Verifies a TextNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextNode
     */
    public static fromObject(object: { [k: string]: any }): TextNode;

    /**
     * Creates a plain object from a TextNode message. Also converts values to other types if specified.
     * @param message TextNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TextStyleRun. */
export interface ITextStyleRun {

    /** TextStyleRun start */
    start?: (number|null);

    /** TextStyleRun end */
    end?: (number|null);

    /** TextStyleRun type */
    type?: (string|null);

    /** TextStyleRun style */
    style?: (ITypeStyle|null);

    /** TextStyleRun length */
    length?: (number|null);
}

/** Represents a TextStyleRun. */
export class TextStyleRun implements ITextStyleRun {

    /**
     * Constructs a new TextStyleRun.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextStyleRun);

    /** TextStyleRun start. */
    public start: number;

    /** TextStyleRun end. */
    public end: number;

    /** TextStyleRun type. */
    public type: string;

    /** TextStyleRun style. */
    public style?: (ITypeStyle|null);

    /** TextStyleRun length. */
    public length: number;

    /**
     * Creates a new TextStyleRun instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextStyleRun instance
     */
    public static create(properties?: ITextStyleRun): TextStyleRun;

    /**
     * Encodes the specified TextStyleRun message. Does not implicitly {@link TextStyleRun.verify|verify} messages.
     * @param message TextStyleRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextStyleRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextStyleRun message, length delimited. Does not implicitly {@link TextStyleRun.verify|verify} messages.
     * @param message TextStyleRun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextStyleRun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextStyleRun message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextStyleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextStyleRun;

    /**
     * Decodes a TextStyleRun message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextStyleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextStyleRun;

    /**
     * Verifies a TextStyleRun message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextStyleRun message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextStyleRun
     */
    public static fromObject(object: { [k: string]: any }): TextStyleRun;

    /**
     * Creates a plain object from a TextStyleRun message. Also converts values to other types if specified.
     * @param message TextStyleRun
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextStyleRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextStyleRun to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextStyleRun
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ImageNode. */
export interface IImageNode {

    /** ImageNode id */
    id?: (string|null);

    /** ImageNode name */
    name?: (string|null);

    /** ImageNode visible */
    visible?: (boolean|null);

    /** ImageNode width */
    width?: (number|null);

    /** ImageNode height */
    height?: (number|null);

    /** ImageNode position */
    position?: (IPosition|null);

    /** ImageNode rotation */
    rotation?: (number|null);

    /** ImageNode zIndex */
    zIndex?: (number|null);

    /** ImageNode type */
    type?: (PaintTypeImage|null);

    /** ImageNode url */
    url?: (string|null);

    /** ImageNode styles */
    styles?: (IImageStyle|null);
}

/** Represents an ImageNode. */
export class ImageNode implements IImageNode {

    /**
     * Constructs a new ImageNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageNode);

    /** ImageNode id. */
    public id: string;

    /** ImageNode name. */
    public name: string;

    /** ImageNode visible. */
    public visible: boolean;

    /** ImageNode width. */
    public width: number;

    /** ImageNode height. */
    public height: number;

    /** ImageNode position. */
    public position?: (IPosition|null);

    /** ImageNode rotation. */
    public rotation: number;

    /** ImageNode zIndex. */
    public zIndex: number;

    /** ImageNode type. */
    public type: PaintTypeImage;

    /** ImageNode url. */
    public url: string;

    /** ImageNode styles. */
    public styles?: (IImageStyle|null);

    /**
     * Creates a new ImageNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageNode instance
     */
    public static create(properties?: IImageNode): ImageNode;

    /**
     * Encodes the specified ImageNode message. Does not implicitly {@link ImageNode.verify|verify} messages.
     * @param message ImageNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageNode message, length delimited. Does not implicitly {@link ImageNode.verify|verify} messages.
     * @param message ImageNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageNode;

    /**
     * Decodes an ImageNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageNode;

    /**
     * Verifies an ImageNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageNode
     */
    public static fromObject(object: { [k: string]: any }): ImageNode;

    /**
     * Creates a plain object from an ImageNode message. Also converts values to other types if specified.
     * @param message ImageNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VectorNode. */
export interface IVectorNode {

    /** VectorNode id */
    id?: (string|null);

    /** VectorNode name */
    name?: (string|null);

    /** VectorNode visible */
    visible?: (boolean|null);

    /** VectorNode width */
    width?: (number|null);

    /** VectorNode height */
    height?: (number|null);

    /** VectorNode position */
    position?: (IPosition|null);

    /** VectorNode rotation */
    rotation?: (number|null);

    /** VectorNode zIndex */
    zIndex?: (number|null);

    /** VectorNode type */
    type?: (PaintTypeVector|null);

    /** VectorNode paths */
    paths?: (string[]|null);

    /** VectorNode fill */
    fill?: (IPaint|null);

    /** VectorNode styles */
    styles?: (IVectorStyle|null);
}

/** Represents a VectorNode. */
export class VectorNode implements IVectorNode {

    /**
     * Constructs a new VectorNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVectorNode);

    /** VectorNode id. */
    public id: string;

    /** VectorNode name. */
    public name: string;

    /** VectorNode visible. */
    public visible: boolean;

    /** VectorNode width. */
    public width: number;

    /** VectorNode height. */
    public height: number;

    /** VectorNode position. */
    public position?: (IPosition|null);

    /** VectorNode rotation. */
    public rotation: number;

    /** VectorNode zIndex. */
    public zIndex: number;

    /** VectorNode type. */
    public type: PaintTypeVector;

    /** VectorNode paths. */
    public paths: string[];

    /** VectorNode fill. */
    public fill?: (IPaint|null);

    /** VectorNode styles. */
    public styles?: (IVectorStyle|null);

    /**
     * Creates a new VectorNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VectorNode instance
     */
    public static create(properties?: IVectorNode): VectorNode;

    /**
     * Encodes the specified VectorNode message. Does not implicitly {@link VectorNode.verify|verify} messages.
     * @param message VectorNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVectorNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VectorNode message, length delimited. Does not implicitly {@link VectorNode.verify|verify} messages.
     * @param message VectorNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVectorNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VectorNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VectorNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VectorNode;

    /**
     * Decodes a VectorNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VectorNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VectorNode;

    /**
     * Verifies a VectorNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VectorNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VectorNode
     */
    public static fromObject(object: { [k: string]: any }): VectorNode;

    /**
     * Creates a plain object from a VectorNode message. Also converts values to other types if specified.
     * @param message VectorNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VectorNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VectorNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VectorNode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Position. */
export interface IPosition {

    /** Position x */
    x?: (number|null);

    /** Position y */
    y?: (number|null);
}

/** Represents a Position. */
export class Position implements IPosition {

    /**
     * Constructs a new Position.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPosition);

    /** Position x. */
    public x: number;

    /** Position y. */
    public y: number;

    /**
     * Creates a new Position instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Position instance
     */
    public static create(properties?: IPosition): Position;

    /**
     * Encodes the specified Position message. Does not implicitly {@link Position.verify|verify} messages.
     * @param message Position message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Position message, length delimited. Does not implicitly {@link Position.verify|verify} messages.
     * @param message Position message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Position message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Position;

    /**
     * Decodes a Position message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Position;

    /**
     * Verifies a Position message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Position
     */
    public static fromObject(object: { [k: string]: any }): Position;

    /**
     * Creates a plain object from a Position message. Also converts values to other types if specified.
     * @param message Position
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Position to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Position
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Style. */
export interface IStyle {

    /** Style color */
    color?: (IPaint|null);

    /** Style backgroundColor */
    backgroundColor?: (IPaint|null);
}

/** Represents a Style. */
export class Style implements IStyle {

    /**
     * Constructs a new Style.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStyle);

    /** Style color. */
    public color?: (IPaint|null);

    /** Style backgroundColor. */
    public backgroundColor?: (IPaint|null);

    /**
     * Creates a new Style instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Style instance
     */
    public static create(properties?: IStyle): Style;

    /**
     * Encodes the specified Style message. Does not implicitly {@link Style.verify|verify} messages.
     * @param message Style message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Style message, length delimited. Does not implicitly {@link Style.verify|verify} messages.
     * @param message Style message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Style message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Style
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Style;

    /**
     * Decodes a Style message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Style
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Style;

    /**
     * Verifies a Style message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Style message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Style
     */
    public static fromObject(object: { [k: string]: any }): Style;

    /**
     * Creates a plain object from a Style message. Also converts values to other types if specified.
     * @param message Style
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Style, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Style to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Style
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Rect. */
export interface IRect {

    /** Rect x */
    x?: (number|null);

    /** Rect y */
    y?: (number|null);

    /** Rect width */
    width?: (number|null);

    /** Rect height */
    height?: (number|null);
}

/** Represents a Rect. */
export class Rect implements IRect {

    /**
     * Constructs a new Rect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRect);

    /** Rect x. */
    public x: number;

    /** Rect y. */
    public y: number;

    /** Rect width. */
    public width: number;

    /** Rect height. */
    public height: number;

    /**
     * Creates a new Rect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rect instance
     */
    public static create(properties?: IRect): Rect;

    /**
     * Encodes the specified Rect message. Does not implicitly {@link Rect.verify|verify} messages.
     * @param message Rect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Rect message, length delimited. Does not implicitly {@link Rect.verify|verify} messages.
     * @param message Rect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Rect;

    /**
     * Decodes a Rect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Rect;

    /**
     * Verifies a Rect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Rect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Rect
     */
    public static fromObject(object: { [k: string]: any }): Rect;

    /**
     * Creates a plain object from a Rect message. Also converts values to other types if specified.
     * @param message Rect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Rect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Rect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Rect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ColorStop. */
export interface IColorStop {

    /** ColorStop position */
    position?: (number|null);

    /** ColorStop color */
    color?: (IColor|null);
}

/** Represents a ColorStop. */
export class ColorStop implements IColorStop {

    /**
     * Constructs a new ColorStop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IColorStop);

    /** ColorStop position. */
    public position: number;

    /** ColorStop color. */
    public color?: (IColor|null);

    /**
     * Creates a new ColorStop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ColorStop instance
     */
    public static create(properties?: IColorStop): ColorStop;

    /**
     * Encodes the specified ColorStop message. Does not implicitly {@link ColorStop.verify|verify} messages.
     * @param message ColorStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IColorStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ColorStop message, length delimited. Does not implicitly {@link ColorStop.verify|verify} messages.
     * @param message ColorStop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IColorStop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ColorStop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ColorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ColorStop;

    /**
     * Decodes a ColorStop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ColorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ColorStop;

    /**
     * Verifies a ColorStop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ColorStop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ColorStop
     */
    public static fromObject(object: { [k: string]: any }): ColorStop;

    /**
     * Creates a plain object from a ColorStop message. Also converts values to other types if specified.
     * @param message ColorStop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ColorStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ColorStop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ColorStop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ExportSetting. */
export interface IExportSetting {

    /** ExportSetting format */
    format?: (ExportFormat|null);
}

/** Represents an ExportSetting. */
export class ExportSetting implements IExportSetting {

    /**
     * Constructs a new ExportSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExportSetting);

    /** ExportSetting format. */
    public format: ExportFormat;

    /**
     * Creates a new ExportSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExportSetting instance
     */
    public static create(properties?: IExportSetting): ExportSetting;

    /**
     * Encodes the specified ExportSetting message. Does not implicitly {@link ExportSetting.verify|verify} messages.
     * @param message ExportSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExportSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExportSetting message, length delimited. Does not implicitly {@link ExportSetting.verify|verify} messages.
     * @param message ExportSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExportSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExportSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExportSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExportSetting;

    /**
     * Decodes an ExportSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExportSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExportSetting;

    /**
     * Verifies an ExportSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExportSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExportSetting
     */
    public static fromObject(object: { [k: string]: any }): ExportSetting;

    /**
     * Creates a plain object from an ExportSetting message. Also converts values to other types if specified.
     * @param message ExportSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExportSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExportSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ExportSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Paint. */
export interface IPaint {

    /** Paint type */
    type?: (PaintType|null);

    /** Paint visible */
    visible?: (boolean|null);

    /** Paint opacity */
    opacity?: (number|null);

    /** Paint color */
    color?: (IColor|null);

    /** Paint blendMode */
    blendMode?: (BlendMode|null);

    /** Paint gradientHandlePositions */
    gradientHandlePositions?: (IPosition[]|null);

    /** Paint gradientStops */
    gradientStops?: (IColorStop[]|null);
}

/** Represents a Paint. */
export class Paint implements IPaint {

    /**
     * Constructs a new Paint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPaint);

    /** Paint type. */
    public type: PaintType;

    /** Paint visible. */
    public visible: boolean;

    /** Paint opacity. */
    public opacity: number;

    /** Paint color. */
    public color?: (IColor|null);

    /** Paint blendMode. */
    public blendMode: BlendMode;

    /** Paint gradientHandlePositions. */
    public gradientHandlePositions: IPosition[];

    /** Paint gradientStops. */
    public gradientStops: IColorStop[];

    /**
     * Creates a new Paint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Paint instance
     */
    public static create(properties?: IPaint): Paint;

    /**
     * Encodes the specified Paint message. Does not implicitly {@link Paint.verify|verify} messages.
     * @param message Paint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPaint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Paint message, length delimited. Does not implicitly {@link Paint.verify|verify} messages.
     * @param message Paint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPaint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Paint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Paint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Paint;

    /**
     * Decodes a Paint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Paint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Paint;

    /**
     * Verifies a Paint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Paint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Paint
     */
    public static fromObject(object: { [k: string]: any }): Paint;

    /**
     * Creates a plain object from a Paint message. Also converts values to other types if specified.
     * @param message Paint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Paint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Paint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Paint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Color. */
export interface IColor {

    /** Color r */
    r?: (number|null);

    /** Color g */
    g?: (number|null);

    /** Color b */
    b?: (number|null);

    /** Color a */
    a?: (number|null);
}

/** Represents a Color. */
export class Color implements IColor {

    /**
     * Constructs a new Color.
     * @param [properties] Properties to set
     */
    constructor(properties?: IColor);

    /** Color r. */
    public r: number;

    /** Color g. */
    public g: number;

    /** Color b. */
    public b: number;

    /** Color a. */
    public a: number;

    /**
     * Creates a new Color instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Color instance
     */
    public static create(properties?: IColor): Color;

    /**
     * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
     * @param message Color message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
     * @param message Color message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Color;

    /**
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Color;

    /**
     * Verifies a Color message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Color
     */
    public static fromObject(object: { [k: string]: any }): Color;

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @param message Color
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Color to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Color
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Border. */
export interface IBorder {

    /** Border width */
    width?: (number|null);

    /** Border color */
    color?: (IColor|null);

    /** Border style */
    style?: (BorderStyle|null);

    /** Border radius */
    radius?: (IBorderRadius|null);

    /** Border dashWidth */
    dashWidth?: (number|null);

    /** Border dashGap */
    dashGap?: (number|null);

    /** Border dashCap */
    dashCap?: (DashCap|null);
}

/** Represents a Border. */
export class Border implements IBorder {

    /**
     * Constructs a new Border.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBorder);

    /** Border width. */
    public width: number;

    /** Border color. */
    public color?: (IColor|null);

    /** Border style. */
    public style: BorderStyle;

    /** Border radius. */
    public radius?: (IBorderRadius|null);

    /** Border dashWidth. */
    public dashWidth: number;

    /** Border dashGap. */
    public dashGap: number;

    /** Border dashCap. */
    public dashCap: DashCap;

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

/** Properties of a BorderRadius. */
export interface IBorderRadius {

    /** BorderRadius topLeft */
    topLeft?: (number|null);

    /** BorderRadius topRight */
    topRight?: (number|null);

    /** BorderRadius bottomLeft */
    bottomLeft?: (number|null);

    /** BorderRadius bottomRight */
    bottomRight?: (number|null);
}

/** Represents a BorderRadius. */
export class BorderRadius implements IBorderRadius {

    /**
     * Constructs a new BorderRadius.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBorderRadius);

    /** BorderRadius topLeft. */
    public topLeft: number;

    /** BorderRadius topRight. */
    public topRight: number;

    /** BorderRadius bottomLeft. */
    public bottomLeft: number;

    /** BorderRadius bottomRight. */
    public bottomRight: number;

    /**
     * Creates a new BorderRadius instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BorderRadius instance
     */
    public static create(properties?: IBorderRadius): BorderRadius;

    /**
     * Encodes the specified BorderRadius message. Does not implicitly {@link BorderRadius.verify|verify} messages.
     * @param message BorderRadius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBorderRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BorderRadius message, length delimited. Does not implicitly {@link BorderRadius.verify|verify} messages.
     * @param message BorderRadius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBorderRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BorderRadius message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BorderRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BorderRadius;

    /**
     * Decodes a BorderRadius message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BorderRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BorderRadius;

    /**
     * Verifies a BorderRadius message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BorderRadius message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BorderRadius
     */
    public static fromObject(object: { [k: string]: any }): BorderRadius;

    /**
     * Creates a plain object from a BorderRadius message. Also converts values to other types if specified.
     * @param message BorderRadius
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BorderRadius, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BorderRadius to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BorderRadius
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TextEffect. */
export interface ITextEffect {

    /** TextEffect type */
    type?: (TextEffectType|null);

    /** TextEffect offsetX */
    offsetX?: (number|null);

    /** TextEffect offsetY */
    offsetY?: (number|null);

    /** TextEffect color */
    color?: (IColor|null);

    /** TextEffect blurRadius */
    blurRadius?: (number|null);

    /** TextEffect opacity */
    opacity?: (number|null);

    /** TextEffect blendMode */
    blendMode?: (BlendMode|null);
}

/** Represents a TextEffect. */
export class TextEffect implements ITextEffect {

    /**
     * Constructs a new TextEffect.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextEffect);

    /** TextEffect type. */
    public type: TextEffectType;

    /** TextEffect offsetX. */
    public offsetX: number;

    /** TextEffect offsetY. */
    public offsetY: number;

    /** TextEffect color. */
    public color?: (IColor|null);

    /** TextEffect blurRadius. */
    public blurRadius: number;

    /** TextEffect opacity. */
    public opacity: number;

    /** TextEffect blendMode. */
    public blendMode: BlendMode;

    /**
     * Creates a new TextEffect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextEffect instance
     */
    public static create(properties?: ITextEffect): TextEffect;

    /**
     * Encodes the specified TextEffect message. Does not implicitly {@link TextEffect.verify|verify} messages.
     * @param message TextEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextEffect message, length delimited. Does not implicitly {@link TextEffect.verify|verify} messages.
     * @param message TextEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextEffect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextEffect;

    /**
     * Decodes a TextEffect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextEffect;

    /**
     * Verifies a TextEffect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextEffect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextEffect
     */
    public static fromObject(object: { [k: string]: any }): TextEffect;

    /**
     * Creates a plain object from a TextEffect message. Also converts values to other types if specified.
     * @param message TextEffect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextEffect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextEffect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ImageEffect. */
export interface IImageEffect {

    /** ImageEffect type */
    type?: (ImageEffectType|null);

    /** ImageEffect offsetX */
    offsetX?: (number|null);

    /** ImageEffect offsetY */
    offsetY?: (number|null);

    /** ImageEffect blurRadius */
    blurRadius?: (number|null);

    /** ImageEffect color */
    color?: (IColor|null);

    /** ImageEffect opacity */
    opacity?: (number|null);

    /** ImageEffect blendMode */
    blendMode?: (BlendMode|null);
}

/** Represents an ImageEffect. */
export class ImageEffect implements IImageEffect {

    /**
     * Constructs a new ImageEffect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageEffect);

    /** ImageEffect type. */
    public type: ImageEffectType;

    /** ImageEffect offsetX. */
    public offsetX: number;

    /** ImageEffect offsetY. */
    public offsetY: number;

    /** ImageEffect blurRadius. */
    public blurRadius: number;

    /** ImageEffect color. */
    public color?: (IColor|null);

    /** ImageEffect opacity. */
    public opacity: number;

    /** ImageEffect blendMode. */
    public blendMode: BlendMode;

    /**
     * Creates a new ImageEffect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageEffect instance
     */
    public static create(properties?: IImageEffect): ImageEffect;

    /**
     * Encodes the specified ImageEffect message. Does not implicitly {@link ImageEffect.verify|verify} messages.
     * @param message ImageEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageEffect message, length delimited. Does not implicitly {@link ImageEffect.verify|verify} messages.
     * @param message ImageEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageEffect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageEffect;

    /**
     * Decodes an ImageEffect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageEffect;

    /**
     * Verifies an ImageEffect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageEffect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageEffect
     */
    public static fromObject(object: { [k: string]: any }): ImageEffect;

    /**
     * Creates a plain object from an ImageEffect message. Also converts values to other types if specified.
     * @param message ImageEffect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageEffect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageEffect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VectorEffect. */
export interface IVectorEffect {

    /** VectorEffect type */
    type?: (VectorEffectType|null);

    /** VectorEffect offsetX */
    offsetX?: (number|null);

    /** VectorEffect offsetY */
    offsetY?: (number|null);

    /** VectorEffect blurRadius */
    blurRadius?: (number|null);

    /** VectorEffect color */
    color?: (IColor|null);

    /** VectorEffect opacity */
    opacity?: (number|null);

    /** VectorEffect blendMode */
    blendMode?: (BlendMode|null);
}

/** Represents a VectorEffect. */
export class VectorEffect implements IVectorEffect {

    /**
     * Constructs a new VectorEffect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVectorEffect);

    /** VectorEffect type. */
    public type: VectorEffectType;

    /** VectorEffect offsetX. */
    public offsetX: number;

    /** VectorEffect offsetY. */
    public offsetY: number;

    /** VectorEffect blurRadius. */
    public blurRadius: number;

    /** VectorEffect color. */
    public color?: (IColor|null);

    /** VectorEffect opacity. */
    public opacity: number;

    /** VectorEffect blendMode. */
    public blendMode: BlendMode;

    /**
     * Creates a new VectorEffect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VectorEffect instance
     */
    public static create(properties?: IVectorEffect): VectorEffect;

    /**
     * Encodes the specified VectorEffect message. Does not implicitly {@link VectorEffect.verify|verify} messages.
     * @param message VectorEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVectorEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VectorEffect message, length delimited. Does not implicitly {@link VectorEffect.verify|verify} messages.
     * @param message VectorEffect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVectorEffect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VectorEffect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VectorEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VectorEffect;

    /**
     * Decodes a VectorEffect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VectorEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VectorEffect;

    /**
     * Verifies a VectorEffect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VectorEffect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VectorEffect
     */
    public static fromObject(object: { [k: string]: any }): VectorEffect;

    /**
     * Creates a plain object from a VectorEffect message. Also converts values to other types if specified.
     * @param message VectorEffect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VectorEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VectorEffect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VectorEffect
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TypeStyle. */
export interface ITypeStyle {

    /** TypeStyle fontFamily */
    fontFamily?: (string|null);

    /** TypeStyle fontPostScriptName */
    fontPostScriptName?: (string|null);

    /** TypeStyle paragraphSpacing */
    paragraphSpacing?: (number|null);

    /** TypeStyle paragraphIndent */
    paragraphIndent?: (number|null);

    /** TypeStyle italic */
    italic?: (boolean|null);

    /** TypeStyle fontWeight */
    fontWeight?: (number|null);

    /** TypeStyle fontSize */
    fontSize?: (number|null);

    /** TypeStyle textAlignHorizontal */
    textAlignHorizontal?: (TextAlignHorizontal|null);

    /** TypeStyle textAlignVertical */
    textAlignVertical?: (TextAlignVertical|null);

    /** TypeStyle letterSpacing */
    letterSpacing?: (number|null);

    /** TypeStyle lineHeightPx */
    lineHeightPx?: (number|null);

    /** TypeStyle lineHeightPercent */
    lineHeightPercent?: (number|null);

    /** TypeStyle lineHeightUnit */
    lineHeightUnit?: (LineHeightUnit|null);

    /** TypeStyle textCase */
    textCase?: (TextCase|null);

    /** TypeStyle textDecoration */
    textDecoration?: (TextDecoration|null);

    /** TypeStyle lineHeightPercentFontSize */
    lineHeightPercentFontSize?: (number|null);

    /** TypeStyle fontBaseline */
    fontBaseline?: (number|null);

    /** TypeStyle customBaselineOffset */
    customBaselineOffset?: (number|null);

    /** TypeStyle rotation */
    rotation?: (number|null);

    /** TypeStyle border */
    border?: (IBorder|null);

    /** TypeStyle effects */
    effects?: (ITextEffect[]|null);

    /** TypeStyle color */
    color?: (IPaint|null);

    /** TypeStyle backgroundColor */
    backgroundColor?: (IPaint|null);
}

/** Represents a TypeStyle. */
export class TypeStyle implements ITypeStyle {

    /**
     * Constructs a new TypeStyle.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITypeStyle);

    /** TypeStyle fontFamily. */
    public fontFamily: string;

    /** TypeStyle fontPostScriptName. */
    public fontPostScriptName: string;

    /** TypeStyle paragraphSpacing. */
    public paragraphSpacing: number;

    /** TypeStyle paragraphIndent. */
    public paragraphIndent: number;

    /** TypeStyle italic. */
    public italic: boolean;

    /** TypeStyle fontWeight. */
    public fontWeight: number;

    /** TypeStyle fontSize. */
    public fontSize: number;

    /** TypeStyle textAlignHorizontal. */
    public textAlignHorizontal: TextAlignHorizontal;

    /** TypeStyle textAlignVertical. */
    public textAlignVertical: TextAlignVertical;

    /** TypeStyle letterSpacing. */
    public letterSpacing: number;

    /** TypeStyle lineHeightPx. */
    public lineHeightPx: number;

    /** TypeStyle lineHeightPercent. */
    public lineHeightPercent: number;

    /** TypeStyle lineHeightUnit. */
    public lineHeightUnit: LineHeightUnit;

    /** TypeStyle textCase. */
    public textCase: TextCase;

    /** TypeStyle textDecoration. */
    public textDecoration: TextDecoration;

    /** TypeStyle lineHeightPercentFontSize. */
    public lineHeightPercentFontSize: number;

    /** TypeStyle fontBaseline. */
    public fontBaseline: number;

    /** TypeStyle customBaselineOffset. */
    public customBaselineOffset: number;

    /** TypeStyle rotation. */
    public rotation: number;

    /** TypeStyle border. */
    public border?: (IBorder|null);

    /** TypeStyle effects. */
    public effects: ITextEffect[];

    /** TypeStyle color. */
    public color?: (IPaint|null);

    /** TypeStyle backgroundColor. */
    public backgroundColor?: (IPaint|null);

    /**
     * Creates a new TypeStyle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TypeStyle instance
     */
    public static create(properties?: ITypeStyle): TypeStyle;

    /**
     * Encodes the specified TypeStyle message. Does not implicitly {@link TypeStyle.verify|verify} messages.
     * @param message TypeStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITypeStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TypeStyle message, length delimited. Does not implicitly {@link TypeStyle.verify|verify} messages.
     * @param message TypeStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITypeStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TypeStyle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TypeStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TypeStyle;

    /**
     * Decodes a TypeStyle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TypeStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TypeStyle;

    /**
     * Verifies a TypeStyle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TypeStyle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TypeStyle
     */
    public static fromObject(object: { [k: string]: any }): TypeStyle;

    /**
     * Creates a plain object from a TypeStyle message. Also converts values to other types if specified.
     * @param message TypeStyle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TypeStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TypeStyle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TypeStyle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TransformProperties. */
export interface ITransformProperties {

    /** TransformProperties position */
    position?: (IPosition|null);

    /** TransformProperties rotation */
    rotation?: (number|null);
}

/** Represents a TransformProperties. */
export class TransformProperties implements ITransformProperties {

    /**
     * Constructs a new TransformProperties.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransformProperties);

    /** TransformProperties position. */
    public position?: (IPosition|null);

    /** TransformProperties rotation. */
    public rotation: number;

    /**
     * Creates a new TransformProperties instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransformProperties instance
     */
    public static create(properties?: ITransformProperties): TransformProperties;

    /**
     * Encodes the specified TransformProperties message. Does not implicitly {@link TransformProperties.verify|verify} messages.
     * @param message TransformProperties message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransformProperties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransformProperties message, length delimited. Does not implicitly {@link TransformProperties.verify|verify} messages.
     * @param message TransformProperties message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransformProperties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransformProperties message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransformProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransformProperties;

    /**
     * Decodes a TransformProperties message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransformProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransformProperties;

    /**
     * Verifies a TransformProperties message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransformProperties message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransformProperties
     */
    public static fromObject(object: { [k: string]: any }): TransformProperties;

    /**
     * Creates a plain object from a TransformProperties message. Also converts values to other types if specified.
     * @param message TransformProperties
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransformProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransformProperties to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TransformProperties
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ImageStyle. */
export interface IImageStyle {

    /** ImageStyle scaleMode */
    scaleMode?: (ScaleMode|null);

    /** ImageStyle scale */
    scale?: (number|null);

    /** ImageStyle border */
    border?: (IBorder|null);

    /** ImageStyle blur */
    blur?: (number|null);

    /** ImageStyle effects */
    effects?: (IImageEffect[]|null);

    /** ImageStyle transform */
    transform?: (ITransformProperties|null);

    /** ImageStyle color */
    color?: (IPaint|null);

    /** ImageStyle backgroundColor */
    backgroundColor?: (IPaint|null);
}

/** Represents an ImageStyle. */
export class ImageStyle implements IImageStyle {

    /**
     * Constructs a new ImageStyle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageStyle);

    /** ImageStyle scaleMode. */
    public scaleMode: ScaleMode;

    /** ImageStyle scale. */
    public scale: number;

    /** ImageStyle border. */
    public border?: (IBorder|null);

    /** ImageStyle blur. */
    public blur: number;

    /** ImageStyle effects. */
    public effects: IImageEffect[];

    /** ImageStyle transform. */
    public transform?: (ITransformProperties|null);

    /** ImageStyle color. */
    public color?: (IPaint|null);

    /** ImageStyle backgroundColor. */
    public backgroundColor?: (IPaint|null);

    /**
     * Creates a new ImageStyle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageStyle instance
     */
    public static create(properties?: IImageStyle): ImageStyle;

    /**
     * Encodes the specified ImageStyle message. Does not implicitly {@link ImageStyle.verify|verify} messages.
     * @param message ImageStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageStyle message, length delimited. Does not implicitly {@link ImageStyle.verify|verify} messages.
     * @param message ImageStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageStyle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageStyle;

    /**
     * Decodes an ImageStyle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageStyle;

    /**
     * Verifies an ImageStyle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageStyle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageStyle
     */
    public static fromObject(object: { [k: string]: any }): ImageStyle;

    /**
     * Creates a plain object from an ImageStyle message. Also converts values to other types if specified.
     * @param message ImageStyle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageStyle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ImageStyle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VectorStyle. */
export interface IVectorStyle {

    /** VectorStyle rotation */
    rotation?: (number|null);

    /** VectorStyle border */
    border?: (IBorder|null);

    /** VectorStyle blur */
    blur?: (number|null);

    /** VectorStyle effects */
    effects?: (IVectorEffect[]|null);

    /** VectorStyle color */
    color?: (IPaint|null);

    /** VectorStyle backgroundColor */
    backgroundColor?: (IPaint|null);
}

/** Represents a VectorStyle. */
export class VectorStyle implements IVectorStyle {

    /**
     * Constructs a new VectorStyle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVectorStyle);

    /** VectorStyle rotation. */
    public rotation: number;

    /** VectorStyle border. */
    public border?: (IBorder|null);

    /** VectorStyle blur. */
    public blur: number;

    /** VectorStyle effects. */
    public effects: IVectorEffect[];

    /** VectorStyle color. */
    public color?: (IPaint|null);

    /** VectorStyle backgroundColor. */
    public backgroundColor?: (IPaint|null);

    /**
     * Creates a new VectorStyle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VectorStyle instance
     */
    public static create(properties?: IVectorStyle): VectorStyle;

    /**
     * Encodes the specified VectorStyle message. Does not implicitly {@link VectorStyle.verify|verify} messages.
     * @param message VectorStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVectorStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VectorStyle message, length delimited. Does not implicitly {@link VectorStyle.verify|verify} messages.
     * @param message VectorStyle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVectorStyle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VectorStyle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VectorStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VectorStyle;

    /**
     * Decodes a VectorStyle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VectorStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VectorStyle;

    /**
     * Verifies a VectorStyle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VectorStyle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VectorStyle
     */
    public static fromObject(object: { [k: string]: any }): VectorStyle;

    /**
     * Creates a plain object from a VectorStyle message. Also converts values to other types if specified.
     * @param message VectorStyle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VectorStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VectorStyle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VectorStyle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RPFFileResponse. */
export interface IRPFFileResponse {

    /** RPFFileResponse document */
    document?: (IDocumentNode|null);

    /** RPFFileResponse schemaVersion */
    schemaVersion?: (number|null);

    /** RPFFileResponse source */
    source?: (string|null);

    /** RPFFileResponse version */
    version?: (string|null);
}

/** Represents a RPFFileResponse. */
export class RPFFileResponse implements IRPFFileResponse {

    /**
     * Constructs a new RPFFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRPFFileResponse);

    /** RPFFileResponse document. */
    public document?: (IDocumentNode|null);

    /** RPFFileResponse schemaVersion. */
    public schemaVersion: number;

    /** RPFFileResponse source. */
    public source: string;

    /** RPFFileResponse version. */
    public version: string;

    /**
     * Creates a new RPFFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RPFFileResponse instance
     */
    public static create(properties?: IRPFFileResponse): RPFFileResponse;

    /**
     * Encodes the specified RPFFileResponse message. Does not implicitly {@link RPFFileResponse.verify|verify} messages.
     * @param message RPFFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRPFFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RPFFileResponse message, length delimited. Does not implicitly {@link RPFFileResponse.verify|verify} messages.
     * @param message RPFFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRPFFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RPFFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RPFFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RPFFileResponse;

    /**
     * Decodes a RPFFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RPFFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RPFFileResponse;

    /**
     * Verifies a RPFFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RPFFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RPFFileResponse
     */
    public static fromObject(object: { [k: string]: any }): RPFFileResponse;

    /**
     * Creates a plain object from a RPFFileResponse message. Also converts values to other types if specified.
     * @param message RPFFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RPFFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RPFFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RPFFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** NodeType enum. */
export enum NodeType {
    DOCUMENT = 0,
    CANVAS = 1,
    FRAME = 2
}

/** ExportFormat enum. */
export enum ExportFormat {
    JPG = 0,
    PNG = 1,
    SVG = 2,
    PDF = 3,
    VIDEO = 4
}

/** PaintType enum. */
export enum PaintType {
    SOLID = 0,
    GRADIENT_LINEAR = 1,
    GRADIENT_RADIAL = 2
}

/** PaintTypeText enum. */
export enum PaintTypeText {
    TEXT = 0
}

/** PaintTypeImage enum. */
export enum PaintTypeImage {
    IMAGE = 0
}

/** PaintTypeVector enum. */
export enum PaintTypeVector {
    VECTOR = 0
}

/** BlendMode enum. */
export enum BlendMode {
    PASS_THROUGH = 0,
    NORMAL = 1
}

/** BorderStyle enum. */
export enum BorderStyle {
    SOLID = 0,
    DASHED = 1,
    DOTTED = 2
}

/** DashCap enum. */
export enum DashCap {
    BUTT = 0,
    ROUND = 1,
    SQUARE = 2
}

/** TextEffectType enum. */
export enum TextEffectType {
    SHADOW = 0,
    REFLECTION = 1,
    GLOW = 2
}

/** ImageEffectType enum. */
export enum ImageEffectType {
    SHADOW = 0,
    CAST_SHADOW = 1,
    REFLECTION = 2,
    GLOW = 3
}

/** VectorEffectType enum. */
export enum VectorEffectType {
    SHADOW = 0
}

/** TextAlignHorizontal enum. */
export enum TextAlignHorizontal {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    JUSTIFIED = 3
}

/** TextAlignVertical enum. */
export enum TextAlignVertical {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2
}

/** LineHeightUnit enum. */
export enum LineHeightUnit {
    PIXELS = 0,
    FONT_SIZE_PERCENT = 1
}

/** TextCase enum. */
export enum TextCase {
    UPPER = 0,
    LOWER = 1,
    TITLE = 2
}

/** TextDecoration enum. */
export enum TextDecoration {
    STRIKETHROUGH = 0,
    UNDERLINE = 1
}

/** ScaleMode enum. */
export enum ScaleMode {
    FILL = 0,
    FIT = 1
}
