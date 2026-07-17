import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutRegionInput } from './generations-create-without-region.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutRegionInput } from './generations-create-or-connect-without-region.input';
import { GenerationsCreateManyRegionInputEnvelope } from './generations-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [GenerationsCreateWithoutRegionInput], {nullable:true})
    @Type(() => GenerationsCreateWithoutRegionInput)
    create?: Array<GenerationsCreateWithoutRegionInput>;

    @Field(() => [GenerationsCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<GenerationsCreateOrConnectWithoutRegionInput>;

    @Field(() => GenerationsCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => GenerationsCreateManyRegionInputEnvelope)
    createMany?: GenerationsCreateManyRegionInputEnvelope;

    @Field(() => [GenerationsWhereUniqueInput], {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>>;
}
