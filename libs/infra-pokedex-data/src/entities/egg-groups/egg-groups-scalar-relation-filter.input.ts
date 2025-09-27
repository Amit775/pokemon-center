import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';

@InputType()
export class EggGroupsScalarRelationFilter {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    is?: EggGroupsWhereInput;

    @Field(() => EggGroupsWhereInput, {nullable:true})
    isNot?: EggGroupsWhereInput;
}
