import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VersionsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    identifier?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
