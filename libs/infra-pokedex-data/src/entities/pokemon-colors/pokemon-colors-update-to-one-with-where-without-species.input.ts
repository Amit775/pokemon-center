import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { PokemonColorsUpdateWithoutSpeciesInput } from './pokemon-colors-update-without-species.input';

@InputType()
export class PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: PokemonColorsWhereInput;

    @Field(() => PokemonColorsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsUpdateWithoutSpeciesInput)
    data!: PokemonColorsUpdateWithoutSpeciesInput;
}
