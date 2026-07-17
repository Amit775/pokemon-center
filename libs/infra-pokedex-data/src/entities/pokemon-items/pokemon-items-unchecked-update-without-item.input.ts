import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonItemsUncheckedUpdateWithoutItemInput {

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;
}
