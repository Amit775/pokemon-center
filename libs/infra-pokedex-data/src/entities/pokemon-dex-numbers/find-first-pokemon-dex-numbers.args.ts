import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersOrderByWithRelationInput } from './pokemon-dex-numbers-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonDexNumbersScalarFieldEnum } from './pokemon-dex-numbers-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    @Type(() => PokemonDexNumbersWhereInput)
    where?: PokemonDexNumbersWhereInput;

    @Field(() => [PokemonDexNumbersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonDexNumbersOrderByWithRelationInput>;

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonDexNumbersScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonDexNumbersScalarFieldEnum}`>;
}
