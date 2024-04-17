import { Injectable } from '@nestjs/common';

@Injectable()
export class SsdService {
  async addingOne(params: any): Promise<any> {
    console.log(params);

    return { name: 'hhahahha' };
  }

  async getDetailInfo(params: any): Promise<any> {
    console.log(params);

    return { name: 'hhahahha' };
  }
}
