import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceScalarWhereInput } from './experience-scalar-where.input';
import { Type } from 'class-transformer';
import { ExperienceUpdateManyMutationInput } from './experience-update-many-mutation.input';

@InputType()
export class ExperienceUpdateManyWithWhereWithoutGrowthRateInput {

    @Field(() => ExperienceScalarWhereInput, {nullable:false})
    @Type(() => ExperienceScalarWhereInput)
    where!: Identity<ExperienceScalarWhereInput>;

    @Field(() => ExperienceUpdateManyMutationInput, {nullable:false})
    @Type(() => ExperienceUpdateManyMutationInput)
    data!: Identity<ExperienceUpdateManyMutationInput>;
}
