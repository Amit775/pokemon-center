import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutAbilitiesInput } from './generations-create-or-connect-without-abilities.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutAbilitiesInput {

    @Field(() => GenerationsCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutAbilitiesInput)
    create?: GenerationsCreateWithoutAbilitiesInput;

    @Field(() => GenerationsCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutAbilitiesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
