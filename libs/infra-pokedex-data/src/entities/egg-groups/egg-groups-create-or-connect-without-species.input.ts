import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { EggGroupsCreateWithoutSpeciesInput } from './egg-groups-create-without-species.input';

@InputType()
export class EggGroupsCreateOrConnectWithoutSpeciesInput {

    @Field(() => EggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => EggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;

    @Field(() => EggGroupsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => EggGroupsCreateWithoutSpeciesInput)
    create!: EggGroupsCreateWithoutSpeciesInput;
}
