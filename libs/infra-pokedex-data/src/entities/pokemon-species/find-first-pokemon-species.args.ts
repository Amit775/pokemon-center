import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesOrderByWithRelationInput } from './pokemon-species-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesScalarFieldEnum } from './pokemon-species-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonSpeciesArgs {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => [PokemonSpeciesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonSpeciesOrderByWithRelationInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonSpeciesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonSpeciesScalarFieldEnum}`>;
}
