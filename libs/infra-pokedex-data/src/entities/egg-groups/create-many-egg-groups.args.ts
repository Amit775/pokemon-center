import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsCreateManyInput } from './egg-groups-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEggGroupsArgs {

    @Field(() => [EggGroupsCreateManyInput], {nullable:false})
    @Type(() => EggGroupsCreateManyInput)
    data!: Array<EggGroupsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
