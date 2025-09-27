import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonAbilitiesScalarWhereInput {

    @Field(() => [PokemonAbilitiesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonAbilitiesScalarWhereInput>;

    @Field(() => [PokemonAbilitiesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonAbilitiesScalarWhereInput>;

    @Field(() => [PokemonAbilitiesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonAbilitiesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_hidden?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;
}
