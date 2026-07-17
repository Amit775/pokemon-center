import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyNaturesArgs {

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: NaturesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
