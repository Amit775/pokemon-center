import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersCreateInput } from './pokemon-dex-numbers-create.input';
import { PokemonDexNumbersUpdateInput } from './pokemon-dex-numbers-update.input';

@ArgsType()
export class UpsertOnePokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => PokemonDexNumbersCreateInput, {nullable:false})
    @Type(() => PokemonDexNumbersCreateInput)
    create!: Identity<PokemonDexNumbersCreateInput>;

    @Field(() => PokemonDexNumbersUpdateInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateInput)
    update!: Identity<PokemonDexNumbersUpdateInput>;
}
