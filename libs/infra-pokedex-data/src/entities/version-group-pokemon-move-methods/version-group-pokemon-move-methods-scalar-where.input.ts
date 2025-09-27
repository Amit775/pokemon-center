import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class VersionGroupPokemonMoveMethodsScalarWhereInput {

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereInput], {nullable:true})
    AND?: Array<VersionGroupPokemonMoveMethodsScalarWhereInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereInput], {nullable:true})
    OR?: Array<VersionGroupPokemonMoveMethodsScalarWhereInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereInput], {nullable:true})
    NOT?: Array<VersionGroupPokemonMoveMethodsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: IntFilter;
}
