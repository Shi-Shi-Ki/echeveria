/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export const protobufPackage = 'echeveria.sample';

export interface PingRequest {
  id: number;
}

export interface PingResponse {
  id: number;
  name: string;
}

export const ECHEVERIA_SAMPLE_PACKAGE_NAME = 'echeveria.sample';

/** テスト用のPingPongサービス */

export interface PingPongClient {
  /** Ping RPC */

  ping(request: PingRequest, metadata?: Metadata): Observable<PingResponse>;
}

/** テスト用のPingPongサービス */

export interface PingPongController {
  /** Ping RPC */

  ping(
    request: PingRequest,
    metadata?: Metadata,
  ): Promise<PingResponse> | Observable<PingResponse> | PingResponse;
}

export function PingPongControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['ping'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('PingPong', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('PingPong', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PING_PONG_SERVICE_NAME = 'PingPong';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
