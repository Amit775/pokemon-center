import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateManyRegionInput } from './generations-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class GenerationsCreateManyRegionInputEnvelope {

    @Field(() => [GenerationsCreateManyRegionInput], {nullable:false})
    @Type(() => GenerationsCreateManyRegionInput)
    data!: Array<GenerationsCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
