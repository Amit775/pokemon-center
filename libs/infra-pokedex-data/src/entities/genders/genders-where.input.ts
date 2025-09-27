import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class GendersWhereInput {

    @Field(() => [GendersWhereInput], {nullable:true})
    AND?: Array<GendersWhereInput>;

    @Field(() => [GendersWhereInput], {nullable:true})
    OR?: Array<GendersWhereInput>;

    @Field(() => [GendersWhereInput], {nullable:true})
    NOT?: Array<GendersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;
}
