export interface BaseNode<T extends string, C = undefined> {
  readonly id: string;
  readonly name: string;
  readonly visible?: boolean;
  readonly type: T;
  readonly children?: C[];
  readonly source?: string;
  readonly link?: string;
}

export interface DocumentNode extends BaseNode<"DOCUMENT", CanvasNode> {
  readonly exportSettings?: ReadonlyArray<ExportSetting>;
}

export interface CanvasNode extends BaseNode<"CANVAS", FrameNode> {}
/** more can be added  */
export type FrameChildNode = TextNode | ImageNode | VectorNode;

export interface FrameNode extends BaseNode<"FRAME", FrameChildNode> {
  readonly backgroundColor: Partial<Paint>;
  readonly absoluteBoundingBox: Rect;
  readonly cornerRadius?: number;
  // More frame-specific properties here
}

export interface Layer {
  /** a string uniquely identifying this node within the document */
  readonly id: string;
  /** the name given to the node by the user in the tool. */
  readonly name: string;
  /** whether or not the node is visible on the canvas */
  readonly visible?: boolean;
  /** Width of the node */
  readonly width: number;
  /** Height of the node */
  readonly height: number;
  /** The position of this node as a node ID */
  readonly position: Position;
  /** The rotation of the node in degrees */
  readonly rotation?: number;
  readonly styles?: Partial<Style>;
  readonly zIndex: number;
}

/** A text box */
export interface TextNode extends Layer {
  readonly type: PaintTypeText;
  /** Text contained within text box */
  readonly characters: string;
  styles: Partial<TypeStyle>;
  /** first approach
   * [
   *  { start: 0, end: 5, type: 'span', id: '1', length: 5, style: { fontsize: 20,} }, hello
   *  { start: 9, end: 10, type: 'span', id: '2', length: 1, style: { fontsize: 20} } }, ld
   * ]
   */
  styleRuns: TextStyleRun[];
}

export interface TextStyleRun {
  start: number;
  end: number;
  type: string;
  style: Partial<TypeStyle>;
  length: number;
}

export interface ImageNode extends Layer {
  readonly type: PaintTypeImage;
  /** URL to the image asset */
  url: string;
  /** Width of the image */
  readonly width: number;
  /** Height of the image */
  readonly height: number;
  /** Additional styles specific to images, if any */
  readonly styles: Partial<ImageStyle>;
}

/** Represents a vector node */
export interface VectorNode extends Layer {
  readonly type: PaintTypeVector;
  /** SVG or path data for the vector shape */
  readonly paths: string[];
  /** Optional fill color */
  readonly fill?: Partial<Paint>;
  readonly styles?: Partial<VectorStyle>;
}

export interface Position {
  /** X coordinate of the vector */
  readonly x: number;
  /** Y coordinate of the vector */
  readonly y: number;
}

export interface Style {
  readonly color: Partial<Paint>;
  readonly backgroundColor: Partial<Paint>;
}
export interface Rect {
  /** X coordinate of top left corner of the rectangle */
  readonly x: number;
  /** Y coordinate of top left corner of the rectangle */
  readonly y: number;
  /** Width of the rectangle */
  readonly width: number;
  /** Height of the rectangle */
  readonly height: number;
}
export interface ColorStop {
  /** Value between 0 and 100 representing position along gradient axis */
  readonly position: number;
  /** Color attached to corresponding position */
  readonly color: Color;
}

export type BlendMode =
  | "PASS_THROUGH" /** (Only applicable to objects with children) */
  | "NORMAL";
export interface ExportSetting {
  readonly format: "JPG" | "PNG" | "SVG" | "PDF" | "video";
}
/** A solid color, gradient, or image texture that can be applied as fills or strokes */
export interface Paint {
  /** Type of paint as a string enum */
  readonly type: PaintType;
  /**
   * Is the paint enabled?
   * @default true
   */
  readonly visible?: boolean;
  /**
   * Overall opacity of paint (colors within the paint can also have opacity
   * values which would blend with this)
   * @default 1
   */
  readonly opacity?: number;
  /** Solid color of the paint */
  readonly color: Color;
  /**
   * How this node blends with nodes behind it in the scene
   * (see blend mode section for more details)
   */
  readonly blendMode?: BlendMode;
  /**
   * This field contains three vectors, each of which are a position in
   * normalized object space (normalized object space is if the top left
   * corner of the bounding box of the object is (0, 0) and the bottom
   * right is (1,1)). The first position corresponds to the start of the
   * gradient (value 0 for the purposes of calculating gradient stops),
   * the second position is the end of the gradient (value 1), and the
   * third handle position determines the width of the gradient (only
   * relevant for non-linear gradients).
   *
   */
  readonly gradientHandlePositions?: ReadonlyArray<Position>;
  /**
   * Positions of key points along the gradient axis with the colors
   * anchored there. Colors along the gradient are interpolated smoothly
   * between neighboring gradient stops.
   */
  readonly gradientStops?: ReadonlyArray<ColorStop>;
}
export interface Color {
  /** Red channel value, between 0 and 255 */
  readonly r: number;
  /** Green channel value, between 0 and 255 */
  readonly g: number;
  /** Blue channel value, between 0 and 255 */
  readonly b: number;
  /** Alpha channel value, between 0 and 1 */
  readonly a: number;
}

