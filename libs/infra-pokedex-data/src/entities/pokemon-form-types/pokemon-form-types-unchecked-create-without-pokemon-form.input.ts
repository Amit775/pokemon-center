import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormTypesUncheckedCreateWithoutPokemonFormInput {

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;
}
