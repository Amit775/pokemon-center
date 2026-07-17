import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonColorsUpdateWithoutSpeciesInput } from './pokemon-colors-update-without-species.input';
import { Type } from 'class-transformer';
import { PokemonColorsCreateWithoutSpeciesInput } from './pokemon-colors-create-without-species.input';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';

@InputType()
export class PokemonColorsUpsertWithoutSpeciesInput {

    @Field(() => PokemonColorsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsUpdateWithoutSpeciesInput)
    update!: PokemonColorsUpdateWithoutSpeciesInput;

    @Field(() => PokemonColorsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsCreateWithoutSpeciesInput)
    create!: PokemonColorsCreateWithoutSpeciesInput;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: PokemonColorsWhereInput;
}
