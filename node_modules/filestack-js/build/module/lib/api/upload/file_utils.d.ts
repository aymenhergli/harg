/// <reference types="node" />
import { Context, PartObj, FileObj } from './types';
/**
 * Given a file with a valid descriptor this will return a part object
 * The part object represents a chunk of the file
 * @private
 * @param file    File object that contains a descriptor
 * @param part    Part object that contains a number field
 * @param config  Current upload configuration settings
 */
export declare const getPart: (part: PartObj, { config, file }: Context) => Promise<PartObj>;
/**
 * Given a file path, returns a file object
 * @private
 * @param inputFile  A valid path to a file on your filesystem or buffer.
 */
export declare const getFile: (inputFile: string | Buffer) => Promise<FileObj>;
