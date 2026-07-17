import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesCreateManyInput } from './growth-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGrowthRatesArgs {

    @Field(() => [GrowthRatesCreateManyInput], {nullable:false})
    @Type(() => GrowthRatesCreateManyInput)
    data!: Array<GrowthRatesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
