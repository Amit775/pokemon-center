import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutLocationGameIndicesInput } from './generations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutLocationGameIndicesInput } from './generations-create-or-connect-without-location-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutLocationGameIndicesInput {

    @Field(() => GenerationsCreateWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutLocationGameIndicesInput)
    create?: Identity<GenerationsCreateWithoutLocationGameIndicesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutLocationGameIndicesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
