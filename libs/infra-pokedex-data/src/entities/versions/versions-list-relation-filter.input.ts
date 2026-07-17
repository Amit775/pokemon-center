import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsListRelationFilter {

    @Field(() => VersionsWhereInput, {nullable:true})
    every?: Identity<VersionsWhereInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    some?: Identity<VersionsWhereInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    none?: Identity<VersionsWhereInput>;
}
