import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsCreateWithoutSpeciesInput } from './egg-groups-create-without-species.input';
import { Type } from 'class-transformer';
import { EggGroupsCreateOrConnectWithoutSpeciesInput } from './egg-groups-create-or-connect-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';

@InputType()
export class EggGroupsCreateNestedOneWithoutSpeciesInput {

    @Field(() => EggGroupsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateWithoutSpeciesInput)
    create?: Identity<EggGroupsCreateWithoutSpeciesInput>;

    @Field(() => EggGroupsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<EggGroupsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:true})
    @Type(() => EggGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;
}
