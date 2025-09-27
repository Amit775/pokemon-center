import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonItemsScalarWhereInput {

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonItemsScalarWhereInput>;

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonItemsScalarWhereInput>;

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonItemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;
}
