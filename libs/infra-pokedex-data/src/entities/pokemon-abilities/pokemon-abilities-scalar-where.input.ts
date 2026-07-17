import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_hidden?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    slot?: Identity<IntFilter>;
}
