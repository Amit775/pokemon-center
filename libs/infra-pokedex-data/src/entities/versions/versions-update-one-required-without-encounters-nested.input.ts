import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutEncountersInput } from './versions-create-or-connect-without-encounters.input';
import { VersionsUpsertWithoutEncountersInput } from './versions-upsert-without-encounters.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateToOneWithWhereWithoutEncountersInput } from './versions-update-to-one-with-where-without-encounters.input';

@InputType()
export class VersionsUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create?: VersionsCreateWithoutEncountersInput;

    @Field(() => VersionsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutEncountersInput;

    @Field(() => VersionsUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsUpsertWithoutEncountersInput)
    upsert?: VersionsUpsertWithoutEncountersInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateToOneWithWhereWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsUpdateToOneWithWhereWithoutEncountersInput)
    update?: VersionsUpdateToOneWithWhereWithoutEncountersInput;
}
