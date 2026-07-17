import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NaturesCreateWithoutIncreasedStatInput } from './natures-create-without-increased-stat.input';

@InputType()
export class NaturesCreateOrConnectWithoutIncreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateWithoutIncreasedStatInput, {nullable:false})
    @Type(() => NaturesCreateWithoutIncreasedStatInput)
    create!: Identity<NaturesCreateWithoutIncreasedStatInput>;
}
