import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsOrderByWithRelationInput } from './pokemon-forms-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormsScalarFieldEnum } from './pokemon-forms-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonFormsArgs {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;

    @Field(() => [PokemonFormsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormsOrderByWithRelationInput>;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonFormsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonFormsScalarFieldEnum}`>;
}
