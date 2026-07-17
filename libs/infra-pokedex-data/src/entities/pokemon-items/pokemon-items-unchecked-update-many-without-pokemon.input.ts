import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonItemsUncheckedUpdateManyWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;
}
