import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsUpdateWithoutGenerationInput } from './pokemon-form-generations-update-without-generation.input';
import { PokemonFormGenerationsCreateWithoutGenerationInput } from './pokemon-form-generations-create-without-generation.input';

@InputType()
export class PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateWithoutGenerationInput)
    update!: Identity<PokemonFormGenerationsUpdateWithoutGenerationInput>;

    @Field(() => PokemonFormGenerationsCreateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateWithoutGenerationInput)
    create!: Identity<PokemonFormGenerationsCreateWithoutGenerationInput>;
}
