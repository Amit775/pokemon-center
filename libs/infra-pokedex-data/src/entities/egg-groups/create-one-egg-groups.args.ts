import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsCreateInput } from './egg-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEggGroupsArgs {

    @Field(() => EggGroupsCreateInput, {nullable:false})
    @Type(() => EggGroupsCreateInput)
    data!: EggGroupsCreateInput;
}
