import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokemonMovesInput } from './version-groups-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokemonMovesInput } from './version-groups-create-or-connect-without-pokemon-moves.input';
import { VersionGroupsUpsertWithoutPokemonMovesInput } from './version-groups-upsert-without-pokemon-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput } from './version-groups-update-to-one-with-where-without-pokemon-moves.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput {

    @Field(() => VersionGroupsCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokemonMovesInput)
    create?: Identity<VersionGroupsCreateWithoutPokemonMovesInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutPokemonMovesInput>;

    @Field(() => VersionGroupsUpsertWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutPokemonMovesInput)
    upsert?: Identity<VersionGroupsUpsertWithoutPokemonMovesInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput>;
}
