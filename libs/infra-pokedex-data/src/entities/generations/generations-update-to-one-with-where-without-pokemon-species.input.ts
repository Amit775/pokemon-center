import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutPokemonSpeciesInput } from './generations-update-without-pokemon-species.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => GenerationsUpdateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutPokemonSpeciesInput)
    data!: GenerationsUpdateWithoutPokemonSpeciesInput;
}
