import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsWhereInput } from './egg-groups-where.input';

@InputType()
export class EggGroupsScalarRelationFilter {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    is?: Identity<EggGroupsWhereInput>;

    @Field(() => EggGroupsWhereInput, {nullable:true})
    isNot?: Identity<EggGroupsWhereInput>;
}
