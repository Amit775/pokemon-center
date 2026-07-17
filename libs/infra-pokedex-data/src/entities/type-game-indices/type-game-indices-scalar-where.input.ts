import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class TypeGameIndicesScalarWhereInput {

    @Field(() => [TypeGameIndicesScalarWhereInput], {nullable:true})
    AND?: Array<TypeGameIndicesScalarWhereInput>;

    @Field(() => [TypeGameIndicesScalarWhereInput], {nullable:true})
    OR?: Array<TypeGameIndicesScalarWhereInput>;

    @Field(() => [TypeGameIndicesScalarWhereInput], {nullable:true})
    NOT?: Array<TypeGameIndicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;
}
