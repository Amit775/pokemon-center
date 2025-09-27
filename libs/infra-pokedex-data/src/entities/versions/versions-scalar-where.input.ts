import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VersionsScalarWhereInput {

    @Field(() => [VersionsScalarWhereInput], {nullable:true})
    AND?: Array<VersionsScalarWhereInput>;

    @Field(() => [VersionsScalarWhereInput], {nullable:true})
    OR?: Array<VersionsScalarWhereInput>;

    @Field(() => [VersionsScalarWhereInput], {nullable:true})
    NOT?: Array<VersionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
