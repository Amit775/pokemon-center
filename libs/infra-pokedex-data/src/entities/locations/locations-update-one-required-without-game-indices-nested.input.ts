import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutGameIndicesInput } from './locations-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutGameIndicesInput } from './locations-create-or-connect-without-game-indices.input';
import { LocationsUpsertWithoutGameIndicesInput } from './locations-upsert-without-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { LocationsUpdateToOneWithWhereWithoutGameIndicesInput } from './locations-update-to-one-with-where-without-game-indices.input';

@InputType()
export class LocationsUpdateOneRequiredWithoutGameIndicesNestedInput {

    @Field(() => LocationsCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsCreateWithoutGameIndicesInput)
    create?: Identity<LocationsCreateWithoutGameIndicesInput>;

    @Field(() => LocationsCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: Identity<LocationsCreateOrConnectWithoutGameIndicesInput>;

    @Field(() => LocationsUpsertWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsUpsertWithoutGameIndicesInput)
    upsert?: Identity<LocationsUpsertWithoutGameIndicesInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateToOneWithWhereWithoutGameIndicesInput, {nullable:true})
    @Type(() => LocationsUpdateToOneWithWhereWithoutGameIndicesInput)
    update?: Identity<LocationsUpdateToOneWithWhereWithoutGameIndicesInput>;
}
