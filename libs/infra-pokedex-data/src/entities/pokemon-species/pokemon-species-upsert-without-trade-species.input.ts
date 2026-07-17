import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutTradeSpeciesInput } from './pokemon-species-update-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from './pokemon-species-create-without-trade-species.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput)
    update!: Identity<PokemonSpeciesUpdateWithoutTradeSpeciesInput>;

    @Field(() => PokemonSpeciesCreateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutTradeSpeciesInput)
    create!: Identity<PokemonSpeciesCreateWithoutTradeSpeciesInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;
}
