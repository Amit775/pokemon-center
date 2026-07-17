import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;
}
