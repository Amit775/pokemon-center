import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsScalarRelationFilter {

    @Field(() => VersionsWhereInput, {nullable:true})
    is?: Identity<VersionsWhereInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    isNot?: Identity<VersionsWhereInput>;
}
