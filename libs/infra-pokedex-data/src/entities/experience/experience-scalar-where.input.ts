import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    experience?: IntFilter;
}
