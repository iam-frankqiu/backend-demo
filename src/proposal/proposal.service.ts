import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { writeDataToFile, readDataFromFile, getData } from './../utils';

@Injectable()
export class ProposalService {
  async create(data: any) {
    const object = await readDataFromFile('organization');
    const temp = JSON.parse(object);
    const res = await getData(`http://localhost:4000/${temp.proposal}.js`);
    const str = res + `${temp.proposal}(${data.wallet})`;
    eval(str);
    // console.log(eval(`${temp.proposal}(${data.wallet})`));
    return eval(str);
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
