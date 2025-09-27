import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsScalarRelationFilter {

    @Field(() => VersionsWhereInput, {nullable:true})
    is?: VersionsWhereInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    isNot?: VersionsWhereInput;
}
