import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutLocationsInput } from './regions-update-without-locations.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutLocationsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;

    @Field(() => RegionsUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutLocationsInput)
    data!: Identity<RegionsUpdateWithoutLocationsInput>;
}
