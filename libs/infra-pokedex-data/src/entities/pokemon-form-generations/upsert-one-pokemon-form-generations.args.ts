import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCreateInput } from './pokemon-form-generations-create.input';
import { PokemonFormGenerationsUpdateInput } from './pokemon-form-generations-update.input';

@ArgsType()
export class UpsertOnePokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsCreateInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateInput)
    create!: Identity<PokemonFormGenerationsCreateInput>;

    @Field(() => PokemonFormGenerationsUpdateInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateInput)
    update!: Identity<PokemonFormGenerationsUpdateInput>;
}
