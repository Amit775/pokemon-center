import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutDexNumbersInput } from './pokemon-species-update-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutDexNumbersInput {

    @Field(() => PokemonSpeciesUpdateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutDexNumbersInput)
    update!: PokemonSpeciesUpdateWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create!: PokemonSpeciesCreateWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
