import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsUpdateWithoutGenerationInput } from './pokemon-form-generations-update-without-generation.input';

@InputType()
export class PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateWithoutGenerationInput)
    data!: PokemonFormGenerationsUpdateWithoutGenerationInput;
}
