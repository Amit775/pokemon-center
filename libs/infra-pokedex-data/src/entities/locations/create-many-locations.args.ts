import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationsCreateManyInput } from './locations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLocationsArgs {

    @Field(() => [LocationsCreateManyInput], {nullable:false})
    @Type(() => LocationsCreateManyInput)
    data!: Array<LocationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
