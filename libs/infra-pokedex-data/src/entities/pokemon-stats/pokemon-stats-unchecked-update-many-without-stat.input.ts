import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonStatsUncheckedUpdateManyWithoutStatInput {

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    effort?: number;
}
