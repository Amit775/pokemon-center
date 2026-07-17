import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class VersionGroupRegionsScalarWhereInput {

    @Field(() => [VersionGroupRegionsScalarWhereInput], {nullable:true})
    AND?: Array<VersionGroupRegionsScalarWhereInput>;

    @Field(() => [VersionGroupRegionsScalarWhereInput], {nullable:true})
    OR?: Array<VersionGroupRegionsScalarWhereInput>;

    @Field(() => [VersionGroupRegionsScalarWhereInput], {nullable:true})
    NOT?: Array<VersionGroupRegionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;
}
