/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * CanvasEditorElementType enum.
 * @exports CanvasEditorElementType
 * @enum {number}
 * @property {number} TEXT=0 TEXT value
 * @property {number} SHAPE=1 SHAPE value
 * @property {number} IMAGE=2 IMAGE value
 * @property {number} GROUP=3 GROUP value
 * @property {number} CREATIVE_BOX=4 CREATIVE_BOX value
 * @property {number} CANVAS_MASK=5 CANVAS_MASK value
 */
$root.CanvasEditorElementType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TEXT"] = 0;
    values[valuesById[1] = "SHAPE"] = 1;
    values[valuesById[2] = "IMAGE"] = 2;
    values[valuesById[3] = "GROUP"] = 3;
    values[valuesById[4] = "CREATIVE_BOX"] = 4;
    values[valuesById[5] = "CANVAS_MASK"] = 5;
    return values;
})();

/**
 * ObjectFit enum.
 * @exports ObjectFit
 * @enum {number}
 * @property {number} FILL=0 FILL value
 * @property {number} FIT=1 FIT value
 * @property {number} CROP=2 CROP value
 */
$root.ObjectFit = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FILL"] = 0;
    values[valuesById[1] = "FIT"] = 1;
    values[valuesById[2] = "CROP"] = 2;
    return values;
})();

/**
 * TextCase enum.
 * @exports TextCase
 * @enum {number}
 * @property {number} UPPERCASE=0 UPPERCASE value
 * @property {number} LOWERCASE=1 LOWERCASE value
 * @property {number} TITLECASE=2 TITLECASE value
 * @property {number} NONE=3 NONE value
 */
$root.TextCase = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UPPERCASE"] = 0;
    values[valuesById[1] = "LOWERCASE"] = 1;
    values[valuesById[2] = "TITLECASE"] = 2;
    values[valuesById[3] = "NONE"] = 3;
    return values;
})();

/**
 * FontStyle enum.
 * @exports FontStyle
 * @enum {number}
 * @property {number} NORMAL=0 NORMAL value
 * @property {number} ITALIC=1 ITALIC value
 * @property {number} OBLIQUE=2 OBLIQUE value
 */
$root.FontStyle = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NORMAL"] = 0;
    values[valuesById[1] = "ITALIC"] = 1;
    values[valuesById[2] = "OBLIQUE"] = 2;
    return values;
})();

/**
 * ObjectPosition enum.
 * @exports ObjectPosition
 * @enum {number}
 * @property {number} TOP_LEFT=0 TOP_LEFT value
 * @property {number} TOP_CENTER=1 TOP_CENTER value
 * @property {number} TOP_RIGHT=2 TOP_RIGHT value
 * @property {number} CENTER_LEFT=3 CENTER_LEFT value
 * @property {number} CENTER=4 CENTER value
 * @property {number} CENTER_RIGHT=5 CENTER_RIGHT value
 * @property {number} BOTTOM_LEFT=6 BOTTOM_LEFT value
 * @property {number} BOTTOM_CENTER=7 BOTTOM_CENTER value
 * @property {number} BOTTOM_RIGHT=8 BOTTOM_RIGHT value
 * @property {number} CUSTOM=9 CUSTOM value
 */
$root.ObjectPosition = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TOP_LEFT"] = 0;
    values[valuesById[1] = "TOP_CENTER"] = 1;
    values[valuesById[2] = "TOP_RIGHT"] = 2;
    values[valuesById[3] = "CENTER_LEFT"] = 3;
    values[valuesById[4] = "CENTER"] = 4;
    values[valuesById[5] = "CENTER_RIGHT"] = 5;
    values[valuesById[6] = "BOTTOM_LEFT"] = 6;
    values[valuesById[7] = "BOTTOM_CENTER"] = 7;
    values[valuesById[8] = "BOTTOM_RIGHT"] = 8;
    values[valuesById[9] = "CUSTOM"] = 9;
    return values;
})();

/**
 * BorderPosition enum.
 * @exports BorderPosition
 * @enum {number}
 * @property {number} CENTER=0 CENTER value
 * @property {number} INSIDE=1 INSIDE value
 * @property {number} OUTSIDE=2 OUTSIDE value
 */
$root.BorderPosition = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CENTER"] = 0;
    values[valuesById[1] = "INSIDE"] = 1;
    values[valuesById[2] = "OUTSIDE"] = 2;
    return values;
})();

