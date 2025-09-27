import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesOrderByWithRelationInput } from './pokemon-form-types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormTypesScalarFieldEnum } from './pokemon-form-types-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonFormTypesArgs {

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    @Type(() => PokemonFormTypesWhereInput)
    where?: PokemonFormTypesWhereInput;

    @Field(() => [PokemonFormTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormTypesOrderByWithRelationInput>;

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonFormTypesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonFormTypesScalarFieldEnum}`>;
}
