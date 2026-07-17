import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput } from '../experience/experience-unchecked-create-nested-many-without-growth-rate.input';

@InputType()
export class GrowthRatesUncheckedCreateWithoutSpeciesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput, {nullable:true})
    experience?: ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput;
}
