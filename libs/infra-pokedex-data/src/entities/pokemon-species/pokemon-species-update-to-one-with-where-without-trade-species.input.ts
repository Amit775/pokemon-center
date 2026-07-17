import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutTradeSpeciesInput } from './pokemon-species-update-without-trade-species.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutTradeSpeciesInput)
    data!: PokemonSpeciesUpdateWithoutTradeSpeciesInput;
}
