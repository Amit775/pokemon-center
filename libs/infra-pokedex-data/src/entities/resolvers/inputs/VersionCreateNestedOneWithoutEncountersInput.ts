import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutEncountersInput } from "../inputs/VersionCreateOrConnectWithoutEncountersInput";
import { VersionCreateWithoutEncountersInput } from "../inputs/VersionCreateWithoutEncountersInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateNestedOneWithoutEncountersInput", {})
export class VersionCreateNestedOneWithoutEncountersInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: VersionCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;
}
