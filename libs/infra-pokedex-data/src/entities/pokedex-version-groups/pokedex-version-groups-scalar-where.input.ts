import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokedexVersionGroupsScalarWhereInput {

    @Field(() => [PokedexVersionGroupsScalarWhereInput], {nullable:true})
    AND?: Array<PokedexVersionGroupsScalarWhereInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereInput], {nullable:true})
    OR?: Array<PokedexVersionGroupsScalarWhereInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereInput], {nullable:true})
    NOT?: Array<PokedexVersionGroupsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;
}
