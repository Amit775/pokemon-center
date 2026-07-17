import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutPokemonFormGenerationsInput } from './generations-update-without-pokemon-form-generations.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => GenerationsUpdateWithoutPokemonFormGenerationsInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutPokemonFormGenerationsInput)
    data!: GenerationsUpdateWithoutPokemonFormGenerationsInput;
}
