import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsCreateWithoutSpeciesInput } from './egg-groups-create-without-species.input';
import { Type } from 'class-transformer';
import { EggGroupsCreateOrConnectWithoutSpeciesInput } from './egg-groups-create-or-connect-without-species.input';
import { EggGroupsUpsertWithoutSpeciesInput } from './egg-groups-upsert-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { EggGroupsUpdateToOneWithWhereWithoutSpeciesInput } from './egg-groups-update-to-one-with-where-without-species.input';

@InputType()
export class EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => EggGroupsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateWithoutSpeciesInput)
    create?: Identity<EggGroupsCreateWithoutSpeciesInput>;

    @Field(() => EggGroupsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<EggGroupsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => EggGroupsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsUpsertWithoutSpeciesInput)
    upsert?: Identity<EggGroupsUpsertWithoutSpeciesInput>;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:true})
    @Type(() => EggGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;

    @Field(() => EggGroupsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => EggGroupsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: Identity<EggGroupsUpdateToOneWithWhereWithoutSpeciesInput>;
}
