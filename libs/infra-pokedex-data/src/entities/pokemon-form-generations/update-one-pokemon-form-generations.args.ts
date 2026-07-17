import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsUpdateInput } from './pokemon-form-generations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';

@ArgsType()
export class UpdateOnePokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsUpdateInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateInput)
    data!: Identity<PokemonFormGenerationsUpdateInput>;

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;
}
