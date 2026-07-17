import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutDexNumbersInput } from './pokemon-species-update-without-dex-numbers.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesUpdateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutDexNumbersInput)
    data!: Identity<PokemonSpeciesUpdateWithoutDexNumbersInput>;
}
