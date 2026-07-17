import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutTypeGameIndicesInput } from './generations-create-without-type-game-indices.input';

@InputType()
export class GenerationsCreateOrConnectWithoutTypeGameIndicesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutTypeGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutTypeGameIndicesInput)
    create!: GenerationsCreateWithoutTypeGameIndicesInput;
}
