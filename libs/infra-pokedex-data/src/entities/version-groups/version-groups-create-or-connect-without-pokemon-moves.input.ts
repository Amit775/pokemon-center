import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokemonMovesInput } from './version-groups-create-without-pokemon-moves.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutPokemonMovesInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokemonMovesInput)
    create!: VersionGroupsCreateWithoutPokemonMovesInput;
}
