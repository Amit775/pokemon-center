import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutLocationsInput } from './regions-update-without-locations.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutLocationsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => RegionsUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutLocationsInput)
    data!: RegionsUpdateWithoutLocationsInput;
}
