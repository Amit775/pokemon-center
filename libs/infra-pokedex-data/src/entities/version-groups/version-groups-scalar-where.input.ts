import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
