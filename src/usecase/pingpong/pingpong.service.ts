import { Injectable } from '@nestjs/common';

@Injectable()
export class PingpongService {
  showlog(value: string) {
    console.log(`PingpongService) value: ${value}`)
  }
}

