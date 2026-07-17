import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsUpdateInput } from './egg-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';

@ArgsType()
export class UpdateOneEggGroupsArgs {

    @Field(() => EggGroupsUpdateInput, {nullable:false})
    @Type(() => EggGroupsUpdateInput)
    data!: EggGroupsUpdateInput;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => EggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;
}
