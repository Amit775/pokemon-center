import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';
import { Type } from 'class-transformer';
import { PokemonTypesOrderByWithRelationInput } from './pokemon-types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonTypesScalarFieldEnum } from './pokemon-types-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonTypesArgs {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    @Type(() => PokemonTypesWhereInput)
    where?: PokemonTypesWhereInput;

    @Field(() => [PokemonTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonTypesOrderByWithRelationInput>;

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonTypesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonTypesScalarFieldEnum}`>;
}
