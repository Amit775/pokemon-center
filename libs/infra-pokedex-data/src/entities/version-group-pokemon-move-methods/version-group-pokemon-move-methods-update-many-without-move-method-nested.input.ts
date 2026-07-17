import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from './version-group-pokemon-move-methods-create-without-move-method.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput } from './version-group-pokemon-move-methods-create-or-connect-without-move-method.input';
import { VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput } from './version-group-pokemon-move-methods-upsert-with-where-unique-without-move-method.input';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope } from './version-group-pokemon-move-methods-create-many-move-method-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput } from './version-group-pokemon-move-methods-update-with-where-unique-without-move-method.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput } from './version-group-pokemon-move-methods-update-many-with-where-without-move-method.input';
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from './version-group-pokemon-move-methods-scalar-where.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput)
    create?: Array<VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput)
    connectOrCreate?: Array<VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput)
    upsert?: Array<VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput>;

    @Field(() => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope)
    createMany?: Identity<VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope>;

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

    @Field(() => [VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput)
    update?: Array<VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput)
    updateMany?: Array<VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereInput], {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsScalarWhereInput)
    deleteMany?: Array<VersionGroupPokemonMoveMethodsScalarWhereInput>;
}
