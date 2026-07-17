import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonStatsUncheckedCreateWithoutStatInput {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;
}
