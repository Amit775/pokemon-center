import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEggGroupsArgs {

    @Field(() => EggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => EggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;
}
