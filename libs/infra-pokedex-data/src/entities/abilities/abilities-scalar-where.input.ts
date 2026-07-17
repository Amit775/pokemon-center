import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AbilitiesScalarWhereInput {

    @Field(() => [AbilitiesScalarWhereInput], {nullable:true})
    AND?: Array<AbilitiesScalarWhereInput>;

    @Field(() => [AbilitiesScalarWhereInput], {nullable:true})
    OR?: Array<AbilitiesScalarWhereInput>;

    @Field(() => [AbilitiesScalarWhereInput], {nullable:true})
    NOT?: Array<AbilitiesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: Identity<IntFilter>;
}
