import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonStatsUncheckedUpdateManyWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    stat_id?: number;

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    effort?: number;
}
