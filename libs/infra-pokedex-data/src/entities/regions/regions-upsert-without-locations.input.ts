import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsUpdateWithoutLocationsInput } from './regions-update-without-locations.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutLocationsInput {

    @Field(() => RegionsUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutLocationsInput)
    update!: RegionsUpdateWithoutLocationsInput;

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create!: RegionsCreateWithoutLocationsInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;
}
