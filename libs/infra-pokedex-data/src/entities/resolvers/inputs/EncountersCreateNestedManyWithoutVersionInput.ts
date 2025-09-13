import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyVersionInputEnvelope } from "../inputs/EncountersCreateManyVersionInputEnvelope";
import { EncountersCreateOrConnectWithoutVersionInput } from "../inputs/EncountersCreateOrConnectWithoutVersionInput";
import { EncountersCreateWithoutVersionInput } from "../inputs/EncountersCreateWithoutVersionInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateNestedManyWithoutVersionInput", {})
export class EncountersCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutVersionInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;
}