$root.PathSegment = (function() {

    /**
     * Properties of a PathSegment.
     * @exports IPathSegment
     * @interface IPathSegment
     * @property {Array.<string>|null} [path] PathSegment path
     */

    /**
     * Constructs a new PathSegment.
     * @exports PathSegment
     * @classdesc Represents a PathSegment.
     * @implements IPathSegment
     * @constructor
     * @param {IPathSegment=} [properties] Properties to set
     */
    function PathSegment(properties) {
        this.path = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PathSegment path.
     * @member {Array.<string>} path
     * @memberof PathSegment
     * @instance
     */
    PathSegment.prototype.path = $util.emptyArray;

    /**
     * Creates a new PathSegment instance using the specified properties.
     * @function create
     * @memberof PathSegment
     * @static
     * @param {IPathSegment=} [properties] Properties to set
     * @returns {PathSegment} PathSegment instance
     */
    PathSegment.create = function create(properties) {
        return new PathSegment(properties);
    };

    /**
     * Encodes the specified PathSegment message. Does not implicitly {@link PathSegment.verify|verify} messages.
     * @function encode
     * @memberof PathSegment
     * @static
     * @param {IPathSegment} message PathSegment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PathSegment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.path != null && message.path.length)
            for (var i = 0; i < message.path.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path[i]);
        return writer;
    };

    /**
     * Encodes the specified PathSegment message, length delimited. Does not implicitly {@link PathSegment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PathSegment
     * @static
     * @param {IPathSegment} message PathSegment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PathSegment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PathSegment message from the specified reader or buffer.
     * @function decode
     * @memberof PathSegment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PathSegment} PathSegment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PathSegment.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PathSegment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.path && message.path.length))
                        message.path = [];
                    message.path.push(reader.string());
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
     * Decodes a PathSegment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PathSegment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PathSegment} PathSegment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PathSegment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PathSegment message.
     * @function verify
     * @memberof PathSegment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PathSegment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.path != null && message.hasOwnProperty("path")) {
            if (!Array.isArray(message.path))
                return "path: array expected";
            for (var i = 0; i < message.path.length; ++i)
                if (!$util.isString(message.path[i]))
                    return "path: string[] expected";
        }
        return null;
    };

    /**
     * Creates a PathSegment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PathSegment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PathSegment} PathSegment
     */
    PathSegment.fromObject = function fromObject(object) {
        if (object instanceof $root.PathSegment)
            return object;
        var message = new $root.PathSegment();
        if (object.path) {
            if (!Array.isArray(object.path))
                throw TypeError(".PathSegment.path: array expected");
            message.path = [];
            for (var i = 0; i < object.path.length; ++i)
                message.path[i] = String(object.path[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a PathSegment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PathSegment
     * @static
     * @param {PathSegment} message PathSegment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PathSegment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.path = [];
        if (message.path && message.path.length) {
            object.path = [];
            for (var j = 0; j < message.path.length; ++j)
                object.path[j] = message.path[j];
        }
        return object;
    };

    /**
     * Converts this PathSegment to JSON.
     * @function toJSON
     * @memberof PathSegment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PathSegment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PathSegment
     * @function getTypeUrl
     * @memberof PathSegment
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PathSegment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PathSegment";
    };

    return PathSegment;
})();

$root.TextStyle = (function() {

    /**
     * Properties of a TextStyle.
     * @exports ITextStyle
     * @interface ITextStyle
     * @property {TextCase|null} [textCase] TextStyle textCase
     * @property {ISerializedFillType|null} [textFill] TextStyle textFill
     * @property {string|null} [fontFamily] TextStyle fontFamily
     * @property {string|null} [fontWeight] TextStyle fontWeight
     * @property {number|null} [fontSize] TextStyle fontSize
     * @property {boolean|null} [underline] TextStyle underline
     * @property {boolean|null} [overline] TextStyle overline
     * @property {boolean|null} [linethrough] TextStyle linethrough
     * @property {FontStyle|null} [fontStyle] TextStyle fontStyle
     * @property {number|null} [charSpacing] TextStyle charSpacing
     * @property {number|null} [lineHeight] TextStyle lineHeight
     */

    /**
     * Constructs a new TextStyle.
     * @exports TextStyle
     * @classdesc Represents a TextStyle.
     * @implements ITextStyle
     * @constructor
     * @param {ITextStyle=} [properties] Properties to set
     */
    function TextStyle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextStyle textCase.
     * @member {TextCase} textCase
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.textCase = 0;

    /**
     * TextStyle textFill.
     * @member {ISerializedFillType|null|undefined} textFill
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.textFill = null;

    /**
     * TextStyle fontFamily.
     * @member {string} fontFamily
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.fontFamily = "";

    /**
     * TextStyle fontWeight.
     * @member {string} fontWeight
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.fontWeight = "";

    /**
     * TextStyle fontSize.
     * @member {number} fontSize
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.fontSize = 0;

    /**
     * TextStyle underline.
     * @member {boolean} underline
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.underline = false;

    /**
     * TextStyle overline.
     * @member {boolean} overline
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.overline = false;

    /**
     * TextStyle linethrough.
     * @member {boolean} linethrough
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.linethrough = false;

    /**
     * TextStyle fontStyle.
     * @member {FontStyle} fontStyle
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.fontStyle = 0;

    /**
     * TextStyle charSpacing.
     * @member {number} charSpacing
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.charSpacing = 0;

    /**
     * TextStyle lineHeight.
     * @member {number} lineHeight
     * @memberof TextStyle
     * @instance
     */
    TextStyle.prototype.lineHeight = 0;

    /**
     * Creates a new TextStyle instance using the specified properties.
     * @function create
     * @memberof TextStyle
     * @static
     * @param {ITextStyle=} [properties] Properties to set
     * @returns {TextStyle} TextStyle instance
     */
    TextStyle.create = function create(properties) {
        return new TextStyle(properties);
    };

    /**
     * Encodes the specified TextStyle message. Does not implicitly {@link TextStyle.verify|verify} messages.
     * @function encode
     * @memberof TextStyle
     * @static
     * @param {ITextStyle} message TextStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextStyle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.textCase != null && Object.hasOwnProperty.call(message, "textCase"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.textCase);
        if (message.textFill != null && Object.hasOwnProperty.call(message, "textFill"))
            $root.SerializedFillType.encode(message.textFill, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.fontFamily != null && Object.hasOwnProperty.call(message, "fontFamily"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.fontFamily);
        if (message.fontWeight != null && Object.hasOwnProperty.call(message, "fontWeight"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.fontWeight);
        if (message.fontSize != null && Object.hasOwnProperty.call(message, "fontSize"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.fontSize);
        if (message.underline != null && Object.hasOwnProperty.call(message, "underline"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.underline);
        if (message.overline != null && Object.hasOwnProperty.call(message, "overline"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.overline);
        if (message.linethrough != null && Object.hasOwnProperty.call(message, "linethrough"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.linethrough);
        if (message.fontStyle != null && Object.hasOwnProperty.call(message, "fontStyle"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.fontStyle);
        if (message.charSpacing != null && Object.hasOwnProperty.call(message, "charSpacing"))
            writer.uint32(/* id 10, wireType 5 =*/85).float(message.charSpacing);
        if (message.lineHeight != null && Object.hasOwnProperty.call(message, "lineHeight"))
            writer.uint32(/* id 11, wireType 5 =*/93).float(message.lineHeight);
        return writer;
    };

    /**
     * Encodes the specified TextStyle message, length delimited. Does not implicitly {@link TextStyle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextStyle
     * @static
     * @param {ITextStyle} message TextStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextStyle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextStyle message from the specified reader or buffer.
     * @function decode
     * @memberof TextStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextStyle} TextStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextStyle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextStyle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.textCase = reader.int32();
                    break;
                }
            case 2: {
                    message.textFill = $root.SerializedFillType.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.fontFamily = reader.string();
                    break;
                }
            case 4: {
                    message.fontWeight = reader.string();
                    break;
                }
            case 5: {
                    message.fontSize = reader.float();
                    break;
                }
            case 6: {
                    message.underline = reader.bool();
                    break;
                }
            case 7: {
                    message.overline = reader.bool();
                    break;
                }
            case 8: {
                    message.linethrough = reader.bool();
                    break;
                }
            case 9: {
                    message.fontStyle = reader.int32();
                    break;
                }
            case 10: {
                    message.charSpacing = reader.float();
                    break;
                }
            case 11: {
                    message.lineHeight = reader.float();
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
     * Decodes a TextStyle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextStyle} TextStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextStyle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextStyle message.
     * @function verify
     * @memberof TextStyle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextStyle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.textCase != null && message.hasOwnProperty("textCase"))
            switch (message.textCase) {
            default:
                return "textCase: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.textFill != null && message.hasOwnProperty("textFill")) {
            var error = $root.SerializedFillType.verify(message.textFill);
            if (error)
                return "textFill." + error;
        }
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            if (!$util.isString(message.fontFamily))
                return "fontFamily: string expected";
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            if (!$util.isString(message.fontWeight))
                return "fontWeight: string expected";
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            if (typeof message.fontSize !== "number")
                return "fontSize: number expected";
        if (message.underline != null && message.hasOwnProperty("underline"))
            if (typeof message.underline !== "boolean")
                return "underline: boolean expected";
        if (message.overline != null && message.hasOwnProperty("overline"))
            if (typeof message.overline !== "boolean")
                return "overline: boolean expected";
        if (message.linethrough != null && message.hasOwnProperty("linethrough"))
            if (typeof message.linethrough !== "boolean")
                return "linethrough: boolean expected";
        if (message.fontStyle != null && message.hasOwnProperty("fontStyle"))
            switch (message.fontStyle) {
            default:
                return "fontStyle: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.charSpacing != null && message.hasOwnProperty("charSpacing"))
            if (typeof message.charSpacing !== "number")
                return "charSpacing: number expected";
        if (message.lineHeight != null && message.hasOwnProperty("lineHeight"))
            if (typeof message.lineHeight !== "number")
                return "lineHeight: number expected";
        return null;
    };

    /**
     * Creates a TextStyle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextStyle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextStyle} TextStyle
     */
    TextStyle.fromObject = function fromObject(object) {
        if (object instanceof $root.TextStyle)
            return object;
        var message = new $root.TextStyle();
        switch (object.textCase) {
        default:
            if (typeof object.textCase === "number") {
                message.textCase = object.textCase;
                break;
            }
            break;
        case "UPPERCASE":
        case 0:
            message.textCase = 0;
            break;
        case "LOWERCASE":
        case 1:
            message.textCase = 1;
            break;
        case "TITLECASE":
        case 2:
            message.textCase = 2;
            break;
        case "NONE":
        case 3:
            message.textCase = 3;
            break;
        }
        if (object.textFill != null) {
            if (typeof object.textFill !== "object")
                throw TypeError(".TextStyle.textFill: object expected");
            message.textFill = $root.SerializedFillType.fromObject(object.textFill);
        }
        if (object.fontFamily != null)
            message.fontFamily = String(object.fontFamily);
        if (object.fontWeight != null)
            message.fontWeight = String(object.fontWeight);
        if (object.fontSize != null)
            message.fontSize = Number(object.fontSize);
        if (object.underline != null)
            message.underline = Boolean(object.underline);
        if (object.overline != null)
            message.overline = Boolean(object.overline);
        if (object.linethrough != null)
            message.linethrough = Boolean(object.linethrough);
        switch (object.fontStyle) {
        default:
            if (typeof object.fontStyle === "number") {
                message.fontStyle = object.fontStyle;
                break;
            }
            break;
        case "NORMAL":
        case 0:
            message.fontStyle = 0;
            break;
        case "ITALIC":
        case 1:
            message.fontStyle = 1;
            break;
        case "OBLIQUE":
        case 2:
            message.fontStyle = 2;
            break;
        }
        if (object.charSpacing != null)
            message.charSpacing = Number(object.charSpacing);
        if (object.lineHeight != null)
            message.lineHeight = Number(object.lineHeight);
        return message;
    };

    /**
     * Creates a plain object from a TextStyle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextStyle
     * @static
     * @param {TextStyle} message TextStyle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextStyle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.textCase = options.enums === String ? "UPPERCASE" : 0;
            object.textFill = null;
            object.fontFamily = "";
            object.fontWeight = "";
            object.fontSize = 0;
            object.underline = false;
            object.overline = false;
            object.linethrough = false;
            object.fontStyle = options.enums === String ? "NORMAL" : 0;
            object.charSpacing = 0;
            object.lineHeight = 0;
        }
        if (message.textCase != null && message.hasOwnProperty("textCase"))
            object.textCase = options.enums === String ? $root.TextCase[message.textCase] === undefined ? message.textCase : $root.TextCase[message.textCase] : message.textCase;
        if (message.textFill != null && message.hasOwnProperty("textFill"))
            object.textFill = $root.SerializedFillType.toObject(message.textFill, options);
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            object.fontFamily = message.fontFamily;
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            object.fontWeight = message.fontWeight;
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            object.fontSize = options.json && !isFinite(message.fontSize) ? String(message.fontSize) : message.fontSize;
        if (message.underline != null && message.hasOwnProperty("underline"))
            object.underline = message.underline;
        if (message.overline != null && message.hasOwnProperty("overline"))
            object.overline = message.overline;
        if (message.linethrough != null && message.hasOwnProperty("linethrough"))
            object.linethrough = message.linethrough;
        if (message.fontStyle != null && message.hasOwnProperty("fontStyle"))
            object.fontStyle = options.enums === String ? $root.FontStyle[message.fontStyle] === undefined ? message.fontStyle : $root.FontStyle[message.fontStyle] : message.fontStyle;
        if (message.charSpacing != null && message.hasOwnProperty("charSpacing"))
            object.charSpacing = options.json && !isFinite(message.charSpacing) ? String(message.charSpacing) : message.charSpacing;
        if (message.lineHeight != null && message.hasOwnProperty("lineHeight"))
            object.lineHeight = options.json && !isFinite(message.lineHeight) ? String(message.lineHeight) : message.lineHeight;
        return object;
    };

    /**
     * Converts this TextStyle to JSON.
     * @function toJSON
     * @memberof TextStyle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextStyle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextStyle
     * @function getTypeUrl
     * @memberof TextStyle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextStyle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextStyle";
    };

    return TextStyle;
})();

$root.WordStyle = (function() {

    /**
     * Properties of a WordStyle.
     * @exports IWordStyle
     * @interface IWordStyle
     * @property {string|null} [id] WordStyle id
     * @property {IWordStyleData|null} [data] WordStyle data
     */

    /**
     * Constructs a new WordStyle.
     * @exports WordStyle
     * @classdesc Represents a WordStyle.
     * @implements IWordStyle
     * @constructor
     * @param {IWordStyle=} [properties] Properties to set
     */
    function WordStyle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WordStyle id.
     * @member {string} id
     * @memberof WordStyle
     * @instance
     */
    WordStyle.prototype.id = "";

    /**
     * WordStyle data.
     * @member {IWordStyleData|null|undefined} data
     * @memberof WordStyle
     * @instance
     */
    WordStyle.prototype.data = null;

    /**
     * Creates a new WordStyle instance using the specified properties.
     * @function create
     * @memberof WordStyle
     * @static
     * @param {IWordStyle=} [properties] Properties to set
     * @returns {WordStyle} WordStyle instance
     */
    WordStyle.create = function create(properties) {
        return new WordStyle(properties);
    };

    /**
     * Encodes the specified WordStyle message. Does not implicitly {@link WordStyle.verify|verify} messages.
     * @function encode
     * @memberof WordStyle
     * @static
     * @param {IWordStyle} message WordStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.WordStyleData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WordStyle message, length delimited. Does not implicitly {@link WordStyle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WordStyle
     * @static
     * @param {IWordStyle} message WordStyle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WordStyle message from the specified reader or buffer.
     * @function decode
     * @memberof WordStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WordStyle} WordStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WordStyle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.data = $root.WordStyleData.decode(reader, reader.uint32());
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
     * Decodes a WordStyle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WordStyle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WordStyle} WordStyle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WordStyle message.
     * @function verify
     * @memberof WordStyle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WordStyle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.WordStyleData.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a WordStyle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WordStyle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WordStyle} WordStyle
     */
    WordStyle.fromObject = function fromObject(object) {
        if (object instanceof $root.WordStyle)
            return object;
        var message = new $root.WordStyle();
        if (object.id != null)
            message.id = String(object.id);
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".WordStyle.data: object expected");
            message.data = $root.WordStyleData.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a WordStyle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WordStyle
     * @static
     * @param {WordStyle} message WordStyle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WordStyle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.data = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.WordStyleData.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this WordStyle to JSON.
     * @function toJSON
     * @memberof WordStyle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WordStyle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WordStyle
     * @function getTypeUrl
     * @memberof WordStyle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WordStyle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WordStyle";
    };

    return WordStyle;
})();

$root.WordStyleData = (function() {

    /**
     * Properties of a WordStyleData.
     * @exports IWordStyleData
     * @interface IWordStyleData
     * @property {number|null} [start] WordStyleData start
     * @property {number|null} [end] WordStyleData end
     * @property {IWordStyleProperties|null} [styles] WordStyleData styles
     */

    /**
     * Constructs a new WordStyleData.
     * @exports WordStyleData
     * @classdesc Represents a WordStyleData.
     * @implements IWordStyleData
     * @constructor
     * @param {IWordStyleData=} [properties] Properties to set
     */
    function WordStyleData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WordStyleData start.
     * @member {number} start
     * @memberof WordStyleData
     * @instance
     */
    WordStyleData.prototype.start = 0;

    /**
     * WordStyleData end.
     * @member {number} end
     * @memberof WordStyleData
     * @instance
     */
    WordStyleData.prototype.end = 0;

    /**
     * WordStyleData styles.
     * @member {IWordStyleProperties|null|undefined} styles
     * @memberof WordStyleData
     * @instance
     */
    WordStyleData.prototype.styles = null;

    /**
     * Creates a new WordStyleData instance using the specified properties.
     * @function create
     * @memberof WordStyleData
     * @static
     * @param {IWordStyleData=} [properties] Properties to set
     * @returns {WordStyleData} WordStyleData instance
     */
    WordStyleData.create = function create(properties) {
        return new WordStyleData(properties);
    };

    /**
     * Encodes the specified WordStyleData message. Does not implicitly {@link WordStyleData.verify|verify} messages.
     * @function encode
     * @memberof WordStyleData
     * @static
     * @param {IWordStyleData} message WordStyleData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyleData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
        if (message.styles != null && Object.hasOwnProperty.call(message, "styles"))
            $root.WordStyleProperties.encode(message.styles, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WordStyleData message, length delimited. Does not implicitly {@link WordStyleData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WordStyleData
     * @static
     * @param {IWordStyleData} message WordStyleData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyleData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WordStyleData message from the specified reader or buffer.
     * @function decode
     * @memberof WordStyleData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WordStyleData} WordStyleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyleData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WordStyleData();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.styles = $root.WordStyleProperties.decode(reader, reader.uint32());
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
     * Decodes a WordStyleData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WordStyleData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WordStyleData} WordStyleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyleData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WordStyleData message.
     * @function verify
     * @memberof WordStyleData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WordStyleData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.start != null && message.hasOwnProperty("start"))
            if (!$util.isInteger(message.start))
                return "start: integer expected";
        if (message.end != null && message.hasOwnProperty("end"))
            if (!$util.isInteger(message.end))
                return "end: integer expected";
        if (message.styles != null && message.hasOwnProperty("styles")) {
            var error = $root.WordStyleProperties.verify(message.styles);
            if (error)
                return "styles." + error;
        }
        return null;
    };

    /**
     * Creates a WordStyleData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WordStyleData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WordStyleData} WordStyleData
     */
    WordStyleData.fromObject = function fromObject(object) {
        if (object instanceof $root.WordStyleData)
            return object;
        var message = new $root.WordStyleData();
        if (object.start != null)
            message.start = object.start | 0;
        if (object.end != null)
            message.end = object.end | 0;
        if (object.styles != null) {
            if (typeof object.styles !== "object")
                throw TypeError(".WordStyleData.styles: object expected");
            message.styles = $root.WordStyleProperties.fromObject(object.styles);
        }
        return message;
    };

    /**
     * Creates a plain object from a WordStyleData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WordStyleData
     * @static
     * @param {WordStyleData} message WordStyleData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WordStyleData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.start = 0;
            object.end = 0;
            object.styles = null;
        }
        if (message.start != null && message.hasOwnProperty("start"))
            object.start = message.start;
        if (message.end != null && message.hasOwnProperty("end"))
            object.end = message.end;
        if (message.styles != null && message.hasOwnProperty("styles"))
            object.styles = $root.WordStyleProperties.toObject(message.styles, options);
        return object;
    };

    /**
     * Converts this WordStyleData to JSON.
     * @function toJSON
     * @memberof WordStyleData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WordStyleData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WordStyleData
     * @function getTypeUrl
     * @memberof WordStyleData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WordStyleData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WordStyleData";
    };

    return WordStyleData;
})();

$root.WordStyleProperties = (function() {

    /**
     * Properties of a WordStyleProperties.
     * @exports IWordStyleProperties
     * @interface IWordStyleProperties
     * @property {string|null} [fontFamily] WordStyleProperties fontFamily
     * @property {number|null} [fontSize] WordStyleProperties fontSize
     * @property {string|null} [fontWeight] WordStyleProperties fontWeight
     * @property {FontStyle|null} [fontStyle] WordStyleProperties fontStyle
     * @property {string|null} [textDecoration] WordStyleProperties textDecoration
     * @property {string|null} [textAlign] WordStyleProperties textAlign
     * @property {ISerializedFillType|null} [textBackgroundColor] WordStyleProperties textBackgroundColor
     * @property {ISerializedFillType|null} [fill] WordStyleProperties fill
     * @property {string|null} [stroke] WordStyleProperties stroke
     * @property {number|null} [strokeWidth] WordStyleProperties strokeWidth
     */

    /**
     * Constructs a new WordStyleProperties.
     * @exports WordStyleProperties
     * @classdesc Represents a WordStyleProperties.
     * @implements IWordStyleProperties
     * @constructor
     * @param {IWordStyleProperties=} [properties] Properties to set
     */
    function WordStyleProperties(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WordStyleProperties fontFamily.
     * @member {string} fontFamily
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.fontFamily = "";

    /**
     * WordStyleProperties fontSize.
     * @member {number} fontSize
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.fontSize = 0;

    /**
     * WordStyleProperties fontWeight.
     * @member {string} fontWeight
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.fontWeight = "";

    /**
     * WordStyleProperties fontStyle.
     * @member {FontStyle} fontStyle
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.fontStyle = 0;

    /**
     * WordStyleProperties textDecoration.
     * @member {string} textDecoration
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.textDecoration = "";

    /**
     * WordStyleProperties textAlign.
     * @member {string} textAlign
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.textAlign = "";

    /**
     * WordStyleProperties textBackgroundColor.
     * @member {ISerializedFillType|null|undefined} textBackgroundColor
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.textBackgroundColor = null;

    /**
     * WordStyleProperties fill.
     * @member {ISerializedFillType|null|undefined} fill
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.fill = null;

    /**
     * WordStyleProperties stroke.
     * @member {string} stroke
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.stroke = "";

    /**
     * WordStyleProperties strokeWidth.
     * @member {number} strokeWidth
     * @memberof WordStyleProperties
     * @instance
     */
    WordStyleProperties.prototype.strokeWidth = 0;

    /**
     * Creates a new WordStyleProperties instance using the specified properties.
     * @function create
     * @memberof WordStyleProperties
     * @static
     * @param {IWordStyleProperties=} [properties] Properties to set
     * @returns {WordStyleProperties} WordStyleProperties instance
     */
    WordStyleProperties.create = function create(properties) {
        return new WordStyleProperties(properties);
    };

    /**
     * Encodes the specified WordStyleProperties message. Does not implicitly {@link WordStyleProperties.verify|verify} messages.
     * @function encode
     * @memberof WordStyleProperties
     * @static
     * @param {IWordStyleProperties} message WordStyleProperties message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyleProperties.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fontFamily != null && Object.hasOwnProperty.call(message, "fontFamily"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fontFamily);
        if (message.fontSize != null && Object.hasOwnProperty.call(message, "fontSize"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.fontSize);
        if (message.fontWeight != null && Object.hasOwnProperty.call(message, "fontWeight"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.fontWeight);
        if (message.fontStyle != null && Object.hasOwnProperty.call(message, "fontStyle"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fontStyle);
        if (message.textDecoration != null && Object.hasOwnProperty.call(message, "textDecoration"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.textDecoration);
        if (message.textAlign != null && Object.hasOwnProperty.call(message, "textAlign"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.textAlign);
        if (message.textBackgroundColor != null && Object.hasOwnProperty.call(message, "textBackgroundColor"))
            $root.SerializedFillType.encode(message.textBackgroundColor, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.fill != null && Object.hasOwnProperty.call(message, "fill"))
            $root.SerializedFillType.encode(message.fill, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.stroke != null && Object.hasOwnProperty.call(message, "stroke"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.stroke);
        if (message.strokeWidth != null && Object.hasOwnProperty.call(message, "strokeWidth"))
            writer.uint32(/* id 10, wireType 5 =*/85).float(message.strokeWidth);
        return writer;
    };

    /**
     * Encodes the specified WordStyleProperties message, length delimited. Does not implicitly {@link WordStyleProperties.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WordStyleProperties
     * @static
     * @param {IWordStyleProperties} message WordStyleProperties message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WordStyleProperties.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WordStyleProperties message from the specified reader or buffer.
     * @function decode
     * @memberof WordStyleProperties
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WordStyleProperties} WordStyleProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyleProperties.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WordStyleProperties();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.fontFamily = reader.string();
                    break;
                }
            case 2: {
                    message.fontSize = reader.float();
                    break;
                }
            case 3: {
                    message.fontWeight = reader.string();
                    break;
                }
            case 4: {
                    message.fontStyle = reader.int32();
                    break;
                }
            case 5: {
                    message.textDecoration = reader.string();
                    break;
                }
            case 6: {
                    message.textAlign = reader.string();
                    break;
                }
            case 7: {
                    message.textBackgroundColor = $root.SerializedFillType.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.fill = $root.SerializedFillType.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.stroke = reader.string();
                    break;
                }
            case 10: {
                    message.strokeWidth = reader.float();
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
     * Decodes a WordStyleProperties message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WordStyleProperties
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WordStyleProperties} WordStyleProperties
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WordStyleProperties.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WordStyleProperties message.
     * @function verify
     * @memberof WordStyleProperties
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WordStyleProperties.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            if (!$util.isString(message.fontFamily))
                return "fontFamily: string expected";
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            if (typeof message.fontSize !== "number")
                return "fontSize: number expected";
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            if (!$util.isString(message.fontWeight))
                return "fontWeight: string expected";
        if (message.fontStyle != null && message.hasOwnProperty("fontStyle"))
            switch (message.fontStyle) {
            default:
                return "fontStyle: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.textDecoration != null && message.hasOwnProperty("textDecoration"))
            if (!$util.isString(message.textDecoration))
                return "textDecoration: string expected";
        if (message.textAlign != null && message.hasOwnProperty("textAlign"))
            if (!$util.isString(message.textAlign))
                return "textAlign: string expected";
        if (message.textBackgroundColor != null && message.hasOwnProperty("textBackgroundColor")) {
            var error = $root.SerializedFillType.verify(message.textBackgroundColor);
            if (error)
                return "textBackgroundColor." + error;
        }
        if (message.fill != null && message.hasOwnProperty("fill")) {
            var error = $root.SerializedFillType.verify(message.fill);
            if (error)
                return "fill." + error;
        }
        if (message.stroke != null && message.hasOwnProperty("stroke"))
            if (!$util.isString(message.stroke))
                return "stroke: string expected";
        if (message.strokeWidth != null && message.hasOwnProperty("strokeWidth"))
            if (typeof message.strokeWidth !== "number")
                return "strokeWidth: number expected";
        return null;
    };

    /**
     * Creates a WordStyleProperties message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WordStyleProperties
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WordStyleProperties} WordStyleProperties
     */
    WordStyleProperties.fromObject = function fromObject(object) {
        if (object instanceof $root.WordStyleProperties)
            return object;
        var message = new $root.WordStyleProperties();
        if (object.fontFamily != null)
            message.fontFamily = String(object.fontFamily);
        if (object.fontSize != null)
            message.fontSize = Number(object.fontSize);
        if (object.fontWeight != null)
            message.fontWeight = String(object.fontWeight);
        switch (object.fontStyle) {
        default:
            if (typeof object.fontStyle === "number") {
                message.fontStyle = object.fontStyle;
                break;
            }
            break;
        case "NORMAL":
        case 0:
            message.fontStyle = 0;
            break;
        case "ITALIC":
        case 1:
            message.fontStyle = 1;
            break;
        case "OBLIQUE":
        case 2:
            message.fontStyle = 2;
            break;
        }
        if (object.textDecoration != null)
            message.textDecoration = String(object.textDecoration);
        if (object.textAlign != null)
            message.textAlign = String(object.textAlign);
        if (object.textBackgroundColor != null) {
            if (typeof object.textBackgroundColor !== "object")
                throw TypeError(".WordStyleProperties.textBackgroundColor: object expected");
            message.textBackgroundColor = $root.SerializedFillType.fromObject(object.textBackgroundColor);
        }
        if (object.fill != null) {
            if (typeof object.fill !== "object")
                throw TypeError(".WordStyleProperties.fill: object expected");
            message.fill = $root.SerializedFillType.fromObject(object.fill);
        }
        if (object.stroke != null)
            message.stroke = String(object.stroke);
        if (object.strokeWidth != null)
            message.strokeWidth = Number(object.strokeWidth);
        return message;
    };

    /**
     * Creates a plain object from a WordStyleProperties message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WordStyleProperties
     * @static
     * @param {WordStyleProperties} message WordStyleProperties
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WordStyleProperties.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fontFamily = "";
            object.fontSize = 0;
            object.fontWeight = "";
            object.fontStyle = options.enums === String ? "NORMAL" : 0;
            object.textDecoration = "";
            object.textAlign = "";
            object.textBackgroundColor = null;
            object.fill = null;
            object.stroke = "";
            object.strokeWidth = 0;
        }
        if (message.fontFamily != null && message.hasOwnProperty("fontFamily"))
            object.fontFamily = message.fontFamily;
        if (message.fontSize != null && message.hasOwnProperty("fontSize"))
            object.fontSize = options.json && !isFinite(message.fontSize) ? String(message.fontSize) : message.fontSize;
        if (message.fontWeight != null && message.hasOwnProperty("fontWeight"))
            object.fontWeight = message.fontWeight;
        if (message.fontStyle != null && message.hasOwnProperty("fontStyle"))
            object.fontStyle = options.enums === String ? $root.FontStyle[message.fontStyle] === undefined ? message.fontStyle : $root.FontStyle[message.fontStyle] : message.fontStyle;
        if (message.textDecoration != null && message.hasOwnProperty("textDecoration"))
            object.textDecoration = message.textDecoration;
        if (message.textAlign != null && message.hasOwnProperty("textAlign"))
            object.textAlign = message.textAlign;
        if (message.textBackgroundColor != null && message.hasOwnProperty("textBackgroundColor"))
            object.textBackgroundColor = $root.SerializedFillType.toObject(message.textBackgroundColor, options);
        if (message.fill != null && message.hasOwnProperty("fill"))
            object.fill = $root.SerializedFillType.toObject(message.fill, options);
        if (message.stroke != null && message.hasOwnProperty("stroke"))
            object.stroke = message.stroke;
        if (message.strokeWidth != null && message.hasOwnProperty("strokeWidth"))
            object.strokeWidth = options.json && !isFinite(message.strokeWidth) ? String(message.strokeWidth) : message.strokeWidth;
        return object;
    };

    /**
     * Converts this WordStyleProperties to JSON.
     * @function toJSON
     * @memberof WordStyleProperties
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WordStyleProperties.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WordStyleProperties
     * @function getTypeUrl
     * @memberof WordStyleProperties
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WordStyleProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WordStyleProperties";
    };

    return WordStyleProperties;
})();

$root.SerializedFillType = (function() {

    /**
     * Properties of a SerializedFillType.
     * @exports ISerializedFillType
     * @interface ISerializedFillType
     * @property {string|null} [solidColor] SerializedFillType solidColor
     * @property {IPatternOptions|null} [pattern] SerializedFillType pattern
     * @property {IGradientOptions|null} [gradient] SerializedFillType gradient
     */

    /**
     * Constructs a new SerializedFillType.
     * @exports SerializedFillType
     * @classdesc Represents a SerializedFillType.
     * @implements ISerializedFillType
     * @constructor
     * @param {ISerializedFillType=} [properties] Properties to set
     */
    function SerializedFillType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SerializedFillType solidColor.
     * @member {string|null|undefined} solidColor
     * @memberof SerializedFillType
     * @instance
     */
    SerializedFillType.prototype.solidColor = null;

    /**
     * SerializedFillType pattern.
     * @member {IPatternOptions|null|undefined} pattern
     * @memberof SerializedFillType
     * @instance
     */
    SerializedFillType.prototype.pattern = null;

    /**
     * SerializedFillType gradient.
     * @member {IGradientOptions|null|undefined} gradient
     * @memberof SerializedFillType
     * @instance
     */
    SerializedFillType.prototype.gradient = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SerializedFillType fillType.
     * @member {"solidColor"|"pattern"|"gradient"|undefined} fillType
     * @memberof SerializedFillType
     * @instance
     */
    Object.defineProperty(SerializedFillType.prototype, "fillType", {
        get: $util.oneOfGetter($oneOfFields = ["solidColor", "pattern", "gradient"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SerializedFillType instance using the specified properties.
     * @function create
     * @memberof SerializedFillType
     * @static
     * @param {ISerializedFillType=} [properties] Properties to set
     * @returns {SerializedFillType} SerializedFillType instance
     */
    SerializedFillType.create = function create(properties) {
        return new SerializedFillType(properties);
    };

    /**
     * Encodes the specified SerializedFillType message. Does not implicitly {@link SerializedFillType.verify|verify} messages.
     * @function encode
     * @memberof SerializedFillType
     * @static
     * @param {ISerializedFillType} message SerializedFillType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SerializedFillType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.solidColor != null && Object.hasOwnProperty.call(message, "solidColor"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.solidColor);
        if (message.pattern != null && Object.hasOwnProperty.call(message, "pattern"))
            $root.PatternOptions.encode(message.pattern, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.gradient != null && Object.hasOwnProperty.call(message, "gradient"))
            $root.GradientOptions.encode(message.gradient, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SerializedFillType message, length delimited. Does not implicitly {@link SerializedFillType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SerializedFillType
     * @static
     * @param {ISerializedFillType} message SerializedFillType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SerializedFillType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SerializedFillType message from the specified reader or buffer.
     * @function decode
     * @memberof SerializedFillType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SerializedFillType} SerializedFillType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SerializedFillType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SerializedFillType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.solidColor = reader.string();
                    break;
                }
            case 2: {
                    message.pattern = $root.PatternOptions.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.gradient = $root.GradientOptions.decode(reader, reader.uint32());
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
     * Decodes a SerializedFillType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SerializedFillType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SerializedFillType} SerializedFillType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SerializedFillType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SerializedFillType message.
     * @function verify
     * @memberof SerializedFillType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SerializedFillType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.solidColor != null && message.hasOwnProperty("solidColor")) {
            properties.fillType = 1;
            if (!$util.isString(message.solidColor))
                return "solidColor: string expected";
        }
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            if (properties.fillType === 1)
                return "fillType: multiple values";
            properties.fillType = 1;
            {
                var error = $root.PatternOptions.verify(message.pattern);
                if (error)
                    return "pattern." + error;
            }
        }
        if (message.gradient != null && message.hasOwnProperty("gradient")) {
            if (properties.fillType === 1)
                return "fillType: multiple values";
            properties.fillType = 1;
            {
                var error = $root.GradientOptions.verify(message.gradient);
                if (error)
                    return "gradient." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SerializedFillType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SerializedFillType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SerializedFillType} SerializedFillType
     */
    SerializedFillType.fromObject = function fromObject(object) {
        if (object instanceof $root.SerializedFillType)
            return object;
        var message = new $root.SerializedFillType();
        if (object.solidColor != null)
            message.solidColor = String(object.solidColor);
        if (object.pattern != null) {
            if (typeof object.pattern !== "object")
                throw TypeError(".SerializedFillType.pattern: object expected");
            message.pattern = $root.PatternOptions.fromObject(object.pattern);
        }
        if (object.gradient != null) {
            if (typeof object.gradient !== "object")
                throw TypeError(".SerializedFillType.gradient: object expected");
            message.gradient = $root.GradientOptions.fromObject(object.gradient);
        }
        return message;
    };

    /**
     * Creates a plain object from a SerializedFillType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SerializedFillType
     * @static
     * @param {SerializedFillType} message SerializedFillType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SerializedFillType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.solidColor != null && message.hasOwnProperty("solidColor")) {
            object.solidColor = message.solidColor;
            if (options.oneofs)
                object.fillType = "solidColor";
        }
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            object.pattern = $root.PatternOptions.toObject(message.pattern, options);
            if (options.oneofs)
                object.fillType = "pattern";
        }
        if (message.gradient != null && message.hasOwnProperty("gradient")) {
            object.gradient = $root.GradientOptions.toObject(message.gradient, options);
            if (options.oneofs)
                object.fillType = "gradient";
        }
        return object;
    };

    /**
     * Converts this SerializedFillType to JSON.
     * @function toJSON
     * @memberof SerializedFillType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SerializedFillType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SerializedFillType
     * @function getTypeUrl
     * @memberof SerializedFillType
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SerializedFillType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SerializedFillType";
    };

    return SerializedFillType;
})();

$root.PatternOptions = (function() {

    /**
     * Properties of a PatternOptions.
     * @exports IPatternOptions
     * @interface IPatternOptions
     * @property {string|null} [patternType] PatternOptions patternType
     * @property {string|null} [patternSrc] PatternOptions patternSrc
     */

    /**
     * Constructs a new PatternOptions.
     * @exports PatternOptions
     * @classdesc Represents a PatternOptions.
     * @implements IPatternOptions
     * @constructor
     * @param {IPatternOptions=} [properties] Properties to set
     */
    function PatternOptions(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PatternOptions patternType.
     * @member {string} patternType
     * @memberof PatternOptions
     * @instance
     */
    PatternOptions.prototype.patternType = "";

    /**
     * PatternOptions patternSrc.
     * @member {string} patternSrc
     * @memberof PatternOptions
     * @instance
     */
    PatternOptions.prototype.patternSrc = "";

    /**
     * Creates a new PatternOptions instance using the specified properties.
     * @function create
     * @memberof PatternOptions
     * @static
     * @param {IPatternOptions=} [properties] Properties to set
     * @returns {PatternOptions} PatternOptions instance
     */
    PatternOptions.create = function create(properties) {
        return new PatternOptions(properties);
    };

    /**
     * Encodes the specified PatternOptions message. Does not implicitly {@link PatternOptions.verify|verify} messages.
     * @function encode
     * @memberof PatternOptions
     * @static
     * @param {IPatternOptions} message PatternOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PatternOptions.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patternType != null && Object.hasOwnProperty.call(message, "patternType"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.patternType);
        if (message.patternSrc != null && Object.hasOwnProperty.call(message, "patternSrc"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.patternSrc);
        return writer;
    };

    /**
     * Encodes the specified PatternOptions message, length delimited. Does not implicitly {@link PatternOptions.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PatternOptions
     * @static
     * @param {IPatternOptions} message PatternOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PatternOptions.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PatternOptions message from the specified reader or buffer.
     * @function decode
     * @memberof PatternOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PatternOptions} PatternOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PatternOptions.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PatternOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.patternType = reader.string();
                    break;
                }
            case 2: {
                    message.patternSrc = reader.string();
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
     * Decodes a PatternOptions message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PatternOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PatternOptions} PatternOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PatternOptions.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PatternOptions message.
     * @function verify
     * @memberof PatternOptions
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PatternOptions.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patternType != null && message.hasOwnProperty("patternType"))
            if (!$util.isString(message.patternType))
                return "patternType: string expected";
        if (message.patternSrc != null && message.hasOwnProperty("patternSrc"))
            if (!$util.isString(message.patternSrc))
                return "patternSrc: string expected";
        return null;
    };

    /**
     * Creates a PatternOptions message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PatternOptions
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PatternOptions} PatternOptions
     */
    PatternOptions.fromObject = function fromObject(object) {
        if (object instanceof $root.PatternOptions)
            return object;
        var message = new $root.PatternOptions();
        if (object.patternType != null)
            message.patternType = String(object.patternType);
        if (object.patternSrc != null)
            message.patternSrc = String(object.patternSrc);
        return message;
    };

    /**
     * Creates a plain object from a PatternOptions message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PatternOptions
     * @static
     * @param {PatternOptions} message PatternOptions
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PatternOptions.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.patternType = "";
            object.patternSrc = "";
        }
        if (message.patternType != null && message.hasOwnProperty("patternType"))
            object.patternType = message.patternType;
        if (message.patternSrc != null && message.hasOwnProperty("patternSrc"))
            object.patternSrc = message.patternSrc;
        return object;
    };

    /**
     * Converts this PatternOptions to JSON.
     * @function toJSON
     * @memberof PatternOptions
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PatternOptions.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PatternOptions
     * @function getTypeUrl
     * @memberof PatternOptions
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PatternOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PatternOptions";
    };

    return PatternOptions;
})();

$root.GradientOptions = (function() {

    /**
     * Properties of a GradientOptions.
     * @exports IGradientOptions
     * @interface IGradientOptions
     * @property {Array.<IGradientStop>|null} [stops] GradientOptions stops
     * @property {string|null} [gradientUnits] GradientOptions gradientUnits
     */

    /**
     * Constructs a new GradientOptions.
     * @exports GradientOptions
     * @classdesc Represents a GradientOptions.
     * @implements IGradientOptions
     * @constructor
     * @param {IGradientOptions=} [properties] Properties to set
     */
    function GradientOptions(properties) {
        this.stops = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GradientOptions stops.
     * @member {Array.<IGradientStop>} stops
     * @memberof GradientOptions
     * @instance
     */
    GradientOptions.prototype.stops = $util.emptyArray;

    /**
     * GradientOptions gradientUnits.
     * @member {string} gradientUnits
     * @memberof GradientOptions
     * @instance
     */
    GradientOptions.prototype.gradientUnits = "";

    /**
     * Creates a new GradientOptions instance using the specified properties.
     * @function create
     * @memberof GradientOptions
     * @static
     * @param {IGradientOptions=} [properties] Properties to set
     * @returns {GradientOptions} GradientOptions instance
     */
    GradientOptions.create = function create(properties) {
        return new GradientOptions(properties);
    };

    /**
     * Encodes the specified GradientOptions message. Does not implicitly {@link GradientOptions.verify|verify} messages.
     * @function encode
     * @memberof GradientOptions
     * @static
     * @param {IGradientOptions} message GradientOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GradientOptions.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stops != null && message.stops.length)
            for (var i = 0; i < message.stops.length; ++i)
                $root.GradientStop.encode(message.stops[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.gradientUnits != null && Object.hasOwnProperty.call(message, "gradientUnits"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.gradientUnits);
        return writer;
    };

    /**
     * Encodes the specified GradientOptions message, length delimited. Does not implicitly {@link GradientOptions.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GradientOptions
     * @static
     * @param {IGradientOptions} message GradientOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GradientOptions.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GradientOptions message from the specified reader or buffer.
     * @function decode
     * @memberof GradientOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GradientOptions} GradientOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GradientOptions.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GradientOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.stops && message.stops.length))
                        message.stops = [];
                    message.stops.push($root.GradientStop.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.gradientUnits = reader.string();
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
     * Decodes a GradientOptions message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GradientOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GradientOptions} GradientOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GradientOptions.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GradientOptions message.
     * @function verify
     * @memberof GradientOptions
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GradientOptions.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stops != null && message.hasOwnProperty("stops")) {
            if (!Array.isArray(message.stops))
                return "stops: array expected";
            for (var i = 0; i < message.stops.length; ++i) {
                var error = $root.GradientStop.verify(message.stops[i]);
                if (error)
                    return "stops." + error;
            }
        }
        if (message.gradientUnits != null && message.hasOwnProperty("gradientUnits"))
            if (!$util.isString(message.gradientUnits))
                return "gradientUnits: string expected";
        return null;
    };

    /**
     * Creates a GradientOptions message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GradientOptions
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GradientOptions} GradientOptions
     */
    GradientOptions.fromObject = function fromObject(object) {
        if (object instanceof $root.GradientOptions)
            return object;
        var message = new $root.GradientOptions();
        if (object.stops) {
            if (!Array.isArray(object.stops))
                throw TypeError(".GradientOptions.stops: array expected");
            message.stops = [];
            for (var i = 0; i < object.stops.length; ++i) {
                if (typeof object.stops[i] !== "object")
                    throw TypeError(".GradientOptions.stops: object expected");
                message.stops[i] = $root.GradientStop.fromObject(object.stops[i]);
            }
        }
        if (object.gradientUnits != null)
            message.gradientUnits = String(object.gradientUnits);
        return message;
    };

    /**
     * Creates a plain object from a GradientOptions message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GradientOptions
     * @static
     * @param {GradientOptions} message GradientOptions
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GradientOptions.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.stops = [];
        if (options.defaults)
            object.gradientUnits = "";
        if (message.stops && message.stops.length) {
            object.stops = [];
            for (var j = 0; j < message.stops.length; ++j)
                object.stops[j] = $root.GradientStop.toObject(message.stops[j], options);
        }
        if (message.gradientUnits != null && message.hasOwnProperty("gradientUnits"))
            object.gradientUnits = message.gradientUnits;
        return object;
    };

    /**
     * Converts this GradientOptions to JSON.
     * @function toJSON
     * @memberof GradientOptions
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GradientOptions.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GradientOptions
     * @function getTypeUrl
     * @memberof GradientOptions
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GradientOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GradientOptions";
    };

    return GradientOptions;
})();

$root.GradientStop = (function() {

    /**
     * Properties of a GradientStop.
     * @exports IGradientStop
     * @interface IGradientStop
     * @property {number|null} [position] GradientStop position
     * @property {string|null} [color] GradientStop color
     */

    /**
     * Constructs a new GradientStop.
     * @exports GradientStop
     * @classdesc Represents a GradientStop.
     * @implements IGradientStop
     * @constructor
     * @param {IGradientStop=} [properties] Properties to set
     */
    function GradientStop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GradientStop position.
     * @member {number} position
     * @memberof GradientStop
     * @instance
     */
    GradientStop.prototype.position = 0;

    /**
     * GradientStop color.
     * @member {string} color
     * @memberof GradientStop
     * @instance
     */
    GradientStop.prototype.color = "";

    /**
     * Creates a new GradientStop instance using the specified properties.
     * @function create
     * @memberof GradientStop
     * @static
     * @param {IGradientStop=} [properties] Properties to set
     * @returns {GradientStop} GradientStop instance
     */
    GradientStop.create = function create(properties) {
        return new GradientStop(properties);
    };

    /**
     * Encodes the specified GradientStop message. Does not implicitly {@link GradientStop.verify|verify} messages.
     * @function encode
     * @memberof GradientStop
     * @static
     * @param {IGradientStop} message GradientStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GradientStop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.position);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
        return writer;
    };

    /**
     * Encodes the specified GradientStop message, length delimited. Does not implicitly {@link GradientStop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GradientStop
     * @static
     * @param {IGradientStop} message GradientStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GradientStop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GradientStop message from the specified reader or buffer.
     * @function decode
     * @memberof GradientStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GradientStop} GradientStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GradientStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GradientStop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.position = reader.float();
                    break;
                }
            case 2: {
                    message.color = reader.string();
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
     * Decodes a GradientStop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GradientStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GradientStop} GradientStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GradientStop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GradientStop message.
     * @function verify
     * @memberof GradientStop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GradientStop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.position != null && message.hasOwnProperty("position"))
            if (typeof message.position !== "number")
                return "position: number expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isString(message.color))
                return "color: string expected";
        return null;
    };

    /**
     * Creates a GradientStop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GradientStop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GradientStop} GradientStop
     */
    GradientStop.fromObject = function fromObject(object) {
        if (object instanceof $root.GradientStop)
            return object;
        var message = new $root.GradientStop();
        if (object.position != null)
            message.position = Number(object.position);
        if (object.color != null)
            message.color = String(object.color);
        return message;
    };

    /**
     * Creates a plain object from a GradientStop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GradientStop
     * @static
     * @param {GradientStop} message GradientStop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GradientStop.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.position = 0;
            object.color = "";
        }
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = options.json && !isFinite(message.position) ? String(message.position) : message.position;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        return object;
    };

    /**
     * Converts this GradientStop to JSON.
     * @function toJSON
     * @memberof GradientStop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GradientStop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GradientStop
     * @function getTypeUrl
     * @memberof GradientStop
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GradientStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GradientStop";
    };

    return GradientStop;
})();

$root.SerializedFabricShadow = (function() {

    /**
     * Properties of a SerializedFabricShadow.
     * @exports ISerializedFabricShadow
     * @interface ISerializedFabricShadow
     * @property {string|null} [color] SerializedFabricShadow color
     * @property {number|null} [blur] SerializedFabricShadow blur
     * @property {number|null} [offsetX] SerializedFabricShadow offsetX
     * @property {number|null} [offsetY] SerializedFabricShadow offsetY
     */

    /**
     * Constructs a new SerializedFabricShadow.
     * @exports SerializedFabricShadow
     * @classdesc Represents a SerializedFabricShadow.
     * @implements ISerializedFabricShadow
     * @constructor
     * @param {ISerializedFabricShadow=} [properties] Properties to set
     */
    function SerializedFabricShadow(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SerializedFabricShadow color.
     * @member {string} color
     * @memberof SerializedFabricShadow
     * @instance
     */
    SerializedFabricShadow.prototype.color = "";

    /**
     * SerializedFabricShadow blur.
     * @member {number} blur
     * @memberof SerializedFabricShadow
     * @instance
     */
    SerializedFabricShadow.prototype.blur = 0;

    /**
     * SerializedFabricShadow offsetX.
     * @member {number} offsetX
     * @memberof SerializedFabricShadow
     * @instance
     */
    SerializedFabricShadow.prototype.offsetX = 0;

    /**
     * SerializedFabricShadow offsetY.
     * @member {number} offsetY
     * @memberof SerializedFabricShadow
     * @instance
     */
    SerializedFabricShadow.prototype.offsetY = 0;

    /**
     * Creates a new SerializedFabricShadow instance using the specified properties.
     * @function create
     * @memberof SerializedFabricShadow
     * @static
     * @param {ISerializedFabricShadow=} [properties] Properties to set
     * @returns {SerializedFabricShadow} SerializedFabricShadow instance
     */
    SerializedFabricShadow.create = function create(properties) {
        return new SerializedFabricShadow(properties);
    };

    /**
     * Encodes the specified SerializedFabricShadow message. Does not implicitly {@link SerializedFabricShadow.verify|verify} messages.
     * @function encode
     * @memberof SerializedFabricShadow
     * @static
     * @param {ISerializedFabricShadow} message SerializedFabricShadow message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SerializedFabricShadow.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.color);
        if (message.blur != null && Object.hasOwnProperty.call(message, "blur"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.blur);
        if (message.offsetX != null && Object.hasOwnProperty.call(message, "offsetX"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.offsetX);
        if (message.offsetY != null && Object.hasOwnProperty.call(message, "offsetY"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.offsetY);
        return writer;
    };

    /**
     * Encodes the specified SerializedFabricShadow message, length delimited. Does not implicitly {@link SerializedFabricShadow.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SerializedFabricShadow
     * @static
     * @param {ISerializedFabricShadow} message SerializedFabricShadow message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SerializedFabricShadow.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SerializedFabricShadow message from the specified reader or buffer.
     * @function decode
     * @memberof SerializedFabricShadow
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SerializedFabricShadow} SerializedFabricShadow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SerializedFabricShadow.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SerializedFabricShadow();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.color = reader.string();
                    break;
                }
            case 2: {
                    message.blur = reader.float();
                    break;
                }
            case 3: {
                    message.offsetX = reader.float();
                    break;
                }
            case 4: {
                    message.offsetY = reader.float();
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
     * Decodes a SerializedFabricShadow message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SerializedFabricShadow
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SerializedFabricShadow} SerializedFabricShadow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SerializedFabricShadow.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SerializedFabricShadow message.
     * @function verify
     * @memberof SerializedFabricShadow
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SerializedFabricShadow.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isString(message.color))
                return "color: string expected";
        if (message.blur != null && message.hasOwnProperty("blur"))
            if (typeof message.blur !== "number")
                return "blur: number expected";
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            if (typeof message.offsetX !== "number")
                return "offsetX: number expected";
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            if (typeof message.offsetY !== "number")
                return "offsetY: number expected";
        return null;
    };

    /**
     * Creates a SerializedFabricShadow message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SerializedFabricShadow
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SerializedFabricShadow} SerializedFabricShadow
     */
    SerializedFabricShadow.fromObject = function fromObject(object) {
        if (object instanceof $root.SerializedFabricShadow)
            return object;
        var message = new $root.SerializedFabricShadow();
        if (object.color != null)
            message.color = String(object.color);
        if (object.blur != null)
            message.blur = Number(object.blur);
        if (object.offsetX != null)
            message.offsetX = Number(object.offsetX);
        if (object.offsetY != null)
            message.offsetY = Number(object.offsetY);
        return message;
    };

    /**
     * Creates a plain object from a SerializedFabricShadow message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SerializedFabricShadow
     * @static
     * @param {SerializedFabricShadow} message SerializedFabricShadow
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SerializedFabricShadow.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.color = "";
            object.blur = 0;
            object.offsetX = 0;
            object.offsetY = 0;
        }
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        if (message.blur != null && message.hasOwnProperty("blur"))
            object.blur = options.json && !isFinite(message.blur) ? String(message.blur) : message.blur;
        if (message.offsetX != null && message.hasOwnProperty("offsetX"))
            object.offsetX = options.json && !isFinite(message.offsetX) ? String(message.offsetX) : message.offsetX;
        if (message.offsetY != null && message.hasOwnProperty("offsetY"))
            object.offsetY = options.json && !isFinite(message.offsetY) ? String(message.offsetY) : message.offsetY;
        return object;
    };

    /**
     * Converts this SerializedFabricShadow to JSON.
     * @function toJSON
     * @memberof SerializedFabricShadow
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SerializedFabricShadow.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SerializedFabricShadow
     * @function getTypeUrl
     * @memberof SerializedFabricShadow
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SerializedFabricShadow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SerializedFabricShadow";
    };

    return SerializedFabricShadow;
})();

$root.Border = (function() {

    /**
     * Properties of a Border.
     * @exports IBorder
     * @interface IBorder
     * @property {string|null} [color] Border color
     * @property {string|null} [style] Border style
     * @property {number|null} [top] Border top
     * @property {number|null} [right] Border right
     * @property {number|null} [bottom] Border bottom
     * @property {number|null} [left] Border left
     * @property {BorderPosition|null} [position] Border position
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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Border color.
     * @member {string} color
     * @memberof Border
     * @instance
     */
    Border.prototype.color = "";

    /**
     * Border style.
     * @member {string} style
     * @memberof Border
     * @instance
     */
    Border.prototype.style = "";

    /**
     * Border top.
     * @member {number} top
     * @memberof Border
     * @instance
     */
    Border.prototype.top = 0;

    /**
     * Border right.
     * @member {number} right
     * @memberof Border
     * @instance
     */
    Border.prototype.right = 0;

    /**
     * Border bottom.
     * @member {number} bottom
     * @memberof Border
     * @instance
     */
    Border.prototype.bottom = 0;

    /**
     * Border left.
     * @member {number} left
     * @memberof Border
     * @instance
     */
    Border.prototype.left = 0;

    /**
     * Border position.
     * @member {BorderPosition} position
     * @memberof Border
     * @instance
     */
    Border.prototype.position = 0;

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
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.color);
        if (message.style != null && Object.hasOwnProperty.call(message, "style"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.style);
        if (message.top != null && Object.hasOwnProperty.call(message, "top"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.top);
        if (message.right != null && Object.hasOwnProperty.call(message, "right"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.right);
        if (message.bottom != null && Object.hasOwnProperty.call(message, "bottom"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.bottom);
        if (message.left != null && Object.hasOwnProperty.call(message, "left"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.left);
        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.position);
        if (message.dashWidth != null && Object.hasOwnProperty.call(message, "dashWidth"))
            writer.uint32(/* id 8, wireType 5 =*/69).float(message.dashWidth);
        if (message.dashGap != null && Object.hasOwnProperty.call(message, "dashGap"))
            writer.uint32(/* id 9, wireType 5 =*/77).float(message.dashGap);
        if (message.dashCap != null && Object.hasOwnProperty.call(message, "dashCap"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.dashCap);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Border();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.color = reader.string();
                    break;
                }
            case 2: {
                    message.style = reader.string();
                    break;
                }
            case 3: {
                    message.top = reader.float();
                    break;
                }
            case 4: {
                    message.right = reader.float();
                    break;
                }
            case 5: {
                    message.bottom = reader.float();
                    break;
                }
            case 6: {
                    message.left = reader.float();
                    break;
                }
            case 7: {
                    message.position = reader.int32();
                    break;
                }
            case 8: {
                    message.dashWidth = reader.float();
                    break;
                }
            case 9: {
                    message.dashGap = reader.float();
                    break;
                }
            case 10: {
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
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isString(message.color))
                return "color: string expected";
        if (message.style != null && message.hasOwnProperty("style"))
            if (!$util.isString(message.style))
                return "style: string expected";
        if (message.top != null && message.hasOwnProperty("top"))
            if (typeof message.top !== "number")
                return "top: number expected";
        if (message.right != null && message.hasOwnProperty("right"))
            if (typeof message.right !== "number")
                return "right: number expected";
        if (message.bottom != null && message.hasOwnProperty("bottom"))
            if (typeof message.bottom !== "number")
                return "bottom: number expected";
        if (message.left != null && message.hasOwnProperty("left"))
            if (typeof message.left !== "number")
                return "left: number expected";
        if (message.position != null && message.hasOwnProperty("position"))
            switch (message.position) {
            default:
                return "position: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
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
        var message = new $root.Border();
        if (object.color != null)
            message.color = String(object.color);
        if (object.style != null)
            message.style = String(object.style);
        if (object.top != null)
            message.top = Number(object.top);
        if (object.right != null)
            message.right = Number(object.right);
        if (object.bottom != null)
            message.bottom = Number(object.bottom);
        if (object.left != null)
            message.left = Number(object.left);
        switch (object.position) {
        default:
            if (typeof object.position === "number") {
                message.position = object.position;
                break;
            }
            break;
        case "CENTER":
        case 0:
            message.position = 0;
            break;
        case "INSIDE":
        case 1:
            message.position = 1;
            break;
        case "OUTSIDE":
        case 2:
            message.position = 2;
            break;
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
        var object = {};
        if (options.defaults) {
            object.color = "";
            object.style = "";
            object.top = 0;
            object.right = 0;
            object.bottom = 0;
            object.left = 0;
            object.position = options.enums === String ? "CENTER" : 0;
            object.dashWidth = 0;
            object.dashGap = 0;
            object.dashCap = "";
        }
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        if (message.style != null && message.hasOwnProperty("style"))
            object.style = message.style;
        if (message.top != null && message.hasOwnProperty("top"))
            object.top = options.json && !isFinite(message.top) ? String(message.top) : message.top;
        if (message.right != null && message.hasOwnProperty("right"))
            object.right = options.json && !isFinite(message.right) ? String(message.right) : message.right;
        if (message.bottom != null && message.hasOwnProperty("bottom"))
            object.bottom = options.json && !isFinite(message.bottom) ? String(message.bottom) : message.bottom;
        if (message.left != null && message.hasOwnProperty("left"))
            object.left = options.json && !isFinite(message.left) ? String(message.left) : message.left;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = options.enums === String ? $root.BorderPosition[message.position] === undefined ? message.position : $root.BorderPosition[message.position] : message.position;
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

$root.Radius = (function() {

    /**
     * Properties of a Radius.
     * @exports IRadius
     * @interface IRadius
     * @property {number|null} [tl] Radius tl
     * @property {number|null} [tr] Radius tr
     * @property {number|null} [bl] Radius bl
     * @property {number|null} [br] Radius br
     */

    /**
     * Constructs a new Radius.
     * @exports Radius
     * @classdesc Represents a Radius.
     * @implements IRadius
     * @constructor
     * @param {IRadius=} [properties] Properties to set
     */
    function Radius(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Radius tl.
     * @member {number} tl
     * @memberof Radius
     * @instance
     */
    Radius.prototype.tl = 0;

    /**
     * Radius tr.
     * @member {number} tr
     * @memberof Radius
     * @instance
     */
    Radius.prototype.tr = 0;

    /**
     * Radius bl.
     * @member {number} bl
     * @memberof Radius
     * @instance
     */
    Radius.prototype.bl = 0;

    /**
     * Radius br.
     * @member {number} br
     * @memberof Radius
     * @instance
     */
    Radius.prototype.br = 0;

    /**
     * Creates a new Radius instance using the specified properties.
     * @function create
     * @memberof Radius
     * @static
     * @param {IRadius=} [properties] Properties to set
     * @returns {Radius} Radius instance
     */
    Radius.create = function create(properties) {
        return new Radius(properties);
    };

    /**
     * Encodes the specified Radius message. Does not implicitly {@link Radius.verify|verify} messages.
     * @function encode
     * @memberof Radius
     * @static
     * @param {IRadius} message Radius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Radius.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tl != null && Object.hasOwnProperty.call(message, "tl"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.tl);
        if (message.tr != null && Object.hasOwnProperty.call(message, "tr"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.tr);
        if (message.bl != null && Object.hasOwnProperty.call(message, "bl"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.bl);
        if (message.br != null && Object.hasOwnProperty.call(message, "br"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.br);
        return writer;
    };

    /**
     * Encodes the specified Radius message, length delimited. Does not implicitly {@link Radius.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Radius
     * @static
     * @param {IRadius} message Radius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Radius.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Radius message from the specified reader or buffer.
     * @function decode
     * @memberof Radius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Radius} Radius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Radius.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Radius();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.tl = reader.float();
                    break;
                }
            case 2: {
                    message.tr = reader.float();
                    break;
                }
            case 3: {
                    message.bl = reader.float();
                    break;
                }
            case 4: {
                    message.br = reader.float();
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
     * Decodes a Radius message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Radius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Radius} Radius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Radius.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Radius message.
     * @function verify
     * @memberof Radius
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Radius.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tl != null && message.hasOwnProperty("tl"))
            if (typeof message.tl !== "number")
                return "tl: number expected";
        if (message.tr != null && message.hasOwnProperty("tr"))
            if (typeof message.tr !== "number")
                return "tr: number expected";
        if (message.bl != null && message.hasOwnProperty("bl"))
            if (typeof message.bl !== "number")
                return "bl: number expected";
        if (message.br != null && message.hasOwnProperty("br"))
            if (typeof message.br !== "number")
                return "br: number expected";
        return null;
    };

    /**
     * Creates a Radius message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Radius
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Radius} Radius
     */
    Radius.fromObject = function fromObject(object) {
        if (object instanceof $root.Radius)
            return object;
        var message = new $root.Radius();
        if (object.tl != null)
            message.tl = Number(object.tl);
        if (object.tr != null)
            message.tr = Number(object.tr);
        if (object.bl != null)
            message.bl = Number(object.bl);
        if (object.br != null)
            message.br = Number(object.br);
        return message;
    };

    /**
     * Creates a plain object from a Radius message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Radius
     * @static
     * @param {Radius} message Radius
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Radius.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.tl = 0;
            object.tr = 0;
            object.bl = 0;
            object.br = 0;
        }
        if (message.tl != null && message.hasOwnProperty("tl"))
            object.tl = options.json && !isFinite(message.tl) ? String(message.tl) : message.tl;
        if (message.tr != null && message.hasOwnProperty("tr"))
            object.tr = options.json && !isFinite(message.tr) ? String(message.tr) : message.tr;
        if (message.bl != null && message.hasOwnProperty("bl"))
            object.bl = options.json && !isFinite(message.bl) ? String(message.bl) : message.bl;
        if (message.br != null && message.hasOwnProperty("br"))
            object.br = options.json && !isFinite(message.br) ? String(message.br) : message.br;
        return object;
    };

    /**
     * Converts this Radius to JSON.
     * @function toJSON
     * @memberof Radius
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Radius.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Radius
     * @function getTypeUrl
     * @memberof Radius
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Radius.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Radius";
    };

    return Radius;
})();

$root.Padding = (function() {

    /**
     * Properties of a Padding.
     * @exports IPadding
     * @interface IPadding
     * @property {number|null} [top] Padding top
     * @property {number|null} [right] Padding right
     * @property {number|null} [bottom] Padding bottom
     * @property {number|null} [left] Padding left
     */

    /**
     * Constructs a new Padding.
     * @exports Padding
     * @classdesc Represents a Padding.
     * @implements IPadding
     * @constructor
     * @param {IPadding=} [properties] Properties to set
     */
    function Padding(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Padding top.
     * @member {number} top
     * @memberof Padding
     * @instance
     */
    Padding.prototype.top = 0;

    /**
     * Padding right.
     * @member {number} right
     * @memberof Padding
     * @instance
     */
    Padding.prototype.right = 0;

    /**
     * Padding bottom.
     * @member {number} bottom
     * @memberof Padding
     * @instance
     */
    Padding.prototype.bottom = 0;

    /**
     * Padding left.
     * @member {number} left
     * @memberof Padding
     * @instance
     */
    Padding.prototype.left = 0;

    /**
     * Creates a new Padding instance using the specified properties.
     * @function create
     * @memberof Padding
     * @static
     * @param {IPadding=} [properties] Properties to set
     * @returns {Padding} Padding instance
     */
    Padding.create = function create(properties) {
        return new Padding(properties);
    };

    /**
     * Encodes the specified Padding message. Does not implicitly {@link Padding.verify|verify} messages.
     * @function encode
     * @memberof Padding
     * @static
     * @param {IPadding} message Padding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Padding.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.top != null && Object.hasOwnProperty.call(message, "top"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.top);
        if (message.right != null && Object.hasOwnProperty.call(message, "right"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.right);
        if (message.bottom != null && Object.hasOwnProperty.call(message, "bottom"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.bottom);
        if (message.left != null && Object.hasOwnProperty.call(message, "left"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.left);
        return writer;
    };

    /**
     * Encodes the specified Padding message, length delimited. Does not implicitly {@link Padding.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Padding
     * @static
     * @param {IPadding} message Padding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Padding.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Padding message from the specified reader or buffer.
     * @function decode
     * @memberof Padding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Padding} Padding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Padding.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Padding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.top = reader.float();
                    break;
                }
            case 2: {
                    message.right = reader.float();
                    break;
                }
            case 3: {
                    message.bottom = reader.float();
                    break;
                }
            case 4: {
                    message.left = reader.float();
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
     * Decodes a Padding message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Padding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Padding} Padding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Padding.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Padding message.
     * @function verify
     * @memberof Padding
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Padding.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.top != null && message.hasOwnProperty("top"))
            if (typeof message.top !== "number")
                return "top: number expected";
        if (message.right != null && message.hasOwnProperty("right"))
            if (typeof message.right !== "number")
                return "right: number expected";
        if (message.bottom != null && message.hasOwnProperty("bottom"))
            if (typeof message.bottom !== "number")
                return "bottom: number expected";
        if (message.left != null && message.hasOwnProperty("left"))
            if (typeof message.left !== "number")
                return "left: number expected";
        return null;
    };

    /**
     * Creates a Padding message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Padding
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Padding} Padding
     */
    Padding.fromObject = function fromObject(object) {
        if (object instanceof $root.Padding)
            return object;
        var message = new $root.Padding();
        if (object.top != null)
            message.top = Number(object.top);
        if (object.right != null)
            message.right = Number(object.right);
        if (object.bottom != null)
            message.bottom = Number(object.bottom);
        if (object.left != null)
            message.left = Number(object.left);
        return message;
    };

    /**
     * Creates a plain object from a Padding message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Padding
     * @static
     * @param {Padding} message Padding
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Padding.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.top = 0;
            object.right = 0;
            object.bottom = 0;
            object.left = 0;
        }
        if (message.top != null && message.hasOwnProperty("top"))
            object.top = options.json && !isFinite(message.top) ? String(message.top) : message.top;
        if (message.right != null && message.hasOwnProperty("right"))
            object.right = options.json && !isFinite(message.right) ? String(message.right) : message.right;
        if (message.bottom != null && message.hasOwnProperty("bottom"))
            object.bottom = options.json && !isFinite(message.bottom) ? String(message.bottom) : message.bottom;
        if (message.left != null && message.hasOwnProperty("left"))
            object.left = options.json && !isFinite(message.left) ? String(message.left) : message.left;
        return object;
    };

    /**
     * Converts this Padding to JSON.
     * @function toJSON
     * @memberof Padding
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Padding.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Padding
     * @function getTypeUrl
     * @memberof Padding
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Padding.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Padding";
    };

    return Padding;
})();

$root.FontMetaData = (function() {

    /**
     * Properties of a FontMetaData.
     * @exports IFontMetaData
     * @interface IFontMetaData
     * @property {string|null} [fontId] FontMetaData fontId
     * @property {string|null} [fontUrl] FontMetaData fontUrl
     */

    /**
     * Constructs a new FontMetaData.
     * @exports FontMetaData
     * @classdesc Represents a FontMetaData.
     * @implements IFontMetaData
     * @constructor
     * @param {IFontMetaData=} [properties] Properties to set
     */
    function FontMetaData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FontMetaData fontId.
     * @member {string} fontId
     * @memberof FontMetaData
     * @instance
     */
    FontMetaData.prototype.fontId = "";

    /**
     * FontMetaData fontUrl.
     * @member {string} fontUrl
     * @memberof FontMetaData
     * @instance
     */
    FontMetaData.prototype.fontUrl = "";

    /**
     * Creates a new FontMetaData instance using the specified properties.
     * @function create
     * @memberof FontMetaData
     * @static
     * @param {IFontMetaData=} [properties] Properties to set
     * @returns {FontMetaData} FontMetaData instance
     */
    FontMetaData.create = function create(properties) {
        return new FontMetaData(properties);
    };

    /**
     * Encodes the specified FontMetaData message. Does not implicitly {@link FontMetaData.verify|verify} messages.
     * @function encode
     * @memberof FontMetaData
     * @static
     * @param {IFontMetaData} message FontMetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FontMetaData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fontId != null && Object.hasOwnProperty.call(message, "fontId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fontId);
        if (message.fontUrl != null && Object.hasOwnProperty.call(message, "fontUrl"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fontUrl);
        return writer;
    };

    /**
     * Encodes the specified FontMetaData message, length delimited. Does not implicitly {@link FontMetaData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FontMetaData
     * @static
     * @param {IFontMetaData} message FontMetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FontMetaData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FontMetaData message from the specified reader or buffer.
     * @function decode
     * @memberof FontMetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FontMetaData} FontMetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FontMetaData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FontMetaData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.fontId = reader.string();
                    break;
                }
            case 2: {
                    message.fontUrl = reader.string();
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
     * Decodes a FontMetaData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FontMetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FontMetaData} FontMetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FontMetaData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FontMetaData message.
     * @function verify
     * @memberof FontMetaData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FontMetaData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fontId != null && message.hasOwnProperty("fontId"))
            if (!$util.isString(message.fontId))
                return "fontId: string expected";
        if (message.fontUrl != null && message.hasOwnProperty("fontUrl"))
            if (!$util.isString(message.fontUrl))
                return "fontUrl: string expected";
        return null;
    };

    /**
     * Creates a FontMetaData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FontMetaData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FontMetaData} FontMetaData
     */
    FontMetaData.fromObject = function fromObject(object) {
        if (object instanceof $root.FontMetaData)
            return object;
        var message = new $root.FontMetaData();
        if (object.fontId != null)
            message.fontId = String(object.fontId);
        if (object.fontUrl != null)
            message.fontUrl = String(object.fontUrl);
        return message;
    };

    /**
     * Creates a plain object from a FontMetaData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FontMetaData
     * @static
     * @param {FontMetaData} message FontMetaData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FontMetaData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fontId = "";
            object.fontUrl = "";
        }
        if (message.fontId != null && message.hasOwnProperty("fontId"))
            object.fontId = message.fontId;
        if (message.fontUrl != null && message.hasOwnProperty("fontUrl"))
            object.fontUrl = message.fontUrl;
        return object;
    };

    /**
     * Converts this FontMetaData to JSON.
     * @function toJSON
     * @memberof FontMetaData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FontMetaData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FontMetaData
     * @function getTypeUrl
     * @memberof FontMetaData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FontMetaData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FontMetaData";
    };

    return FontMetaData;
})();

$root.Variants = (function() {

    /**
     * Properties of a Variants.
     * @exports IVariants
     * @interface IVariants
     * @property {IVariantMetadata|null} [metadata] Variants metadata
     * @property {IVariant|null} [variant] Variants variant
     */

    /**
     * Constructs a new Variants.
     * @exports Variants
     * @classdesc Represents a Variants.
     * @implements IVariants
     * @constructor
     * @param {IVariants=} [properties] Properties to set
     */
    function Variants(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Variants metadata.
     * @member {IVariantMetadata|null|undefined} metadata
     * @memberof Variants
     * @instance
     */
    Variants.prototype.metadata = null;

    /**
     * Variants variant.
     * @member {IVariant|null|undefined} variant
     * @memberof Variants
     * @instance
     */
    Variants.prototype.variant = null;

    /**
     * Creates a new Variants instance using the specified properties.
     * @function create
     * @memberof Variants
     * @static
     * @param {IVariants=} [properties] Properties to set
     * @returns {Variants} Variants instance
     */
    Variants.create = function create(properties) {
        return new Variants(properties);
    };

    /**
     * Encodes the specified Variants message. Does not implicitly {@link Variants.verify|verify} messages.
     * @function encode
     * @memberof Variants
     * @static
     * @param {IVariants} message Variants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
            $root.VariantMetadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.variant != null && Object.hasOwnProperty.call(message, "variant"))
            $root.Variant.encode(message.variant, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Variants message, length delimited. Does not implicitly {@link Variants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Variants
     * @static
     * @param {IVariants} message Variants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Variants message from the specified reader or buffer.
     * @function decode
     * @memberof Variants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Variants} Variants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Variants();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.metadata = $root.VariantMetadata.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.variant = $root.Variant.decode(reader, reader.uint32());
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
     * Decodes a Variants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Variants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Variants} Variants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Variants message.
     * @function verify
     * @memberof Variants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Variants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.metadata != null && message.hasOwnProperty("metadata")) {
            var error = $root.VariantMetadata.verify(message.metadata);
            if (error)
                return "metadata." + error;
        }
        if (message.variant != null && message.hasOwnProperty("variant")) {
            var error = $root.Variant.verify(message.variant);
            if (error)
                return "variant." + error;
        }
        return null;
    };

    /**
     * Creates a Variants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Variants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Variants} Variants
     */
    Variants.fromObject = function fromObject(object) {
        if (object instanceof $root.Variants)
            return object;
        var message = new $root.Variants();
        if (object.metadata != null) {
            if (typeof object.metadata !== "object")
                throw TypeError(".Variants.metadata: object expected");
            message.metadata = $root.VariantMetadata.fromObject(object.metadata);
        }
        if (object.variant != null) {
            if (typeof object.variant !== "object")
                throw TypeError(".Variants.variant: object expected");
            message.variant = $root.Variant.fromObject(object.variant);
        }
        return message;
    };

    /**
     * Creates a plain object from a Variants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Variants
     * @static
     * @param {Variants} message Variants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Variants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.metadata = null;
            object.variant = null;
        }
        if (message.metadata != null && message.hasOwnProperty("metadata"))
            object.metadata = $root.VariantMetadata.toObject(message.metadata, options);
        if (message.variant != null && message.hasOwnProperty("variant"))
            object.variant = $root.Variant.toObject(message.variant, options);
        return object;
    };

    /**
     * Converts this Variants to JSON.
     * @function toJSON
     * @memberof Variants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Variants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Variants
     * @function getTypeUrl
     * @memberof Variants
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Variants.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Variants";
    };

    return Variants;
})();

$root.VariantMetadata = (function() {

    /**
     * Properties of a VariantMetadata.
     * @exports IVariantMetadata
     * @interface IVariantMetadata
     * @property {string|null} [name] VariantMetadata name
     * @property {string|null} [createdAt] VariantMetadata createdAt
     * @property {string|null} [lastModified] VariantMetadata lastModified
     * @property {string|null} [author] VariantMetadata author
     * @property {string|null} [source] VariantMetadata source
     * @property {string|null} [sourceVersion] VariantMetadata sourceVersion
     * @property {string|null} [schemaVersion] VariantMetadata schemaVersion
     */

    /**
     * Constructs a new VariantMetadata.
     * @exports VariantMetadata
     * @classdesc Represents a VariantMetadata.
     * @implements IVariantMetadata
     * @constructor
     * @param {IVariantMetadata=} [properties] Properties to set
     */
    function VariantMetadata(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VariantMetadata name.
     * @member {string} name
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.name = "";

    /**
     * VariantMetadata createdAt.
     * @member {string} createdAt
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.createdAt = "";

    /**
     * VariantMetadata lastModified.
     * @member {string} lastModified
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.lastModified = "";

    /**
     * VariantMetadata author.
     * @member {string} author
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.author = "";

    /**
     * VariantMetadata source.
     * @member {string} source
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.source = "";

    /**
     * VariantMetadata sourceVersion.
     * @member {string} sourceVersion
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.sourceVersion = "";

    /**
     * VariantMetadata schemaVersion.
     * @member {string} schemaVersion
     * @memberof VariantMetadata
     * @instance
     */
    VariantMetadata.prototype.schemaVersion = "";

    /**
     * Creates a new VariantMetadata instance using the specified properties.
     * @function create
     * @memberof VariantMetadata
     * @static
     * @param {IVariantMetadata=} [properties] Properties to set
     * @returns {VariantMetadata} VariantMetadata instance
     */
    VariantMetadata.create = function create(properties) {
        return new VariantMetadata(properties);
    };

    /**
     * Encodes the specified VariantMetadata message. Does not implicitly {@link VariantMetadata.verify|verify} messages.
     * @function encode
     * @memberof VariantMetadata
     * @static
     * @param {IVariantMetadata} message VariantMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VariantMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
        if (message.lastModified != null && Object.hasOwnProperty.call(message, "lastModified"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastModified);
        if (message.author != null && Object.hasOwnProperty.call(message, "author"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.source);
        if (message.sourceVersion != null && Object.hasOwnProperty.call(message, "sourceVersion"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sourceVersion);
        if (message.schemaVersion != null && Object.hasOwnProperty.call(message, "schemaVersion"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.schemaVersion);
        return writer;
    };

    /**
     * Encodes the specified VariantMetadata message, length delimited. Does not implicitly {@link VariantMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VariantMetadata
     * @static
     * @param {IVariantMetadata} message VariantMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VariantMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VariantMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof VariantMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VariantMetadata} VariantMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VariantMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VariantMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.createdAt = reader.string();
                    break;
                }
            case 3: {
                    message.lastModified = reader.string();
                    break;
                }
            case 4: {
                    message.author = reader.string();
                    break;
                }
            case 5: {
                    message.source = reader.string();
                    break;
                }
            case 6: {
                    message.sourceVersion = reader.string();
                    break;
                }
            case 7: {
                    message.schemaVersion = reader.string();
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
     * Decodes a VariantMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VariantMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VariantMetadata} VariantMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VariantMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VariantMetadata message.
     * @function verify
     * @memberof VariantMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VariantMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.lastModified != null && message.hasOwnProperty("lastModified"))
            if (!$util.isString(message.lastModified))
                return "lastModified: string expected";
        if (message.author != null && message.hasOwnProperty("author"))
            if (!$util.isString(message.author))
                return "author: string expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.sourceVersion != null && message.hasOwnProperty("sourceVersion"))
            if (!$util.isString(message.sourceVersion))
                return "sourceVersion: string expected";
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            if (!$util.isString(message.schemaVersion))
                return "schemaVersion: string expected";
        return null;
    };

    /**
     * Creates a VariantMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VariantMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VariantMetadata} VariantMetadata
     */
    VariantMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.VariantMetadata)
            return object;
        var message = new $root.VariantMetadata();
        if (object.name != null)
            message.name = String(object.name);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.lastModified != null)
            message.lastModified = String(object.lastModified);
        if (object.author != null)
            message.author = String(object.author);
        if (object.source != null)
            message.source = String(object.source);
        if (object.sourceVersion != null)
            message.sourceVersion = String(object.sourceVersion);
        if (object.schemaVersion != null)
            message.schemaVersion = String(object.schemaVersion);
        return message;
    };

    /**
     * Creates a plain object from a VariantMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VariantMetadata
     * @static
     * @param {VariantMetadata} message VariantMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VariantMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.createdAt = "";
            object.lastModified = "";
            object.author = "";
            object.source = "";
            object.sourceVersion = "";
            object.schemaVersion = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.lastModified != null && message.hasOwnProperty("lastModified"))
            object.lastModified = message.lastModified;
        if (message.author != null && message.hasOwnProperty("author"))
            object.author = message.author;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.sourceVersion != null && message.hasOwnProperty("sourceVersion"))
            object.sourceVersion = message.sourceVersion;
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            object.schemaVersion = message.schemaVersion;
        return object;
    };

    /**
     * Converts this VariantMetadata to JSON.
     * @function toJSON
     * @memberof VariantMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VariantMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VariantMetadata
     * @function getTypeUrl
     * @memberof VariantMetadata
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VariantMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VariantMetadata";
    };

    return VariantMetadata;
})();

$root.Variant = (function() {

    /**
     * Properties of a Variant.
     * @exports IVariant
     * @interface IVariant
     * @property {Object.<string,ISize>|null} [sizes] Variant sizes
     * @property {Object.<string,ICanvasElementWithOverrides>|null} [objects] Variant objects
     */

    /**
     * Constructs a new Variant.
     * @exports Variant
     * @classdesc Represents a Variant.
     * @implements IVariant
     * @constructor
     * @param {IVariant=} [properties] Properties to set
     */
    function Variant(properties) {
        this.sizes = {};
        this.objects = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Variant sizes.
     * @member {Object.<string,ISize>} sizes
     * @memberof Variant
     * @instance
     */
    Variant.prototype.sizes = $util.emptyObject;

    /**
     * Variant objects.
     * @member {Object.<string,ICanvasElementWithOverrides>} objects
     * @memberof Variant
     * @instance
     */
    Variant.prototype.objects = $util.emptyObject;

    /**
     * Creates a new Variant instance using the specified properties.
     * @function create
     * @memberof Variant
     * @static
     * @param {IVariant=} [properties] Properties to set
     * @returns {Variant} Variant instance
     */
    Variant.create = function create(properties) {
        return new Variant(properties);
    };

    /**
     * Encodes the specified Variant message. Does not implicitly {@link Variant.verify|verify} messages.
     * @function encode
     * @memberof Variant
     * @static
     * @param {IVariant} message Variant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variant.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sizes != null && Object.hasOwnProperty.call(message, "sizes"))
            for (var keys = Object.keys(message.sizes), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Size.encode(message.sizes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.objects != null && Object.hasOwnProperty.call(message, "objects"))
            for (var keys = Object.keys(message.objects), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.CanvasElementWithOverrides.encode(message.objects[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified Variant message, length delimited. Does not implicitly {@link Variant.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Variant
     * @static
     * @param {IVariant} message Variant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variant.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Variant message from the specified reader or buffer.
     * @function decode
     * @memberof Variant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Variant} Variant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variant.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Variant(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (message.sizes === $util.emptyObject)
                        message.sizes = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.Size.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.sizes[key] = value;
                    break;
                }
            case 2: {
                    if (message.objects === $util.emptyObject)
                        message.objects = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.CanvasElementWithOverrides.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.objects[key] = value;
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
     * Decodes a Variant message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Variant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Variant} Variant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variant.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Variant message.
     * @function verify
     * @memberof Variant
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Variant.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sizes != null && message.hasOwnProperty("sizes")) {
            if (!$util.isObject(message.sizes))
                return "sizes: object expected";
            var key = Object.keys(message.sizes);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Size.verify(message.sizes[key[i]]);
                if (error)
                    return "sizes." + error;
            }
        }
        if (message.objects != null && message.hasOwnProperty("objects")) {
            if (!$util.isObject(message.objects))
                return "objects: object expected";
            var key = Object.keys(message.objects);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.CanvasElementWithOverrides.verify(message.objects[key[i]]);
                if (error)
                    return "objects." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Variant message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Variant
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Variant} Variant
     */
    Variant.fromObject = function fromObject(object) {
        if (object instanceof $root.Variant)
            return object;
        var message = new $root.Variant();
        if (object.sizes) {
            if (typeof object.sizes !== "object")
                throw TypeError(".Variant.sizes: object expected");
            message.sizes = {};
            for (var keys = Object.keys(object.sizes), i = 0; i < keys.length; ++i) {
                if (typeof object.sizes[keys[i]] !== "object")
                    throw TypeError(".Variant.sizes: object expected");
                message.sizes[keys[i]] = $root.Size.fromObject(object.sizes[keys[i]]);
            }
        }
        if (object.objects) {
            if (typeof object.objects !== "object")
                throw TypeError(".Variant.objects: object expected");
            message.objects = {};
            for (var keys = Object.keys(object.objects), i = 0; i < keys.length; ++i) {
                if (typeof object.objects[keys[i]] !== "object")
                    throw TypeError(".Variant.objects: object expected");
                message.objects[keys[i]] = $root.CanvasElementWithOverrides.fromObject(object.objects[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Variant message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Variant
     * @static
     * @param {Variant} message Variant
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Variant.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults) {
            object.sizes = {};
            object.objects = {};
        }
        var keys2;
        if (message.sizes && (keys2 = Object.keys(message.sizes)).length) {
            object.sizes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.sizes[keys2[j]] = $root.Size.toObject(message.sizes[keys2[j]], options);
        }
        if (message.objects && (keys2 = Object.keys(message.objects)).length) {
            object.objects = {};
            for (var j = 0; j < keys2.length; ++j)
                object.objects[keys2[j]] = $root.CanvasElementWithOverrides.toObject(message.objects[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this Variant to JSON.
     * @function toJSON
     * @memberof Variant
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Variant.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Variant
     * @function getTypeUrl
     * @memberof Variant
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Variant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Variant";
    };

    return Variant;
})();

$root.Size = (function() {

    /**
     * Properties of a Size.
     * @exports ISize
     * @interface ISize
     * @property {number|null} [width] Size width
     * @property {number|null} [height] Size height
     * @property {string|null} [id] Size id
     * @property {string|null} [displayName] Size displayName
     */

    /**
     * Constructs a new Size.
     * @exports Size
     * @classdesc Represents a Size.
     * @implements ISize
     * @constructor
     * @param {ISize=} [properties] Properties to set
     */
    function Size(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Size width.
     * @member {number} width
     * @memberof Size
     * @instance
     */
    Size.prototype.width = 0;

    /**
     * Size height.
     * @member {number} height
     * @memberof Size
     * @instance
     */
    Size.prototype.height = 0;

    /**
     * Size id.
     * @member {string} id
     * @memberof Size
     * @instance
     */
    Size.prototype.id = "";

    /**
     * Size displayName.
     * @member {string} displayName
     * @memberof Size
     * @instance
     */
    Size.prototype.displayName = "";

    /**
     * Creates a new Size instance using the specified properties.
     * @function create
     * @memberof Size
     * @static
     * @param {ISize=} [properties] Properties to set
     * @returns {Size} Size instance
     */
    Size.create = function create(properties) {
        return new Size(properties);
    };

    /**
     * Encodes the specified Size message. Does not implicitly {@link Size.verify|verify} messages.
     * @function encode
     * @memberof Size
     * @static
     * @param {ISize} message Size message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Size.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.height);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
        if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.displayName);
        return writer;
    };

    /**
     * Encodes the specified Size message, length delimited. Does not implicitly {@link Size.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Size
     * @static
     * @param {ISize} message Size message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Size.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Size message from the specified reader or buffer.
     * @function decode
     * @memberof Size
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Size} Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Size.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Size();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.width = reader.float();
                    break;
                }
            case 2: {
                    message.height = reader.float();
                    break;
                }
            case 3: {
                    message.id = reader.string();
                    break;
                }
            case 4: {
                    message.displayName = reader.string();
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
     * Decodes a Size message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Size
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Size} Size
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Size.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Size message.
     * @function verify
     * @memberof Size
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Size.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            if (!$util.isString(message.displayName))
                return "displayName: string expected";
        return null;
    };

    /**
     * Creates a Size message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Size
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Size} Size
     */
    Size.fromObject = function fromObject(object) {
        if (object instanceof $root.Size)
            return object;
        var message = new $root.Size();
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.id != null)
            message.id = String(object.id);
        if (object.displayName != null)
            message.displayName = String(object.displayName);
        return message;
    };

    /**
     * Creates a plain object from a Size message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Size
     * @static
     * @param {Size} message Size
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Size.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.width = 0;
            object.height = 0;
            object.id = "";
            object.displayName = "";
        }
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            object.displayName = message.displayName;
        return object;
    };

    /**
     * Converts this Size to JSON.
     * @function toJSON
     * @memberof Size
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Size.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Size
     * @function getTypeUrl
     * @memberof Size
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Size.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Size";
    };

    return Size;
})();

$root.CanvasElementWithOverrides = (function() {

    /**
     * Properties of a CanvasElementWithOverrides.
     * @exports ICanvasElementWithOverrides
     * @interface ICanvasElementWithOverrides
     * @property {string|null} [id] CanvasElementWithOverrides id
     * @property {string|null} [type] CanvasElementWithOverrides type
     * @property {string|null} [displayText] CanvasElementWithOverrides displayText
     * @property {CanvasEditorElementType|null} [dataType] CanvasElementWithOverrides dataType
     * @property {number|null} [left] CanvasElementWithOverrides left
     * @property {number|null} [top] CanvasElementWithOverrides top
     * @property {number|null} [width] CanvasElementWithOverrides width
     * @property {number|null} [height] CanvasElementWithOverrides height
     * @property {number|null} [angle] CanvasElementWithOverrides angle
     * @property {number|null} [opacity] CanvasElementWithOverrides opacity
     * @property {ISerializedFabricShadow|null} [shadow] CanvasElementWithOverrides shadow
     * @property {boolean|null} [visible] CanvasElementWithOverrides visible
     * @property {string|null} [globalCompositeOperation] CanvasElementWithOverrides globalCompositeOperation
     * @property {boolean|null} [selectable] CanvasElementWithOverrides selectable
     * @property {ISerializedFillType|null} [fill] CanvasElementWithOverrides fill
     * @property {IBorder|null} [border] CanvasElementWithOverrides border
     * @property {IPadding|null} [padding] CanvasElementWithOverrides padding
     * @property {IRadius|null} [cornerRadius] CanvasElementWithOverrides cornerRadius
     * @property {ObjectPosition|null} [objectPosition] CanvasElementWithOverrides objectPosition
     * @property {number|null} [imageScale] CanvasElementWithOverrides imageScale
     * @property {number|null} [imageLeft] CanvasElementWithOverrides imageLeft
     * @property {number|null} [imageTop] CanvasElementWithOverrides imageTop
     * @property {number|null} [imageWidth] CanvasElementWithOverrides imageWidth
     * @property {number|null} [imageHeight] CanvasElementWithOverrides imageHeight
     * @property {ObjectFit|null} [objectFit] CanvasElementWithOverrides objectFit
     * @property {string|null} [src] CanvasElementWithOverrides src
     * @property {Array.<IPathSegment>|null} [path] CanvasElementWithOverrides path
     * @property {number|null} [scale] CanvasElementWithOverrides scale
     * @property {number|null} [roundedRectScale] CanvasElementWithOverrides roundedRectScale
     * @property {ITextStyle|null} [textStyle] CanvasElementWithOverrides textStyle
     * @property {boolean|null} [autoFit] CanvasElementWithOverrides autoFit
     * @property {Array.<number>|null} [autoFitSizes] CanvasElementWithOverrides autoFitSizes
     * @property {string|null} [serializedText] CanvasElementWithOverrides serializedText
     * @property {IFontMetaData|null} [fontMetaData] CanvasElementWithOverrides fontMetaData
     * @property {number|null} [textLeft] CanvasElementWithOverrides textLeft
     * @property {number|null} [textTop] CanvasElementWithOverrides textTop
     * @property {number|null} [textHeight] CanvasElementWithOverrides textHeight
     * @property {string|null} [text] CanvasElementWithOverrides text
     * @property {string|null} [textAlign] CanvasElementWithOverrides textAlign
     * @property {Array.<IWordStyle>|null} [wordStyles] CanvasElementWithOverrides wordStyles
     * @property {number|null} [zIndex] CanvasElementWithOverrides zIndex
     * @property {Object.<string,IOverride>|null} [overrides] CanvasElementWithOverrides overrides
     */

    /**
     * Constructs a new CanvasElementWithOverrides.
     * @exports CanvasElementWithOverrides
     * @classdesc Represents a CanvasElementWithOverrides.
     * @implements ICanvasElementWithOverrides
     * @constructor
     * @param {ICanvasElementWithOverrides=} [properties] Properties to set
     */
    function CanvasElementWithOverrides(properties) {
        this.path = [];
        this.autoFitSizes = [];
        this.wordStyles = [];
        this.overrides = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CanvasElementWithOverrides id.
     * @member {string} id
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.id = "";

    /**
     * CanvasElementWithOverrides type.
     * @member {string} type
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.type = "";

    /**
     * CanvasElementWithOverrides displayText.
     * @member {string} displayText
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.displayText = "";

    /**
     * CanvasElementWithOverrides dataType.
     * @member {CanvasEditorElementType} dataType
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.dataType = 0;

    /**
     * CanvasElementWithOverrides left.
     * @member {number} left
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.left = 0;

    /**
     * CanvasElementWithOverrides top.
     * @member {number} top
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.top = 0;

    /**
     * CanvasElementWithOverrides width.
     * @member {number} width
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.width = 0;

    /**
     * CanvasElementWithOverrides height.
     * @member {number} height
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.height = 0;

    /**
     * CanvasElementWithOverrides angle.
     * @member {number} angle
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.angle = 0;

    /**
     * CanvasElementWithOverrides opacity.
     * @member {number} opacity
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.opacity = 0;

    /**
     * CanvasElementWithOverrides shadow.
     * @member {ISerializedFabricShadow|null|undefined} shadow
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.shadow = null;

    /**
     * CanvasElementWithOverrides visible.
     * @member {boolean} visible
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.visible = false;

    /**
     * CanvasElementWithOverrides globalCompositeOperation.
     * @member {string} globalCompositeOperation
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.globalCompositeOperation = "";

    /**
     * CanvasElementWithOverrides selectable.
     * @member {boolean} selectable
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.selectable = false;

    /**
     * CanvasElementWithOverrides fill.
     * @member {ISerializedFillType|null|undefined} fill
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.fill = null;

    /**
     * CanvasElementWithOverrides border.
     * @member {IBorder|null|undefined} border
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.border = null;

    /**
     * CanvasElementWithOverrides padding.
     * @member {IPadding|null|undefined} padding
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.padding = null;

    /**
     * CanvasElementWithOverrides cornerRadius.
     * @member {IRadius|null|undefined} cornerRadius
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.cornerRadius = null;

    /**
     * CanvasElementWithOverrides objectPosition.
     * @member {ObjectPosition} objectPosition
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.objectPosition = 0;

    /**
     * CanvasElementWithOverrides imageScale.
     * @member {number} imageScale
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.imageScale = 0;

    /**
     * CanvasElementWithOverrides imageLeft.
     * @member {number} imageLeft
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.imageLeft = 0;

    /**
     * CanvasElementWithOverrides imageTop.
     * @member {number} imageTop
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.imageTop = 0;

    /**
     * CanvasElementWithOverrides imageWidth.
     * @member {number} imageWidth
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.imageWidth = 0;

    /**
     * CanvasElementWithOverrides imageHeight.
     * @member {number} imageHeight
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.imageHeight = 0;

    /**
     * CanvasElementWithOverrides objectFit.
     * @member {ObjectFit} objectFit
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.objectFit = 0;

    /**
     * CanvasElementWithOverrides src.
     * @member {string} src
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.src = "";

    /**
     * CanvasElementWithOverrides path.
     * @member {Array.<IPathSegment>} path
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.path = $util.emptyArray;

    /**
     * CanvasElementWithOverrides scale.
     * @member {number} scale
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.scale = 0;

    /**
     * CanvasElementWithOverrides roundedRectScale.
     * @member {number} roundedRectScale
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.roundedRectScale = 0;

    /**
     * CanvasElementWithOverrides textStyle.
     * @member {ITextStyle|null|undefined} textStyle
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.textStyle = null;

    /**
     * CanvasElementWithOverrides autoFit.
     * @member {boolean} autoFit
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.autoFit = false;

    /**
     * CanvasElementWithOverrides autoFitSizes.
     * @member {Array.<number>} autoFitSizes
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.autoFitSizes = $util.emptyArray;

    /**
     * CanvasElementWithOverrides serializedText.
     * @member {string} serializedText
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.serializedText = "";

    /**
     * CanvasElementWithOverrides fontMetaData.
     * @member {IFontMetaData|null|undefined} fontMetaData
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.fontMetaData = null;

    /**
     * CanvasElementWithOverrides textLeft.
     * @member {number} textLeft
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.textLeft = 0;

    /**
     * CanvasElementWithOverrides textTop.
     * @member {number} textTop
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.textTop = 0;

    /**
     * CanvasElementWithOverrides textHeight.
     * @member {number} textHeight
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.textHeight = 0;

    /**
     * CanvasElementWithOverrides text.
     * @member {string} text
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.text = "";

    /**
     * CanvasElementWithOverrides textAlign.
     * @member {string} textAlign
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.textAlign = "";

    /**
     * CanvasElementWithOverrides wordStyles.
     * @member {Array.<IWordStyle>} wordStyles
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.wordStyles = $util.emptyArray;

    /**
     * CanvasElementWithOverrides zIndex.
     * @member {number} zIndex
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.zIndex = 0;

    /**
     * CanvasElementWithOverrides overrides.
     * @member {Object.<string,IOverride>} overrides
     * @memberof CanvasElementWithOverrides
     * @instance
     */
    CanvasElementWithOverrides.prototype.overrides = $util.emptyObject;

    /**
     * Creates a new CanvasElementWithOverrides instance using the specified properties.
     * @function create
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {ICanvasElementWithOverrides=} [properties] Properties to set
     * @returns {CanvasElementWithOverrides} CanvasElementWithOverrides instance
     */
    CanvasElementWithOverrides.create = function create(properties) {
        return new CanvasElementWithOverrides(properties);
    };

    /**
     * Encodes the specified CanvasElementWithOverrides message. Does not implicitly {@link CanvasElementWithOverrides.verify|verify} messages.
     * @function encode
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {ICanvasElementWithOverrides} message CanvasElementWithOverrides message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CanvasElementWithOverrides.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
        if (message.displayText != null && Object.hasOwnProperty.call(message, "displayText"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayText);
        if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dataType);
        if (message.left != null && Object.hasOwnProperty.call(message, "left"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.left);
        if (message.top != null && Object.hasOwnProperty.call(message, "top"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.top);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 8, wireType 5 =*/69).float(message.height);
        if (message.angle != null && Object.hasOwnProperty.call(message, "angle"))
            writer.uint32(/* id 9, wireType 5 =*/77).float(message.angle);
        if (message.opacity != null && Object.hasOwnProperty.call(message, "opacity"))
            writer.uint32(/* id 10, wireType 5 =*/85).float(message.opacity);
        if (message.shadow != null && Object.hasOwnProperty.call(message, "shadow"))
            $root.SerializedFabricShadow.encode(message.shadow, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.visible);
        if (message.globalCompositeOperation != null && Object.hasOwnProperty.call(message, "globalCompositeOperation"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.globalCompositeOperation);
        if (message.selectable != null && Object.hasOwnProperty.call(message, "selectable"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.selectable);
        if (message.fill != null && Object.hasOwnProperty.call(message, "fill"))
            $root.SerializedFillType.encode(message.fill, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.border != null && Object.hasOwnProperty.call(message, "border"))
            $root.Border.encode(message.border, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.padding != null && Object.hasOwnProperty.call(message, "padding"))
            $root.Padding.encode(message.padding, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.cornerRadius != null && Object.hasOwnProperty.call(message, "cornerRadius"))
            $root.Radius.encode(message.cornerRadius, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.objectPosition != null && Object.hasOwnProperty.call(message, "objectPosition"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.objectPosition);
        if (message.imageScale != null && Object.hasOwnProperty.call(message, "imageScale"))
            writer.uint32(/* id 20, wireType 5 =*/165).float(message.imageScale);
        if (message.imageLeft != null && Object.hasOwnProperty.call(message, "imageLeft"))
            writer.uint32(/* id 21, wireType 5 =*/173).float(message.imageLeft);
        if (message.imageTop != null && Object.hasOwnProperty.call(message, "imageTop"))
            writer.uint32(/* id 22, wireType 5 =*/181).float(message.imageTop);
        if (message.imageWidth != null && Object.hasOwnProperty.call(message, "imageWidth"))
            writer.uint32(/* id 23, wireType 5 =*/189).float(message.imageWidth);
        if (message.imageHeight != null && Object.hasOwnProperty.call(message, "imageHeight"))
            writer.uint32(/* id 24, wireType 5 =*/197).float(message.imageHeight);
        if (message.objectFit != null && Object.hasOwnProperty.call(message, "objectFit"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.objectFit);
        if (message.src != null && Object.hasOwnProperty.call(message, "src"))
            writer.uint32(/* id 26, wireType 2 =*/210).string(message.src);
        if (message.path != null && message.path.length)
            for (var i = 0; i < message.path.length; ++i)
                $root.PathSegment.encode(message.path[i], writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
            writer.uint32(/* id 28, wireType 5 =*/229).float(message.scale);
        if (message.roundedRectScale != null && Object.hasOwnProperty.call(message, "roundedRectScale"))
            writer.uint32(/* id 29, wireType 5 =*/237).float(message.roundedRectScale);
        if (message.textStyle != null && Object.hasOwnProperty.call(message, "textStyle"))
            $root.TextStyle.encode(message.textStyle, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.autoFit != null && Object.hasOwnProperty.call(message, "autoFit"))
            writer.uint32(/* id 31, wireType 0 =*/248).bool(message.autoFit);
        if (message.autoFitSizes != null && message.autoFitSizes.length) {
            writer.uint32(/* id 32, wireType 2 =*/258).fork();
            for (var i = 0; i < message.autoFitSizes.length; ++i)
                writer.float(message.autoFitSizes[i]);
            writer.ldelim();
        }
        if (message.serializedText != null && Object.hasOwnProperty.call(message, "serializedText"))
            writer.uint32(/* id 33, wireType 2 =*/266).string(message.serializedText);
        if (message.fontMetaData != null && Object.hasOwnProperty.call(message, "fontMetaData"))
            $root.FontMetaData.encode(message.fontMetaData, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
        if (message.textLeft != null && Object.hasOwnProperty.call(message, "textLeft"))
            writer.uint32(/* id 35, wireType 5 =*/285).float(message.textLeft);
        if (message.textTop != null && Object.hasOwnProperty.call(message, "textTop"))
            writer.uint32(/* id 36, wireType 5 =*/293).float(message.textTop);
        if (message.textHeight != null && Object.hasOwnProperty.call(message, "textHeight"))
            writer.uint32(/* id 37, wireType 5 =*/301).float(message.textHeight);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 38, wireType 2 =*/306).string(message.text);
        if (message.textAlign != null && Object.hasOwnProperty.call(message, "textAlign"))
            writer.uint32(/* id 39, wireType 2 =*/314).string(message.textAlign);
        if (message.wordStyles != null && message.wordStyles.length)
            for (var i = 0; i < message.wordStyles.length; ++i)
                $root.WordStyle.encode(message.wordStyles[i], writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
        if (message.zIndex != null && Object.hasOwnProperty.call(message, "zIndex"))
            writer.uint32(/* id 42, wireType 0 =*/336).int32(message.zIndex);
        if (message.overrides != null && Object.hasOwnProperty.call(message, "overrides"))
            for (var keys = Object.keys(message.overrides), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 43, wireType 2 =*/346).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Override.encode(message.overrides[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified CanvasElementWithOverrides message, length delimited. Does not implicitly {@link CanvasElementWithOverrides.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {ICanvasElementWithOverrides} message CanvasElementWithOverrides message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CanvasElementWithOverrides.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CanvasElementWithOverrides message from the specified reader or buffer.
     * @function decode
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CanvasElementWithOverrides} CanvasElementWithOverrides
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CanvasElementWithOverrides.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CanvasElementWithOverrides(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.type = reader.string();
                    break;
                }
            case 3: {
                    message.displayText = reader.string();
                    break;
                }
            case 4: {
                    message.dataType = reader.int32();
                    break;
                }
            case 5: {
                    message.left = reader.float();
                    break;
                }
            case 6: {
                    message.top = reader.float();
                    break;
                }
            case 7: {
                    message.width = reader.float();
                    break;
                }
            case 8: {
                    message.height = reader.float();
                    break;
                }
            case 9: {
                    message.angle = reader.float();
                    break;
                }
            case 10: {
                    message.opacity = reader.float();
                    break;
                }
            case 11: {
                    message.shadow = $root.SerializedFabricShadow.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.visible = reader.bool();
                    break;
                }
            case 13: {
                    message.globalCompositeOperation = reader.string();
                    break;
                }
            case 14: {
                    message.selectable = reader.bool();
                    break;
                }
            case 15: {
                    message.fill = $root.SerializedFillType.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.border = $root.Border.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.padding = $root.Padding.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.cornerRadius = $root.Radius.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.objectPosition = reader.int32();
                    break;
                }
            case 20: {
                    message.imageScale = reader.float();
                    break;
                }
            case 21: {
                    message.imageLeft = reader.float();
                    break;
                }
            case 22: {
                    message.imageTop = reader.float();
                    break;
                }
            case 23: {
                    message.imageWidth = reader.float();
                    break;
                }
            case 24: {
                    message.imageHeight = reader.float();
                    break;
                }
            case 25: {
                    message.objectFit = reader.int32();
                    break;
                }
            case 26: {
                    message.src = reader.string();
                    break;
                }
            case 27: {
                    if (!(message.path && message.path.length))
                        message.path = [];
                    message.path.push($root.PathSegment.decode(reader, reader.uint32()));
                    break;
                }
            case 28: {
                    message.scale = reader.float();
                    break;
                }
            case 29: {
                    message.roundedRectScale = reader.float();
                    break;
                }
            case 30: {
                    message.textStyle = $root.TextStyle.decode(reader, reader.uint32());
                    break;
                }
            case 31: {
                    message.autoFit = reader.bool();
                    break;
                }
            case 32: {
                    if (!(message.autoFitSizes && message.autoFitSizes.length))
                        message.autoFitSizes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.autoFitSizes.push(reader.float());
                    } else
                        message.autoFitSizes.push(reader.float());
                    break;
                }
            case 33: {
                    message.serializedText = reader.string();
                    break;
                }
            case 34: {
                    message.fontMetaData = $root.FontMetaData.decode(reader, reader.uint32());
                    break;
                }
            case 35: {
                    message.textLeft = reader.float();
                    break;
                }
            case 36: {
                    message.textTop = reader.float();
                    break;
                }
            case 37: {
                    message.textHeight = reader.float();
                    break;
                }
            case 38: {
                    message.text = reader.string();
                    break;
                }
            case 39: {
                    message.textAlign = reader.string();
                    break;
                }
            case 41: {
                    if (!(message.wordStyles && message.wordStyles.length))
                        message.wordStyles = [];
                    message.wordStyles.push($root.WordStyle.decode(reader, reader.uint32()));
                    break;
                }
            case 42: {
                    message.zIndex = reader.int32();
                    break;
                }
            case 43: {
                    if (message.overrides === $util.emptyObject)
                        message.overrides = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.Override.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.overrides[key] = value;
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
     * Decodes a CanvasElementWithOverrides message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CanvasElementWithOverrides} CanvasElementWithOverrides
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CanvasElementWithOverrides.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CanvasElementWithOverrides message.
     * @function verify
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CanvasElementWithOverrides.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.displayText != null && message.hasOwnProperty("displayText"))
            if (!$util.isString(message.displayText))
                return "displayText: string expected";
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.left != null && message.hasOwnProperty("left"))
            if (typeof message.left !== "number")
                return "left: number expected";
        if (message.top != null && message.hasOwnProperty("top"))
            if (typeof message.top !== "number")
                return "top: number expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.angle != null && message.hasOwnProperty("angle"))
            if (typeof message.angle !== "number")
                return "angle: number expected";
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            if (typeof message.opacity !== "number")
                return "opacity: number expected";
        if (message.shadow != null && message.hasOwnProperty("shadow")) {
            var error = $root.SerializedFabricShadow.verify(message.shadow);
            if (error)
                return "shadow." + error;
        }
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        if (message.globalCompositeOperation != null && message.hasOwnProperty("globalCompositeOperation"))
            if (!$util.isString(message.globalCompositeOperation))
                return "globalCompositeOperation: string expected";
        if (message.selectable != null && message.hasOwnProperty("selectable"))
            if (typeof message.selectable !== "boolean")
                return "selectable: boolean expected";
        if (message.fill != null && message.hasOwnProperty("fill")) {
            var error = $root.SerializedFillType.verify(message.fill);
            if (error)
                return "fill." + error;
        }
        if (message.border != null && message.hasOwnProperty("border")) {
            var error = $root.Border.verify(message.border);
            if (error)
                return "border." + error;
        }
        if (message.padding != null && message.hasOwnProperty("padding")) {
            var error = $root.Padding.verify(message.padding);
            if (error)
                return "padding." + error;
        }
        if (message.cornerRadius != null && message.hasOwnProperty("cornerRadius")) {
            var error = $root.Radius.verify(message.cornerRadius);
            if (error)
                return "cornerRadius." + error;
        }
        if (message.objectPosition != null && message.hasOwnProperty("objectPosition"))
            switch (message.objectPosition) {
            default:
                return "objectPosition: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
        if (message.imageScale != null && message.hasOwnProperty("imageScale"))
            if (typeof message.imageScale !== "number")
                return "imageScale: number expected";
        if (message.imageLeft != null && message.hasOwnProperty("imageLeft"))
            if (typeof message.imageLeft !== "number")
                return "imageLeft: number expected";
        if (message.imageTop != null && message.hasOwnProperty("imageTop"))
            if (typeof message.imageTop !== "number")
                return "imageTop: number expected";
        if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
            if (typeof message.imageWidth !== "number")
                return "imageWidth: number expected";
        if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
            if (typeof message.imageHeight !== "number")
                return "imageHeight: number expected";
        if (message.objectFit != null && message.hasOwnProperty("objectFit"))
            switch (message.objectFit) {
            default:
                return "objectFit: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.src != null && message.hasOwnProperty("src"))
            if (!$util.isString(message.src))
                return "src: string expected";
        if (message.path != null && message.hasOwnProperty("path")) {
            if (!Array.isArray(message.path))
                return "path: array expected";
            for (var i = 0; i < message.path.length; ++i) {
                var error = $root.PathSegment.verify(message.path[i]);
                if (error)
                    return "path." + error;
            }
        }
        if (message.scale != null && message.hasOwnProperty("scale"))
            if (typeof message.scale !== "number")
                return "scale: number expected";
        if (message.roundedRectScale != null && message.hasOwnProperty("roundedRectScale"))
            if (typeof message.roundedRectScale !== "number")
                return "roundedRectScale: number expected";
        if (message.textStyle != null && message.hasOwnProperty("textStyle")) {
            var error = $root.TextStyle.verify(message.textStyle);
            if (error)
                return "textStyle." + error;
        }
        if (message.autoFit != null && message.hasOwnProperty("autoFit"))
            if (typeof message.autoFit !== "boolean")
                return "autoFit: boolean expected";
        if (message.autoFitSizes != null && message.hasOwnProperty("autoFitSizes")) {
            if (!Array.isArray(message.autoFitSizes))
                return "autoFitSizes: array expected";
            for (var i = 0; i < message.autoFitSizes.length; ++i)
                if (typeof message.autoFitSizes[i] !== "number")
                    return "autoFitSizes: number[] expected";
        }
        if (message.serializedText != null && message.hasOwnProperty("serializedText"))
            if (!$util.isString(message.serializedText))
                return "serializedText: string expected";
        if (message.fontMetaData != null && message.hasOwnProperty("fontMetaData")) {
            var error = $root.FontMetaData.verify(message.fontMetaData);
            if (error)
                return "fontMetaData." + error;
        }
        if (message.textLeft != null && message.hasOwnProperty("textLeft"))
            if (typeof message.textLeft !== "number")
                return "textLeft: number expected";
        if (message.textTop != null && message.hasOwnProperty("textTop"))
            if (typeof message.textTop !== "number")
                return "textTop: number expected";
        if (message.textHeight != null && message.hasOwnProperty("textHeight"))
            if (typeof message.textHeight !== "number")
                return "textHeight: number expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.textAlign != null && message.hasOwnProperty("textAlign"))
            if (!$util.isString(message.textAlign))
                return "textAlign: string expected";
        if (message.wordStyles != null && message.hasOwnProperty("wordStyles")) {
            if (!Array.isArray(message.wordStyles))
                return "wordStyles: array expected";
            for (var i = 0; i < message.wordStyles.length; ++i) {
                var error = $root.WordStyle.verify(message.wordStyles[i]);
                if (error)
                    return "wordStyles." + error;
            }
        }
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            if (!$util.isInteger(message.zIndex))
                return "zIndex: integer expected";
        if (message.overrides != null && message.hasOwnProperty("overrides")) {
            if (!$util.isObject(message.overrides))
                return "overrides: object expected";
            var key = Object.keys(message.overrides);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Override.verify(message.overrides[key[i]]);
                if (error)
                    return "overrides." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CanvasElementWithOverrides message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CanvasElementWithOverrides} CanvasElementWithOverrides
     */
    CanvasElementWithOverrides.fromObject = function fromObject(object) {
        if (object instanceof $root.CanvasElementWithOverrides)
            return object;
        var message = new $root.CanvasElementWithOverrides();
        if (object.id != null)
            message.id = String(object.id);
        if (object.type != null)
            message.type = String(object.type);
        if (object.displayText != null)
            message.displayText = String(object.displayText);
        switch (object.dataType) {
        default:
            if (typeof object.dataType === "number") {
                message.dataType = object.dataType;
                break;
            }
            break;
        case "TEXT":
        case 0:
            message.dataType = 0;
            break;
        case "SHAPE":
        case 1:
            message.dataType = 1;
            break;
        case "IMAGE":
        case 2:
            message.dataType = 2;
            break;
        case "GROUP":
        case 3:
            message.dataType = 3;
            break;
        case "CREATIVE_BOX":
        case 4:
            message.dataType = 4;
            break;
        case "CANVAS_MASK":
        case 5:
            message.dataType = 5;
            break;
        }
        if (object.left != null)
            message.left = Number(object.left);
        if (object.top != null)
            message.top = Number(object.top);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.angle != null)
            message.angle = Number(object.angle);
        if (object.opacity != null)
            message.opacity = Number(object.opacity);
        if (object.shadow != null) {
            if (typeof object.shadow !== "object")
                throw TypeError(".CanvasElementWithOverrides.shadow: object expected");
            message.shadow = $root.SerializedFabricShadow.fromObject(object.shadow);
        }
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        if (object.globalCompositeOperation != null)
            message.globalCompositeOperation = String(object.globalCompositeOperation);
        if (object.selectable != null)
            message.selectable = Boolean(object.selectable);
        if (object.fill != null) {
            if (typeof object.fill !== "object")
                throw TypeError(".CanvasElementWithOverrides.fill: object expected");
            message.fill = $root.SerializedFillType.fromObject(object.fill);
        }
        if (object.border != null) {
            if (typeof object.border !== "object")
                throw TypeError(".CanvasElementWithOverrides.border: object expected");
            message.border = $root.Border.fromObject(object.border);
        }
        if (object.padding != null) {
            if (typeof object.padding !== "object")
                throw TypeError(".CanvasElementWithOverrides.padding: object expected");
            message.padding = $root.Padding.fromObject(object.padding);
        }
        if (object.cornerRadius != null) {
            if (typeof object.cornerRadius !== "object")
                throw TypeError(".CanvasElementWithOverrides.cornerRadius: object expected");
            message.cornerRadius = $root.Radius.fromObject(object.cornerRadius);
        }
        switch (object.objectPosition) {
        default:
            if (typeof object.objectPosition === "number") {
                message.objectPosition = object.objectPosition;
                break;
            }
            break;
        case "TOP_LEFT":
        case 0:
            message.objectPosition = 0;
            break;
        case "TOP_CENTER":
        case 1:
            message.objectPosition = 1;
            break;
        case "TOP_RIGHT":
        case 2:
            message.objectPosition = 2;
            break;
        case "CENTER_LEFT":
        case 3:
            message.objectPosition = 3;
            break;
        case "CENTER":
        case 4:
            message.objectPosition = 4;
            break;
        case "CENTER_RIGHT":
        case 5:
            message.objectPosition = 5;
            break;
        case "BOTTOM_LEFT":
        case 6:
            message.objectPosition = 6;
            break;
        case "BOTTOM_CENTER":
        case 7:
            message.objectPosition = 7;
            break;
        case "BOTTOM_RIGHT":
        case 8:
            message.objectPosition = 8;
            break;
        case "CUSTOM":
        case 9:
            message.objectPosition = 9;
            break;
        }
        if (object.imageScale != null)
            message.imageScale = Number(object.imageScale);
        if (object.imageLeft != null)
            message.imageLeft = Number(object.imageLeft);
        if (object.imageTop != null)
            message.imageTop = Number(object.imageTop);
        if (object.imageWidth != null)
            message.imageWidth = Number(object.imageWidth);
        if (object.imageHeight != null)
            message.imageHeight = Number(object.imageHeight);
        switch (object.objectFit) {
        default:
            if (typeof object.objectFit === "number") {
                message.objectFit = object.objectFit;
                break;
            }
            break;
        case "FILL":
        case 0:
            message.objectFit = 0;
            break;
        case "FIT":
        case 1:
            message.objectFit = 1;
            break;
        case "CROP":
        case 2:
            message.objectFit = 2;
            break;
        }
        if (object.src != null)
            message.src = String(object.src);
        if (object.path) {
            if (!Array.isArray(object.path))
                throw TypeError(".CanvasElementWithOverrides.path: array expected");
            message.path = [];
            for (var i = 0; i < object.path.length; ++i) {
                if (typeof object.path[i] !== "object")
                    throw TypeError(".CanvasElementWithOverrides.path: object expected");
                message.path[i] = $root.PathSegment.fromObject(object.path[i]);
            }
        }
        if (object.scale != null)
            message.scale = Number(object.scale);
        if (object.roundedRectScale != null)
            message.roundedRectScale = Number(object.roundedRectScale);
        if (object.textStyle != null) {
            if (typeof object.textStyle !== "object")
                throw TypeError(".CanvasElementWithOverrides.textStyle: object expected");
            message.textStyle = $root.TextStyle.fromObject(object.textStyle);
        }
        if (object.autoFit != null)
            message.autoFit = Boolean(object.autoFit);
        if (object.autoFitSizes) {
            if (!Array.isArray(object.autoFitSizes))
                throw TypeError(".CanvasElementWithOverrides.autoFitSizes: array expected");
            message.autoFitSizes = [];
            for (var i = 0; i < object.autoFitSizes.length; ++i)
                message.autoFitSizes[i] = Number(object.autoFitSizes[i]);
        }
        if (object.serializedText != null)
            message.serializedText = String(object.serializedText);
        if (object.fontMetaData != null) {
            if (typeof object.fontMetaData !== "object")
                throw TypeError(".CanvasElementWithOverrides.fontMetaData: object expected");
            message.fontMetaData = $root.FontMetaData.fromObject(object.fontMetaData);
        }
        if (object.textLeft != null)
            message.textLeft = Number(object.textLeft);
        if (object.textTop != null)
            message.textTop = Number(object.textTop);
        if (object.textHeight != null)
            message.textHeight = Number(object.textHeight);
        if (object.text != null)
            message.text = String(object.text);
        if (object.textAlign != null)
            message.textAlign = String(object.textAlign);
        if (object.wordStyles) {
            if (!Array.isArray(object.wordStyles))
                throw TypeError(".CanvasElementWithOverrides.wordStyles: array expected");
            message.wordStyles = [];
            for (var i = 0; i < object.wordStyles.length; ++i) {
                if (typeof object.wordStyles[i] !== "object")
                    throw TypeError(".CanvasElementWithOverrides.wordStyles: object expected");
                message.wordStyles[i] = $root.WordStyle.fromObject(object.wordStyles[i]);
            }
        }
        if (object.zIndex != null)
            message.zIndex = object.zIndex | 0;
        if (object.overrides) {
            if (typeof object.overrides !== "object")
                throw TypeError(".CanvasElementWithOverrides.overrides: object expected");
            message.overrides = {};
            for (var keys = Object.keys(object.overrides), i = 0; i < keys.length; ++i) {
                if (typeof object.overrides[keys[i]] !== "object")
                    throw TypeError(".CanvasElementWithOverrides.overrides: object expected");
                message.overrides[keys[i]] = $root.Override.fromObject(object.overrides[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CanvasElementWithOverrides message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {CanvasElementWithOverrides} message CanvasElementWithOverrides
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CanvasElementWithOverrides.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.path = [];
            object.autoFitSizes = [];
            object.wordStyles = [];
        }
        if (options.objects || options.defaults)
            object.overrides = {};
        if (options.defaults) {
            object.id = "";
            object.type = "";
            object.displayText = "";
            object.dataType = options.enums === String ? "TEXT" : 0;
            object.left = 0;
            object.top = 0;
            object.width = 0;
            object.height = 0;
            object.angle = 0;
            object.opacity = 0;
            object.shadow = null;
            object.visible = false;
            object.globalCompositeOperation = "";
            object.selectable = false;
            object.fill = null;
            object.border = null;
            object.padding = null;
            object.cornerRadius = null;
            object.objectPosition = options.enums === String ? "TOP_LEFT" : 0;
            object.imageScale = 0;
            object.imageLeft = 0;
            object.imageTop = 0;
            object.imageWidth = 0;
            object.imageHeight = 0;
            object.objectFit = options.enums === String ? "FILL" : 0;
            object.src = "";
            object.scale = 0;
            object.roundedRectScale = 0;
            object.textStyle = null;
            object.autoFit = false;
            object.serializedText = "";
            object.fontMetaData = null;
            object.textLeft = 0;
            object.textTop = 0;
            object.textHeight = 0;
            object.text = "";
            object.textAlign = "";
            object.zIndex = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.displayText != null && message.hasOwnProperty("displayText"))
            object.displayText = message.displayText;
        if (message.dataType != null && message.hasOwnProperty("dataType"))
            object.dataType = options.enums === String ? $root.CanvasEditorElementType[message.dataType] === undefined ? message.dataType : $root.CanvasEditorElementType[message.dataType] : message.dataType;
        if (message.left != null && message.hasOwnProperty("left"))
            object.left = options.json && !isFinite(message.left) ? String(message.left) : message.left;
        if (message.top != null && message.hasOwnProperty("top"))
            object.top = options.json && !isFinite(message.top) ? String(message.top) : message.top;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.angle != null && message.hasOwnProperty("angle"))
            object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
        if (message.opacity != null && message.hasOwnProperty("opacity"))
            object.opacity = options.json && !isFinite(message.opacity) ? String(message.opacity) : message.opacity;
        if (message.shadow != null && message.hasOwnProperty("shadow"))
            object.shadow = $root.SerializedFabricShadow.toObject(message.shadow, options);
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.globalCompositeOperation != null && message.hasOwnProperty("globalCompositeOperation"))
            object.globalCompositeOperation = message.globalCompositeOperation;
        if (message.selectable != null && message.hasOwnProperty("selectable"))
            object.selectable = message.selectable;
        if (message.fill != null && message.hasOwnProperty("fill"))
            object.fill = $root.SerializedFillType.toObject(message.fill, options);
        if (message.border != null && message.hasOwnProperty("border"))
            object.border = $root.Border.toObject(message.border, options);
        if (message.padding != null && message.hasOwnProperty("padding"))
            object.padding = $root.Padding.toObject(message.padding, options);
        if (message.cornerRadius != null && message.hasOwnProperty("cornerRadius"))
            object.cornerRadius = $root.Radius.toObject(message.cornerRadius, options);
        if (message.objectPosition != null && message.hasOwnProperty("objectPosition"))
            object.objectPosition = options.enums === String ? $root.ObjectPosition[message.objectPosition] === undefined ? message.objectPosition : $root.ObjectPosition[message.objectPosition] : message.objectPosition;
        if (message.imageScale != null && message.hasOwnProperty("imageScale"))
            object.imageScale = options.json && !isFinite(message.imageScale) ? String(message.imageScale) : message.imageScale;
        if (message.imageLeft != null && message.hasOwnProperty("imageLeft"))
            object.imageLeft = options.json && !isFinite(message.imageLeft) ? String(message.imageLeft) : message.imageLeft;
        if (message.imageTop != null && message.hasOwnProperty("imageTop"))
            object.imageTop = options.json && !isFinite(message.imageTop) ? String(message.imageTop) : message.imageTop;
        if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
            object.imageWidth = options.json && !isFinite(message.imageWidth) ? String(message.imageWidth) : message.imageWidth;
        if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
            object.imageHeight = options.json && !isFinite(message.imageHeight) ? String(message.imageHeight) : message.imageHeight;
        if (message.objectFit != null && message.hasOwnProperty("objectFit"))
            object.objectFit = options.enums === String ? $root.ObjectFit[message.objectFit] === undefined ? message.objectFit : $root.ObjectFit[message.objectFit] : message.objectFit;
        if (message.src != null && message.hasOwnProperty("src"))
            object.src = message.src;
        if (message.path && message.path.length) {
            object.path = [];
            for (var j = 0; j < message.path.length; ++j)
                object.path[j] = $root.PathSegment.toObject(message.path[j], options);
        }
        if (message.scale != null && message.hasOwnProperty("scale"))
            object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
        if (message.roundedRectScale != null && message.hasOwnProperty("roundedRectScale"))
            object.roundedRectScale = options.json && !isFinite(message.roundedRectScale) ? String(message.roundedRectScale) : message.roundedRectScale;
        if (message.textStyle != null && message.hasOwnProperty("textStyle"))
            object.textStyle = $root.TextStyle.toObject(message.textStyle, options);
        if (message.autoFit != null && message.hasOwnProperty("autoFit"))
            object.autoFit = message.autoFit;
        if (message.autoFitSizes && message.autoFitSizes.length) {
            object.autoFitSizes = [];
            for (var j = 0; j < message.autoFitSizes.length; ++j)
                object.autoFitSizes[j] = options.json && !isFinite(message.autoFitSizes[j]) ? String(message.autoFitSizes[j]) : message.autoFitSizes[j];
        }
        if (message.serializedText != null && message.hasOwnProperty("serializedText"))
            object.serializedText = message.serializedText;
        if (message.fontMetaData != null && message.hasOwnProperty("fontMetaData"))
            object.fontMetaData = $root.FontMetaData.toObject(message.fontMetaData, options);
        if (message.textLeft != null && message.hasOwnProperty("textLeft"))
            object.textLeft = options.json && !isFinite(message.textLeft) ? String(message.textLeft) : message.textLeft;
        if (message.textTop != null && message.hasOwnProperty("textTop"))
            object.textTop = options.json && !isFinite(message.textTop) ? String(message.textTop) : message.textTop;
        if (message.textHeight != null && message.hasOwnProperty("textHeight"))
            object.textHeight = options.json && !isFinite(message.textHeight) ? String(message.textHeight) : message.textHeight;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.textAlign != null && message.hasOwnProperty("textAlign"))
            object.textAlign = message.textAlign;
        if (message.wordStyles && message.wordStyles.length) {
            object.wordStyles = [];
            for (var j = 0; j < message.wordStyles.length; ++j)
                object.wordStyles[j] = $root.WordStyle.toObject(message.wordStyles[j], options);
        }
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            object.zIndex = message.zIndex;
        var keys2;
        if (message.overrides && (keys2 = Object.keys(message.overrides)).length) {
            object.overrides = {};
            for (var j = 0; j < keys2.length; ++j)
                object.overrides[keys2[j]] = $root.Override.toObject(message.overrides[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this CanvasElementWithOverrides to JSON.
     * @function toJSON
     * @memberof CanvasElementWithOverrides
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CanvasElementWithOverrides.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CanvasElementWithOverrides
     * @function getTypeUrl
     * @memberof CanvasElementWithOverrides
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CanvasElementWithOverrides.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CanvasElementWithOverrides";
    };

    return CanvasElementWithOverrides;
})();

$root.Override = (function() {

    /**
     * Properties of an Override.
     * @exports IOverride
     * @interface IOverride
     * @property {ICanvasElementWithOverrides|null} [override] Override override
     * @property {number|null} [zIndex] Override zIndex
     */

    /**
     * Constructs a new Override.
     * @exports Override
     * @classdesc Represents an Override.
     * @implements IOverride
     * @constructor
     * @param {IOverride=} [properties] Properties to set
     */
    function Override(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Override override.
     * @member {ICanvasElementWithOverrides|null|undefined} override
     * @memberof Override
     * @instance
     */
    Override.prototype.override = null;

    /**
     * Override zIndex.
     * @member {number} zIndex
     * @memberof Override
     * @instance
     */
    Override.prototype.zIndex = 0;

    /**
     * Creates a new Override instance using the specified properties.
     * @function create
     * @memberof Override
     * @static
     * @param {IOverride=} [properties] Properties to set
     * @returns {Override} Override instance
     */
    Override.create = function create(properties) {
        return new Override(properties);
    };

    /**
     * Encodes the specified Override message. Does not implicitly {@link Override.verify|verify} messages.
     * @function encode
     * @memberof Override
     * @static
     * @param {IOverride} message Override message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Override.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.override != null && Object.hasOwnProperty.call(message, "override"))
            $root.CanvasElementWithOverrides.encode(message.override, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.zIndex != null && Object.hasOwnProperty.call(message, "zIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.zIndex);
        return writer;
    };

    /**
     * Encodes the specified Override message, length delimited. Does not implicitly {@link Override.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Override
     * @static
     * @param {IOverride} message Override message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Override.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Override message from the specified reader or buffer.
     * @function decode
     * @memberof Override
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Override} Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Override.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Override();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.override = $root.CanvasElementWithOverrides.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.zIndex = reader.int32();
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
     * Decodes an Override message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Override
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Override} Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Override.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Override message.
     * @function verify
     * @memberof Override
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Override.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.override != null && message.hasOwnProperty("override")) {
            var error = $root.CanvasElementWithOverrides.verify(message.override);
            if (error)
                return "override." + error;
        }
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            if (!$util.isInteger(message.zIndex))
                return "zIndex: integer expected";
        return null;
    };

    /**
     * Creates an Override message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Override
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Override} Override
     */
    Override.fromObject = function fromObject(object) {
        if (object instanceof $root.Override)
            return object;
        var message = new $root.Override();
        if (object.override != null) {
            if (typeof object.override !== "object")
                throw TypeError(".Override.override: object expected");
            message.override = $root.CanvasElementWithOverrides.fromObject(object.override);
        }
        if (object.zIndex != null)
            message.zIndex = object.zIndex | 0;
        return message;
    };

    /**
     * Creates a plain object from an Override message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Override
     * @static
     * @param {Override} message Override
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Override.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.override = null;
            object.zIndex = 0;
        }
        if (message.override != null && message.hasOwnProperty("override"))
            object.override = $root.CanvasElementWithOverrides.toObject(message.override, options);
        if (message.zIndex != null && message.hasOwnProperty("zIndex"))
            object.zIndex = message.zIndex;
        return object;
    };

    /**
     * Converts this Override to JSON.
     * @function toJSON
     * @memberof Override
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Override.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Override
     * @function getTypeUrl
     * @memberof Override
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Override.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Override";
    };

    return Override;
})();

$root.RocketiumPortableFormat = (function() {

    /**
     * Properties of a RocketiumPortableFormat.
     * @exports IRocketiumPortableFormat
     * @interface IRocketiumPortableFormat
     * @property {Array.<IVariants>|null} [variants] RocketiumPortableFormat variants
     * @property {IMetadata|null} [metadata] RocketiumPortableFormat metadata
     */

    /**
     * Constructs a new RocketiumPortableFormat.
     * @exports RocketiumPortableFormat
     * @classdesc Represents a RocketiumPortableFormat.
     * @implements IRocketiumPortableFormat
     * @constructor
     * @param {IRocketiumPortableFormat=} [properties] Properties to set
     */
    function RocketiumPortableFormat(properties) {
        this.variants = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RocketiumPortableFormat variants.
     * @member {Array.<IVariants>} variants
     * @memberof RocketiumPortableFormat
     * @instance
     */
    RocketiumPortableFormat.prototype.variants = $util.emptyArray;

    /**
     * RocketiumPortableFormat metadata.
     * @member {IMetadata|null|undefined} metadata
     * @memberof RocketiumPortableFormat
     * @instance
     */
    RocketiumPortableFormat.prototype.metadata = null;

    /**
     * Creates a new RocketiumPortableFormat instance using the specified properties.
     * @function create
     * @memberof RocketiumPortableFormat
     * @static
     * @param {IRocketiumPortableFormat=} [properties] Properties to set
     * @returns {RocketiumPortableFormat} RocketiumPortableFormat instance
     */
    RocketiumPortableFormat.create = function create(properties) {
        return new RocketiumPortableFormat(properties);
    };

    /**
     * Encodes the specified RocketiumPortableFormat message. Does not implicitly {@link RocketiumPortableFormat.verify|verify} messages.
     * @function encode
     * @memberof RocketiumPortableFormat
     * @static
     * @param {IRocketiumPortableFormat} message RocketiumPortableFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RocketiumPortableFormat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.variants != null && message.variants.length)
            for (var i = 0; i < message.variants.length; ++i)
                $root.Variants.encode(message.variants[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
            $root.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RocketiumPortableFormat message, length delimited. Does not implicitly {@link RocketiumPortableFormat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RocketiumPortableFormat
     * @static
     * @param {IRocketiumPortableFormat} message RocketiumPortableFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RocketiumPortableFormat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RocketiumPortableFormat message from the specified reader or buffer.
     * @function decode
     * @memberof RocketiumPortableFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RocketiumPortableFormat} RocketiumPortableFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RocketiumPortableFormat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RocketiumPortableFormat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.variants && message.variants.length))
                        message.variants = [];
                    message.variants.push($root.Variants.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.metadata = $root.Metadata.decode(reader, reader.uint32());
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
     * Decodes a RocketiumPortableFormat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RocketiumPortableFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RocketiumPortableFormat} RocketiumPortableFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RocketiumPortableFormat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RocketiumPortableFormat message.
     * @function verify
     * @memberof RocketiumPortableFormat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RocketiumPortableFormat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.variants != null && message.hasOwnProperty("variants")) {
            if (!Array.isArray(message.variants))
                return "variants: array expected";
            for (var i = 0; i < message.variants.length; ++i) {
                var error = $root.Variants.verify(message.variants[i]);
                if (error)
                    return "variants." + error;
            }
        }
        if (message.metadata != null && message.hasOwnProperty("metadata")) {
            var error = $root.Metadata.verify(message.metadata);
            if (error)
                return "metadata." + error;
        }
        return null;
    };

    /**
     * Creates a RocketiumPortableFormat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RocketiumPortableFormat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RocketiumPortableFormat} RocketiumPortableFormat
     */
    RocketiumPortableFormat.fromObject = function fromObject(object) {
        if (object instanceof $root.RocketiumPortableFormat)
            return object;
        var message = new $root.RocketiumPortableFormat();
        if (object.variants) {
            if (!Array.isArray(object.variants))
                throw TypeError(".RocketiumPortableFormat.variants: array expected");
            message.variants = [];
            for (var i = 0; i < object.variants.length; ++i) {
                if (typeof object.variants[i] !== "object")
                    throw TypeError(".RocketiumPortableFormat.variants: object expected");
                message.variants[i] = $root.Variants.fromObject(object.variants[i]);
            }
        }
        if (object.metadata != null) {
            if (typeof object.metadata !== "object")
                throw TypeError(".RocketiumPortableFormat.metadata: object expected");
            message.metadata = $root.Metadata.fromObject(object.metadata);
        }
        return message;
    };

    /**
     * Creates a plain object from a RocketiumPortableFormat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RocketiumPortableFormat
     * @static
     * @param {RocketiumPortableFormat} message RocketiumPortableFormat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RocketiumPortableFormat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.variants = [];
        if (options.defaults)
            object.metadata = null;
        if (message.variants && message.variants.length) {
            object.variants = [];
            for (var j = 0; j < message.variants.length; ++j)
                object.variants[j] = $root.Variants.toObject(message.variants[j], options);
        }
        if (message.metadata != null && message.hasOwnProperty("metadata"))
            object.metadata = $root.Metadata.toObject(message.metadata, options);
        return object;
    };

    /**
     * Converts this RocketiumPortableFormat to JSON.
     * @function toJSON
     * @memberof RocketiumPortableFormat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RocketiumPortableFormat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RocketiumPortableFormat
     * @function getTypeUrl
     * @memberof RocketiumPortableFormat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RocketiumPortableFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RocketiumPortableFormat";
    };

    return RocketiumPortableFormat;
})();

$root.Metadata = (function() {

    /**
     * Properties of a Metadata.
     * @exports IMetadata
     * @interface IMetadata
     * @property {string|null} [name] Metadata name
     * @property {string|null} [createdAt] Metadata createdAt
     * @property {string|null} [lastModified] Metadata lastModified
     * @property {string|null} [author] Metadata author
     * @property {string|null} [source] Metadata source
     * @property {string|null} [sourceVersion] Metadata sourceVersion
     * @property {string|null} [schemaVersion] Metadata schemaVersion
     */

    /**
     * Constructs a new Metadata.
     * @exports Metadata
     * @classdesc Represents a Metadata.
     * @implements IMetadata
     * @constructor
     * @param {IMetadata=} [properties] Properties to set
     */
    function Metadata(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Metadata name.
     * @member {string} name
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.name = "";

    /**
     * Metadata createdAt.
     * @member {string} createdAt
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.createdAt = "";

    /**
     * Metadata lastModified.
     * @member {string} lastModified
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.lastModified = "";

    /**
     * Metadata author.
     * @member {string} author
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.author = "";

    /**
     * Metadata source.
     * @member {string} source
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.source = "";

    /**
     * Metadata sourceVersion.
     * @member {string} sourceVersion
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.sourceVersion = "";

    /**
     * Metadata schemaVersion.
     * @member {string} schemaVersion
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.schemaVersion = "";

    /**
     * Creates a new Metadata instance using the specified properties.
     * @function create
     * @memberof Metadata
     * @static
     * @param {IMetadata=} [properties] Properties to set
     * @returns {Metadata} Metadata instance
     */
    Metadata.create = function create(properties) {
        return new Metadata(properties);
    };

    /**
     * Encodes the specified Metadata message. Does not implicitly {@link Metadata.verify|verify} messages.
     * @function encode
     * @memberof Metadata
     * @static
     * @param {IMetadata} message Metadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
        if (message.lastModified != null && Object.hasOwnProperty.call(message, "lastModified"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastModified);
        if (message.author != null && Object.hasOwnProperty.call(message, "author"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.source);
        if (message.sourceVersion != null && Object.hasOwnProperty.call(message, "sourceVersion"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sourceVersion);
        if (message.schemaVersion != null && Object.hasOwnProperty.call(message, "schemaVersion"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.schemaVersion);
        return writer;
    };

    /**
     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link Metadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Metadata
     * @static
     * @param {IMetadata} message Metadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Metadata message from the specified reader or buffer.
     * @function decode
     * @memberof Metadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Metadata} Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Metadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.createdAt = reader.string();
                    break;
                }
            case 3: {
                    message.lastModified = reader.string();
                    break;
                }
            case 4: {
                    message.author = reader.string();
                    break;
                }
            case 5: {
                    message.source = reader.string();
                    break;
                }
            case 6: {
                    message.sourceVersion = reader.string();
                    break;
                }
            case 7: {
                    message.schemaVersion = reader.string();
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
     * Decodes a Metadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Metadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Metadata} Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Metadata message.
     * @function verify
     * @memberof Metadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Metadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.lastModified != null && message.hasOwnProperty("lastModified"))
            if (!$util.isString(message.lastModified))
                return "lastModified: string expected";
        if (message.author != null && message.hasOwnProperty("author"))
            if (!$util.isString(message.author))
                return "author: string expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.sourceVersion != null && message.hasOwnProperty("sourceVersion"))
            if (!$util.isString(message.sourceVersion))
                return "sourceVersion: string expected";
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            if (!$util.isString(message.schemaVersion))
                return "schemaVersion: string expected";
        return null;
    };

    /**
     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Metadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Metadata} Metadata
     */
    Metadata.fromObject = function fromObject(object) {
        if (object instanceof $root.Metadata)
            return object;
        var message = new $root.Metadata();
        if (object.name != null)
            message.name = String(object.name);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.lastModified != null)
            message.lastModified = String(object.lastModified);
        if (object.author != null)
            message.author = String(object.author);
        if (object.source != null)
            message.source = String(object.source);
        if (object.sourceVersion != null)
            message.sourceVersion = String(object.sourceVersion);
        if (object.schemaVersion != null)
            message.schemaVersion = String(object.schemaVersion);
        return message;
    };

    /**
     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Metadata
     * @static
     * @param {Metadata} message Metadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Metadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.createdAt = "";
            object.lastModified = "";
            object.author = "";
            object.source = "";
            object.sourceVersion = "";
            object.schemaVersion = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.lastModified != null && message.hasOwnProperty("lastModified"))
            object.lastModified = message.lastModified;
        if (message.author != null && message.hasOwnProperty("author"))
            object.author = message.author;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.sourceVersion != null && message.hasOwnProperty("sourceVersion"))
            object.sourceVersion = message.sourceVersion;
        if (message.schemaVersion != null && message.hasOwnProperty("schemaVersion"))
            object.schemaVersion = message.schemaVersion;
        return object;
    };

    /**
     * Converts this Metadata to JSON.
     * @function toJSON
     * @memberof Metadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Metadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Metadata
     * @function getTypeUrl
     * @memberof Metadata
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Metadata";
    };

    return Metadata;
})();

module.exports = $root;
