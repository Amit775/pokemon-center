import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsCreateWithoutGameIndicesInput } from './locations-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutGameIndicesInput } from './locations-create-or-connect-without-game-indices.input';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class LocationsCreateNestedOneWithoutGameIndicesInput {

    @Field(() => LocationsCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsCreateWithoutGameIndicesInput)
    create?: LocationsCreateWithoutGameIndicesInput;

    @Field(() => LocationsCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: LocationsCreateOrConnectWithoutGameIndicesInput;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;
}
