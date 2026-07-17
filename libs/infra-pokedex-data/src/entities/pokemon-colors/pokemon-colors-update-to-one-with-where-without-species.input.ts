import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { PokemonColorsUpdateWithoutSpeciesInput } from './pokemon-colors-update-without-species.input';

@InputType()
export class PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: Identity<PokemonColorsWhereInput>;

    @Field(() => PokemonColorsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsUpdateWithoutSpeciesInput)
    data!: Identity<PokemonColorsUpdateWithoutSpeciesInput>;
}
