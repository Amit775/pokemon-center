import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateInput } from './pokemon-forms-create.input';
import { PokemonFormsUpdateInput } from './pokemon-forms-update.input';

@ArgsType()
export class UpsertOnePokemonFormsArgs {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsCreateInput, {nullable:false})
    @Type(() => PokemonFormsCreateInput)
    create!: Identity<PokemonFormsCreateInput>;

    @Field(() => PokemonFormsUpdateInput, {nullable:false})
    @Type(() => PokemonFormsUpdateInput)
    update!: Identity<PokemonFormsUpdateInput>;
}
