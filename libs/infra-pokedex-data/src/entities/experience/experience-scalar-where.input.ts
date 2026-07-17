import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ExperienceScalarWhereInput {

    @Field(() => [ExperienceScalarWhereInput], {nullable:true})
    AND?: Array<ExperienceScalarWhereInput>;

    @Field(() => [ExperienceScalarWhereInput], {nullable:true})
    OR?: Array<ExperienceScalarWhereInput>;

    @Field(() => [ExperienceScalarWhereInput], {nullable:true})
    NOT?: Array<ExperienceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    experience?: Identity<IntFilter>;
}
