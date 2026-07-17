import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateWithoutGameIndicesInput } from './locations-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { LocationsCreateWithoutGameIndicesInput } from './locations-create-without-game-indices.input';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsUpsertWithoutGameIndicesInput {

    @Field(() => LocationsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutGameIndicesInput)
    update!: Identity<LocationsUpdateWithoutGameIndicesInput>;

    @Field(() => LocationsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsCreateWithoutGameIndicesInput)
    create!: Identity<LocationsCreateWithoutGameIndicesInput>;

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: Identity<LocationsWhereInput>;
}
