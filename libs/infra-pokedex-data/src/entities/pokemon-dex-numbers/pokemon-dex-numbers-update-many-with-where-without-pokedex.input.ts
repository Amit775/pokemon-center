import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersUpdateManyMutationInput } from './pokemon-dex-numbers-update-many-mutation.input';

@InputType()
export class PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput {

    @Field(() => PokemonDexNumbersScalarWhereInput, {nullable:false})
    @Type(() => PokemonDexNumbersScalarWhereInput)
    where!: Identity<PokemonDexNumbersScalarWhereInput>;

    @Field(() => PokemonDexNumbersUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateManyMutationInput)
    data!: Identity<PokemonDexNumbersUpdateManyMutationInput>;
}
