import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class EvolutionTriggersWhereInput {

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    AND?: Array<EvolutionTriggersWhereInput>;

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    OR?: Array<EvolutionTriggersWhereInput>;

    @Field(() => [EvolutionTriggersWhereInput], {nullable:true})
    NOT?: Array<EvolutionTriggersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: Identity<PokemonEvolutionListRelationFilter>;
}
