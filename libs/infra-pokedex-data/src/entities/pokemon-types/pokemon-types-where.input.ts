import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class PokemonTypesWhereInput {

    @Field(() => [PokemonTypesWhereInput], {nullable:true})
    AND?: Array<PokemonTypesWhereInput>;

    @Field(() => [PokemonTypesWhereInput], {nullable:true})
    OR?: Array<PokemonTypesWhereInput>;

    @Field(() => [PokemonTypesWhereInput], {nullable:true})
    NOT?: Array<PokemonTypesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: PokemonScalarRelationFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: TypesScalarRelationFilter;
}
