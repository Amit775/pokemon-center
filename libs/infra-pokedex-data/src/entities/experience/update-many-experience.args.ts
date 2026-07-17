import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceUpdateManyMutationInput } from './experience-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExperienceWhereInput } from './experience-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyExperienceArgs {

    @Field(() => ExperienceUpdateManyMutationInput, {nullable:false})
    @Type(() => ExperienceUpdateManyMutationInput)
    data!: Identity<ExperienceUpdateManyMutationInput>;

    @Field(() => ExperienceWhereInput, {nullable:true})
    @Type(() => ExperienceWhereInput)
    where?: Identity<ExperienceWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
