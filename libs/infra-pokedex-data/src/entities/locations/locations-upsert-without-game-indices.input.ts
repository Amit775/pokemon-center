import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsUpdateWithoutGameIndicesInput } from './locations-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { LocationsCreateWithoutGameIndicesInput } from './locations-create-without-game-indices.input';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsUpsertWithoutGameIndicesInput {

    @Field(() => LocationsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutGameIndicesInput)
    update!: LocationsUpdateWithoutGameIndicesInput;

    @Field(() => LocationsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsCreateWithoutGameIndicesInput)
    create!: LocationsCreateWithoutGameIndicesInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;
}
