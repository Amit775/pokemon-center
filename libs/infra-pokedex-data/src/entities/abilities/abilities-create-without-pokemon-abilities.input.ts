import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutAbilitiesInput } from '../generations/generations-create-nested-one-without-abilities.input';

@InputType()
export class AbilitiesCreateWithoutPokemonAbilitiesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => GenerationsCreateNestedOneWithoutAbilitiesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutAbilitiesInput;
}
