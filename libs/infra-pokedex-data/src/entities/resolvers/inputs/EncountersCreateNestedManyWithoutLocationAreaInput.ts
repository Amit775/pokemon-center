import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyLocationAreaInputEnvelope } from "../inputs/EncountersCreateManyLocationAreaInputEnvelope";
import { EncountersCreateOrConnectWithoutLocationAreaInput } from "../inputs/EncountersCreateOrConnectWithoutLocationAreaInput";
import { EncountersCreateWithoutLocationAreaInput } from "../inputs/EncountersCreateWithoutLocationAreaInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateNestedManyWithoutLocationAreaInput", {})
export class EncountersCreateNestedManyWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;
}
