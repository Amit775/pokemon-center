import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesCreateWithoutIncreasedStatInput } from './natures-create-without-increased-stat.input';

@InputType()
export class NaturesCreateOrConnectWithoutIncreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateWithoutIncreasedStatInput, {nullable:false})
    @Type(() => NaturesCreateWithoutIncreasedStatInput)
    create!: NaturesCreateWithoutIncreasedStatInput;
}
