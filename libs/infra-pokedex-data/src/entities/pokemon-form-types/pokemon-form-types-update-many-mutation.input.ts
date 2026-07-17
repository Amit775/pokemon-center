import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormTypesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    slot?: number;
}
