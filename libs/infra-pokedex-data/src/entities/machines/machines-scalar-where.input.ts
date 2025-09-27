import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MachinesScalarWhereInput {

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    AND?: Array<MachinesScalarWhereInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    OR?: Array<MachinesScalarWhereInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    NOT?: Array<MachinesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    machine_number?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;
}
