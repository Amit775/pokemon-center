import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VersionGroupRegionsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    region_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
