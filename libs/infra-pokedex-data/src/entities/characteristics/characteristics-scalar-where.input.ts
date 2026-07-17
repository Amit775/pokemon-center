import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class CharacteristicsScalarWhereInput {

    @Field(() => [CharacteristicsScalarWhereInput], {nullable:true})
    AND?: Array<CharacteristicsScalarWhereInput>;

    @Field(() => [CharacteristicsScalarWhereInput], {nullable:true})
    OR?: Array<CharacteristicsScalarWhereInput>;

    @Field(() => [CharacteristicsScalarWhereInput], {nullable:true})
    NOT?: Array<CharacteristicsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    gene_mod_5?: Identity<IntFilter>;
}
