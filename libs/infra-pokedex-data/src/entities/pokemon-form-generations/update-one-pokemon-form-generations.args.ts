import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsUpdateInput } from './pokemon-form-generations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';

@ArgsType()
export class UpdateOnePokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsUpdateInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateInput)
    data!: PokemonFormGenerationsUpdateInput;

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;
}
