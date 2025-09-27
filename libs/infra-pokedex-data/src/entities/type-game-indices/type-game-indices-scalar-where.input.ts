import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
