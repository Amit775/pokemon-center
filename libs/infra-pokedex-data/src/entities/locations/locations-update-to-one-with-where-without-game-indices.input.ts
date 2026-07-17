import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsUpdateWithoutGameIndicesInput } from './locations-update-without-game-indices.input';

@InputType()
export class LocationsUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;

    @Field(() => LocationsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutGameIndicesInput)
    data!: LocationsUpdateWithoutGameIndicesInput;
}
