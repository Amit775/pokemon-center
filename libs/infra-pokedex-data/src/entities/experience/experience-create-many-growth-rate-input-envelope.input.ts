import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceCreateManyGrowthRateInput } from './experience-create-many-growth-rate.input';
import { Type } from 'class-transformer';

@InputType()
export class ExperienceCreateManyGrowthRateInputEnvelope {

    @Field(() => [ExperienceCreateManyGrowthRateInput], {nullable:false})
    @Type(() => ExperienceCreateManyGrowthRateInput)
    data!: Array<ExperienceCreateManyGrowthRateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
