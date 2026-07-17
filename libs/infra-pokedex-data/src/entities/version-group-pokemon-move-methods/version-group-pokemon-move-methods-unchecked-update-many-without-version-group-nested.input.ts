import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput } from './version-group-pokemon-move-methods-create-or-connect-without-version-group.input';
import { VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput } from './version-group-pokemon-move-methods-upsert-with-where-unique-without-version-group.input';
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope } from './version-group-pokemon-move-methods-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput } from './version-group-pokemon-move-methods-update-with-where-unique-without-version-group.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput } from './version-group-pokemon-move-methods-update-many-with-where-without-version-group.input';
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from './version-group-pokemon-move-methods-scalar-where.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput)
    create?: Array<VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope)
    createMany?: VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsScalarWhereInput)
    deleteMany?: Array<VersionGroupPokemonMoveMethodsScalarWhereInput>;
}
