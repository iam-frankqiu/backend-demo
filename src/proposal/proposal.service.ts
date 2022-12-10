import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { writeDataToFile, readDataFromFile } from './../utils';
import * as http from 'http';

@Injectable()
export class ProposalService {
  async create(data: CreateProposalDto) {
    const object = readDataFromFile('proposal');
    console.log(object);
    http
      .get('http://localhost:4000/tokenLimits.js', (res) => {
        let data = '';

        // 数据块到达
        res.on('data', (chunk) => {
          data += chunk;
        });

        // 整个响应都被接收
        res.on('end', () => {
          console.log(data);
          eval(data);
        });
      })
      .on('error', (err) => {
        console.log(err);
      });
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
