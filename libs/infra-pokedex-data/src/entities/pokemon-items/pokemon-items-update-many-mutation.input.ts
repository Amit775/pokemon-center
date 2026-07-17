import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonItemsUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    rarity?: number;
}
