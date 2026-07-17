import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EggGroupsCreateWithoutSpeciesInput } from './egg-groups-create-without-species.input';
import { Type } from 'class-transformer';
import { EggGroupsCreateOrConnectWithoutSpeciesInput } from './egg-groups-create-or-connect-without-species.input';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';

@InputType()
export class EggGroupsCreateNestedOneWithoutSpeciesInput {

    @Field(() => EggGroupsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateWithoutSpeciesInput)
    create?: EggGroupsCreateWithoutSpeciesInput;

    @Field(() => EggGroupsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: EggGroupsCreateOrConnectWithoutSpeciesInput;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:true})
    @Type(() => EggGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;
}
