import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NaturesScalarWhereInput {

    @Field(() => [NaturesScalarWhereInput], {nullable:true})
    AND?: Array<NaturesScalarWhereInput>;

    @Field(() => [NaturesScalarWhereInput], {nullable:true})
    OR?: Array<NaturesScalarWhereInput>;

    @Field(() => [NaturesScalarWhereInput], {nullable:true})
    NOT?: Array<NaturesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    decreased_stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    increased_stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    hates_flavor_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    likes_flavor_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;
}
