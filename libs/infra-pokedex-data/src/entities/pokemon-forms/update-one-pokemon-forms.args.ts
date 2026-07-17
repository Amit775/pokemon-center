import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormsUpdateInput } from './pokemon-forms-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@ArgsType()
export class UpdateOnePokemonFormsArgs {

    @Field(() => PokemonFormsUpdateInput, {nullable:false})
    @Type(() => PokemonFormsUpdateInput)
    data!: PokemonFormsUpdateInput;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;
}
