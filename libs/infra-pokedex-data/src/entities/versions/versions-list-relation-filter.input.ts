import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsListRelationFilter {

    @Field(() => VersionsWhereInput, {nullable:true})
    every?: VersionsWhereInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    some?: VersionsWhereInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    none?: VersionsWhereInput;
}
