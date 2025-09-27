import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesOrderByWithRelationInput } from './pokemon-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonGameIndicesScalarFieldEnum } from './pokemon-game-indices-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonGameIndicesOrThrowArgs {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    @Type(() => PokemonGameIndicesWhereInput)
    where?: PokemonGameIndicesWhereInput;

    @Field(() => [PokemonGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonGameIndicesOrderByWithRelationInput>;

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonGameIndicesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonGameIndicesScalarFieldEnum}`>;
}
