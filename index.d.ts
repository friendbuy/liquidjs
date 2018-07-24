declare module "liquidjs" {
  export interface LiquidOptions {
    root?: string | string[];
    cache?: boolean;
    extname?: string;
    dynamicPartials?: boolean;
    trim_tag_right?: boolean;
    trim_tag_left?: boolean;
    trim_value_right?: boolean;
    trim_value_left?: boolean;
    greedy?: boolean;
    strict_filters?: boolean;
  }

  export interface Context {
    [props: string]: any;
  }

  export interface Blocks {
    [props: string]: any;
  }

  export interface RenderOptions {
    dynamicPartials: boolean;
    strict_variables: boolean;
    strict_filters: boolean;
    blocks: Blocks;
    root: string[];
  }

  export type HTML = string;
  export type FilePath = string;
  export type ParsedTag = string;

  export interface LiquidEngine {
    parse: (html: HTML, filePath: FilePath) => ParsedTag[];
    parseAndRender: (
      html: HTML,
      ctxt: Context,
      options?: RenderOptions
    ) => Promise<string>;
  }

  function Liquid(options?: LiquidOptions): LiquidEngine;

  export default Liquid;
}
