import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NaturesUpdateWithoutIncreasedStatInput } from './natures-update-without-increased-stat.input';

@InputType()
export class NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateWithoutIncreasedStatInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutIncreasedStatInput)
    data!: Identity<NaturesUpdateWithoutIncreasedStatInput>;
}
