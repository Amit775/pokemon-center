import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutLocationGameIndicesInput } from './generations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutLocationGameIndicesInput } from './generations-create-or-connect-without-location-game-indices.input';
import { GenerationsUpsertWithoutLocationGameIndicesInput } from './generations-upsert-without-location-game-indices.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput } from './generations-update-to-one-with-where-without-location-game-indices.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput {

    @Field(() => GenerationsCreateWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutLocationGameIndicesInput)
    create?: GenerationsCreateWithoutLocationGameIndicesInput;

    @Field(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutLocationGameIndicesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutLocationGameIndicesInput;

    @Field(() => GenerationsUpsertWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutLocationGameIndicesInput)
    upsert?: GenerationsUpsertWithoutLocationGameIndicesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput)
    update?: GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput;
}
