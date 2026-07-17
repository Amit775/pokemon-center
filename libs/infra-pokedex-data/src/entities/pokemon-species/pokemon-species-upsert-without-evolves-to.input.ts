import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutEvolvesToInput } from './pokemon-species-update-without-evolves-to.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesUpdateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolvesToInput)
    update!: Identity<PokemonSpeciesUpdateWithoutEvolvesToInput>;

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolvesToInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;
}
