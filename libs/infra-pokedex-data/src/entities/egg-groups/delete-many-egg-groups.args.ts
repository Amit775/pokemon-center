import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEggGroupsArgs {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
