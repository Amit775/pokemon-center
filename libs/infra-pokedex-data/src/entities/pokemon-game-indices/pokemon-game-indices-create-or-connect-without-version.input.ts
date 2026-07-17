import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesCreateWithoutVersionInput } from './pokemon-game-indices-create-without-version.input';

@InputType()
export class PokemonGameIndicesCreateOrConnectWithoutVersionInput {

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => PokemonGameIndicesCreateWithoutVersionInput, {nullable:false})
    @Type(() => PokemonGameIndicesCreateWithoutVersionInput)
    create!: PokemonGameIndicesCreateWithoutVersionInput;
}
