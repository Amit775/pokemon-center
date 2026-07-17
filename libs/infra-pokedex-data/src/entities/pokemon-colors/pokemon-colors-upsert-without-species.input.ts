import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsUpdateWithoutSpeciesInput } from './pokemon-colors-update-without-species.input';
import { Type } from 'class-transformer';
import { PokemonColorsCreateWithoutSpeciesInput } from './pokemon-colors-create-without-species.input';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';

@InputType()
export class PokemonColorsUpsertWithoutSpeciesInput {

    @Field(() => PokemonColorsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsUpdateWithoutSpeciesInput)
    update!: Identity<PokemonColorsUpdateWithoutSpeciesInput>;

    @Field(() => PokemonColorsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsCreateWithoutSpeciesInput)
    create!: Identity<PokemonColorsCreateWithoutSpeciesInput>;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: Identity<PokemonColorsWhereInput>;
}
