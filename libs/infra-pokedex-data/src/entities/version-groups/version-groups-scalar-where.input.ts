import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VersionGroupsScalarWhereInput {

    @Field(() => [VersionGroupsScalarWhereInput], {nullable:true})
    AND?: Array<VersionGroupsScalarWhereInput>;

    @Field(() => [VersionGroupsScalarWhereInput], {nullable:true})
    OR?: Array<VersionGroupsScalarWhereInput>;

    @Field(() => [VersionGroupsScalarWhereInput], {nullable:true})
    NOT?: Array<VersionGroupsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;
}
