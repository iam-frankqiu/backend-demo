import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { writeDataToFile, readDataFromFile, getData } from './../utils';
import * as vm from 'vm';
import { Worker } from 'worker_threads';

@Injectable()
export class ProposalService {
  async create(data: any) {
    const object = await readDataFromFile('organization');
    const temp = JSON.parse(object);
    const res = await getData(`http://localhost:4000/${temp.proposal}.js`);
    const worker = new Worker(`http://localhost:4000/${temp.proposal}.js`);
    // const str = res + `console.log(${temp.proposal}(${data.wallet}))`;
    console.log(res);
    // const result1 = eval(res as string);
    // const result2 = vm.runInThisContext(res as string);

    // console.log(result1, result2);
    // return result;
  }

  findAll() {
    return `This action returns all proposal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proposal`;
  }

  update(id: number, updateProposalDto: UpdateProposalDto) {
    return `This action updates a #${id} proposal`;
  }

  remove(id: number) {
    return `This action removes a #${id} proposal`;
  }
}
