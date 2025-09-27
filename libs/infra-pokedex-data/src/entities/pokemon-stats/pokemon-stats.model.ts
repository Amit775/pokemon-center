import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { Stats } from '../stats/stats.model';

/**
 * @@TypeGraphQL.type(name: "PokemonStat")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonStat")'})
export class PokemonStats {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => Stats, {nullable:false})
    stat?: Stats;
}