export type BorderStyle = "solid" | "dashed" | "dotted";
interface BorderRadius {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

export interface Border {
  width: number; // Border width in pixels
  color: Color; // Border color
  style: BorderStyle;
  radius?: BorderRadius;
  dashWidth: number;
  dashGap: number;
  dashCap: "butt" | "round" | "square";
}

export interface TextEffect {
  /** Type of effect as a string enum */
  readonly type: "SHADOW" | "REFLECTION" | "GLOW";
  offsetX: number;
  offsetY: number;
  color: Color;
  blurRadius: number;
  opacity?: number; // Reflection opacity
  readonly blendMode?: BlendMode;
}
type ImageEffect = {
  type: "SHADOW" | "CAST_SHADOW" | "REFLECTION" | "GLOW"; // Type of effect
  offsetX?: number; // For shadow and reflection
  offsetY?: number; // For shadow and reflection
  blurRadius?: number; // For shadow and reflection
  color?: Color; // Color of the shadow or glow
  opacity?: number; // Opacity for reflection and glow
  readonly blendMode?: BlendMode; // Blend mode for the effect};
};

export type VectorEffect = {
  type: "SHADOW"; // Type of effect
  offsetX?: number; // For shadow and reflection
  offsetY?: number; // For shadow and reflection
  blurRadius?: number; // For shado	w and reflection
  color?: Color; // Color of the shadow or glow
  opacity?: number; // Opacity for reflection and glow
  readonly blendMode?: BlendMode; // Blend mode for the effect};
};

export interface TypeStyle extends Partial<Style> {
  /** Font family of text (standard name) */
  readonly fontFamily: string;
  /** PostScript font name */
  readonly fontPostScriptName: string;
  /** Space between paragraphs in px, 0 if not present */
  readonly paragraphSpacing?: number;
  /** Paragraph indentation in px, 0 if not present */
  readonly paragraphIndent?: number;
  /** Is text italicized? */
  readonly italic?: boolean;
  /** Numeric font weight */
  readonly fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** Font size in px */
  readonly fontSize: number;
  /** Horizontal text alignment as string enum */
  readonly textAlignHorizontal: "LEFT" | "RIGHT" | "CENTER" | "JUSTIFIED";
  /** Vertical text alignment as string enum */
  readonly textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
  /** Space between characters in px */
  readonly letterSpacing: number;
  /** Line height in px */
  readonly lineHeightPx: number;
  /** Line height as a percentage of normal line height */
  readonly lineHeightPercent: number;
  /** The unit of the line height value specified by the user. */
  readonly lineHeightUnit: "PIXELS" | "FONT_SIZE_%";
  /** Text casing applied to the node, default is the original casing */
  readonly textCase?: "UPPER" | "LOWER" | "TITLE";
  /** Text decoration applied to the node, default is none */
  readonly textDecoration?: "STRIKETHROUGH" | "UNDERLINE";
  /** Line height as a percentage of the font size. Only returned when lineHeightPercent is not 100. */
  readonly lineHeightPercentFontSize?: number;
  readonly fontBaseline: number /** 0. base, 1. super script, 2. sub script  */;
  readonly customBaselineOffset?: number; // Custom pixel offset for subscript/superscript
  readonly rotation: number; //* degree of rotation */
  readonly border: Partial<Border>;
  readonly effects: ReadonlyArray<TextEffect>;
}

type TransformProperties = {
  position: Position; // x, y coordinates for the image
  rotation: number; // Rotation of the image
};

export interface ImageStyle extends Partial<Style> {
  scaleMode: ScaleMode; // Fit options for the image
  scale: number; // Zoom level for the image
  border?: Border;
  blur?: number; // Optional blur effect
  effects?: ImageEffect[]; // Array of effects (including shadow, reflection, glow, etc.)
  transform: TransformProperties; // General transformation properties (x, y, rotation)
}

export interface VectorStyle extends Partial<Style> {
  rotation: number;
  border?: Border;
  blur?: number; // Optional blur effect
  effects?: VectorEffect[]; // Array of effects (including shadow, reflection, glow, etc.)
}

export type Node = DocumentNode | CanvasNode | FrameNode;

export type ScaleMode = "FILL" | "FIT";
export type PaintTypeSolid = "SOLID";
export type PaintTypeGradient = "GRADIENT_LINEAR" | "GRADIENT_RADIAL";
export type PaintTypeImage = "IMAGE";
export type PaintTypeVector = "VECTOR";
export type PaintTypeVideo = "VIDEO";
export type PaintTypeText = "TEXT";
export type PaintType = PaintTypeSolid | PaintTypeGradient;
export type Transform = ReadonlyArray<ReadonlyArray<number>>;

export interface RPFFileResponse {
  readonly document: DocumentNode;
  readonly schemaVersion: number;
  source: string;
  readonly version: string /** version of editor */;
}
