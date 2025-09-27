import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonGameIndicesScalarWhereInput {

    @Field(() => [PokemonGameIndicesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonGameIndicesScalarWhereInput>;

    @Field(() => [PokemonGameIndicesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonGameIndicesScalarWhereInput>;

    @Field(() => [PokemonGameIndicesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonGameIndicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
