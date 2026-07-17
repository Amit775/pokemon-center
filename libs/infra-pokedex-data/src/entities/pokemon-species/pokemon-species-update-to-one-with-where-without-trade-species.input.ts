import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutTradeSpeciesInput } from './pokemon-species-update-without-trade-species.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput)
    data!: Identity<PokemonSpeciesUpdateWithoutTradeSpeciesInput>;
}
