import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceWhereInput } from './experience-where.input';

@InputType()
export class ExperienceListRelationFilter {

    @Field(() => ExperienceWhereInput, {nullable:true})
    every?: Identity<ExperienceWhereInput>;

    @Field(() => ExperienceWhereInput, {nullable:true})
    some?: Identity<ExperienceWhereInput>;

    @Field(() => ExperienceWhereInput, {nullable:true})
    none?: Identity<ExperienceWhereInput>;
}
