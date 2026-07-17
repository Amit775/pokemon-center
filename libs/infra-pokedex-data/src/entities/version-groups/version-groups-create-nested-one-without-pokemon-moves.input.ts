import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutPokemonMovesInput } from './version-groups-create-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokemonMovesInput } from './version-groups-create-or-connect-without-pokemon-moves.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutPokemonMovesInput {

    @Field(() => VersionGroupsCreateWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokemonMovesInput)
    create?: VersionGroupsCreateWithoutPokemonMovesInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokemonMovesInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokemonMovesInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokemonMovesInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
