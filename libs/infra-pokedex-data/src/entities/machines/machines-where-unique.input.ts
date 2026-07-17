import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesMachine_numberVersion_group_idCompoundUniqueInput } from './machines-machine-number-version-group-id-compound-unique.input';
import { MachinesWhereInput } from './machines-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';

@InputType()
export class MachinesWhereUniqueInput {

    @Field(() => MachinesMachine_numberVersion_group_idCompoundUniqueInput, {nullable:true})
    machine_number_version_group_id?: Identity<MachinesMachine_numberVersion_group_idCompoundUniqueInput>;

    @Field(() => [MachinesWhereInput], {nullable:true})
    AND?: Array<MachinesWhereInput>;

    @Field(() => [MachinesWhereInput], {nullable:true})
    OR?: Array<MachinesWhereInput>;

    @Field(() => [MachinesWhereInput], {nullable:true})
    NOT?: Array<MachinesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    machine_number?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: Identity<ItemsScalarRelationFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: Identity<MovesScalarRelationFilter>;
}
