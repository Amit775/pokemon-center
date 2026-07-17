import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsUpdateWithoutPokemonFormGenerationsInput } from './generations-update-without-pokemon-form-generations.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutPokemonFormGenerationsInput {

    @Field(() => GenerationsUpdateWithoutPokemonFormGenerationsInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutPokemonFormGenerationsInput)
    update!: GenerationsUpdateWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create!: GenerationsCreateWithoutPokemonFormGenerationsInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;
}
