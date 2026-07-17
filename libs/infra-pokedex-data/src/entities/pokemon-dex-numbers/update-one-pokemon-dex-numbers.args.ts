import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersUpdateInput } from './pokemon-dex-numbers-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';

@ArgsType()
export class UpdateOnePokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersUpdateInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateInput)
    data!: PokemonDexNumbersUpdateInput;

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;
}
