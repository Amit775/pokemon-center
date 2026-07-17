import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEggGroupsArgs {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: Identity<EggGroupsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
