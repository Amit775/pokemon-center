import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreasCreateManyInput } from './location-areas-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLocationAreasArgs {

    @Field(() => [LocationAreasCreateManyInput], {nullable:false})
    @Type(() => LocationAreasCreateManyInput)
    data!: Array<LocationAreasCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
