/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const BaseNode = $root.BaseNode = (() => {

    /**
     * Properties of a BaseNode.
     * @exports IBaseNode
     * @interface IBaseNode
     * @property {string|null} [id] BaseNode id
     * @property {string|null} [name] BaseNode name
     * @property {boolean|null} [visible] BaseNode visible
     * @property {string|null} [type] BaseNode type
     * @property {Array.<IBaseNode>|null} [children] BaseNode children
     * @property {string|null} [source] BaseNode source
     * @property {string|null} [link] BaseNode link
     */

    /**
     * Constructs a new BaseNode.
     * @exports BaseNode
     * @classdesc Represents a BaseNode.
     * @implements IBaseNode
     * @constructor
     * @param {IBaseNode=} [properties] Properties to set
     */
    function BaseNode(properties) {
        this.children = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BaseNode id.
     * @member {string} id
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.id = "";

    /**
     * BaseNode name.
     * @member {string} name
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.name = "";

    /**
     * BaseNode visible.
     * @member {boolean} visible
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.visible = false;

    /**
     * BaseNode type.
     * @member {string} type
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.type = "";

    /**
     * BaseNode children.
     * @member {Array.<IBaseNode>} children
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.children = $util.emptyArray;

    /**
     * BaseNode source.
     * @member {string} source
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.source = "";

    /**
     * BaseNode link.
     * @member {string} link
     * @memberof BaseNode
     * @instance
     */
    BaseNode.prototype.link = "";

    /**
     * Creates a new BaseNode instance using the specified properties.
     * @function create
     * @memberof BaseNode
     * @static
     * @param {IBaseNode=} [properties] Properties to set
     * @returns {BaseNode} BaseNode instance
     */
    BaseNode.create = function create(properties) {
        return new BaseNode(properties);
    };

    /**
     * Encodes the specified BaseNode message. Does not implicitly {@link BaseNode.verify|verify} messages.
     * @function encode
     * @memberof BaseNode
     * @static
     * @param {IBaseNode} message BaseNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaseNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
        if (message.children != null && message.children.length)
            for (let i = 0; i < message.children.length; ++i)
                $root.BaseNode.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.source);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.link);
        return writer;
    };

    /**
     * Encodes the specified BaseNode message, length delimited. Does not implicitly {@link BaseNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseNode
     * @static
     * @param {IBaseNode} message BaseNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BaseNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BaseNode message from the specified reader or buffer.
     * @function decode
     * @memberof BaseNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseNode} BaseNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaseNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BaseNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.type = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.children && message.children.length))
                        message.children = [];
                    message.children.push($root.BaseNode.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.source = reader.string();
                    break;
                }
            case 7: {
                    message.link = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BaseNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseNode} BaseNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BaseNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BaseNode message.
     * @function verify
     * @memberof BaseNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BaseNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!Array.isArray(message.children))
                return "children: array expected";
            for (let i = 0; i < message.children.length; ++i) {
                let error = $root.BaseNode.verify(message.children[i]);
                if (error)
                    return "children." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        return null;
    };

    /**
     * Creates a BaseNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseNode} BaseNode
     */
    BaseNode.fromObject = function fromObject(object) {
        if (object instanceof $root.BaseNode)
            return object;
        let message = new $root.BaseNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.type != null)
            message.type = String(object.type);
        if (object.children) {
            if (!Array.isArray(object.children))
                throw TypeError(".BaseNode.children: array expected");
            message.children = [];
            for (let i = 0; i < object.children.length; ++i) {
                if (typeof object.children[i] !== "object")
                    throw TypeError(".BaseNode.children: object expected");
                message.children[i] = $root.BaseNode.fromObject(object.children[i]);
            }
        }
        if (object.source != null)
            message.source = String(object.source);
        if (object.link != null)
            message.link = String(object.link);
        return message;
    };

    /**
     * Creates a plain object from a BaseNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseNode
     * @static
     * @param {BaseNode} message BaseNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BaseNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.children = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.type = "";
            object.source = "";
            object.link = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.children && message.children.length) {
            object.children = [];
            for (let j = 0; j < message.children.length; ++j)
                object.children[j] = $root.BaseNode.toObject(message.children[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        return object;
    };

    /**
     * Converts this BaseNode to JSON.
     * @function toJSON
     * @memberof BaseNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BaseNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BaseNode
     * @function getTypeUrl
     * @memberof BaseNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BaseNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BaseNode";
    };

    return BaseNode;
})();

export const DocumentNode = $root.DocumentNode = (() => {

    /**
     * Properties of a DocumentNode.
     * @exports IDocumentNode
     * @interface IDocumentNode
     * @property {string|null} [id] DocumentNode id
     * @property {string|null} [name] DocumentNode name
     * @property {boolean|null} [visible] DocumentNode visible
     * @property {string|null} [type] DocumentNode type
     * @property {Array.<ICanvasNode>|null} [children] DocumentNode children
     * @property {string|null} [source] DocumentNode source
     * @property {string|null} [link] DocumentNode link
     * @property {Array.<IExportSetting>|null} [exportSettings] DocumentNode exportSettings
     */

    /**
     * Constructs a new DocumentNode.
     * @exports DocumentNode
     * @classdesc Represents a DocumentNode.
     * @implements IDocumentNode
     * @constructor
     * @param {IDocumentNode=} [properties] Properties to set
     */
    function DocumentNode(properties) {
        this.children = [];
        this.exportSettings = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DocumentNode id.
     * @member {string} id
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.id = "";

    /**
     * DocumentNode name.
     * @member {string} name
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.name = "";

    /**
     * DocumentNode visible.
     * @member {boolean} visible
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.visible = false;

    /**
     * DocumentNode type.
     * @member {string} type
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.type = "";

    /**
     * DocumentNode children.
     * @member {Array.<ICanvasNode>} children
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.children = $util.emptyArray;

    /**
     * DocumentNode source.
     * @member {string} source
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.source = "";

    /**
     * DocumentNode link.
     * @member {string} link
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.link = "";

    /**
     * DocumentNode exportSettings.
     * @member {Array.<IExportSetting>} exportSettings
     * @memberof DocumentNode
     * @instance
     */
    DocumentNode.prototype.exportSettings = $util.emptyArray;

    /**
     * Creates a new DocumentNode instance using the specified properties.
     * @function create
     * @memberof DocumentNode
     * @static
     * @param {IDocumentNode=} [properties] Properties to set
     * @returns {DocumentNode} DocumentNode instance
     */
    DocumentNode.create = function create(properties) {
        return new DocumentNode(properties);
    };

    /**
     * Encodes the specified DocumentNode message. Does not implicitly {@link DocumentNode.verify|verify} messages.
     * @function encode
     * @memberof DocumentNode
     * @static
     * @param {IDocumentNode} message DocumentNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DocumentNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
        if (message.children != null && message.children.length)
            for (let i = 0; i < message.children.length; ++i)
                $root.CanvasNode.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.source);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.link);
        if (message.exportSettings != null && message.exportSettings.length)
            for (let i = 0; i < message.exportSettings.length; ++i)
                $root.ExportSetting.encode(message.exportSettings[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DocumentNode message, length delimited. Does not implicitly {@link DocumentNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DocumentNode
     * @static
     * @param {IDocumentNode} message DocumentNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DocumentNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DocumentNode message from the specified reader or buffer.
     * @function decode
     * @memberof DocumentNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DocumentNode} DocumentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DocumentNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DocumentNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.type = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.children && message.children.length))
                        message.children = [];
                    message.children.push($root.CanvasNode.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.source = reader.string();
                    break;
                }
            case 7: {
                    message.link = reader.string();
                    break;
                }
            case 8: {
                    if (!(message.exportSettings && message.exportSettings.length))
                        message.exportSettings = [];
                    message.exportSettings.push($root.ExportSetting.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DocumentNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DocumentNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DocumentNode} DocumentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DocumentNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DocumentNode message.
     * @function verify
     * @memberof DocumentNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DocumentNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!Array.isArray(message.children))
                return "children: array expected";
            for (let i = 0; i < message.children.length; ++i) {
                let error = $root.CanvasNode.verify(message.children[i]);
                if (error)
                    return "children." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        if (message.exportSettings != null && message.hasOwnProperty("exportSettings")) {
            if (!Array.isArray(message.exportSettings))
                return "exportSettings: array expected";
            for (let i = 0; i < message.exportSettings.length; ++i) {
                let error = $root.ExportSetting.verify(message.exportSettings[i]);
                if (error)
                    return "exportSettings." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DocumentNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DocumentNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DocumentNode} DocumentNode
     */
    DocumentNode.fromObject = function fromObject(object) {
        if (object instanceof $root.DocumentNode)
            return object;
        let message = new $root.DocumentNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.type != null)
            message.type = String(object.type);
        if (object.children) {
            if (!Array.isArray(object.children))
                throw TypeError(".DocumentNode.children: array expected");
            message.children = [];
            for (let i = 0; i < object.children.length; ++i) {
                if (typeof object.children[i] !== "object")
                    throw TypeError(".DocumentNode.children: object expected");
                message.children[i] = $root.CanvasNode.fromObject(object.children[i]);
            }
        }
        if (object.source != null)
            message.source = String(object.source);
        if (object.link != null)
            message.link = String(object.link);
        if (object.exportSettings) {
            if (!Array.isArray(object.exportSettings))
                throw TypeError(".DocumentNode.exportSettings: array expected");
            message.exportSettings = [];
            for (let i = 0; i < object.exportSettings.length; ++i) {
                if (typeof object.exportSettings[i] !== "object")
                    throw TypeError(".DocumentNode.exportSettings: object expected");
                message.exportSettings[i] = $root.ExportSetting.fromObject(object.exportSettings[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DocumentNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DocumentNode
     * @static
     * @param {DocumentNode} message DocumentNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DocumentNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.children = [];
            object.exportSettings = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.type = "";
            object.source = "";
            object.link = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.children && message.children.length) {
            object.children = [];
            for (let j = 0; j < message.children.length; ++j)
                object.children[j] = $root.CanvasNode.toObject(message.children[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.exportSettings && message.exportSettings.length) {
            object.exportSettings = [];
            for (let j = 0; j < message.exportSettings.length; ++j)
                object.exportSettings[j] = $root.ExportSetting.toObject(message.exportSettings[j], options);
        }
        return object;
    };

    /**
     * Converts this DocumentNode to JSON.
     * @function toJSON
     * @memberof DocumentNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DocumentNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DocumentNode
     * @function getTypeUrl
     * @memberof DocumentNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DocumentNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DocumentNode";
    };

    return DocumentNode;
})();

export const CanvasNode = $root.CanvasNode = (() => {

    /**
     * Properties of a CanvasNode.
     * @exports ICanvasNode
     * @interface ICanvasNode
     * @property {string|null} [id] CanvasNode id
     * @property {string|null} [name] CanvasNode name
     * @property {boolean|null} [visible] CanvasNode visible
     * @property {string|null} [type] CanvasNode type
     * @property {Array.<IFrameNode>|null} [children] CanvasNode children
     * @property {string|null} [source] CanvasNode source
     * @property {string|null} [link] CanvasNode link
     */

    /**
     * Constructs a new CanvasNode.
     * @exports CanvasNode
     * @classdesc Represents a CanvasNode.
     * @implements ICanvasNode
     * @constructor
     * @param {ICanvasNode=} [properties] Properties to set
     */
    function CanvasNode(properties) {
        this.children = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CanvasNode id.
     * @member {string} id
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.id = "";

    /**
     * CanvasNode name.
     * @member {string} name
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.name = "";

    /**
     * CanvasNode visible.
     * @member {boolean} visible
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.visible = false;

    /**
     * CanvasNode type.
     * @member {string} type
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.type = "";

    /**
     * CanvasNode children.
     * @member {Array.<IFrameNode>} children
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.children = $util.emptyArray;

    /**
     * CanvasNode source.
     * @member {string} source
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.source = "";

    /**
     * CanvasNode link.
     * @member {string} link
     * @memberof CanvasNode
     * @instance
     */
    CanvasNode.prototype.link = "";

    /**
     * Creates a new CanvasNode instance using the specified properties.
     * @function create
     * @memberof CanvasNode
     * @static
     * @param {ICanvasNode=} [properties] Properties to set
     * @returns {CanvasNode} CanvasNode instance
     */
    CanvasNode.create = function create(properties) {
        return new CanvasNode(properties);
    };

    /**
     * Encodes the specified CanvasNode message. Does not implicitly {@link CanvasNode.verify|verify} messages.
     * @function encode
     * @memberof CanvasNode
     * @static
     * @param {ICanvasNode} message CanvasNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CanvasNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
        if (message.children != null && message.children.length)
            for (let i = 0; i < message.children.length; ++i)
                $root.FrameNode.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.source);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.link);
        return writer;
    };

    /**
     * Encodes the specified CanvasNode message, length delimited. Does not implicitly {@link CanvasNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CanvasNode
     * @static
     * @param {ICanvasNode} message CanvasNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CanvasNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CanvasNode message from the specified reader or buffer.
     * @function decode
     * @memberof CanvasNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CanvasNode} CanvasNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CanvasNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CanvasNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.type = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.children && message.children.length))
                        message.children = [];
                    message.children.push($root.FrameNode.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.source = reader.string();
                    break;
                }
            case 7: {
                    message.link = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CanvasNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CanvasNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CanvasNode} CanvasNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CanvasNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CanvasNode message.
     * @function verify
     * @memberof CanvasNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CanvasNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!Array.isArray(message.children))
                return "children: array expected";
            for (let i = 0; i < message.children.length; ++i) {
                let error = $root.FrameNode.verify(message.children[i]);
                if (error)
                    return "children." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        return null;
    };

    /**
     * Creates a CanvasNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CanvasNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CanvasNode} CanvasNode
     */
    CanvasNode.fromObject = function fromObject(object) {
        if (object instanceof $root.CanvasNode)
            return object;
        let message = new $root.CanvasNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.type != null)
            message.type = String(object.type);
        if (object.children) {
            if (!Array.isArray(object.children))
                throw TypeError(".CanvasNode.children: array expected");
            message.children = [];
            for (let i = 0; i < object.children.length; ++i) {
                if (typeof object.children[i] !== "object")
                    throw TypeError(".CanvasNode.children: object expected");
                message.children[i] = $root.FrameNode.fromObject(object.children[i]);
            }
        }
        if (object.source != null)
            message.source = String(object.source);
        if (object.link != null)
            message.link = String(object.link);
        return message;
    };

    /**
     * Creates a plain object from a CanvasNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CanvasNode
     * @static
     * @param {CanvasNode} message CanvasNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CanvasNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.children = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.type = "";
            object.source = "";
            object.link = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.children && message.children.length) {
            object.children = [];
            for (let j = 0; j < message.children.length; ++j)
                object.children[j] = $root.FrameNode.toObject(message.children[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        return object;
    };

    /**
     * Converts this CanvasNode to JSON.
     * @function toJSON
     * @memberof CanvasNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CanvasNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CanvasNode
     * @function getTypeUrl
     * @memberof CanvasNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CanvasNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CanvasNode";
    };

    return CanvasNode;
})();

export const FrameNode = $root.FrameNode = (() => {

    /**
     * Properties of a FrameNode.
     * @exports IFrameNode
     * @interface IFrameNode
     * @property {string|null} [id] FrameNode id
     * @property {string|null} [name] FrameNode name
     * @property {boolean|null} [visible] FrameNode visible
     * @property {string|null} [type] FrameNode type
     * @property {Array.<IFrameChildNode>|null} [children] FrameNode children
     * @property {string|null} [source] FrameNode source
     * @property {string|null} [link] FrameNode link
     * @property {IPaint|null} [backgroundColor] FrameNode backgroundColor
     * @property {IRect|null} [absoluteBoundingBox] FrameNode absoluteBoundingBox
     * @property {number|null} [cornerRadius] FrameNode cornerRadius
     */

    /**
     * Constructs a new FrameNode.
     * @exports FrameNode
     * @classdesc Represents a FrameNode.
     * @implements IFrameNode
     * @constructor
     * @param {IFrameNode=} [properties] Properties to set
     */
    function FrameNode(properties) {
        this.children = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameNode id.
     * @member {string} id
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.id = "";

    /**
     * FrameNode name.
     * @member {string} name
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.name = "";

    /**
     * FrameNode visible.
     * @member {boolean} visible
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.visible = false;

    /**
     * FrameNode type.
     * @member {string} type
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.type = "";

    /**
     * FrameNode children.
     * @member {Array.<IFrameChildNode>} children
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.children = $util.emptyArray;

    /**
     * FrameNode source.
     * @member {string} source
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.source = "";

    /**
     * FrameNode link.
     * @member {string} link
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.link = "";

    /**
     * FrameNode backgroundColor.
     * @member {IPaint|null|undefined} backgroundColor
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.backgroundColor = null;

    /**
     * FrameNode absoluteBoundingBox.
     * @member {IRect|null|undefined} absoluteBoundingBox
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.absoluteBoundingBox = null;

    /**
     * FrameNode cornerRadius.
     * @member {number} cornerRadius
     * @memberof FrameNode
     * @instance
     */
    FrameNode.prototype.cornerRadius = 0;

    /**
     * Creates a new FrameNode instance using the specified properties.
     * @function create
     * @memberof FrameNode
     * @static
     * @param {IFrameNode=} [properties] Properties to set
     * @returns {FrameNode} FrameNode instance
     */
    FrameNode.create = function create(properties) {
        return new FrameNode(properties);
    };

    /**
     * Encodes the specified FrameNode message. Does not implicitly {@link FrameNode.verify|verify} messages.
     * @function encode
     * @memberof FrameNode
     * @static
     * @param {IFrameNode} message FrameNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
        if (message.children != null && message.children.length)
            for (let i = 0; i < message.children.length; ++i)
                $root.FrameChildNode.encode(message.children[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.source);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.link);
        if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
            $root.Paint.encode(message.backgroundColor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.absoluteBoundingBox != null && Object.hasOwnProperty.call(message, "absoluteBoundingBox"))
            $root.Rect.encode(message.absoluteBoundingBox, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.cornerRadius != null && Object.hasOwnProperty.call(message, "cornerRadius"))
            writer.uint32(/* id 10, wireType 1 =*/81).double(message.cornerRadius);
        return writer;
    };

    /**
     * Encodes the specified FrameNode message, length delimited. Does not implicitly {@link FrameNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameNode
     * @static
     * @param {IFrameNode} message FrameNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameNode message from the specified reader or buffer.
     * @function decode
     * @memberof FrameNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameNode} FrameNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.type = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.children && message.children.length))
                        message.children = [];
                    message.children.push($root.FrameChildNode.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.source = reader.string();
                    break;
                }
            case 7: {
                    message.link = reader.string();
                    break;
                }
            case 8: {
                    message.backgroundColor = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.absoluteBoundingBox = $root.Rect.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.cornerRadius = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameNode} FrameNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameNode message.
     * @function verify
     * @memberof FrameNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!Array.isArray(message.children))
                return "children: array expected";
            for (let i = 0; i < message.children.length; ++i) {
                let error = $root.FrameChildNode.verify(message.children[i]);
                if (error)
                    return "children." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
            let error = $root.Paint.verify(message.backgroundColor);
            if (error)
                return "backgroundColor." + error;
        }
        if (message.absoluteBoundingBox != null && message.hasOwnProperty("absoluteBoundingBox")) {
            let error = $root.Rect.verify(message.absoluteBoundingBox);
            if (error)
                return "absoluteBoundingBox." + error;
        }
        if (message.cornerRadius != null && message.hasOwnProperty("cornerRadius"))
            if (typeof message.cornerRadius !== "number")
                return "cornerRadius: number expected";
        return null;
    };

    /**
     * Creates a FrameNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameNode} FrameNode
     */
    FrameNode.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameNode)
            return object;
        let message = new $root.FrameNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.type != null)
            message.type = String(object.type);
        if (object.children) {
            if (!Array.isArray(object.children))
                throw TypeError(".FrameNode.children: array expected");
            message.children = [];
            for (let i = 0; i < object.children.length; ++i) {
                if (typeof object.children[i] !== "object")
                    throw TypeError(".FrameNode.children: object expected");
                message.children[i] = $root.FrameChildNode.fromObject(object.children[i]);
            }
        }
        if (object.source != null)
            message.source = String(object.source);
        if (object.link != null)
            message.link = String(object.link);
        if (object.backgroundColor != null) {
            if (typeof object.backgroundColor !== "object")
                throw TypeError(".FrameNode.backgroundColor: object expected");
            message.backgroundColor = $root.Paint.fromObject(object.backgroundColor);
        }
        if (object.absoluteBoundingBox != null) {
            if (typeof object.absoluteBoundingBox !== "object")
                throw TypeError(".FrameNode.absoluteBoundingBox: object expected");
            message.absoluteBoundingBox = $root.Rect.fromObject(object.absoluteBoundingBox);
        }
        if (object.cornerRadius != null)
            message.cornerRadius = Number(object.cornerRadius);
        return message;
    };

    /**
     * Creates a plain object from a FrameNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameNode
     * @static
     * @param {FrameNode} message FrameNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.children = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.type = "";
            object.source = "";
            object.link = "";
            object.backgroundColor = null;
            object.absoluteBoundingBox = null;
            object.cornerRadius = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.children && message.children.length) {
            object.children = [];
            for (let j = 0; j < message.children.length; ++j)
                object.children[j] = $root.FrameChildNode.toObject(message.children[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
            object.backgroundColor = $root.Paint.toObject(message.backgroundColor, options);
        if (message.absoluteBoundingBox != null && message.hasOwnProperty("absoluteBoundingBox"))
            object.absoluteBoundingBox = $root.Rect.toObject(message.absoluteBoundingBox, options);
        if (message.cornerRadius != null && message.hasOwnProperty("cornerRadius"))
            object.cornerRadius = options.json && !isFinite(message.cornerRadius) ? String(message.cornerRadius) : message.cornerRadius;
        return object;
    };

    /**
     * Converts this FrameNode to JSON.
     * @function toJSON
     * @memberof FrameNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FrameNode
     * @function getTypeUrl
     * @memberof FrameNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FrameNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FrameNode";
    };

    return FrameNode;
})();

export const FrameChildNode = $root.FrameChildNode = (() => {

    /**
     * Properties of a FrameChildNode.
     * @exports IFrameChildNode
     * @interface IFrameChildNode
     * @property {ITextNode|null} [textNode] FrameChildNode textNode
     * @property {IImageNode|null} [imageNode] FrameChildNode imageNode
     * @property {IVectorNode|null} [vectorNode] FrameChildNode vectorNode
     */

    /**
     * Constructs a new FrameChildNode.
     * @exports FrameChildNode
     * @classdesc Represents a FrameChildNode.
     * @implements IFrameChildNode
     * @constructor
     * @param {IFrameChildNode=} [properties] Properties to set
     */
    function FrameChildNode(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameChildNode textNode.
     * @member {ITextNode|null|undefined} textNode
     * @memberof FrameChildNode
     * @instance
     */
    FrameChildNode.prototype.textNode = null;

    /**
     * FrameChildNode imageNode.
     * @member {IImageNode|null|undefined} imageNode
     * @memberof FrameChildNode
     * @instance
     */
    FrameChildNode.prototype.imageNode = null;

    /**
     * FrameChildNode vectorNode.
     * @member {IVectorNode|null|undefined} vectorNode
     * @memberof FrameChildNode
     * @instance
     */
    FrameChildNode.prototype.vectorNode = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * FrameChildNode child.
     * @member {"textNode"|"imageNode"|"vectorNode"|undefined} child
     * @memberof FrameChildNode
     * @instance
     */
    Object.defineProperty(FrameChildNode.prototype, "child", {
        get: $util.oneOfGetter($oneOfFields = ["textNode", "imageNode", "vectorNode"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new FrameChildNode instance using the specified properties.
     * @function create
     * @memberof FrameChildNode
     * @static
     * @param {IFrameChildNode=} [properties] Properties to set
     * @returns {FrameChildNode} FrameChildNode instance
     */
    FrameChildNode.create = function create(properties) {
        return new FrameChildNode(properties);
    };

    /**
     * Encodes the specified FrameChildNode message. Does not implicitly {@link FrameChildNode.verify|verify} messages.
     * @function encode
     * @memberof FrameChildNode
     * @static
     * @param {IFrameChildNode} message FrameChildNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameChildNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.textNode != null && Object.hasOwnProperty.call(message, "textNode"))
            $root.TextNode.encode(message.textNode, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.imageNode != null && Object.hasOwnProperty.call(message, "imageNode"))
            $root.ImageNode.encode(message.imageNode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.vectorNode != null && Object.hasOwnProperty.call(message, "vectorNode"))
            $root.VectorNode.encode(message.vectorNode, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FrameChildNode message, length delimited. Does not implicitly {@link FrameChildNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameChildNode
     * @static
     * @param {IFrameChildNode} message FrameChildNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameChildNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameChildNode message from the specified reader or buffer.
     * @function decode
     * @memberof FrameChildNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameChildNode} FrameChildNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameChildNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameChildNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.textNode = $root.TextNode.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.imageNode = $root.ImageNode.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.vectorNode = $root.VectorNode.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameChildNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameChildNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameChildNode} FrameChildNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameChildNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameChildNode message.
     * @function verify
     * @memberof FrameChildNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameChildNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.textNode != null && message.hasOwnProperty("textNode")) {
            properties.child = 1;
            {
                let error = $root.TextNode.verify(message.textNode);
                if (error)
                    return "textNode." + error;
            }
        }
        if (message.imageNode != null && message.hasOwnProperty("imageNode")) {
            if (properties.child === 1)
                return "child: multiple values";
            properties.child = 1;
            {
                let error = $root.ImageNode.verify(message.imageNode);
                if (error)
                    return "imageNode." + error;
            }
        }
        if (message.vectorNode != null && message.hasOwnProperty("vectorNode")) {
            if (properties.child === 1)
                return "child: multiple values";
            properties.child = 1;
            {
                let error = $root.VectorNode.verify(message.vectorNode);
                if (error)
                    return "vectorNode." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FrameChildNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameChildNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameChildNode} FrameChildNode
     */
    FrameChildNode.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameChildNode)
            return object;
        let message = new $root.FrameChildNode();
        if (object.textNode != null) {
            if (typeof object.textNode !== "object")
                throw TypeError(".FrameChildNode.textNode: object expected");
            message.textNode = $root.TextNode.fromObject(object.textNode);
        }
        if (object.imageNode != null) {
            if (typeof object.imageNode !== "object")
                throw TypeError(".FrameChildNode.imageNode: object expected");
            message.imageNode = $root.ImageNode.fromObject(object.imageNode);
        }
        if (object.vectorNode != null) {
            if (typeof object.vectorNode !== "object")
                throw TypeError(".FrameChildNode.vectorNode: object expected");
            message.vectorNode = $root.VectorNode.fromObject(object.vectorNode);
        }
        return message;
    };

    /**
     * Creates a plain object from a FrameChildNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameChildNode
     * @static
     * @param {FrameChildNode} message FrameChildNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameChildNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.textNode != null && message.hasOwnProperty("textNode")) {
            object.textNode = $root.TextNode.toObject(message.textNode, options);
            if (options.oneofs)
                object.child = "textNode";
        }
        if (message.imageNode != null && message.hasOwnProperty("imageNode")) {
            object.imageNode = $root.ImageNode.toObject(message.imageNode, options);
            if (options.oneofs)
                object.child = "imageNode";
        }
        if (message.vectorNode != null && message.hasOwnProperty("vectorNode")) {
            object.vectorNode = $root.VectorNode.toObject(message.vectorNode, options);
            if (options.oneofs)
                object.child = "vectorNode";
        }
        return object;
    };

    /**
     * Converts this FrameChildNode to JSON.
     * @function toJSON
     * @memberof FrameChildNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameChildNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FrameChildNode
     * @function getTypeUrl
     * @memberof FrameChildNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FrameChildNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FrameChildNode";
    };

    return FrameChildNode;
})();

export const TextNode = $root.TextNode = (() => {

    /**
     * Properties of a TextNode.
     * @exports ITextNode
     * @interface ITextNode
     * @property {string|null} [id] TextNode id
     * @property {string|null} [name] TextNode name
     * @property {boolean|null} [visible] TextNode visible
     * @property {number|null} [width] TextNode width
     * @property {number|null} [height] TextNode height
     * @property {IPosition|null} [position] TextNode position
     * @property {number|null} [rotation] TextNode rotation
     * @property {number|null} [zIndex] TextNode zIndex
     * @property {string|null} [type] TextNode type
     * @property {string|null} [characters] TextNode characters
     * @property {ITypeStyle|null} [styles] TextNode styles
     * @property {Array.<ITextStyleRun>|null} [styleRuns] TextNode styleRuns
     */

    /**
     * Constructs a new TextNode.
     * @exports TextNode
     * @classdesc Represents a TextNode.
     * @implements ITextNode
     * @constructor
     * @param {ITextNode=} [properties] Properties to set
     */
    function TextNode(properties) {
        this.styleRuns = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextNode id.
     * @member {string} id
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.id = "";

    /**
     * TextNode name.
     * @member {string} name
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.name = "";

    /**
     * TextNode visible.
     * @member {boolean} visible
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.visible = false;

    /**
     * TextNode width.
     * @member {number} width
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.width = 0;

    /**
     * TextNode height.
     * @member {number} height
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.height = 0;

    /**
     * TextNode position.
     * @member {IPosition|null|undefined} position
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.position = null;

    /**
     * TextNode rotation.
     * @member {number} rotation
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.rotation = 0;

    /**
     * TextNode zIndex.
     * @member {number} zIndex
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.zIndex = 0;

    /**
     * TextNode type.
     * @member {string} type
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.type = "";

    /**
     * TextNode characters.
     * @member {string} characters
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.characters = "";

    /**
     * TextNode styles.
     * @member {ITypeStyle|null|undefined} styles
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.styles = null;

    /**
     * TextNode styleRuns.
     * @member {Array.<ITextStyleRun>} styleRuns
     * @memberof TextNode
     * @instance
     */
    TextNode.prototype.styleRuns = $util.emptyArray;

    /**
     * Creates a new TextNode instance using the specified properties.
     * @function create
     * @memberof TextNode
     * @static
     * @param {ITextNode=} [properties] Properties to set
     * @returns {TextNode} TextNode instance
     */
    TextNode.create = function create(properties) {
        return new TextNode(properties);
    };

    /**
     * Encodes the specified TextNode message. Does not implicitly {@link TextNode.verify|verify} messages.
     * @function encode
     * @memberof TextNode
     * @static
     * @param {ITextNode} message TextNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.height);
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            $root.Position.encode(message.position, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.rotation);
        if (message.zIndex != null && Object.hasOwnProperty.call(message, "zIndex"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.zIndex);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.type);
        if (message.characters != null && Object.hasOwnProperty.call(message, "characters"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.characters);
        if (message.styles != null && Object.hasOwnProperty.call(message, "styles"))
            $root.TypeStyle.encode(message.styles, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.styleRuns != null && message.styleRuns.length)
            for (let i = 0; i < message.styleRuns.length; ++i)
                $root.TextStyleRun.encode(message.styleRuns[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TextNode message, length delimited. Does not implicitly {@link TextNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextNode
     * @static
     * @param {ITextNode} message TextNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextNode message from the specified reader or buffer.
     * @function decode
     * @memberof TextNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextNode} TextNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.width = reader.double();
                    break;
                }
            case 5: {
                    message.height = reader.double();
                    break;
                }
            case 6: {
                    message.position = $root.Position.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.rotation = reader.double();
                    break;
                }
            case 9: {
                    message.zIndex = reader.int32();
                    break;
                }
            case 10: {
                    message.type = reader.string();
                    break;
                }
            case 11: {
                    message.characters = reader.string();
                    break;
                }
            case 12: {
                    message.styles = $root.TypeStyle.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    if (!(message.styleRuns && message.styleRuns.length))
                        message.styleRuns = [];
                    message.styleRuns.push($root.TextStyleRun.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextNode} TextNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextNode message.
     * @function verify
     * @memberof TextNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.position != null && message.hasOwnProperty("position")) {
            let error = $root.Position.verify(message.position);
            if (error)
                return "position." + error;
        }
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            if (!$util.isInteger(message.zIndex))
                return "zIndex: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.characters != null && message.hasOwnProperty("characters"))
            if (!$util.isString(message.characters))
                return "characters: string expected";
        if (message.styles != null && message.hasOwnProperty("styles")) {
            let error = $root.TypeStyle.verify(message.styles);
            if (error)
                return "styles." + error;
        }
        if (message.styleRuns != null && message.hasOwnProperty("styleRuns")) {
            if (!Array.isArray(message.styleRuns))
                return "styleRuns: array expected";
            for (let i = 0; i < message.styleRuns.length; ++i) {
                let error = $root.TextStyleRun.verify(message.styleRuns[i]);
                if (error)
                    return "styleRuns." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TextNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextNode} TextNode
     */
    TextNode.fromObject = function fromObject(object) {
        if (object instanceof $root.TextNode)
            return object;
        let message = new $root.TextNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.position != null) {
            if (typeof object.position !== "object")
                throw TypeError(".TextNode.position: object expected");
            message.position = $root.Position.fromObject(object.position);
        }
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.zIndex != null)
            message.zIndex = object.zIndex | 0;
        if (object.type != null)
            message.type = String(object.type);
        if (object.characters != null)
            message.characters = String(object.characters);
        if (object.styles != null) {
            if (typeof object.styles !== "object")
                throw TypeError(".TextNode.styles: object expected");
            message.styles = $root.TypeStyle.fromObject(object.styles);
        }
        if (object.styleRuns) {
            if (!Array.isArray(object.styleRuns))
                throw TypeError(".TextNode.styleRuns: array expected");
            message.styleRuns = [];
            for (let i = 0; i < object.styleRuns.length; ++i) {
                if (typeof object.styleRuns[i] !== "object")
                    throw TypeError(".TextNode.styleRuns: object expected");
                message.styleRuns[i] = $root.TextStyleRun.fromObject(object.styleRuns[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TextNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextNode
     * @static
     * @param {TextNode} message TextNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.styleRuns = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.width = 0;
            object.height = 0;
            object.position = null;
            object.rotation = 0;
            object.zIndex = 0;
            object.type = "";
            object.characters = "";
            object.styles = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = $root.Position.toObject(message.position, options);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            object.zIndex = message.zIndex;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.characters != null && message.hasOwnProperty("characters"))
            object.characters = message.characters;
        if (message.styles != null && message.hasOwnProperty("styles"))
            object.styles = $root.TypeStyle.toObject(message.styles, options);
        if (message.styleRuns && message.styleRuns.length) {
            object.styleRuns = [];
            for (let j = 0; j < message.styleRuns.length; ++j)
                object.styleRuns[j] = $root.TextStyleRun.toObject(message.styleRuns[j], options);
        }
        return object;
    };

    /**
     * Converts this TextNode to JSON.
     * @function toJSON
     * @memberof TextNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextNode
     * @function getTypeUrl
     * @memberof TextNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextNode";
    };

    return TextNode;
})();

export const TextStyleRun = $root.TextStyleRun = (() => {

    /**
     * Properties of a TextStyleRun.
     * @exports ITextStyleRun
     * @interface ITextStyleRun
     * @property {number|null} [start] TextStyleRun start
     * @property {number|null} [end] TextStyleRun end
     * @property {string|null} [type] TextStyleRun type
     * @property {ITypeStyle|null} [style] TextStyleRun style
     * @property {number|null} [length] TextStyleRun length
     */

    /**
     * Constructs a new TextStyleRun.
     * @exports TextStyleRun
     * @classdesc Represents a TextStyleRun.
     * @implements ITextStyleRun
     * @constructor
     * @param {ITextStyleRun=} [properties] Properties to set
     */
    function TextStyleRun(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextStyleRun start.
     * @member {number} start
     * @memberof TextStyleRun
     * @instance
     */
    TextStyleRun.prototype.start = 0;

    /**
     * TextStyleRun end.
     * @member {number} end
     * @memberof TextStyleRun
     * @instance
     */
    TextStyleRun.prototype.end = 0;

    /**
     * TextStyleRun type.
     * @member {string} type
     * @memberof TextStyleRun
     * @instance
     */
    TextStyleRun.prototype.type = "";

    /**
     * TextStyleRun style.
     * @member {ITypeStyle|null|undefined} style
     * @memberof TextStyleRun
     * @instance
     */
    TextStyleRun.prototype.style = null;

    /**
     * TextStyleRun length.
     * @member {number} length
     * @memberof TextStyleRun
     * @instance
     */
    TextStyleRun.prototype.length = 0;

    /**
     * Creates a new TextStyleRun instance using the specified properties.
     * @function create
     * @memberof TextStyleRun
     * @static
     * @param {ITextStyleRun=} [properties] Properties to set
     * @returns {TextStyleRun} TextStyleRun instance
     */
    TextStyleRun.create = function create(properties) {
        return new TextStyleRun(properties);
    };

    /**
     * Encodes the specified TextStyleRun message. Does not implicitly {@link TextStyleRun.verify|verify} messages.
     * @function encode
     * @memberof TextStyleRun
     * @static
     * @param {ITextStyleRun} message TextStyleRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextStyleRun.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
        if (message.style != null && Object.hasOwnProperty.call(message, "style"))
            $root.TypeStyle.encode(message.style, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.length != null && Object.hasOwnProperty.call(message, "length"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.length);
        return writer;
    };

    /**
     * Encodes the specified TextStyleRun message, length delimited. Does not implicitly {@link TextStyleRun.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextStyleRun
     * @static
     * @param {ITextStyleRun} message TextStyleRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextStyleRun.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextStyleRun message from the specified reader or buffer.
     * @function decode
     * @memberof TextStyleRun
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextStyleRun} TextStyleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextStyleRun.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextStyleRun();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.start = reader.int32();
                    break;
                }
            case 2: {
                    message.end = reader.int32();
                    break;
                }
            case 3: {
                    message.type = reader.string();
                    break;
                }
            case 4: {
                    message.style = $root.TypeStyle.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.length = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextStyleRun message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextStyleRun
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextStyleRun} TextStyleRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextStyleRun.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextStyleRun message.
     * @function verify
     * @memberof TextStyleRun
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextStyleRun.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.start != null && message.hasOwnProperty("start"))
            if (!$util.isInteger(message.start))
                return "start: integer expected";
        if (message.end != null && message.hasOwnProperty("end"))
            if (!$util.isInteger(message.end))
                return "end: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.style != null && message.hasOwnProperty("style")) {
            let error = $root.TypeStyle.verify(message.style);
            if (error)
                return "style." + error;
        }
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        return null;
    };

    /**
     * Creates a TextStyleRun message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextStyleRun
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextStyleRun} TextStyleRun
     */
    TextStyleRun.fromObject = function fromObject(object) {
        if (object instanceof $root.TextStyleRun)
            return object;
        let message = new $root.TextStyleRun();
        if (object.start != null)
            message.start = object.start | 0;
        if (object.end != null)
            message.end = object.end | 0;
        if (object.type != null)
            message.type = String(object.type);
        if (object.style != null) {
            if (typeof object.style !== "object")
                throw TypeError(".TextStyleRun.style: object expected");
            message.style = $root.TypeStyle.fromObject(object.style);
        }
        if (object.length != null)
            message.length = object.length | 0;
        return message;
    };

    /**
     * Creates a plain object from a TextStyleRun message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextStyleRun
     * @static
     * @param {TextStyleRun} message TextStyleRun
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextStyleRun.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.start = 0;
            object.end = 0;
            object.type = "";
            object.style = null;
            object.length = 0;
        }
        if (message.start != null && message.hasOwnProperty("start"))
            object.start = message.start;
        if (message.end != null && message.hasOwnProperty("end"))
            object.end = message.end;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.style != null && message.hasOwnProperty("style"))
            object.style = $root.TypeStyle.toObject(message.style, options);
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        return object;
    };

    /**
     * Converts this TextStyleRun to JSON.
     * @function toJSON
     * @memberof TextStyleRun
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextStyleRun.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextStyleRun
     * @function getTypeUrl
     * @memberof TextStyleRun
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextStyleRun.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextStyleRun";
    };

    return TextStyleRun;
})();

export const ImageNode = $root.ImageNode = (() => {

    /**
     * Properties of an ImageNode.
     * @exports IImageNode
     * @interface IImageNode
     * @property {string|null} [id] ImageNode id
     * @property {string|null} [name] ImageNode name
     * @property {boolean|null} [visible] ImageNode visible
     * @property {number|null} [width] ImageNode width
     * @property {number|null} [height] ImageNode height
     * @property {IPosition|null} [position] ImageNode position
     * @property {number|null} [rotation] ImageNode rotation
     * @property {number|null} [zIndex] ImageNode zIndex
     * @property {string|null} [type] ImageNode type
     * @property {string|null} [url] ImageNode url
     * @property {IImageStyle|null} [styles] ImageNode styles
     */

    /**
     * Constructs a new ImageNode.
     * @exports ImageNode
     * @classdesc Represents an ImageNode.
     * @implements IImageNode
     * @constructor
     * @param {IImageNode=} [properties] Properties to set
     */
    function ImageNode(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ImageNode id.
     * @member {string} id
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.id = "";

    /**
     * ImageNode name.
     * @member {string} name
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.name = "";

    /**
     * ImageNode visible.
     * @member {boolean} visible
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.visible = false;

    /**
     * ImageNode width.
     * @member {number} width
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.width = 0;

    /**
     * ImageNode height.
     * @member {number} height
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.height = 0;

    /**
     * ImageNode position.
     * @member {IPosition|null|undefined} position
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.position = null;

    /**
     * ImageNode rotation.
     * @member {number} rotation
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.rotation = 0;

    /**
     * ImageNode zIndex.
     * @member {number} zIndex
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.zIndex = 0;

    /**
     * ImageNode type.
     * @member {string} type
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.type = "";

    /**
     * ImageNode url.
     * @member {string} url
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.url = "";

    /**
     * ImageNode styles.
     * @member {IImageStyle|null|undefined} styles
     * @memberof ImageNode
     * @instance
     */
    ImageNode.prototype.styles = null;

    /**
     * Creates a new ImageNode instance using the specified properties.
     * @function create
     * @memberof ImageNode
     * @static
     * @param {IImageNode=} [properties] Properties to set
     * @returns {ImageNode} ImageNode instance
     */
    ImageNode.create = function create(properties) {
        return new ImageNode(properties);
    };

    /**
     * Encodes the specified ImageNode message. Does not implicitly {@link ImageNode.verify|verify} messages.
     * @function encode
     * @memberof ImageNode
     * @static
     * @param {IImageNode} message ImageNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.height);
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            $root.Position.encode(message.position, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.rotation);
        if (message.zIndex != null && Object.hasOwnProperty.call(message, "zIndex"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.zIndex);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.type);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.url);
        if (message.styles != null && Object.hasOwnProperty.call(message, "styles"))
            $root.ImageStyle.encode(message.styles, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ImageNode message, length delimited. Does not implicitly {@link ImageNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ImageNode
     * @static
     * @param {IImageNode} message ImageNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ImageNode message from the specified reader or buffer.
     * @function decode
     * @memberof ImageNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ImageNode} ImageNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ImageNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.width = reader.double();
                    break;
                }
            case 5: {
                    message.height = reader.double();
                    break;
                }
            case 6: {
                    message.position = $root.Position.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.rotation = reader.double();
                    break;
                }
            case 9: {
                    message.zIndex = reader.int32();
                    break;
                }
            case 10: {
                    message.type = reader.string();
                    break;
                }
            case 11: {
                    message.url = reader.string();
                    break;
                }
            case 12: {
                    message.styles = $root.ImageStyle.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ImageNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ImageNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ImageNode} ImageNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ImageNode message.
     * @function verify
     * @memberof ImageNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImageNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.position != null && message.hasOwnProperty("position")) {
            let error = $root.Position.verify(message.position);
            if (error)
                return "position." + error;
        }
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            if (!$util.isInteger(message.zIndex))
                return "zIndex: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.styles != null && message.hasOwnProperty("styles")) {
            let error = $root.ImageStyle.verify(message.styles);
            if (error)
                return "styles." + error;
        }
        return null;
    };

    /**
     * Creates an ImageNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ImageNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ImageNode} ImageNode
     */
    ImageNode.fromObject = function fromObject(object) {
        if (object instanceof $root.ImageNode)
            return object;
        let message = new $root.ImageNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.position != null) {
            if (typeof object.position !== "object")
                throw TypeError(".ImageNode.position: object expected");
            message.position = $root.Position.fromObject(object.position);
        }
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.zIndex != null)
            message.zIndex = object.zIndex | 0;
        if (object.type != null)
            message.type = String(object.type);
        if (object.url != null)
            message.url = String(object.url);
        if (object.styles != null) {
            if (typeof object.styles !== "object")
                throw TypeError(".ImageNode.styles: object expected");
            message.styles = $root.ImageStyle.fromObject(object.styles);
        }
        return message;
    };

    /**
     * Creates a plain object from an ImageNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ImageNode
     * @static
     * @param {ImageNode} message ImageNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImageNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.width = 0;
            object.height = 0;
            object.position = null;
            object.rotation = 0;
            object.zIndex = 0;
            object.type = "";
            object.url = "";
            object.styles = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = $root.Position.toObject(message.position, options);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            object.zIndex = message.zIndex;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.styles != null && message.hasOwnProperty("styles"))
            object.styles = $root.ImageStyle.toObject(message.styles, options);
        return object;
    };

    /**
     * Converts this ImageNode to JSON.
     * @function toJSON
     * @memberof ImageNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImageNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ImageNode
     * @function getTypeUrl
     * @memberof ImageNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ImageNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ImageNode";
    };

    return ImageNode;
})();

export const VectorNode = $root.VectorNode = (() => {

    /**
     * Properties of a VectorNode.
     * @exports IVectorNode
     * @interface IVectorNode
     * @property {string|null} [id] VectorNode id
     * @property {string|null} [name] VectorNode name
     * @property {boolean|null} [visible] VectorNode visible
     * @property {number|null} [width] VectorNode width
     * @property {number|null} [height] VectorNode height
     * @property {IPosition|null} [position] VectorNode position
     * @property {number|null} [rotation] VectorNode rotation
     * @property {number|null} [zIndex] VectorNode zIndex
     * @property {string|null} [type] VectorNode type
     * @property {Array.<string>|null} [paths] VectorNode paths
     * @property {IPaint|null} [fill] VectorNode fill
     * @property {IVectorStyle|null} [styles] VectorNode styles
     */

    /**
     * Constructs a new VectorNode.
     * @exports VectorNode
     * @classdesc Represents a VectorNode.
     * @implements IVectorNode
     * @constructor
     * @param {IVectorNode=} [properties] Properties to set
     */
    function VectorNode(properties) {
        this.paths = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VectorNode id.
     * @member {string} id
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.id = "";

    /**
     * VectorNode name.
     * @member {string} name
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.name = "";

    /**
     * VectorNode visible.
     * @member {boolean} visible
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.visible = false;

    /**
     * VectorNode width.
     * @member {number} width
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.width = 0;

    /**
     * VectorNode height.
     * @member {number} height
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.height = 0;

    /**
     * VectorNode position.
     * @member {IPosition|null|undefined} position
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.position = null;

    /**
     * VectorNode rotation.
     * @member {number} rotation
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.rotation = 0;

    /**
     * VectorNode zIndex.
     * @member {number} zIndex
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.zIndex = 0;

    /**
     * VectorNode type.
     * @member {string} type
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.type = "";

    /**
     * VectorNode paths.
     * @member {Array.<string>} paths
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.paths = $util.emptyArray;

    /**
     * VectorNode fill.
     * @member {IPaint|null|undefined} fill
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.fill = null;

    /**
     * VectorNode styles.
     * @member {IVectorStyle|null|undefined} styles
     * @memberof VectorNode
     * @instance
     */
    VectorNode.prototype.styles = null;

    /**
     * Creates a new VectorNode instance using the specified properties.
     * @function create
     * @memberof VectorNode
     * @static
     * @param {IVectorNode=} [properties] Properties to set
     * @returns {VectorNode} VectorNode instance
     */
    VectorNode.create = function create(properties) {
        return new VectorNode(properties);
    };

    /**
     * Encodes the specified VectorNode message. Does not implicitly {@link VectorNode.verify|verify} messages.
     * @function encode
     * @memberof VectorNode
     * @static
     * @param {IVectorNode} message VectorNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.height);
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            $root.Position.encode(message.position, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.rotation);
        if (message.zIndex != null && Object.hasOwnProperty.call(message, "zIndex"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.zIndex);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.type);
        if (message.paths != null && message.paths.length)
            for (let i = 0; i < message.paths.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.paths[i]);
        if (message.fill != null && Object.hasOwnProperty.call(message, "fill"))
            $root.Paint.encode(message.fill, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.styles != null && Object.hasOwnProperty.call(message, "styles"))
            $root.VectorStyle.encode(message.styles, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified VectorNode message, length delimited. Does not implicitly {@link VectorNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VectorNode
     * @static
     * @param {IVectorNode} message VectorNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VectorNode message from the specified reader or buffer.
     * @function decode
     * @memberof VectorNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VectorNode} VectorNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VectorNode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.visible = reader.bool();
                    break;
                }
            case 4: {
                    message.width = reader.double();
                    break;
                }
            case 5: {
                    message.height = reader.double();
                    break;
                }
            case 6: {
                    message.position = $root.Position.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.rotation = reader.double();
                    break;
                }
            case 9: {
                    message.zIndex = reader.int32();
                    break;
                }
            case 10: {
                    message.type = reader.string();
                    break;
                }
            case 11: {
                    if (!(message.paths && message.paths.length))
                        message.paths = [];
                    message.paths.push(reader.string());
                    break;
                }
            case 12: {
                    message.fill = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.styles = $root.VectorStyle.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VectorNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VectorNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VectorNode} VectorNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VectorNode message.
     * @function verify
     * @memberof VectorNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VectorNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.position != null && message.hasOwnProperty("position")) {
            let error = $root.Position.verify(message.position);
            if (error)
                return "position." + error;
        }
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            if (!$util.isInteger(message.zIndex))
                return "zIndex: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.paths != null && message.hasOwnProperty("paths")) {
            if (!Array.isArray(message.paths))
                return "paths: array expected";
            for (let i = 0; i < message.paths.length; ++i)
                if (!$util.isString(message.paths[i]))
                    return "paths: string[] expected";
        }
        if (message.fill != null && message.hasOwnProperty("fill")) {
            let error = $root.Paint.verify(message.fill);
            if (error)
                return "fill." + error;
        }
        if (message.styles != null && message.hasOwnProperty("styles")) {
            let error = $root.VectorStyle.verify(message.styles);
            if (error)
                return "styles." + error;
        }
        return null;
    };

    /**
     * Creates a VectorNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VectorNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VectorNode} VectorNode
     */
    VectorNode.fromObject = function fromObject(object) {
        if (object instanceof $root.VectorNode)
            return object;
        let message = new $root.VectorNode();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.position != null) {
            if (typeof object.position !== "object")
                throw TypeError(".VectorNode.position: object expected");
            message.position = $root.Position.fromObject(object.position);
        }
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.zIndex != null)
            message.zIndex = object.zIndex | 0;
        if (object.type != null)
            message.type = String(object.type);
        if (object.paths) {
            if (!Array.isArray(object.paths))
                throw TypeError(".VectorNode.paths: array expected");
            message.paths = [];
            for (let i = 0; i < object.paths.length; ++i)
                message.paths[i] = String(object.paths[i]);
        }
        if (object.fill != null) {
            if (typeof object.fill !== "object")
                throw TypeError(".VectorNode.fill: object expected");
            message.fill = $root.Paint.fromObject(object.fill);
        }
        if (object.styles != null) {
            if (typeof object.styles !== "object")
                throw TypeError(".VectorNode.styles: object expected");
            message.styles = $root.VectorStyle.fromObject(object.styles);
        }
        return message;
    };

    /**
     * Creates a plain object from a VectorNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VectorNode
     * @static
     * @param {VectorNode} message VectorNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VectorNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.paths = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.visible = false;
            object.width = 0;
            object.height = 0;
            object.position = null;
            object.rotation = 0;
            object.zIndex = 0;
            object.type = "";
            object.fill = null;
            object.styles = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = $root.Position.toObject(message.position, options);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            object.zIndex = message.zIndex;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.paths && message.paths.length) {
            object.paths = [];
            for (let j = 0; j < message.paths.length; ++j)
                object.paths[j] = message.paths[j];
        }
        if (message.fill != null && message.hasOwnProperty("fill"))
            object.fill = $root.Paint.toObject(message.fill, options);
        if (message.styles != null && message.hasOwnProperty("styles"))
            object.styles = $root.VectorStyle.toObject(message.styles, options);
        return object;
    };

    /**
     * Converts this VectorNode to JSON.
     * @function toJSON
     * @memberof VectorNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VectorNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VectorNode
     * @function getTypeUrl
     * @memberof VectorNode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VectorNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VectorNode";
    };

    return VectorNode;
})();

export const Position = $root.Position = (() => {

    /**
     * Properties of a Position.
     * @exports IPosition
     * @interface IPosition
     * @property {number|null} [x] Position x
     * @property {number|null} [y] Position y
     */

    /**
     * Constructs a new Position.
     * @exports Position
     * @classdesc Represents a Position.
     * @implements IPosition
     * @constructor
     * @param {IPosition=} [properties] Properties to set
     */
    function Position(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Position x.
     * @member {number} x
     * @memberof Position
     * @instance
     */
    Position.prototype.x = 0;

    /**
     * Position y.
     * @member {number} y
     * @memberof Position
     * @instance
     */
    Position.prototype.y = 0;

    /**
     * Creates a new Position instance using the specified properties.
     * @function create
     * @memberof Position
     * @static
     * @param {IPosition=} [properties] Properties to set
     * @returns {Position} Position instance
     */
    Position.create = function create(properties) {
        return new Position(properties);
    };

    /**
     * Encodes the specified Position message. Does not implicitly {@link Position.verify|verify} messages.
     * @function encode
     * @memberof Position
     * @static
     * @param {IPosition} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Position.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
        return writer;
    };

    /**
     * Encodes the specified Position message, length delimited. Does not implicitly {@link Position.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Position
     * @static
     * @param {IPosition} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Position.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Position message from the specified reader or buffer.
     * @function decode
     * @memberof Position
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Position.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Position();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.double();
                    break;
                }
            case 2: {
                    message.y = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Position message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Position
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Position.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Position message.
     * @function verify
     * @memberof Position
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Position.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Position
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Position} Position
     */
    Position.fromObject = function fromObject(object) {
        if (object instanceof $root.Position)
            return object;
        let message = new $root.Position();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a Position message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Position
     * @static
     * @param {Position} message Position
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Position.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this Position to JSON.
     * @function toJSON
     * @memberof Position
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Position.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Position
     * @function getTypeUrl
     * @memberof Position
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Position";
    };

    return Position;
})();

export const Style = $root.Style = (() => {

    /**
     * Properties of a Style.
     * @exports IStyle
     * @interface IStyle
     * @property {IPaint|null} [color] Style color
     * @property {IPaint|null} [backgroundColor] Style backgroundColor
     */

    /**
     * Constructs a new Style.
     * @exports Style
     * @classdesc Represents a Style.
     * @implements IStyle
     * @constructor
     * @param {IStyle=} [properties] Properties to set
     */
    function Style(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Style color.
     * @member {IPaint|null|undefined} color
     * @memberof Style
     * @instance
     */
    Style.prototype.color = null;

    /**
     * Style backgroundColor.
     * @member {IPaint|null|undefined} backgroundColor
     * @memberof Style
     * @instance
     */
    Style.prototype.backgroundColor = null;

    /**
     * Creates a new Style instance using the specified properties.
     * @function create
     * @memberof Style
     * @static
     * @param {IStyle=} [properties] Properties to set
     * @returns {Style} Style instance
     */
    Style.create = function create(properties) {
        return new Style(properties);
    };

    /**
     * Encodes the specified Style message. Does not implicitly {@link Style.verify|verify} messages.
     * @function encode
     * @memberof Style
     * @static
     * @param {IStyle} message Style message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Style.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Paint.encode(message.color, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
            $root.Paint.encode(message.backgroundColor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Style message, length delimited. Does not implicitly {@link Style.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Style
     * @static
     * @param {IStyle} message Style message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Style.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Style message from the specified reader or buffer.
     * @function decode
     * @memberof Style
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Style} Style
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Style.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Style();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.color = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.backgroundColor = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Style message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Style
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Style} Style
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Style.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Style message.
     * @function verify
     * @memberof Style
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Style.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Paint.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
            let error = $root.Paint.verify(message.backgroundColor);
            if (error)
                return "backgroundColor." + error;
        }
        return null;
    };

    /**
     * Creates a Style message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Style
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Style} Style
     */
    Style.fromObject = function fromObject(object) {
        if (object instanceof $root.Style)
            return object;
        let message = new $root.Style();
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".Style.color: object expected");
            message.color = $root.Paint.fromObject(object.color);
        }
        if (object.backgroundColor != null) {
            if (typeof object.backgroundColor !== "object")
                throw TypeError(".Style.backgroundColor: object expected");
            message.backgroundColor = $root.Paint.fromObject(object.backgroundColor);
        }
        return message;
    };

    /**
     * Creates a plain object from a Style message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Style
     * @static
     * @param {Style} message Style
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Style.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.color = null;
            object.backgroundColor = null;
        }
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Paint.toObject(message.color, options);
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
            object.backgroundColor = $root.Paint.toObject(message.backgroundColor, options);
        return object;
    };

    /**
     * Converts this Style to JSON.
     * @function toJSON
     * @memberof Style
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Style.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Style
     * @function getTypeUrl
     * @memberof Style
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Style.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Style";
    };

    return Style;
})();

export const Rect = $root.Rect = (() => {

    /**
     * Properties of a Rect.
     * @exports IRect
     * @interface IRect
     * @property {number|null} [x] Rect x
     * @property {number|null} [y] Rect y
     * @property {number|null} [width] Rect width
     * @property {number|null} [height] Rect height
     */

    /**
     * Constructs a new Rect.
     * @exports Rect
     * @classdesc Represents a Rect.
     * @implements IRect
     * @constructor
     * @param {IRect=} [properties] Properties to set
     */
    function Rect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Rect x.
     * @member {number} x
     * @memberof Rect
     * @instance
     */
    Rect.prototype.x = 0;

    /**
     * Rect y.
     * @member {number} y
     * @memberof Rect
     * @instance
     */
    Rect.prototype.y = 0;

    /**
     * Rect width.
     * @member {number} width
     * @memberof Rect
     * @instance
     */
    Rect.prototype.width = 0;

    /**
     * Rect height.
     * @member {number} height
     * @memberof Rect
     * @instance
     */
    Rect.prototype.height = 0;

    /**
     * Creates a new Rect instance using the specified properties.
     * @function create
     * @memberof Rect
     * @static
     * @param {IRect=} [properties] Properties to set
     * @returns {Rect} Rect instance
     */
    Rect.create = function create(properties) {
        return new Rect(properties);
    };

    /**
     * Encodes the specified Rect message. Does not implicitly {@link Rect.verify|verify} messages.
     * @function encode
     * @memberof Rect
     * @static
     * @param {IRect} message Rect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.height);
        return writer;
    };

    /**
     * Encodes the specified Rect message, length delimited. Does not implicitly {@link Rect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Rect
     * @static
     * @param {IRect} message Rect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Rect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Rect message from the specified reader or buffer.
     * @function decode
     * @memberof Rect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Rect} Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Rect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.double();
                    break;
                }
            case 2: {
                    message.y = reader.double();
                    break;
                }
            case 3: {
                    message.width = reader.double();
                    break;
                }
            case 4: {
                    message.height = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Rect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Rect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Rect} Rect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Rect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Rect message.
     * @function verify
     * @memberof Rect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Rect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        return null;
    };

    /**
     * Creates a Rect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Rect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Rect} Rect
     */
    Rect.fromObject = function fromObject(object) {
        if (object instanceof $root.Rect)
            return object;
        let message = new $root.Rect();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        return message;
    };

    /**
     * Creates a plain object from a Rect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Rect
     * @static
     * @param {Rect} message Rect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Rect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.width = 0;
            object.height = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        return object;
    };

    /**
     * Converts this Rect to JSON.
     * @function toJSON
     * @memberof Rect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Rect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Rect
     * @function getTypeUrl
     * @memberof Rect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Rect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Rect";
    };

    return Rect;
})();

export const ColorStop = $root.ColorStop = (() => {

    /**
     * Properties of a ColorStop.
     * @exports IColorStop
     * @interface IColorStop
     * @property {number|null} [position] ColorStop position
     * @property {IColor|null} [color] ColorStop color
     */

    /**
     * Constructs a new ColorStop.
     * @exports ColorStop
     * @classdesc Represents a ColorStop.
     * @implements IColorStop
     * @constructor
     * @param {IColorStop=} [properties] Properties to set
     */
    function ColorStop(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ColorStop position.
     * @member {number} position
     * @memberof ColorStop
     * @instance
     */
    ColorStop.prototype.position = 0;

    /**
     * ColorStop color.
     * @member {IColor|null|undefined} color
     * @memberof ColorStop
     * @instance
     */
    ColorStop.prototype.color = null;

    /**
     * Creates a new ColorStop instance using the specified properties.
     * @function create
     * @memberof ColorStop
     * @static
     * @param {IColorStop=} [properties] Properties to set
     * @returns {ColorStop} ColorStop instance
     */
    ColorStop.create = function create(properties) {
        return new ColorStop(properties);
    };

    /**
     * Encodes the specified ColorStop message. Does not implicitly {@link ColorStop.verify|verify} messages.
     * @function encode
     * @memberof ColorStop
     * @static
     * @param {IColorStop} message ColorStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ColorStop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.position);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ColorStop message, length delimited. Does not implicitly {@link ColorStop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ColorStop
     * @static
     * @param {IColorStop} message ColorStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ColorStop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ColorStop message from the specified reader or buffer.
     * @function decode
     * @memberof ColorStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ColorStop} ColorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ColorStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ColorStop();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.position = reader.double();
                    break;
                }
            case 2: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ColorStop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ColorStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ColorStop} ColorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ColorStop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ColorStop message.
     * @function verify
     * @memberof ColorStop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ColorStop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.position != null && message.hasOwnProperty("position"))
            if (typeof message.position !== "number")
                return "position: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        return null;
    };

    /**
     * Creates a ColorStop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ColorStop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ColorStop} ColorStop
     */
    ColorStop.fromObject = function fromObject(object) {
        if (object instanceof $root.ColorStop)
            return object;
        let message = new $root.ColorStop();
        if (object.position != null)
            message.position = Number(object.position);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".ColorStop.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        return message;
    };

    /**
     * Creates a plain object from a ColorStop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ColorStop
     * @static
     * @param {ColorStop} message ColorStop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ColorStop.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.position = 0;
            object.color = null;
        }
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = options.json && !isFinite(message.position) ? String(message.position) : message.position;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        return object;
    };

    /**
     * Converts this ColorStop to JSON.
     * @function toJSON
     * @memberof ColorStop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ColorStop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ColorStop
     * @function getTypeUrl
     * @memberof ColorStop
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ColorStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ColorStop";
    };

    return ColorStop;
})();

export const ExportSetting = $root.ExportSetting = (() => {

    /**
     * Properties of an ExportSetting.
     * @exports IExportSetting
     * @interface IExportSetting
     * @property {string|null} [format] ExportSetting format
     */

    /**
     * Constructs a new ExportSetting.
     * @exports ExportSetting
     * @classdesc Represents an ExportSetting.
     * @implements IExportSetting
     * @constructor
     * @param {IExportSetting=} [properties] Properties to set
     */
    function ExportSetting(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ExportSetting format.
     * @member {string} format
     * @memberof ExportSetting
     * @instance
     */
    ExportSetting.prototype.format = "";

    /**
     * Creates a new ExportSetting instance using the specified properties.
     * @function create
     * @memberof ExportSetting
     * @static
     * @param {IExportSetting=} [properties] Properties to set
     * @returns {ExportSetting} ExportSetting instance
     */
    ExportSetting.create = function create(properties) {
        return new ExportSetting(properties);
    };

    /**
     * Encodes the specified ExportSetting message. Does not implicitly {@link ExportSetting.verify|verify} messages.
     * @function encode
     * @memberof ExportSetting
     * @static
     * @param {IExportSetting} message ExportSetting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportSetting.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.format != null && Object.hasOwnProperty.call(message, "format"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.format);
        return writer;
    };

    /**
     * Encodes the specified ExportSetting message, length delimited. Does not implicitly {@link ExportSetting.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ExportSetting
     * @static
     * @param {IExportSetting} message ExportSetting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExportSetting.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ExportSetting message from the specified reader or buffer.
     * @function decode
     * @memberof ExportSetting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ExportSetting} ExportSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportSetting.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ExportSetting();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.format = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ExportSetting message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ExportSetting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ExportSetting} ExportSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExportSetting.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ExportSetting message.
     * @function verify
     * @memberof ExportSetting
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ExportSetting.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.format != null && message.hasOwnProperty("format"))
            if (!$util.isString(message.format))
                return "format: string expected";
        return null;
    };

    /**
     * Creates an ExportSetting message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ExportSetting
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ExportSetting} ExportSetting
     */
    ExportSetting.fromObject = function fromObject(object) {
        if (object instanceof $root.ExportSetting)
            return object;
        let message = new $root.ExportSetting();
        if (object.format != null)
            message.format = String(object.format);
        return message;
    };

    /**
     * Creates a plain object from an ExportSetting message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ExportSetting
     * @static
     * @param {ExportSetting} message ExportSetting
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ExportSetting.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.format = "";
        if (message.format != null && message.hasOwnProperty("format"))
            object.format = message.format;
        return object;
    };

    /**
     * Converts this ExportSetting to JSON.
     * @function toJSON
     * @memberof ExportSetting
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ExportSetting.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ExportSetting
     * @function getTypeUrl
     * @memberof ExportSetting
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ExportSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ExportSetting";
    };

    return ExportSetting;
})();

export const Paint = $root.Paint = (() => {

    /**
     * Properties of a Paint.
     * @exports IPaint
     * @interface IPaint
     * @property {string|null} [type] Paint type
     * @property {boolean|null} [visible] Paint visible
     * @property {number|null} [opacity] Paint opacity
     * @property {IColor|null} [color] Paint color
     * @property {string|null} [blendMode] Paint blendMode
     * @property {Array.<IPosition>|null} [gradientHandlePositions] Paint gradientHandlePositions
     * @property {Array.<IColorStop>|null} [gradientStops] Paint gradientStops
     */

    /**
     * Constructs a new Paint.
     * @exports Paint
     * @classdesc Represents a Paint.
     * @implements IPaint
     * @constructor
     * @param {IPaint=} [properties] Properties to set
     */
    function Paint(properties) {
        this.gradientHandlePositions = [];
        this.gradientStops = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Paint type.
     * @member {string} type
     * @memberof Paint
     * @instance
     */
    Paint.prototype.type = "";

    /**
     * Paint visible.
     * @member {boolean} visible
     * @memberof Paint
     * @instance
     */
    Paint.prototype.visible = false;

    /**
     * Paint opacity.
     * @member {number} opacity
     * @memberof Paint
     * @instance
     */
    Paint.prototype.opacity = 0;

    /**
     * Paint color.
     * @member {IColor|null|undefined} color
     * @memberof Paint
     * @instance
     */
    Paint.prototype.color = null;

    /**
     * Paint blendMode.
     * @member {string} blendMode
     * @memberof Paint
     * @instance
     */
    Paint.prototype.blendMode = "";

    /**
     * Paint gradientHandlePositions.
     * @member {Array.<IPosition>} gradientHandlePositions
     * @memberof Paint
     * @instance
     */
    Paint.prototype.gradientHandlePositions = $util.emptyArray;

    /**
     * Paint gradientStops.
     * @member {Array.<IColorStop>} gradientStops
     * @memberof Paint
     * @instance
     */
    Paint.prototype.gradientStops = $util.emptyArray;

    /**
     * Creates a new Paint instance using the specified properties.
     * @function create
     * @memberof Paint
     * @static
     * @param {IPaint=} [properties] Properties to set
     * @returns {Paint} Paint instance
     */
    Paint.create = function create(properties) {
        return new Paint(properties);
    };

    /**
     * Encodes the specified Paint message. Does not implicitly {@link Paint.verify|verify} messages.
     * @function encode
     * @memberof Paint
     * @static
     * @param {IPaint} message Paint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Paint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.visible);
        if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.opacity);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.blendMode != null && Object.hasOwnProperty.call(message, "blendMode"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.blendMode);
        if (message.gradientHandlePositions != null && message.gradientHandlePositions.length)
            for (let i = 0; i < message.gradientHandlePositions.length; ++i)
                $root.Position.encode(message.gradientHandlePositions[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gradientStops != null && message.gradientStops.length)
            for (let i = 0; i < message.gradientStops.length; ++i)
                $root.ColorStop.encode(message.gradientStops[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Paint message, length delimited. Does not implicitly {@link Paint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Paint
     * @static
     * @param {IPaint} message Paint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Paint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Paint message from the specified reader or buffer.
     * @function decode
     * @memberof Paint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Paint} Paint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Paint.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Paint();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.visible = reader.bool();
                    break;
                }
            case 3: {
                    message.opacity = reader.double();
                    break;
                }
            case 4: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.blendMode = reader.string();
                    break;
                }
            case 6: {
                    if (!(message.gradientHandlePositions && message.gradientHandlePositions.length))
                        message.gradientHandlePositions = [];
                    message.gradientHandlePositions.push($root.Position.decode(reader, reader.uint32()));
                    break;
                }
            case 7: {
                    if (!(message.gradientStops && message.gradientStops.length))
                        message.gradientStops = [];
                    message.gradientStops.push($root.ColorStop.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Paint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Paint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Paint} Paint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Paint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Paint message.
     * @function verify
     * @memberof Paint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Paint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            if (typeof message.opacity !== "number")
                return "opacity: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            if (!$util.isString(message.blendMode))
                return "blendMode: string expected";
        if (message.gradientHandlePositions != null && message.hasOwnProperty("gradientHandlePositions")) {
            if (!Array.isArray(message.gradientHandlePositions))
                return "gradientHandlePositions: array expected";
            for (let i = 0; i < message.gradientHandlePositions.length; ++i) {
                let error = $root.Position.verify(message.gradientHandlePositions[i]);
                if (error)
                    return "gradientHandlePositions." + error;
            }
        }
        if (message.gradientStops != null && message.hasOwnProperty("gradientStops")) {
            if (!Array.isArray(message.gradientStops))
                return "gradientStops: array expected";
            for (let i = 0; i < message.gradientStops.length; ++i) {
                let error = $root.ColorStop.verify(message.gradientStops[i]);
                if (error)
                    return "gradientStops." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Paint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Paint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Paint} Paint
     */
    Paint.fromObject = function fromObject(object) {
        if (object instanceof $root.Paint)
            return object;
        let message = new $root.Paint();
        if (object.type != null)
            message.type = String(object.type);
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.opacity != null)
            message.opacity = Number(object.opacity);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".Paint.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        if (object.blendMode != null)
            message.blendMode = String(object.blendMode);
        if (object.gradientHandlePositions) {
            if (!Array.isArray(object.gradientHandlePositions))
                throw TypeError(".Paint.gradientHandlePositions: array expected");
            message.gradientHandlePositions = [];
            for (let i = 0; i < object.gradientHandlePositions.length; ++i) {
                if (typeof object.gradientHandlePositions[i] !== "object")
                    throw TypeError(".Paint.gradientHandlePositions: object expected");
                message.gradientHandlePositions[i] = $root.Position.fromObject(object.gradientHandlePositions[i]);
            }
        }
        if (object.gradientStops) {
            if (!Array.isArray(object.gradientStops))
                throw TypeError(".Paint.gradientStops: array expected");
            message.gradientStops = [];
            for (let i = 0; i < object.gradientStops.length; ++i) {
                if (typeof object.gradientStops[i] !== "object")
                    throw TypeError(".Paint.gradientStops: object expected");
                message.gradientStops[i] = $root.ColorStop.fromObject(object.gradientStops[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Paint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Paint
     * @static
     * @param {Paint} message Paint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Paint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.gradientHandlePositions = [];
            object.gradientStops = [];
        }
        if (options.defaults) {
            object.type = "";
            object.visible = false;
            object.opacity = 0;
            object.color = null;
            object.blendMode = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            object.opacity = options.json && !isFinite(message.opacity) ? String(message.opacity) : message.opacity;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            object.blendMode = message.blendMode;
        if (message.gradientHandlePositions && message.gradientHandlePositions.length) {
            object.gradientHandlePositions = [];
            for (let j = 0; j < message.gradientHandlePositions.length; ++j)
                object.gradientHandlePositions[j] = $root.Position.toObject(message.gradientHandlePositions[j], options);
        }
        if (message.gradientStops && message.gradientStops.length) {
            object.gradientStops = [];
            for (let j = 0; j < message.gradientStops.length; ++j)
                object.gradientStops[j] = $root.ColorStop.toObject(message.gradientStops[j], options);
        }
        return object;
    };

    /**
     * Converts this Paint to JSON.
     * @function toJSON
     * @memberof Paint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Paint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Paint
     * @function getTypeUrl
     * @memberof Paint
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Paint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Paint";
    };

    return Paint;
})();

export const Color = $root.Color = (() => {

    /**
     * Properties of a Color.
     * @exports IColor
     * @interface IColor
     * @property {number|null} [r] Color r
     * @property {number|null} [g] Color g
     * @property {number|null} [b] Color b
     * @property {number|null} [a] Color a
     */

    /**
     * Constructs a new Color.
     * @exports Color
     * @classdesc Represents a Color.
     * @implements IColor
     * @constructor
     * @param {IColor=} [properties] Properties to set
     */
    function Color(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Color r.
     * @member {number} r
     * @memberof Color
     * @instance
     */
    Color.prototype.r = 0;

    /**
     * Color g.
     * @member {number} g
     * @memberof Color
     * @instance
     */
    Color.prototype.g = 0;

    /**
     * Color b.
     * @member {number} b
     * @memberof Color
     * @instance
     */
    Color.prototype.b = 0;

    /**
     * Color a.
     * @member {number} a
     * @memberof Color
     * @instance
     */
    Color.prototype.a = 0;

    /**
     * Creates a new Color instance using the specified properties.
     * @function create
     * @memberof Color
     * @static
     * @param {IColor=} [properties] Properties to set
     * @returns {Color} Color instance
     */
    Color.create = function create(properties) {
        return new Color(properties);
    };

    /**
     * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
     * @function encode
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.r != null && Object.hasOwnProperty.call(message, "r"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.r);
        if (message.g != null && Object.hasOwnProperty.call(message, "g"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.g);
        if (message.b != null && Object.hasOwnProperty.call(message, "b"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.b);
        if (message.a != null && Object.hasOwnProperty.call(message, "a"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.a);
        return writer;
    };

    /**
     * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @function decode
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Color();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.r = reader.int32();
                    break;
                }
            case 2: {
                    message.g = reader.int32();
                    break;
                }
            case 3: {
                    message.b = reader.int32();
                    break;
                }
            case 4: {
                    message.a = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Color message.
     * @function verify
     * @memberof Color
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Color.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!$util.isInteger(message.r))
                return "r: integer expected";
        if (message.g != null && message.hasOwnProperty("g"))
            if (!$util.isInteger(message.g))
                return "g: integer expected";
        if (message.b != null && message.hasOwnProperty("b"))
            if (!$util.isInteger(message.b))
                return "b: integer expected";
        if (message.a != null && message.hasOwnProperty("a"))
            if (typeof message.a !== "number")
                return "a: number expected";
        return null;
    };

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Color
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Color} Color
     */
    Color.fromObject = function fromObject(object) {
        if (object instanceof $root.Color)
            return object;
        let message = new $root.Color();
        if (object.r != null)
            message.r = object.r | 0;
        if (object.g != null)
            message.g = object.g | 0;
        if (object.b != null)
            message.b = object.b | 0;
        if (object.a != null)
            message.a = Number(object.a);
        return message;
    };

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Color
     * @static
     * @param {Color} message Color
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Color.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.r = 0;
            object.g = 0;
            object.b = 0;
            object.a = 0;
        }
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = message.r;
        if (message.g != null && message.hasOwnProperty("g"))
            object.g = message.g;
        if (message.b != null && message.hasOwnProperty("b"))
            object.b = message.b;
        if (message.a != null && message.hasOwnProperty("a"))
            object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
        return object;
    };

    /**
     * Converts this Color to JSON.
     * @function toJSON
     * @memberof Color
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Color.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Color
     * @function getTypeUrl
     * @memberof Color
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Color.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Color";
    };

    return Color;
})();

export const Border = $root.Border = (() => {

    /**
     * Properties of a Border.
     * @exports IBorder
     * @interface IBorder
     * @property {number|null} [width] Border width
     * @property {IColor|null} [color] Border color
     * @property {string|null} [style] Border style
     * @property {IBorderRadius|null} [radius] Border radius
     * @property {number|null} [dashWidth] Border dashWidth
     * @property {number|null} [dashGap] Border dashGap
     * @property {string|null} [dashCap] Border dashCap
     */

    /**
     * Constructs a new Border.
     * @exports Border
     * @classdesc Represents a Border.
     * @implements IBorder
     * @constructor
     * @param {IBorder=} [properties] Properties to set
     */
    function Border(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Border width.
     * @member {number} width
     * @memberof Border
     * @instance
     */
    Border.prototype.width = 0;

    /**
     * Border color.
     * @member {IColor|null|undefined} color
     * @memberof Border
     * @instance
     */
    Border.prototype.color = null;

    /**
     * Border style.
     * @member {string} style
     * @memberof Border
     * @instance
     */
    Border.prototype.style = "";

    /**
     * Border radius.
     * @member {IBorderRadius|null|undefined} radius
     * @memberof Border
     * @instance
     */
    Border.prototype.radius = null;

    /**
     * Border dashWidth.
     * @member {number} dashWidth
     * @memberof Border
     * @instance
     */
    Border.prototype.dashWidth = 0;

    /**
     * Border dashGap.
     * @member {number} dashGap
     * @memberof Border
     * @instance
     */
    Border.prototype.dashGap = 0;

    /**
     * Border dashCap.
     * @member {string} dashCap
     * @memberof Border
     * @instance
     */
    Border.prototype.dashCap = "";

    /**
     * Creates a new Border instance using the specified properties.
     * @function create
     * @memberof Border
     * @static
     * @param {IBorder=} [properties] Properties to set
     * @returns {Border} Border instance
     */
    Border.create = function create(properties) {
        return new Border(properties);
    };

    /**
     * Encodes the specified Border message. Does not implicitly {@link Border.verify|verify} messages.
     * @function encode
     * @memberof Border
     * @static
     * @param {IBorder} message Border message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Border.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.width);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.style != null && Object.hasOwnProperty.call(message, "style"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.style);
        if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
            $root.BorderRadius.encode(message.radius, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.dashWidth != null && Object.hasOwnProperty.call(message, "dashWidth"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.dashWidth);
        if (message.dashGap != null && Object.hasOwnProperty.call(message, "dashGap"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.dashGap);
        if (message.dashCap != null && Object.hasOwnProperty.call(message, "dashCap"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.dashCap);
        return writer;
    };

    /**
     * Encodes the specified Border message, length delimited. Does not implicitly {@link Border.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Border
     * @static
     * @param {IBorder} message Border message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Border.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Border message from the specified reader or buffer.
     * @function decode
     * @memberof Border
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Border} Border
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Border.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Border();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.width = reader.double();
                    break;
                }
            case 2: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.style = reader.string();
                    break;
                }
            case 4: {
                    message.radius = $root.BorderRadius.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.dashWidth = reader.double();
                    break;
                }
            case 6: {
                    message.dashGap = reader.double();
                    break;
                }
            case 7: {
                    message.dashCap = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Border message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Border
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Border} Border
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Border.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Border message.
     * @function verify
     * @memberof Border
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Border.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.style != null && message.hasOwnProperty("style"))
            if (!$util.isString(message.style))
                return "style: string expected";
        if (message.radius != null && message.hasOwnProperty("radius")) {
            let error = $root.BorderRadius.verify(message.radius);
            if (error)
                return "radius." + error;
        }
        if (message.dashWidth != null && message.hasOwnProperty("dashWidth"))
            if (typeof message.dashWidth !== "number")
                return "dashWidth: number expected";
        if (message.dashGap != null && message.hasOwnProperty("dashGap"))
            if (typeof message.dashGap !== "number")
                return "dashGap: number expected";
        if (message.dashCap != null && message.hasOwnProperty("dashCap"))
            if (!$util.isString(message.dashCap))
                return "dashCap: string expected";
        return null;
    };

    /**
     * Creates a Border message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Border
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Border} Border
     */
    Border.fromObject = function fromObject(object) {
        if (object instanceof $root.Border)
            return object;
        let message = new $root.Border();
        if (object.width != null)
            message.width = Number(object.width);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".Border.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        if (object.style != null)
            message.style = String(object.style);
        if (object.radius != null) {
            if (typeof object.radius !== "object")
                throw TypeError(".Border.radius: object expected");
            message.radius = $root.BorderRadius.fromObject(object.radius);
        }
        if (object.dashWidth != null)
            message.dashWidth = Number(object.dashWidth);
        if (object.dashGap != null)
            message.dashGap = Number(object.dashGap);
        if (object.dashCap != null)
            message.dashCap = String(object.dashCap);
        return message;
    };

    /**
     * Creates a plain object from a Border message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Border
     * @static
     * @param {Border} message Border
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Border.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.width = 0;
            object.color = null;
            object.style = "";
            object.radius = null;
            object.dashWidth = 0;
            object.dashGap = 0;
            object.dashCap = "";
        }
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        if (message.style != null && message.hasOwnProperty("style"))
            object.style = message.style;
        if (message.radius != null && message.hasOwnProperty("radius"))
            object.radius = $root.BorderRadius.toObject(message.radius, options);
        if (message.dashWidth != null && message.hasOwnProperty("dashWidth"))
            object.dashWidth = options.json && !isFinite(message.dashWidth) ? String(message.dashWidth) : message.dashWidth;
        if (message.dashGap != null && message.hasOwnProperty("dashGap"))
            object.dashGap = options.json && !isFinite(message.dashGap) ? String(message.dashGap) : message.dashGap;
        if (message.dashCap != null && message.hasOwnProperty("dashCap"))
            object.dashCap = message.dashCap;
        return object;
    };

    /**
     * Converts this Border to JSON.
     * @function toJSON
     * @memberof Border
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Border.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Border
     * @function getTypeUrl
     * @memberof Border
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Border.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Border";
    };

    return Border;
})();

export const BorderRadius = $root.BorderRadius = (() => {

    /**
     * Properties of a BorderRadius.
     * @exports IBorderRadius
     * @interface IBorderRadius
     * @property {number|null} [topLeft] BorderRadius topLeft
     * @property {number|null} [topRight] BorderRadius topRight
     * @property {number|null} [bottomLeft] BorderRadius bottomLeft
     * @property {number|null} [bottomRight] BorderRadius bottomRight
     */

    /**
     * Constructs a new BorderRadius.
     * @exports BorderRadius
     * @classdesc Represents a BorderRadius.
     * @implements IBorderRadius
     * @constructor
     * @param {IBorderRadius=} [properties] Properties to set
     */
    function BorderRadius(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BorderRadius topLeft.
     * @member {number} topLeft
     * @memberof BorderRadius
     * @instance
     */
    BorderRadius.prototype.topLeft = 0;

    /**
     * BorderRadius topRight.
     * @member {number} topRight
     * @memberof BorderRadius
     * @instance
     */
    BorderRadius.prototype.topRight = 0;

    /**
     * BorderRadius bottomLeft.
     * @member {number} bottomLeft
     * @memberof BorderRadius
     * @instance
     */
    BorderRadius.prototype.bottomLeft = 0;

    /**
     * BorderRadius bottomRight.
     * @member {number} bottomRight
     * @memberof BorderRadius
     * @instance
     */
    BorderRadius.prototype.bottomRight = 0;

    /**
     * Creates a new BorderRadius instance using the specified properties.
     * @function create
     * @memberof BorderRadius
     * @static
     * @param {IBorderRadius=} [properties] Properties to set
     * @returns {BorderRadius} BorderRadius instance
     */
    BorderRadius.create = function create(properties) {
        return new BorderRadius(properties);
    };

    /**
     * Encodes the specified BorderRadius message. Does not implicitly {@link BorderRadius.verify|verify} messages.
     * @function encode
     * @memberof BorderRadius
     * @static
     * @param {IBorderRadius} message BorderRadius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BorderRadius.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.topLeft != null && Object.hasOwnProperty.call(message, "topLeft"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.topLeft);
        if (message.topRight != null && Object.hasOwnProperty.call(message, "topRight"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.topRight);
        if (message.bottomLeft != null && Object.hasOwnProperty.call(message, "bottomLeft"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.bottomLeft);
        if (message.bottomRight != null && Object.hasOwnProperty.call(message, "bottomRight"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.bottomRight);
        return writer;
    };

    /**
     * Encodes the specified BorderRadius message, length delimited. Does not implicitly {@link BorderRadius.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BorderRadius
     * @static
     * @param {IBorderRadius} message BorderRadius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BorderRadius.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BorderRadius message from the specified reader or buffer.
     * @function decode
     * @memberof BorderRadius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BorderRadius} BorderRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BorderRadius.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BorderRadius();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.topLeft = reader.double();
                    break;
                }
            case 2: {
                    message.topRight = reader.double();
                    break;
                }
            case 3: {
                    message.bottomLeft = reader.double();
                    break;
                }
            case 4: {
                    message.bottomRight = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BorderRadius message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BorderRadius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BorderRadius} BorderRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BorderRadius.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BorderRadius message.
     * @function verify
     * @memberof BorderRadius
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BorderRadius.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.topLeft != null && message.hasOwnProperty("topLeft"))
            if (typeof message.topLeft !== "number")
                return "topLeft: number expected";
        if (message.topRight != null && message.hasOwnProperty("topRight"))
            if (typeof message.topRight !== "number")
                return "topRight: number expected";
        if (message.bottomLeft != null && message.hasOwnProperty("bottomLeft"))
            if (typeof message.bottomLeft !== "number")
                return "bottomLeft: number expected";
        if (message.bottomRight != null && message.hasOwnProperty("bottomRight"))
            if (typeof message.bottomRight !== "number")
                return "bottomRight: number expected";
        return null;
    };

    /**
     * Creates a BorderRadius message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BorderRadius
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BorderRadius} BorderRadius
     */
    BorderRadius.fromObject = function fromObject(object) {
        if (object instanceof $root.BorderRadius)
            return object;
        let message = new $root.BorderRadius();
        if (object.topLeft != null)
            message.topLeft = Number(object.topLeft);
        if (object.topRight != null)
            message.topRight = Number(object.topRight);
        if (object.bottomLeft != null)
            message.bottomLeft = Number(object.bottomLeft);
        if (object.bottomRight != null)
            message.bottomRight = Number(object.bottomRight);
        return message;
    };

    /**
     * Creates a plain object from a BorderRadius message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BorderRadius
     * @static
     * @param {BorderRadius} message BorderRadius
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BorderRadius.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.topLeft = 0;
            object.topRight = 0;
            object.bottomLeft = 0;
            object.bottomRight = 0;
        }
        if (message.topLeft != null && message.hasOwnProperty("topLeft"))
            object.topLeft = options.json && !isFinite(message.topLeft) ? String(message.topLeft) : message.topLeft;
        if (message.topRight != null && message.hasOwnProperty("topRight"))
            object.topRight = options.json && !isFinite(message.topRight) ? String(message.topRight) : message.topRight;
        if (message.bottomLeft != null && message.hasOwnProperty("bottomLeft"))
            object.bottomLeft = options.json && !isFinite(message.bottomLeft) ? String(message.bottomLeft) : message.bottomLeft;
        if (message.bottomRight != null && message.hasOwnProperty("bottomRight"))
            object.bottomRight = options.json && !isFinite(message.bottomRight) ? String(message.bottomRight) : message.bottomRight;
        return object;
    };

    /**
     * Converts this BorderRadius to JSON.
     * @function toJSON
     * @memberof BorderRadius
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BorderRadius.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BorderRadius
     * @function getTypeUrl
     * @memberof BorderRadius
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BorderRadius.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BorderRadius";
    };

    return BorderRadius;
})();

export const TextEffect = $root.TextEffect = (() => {

    /**
     * Properties of a TextEffect.
     * @exports ITextEffect
     * @interface ITextEffect
     * @property {string|null} [type] TextEffect type
     * @property {number|null} [offsetX] TextEffect offsetX
     * @property {number|null} [offsetY] TextEffect offsetY
     * @property {IColor|null} [color] TextEffect color
     * @property {number|null} [blurRadius] TextEffect blurRadius
     * @property {number|null} [opacity] TextEffect opacity
     * @property {string|null} [blendMode] TextEffect blendMode
     */

    /**
     * Constructs a new TextEffect.
     * @exports TextEffect
     * @classdesc Represents a TextEffect.
     * @implements ITextEffect
     * @constructor
     * @param {ITextEffect=} [properties] Properties to set
     */
    function TextEffect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextEffect type.
     * @member {string} type
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.type = "";

    /**
     * TextEffect offsetX.
     * @member {number} offsetX
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.offsetX = 0;

    /**
     * TextEffect offsetY.
     * @member {number} offsetY
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.offsetY = 0;

    /**
     * TextEffect color.
     * @member {IColor|null|undefined} color
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.color = null;

    /**
     * TextEffect blurRadius.
     * @member {number} blurRadius
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.blurRadius = 0;

    /**
     * TextEffect opacity.
     * @member {number} opacity
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.opacity = 0;

    /**
     * TextEffect blendMode.
     * @member {string} blendMode
     * @memberof TextEffect
     * @instance
     */
    TextEffect.prototype.blendMode = "";

    /**
     * Creates a new TextEffect instance using the specified properties.
     * @function create
     * @memberof TextEffect
     * @static
     * @param {ITextEffect=} [properties] Properties to set
     * @returns {TextEffect} TextEffect instance
     */
    TextEffect.create = function create(properties) {
        return new TextEffect(properties);
    };

    /**
     * Encodes the specified TextEffect message. Does not implicitly {@link TextEffect.verify|verify} messages.
     * @function encode
     * @memberof TextEffect
     * @static
     * @param {ITextEffect} message TextEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextEffect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.offsetX != null && Object.hasOwnProperty.call(message, "offsetX"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.offsetX);
        if (message.offsetY != null && Object.hasOwnProperty.call(message, "offsetY"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.offsetY);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.blurRadius != null && Object.hasOwnProperty.call(message, "blurRadius"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.blurRadius);
        if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.opacity);
        if (message.blendMode != null && Object.hasOwnProperty.call(message, "blendMode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.blendMode);
        return writer;
    };

    /**
     * Encodes the specified TextEffect message, length delimited. Does not implicitly {@link TextEffect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextEffect
     * @static
     * @param {ITextEffect} message TextEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextEffect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextEffect message from the specified reader or buffer.
     * @function decode
     * @memberof TextEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextEffect} TextEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextEffect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextEffect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.offsetX = reader.double();
                    break;
                }
            case 3: {
                    message.offsetY = reader.double();
                    break;
                }
            case 4: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.blurRadius = reader.double();
                    break;
                }
            case 6: {
                    message.opacity = reader.double();
                    break;
                }
            case 7: {
                    message.blendMode = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TextEffect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextEffect} TextEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextEffect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextEffect message.
     * @function verify
     * @memberof TextEffect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextEffect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            if (typeof message.offsetX !== "number")
                return "offsetX: number expected";
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            if (typeof message.offsetY !== "number")
                return "offsetY: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            if (typeof message.blurRadius !== "number")
                return "blurRadius: number expected";
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            if (typeof message.opacity !== "number")
                return "opacity: number expected";
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            if (!$util.isString(message.blendMode))
                return "blendMode: string expected";
        return null;
    };

    /**
     * Creates a TextEffect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextEffect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextEffect} TextEffect
     */
    TextEffect.fromObject = function fromObject(object) {
        if (object instanceof $root.TextEffect)
            return object;
        let message = new $root.TextEffect();
        if (object.type != null)
            message.type = String(object.type);
        if (object.offsetX != null)
            message.offsetX = Number(object.offsetX);
        if (object.offsetY != null)
            message.offsetY = Number(object.offsetY);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".TextEffect.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        if (object.blurRadius != null)
            message.blurRadius = Number(object.blurRadius);
        if (object.opacity != null)
            message.opacity = Number(object.opacity);
        if (object.blendMode != null)
            message.blendMode = String(object.blendMode);
        return message;
    };

    /**
     * Creates a plain object from a TextEffect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextEffect
     * @static
     * @param {TextEffect} message TextEffect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextEffect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = "";
            object.offsetX = 0;
            object.offsetY = 0;
            object.color = null;
            object.blurRadius = 0;
            object.opacity = 0;
            object.blendMode = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            object.blurRadius = options.json && !isFinite(message.blurRadius) ? String(message.blurRadius) : message.blurRadius;
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            object.opacity = options.json && !isFinite(message.opacity) ? String(message.opacity) : message.opacity;
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            object.blendMode = message.blendMode;
        return object;
    };

    /**
     * Converts this TextEffect to JSON.
     * @function toJSON
     * @memberof TextEffect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextEffect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextEffect
     * @function getTypeUrl
     * @memberof TextEffect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextEffect";
    };

    return TextEffect;
})();

export const ImageEffect = $root.ImageEffect = (() => {

    /**
     * Properties of an ImageEffect.
     * @exports IImageEffect
     * @interface IImageEffect
     * @property {string|null} [type] ImageEffect type
     * @property {number|null} [offsetX] ImageEffect offsetX
     * @property {number|null} [offsetY] ImageEffect offsetY
     * @property {number|null} [blurRadius] ImageEffect blurRadius
     * @property {IColor|null} [color] ImageEffect color
     * @property {number|null} [opacity] ImageEffect opacity
     * @property {string|null} [blendMode] ImageEffect blendMode
     */

    /**
     * Constructs a new ImageEffect.
     * @exports ImageEffect
     * @classdesc Represents an ImageEffect.
     * @implements IImageEffect
     * @constructor
     * @param {IImageEffect=} [properties] Properties to set
     */
    function ImageEffect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ImageEffect type.
     * @member {string} type
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.type = "";

    /**
     * ImageEffect offsetX.
     * @member {number} offsetX
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.offsetX = 0;

    /**
     * ImageEffect offsetY.
     * @member {number} offsetY
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.offsetY = 0;

    /**
     * ImageEffect blurRadius.
     * @member {number} blurRadius
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.blurRadius = 0;

    /**
     * ImageEffect color.
     * @member {IColor|null|undefined} color
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.color = null;

    /**
     * ImageEffect opacity.
     * @member {number} opacity
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.opacity = 0;

    /**
     * ImageEffect blendMode.
     * @member {string} blendMode
     * @memberof ImageEffect
     * @instance
     */
    ImageEffect.prototype.blendMode = "";

    /**
     * Creates a new ImageEffect instance using the specified properties.
     * @function create
     * @memberof ImageEffect
     * @static
     * @param {IImageEffect=} [properties] Properties to set
     * @returns {ImageEffect} ImageEffect instance
     */
    ImageEffect.create = function create(properties) {
        return new ImageEffect(properties);
    };

    /**
     * Encodes the specified ImageEffect message. Does not implicitly {@link ImageEffect.verify|verify} messages.
     * @function encode
     * @memberof ImageEffect
     * @static
     * @param {IImageEffect} message ImageEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageEffect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.offsetX != null && Object.hasOwnProperty.call(message, "offsetX"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.offsetX);
        if (message.offsetY != null && Object.hasOwnProperty.call(message, "offsetY"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.offsetY);
        if (message.blurRadius != null && Object.hasOwnProperty.call(message, "blurRadius"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.blurRadius);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.opacity);
        if (message.blendMode != null && Object.hasOwnProperty.call(message, "blendMode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.blendMode);
        return writer;
    };

    /**
     * Encodes the specified ImageEffect message, length delimited. Does not implicitly {@link ImageEffect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ImageEffect
     * @static
     * @param {IImageEffect} message ImageEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageEffect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ImageEffect message from the specified reader or buffer.
     * @function decode
     * @memberof ImageEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ImageEffect} ImageEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageEffect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ImageEffect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.offsetX = reader.double();
                    break;
                }
            case 3: {
                    message.offsetY = reader.double();
                    break;
                }
            case 4: {
                    message.blurRadius = reader.double();
                    break;
                }
            case 5: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.opacity = reader.double();
                    break;
                }
            case 7: {
                    message.blendMode = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ImageEffect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ImageEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ImageEffect} ImageEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageEffect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ImageEffect message.
     * @function verify
     * @memberof ImageEffect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImageEffect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            if (typeof message.offsetX !== "number")
                return "offsetX: number expected";
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            if (typeof message.offsetY !== "number")
                return "offsetY: number expected";
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            if (typeof message.blurRadius !== "number")
                return "blurRadius: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            if (typeof message.opacity !== "number")
                return "opacity: number expected";
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            if (!$util.isString(message.blendMode))
                return "blendMode: string expected";
        return null;
    };

    /**
     * Creates an ImageEffect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ImageEffect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ImageEffect} ImageEffect
     */
    ImageEffect.fromObject = function fromObject(object) {
        if (object instanceof $root.ImageEffect)
            return object;
        let message = new $root.ImageEffect();
        if (object.type != null)
            message.type = String(object.type);
        if (object.offsetX != null)
            message.offsetX = Number(object.offsetX);
        if (object.offsetY != null)
            message.offsetY = Number(object.offsetY);
        if (object.blurRadius != null)
            message.blurRadius = Number(object.blurRadius);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".ImageEffect.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        if (object.opacity != null)
            message.opacity = Number(object.opacity);
        if (object.blendMode != null)
            message.blendMode = String(object.blendMode);
        return message;
    };

    /**
     * Creates a plain object from an ImageEffect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ImageEffect
     * @static
     * @param {ImageEffect} message ImageEffect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImageEffect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = "";
            object.offsetX = 0;
            object.offsetY = 0;
            object.blurRadius = 0;
            object.color = null;
            object.opacity = 0;
            object.blendMode = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            object.blurRadius = options.json && !isFinite(message.blurRadius) ? String(message.blurRadius) : message.blurRadius;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            object.opacity = options.json && !isFinite(message.opacity) ? String(message.opacity) : message.opacity;
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            object.blendMode = message.blendMode;
        return object;
    };

    /**
     * Converts this ImageEffect to JSON.
     * @function toJSON
     * @memberof ImageEffect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImageEffect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ImageEffect
     * @function getTypeUrl
     * @memberof ImageEffect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ImageEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ImageEffect";
    };

    return ImageEffect;
})();

export const VectorEffect = $root.VectorEffect = (() => {

    /**
     * Properties of a VectorEffect.
     * @exports IVectorEffect
     * @interface IVectorEffect
     * @property {string|null} [type] VectorEffect type
     * @property {number|null} [offsetX] VectorEffect offsetX
     * @property {number|null} [offsetY] VectorEffect offsetY
     * @property {number|null} [blurRadius] VectorEffect blurRadius
     * @property {IColor|null} [color] VectorEffect color
     * @property {number|null} [opacity] VectorEffect opacity
     * @property {string|null} [blendMode] VectorEffect blendMode
     */

    /**
     * Constructs a new VectorEffect.
     * @exports VectorEffect
     * @classdesc Represents a VectorEffect.
     * @implements IVectorEffect
     * @constructor
     * @param {IVectorEffect=} [properties] Properties to set
     */
    function VectorEffect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VectorEffect type.
     * @member {string} type
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.type = "";

    /**
     * VectorEffect offsetX.
     * @member {number} offsetX
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.offsetX = 0;

    /**
     * VectorEffect offsetY.
     * @member {number} offsetY
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.offsetY = 0;

    /**
     * VectorEffect blurRadius.
     * @member {number} blurRadius
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.blurRadius = 0;

    /**
     * VectorEffect color.
     * @member {IColor|null|undefined} color
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.color = null;

    /**
     * VectorEffect opacity.
     * @member {number} opacity
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.opacity = 0;

    /**
     * VectorEffect blendMode.
     * @member {string} blendMode
     * @memberof VectorEffect
     * @instance
     */
    VectorEffect.prototype.blendMode = "";

    /**
     * Creates a new VectorEffect instance using the specified properties.
     * @function create
     * @memberof VectorEffect
     * @static
     * @param {IVectorEffect=} [properties] Properties to set
     * @returns {VectorEffect} VectorEffect instance
     */
    VectorEffect.create = function create(properties) {
        return new VectorEffect(properties);
    };

    /**
     * Encodes the specified VectorEffect message. Does not implicitly {@link VectorEffect.verify|verify} messages.
     * @function encode
     * @memberof VectorEffect
     * @static
     * @param {IVectorEffect} message VectorEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorEffect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.offsetX != null && Object.hasOwnProperty.call(message, "offsetX"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.offsetX);
        if (message.offsetY != null && Object.hasOwnProperty.call(message, "offsetY"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.offsetY);
        if (message.blurRadius != null && Object.hasOwnProperty.call(message, "blurRadius"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.blurRadius);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Color.encode(message.color, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.opacity);
        if (message.blendMode != null && Object.hasOwnProperty.call(message, "blendMode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.blendMode);
        return writer;
    };

    /**
     * Encodes the specified VectorEffect message, length delimited. Does not implicitly {@link VectorEffect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VectorEffect
     * @static
     * @param {IVectorEffect} message VectorEffect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorEffect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VectorEffect message from the specified reader or buffer.
     * @function decode
     * @memberof VectorEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VectorEffect} VectorEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorEffect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VectorEffect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.offsetX = reader.double();
                    break;
                }
            case 3: {
                    message.offsetY = reader.double();
                    break;
                }
            case 4: {
                    message.blurRadius = reader.double();
                    break;
                }
            case 5: {
                    message.color = $root.Color.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.opacity = reader.double();
                    break;
                }
            case 7: {
                    message.blendMode = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VectorEffect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VectorEffect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VectorEffect} VectorEffect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorEffect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VectorEffect message.
     * @function verify
     * @memberof VectorEffect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VectorEffect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            if (typeof message.offsetX !== "number")
                return "offsetX: number expected";
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            if (typeof message.offsetY !== "number")
                return "offsetY: number expected";
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            if (typeof message.blurRadius !== "number")
                return "blurRadius: number expected";
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            if (typeof message.opacity !== "number")
                return "opacity: number expected";
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            if (!$util.isString(message.blendMode))
                return "blendMode: string expected";
        return null;
    };

    /**
     * Creates a VectorEffect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VectorEffect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VectorEffect} VectorEffect
     */
    VectorEffect.fromObject = function fromObject(object) {
        if (object instanceof $root.VectorEffect)
            return object;
        let message = new $root.VectorEffect();
        if (object.type != null)
            message.type = String(object.type);
        if (object.offsetX != null)
            message.offsetX = Number(object.offsetX);
        if (object.offsetY != null)
            message.offsetY = Number(object.offsetY);
        if (object.blurRadius != null)
            message.blurRadius = Number(object.blurRadius);
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".VectorEffect.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
        if (object.opacity != null)
            message.opacity = Number(object.opacity);
        if (object.blendMode != null)
            message.blendMode = String(object.blendMode);
        return message;
    };

    /**
     * Creates a plain object from a VectorEffect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VectorEffect
     * @static
     * @param {VectorEffect} message VectorEffect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VectorEffect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = "";
            object.offsetX = 0;
            object.offsetY = 0;
            object.blurRadius = 0;
            object.color = null;
            object.opacity = 0;
            object.blendMode = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
        if (message.blurRadius != null && message.hasOwnProperty("blurRadius"))
            object.blurRadius = options.json && !isFinite(message.blurRadius) ? String(message.blurRadius) : message.blurRadius;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            object.opacity = options.json && !isFinite(message.opacity) ? String(message.opacity) : message.opacity;
        if (message.blendMode != null && message.hasOwnProperty("blendMode"))
            object.blendMode = message.blendMode;
        return object;
    };

    /**
     * Converts this VectorEffect to JSON.
     * @function toJSON
     * @memberof VectorEffect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VectorEffect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VectorEffect
     * @function getTypeUrl
     * @memberof VectorEffect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VectorEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VectorEffect";
    };

    return VectorEffect;
})();

export const TypeStyle = $root.TypeStyle = (() => {

    /**
     * Properties of a TypeStyle.
     * @exports ITypeStyle
     * @interface ITypeStyle
     * @property {string|null} [fontFamily] TypeStyle fontFamily
     * @property {string|null} [fontPostScriptName] TypeStyle fontPostScriptName
     * @property {number|null} [paragraphSpacing] TypeStyle paragraphSpacing
     * @property {number|null} [paragraphIndent] TypeStyle paragraphIndent
     * @property {boolean|null} [italic] TypeStyle italic
     * @property {number|null} [fontWeight] TypeStyle fontWeight
     * @property {number|null} [fontSize] TypeStyle fontSize
     * @property {string|null} [textAlignHorizontal] TypeStyle textAlignHorizontal
     * @property {string|null} [textAlignVertical] TypeStyle textAlignVertical
     * @property {number|null} [letterSpacing] TypeStyle letterSpacing
     * @property {number|null} [lineHeightPx] TypeStyle lineHeightPx
     * @property {number|null} [lineHeightPercent] TypeStyle lineHeightPercent
     * @property {string|null} [lineHeightUnit] TypeStyle lineHeightUnit
     * @property {string|null} [textCase] TypeStyle textCase
     * @property {string|null} [textDecoration] TypeStyle textDecoration
     * @property {number|null} [lineHeightPercentFontSize] TypeStyle lineHeightPercentFontSize
     * @property {number|null} [fontBaseline] TypeStyle fontBaseline
     * @property {number|null} [customBaselineOffset] TypeStyle customBaselineOffset
     * @property {number|null} [rotation] TypeStyle rotation
     * @property {IBorder|null} [border] TypeStyle border
     * @property {Array.<ITextEffect>|null} [effects] TypeStyle effects
     * @property {IPaint|null} [color] TypeStyle color
     * @property {IPaint|null} [backgroundColor] TypeStyle backgroundColor
     */

    /**
     * Constructs a new TypeStyle.
     * @exports TypeStyle
     * @classdesc Represents a TypeStyle.
     * @implements ITypeStyle
     * @constructor
     * @param {ITypeStyle=} [properties] Properties to set
     */
    function TypeStyle(properties) {
        this.effects = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TypeStyle fontFamily.
     * @member {string} fontFamily
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.fontFamily = "";

    /**
     * TypeStyle fontPostScriptName.
     * @member {string} fontPostScriptName
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.fontPostScriptName = "";

    /**
     * TypeStyle paragraphSpacing.
     * @member {number} paragraphSpacing
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.paragraphSpacing = 0;

    /**
     * TypeStyle paragraphIndent.
     * @member {number} paragraphIndent
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.paragraphIndent = 0;

    /**
     * TypeStyle italic.
     * @member {boolean} italic
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.italic = false;

    /**
     * TypeStyle fontWeight.
     * @member {number} fontWeight
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.fontWeight = 0;

    /**
     * TypeStyle fontSize.
     * @member {number} fontSize
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.fontSize = 0;

    /**
     * TypeStyle textAlignHorizontal.
     * @member {string} textAlignHorizontal
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.textAlignHorizontal = "";

    /**
     * TypeStyle textAlignVertical.
     * @member {string} textAlignVertical
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.textAlignVertical = "";

    /**
     * TypeStyle letterSpacing.
     * @member {number} letterSpacing
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.letterSpacing = 0;

    /**
     * TypeStyle lineHeightPx.
     * @member {number} lineHeightPx
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.lineHeightPx = 0;

    /**
     * TypeStyle lineHeightPercent.
     * @member {number} lineHeightPercent
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.lineHeightPercent = 0;

    /**
     * TypeStyle lineHeightUnit.
     * @member {string} lineHeightUnit
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.lineHeightUnit = "";

    /**
     * TypeStyle textCase.
     * @member {string} textCase
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.textCase = "";

    /**
     * TypeStyle textDecoration.
     * @member {string} textDecoration
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.textDecoration = "";

    /**
     * TypeStyle lineHeightPercentFontSize.
     * @member {number} lineHeightPercentFontSize
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.lineHeightPercentFontSize = 0;

    /**
     * TypeStyle fontBaseline.
     * @member {number} fontBaseline
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.fontBaseline = 0;

    /**
     * TypeStyle customBaselineOffset.
     * @member {number} customBaselineOffset
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.customBaselineOffset = 0;

    /**
     * TypeStyle rotation.
     * @member {number} rotation
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.rotation = 0;

    /**
     * TypeStyle border.
     * @member {IBorder|null|undefined} border
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.border = null;

    /**
     * TypeStyle effects.
     * @member {Array.<ITextEffect>} effects
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.effects = $util.emptyArray;

    /**
     * TypeStyle color.
     * @member {IPaint|null|undefined} color
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.color = null;

    /**
     * TypeStyle backgroundColor.
     * @member {IPaint|null|undefined} backgroundColor
     * @memberof TypeStyle
     * @instance
     */
    TypeStyle.prototype.backgroundColor = null;

    /**
     * Creates a new TypeStyle instance using the specified properties.
     * @function create
     * @memberof TypeStyle
     * @static
     * @param {ITypeStyle=} [properties] Properties to set
     * @returns {TypeStyle} TypeStyle instance
     */
    TypeStyle.create = function create(properties) {
        return new TypeStyle(properties);
    };

    /**
     * Encodes the specified TypeStyle message. Does not implicitly {@link TypeStyle.verify|verify} messages.
     * @function encode
     * @memberof TypeStyle
     * @static
     * @param {ITypeStyle} message TypeStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeStyle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fontFamily != null && Object.hasOwnProperty.call(message, "fontFamily"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fontFamily);
        if (message.fontPostScriptName != null && Object.hasOwnProperty.call(message, "fontPostScriptName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fontPostScriptName);
        if (message.paragraphSpacing != null && Object.hasOwnProperty.call(message, "paragraphSpacing"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.paragraphSpacing);
        if (message.paragraphIndent != null && Object.hasOwnProperty.call(message, "paragraphIndent"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.paragraphIndent);
        if (message.italic != null && Object.hasOwnProperty.call(message, "italic"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.italic);
        if (message.fontWeight != null && Object.hasOwnProperty.call(message, "fontWeight"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.fontWeight);
        if (message.fontSize != null && Object.hasOwnProperty.call(message, "fontSize"))
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.fontSize);
        if (message.textAlignHorizontal != null && Object.hasOwnProperty.call(message, "textAlignHorizontal"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.textAlignHorizontal);
        if (message.textAlignVertical != null && Object.hasOwnProperty.call(message, "textAlignVertical"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.textAlignVertical);
        if (message.letterSpacing != null && Object.hasOwnProperty.call(message, "letterSpacing"))
            writer.uint32(/* id 10, wireType 1 =*/81).double(message.letterSpacing);
        if (message.lineHeightPx != null && Object.hasOwnProperty.call(message, "lineHeightPx"))
            writer.uint32(/* id 11, wireType 1 =*/89).double(message.lineHeightPx);
        if (message.lineHeightPercent != null && Object.hasOwnProperty.call(message, "lineHeightPercent"))
            writer.uint32(/* id 12, wireType 1 =*/97).double(message.lineHeightPercent);
        if (message.lineHeightUnit != null && Object.hasOwnProperty.call(message, "lineHeightUnit"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.lineHeightUnit);
        if (message.textCase != null && Object.hasOwnProperty.call(message, "textCase"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.textCase);
        if (message.textDecoration != null && Object.hasOwnProperty.call(message, "textDecoration"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.textDecoration);
        if (message.lineHeightPercentFontSize != null && Object.hasOwnProperty.call(message, "lineHeightPercentFontSize"))
            writer.uint32(/* id 16, wireType 1 =*/129).double(message.lineHeightPercentFontSize);
        if (message.fontBaseline != null && Object.hasOwnProperty.call(message, "fontBaseline"))
            writer.uint32(/* id 17, wireType 1 =*/137).double(message.fontBaseline);
        if (message.customBaselineOffset != null && Object.hasOwnProperty.call(message, "customBaselineOffset"))
            writer.uint32(/* id 18, wireType 1 =*/145).double(message.customBaselineOffset);
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 19, wireType 1 =*/153).double(message.rotation);
        if (message.border != null && Object.hasOwnProperty.call(message, "border"))
            $root.Border.encode(message.border, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.effects != null && message.effects.length)
            for (let i = 0; i < message.effects.length; ++i)
                $root.TextEffect.encode(message.effects[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Paint.encode(message.color, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
            $root.Paint.encode(message.backgroundColor, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TypeStyle message, length delimited. Does not implicitly {@link TypeStyle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TypeStyle
     * @static
     * @param {ITypeStyle} message TypeStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeStyle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TypeStyle message from the specified reader or buffer.
     * @function decode
     * @memberof TypeStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TypeStyle} TypeStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeStyle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TypeStyle();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.fontFamily = reader.string();
                    break;
                }
            case 2: {
                    message.fontPostScriptName = reader.string();
                    break;
                }
            case 3: {
                    message.paragraphSpacing = reader.double();
                    break;
                }
            case 4: {
                    message.paragraphIndent = reader.double();
                    break;
                }
            case 5: {
                    message.italic = reader.bool();
                    break;
                }
            case 6: {
                    message.fontWeight = reader.int32();
                    break;
                }
            case 7: {
                    message.fontSize = reader.double();
                    break;
                }
            case 8: {
                    message.textAlignHorizontal = reader.string();
                    break;
                }
            case 9: {
                    message.textAlignVertical = reader.string();
                    break;
                }
            case 10: {
                    message.letterSpacing = reader.double();
                    break;
                }
            case 11: {
                    message.lineHeightPx = reader.double();
                    break;
                }
            case 12: {
                    message.lineHeightPercent = reader.double();
                    break;
                }
            case 13: {
                    message.lineHeightUnit = reader.string();
                    break;
                }
            case 14: {
                    message.textCase = reader.string();
                    break;
                }
            case 15: {
                    message.textDecoration = reader.string();
                    break;
                }
            case 16: {
                    message.lineHeightPercentFontSize = reader.double();
                    break;
                }
            case 17: {
                    message.fontBaseline = reader.double();
                    break;
                }
            case 18: {
                    message.customBaselineOffset = reader.double();
                    break;
                }
            case 19: {
                    message.rotation = reader.double();
                    break;
                }
            case 20: {
                    message.border = $root.Border.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    if (!(message.effects && message.effects.length))
                        message.effects = [];
                    message.effects.push($root.TextEffect.decode(reader, reader.uint32()));
                    break;
                }
            case 22: {
                    message.color = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 23: {
                    message.backgroundColor = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TypeStyle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TypeStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TypeStyle} TypeStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeStyle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TypeStyle message.
     * @function verify
     * @memberof TypeStyle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TypeStyle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            if (!$util.isString(message.fontFamily))
                return "fontFamily: string expected";
        if (message.fontPostScriptName != null && message.hasOwnProperty("fontPostScriptName"))
            if (!$util.isString(message.fontPostScriptName))
                return "fontPostScriptName: string expected";
        if (message.paragraphSpacing != null && message.hasOwnProperty("paragraphSpacing"))
            if (typeof message.paragraphSpacing !== "number")
                return "paragraphSpacing: number expected";
        if (message.paragraphIndent != null && message.hasOwnProperty("paragraphIndent"))
            if (typeof message.paragraphIndent !== "number")
                return "paragraphIndent: number expected";
        if (message.italic != null && message.hasOwnProperty("italic"))
            if (typeof message.italic !== "boolean")
                return "italic: boolean expected";
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            if (!$util.isInteger(message.fontWeight))
                return "fontWeight: integer expected";
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            if (typeof message.fontSize !== "number")
                return "fontSize: number expected";
        if (message.textAlignHorizontal != null && message.hasOwnProperty("textAlignHorizontal"))
            if (!$util.isString(message.textAlignHorizontal))
                return "textAlignHorizontal: string expected";
        if (message.textAlignVertical != null && message.hasOwnProperty("textAlignVertical"))
            if (!$util.isString(message.textAlignVertical))
                return "textAlignVertical: string expected";
        if (message.letterSpacing != null && message.hasOwnProperty("letterSpacing"))
            if (typeof message.letterSpacing !== "number")
                return "letterSpacing: number expected";
        if (message.lineHeightPx != null && message.hasOwnProperty("lineHeightPx"))
            if (typeof message.lineHeightPx !== "number")
                return "lineHeightPx: number expected";
        if (message.lineHeightPercent != null && message.hasOwnProperty("lineHeightPercent"))
            if (typeof message.lineHeightPercent !== "number")
                return "lineHeightPercent: number expected";
        if (message.lineHeightUnit != null && message.hasOwnProperty("lineHeightUnit"))
            if (!$util.isString(message.lineHeightUnit))
                return "lineHeightUnit: string expected";
        if (message.textCase != null && message.hasOwnProperty("textCase"))
            if (!$util.isString(message.textCase))
                return "textCase: string expected";
        if (message.textDecoration != null && message.hasOwnProperty("textDecoration"))
            if (!$util.isString(message.textDecoration))
                return "textDecoration: string expected";
        if (message.lineHeightPercentFontSize != null && message.hasOwnProperty("lineHeightPercentFontSize"))
            if (typeof message.lineHeightPercentFontSize !== "number")
                return "lineHeightPercentFontSize: number expected";
        if (message.fontBaseline != null && message.hasOwnProperty("fontBaseline"))
            if (typeof message.fontBaseline !== "number")
                return "fontBaseline: number expected";
        if (message.customBaselineOffset != null && message.hasOwnProperty("customBaselineOffset"))
            if (typeof message.customBaselineOffset !== "number")
                return "customBaselineOffset: number expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.border != null && message.hasOwnProperty("border")) {
            let error = $root.Border.verify(message.border);
            if (error)
                return "border." + error;
        }
        if (message.effects != null && message.hasOwnProperty("effects")) {
            if (!Array.isArray(message.effects))
                return "effects: array expected";
            for (let i = 0; i < message.effects.length; ++i) {
                let error = $root.TextEffect.verify(message.effects[i]);
                if (error)
                    return "effects." + error;
            }
        }
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Paint.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
            let error = $root.Paint.verify(message.backgroundColor);
            if (error)
                return "backgroundColor." + error;
        }
        return null;
    };

    /**
     * Creates a TypeStyle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TypeStyle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TypeStyle} TypeStyle
     */
    TypeStyle.fromObject = function fromObject(object) {
        if (object instanceof $root.TypeStyle)
            return object;
        let message = new $root.TypeStyle();
        if (object.fontFamily != null)
            message.fontFamily = String(object.fontFamily);
        if (object.fontPostScriptName != null)
            message.fontPostScriptName = String(object.fontPostScriptName);
        if (object.paragraphSpacing != null)
            message.paragraphSpacing = Number(object.paragraphSpacing);
        if (object.paragraphIndent != null)
            message.paragraphIndent = Number(object.paragraphIndent);
        if (object.italic != null)
            message.italic = Boolean(object.italic);
        if (object.fontWeight != null)
            message.fontWeight = object.fontWeight | 0;
        if (object.fontSize != null)
            message.fontSize = Number(object.fontSize);
        if (object.textAlignHorizontal != null)
            message.textAlignHorizontal = String(object.textAlignHorizontal);
        if (object.textAlignVertical != null)
            message.textAlignVertical = String(object.textAlignVertical);
        if (object.letterSpacing != null)
            message.letterSpacing = Number(object.letterSpacing);
        if (object.lineHeightPx != null)
            message.lineHeightPx = Number(object.lineHeightPx);
        if (object.lineHeightPercent != null)
            message.lineHeightPercent = Number(object.lineHeightPercent);
        if (object.lineHeightUnit != null)
            message.lineHeightUnit = String(object.lineHeightUnit);
        if (object.textCase != null)
            message.textCase = String(object.textCase);
        if (object.textDecoration != null)
            message.textDecoration = String(object.textDecoration);
        if (object.lineHeightPercentFontSize != null)
            message.lineHeightPercentFontSize = Number(object.lineHeightPercentFontSize);
        if (object.fontBaseline != null)
            message.fontBaseline = Number(object.fontBaseline);
        if (object.customBaselineOffset != null)
            message.customBaselineOffset = Number(object.customBaselineOffset);
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.border != null) {
            if (typeof object.border !== "object")
                throw TypeError(".TypeStyle.border: object expected");
            message.border = $root.Border.fromObject(object.border);
        }
        if (object.effects) {
            if (!Array.isArray(object.effects))
                throw TypeError(".TypeStyle.effects: array expected");
            message.effects = [];
            for (let i = 0; i < object.effects.length; ++i) {
                if (typeof object.effects[i] !== "object")
                    throw TypeError(".TypeStyle.effects: object expected");
                message.effects[i] = $root.TextEffect.fromObject(object.effects[i]);
            }
        }
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".TypeStyle.color: object expected");
            message.color = $root.Paint.fromObject(object.color);
        }
        if (object.backgroundColor != null) {
            if (typeof object.backgroundColor !== "object")
                throw TypeError(".TypeStyle.backgroundColor: object expected");
            message.backgroundColor = $root.Paint.fromObject(object.backgroundColor);
        }
        return message;
    };

    /**
     * Creates a plain object from a TypeStyle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TypeStyle
     * @static
     * @param {TypeStyle} message TypeStyle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TypeStyle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.effects = [];
        if (options.defaults) {
            object.fontFamily = "";
            object.fontPostScriptName = "";
            object.paragraphSpacing = 0;
            object.paragraphIndent = 0;
            object.italic = false;
            object.fontWeight = 0;
            object.fontSize = 0;
            object.textAlignHorizontal = "";
            object.textAlignVertical = "";
            object.letterSpacing = 0;
            object.lineHeightPx = 0;
            object.lineHeightPercent = 0;
            object.lineHeightUnit = "";
            object.textCase = "";
            object.textDecoration = "";
            object.lineHeightPercentFontSize = 0;
            object.fontBaseline = 0;
            object.customBaselineOffset = 0;
            object.rotation = 0;
            object.border = null;
            object.color = null;
            object.backgroundColor = null;
        }
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            object.fontFamily = message.fontFamily;
        if (message.fontPostScriptName != null && message.hasOwnProperty("fontPostScriptName"))
            object.fontPostScriptName = message.fontPostScriptName;
        if (message.paragraphSpacing != null && message.hasOwnProperty("paragraphSpacing"))
            object.paragraphSpacing = options.json && !isFinite(message.paragraphSpacing) ? String(message.paragraphSpacing) : message.paragraphSpacing;
        if (message.paragraphIndent != null && message.hasOwnProperty("paragraphIndent"))
            object.paragraphIndent = options.json && !isFinite(message.paragraphIndent) ? String(message.paragraphIndent) : message.paragraphIndent;
        if (message.italic != null && message.hasOwnProperty("italic"))
            object.italic = message.italic;
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            object.fontWeight = message.fontWeight;
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            object.fontSize = options.json && !isFinite(message.fontSize) ? String(message.fontSize) : message.fontSize;
        if (message.textAlignHorizontal != null && message.hasOwnProperty("textAlignHorizontal"))
            object.textAlignHorizontal = message.textAlignHorizontal;
        if (message.textAlignVertical != null && message.hasOwnProperty("textAlignVertical"))
            object.textAlignVertical = message.textAlignVertical;
        if (message.letterSpacing != null && message.hasOwnProperty("letterSpacing"))
            object.letterSpacing = options.json && !isFinite(message.letterSpacing) ? String(message.letterSpacing) : message.letterSpacing;
        if (message.lineHeightPx != null && message.hasOwnProperty("lineHeightPx"))
            object.lineHeightPx = options.json && !isFinite(message.lineHeightPx) ? String(message.lineHeightPx) : message.lineHeightPx;
        if (message.lineHeightPercent != null && message.hasOwnProperty("lineHeightPercent"))
            object.lineHeightPercent = options.json && !isFinite(message.lineHeightPercent) ? String(message.lineHeightPercent) : message.lineHeightPercent;
        if (message.lineHeightUnit != null && message.hasOwnProperty("lineHeightUnit"))
            object.lineHeightUnit = message.lineHeightUnit;
        if (message.textCase != null && message.hasOwnProperty("textCase"))
            object.textCase = message.textCase;
        if (message.textDecoration != null && message.hasOwnProperty("textDecoration"))
            object.textDecoration = message.textDecoration;
        if (message.lineHeightPercentFontSize != null && message.hasOwnProperty("lineHeightPercentFontSize"))
            object.lineHeightPercentFontSize = options.json && !isFinite(message.lineHeightPercentFontSize) ? String(message.lineHeightPercentFontSize) : message.lineHeightPercentFontSize;
        if (message.fontBaseline != null && message.hasOwnProperty("fontBaseline"))
            object.fontBaseline = options.json && !isFinite(message.fontBaseline) ? String(message.fontBaseline) : message.fontBaseline;
        if (message.customBaselineOffset != null && message.hasOwnProperty("customBaselineOffset"))
            object.customBaselineOffset = options.json && !isFinite(message.customBaselineOffset) ? String(message.customBaselineOffset) : message.customBaselineOffset;
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.border != null && message.hasOwnProperty("border"))
            object.border = $root.Border.toObject(message.border, options);
        if (message.effects && message.effects.length) {
            object.effects = [];
            for (let j = 0; j < message.effects.length; ++j)
                object.effects[j] = $root.TextEffect.toObject(message.effects[j], options);
        }
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Paint.toObject(message.color, options);
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
            object.backgroundColor = $root.Paint.toObject(message.backgroundColor, options);
        return object;
    };

    /**
     * Converts this TypeStyle to JSON.
     * @function toJSON
     * @memberof TypeStyle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TypeStyle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TypeStyle
     * @function getTypeUrl
     * @memberof TypeStyle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TypeStyle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TypeStyle";
    };

    return TypeStyle;
})();

export const TransformProperties = $root.TransformProperties = (() => {

    /**
     * Properties of a TransformProperties.
     * @exports ITransformProperties
     * @interface ITransformProperties
     * @property {IPosition|null} [position] TransformProperties position
     * @property {number|null} [rotation] TransformProperties rotation
     */

    /**
     * Constructs a new TransformProperties.
     * @exports TransformProperties
     * @classdesc Represents a TransformProperties.
     * @implements ITransformProperties
     * @constructor
     * @param {ITransformProperties=} [properties] Properties to set
     */
    function TransformProperties(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransformProperties position.
     * @member {IPosition|null|undefined} position
     * @memberof TransformProperties
     * @instance
     */
    TransformProperties.prototype.position = null;

    /**
     * TransformProperties rotation.
     * @member {number} rotation
     * @memberof TransformProperties
     * @instance
     */
    TransformProperties.prototype.rotation = 0;

    /**
     * Creates a new TransformProperties instance using the specified properties.
     * @function create
     * @memberof TransformProperties
     * @static
     * @param {ITransformProperties=} [properties] Properties to set
     * @returns {TransformProperties} TransformProperties instance
     */
    TransformProperties.create = function create(properties) {
        return new TransformProperties(properties);
    };

    /**
     * Encodes the specified TransformProperties message. Does not implicitly {@link TransformProperties.verify|verify} messages.
     * @function encode
     * @memberof TransformProperties
     * @static
     * @param {ITransformProperties} message TransformProperties message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransformProperties.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            $root.Position.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.rotation);
        return writer;
    };

    /**
     * Encodes the specified TransformProperties message, length delimited. Does not implicitly {@link TransformProperties.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransformProperties
     * @static
     * @param {ITransformProperties} message TransformProperties message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransformProperties.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransformProperties message from the specified reader or buffer.
     * @function decode
     * @memberof TransformProperties
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransformProperties} TransformProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransformProperties.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransformProperties();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.position = $root.Position.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.rotation = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransformProperties message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransformProperties
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransformProperties} TransformProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransformProperties.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransformProperties message.
     * @function verify
     * @memberof TransformProperties
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransformProperties.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.position != null && message.hasOwnProperty("position")) {
            let error = $root.Position.verify(message.position);
            if (error)
                return "position." + error;
        }
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        return null;
    };

    /**
     * Creates a TransformProperties message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransformProperties
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransformProperties} TransformProperties
     */
    TransformProperties.fromObject = function fromObject(object) {
        if (object instanceof $root.TransformProperties)
            return object;
        let message = new $root.TransformProperties();
        if (object.position != null) {
            if (typeof object.position !== "object")
                throw TypeError(".TransformProperties.position: object expected");
            message.position = $root.Position.fromObject(object.position);
        }
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        return message;
    };

    /**
     * Creates a plain object from a TransformProperties message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransformProperties
     * @static
     * @param {TransformProperties} message TransformProperties
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransformProperties.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.position = null;
            object.rotation = 0;
        }
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = $root.Position.toObject(message.position, options);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        return object;
    };

    /**
     * Converts this TransformProperties to JSON.
     * @function toJSON
     * @memberof TransformProperties
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransformProperties.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TransformProperties
     * @function getTypeUrl
     * @memberof TransformProperties
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TransformProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TransformProperties";
    };

    return TransformProperties;
})();

export const ImageStyle = $root.ImageStyle = (() => {

    /**
     * Properties of an ImageStyle.
     * @exports IImageStyle
     * @interface IImageStyle
     * @property {string|null} [scaleMode] ImageStyle scaleMode
     * @property {number|null} [scale] ImageStyle scale
     * @property {IBorder|null} [border] ImageStyle border
     * @property {number|null} [blur] ImageStyle blur
     * @property {Array.<IImageEffect>|null} [effects] ImageStyle effects
     * @property {ITransformProperties|null} [transform] ImageStyle transform
     * @property {IPaint|null} [color] ImageStyle color
     * @property {IPaint|null} [backgroundColor] ImageStyle backgroundColor
     */

    /**
     * Constructs a new ImageStyle.
     * @exports ImageStyle
     * @classdesc Represents an ImageStyle.
     * @implements IImageStyle
     * @constructor
     * @param {IImageStyle=} [properties] Properties to set
     */
    function ImageStyle(properties) {
        this.effects = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ImageStyle scaleMode.
     * @member {string} scaleMode
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.scaleMode = "";

    /**
     * ImageStyle scale.
     * @member {number} scale
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.scale = 0;

    /**
     * ImageStyle border.
     * @member {IBorder|null|undefined} border
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.border = null;

    /**
     * ImageStyle blur.
     * @member {number} blur
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.blur = 0;

    /**
     * ImageStyle effects.
     * @member {Array.<IImageEffect>} effects
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.effects = $util.emptyArray;

    /**
     * ImageStyle transform.
     * @member {ITransformProperties|null|undefined} transform
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.transform = null;

    /**
     * ImageStyle color.
     * @member {IPaint|null|undefined} color
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.color = null;

    /**
     * ImageStyle backgroundColor.
     * @member {IPaint|null|undefined} backgroundColor
     * @memberof ImageStyle
     * @instance
     */
    ImageStyle.prototype.backgroundColor = null;

    /**
     * Creates a new ImageStyle instance using the specified properties.
     * @function create
     * @memberof ImageStyle
     * @static
     * @param {IImageStyle=} [properties] Properties to set
     * @returns {ImageStyle} ImageStyle instance
     */
    ImageStyle.create = function create(properties) {
        return new ImageStyle(properties);
    };

    /**
     * Encodes the specified ImageStyle message. Does not implicitly {@link ImageStyle.verify|verify} messages.
     * @function encode
     * @memberof ImageStyle
     * @static
     * @param {IImageStyle} message ImageStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageStyle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.scaleMode != null && Object.hasOwnProperty.call(message, "scaleMode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.scaleMode);
        if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.scale);
        if (message.border != null && Object.hasOwnProperty.call(message, "border"))
            $root.Border.encode(message.border, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.blur != null && Object.hasOwnProperty.call(message, "blur"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.blur);
        if (message.effects != null && message.effects.length)
            for (let i = 0; i < message.effects.length; ++i)
                $root.ImageEffect.encode(message.effects[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.transform != null && Object.hasOwnProperty.call(message, "transform"))
            $root.TransformProperties.encode(message.transform, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Paint.encode(message.color, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
            $root.Paint.encode(message.backgroundColor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ImageStyle message, length delimited. Does not implicitly {@link ImageStyle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ImageStyle
     * @static
     * @param {IImageStyle} message ImageStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageStyle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ImageStyle message from the specified reader or buffer.
     * @function decode
     * @memberof ImageStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ImageStyle} ImageStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageStyle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ImageStyle();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.scaleMode = reader.string();
                    break;
                }
            case 2: {
                    message.scale = reader.double();
                    break;
                }
            case 3: {
                    message.border = $root.Border.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.blur = reader.double();
                    break;
                }
            case 5: {
                    if (!(message.effects && message.effects.length))
                        message.effects = [];
                    message.effects.push($root.ImageEffect.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.transform = $root.TransformProperties.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.color = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.backgroundColor = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ImageStyle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ImageStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ImageStyle} ImageStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageStyle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ImageStyle message.
     * @function verify
     * @memberof ImageStyle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImageStyle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.scaleMode != null && message.hasOwnProperty("scaleMode"))
            if (!$util.isString(message.scaleMode))
                return "scaleMode: string expected";
        if (message.scale != null && message.hasOwnProperty("scale"))
            if (typeof message.scale !== "number")
                return "scale: number expected";
        if (message.border != null && message.hasOwnProperty("border")) {
            let error = $root.Border.verify(message.border);
            if (error)
                return "border." + error;
        }
        if (message.blur != null && message.hasOwnProperty("blur"))
            if (typeof message.blur !== "number")
                return "blur: number expected";
        if (message.effects != null && message.hasOwnProperty("effects")) {
            if (!Array.isArray(message.effects))
                return "effects: array expected";
            for (let i = 0; i < message.effects.length; ++i) {
                let error = $root.ImageEffect.verify(message.effects[i]);
                if (error)
                    return "effects." + error;
            }
        }
        if (message.transform != null && message.hasOwnProperty("transform")) {
            let error = $root.TransformProperties.verify(message.transform);
            if (error)
                return "transform." + error;
        }
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Paint.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
            let error = $root.Paint.verify(message.backgroundColor);
            if (error)
                return "backgroundColor." + error;
        }
        return null;
    };

    /**
     * Creates an ImageStyle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ImageStyle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ImageStyle} ImageStyle
     */
    ImageStyle.fromObject = function fromObject(object) {
        if (object instanceof $root.ImageStyle)
            return object;
        let message = new $root.ImageStyle();
        if (object.scaleMode != null)
            message.scaleMode = String(object.scaleMode);
        if (object.scale != null)
            message.scale = Number(object.scale);
        if (object.border != null) {
            if (typeof object.border !== "object")
                throw TypeError(".ImageStyle.border: object expected");
            message.border = $root.Border.fromObject(object.border);
        }
        if (object.blur != null)
            message.blur = Number(object.blur);
        if (object.effects) {
            if (!Array.isArray(object.effects))
                throw TypeError(".ImageStyle.effects: array expected");
            message.effects = [];
            for (let i = 0; i < object.effects.length; ++i) {
                if (typeof object.effects[i] !== "object")
                    throw TypeError(".ImageStyle.effects: object expected");
                message.effects[i] = $root.ImageEffect.fromObject(object.effects[i]);
            }
        }
        if (object.transform != null) {
            if (typeof object.transform !== "object")
                throw TypeError(".ImageStyle.transform: object expected");
            message.transform = $root.TransformProperties.fromObject(object.transform);
        }
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".ImageStyle.color: object expected");
            message.color = $root.Paint.fromObject(object.color);
        }
        if (object.backgroundColor != null) {
            if (typeof object.backgroundColor !== "object")
                throw TypeError(".ImageStyle.backgroundColor: object expected");
            message.backgroundColor = $root.Paint.fromObject(object.backgroundColor);
        }
        return message;
    };

    /**
     * Creates a plain object from an ImageStyle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ImageStyle
     * @static
     * @param {ImageStyle} message ImageStyle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImageStyle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.effects = [];
        if (options.defaults) {
            object.scaleMode = "";
            object.scale = 0;
            object.border = null;
            object.blur = 0;
            object.transform = null;
            object.color = null;
            object.backgroundColor = null;
        }
        if (message.scaleMode != null && message.hasOwnProperty("scaleMode"))
            object.scaleMode = message.scaleMode;
        if (message.scale != null && message.hasOwnProperty("scale"))
            object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
        if (message.border != null && message.hasOwnProperty("border"))
            object.border = $root.Border.toObject(message.border, options);
        if (message.blur != null && message.hasOwnProperty("blur"))
            object.blur = options.json && !isFinite(message.blur) ? String(message.blur) : message.blur;
        if (message.effects && message.effects.length) {
            object.effects = [];
            for (let j = 0; j < message.effects.length; ++j)
                object.effects[j] = $root.ImageEffect.toObject(message.effects[j], options);
        }
        if (message.transform != null && message.hasOwnProperty("transform"))
            object.transform = $root.TransformProperties.toObject(message.transform, options);
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Paint.toObject(message.color, options);
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
            object.backgroundColor = $root.Paint.toObject(message.backgroundColor, options);
        return object;
    };

    /**
     * Converts this ImageStyle to JSON.
     * @function toJSON
     * @memberof ImageStyle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImageStyle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ImageStyle
     * @function getTypeUrl
     * @memberof ImageStyle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ImageStyle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ImageStyle";
    };

    return ImageStyle;
})();

export const VectorStyle = $root.VectorStyle = (() => {

    /**
     * Properties of a VectorStyle.
     * @exports IVectorStyle
     * @interface IVectorStyle
     * @property {number|null} [rotation] VectorStyle rotation
     * @property {IBorder|null} [border] VectorStyle border
     * @property {number|null} [blur] VectorStyle blur
     * @property {Array.<IVectorEffect>|null} [effects] VectorStyle effects
     * @property {IPaint|null} [color] VectorStyle color
     * @property {IPaint|null} [backgroundColor] VectorStyle backgroundColor
     */

    /**
     * Constructs a new VectorStyle.
     * @exports VectorStyle
     * @classdesc Represents a VectorStyle.
     * @implements IVectorStyle
     * @constructor
     * @param {IVectorStyle=} [properties] Properties to set
     */
    function VectorStyle(properties) {
        this.effects = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VectorStyle rotation.
     * @member {number} rotation
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.rotation = 0;

    /**
     * VectorStyle border.
     * @member {IBorder|null|undefined} border
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.border = null;

    /**
     * VectorStyle blur.
     * @member {number} blur
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.blur = 0;

    /**
     * VectorStyle effects.
     * @member {Array.<IVectorEffect>} effects
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.effects = $util.emptyArray;

    /**
     * VectorStyle color.
     * @member {IPaint|null|undefined} color
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.color = null;

    /**
     * VectorStyle backgroundColor.
     * @member {IPaint|null|undefined} backgroundColor
     * @memberof VectorStyle
     * @instance
     */
    VectorStyle.prototype.backgroundColor = null;

    /**
     * Creates a new VectorStyle instance using the specified properties.
     * @function create
     * @memberof VectorStyle
     * @static
     * @param {IVectorStyle=} [properties] Properties to set
     * @returns {VectorStyle} VectorStyle instance
     */
    VectorStyle.create = function create(properties) {
        return new VectorStyle(properties);
    };

    /**
     * Encodes the specified VectorStyle message. Does not implicitly {@link VectorStyle.verify|verify} messages.
     * @function encode
     * @memberof VectorStyle
     * @static
     * @param {IVectorStyle} message VectorStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorStyle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.rotation);
        if (message.border != null && Object.hasOwnProperty.call(message, "border"))
            $root.Border.encode(message.border, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.blur != null && Object.hasOwnProperty.call(message, "blur"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.blur);
        if (message.effects != null && message.effects.length)
            for (let i = 0; i < message.effects.length; ++i)
                $root.VectorEffect.encode(message.effects[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            $root.Paint.encode(message.color, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
            $root.Paint.encode(message.backgroundColor, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified VectorStyle message, length delimited. Does not implicitly {@link VectorStyle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VectorStyle
     * @static
     * @param {IVectorStyle} message VectorStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VectorStyle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VectorStyle message from the specified reader or buffer.
     * @function decode
     * @memberof VectorStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VectorStyle} VectorStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorStyle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VectorStyle();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.rotation = reader.double();
                    break;
                }
            case 2: {
                    message.border = $root.Border.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.blur = reader.double();
                    break;
                }
            case 4: {
                    if (!(message.effects && message.effects.length))
                        message.effects = [];
                    message.effects.push($root.VectorEffect.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    message.color = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.backgroundColor = $root.Paint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VectorStyle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VectorStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VectorStyle} VectorStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VectorStyle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VectorStyle message.
     * @function verify
     * @memberof VectorStyle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VectorStyle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.border != null && message.hasOwnProperty("border")) {
            let error = $root.Border.verify(message.border);
            if (error)
                return "border." + error;
        }
        if (message.blur != null && message.hasOwnProperty("blur"))
            if (typeof message.blur !== "number")
                return "blur: number expected";
        if (message.effects != null && message.hasOwnProperty("effects")) {
            if (!Array.isArray(message.effects))
                return "effects: array expected";
            for (let i = 0; i < message.effects.length; ++i) {
                let error = $root.VectorEffect.verify(message.effects[i]);
                if (error)
                    return "effects." + error;
            }
        }
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Paint.verify(message.color);
            if (error)
                return "color." + error;
        }
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor")) {
            let error = $root.Paint.verify(message.backgroundColor);
            if (error)
                return "backgroundColor." + error;
        }
        return null;
    };

    /**
     * Creates a VectorStyle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VectorStyle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VectorStyle} VectorStyle
     */
    VectorStyle.fromObject = function fromObject(object) {
        if (object instanceof $root.VectorStyle)
            return object;
        let message = new $root.VectorStyle();
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.border != null) {
            if (typeof object.border !== "object")
                throw TypeError(".VectorStyle.border: object expected");
            message.border = $root.Border.fromObject(object.border);
        }
        if (object.blur != null)
            message.blur = Number(object.blur);
        if (object.effects) {
            if (!Array.isArray(object.effects))
                throw TypeError(".VectorStyle.effects: array expected");
            message.effects = [];
            for (let i = 0; i < object.effects.length; ++i) {
                if (typeof object.effects[i] !== "object")
                    throw TypeError(".VectorStyle.effects: object expected");
                message.effects[i] = $root.VectorEffect.fromObject(object.effects[i]);
            }
        }
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".VectorStyle.color: object expected");
            message.color = $root.Paint.fromObject(object.color);
        }
        if (object.backgroundColor != null) {
            if (typeof object.backgroundColor !== "object")
                throw TypeError(".VectorStyle.backgroundColor: object expected");
            message.backgroundColor = $root.Paint.fromObject(object.backgroundColor);
        }
        return message;
    };

    /**
     * Creates a plain object from a VectorStyle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VectorStyle
     * @static
     * @param {VectorStyle} message VectorStyle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VectorStyle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.effects = [];
        if (options.defaults) {
            object.rotation = 0;
            object.border = null;
            object.blur = 0;
            object.color = null;
            object.backgroundColor = null;
        }
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.border != null && message.hasOwnProperty("border"))
            object.border = $root.Border.toObject(message.border, options);
        if (message.blur != null && message.hasOwnProperty("blur"))
            object.blur = options.json && !isFinite(message.blur) ? String(message.blur) : message.blur;
        if (message.effects && message.effects.length) {
            object.effects = [];
            for (let j = 0; j < message.effects.length; ++j)
                object.effects[j] = $root.VectorEffect.toObject(message.effects[j], options);
        }
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Paint.toObject(message.color, options);
        if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
            object.backgroundColor = $root.Paint.toObject(message.backgroundColor, options);
        return object;
    };

    /**
     * Converts this VectorStyle to JSON.
     * @function toJSON
     * @memberof VectorStyle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VectorStyle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VectorStyle
     * @function getTypeUrl
     * @memberof VectorStyle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VectorStyle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VectorStyle";
    };

    return VectorStyle;
})();

export const RPFFileResponse = $root.RPFFileResponse = (() => {

    /**
     * Properties of a RPFFileResponse.
     * @exports IRPFFileResponse
     * @interface IRPFFileResponse
     * @property {IDocumentNode|null} [document] RPFFileResponse document
     * @property {number|null} [schemaVersion] RPFFileResponse schemaVersion
     * @property {string|null} [source] RPFFileResponse source
     * @property {string|null} [version] RPFFileResponse version
     */

    /**
     * Constructs a new RPFFileResponse.
     * @exports RPFFileResponse
     * @classdesc Represents a RPFFileResponse.
     * @implements IRPFFileResponse
     * @constructor
     * @param {IRPFFileResponse=} [properties] Properties to set
     */
    function RPFFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RPFFileResponse document.
     * @member {IDocumentNode|null|undefined} document
     * @memberof RPFFileResponse
     * @instance
     */
    RPFFileResponse.prototype.document = null;

    /**
     * RPFFileResponse schemaVersion.
     * @member {number} schemaVersion
     * @memberof RPFFileResponse
     * @instance
     */
    RPFFileResponse.prototype.schemaVersion = 0;

    /**
     * RPFFileResponse source.
     * @member {string} source
     * @memberof RPFFileResponse
     * @instance
     */
    RPFFileResponse.prototype.source = "";

    /**
     * RPFFileResponse version.
     * @member {string} version
     * @memberof RPFFileResponse
     * @instance
     */
    RPFFileResponse.prototype.version = "";

    /**
     * Creates a new RPFFileResponse instance using the specified properties.
     * @function create
     * @memberof RPFFileResponse
     * @static
     * @param {IRPFFileResponse=} [properties] Properties to set
     * @returns {RPFFileResponse} RPFFileResponse instance
     */
    RPFFileResponse.create = function create(properties) {
        return new RPFFileResponse(properties);
    };

    /**
     * Encodes the specified RPFFileResponse message. Does not implicitly {@link RPFFileResponse.verify|verify} messages.
     * @function encode
     * @memberof RPFFileResponse
     * @static
     * @param {IRPFFileResponse} message RPFFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RPFFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.document != null && Object.hasOwnProperty.call(message, "document"))
            $root.DocumentNode.encode(message.document, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.schemaVersion != null && Object.hasOwnProperty.call(message, "schemaVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.schemaVersion);
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.source);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified RPFFileResponse message, length delimited. Does not implicitly {@link RPFFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RPFFileResponse
     * @static
     * @param {IRPFFileResponse} message RPFFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RPFFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RPFFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RPFFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RPFFileResponse} RPFFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RPFFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RPFFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.document = $root.DocumentNode.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.schemaVersion = reader.int32();
                    break;
                }
            case 3: {
                    message.source = reader.string();
                    break;
                }
            case 4: {
                    message.version = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RPFFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RPFFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RPFFileResponse} RPFFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RPFFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RPFFileResponse message.
     * @function verify
     * @memberof RPFFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RPFFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.document != null && message.hasOwnProperty("document")) {
            let error = $root.DocumentNode.verify(message.document);
            if (error)
                return "document." + error;
        }
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            if (!$util.isInteger(message.schemaVersion))
                return "schemaVersion: integer expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a RPFFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RPFFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RPFFileResponse} RPFFileResponse
     */
    RPFFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RPFFileResponse)
            return object;
        let message = new $root.RPFFileResponse();
        if (object.document != null) {
            if (typeof object.document !== "object")
                throw TypeError(".RPFFileResponse.document: object expected");
            message.document = $root.DocumentNode.fromObject(object.document);
        }
        if (object.schemaVersion != null)
            message.schemaVersion = object.schemaVersion | 0;
        if (object.source != null)
            message.source = String(object.source);
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a RPFFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RPFFileResponse
     * @static
     * @param {RPFFileResponse} message RPFFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RPFFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.document = null;
            object.schemaVersion = 0;
            object.source = "";
            object.version = "";
        }
        if (message.document != null && message.hasOwnProperty("document"))
            object.document = $root.DocumentNode.toObject(message.document, options);
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            object.schemaVersion = message.schemaVersion;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this RPFFileResponse to JSON.
     * @function toJSON
     * @memberof RPFFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RPFFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RPFFileResponse
     * @function getTypeUrl
     * @memberof RPFFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RPFFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RPFFileResponse";
    };

    return RPFFileResponse;
})();

export { $root as default };
