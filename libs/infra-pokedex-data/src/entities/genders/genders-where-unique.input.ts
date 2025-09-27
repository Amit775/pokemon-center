import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GendersWhereInput } from './genders-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class GendersWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [GendersWhereInput], {nullable:true})
    AND?: Array<GendersWhereInput>;

    @Field(() => [GendersWhereInput], {nullable:true})
    OR?: Array<GendersWhereInput>;

    @Field(() => [GendersWhereInput], {nullable:true})
    NOT?: Array<GendersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;
}
