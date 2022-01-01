/**
 * @fileoverview gRPC-Web generated client stub for echeveria.sample
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.echeveria = {};
proto.echeveria.sample = require('./pingpong_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echeveria.sample.PingPongClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echeveria.sample.PingPongPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echeveria.sample.PingRequest,
 *   !proto.echeveria.sample.PingResponse>}
 */
const methodDescriptor_PingPong_Ping = new grpc.web.MethodDescriptor(
  '/echeveria.sample.PingPong/Ping',
  grpc.web.MethodType.UNARY,
  proto.echeveria.sample.PingRequest,
  proto.echeveria.sample.PingResponse,
  /**
   * @param {!proto.echeveria.sample.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echeveria.sample.PingResponse.deserializeBinary
);


/**
 * @param {!proto.echeveria.sample.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.echeveria.sample.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echeveria.sample.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echeveria.sample.PingPongClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echeveria.sample.PingPong/Ping',
      request,
      metadata || {},
      methodDescriptor_PingPong_Ping,
      callback);
};


/**
 * @param {!proto.echeveria.sample.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echeveria.sample.PingResponse>}
 *     Promise that resolves to the response
 */
proto.echeveria.sample.PingPongPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echeveria.sample.PingPong/Ping',
      request,
      metadata || {},
      methodDescriptor_PingPong_Ping);
};


module.exports = proto.echeveria.sample;

