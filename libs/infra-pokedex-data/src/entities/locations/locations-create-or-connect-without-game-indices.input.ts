import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutGameIndicesInput } from './locations-create-without-game-indices.input';

@InputType()
export class LocationsCreateOrConnectWithoutGameIndicesInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => LocationsCreateWithoutGameIndicesInput)
    create!: Identity<LocationsCreateWithoutGameIndicesInput>;
}
