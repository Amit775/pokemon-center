import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonCreateManyInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    base_experience!: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:false})
    is_default!: number;
}
