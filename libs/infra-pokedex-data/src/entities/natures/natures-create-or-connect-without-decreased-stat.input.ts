import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NaturesCreateWithoutDecreasedStatInput } from './natures-create-without-decreased-stat.input';

@InputType()
export class NaturesCreateOrConnectWithoutDecreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateWithoutDecreasedStatInput, {nullable:false})
    @Type(() => NaturesCreateWithoutDecreasedStatInput)
    create!: Identity<NaturesCreateWithoutDecreasedStatInput>;
}
