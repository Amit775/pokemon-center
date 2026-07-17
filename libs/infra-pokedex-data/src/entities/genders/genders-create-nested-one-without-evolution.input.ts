import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GendersCreateWithoutEvolutionInput } from './genders-create-without-evolution.input';
import { Type } from 'class-transformer';
import { GendersCreateOrConnectWithoutEvolutionInput } from './genders-create-or-connect-without-evolution.input';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';

@InputType()
export class GendersCreateNestedOneWithoutEvolutionInput {

    @Field(() => GendersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateWithoutEvolutionInput)
    create?: GendersCreateWithoutEvolutionInput;

    @Field(() => GendersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => GendersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: GendersCreateOrConnectWithoutEvolutionInput;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    @Type(() => GendersWhereUniqueInput)
    connect?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;
}
