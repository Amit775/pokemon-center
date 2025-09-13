import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateWithoutVersionGroupInput } from "../inputs/VersionsUpdateWithoutVersionGroupInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionsUpdateWithoutVersionGroupInput;
}
