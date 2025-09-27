import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonFormGenerationsScalarWhereInput {

    @Field(() => [PokemonFormGenerationsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonFormGenerationsScalarWhereInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonFormGenerationsScalarWhereInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonFormGenerationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
