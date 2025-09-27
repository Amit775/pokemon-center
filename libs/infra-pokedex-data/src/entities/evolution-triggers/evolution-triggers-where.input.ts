import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;
}
