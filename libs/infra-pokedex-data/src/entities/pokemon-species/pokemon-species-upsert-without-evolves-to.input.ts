import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutEvolvesToInput } from './pokemon-species-update-without-evolves-to.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesUpdateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolvesToInput)
    update!: PokemonSpeciesUpdateWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create!: PokemonSpeciesCreateWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
