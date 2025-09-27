import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoveFlagMapListRelationFilter } from '../move-flag-map/move-flag-map-list-relation-filter.input';

@InputType()
export class MoveFlagsWhereInput {

    @Field(() => [MoveFlagsWhereInput], {nullable:true})
    AND?: Array<MoveFlagsWhereInput>;

    @Field(() => [MoveFlagsWhereInput], {nullable:true})
    OR?: Array<MoveFlagsWhereInput>;

    @Field(() => [MoveFlagsWhereInput], {nullable:true})
    NOT?: Array<MoveFlagsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MoveFlagMapListRelationFilter, {nullable:true})
    flagMap?: MoveFlagMapListRelationFilter;
}
