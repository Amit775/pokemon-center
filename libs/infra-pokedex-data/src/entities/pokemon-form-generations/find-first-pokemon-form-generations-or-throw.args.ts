import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsOrderByWithRelationInput } from './pokemon-form-generations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormGenerationsScalarFieldEnum } from './pokemon-form-generations-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonFormGenerationsOrThrowArgs {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    @Type(() => PokemonFormGenerationsWhereInput)
    where?: PokemonFormGenerationsWhereInput;

    @Field(() => [PokemonFormGenerationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormGenerationsOrderByWithRelationInput>;

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonFormGenerationsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonFormGenerationsScalarFieldEnum}`>;
}
