import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class EvolutionTriggersWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    AND?: Array<EvolutionTriggersWhereInput>;

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    OR?: Array<EvolutionTriggersWhereInput>;

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    NOT?: Array<EvolutionTriggersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;
}
