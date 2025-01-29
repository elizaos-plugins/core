declare const generateText: (...args: any[]) => any;
declare const generateObject: (...args: any[]) => any;
declare const composeContext: (...args: any[]) => any;
declare const splitChunks: (...args: any[]) => any;
declare const trimTokens: (...args: any[]) => any;
declare const elizaLogger: {
    [key: string]: any;
};
declare const ModelClass: new (...args: any[]) => any;
type HandlerCallback = any;
type IAgentRuntime = any;
type Memory = any;
type State = any;
type Plugin = any;
type Action = any;
type Provider = any;

export { type Action, type HandlerCallback, type IAgentRuntime, type Memory, ModelClass, type Plugin, type Provider, type State, composeContext, elizaLogger, generateObject, generateText, splitChunks, trimTokens };
