import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsUpdateManyMutationInput } from './egg-groups-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEggGroupsArgs {

    @Field(() => EggGroupsUpdateManyMutationInput, {nullable:false})
    @Type(() => EggGroupsUpdateManyMutationInput)
    data!: EggGroupsUpdateManyMutationInput;

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
