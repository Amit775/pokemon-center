import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesUpdateInput } from './natures-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';

@ArgsType()
export class UpdateOneNaturesArgs {

    @Field(() => NaturesUpdateInput, {nullable:false})
    @Type(() => NaturesUpdateInput)
    data!: Identity<NaturesUpdateInput>;

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;
}
