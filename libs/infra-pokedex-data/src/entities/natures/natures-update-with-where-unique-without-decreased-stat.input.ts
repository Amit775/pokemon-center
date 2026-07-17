import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesUpdateWithoutDecreasedStatInput } from './natures-update-without-decreased-stat.input';

@InputType()
export class NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateWithoutDecreasedStatInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutDecreasedStatInput)
    data!: NaturesUpdateWithoutDecreasedStatInput;
}
